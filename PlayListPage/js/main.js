function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

  const animationDuration = Math.random() * 5 + 5;
  snowflake.style.animationDuration = animationDuration + "s";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, animationDuration * 1000);
}
setInterval(createSnowflake, 300);
