import React from 'react'
import './Main.css'
import { useState } from 'react'

const Main = () => {
    let h1 = document.querySelector("h1");

    const [inputDegeri, setInputDegeri] = useState('');
    const handleInputChange = (event) => {
        setInputDegeri(event.target.value);
    }


    const [email, setEmail] = useState('');
    const inputEmail = (e) =>{
        setEmail(e.target.value)
    }

    const[user, setUser] = useState('');
    const inputUser = (e2) =>{
        setUser(e2.target.value)
    }
    
    function num() {
        let a = inputDegeri.endsWith("ru")
        let b = email

        if(a == true && b.length >= 8){
           h1.innerHTML = "Ugurla Qeyddiyyatdan Kecdiz"
           setEmail("")
           setInputDegeri("")
           setUser("")
           
        } else if (a == false && b.length < 8) {
            alert("Deyerleri duzgun daxil edin")
            h1.innerHTML =""
        } else if (a == false){
            alert("emailin sonu 'ru' ile bitmelidir")
            h1.innerHTML =""
        } else if (b.length < 8){
            alert("Sifre uzunlungu en azi 8 simvol olmalidir")
            h1.innerHTML =""
        }
    }

    return (
        <div className='userlogin'>
            <center>
                <h1></h1>
            <input type="text" value={user} onChange={inputUser} placeholder='User' />
                <br />
                <input value={inputDegeri} onChange={handleInputChange}  className='email1' type="email" placeholder='Email' />
                <br />
                <input value={email} onChange={inputEmail} className='pass' type="password" placeholder='Password' />
                <br />
                <button onClick={num}>Login</button>
            </center>
        </div>
    )
}

export default Main
