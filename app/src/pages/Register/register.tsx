
import { useState } from "react";
import checkStr from "../../assets/CheckStr";
import { Navigate } from "react-router";



export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


      function login() {
    localStorage.setItem("UserId", "1");
    <Navigate to="/"/>

    }


    const handleSubmit = () => {
        const isValid = checkStr (password, confirmPassword);
        
        if (!isValid) {
            setError("Пароль должен содержать: латинские буквы, минимум 1 заглавную букву, не менее 8 символов. А так же пароли должны совпадать");
            return;
        }
         if (!email) { 
            setError("Введите email");
             return;
            } 
        setError("");  
        login()

    };

    return (
        <div>
            <h1>Registration</h1>
            
            <h3>Введите почту</h3>
            <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <h3>Введите пароль</h3>
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <h3>Подтвердите пароль</h3>
            <input 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            
            <br/>
            <br/>
            
            {error && <p style={{color: "orange"}}>{error}</p>}
            
            <button onClick={handleSubmit}>Подтвердить</button>
        </div>
    );
}



