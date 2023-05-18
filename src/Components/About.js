import './About.css';
import PersonCard from './PersonCard';
function About() {
    return (
        <div className="cont">
            <div className="dev-cont">
                <PersonCard name="" reg="" />
            </div>
            <div className="about-cont">
            <h1>About us</h1>
            <p>People today depend heavily on the Internet to learn new things and expand their expertise. The digital revolution has not touched everyone in an equivalent way. Unfortunately, those who have trouble using the internet due to visual impairments are still excluded from the advantages of this powerful instrument. Everyone's life has been easier thanks to technology, including those who are blind. The way blind or visually impaired persons engage with and use technology has been changed by smartphones and tablets. However, when it comes to using a particular piece of technology, like as visiting a website, they are still unable to see what is there and engage with it appropriately. The majority of visually challenged people have some vision impairment, and current assistive technology is costly. Since installing specialized reading aids like screen reader access is difficult and expensive, the majority of blind users cannot afford it. Keeping all these concerns in mind ,A website that is easy to use and navigate for those who are blind or visually impaired must be created. This requires the use of technologies like speech recognition, object detection, etc</p>
            <hr />
        </div>
        </div>
        
    )
}

export default About;
