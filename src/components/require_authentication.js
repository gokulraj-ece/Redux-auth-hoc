//HOC
import React, { Component } from 'react';
import { connect } from 'react-redux';

// arg is the component that needs to be wrapped by the HOC
// new copy returned everytime this is called
// instance of Authentication rendered which in-turn renders
// an instance of ComposedComponent
export default function(ComposedComponent) {
  class  Authentication extends Component {
    // class level property (can access like Authentication.contextTypes)
    // static - a prop on the actual class, not an instance of the class
    // we dont need to create an instance of class to access contextTypes
    static contextTypes = {  // to prevent context abuse, have to define contextTypes
      router: React.PropTypes.object // gaining access to router
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated
    };
  }
  return connect(mapStateToProps)(Authentication); // nesting a HOC (Authentication)
  // inside another HOC (connect)
}


// we want to use this HOC in some other location !
/*
import Authentication //HOC
import Resources //Component to be wrapped

const ComposedComponent = Authentication(Resources) // wrapping
// HOC is a function that is called with an existing component
// in some render method
<ComposedComponent resources={resourceList} /> //props passed here can be
// accessed inside Authentication as this.props.resources
*/
