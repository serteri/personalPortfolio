
import './AboutPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom"

export function AboutPage() {
    const projectHandler = ()=>{
        console.log("Hello")
    }
    return (
        <div className='container-md px-4'>
            
      
            <div className="row">

                <div className="col col-lg-2 col-m-2">
                    <h1>Serter Iyigunlu</h1>
                    <p>I am a Junior Web Developer and have a mechanical engineering background.</p>
                </div>
                <div className="col col-lg-5 col-m-3">
                    <h1>Education</h1>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Education Type</th>
                            <th scope="col">Education Place</th>
                            <th scope="col">Location</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">2022-Current</th>
                            <td>Diploma of IT(Web Development)</td>
                            <td>Coder Academy Australia</td>
                            <td>Australia</td>
                        </tr>
                        <tr>
                            <th scope="row">2013-2015</th>
                            <td>Master by Research Degree:Engineering</td>
                            <td>Queensland University of Technology</td>
                            <td>Australia</td>
                        </tr>
                        <tr>
                            <th scope="row">2007-2007</th>
                            <td>Diploma of Business Management</td>
                            <td>Martin College</td>
                            <td>Australia</td>
                        </tr>
                        <tr>
                            <th scope="row">2006-2007</th>
                            <td>Diploma of Aircraft Maintenance Engineering</td>
                            <td>Aviation Australia</td>
                            <td>Australia</td>
                        </tr>
                        <tr>
                            <th scope="row">1997-2002</th>
                            <td>Bachelor of Mechanical Engineering</td>
                            <td>Celal Bayar University</td>
                            <td>Turkey</td>
                        </tr>
                    </tbody>       
                </table>
                
                </div>
                <div className="col col-lg-5 col-m-3">
                    <h1>Projects</h1>
                    <p>To see my Projects please click the button!</p>
                    <NavLink className='nav-link' to="/projects">Projects page</NavLink>
                </div> 
            </div>
        </div>
       
    )
}