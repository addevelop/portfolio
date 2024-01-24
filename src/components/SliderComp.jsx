import '../assets/css/slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
function SliderComp() {
  return (
    <nav className={'container-slider'}>
      <section className={'container-count'}>
      <div></div>
      <div></div>
      <div></div>
      </section>
      <section className="arrow-slide">
        <FontAwesomeIcon className={'arrow'} icon={faArrowUp} />
        <FontAwesomeIcon className={'arrow'} icon={faArrowDown} />

      </section>
    </nav>
  )
}

export default SliderComp