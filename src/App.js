import {React,useState,useEffect} from 'react';
import List from './components/List';
import './App.css';

function App() {
const [data, setData] = useState([]);

useEffect(()=>{
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(res=>res.json())
    .then((list)=>{
      // console.log(list)
      setData(list);
    })
  },[])

// console.log(data)



  return (
    <div className='tableContainer'>
      <table>
        <tbody>
          {
            data.map((value,index)=>{
              return <List key={index+1}  rowData={value}/>

            })
          }
        </tbody>
      </table>      
    </div>
  );
}

export default App;
