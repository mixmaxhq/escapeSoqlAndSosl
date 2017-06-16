const assert = require('assert');
const {escapeSOQL, escapeSOSL} = require('.');

assert.equal(escapeSOQL("love's gonna get you killed?"), "love\\'s gonna get you killed?");
assert.equal(escapeSOSL("but pride's gonna-be-the-death of me!"), "but pride\\'s gonna\\-be\\-the\\-death of me\\!");
assert.equal(escapeSOQL('\\you\\and\\me'), '\\\\you\\\\and\\\\me')
