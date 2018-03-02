import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';

import './styles.css';
import App from './App';


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
