import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {App} from './components/App';
import './index.css';
import {store} from './store/Store.';
import {Theme} from './theme/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Theme>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Theme>
        </Provider>
    </React.StrictMode>,
);
