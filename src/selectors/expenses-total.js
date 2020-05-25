const getExpensesTotal = (expenses) => {
    let total = 0;
    expenses.forEach((element) => { total += element.amount; });
    return total;
};

export default getExpensesTotal;
