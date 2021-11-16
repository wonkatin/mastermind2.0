export default function PlayButton(props) {
    const handlePlay = () => {
        props.setModal(false)
    }
    return (
        <button className="play hover" onClick={handlePlay}>
            Play
        </button>
    )
}