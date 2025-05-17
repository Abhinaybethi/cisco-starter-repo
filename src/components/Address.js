import React, { useEffect, useState } from 'react';
import './Address.css';

function Address({ version }) {
  const [ip, setIP] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const url =
      version === 'v6'
        ? 'https://api64.ipify.org?format=json'
        : 'https://api.ipify.org?format=json';

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch IP');
        return res.json();
      })
      .then((data) => setIP(data.ip))
      .catch(() => setError('Unable to retrieve IP address.'));
  }, [version]);

  return (
    <div className="address">
      <h3>{version === 'v6' ? 'IPv6' : 'IPv4'} Address</h3>
      {error ? (
        <p className="error">{error}</p>
      ) : ip ? (
        <p className="ip">{ip}</p>
      ) : (
        <p className="loading">Fetching address...</p>
      )}
    </div>
  );
}

export default Address;
