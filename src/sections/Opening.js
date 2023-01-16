import React, { useLayoutEffect, useRef } from "react";
import "../App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Opening = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let elem = sectionRef.current;
    gsap.fromTo(
      ".quote",
      { xPercent: 30 },
      { duration: 3, xPercent: 0, ease: "bounce" }
    );

    let trigger = ScrollTrigger.create({
      trigger: elem,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);
  return (
    <div ref={sectionRef} className="openingSection">
      <div className="quote">
        In ancient times cats <br />
        were worshipped as gods. <br />
        They have not forgotten this.
      </div>
    </div>
  );
};
