// Dummy data for products
const clothingProducts = [
    { name: "T-shirt", price: "$19.99", image: "tshirt.jpg" },
    { name: "Jeans", price: "$39.99", image: "jeans.jpg" },
    // Add more items as needed
];

const jewelleryProducts = [
    { name: "Necklace", price: "$49.99", image: "necklace.jpg" },
    { name: "Bracelet", price: "$29.99", image: "bracelet.jpg" },
    // Add more items as needed
];

// Function to display clothing products
function displayClothingProducts() {
    const clothingGrid = document.getElementById('clothing-grid');
    clothingGrid.innerHTML = '';
    clothingProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        clothingGrid.appendChild(productCard);
    });
}

// Function to display jewellery products
function displayJewelleryProducts() {
    const jewelleryGrid = document.getElementById('jewellery-grid');
    jewelleryGrid.innerHTML = '';
    jewelleryProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        jewelleryGrid.appendChild(productCard);
    });
}

// Call functions to display products initially
displayClothingProducts();
displayJewelleryProducts();
