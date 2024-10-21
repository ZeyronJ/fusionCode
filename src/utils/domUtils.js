export const handleMenuClick = (sectionId) => {
  const section = document.getElementById(sectionId);
  const headerOffset = 56; // Ajusta según la altura del encabezado
  const offsetTop =
    section.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });
};
