import { useRef, useEffect } from "react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, classContainer }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const Gcontext = gsap.context(() => {
      const text_tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "150 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      text_tl.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0 ,0 ,0) rotateX(0deg) rotateY(0deg) ",
        ease: 'power1.inOut',
        stagger: 0.02,
      })
    }, containerRef);

    return () => Gcontext.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", classContainer)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word special-font"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
