const getLocalStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme') === theme) {
    theme = localStorage.getItem('theme');
  };
  return theme;
}

export default getLocalStorageTheme;