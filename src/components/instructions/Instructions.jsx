import PlayButton from "./PlayButton";

export default function Instructions(props) {
    return (
        <div className="instructions">
            Instructions
            <PlayButton setModal={props.setModal}/>
        </div>
    )
}