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
	const nameElem = document.getElementById("category-name");
	const amountElem = document.getElementById("category-amount");
	if (cat && nameElem && amountElem) {
		nameElem.textContent = cat.name;
		amountElem.textContent = cat.amount.toFixed(2);
	}
	// Clear input after switching
	const input = document.getElementById("amount-input");
	if (input) input.value = "";
}

function addAmountToCategory() {
	const input = document.getElementById("amount-input");
	const value = parseFloat(input.value);
	if (!isNaN(value) && value > 0) {
		categories[currentCategory].amount += value;
		// Only update the amount span
		const amountElem = document.getElementById("category-amount");
		if (amountElem) {
			amountElem.textContent = categories[currentCategory].amount.toFixed(2);
		}
		input.value = "";
	}
	return false; // Prevent form submission
}

window.onload = function () {
	showCategory("groceries");
};
