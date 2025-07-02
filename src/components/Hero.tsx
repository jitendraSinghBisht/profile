import Particles from 'react-tsparticles';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4"
    >
      <Particles
        options={{
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: '#22d3ee' },
            links: { enable: true, distance: 150, color: '#22d3ee' },
            move: { enable: true, speed: 1 },
            size: { value: 3 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="blob top-10 left-10 w-40 h-40 bg-cyan-400 mix-blend-soft-light animate-blob"></div>
      <div className="blob bottom-20 right-20 w-60 h-60 bg-pink-500 mix-blend-soft-light animate-blob animation-delay-2000"></div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hey, I'm Vijay</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto">
          Backend Engineer • API Wizard • Cloud Enthusiast
        </p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg text-white"
        >
          View Projects ↓
        </motion.a>

        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_0yfsb3a1.json"
          style={{ height: 192, width: 192, marginTop: 32, opacity: 0.8 }}
        />
      </motion.div>
    </section>
  );
}
