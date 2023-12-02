document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");

  if (sidebar) {
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;

      // 조절 가능한 스크롤 위치에 따른 사이드바의 상단 위치
      const sidebarTop = scrollY < 200 ? 200 - scrollY : 0;

      sidebar.style.top = `${sidebarTop}px`;
    });
  }
});