
let total = 0;

function addToOrder(item) {
  const orderList = document.getElementById("order-list");

  const newItem = document.createElement("li");
  newItem.textContent = item + " - $5.00";

  orderList.appendChild(newItem);

  total += 5;

  document.getElementById("total").textContent =
    "Total: $" + total.toFixed(2);
}

function clearOrder() {
  document.getElementById("order-list").innerHTML = "";
  total = 0;

  document.getElementById("total").textContent =
    "Total: $0.00";
}
