import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Address from './components/Address';

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
    </div>
  );
}

export default App;
