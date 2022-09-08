import React, { useState, useEffect} from 'react';
import $ from 'jquery';
import Leaders from './JSXComponents/Leaders.jsx';

function App() {
  
    const [ eventId, setEventId ] = useState([]);
    const [ rankings, setRankings ] = useState([]);
    const [ title, settitles ] = useState([]);
    
    useEffect(() => { 

        var urlPrefix = "https://nwkbqoiyrkiyklonvezv.supabase.co/rest/v1/livestream";
        var url = urlPrefix

       async function doAjax() {
            $.ajax({
            url: url,
            headers: {
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53a2Jxb2l5cmtpeWtsb252ZXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5OTk5ODAsImV4cCI6MTk3NzU3NTk4MH0.cNsf3ZcAMPE3N8aWFjcckNHeqyUGuhjOvd0Q_w8-fow"
            },
            type: "GET",
            dataType: "json",
            })
            const data = await (function (res) {
                    console.log(data);
                    setEventId(data[0].t140EventId);  
        
  
      var params = data[0].t140EventId;
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
            settitles(data);
        })
        })
    }
        }, [])

    return (
        <div>
            <Leaders title={title} rankings={rankings}/>
        </div>
    )
}
  
  export default App;