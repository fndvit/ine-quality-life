---
toc: false
sidebar: false
---

<style>

.hero {
  display: flex;
  flex-direction: column;
  font-family: var(--sans-serif);
  margin: 4rem 0 4rem;
  text-wrap: balance;
}

.hero h1 {
  max-width: 100%;
  padding-bottom: 2rem;
  font-size: 16vw;
  font-weight: 900;
  line-height: 1;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 100%;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

.card {
  background-color:white;
  border: none;
  box-shadow: 0 0 .5rem rgba(0,0,0,0.1);
}

.card h2 {
  margin-top: 1rem;
}

iframe {
  width: 100%;
  border:none;
  -ms-zoom: 0.85;
  -moz-transform: scale(0.85);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.85);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.85);
  -webkit-transform-origin: 0 0;
  height: 36rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0,0,0,0.15);
  pointer-events:none;
}

#observablehq-footer {
  display:none;
}

.endnote {
  font-family: var(--sans-serif);
  line-height: 1.5rem;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 6rem;
    max-width: 60%;
  }
  .hero h2 {
    max-width: 50%;
  }
}

</style>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: end">
  <div class="hero">
    <h1>La calidad de vida en España</h1>
    <h2>El <strong>Indicador Multidimensional de Calidad de Vida (IMCV)</strong> es un índice compuesto desarrollado por el <strong>Instituto Nacional de Estadística de España (INE)</strong> y construido a partir de 60 variables estadísticas, agrupadas en nueve dimensiones, que ofrece una visión general de la calidad de vida en España.
  </h2>
  <img alt="flowers background" style="max-width: 100%; height: auto; margin-bottom: 4rem" src="./flowersBG.png" >

</div>

<div class="grid grid-cols-3">
  <div class="card">
    <h2><a href="imcv-dashboard">Panel de datos del indicador (IMCV)</a></h2>
  </div>
  <div class="card">
    <h2><a href="making-of">Cómo (y por qué) lo rehicimos</a></h2>
  </div>
  <div class="card">
    <h2><a href="data">Descarga los datos</a></h2>
  </div>
</div>

--- 
<p class="endnote"><strong>La visualización puede revolucionar la difusión de los datos abiertos y revitalizar la transparencia.</strong> Si queréis colaborar con nosotros, o vuestra empresa u organización quiere patrocinar la iniciativa, o queréis apoyar nuestra misión de otra forma, poneos en contacto con <a href="mailto:karma@fundaciovit.org">karma@fundaciovit.org</a>.</p>