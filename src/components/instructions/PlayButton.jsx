export default function PlayButton(props) {
    const handlePlay = () => {
        props.setModal(false)
    }
    return (
        <div className="play hover" onClick={handlePlay}>
            Play
        </div>
    )
}