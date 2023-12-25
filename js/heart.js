document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let mouseheart = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;
  mouseheart.style.left = x + "px";
  mouseheart.style.top = y + "px";

  let size = Math.random() * 80;
  mouseheart.style.width = 20 + size + "px";
  mouseheart.style.height = 20 + size + "px";

  let transformVal = Math.random() * 360;
  mouseheart.style.transform = "rotate(" + transformVal + "deg)";

  body.appendChild(mouseheart);
  setTimeout(function () {
    mouseheart.remove();
  }, 1000);
});

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
