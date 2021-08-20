import {useState} from "react";
const Guess = () =>{
    const [number, setNumber] = useState(Math.floor(Math.random()*10))
    const [message, setMessage] = useState('')
    const [guess, setGuess] = useState('')
    const [freeAttempt, setFreeAttempt] = useState(3)
    const [gamer, setGamer] = useState(0)
    const [comp, setComp] = useState(0)
    const num = (e) => {
        setGuess(e.target.value)
    }
    const check = () =>{
        if (number.toString() === guess){
            setMessage('You won!')
            setGamer(gamer+1)
        } else {
            setFreeAttempt(freeAttempt-1)
        } if (freeAttempt ===1){
            setMessage('You lose!')
            setComp(comp+1)
        }
    }
    const reset = () =>{
        setNumber('')
        setMessage('')
        setFreeAttempt('')
        setGuess('')
    }
    return(
        <>
            <div className='content'>
            <h1>Guess the number in 3 tries!</h1>
            <div>
                <input onChange={num} type="number" placeholder='Enter the number' value={guess}/>
                <button onClick={check}>CHECK</button>
                <button onClick={reset}>RESET</button>
            </div>
            <div>{message}</div>
            <div className='subtitle'>You have {freeAttempt} attempts left!</div>
            <h3>Player: {gamer}</h3>
            <h3>Computer: {comp}</h3>
            </div>
        </>
    )
}
export default Guess;