(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var sillystring = require('./lib/sillystring')
//  , formulae = require('./lib/formulae')
;

console.log(sillystring('Browserify is fun!'));

// console.log(formulae.makeBig(5, 10));

},{"./lib/sillystring":2}],2:[function(require,module,exports){
module.exports = function sillystring(input) {
  return input.toUpperCase() + '!!!';
};

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYmFjb25zdGFydmF0aW9uL0RvY3VtZW50cy9pc29qYXZhc2NyaXB0L2lzb21vcnBoaWMtZXhhbXBsZXMvZXhhbXBsZXMvMDJfZ3J1bnRfc2VydmVyL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYmFjb25zdGFydmF0aW9uL0RvY3VtZW50cy9pc29qYXZhc2NyaXB0L2lzb21vcnBoaWMtZXhhbXBsZXMvZXhhbXBsZXMvMDJfZ3J1bnRfc2VydmVyL2NsaWVudC9pbmRleC5qcyIsIi9Vc2Vycy9iYWNvbnN0YXJ2YXRpb24vRG9jdW1lbnRzL2lzb2phdmFzY3JpcHQvaXNvbW9ycGhpYy1leGFtcGxlcy9leGFtcGxlcy8wMl9ncnVudF9zZXJ2ZXIvY2xpZW50L2xpYi9zaWxseXN0cmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBzaWxseXN0cmluZyA9IHJlcXVpcmUoJy4vbGliL3NpbGx5c3RyaW5nJylcbi8vICAsIGZvcm11bGFlID0gcmVxdWlyZSgnLi9saWIvZm9ybXVsYWUnKVxuO1xuXG5jb25zb2xlLmxvZyhzaWxseXN0cmluZygnQnJvd3NlcmlmeSBpcyBmdW4hJykpO1xuXG4vLyBjb25zb2xlLmxvZyhmb3JtdWxhZS5tYWtlQmlnKDUsIDEwKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNpbGx5c3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC50b1VwcGVyQ2FzZSgpICsgJyEhISc7XG59O1xuIl19
