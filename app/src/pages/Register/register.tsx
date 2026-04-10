
import { useState } from "react";
import checkStr from "../../assets/CheckStr";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [layout, setLayout] = useState("main");


    //   function login() {
    // localStorage.setItem("UserId", "1");
    // setLayout('main')

    // }


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
 
        localStorage.setItem("UserId", "1");
        setLayout('main')
        

    };

    return (
        <div>
            <h1>Registration</h1>
            <h3>Введите почту</h3>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            />
            
            <h3>Введите пароль</h3>
            <input value={password} onChange={(e) => setPassword(e.target.value)}
            />
            
            <h3>Подтвердите пароль</h3>
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br/>
            <br/>
            <button onClick={handleSubmit}>Подтвердить</button>
        </div>
    );
}



