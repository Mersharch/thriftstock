import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export default function Carousel() {
  const animation = { duration: 40000, easing: (t: number) => t };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 3,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
      setLoaded(true);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <Image
            src="/images/IMG_1228.JPG"
            alt="logo"
            width={500}
            height={500}
            priority
            className="object-contain keen-slider__slide aspect-square flex-1 h-[100dvh]"
          />
          <Image
            src="/images/IMG_1229.JPG"
            alt="logo"
            width={500}
            height={500}
            priority
            className="object-contain keen-slider__slide aspect-square flex-1 h-[100dvh]"
          />
          <Image
            src="/images/IMG_1228.JPG"
            alt="logo"
            width={500}
            height={500}
            priority
            className="object-contain keen-slider__slide aspect-square flex-1 h-[100dvh]"
          />
          <Image
            src="/images/IMG_1229.JPG"
            alt="logo"
            width={500}
            height={500}
            priority
            className="object-contain keen-slider__slide aspect-square flex-1 h-[100dvh]"
          />
          <Image
            src="/images/IMG_1229.JPG"
            alt="logo"
            width={500}
            height={500}
            priority
            className="object-contain keen-slider__slide aspect-square flex-1 h-[100dvh]"
          />
          <Image
            src="/images/IMG_1229.JPG"
            alt="logo"
            width={500}
            height={500}
            priority
            className="object-contain keen-slider__slide aspect-square flex-1 h-[100dvh]"
          />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}
