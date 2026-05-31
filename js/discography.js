document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".filter button");
  const items = document.querySelectorAll(".item");

  let activeFilter = "all";

  // =========================
  // フィルター処理
  // =========================
  function filterItems(filter) {

    items.forEach((item, index) => {

      const type = item.dataset.category;

      const shouldShow =
        filter === "all" || filter === type;

      if (shouldShow) {

        item.style.display = "block";

        // アニメーション（遅延出現）
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";

        setTimeout(() => {
          item.style.transition = "0.5s ease";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 40);

      } else {

        item.style.display = "none";

      }

    });

  }

  // =========================
  // ボタンイベント
  // =========================
  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      // active切替
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      activeFilter = btn.dataset.filter;

      filterItems(activeFilter);

    });

  });

  // 初期表示
  filterItems("all");

});