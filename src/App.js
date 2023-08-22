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
        <div className='card'>
          {
            cardData ? cardData.map((item, i) => {
              return(
                <div style={{border: "1px solid #787878", padding: "15px"}} key={i}>
                  <div style={{display: 'flex', borderBottom: "1px solid #787878", height: "55px"}}>
                    <div style={{textAlign: 'start', fontWeight: 'bold', fontSize: "20px", marginRight: "7px", width: "15%"}}>Title : </div>
                    <div style={{width: "85%", textAlign: "start"}}>{item.title}</div>
                  </div>
                  
                  <div style={{marginTop: "10px"}}>
                    <div style={{textAlign: 'start', fontWeight: 'bold', fontSize: "20px", marginRight: "7px"}}>Body</div>
                    <div style={{textAlign: 'start', fontSize: "16px", marginTop: "5px"}}>{item.body}</div>
                  </div>
                </div>
              )
            }) 
            : 
            "No card"
          }
        </div>

        <div className='pagenation'></div>
      </div>
    </div>
  );
}

export default App;