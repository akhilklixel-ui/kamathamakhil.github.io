// ========== Loader Animation ==========
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    document.body.style.overflow = "auto";
  }, 1000);
  setTimeout(() => {
    loader.style.display = "none";
  }, 1500);
});

// ========== Navbar Active Link Highlight ==========
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ========== Portfolio Modals ==========
document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll(".open-modal");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".modal .close");

  // Open modal
  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close modal
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      modal.classList.remove("show");
      setTimeout(() => (modal.style.display = "none"), 300);
      document.body.style.overflow = "auto";
    });
  });

  // Click outside modal to close
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => (modal.style.display = "none"), 300);
        document.body.style.overflow = "auto";
      }
    });
  });
});

// ========== Toast Message for Contact Form ==========
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Submit the form using Formspree
    fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          showToast("✅ Message Sent Successfully!");
          contactForm.reset();
        } else {
          showToast("⚠️ Failed to send message. Try again.");
        }
      })
      .catch(() => showToast("❌ Network error. Please retry."));
  });

  // Toast Function
  function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }
});
