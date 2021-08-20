import {useEffect, useState} from "react";
const Guess = () =>{
    const [number, setNumber] = useState(Math.floor(Math.random()*10))
    const [message, setMessage] = useState('')
    const [freeAttempts, setFreeAttempts] = useState(3)
    const [gamer, setGamer] = useState( localStorage.getItem('gamer') || 0)
    const [comp, setComp] = useState(localStorage.getItem('comp') || 0)
    const [guess, setGuess] = useState('')


    const num = (e) => {
        setGuess(e.target.value)
    }
    const check = () =>{
        setFreeAttempts(freeAttempts-1)
    }
    useEffect(() =>{
        if (number !== +guess && freeAttempts === 0 ){
            setMessage('You lose :(')
            setComp(comp+1)
        } else  if (number === +guess){
            setGamer(gamer+1)
            setMessage('You won!!!')
            // setFreeAttempts(0)
        }
    }, [freeAttempts])

    // const check = () =>{
    //     if (number === +guess){
    //         setMessage('You won!!!')
    //         setGamer(gamer+1)
    //     } else {
    //         setFreeAttempts(freeAttempts-1)
    //     } if (freeAttempts === 1){
    //         setMessage('You lose :(')
    //         setComp(comp+1)
    //     }
    // }

    const reset = () =>{
        setNumber(Math.floor(Math.random()*10))
        setMessage('')
        setFreeAttempts(3)
        setGuess('')
    }
    useEffect(() =>{
        localStorage.setItem('comp', comp);
        localStorage.setItem('gamer',gamer);
    }, [gamer, comp])

    return(
        <>
            <div className='content'>
            <h1>Guess the number in 3 tries!</h1>
            <div>
                <input onChange={num} type="number" placeholder='Enter the number' value={guess}/>
                <button onClick={check} disabled={!freeAttempts && guess > 10}>CHECK</button>
                <button onClick={reset}>RESET</button>
                <button onClick="refresh">REFRESH</button>
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