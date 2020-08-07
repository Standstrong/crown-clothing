import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


/*const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
)*/


class App extends React.Component {

	/*constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}*/ //we dont need it anymore since we have a reducer already

	unsubscribeFromAuth = null;

	componentDidMount() {

		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth) {
				const userRef = await createUserProfileDocument(userAuth);  

				userRef.onSnapshot(snapShot => {
					setCurrentUser ({
						id: snapShot.id,
						...snapShot.data()
					});	 

				}); 
  
			}

			//shold the else be here

			setCurrentUser( userAuth );

			/*else {
				this.setState({currentUser: userAuth});
			}*/
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}


  
    render() {

  		return (
    		<div>
      			<Header />
      			<Switch>
      				<Route  exact path = '/' component = {HomePage} />
      				<Route  path = '/shop' component = {ShopPage} />
      				<Route 
      					exact 
      					path = '/signin' 
      					render = {() => 
      						this.props.currentUser ? ( 
      							<Redirect to = '/' /> 
      						) : ( 
      							<SignInAndSignUpPage /> 
      						) 
      					} 

      				/> 
      			</Switch> 
    		</div>
    	);

  	}

}



const mapStateToProps = ({ user }) => ({
	CurrentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App);


