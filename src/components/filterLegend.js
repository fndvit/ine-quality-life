import {html} from "npm:htl";

export function filterLegend (domain, range) {
  const value = new Map(domain.map((d) => [d, false]));
  
  // Randomly select one region by default
  const randomIndex = Math.floor(Math.random() * domain.length);
  value.set(domain[randomIndex], true);

  const _set = () =>
    set(
      node,
      [...value].filter((d) => d[1]).map((d) => d[0])
    );

  // Maximum allowed checkboxes
  const maxSelected = 6;

  const oninput = (e) => {
    const checkedCount = [...value.values()].filter(v => v).length;

    if (e.target.checked && checkedCount >= maxSelected) {
      e.target.checked = false; // Prevent more than max selection
      return;
    }

    value.set(e.target.id, e.target.checked);
    updateDisabledState(); // Update the disabled state when checked/unchecked
    _set();
  };

  const updateDisabledState = () => {
    const checkedCount = [...value.values()].filter(v => v).length;
    node.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      const label = node.querySelector(`label[for='${checkbox.id}']`);
      if (!checkbox.checked && checkedCount >= maxSelected) {
        checkbox.disabled = true; // Disable unchecked checkboxes
        label.classList.add("disabled"); // Add class to disabled labels
      } else {
        checkbox.disabled = false; // Enable them when less than max is selected
        label.classList.remove("disabled"); // Remove class from enabled labels
      }
    });
  };

  const node = html`<div style="font-family: var(--sans-serif); font-size: 13px;">
    ${domain.map(
      (d, i) => html`<div style="display: flex;">
        <input type="checkbox" id="${d}" name="${d}" style="accent-color: ${range[i]}"
        checked=${value.get(d)} 
        oninput=${oninput}>
        <label for="${d}" class="enabled">${d}</label>
      </div>`
    )}
  </div>`;

  // Initial setting of the disabled state
  updateDisabledState();
  _set();
  return node;
}

function set(input, value) {
  input.value = value;
  input.dispatchEvent(new Event("input", {bubbles: true}));
}