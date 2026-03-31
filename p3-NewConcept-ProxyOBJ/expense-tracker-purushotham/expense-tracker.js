const expenses = {
    food: 0,
    travel: 0,
    shopping: 0,
};
const limits = {
    food: 500,
    travel: 300,
    shopping: 700,
};
const expensesProxy = new Proxy(expenses, {
    set(target, prop, value) {
        if (!Number(value) || value < 0) {
            throw Error("Invalid Expenses for " + prop);
        } else if (target[prop] + value > limits[prop]) {
            throw Error(`Budget Limit for ${prop} is exceeding!`);
        } else {
            target[prop] += value;
            render();
        }
    },
    get(target, prop) {
        if (prop === "total") {
            return Object.keys(target).reduce(
                (total, expense) => (total += target[expense]),
                0,
            );
        }
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

function addEventHandler(e, typeOfExpense) {
    addExpense(typeOfExpense, e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = "";
}

function addEventHandlers() {
    document.getElementById("food-add").addEventListener("click", (e) => {
        addEventHandler(e, "food");
    });
    document.getElementById("travel-add").addEventListener("click", (e) => {
        addEventHandler(e, "travel");
    });
    document.getElementById("shopping-add").addEventListener("click", (e) => {
        addEventHandler(e, "shopping");
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
            <tr>
                <td>Total</td>
                <td class="font-weight-bold">${expensesProxy.total}</td>
            </tr>
        </table>
    `;
    document.getElementById("total-expenses").innerHTML = expenseSummary;
}

addEventHandlers();
