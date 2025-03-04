import React, { useEffect, useRef, useState } from 'react'
import transition from '../transition'
import { useScroll, motion, useTransform } from 'motion/react';
import Waves from './Waves/WavesLoader';
import ImageToAscii from './ImageToAscii';
import demo from '/demo.png'
const Home = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({

    target: targetRef,

  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", '-85%']);
  return (
    <section className='section-container home text-7xl ff-anton'>
      <section className='h-[50vh] bg-red-500'>
        uppersection
      </section>
      <section ref={targetRef} className='relative h-[300vh] bg-purple-500 '>
        <div className="sticky top-0  flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className='flex gap-4'>
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
      <div className='relative h-auto w-full z-50 overflow-hidden'>
        <ImageToAscii imagePath={demo} outputWidth={50}/>
        {/* <Waves lineColor="#000"

          backgroundColor="rgba(255, 255, 255, 1)"

          waveSpeedX={0.02}

          waveSpeedY={0.01}

          waveAmpX={40}

          waveAmpY={20}

          friction={0.9}

          tension={0.01}

          maxCursorMove={120}

          xGap={12}

          yGap={36} /> */}
      </div>
    </section>
  )
}

export default transition(Home)

const Card = ({ card }) => {

  return (

    <div

      key={card.id}

      className="group relative h-[450px] w-[300px] overflow-hidden bg-neutral-200"

    >

      <div

        style={{

          backgroundImage: `url(${card.url})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

        }}

        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"

      ></div>

      <div className="absolute inset-0 z-10 grid place-content-center">

        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">

          {card.title}

        </p>

      </div>

    </div>

  );

};



const cards = [

  {

    url: "https://images.unsplash.com/photo-1735252723552-138dc3fb6f14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Title 1",

    id: 1,

  },

  {

    url: "https://plus.unsplash.com/premium_photo-1728925517201-858acab5c931?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Title 2",

    id: 2,

  },

  {

    url: "https://plus.unsplash.com/premium_photo-1691031429697-649d03109b84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Title 3",

    id: 3,

  },

  {

    url: "https://plus.unsplash.com/premium_photo-1691031427689-20cc869fac9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Title 4",

    id: 4,

  },

  {

    url: "https://plus.unsplash.com/premium_photo-1691031428660-c12ab72d3f01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Title 5",

    id: 5,

  },

  {

    url: "https://plus.unsplash.com/premium_photo-1691031429084-894ffad104ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",

    title: "Title 6",

    id: 6,

  },

  {

    url: "https://plus.unsplash.com/premium_photo-1691030922754-27de8eb5a4be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Title 7",

    id: 7,

  },

];