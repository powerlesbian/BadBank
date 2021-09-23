//React Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

//Navbar Component, Used across the entire Application
const NavBar = () => {
	return (
		<>
			<Navbar
				className='border-dark'
				collapseOnSelect
				expand='lg'
				bg='dark'
				variant='dark'
			>
				<Container fluid style={{ padding: ' 0 1rem' }}>
					<Navbar.Brand href='#'>
						<h4>BadBank</h4>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link
								href='#/home/'
								data-toggle='tooltip'
								data-placement='auto bottom'
								title='This is the Home Page'
							>
								<h6>Home</h6>
							</Nav.Link>
							<Nav.Link
								href='#/CreateAccount/'
								data-toggle='tooltip'
								data-placement='auto bottom'
								title='Click here to create a new account'
							>
								<h6>Create Account</h6>
							</Nav.Link>
							<Nav.Link
								href='#/deposit/'
								data-toggle='tooltip'
								data-placement='auto bottom'
								title='Click here to deposit'
							>
								<h6>Deposit</h6>
							</Nav.Link>
							<Nav.Link
								href='#/withdraw/'
								data-toggle='tooltip'
								data-placement='auto bottom'
								title='Click here to withdraw'
							>
								<h6>Withdraw</h6>
							</Nav.Link>
							<Nav.Link
								href='#/alldata/'
								data-toggle='tooltip'
								data-placement='auto bottom'
								title='Click here to view all current accounts'
							>
								<h6>AllData</h6>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

//React Exports
export default NavBar;
