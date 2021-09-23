//React imports
import React from 'react';
import './index.css';
import { HashRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import UserContext from './components/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pathing for the NavBar included in the app function
function App() {
	return (
		<div className='container-fluid p-0 vh-100'>
			<HashRouter>
				<NavBar />
				<UserContext.Provider
					value={{
						users: [
							{
								name: 'Robert',
								email: 'Robert@mit.edu',
								password: 'Password',
								balance: 100,
							},
						],
						history: [],
					}}
				>
					<Route path='/' exact component={Home} />
					<Route path='/Home' exact component={Home} />
					<Route path='/CreateAccount/' exact component={CreateAccount} />
					<Route path='/Deposit/' exact component={Deposit} />
					<Route path='/Withdraw/' exact component={Withdraw} />
					<Route path='/AllData/' exact component={AllData} />
				</UserContext.Provider>
			</HashRouter>
		</div>
	);
}

//React Export
export default App;
