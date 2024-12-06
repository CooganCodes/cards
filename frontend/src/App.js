import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/cards", element: _jsx(CardPage, {}) })] }) }));
}
export default App;
