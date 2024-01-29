import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function LogoSkill(props) {
  return (
    <>
        <FontAwesomeIcon icon={props.logo} /><span> { props.name }</span>
    </>
  )
}

export default LogoSkill