import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import PageMarquee from './components/PageMarquee'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <PageMarquee />
      <About />
      <Tokenomics />
      <PageMarquee />
      <Roadmap />
      <Footer />
    </>
  )
}
