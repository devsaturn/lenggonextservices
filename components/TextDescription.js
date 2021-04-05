import React from 'react'
import Typewriter from 'typewriter-effect';
import style from '../styles/Typeeffect.module.css'

function TextDescription() {
    return (
            <div className="typewriter">
                <h3>Vous êtes{'  '}<Typewriter
                    options={{
                        strings: ['donneur d\'ordres ?', 'maîtrise d\'ouvrage ?', 'maîtrise d\'œuvre ?','entreprise titulaire ?'],
                        autoStart: true,
                        loop: true,
                    }}
                    /> 
                </h3>
            </div>

    )
}

export default TextDescription
