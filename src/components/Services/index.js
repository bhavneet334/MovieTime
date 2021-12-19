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
           <ServicesH1> Our Services</ServicesH1>
           <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1}/>
                  <ServicesH2>DIGITAL SAVINGS AND SPENDING ACCOUNTS</ServicesH2>
                  <ServicesP>We help reduce your fees and increase overall revenue</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon2}/>
                  <ServicesH2>HOME LOANS</ServicesH2>
                  <ServicesP>Wake up in your dream home with easy to avail Home Loans</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon3}/>
                  <ServicesH2>INSURANCE</ServicesH2>
                  <ServicesP>Wide coverage and affordable premium services for lifetime.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon4}/>
                  <ServicesH2>CREDIT CARDS</ServicesH2>
                  <ServicesP>Use our attractive cards for the amazing Deals and Rewards.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon5}/>
                  <ServicesH2>NO HIDDEN FEES</ServicesH2>
                  <ServicesP>We don’t charge hidden fees to deposit or access the money.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon6}/>
                  <ServicesH2>MOBILE BANKING</ServicesH2>
                  <ServicesP>You can acess our platform online anywhere in the world.</ServicesP>
              </ServicesCard>
           </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;