function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    return str + "way";
  }
  const consonantCluster = str.match(/^[^aeiou]+/);
  if (!consonantCluster) {
    return str + "ay";
  }

  return str.replace(/^[^aeiou]+/, "") + consonantCluster[0] + "ay";
}