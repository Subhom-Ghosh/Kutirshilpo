const crafts = [
    {
        name: "Dokra Art",
        material: "metal",
        budget: "medium",
        purpose: ["decor", "gift"],
        region: "Bankura",
        image: ("images/dokra.webp"),
        description: "Ancient non-ferrous metal casting art made using the lost-wax casting technique, unique to Bankura and Dwariapur.",
        buyLink: "https://www.example.com/dokra"
    },
    {
        name: "Kantha Embroidery",
        material: "fabric",
        budget: "low",
        purpose: ["gift", "decor"],
        region: "Birbhum",
        image: "images/kantha.avif",
        description: "A traditional form of hand embroidery, famous in Birbhum and Murshidabad, often used for quilts, sarees and stoles.",
        buyLink: "https://www.example.com/kantha"
    },
    {
        name: "Madur Kathi Mats",
        material: "reed",
        budget: "low",
        purpose: ["decor", "festival"],
        region: "Midnapore",
        image: "images/madur.jpeg",
        description: "These mats are woven from Madur kathi reeds, typically grown in the Midnapore region. Comfortable, eco-friendly and decorative.",
        buyLink: "https://www.example.com/madur"
    },
    {
    "name": "Terracotta",
    "material": "Baked clay",
    "budget": "low to medium",
    "purpose": ["decor", "utility", "religious idols"],
    "region": "Across India (with regional variations in style)",
    "image": "images/terracotta.jpeg",
    "description": "Literally meaning 'baked earth,' terracotta is a centuries-old craft of creating pottery, sculptures, and decorative items from clay. The pieces are hand-molded or wheel-thrown and fired at high temperatures to achieve their characteristic reddish-brown color and durability.",
    "buyLink": "https://www.example.com/terracotta"
    },
    {
    "name": "ShitalPati",
    "material": "Cane",
    "budget": "low to medium",
    "purpose": [
        "utility","decor"],
    "region": "Cooch Behar",
    "image": "images/shitalpati.jpg",
    "description": "ShitalPati is a traditional handicraft of weaving a mat from the green cane. This mat is famous for its natural cooling property and smooth texture. The word 'Shital' means cool and 'Pati' means mat. Cooch Behar is the main region for this handicraft.",
    "buyLink": "https://www.example.com/shitalpati"
},

{
    "name": "Baluchari sarees",
    "material": "Silk",
    "budget": "high",
    "purpose": [
        "apparel",
        "wedding",
        "festive wear"
    ],
    "region": "Bishnupur, Murshidabad",
    "image": "images/baluchari.webp",
    "description": "Baluchari sarees are known for their intricate mythological scenes and narratives woven into the pallu and border. Originally from Murshidabad, the craft later moved to Bishnupur due to natural calamities. These handwoven silk sarees are a symbol of elegance and are worn on special occasions.",
    "buyLink": "https://www.example.com/baluchari-saree"
},

];

function displayCrafts(filteredCrafts) {
    const container = document.getElementById("craftCards");
    container.innerHTML = "";

    filteredCrafts.forEach(craft => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${craft.image}" alt="${craft.name}">
            <div class="card-content">
                <h3>${craft.name}</h3>
                <p>${craft.description.substring(0, 50)}...</p>
            </div>
        `;
        card.addEventListener("click", () => openModal(craft));
        container.appendChild(card);
    });
}

function filterCrafts() {
    const material = document.getElementById("materialFilter").value;
    const purpose = document.getElementById("purposeFilter").value;
    const budget = document.getElementById("budgetFilter").value;
    const region = document.getElementById("regionFilter").value;

    const filtered = crafts.filter(craft => {
        return (
            (material === "" || craft.material === material) &&
            (budget === "" || craft.budget === budget) &&
            (region === "" || craft.region === region) &&
            (purpose === "" || craft.purpose.includes(purpose))
        );
    });

    displayCrafts(filtered);
}

function openModal(craft) {
    document.getElementById("modalImage").src = craft.image;
    document.getElementById("modalTitle").innerText = craft.name;
    document.getElementById("modalDescription").innerText = craft.description;
    document.getElementById("buyLink").href = craft.buyLink;
    document.getElementById("craftModal").style.display = "flex";
}

document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("craftModal").style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target.id === "craftModal") {
        document.getElementById("craftModal").style.display = "none";
    }
});

document.querySelectorAll(".filters select").forEach(select => {
    select.addEventListener("change", filterCrafts);
});

displayCrafts(crafts);
