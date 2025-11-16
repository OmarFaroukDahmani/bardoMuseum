// HorizontalScrollCarousel.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Standalone HorizontalScrollCarousel that listens to window scroll and
 * calculates progress based on this section's position in the viewport.
 *
 * Props:
 * - cards: [{ id, url, title }]
 * - height: number (vh) - how tall the section should be (default 300)
 * - cardSize: number (px) - base card width/height (default 420)
 * - gap: number (px) - gap between cards (default 24)
 * - debug: boolean - set true to see measurements in console
 */
export default function HorizontalScrollCarousel({
  cards = [],
  height = 300,
  cardSize = 420,
  gap = 24,
  debug = false,
}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  // measure all needed sizes
  const measure = () => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return null;

    const rect = section.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const bottom = rect.bottom + window.scrollY;
    const viewportHeight = window.innerHeight;

    // how long the section is considered for the animation:
    // from when top enters bottom of viewport -> to when bottom leaves top of viewport
    const start = top - viewportHeight;
    const end = bottom;

    const totalScrollLength = Math.max(end - start, 1);

    // track width vs container width to know max horizontal travel
    const containerWidth = section.clientWidth;
    const trackWidth = track.scrollWidth;

    if (debug) {
      console.log({
        top,
        bottom,
        start,
        end,
        totalScrollLength,
        containerWidth,
        trackWidth,
      });
    }

    return { start, end, totalScrollLength, containerWidth, trackWidth };
  };

  useEffect(() => {
    if (!cards || cards.length === 0) return;

    let ticking = false;
    let lastTranslate = 0;

    const handle = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const measurement = measure();
        if (!measurement) {
          ticking = false;
          return;
        }

        const { start, totalScrollLength, containerWidth, trackWidth } = measurement;
        const scrollY = window.scrollY;
        let progress = (scrollY - start) / totalScrollLength;
        progress = Math.min(Math.max(progress, 0), 1); // clamp 0..1

        // how far the track should move (positive value), we want to move left so translate is negative
        const maxTravel = Math.max(trackWidth - containerWidth, 0);

        const x = -maxTravel * progress;

        // small smoothing (lerp)
        const smooth = 0.15;
        lastTranslate = lastTranslate + (x - lastTranslate) * smooth;

        // set state only if changed enough (avoid huge re-renders)
        if (Math.abs(lastTranslate - translateX) > 0.5) {
          setTranslateX(lastTranslate);
        }

        ticking = false;
      });
    };

    // initial measure + render
    handle();

    // add listeners
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);

    // also observe resize of track (images loading)
    const ro = new ResizeObserver(handle);
    if (sectionRef.current) ro.observe(sectionRef.current);
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.join?.(","), cardSize, gap]); // re-run when cards list changes

  return (
    <section
      ref={sectionRef}
      style={{ height: `${height}vh` }}
      className="relative w-full overflow-hidden"
      aria-label="Horizontal scroll carousel"
    >
      {/* sticky viewport area */}
      <div className="sticky top-0 left-0 right-0 h-screen flex items-center">
        {/* track container */}
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
            transition: "transform 0.06s linear", // tiny transition for visual smoothness
            paddingLeft: gap,
            paddingRight: gap,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-xl shadow-xl flex-shrink-0"
              style={{
                width: cardSize,
                height: cardSize,
                marginRight: gap,
                backgroundColor: "#111",
              }}
            >
              {/* background image as cover */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${card.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.6s ease",
                }}
                className="group-hover:scale-105"
              />

              {/* caption / title */}
              <div className="absolute inset-0 z-10 flex items-end p-6 pointer-events-none">
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: 6,
                  }}
                >
                  <h3 style={{ color: "white", fontWeight: 800, fontSize: 20 }}>
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
