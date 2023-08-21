import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchData } from './redux/actions/cardActions';

function App() {

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return (
    <div className="App">
      <Header search={search}  setSearch={setSearch} handleChange={handleChange}></Header>

      <div className="body">
        <div className='card'>
          <div></div>
        </div>

        <div className='pagenation'></div>
      </div>
    </div>
  );
}

export default App;