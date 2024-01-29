import { useEffect, useState } from 'react'
import SliderComp from '../components/SliderComp'
import '../assets/css/landingPage.css'
import { writeText } from '../assets/js/type.js'
import { getScroll } from '../assets/js/slider.js'
import PagesSkill from './PagesSkill.jsx'
import PageHardSkill from './PageHardSkill.jsx'






function LandingPage() {
  
  let [ slider, setSlider] = useState(0);
  useEffect(() => {
    writeText('title', 3900, 800, 1000, ['WEB DEVELOPER,', 'Adrien,']);
    document.addEventListener('wheel', () => {
      setSlider(getScroll);
    })
  }, [])
  
  
  return (
    <>
      <SliderComp />

      <main id="ID-slider">
        <section className={'page'}>
          <div className={' display-flex align-center color-white w-50 h-100 position-relative float-right'}>
            <div>
              <h2 className={'title'}>HI, I’am <span className={'underline'} id='title'>WEB DEVLOPER ,</span><span class="trait">|</span></h2><br />
              <p className={'text'}>
              and you are on my port folio that I developed with <span className={'color-react'}>react.js</span>.
              </p>
            </div>
          </div>  
        </section>
        <section className={'page'}>
          <PagesSkill slider={ slider }/>
        </section>
        <section className={'page'}>
          <PageHardSkill />
        </section>
      </main>
    </>
    
  )
}

export default LandingPage