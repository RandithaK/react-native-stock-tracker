export const calculateTotalPortfolio = (stocks) => {
    if (!stocks) return 0;
    return stocks.reduce((acc, stock) => acc + (stock.price * stock.quantity), 0);
  };