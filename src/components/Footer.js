import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from '../elements'

export const Footer = () => {

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferer'>
                        <span><ion-icon name="logo-facebook"></ion-icon></span>
                    </a>
                    <a href='https://instagram.com' target='_blank' rel='noopener noreferer'>
                        <span><ion-icon name="logo-instagram"></ion-icon></span>
                    </a>
                    <a href='https://linkedin.com' target='_blank' rel='noopener noreferer'>
                        <span><ion-icon name="logo-linkedin"></ion-icon></span>
                    </a>
                    <a href='https://twitter.com' target='_blank' rel='noopener noreferer'>
                        <span><ion-icon name="logo-twitter"></ion-icon></span>
                    </a>
                </FooterSocialIcons>
                <p>&copy; 2020 Company. All right reserved.</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}