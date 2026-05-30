document.addEventListener("DOMContentLoaded", () => {
  const productsGrid = document.getElementById("products-grid");

  const products = [
    {
      price: "₹22",
      title: "Pt100 Temperature Sensor Cable",
      company: "Thermo Sensors",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Sensor+Cable"
    },
    {
      price: "₹450",
      title: "PT100 RTD Temperature Sensor",
      company: "Central Controls & Engineering Services",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=RTD+Sensor"
    },
    {
      price: "₹500",
      title: "PT100 Temperature Sensor",
      company: "Premier Electricals",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Temp+Sensor"
    },
    {
      price: "₹800",
      title: "Class B Stainless Steel RTD Pt100 Sensor",
      company: "A. V. Engineers",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Steel+Sensor"
    }
  ];

  if (productsGrid) {
    productsGrid.innerHTML = products.map(product => `
      <div class="product-card">
        <div class="product-price">${product.price}</div>
        <button class="favorite-btn">
          <svg class="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </button>
        <div class="product-img-container">
          <img src="${product.image}" alt="${product.title}" class="product-img">
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-company">${product.company}</p>
          <button class="contact-btn">
            <svg class="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            Contact
          </button>
        </div>
      </div>
    `).join('');
  }
});
