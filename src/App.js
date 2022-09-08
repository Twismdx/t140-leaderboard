import React, { useState, useEffect } from 'react';
import Leaders from './JSXComponents/Leaders.jsx';
import axios from 'axios';

function App() {
	const [eventId, setEventId] = useState([]);
	const [rankings, setRankings] = useState([]);
	const [title, settitles] = useState([]);

	useEffect(() => {
		var urlPrefix =
			'https://nwkbqoiyrkiyklonvezv.supabase.co/rest/v1/livestream';
		var url = urlPrefix;

		axios({
			url: url,
			headers: {
				apikey:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53a2Jxb2l5cmtpeWtsb252ZXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5OTk5ODAsImV4cCI6MTk3NzU3NTk4MH0.cNsf3ZcAMPE3N8aWFjcckNHeqyUGuhjOvd0Q_w8-fow',
			},
			type: 'GET',
			dataType: 'json',
		}).then((response) => {
			setEventId(response.data[0].t140EventId);
		});
	}, []);

	var params = eventId;
	var urlPrefix2 =
		'https://t140apim.azure-api.net/demoT140LivestreamApi/GetLeaderboard?T140EventId=';
	var url2 = urlPrefix2 + encodeURIComponent(params);

	axios({
		url: url2,
		headers: {
			'Ocp-Apim-Subscription-Key': 'a5a933d50f7b40928d1e0c0612903033',
		},
		type: 'GET',
		dataType: 'json',
	}).then((response) => {
		setRankings(response.data);
		settitles(response.data);
	});

	return (
		<div>
			<Leaders title={title} rankings={rankings} />
		</div>
	);
}

export default App;
