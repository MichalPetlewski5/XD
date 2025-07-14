import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBirthdayCake, FaHeart, FaCat, FaMusic } from 'react-icons/fa';
import racuch1 from '../src/assets/20250707_000529.jpg';
import racuch2 from '../src/assets/Snapchat-478988954.jpg'
import racuch3 from '../src/assets/Snapchat-1233642195.jpg'
import Countdown from './components/Countdown';

export default function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      <AnimatePresence>
        {!showMain && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[url('https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg')] bg-cover bg-center flex flex-col items-center gap-5 justify-center min-h-screen"
          >
            <h1 className='text-5xl font-bold bg-gradient-to-r from-pink-500  to-red-600 bg-clip-text text-transparent'>Kocham Cię</h1>
            <h2 className='text-4xl font-semibold'>❤️❤️❤️</h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMain(true)}
              className="text-xl px-6 py-3 rounded-2xl shadow-xl backdrop-blur-md bg-white/60 font-semibold"
            >
              YAAY
            </motion.button>
          </motion.div>
        )}

        {showMain && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gradient-to-b from-pink-100 to-pink-300 min-h-screen overflow-y-auto"
          >
            <div className="text-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-2 animate-bounce">
                <FaBirthdayCake className="text-pink-500" /> Wszystkiego najlepszego, kochanie
              </h1>
              <p className="text-2xl md:text-xl mb-8">Z okazji Twoich 16 urodzin, życzę Ci wszystkiego najlepszego, dużo zdrowia i aby wszyscy kochali cie tak jak ja❤️</p>
              <img
                src="https://www.giftjaipur.com/image/cache/catalog/products%20images/heart-shape-i-love-you-cake-328x328.jpg"
                alt="Birthday Cake"
                className="mx-auto w-48 md:w-64 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Lil Peep Section */}
            <section className="p-6 bg-gradient-to-r from-black via-purple-500 to-pink-500 text-white text-center rounded-2xl m-4">
              <h2 className="text-3xl font-semibold mb-2 flex justify-center items-center gap-2">
                <FaMusic /> Kocham cię jak Peep kochał Emmę🖤
              </h2>
              <p className="mb-2">✨"...But to me, girl, you're so much more than gorgeous, so much more than perfect.."✨</p>
              <div className='flex'>
                <img
                  src="https://i.pinimg.com/736x/d4/af/43/d4af430b7a21ced1b1a24c9666270d6e.jpg"
                  alt="Lil Peep"
                  className="mx-auto w-40 md:w-52 rounded-xl shadow-md"
                />
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXh7FrbzNR9QnCXu1eRj0S5-fdyYVE4H8MG2mzHlM49ooSF7KknAcAWPgCd8Soh-AnGI&usqp=CAU"
                alt="Lil Peep"
                className="mx-auto w-40 md:w-52 rounded-xl shadow-md"
              />

              </div>

            </section>

            {/* Cat Section */}
            <section className="p-6 bg-teal-400 text-center rounded-2xl m-4">
              <h2 className="text-3xl font-semibold mb-2 flex justify-center items-center gap-2">
                <FaCat /> KOOOTKII
              </h2>
              <p className="mb-2 text-lg font-semibold">Bo jesteś słodsza niż racuch</p>
              <div className='flex flex-wrap gap-5'>
                <img
                src={racuch1}
                alt="Cute Cat"
                className="mx-auto w-40 md:w-52 rounded-xl shadow-md hover:rotate-6 transition-transform duration-500"
              />
              <img
                src={racuch2}
                alt="Cute Cat"
                className="mx-auto w-40 md:w-52 rounded-xl shadow-md hover:rotate-6 transition-transform duration-500"
              />
              <img
                src={racuch3}
                alt="Cute Cat"
                className="mx-auto w-40 md:w-52 rounded-xl shadow-md hover:rotate-6 transition-transform duration-500"
              />
              <img
                src="https://i.ytimg.com/vi/vH8kYVahdrU/maxresdefault.jpg"
                alt="Cute Cat"
                className="mx-auto w-40 md:w-52 rounded-xl shadow-md hover:rotate-6 transition-transform duration-500"
              />

              </div>
            </section>

            {/* Love Section */}
            <section className="p-6 bg-red-200 text-center rounded-2xl m-4">
              <h2 className="text-3xl font-semibold mb-2 flex justify-center items-center gap-2">
                <FaHeart className="text-red-500" /> Kocham cieeee!!!!
              </h2>
              <p className="mb-2">Wszystkiego najlepszego skarbie ❤️</p>
              <div className='flex gap-5 flex-wrap mb-5'>
                <div className="mx-auto w-40 h-60 md:w-52 p-5 rounded-xl shadow-md border border-solid border-black bg-slate-100">Tu</div>
                <div className="mx-auto w-40 h-60 md:w-52 p-5 rounded-xl shadow-md border border-solid border-black bg-slate-100">Wstawimy</div>
                <div className="mx-auto w-40 h-60 md:w-52 p-5 rounded-xl shadow-md border border-solid border-black bg-slate-100">Wspólne zdjecia (jak zrobimy XD)</div>
              </div>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-5xl"
              >
                ❤️
              </motion.div>
            </section>
            <Countdown />
            <h1 className='mt-2 text-center font-semibold'>Zrobione z miłością dla mojej kochanej Amelki</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}