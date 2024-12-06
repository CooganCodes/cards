import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
function Login() {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setPassword] = useState('');
    const [message, setMessage] = useState('');
    async function doLogin(event) {
        event.preventDefault();
        const obj = { login: loginName, password: loginPassword };
        const js = JSON.stringify(obj);
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                body: js,
                headers: { 'Content-Type': 'application/json' },
            });
            const res = await response.json();
            if (res.id <= 0)
                setMessage('Invalid username or password');
            else {
                const user = { firstName: res.firstName, lastName: res.lastName, id: res.id };
                localStorage.setItem('user_data', JSON.stringify(user));
                window.location.href = '/cards';
            }
        }
        catch (error) {
            alert(error.toString());
        }
    }
    return (_jsxs("div", { id: "loginDiv", children: [_jsx("span", { id: "inner-title", children: "PLEASE LOG IN" }), _jsx("br", {}), _jsx("input", { type: "text", placeholder: "Username", onChange: (e) => setLoginName(e.target.value) }), _jsx("br", {}), _jsx("input", { type: "password", placeholder: "Password", onChange: (e) => setPassword(e.target.value) }), _jsx("br", {}), _jsx("input", { type: "submit", value: "Do It", onClick: doLogin }), _jsx("span", { children: message })] }));
}
export default Login;
