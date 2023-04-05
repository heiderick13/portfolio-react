import "./ScrollToTop.css";

function ScrollToTop() {
  function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  return (
    <span onClick={scrollToTop} className="top-btn">
      <i class="bi bi-chevron-up"></i>
    </span>
  );
}

export default ScrollToTop;
