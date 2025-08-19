'use strict';
//Task 1: creating product array and printing to console
let product_array = [
    [1, "T-shirt", 150, 2],
    [2, "Jeans", 1200, 4],
    [3, "Sneakers", 2500, 1],
    [4, "Cap", 300, 0],
    [5, "Jacket", 3500, 5],
    [6, "Socks", 100, 3],
    [7, "Scarf", 200, 2],
    [8, "Watch", 1800, 1],
    [9, "Belt", 450, 0],
    [10, "Sunglasses", 1500, 4],
    [11, "Backpack", 2200, 2],
    [12, "Gloves", 350, 1],
    [13, "Hoodie", 2000, 5],
    [14, "Shorts", 800, 3],
    [15, "Formal Shirt", 1400, 4],
    [16, "Tie", 250, 1],
    [17, "Wallet", 900, 0],
    [18, "Headphones", 3000, 2],
    [19, "Sports Shoes", 2700, 5],
    [20, "Perfume", 1600, 3],
    [21, "Casual Shirt", 1300, 2]
];

//printing above array to console
product_array.forEach(function ([id, name, price, quantity]) {
    console.log(`${id} ${name} ${price} ${quantity}\n`);
});

//Task 2: Use .map() to generate <li> items with product names and append them to an unordered list (<ul>) in the DOM.
let li = product_array.map(i => `<li>${i}</li>`).join(" ");
document.getElementById("unordered_list").innerHTML = li;
//to verify- in inspect-> elements tab

//Task 3: Create buttons labeled "Add" etc.
let adding = "";
product_array.forEach(function ([id, name, price]) {
    adding += `${id} ${name} ${price}<button id="btn-${id}">Add</button>`;
});
document.getElementById("product_list").innerHTML = adding

//Task 4: Start with an empty cart array. When a button is clicked, add the corresponding product object to cart and log the array.
let cart_array = [];
product_array.forEach(function ([id, name, price, quantity]) {
    document.getElementById(`btn-${id}`).addEventListener("click", function () {
        //cart_array.push({ id, name, price, quantity });
        console.log("cart array: ", cart_array);
        console.log(`${name} is added to cart`);
    });
});

//Task 5: When an item is added to cart(here assume to it as buying bcoz when u buy the value has to be updated as a (foundation for interactive websites)) the quantity of the item must update
let sum = 0;
product_array.forEach(function ([id, name, price, quantity], index) {
    document.getElementById(`btn-${id}`).addEventListener("click", function () {
        let input_quantity = document.createElement("input");
        input_quantity.type = "number";
        input_quantity.placeholder = "Quantity";
        input_quantity.min = 1;
        input_quantity.max = product_array[index][3];

        let submit_btn = document.createElement("button");
        submit_btn.textContent = "submit";

        let container = document.createElement("div");
        container.appendChild(input_quantity);
        container.appendChild(submit_btn);

        document.getElementById("cart_container").appendChild(container);
        submit_btn.addEventListener("click", function () {
            let quantity = Number(input_quantity.value);

            if (quantity > product_array[index][3]) {
                console.log("Not enough availability");
                return;
            }
            product_array[index][3] -= quantity;

            cart_array.push({ id, name, price, quantity });

            console.log(`${name} added to cart!`);
            console.log(`Remaining ${name}: ${product_array[index][3]}`);
            console.log("Cart:", cart_array);
            container.remove();
            //Task 6: Calculating total from cart array
            sum = 0;
            cart_array.forEach(function ({ price, quantity }) {
                if(quantity === 0)
                    sum = 0;
                sum += (price * quantity);
                console.log("Total: ", sum);
                return;
            });
        });
    });
});