import React from 'react'
import Typewriter from 'typewriter-effect';
import style from '../styles/Typeeffect.module.css'

function TextDescription() {
    return (
            <div className="typewriter">
                <h3>Vous êtes{'  '}<Typewriter
                    options={{
                        strings: ['Donneur d\'ordres ?', 'Maîtrise d\'ouvrage ?', 'Entreprise titulaire ?'],
                        autoStart: true,
                        loop: true,
                    }}
                    /> 
                </h3>
            </div>

    )
}

export default TextDescription
