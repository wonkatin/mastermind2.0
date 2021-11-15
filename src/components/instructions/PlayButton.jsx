export default function PlayButton(props) {
    const handlePlay = () => {
        props.setModal(false)
    }
    return (
        <div className="play" onClick={handlePlay}>
            Play
        </div>
    )
}