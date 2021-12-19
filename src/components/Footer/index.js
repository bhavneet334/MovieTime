import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram ,FaLinkedin,FaYoutube} from 'react-icons/fa'

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    FooterLinksWrapper,
    SocialIconLink,
    SocialIcons,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
           <FooterWrap>
              <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle to='/'>About Us </FooterLinkTitle>
                                <FooterLink to='/'>Overview</FooterLink>
                                <FooterLink to='/'>Investor Relations</FooterLink>
                                <FooterLink to='/'>Online Services</FooterLink>
                                <FooterLink to='/'>Safe Banking</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle to='/'> Popular Products </FooterLinkTitle>
                                <FooterLink to='/'>Savings Accounts </FooterLink>
                                <FooterLink to='/'>Credit Cards</FooterLink>
                                <FooterLink to='/'>Home Laon</FooterLink>
                                <FooterLink to='/'>Life Insurance </FooterLink>
                                <FooterLink to='/'>Gold Loan</FooterLink>
                       </FooterLinkItems>
                    <FooterLinkItems>
                       <FooterLinkTitle to='/'> Others </FooterLinkTitle>
                            <FooterLink to='/'>Customer Care </FooterLink>
                            <FooterLink to='/'>Form Center</FooterLink>
                            <FooterLink to='/'>Notice Board</FooterLink>
                            <FooterLink to='/'> News Room </FooterLink>
                            <FooterLink to='/'> Site Map </FooterLink>
                   </FooterLinkItems>
                   <FooterLinkItems>
                       <FooterLinkTitle to='/'> Resources </FooterLinkTitle>
                            <FooterLink to='/'> Ways To Bank </FooterLink>
                            <FooterLink to='/'> We Care For You</FooterLink>
                            <FooterLink to='/'> Rates </FooterLink>
                            <FooterLink to='/'> Learning Center </FooterLink>
                            <FooterLink to='/'> Important Notices </FooterLink>
                   </FooterLinkItems>     
                </FooterLinksWrapper>
              </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>Copyright {new Date().getFullYear()}@SwipeBank</WebsiteRights>
                    <SocialIcons>  
                          <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                               <FaInstagram/>
                          </SocialIconLink>
                          <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                               <FaFacebook/>
                          </SocialIconLink>
                          <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                               <FaTwitter/>
                          </SocialIconLink>
                          <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                               <FaYoutube/>
                          </SocialIconLink>
                          <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                               <FaLinkedin/>
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
           </FooterWrap>
        </FooterContainer>
    )
}
export default Footer;
