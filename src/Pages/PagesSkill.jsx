import React, { useEffect } from 'react'
import LogoSkill from '../components/LogoSkill.jsx'
import { faClock, faPeopleArrows, faLightbulb, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { animation, animationAppear } from '../assets/js/animation.js'


function PagesSkill({ slider }) {


    useEffect(() => {
    if(slider == 1)
    {
      animation('beforeSkill', 'desappear', 'flex', 3, 3)
      animationAppear('containerSkill', 'fadeIn', 'flex', 3, 4)
    }
  }, [slider])
  return (
    <>
        <h2 className={'beforeSkill title color-white'} id='beforeSkill'>You can see &nbsp;<span className={'underline'}>My skill</span></h2>
          <div className={ 'container-skill' } id='containerSkill'>
            <section className={ 'softSkill' } id='softSkill'>
              <ul className={ 'logo-softSkill'}>
                <li style={{'--color': '#FFDF64'}}><LogoSkill logo={faClock} name="gestion du temps"/></li>
                <li style={{'--color': '#8DC6FF'}}><LogoSkill logo={faPeopleArrows} name="communication"/></li>
                <li style={{'--color': '#F4EB30'}}><LogoSkill logo={faLightbulb} name="créativité"/></li>
                <li style={{'--color': '#E6D6F5'}}><LogoSkill logo={faMagnifyingGlassChart} name="L'esprit d'analyse"/></li>
              </ul>
            </section>
          </div>
    </>
    
  )
}

export default PagesSkill