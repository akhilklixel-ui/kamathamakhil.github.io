// ===== Page Loader =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 1000); // Loader stays visible for 1 second
});

// ===== Contact Form Submission =====
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset the form
    form.reset();

    // Show the popup message
    const popup = document.createElement("div");
    popup.id = "popupMessage";
    popup.textContent = "✅ Message Sent Successfully!";
    document.body.appendChild(popup);

    // Trigger show animation
    setTimeout(() => {
      popup.classList.add("show");
    }, 100);

    // Hide popup after a few seconds
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 500);
    }, 3000);
  });
}

// ===== Portfolio Project Popup =====
document.addEventListener("DOMContentLoaded", () => {
  const viewButtons = document.querySelectorAll(".btn");
  const popup = document.createElement("div");
  popup.className = "project-popup";
  popup.innerHTML = `
    <div class="popup-content">
      <span id="closePopup">&times;</span>
      <img src="" alt="Project Image" id="popupImage" />
      <h3 id="popupTitle"></h3>
      <p id="popupDesc"></p>
    </div>
  `;
  document.body.appendChild(popup);

  const popupImg = popup.querySelector("#popupImage");
  const popupTitle = popup.querySelector("#popupTitle");
  const popupDesc = popup.querySelector("#popupDesc");
  const closePopup = popup.querySelector("#closePopup");

  // Handle "View Project" button clicks
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest(".project-card");
      popupImg.src = card.querySelector("img").src;
      popupTitle.textContent = card.querySelector("h3").textContent;
      popupDesc.textContent = card.querySelector("p").textContent;

      popup.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close popup when clicking outside
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
