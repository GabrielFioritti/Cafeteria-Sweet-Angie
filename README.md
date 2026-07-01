# Sweet Ange Café — Sitio web

Web moderna estilo Apple para **Sweet Ange Café** (Pastelería & Café · Misiones 184, Salto, Uruguay).
Hecha en **React + Vite**, con animaciones al hacer scroll, menú completo, promociones, mapa y CTAs de WhatsApp e Instagram.

> El proyecto se entrega **sin buildear** (sin `node_modules` ni `dist`). Seguí los pasos de abajo para verlo.

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior (incluye `npm`).

## Cómo verlo en local

```bash
cd sweet-ange-cafe
npm install
npm run dev
```

Abrí en el navegador la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Generar la versión final (para subir a un hosting)

```bash
npm run build      # crea la carpeta /dist optimizada
npm run preview    # previsualiza el build
```

La carpeta `dist/` se puede subir a Netlify, Vercel, Hostinger, cPanel, etc.

## Estructura

```
sweet-ange-cafe/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx          · punto de entrada
   ├─ App.jsx           · arma la página
   ├─ index.css         · todos los estilos (paleta, animaciones, responsive)
   ├─ data.js           · MENÚ, PRECIOS, PROMOS y datos del local (editá acá)
   ├─ useReveal.js      · animación de aparición al scrollear
   └─ components/
      ├─ Nav.jsx        · barra superior con blur estilo Apple
      ├─ Hero.jsx       · portada "Amor a primera mordida"
      ├─ Marquee.jsx    · cinta animada
      ├─ Menu.jsx       · carta completa por categorías
      ├─ Promos.jsx     · las 5 promociones
      ├─ About.jsx      · historia de la marca
      ├─ Visit.jsx      · dirección, horarios, WiFi y mapa
      ├─ Footer.jsx     · pie de página
      ├─ WhatsFab.jsx   · botón flotante de WhatsApp
      └─ Logo.jsx       · logotipo Sweet Ange en SVG
```

## ¿Dónde edito el contenido?

Casi todo el texto vive en **`src/data.js`**:

- `business` → nombre, dirección, teléfono, Instagram, horarios, WiFi.
- `menu` → categorías, productos, precios y descripciones.
- `promos` → las promociones.

Cambiás ahí y la web se actualiza sola (con `npm run dev` corriendo).

## Personalización rápida

- **Colores:** variables al inicio de `src/index.css` (`--cream`, `--brown`, `--caramel`, etc.).
- **Tipografías:** Cormorant Garamond (títulos) + Inter (texto), cargadas desde Google Fonts en `index.html`.
- **Logo / favicon:** `src/components/Logo.jsx` y `public/favicon.svg`.

## Notas

- El menú y los datos se tomaron del menú oficial de Sweet Ange Café y de su Instagram [@sweetangecafe](https://www.instagram.com/sweetangecafe).
- El mapa usa la dirección Misiones 184, Salto (Google Maps embed).
- Para agregar fotos reales del local/productos, colocá las imágenes en `public/` y referenciálas (ej. `<img src="/foto.jpg" />`).

---

Hecho con ♥ y mucho café.
