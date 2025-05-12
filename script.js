// Store theme preference in localStorage
function setThemePreference(theme) {
    localStorage.setItem('theme', theme);
    document.body.className = theme; // Apply the theme to the body
  }
  
  // Retrieve the theme preference from localStorage
  function getThemePreference() {
    return localStorage.getItem('theme');
  }
  
  // Apply the theme based on localStorage value
  window.onload = () => {
    const savedTheme = getThemePreference();
    if (savedTheme) {
      document.body.className = savedTheme;
    } else {
      // Default theme is light
      setThemePreference('light');
    }
  };
  
  // Toggle theme on button click
  const themeToggleButton = document.getElementById('theme-toggle');
  
  themeToggleButton.addEventListener('click', () => {
    const currentTheme = getThemePreference();
    if (currentTheme === 'dark') {
      setThemePreference('light');
    } else {
      setThemePreference('dark');
    }
  });
  
  // Button click event to trigger animations
  const animateButton = document.getElementById('animate-btn');
  animateButton.addEventListener('click', () => {
    const image = document.querySelector('img');
    image.classList.add('animate'); // Trigger image animation on button click
  });
  