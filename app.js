const arButton = document.getElementById('arButton');
const modelViewer = document.getElementById('viewer');

arButton.addEventListener('click', () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isIOS) {
    const usdzSrc = modelViewer.getAttribute('ios-src');
    if (usdzSrc) {
      openQuickLook(usdzSrc);
    } else {
      alert('No se encontró un modelo AR para iOS.');
    }
  } else {
    // Acá luego enchufamos WebXR para Android
    alert('AR en Android lo activamos en el próximo paso');
  }
});

function openQuickLook(usdzSrc) {
  const link = document.createElement('a');
  link.rel = 'ar';
  link.href = usdzSrc;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
