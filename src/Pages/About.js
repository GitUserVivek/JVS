import { useEffect, useState } from 'react';
import '../Css/About.css';
import Me from "../assets/me2.png";


import Attribute, { Education, Skills, Projects } from '../Pages/Components/Attributes';
export default function About() {
    const [lineWidth, setLineWidth] = useState(10);
    useEffect(() => {

        let i = 10;
        var interval = setInterval(() => {
            if (i > 700) {
                clearInterval(interval);
            }
            i = i + 2;
            setLineWidth(i);
        }, 1);
        return () => { clearInterval(interval) }

    }, []);
    return <div className="About">

        <div className="Intro">
            <span className="Myphoto"> <img src={Me} alt="myImg"></img> </span>
            Hello, I am Vivek Jagtap !<br></br>
            I'm a Computer Science Student <br></br>at<br></br> Sangameshwar College Solapur, Maharastra.
        </div>
        <div className="Line" style={{ width: `${lineWidth}px`, }}> </div>
        <div className="List">
            <Attribute title="Education" description={Education} />
            <Attribute title="Skills" description={Skills} />
            <Attribute title="Projects / Achivements" description={Projects} />
        </div>
        <span className='slogan'>It_All_Started_With_A_Dream..</span>
    </div>
}