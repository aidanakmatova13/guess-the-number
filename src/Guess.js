import {useEffect, useState} from "react";
const Guess = () =>{
    const [number, setNumber] = useState(Math.floor(Math.random()*10))
    const [message, setMessage] = useState('')
    const [freeAttempts, setFreeAttempts] = useState(3)
    const [gamer, setGamer] = useState(0)
    const [comp, setComp] = useState(0)
    const [guess, setGuess] = useState('')
    const num = (e) => {
        setGuess(e.target.value)
    }
    const check = () =>{
        setFreeAttempts(freeAttempts-1)
    }
    useEffect(() =>{
        if (number !== +guess && freeAttempts === 0){
            setMessage('You lose :(')
            setComp(comp+1)
        } else  if (number === +guess){
            setMessage('You won!!!')
            setGamer(gamer+1)
            setFreeAttempts(0)
        }
    }, [freeAttempts])

    // const check = () =>{
    //     if (number === +guess){
    //         setMessage('You won!!!')
    //         setGamer(gamer+1)
    //     } else {
    //         setFreeAttempt(freeAttempt-1)
    //     } if (freeAttempt === 1){
    //         setMessage('You lose :(')
    //         setComp(comp+1)
    //     }
    // }

    const reset = () =>{
        setNumber('')
        setMessage('')
        setFreeAttempts(3)
        setGuess('')
    }
    return(
        <>
            <div className='content'>
            <h1>Guess the number in 3 tries!</h1>
            <div>
                <input onChange={num} type="number" placeholder='Enter the number' value={guess}/>
                <button onClick={check} disabled={!freeAttempts}>CHECK</button>
                <button onClick={reset}>RESET</button>
            </div>
            <div className='message'>{message}</div>
                {
                    Boolean(freeAttempts)&&<div className='subtitle'>You have {freeAttempts} {freeAttempts === 1 ? 'attempt' : 'attempts' } left!</div>
                }
            <h3>Player: {gamer}</h3>
            <h3>Computer: {comp}</h3>
            </div>
        </>
    )
}
export default Guess;