import React, {Component} from 'react';
import Logo from '../resources/Icons/logo.png';
class Header extends Component{
	render(){
		return(
			<header style={{height: 80}}>
				<div className="container-header">
					<img className="logo" src={Logo}/>

				</div>
	</header>

		)
	}
}

export default Header;