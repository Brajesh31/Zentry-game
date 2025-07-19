import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const PreviewVid = ({ child }) => {
  const innerRef = useRef(null);
  const outterRef = useRef(null);

  const [isMove, setisMove] = useState(false);

  const handleMouseMove = ({ clientY, clientX, currentTarget }) => {
    const rectangle = currentTarget.getBoundingClientRect();
    const positionX = clientX - (rectangle.left + rectangle.width / 2);
    const positionY = clientY - (rectangle.top + rectangle.height / 2);

    if (isMove) {
      // Animate the Main container
      gsap.to(outterRef.current, {
        x: positionX,
        y: positionY,
        rotationX: -positionY / 2,
        rotationY: positionX / 2,
        transformPerspective: 500,
        duration: 1,
        ease: "power1.inOut",
      });
      // Animate the content
      gsap.to(innerRef.current, {
        x: -positionX,
        y: positionY,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  };

  useEffect(() => {
    if (!isMove) {
      // Remove the animation from the main container
      gsap.to(outterRef.current, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 1,
        ease: "power1.inOut",
      });

      // Remove the animation from the content
      gsap.to(innerRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [isMove]);

  return (
    <div
      ref={outterRef}
      className="absolute z-50 size-full rounded-lg"
      style={{ perspective: "500px" }} 
      onMouseEnter={()=> setisMove(true)} 
      onMouseLeave={()=> setisMove(false)} 
      onMouseMove={handleMouseMove} 
    >
      <div
        ref={innerRef}
        className="origin-center rounded-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        {child}
      </div>
    </div>
  );
};

export default PreviewVid;
