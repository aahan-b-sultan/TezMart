document.addEventListener('DOMContentLoaded', () => {
  // Render My Services
  const myServicesList = document.getElementById('my-services-list');
  if (myServicesList) {
    const services = JSON.parse(localStorage.getItem('tezmart_my_services') || '[]');
    if (services.length > 0) {
      let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">';
      services.forEach(service => {
        html += `
          <div class="req-card" style="margin-bottom: 0; display: flex; flex-direction: column; gap: 12px; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items:flex-start;">
              <h4 style="font-size: 1.15rem; font-weight: 600; margin: 0; color: var(--text-dark);">${service.name}</h4>
              <span class="req-status" style="background-color: #d1fae5; color: #059669; font-size: 0.75rem; padding: 4px 10px;">Active</span>
            </div>
            
            <div style="font-size: 1.1rem; color: #00a699; font-weight: 700;">₹${service.price} <span style="color: #64748b; font-weight: normal; font-size: 0.9rem;">/ ${service.unit}</span></div>
            
            <div class="meta-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              ${service.location || 'Anywhere'}
            </div>
            
            <div style="font-size: 0.85rem; color: #94a3b8; margin-top: auto; padding-top: 10px; border-top: 1px solid #f1f5f9;">
              Published on ${new Date(service.date).toLocaleDateString()}
            </div>
          </div>
        `;
      });
      html += '</div>';
      myServicesList.innerHTML = html;
    }
  }
});
