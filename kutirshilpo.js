const crafts = [
    {
        name: "Dokra Art",
        material: "Metal",
        budget: "Medium",
        purpose: ["decor", "gift"],
        region: "Bankura",
        image: "https://i0.wp.com/utkalikaodisha.com/wp-content/uploads/2024/07/2.jpg?resize=600%2C600&ssl=1",
        description: "Ancient non-ferrous metal casting art made using the lost-wax casting technique, unique to Bankura and Dwariapur.",
        buyLink: "https://www.example.com/dokra"
    },
    {
        name: "Kantha Embroidery",
        material: "Fabric",
        budget: "Low",
        purpose: ["gift", "decor"],
        region: "Birbhum",
        image: "https://i.pinimg.com/736x/b2/47/21/b24721be4da0945c73b57c1ac57c08c0.jpg",
        description: "A traditional form of hand embroidery, famous in Birbhum and Murshidabad, often used for quilts, sarees and stoles.",
        buyLink: "https://www.example.com/kantha"
    },
    {
        name: "Madur Kathi Mats",
        material: "Reed",
        budget: "Low",
        purpose: ["decor", "festival"],
        region: "Midnapore",
        image: "https://www.getbengal.com/ckeditor/userfiles/1579172918-madur_sabong-2.jpg",
        description: "These mats are woven from Madur kathi reeds, typically grown in the Midnapore region. Comfortable, eco-friendly and decorative.",
        buyLink: "https://www.example.com/madur"
    },
    {
        name: "Terracotta",
        material: "Clay",
        budget: "Low to Medium",
        purpose: ["decor", "utility", "religious idols"],
        region: "Across India",
        image: "https://mybageecha.com/cdn/shop/products/elephant_decor_1.jpg?v=1713433937",
        description: "Terracotta is a centuries-old craft of creating pottery, sculptures, and decorative items from clay, fired at high temperatures for durability.",
        buyLink: "https://www.example.com/terracotta"
    },
    {
        name: "ShitalPati",
        material: "Cane",
        budget: "Low to Medium",
        purpose: ["utility","decor"],
        region: "Cooch Behar",
        image: "https://orumindicus.com/wp-content/uploads/2023/02/561.png",
        description: "ShitalPati is a traditional handicraft of weaving mats from green cane, famous for its cooling property and smooth texture.",
        buyLink: "https://www.example.com/shitalpati"
    },
    {
        name: "Baluchari Sarees",
        material: "Silk",
        budget: "High",
        purpose: ["apparel", "wedding", "festive wear"],
        region: "Bishnupur",
        image: "https://livingloomsofindia.com/cdn/shop/files/PureSilkBlueBaluchariSareewithMythologicalFiguresandButiWork_2_5367a8cb-1a9b-4815-833d-3f91388e9722.jpg?v=1715600998&width=1440",
        description: "Baluchari sarees feature intricate mythological scenes woven into the pallu and border, symbolizing elegance and tradition.",
        buyLink: "https://www.example.com/baluchari-saree"
    },
{
    name: "Patachitra",
    material: ["Cloth-based canvas", "natural colors"],
    budget: "Low to High",
    purpose: ["decor", "ritual use", "souvenirs"],
    region: ["Paschim Medinipur", "Purba Medinipur", "Bankura"],
    image: "https://thebengalcraft.com/wp-content/uploads/2022/01/Pattachitra-Kalighat-Patachitra-Uttam-Chitrakar-06-1.jpeg",
    description: "Patachitra, which means 'cloth picture' in Sanskrit, is an ancient art of scroll painting. The paintings are known for their intricate details, vibrant colors derived from natural sources, and mythological narratives or folktales. Originally used for ritual purposes and as pilgrim souvenirs, the art form is a beautiful blend of traditional storytelling and painting.",
    buyLink: "https://www.example.com/patachitra"
},
{
    name: "Batik",
    material: ["Cloth (cotton, silk)", "wax", "natural dyes"],
    budget: "Low to Medium",
    purpose: ["apparel", "home decor", "art pieces"],
    region: "Birbhum, Hooghly, Howrah, Kolkata, Purba Medinipur",
    image: "https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/YHARVKP6QSSB1SP9139BZZAY127X00304.jpg",
    description: "Batik is an ancient wax-resist dyeing technique used to create intricate patterns on fabric. Molten wax is applied to the cloth to block out areas, and the fabric is then dyed. This process is repeated with different colors to create a layered and crackled effect. While the craft is popular across various parts of the country, it has a strong presence in several districts of West Bengal, particularly around Santiniketan.",
    buyLink: "https://www.example.com/batik"
},
{
    name: "Brass & Bell Metal",
    material: ["Brass", "Bell Metal"],
    budget: ["Medium","High"],
    purpose: ["utility", "decor", "ritual use"],
    region: "Murshidabad, Nadia, Birbhum, Bankura, Paschim Medinipur, Purba Medinipur, Darjeeling",
    image: "https://static.wixstatic.com/media/a63792_2aecf3fc2c3e4005969f6e59ecf716be~mv2.jpg/v1/crop/x_1146,y_0,w_3984,h_3420/fill/w_272,h_232,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/golden-decorative-ramadan-concept.jpg",
    description: "Brass and bell metal crafts are traditional metalworks known for their durability and ornate designs. Artisans create utensils, lamps, ritual items, and decorative pieces using age-old casting and hammering techniques. These crafts are especially prominent in several districts of West Bengal, blending functionality with cultural heritage.",
    buyLink: "https://www.example.com/brass-bellmetal"
},
{
    name: "Cane & Bamboo",
    material: ["Cane", "Bamboo"],
    budget: ["Low", "Medium"],
    purpose: ["utility", "decor", "furniture", "eco-friendly products"],
    region: ["Darjeeling", "Jalpaiguri", "Cooch Behar", "Uttar Dinajpur", "Dakshin Dinajpur", "Malda", "Murshidabad", "Purulia", "Bankura", "Paschim Medinipur", "Purba Medinipur", "North 24-Parganas"],
    image: "https://img1.exportersindia.com/final_catg_image/82981-1.jpg",
    description: "Cane and bamboo crafts are eco-friendly and versatile, ranging from baskets and mats to furniture and decorative items. These crafts are deeply rooted in rural and tribal traditions across West Bengal, especially in forested and hilly regions. Artisans skillfully weave and shape the materials into durable, lightweight, and sustainable products.",
    buyLink: "https://www.example.com/cane-bamboo"
},
{
    name: "Clay Doll/Modeling",
    material: ["Clay", "Natural pigments"],
    budget: ["Low", "Medium"],
    purpose: ["decor", "ritual use", "educational", "souvenirs"],
    region: ["Nadia", "Murshidabad", "Kolkata"],
    image: "https://bongoniketan.in/cdn/shop/files/HandcraftedvillagerClaymodelofwestbengal18.jpg?v=1707224847",
    description: "Clay doll modeling is a delicate and expressive craft involving hand-shaped figurines, often depicting rural life, deities, or mythological scenes. These dolls are painted with natural pigments and are cherished for their storytelling charm. Nadia and Murshidabad are especially known for their traditional styles, while Kolkata artisans blend heritage with contemporary themes.",
    buyLink: "https://www.example.com/clay-doll"
},
{
    name: "Coconut (Shell & Husk)",
    material: ["Coconut shell", "Coconut husk"],
    budget: ["Low", "Medium"],
    purpose: ["utility", "decor", "eco-friendly products", "craft items"],
    region: ["Murshidabad", "Howrah", "Bankura"],
    image: "https://orumindicus.com/wp-content/uploads/2023/02/89.png",
    description: "Coconut shell and husk crafts transform natural waste into beautiful and functional items. Artisans carve shells into bowls, jewelry, and figurines, while husks are woven into ropes, mats, and brushes. These eco-conscious crafts are especially practiced in Murshidabad, Howrah, and Bankura, blending sustainability with rural creativity.",
    buyLink: "https://www.example.com/coconut-craft"
},
{
    name: "Copper Repoussé",
    material: ["Copper"],
    budget: ["Medium", "High"],
    purpose: ["decor", "ritual use", "art panels"],
    region: ["Kolkata"],
    image: "https://www.zineart.in/images/MTR/MTR017004.webp",
    description: "Copper repoussé is a metalworking technique where artisans shape intricate designs by hammering from the reverse side. This craft is used to create ornate wall panels, religious motifs, and decorative items. In Kolkata, skilled metalworkers continue this tradition, blending classical themes with contemporary aesthetics.",
    buyLink: "https://www.example.com/copper-repousse"
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

let lockedMaterial = ""; // keeps the selected material locked

function displayCrafts(filteredCrafts) {
    const container = document.getElementById("craftCards");
    container.innerHTML = "";

    filteredCrafts.forEach(craft => {
        const card = document.createElement("div");
        card.classList.add("card", "small-card"); // added small-card for styling
        card.innerHTML = `
            <img src="${craft.image}" alt="${craft.name}">
            <div class="card-content">
                <h3>${craft.name}</h3>
                <p>${craft.description.substring(0, 50)}...</p>
                <button class="material-btn">${Array.isArray(craft.material) ? craft.material.join(", ") : craft.material}</button>
            </div>
        `;

        // Clicking the material locks it and triggers filter
        card.querySelector(".material-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            lockedMaterial = e.target.innerText.toLowerCase();
            document.getElementById("materialFilter").value = lockedMaterial;
            filterCrafts();
        });

        card.addEventListener("click", () => openModal(craft));
        container.appendChild(card);
    });
}

function filterCrafts() {
    const material = lockedMaterial || document.getElementById("materialFilter").value.toLowerCase();
    const purpose = document.getElementById("purposeFilter").value.toLowerCase();
    const budget = document.getElementById("budgetFilter").value.toLowerCase();
    const region = document.getElementById("regionFilter").value.toLowerCase();

    const filtered = crafts.filter(craft => {
        const materials = Array.isArray(craft.material) ? craft.material.map(m => m.toLowerCase()) : [craft.material.toLowerCase()];
        const budgets = Array.isArray(craft.budget) ? craft.budget.map(b => b.toLowerCase()) : [craft.budget.toLowerCase()];

        return (
            (material === "" || materials.some(m => m.includes(material))) &&
            (budget === "" || budgets.some(b => b.includes(budget))) &&
            (region === "" || craft.region.toLowerCase().includes(region)) &&
            (purpose === "" || craft.purpose.some(p => p.toLowerCase() === purpose))
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
    if (e.target.classList.contains("modal")) {
        document.getElementById("craftModal").style.display = "none";
    }
});

document.querySelectorAll(".filters select").forEach(select => {
    select.addEventListener("change", filterCrafts);
});

displayCrafts(crafts);



