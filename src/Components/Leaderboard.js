import { useState, useEffect } from 'react';
import '../App.css';
import Leaders from '../JSXComponents/Leaders';
import title from './Scoreboard';
import $ from 'jquery';

function Leaderboard({ eventId }) {

  const [ rankings, setRankings ] = useState([]);

  useEffect(() => { 

    var params = (eventId);
    var urlPrefix = "https://t140apim.azure-api.net/demoT140LivestreamApi/GetScores?T140EventId=";
    var url = urlPrefix + encodeURIComponent(params)
  
    $.ajax({
      url: url,
      data: {
        "Ocp-Apim-Subscription-Key": "a5a933d50f7b40928d1e0c0612903033"
      },
      type: "GET",
      dataType: "json",
    })
    .then(response => response.json())
    .then(
      (data) => {   

        setRankings(data);
      })
  
    }, [])
  
  return ( 

    <div className="leaderboard">
      <Leaders rankings={rankings} title={title} />
    </div>
  )
}

export default Leaderboard;