import { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap';
import Button from './Button';

const Story = () => {
  const frameRef = useRef('null');

  const handleMouseLeave = (event) => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inOut',
    });
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
      <div className='flex flex-col size-full items-center py-10 pb-24'>
        <p className='font-general text-sm uppercase md:text-[10px]'>
          the multiversal ip world
        </p>
        <div className='relative size-full'>
          <AnimatedTitle
            containerClass='relative z-10 mt-5 pointer-events-none mix-blend-difference'
            title='The story of <br /> the hidden realm'
            sectionId='#story'
          />

          <div className='story-img-container'>
            <div className='story-img-mask'>
              <div className='story-img-content'>
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src='/img/entrance.webp'
                  alt='entrance.webp'
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='-mt-96 flex w-full justify-center md:b-0 md:me-44 md:justify-end'>
          <div className='flex h-full w-fit flex-col items-center md:items-start'>
            <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
              Where realm converge, lies Zentry and the boudless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button id='realm-button' title='discover prologue' containerClass='mt-5' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
