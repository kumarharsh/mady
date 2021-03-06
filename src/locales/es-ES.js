/* eslint-disable */
function anonymous() {
var number = function (value, offset) {
  if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
  return value - (offset || 0);
};
var plural = function (value, offset, lcfunc, data, isOrdinal) {
  if ({}.hasOwnProperty.call(data, value)) return data[value]();
  if (offset) value -= offset;
  var key = lcfunc(value, isOrdinal);
  if (key in data) return data[key]();
  return data.other();
};
var select = function (value, data) {
  if ({}.hasOwnProperty.call(data, value)) return data[value]();
  return data.other()
};
var pluralFuncs = {
  "es-ES": function (n, ord) {
    if (ord) return 'other';
    return (n == 1) ? 'one' : 'other';
  }
};
var fmt = {};

return {
  "someContext_{NUM, plural, one{1 hamburger} other{# hamburgers}}": function(d) { return plural(d.NUM, 0, pluralFuncs["es-ES"], { one: function() { return "1 hamburguesa";}, other: function() { return number(d.NUM) + " hamburguesas";} }); },
  "tooltip_Convert translations to JavaScript files": function(d) { return "Convertir traducciones a ficheros JavaScript"; },
  "button_Copy key": function(d) { return ""; },
  button_Delete: function(d) { return "Borrar"; },
  button_Revert: function(d) { return "Cancelar cambios"; },
  "tooltip_Add column": function(d) { return "Añadir columna"; },
  "tooltip_Change language": function(d) { return "Cambiar idioma"; },
  "tooltip_Delete message (does NOT delete any translations)": function(d) { return "Borrar mensaje (NO borra ninguna traducción)"; },
  "tooltip_Parse source files to update the message list": function(d) { return "Analizar los ficheros de código para actualizar la lista de mensajes"; },
  "tooltip_Remove column (does NOT delete any translations)": function(d) { return "Quitar columna (NO borra ninguna traducción)"; },
  "msgDetailsView_No message selected": function(d) { return "Ningún mensaje seleccionado"; },
  "msgDetailsView_Used since": function(d) { return "En uso desde"; },
  button_Cancel: function(d) { return "Cancelar"; },
  "settingsForm_Languages (BCP47 codes):": function(d) { return "Idiomas (códigos BCP47):"; },
  "settingsForm_Mady language:": function(d) { return "Idioma de Mady:"; },
  "settingsForm_Minify output JavaScript": function(d) { return "Minificar el JavaScript de salida"; },
  "settingsForm_Source extensions:": function(d) { return "Extensiones de fichero a buscar:"; },
  "settingsForm_Source paths:": function(d) { return "Carpetas a buscar:"; },
  "tooltip_Total messages": function(d) { return "Total mensajes"; },
  "tooltip_Used messages": function(d) { return "Mensajes en uso"; },
  tooltip_Translations: function(d) { return "Traducciones"; },
  "tooltip_Copy message": function(d) { return "Copiar mensaje"; },
  "tooltip_Delete translation": function(d) { return "Borrar traducción"; },
  "translationHelp_Click outside or TAB to save. ESC to undo.": function(d) { return "Haz clic fuera o pulsa TAB para guardar. Pulsa ESC para deshacer."; },
  columnTitle_Messages: function(d) { return "Mensajes"; },
  button_Save: function(d) { return "Guardar"; },
  msgDetailsView_until: function(d) { return "hasta"; },
  "hint_Add language column": function(d) { return "Añadir columna de idioma"; },
  "hint_Configure Mady": function(d) { return "Configurar Mady"; },
  "hint_Enjoy translating!": function(d) { return "¡Disfruta traduciendo!"; },
  tooltip_Settings: function(d) { return "Ajustes"; },
  "validation_the number of left and right brackets does not match": function(d) { return "el número de llaves abiertas y cerradas no coincide"; },
  "validation_MessageFormat syntax error": function(d) { return "Error de sintaxis MessageFormat"; },
  "hint_Got it!": function(d) { return "¡Entendido!"; },
  msgDetailsView_Details: function(d) { return "Detalles"; },
  "error_Changes could not be saved": function(d) { return "No se pudieron guardar los cambios"; },
  "error_Configuration could not be saved": function(d) { return "No se pudo guardar la configuración"; },
  "error_Is the server running?": function(d) { return "¿El servidor está funcionando?"; },
  "settingsForm_Message translation functions to look for:": function(d) { return "Funciones de traducción de mensajes a buscar:"; }
}
};
module.exports = anonymous();
/* eslint-enable */
