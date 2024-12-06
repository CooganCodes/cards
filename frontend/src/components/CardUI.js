import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
function CardUI() {
    const [card, setCard] = useState('');
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('');
    const [results, setResults] = useState('');
    async function addCard(event) {
        event.preventDefault();
        const obj = { userId: 1, card };
        const js = JSON.stringify(obj);
        try {
            const response = await fetch('http://localhost:5000/api/addcard', {
                method: 'POST',
                body: js,
                headers: { 'Content-Type': 'application/json' },
            });
            const res = await response.json();
            if (res.error)
                setMessage(`Error: ${res.error}`);
            else
                setMessage('Card added successfully');
        }
        catch (error) {
            setMessage(error.toString());
        }
    }
    async function searchCard(event) {
        event.preventDefault();
        const obj = { userId: 1, search };
        const js = JSON.stringify(obj);
        try {
            const response = await fetch('http://localhost:5000/api/searchcards', {
                method: 'POST',
                body: js,
                headers: { 'Content-Type': 'application/json' },
            });
            const res = await response.json();
            setResults(res.results.join(', ') || 'No cards found');
        }
        catch (error) {
            setResults(error.toString());
        }
    }
    return (_jsxs("div", { id: "cardDiv", children: [_jsx("h2", { children: "Manage Cards" }), _jsx("input", { type: "text", placeholder: "Card to Add", onChange: (e) => setCard(e.target.value) }), _jsx("button", { onClick: addCard, children: "Add Card" }), _jsx("br", {}), _jsx("input", { type: "text", placeholder: "Search Cards", onChange: (e) => setSearch(e.target.value) }), _jsx("button", { onClick: searchCard, children: "Search" }), _jsx("p", { children: message }), _jsxs("p", { children: ["Results: ", results] })] }));
}
export default CardUI;
