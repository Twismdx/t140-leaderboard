import React, {useState, useEffect} from 'react';
import Leaderboard from './Components/Leaderboard';
import $ from 'jquery';

const App = () => {
        
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
  
  export default App;