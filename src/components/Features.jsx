import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const FeatCard = ({ children, classContainer = "" }) => {
  const [newTransform, setnewTransform] = useState("");
  const [shadoBox, setshadoBox] = useState("");
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const rotatex = (relativeY - 0.5) * 5;
    const rotatey = (relativeX - 0.5) * -5;

    const mainTransform = `perspective(700px) rotateX(${rotatex}deg) rotateY(${rotatey}deg) scale3d(.96, .96, .96)`;
    setnewTransform(mainTransform);

    const shadowX = (relativeX * 2 - 1) * 15;
    const shadowY = (relativeY * 2 - 1) * 15;
    const shadow = `${shadowX}px ${shadowY}px 32px #656fe24f `;
    setshadoBox(shadow)
  };

  const handleMouseLeave = () => {
    setnewTransform("");
    setshadoBox("");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={classContainer}
      style={{ transform: newTransform, boxShadow: shadoBox }}
    >
      {children}
    </div>
  );
};

const CardVideo = ({ src, title, caption, isCommingSoon }) => {
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });
  const [visibilty, setvisibilty] = useState(0);
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();

    setmousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => setvisibilty(0);
  const handleMouseEnter = () => setvisibilty(1);

  return (
    <div className="relative size-full cursor-grab active:cursor-grabbing">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute size-full select-none left-0 top-0 object-cover object-center scroll-stager"
      />

      <div className="relative z-10 size-full flex flex-col justify-between py-5 px-6 text-violet-50">
        <div>
          <h2 className="bento-title w-fit special-font cursor-text">{title}</h2>
          <p className="mt-3 text-sm max-w-64 cursor-text md:text-base">{caption}</p>
        </div>

        {isCommingSoon && (
          <div
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/25 font-semibold"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: visibilty,
                background: `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20 text-base" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-32">
      <div className="container mx-auto px-3.5 md:px-11">
        <div className="py-12 pt-20 px-5 text-lg text-blue-30      font-circular-web">
          <p>Into the Metagame Layer</p>
          <p className="max-w-md opacity-50 mt-1">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <FeatCard classContainer="border-hsla relative mb-10 h-96 md:h-[60vh] overflow-hidden rounded-md w-full transition-all duration-300 hover:border-white/40">
          <CardVideo
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            caption="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isCommingSoon
          />
        </FeatCard>

        <div className="h-[135vh] w-full grid grid-cols-2 grid-rows-3 gap-8">
          <FeatCard classContainer="border-hsla bento-tilt_1 row-span-1 md:!col-span-2 md:row-span-2 lg:!col-span-1">
            <CardVideo
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              caption="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isCommingSoon
            />
          </FeatCard>

          <FeatCard classContainer="border-hsla bento-tilt_1 row-span-1 ms-32 md:!col-span-1 md:ms-0">
            <CardVideo
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              caption="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isCommingSoon
            />
          </FeatCard>

          <FeatCard classContainer="border-hsla bento-tilt_1 row-span-1 me-32 md:!col-span-1 md:me-0">
            <CardVideo
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              caption="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isCommingSoon
            />
          </FeatCard>

          <FeatCard classContainer="bento-tilt_2 group">
            <div className="bg-violet-10 size-full p-5 flex flex-col justify-between">
              <h1 className="special-font bento-title max-w-64 text-black rotate-y-25 group-hover:rotate-y-0 transition-all duration-500 origin-left">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>
              <TiLocationArrow className="bento-title self-end m-5 scale-[3] " />
            </div>
          </FeatCard>

          <FeatCard classContainer="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              autoPlay
              muted
              className="object-center object-cover size-full"
            />
          </FeatCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
