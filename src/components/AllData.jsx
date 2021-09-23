//React imports
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import UserContext from './UserContext';

//Pulls in Users account
function AllData() {
	const ctx = React.useContext(UserContext);

	//Bootstrap Card wrapper
	return (
		<>
			<Container fluid className='bg-white justify-content-center vh-100% p-5'>
				<div className='p-5'>
					<h2 className=' text-center mx-auto'>Accounts:</h2>
					<br />
					{ctx.users.map((user, index) => {
						return (
							<Card
								className='bg-info border-dark text-left mx-auto'
								style={{ width: '25%' }}
							>
								<Card.Header className='border-dark p-2'>
									<h3>{user.name}</h3>
								</Card.Header>
								<Card.Body>
									Email: {user.email}
									<br />
									Password: {user.password}
									<br />
									Balance: ${user.balance}
									<br />
									{ctx.history
										.filter((item) => item.account.name === user.name)
										.map((item) => {
											return (
												<div>
													{item.isDeposit ? 'Deposit' : 'Withdraw'}: Amount- $
													{''}
													{item.amount}
												</div>
											);
										})}
								</Card.Body>
							</Card>
						);
					})}
				</div>

				<Card
					id='About'
					className='bg-info text-left mx-auto'
					style={{ width: '100%', position: 'absolute; bottom' }}
				>
					<Card.Header className='border-bottom border-dark'>
						<h3>About Us</h3>
					</Card.Header>
					<Card.Body>
						<h5>Contact Information</h5>
						<Card.Text>
							<a
								className='anchor text-black'
								href='https://github.com/RSweeten01'
							>
								<i className='fab fa-github-square'></i>
								RSweeten01.GitHub
							</a>
							<br />
							<a
								className='anchor text-black'
								href='https://www.linkedin.com/in/robert-sweeten-b68020b0/'
							>
								<i className='fab fa-linkedin'></i>
								RSweeten01.Linkedin
							</a>
							<br />
							<h5>Purpose</h5>
							The purpose of this Appliction is to demostrate the development of
							Robert Sweeten's understadning of Front End Web Development during
							the MIT xPro Program. This is entirely a fake bank and none of the
							statements or information included within are to be take as real
							or finational advice.
						</Card.Text>
					</Card.Body>
					<br />
				</Card>
			</Container>
		</>
	);
}

//React Export
export default AllData;
