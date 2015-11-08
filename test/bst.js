const test = require('tape');
const BST = require('../bst');

test('flowright', function (t) {
  'use strict';

  t.plan(12);

  var bst = new BST();
  bst.push(3);
  bst.push(2);
  bst.push(4);
  bst.push(1);
  bst.push(5);
  bst.push(2);

  t.equal(bst.root.value, 3);
  t.equal(bst.root.left.value, 2);
  t.equal(bst.root.left.left.value, 1);
  t.equal(bst.root.left.right.value, 2);
  t.equal(bst.root.right.value, 3);
  t.equal(bst.root.right.right.value, 4);

  bst.invert(bst.root);

  t.equal(bst.root.value, 3);
  t.equal(bst.root.right.value, 2);
  t.equal(bst.root.right.right.value, 1);
  t.equal(bst.root.right.left.value, 2);
  t.equal(bst.root.left.value, 3);
  t.equal(bst.root.left.left.value, 4);
});
