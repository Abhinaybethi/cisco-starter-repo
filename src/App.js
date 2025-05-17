import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="Sample Section 1">
        <p>This is some content inside the first exhibit.</p>
      </Exhibit>
      <Exhibit heading="Sample Section 2">
        <p>Here’s another section with different data.</p>
      </Exhibit>
    </div>
  );
}

export default App;
