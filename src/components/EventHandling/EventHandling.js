import React, { useState, useEffect } from 'react';

/** The Challenge: Show Alert when Typing
 * Store form data in state
 * Display alert if a particular word is entered into the form
 */

export default function Events(props) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (input === 'open sesame') {
      alert('you may pass');
    }
  }, [input]);

  return (
    <div className="event-container">
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        value={input}
        placeholder="Super duper secret"
        onChange={e => setInput(e.target.value)}
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>
    </div>
  );
}
