function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

const menuItems = [
    {
        category: "main",
        name: "Masala Dosa",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1668236543090-82b4c5c87a6b"
    },
    {
        category: "main",
        name: "Paneer Butter Masala",
        price: "₹350",
        image: "https://images.unsplash.com/photo-1626776876958-3b5d0be1c07a"
    },
    {
        category: "dessert",
        name: "Gulab Jamun",
        price: "₹150",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
    }
];

const menuGrid = document.getElementById("menuGrid");

function displayMenu(items) {
    menuGrid.innerHTML = "";
    items.forEach(item => {
        menuGrid.innerHTML += `
            <div class="menu-item">
                <img src="${item.image}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `;
    });
}

function filterMenu(category) {
    if (category === "all") {
        displayMenu(menuItems);
    } else {
        displayMenu(menuItems.filter(item => item.category === category));
    }
}

displayMenu(menuItems);

document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully!");
});
