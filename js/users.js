const usersContainer = document.querySelector("#users-container");

const usersData = [
  {
    fullName: "Jens Hansen",
    imageSrc:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=200",
    username: "jensHansen85",
    email: "jens@example.com",
    websiteLink: "https://tv2.dk",
  },
  {
    fullName: "Maria Sørensen",
    imageSrc:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200",
    username: "mariaDesign",
    email: "maria@example.com",
    websiteLink: "https://tv2.dk",
  },
  {
    fullName: "Lars Nielsen",
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&crop=face",
    username: "larsCode",
    email: "lars@example.com",
    websiteLink: "https://tv2.dk",
  },
  {
    fullName: "Emma Pedersen",
    imageSrc:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=200&fit=crop&crop=face",
    username: "emmaUX",
    email: "emma@example.com",
    websiteLink: "https://tv2.dk",
  },
];

usersData.forEach(({ fullName, imageSrc, username, email, websiteLink }) => {
  usersContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="user-card">
      <div class="user-card__header"></div>

      <div class="user-card__avatar-wrapper">
        <img class="user-card__avatar" src="${imageSrc}" alt="${fullName}">
      </div>

      <div class="user-card__body">
        <h2 class="user-card__name">${fullName}</h2>
        <p class="user-card__username">@${username}</p>
        <p class="user-card__email">${email}</p>

        <a class="user-card__button" href="${websiteLink}">
          See website
        </a>
      </div>
    </div>
    `,
  );
});
const aiUsers = document.querySelector(".ai-users");
const aiBtn = document.querySelector(".ai-load-btn");

const users = ["Jens Hansen", "Maria Sørensen", "Lars Nielsen"];

aiBtn.addEventListener("click", function () {
  users.forEach(function (user) {
    aiUsers.innerHTML += `<li>${user}</li>`;
  });
});
