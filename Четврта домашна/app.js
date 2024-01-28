function Product(name, category, hasDiscount, price){
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let products = [
    new Product("Apple", "Food", false, 5),
    new Product("Plum", "Food", false, 15),
    new Product("Pear", "Food", true, 7),
    new Product("Tomato", "Food", false, 30),
    new Product("Cucumber", "Food", false, 25),
    new Product("Cheese", "Food", true, 35),
    new Product("Ham", "Food", true, 5),
    new Product("Bread", "Food", true, 10),
    new Product("Sneakers", "Clothes", true, 85),
    new Product("Shirts", "Clothes", true, 25),    
    new Product("Socks", "Clothes", false, 10),
    new Product("Soap", "Hygiene Products", true, 5),
    new Product("Shampoo", "Hygiene Products", true, 8),
    new Product("Toothpaste", "Hygiene Products", false, 25),
    new Product("Toothbrush", "Hygiene Products", false, 25),
]
// Ako imate drug predlog za pronaogjanje na prvata samoglaska ve molam posocete mi na koj nacin istoto bi mozel da go napravam. Bi vi bil blagodaren :)
function startsWithVowel(word){
    let vowels = [`a`, `e`, `i`, `o`, `u`];
    let firstLetter = word.toLowerCase()[0];
    return vowels.includes(firstLetter);
}

let productsWithPriceGreaterThan20 = products.filter(product => product.price > 20);
console.log ("Products with price greater than 20 dollars:", productsWithPriceGreaterThan20);

let productsCategoryFoodWithDiscount = products.filter(product => product.category === "Food" && product.hasDiscount).map(product => product.name);
console.log ("Products with Category Food that have Discount:", productsCategoryFoodWithDiscount);

let productsPriceOnDiscount = products.filter(product => product.hasDiscount).map(product => product.price);
console.log ("Products price of products that are on discount:", productsPriceOnDiscount);

let productWithVowelWithoutDiscount = products.filter(product => startsWithVowel(product.name) && !product.hasDiscount).map(product => `${product.name}, ${product.price}`);
console.log ("Products that start with a vowel and have no discount:", productWithVowelWithoutDiscount);


