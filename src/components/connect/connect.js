import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './connect.css';

 function Connect() {
  return (
    <div>
      <section id='connect'>
        <h2 className='form-title pt-5 text-center text-light fs-1 '> Contact Information</h2>
        <div className=' container-fluid pt-5'>
          <div className='row d-flex'>
            
            <div className='info col-12 col-lg-7'>
              <div className='location-info d-flex pb-4 pt-5'>
                <div className='contact-icons px-3'><i class="fa-solid fa-location-dot"></i></div>
                <span className='contact-text'><span>Location: </span> Al-Kiswah - Damascus sub - Syria</span>
              </div>
              <div className='location-info d-flex pb-4'>
                <div className='contact-icons px-3'><i class="fa-solid fa-mobile-screen-button"></i></div>
                <span className='contact-text'><span>Mobile: </span>+963 - 988600234</span>
              </div>
              <div className='location-info d-flex pb-4'>
                <div className='contact-icons px-3'><i class="fa-solid fa-envelope"></i></div>
                <span className='contact-text'><span>E-mail: </span>yazan.dawleh@gmail.com</span>
              </div>
              <ul className='header-icons d-flex p-5'>
                    <li><a href='https://www.linkedin.com/in/yazan-dawleh-358baa293/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin "></i></a></li>
                    <li><a href='https://www.facebook.com/yazan.dw1/' target='_blank' rel='noreferrer'><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href='https://www.instagram.com/yazan.douleh/' target='_blank' rel='noreferrer'><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href='https://github.com/yazandawleh' target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a></li>
              </ul>
            </div>
            <div className='emailform col-12 col-lg-5 pe-5'>
              <h2 className='form-title py-4 text-light'> Let's stay in touch!</h2>
              <form class="row g-3 ">
                  <div class="col-md-6">
                    
                    <input type="text" class="form-control" placeholder='First Name' />
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" placeholder='Last Name'/>
                  </div>
                  <div class="col-md-6">
                    
                    <input type="email" class="form-control" placeholder='Email Address' required/>
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" placeholder='Phone No.'/>
                  </div>
                  <div class="col-12">
                    <textarea class="form-control" id="message" name="message" rows="5" placeholder='Messsage' required></textarea>
                  </div>
                  
                  <div class="col-12">
                    <button type="submit" class="btn btn-outline-info w-25 mb-5">Send</button>
                  </div>
              </form>
              
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  )
}
export default React.memo(Connect);