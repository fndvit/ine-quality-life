import {html} from "npm:htl";

export function filterLegend (domain, range) {
  const value = new Map(domain.map((d) => [d, true]));
  const _set = () =>
    set(
      node,
      [...value].filter((d) => d[1]).map((d) => d[0])
    );
  const oninput = (e) => (value.set(e.target.id, e.target.checked), _set());
  const node = html`<div style="font-family: var(--sans-serif); font-size: 13px;">
    ${domain.map(
      (d, i) => html`<div style="display: flex;">
      <input type="checkbox" id="${d}" name="${d}" checked style="accent-color: ${range[i]}" oninput=${oninput}>
      <label for="${d}">${d}</label>
    </div>`
    )}
  </div>`;
  _set();
  return node;
}

function set(input, value) {
  input.value = value;
  input.dispatchEvent(new Event("input", {bubbles: true}));
}