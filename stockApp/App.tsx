import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import {ThemeProvider} from './src/theme/ThemeContext';
import StockListScreen from './src/features/stocks/stockListScreen';


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StockListScreen />
      </ThemeProvider>
    </Provider>
  );
};

export default App;