import React from 'react';
import './Header.css';
import logo from "./images/logo3.png"
import '@fortawesome/fontawesome-free/css/all.min.css';


function Header() {
     const scrollToSection = () => {
        const target = document.getElementById('connect');
        target?.scrollIntoView({ behavior: 'smooth' });
        };
    return(
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg ">

                    <div class="container-fluid head">
                        <a class="navbar-brand" href="#home">
                            <img src={logo} className="logo" alt="logo" height="22" width="250"/> 
                        </a>

                        <button class="navbar-toggler text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-to ggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            
                                <ul className="navbar-nav d-flex">
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#Home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#skills">Skills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#projects">Projects</a>
                                    </li>
                                </ul>
                                <ul className='header-icons d-flex'>
                                    <li><a href='https://www.linkedin.com/in/yazan-dawleh-358baa293/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href='https://www.facebook.com/yazan.dw1/' target='_blank' rel='noreferrer'><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href='https://www.instagram.com/yazan.douleh/' target='_blank' rel='noreferrer'><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href='https://github.com/yazandawleh' target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a></li>
                                </ul>
                                <button type="button" class="header-btn mx-5"onClick={scrollToSection} >Let's Connect <i class="fa-solid fa-arrow-right"></i></button>

                        </div> 
                       
                    </div>

                </nav>
                 
            </header>
        </>
    );

}

export default React.memo(Header);