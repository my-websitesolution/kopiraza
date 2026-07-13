const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a"); // Ambil semua link di dalam menu

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// 2. Fungsi untuk menutup menu (menghapus class 'active')
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active"); // Menghapus class active di tombol hamburger
    navbar.classList.remove("active"); // Menghapus class active di daftar menu agar menutup
  });
});
