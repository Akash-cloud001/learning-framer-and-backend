import React, { useRef } from 'react'
import transition from '../transition'
import { motion } from 'motion/react'
import Orb from './Orb/Orb'
import InfiniteMenu from './InfiniteMenu/InfiniteMenu'

const items = [
  {
    image: 'https://picsum.photos/300/300',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }

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