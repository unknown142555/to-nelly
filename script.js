const message = document.getElementById("message");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const image = document.getElementById("image");
const song = document.getElementById("song");

const messages = [
  "ارحبي يا أغلى ملكة في الدنيا 👑",
  "فيه واحد من أصدقائنا بيقول إنك صاحبة أجمل ضحكة فالعالم... صح كده؟ 😄",
  "أووووه، معاه حق والله، الضحكة دي بتشع نور! ✨",
  "بصي بقى،هو بيعزك جدًا بس مش بيعرف يوصل ده ليكي بسهولة ❤️",
  "أنا هقولك اللي قاله، بس ده سر بينا 🤫",
  "رغم اختلافكم في حاجات كتير، بس إنتي ليكي مكانة كبيرة في قلبه 💌",
  "هو شايفك أخت وصديقة و مصدر سعادة في حياته... ووجودك فرق معاه كتير 💫",
  "بس كده يا ست البنات، لو عرفتي مين، ابعتي له رأيك وخليه يفرح 🌷"
];

noBtn.onclick = () => {
  message.textContent = "طب هوينا ياعم 😅";
  buttons.style.display = "none";
};

yesBtn.onclick = () => {
  song.play().catch(() => {
    alert("اضغطي على الشاشة لتشغيل الأغنية 🎵");
  });

  buttons.style.display = "none";
  let i = 0;

  const showNextMessage = () => {
    message.style.opacity = 0;
    setTimeout(() => {
      if (i === 2) {
        image.style.display = "block";
        setTimeout(() => {
          image.style.display = "none";
          message.textContent = messages[i];
          message.style.animation = "fadein 1s forwards";
          i++;
          setTimeout(showNextMessage, 5000);
        }, 5000);
      } else if (i < messages.length) {
        message.textContent = messages[i];
        message.style.animation = "fadein 1s forwards";
        i++;
        setTimeout(showNextMessage, 5000);
      }
    }, 300);
  };

  setTimeout(showNextMessage, 1500);

};
