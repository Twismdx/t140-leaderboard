import { useState, useEffect } from 'react';
import '../App.css';
import Leaders from '../JSXComponents/Leaders';
import title from './Scoreboard';

function Leaderboard({ eventId }) {

  const [ rankings, setRankings ] = useState([]);

  var myHeaders = new Headers();
    myHeaders.append("Ocp-Apim-Subscription-Key", "0c586357689b4d308e362d2c03de77a3");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const GetLeaderboard = async () => {
  const response = await fetch(`https://t140apim.azure-api.net/T140LivestreamApi/GetLeaderboard?T140EventId=`+eventId, requestOptions)
  const data = await response.json();

    setRankings(data);
  }

  useEffect(() => {
    GetLeaderboard();
  }, []);

  return ( 

    <div className="leaderboard">
      <Leaders rankings={rankings} title={title} />
    </div>
  )
}

export default Leaderboard;