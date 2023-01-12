import React, { useLayoutEffect } from "react";
import backgroundVideo from "../vid/smoke.mp4";
import "../App.css";
import gsap from "gsap";

export const Hero = () => {
  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".vidContainer",
        start: "top +=400 top",
        end: "bottom bottom",
        // markers: true,
        scrub: true,
      },
    });
    t1.to(".vt1", {
      x: "-=150",
      rotation: 0.01,
      force3D: false,
    }).to(".vt2", {
      x: "+=150",
      rotation: 0.01,
      force3D: false,
    });
    return () => {
      if (t1) t1.kill();
    };
  }, []);
  return (
    <div className="heroSection">
      <div className="vidContainer">
        <video
          className="smokeVid"
          src={backgroundVideo}
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="vidText">
        <div className="vt1">You've gotta</div>
        <div className="vt2">be kitten me</div>
      </div>
    </div>
  );
};
