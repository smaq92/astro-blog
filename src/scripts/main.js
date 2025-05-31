
      const hamburgerElement = document.querySelector('.hamburger');
      const navElement = document.querySelector('.nav-links');

      hamburgerElement ?.addEventListener('click', () => {
      const isExpanded = navElement.getAttribute("expanded") === "true";
      navElement?.classList.toggle('expanded');
      navElement?.setAttribute("expanded", String(!isExpanded))
      })
   