import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImgclipBox = ({ src, clipPath }) => {
  return (
    <div className={clipPath}>
      <img src={src} alt={src} />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="my-24 mt-44 sm:mt-0 w-screen px-10 min-h-80">
      <div className="bg-black relative rounded-lg py-24 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 h-full hidden sm:block overflow-hidden w-72 lg:left-20 lg:w-96">
          <ImgclipBox
            src="img/contact-1.webp"
            clipPath="contact-clip-path-1 translate-x-2"
          />

          <ImgclipBox
            src="img/contact-2.webp"
            clipPath="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="flex flex-col relative z-10 text-violet-50 items-center text-center">
          <p className="font-general mb-9 text-xs uppercase font-semibold">
            Join Zentry
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of
             <br /> 
             g<b>a</b>ming t<b>o</b>gether. "
            classContainer="!text-white !text-center"
          />

          <Button id="contact-us" title="contact us" styleClass="mt-8" />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImgclipBox
            src="img/swordman-partial.webp"
            clipPath="md:scale-125 absolute"
          />

          <ImgclipBox
            src="img/swordman.webp"
            clipPath="md:scale-125 sword-man-clip-path"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
 