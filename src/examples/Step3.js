'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from './actions/action'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
class Step3 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div className="step step3">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                {
                  (this.props.savedToCloud)
                  ?
                    <div>
                      <h1>Thanks!</h1>
                      <h2>Data was successfully saved to cloud...</h2>
                    </div>
                  :
                    <h1>You have updated data, go <a onClick={() => {this.props.jumpToStep(2)}}>back</a> and Save again!</h1>
                }
              </label>
              </div>
          </form>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
       savedToCloud:  state.myReducer.savedToCloud
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},action), dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step3)