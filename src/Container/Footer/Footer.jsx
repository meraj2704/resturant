import React from 'react';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import './Footer.css';
import FooterOverlay from '../../Components/Footer/FooterOverlay';
import Newsletter from '../../Components/Footer/Newsletter';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay></FooterOverlay>
    <Newsletter></Newsletter>
  </div>
);

export default Footer;
