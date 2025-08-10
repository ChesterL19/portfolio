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

export function initAnimations() {

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


  const scrollElements = document.querySelectorAll(
    '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in'
  );

  scrollElements.forEach(el => {
    observer.observe(el);
  });

  // Add stagger animations to skill items
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });

  // Add stagger animations to stagger items
  const staggerItems = document.querySelectorAll('.stagger-item');
  staggerItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });

  // Initialize any other animations that need setup
  console.log('Animations initialized');
}

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