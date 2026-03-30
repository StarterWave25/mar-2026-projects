// State
let expensesState = {
    food: 0,
    travel: 0,
    shopping: 0
};

let expensesTotal = 0;

const expensesLimits = {
    food: 500,
    travel: 300,
    shopping: 700
};

// DOM Elements
const expensesFieldsContainer = document.querySelector('.expenses-fields-container');
const expensesLogs = document.querySelector('.logs-warnings');
const expensesTotalHeading = document.querySelector('.expenses-total');

expensesFieldsContainer.addEventListener('click', handleAddExpenseBtn);

let expensesHandler = {
    set: setExpensesFn
}

expensesState = new Proxy(expensesState, expensesHandler);

function handleAddExpenseBtn(e) {
    if (!(e.target.classList.contains('expenses-add-btn'))) {
        return;
    }

    const expensesField = e.target.closest('.expenses-field');
    const expenseInput = expensesField.querySelector('.expenses-input');
    const expenseProp = e.target.dataset.prop;

    expensesState[expenseProp] = Number(expenseInput.value);

    expenseInput.value = '';
}

//Action
function setExpensesFn(expensesState, prop, value) {
    let newExpense = expensesState[prop] + value;

    if (isNaN(value) || value <= 0) {
        expensesLogs.textContent = `Invalid Expense Entered for ${prop}`;
    }

    else if (newExpense <= expensesLimits[prop]) {
        expensesLogs.textContent = `${prop} expense is updated from ₹${expensesState[prop]} to ₹${newExpense}`;
        expensesState[prop] += value;
        expensesTotal += value;
        expensesTotalHeading.textContent = `Total: ₹${expensesTotal}`;
    }

    else {
        expensesLogs.textContent = `Expense Limit for ${prop} is Exceeded`;
    }

    let timeoutId = setTimeout(() => {
        expensesLogs.innerHTML = '';
        clearTimeout(timeoutId);
    }, 3000);

    return true;
}