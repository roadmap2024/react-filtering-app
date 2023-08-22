import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Import Components Section
import Header from './components/Header';
import Pagenation from './components/Pagenation';
// Import Actions Section
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

  const [currentPage, setCurrentPage] = useState(1);

  const cardData = useSelector((state) => state.CardReducers.post);

  const pageCount = Math.ceil(cardData.length / 8);      //  pageCount is total page
  const firstItemIndex = (currentPage - 1) * 8;          //  firstItemIndex is previous page index
  const lastItemIndex = firstItemIndex + 8;              //  lastItemIndex is previous page + item_count
  const currentItems = cardData.slice(firstItemIndex, lastItemIndex);     // currentItems is total array cut item_count
  
  return (
    <div className="App">
      <Header search={search}  setSearch={setSearch} handleChange={handleChange}></Header>

      <div className="body">
        <div className='card'>
          {
            currentItems ? currentItems.map((item, i) => {
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

        <div style={{display: 'flex', justifyContent: "center", width: "100%", marginBottom: "50px"}}>
          <Pagenation pageCount={pageCount} currentPage={currentPage} onChange={(event, page) => setCurrentPage(page)}></Pagenation>
        </div>
      </div>
    </div>
  );
}

export default App;