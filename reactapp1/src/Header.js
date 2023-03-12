import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa9, faBars, faEnvelope, faHamburger, faMarsAndVenus, faElevator } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faBars} />
const other_icon = <FontAwesomeIcon icon={faElevator} />

//ReactDOM.render(element, document.body)


export default function Header() {
  return (
    <>
  
    <ul className='nav'>
        <i>{element}</i>

        <li><a href='#'>LINKS</a></li>
        <i>{other_icon}</i>
        <li>Link2</li>
    </ul>

    </>
  )
}
