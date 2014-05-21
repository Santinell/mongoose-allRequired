module.exports = exports = function allRequired (schema) {
  for (field in schema.paths) {
    schema.path(field).required = true;
  }
};
