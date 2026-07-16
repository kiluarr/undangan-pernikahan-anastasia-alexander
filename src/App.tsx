import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingScreen } from './components/LoadingScreen';
import { Cover } from './components/Cover';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MusicPlayer } from './components/MusicPlayer';
import { Hero } from './components/sections/Hero';
import { LoveStory } from './components/sections/LoveStory';
import { Couple } from './components/sections/Couple';
import { Countdown } from './components/sections/Countdown';
import { Events } from './components/sections/Events';
import { Rsvp } from './components/sections/Rsvp';
import { Wishes } from './components/sections/Wishes';
import { Gallery } from './components/sections/Gallery';
import { Gift } from './components/sections/Gift';
import { Family } from './components/sections/Family';
import { Moments } from './components/sections/Moments';
import { Faq } from './components/sections/Faq';
import { Footer } from './components/sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <AnimatePresence>
            {!opened && <Cover onOpen={() => setOpened(true)} />}
          </AnimatePresence>

          {opened && (
            <>
              <ScrollProgress />
              <Navbar />
              <main className="relative z-10">
                <Hero />
                <LoveStory />
                <Couple />
                <Countdown />
                <Events />
                <Rsvp />
                <Wishes />
                <Gallery />
                <Gift />
                <Family />
                <Moments />
                <Faq />
                <Footer />
              </main>
              <WhatsAppButton />
              <MusicPlayer autoPlay />
            </>
          )}
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
