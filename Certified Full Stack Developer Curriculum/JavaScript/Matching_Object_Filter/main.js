function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  console.log(sourceKeys);

  return collection.filter(obj => 
    sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}