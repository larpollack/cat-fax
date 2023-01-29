import React, { useLayoutEffect } from "react";
import glass from "../img/glass.png";
import "../App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const Glass = () => {
  useLayoutEffect(() => {
    let t1 = ScrollTrigger.create({
      trigger: ".glassSection",
      anticipatePin: 1,
      start: "top top",
      end: "+=" + 2.5 * window.innerHeight,
      pin: true,
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);
  return (
    <div className="glassSection">
      <img src={glass} alt="glass" className="glassImg" />
    </div>
  );
};
