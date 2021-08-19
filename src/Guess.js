import {useState} from "react";
const Guess = () =>{
    const [number, setNumber] = useState(Math.floor(Math.random()*10))
    const [message, setMessage] = useState('')
    const [guess, setGuess] = useState('')
    const [freeAttempt, setFreeAttempt] = useState(3)
    const num = (e) => {
        setGuess(e.target.value)
    }
    const check = () =>{
        if (number.toString() === guess){
            setMessage('Вы победили')
        } else {
            setFreeAttempt(freeAttempt-1)
        } if (freeAttempt ===1){
            setMessage('Вы проиграли')
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
            <h2>Угадай число с 3 попыток</h2>
            <div>
                <input onChange={num} type="number" placeholder='Введите число' value={guess}/>
            </div>
            <button onClick={check}>CHECK</button>
            <button onClick={reset}>RESET</button>
            <div>{message}</div>
            <div>У вас осталось {freeAttempt} попытки</div>
        </>
    )
}
export default Guess;