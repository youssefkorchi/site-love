function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  // مكان عشوائي بالعرض
  heart.style.left = Math.random() * window.innerWidth + "px";

  // حجم عشوائي
  heart.style.fontSize = (20 + Math.random() * 30) + "px";

  // إضافة القلوب للصفحة
  document.body.appendChild(heart);

  // إزالة بعد 4 ثواني
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// إنشاء قلب كل 500ms
setInterval(createHeart, 500);
