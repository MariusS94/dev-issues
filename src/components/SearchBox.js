import "./searchBox.css";
import { createElement } from "../utils/elements";

function SearchBox(props) {
  const input = createElement("input", {
    placeholder: props.placeholder,
  });
  const button = createElement("button", { innerText: "🔎" });
  const container = createElement(
    "div",
    {
      className: "searchBox",
    },
    [input, button]
  );

  let timeoutId = null;
  input.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      props.onChange(input.value);
    }, 500);
  });

  input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      props.onChange(input.value);
    }
  });

  button.addEventListener("input", () => {
    props.onChange(input.value);
  });

  return container;
}

export default SearchBox;
