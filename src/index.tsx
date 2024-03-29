import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './ui/App';
import * as serviceWorker from './serviceWorker';
import 'mobx-react-lite/batchingForReactDom'
import NetworkInterceptor from "./network/interceptors/NetworkInterceptor";


declare global {
    interface Window {
        _env_: any
    }
}

NetworkInterceptor.startInstance()

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
