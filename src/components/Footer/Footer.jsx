import './Footer.css'
import React from 'react';

import moon from '../../images/moon.png'
import twitch from '../../images/twitch.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'

const Footer = () => {
    return (
        <div className='container'>
            <footer className='fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-2  border-top'> 
                <div className="col-md-4 d-flex align-items-center padl">
                    <img className='rotate p-3 ' src={moon} alt='logo' height={60}/>
                    <h6 className=' mb-md-0 text-muted fo'>Tarot Mistico</h6>
                </div>
                <ul className="nav padr col-md-4 justify-content-end  pr-3 list-unstyled d-flex">
                    <li className="ms-3 ">
                        <img src={instagram} alt='instagram' height="34"/>
                    </li>
                    <li className="ms-3">
                        <img src={youtube} alt='youtube' height="34"/>
                    </li>
                    <li className="ms-3">
                        <img src={twitch} alt='twitch' height="34"
                          
                        />
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;

