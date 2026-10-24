(() => {
    "use strict";

    // Prevent duplicate initialization.
    if (window.__ultimateHeartEffect) return;
    window.__ultimateHeartEffect = true;

    const CONFIG = {
        heartsPerClick: 26,
        sparklesPerClick: 15,
        maxParticles: 220,

        // All particles disappear in less than one second.
        minDuration: 520,
        maxDuration: 850,

        minSize: 12,
        maxSize: 30,

        minDistance: 65,
        maxDistance: 220,

        enableRings: true,
        enableSparkles: true,
        enableSecondBurst: true,

        colors: [
            "#ff1744",
            "#ff2e63",
            "#ff4081",
            "#ff69b4",
            "#ff85a2",
            "#ffc0cb",
            "#ffffff",
            "#e91e63"
        ],

        hearts: ["♥", "♡", "❤", "💕", "💗", "💖", "💘"],
        sparkles: ["✦", "✧", "⋆", "✨", "·", "✶"]
    };

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    let activeParticles = 0;
    let lastTouchTime = 0;
    let layer;

    const random = (min, max) =>
        Math.random() * (max - min) + min;

    const pick = array =>
        array[Math.floor(Math.random() * array.length)];

    function initialize() {
        if (
            !document.body ||
            document.getElementById("ultimate-heart-layer")
        ) {
            return;
        }

        // Particle layer.
        layer = document.createElement("div");
        layer.id = "ultimate-heart-layer";

        Object.assign(layer.style, {
            position: "fixed",
            inset: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: "2147483647",
            contain: "strict"
        });

        // Animation styles.
        const style = document.createElement("style");
        style.id = "ultimate-heart-styles";

        style.textContent = `
            #ultimate-heart-layer .love-particle {
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                line-height: 1;
                white-space: nowrap;
                pointer-events: none;
                user-select: none;
                will-change: transform, opacity;
                transform-origin: center;
                animation: loveParticleFlight var(--duration) cubic-bezier(.15,.65,.25,1) forwards;
            }

            #ultimate-heart-layer .love-heart {
                filter: drop-shadow(0 0 5px currentColor);
            }

            @keyframes loveParticleFlight {
                0% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(.1) rotate(0deg);
                }

                12% {
                    opacity: 1;
                    transform:
                        translate(
                            calc(-50% + var(--dx) * .10),
                            calc(-50% + var(--dy) * .10)
                        )
                        scale(1.25)
                        rotate(var(--rotation));
                }

                35% {
                    opacity: 1;
                    transform:
                        translate(
                            calc(-50% + var(--dx) * .45),
                            calc(-50% + var(--dy) * .45 - 8px)
                        )
                        scale(.95)
                        rotate(calc(var(--rotation) * 1.3));
                }

                72% {
                    opacity: .8;
                    transform:
                        translate(
                            calc(-50% + var(--dx) * .78),
                            calc(-50% + var(--dy) * .78 - 20px)
                        )
                        scale(.65)
                        rotate(calc(var(--rotation) * 1.7));
                }

                100% {
                    opacity: 0;
                    transform:
                        translate(
                            calc(-50% + var(--dx)),
                            calc(-50% + var(--dy) - 30px)
                        )
                        scale(0)
                        rotate(calc(var(--rotation) * 2));
                }
            }

            #ultimate-heart-layer .love-ring {
                position: absolute;
                width: 18px;
                height: 18px;
                border: 2px solid var(--ring-color);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(.1);
                animation: loveRingExpansion 650ms ease-out forwards;
            }

            @keyframes loveRingExpansion {
                0% {
                    opacity: .9;
                    transform: translate(-50%, -50%) scale(.1);
                }

                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(9);
                }
            }

            #ultimate-heart-layer .love-flash {
                position: absolute;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: white;
                box-shadow:
                    0 0 5px white,
                    0 0 12px #ff69b4,
                    0 0 22px #ff1744;
                animation: loveFlash 500ms ease-out forwards;
            }

            @keyframes loveFlash {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(.2);
                }

                50% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1.8);
                }

                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0);
                }
            }

            @media (prefers-reduced-motion: reduce) {
                #ultimate-heart-layer .love-particle,
                #ultimate-heart-layer .love-ring,
                #ultimate-heart-layer .love-flash {
                    animation-duration: 200ms !important;
                }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(layer);

        function removeParticle(element) {
            if (!element.isConnected) return;

            element.remove();
            activeParticles = Math.max(0, activeParticles - 1);
        }

        function addParticle(element, duration) {
            if (activeParticles >= CONFIG.maxParticles) return false;

            activeParticles++;
            layer.appendChild(element);

            element.addEventListener("animationend", () => {
                removeParticle(element);
            }, { once: true });

            // Clean up even if animations are interrupted.
            window.setTimeout(
                () => removeParticle(element),
                duration + 150
            );

            return true;
        }

        function createFlyingParticle(x, y, options = {}) {
            const duration = reducedMotion
                ? 200
                : random(CONFIG.minDuration, CONFIG.maxDuration);

            const angle = options.angle ?? random(0, Math.PI * 2);
            const distance = options.distance ?? random(
                CONFIG.minDistance,
                CONFIG.maxDistance
            );

            const particle = document.createElement("span");
            particle.className = "love-particle";

            if (options.sparkle) {
                particle.textContent = pick(CONFIG.sparkles);
            } else {
                particle.classList.add("love-heart");
                particle.textContent = pick(CONFIG.hearts);
            }

            Object.assign(particle.style, {
                left: `${x}px`,
                top: `${y}px`,
                fontSize: `${options.size ?? random(CONFIG.minSize, CONFIG.maxSize)}px`,
                color: options.color ?? pick(CONFIG.colors),
                "--dx": `${Math.cos(angle) * distance}px`,
                "--dy": `${Math.sin(angle) * distance}px`,
                "--rotation": `${random(-180, 180)}deg`,
                "--duration": `${duration}ms`
            });

            addParticle(particle, duration);
        }

        function createRing(x, y, delay = 0) {
            if (!CONFIG.enableRings || reducedMotion) return;

            const ring = document.createElement("span");
            ring.className = "love-ring";

            ring.style.left = `${x}px`;
            ring.style.top = `${y}px`;
            ring.style.setProperty("--ring-color", pick(CONFIG.colors));

            ring.style.animationDelay = `${delay}ms`;

            // Account for the delayed animation in cleanup.
            addParticle(ring, 650 + delay);
        }

        function createFlash(x, y) {
            if (reducedMotion) return;

            const flash = document.createElement("span");
            flash.className = "love-flash";

            flash.style.left = `${x}px`;
            flash.style.top = `${y}px`;

            addParticle(flash, 500);
        }

        function explode(x, y, intensity = 1) {
            if (!layer.isConnected) return;

            createRing(x, y);
            createRing(x, y, 75);
            createFlash(x, y);

            const heartCount = reducedMotion
                ? 4
                : Math.round(CONFIG.heartsPerClick * intensity);

            for (let i = 0; i < heartCount; i++) {
                createFlyingParticle(x, y);
            }

            if (CONFIG.enableSparkles && !reducedMotion) {
                for (let i = 0; i < CONFIG.sparklesPerClick; i++) {
                    createFlyingParticle(x, y, {
                        sparkle: true,
                        size: random(10, 21),
                        distance: random(30, 160)
                    });
                }
            }

            if (CONFIG.enableSecondBurst && !reducedMotion) {
                window.setTimeout(() => {
                    if (!layer.isConnected) return;

                    for (let i = 0; i < 7; i++) {
                        createFlyingParticle(
                            x + random(-22, 22),
                            y + random(-22, 22),
                            {
                                size: random(10, 21),
                                distance: random(25, 100)
                            }
                        );
                    }
                }, 90);
            }
        }

        // Mouse, touch, and stylus support.
        document.addEventListener("pointerdown", event => {
            if (!event.isPrimary) return;

            if (event.pointerType === "mouse" && event.button !== 0) {
                return;
            }

            const now = performance.now();

            if (
                event.pointerType !== "mouse" &&
                now - lastTouchTime < 80
            ) {
                return;
            }

            lastTouchTime = now;
            explode(event.clientX, event.clientY);
        }, { passive: true });

        // Allow other scripts to trigger the effect.
        window.loveHeartExplosion = explode;

        console.log("💗 Ultimate Romantic Particle Engine is ready!");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, {
            once: true
        });
    } else {
        initialize();
    }
})();
