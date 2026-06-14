// priority: 0

//copy from server version
function DataModifier(pathIn) {
  this.path = pathIn;
}
DataModifier.prototype.replaceValue = function (search, replace) {
  FilesJS.replaceInFile(this.path, search, replace);
  return this;
}
/**
 * @param {*} key accepts a String, for the targeted key/field
 * @param {*} value accepts a Json object, such as through JsonBuilder
 */
DataModifier.prototype.replaceJsonField = function (key, value) {
  var jsonText = FilesJS.readFile(this.path);
  var jsonObj = JSON.parse(jsonText);
  var jsonBuilder = new JsonBuilder(jsonObj);
  var replacedObj = jsonBuilder.setField(key, value).build();
  FilesJS.writeFile(this.path, JSON.stringify(replacedObj, null, 2));
  return this;
}
/**
 * Adds the contents to a new line at the end of the specified file. File must already be created
 */
DataModifier.prototype.append = function (contentIn) {
  FilesJS.appendFile(this.path, "\n" + contentIn);
  return this;
}
/**
 * Creates a file. Can be filled with the first line of the file.
 * Will give an error if used before the server level is loaded
 */
DataModifier.prototype.createFile = function (firstLine) {
  FilesJS.createFiles(this.path, firstLine);
  return this;
}