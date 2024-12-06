import { useState } from 'react';

function CardUI() {
  const [card, setCard] = useState('');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [results, setResults] = useState('');

  async function addCard(event: any): Promise<void> {
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
      if (res.error) setMessage(`Error: ${res.error}`);
      else setMessage('Card added successfully');
    } catch (error) {
        setMessage((error as any).toString());
    }
  }

  async function searchCard(event: any): Promise<void> {
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
    } catch (error) {
        setResults((error as any).toString());
    }
  }

  return (
    <div id="cardDiv">
      <h2>Manage Cards</h2>
      <input
        type="text"
        placeholder="Card to Add"
        onChange={(e) => setCard(e.target.value)}
      />
      <button onClick={addCard}>Add Card</button>
      <br />
      <input
        type="text"
        placeholder="Search Cards"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchCard}>Search</button>
      <p>{message}</p>
      <p>Results: {results}</p>
    </div>
  );
}

export default CardUI;
