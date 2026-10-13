document.querySelectorAll('.privacy-list details').forEach(section => {
  section.addEventListener('toggle', () => {
    if (section.open) section.dataset.visited = 'true';
  });
});
