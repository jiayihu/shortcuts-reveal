window.setTimeout(() => {
  const msg = {
    payload: {
      shortcuts: document.title,
    },
    type: 'shortcuts-reveal',
  };
  window.postMessage(msg, '*');
}, 1000);
