import React, { useEffect, useState } from 'react'

const StartingPage = () => {
	const [date, setDate] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		let intervalId = setInterval(() => {
			setDate(new Date().toLocaleTimeString());
		}, 1000)

		return (() => {
			clearInterval(intervalId);
		})
	})

	return (
		<>
			<h2 style={{ textAlign: 'center' }}>Welcome to Social Network</h2>
			<div style={{ fontSize: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				{date}
			</div>
		</>

	)
}

export default StartingPage
