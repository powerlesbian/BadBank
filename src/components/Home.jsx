//React Import
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

//Landing Page for the Page Application
const Home = () => {
	//Bootstrap Container/Card Used for Display
	return (
		<Container fluid className='bg-white justify-content-center vh-100%'>
			<div className='justifty-content-center text-center p-5'>
				<Carousel fade className='vw-100% pt-5 ps-2 pe-5 pb-5'>
					<Carousel.Item align='center' interval={5500}>
						<Card
							className='bg-info text-center mx-auto'
							style={{ width: '100%' }}
						>
							<Card.Header className='border-bottom border-dark'>
								<h3>BadBank Landing Module</h3>
							</Card.Header>
							<Card.Body>
								<h5>Welcome to the Bank</h5>
								<Card.Text>
									You can move around using the navigation bar.
								</Card.Text>
							</Card.Body>
							<Card.Img
								className='p-3 justifty-content-center text-center mx-auto'
								variant='bottom'
								src='../bank.png'
								style={{ width: '25%' }}
							/>
							<br />
						</Card>
					</Carousel.Item>
					<Carousel.Item align='center' interval={5500}>
						<Container
							fluid
							className='bg-info text-center w-100 justify-content-center p-5 '
							style={{
								flex: 1,
								aspectRatio: 1.5,
								resizeMode: 'contain',
								borderRadius: 200 / 2,
								width: '50%',
							}}
						>
							<Row className='text-black'>
								<h3>BadBank Retirment Planning</h3>
							</Row>

							<Row>
								<Col className='p-5 mt-5 text-center text-black'>
									<br />
									<h5 className=' ps-5 '>Bad Bank Retirment Assistance </h5>
									<p className='ps-5'>
										Ask to speak with a retirment specialist to help jump start
										your retirment plans!
									</p>
								</Col>
								<Col>
									<img
										src='../Retirement-Planning.png'
										alt='Retirement'
										style={{
											flex: 1,
											aspectRatio: 1.5,
											resizeMode: 'contain',
											borderRadius: 200 / 2,
											width: '50%',
										}}
									></img>
								</Col>
							</Row>
						</Container>
					</Carousel.Item>
					<Carousel.Item align='center' interval={5500}>
						<Container
							fluid
							className='bg-info text-center w-100 justify-content-center p-5 '
							style={{
								flex: 1,
								aspectRatio: 1.5,
								resizeMode: 'contain',
								borderRadius: 200 / 2,
								width: '50%',
							}}
						>
							<Row className='text-black'>
								<h3>Phishing Scams Warning</h3>
							</Row>

							<Row>
								<Col className='p-5 mt-5 text-center text-black'>
									<br />
									<h5 className=' ps-5 '>Pratice Safe and Smart Security </h5>
									<p className='ps-5'>
										Frequently Change your Password and never share your
										password with others, No members of the bank will ever ask
										for your personal login information.
									</p>
								</Col>
								<Col>
									<img
										src='../phishing.png'
										alt='phishing'
										style={{
											flex: 1,
											aspectRatio: 1.5,
											resizeMode: 'contain',
											borderRadius: 200 / 2,
											width: '50%',
										}}
									></img>
								</Col>
							</Row>
						</Container>
					</Carousel.Item>
				</Carousel>
				<Card
					id='About'
					className='bg-info text-left mx-auto'
					style={{ width: '100%' }}
				>
					<Card.Header align='left' className='border-bottom border-dark'>
						<h3>About Us</h3>
					</Card.Header>
					<Card.Body align='left'>
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
			</div>
		</Container>
	);
};

//React Export
export default Home;
