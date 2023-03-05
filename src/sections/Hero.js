import React, { useLayoutEffect } from "react";
import backgroundVideo from "../vid/smoke.mp4";
import "../App.css";
import gsap from "gsap";

export const Hero = () => {
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add({
    
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: 48em)`,
      
    
    }, (context) => {
    
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let { isDesktop } = context.conditions;
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
      x: isDesktop ? "-=150" : "-=100",
      rotation: 0.01,
      force3D: false,
    }).to(".vt2", {
      x: isDesktop ? "+=150" : "+=100",
      rotation: 0.01,
      force3D: false,
    });
    return () => {
      if (t1) t1.kill();
    };
  })
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
