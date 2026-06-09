document.addEventListener("DOMContentLoaded", () => {
  // 1. Auth Gatekeeping - Verify if the user is in sessionStorage
  const currentUserStr = sessionStorage.getItem("tezmart_current_user");
  if (!currentUserStr) {
    window.location.href = "/login.html"; // Protect route
    return;
  }

  const currentUser = JSON.parse(currentUserStr);
  const users = JSON.parse(sessionStorage.getItem("tezmart_users") || "[]");
  
  // Find full user details from the database
  const userDetails = users.find(u => u.email === currentUser.email) || currentUser;

  // 2. Populate DOM with existing data
  const mainAvatar = document.getElementById('main-avatar');
  const mainName = document.getElementById('main-name');

  if (mainAvatar) mainAvatar.innerText = userDetails.name.charAt(0).toUpperCase();
  if (mainName) mainName.innerText = userDetails.name;
  
  // Primary
  document.getElementById('profile-phone').value = userDetails.phone || '';
  document.getElementById('profile-email').value = userDetails.email || '';
  document.getElementById('profile-alt-phone').value = userDetails.altPhone || '';
  document.getElementById('profile-alt-email').value = userDetails.altEmail || '';

  // Address
  document.getElementById('profile-pin').value = userDetails.pin || '';
  document.getElementById('profile-house').value = userDetails.house || '';
  document.getElementById('profile-area').value = userDetails.area || '';
  document.getElementById('profile-locality').value = userDetails.locality || '';
  document.getElementById('profile-landmark').value = userDetails.landmark || '';

  // Company
  document.getElementById('profile-company').value = userDetails.company || '';
  document.getElementById('profile-designation').value = userDetails.designation || '';
  document.getElementById('profile-website').value = userDetails.website || '';
  document.getElementById('profile-gstin').value = userDetails.gstin || '';
  document.getElementById('profile-pan').value = userDetails.pan || '';
  document.getElementById('profile-facebook').value = userDetails.facebook || '';
  document.getElementById('profile-instagram').value = userDetails.instagram || '';
  document.getElementById('profile-google').value = userDetails.google || '';


  // 3. Handle Unified Form Submission
  const form = document.getElementById('profile-unified-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Grab new values
    userDetails.altPhone = document.getElementById('profile-alt-phone').value;
    userDetails.altEmail = document.getElementById('profile-alt-email').value;

    userDetails.pin = document.getElementById('profile-pin').value;
    userDetails.house = document.getElementById('profile-house').value;
    userDetails.area = document.getElementById('profile-area').value;
    userDetails.locality = document.getElementById('profile-locality').value;
    userDetails.landmark = document.getElementById('profile-landmark').value;

    userDetails.company = document.getElementById('profile-company').value;
    userDetails.designation = document.getElementById('profile-designation').value;
    userDetails.website = document.getElementById('profile-website').value;
    userDetails.gstin = document.getElementById('profile-gstin').value;
    userDetails.pan = document.getElementById('profile-pan').value;
    userDetails.facebook = document.getElementById('profile-facebook').value;
    userDetails.instagram = document.getElementById('profile-instagram').value;
    userDetails.google = document.getElementById('profile-google').value;
    
    // Save to completely mocked database inside sessionStorage
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
      users[userIndex] = userDetails;
      sessionStorage.setItem("tezmart_users", JSON.stringify(users));
      
      sessionStorage.setItem("tezmart_current_user", JSON.stringify(currentUser));
    }

    // Trigger Success messages on all submit buttons since it's a unified form
    const msgs = document.querySelectorAll('.success-msg');
    msgs.forEach(msg => {
      msg.classList.add("show");
      setTimeout(() => {
        msg.classList.remove("show");
      }, 3000);
    });
  });


});
