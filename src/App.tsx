import {
  Header,
  Hero,
} from './components/Sections';
import { lazy, Suspense } from 'react';


const Benefits = lazy(() => import('./components/Sections/Benefits/Benefits.tsx'));
const Testimonials = lazy(() => import('./components/Sections/Testimonials/Testimonials.tsx'));
const Steps = lazy(() => import('./components/Sections/Steps/Steps.tsx'));
const CTA = lazy(() => import('./components/Sections/CTA/CTA.tsx'));
const About = lazy(() => import('./components/Sections/About/About.tsx'));
const LetsConnect = lazy(() => import('./components/Sections/LetsConnect/LetsConnect.tsx'));
const WorkWithMe = lazy(() => import('./components/Sections/WorkWithMe/WorkWithMe.tsx'));
const Footer = lazy(() => import('./components/Sections/Footer/Footer.tsx'));

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <CTA />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WorkWithMe />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Steps />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <LetsConnect />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
