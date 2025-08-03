// Scroll-triggered animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(`
    .scroll-fade-in,
    .scroll-slide-left,
    .scroll-slide-right,
    .scroll-scale-in,
    .animate-on-scroll
  `);

  animatedElements.forEach(el => observer.observe(el));

  return observer;
};

// Stagger animation utility
export const initStaggerAnimations = () => {
  const staggerContainers = document.querySelectorAll('.stagger-container');
  
  staggerContainers.forEach(container => {
    const items = container.querySelectorAll('.stagger-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          container.style.opacity = '1';
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(container);
  });
};

// Initialize all animations when DOM is loaded
export const initAnimations = () => {
  if (typeof window !== 'undefined') {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initScrollAnimations();
        initStaggerAnimations();
      });
    } else {
      initScrollAnimations();
      initStaggerAnimations();
    }
  }
};

// Utility for adding animation classes
export const addAnimationClass = (element, animationClass) => {
  if (element) {
    element.classList.add(animationClass);
  }
};

// Utility for removing animation classes
export const removeAnimationClass = (element, animationClass) => {
  if (element) {
    element.classList.remove(animationClass);
  }
}; 