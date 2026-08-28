  // Typewriter de roles
  const roles = ["Desarrollo de Software", "UI / UX Design", "Diseño Gráfico"];
  const el = document.getElementById('roleLine');
  let ri = 0, ci = 0, deleting = false;

  function tick(){
    const current = roles[ri];
    if(!deleting){
      ci++;
      if(ci > current.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      if(ci < 0){ deleting = false; ri = (ri+1) % roles.length; ci = 0; }
    }
    el.innerHTML = current.slice(0, ci) + '<span class="cursor">&nbsp;</span>';
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();

  // Nav móvil simple
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.cssText += open ? '' : 'position:fixed;top:76px;left:0;right:0;flex-direction:column;background:#0a0713;padding:24px 28px;border-bottom:1px solid rgba(196,180,255,0.12);';
  });

  // Botón CV: si no hay archivo aún, avisa en vez de romper el link
  document.getElementById('cvBtn').addEventListener('click', function(e){
    if(this.getAttribute('href') === '#'){
      e.preventDefault();
      alert('Sube tu CV en PDF a la carpeta del proyecto y enlázalo aquí (por ejemplo: cv-dayana.pdf).');
    }
  });
