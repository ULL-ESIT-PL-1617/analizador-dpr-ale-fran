// Generated by CoffeeScript 1.12.4
(function() {
  var assert;

  assert = chai.assert;

  suite('Comma Separated Values', function() {
    setup(function() {
      var converted, original;
      if (typeof __html__ !== 'undefined') {
        document.body.innerHTML = __html__['https://analizadordpr.herokuapp.com/test'];
        original = document.getElementById('original');
        converted = document.getElementById('converted');
      }
    });
    test('NUMBER', function() {
      original.value = '4';
      $('button').trigger('click');
      assert.match(OUTPUT.innerHTML, /"type":\s*"NUM"(.|\n)*"value":\s*4/i);
    });
  });

}).call(this);