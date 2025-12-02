function truncateString(string, number){
  if (string.length > number){
    string = string.slice(0, number);
    string = string + "...";
    return string;
  } else {
    return string;
  }
}