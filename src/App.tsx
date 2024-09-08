import {
  About,
  Benefits,
  CTA, Footer,
  Header,
  Hero,
  LetsConnect,
  Press,
  Steps,
  Testimonials,
  WorkWithMe
} from "./components/Sections";


const App = () => {
  return (
    <>
      <Header/>
     <main>
       <Hero/>
       <Press/>
       <Testimonials/>
       <CTA/>
       <About/>
       <WorkWithMe/>
       <Benefits/>
       <Steps/>
       <LetsConnect/>
     </main>
      <Footer/>
    </>
  )
}

export default App
