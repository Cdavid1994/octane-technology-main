import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Metrics />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
