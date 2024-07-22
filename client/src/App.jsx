import './App.css';
import Header from './components/header/header';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home/Home';
import TaskManager from './pages/taskmanagement/TaskManager';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './RequireAuth';
import { useSelector } from 'react-redux';

function App() {
	const { auth } = useSelector((state) => ({ ...state }));
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/signin'
						element={!auth.currentUser ? <Signin /> : <Dashboard />}
					/>
					<Route
						path='/signup'
						element={!auth.currentUser ? <Signup /> : <Dashboard />}
					/>
					<Route
						path='/taskmanager'
						element={
							<RequireAuth>
								<TaskManager />
							</RequireAuth>
						}
					/>
					<Route
						path='/dashboard'
						element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;