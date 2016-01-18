'use strict';

var postcss = require('postcss');

var modDelim = '_';
var elemDelim = '__';

module.exports = postcss.plugin('rebem-css', function() {
    return function(css) {
        css.walkRules(function(rule) {
            rule.selector = rule.selector
                // :block(block) → .block
                .replace(/:block\(([\w-]+)\)/g, '.$1')
                // :elem(elem) → __elem
                .replace(/:elem\(([\w-]+)\)/g, elemDelim + '$1')
                // :mod(mod) → _mod
                // :mod(mod val)  → _mod_val
                .replace(/:mod\(([\w-]+)\s?([\w-]+)?\)/g, function(match, mod, val) {
                    if (val) {
                        return modDelim + mod + modDelim + val;
                    }

                    return modDelim + mod;
                });
        });
    };
});
