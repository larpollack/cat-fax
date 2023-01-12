import React, { useRef, useLayoutEffect } from "react";
import windowbg from "../img/openwindow_bg.jpg";
import catstanding from "../img/cat_standing.png";
import window from "../img/openwindow_transparent.png";
import blinds from "../img/blinds.png";
import blindsScrunch from "../img/blinds_scrunch.png";
import "../App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Window = () => {
  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".windowSection",
        start: "top +=400 top",
        end: "bottom +=500 bottom",
        markers: true,
        scrub: true,
      },
    });
    t1.to(
      ".blinds",
      {
        duration: 4,
        scaleY: 0.2,
        y: "-=50",
        rotation: 0.01,
        force3D: false,
      },
      "key1"
    )
      .to(
        ".blinds-scrunch",
        {
          duration: 4,
          y: "-=240",
          rotation: 0.01,
          force3D: false,
        },
        "key1"
      )
      .to(".cat-standing", {
        duration: 4,
        y: "-=120",
        rotation: 0.01,
        force3D: false,
      })
      .fromTo(
        ".wt1",
        { opacity: 0, x: "150px" },
        { duration: 3, opacity: 1, x: 0 }
      )
      .fromTo(
        ".wt2",
        { opacity: 0, x: "150px" },
        { duration: 3, opacity: 1, x: 0 }
      )
      .fromTo(
        ".wt3",
        { opacity: 0, x: "150px" },
        { duration: 4, opacity: 1, x: 0 }
      );
    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <div className="windowSection">
      <div className="imgContainer">
        <img className="window-bg" alt="window-bg" src={windowbg} />
        <img className="cat-standing" alt="cat-standing" src={catstanding} />
        <div className="black-block" />
        <img className="window" alt="window" src={window} />
        <img className="blinds" alt="blinds" src={blinds} />
        <img
          className="blinds-scrunch"
          alt="blinds-scrunch"
          src={blindsScrunch}
        />
      </div>
      <div className="windowText">
        <div className="wt1">It always</div>
        <div className="wt2">feels like</div>
        <div className="wt3">somebody's watching me...</div>
      </div>
    </div>
  );
};
