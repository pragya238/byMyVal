let noCount = 0;

function handleYes() {
  window.location.href = "yes_page.html";
}

function handleNo() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noCount++;

  const scale = 1 + noCount * 0.2;
  yesButton.style.transform = `scale(${scale})`;

  const messages = [
    "Are you sure? 😢",
    "Think again 🥺",
    "Pleaseeee 💔",
    "Last chance 😭",
    "Okay now click Yes 😤"
  ];

  noButton.innerText = messages[Math.min(noCount, messages.length - 1)];
}
