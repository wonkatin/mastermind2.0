export default function PlayButton(props) {
    // hides modal
    const handlePlay = () => {
        props.setModal(false)
    }
    return (
        <button className="play hover" onClick={handlePlay}>
            Play
        </button>
    )
}