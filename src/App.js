import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>フロントマネジメント株式会社</h1>
        <h2>従業員専用サイト</h2>
        <button>客室管理</button>
        <button>施設管理</button>
        <button>ゲストセンター</button>
        <button>オペレーション</button>
      </header>
    </div>
  );
}

export default App;
