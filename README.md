# Portafolio — Dayana Santana

Sitio de una sola página, sin frameworks ni build: solo HTML, CSS y JS en tres archivos separados. Eso lo hace muy fácil de subir a Vercel.

- `index.html` → estructura y contenido
- `styles.css` → todos los estilos
- `script.js` → typewriter de roles, menú móvil y botón de CV

Los tres archivos deben quedar en la **misma carpeta** — `index.html` los enlaza con `<link rel="stylesheet" href="styles.css">` y `<script src="script.js" defer>`.

## Qué personalizar antes de publicar

- **CV**: sube tu CV en PDF a esta misma carpeta (ej. `cv-dayana.pdf`) y cambia el `href="#"` del botón "Descargar CV" en `index.html` por `href="cv-dayana.pdf"`.
- **Redes sociales**: cuando tengas LinkedIn u otras, agrégalas en `.social-row` (copia el patrón del ícono de GitHub) y en la sección de contacto.
- **Sección "Diseño gráfico & UI"**: los 6 bloques de color son marcadores de posición. Reemplázalos por tus imágenes reales:
  ```html
  <div class="gallery-item"><img src="logo1.jpg" alt="Logo X"></div>
  ```
  y sube las imágenes a una carpeta `img/` dentro del proyecto.
- **Proyectos**: edita textos y tecnologías en la sección `#proyectos` con tus proyectos reales o nuevos que hagas.

## Subir a Vercel (sin usar terminal)

1. Sube esta carpeta a un repositorio nuevo en tu GitHub (`diane2006`). Puedes arrastrar los archivos directamente desde la web de GitHub ("Add file → Upload files").
2. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Clic en **Add New → Project**.
4. Selecciona el repositorio que acabas de crear.
5. Framework Preset: **Other** (no necesita build). Deja todo por defecto.
6. Clic en **Deploy**.
7. En 1-2 minutos te da un link tipo `https://tu-portafolio.vercel.app` — ese es el que pones en tu CV.

## Subir a Vercel (con terminal, opcional)

```bash
npm i -g vercel
cd carpeta-del-proyecto
vercel
```

Sigue las instrucciones en pantalla (conecta tu cuenta la primera vez) y te dará el link de producción.

## Estructura

```
index.html   → todo el sitio (HTML + CSS + JS)
README.md    → esta guía
```
