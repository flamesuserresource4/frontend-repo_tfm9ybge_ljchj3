import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Departments from './components/Departments'
import Pricing from './components/Pricing'
import VisualShowcase from './components/VisualShowcase'
import AnimatedStats from './components/AnimatedStats'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <VisualShowcase />
      <ProblemSolution />
      <AnimatedStats />
      <Features />
      <Departments />
      <CTA />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
