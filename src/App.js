import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Address from './components/Address';
import PacketLatency from './PacketLatency';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="Your Public IPv4 Address">
        <Address version="v4" />
      </Exhibit>
      <Exhibit heading="Your Public IPv6 Address">
        <Address version="v6" />
      </Exhibit>
      <PacketLatency />
    </div>
  );
}

export default App;
