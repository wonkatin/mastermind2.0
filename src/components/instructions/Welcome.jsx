import NextButton from "./NextButton";

export default function Welcome(props) {
    return (
        <div className="welcome">
            <div className="message">
                Welcome to Mastermind, the ultimate code-breaking game. 
                Test your logical deduction skills and see if you can 
                break the code in ten turns or less. Start by guessing and 
                collect clues from the computer as you go. As you collect more clues, 
                analyze them together to determine the secret code. You may find it 
                hard at first, but before you know it you will be a MASTERMIND! 

            </div>
            <NextButton setInstructions={props.setInstructions}/>
        </div>
    )
}