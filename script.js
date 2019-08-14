// // const rufusTheDog = {
// //     age: 4,
// //     species: "Dalmatian",
// //     contentsOfStomach: [],
// //     eat: function (item) {
// //         this.contentsOfStomach.push(item)
// //     },
// //     puke: function () {
// //         this.contentsOfStomach.length = 0
// //     },
// //     bark: function (something) {
// //         window.alert(`Rufus barks 'WOOF!' at ${something}`)
// //     }
// // }

// // rufusTheDog.eat("leftovers")
// // rufusTheDog.eat("treat")
// // rufusTheDog.eat("bunny")

// // console.log(rufusTheDog.contentsOfStomach)

// const moroseTheDog = {
// 	name: "Morose",
// 	species: "Dog",
// 	nicknames: ["Morris", "Morag Tong", "Shut Up"],
// 	age: 5,
// 	moroseFood: [],
// 	favoriteToys: [],
// 	eat: function(foodItem) {
// 		this.moroseFood.push(foodItem);
// 	},
// 	bark: function(barkTarget) {
// 		window.alert(`Morose is barking at ${barkTarget}!`);
// 	},
// 	whine: function(whineTarget) {
// 		window.alert(`Morose is whining at ${whineTarget}!`);
//     },
//     play: function(toy) {
//         if (toy === "Ropa Dope"){
//             this.favoriteToys.push(toy);
//         }
// 	}
// 	// play: function(toy) {
// 	// 	let likedToy = true;
//     //     if (likedToy === true) this.favoriteToys.push(toy);
// 	// }
// };

// // moroseTheDog.eat("Pizza, Kibble, Norwood")
// // console.log(moroseTheDog.moroseFood)
// // moroseTheDog.bark("nothing at all")
// // moroseTheDog.whine("still absolutely nothing")
// moroseTheDog.play("Ropa Dope");
// console.log(moroseTheDog.favoriteToys);

// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.


const chickenComboMeal = {
    sandwichType: "Chicken Sandwich",
    fries: true,
    drinkSize: "Medium",
    price: 4.99,
}
const burgerComboMeal = {
    sandwichType: "Cheeseburger",
    fries: true,
    drinkSize: "Medium",
    price: 4.99,
}
const doubleBurgerComboMeal = {
    sandwichType: "Double Cheeseburger",
    fries: true,
    drinkSize: "Medium",
    price: 4.99,
}

const restaurant = {
    name: "Bob's Burgers",
    menu: [chickenComboMeal, burgerComboMeal, doubleBurgerComboMeal],
	orders: [],
	placeOrder: function(meal) {
		this.orders.push(meal);
	}
};



// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerComboMeal);
restaurant.placeOrder(doubleBurgerComboMeal);

console.table(restaurant.orders)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()


// const chickenComboMeal = {
//     included: ["Chicken Sandwich", "Medium Fry", "Medium Soda"],
//     price: 4.99,
// }
// const burgerComboMeal = {
//     included: ["Cheeseburger", "Medium Fry", "Medium Soda"],
//     price: 4.99,
// }
// const doubleBurgerComboMeal = {
//     included: ["Double Cheeseburger", "Medium Fry", "Medium Soda"],
//     price: 5.99,
// }

// Place an order
restaurant.placeOrder();

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()


    // ------------------- Lightning Exercise Two ------------------//
// Create a JavaScript file and link it to your index.html file.
// Use document.querySelector to get a reference to the element with an id of "main-header"
// Log the reference to the console
// Add a class of "blue-text" to the element
// Add a style rule for the "blue-text" class to your style.css sheet

const mainHeader = document.querySelector("#main-header")
console.log(mainHeader)
mainHeader.textContent = "Garble"
mainHeader.classList.add("blue-text")
mainHeader.classList.add("big-text")

// In your JavaScript file, use document.querySelectorAll to select all of the elements in your HTML file with a class of "body-text"
// Log the reference to the console
// Loop through the NodeList of elements and set the .innerHTML property of each element to "Hello, world!"

const bodyText = document.querySelectorAll(".body-text")
console.log(bodyText)

for(i=0; i < bodyText.length; i++){
    bodyText[i].textContent = "Hello, world!"
    console.log(bodyText)
}