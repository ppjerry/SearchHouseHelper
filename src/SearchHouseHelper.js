import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';

export default class SearchHouseHelper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}