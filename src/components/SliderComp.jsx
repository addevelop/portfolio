import '../assets/css/slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
function SliderComp() {
  return (
    <nav className={'container-slider'}>
      <section className={'container-count'}>
      <div className={'sliderNb'}></div>
      <div className={'sliderNb'}></div>
      <div className={'sliderNb'}></div>
      </section>
    </nav>
  )
}

export default SliderComp