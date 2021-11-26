import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class WrapperLogOut extends Component {
  render() {
    const { token } = this.props;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="layoutLogOut">
        {this.props.children}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  token: state.users.token,
});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrapperLogOut);

export default Container;

