'use strict';

var postcss = require('postcss');
var assert = require('assert');

var Plugin = require('../../lib/');

function test(selector, result) {
    assert.strictEqual(
        postcss([ Plugin ]).process(selector + '{}').css,
        result + '{}'
    );
}

describe('plugin', function() {
    describe('block', function() {
        it('simple', function() {
            test(
                ':block(block)',
                '.block'
            );
        });

        it('multiple blocks', function() {
            test(
                ':block(block1) :block(block2)',
                '.block1 .block2'
            );
        });
    });

    describe('elem', function() {
        it('simple', function() {
            test(
                ':block(block):elem(elem)',
                '.block__elem'
            );
        });

        it('multiple blocks elems', function() {
            test(
                ':block(block1):elem(elem1) :block(block2):elem(elem2)',
                '.block1__elem1 .block2__elem2'
            );
        });
    });

    describe('mod', function() {
        describe('block', function() {
            it('block short mod', function() {
                test(
                    ':block(block):mod(mod)',
                    '.block_mod'
                );
            });

            it('multiple blocks shorts mods', function() {
                test(
                    ':block(block1):mod(mod1) :block(block2):mod(mod2)',
                    '.block1_mod1 .block2_mod2'
                );
            });

            it('block mod', function() {
                test(
                    ':block(block):mod(mod val)',
                    '.block_mod_val'
                );
            });

            it('multiple blocks mods', function() {
                test(
                    ':block(block1):mod(mod1 val1) :block(block2):mod(mod2 val2)',
                    '.block1_mod1_val1 .block2_mod2_val2'
                );
            });
        });

        describe('elem', function() {
            it('elem short mod', function() {
                test(
                    ':block(block):elem(elem):mod(mod)',
                    '.block__elem_mod'
                );
            });

            it('multiple elems short mods', function() {
                test(
                    ':block(block1):elem(elem1):mod(mod1) :block(block2):elem(elem2):mod(mod2)',
                    '.block1__elem1_mod1 .block2__elem2_mod2'
                );
            });

            it('elem mod', function() {
                test(
                    ':block(block):elem(elem):mod(mod val)',
                    '.block__elem_mod_val'
                );
            });

            it('multiple elems mods', function() {
                test(
                    ':block(block1):elem(elem1):mod(mod1 val1) :block(block2):elem(elem2):mod(mod2 val2)',
                    '.block1__elem1_mod1_val1 .block2__elem2_mod2_val2'
                );
            });
        });
    });
});
