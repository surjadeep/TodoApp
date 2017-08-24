

import React from 'react'
import Header from './Header'
import Footer from './Footer'
require('../assests/scss/style.scss');

class Main extends React.Component {

  render() {

    return (
      <div>
        <Header {...this.props} />
		{React.cloneElement(this.props.children, {...this.props})}
        <Footer />
      </div>
    )

  }

}
export default Main
