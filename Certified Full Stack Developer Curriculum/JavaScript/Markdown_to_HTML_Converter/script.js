const markdownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

const h3 = /^\s*###\s+(.*)$/gm;
const h2 = /^\s*##\s+(.*)$/gm;
const h1 = /^\s*#\s+(.*)$/gm;
const bold1 = /\*\*(.+?)\*\*/g;
const bold2 = /__(.+?)__/g;
const italic1 = /\*(.+?)\*/g;
const italic2 = /_(.+?)_/g;
const image = /!\[([^\]]*)\]\(([^)]+)\)/g;
const link = /\[([^\]]+)\]\(([^)]+)\)/g;
const blockquote = /^\s*>\s+(.*)$/gm;

function convertMarkdown() {
  let text = markdownInput.value;
  text = text.replace(h3, "<h3>$1</h3>");
  text = text.replace(h2, "<h2>$1</h2>");
  text = text.replace(h1, "<h1>$1</h1>");
  text = text.replace(bold1, "<strong>$1</strong>");
  text = text.replace(bold2, "<strong>$1</strong>");
  text = text.replace(italic1, "<em>$1</em>");
  text = text.replace(italic2, "<em>$1</em>");
  text = text.replace(image, "<img src='$2' alt='$1'>");
  text = text.replace(link, '<a href="$2">$1</a>');
  text = text.replace(blockquote, "<blockquote>$1</blockquote>");
  return text;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();
  htmlOutput.textContent = html;
  preview.innerHTML = html;
});