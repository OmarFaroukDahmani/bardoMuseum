import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursorRef.current, {
        x: clientX - 10,   
        y: clientY - 10,
        duration: 0.25,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 h-[20px] w-[20px] bg-white rounded-full mix-blend-difference z-[55]"
    />
  );
}
