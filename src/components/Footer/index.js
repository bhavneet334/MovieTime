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
                           <FooterLinkTitle to='/'>MOVIES BY GENRE</FooterLinkTitle>
                                <FooterLink to='/'>Drama Movies</FooterLink>
                                <FooterLink to='/'>Action Movies</FooterLink>
                                <FooterLink to='/'>Comedy Movies</FooterLink>
                                <FooterLink to='/'>Thriller Movies</FooterLink>
                                <FooterLink to='/'>Romantic Movies</FooterLink>
                                <FooterLink to='/'>War Movies</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle to='/'> MOVIES BY LANGUAGE</FooterLinkTitle>
                                <FooterLink to='/'>Movies in Hindi</FooterLink>
                                <FooterLink to='/'>Movies in English</FooterLink>
                                <FooterLink to='/'>Movies in Telugu</FooterLink>
                                <FooterLink to='/'>Movies in Tamil</FooterLink>
                                <FooterLink to='/'>Movies in Marathi</FooterLink>
                                <FooterLink to='/'>Movies in Bengali</FooterLink>
                       </FooterLinkItems>
                    <FooterLinkItems>
                       <FooterLinkTitle to='/'>MOVIE REVIEWS</FooterLinkTitle>
                            <FooterLink to='/'>Trending Articles</FooterLink>
                            <FooterLink to='/'>Latest News on Movies</FooterLink>
                            <FooterLink to='/'>Film Reviews</FooterLink>
                            <FooterLink to='/'>Guest Blogging</FooterLink>
                            <FooterLink to='/'> Latest News on Events</FooterLink>
                            <FooterLink to='/'> Latest News on Plays</FooterLink>
                   </FooterLinkItems>
                   <FooterLinkItems>
                       <FooterLinkTitle to='/'> Resources </FooterLinkTitle>
                            <FooterLink to='/'> Account</FooterLink>
                            <FooterLink to='/'> Ways to Watch</FooterLink>
                            <FooterLink to='/'> Media Center </FooterLink>
                            <FooterLink to='/'> Terms of Use</FooterLink>
                            <FooterLink to='/'> Contact Us </FooterLink>
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
