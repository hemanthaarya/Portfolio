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
    const [width]=useState(window.innerWidth)

    const goToHome=()=>{
        window.scrollTo(0,0);
    }
    const goToAbout=()=>{
        if(width>1538){
            window.scrollTo(0,750)
        }
        else{
            window.scrollTo(0,690);
        }
    }
    const goToEducation=()=>{
        if(width>1538){
            window.scrollTo(0,1500)
        }
        else{
            window.scrollTo(0,1380);
        }
    }
    const goToSkills=()=>{
        if(width>1538){
            window.scrollTo(0,2250)
        }
        else{
            window.scrollTo(0,2040);
        }
    }
    const goToExperience=()=>{
        if(width>1538){
            window.scrollTo(0,3000)
        }
        else{
            window.scrollTo(0,2730)
        }
    }
    const goToProjects=()=>{
        if(width>1538){
            window.scrollTo(0,3650)
        }
        else{
            window.scrollTo(0,3350) 
        }
    }

    
    const goToHome1=()=>{
        window.scrollTo(0,0);
    }
    const goToAbout1=()=>{
        window.scrollTo(0,940);
    }
    const goToEducation1=()=>{
        window.scrollTo(0,1900);
    }
    const goToSkills1=()=>{
        window.scrollTo(0,2840);
    }
    const goToExperience1=()=>{
        window.scrollTo(0,3780);
    }
    const goToProjects1=()=>{
        window.scrollTo(0,4720);
    }
  return (
    <div className='main'>
        <div className='navbar'>
            <div className='title'>
                <h1 onClick={goToHome} style={{cursor:"pointer"}}>Portfolio</h1>
            </div>
            <div className='links'>
                <h3 onClick={goToHome}>Home</h3>
                <h3 onClick={goToAbout}>About</h3>
                <h3 onClick={goToEducation}>Education</h3>
                <h3 onClick={goToSkills}>Skills</h3>
                <h3 onClick={goToExperience}>Experience</h3>
                <h3 onClick={goToProjects}>Projects</h3>
            </div>
            <div className='res'>
                <div className='low' onClick={()=>{setclick(true)}} style={click ? {display:"none"} :{display:"block"}}><BiDotsVertical style={{width:"30px",height:"50px"}}/></div>
                <div className='low1' onClick={()=>{setclick(false)}} style={!click ? {display:"none"} :{display:"block"}}><BiX style={{width:"30px",height:"50px"}}/></div>
                <div  style={click ? { display:"block"} : {display:"none"}} className='resp' >
                    <h3 onClick={goToHome1}>Home </h3>
                    <h3 onClick={goToAbout1}>About</h3>
                    <h3 onClick={goToEducation1}>Education</h3>
                    <h3 onClick={goToSkills1}>Skills</h3>
                    <h3 onClick={goToExperience1}>Experience</h3>
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
                    <a href='https://drive.google.com/file/d/1_7omTrb8xwvLKMQ2_9oC5qwaXy2Lz_-q/view?usp=drive_link' target='_blank' rel="noreferrer" style={{textDecoration:"none"}}><div className='butt'>View Resume</div></a>
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
        <div className='education'>
            <div>
                <h1 className='tit1'>My <span style={{color:"aqua"}}>Education</span></h1>
            </div>
            <div className='studies'>
                <div className='study'>
                    <h1>10<span style={{margin:"-100px 5px 0px 5px",fontSize:"10px"}}>th</span>CLASS</h1>
                    <div className='info'>
                        <h4>Institution Name : <span style={{color:"white"}}>Z.P.High School</span></h4>
                        <h4>Location : <span style={{color:"white"}}>Rajavolu,Guntur(dist),522259</span></h4>
                        <h4>CGPA/Percentage : <span style={{color:"white"}}>9.2</span></h4>
                    </div>
                </div>
                <div className='study'>
                    <h1>DIPLOMA</h1>
                    <div className='info'>
                        <h4>Institution Name : <span style={{color:"white"}}>GOVT Polytechnic College</span></h4>
                        <h4>Location : <span style={{color:"white"}}>Vijayawada,AndhraPradesh</span></h4>
                        <h4>CGPA/Percentage : <span style={{color:"white"}}>72</span></h4>
                    </div>
                </div>
                <div className='study'>
                    <h1>BACHELOR's</h1>
                    <div className='info'>
                        <h4>Institution Name : <span style={{color:"white"}}>Narasaraopeta Engineering College</span></h4>
                        <h4>Location : <span style={{color:"white"}}>Narasaraopet,Guntur(dist)</span></h4>
                        <h4>CGPA/Percentage : <span style={{color:"white"}}>7.82</span></h4>
                    </div>
                </div>

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
        <div className='experience'>
            <div>
                <h1 className='tit1'>My <span style={{color:"aqua"}}>Experiance</span></h1>
            </div>
            <div className='experiences'>
                <div className='exp1'>
                    <img className='exp1' alt='exp' src='data:image/jpeg;base64,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'/>
                    <div className='details'>
                        <h4>Role : <span>Web Development Intern</span></h4>
                        <h4>Duration : <span>2 months</span></h4>
                        <h4>Description : <span>During my internship, I immersed myself in the dynamic world of 
                                                web development, honing my<p> skills in front-end technologies.
                                                actively collaborated with a team of experienced developers, 
                                                contributing to the design, development, and maintenance of 
                                                responsive and user-friendly websites. I gained proficiency in 
                                                HTML, CSS, React.JS to create interactive and visually appealing 
                                                user interfaces. Moreover, I acquired hands-on experience in 
                                                Front-end Technologies</p></span></h4>
                    </div>
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
                        <a href='https://main--lively-faun-f8109a.netlify.app/' target='_blank' rel='noreferrer'><div className='logo'><BiExpand style={{position:"absolute"}}/></div></a>
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
                        <a href='https://github.com/hemanthaarya/E-commerce-site.git' target='_blank' rel='noreferrer' className='logo'><BiExpand style={{position:"absolute"}}/></a>
                    </div>
                </div>
                <div className='pr' onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                    <img style={isHovered3 ? { opacity: '0.2'} : {opacity:"1"}} className='image' src={logo3} alt='img'/>
                    <div className='layer'>
                        <h2 style={{color:"white"}}>My Portfolio</h2>
                        <a href='ab.io' target='_blank' rel='noreferrer'><div className='logo'><BiExpand style={{position:"absolute"}}/></div></a>
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
