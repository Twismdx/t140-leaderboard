import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import Leaders from './JSXComponents/Leaders';
import title from './Components/Scoreboard';

function App() {
        
    const [ eventId, setEventId ] = useState([]);
    
    useEffect(() => { 

        var urlPrefix = "https://nwkbqoiyrkiyklonvezv.supabase.co/rest/v1/livestream";
        var url = urlPrefix

       $.ajax({
            url: url,
            headers: {
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53a2Jxb2l5cmtpeWtsb252ZXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5OTk5ODAsImV4cCI6MTk3NzU3NTk4MH0.cNsf3ZcAMPE3N8aWFjcckNHeqyUGuhjOvd0Q_w8-fow"
            },
            type: "GET",
            dataType: "json",
            })
            .then(function (data) {
                    console.log(data);
                    setEventId(data[0].t140EventId);  
                })
        
            }, [])

  
    return (
        <div className="App">
            <Leaderboard eventId={eventId}/>
        </div>
    )
}

function LeaderboardChild({ eventId }) {

    return (
      <>
        {eventId.map(eventId => (
          <li key={eventId.id}>{eventId.name}</li>
        ))}
      </>  
    );
  }
  
  function LeaderBoard(eventId) {
  
    const [ rankings, setRankings ] = useState([]);
  
    useEffect(() => { 
  
      var params = eventId;
      var urlPrefix = "https://t140apim.azure-api.net/demoT140LivestreamApi/GetScores?T140EventId=";
      var url = urlPrefix + encodeURIComponent(params)
    
          $.ajax({
          url: url,
          headers: {
            "Ocp-Apim-Subscription-Key": "a5a933d50f7b40928d1e0c0612903033"
          },
          type: "GET",
          dataType: "json",
        })
        .then(function (data) {
            setRankings(data)
        })
        }, [eventId])
    
    return ( 
  
      <div className="leaderboard">
        <Leaders rankings={rankings} title={title} />
      </div>
    )
  }
  
  export default App;