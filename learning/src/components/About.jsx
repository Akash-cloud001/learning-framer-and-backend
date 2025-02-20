import React, { useRef } from 'react'
import transition from '../transition'
import { motion } from 'motion/react'
import Orb from './Orb/Orb'
import InfiniteMenu from './InfiniteMenu/InfiniteMenu'
//catch put image revert and in 2 power 
const items = [
  {
    image: '/imgs/vscode.jpg',
    title: 'VSCODE',
  },
  {
    image: '/imgs/html(1).jpg',
    title: 'HTML',
  },
  {
    image: '/imgs/figma.jpg',
    title: 'FIGMA',
  },
  {
    image: '/imgs/react.jpg',
    title: 'REACT',
  },
  {
    image: '/imgs/vue.jpg',
    title: 'VUE',
  },
  {
    image: '/imgs/js.jpg',
    title: 'JAVA SCRIPT',
  },
  {
    image: '/imgs/tailwind.jpg',
    title: 'TAILWIND',
  },
  {
    image: '/imgs/git.jpg',
    title: 'GITHUB',
  },
  {
    image: '/imgs/bootstrap.jpg',
    title: 'BOOTSTRAP',
  },
  {
    image: '/imgs/redux.jpg',
    title: 'REDUX TOOLKIT',
  },

];
const About = () => {
  const constraintsRef = useRef(null)

  return (
    <motion.div ref={constraintsRef}>
      {/* <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.5}
                style={box}
            /> */}
      <h1 className="text-8xl text-center">ORB</h1>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      
      <div className='flex items-center justify-start gap-3 pb-10 pl-10'>
        <div className='flex items-center justify-center gap-1'>
          <span className='h-1 w-1 rounded-full bg-white '></span>
          <span className='h-1 w-1 rounded-full bg-white '></span>
        </div>
        <p>
          [ SKILLS ]
        </p>
      </div>
      <div style={{ position: 'relative', }} className='mx-auto w-[90%] sm:w-[95%]  rounded-2xl overflow-hidden h-[85vh] '>
        <InfiniteMenu items={items} />
      </div>
      <div className='h-10'>

      </div>
    </motion.div>
  )
}

export default transition(About)