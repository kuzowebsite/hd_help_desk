const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let loveConfirmed = false;

yesBtn.addEventListener("click", () => {
  if (!loveConfirmed) {
    question.innerHTML = "Ааааа, Би ч бас чамд хайртай";
    gif.src =
      "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
    loveConfirmed = true;
  } else {
    window.location.href = "https://example.com"; // Шилжих вэб хуудасны хаягийг энд оруулсан
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
