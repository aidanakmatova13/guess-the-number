import {useEffect, useState} from "react";
const Guess = () =>{
    const [number, setNumber] = useState(Math.floor(Math.random()*10))
    const [message, setMessage] = useState('')
    const [freeAttempts, setFreeAttempts] = useState(3)
    const [gamer, setGamer] = useState( localStorage.getItem('gamer') || 0)
    const [comp, setComp] = useState(localStorage.getItem('comp') || 0)
    const [guess, setGuess] = useState('')
    const [hintMessage, setHintMessage] = useState('')
    const refresh =() =>{
        setGamer(0)
        setComp(0)
        setGuess('')
        setFreeAttempts(3)
        setMessage('')
    }
    const num = (e) => {
        setGuess(e.target.value)
    }
    const check = () =>{
        setFreeAttempts(freeAttempts-1)
    }
    useEffect(() =>{
        if (number !== +guess && freeAttempts === 0){
            setMessage('You lose :(')
            setGuess('')
            setFreeAttempts('')
            setComp(comp+1)
        } else  if (number === +guess){
            setGamer(gamer+1)
            setMessage('You won!!!')
            setFreeAttempts('')
            setGuess('')
            // setFreeAttempts(0)
        }
    }, [freeAttempts])

    const reset = () =>{
        setNumber(Math.floor(Math.random()*10))
        setMessage('')
        setFreeAttempts(3)
        setGuess('')
        setHintMessage('')
    }
    useEffect(() =>{
        localStorage.setItem('comp', comp);
        localStorage.setItem('gamer',gamer);
    }, [gamer, comp])

    const hint = () => {
        if (number > guess){
            setHintMessage('(Недобор)')
        } else if (number < guess) {
            setHintMessage('(Перебор)')
        } else if (number === +guess){
            setHintMessage('')
        }
    }



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

    return(
        <>
            <div className='content'>
            <h1>Guess the number in 3 tries!</h1>
            <div>
                <input onChange={num} type={number} placeholder='Enter the number' value={guess}/>
                <button onClick={check} disabled={!guess.trim() || !freeAttempts}>CHECK</button>
                <button onClick={reset} >RESET</button>
                <button onClick={refresh}>REFRESH</button>
                <button onClick={hint} disabled={!guess.trim()}>HINT</button>

            </div>
            <div className='message'>{message}</div>
                {
                    Boolean(freeAttempts)&&<div className='subtitle'>You have {freeAttempts} {freeAttempts === 1 ? 'attempt' : 'attempts' } left!</div>
                }
                <div className="subtitle">{hintMessage}</div>
            <h3>Player: {gamer}</h3>
            <h3>Computer: {comp}</h3>
            </div>
        </>
    )
}

export default Guess;








//не нажимается когда поле пустое -tick-
//недобор, перебор  //есть возможность играть с подсказками или без
//показывать процент поражений побед