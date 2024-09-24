import {
  About,
  Benefits,
  CTA,
  Footer,
  Header,
  Hero,
  LetsConnect,
  Steps,
  Testimonials,
  WorkWithMe,
} from './components/Sections';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <CTA />
        <About />
        <WorkWithMe />
        <Steps />
        <Benefits />
        <LetsConnect />
      </main>
      <Footer />
    </>
  );
};

export default App;
