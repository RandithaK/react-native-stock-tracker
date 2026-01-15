import { calculateTotalPortfolio } from "../utils/mathUtils";

describe("Portfolio Math Utils", () => {
    test('calculates total portfolio value correctly', () => {
            const moskStocks = [
                { symbol: 'AAPL', price: 150, quantity: 10 },
                { symbol: 'GOOGL', price: 2800, quantity: 2 },
                { symbol: 'MSFT', price: 300, quantity: 5 },
            ];
            const totalValue = calculateTotalPortfolio(moskStocks);
            expect(totalValue).toBe(150*10 + 2800*2 + 300*5);
    });
    
    test('returns 0 for empty stock list', () => {
        const totalValue = calculateTotalPortfolio([]);
        expect(totalValue).toBe(0);
    });
});