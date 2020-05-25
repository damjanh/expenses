import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpenseSummary with one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1300} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseSummary with multiple expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={250320} />);
    expect(wrapper).toMatchSnapshot();
});
