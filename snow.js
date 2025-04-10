const snowContainer = document.createElement("div");
snowContainer.style.position = "fixed";
snowContainer.style.top = "0";
snowContainer.style.left = "0";
snowContainer.style.width = "100%";
snowContainer.style.height = "100%";
snowContainer.style.pointerEvents = "none";
snowContainer.style.zIndex = "1"; // خلف كل شيء

document.body.appendChild(snowContainer);

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.textContent = "❄";
  snowflake.style.position = "absolute";
  snowflake.style.top = `${Math.random() * -20}%`;  // تغيير لتكون بداية أعلى
  snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.color = "white";
  snowflake.style.opacity = Math.random();
  snowflake.style.animation = `fall ${Math.random() * 3 + 2}s linear`;  // أقل مدة لتحريك أسرع

  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);  // زيادة المدة للحفاظ على الثلج لفترة أطول
}

setInterval(createSnowflake, 100);  // تقليل الفاصل الزمني بين كل ثلجة والثانية
