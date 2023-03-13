let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => {
  inp.addEventListener("input", generateShadow);
});

function generateShadow() {
  let hShadow = document.getElementById("h-shadow").value;
  let vShadow = document.getElementById("v-shadow").value;
  let blurRadius = document.getElementById("blur-radius").value;
  let spreadRadius = document.getElementById("spread-radius").value;
  let shadowColor = document.getElementById("shadow-color").value;
  let shadowColorOpacity = document.getElementById(
    "shadow-color-opacity"
  ).value;
  let shadowInset = document.getElementById("shadow-inset").checked;

  // using ternary operator to check if inset checkbox is checked or Not.
  // if checked we add the inset prefix
  // else no prefix is added
  let boxShadow = shadowInset
    ? `inset ${hShadow}px ${vShadow}px ${blurRadius} ${spreadRadius} ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`
    : ` ${hShadow}px ${vShadow}px ${blurRadius} ${spreadRadius} ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`;

  elem.style.boxShadow = boxShadow;
  code.textContent = `box-shadow: ${boxShadow};`;
}

// converting hex value to rgba
function hexToRgba(shadowColor, shadowColorOpacity) {
  let r = parseInt(shadowColor.substr(1, 2), 16);
  let g = parseInt(shadowColor.substr(3, 2), 16);
  let b = parseInt(shadowColor.substr(5, 2), 16);

  return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}

// copy the generated code to clipboard
function copyCode(){
    code.select();
    document.execCommand("copy");
    alert("Code copied on clipboard");
}

// call the generateShadow Function on every page load 
window.onload = generateShadow();
