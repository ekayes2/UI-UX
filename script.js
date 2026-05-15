const bindGroupCollapse = () => {
  document.querySelectorAll('[data-group]').forEach((group) => {
    const header = group.querySelector('[data-toggle-group]');
    const button = header?.querySelector('.collapse-btn');
    const content = group.querySelector('[data-group-content]');

    if (!button || !content) {
      return;
    }

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isExpanded));
      button.setAttribute('aria-label', isExpanded ? 'Expand group' : 'Collapse group');
      content.classList.toggle('d-none', isExpanded);
    });
  });
};

const bindTogglePills = () => {
  document.querySelectorAll('[data-ui-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const active = button.classList.toggle('is-active');
      const status = button.querySelector('.toggle-state');
      if (status) {
        status.textContent = active ? 'Yes' : 'No';
      }
    });
  });
};

bindGroupCollapse();
bindTogglePills();
