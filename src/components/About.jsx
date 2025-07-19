import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useGSAP(()=>{
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#clip-img" ,
            start: "center center" ,
            end: "+=600 center" ,
            scrub: 0.5,
            pin: true,
            pinSpacer: true,
        },
    });

    tl.to(".mask-clip-path" ,{
        width: '100vw' ,
        height: '100vh',
        borderRadius: 0,
    });
  })
  return (
    <section className='w-screen min-h-dvh'>
        <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
            <p className="text-sm font-medium font-general">
            Welcome to Zentry
            </p>

            <AnimatedTitle title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"  classContainer="!text-black text-center" />
            

            <div className="about-subtext">
                <p>The Game of Games begins—your life, now an epic  MMORPG</p>
                <p className="text-gray-500">
                    Zentry unites every player from countless games and platforms, both
                    digital and physical, into a unified Play Economy
                </p>
            </div>
        </div>
        <div className="h-dvh w-screen select-none" style={{perspective: '500px'}} id='clip-img'>
            <div className="mask-clip-path about-image">
                <img src="img/about.webp" alt='about background' className='size-full absolute top-0 left-0 object-cover ' />
            </div>
        </div>
    </section>
  )
}

export default About