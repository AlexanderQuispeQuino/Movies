import React, {Component} from 'react';

class Footer extends Component{
	render(){
		return(

			<footer className="footer">

				<div className="container-footer" id="icons">
      				<div className="row" >
       
        				<div className="the-icons span3" >
        					<a className="icons" href="https://twitter.com/">
        						<i className="demo-icon icon-twitter"></i>
        					</a>
        				</div>
       
        				<div className="the-icons span3" >
        					<a className="icons" href="https://www.facebook.com/">
        						<i className="demo-icon icon-facebook"></i>
        					</a>
        				</div>
        				<div className="the-icons span3">
        					<a className="icons" href="https://www.instagram.com">
        						<i className="demo-icon icon-instagram"></i>
        					</a>
        				</div>
      				</div>
      			</div>
			</footer>

		);
	}
}

export default Footer;