import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './redux/configureStore';
// import {Provider} from 'react-redux';
// import queryString from 'query-string';
// import {AppContainer} from 'react-hot-loader';
import App from './App';

//const store = configureStore();

render(App);

function render(AppComponent) {
    // let showDebug = false;
    // if (typeof window !== 'undefined' && queryString.parse(window.location.search).debug === null) {
    //     showDebug = true;
    // }
    //
    // ReactDOM.render(
    //     <AppContainer>
    //         <Provider store = {store}>
    //             {showDebug ? <DebugPage /> : <AppComponent />}
    //         </Provider>
    //     </AppContainer>,
    //     document.getElementById('app')
    // );
    ReactDOM.render(<AppComponent />,
        document.getElementById('app')
    );
}