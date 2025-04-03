const newsData = [
  { title: "New Anti-Cheat Update Released", date: "April 3, 2025" },
  { title: "Scheduled Maintenance: April 5", date: "April 2, 2025" },
  { title: "PB Now Supports More Games!", date: "March 30, 2025" },
  { title: "Security Patch Deployed", date: "March 27, 2025" },
  { title: "Player Ban Wave Announced", date: "March 25, 2025" },
  { title: "Scroll Feature Added", date: "March 22, 2025" },
  { title: "Improved UI Experience", date: "March 20, 2025" }
];

document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("newsList");

  newsData.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "news-item" + (index % 2 === 0 ? " even" : " odd");
    li.innerHTML = `<strong>${item.date}</strong><br>${item.title}`;
    newsList.appendChild(li);
  });
});

