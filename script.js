
// ========================================
// ONKE'S LAUNDRY SERVICE
// Website functionality
// ========================================

// Add the business WhatsApp number here.
// South African example: 27821234567
// Use the real business number without + or spaces.

const WHATSAPP_NUMBER = "";


// ========================================
// MOBILE NAVIGATION
// ========================================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";

  });

  navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navigation.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");

      menuButton.textContent = "☰";

    });

  });

}


// ========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ========================================
// WHATSAPP BOOKING FORM
// ========================================

const bookingForm = document.getElementById("booking-form");

if (bookingForm) {

  bookingForm.addEventListener("submit", event => {

    event.preventDefault();

    const formData = new FormData(bookingForm);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const whatsappMessage = `
Hello Onke's Laundry Service!

I would like to request a laundry collection.

Name: ${name}

Contact number: ${phone}

Service required: ${service}

Additional details:
${message || "Not provided"}

Please contact me to confirm availability and pricing.

Thank you.
`;

    const note = document.getElementById("form-note");

    if (!WHATSAPP_NUMBER) {

      if (note) {
        note.textContent =
          "Booking form ready. WhatsApp activation is pending the business number.";
      }

      return;

    }

    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });
}
