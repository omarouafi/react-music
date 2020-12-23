import React from 'react'
import './nav.styles.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Nav = ({libraryHidden,setLibraryToggle}) => {
    return(
        <nav>
            <h1>Waves</h1>
            <button onClick={()=>setLibraryToggle(!libraryHidden)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
                </button>
        </nav>
    )
}


export default Nav;
