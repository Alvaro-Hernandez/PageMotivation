$(document).ready(function () {
  $(".card").on("mouseenter", function (e) {
    (x = e.pageX - $(this).offset().left), (y = e.pageY - $(this).offset().top);

    $(this).find("span").css({ top: y, left: x });
  });
  $(".card").on("mouseout", function (e) {
    (x = e.pageX - $(this).offset().left), (y = e.pageY - $(this).offset().top);

    $(this).find("span").css({ top: y, left: x });
  });
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
