import postcss from 'postcss';

const modDelim = process.env.REBEM_MOD_DELIM || '_';
const elemDelim = process.env.REBEM_ELEM_DELIM || '__';

export default postcss.plugin('rebem-css', () => (css) => {
    css.walkRules((rule) => {
        rule.selector = rule.selector
            // :block(block) → .block
            .replace(/:block\(([\w-]+)\)/g, '.$1')
            // :elem(elem) → __elem
            .replace(/:elem\(([\w-]+)\)/g, elemDelim + '$1')
            // :mod(mod) → _mod
            // :mod(mod val) → _mod_val
            .replace(/:mod\(([\w-]+)\s?([\w-]+)?\)/g, (match, mod, val) => {
                if (val) {
                    return modDelim + mod + modDelim + val;
                }

                return modDelim + mod;
            });
    });
});
