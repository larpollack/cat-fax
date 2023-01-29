import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export const FunFacts = () => {
  useLayoutEffect(() => {
    const slider = {
      boxes: gsap.utils.toArray(".catPic"),
      pics: gsap.utils.toArray(".slide"),
      mainTl: gsap.timeline({
        defaults: {
          duration: 1,
          ease: "none",
        },
        scrollTrigger: {
          trigger: ".factsSection",
          start: "top top +=400",
          end: "+=" + window.innerHeight * 2,
          pin: ".factsSection",
          pinSpacer: true,
          scrub: true,
          // markers: true,
        },
      }),
      mainTween: function (el) {},
      setNextPics: function () {
        slider.boxes.forEach((box, i) => {
          i > 0 && gsap.set(box.firstElementChild, { scale: 1 });
        });
      },
      setTl: function () {
        slider.mainTl
          .to(".factsDiv.factsDiv1", { yPercent: 100 })
          .to(".catPic.catPic1", { yPercent: -100 })
          .to(".catPic.catPic1 > .slide", { yPercent: 100 }, ">-1")
          .to(".catPic.catPic2 > .slide", { scale: 1 }, ">-1")
          .to(".catPic.catPic2", { yPercent: -100 })
          .to(".catPic.catPic2 > .slide", { yPercent: 100 }, ">-1")
          .to(".factsDiv.factsDiv2", { yPercent: 100 })
          .to(".catPic.catPic3 > .slide", { scale: 1 }, ">-1")
          .to(".catPic.catPic3", { yPercent: -100 })
          .to(".catPic.catPic3 > .slide", { yPercent: 100 }, ">-1")
          .to(".factsDiv.factsDiv3", { yPercent: 100 })
          .to(".catPic.catPic4 > .slide", { scale: 1 }, ">-1")
          .to(".catPic.catPic4", { yPercent: -100 })
          .to(".catPic.catPic4 > .slide", { yPercent: 100 }, ">-1")
          .to(".factsDiv.factsDiv4", { yPercent: 100 })
          .to(".catPic.catPic5 > .slide", { scale: 1 }, ">-1")
          .to(".catPic.catPic5", { yPercent: -100 })
          .to(".catPic.catPic5 > .slide", { yPercent: 100 }, ">-1")
          .to(".factsDiv.factsDiv5", { yPercent: 100 })
          .to(".catPic.catPic6 > .slide", { scale: 1 }, ">-1");
      },
    };

    slider.setNextPics();

    slider.setTl();
    return () => {
      if (slider) slider.mainTl.kill();
    };
  }, []);

  return (
    <div className="factsSection">
      <div className="catPicsWrapper">
        <div className="catPics">
          <div className="catPic catPic1">
            <div className="slide"></div>
          </div>
          <div className="catPic catPic2">
            <div className="slide"></div>
          </div>
          <div className="catPic catPic3">
            <div className="slide"></div>
          </div>
          <div className="catPic catPic4">
            <div className="slide"></div>
          </div>
          <div className="catPic catPic5">
            <div className="slide"></div>
          </div>
          <div className="catPic catPic6">
            <div className="slide"></div>
          </div>
        </div>
      </div>
      <div className="factsWrapper">
        <div className="factsDiv factsDiv1">
          <div className="factsText">
            Cats typically sleep <br />
            12-16 hours a day.
          </div>
        </div>
        <div className="factsDiv factsDiv2">
          <div className="factsText">
            Cats meow to <br />
            communicate with humans.
          </div>
        </div>
        <div className="factsDiv factsDiv3">
          <div className="factsText">
            Abraham Lincoln had 4 cats <br />
            in the White House.
          </div>
        </div>
        <div className="factsDiv factsDiv4">
          <div className="factsText">
            A green cat was born <br />
            in Denmark in 1995.
          </div>
        </div>
        <div className="factsDiv factsDiv5">
          <div className="factsText">
            A cat learns about the same <br />
            as a 2- to 3-year old child.
          </div>
        </div>
        <div className="factsDiv factsDiv6">
          <div className="factsText">
            Cat's nose prints are <br />
            as unique as human fingerprints.
          </div>
        </div>
      </div>
    </div>
  );
};
