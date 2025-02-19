import React, { useRef } from 'react'
import transition from '../transition'

import { motion, useScroll, useTransform } from 'motion/react'
const Ept = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", '-85%']);
  const background = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["#8b5cf6", "#000000", "#000000", "#8b5cf6"])
  return (
    <section className='section-container ept text-7xl ff-anton'>
      <article className="h-screen bg-red-500 w-full flex  flex-col items-center justify-between py-20">
        <span>Upper</span>
        <img height={100} width={200} src="/down-arrow.png" alt="" />
      </article>

      {/* scroll to view */}
      <section ref={targetRef} className="bio-scroll-container bg-violet-500 relative h-[300vh] w-full">
        <article className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ background }} className='h-screen absolute top-0 left-0 w-full transition-colors duration-300 ease-in-out z-0'>

          </motion.div>
          <motion.div style={{ x, background }} className='flex gap-4 relative z-[1]'>
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </article>
      </section>
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