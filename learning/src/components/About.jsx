import React, { useRef } from 'react'
import transition from '../transition'
import {motion} from 'motion/react'
const About = () => {
  const constraintsRef = useRef(null)

    return (
        <motion.div ref={constraintsRef} style={constraints}>
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.5}
                style={box}
            />
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