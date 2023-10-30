document.addEventListener("DOMContentLoaded", () => {
  const gamessCards = document.querySelectorAll(".gamess");

  gamessCards.forEach((card) => {
    const state = {
      mouseX: 0,
      mouseY: 0,
      width: card.clientWidth,
      height: card.clientHeight,
    };

    card.addEventListener("mousemove", (event) => {
      state.mouseX = event.pageX - card.offsetLeft - state.width / 2;
      state.mouseY = event.pageY - card.offsetTop - state.height / 2;

      // Parallax angle in card
      const angleX = (state.mouseY / state.height) * 30; // Utilise state.mouseY pour l'angle X
      const angleY = (state.mouseX / state.width) * -30; // Utilise state.mouseX pour l'angle Y
      card.querySelector(
        ".parallax-card"
      ).style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.querySelector(".parallax-card").style.transform =
        "rotateY(0deg) rotateX(0deg)";
    });
  });
});
