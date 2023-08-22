import React ,{useState,useEffect} from 'react';
import { TypeAnimation } from 'react-type-animation';
import ReactTyped from "react-typed"
import { NavLink } from "react-router-dom"
import serter from '../../images/serter.jpg'
import linkedin from '../../images/linkedin2.png'
import github from '../../images/github.png'
import './HomePage.css'
import { ExternalLink } from 'react-external-link';
export function HomePage() {
   // const Typewriter = ({text,delay}) =>{
   //     const[currentText,setCurrentText] = useState('');
   //     const[currentIndex,setCurrentIndex] = useState(0);
   //     useEffect(() => {
   //         if (currentIndex < text.length) {
   //             const timeout = setTimeout(() => {
   //                 setCurrentText(prevText => prevText + text[currentIndex]);
   //                 setCurrentIndex(prevIndex => prevIndex + 1);
   //             }, delay);
   //
   //             return () => clearTimeout(timeout);
   //         }
   //     }, [currentIndex, delay, text]);
   //     return <span>{currentText}</span>
   // }

    return (
        <div className='homepage1'>
            <div className="home">

                <div >
                    <div className='homepage'>
                        <h2 id="about-me" >Serter Iyigunlu</h2>
                        <p >Junior Web Developer</p>
                        <div className='circular--landscape'>
                            <ExternalLink href="https://www.linkedin.com/in/serter-iyigunlu-18897955" ><i
                                className="fa-brands fa-linkedin-in fa-2xl social-us"></i></ExternalLink>
                            <ExternalLink href="https://github.com/serteri" ><i
                                className="fa-brands fa-github fa-beat fa-2xl social-us"></i></ExternalLink>
                        </div>
                        <div className='all-links'>
                            <a href='#home' className='links'><i className="fa-solid fa-house-user"><span className='span'>Home</span></i></a>
                            <a href='#about' className='links'><i className="fa-solid fa-user"><span className='span'>About</span></i></a>
                            <a href='#resume' className='links'> <i className="fa-solid fa-file"><span className='span'>Resume</span></i></a>
                            <a href='#services' className='links'> <i className="fa-solid fa-address-card"><span className='span'>Services</span></i></a>
                            <a href='#contact' className='links'> <i className="fa-solid fa-envelope"><span className='span'>Contact</span></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homepage2'>
                <h1>Serter Iyigunlu</h1>
                <p>I'm <TypeAnimation  sequence={['Freelancer',1500,'Developer',1500]} speed={50} repeat={Infinity} /> </p>
            </div>
        </div>

    )
}