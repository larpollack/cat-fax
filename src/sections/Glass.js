import React, { useLayoutEffect } from "react";
import glass from "../img/glass.png";
import paw from "../img/paw.png";
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

  useLayoutEffect(() => {
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".glassSection",
        start: "top +=800 top",
        // end: "bottom bottom",
      },
    });
    let del = 0;
    t2.set(["#A", "#B", "#C", "#D", "#E", "#F", "#G", "#H"], {
      autoAlpha: 0,
    })
      .to(
        "#A",
        {
          autoAlpha: 0.5,
        },
        (del += 10)
      )
      .to(
        "#B",
        {
          autoAlpha: 0.5,
        },
        (del += 0.35)
      )
      .to(
        "#C",
        {
          autoAlpha: 0.5,
        },
        (del += 0.35)
      )
      .to(
        "#D",
        {
          autoAlpha: 0.5,
        },
        (del += 0.35)
      )
      .to(
        "#E",
        {
          autoAlpha: 0.5,
        },
        (del += 0.35)
      )
      .to(
        "#F",
        {
          autoAlpha: 0.5,
        },
        (del += 0.35)
      )
      .to(
        "#G",
        {
          autoAlpha: 0.5,
        },
        (del += 0.35)
      )
      .to(
        "#H",
        {
          autoAlpha: 0.5,
        },
        (del += 0.35)
      );
  }, []);
  return (
    <div className="glassSection">
      <img src={glass} alt="glass" className="glassImg" />
      <div className="paws">
        <img src={paw} alt="pawA" id="A" className="paw a" />
        <img src={paw} alt="pawB" id="B" className="paw b" />
        <img src={paw} alt="pawC" id="C" className="paw c" />
        <img src={paw} alt="pawD" id="D" className="paw d" />
        <img src={paw} alt="pawE" id="E" className="paw e" />
        <img src={paw} alt="pawF" id="F" className="paw f" />
        <img src={paw} alt="pawG" id="G" className="paw g" />
        <img src={paw} alt="pawH" id="H" className="paw h" />
      </div>
    </div>
  );
};
