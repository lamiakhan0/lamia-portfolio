const words = ["builder.", "learner.", "creator.", "in progress."];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const target = document.getElementById("typewriter");
  if (!target) return;

  current = words[i];

  if (isDeleting) {
    target.textContent = current.substring(0, j--);
  } else {
    target.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", type);
