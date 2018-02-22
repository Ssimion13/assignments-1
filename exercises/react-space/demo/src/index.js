import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 50px;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
