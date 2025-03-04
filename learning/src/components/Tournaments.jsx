import React from 'react'
import transition from '../transition'
import Scene from './WrappedText/Scene'
const Tournaments = () => {
  return (
    <section className='section-container tournaments'>
      <div className="h-[70vh]">
        <Scene />
      </div>
    </section>
  )
}

export default transition(Tournaments)