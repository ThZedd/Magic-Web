function scrollToTop() {
  const currentPosition = window.scrollY;

  if (currentPosition > 0) {
    window.scroll(0, currentPosition - 69); // Adjust the scroll speed by changing the subtraction value (e.g., -10).
    window.requestAnimationFrame(scrollToTop);
  }
}

scrollToTop();
