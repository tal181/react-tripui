'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';
import {Provider} from 'react-redux'
require('../css/main.css');
import {createInitAppStore} from './store/rootReducer'

ReactDOM.render( <Provider store={createInitAppStore()}>
                                <Example  />
                        </Provider>, document.getElementById('root'));


