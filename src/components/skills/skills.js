import SkillsBars from './SkillsBars';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import './skills.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1250, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 830, min: 0 },
        items: 1,
    },
};


const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-section">
                <div className="skills-container container">
                    <h2 className='skills-title'>Skills</h2>
                
                    <Carousel className="custom-carousel w-50 mx-auto py-4" responsive={responsive}>
                        <SkillsBars percentage={90} label={"FrontEnd"} />
                        <SkillsBars percentage={95} label={"HTML"} />
                        <SkillsBars percentage={85} label={"CSS"} />
                        <SkillsBars percentage={90} label={"Responsive Design"} />
                        <SkillsBars percentage={80} label={"Bootstrap"} />
                        <SkillsBars percentage={80} label={"JavaScript"} />
                        <SkillsBars percentage={75} label={"React JS"} />
                        
                    
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Skills);