import './Lander.css'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom';

function Lander() {
    return (
        <div className="container demo">
            <div className="content">
                <div id="large-header" className="large-header">
                    <canvas id="demo-canvas"></canvas>
                    <h1 className="main-title">Komorebi</h1>
                    <h3 className="sub-title">the ultimate guide for visually aided people</h3>
                    {/* <p className="log"><Link to="">Sign in</Link><a id="dash">|</a><Link to="./">Register</a></p> */}
                    <Link className="log" to="/obj_detect">Get Started</Link>
                </div>
            </div>
            <Helmet>
                <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js'></script>
                <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js'></script>
                <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js'></script>
            </Helmet>
        </div>
    );
}

export default Lander;