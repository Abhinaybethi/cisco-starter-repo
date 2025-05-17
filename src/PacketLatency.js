import React, { useEffect, useState } from 'react';

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:55455');

    socket.onopen = () => {
      console.log('Connected to Pylon WebSocket');
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const sentTime = data.timestamp;
        const currentTime = Date.now();
        const packetLatency = currentTime - sentTime;
        setLatency(packetLatency);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="p-4 m-4 bg-white rounded shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-2">Packet Latency</h2>
      {latency !== null ? (
        <p className="text-xl">{latency} ms</p>
      ) : (
        <p className="text-gray-500">Waiting for packets...</p>
      )}
    </div>
  );
};

export default PacketLatency;
