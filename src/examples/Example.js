'use strict';

import React, { Component } from 'react';
import StepZilla from '../main'
//import Step1 from './Step1'
//import Step2 from './Step2'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {}

  componentWillUnmount() {}

//  getStore() {
//    return this.sampleStore;
//  }
//
//  updateStore(update) {
//    this.sampleStore = {
//      ...this.sampleStore,
//      ...update,
//    }
//  }

  render() {
    const steps =
    [
      {name: 'step1', component: <Step1/>},
      {name: 'Step2', component: <Step2/>},
      {name: 'Step3', component: <Step3/>}
    ]

    return (
      <div className='example'>
        <div className='step-progress'>
          <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"Save"}
            hocValidationAppliedTo={[3]}
           />
        </div>
      </div>
    )
  }
}



