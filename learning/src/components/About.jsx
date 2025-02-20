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
    description: 'This is pretty cool, right?'
  },
  {
    image: '/imgs/html(1).jpg',
    title: 'HTML',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/imgs/figma.jpg',
    title: 'FIGMA',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/imgs/react.jpg',
    title: 'REACT',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/imgs/vue.jpg',
    title: 'VUE',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/imgs/js.jpg',
    title: 'JAVA SCRIPT',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/imgs/tailwind.jpg',
    title: 'TAILWIND',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/imgs/git.jpg',
    title: 'GITHUB',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/imgs/bootstrap.jpg',
    title: 'BOOTSTRAP',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/imgs/redux.jpg',
    title: 'REDUX TOOLKIT',
    description: 'This is pretty cool, right?'
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

      <div style={{ height: '100vh', position: 'relative', width: '100%', }} className='mx-auto'>
        <InfiniteMenu items={items} />
      </div>
    </motion.div>
  )
}

export default transition(About)