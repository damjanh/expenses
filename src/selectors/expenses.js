import moment from 'moment';

const getVisibleExpenses = (expenses, {
    text,
    sortBy,
    startDate,
    endDate,
}) => expenses.filter((expense) => {
    const createdAt = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
    if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
    }
    return a.amount < b.amount ? 1 : -1;
});


export default getVisibleExpenses;
