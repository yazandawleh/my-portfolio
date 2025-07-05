import React from 'react'; 
import './Home.css';
import { Typewriter } from 'react-simple-typewriter'
import '@fortawesome/fontawesome-free/css/all.min.css';
import coding from "./images/coding.jpg"

function Home() {
 return (
    <>
        <main className='home' id="Home">
            <div className='Home-page container-fluid '>
                <div className='row row-gap-5'>
                    <div className='home-text col-12 col-lg-6'>
                        <div className='home-title'>
                            <h1>Welcome to My Portfolio</h1>
                        </div>
                        
                            <h2 className='myname'>Hi! I'm <span>Yazan Douleh</span></h2>
                            <h2>I'm a  
                                <span>
                                <Typewriter
                                words={[' Web Developer.', ' Programmer.', ' Frontend Developer.']}
                                loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}/>
                                    </span></h2>
                        
                        <p className='home-p  '>Hello Everyone, My name is yazan, I'm 29 years-old, From Damascus/Syria, graduated from Damascus University as a Communication Engineer, and I'm studying Master in Computer Science in Syrian Virtual University  </p>
                        <a href='#connect' className="home-connect">Let's Connect <i class="fa-regular fa-circle-right"></i></a>
                    </div>
                    <div className='home-img col-12 col-lg-6'>
                        <img src={coding} className="coding shadow rounded-circle" alt="coding" height="400" width="400" />
                    </div> 

                </div>

            </div>
            
            

        </main>


    </>
  );
}

export default React.memo(Home);