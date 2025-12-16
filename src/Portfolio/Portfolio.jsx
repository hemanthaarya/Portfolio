import { useState} from 'react';
import './Portfolio.css';
import { BiExpand,BiUpArrowAlt,BiDotsVertical,BiX } from "react-icons/bi";
import logo4 from "./Portfolio.jpg";
import logo5 from "./Portfolio1.jpg";
import {Personal_Details,EducationDetails,Skills,Experiences,Projects} from './Data.js';

function Portfolio() {
    const [isHovered, setIsHovered] = useState(false);
    const [click,setclick]=useState(false);
    

  return (
    <div className='main'>
        <div className='navbar'>
            <div className='title'>
                <h1 style={{cursor:"pointer"}}>Portfolio</h1>
            </div>
            <div className='links'>
                <h3><a href='#home'>Home</a></h3>
                <h3><a href='#about'>About</a></h3>
                <h3><a href='#Education'>Education</a></h3>
                <h3><a href='#Skills'>Skills</a></h3>
                <h3><a href='#Experience'>Experience</a></h3>
                <h3><a href='#Projects'>Projects</a></h3>
            </div>
            <div className='res'>
                <div className='low' onClick={()=>{setclick(true)}} style={click ? {display:"none"} :{display:"block"}}><BiDotsVertical style={{width:"30px",height:"50px"}}/></div>
                <div className='low1' onClick={()=>{setclick(false)}} style={!click ? {display:"none"} :{display:"block"}}><BiX style={{width:"30px",height:"50px"}}/></div>
                <div  style={click ? { display:"block"} : {display:"none"}} className='resp' >
                    <h3><a href='#home'>Home</a></h3>
                    <h3><a href='#about'>About</a></h3>
                    <h3><a href='#Education'>Education</a></h3>
                    <h3><a href='#Skills'>Skills</a></h3>
                    <h3><a href='#Experience'>Experience</a></h3>
                    <h3><a href='#Projects'>Projects</a></h3>
                </div>
            </div>
        </div>
        <section id='home' className='about'>
            <div className='about_matter'>
                <div className='name'>
                    <h2>
                        Hii Welcome!!!
                    </h2>
                    <h2>
                        {}
                    </h2>
                    <h3>
                        and i am a <p className='span'> {Personal_Details.Designation} </p>
                    </h3>
                    <h4> </h4>
                </div>
                <div className='link'>
                    {Object.entries(Personal_Details.socialLinks).map(([key, value]) => {
                        const Icon=value.Icon;
                        return(
                            <div>
                            <a href={value.Link} target='_blank' rel="noreferrer" style={{textDecoration:"none"}}><Icon size={35}/></a>
                            </div>
                        )
                    }  )}
                </div>
                <div>
                    <a href='https://drive.google.com/file/d/1_7omTrb8xwvLKMQ2_9oC5qwaXy2Lz_-q/view?usp=drive_link' target='_blank' rel="noreferrer" style={{textDecoration:"none"}}><div className='butt'>View Resume</div></a>
                </div>

            </div>
            <div className='about_pic'>
                <img className='img' src={logo4} alt='hemanth'/>
            </div>
        </section>
        <section id='about' className='about_me'>
            <div className='about_me_pic'>
                <img className='img1' src={logo5} alt='hem'/>
            </div>
            <div className='about_me_matter'>
                <h2>About <span style={{color:"aqua"}}>Me</span></h2>
                <p>{Personal_Details.Description }
                </p>
            </div>   
        </section>
        <section id='Education' className='education'>
            <div>
                <h1 className='tit1'>My <span style={{color:"aqua"}}>Education</span></h1>
                <div className='studies'>
                            <div className='study'>
                                <div className='study-1'>
                                    <div className='animated-border'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th><h1>Level</h1></th>
                                                    <th><h1>Institution</h1></th>
                                                    <th><h1>YearOfCompletion</h1></th>
                                                    <th><h1>Percentage</h1></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {EducationDetails.map((item)=>{
                                                    return(
                                                        <tr>
                                                            <td><h2>{item.Level}</h2></td>
                                                            <td><h2>{item.Institution}</h2></td>
                                                            <td><h2>{item.YearOfCompletion}</h2></td>
                                                            <td><h2>{item.Percentage}</h2></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </section>
        <section id='Skills' className='skill'>
            <div>
                <h1 className='tit'>My <span style={{color:"aqua"}}>Skills</span></h1>
            </div>
            <div className='skills'>
                {Object.entries(Skills).map(([key,value])=>{
                    const Icon=value
                    return(
                        <div className='sk'>
                            <Icon className='sky'/>
                            <h1>{key}</h1>
                        </div>
                    )
                })}

            </div>
        </section>
        <section id='Experience' className='experience'>
            <div>
                <h1 className='tit1'>My <span style={{color:"aqua"}}>Experiance</span></h1>
            </div>
            <div className='experiences'>
                {Experiences.map((item)=>{
                    return(
                        <div className='exp1'>
                            <img className='exp2' src={item.Logo} alt='logo'/>
                            <div className='details'>
                                <b>Role :</b><span> {item.Role}</span><br/>
                                <b>Company :</b><span>{item.Company}</span><br/>
                                <b>Description :</b><span>{item.Description}</span>
                            </div>
                        </div>
                    ) 
                })}
            </div>
        </section>
        <section id='Projects' className='project'>
            <div>
                <h1 style={{textAlign:"center",color:"white",fontSize:"45px"}}>My <span style={{color:"aqua"}}>Projects</span></h1>
            </div>
            <div className='projects'>
                {Projects.map((item)=>{
                    return(
                        <div className="pr"  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <img className="image" style={isHovered ? { opacity: '0.2'  } : {opacity:"1"}} src={item.Image} alt='img'/>
                            <div className='layer'>
                                <h2 style={{color:"white"}}>{item.Title}</h2>
                                <a href={item.Link} target='_blank' rel='noreferrer'><div className='logo'><BiExpand style={{position:"absolute"}}/></div></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
        <div className='cp'>
            <h3>Copyright © 2023 by Hemanth kumar Akurathi | All Rights Reserved.</h3>
            <div><a href='#home'><BiUpArrowAlt size={35}/></a></div>
        </div>

    </div>
  )
}

export default Portfolio
