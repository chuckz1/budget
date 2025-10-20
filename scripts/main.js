const categories = {
	groceries: { name: "Groceries", amount: 1.0 },
	"eating-out": { name: "Eating Out", amount: 2.0 },
	gas: { name: "Gas", amount: 3.0 },
	necessities: { name: "Necessities", amount: 4.0 },
	pleasure: { name: "Pleasure", amount: 5.0 },
	saving: { name: "Saving", amount: 6.0 },
	giving: { name: "Giving", amount: 7.0 },
};

let currentCategory = "groceries";

function showCategory(key) {
	currentCategory = key;
	const cat = categories[key];
	const display = document.getElementById("category-display");
	if (cat && display) {
		display.innerHTML = `
			<h2>${cat.name}</h2>
			<p>Amount: $${cat.amount.toFixed(2)}</p>
			<form id="add-amount-form" onsubmit="return addAmountToCategory();">
				<input type="number" id="amount-input" step="0.01" min="0" placeholder="Enter amount" required>
				<button type="submit">Add Amount</button>
			</form>
		`;
	}
}

function addAmountToCategory() {
	const input = document.getElementById("amount-input");
	const value = parseFloat(input.value);
	if (!isNaN(value) && value > 0) {
		categories[currentCategory].amount += value;
		showCategory(currentCategory);
	}
	return false; // Prevent form submission
}

window.onload = function () {
	showCategory("groceries");
};
