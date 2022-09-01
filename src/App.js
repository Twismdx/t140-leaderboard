import { useState, useEffect } from 'react';
import './App.css';
import Leaders from './Leaders';
import title from './Scoreboard';

function App() {
const [ rankings, setRankings ] = useState([]);

var myHeaders = new Headers();
myHeaders.append("Ocp-Apim-Subscription-Key", "0c586357689b4d308e362d2c03de77a3");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const getLeaderboard = async () => {
const response = await fetch("https://t140apim.azure-api.net/T140LivestreamApi/GetLeaderboard?T140EventId=2bb25d1b-2b98-493c-9dc5-e78538e3f42a", requestOptions)
const data = await response.json();

    setRankings(data);
  }

  useEffect(() => {
    getLeaderboard();
  }, []);

  return ( 
    <div className="leaderboard">
      <Leaders rankings={rankings} title={title} />
    </div>
  )
}

export default App;