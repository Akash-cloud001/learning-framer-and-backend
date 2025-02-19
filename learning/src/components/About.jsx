import React, { useRef } from 'react'
import transition from '../transition'
import { motion } from 'motion/react'
import Orb from './Orb/Orb'
import InfiniteMenu from './InfiniteMenu/InfiniteMenu'

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }

];
const About = () => {
  const constraintsRef = useRef(null)

  return (
    <motion.div ref={constraintsRef} style={constraints}>
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

      <div style={{ height: '600px', position: 'relative', width: '80%', }} className='mx-auto'>
        <InfiniteMenu items={items} />
      </div>
    </motion.div>
  )
}
const constraints = {
  width: '100%',
  height: '80%',
  backgroundColor: "var(--hue-1-transparent)",
  borderRadius: 10,
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 10,
}
export default transition(About)