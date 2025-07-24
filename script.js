
    function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('show');
    }

    const btn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
