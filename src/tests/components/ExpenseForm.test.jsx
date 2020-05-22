import React from 'react';
import { shallow } from 'enzyme';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
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

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(wrapper.state('description')).toBe(value);
});

test('Should set note on input change', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
    wrapper.find('textarea').simulate('change', { target: { value } });
    expect(wrapper.state('note')).toBe(value);
});

test('Should set amount if valid input', () => {
    const value = '12.90';
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toBe(value);
});

test('Should set amount if invalid input', () => {
    const value = 'Invalid input';
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toBe('');
});

test('Should call onSubmit prop for valid form submition', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    });
});

test('Should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
