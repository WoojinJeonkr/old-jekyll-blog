document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const initialTop = 700;

  if (sidebar) {
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;
      const sidebarTop = Math.max(initialTop - scrollY, 0);

      sidebar.style.top = `${sidebarTop}px`;
    });
  }
});
