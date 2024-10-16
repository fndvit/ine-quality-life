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
  max-width: 36rem;
  padding-bottom: 2rem;
  font-size: 14vw;
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
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: end">
  <div class="hero">
    <h1>Índice de Calidad de Vida (INE)</h1>
      <h2>El IMCV es un indicador experimental desarrollado por el Instituto Nacional de Estadística de España (INE) construido a partir de 60 indicadores específicos agrupados en nueve dimensiones, que ofrece una visión general de la calidad de vida en España.
    </h2>
  </div>
  <img alt="flowers background" style="max-width: 100%; height: auto; margin-bottom: 4rem" src="./flowersBG.png" >

</div>
<!-- <iframe id="iframe" scrolling="no" src="https://sequera.fndvit.org/"></iframe> -->


<div class="grid grid-cols-3">
  <div class="card">
    <h2><a href="imcv-dashboard">Panel del índice multidimensional de calidad de vida (IMCV)</a></h2>
  </div>
  <div class="card">
    <h2><a href="making-of">Cómo (y por qué) lo rehicimos</a></h2>
  </div>
  <div class="card">
    <h2><a href="data">Descarga los datos</a></h2>
  </div>
</div>

--- 
<p class="endnote">TK TK TK TK <a href="mailto:karma@fundaciovit.org">karma@fundaciovit.org</a>.</p>