//React Imports
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import UserContext from './UserContext';

//Account State Creation
const CreateAccount = () => {
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState('');
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const ctx = React.useContext(UserContext);

	// Logic for Checking errors
	function validate(field, label) {
		if (!field || (label === 'password' && password.length < 8)) {
			if (label === 'password' && password && password.length < 8) {
				setStatus('Error: ' + label);
				alert(`${label} must be at least 8 characters long`);
				return false;
			}
			setStatus('Error: ' + label);
			alert(`No ${label} has been entered`);
			setTimeout(() => setStatus(''), 3000);
			return false;
		}
		return true;
	}

	// Account creation logic
	function handleCreate() {
		console.log(name, email, password);
		if (!validate(name, 'name')) return;
		if (!validate(email, 'email')) return;
		if (!validate(password, 'password')) return;
		ctx.users.push({ name, email, password, balance: 100 });
		setShow(false);
	}

	// Resets the form to its initial state
	function clearForm() {
		setName('');
		setEmail('');
		setPassword('');
		setShow(true);
	}

	// Bootstrap Form (Cards used)
	return (
		<Container fluid className='bg-white justify-content-center vh-100% p-5'>
			<div className='justifty-content-center text-center p-5'>
				<Card className='bg-info text-center mx-auto' style={{ width: '40%' }}>
					<Card.Header
						className='border-dark'
						align='left'
						style={{ padding: '.75rem 1.25rem' }}
					>
						<h4>Create Account</h4>
					</Card.Header>
					<Card.Body
						className='border-dark'
						align='left'
						style={{ padding: '1.25rem' }}
					>
						{show ? (
							<>
								Name
								<br />
								<input
									type='input'
									className='form-control'
									id='name'
									placeholder='Enter name'
									value={name}
									onChange={(e) => setName(e.currentTarget.value)}
									required
									valid-feedback='valid'
									invaid-feedback='Name Required'
								/>
								<br />
								Email address
								<br />
								<input
									type='input'
									className='form-control'
									id='email'
									placeholder='Enter email'
									value={email}
									onChange={(e) => setEmail(e.currentTarget.value)}
								/>
								<br />
								Password
								<br />
								<input
									type='password'
									className='form-control'
									id='password'
									placeholder='Enter password'
									value={password}
									onChange={(e) => setPassword(e.currentTarget.value)}
									span
									help-block='Password must be at least 8 charaters in length'
								/>
								<br />
								<button
									type='submit'
									className='btn btn-light'
									onClick={handleCreate}
									disabled={
										!name && !email && password.length < 8 ? true : false
									}
								>
									Create Account
								</button>
							</>
						) : (
							<>
								<h6>Success</h6>
								<button
									type='submit'
									className='btn btn-light'
									onClick={clearForm}
								>
									Add another account
								</button>
							</>
						)}
					</Card.Body>
				</Card>
			</div>
			<br /> <br /> <br />
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

// React component Export
export default CreateAccount;
