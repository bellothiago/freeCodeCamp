const themes = [
  {
    name: "white",
    message: "The snow goose need not bathe to make itself white. Neither need you do anything but be yourself. — Lao Tzu"
  },
  {
    name: "black",
    message: "If you stare into the abyss, the abyss stares back at you. — Friedrich Nietzsche"
  },
  {
    name: "gray",
    message: "I like the muted sounds, the shroud of grey, and the silence that comes with fog. — Om Malik"
  },
   {
    name: "red",
    message: "Any landscape is a condition of the spirit. The red earth does not judge footsteps; it remembers them. — Yoruba Proverb"
  }
];

const themeSwitcherButton = document.querySelector("#theme-switcher-button");
const themeDropdown = document.querySelector("#theme-dropdown");
const theme = document.querySelectorAll('[role="menuitem"]');
const messageElement = document.querySelector("#message");

function toggleDropdownMenu() {
  const isExpanded = themeSwitcherButton.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    themeDropdown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  } else {
    themeDropdown.hidden = false;
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  }
}

themeSwitcherButton.addEventListener("click", toggleDropdownMenu);

theme.forEach(t => {
  t.addEventListener("click", () => {
    document.body.setAttribute("class", `theme-${t.textContent}`);
    messageElement.textContent = themes.find(theme => theme.name === t.innerText)?.message
  })
});