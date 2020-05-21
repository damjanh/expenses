import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test('Should set sortyBy to amount', () => {
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const state = filtersReducers(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const state = filtersReducers(undefined, { type: 'SET_TEXT_FILTER', text: 'Filter text' });
    expect(state.text).toBe('Filter text');
});

test('Should set startDate filter', () => {
    const startDate = moment();
    const state = filtersReducers(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toBe(startDate);
});

test('Should set endDate filter', () => {
    const endDate = moment();
    const state = filtersReducers(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toBe(endDate);
});
