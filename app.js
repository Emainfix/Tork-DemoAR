const arButton = document.getElementById('arButton');

arButton.addEventListener('click', () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    openQuickLook();
  } else {
    // Acá luego enchufamos WebXR para Android
    alert('AR en Android lo activamos en el próximo paso');
  }
});

function openQuickLook() {
  const link = document.createElement('a');
  link.rel = 'ar';
  link.href = './model.usdz'; // IMPORTANTE: USDZ para Safari
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


