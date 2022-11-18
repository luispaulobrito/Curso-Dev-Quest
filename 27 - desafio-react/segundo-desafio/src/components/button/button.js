import React from "react";

function ola(label) {
  return alert(`A label desse botão é ${label}`);
}

function Button({ label }) {
  return (
    <div>
      <button onClick={() => ola(label)}>{label}</button>
    </div>
  );
}

Button.defaultProps = {
  label: "Baixar CV",
};

export default Button;
