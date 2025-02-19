import { useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import { About, Cp, Enquire, Ept, Home, Registrations, Testimonials, Tournaments } from "./routes";
import Navbar from './components/Navbar';
import { AnimatePresence } from 'motion/react';
import { FloatingDock } from './components/FloatingDock';
function App() {
  const location = useLocation();
  return (
    <>
      <main className='main-container app'>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/ept' element={<Ept />} />
          </Routes>
        </AnimatePresence>
        <section className='fixed z-50 w-fit left-1/2 -translate-x-1/2 bottom-10'>
        <FloatingDock />
        </section>
      </main>
    </>
  )
}

export default App
