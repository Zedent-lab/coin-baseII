let balance = 0;

function deposit() {
    const amount = parseFloat(document.getElementById("depositAmount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
    }

    balance += amount;
    updateBalance();
    addToHistory("Deposit", amount);
}

function withdraw() {
    const amount = parseFloat(document.getElementById("withdrawAmount").value);
    if (isNaN(amount) || amount <= 0 || amount > balance) {
        alert("Please enter a valid withdrawal amount.");
        return;
    }

    balance -= amount;
    updateBalance();
    addToHistory("Withdrawal", amount);
}

function updateBalance() {
    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = `${balance} CLAY`;

    // Implement notification logic here (e.g., using web notifications)
    if (balance < 0) {
        // Show a notification indicating insufficient funds
        // ...
    }
}

function addToHistory(type, amount) {
    const transactionHistory = document.getElementById("transactionHistory");
    const newListItem = document.createElement("li");
    newListItem.textContent = `${type}: ${amount} CLAY`;
    transactionHistory.appendChild(newListItem);
}

// Draggable functionality
const wallet = document.querySelector('.wallet');

let isDragging = false;
let initialX = 0;
let initialY = 0;

wallet.addEventListener('mousedown', (event) => {
    isDragging = true;
    initialX = event.clientX - wallet.offsetLeft;
    initialY = event.clientY - wallet.offsetTop;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        wallet.style.left = `${event.clientX - initialX}px`;
        wallet.style.top = `${event.clientY - initialY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});