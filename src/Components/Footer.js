import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <h2 className='footerH2'>Contact</h2>

      <div className='contact'>

        <div className='contactSection'>
            <p>Téléphone : </p>
            <p> 06 24 66 24 51</p>
        </div>

        <div className='contactSection'>
            <p>Mail : </p>
            <p> antoinecarrette@hotmail.fr</p>
        </div>

        <div className='contactSection'>
            <p>Linkedin : </p>
            <a href='https://www.linkedin.com/in/antoine-carrette-070401b3/'><p className='linkF'>Cliquez ici</p></a>
        </div>

        <div className='contactSection'>
            <p>Github : </p>
            <a href='https://github.com/Eriuden'><p className='linkF'>Cliquez ici</p></a>
        </div>

      </div>

        
    
    </div>
  )
}
