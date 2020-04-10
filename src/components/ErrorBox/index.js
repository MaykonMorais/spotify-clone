import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ErrorActions } from "../../store/ducks/error";

import closeIcon from "../../assets/images/close.svg";

import { Container } from "./styles";

class ErrorBox extends Component {
  static propTypes = {
    error: PropTypes.shape({
      visible: PropTypes.bool,
      message: PropTypes.string,
    }).isRequired,
    hideError: PropTypes.func.isRequired,
  };
  renderError() {
    const { message } = this.props.error;
    return (
      <Container>
        <p>{message}</p>
        <button onClick={this.props.hideError}>
          <img src={closeIcon} alt="Fechar" />
        </button>
      </Container>
    );
  }

  render() {
    const { visible } = this.props.error;
    return visible && this.renderError();
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
