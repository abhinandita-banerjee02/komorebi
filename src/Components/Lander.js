import './Lander.css'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom';

import ObjDet from './obj.jpg';
import textRead from './textReading.png';
import textSpeech from './textToSpeech.png';
import About from './About';
function Lander() {
    function scrollTo()
    {
        window.scrollTo(0, 1000);
    }
    return (
        <div className="container demo">
            <div className="content">
                <div id="large-header" className="large-header">
                    <canvas id="demo-canvas"></canvas>
                    <h1 className="main-title">Komorebi</h1>
                    <h3 className="sub-title">the ultimate guide for visually aided people</h3>
                    {/* <p className="log"><Link to="">Sign in</Link><a id="dash">|</a><Link to="./">Register</a></p> */}
                    <span onClick={scrollTo} className="log">Get Started</span>
                </div>
            </div>
            <Helmet>
                <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js'></script>
                <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js'></script>
                <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js'></script>
            </Helmet>
            <div className='feature-section'>
                <h1>Features</h1>
                <div className='feature-container'>
                    <div className='feature-box'>
                        {/* Object Detection */}
                        <img src={ObjDet} className="feat-img" />
                        <br/>
                        <button><Link to="/obj_detect">Object Detection</Link></button>

                    </div>
                    <div className='feature-box'>
                        {/* File Reading */}
                        <img src={textRead} className="feat-img" />
                        <br/>   
                        <button><a href="/textRead.html">Text File Reading</a></button>

                    </div>
                    <div className='feature-box'>
                        {/* Speech to Text */}
                        <img src={textSpeech} className="feat-img" />
                        <br/>
                        <button><a href="/notes.html">Speech-to-Text</a></button>

                    </div>
                </div>
            </div>
            <About/>
        </div>
    );
}

export default Lander;