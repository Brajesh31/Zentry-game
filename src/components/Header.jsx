import {React ,useEffect,useRef ,useState} from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import clsx from 'clsx';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
const Header = () => {

    const [isActive, setisActive] = useState(false);
    const [isAudioPlay, setisAudioPlay] = useState(false);
    const audio = useRef(new Audio('audio/link.wav'));
    // audio.current.preload = "auto";
    const audioRef = useRef(null);
    const mainConatiner = useRef(null);

    const [isNavVisibale, setisNavVisibale] = useState(false);
    const [lastScrollY, setlastScrollY] = useState(0);

    const {y: currenrScrollY} = useWindowScroll();

    useEffect(()=>{
        if(currenrScrollY === 0){
            setisNavVisibale(true);
            mainConatiner.current.classList.remove('floating-nav');
        } else if(currenrScrollY > lastScrollY){
            setisNavVisibale(false);
            mainConatiner.current.classList.add('floating-nav');
        } else if(currenrScrollY < lastScrollY){
            setisNavVisibale(true);
            mainConatiner.current.classList.add('floating-nav');
        }

        setlastScrollY(currenrScrollY);
    } ,[currenrScrollY ,lastScrollY]);

    useEffect(()=>{
        gsap.to(mainConatiner.current ,{
            y: isNavVisibale ? 0 : -100,
            opacity: isNavVisibale ? 1: 0,
            duration: 0.2,
        });
    } ,[isNavVisibale])

    // play sound Effect in Hover
    const onLinkHover = ()=>{
        audio.current.currentTime = 0;
        audio.current.play();
    };

    // add 'active' class to play bg music
    const playMusic = ()=> {
        setisActive((prev)=> !prev);
        setisAudioPlay((prev)=> !prev);
        if(!isAudioPlay){
            audio.current.play();
        }
    }

    useEffect(()=>{
        if(isAudioPlay){
            audioRef.current.play();
        } else{
            audioRef.current.pause();
        }
    } ,[isAudioPlay]);



  return (
    <div ref={mainConatiner} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-4 overflow-hidden  rounded-md'>
        <header className='px-5 w-full absolute top-1/2 -translate-y-1/2'>
            <nav className='w-full h-full flex items-center justify-between'>
                <div className="flex items-center gap-5">
                    <img src="img/logo.png" alt="logo" className='size-10 rounded-full select-none cursor-pointer object-contain object-center' />
                    <Button title="Products" id="product-button" rightIcon={<TiLocationArrow />} 
                    styleClass="flex gap-1 items-center" />

                    <Button title="whitepaper" id="white-paper" 
                    styleClass="lg:flex gap-1 items-center hidden" />
                </div>

                <div className="flex items-center">
                    {navItems.map((item) => (
                        <a href="#" key={item.toLowerCase()} className='nav-hover-btn' onMouseEnter={onLinkHover}>
                            {item}
                        </a>
                    ))}
                    <button onClick={playMusic} className="flex items-center space-x-0.5 ml-8 cursor-pointer">
                        {[2 ,4 ,1, 3].map((chart) =>(
                            <div
                            className={clsx("indicator-line" ,{active: isActive})} 
                            key={chart} 
                            style={{animationDelay: `${chart * 0.12}s`}}
                            />
                        ))} 
                        <audio ref={audioRef} loop src="audio/main.mp3" />
                    </button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header