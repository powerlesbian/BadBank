//React imports
import React from 'react';
import Container from 'react-bootstrap/Container';
// import { Row, Col } from 'react-bootstrap/';
import Card from 'react-bootstrap/Card';
import UserContext from './UserContext';

//Deposit State creation
const Deposit = () => {
	const ctx = React.useContext(UserContext);
	const [deposit, setDeposit] = React.useState(0);
	const [account, setAccount] = React.useState(0);
	// const [history, setHistory] = React.useState(0);

	//Deposit logic
	const handleDeposit = () => {
		if (isNaN(deposit)) {
			alert('Deposit not valid');
			return false;
		}
		if (deposit < 0) {
			alert('No Negative deposit');
			return false;
		}
		ctx.users[account].balance += parseInt(deposit);
		ctx.history.push({
			account: ctx.users[account],
			amount: deposit,
			isDeposit: true,
		});
		return setDeposit(0);
	};

	// Bootstrap Form (Cards used)
	return (
		<Container fluid className='bg-white justify-content-center vh-100% p-5'>
			<div className='p-5'>
				<Card className='bg-info text-left mx-auto' style={{ width: '25%' }}>
					<Card.Header
						className='border-dark'
						style={{ padding: '.75rem 1.25rem' }}
					>
						<h4>Deposit</h4>
					</Card.Header>
					<Card.Body className='border-dark' style={{ padding: '1.25rem' }}>
						<>
							Account Balance: ${ctx.users[account].balance}
							<br />
							To Deposit: ${deposit}
							<br />
							<br />
							Name
							<br />
							<select
								className='form-group'
								id='account_name'
								onChange={(e) => setAccount(e.currentTarget.value)}
							>
								{ctx.users.map((user, index) => {
									return <option value={index}>{user.name}</option>;
								})}
							</select>
							<br />
							Amount
							<br />
							<input
								type='text'
								min='0'
								className='form-control'
								id='amount'
								placeholder='Enter Amount'
								value={deposit}
								onChange={(e) => setDeposit(e.currentTarget.value)}
							/>
							<br />
							<button
								type='submit'
								className='btn btn-light'
								onClick={handleDeposit}
								disabled={!deposit ? true : false}
							>
								Deposit
							</button>
						</>
					</Card.Body>
				</Card>
			</div>
			<br /> <br /> <br /> <br /> <br />
			<Card className='bg-info text-left mx-auto' style={{ width: '100%' }}>
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
						statements or information included within are to be take as real or
						finational advice.
					</Card.Text>
				</Card.Body>
				<br />
			</Card>
		</Container>
	);
};

//React Export Component
export default Deposit;
