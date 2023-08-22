import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  const cardData = useSelector((state) => state.CardReducers.post);

  return (
    <div className="App">
      <Header search={search}  setSearch={setSearch} handleChange={handleChange}></Header>

      <div className="body">
        <div className='card' style={{display: "flex"}}>
          {
            cardData ? cardData.map((item, i) => {
              return(
                <div key={i}>
                  <div>Title</div>
                  <div>{item.title}</div>
                  <div>Body</div>
                  <div>{item.body}</div>
                </div>
              )
            }
              
            ) : "No card"
          }
        </div>

        <div className='pagenation'></div>
      </div>
    </div>
  );
}

export default App;