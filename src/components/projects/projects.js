import React from 'react'
import { useState } from 'react';
import './projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import proj1 from "./images/proj1.png"
import proj2 from "./images/proj2.png"
import proj3 from "./images/proj3.png"
import proj4 from "./images/proj4.png"
import simp1 from "./images/simp1.png"
import simp2 from "./images/simp2.png"
import cv from "./images/cv.png"
import css3 from "./images/css3.png"
import JavaScript from "./images/javascript.png"
import bootstrap from "./images/bootstrap.png"
import react from "./images/react.png"



  const projects = [
    {
        id: 1,
        imgUrl: simp1,
        title: "",
        text: "Simple Design of clothes store"
    },
    {
        id: 2,
        imgUrl: simp2,
        title: "Supplements",
        text: "Simple Design of supplements store"
    },
    {
        id: 3,
        imgUrl: proj1,
        title: "Health Center",
        text: "project Using Html&Css",
        url: "https://yazandawleh.github.io/project-1"
    },
    {
        id: 4,
        imgUrl: proj2,
        title: "Electro Home",
        text: "project Using Html5&Css3",
        url: "https://yazandawleh.github.io/project-2/"
    },
    {
        id: 5,
        imgUrl: proj3,
        title: "Epic-Shows",
        text: "project Using Bootstrap5",
        url: "https://yazandawleh.github.io/project-3/"
    },
    {
        id: 6,
        imgUrl: proj4,
        title: "My Portfolio",
        text: "My Personal Portfolio Using React"
    }
  ]
const skills = [
      {
    title: 'CSS3',
    icon: css3,
    description: 'Animations, Flexbox, Grid, and responsive design',
  },
    {
    title: 'Bootstrap',
    icon: bootstrap,
    description: 'Responsive layouts and utility-first styling',
  },
    {
    title: 'JavaScript',
    icon: JavaScript,
    description: 'Modern ES6+, DOM manipulation, and logic building',
  },
  {
    title: 'React',
    icon: react,
    description: 'Reusable components, hooks, and dynamic UIs',
  },

];

  const Tab1 = () => {
    return (
        <>
            <div className="project-cards container w-100">
                <div className="row justify-content-center row-gap-4 w-100 mx-auto">
                    {projects.map((item) => {
                        return (
                            <div key={item.id} className='card-spacing col-11 col-md-6 col-lg-4'>
                                <div className="project-card card text-bg-dark ">
                                    <img src={item.imgUrl} className="card-img" alt={item.title} />
                                    <div className="card-img-overlay">
                                        <h3 className="card-title">{item.title}</h3>
                                        <i className="card-text">{item.text}</i>
                                        <a href={item.url} target="_blank" rel='noreferrer'> {item.url}</a>
                                    
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
const Tab2 = () => {
    return (
        <>
            <div className='cv-container container'>
                    <div class="card cv-card" >
                        <img class="card-img-top" src={cv} alt="Cv"/>
                        <div class="card-img-overlay">
                            <a href="https://drive.google.com/file/d/1rRG0KDOcSdXzwLb78T0lBQ1g9bVsf4OG/view?usp=sharing" class="btn btn-primary">download My Resume</a>
                    </div>
            </div>
            </div>
            
        </>
    )
}
const Tab3 = () => {
     return (
    <section className="skills-section">
      <h2 className="skills-title">🛠️ My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} className="card-img w-25 mt-3 mb-2" alt={skill.title} />
            <h3 className='mb-4'>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );

}

const Projects = () => {
    const [activeTab, setActiveTab] = useState("tab1")
    const activeClass = (tabName) => {
        return activeTab === tabName ? "active " : ""
    }
    return (
        <>
            <section id="projects">
                <div className="projects-section">
                    <h2 className="section-title text-light mb-3">My Projects</h2>
                    <p className='sup-paragraph w-75 mb-5 text-light'>My name is Yazan, I live in Damascus-syria, I am 29 years old, These are some of my projects.</p>
                    <div style={{ padding: "0 8.5%" }} className="container projects-tabs">
                        <ul className='projects-nav row'>
                            <li className={`${activeClass("tab1")}col-4`}><button onClick={() => setActiveTab("tab1")}>projects </button></li>
                            <li className={`${activeClass("tab2")}col-4`}><button onClick={() => setActiveTab("tab2")}>Resume</button></li>
                            <li className={`${activeClass("tab3")}col-4`}><button onClick={() => setActiveTab("tab3")}>My Skills</button></li>
                        </ul>
                    </div>
                    <div className='w-100 mt-4'>
                        {activeTab === 'tab1' && <Tab1 />}
                        {activeTab === 'tab2' && <Tab2 />}
                        {activeTab === 'tab3' && <Tab3 />}
                    </div>
                </div>
            </section>
        </>
    );
}
export default React.memo(Projects);