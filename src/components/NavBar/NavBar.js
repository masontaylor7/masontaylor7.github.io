import React from 'react';
import './NavBar.css'
import masonimg from '../../images/mason.jpg'
import resumepdf from '../../PDFs/resume.pdf'

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiAngellist } from 'react-icons/si'
import { VscFilePdf } from "react-icons/vsc";

const NavBar = () => {

    const iconStyle = {
        width: '35px',
        height: '35px',
        marginLeft: '30px'
    }

    return (
        <div className='nav-bar light'>
            <div className='nav-top light'>

                <div className='name-wrapper'>
                    <h1 className='my-name'>Mason Evan Taylor</h1>
                    <div className='nav-contact-links'>

                        <h2 className='title'>Software Engineer | Full Stack Developer</h2>

                        <div className='links-block'>
                            <a className='link-button-nav' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/mtaylor77/'><BsLinkedin style={iconStyle} /></a>

                            <a className='link-button-nav' target="_blank" rel="noreferrer" href='https://github.com/masontaylor7'><BsGithub style={iconStyle} /></a>

                            <a className='link-button-nav' target="_blank" rel="noreferrer" href='https://angel.co/u/mason-taylor-8'><SiAngellist style={iconStyle} /></a>

                            <div className='resume-popup'>
                                <a className='link-button-nav resume-icon' target="_blank" rel="noreferrer" href={resumepdf}>
                                    <VscFilePdf style={iconStyle} />
                                    <h3 className='resume-text'>Resume</h3>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='about-block'>
                <div className='text-block'>
                    <h2 className='welcome-text'>Welcome!</h2>
                    <div className='about-me-section'>
                        As a recent graduate of a software engineer bootcamp, I bring a unique blend of creativity and problem-solving prowess to the table.
                        With a talent for sharp and clever communication, I thrive in simplifying intricate concepts into intuitive solutions that cater to user needs. My expertise spans both front-end and back-end software design, allowing me to seamlessly bridge the gap between user experience and technical functionality. With a passion for pushing the boundaries of innovation, I am eager to contribute my exceptional understanding of software design to drive transformative projects forward.
                    </div>
                </div>
                <img className='profile-img' src={masonimg} alt='' />
                {/* <div className='profile-image-shadow'></div> */}
            </div>
        </div>
    );
};

export default NavBar;
