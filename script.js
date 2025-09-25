// Saat halaman dimuat, tampilkan komentar dari localStorage
document.addEventListener("DOMContentLoaded", function () {
  const testimonialList = document.getElementById("testimonial-list");
  const stored = JSON.parse(localStorage.getItem("testimonials")) || [];

  stored.forEach(item => {
    const div = document.createElement("div");
    div.className = "testimonial-item";
    div.innerHTML = `<strong>${item.name}</strong><p>${item.comment}</p>`;
    testimonialList.appendChild(div);
  });
});

// Saat form disubmit
document.getElementById("testimonial-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();
  const testimonialList = document.getElementById("testimonial-list");

  if (!name || !comment) return;

  // Buat elemen testimonial baru
  const newTestimonial = document.createElement("div");
  newTestimonial.classList.add("testimonial-item");
  newTestimonial.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
  testimonialList.appendChild(newTestimonial);

  // Simpan ke localStorage
  const stored = JSON.parse(localStorage.getItem("testimonials")) || [];
  stored.push({ name: name, comment: comment });
  localStorage.setItem("testimonials", JSON.stringify(stored));

  // Reset form
  this.reset();
});
