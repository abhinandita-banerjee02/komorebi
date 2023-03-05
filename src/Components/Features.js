import './Feat.css';

function Features() {
    return (
        // <div className="container_feat">
        //     <div className="items">
        //         <center>
        //             <img src="" height="250" width="250" />
        //             <br/>
        //                 <button className="but" type="button">Open</button>
        //         </center>
        //     </div>
        //     <div className="items">
        //         <center>
        //             <img src="" height="250" width="250" />
        //             <br/>
        //                 <button className="but" type="button">Open</button>
        //         </center>
        //     </div>
        //     <div className="items">
        //         <center>
        //             <img src="" height="250" width="250" />
        //             <br/>
        //                 <button className="but" type="button">Open</button>
        //         </center>
        //     </div>
        // </div>

        <div className="servicesContainer">
            <h1 className="hprimary center">Our Features</h1>
            <div className="services">
                <div id="services">
                    <div className="box">
                        <img src="../../public/imgs/quiz.png" alt=""/>
                            <h2 className="hsecondary center">Voice Assisted Quiz</h2>
                            <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, exercitationem inventore. Fuga sunt dolore deleniti! Amet harum nobis id fugit.</p>
                            <button className="button button1">Copy</button>
                    </div>
                    <div className="box">
                        <img src="../../public/imgs/note.jpeg" alt=""/>
                            <h2 className="hsecondary center">Object Detection</h2>
                            <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, exercitationem inventore. Fuga sunt dolore deleniti! Amet harum nobis id fugit.</p>
                            <button className="button button1">Copy</button>
                    </div>
                    <div className="box">
                        <img src="../../public/imgs/note.jpeg" alt=""/>
                            <h2 className="hsecondary center">Note Maker</h2>
                            <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, exercitationem inventore. Fuga sunt dolore deleniti! Amet harum nobis id fugit.</p>
                            <button className="button button1">Copy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;