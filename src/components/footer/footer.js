import React from 'react'
import logo from "./logo3.png"
import './footer.css'
function Footer() {
  return (
    <div>
        <section id='footer'>
            <div className='container-fluid  pt-3'>
                <div className='footer-content container border-white row '>
                    <div className='col-12 col-lg-6'> 
                        <img src={logo} className="logo ms-5 " alt="logo" height="22" width="250"/> 
                        <p class="footer-copyright my-3 text-light">
                Copyright &copy; 2025 All rights reserved | by Yazan Douleh
            </p>
                    </div>
                    <div className='d-flex col-12 col-lg-6'>
                        <h3 className='text-white mt-2'>Find Me On:</h3>
                        <ul className='header-icons d-flex'>
                            <li><a href='https://www.linkedin.com/in/yazan-dawleh-358baa293/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href='https://www.facebook.com/yazan.dw1/' target='_blank' rel='noreferrer'><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href='https://www.instagram.com/yazan.douleh/' target='_blank' rel='noreferrer'><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href='https://github.com/yazandawleh' target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}
export default React.memo(Footer);