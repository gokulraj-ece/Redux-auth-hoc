import React, { Component } from 'react';
//import { connect } from 'react-redux';

import Header from "./header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

//function mapStateToProps(state) {
//  return {
//    posts:state.posts
//  };
//}

//export default connect(mapStateToProps)(App); // this is a hoc

// connect container is wrapping up our component
// enhanced/wrapped/composed version of our component returned
// additional data/functionality offered by hoc
