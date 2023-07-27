import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Menu />
      </section>
    </div>
  );
}

export default App;
