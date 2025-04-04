const newsData = [
  {
    dateTime: "Mon Dec 16 2019 0:30",
    message: "We have confirmed that Violation #74006 may be triggered by non-cheat software."
  },
  {
    dateTime: "Wed Jun 24 2015 14:15",
    message: "Version 2.352 of the PB Client for BF3 has been released to our PB Master Servers for auto-update and to our website download page."
  },
  {
    dateTime: "Wed Jun 10 2015 11:00",
    message: "We have confirmed that long standing Violation #51048 may be triggered by newly released non-cheat software."
  },
  {
    dateTime: "Tue Apr 14 2015 14:00",
    message: "We have confirmed that Violation #79623 may be triggered by non-cheat software."
  },
  {
    dateTime: "Tue Apr 14 2015 14:00",
    message: "We have confirmed that Violation #79623 may be triggered by non-cheat software."
  },
  {
    dateTime: "Tue Apr 14 2015 0:00",
    message: ""
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("newsList");

  newsData.forEach((item) => {
    const li = document.createElement("li");
    li.className = "news-item";
    li.innerHTML = `<strong>${item.dateTime}</strong><br>${item.message}`;
    newsList.appendChild(li);
  });
});


