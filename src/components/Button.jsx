import { useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";

const Button = ({ title, id, leftIcon, rightIcon, styleClass }) => {
  
  const audioRef = useRef(new Audio('audio/btn.wav'));
  audioRef.current.preload = "auto";
  const mainShow = useRef(null);
  
  const HandleMouseEnter = ()=>{
    if(audioRef.current){
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    };
    gsap.to(mainShow.current ,{
      skewX: "7deg",
          borderRadius: "4px",
          duration: 0.2,
          ease: "elastic.in",
    })
  };

  const HandleMouseLeave = ()=> {
    gsap.to("#show", {
      skewX: 0,
      borderRadius: "60",
      duration: 0.2,
      ease: "elastic.inOut",
    });
  }

  return (
    <div id={id} className="w-fit relative z-10 border-none outline-none bg-transparent rounded-full">
      <button
        id="show" 
        ref={mainShow}
        className={clsx(
          "w-fit bg-violet-50 text-black px-5 py-2.5 cursor-pointer perspective-[100px] origin-left skew-0 overflow-hidden border-none outline-none group rounded-full",
          styleClass
        )}
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseLeave}
      >
        {leftIcon}

        <div className="overflow-hidden font-semibold relative inline-flex font-general text-[10px] md:text-xs uppercase">
          <span className="translate-y-0 skew-y-0 transition-all duration-500 group-hover:translate-y-[-165%] group-hover:skew-y-12">
            {title}
          </span>
          <span className="absolute translate-y-[165%] skew-y-12 transition-all duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {title}
          </span>
        </div>
        {rightIcon}
      </button>
    </div>
  );
};

export default Button;
