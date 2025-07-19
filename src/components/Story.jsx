import React, { useRef  } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import gsap from "gsap";

const Story = () => {
    const imgRef = useRef(null);

    const handleMouseMove = (e)=> {
        if(!imgRef.current) return;

        const {clientX ,clientY} = e;
        const rect = imgRef.current.getBoundingClientRect();
        const positionX = clientX -rect.left ;
        const positionY = clientY -rect.top ;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotatex = ((positionY - centerY) / centerY) * -10;
        const rotatey = ((positionX - centerX) / centerX) * 10;

        gsap.to(imgRef.current ,{
            rotateX: rotatex ,
            rotateY: rotatey ,
            duration: 0.3,
            transformPerspective: 500,
            ease: "power1.inOut",
        })
    };

    const handleMouseLeave = ()=> {
        if(imgRef) {
            gsap.to(imgRef.current ,{
                rotateX: 0,
                rotateY: 0,
                duration: 0,
                ease: "power1.inOut",
            });
        }
    };

  return (
    <div className="min-h-dvh w-screen bg-black text-blue-30">
      <div className="size-full flex flex-col gap-3 py-12 items-center pb-20">
        <p className="font-general text-sm uppercase">
            the multiversal ip world
        </p>

        <div className="relative size-full">
            <AnimatedTitle 
              title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>" 
              classContainer="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />
        </div>

        <div className="story-img-container">
            <div className="story-img-mask">
                <div className="story-img-content">
                    <img 
                      ref={imgRef}
                      onMouseMove={handleMouseMove} 
                      onMouseEnter={handleMouseLeave} 
                      onMouseLeave={handleMouseLeave} 
                      onMouseUp={handleMouseLeave}
                      src="img/entrance.webp" 
                      alt="entrance img"
                      className="motion-img"
                      />
                </div>
            </div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
                <p className="mt-3 max-w-sm font-semibold font-circular-web text-center md:text-start">
                    Where realms converge, lies Zentry and the boundless pillar.
                    Discover its secrets and shape your fate amidst infinite
                    opportunities.
                </p>
                <Button title="discover prologue" id="discover" styleClass="mt-4 ml-1" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Story;
