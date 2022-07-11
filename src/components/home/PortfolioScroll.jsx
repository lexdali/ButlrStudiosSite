import React from 'react'
import { useState } from 'react'

//Components
import Popup from '../globalC/Popup'

//Images Imports
import at from '../../images/logos/at.svg'
import cc from '../../images/logos/cc.png'
import nocsima from '../../images/logos/nocsima.svg'
import pp from '../../images/logos/pp.svg'
import rh from '../../images/logos/rh.svg'
import sdtc from '../../images/logos/sdtc.svg'

const PortfolioScroll = () => {

  const a = "Hover over a logo";
  const b = "Hold down your shift key and scroll to see all of our clients";

  const [instructions, setInstructions] = useState(a);

  const handleInstructionsChange = e => {
    if(e.type === "mouseenter") setInstructions(b);
    if(e.type === "mouseleave") {
      setInstructions(a);

      console.log(document.getElementsByClassName('grid-container')[0].scroll({left: 0, behavior: "smooth"}))

      //window.scroll({left: 0, behavior: "smooth"});
    }
  }

  return (
    <section onMouseEnter={ handleInstructionsChange } onMouseLeave={ handleInstructionsChange } id='portfolio-scroll'>
      <Popup trigger={ false } >
        <h3>This is my Popup!</h3>
      </Popup>

      <div className="text"><p>{ instructions }</p></div>

      <div className="grid-container snaps-inline">
        <div className="logos"><img src={ at } alt="" /></div>
        <div className='logos'><img src={ cc } alt="" /></div>
        <div className="logos"><img src={ nocsima } alt="" /></div>
        <div className="logos"><img src={ pp } alt="" /></div>
        <div className="logos"><img src={ rh } alt="" /></div>
        <div className="logos"><img src={ sdtc } alt="" /></div>
        <div className="logos"></div>
        <div className="logos"></div>
        <div className="logos"></div>
      </div>
    </section>
  )
}

export default PortfolioScroll