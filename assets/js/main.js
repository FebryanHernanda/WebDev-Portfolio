import iconTech from "/assets/js/dataIcon.js";

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

getIconList();
