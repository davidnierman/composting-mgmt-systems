import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)


	const bodystyle = {
		color: "white",
		// backgroundColor: "DodgerBlue",
		height: "90vh",
		fontFamily: "Arial",
		backgroundImage: "url(/CompostBin.jpg)",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		// position: 'absolute'
	  };

	return (
			<div style={bodystyle}>	
				<br></br>			
				<h3>Welcome to Composting Bin Mgmt</h3>
				<br></br>
				<p> This is an all in one portal that will allow you to:</p>
				<ul>
					<li>Add locations for composting pickups</li>
					<li>Turn on and off composting services/pickups</li>
					<li>Order bins for your locations</li>
					<li>Manage your bins</li>
				</ul>

				<Button variant="warning" size="lg" style={{margin: "20px"}}>
					<Link to='sign-up/'>Sign Up</Link>
				</Button>{' '}
				{'	'}
				<Button variant="warning" size="lg">
					<Link to='sign-in/'>Sign In</Link>
				</Button>
			</div>
	)
}

export default Home
