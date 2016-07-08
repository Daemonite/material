/*!
 * activate waves for material
 * requires waves.js
 */
if ($('.waves-attach').length && (typeof Waves !== 'undefined')) {
  Waves.attach('.waves-attach');
  Waves.init({
  	duration: 300
  });
};
