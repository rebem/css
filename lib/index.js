var postcss = require('postcss');

var modDelim = '_';
var elemDelim = '__';

module.exports = postcss.plugin('bemcss', function() {
    return function(css) {
        css.walkRules(function(rule) {
            rule.selector = rule.selector
                .replace(/:block\(([\w-]+)\)/g, '.$1')
                .replace(/:elem\(([\w-]+)\)/g, elemDelim + '$1')
                .replace(/:mod\(([\w-]+)\s?([\w-]+)?\)/g, function(match, mod, val) {
                    if (val) {
                        return modDelim + mod + modDelim + val;
                    }

                    return modDelim + mod;
                });
        });
    };
});
