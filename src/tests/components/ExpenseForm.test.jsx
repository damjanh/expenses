import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});
