import React from 'react'
import {Link} from 'react-router'

class Home extends React.Component {
  render() {
    return(
		<div className="w1010 m0A mt20 ht500">
			<div className="jumbotron">
				<div className="container">
					<h1>Hello, world!</h1>
					<p>This is a simple Todo application for learning React, Redux and Graphql. I will keep the app changing over time as I am getting more knowledge on these technologies.</p>
					<p><Link className="btn btn-success btn-lg" role="button" to="/contact-us" style={{color:'#fff'}}>Learn More</Link></p>
				</div>
			</div>
		</div>
    )
  }
}
export default Home
