import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {

  const [search, setSearch] = useState('');
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <Header search={search}  setSearch={setSearch} handleChange={handleChange}></Header>
    </div>
  );
}

export default App;