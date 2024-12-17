import { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = (event) => {
    setTransformStyle('');
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className='relative size-full'>
      <video
        src={src}
        loop
        muted
        autoPlay
        className='absolute left-0
         top-0 size-full object-cover object-center'
      />
      <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
        <div>
          <h1 className='bento-title font-circular-web'>{title}</h1>
          {description && (
            <p className='mt-3 max-w-64 text-xs ms:text-base'>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className='bg-black pb-52'>
      <div className='comtainer mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
          <p className='font-circular-web text-lg text-blue-50'>
            Into the Metagame Layer
          </p>
          <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure atque
            quisquam modi sapiente, perspiciatis, reprehenderit quasi
            necessitatibus amet error quo labore minima fugiat sint?
          </p>
        </div>
        <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
          <BentoCard
            src='videos/feature-1.mp4'
            title='radient'
            description='A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.'
          />
        </BentoTilt>
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
          <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <BentoCard
              src='videos/feature-2.mp4'
              title='Zigma'
              description='An anime and gaming-inspired NFT collection - the IP primed for expansion.'
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard
              src='videos/feature-3.mp4'
              title='Nexus'
              description='A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.'
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard
              src='videos/feature-4.mp4'
              title='Azul'
              description='A cross-world AI agent - elevating your gameplay to be more fun and productive.'
            />
          </BentoTilt>
          <div className='bento-tilt_2'>
            <div className='flex size-full flex-col justify-center items-center bg-violet-300 p-5'>
              <h1 className='bento-title font-circular-web max-w-64 text-black'>
                More coming soon...
              </h1>
              <TiLocationArrow className='m-5 scale-[5] self-end' />
            </div>
          </div>
          <BentoTilt className='bento-tilt_2'>
            <video
              src='videos/feature-5.mp4'
              loop
              muted
              autoPlay
              className='size-full object-cover object-center'
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
