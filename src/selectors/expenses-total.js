const getExpensesTotal = (expenses) => {
    let total = 0;
    if (expenses === undefined) {
        return 0;
    }
    expenses.forEach((element) => { total += element.amount; });
    return total;
};

export default getExpensesTotal;
