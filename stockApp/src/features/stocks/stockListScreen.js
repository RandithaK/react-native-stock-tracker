import React, { useEffect, useMemo, useCallback, use } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStockRequest } from './stockSlice';
import { useTheme } from '../../theme/ThemeContext';

const StockListScreen = () => {
    const dispatch = useDispatch();
    const { items: stocks, loading, error } = useSelector(state => state.stocks);
    const { isDarkMode, toggleTheme } = useTheme();

    //useEffect to fetch stocks on component mount
    useEffect(() => {
        dispatch(fetchStockRequest());
    }, [dispatch]);

    // useMemo: Calculate total portfolio value only if items change
    const totalValue = useMemo(() => {
        console.log('Calculating total portfolio value');
        return stocks.reduce((acc, stock) => acc + (stock.price * stock.quantity), 0);
  }, [stocks]);

    // useCallBack: Memoize the press handler for list items
  const renderView = useCallback(({ item }) => (
    <View style={{ padding:20, borderBottomWidth: 1}}>
        <Text>{item.symbol}: ${item.price}</Text>
    </View>
  ), []);

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#333' : '#FFF', paddingTop: 50 }}>
      <Text style={{ color: isDarkMode ? '#FFF' : '#000', fontSize: 20, textAlign: 'center' }}>
        Total Portfolio: ${totalValue}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
      {loading ? <Text>Loading...</Text> : (
        <FlatList 
          data={stocks} 
          renderItem={renderView} 
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default StockListScreen;