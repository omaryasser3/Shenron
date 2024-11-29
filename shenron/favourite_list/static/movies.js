// Ensure hover works cleanly
document.querySelectorAll(".movie-card").forEach((card) => {
    const poster = card.querySelector(".movie-poster");
    const info = card.querySelector(".movie-info");
  
    // Show details on hover
    poster.addEventListener("mouseover", () => {
      info.style.opacity = "1";
    });
  
    poster.addEventListener("mouseout", () => {
      info.style.opacity = "0";
    });
  });
  