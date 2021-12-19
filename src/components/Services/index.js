import React from 'react'
import Icon1 from '../../images/Icon1.png'
import Icon2 from '../../images/Icon2.png'
import Icon3 from '../../images/Icon3.png'
import Icon4 from '../../images/Icon4.png'
import Icon5 from '../../images/Icon5.png'
import Icon6 from '../../images/Icon6.png'

import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesH2,
    ServicesH1,
    ServicesIcon,
    ServicesP,
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
           <ServicesH1> Premiere of the Week </ServicesH1>
           <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1}/>
                  <ServicesH2>Escape Room</ServicesH2>
                  <ServicesP>English</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon2}/>
                  <ServicesH2>Venom</ServicesH2>
                  <ServicesP>English</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon3}/>
                  <ServicesH2>Spiderman</ServicesH2>
                  <ServicesP>English</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon4}/>
                  <ServicesH2>Ring</ServicesH2>
                  <ServicesP>Hindi</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon5}/>
                  <ServicesH2>8-Bit Christmas</ServicesH2>
                  <ServicesP>English</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon6}/>
                  <ServicesH2>SpaceWalker</ServicesH2>
                  <ServicesP>English</ServicesP>
              </ServicesCard>
           </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;