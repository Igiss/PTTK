document.addEventListener("DOMContentLoaded", function () {
  function showSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
  }

  // Mặc định hiển thị Dashboard
  showSection("dashboard");

  // Gắn sự kiện cho menu
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
      showSection(sectionId);
    });
  });

  // Xử lý form báo cáo
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Báo cáo đã được gửi!");
      form.reset();
    });
  }
});
function showSection(sectionId, linkElement) {
  // Ẩn tất cả các section
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  // Hiển thị section được chọn
  document.getElementById(sectionId).classList.add("active");

  // Cập nhật active menu
  document.querySelectorAll(".sidebar-menu a").forEach((link) => {
    link.classList.remove("active");
  });
  linkElement.classList.add("active");

  // Cập nhật tiêu đề
  const titles = {
    dashboard: "Dashboard",
    "user-management": "Quản lý Người dùng",
    // ...
  };
  document.getElementById("section-title").textContent = titles[sectionId];
}
