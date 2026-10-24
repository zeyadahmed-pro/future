(() => {
  const ambient = document.getElementById('ambientAudio');
  const cold = document.getElementById('coldAudio');
  const yuji = document.getElementById('yujiAudio');
  const toggle = document.getElementById('musicToggle');
  const mute = document.getElementById('musicMute');
  const volume = document.getElementById('musicVolume');
  const progress = document.getElementById('audioProgress');
  const name = document.getElementById('trackName');
  const status = document.getElementById('musicStatus');
  const trackSelect = document.getElementById('audioTrackSelect');
  const progressFill = progress?.querySelector('span');
  const tracks = [ambient, cold, yuji].filter(Boolean);
  let active = ambient || cold || null;
  if (!active && yuji) active = yuji;
  tracks.forEach(track => {
    track.pause();
    track.autoplay = false;
  });
  const labels = new Map([
    [ambient, 'EYES OFF YOU — AMBIENT'],
    [cold, 'COLD BLOODED — SPED UP'],
    [yuji, 'DESTROY IT ALL — SLOWED']
  ]);

  function isMuted() {
    return !active || active.muted;
  }

  function syncControls() {
    if (toggle) {
      toggle.textContent = active && !active.paused ? '❚❚' : '▶';
      toggle.setAttribute('aria-label', active && !active.paused ? 'Pause music' : 'Play music');
    }
    if (mute) {
      mute.textContent = isMuted() ? '🔇' : '🔊';
      mute.setAttribute('aria-label', isMuted() ? 'Unmute music' : 'Mute music');
    }
    if (volume && active) volume.value = String(active.volume);
    if (progress && active) {
      const percentage = Number.isFinite(active.duration) && active.duration > 0
        ? active.currentTime / active.duration * 100
        : 0;
      progress.setAttribute('aria-valuenow', String(percentage));
      progress.setAttribute('aria-valuetext', `${Math.floor(percentage)}% played`);
      if (progressFill) progressFill.style.width = `${percentage}%`;
    }
    if (name) name.textContent = active ? labels.get(active) || 'AUDIO ARCHIVE' : 'No track available';
    if (trackSelect && active) trackSelect.value = active.id;
    if (status && active && !active.error) {
      status.textContent = active.paused ? 'Ready to play' : 'Now playing';
    }
  }

  async function play() {
    if (!active) {
      if (status) status.textContent = 'No audio track is available.';
      return false;
    }
    try {
      await active.play();
      syncControls();
      return true;
    } catch (error) {
      if (status) {
        status.textContent = error.name === 'NotAllowedError'
          ? 'Playback was blocked. Press Play to try again.'
          : 'Could not play this track. Check that its audio file is available.';
      }
      return false;
    }
  }

  function pause() {
    if (active) active.pause();
    syncControls();
  }

  function setActive(audio) {
    if (!audio) return false;
    if (active !== audio) {
      const muted = isMuted();
      active?.pause();
      if (active) active.currentTime = 0;
      active = audio;
      tracks.forEach(track => { track.muted = muted; });
    }
    syncControls();
    return true;
  }

  function setMuted(muted) {
    tracks.forEach(track => { track.muted = muted; });
    syncControls();
  }

  toggle?.addEventListener('click', () => {
    if (!active) return;
    if (active.paused) play();
    else pause();
  });
  mute?.addEventListener('click', () => setMuted(!isMuted()));
  volume?.addEventListener('input', () => {
    const level = Math.max(0, Math.min(1, Number(volume.value)));
    tracks.forEach(track => { track.volume = level; });
    syncControls();
  });
  trackSelect?.addEventListener('change', () => {
    const selectedTrack = tracks.find(track => track.id === trackSelect.value);
    if (selectedTrack) {
      const wasPlaying = active && !active.paused;
      setActive(selectedTrack);
      if (wasPlaying) play();
    }
  });
  tracks.forEach(track => {
    ['play', 'pause', 'volumechange', 'timeupdate', 'loadedmetadata', 'ended', 'error'].forEach(event => {
      track.addEventListener(event, () => {
        if (track !== active) return;
        if (event === 'error' && status) {
          status.textContent = 'Could not load this track. Check that its audio file is available.';
        } else {
          syncControls();
        }
      });
    });
  });

  if (active) {
    const initialVolume = Math.max(0, Math.min(1, Number(volume?.value ?? 0.45)));
    tracks.forEach(track => { track.volume = initialVolume; });
  }
  syncControls();

  window.VenomAudio = {
    play, pause,
    unlock: play,
    setMuted,
    isMuted,
    toggleMute() { setMuted(!isMuted()); },
    setAmbient() { return setActive(ambient); },
    setCold() { return setActive(cold); },
    setYuji() { return setActive(yuji); }
  };
})();
