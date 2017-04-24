(function() {
  var assert;

  assert = chai.assert;

  suite('parser', function() {
    setup(function() {
    });
    test('Operations', () => {
      var result = parse('a = 3+2');
      var tree = {
                  "type": "=",
                  "left": {
                    "type": "ID",
                    "value": "a"
                  },
                  "right": {
                    "type": "+",
                    "left": {
                      "type": "NUM",
                      "value": 3
                    },
                    "right": {
                      "type": "NUM",
                      "value": 2
                    }
                  }
                }
      assert.deepEqual(result, tree);
    });
    test('Conditions', () => {
      var result = parse('if a == 1 then b = 4');
      var tree =  {"type": "IF",
                   "left": { "type": "==",
                             "left": { "type": "ID",
                                       "value": "a"
                                    },
                            "right": { "type": "NUM",
                                       "value": 1
                                     }
                           },
                   "right": { "type": "=",
                              "left": { "type": "ID",
                                        "value": "b"
                                      },
                             "right": { "type": "NUM",
                                          "value": 4
                                      }
                            }
                 }
      assert.deepEqual(result, tree);
    });
    test('Loops', () => {
      var result = parse('while (x == 1) do {a = 2*3}');
      var tree =  {
                  "type": "WHILE",
                  "left": {
                    "type": "==",
                    "left": {
                      "type": "ID",
                      "value": "x"
                    },
                    "right": {
                      "type": "NUM",
                      "value": 1
                    }
                  },
                  "right": {
                    "type": "=",
                    "left": {
                      "type": "ID",
                      "value": "a"
                    },
                    "right": {
                      "type": "*",
                      "left": {
                        "type": "NUM",
                        "value": 2
                      },
                      "right": {
                        "type": "NUM",
                        "value": 3
                      }
                    }
                  }
                }
      assert.deepEqual(result, tree);
    });
    test('Bad expressions throw exceptions', () => {
      assert.throws(() => parse('3 + (4+2))'), /Syntax\s+Error/i);
    });
  });
}).call(this);
