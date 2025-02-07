// Sidebar Toggle Functionality
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnMob = document.querySelector(".toggle-btn-mob");
const sidebar = document.getElementById("sidebar");
const toggleIcon = document.getElementById("toggleIcon");
const toggleTab = document.querySelector(".toggle-tab");
const tabBtn = document.querySelector(".tabs");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    if (sidebar.classList.contains("collapsed")) {
        toggleIcon.classList.replace("fa-arrow-right", "fa-arrow-left");
    } else {
        toggleIcon.classList.replace("fa-arrow-left", "fa-arrow-right");
    }
});

toggleBtnMob.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

if (toggleTab && tabBtn) {
    toggleTab.addEventListener("click", () => {
        tabBtn.classList.toggle("tab-btn-open");
    });
} else {
    console.error("toggleTab or tabBtn element not found.");
}


document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const panes = document.querySelectorAll(".tab-pane");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("active"));
        panes.forEach(pane => pane.classList.remove("active"));
        tab.classList.add("active");
        const targetPane = document.getElementById(tab.dataset.tab);
        targetPane.classList.add("active");
      });
    });
  });
  