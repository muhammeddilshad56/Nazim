function scrollToAbout() {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

function showDetails() {
  const detailsDiv = document.getElementById("details");
  const button = document.getElementById("clickBtn");
  if (detailsDiv.style.display === "none") {
    detailsDiv.style.display = "block";
    button.innerText = "Hide Details";
  } else {
    detailsDiv.style.display = "none";
    button.innerText = "Click Me to See Details";
  }
}