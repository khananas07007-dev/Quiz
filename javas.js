const itemInput = document.getElementById("itemInput");
const priceInput = document.getElementById("priceInput");
const quantityInput = document.getElementById("quantityInput");

const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");

addBtn.addEventListener("click", function(){
    if(itemInput.value === "" || priceInput.value === "" || quantityInput.value === ""){
        alert("please fill all fields");
        return;
    }

    const itemTotal = priceInput.value * quantityInput.value;

    const expensive = document.createElement("div");
    expensive.classList.add("expensive");

    const itemText = document.createElement("p");
    itemText.innerText = "Item: " + itemInput.value;
    itemInput.value = "";

    const priceText = document.createElement("p");
    priceText.innerText = "Price: ₹" + priceInput.value;
    priceInput.value = "";

    const quantityText = document.createElement("p");
    quantityText.innerText = "Quantity: " + quantityInput.value;
    quantityInput.value = "";

    const itemTotalText = document.createElement("h2");
    itemTotalText.innerText = "Total: ₹" + itemTotal;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-Btn");
    deleteBtn.innerText = "Delete";

    expensive.appendChild(itemText);
    expensive.appendChild(priceText);
    expensive.appendChild(quantityText);
    expensive.appendChild(itemTotalText);
    expensive.appendChild(deleteBtn);

    expenseList.appendChild(expensive);

    deleteBtn.addEventListener("click", function(){
        expensive.remove();
    })
    
});