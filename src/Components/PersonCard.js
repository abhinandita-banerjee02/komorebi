import UserImage from './user.png';
import './PersonCard.css';

function PersonCard({name, reg}) {
    return (
        <div className="card">
            <img src={UserImage} />
            <br />
            <h2>{name}</h2>
            <h3>{reg}</h3>
        </div>
    )
}
export default PersonCard;