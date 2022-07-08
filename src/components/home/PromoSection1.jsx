import React from 'react'

import kinza from '../../images/kinza-promo.png'
import acnenetto from '../../images/acnenetto-promo.png'

const PromoSection1 = () => {
  return (
    <section id='promo-1'>

    <p className='heading-text'>ButlrStudio is a hands<br />
    on creative agency that builds unique digital experiences. We help tell stories through
    result oriented branding and evidence based web-design.</p>

    <div className="flex-container">

      <div className="col">
        <img className='kinza' src={ kinza } alt="Kinza Promotional Photo" />
        <p className='heading'>Kinza International</p>
        <p>Serving Vision 2030</p>
      </div>

      <div className="col">
        <img className='acnenetto' src= { acnenetto } alt="Acnenetto Promotional Photo" />
        <p className='heading'>Acnenetto</p>
        <p>Rejuvenating skin one person at a time</p>
      </div>

    </div>

    </section>
  )
}

export default PromoSection1