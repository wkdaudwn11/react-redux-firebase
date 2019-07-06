import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as alerts from '../utils/alerts';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount(){
            this.shouldNavigateAway()
        }

        componentDidUpdate(){
            this.shouldNavigateAway()
        }

        shouldNavigateAway(){
            if(!this.props.auth){
                alerts.error('You must be logged in to access this page.')
                this.props.history.push("/login")
            }
        }

        render(){
            return <ChildComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => ({
        auth: state.auth
    })

    return connect(mapStateToProps)(ComposedComponent)
}