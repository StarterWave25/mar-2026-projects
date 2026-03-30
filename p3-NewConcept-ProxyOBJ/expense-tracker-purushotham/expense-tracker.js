const expenses = {
    food: 0,
    travel: 0,
    shopping: 0,
};
const expensesProxy = new Proxy(expenses, {
    set(target, prop, value) {
        if (!Number(value) || value < 0) {
            throw Error("Invalid Expenses for " + prop);
        } else {
            target[prop] += value;
            render();
        }
    },
    get(target, prop) {
        return target[prop];
    },
});

function addExpense(type, value) {
    try {
        switch (type) {
            case "food":
                expensesProxy.food = Number(value);
                displayLogs(
                    `${type} expenses Updated: ${expensesProxy.food - value} to ${expensesProxy.food}`,
                );
                break;
            case "travel":
                expensesProxy.travel = Number(value);
                displayLogs(
                    `${type} expenses Updated: ${expensesProxy.travel - value} to ${expensesProxy.travel}`,
                );
                break;
            case "shopping":
                expensesProxy.shopping = Number(value);
                displayLogs(
                    `${type} expenses Updated: ${expensesProxy.shopping - value} to ${expensesProxy.shopping}`,
                );
                break;
            default:
                break;
        }
    } catch (error) {
        displayLogs(error);
    }
}

function displayLogs(msg) {
    const logs = document.getElementById("logs");
    logs.style.display = "block";
    logs.innerText = msg;
    setTimeout(() => {
        logs.style.display = "none";
    }, 3000);
}

function addEventHandlers() {
    document.getElementById("food-add").addEventListener("click", (e) => {
        addExpense("food", e.target.previousElementSibling.value);
        e.target.previousElementSibling.value = "";
    });
    document.getElementById("travel-add").addEventListener("click", (e) => {
        addExpense("travel", e.target.previousElementSibling.value);
        e.target.previousElementSibling.value = "";
    });
    document.getElementById("shopping-add").addEventListener("click", (e) => {
        addExpense("shopping", e.target.previousElementSibling.value);
        e.target.previousElementSibling.value = "";
    });
    render();
}

function render() {
    const expenseSummary = `
        <table border="2" class="table table-success table-striped table-bordered border border-success border-3" style="width:50%">
            <tr>
                <th>Type</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>Food</td>
                <td>${expensesProxy.food}</td>
            </tr>
            <tr>
                <td>Travel</td>
                <td>${expensesProxy.travel}</td>
            </tr>
            <tr>
                <td>Shopping</td>
                <td>${expensesProxy.shopping}</td>
            </tr>
        </table>
    `;
    document.getElementById("total-expenses").innerHTML = expenseSummary;
}

addEventHandlers();
