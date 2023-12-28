document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const initialTop = 700;
  const maxHeight = 500; // 최대 높이 값

  function adjustSidebarHeight() {
    const contentHeight = document.body.scrollHeight;
    const newHeight = Math.min(contentHeight, maxHeight);
    sidebar.style.height = `${newHeight}px`;
  }

  if (sidebar) {
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;
      const sidebarTop = Math.max(initialTop - scrollY, 0);

      sidebar.style.top = `${sidebarTop}px`;

      // 추가: 세로 길이 동적 조절
      adjustSidebarHeight();
    });

    // 페이지 로드 시 세로 길이 조절
    adjustSidebarHeight();
  }
});
