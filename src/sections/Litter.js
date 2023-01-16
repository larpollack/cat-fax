import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import "../App.css";

export const Litter = () => {
  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".litterSection",
        start: "top +=400 top",
        end: "bottom +=300 bottom",
        // markers: true,
        scrub: true,
      },
    });
    t1.set(".litterText", { opacity: 0 }).to(".litterText", {
      opacity: 1,
    });
    return () => {
      if (t1) t1.kill();
    };
  }, []);
  return (
    <div className="litterSection">
      <div className="litterTitle">
        This is my litter box.
        <br />
        There are many like it,
        <br />
        but this one is mine.
      </div>
      <div className="litterText">
        My litter box is my best friend.
        <br />
        It is my life. I must master it as <br />
        I must master my life. My litter box,
        <br /> without me, is useless.
      </div>
    </div>
  );
};
