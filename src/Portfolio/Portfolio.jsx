import React,{useState} from 'react';
import './Portfolio.css';
import { BsLinkedin,BsGithub} from "react-icons/bs";
import { BiLogoHtml5,BiLogoCss3,BiLogoJavascript,BiLogoReact,BiSolidData,BiLogoPython,BiExpand,BiUpArrowAlt,BiDotsVertical,BiX } from "react-icons/bi";
import logo from "./Project1.png";
import logo1 from "./Project2.png";
import logo2 from "./Project3.png";
import logo3 from "./Project4.png";
import logo4 from "./Portfolio.jpg";
import logo5 from "./Portfolio1.jpg";

function Portfolio() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [click,setclick]=useState(false);

    const goToHome=()=>{
        window.scrollTo(0,0);
    }
    const goToAbout=()=>{
        window.scrollTo(0,690);
    }
    const goToSkills=()=>{
        window.scrollTo(0,1380);
    }
    const goToProjects=()=>{
        window.scrollTo(0,2040);
    }
    const goToHome1=()=>{
        window.scrollTo(0,0);
    }
    const goToAbout1=()=>{
        window.scrollTo(0,780);
    }
    const goToSkills1=()=>{
        window.scrollTo(0,1560);
    }
    const goToProjects1=()=>{
        window.scrollTo(0,2240);
    }
  return (
    <div className='main'>
        <div className='navbar'>
            <div className='title'>
                <h1>Portfolio</h1>
            </div>
            <div className='links'>
                <h3 onClick={goToHome}>Home</h3>
                <h3 onClick={goToAbout}>About</h3>
                <h3 onClick={goToSkills}>Skills</h3>
                <h3 onClick={goToProjects}>Projects</h3>
            </div>
            <div className='res'>
                <div className='low' onClick={()=>{setclick(true)}} style={click ? {display:"none"} :{display:"block"}}><BiDotsVertical style={{width:"30px",height:"50px"}}/></div>
                <div className='low1' onClick={()=>{setclick(false)}} style={!click ? {display:"none"} :{display:"block"}}><BiX style={{width:"30px",height:"50px"}}/></div>
                <div  style={click ? { display:"block"} : {display:"none"}} className='resp' >
                    <h3 onClick={goToHome1}>Home</h3>
                    <h3 onClick={goToAbout1}>About</h3>
                    <h3 onClick={goToSkills1}>Skills</h3>
                    <h3 onClick={goToProjects1}>Projects</h3>
                </div>
            </div>
        </div>
        <div className='about'>
            <div className='about_matter'>
                <div className='name'>
                    <h2>
                        Hii..
                    </h2>
                    <h2>
                        I am Hemanth Kumar Akurathi
                    </h2>
                    <h3>
                        and i am a <p className='span'>Frontend Developer </p>
                    </h3>
                    <h4>

                    </h4>
                    <h4>Welcome!!!</h4>
                </div>
                <div className='link'>
                    <div>
                        <a href='https://www.linkedin.com/in/hemanth-kumar-akurathi-444609253/' target='_blank' rel="noreferrer"><BsLinkedin style={{height:"30px",width:"30px",marginTop:"5px"}}/></a>
                    </div>
                    <div>
                        <a href='https://github.com/hemanthaarya/' target='_blank' rel="noreferrer"><BsGithub style={{height:"30px",width:"30px",marginTop:"5px"}}/></a>
                    </div>
                </div>
                <div>
                    <a href='https://drive.google.com/file/d/1r6vFacsJX-v6YUQ04BaD6j_MbA78pTXt/view?usp=drivesdk' target='_blank' rel="noreferrer" style={{textDecoration:"none"}}><div className='butt'>View Resume</div></a>
                </div>

            </div>
            <div className='about_pic'>
                <img className='img' src={logo4} alt='hemanth'/>
            </div>
        </div>
        <div className='about_me'>
            <div className='about_me_pic'>
                <img className='img1' src={logo5} alt='hem'/>
            </div>
            <div className='about_me_matter'>
                <h2>About <span style={{color:"aqua"}}>Me</span></h2>
                <h2>Frontend Developer</h2>
                <p>Enthusiastic and motivated recent graduate with a strong foundation in web development and
                    a keen interest in React. Seeking an entry-level role as a<br/> React Developer to kickstart my
                    career in front-end development. Eager to apply my academic knowledge, coding skills, and
                    passion for creating dynamic user interfaces while gaining practical experience and
                    contributing to the success of a dynamic development team. Excited to learn, adapt, and grow
                    as a professional React Developer.
                </p>
            </div>   
        </div>
        <div className='skill'>
            <div>
                <h1 className='tit'>My <span style={{color:"aqua"}}>Skills</span></h1>
            </div>
            <div className='skills'>
                <div className='sk'>
                    <BiLogoHtml5 className='sky' />
                    <h1>HTML</h1>
                </div>
                <div className='sk'>
                    <BiLogoCss3 className='sky'/>
                    <h1>CSS</h1>
                </div>
                <div className='sk'>
                    <BiLogoJavascript className='sky'/>
                    <h1>JavaScript</h1>
                </div>
                <div className='sk'>
                    <BiLogoReact className='sky'/>
                    <h1>React.js</h1>
                </div>
                <div className='sk'>
                    <BiLogoPython className='sky'/>
                    <h1>Python</h1>
                </div>
                <div className='sk'>
                    <BiSolidData className='sky'/>
                    <h1>SQL</h1>
                </div>

            </div>
        </div>
        <div className='project'>
            <div>
                <h1 style={{textAlign:"center",color:"white",fontSize:"45px"}}>My <span style={{color:"aqua"}}>Projects</span></h1>
            </div>
            <div className='projects'>
                <div className="pr"  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <img className="image" style={isHovered ? { opacity: '0.2'  } : {opacity:"1"}} src={logo} alt='img'/>
                    <div className='layer'>
                        <h2 style={{color:"white"}}>Shophub</h2>
                        <a href='https://main--lively-faun-f8109a.netlify.app/' target='_blank' rel='noreferrer'><div className='logo'><BiExpand/></div></a>
                    </div>
                </div>
                <div className="pr"  onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                    <img className="image" style={isHovered1 ? { opacity: '0.2'  } : {opacity:"1"}} src={logo1} alt='img'/>
                    <div className='layer'>
                        <h2 style={{color:"white"}}>Static Stacks Page</h2>
                        <a href='https://cute-cat-ea5249.netlify.app/' className='logo' target='_blank' rel='noreferrer'><BiExpand style={{position:"absolute"}}/></a>
                    </div>
                </div>
                <div className="pr"  onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                    <img style={isHovered2 ? { opacity: '0.2'} : {opacity:"1"}} className='image' src={logo2} alt='img'/>
                    <div className='layer'>
                        <h2 style={{color:"white"}}>E-commerce site pages</h2>
                        <a href='https://github.com/hemanthaarya/E-commerce-site.git' target='_blank' rel='noreferrer'><div className='logo'><BiExpand/></div></a>
                    </div>
                </div>
                <div className='pr' onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                    <img style={isHovered3 ? { opacity: '0.2'} : {opacity:"1"}} className='image' src={logo3} alt='img'/>
                    <div className='layer'>
                        <h2 style={{color:"white"}}>My Portfolio</h2>
                        <a href='ab.io' target='_blank' rel='noreferrer'><div className='logo'><BiExpand/></div></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='cp'>
            <h3>Copyright © 2023 by Hemanth kumar Akurathi | All Rights Reserved.</h3>
            <div onClick={goToHome}><BiUpArrowAlt style={{width:"50px",height:"30px"}}/></div>
        </div>

    </div>
  )
}

export default Portfolio