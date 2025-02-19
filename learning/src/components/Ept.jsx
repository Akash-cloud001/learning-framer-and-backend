import React, { useRef } from 'react'
import transition from '../transition'

import { motion, useScroll, useTransform } from 'motion/react'
const Ept = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["130%", '-85%']);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.3, 1])
  // const height = useTransform(scrollYProgress, [0,0.1, ["10%", '100vw']])
  // const height = useTransform(scrollYProgress, [0,0.1, ["10%", '100vw']])
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["2000px", '0px']);
  const top = useTransform(scrollYProgress, [0, 0.2], ["50%", "0%"]);
  const background = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ["#000 ", "#000", "#000", "#ef4444 "])
  return (
    <section className='section-container ept text-7xl ff-anton'>
      <article className="h-screen bg-red-500 w-full flex  flex-col items-center justify-between py-20">
        <span>Upper</span>
        <img height={100} width={200} src="/down-arrow.png" alt="" />
      </article>

      {/* scroll to view */}
      <section ref={targetRef} className="bio-scroll-container bg-red-500 relative h-[500vh] w-full">
        <article className="sticky top-0  h-screen w-full items-center overflow-hidden">
          <motion.div style={{ background, top, scale, borderRadius, transformOrigin: "center center" }} className='absolute h-screen w-screen top-1/2 transition-all duration-300 ease-linear z-0 overflow-hidden flex items-center'>
            <div className="word-container absolute left-1/2 -translate-x-1/2 z-0 flex flex-col items-center justify-center h-full text-[25vh] gap-10">
              <span>B</span>
              <span>I</span>
              <span>O</span>
            </div>
            <motion.div style={{ x }} className='flex gap-4 relative z-10'>
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </motion.div>
          </motion.div>
        </article>
      </section>

      <article className="h-screen bg-red-500 w-full flex  flex-col items-center justify-between py-20">
        <img height={100} width={200} src="/down-arrow.png" alt="" className='rotate-180' />

        <span>Lower</span>
      </article>
    </section>
  )
}

export default transition(Ept)


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