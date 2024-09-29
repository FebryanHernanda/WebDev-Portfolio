const iconTech = [
  {
    id: 1,
    nama: "HTML",
    url: "assets/Icon/TechStack/HTML.svg",
  },
  {
    id: 2,
    nama: "Javascript",
    url: "assets/Icon/TechStack/javascript.svg",
  },
  {
    id: 3,
    nama: "CSS",
    url: "assets/Icon/TechStack/CSS.svg",
  },
  {
    id: 4,
    nama: "Typescript",
    url: "assets/Icon/TechStack/typescript.svg",
  },
  {
    id: 5,
    nama: "React",
    url: "assets/Icon/TechStack/react.svg",
  },
  {
    id: 6,
    nama: "Python",
    url: "assets/Icon/TechStack/python.svg",
  },
  {
    id: 7,
    nama: "Visual Studio Code",
    url: "assets/Icon/TechStack/visualstudiocode.svg",
  },
  {
    id: 8,
    nama: "Adobe Xd",
    url: "assets/Icon/TechStack/adobeXD.svg",
  },
  {
    id: 9,
    nama: "Figma",
    url: "assets/Icon/TechStack/figma.svg",
  },
  {
    id: 10,
    nama: "Photoshop",
    url: "assets/Icon/TechStack/photoshop.svg",
  },
];

const getIconList = () => {
  const iconList = document.getElementById("icon");

  for (let i = 0; i < iconTech.length; i++) {
    const newImageList = document.createElement("img");
    const listItem = document.createElement("li");
    const listImage = iconTech[i];
    const imgUrl = listImage.url;
    newImageList.src = imgUrl;
    listItem.appendChild(newImageList);
    iconList.appendChild(listItem);
  }
};

window.addEventListener("DOMContentLoaded", getIconList);

// getIconList();

// date
const weekdayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateTes = () => {
  const date = new Date();
  const dateNum = date.getDate();
  const day = weekdayList[date.getDay()];
  const month = monthList[date.getMonth()];
  const year = date.getFullYear();

  const dateFinal = `${day}, ${dateNum} ${month} ${year}`;
  console.log(dateFinal);

  document.getElementById("date").textContent = dateFinal;
};

dateTes();
