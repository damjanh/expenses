import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const total = getExpensesTotal();
    expect(total).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(13000);
});

test('Should correctly add up multiple expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(38450);
});
