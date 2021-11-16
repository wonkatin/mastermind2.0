import PlayButton from "./PlayButton";
import image from "../../images/mastermindinstructions.png"

export default function Instructions(props) {
    return (
        <div className="instructions">
            <div className="instructions-title">
                Instructions
            </div>
            <div className="instructions-image">
                <img className="image" src={image} alt="image of game play with instructions"/>
            </div>
            <PlayButton setModal={props.setModal}/>
        </div>
    )
}