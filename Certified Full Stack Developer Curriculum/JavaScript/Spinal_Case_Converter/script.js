function spinalCase(str) {
  const spinalString = str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[\s_]/g, "-")
    .toLowerCase();
  return spinalString;
}