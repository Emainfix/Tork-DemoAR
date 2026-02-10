const products = [
  {
    title: "Tork Xpressnap® Dispensador Fit™",
    material: "Negro",
    description: "Ideal para negocios en donde el espacio en las mesas es reducido pero la experiencia y el servicio son prioridad.",
    model: "./model.glb",
    usdz: "./model.usdz"
  },
  {
    title: "Tork Matic® Dispensador Toalla en Rollo",
    material: "Sensor Intuition™ Negro",
    description: "Con sensor Intuition™ Dispensación sin contacto, una hoja a la vez.",
    model: "./model2.glb",
    usdz: "./model2.usdz"
  }
];

let currentIndex = 0;

// Elementos del DOM
const titleEl = document.getElementById('productTitle');
const materialEl = document.getElementById('materialTitle');
const descEl = document.getElementById('productDescription');
const viewerEl = document.getElementById('viewer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const arButton = document.getElementById('arButton');

// Función para actualizar la vista
function updateProduct(index) {
  const p = products[index];
  titleEl.textContent = p.title;
  materialEl.textContent = p.material;
  descEl.textContent = p.description;
  viewerEl.src = p.model;
}

// Event Listeners para navegación
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  updateProduct(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % products.length;
  updateProduct(currentIndex);
});

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
  link.href = products[currentIndex].usdz; // Usamos el USDZ del producto actual
  link.className = 'btn btn-primary btn-view';

  const img = document.createElement('img');
  img.src = 'btn.png';
  img.className = 'btn-img';
  img.alt = 'Ver en AR';

  link.appendChild(img);
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

// Inicializar la vista para asegurar que el título sea correcto desde el inicio
updateProduct(currentIndex);
