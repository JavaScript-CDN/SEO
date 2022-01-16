var _0x6ecdde = _0x4546,
    normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
    default_text = _0x6ecdde(0x1f3);

function applyCharMap(_0x6abc77, _0x557bd3) {
    var _0x31f550 = _0x6ecdde;
    let _0x175dd6 = '';
    for (let _0x49955b of _0x557bd3['split']('')) {
        if (_0x6abc77[_0x49955b] !== undefined) _0x175dd6 += _0x6abc77[_0x49955b];
        else {
            if (_0x6abc77[_0x49955b['toLowerCase']()] !== undefined) _0x175dd6 += _0x6abc77[_0x49955b[_0x31f550(0x297)]()];
            else _0x175dd6 += _0x49955b;
        }
    }
    return _0x175dd6;
}

function invertedSquaresCharMapFun(_0x40422d) {
    return applyCharMap(invertedSquaresCharMap, _0x40422d);
}

function wideTextCharMapFun(_0x477384) {
    return applyCharMap(wideTextCharMap, _0x477384);
}

function squaresCharMapFun(_0x151f1b) {
    return applyCharMap(squaresCharMap, _0x151f1b);
}

function subscriptCharMapFun(_0xa19778) {
    return applyCharMap(subscriptCharMap, _0xa19778);
}

function bentTextCharMapFun(_0x3cb932) {
    return applyCharMap(bentTextCharMap, _0x3cb932);
}

function neonCharMapFun(_0x348f9c) {
    return applyCharMap(neonCharMap, _0x348f9c);
}

function futureAlienCharMapFun(_0x3de4d0) {
    return applyCharMap(futureAlienCharMap, _0x3de4d0);
}

function squiggleCharMapFun(_0x568148) {
    return applyCharMap(squiggleCharMap, _0x568148);
}

function squiggle2CharMapFun(_0x4f3942) {
    return applyCharMap(squiggle2CharMap, _0x4f3942);
}

function squiggle3CharMapFun(_0x455c0b) {
    return applyCharMap(squiggle3CharMap, _0x455c0b);
}

function squiggle4CharMapFun(_0xbc2122) {
    return applyCharMap(squiggle4CharMap, _0xbc2122);
}

function squiggle5CharMapFun(_0x122a67) {
    return applyCharMap(squiggle5CharMap, _0x122a67);
}

function squiggle6CharMapFun(_0xd878ab) {
    return applyCharMap(squiggle6CharMap, _0xd878ab);
}

function boldCharMapFun(_0x103783) {
    return applyCharMap(boldCharMap, _0x103783);
}

function oldEnglishCharMapFun(_0x28d755) {
    return applyCharMap(oldEnglishCharMap, _0x28d755);
}

function medievalCharMapFun(_0x566dbe) {
    return applyCharMap(medievalCharMap, _0x566dbe);
}

function cursiveCharMapFun(_0x61c696) {
    return applyCharMap(cursiveCharMap, _0x61c696);
}

function doubleStruckCharMapFun(_0x42997e) {
    return applyCharMap(doubleStruckCharMap, _0x42997e);
}

function italicCharMapFun(_0x3c83bf) {
    return applyCharMap(italicCharMap, _0x3c83bf);
}

function boldItalicCharMapFun(_0x1f327c) {
    return applyCharMap(boldItalicCharMap, _0x1f327c);
}

function monospaceCharMapFun(_0x4249dd) {
    return applyCharMap(monospaceCharMap, _0x4249dd);
}

function upperAnglesCharMapFun(_0x3bb9e7) {
    return applyCharMap(upperAnglesCharMap, _0x3bb9e7);
}

function greekCharMapFun(_0x3f3a5c) {
    return applyCharMap(greekCharMap, _0x3f3a5c);
}

function symbolsCharMapFun(_0x598b99) {
    return applyCharMap(symbolsCharMap, _0x598b99);
}

function currencyCharMapFun(_0x4b53b4) {
    return applyCharMap(currencyCharMap, _0x4b53b4);
}

function asianStyleCharMapFun(_0x410697) {
    return applyCharMap(asianStyleCharMap, _0x410697);
}

function asianStyle2CharMapFun(_0x403cfe) {
    return applyCharMap(asianStyle2CharMap, _0x403cfe);
}
var luni = new Lunicode();
luni[_0x6ecdde(0x16b)][_0x6ecdde(0x10f)][_0x6ecdde(0x272)][_0x6ecdde(0x17c)] = 0xa;

function crazyWithFlourishOrSymbols(_0x539cf3) {
    if (Math['random']() < 0.7) return wrapInSymbols(crazifyText(_0x539cf3), 0x2);
    else return wrapInFlourish(crazifyText(_0x539cf3), 0x2);
}

function illuminati(_0x208f26) {
    var _0x4c57ce = _0x6ecdde;
    return applyCharMap(doubleStruckCharMap, _0x4c57ce(0x292) + _0x208f26 + _0x4c57ce(0x69));
}

function textgun(_0x13bb79) {
    var _0x1a0aae = _0x6ecdde;
    return '▄︻デ' + _0x13bb79[_0x1a0aae(0x2f1)]('')[_0x1a0aae(0x280)](_0x1a0aae(0x49c)) + _0x1a0aae(0x1fe);
}

function minigame(_0x2ba093) {
    var _0x4fe95e = _0x6ecdde;
    return _0x4fe95e(0x50) + luni[_0x4fe95e(0x16b)][_0x4fe95e(0x411)][_0x4fe95e(0x315)](_0x2ba093) + _0x4fe95e(0x21a);
}

function pubggame1(_0x3118c2) {
    return applyCharMap(cursiveCharMap, '༒☬' + _0x3118c2 + '☬༒');
}

function pubggame2(_0x117852) {
    var _0x49c9ca = _0x6ecdde;
    return applyCharMap(boldCharMap, '۝༒༺' + _0x117852 + _0x49c9ca(0x465));
}

function pubggame3(_0x1708a1) {
    var _0x5acc1c = _0x6ecdde;
    return applyCharMap(invertedSquaresCharMap, _0x5acc1c(0x374) + _0x1708a1 + _0x5acc1c(0x459));
}

function bricks(_0x57bfc8) {
    var _0x8e100c = _0x6ecdde;
    return applyCharMap(monospaceCharMap, _0x8e100c(0x179) + _0x57bfc8 + _0x8e100c(0x123));
}

function bigrus(_0x1a3af6) {
    var _0x331b5a = _0x6ecdde;
    return applyCharMap(boldCharMap, _0x331b5a(0x4dd) + _0x1a3af6 + _0x331b5a(0x39b));
}

function strikeThrough(_0x381db8) {
    var _0xe7f6f = _0x6ecdde;
    return _0x381db8[_0xe7f6f(0x2f1)]('')[_0xe7f6f(0x280)]('̶') + '̶';
}

function tildeStrikeThrough(_0x227840) {
    var _0x8ae8ba = _0x6ecdde;
    return _0x227840[_0x8ae8ba(0x2f1)]('')[_0x8ae8ba(0x280)]('̴') + '̴';
}

function underline(_0x12e9b9) {
    var _0x2bead6 = _0x6ecdde;
    return _0x12e9b9[_0x2bead6(0x2f1)]('')['join']('̲') + '̲';
}

function doubleUnderline(_0x500ac8) {
    var _0x13a889 = _0x6ecdde;
    return _0x500ac8[_0x13a889(0x2f1)]('')[_0x13a889(0x280)]('̳') + '̳';
}

function slashThrough(_0x44d3d8) {
    var _0x29e218 = _0x6ecdde;
    return _0x44d3d8[_0x29e218(0x2f1)]('')['join']('̷') + '̷';
}

function stinky(_0x103698) {
    var _0x31bcad = _0x6ecdde;
    return _0x103698[_0x31bcad(0x2f1)]('')['join']('̾') + '̾';
}

function heartsBetween(_0x47a287) {
    var _0x20acb4 = _0x6ecdde;
    return _0x47a287[_0x20acb4(0x2f1)]('')['join']('♥');
}

function arrowBelow(_0x7e4c5b) {
    var _0x2a766a = _0x6ecdde;
    return _0x7e4c5b[_0x2a766a(0x2f1)]('')[_0x2a766a(0x280)]('͎') + '͎';
}

function crossAboveBelow(_0xb6edf3) {
    return _0xb6edf3['split']('')['join']('͓̽') + '͓̽';
}
const wingdingsCharMap = {
    0x0: _0x6ecdde(0x3de),
    0x1: _0x6ecdde(0x429),
    0x2: _0x6ecdde(0x191),
    0x3: _0x6ecdde(0xd1),
    0x4: _0x6ecdde(0x48f),
    0x5: _0x6ecdde(0x4ba),
    0x6: '⌛︎',
    0x7: _0x6ecdde(0x180),
    0x8: _0x6ecdde(0x251),
    0x9: _0x6ecdde(0x4a9),
    '!': '✏︎',
    '\x22': '✂︎',
    '#': '✁︎',
    '$': '👓︎',
    '%': '🕭︎',
    '&': '🕮︎',
    '\x27': '🕯︎',
    '(': _0x6ecdde(0x41),
    ')': '✆︎',
    '*': _0x6ecdde(0xdc),
    '+': _0x6ecdde(0xfa),
    ',': _0x6ecdde(0x2bb),
    '-': '📫︎',
    '.': _0x6ecdde(0x1ca),
    '/': '📭︎',
    ':': '🖳︎',
    ';': '🖴︎',
    '<': _0x6ecdde(0x3aa),
    '=': _0x6ecdde(0x407),
    '>': '✇︎',
    '?': '✍︎',
    'A': '✌︎',
    'B': _0x6ecdde(0x77),
    'C': '👍︎',
    'D': _0x6ecdde(0x34c),
    'E': '☜︎',
    'F': '☞︎',
    'G': '☝︎',
    'H': '☟︎',
    'I': '✋︎',
    'J': '☺︎',
    'K': _0x6ecdde(0x24a),
    'L': '☹︎',
    'M': _0x6ecdde(0x54),
    'N': '☠︎',
    'O': '⚐︎',
    'P': '🏱︎',
    'Q': '✈︎',
    'R': '☼︎',
    'S': _0x6ecdde(0x8b),
    'T': '❄︎',
    'U': _0x6ecdde(0x245),
    'V': '✞︎',
    'W': '🕈︎',
    'X': '✠︎',
    'Y': '✡︎',
    'Z': '☪︎',
    '[': '☯︎',
    '\x5c': 'ॐ︎',
    ']': '☸︎',
    '^': '♈︎',
    '_': '♉︎',
    '`': '♊︎',
    'a': '♋︎',
    'b': '♌︎',
    'c': '♍︎',
    'd': '♎︎',
    'e': '♏︎',
    'f': '♐︎',
    'g': '♑︎',
    'h': '♒︎',
    'i': '♓︎',
    'j': '🙰',
    'k': '🙵',
    'l': '●︎',
    'm': '❍︎',
    'n': '■︎',
    'o': '□︎',
    'p': '◻︎',
    'q': '❑︎',
    'r': '❒︎',
    's': '⬧︎',
    't': '⧫︎',
    'u': '◆︎',
    'v': '❖︎',
    'w': '⬥︎',
    'x': '⌧︎',
    'y': '⍓︎',
    'z': '⌘︎',
    '{': '❀︎',
    '|': '✿︎',
    '}': '❝︎',
    '~': '❞︎',
    '\x20': '▯︎',
    '€': '⓪︎',
    '\x20': '①︎',
    '‚': '②︎',
    'ƒ': '③︎',
    '„': '④︎',
    '…': '⑤︎',
    '†': '⑥︎',
    '‡': '⑦︎',
    'ˆ': '⑧︎',
    '‰': '⑨︎',
    'Š': '⑩︎',
    '‹': '⓿︎',
    'Œ': '❶︎',
    '\x20': '❷︎',
    'Ž': '❸︎',
    '\x20': '❹︎',
    '\x20': '❺︎',
    '‘': '❻︎',
    '’': '❼︎',
    '“': '❽︎',
    '”': '❾︎',
    '•': '❿︎',
    '–': '◻︎',
    '—': '◻︎',
    '˜': '◻︎',
    '™': '◻︎',
    'š': '◻︎',
    '›': '◻︎',
    'œ': '◻︎',
    '\x20': '◻︎',
    'ž': '·︎',
    'Ÿ': '•︎',
    '¡': '○︎',
    '¢': '⭕︎',
    '£': '◻︎',
    '¤': '◉︎',
    '¥': '◎︎',
    '¦': '◻︎',
    '§': '▪︎',
    '¨': '◻︎',
    '©': '◻︎',
    'ª': '✦︎',
    '«': '★︎',
    '¬': '✶︎',
    '®': '✹︎',
    '¯': '✵︎',
    '°': '◻︎',
    '±': '⌖︎',
    '²': '⟡︎',
    '³': '⌑︎',
    '´': '◻︎',
    'µ': '✪︎',
    '¶': '✰︎',
    '·': _0x6ecdde(0xe5),
    '¸': _0x6ecdde(0x513),
    '¹': _0x6ecdde(0xf1),
    'º': _0x6ecdde(0x4bb),
    '»': _0x6ecdde(0xf2),
    '¼': _0x6ecdde(0x455),
    '½': _0x6ecdde(0xb4),
    '¾': '🕗︎',
    '¿': _0x6ecdde(0x211),
    'À': _0x6ecdde(0xcd),
    'Á': _0x6ecdde(0x2e4),
    'Â': _0x6ecdde(0x26),
    'Ã': '◻︎',
    'Ä': '◻︎',
    'Å': '◻︎',
    'Æ': '◻︎',
    'Ç': '◻︎',
    'È': '◻︎',
    'É': '◻︎',
    'Ê': '◻︎',
    'Ë': '◻︎',
    'Ì': '◻︎',
    'Í': '◻︎',
    'Î': '◻︎',
    'Ï': '◻︎',
    'Ð': '◻︎',
    'Ñ': '◻︎',
    'Ò': '◻︎',
    'Ó': '◻︎',
    'Ô': '◻︎',
    'Õ': '⌫︎',
    'Ö': '⌦︎',
    '×': '◻︎',
    'Ø': '➢︎',
    'Ù': '◻︎',
    'Ú': '◻︎',
    'Û': '◻︎',
    'Ü': '➲︎',
    'Ý': '◻︎',
    'Þ': '◻︎',
    'ß': '◻︎',
    'à': '◻︎',
    'á': '◻︎',
    'â': '◻︎',
    'ã': '◻︎',
    'ä': '◻︎',
    'å': '◻︎',
    'æ': '◻︎',
    'ç': '◻︎',
    'è': '➔︎',
    'é': '◻︎',
    'ê': '◻︎',
    'ë': '◻︎',
    'ì': '◻︎',
    'í': '◻︎',
    'î': '◻︎',
    'ï': '⇦︎',
    'ð': '⇨︎',
    'ñ': '⇧︎',
    'ò': '⇩︎',
    'ó': '⬄︎',
    'ô': '⇳︎',
    'õ': '⬀︎',
    'ö': '⬁︎',
    '÷': '⬃︎',
    'ø': '⬂︎',
    'ù': '▭︎',
    'ú': '▫︎',
    'û': '✗︎',
    'ü': '✓︎',
    'ý': '☒︎',
    'þ': '☑︎',
    'ÿ': '◻︎'
};

function wingdings(_0xe08289) {
    var _0x83fd66 = _0x6ecdde;
    return _0xe08289[_0x83fd66(0x2f1)]('')[_0x83fd66(0x4df)](function(_0xb67760) {
        return wingdingsCharMap[_0xb67760] ? wingdingsCharMap[_0xb67760] : _0xb67760;
    })['join']('');
}
const vaporwaveCharMap = {
    '\x20': '\u3000',
    '`': '`',
    0x1: '１',
    0x2: '２',
    0x3: '３',
    0x4: '４',
    0x5: '５',
    0x6: '６',
    0x7: '７',
    0x8: '８',
    0x9: '９',
    0x0: '０',
    '-': '－',
    '=': '＝',
    '~': '~',
    '!': '！',
    '@': '＠',
    '#': '＃',
    '$': '＄',
    '%': '％',
    '^': '^',
    '&': '＆',
    '*': '＊',
    '(': '（',
    ')': '）',
    '_': '_',
    '+': '＋',
    'q': 'ｑ',
    'w': 'ｗ',
    'e': 'ｅ',
    'r': 'ｒ',
    't': 'ｔ',
    'y': 'ｙ',
    'u': 'ｕ',
    'i': 'ｉ',
    'o': 'ｏ',
    'p': 'ｐ',
    '[': '[',
    ']': ']',
    '\x5c': '\x5c',
    'Q': 'Ｑ',
    'W': 'Ｗ',
    'E': 'Ｅ',
    'R': 'Ｒ',
    'T': 'Ｔ',
    'Y': 'Ｙ',
    'U': 'Ｕ',
    'I': 'Ｉ',
    'O': 'Ｏ',
    'P': 'Ｐ',
    '{': '{',
    '}': '}',
    '|': '|',
    'a': 'ａ',
    's': 'ｓ',
    'd': 'ｄ',
    'f': 'ｆ',
    'g': 'ｇ',
    'h': 'ｈ',
    'j': 'ｊ',
    'k': 'ｋ',
    'l': 'ｌ',
    ';': '；',
    '\x27': '＇',
    'A': 'Ａ',
    'S': 'Ｓ',
    'D': 'Ｄ',
    'F': 'Ｆ',
    'G': 'Ｇ',
    'H': 'Ｈ',
    'J': 'Ｊ',
    'K': 'Ｋ',
    'L': 'Ｌ',
    ':': '：',
    '\x22': '\x22',
    'z': 'ｚ',
    'x': 'ｘ',
    'c': 'ｃ',
    'v': 'ｖ',
    'b': 'ｂ',
    'n': 'ｎ',
    'm': 'ｍ',
    ',': '，',
    '.': '．',
    '/': '／',
    'Z': 'Ｚ',
    'X': 'Ｘ',
    'C': 'Ｃ',
    'V': 'Ｖ',
    'B': 'Ｂ',
    'N': 'Ｎ',
    'M': 'Ｍ',
    '<': '<',
    '>': '>',
    '?': '？'
};

function _0x4546(_0x2a5711, _0x4546e0) {
    var _0x5625ee = _0x2a57();
    return _0x4546 = function(_0x1505da, _0x23b0ce) {
        _0x1505da = _0x1505da - 0x0;
        var _0x4fb3e6 = _0x5625ee[_0x1505da];
        return _0x4fb3e6;
    }, _0x4546(_0x2a5711, _0x4546e0);
}

function vaporwaveText(_0x34373a) {
    var _0x29cb2e = _0x6ecdde,
        _0x4dd121 = _0x34373a['split']('\x20')[_0x29cb2e(0x4d3)];
    _0x34373a = applyCharMap(vaporwaveCharMap, _0x34373a);
    var _0x3a126f = getAsianChars(Math[_0x29cb2e(0x369)](0x3, _0x4dd121));
    if (_0x4dd121 > 0x6) _0x3a126f = _0x3a126f['split']('')['map'](_0x3193b1 => _0x3193b1 + ['', ''][Math['round'](Math['random']() * 0.6)])[_0x29cb2e(0x280)]('');
    var _0x174700 = [];
    return _0x174700[_0x29cb2e(0x39a)](_0x34373a), _0x174700[_0x29cb2e(0x280)]();
}

function vaporwaveText1(_0x1e2f45) {
    var _0xd073 = _0x6ecdde,
        _0x3c296d = _0x1e2f45[_0xd073(0x2f1)]('\x20')[_0xd073(0x4d3)];
    _0x1e2f45 = applyCharMap(vaporwaveCharMap, _0x1e2f45);
    var _0x3ca774 = getAsianChars(Math[_0xd073(0x369)](0x3, _0x3c296d));
    if (_0x3c296d > 0x6) _0x3ca774 = _0x3ca774[_0xd073(0x2f1)]('')[_0xd073(0x4df)](_0x22da32 => _0x22da32 + ['', ''][Math[_0xd073(0x2fa)](Math['random']() * 0.6)])[_0xd073(0x280)]('');
    var _0x16c228 = [];
    return _0x16c228['push'](_0x1e2f45[_0xd073(0x2f4)](/　/g, '░')[_0xd073(0x2f4)](/ａｅ/, 'æ')[_0xd073(0x2f4)](/Ａ/g, 'Λ')[_0xd073(0x2f4)](/Ｅ/g, function() {
        var _0x17170a = _0xd073;
        return Math[_0x17170a(0x1c)]() > 0.5 ? 'Ξ' : 'Σ';
    })[_0xd073(0x2f4)](/Ｏ/g, '♢')), _0x16c228[_0xd073(0x280)]();
}

function vaporwaveText2(_0xb1ff9a) {
    var _0x4cbdbc = _0x6ecdde,
        _0x48bd6e = _0xb1ff9a[_0x4cbdbc(0x2f1)]('\x20')[_0x4cbdbc(0x4d3)];
    _0xb1ff9a = applyCharMap(vaporwaveCharMap, _0xb1ff9a);
    var _0x13ffd7 = getAsianChars(Math[_0x4cbdbc(0x369)](0x3, _0x48bd6e));
    if (_0x48bd6e > 0x6) _0x13ffd7 = _0x13ffd7[_0x4cbdbc(0x2f1)]('')[_0x4cbdbc(0x4df)](_0x476e79 => _0x476e79 + ['', ''][Math[_0x4cbdbc(0x2fa)](Math[_0x4cbdbc(0x1c)]() * 0.6)])[_0x4cbdbc(0x280)]('');
    var _0x315d29 = [];
    return _0x315d29[_0x4cbdbc(0x39a)]('【\ufeff' + _0xb1ff9a + '】'), _0x315d29['join']();
}

function getAsianChars(_0xe711f9) {
    var _0x1c7c47 = _0x6ecdde;
    if (!_0xe711f9) _0xe711f9 = 0x1;
    var _0x4e161c = _0x1c7c47(0x2a8),
        _0x5bcca3 = '';
    for (var _0x5afb74 = 0x0; _0x5afb74 < _0xe711f9; _0x5afb74++) {
        _0x5bcca3 += _0x4e161c[Math[_0x1c7c47(0xab)](Math[_0x1c7c47(0x1c)]() * _0x4e161c[_0x1c7c47(0x4d3)])];
    }
    return _0x5bcca3;
}
const flourishArray = [_0x6ecdde(0x2c7), '◥꧁ད\x20[[text]]\x20ཌ꧂◤', _0x6ecdde(0x2fe), '⚔️\x20[[text]]\x20⚔️', _0x6ecdde(0x13e), _0x6ecdde(0x130), '◥꧁ད\x20ॐ卐[[text]]\x20卐ॐ\x20ཌ꧂◤', _0x6ecdde(0x3c5), _0x6ecdde(0x32b), _0x6ecdde(0x4eb), _0x6ecdde(0x25a), _0x6ecdde(0x2), _0x6ecdde(0x47b), '┗(^o^\x20)┓三\x20[[text]]\x20三\x20┗(^o^\x20)┓', _0x6ecdde(0x1bc), _0x6ecdde(0x4f2), _0x6ecdde(0x2d8), _0x6ecdde(0x3e5), _0x6ecdde(0x173), _0x6ecdde(0x202), _0x6ecdde(0x1d6), _0x6ecdde(0x44f), _0x6ecdde(0x15d), _0x6ecdde(0x6f), _0x6ecdde(0x27d), _0x6ecdde(0x207), '╰☆☆\x20[[text]]\x20☆☆╮', '.•°¤*(¯`★´¯)*¤°\x20[[text]]\x20°¤*(¯´★`¯)*¤°•.', _0x6ecdde(0x152), _0x6ecdde(0x279), _0x6ecdde(0x497), _0x6ecdde(0x518), _0x6ecdde(0x1b), _0x6ecdde(0xd4), _0x6ecdde(0x470), _0x6ecdde(0x209), '(¯`*•.¸,¤°´✿.｡.:*\x20[[text]]\x20*.:｡.✿`°¤,¸.•*´¯)', _0x6ecdde(0x198), _0x6ecdde(0x20d), _0x6ecdde(0x279), _0x6ecdde(0x152), _0x6ecdde(0x11), '•´¯`•»\x20[[text]]\x20«•´¯`•', _0x6ecdde(0x85), '¤¸¸.•´¯`•¸¸.•..>>\x20[[text]]\x20<<..•.¸¸•´¯`•.¸¸¤', _0x6ecdde(0x225), _0x6ecdde(0x17e), _0x6ecdde(0x6c), _0x6ecdde(0x425), _0x6ecdde(0x21b), _0x6ecdde(0x3c7), '➶➶➶➶➶\x20[[text]]\x20➷➷➷➷➷', _0x6ecdde(0x2c9), '·.¸¸.·♩♪♫\x20[[text]]\x20♫♪♩·.¸¸.·', _0x6ecdde(0x4d), ']|I{•------»\x20[[text]]\x20«------•}I|[', _0x6ecdde(0x12f), _0x6ecdde(0x28), _0x6ecdde(0xd4), '-漫~*\x27¨¯¨\x27*·舞~\x20[[text]]\x20~舞*\x27¨¯¨\x27*·~漫-', _0x6ecdde(0x3a0), '.•°¤*(¯`★´¯)*¤°\x20[[text]]\x20°¤*(¯´★`¯)*¤°•.', '••.•´¯`•.••\x20[[text]]\x20••.•´¯`•.••', '¤¸¸.•´¯`•¸¸.•..>>\x20[[text]]\x20<<..•.¸¸•´¯`•.¸¸¤', _0x6ecdde(0x313), '꧁𓊈𒆜\x20[[text]]\x20𒆜𓊉꧂', _0x6ecdde(0x42c), _0x6ecdde(0x388), _0x6ecdde(0x3a), _0x6ecdde(0x140), _0x6ecdde(0x500), _0x6ecdde(0x1de), '¤\x20(¯´☆✭.¸_)¤\x20[[text]]\x20¤(_¸.✭☆´¯)\x20¤', '(¯`·.¸¸.·´¯`·.¸¸.->\x20[[text]]\x20<-.¸¸.·´¯`·.¸¸.·´¯)', _0x6ecdde(0x3db), _0x6ecdde(0x34e), _0x6ecdde(0x204), '«-(¯`v´¯)-«\x20[[text]]\x20»-(¯`v´¯)-»'];

function wrapInFlourish(_0xfaea90) {
    var _0x1406d6 = _0x6ecdde;
    return flourishArray[Math[_0x1406d6(0xab)](Math['random']() * flourishArray[_0x1406d6(0x4d3)])][_0x1406d6(0x2f4)]('[[text]]', _0xfaea90);
}

function Flourishlist(_0x78bfaf, _0x1f2432) {
    var _0xbb8126 = _0x6ecdde;
    return flourishArray[_0x78bfaf][_0xbb8126(0x2f4)](_0xbb8126(0x36d), _0x1f2432);
}

function wrapInSymbols(_0xb4f920, _0x10b192) {
    return randomSymbols(_0x10b192) + '\x20\x20' + _0xb4f920 + '\x20\x20' + randomSymbols(_0x10b192);
}

function firework(_0x51b38a) {
    return _0x51b38a['split']('')['join']('҉') + '҉';
}

function weirdBox(_0x7427a) {
    var _0x2d3d15 = _0x6ecdde;
    return _0x7427a['replace'](/([^\s])/g, _0x2d3d15(0x102));
}

function curlybrackets(_0x14dc2f) {
    var _0x516268 = _0x6ecdde;
    return _0x14dc2f['replace'](/([^\s])/g, _0x516268(0x128));
}

function singlewavyJoiner(_0xe6f604) {
    var _0x2e82ba = _0x6ecdde;
    return '〜' + _0xe6f604[_0x2e82ba(0x2f1)]('')[_0x2e82ba(0x280)]('∿') + '〜';
}

function thickBox(_0x108eb2) {
    var _0x36dd38 = _0x6ecdde;
    return _0x108eb2[_0x36dd38(0x2f4)](/([^\s])/g, '⟦$1⟧');
}

function zigzagJoiner(_0x3d9359) {
    var _0x51c495 = _0x6ecdde;
    return _0x3d9359[_0x51c495(0x2f4)](/([^\s])/g, _0x51c495(0x27));
}

function hashJoiner(_0x457aa4) {
    var _0x38a3c0 = _0x6ecdde;
    return _0x457aa4[_0x38a3c0(0x2f1)]('')['join']('⨳');
}

function starJoiner(_0x214baf) {
    var _0x2316f5 = _0x6ecdde;
    return _0x214baf[_0x2316f5(0x2f4)](/([^\s])/g, _0x2316f5(0x27));
}

function connectedJoiner(_0x228b7d) {
    var _0x5ac1ac = _0x6ecdde;
    return _0x228b7d[_0x5ac1ac(0x2f1)]('')[_0x5ac1ac(0x280)]('⊶');
}

function arrowjoin(_0x366894) {
    var _0x46eb30 = _0x6ecdde;
    return _0x366894[_0x46eb30(0x2f4)](/([^\s])/g, _0x46eb30(0x14c));
}

function dotBoxtwo(_0x30bfe9) {
    var _0x10ecf8 = _0x6ecdde;
    return _0x30bfe9[_0x10ecf8(0x2f1)]('')[_0x10ecf8(0x280)](_0x10ecf8(0x36a));
}

function dotBox(_0x5361f9) {
    var _0xa7e950 = _0x6ecdde;
    return _0x5361f9['replace'](/([^\s])/g, _0xa7e950(0x3fa));
}

function diametricBox(_0x45883b) {
    var _0x1377c5 = _0x6ecdde;
    return _0x45883b[_0x1377c5(0x2f4)](/([^\s])/g, _0x1377c5(0x4d6));
}

function arrowBox(_0x47e901) {
    var _0x30cf14 = _0x6ecdde;
    return _0x47e901['replace'](/([^\s])/g, _0x30cf14(0x2b2));
}

function littleSparkles(_0x4e2f40) {
    var _0x26c8a3 = _0x6ecdde;
    return _0x26c8a3(0x314) + _0x4e2f40 + _0x26c8a3(0x1fa);
}

function kirbyHug(_0x52106e) {
    var _0x2097c3 = _0x6ecdde;
    return _0x2097c3(0x3f2) + _0x52106e + '\x20♥';
}

function dottyJoiner(_0x54f4a0) {
    var _0xcfdbc6 = _0x6ecdde;
    return '░' + _0x54f4a0[_0xcfdbc6(0x2f1)]('')[_0xcfdbc6(0x280)]('░') + '░';
}

function wavyJoiner(_0x228ee0) {
    var _0x492b7d = _0x6ecdde;
    return '≋' + _0x228ee0[_0x492b7d(0x2f1)]('')[_0x492b7d(0x280)]('≋') + '≋';
}

function diametricAngleFrame(_0x8b97fb) {
    var _0x36284a = _0x6ecdde;
    return _0x8b97fb[_0x36284a(0x2f4)](/([^\s])/g, _0x36284a(0x3e7));
}

function thickBlockFramed(_0x470c50) {
    var _0x3dad24 = _0x6ecdde;
    return _0x470c50[_0x3dad24(0x2f4)](/([^\s])/g, _0x3dad24(0x2aa));
}

function star0(_0x5cd1b4) {
    return applyCharMap(italicCharMap, 'ミ★\x20' + _0x5cd1b4 + '★彡');
}

function star1(_0x3b1cf6) {
    var _0x1ab9b7 = _0x6ecdde;
    return applyCharMap(monospaceCharMap, '꧁•⊹٭' + _0x3b1cf6 + _0x1ab9b7(0x181));
}

function star2(_0x2eb578) {
    var _0x179fd4 = _0x6ecdde;
    return applyCharMap(currencyCharMap, _0x179fd4(0x505) + _0x2eb578 + _0x179fd4(0xce));
}

function star3(_0x5a6887) {
    return applyCharMap(monospaceCharMap, '╰•★★\x20' + _0x5a6887 + '★★•╯');
}

function star4(_0x5c4324) {
    var _0x24ffdd = _0x6ecdde;
    return applyCharMap(squaresCharMap, '`✵•.¸,✵°✵.｡.✰\x20\x20' + _0x5c4324 + _0x24ffdd(0x4b));
}

function star5(_0x43a201) {
    var _0x39941f = _0x6ecdde;
    return applyCharMap(doubleStruckCharMap, _0x39941f(0x107) + _0x43a201 + '★·.·´¯`·.·★.·');
}

function star6(_0x53c254) {
    var _0x5e5e5c = _0x6ecdde;
    return applyCharMap(invertedSquaresCharMap, _0x5e5e5c(0x249) + _0x53c254 + '¸„٭⊹✡•~⍣°”ˆ˜¨');
}

function star7(_0x3ec06b) {
    var _0x39f0ac = _0x6ecdde;
    return applyCharMap(asianStyleCharMap, _0x39f0ac(0x442) + _0x3ec06b + _0x39f0ac(0x3e8));
}

function star8(_0x4eab88) {
    var _0x343717 = _0x6ecdde;
    return applyCharMap(asianStyle2CharMap, _0x343717(0x4e4) + _0x4eab88 + _0x343717(0x187));
}

function star9(_0x3032e6) {
    var _0x530616 = _0x6ecdde;
    return applyCharMap(neonCharMap, '٭⊹¤.•⨳•.*☆✬\x20' + _0x3032e6 + _0x530616(0x28f));
}

function star10(_0x160221) {
    var _0x43d8fd = _0x6ecdde;
    return applyCharMap(squiggle6CharMap, _0x43d8fd(0x253) + _0x160221 + _0x43d8fd(0x28f));
}

function heart0(_0x450518) {
    var _0x3d5e20 = _0x6ecdde;
    return applyCharMap(squiggle5CharMap, _0x3d5e20(0x199) + _0x450518 + _0x3d5e20(0x2f2));
}

function heart1(_0x261097) {
    var _0x405859 = _0x6ecdde;
    return applyCharMap(futureAlienCharMap, '෴❤️෴\x20\x20' + _0x261097 + _0x405859(0x264));
}

function heart2(_0x2e0be7) {
    var _0x5028ea = _0x6ecdde;
    return applyCharMap(boldCharMap, _0x5028ea(0x122) + _0x2e0be7 + '**•.¸♥¸.•*´💖');
}

function heart3(_0x2f6e0a) {
    var _0x4bb670 = _0x6ecdde;
    return applyCharMap(firework, _0x4bb670(0x502) + _0x2f6e0a + _0x4bb670(0x267));
}

function heart4(_0x1ead9d) {
    var _0x10ad6a = _0x6ecdde;
    return applyCharMap(symbolsCharMap, _0x10ad6a(0x3ef) + _0x1ead9d + _0x10ad6a(0x164));
}

function heart5(_0xcc2a36) {
    var _0x14c38f = _0x6ecdde;
    return applyCharMap(bentTextCharMap, '🌸ξξ(∵❤◡❤∵)ξξ·¯·♩¸\x20' + _0xcc2a36 + _0x14c38f(0x4c8));
}

function heart6(_0x4f8387) {
    var _0x15c357 = _0x6ecdde;
    return applyCharMap(upperAnglesCharMap, _0x15c357(0x22e) + _0x4f8387 + '♥╣[-_-]╠♥');
}

function heart7(_0x311b2b) {
    var _0x581cea = _0x6ecdde;
    return applyCharMap(boldCharMap, _0x581cea(0x4af) + _0x311b2b + '♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡');
}

function emoticon0(_0x501d20) {
    var _0x2ffe96 = _0x6ecdde;
    return applyCharMap(oldEnglishCharMap, _0x2ffe96(0x2df) + _0x501d20 + _0x2ffe96(0x217));
}

function emoticon1(_0x1eb342) {
    var _0x5f827c = _0x6ecdde;
    return applyCharMap(squiggle6CharMap, _0x5f827c(0x34) + _0x1eb342 + ')');
}

function emoticon2(_0x11ce8b) {
    var _0x3846f2 = _0x6ecdde;
    return applyCharMap(boldCharMap, _0x3846f2(0x318) + _0x11ce8b + '');
}

function emoticon3(_0x35df59) {
    var _0x5da9c1 = _0x6ecdde;
    return applyCharMap(squiggle5CharMap, _0x5da9c1(0x3c) + _0x35df59 + '');
}

function emoticon4(_0x3d6b67) {
    var _0x4dde71 = _0x6ecdde;
    return applyCharMap(cursiveCharMap, _0x4dde71(0x194) + _0x3d6b67 + '\x20٩(˘◡˘)۶');
}

function emoticon5(_0xbeda3f) {
    var _0x20dd46 = _0x6ecdde;
    return applyCharMap(squiggle3CharMap, _0x20dd46(0x1ea) + _0xbeda3f + '(✿ヘᴥヘ)');
}

function emoticon6(_0x434459) {
    var _0x58facd = _0x6ecdde;
    return applyCharMap(wideTextCharMap, _0x58facd(0x212) + _0x434459 + _0x58facd(0x113));
}

function emoticon7(_0x80509d) {
    var _0x401b53 = _0x6ecdde;
    return applyCharMap(squiggle2CharMap, _0x401b53(0x3ba) + _0x80509d + _0x401b53(0x13c));
}

function thankyou0(_0x585244) {
    var _0x9af3b2 = _0x6ecdde;
    return applyCharMap(doubleStruckCharMap, '(･ω･)♪' + _0x585244 + _0x9af3b2(0xaa));
}

function thankyou1(_0x4888ec) {
    var _0x57b459 = _0x6ecdde;
    return applyCharMap(cursiveCharMap, _0x57b459(0xc5) + _0x4888ec + _0x57b459(0xc5));
}

function thankyou2(_0x3b3d46) {
    var _0x3799d3 = _0x6ecdde;
    return applyCharMap(doubleStruckCharMap, _0x3799d3(0x4cd) + _0x3b3d46 + '(ω・*ゝ)');
}

function thankyou3(_0x11726b) {
    return applyCharMap(upperAnglesCharMap, '<(_\x20_*)>' + _0x11726b + '');
}

function thankyou4(_0x42ebcd) {
    return applyCharMap(squiggle2CharMap, '★⌒(●ゝω・)' + _0x42ebcd + '');
}

function thankyou5(_0x2dcf52) {
    var _0xc578c5 = _0x6ecdde;
    return applyCharMap(asianStyleCharMap, _0xc578c5(0xfb) + _0x2dcf52 + '♪(\x20^-^)/★,｡･:･ﾟ');
}

function thankyou6(_0x41f900) {
    var _0x3676d2 = _0x6ecdde;
    return applyCharMap(medievalCharMap, _0x3676d2(0x4da) + _0x41f900 + _0x3676d2(0x417));
}

function thankyou7(_0x5ad991) {
    var _0xae379b = _0x6ecdde;
    return applyCharMap(neonCharMap, _0xae379b(0x4cd) + _0x5ad991 + '(*ゝω・)');
}

function sad0(_0x18d520) {
    var _0x5b7798 = _0x6ecdde;
    return applyCharMap(squiggle5CharMap, _0x5b7798(0x498) + _0x18d520 + _0x5b7798(0x3d9));
}

function sad1(_0x170a79) {
    var _0x148f3d = _0x6ecdde;
    return applyCharMap(monospaceCharMap, _0x148f3d(0x515) + _0x170a79 + _0x148f3d(0x4f1));
}

function sad2(_0x81698e) {
    var _0x587735 = _0x6ecdde;
    return applyCharMap(squiggleCharMap, '(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)' + _0x81698e + _0x587735(0x401));
}

function sad3(_0x55a2b8) {
    var _0x51e2ee = _0x6ecdde;
    return applyCharMap(italicCharMap, _0x51e2ee(0x39e) + _0x55a2b8 + _0x51e2ee(0x2ea));
}

function sad4(_0x4716a4) {
    var _0x28b2a6 = _0x6ecdde;
    return applyCharMap(squiggle3CharMap, '(ಥ\x20͜ʖಥ)\x20' + _0x4716a4 + _0x28b2a6(0x3a1));
}

function sad5(_0x256125) {
    var _0x33ec24 = _0x6ecdde;
    return applyCharMap(bentTextCharMap, _0x33ec24(0x276) + _0x256125 + _0x33ec24(0x42e));
}

function sad6(_0x2fb3e3) {
    var _0x2d12b9 = _0x6ecdde;
    return applyCharMap(medievalCharMap, _0x2d12b9(0x347) + _0x2fb3e3 + _0x2d12b9(0x141));
}

function sad7(_0x11a9d4) {
    var _0x1b2f84 = _0x6ecdde;
    return applyCharMap(symbolsCharMap, _0x1b2f84(0x3b8) + _0x11a9d4 + '♦👺\x20（（●´∧｀●））');
}

function cuteText1(_0x4fd83d) {
    return applyCharMap(italicCharMap, '💘🎀' + _0x4fd83d + '💘🎀');
}

function cuteText2(_0x50bac7) {
    var _0x44fb47 = _0x6ecdde;
    return applyCharMap(squiggle5CharMap, _0x44fb47(0x420) + _0x50bac7 + _0x44fb47(0x353));
}

function cuteText3(_0x8d5a66) {
    var _0x396cd3 = _0x6ecdde;
    return applyCharMap(oldEnglishCharMap, _0x396cd3(0x2db) + _0x8d5a66 + '\x20🎀\x20🍒');
}

function cuteText4(_0x1d501c) {
    var _0x461e69 = _0x6ecdde;
    return applyCharMap(squiggleCharMap, '👻ൠ' + _0x1d501c + _0x461e69(0x8d));
}

function cuteText5(_0x1cb5b2) {
    var _0xd2ca98 = _0x6ecdde;
    return applyCharMap(cursiveCharMap, _0xd2ca98(0x49) + _0x1cb5b2 + '💜💘');
}

function fullCrazy1(_0x84660d) {
    var _0x18fa70 = _0x6ecdde;
    return applyCharMap(boldCharMap, _0x18fa70(0x447) + _0x84660d + _0x18fa70(0x410));
}

function fullCrazy2(_0x2e6942) {
    var _0x4dc301 = _0x6ecdde;
    return applyCharMap(squiggleCharMap, _0x4dc301(0x9e) + _0x2e6942 + _0x4dc301(0x170));
}

function fullCrazy3(_0x2dcf3a) {
    var _0x17da6d = _0x6ecdde;
    return applyCharMap(doubleStruckCharMap, _0x17da6d(0x286) + _0x2dcf3a + '\x20]÷••)—\x20');
}

function fullCrazy4(_0x3c8d0f) {
    var _0x37c242 = _0x6ecdde;
    return applyCharMap(currencyCharMap, '.o0×X×0o.\x20' + _0x3c8d0f + _0x37c242(0xd8));
}

function fullCrazy5(_0x22ee43) {
    var _0x46e79a = _0x6ecdde;
    return applyCharMap(wideTextCharMap, _0x46e79a(0x8c) + _0x22ee43 + _0x46e79a(0x28a));
}

function crazyWithFlourishOrSymbols3(_0x1befbf) {
    var _0x43f67f = _0x6ecdde;
    return applyCharMap(italicCharMap, _0x43f67f(0x487) + _0x1befbf + _0x43f67f(0x274));
}

function crazyWithFlourishOrSymbols4(_0x19390e) {
    var _0x870350 = _0x6ecdde;
    return applyCharMap(asianStyle2CharMap, '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯\x20\x20' + _0x19390e + _0x870350(0x214));
}

function crazyWithFlourishOrSymbols1(_0x5ee9b7) {
    var _0x52a6c7 = _0x6ecdde;
    return applyCharMap(italicCharMap, _0x52a6c7(0x458) + _0x5ee9b7 + '\x20⫸');
}

function crazyWithFlourishOrSymbols2(_0x30cb54) {
    var _0x34cb39 = _0x6ecdde;
    return applyCharMap(boldItalicCharMap, _0x34cb39(0x3b2) + _0x30cb54 + '\x20»-(¯`v´¯)-»');
}

function crazyWithFlourishOrSymbols5(_0x37d517) {
    var _0x9d4886 = _0x6ecdde;
    return applyCharMap(squaresCharMap, 'ஜ۩۞۩ஜ\x20' + _0x37d517 + _0x9d4886(0x18c));
}

function wrap1(_0x1bf175) {
    var _0x1fea25 = _0x6ecdde;
    return applyCharMap(boldCharMap, _0x1fea25(0x304) + [_0x1bf175] + _0x1fea25(0x9c));
}

function wrap2(_0x2f0855) {
    var _0x4df7d1 = _0x6ecdde;
    return applyCharMap(cursiveCharMap, _0x4df7d1(0xfe) + [_0x2f0855] + '\x20\x20█\x20▇\x20▆\x20▅\x20▄\x20▂▁');
}

function wrap3(_0x4247c0) {
    var _0x3ab5da = _0x6ecdde;
    return applyCharMap(boldItalicCharMap, '▌│█║▌║▌║\x20' + [_0x4247c0] + _0x3ab5da(0x3e2));
}

function wrap4(_0x507a3a) {
    var _0x52530f = _0x6ecdde;
    return applyCharMap(neonCharMap, _0x52530f(0x374) + [_0x507a3a] + _0x52530f(0x1e2));
}

function wrap5(_0x5c7511) {
    var _0xad8fa2 = _0x6ecdde;
    return applyCharMap(boldItalicCharMap, _0xad8fa2(0x40) + [_0x5c7511] + _0xad8fa2(0x17f));
}
var newtext = {
    's1': {
        0x1: _0x6ecdde(0x1f9),
        0x2: '&#4310;',
        0x3: _0x6ecdde(0xaf),
        0x4: _0x6ecdde(0x325),
        0x5: _0x6ecdde(0x510),
        0x6: _0x6ecdde(0x48),
        0x7: '&#608;',
        0x8: _0x6ecdde(0x31d),
        0x9: _0x6ecdde(0x125),
        0xa: _0x6ecdde(0xee),
        0xb: _0x6ecdde(0x328),
        0xc: '&#645;',
        0xd: _0x6ecdde(0x499),
        0xe: _0x6ecdde(0x37),
        0xf: _0x6ecdde(0x233),
        0x10: _0x6ecdde(0x364),
        0x11: _0x6ecdde(0x5d),
        0x12: _0x6ecdde(0x1f),
        0x13: '&#642;',
        0x14: '&#410;',
        0x15: _0x6ecdde(0xa),
        0x16: _0x6ecdde(0x33c),
        0x17: _0x6ecdde(0x138),
        0x18: 'x',
        0x19: _0x6ecdde(0x268),
        0x1a: _0x6ecdde(0x277),
        0x1b: 'A',
        0x1c: 'B',
        0x1d: 'C',
        0x1e: 'D',
        0x1f: 'E',
        0x20: 'F',
        0x21: 'G',
        0x22: 'H',
        0x23: 'I',
        0x24: 'J',
        0x25: 'K',
        0x26: 'L',
        0x27: 'M',
        0x28: 'N',
        0x29: 'O',
        0x2a: 'P',
        0x2b: 'Q',
        0x2c: 'R',
        0x2d: 'S',
        0x2e: 'T',
        0x2f: 'U',
        0x30: 'V',
        0x31: 'W',
        0x32: 'X',
        0x33: 'Y',
        0x34: 'Z',
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's2': {
        0x1: _0x6ecdde(0x34a),
        0x2: '&#9837;',
        0x3: _0x6ecdde(0x362),
        0x4: _0x6ecdde(0x5b),
        0x5: _0x6ecdde(0x3cd),
        0x6: _0x6ecdde(0x98),
        0x7: '&#10081;',
        0x8: '&#9796;',
        0x9: _0x6ecdde(0x43a),
        0xa: _0x6ecdde(0x489),
        0xb: '&#1008;',
        0xc: _0x6ecdde(0x4fb),
        0xd: _0x6ecdde(0x42b),
        0xe: '&#9835;',
        0xf: _0x6ecdde(0x145),
        0x10: '&rho;',
        0x11: _0x6ecdde(0x473),
        0x12: _0x6ecdde(0x39),
        0x13: '&#9442;',
        0x14: _0x6ecdde(0x5f),
        0x15: _0x6ecdde(0x14d),
        0x16: '&#10003;',
        0x17: _0x6ecdde(0x3a3),
        0x18: _0x6ecdde(0x2f),
        0x19: _0x6ecdde(0x8e),
        0x1a: _0x6ecdde(0x1d1),
        0x1b: '&#41807;',
        0x1c: _0x6ecdde(0x2e0),
        0x1d: _0x6ecdde(0x362),
        0x1e: _0x6ecdde(0x5b),
        0x1f: '&euro;',
        0x20: _0x6ecdde(0x98),
        0x21: _0x6ecdde(0x178),
        0x22: _0x6ecdde(0x11f),
        0x23: _0x6ecdde(0x43a),
        0x24: _0x6ecdde(0x489),
        0x25: _0x6ecdde(0x261),
        0x26: _0x6ecdde(0x4fb),
        0x27: _0x6ecdde(0x42b),
        0x28: _0x6ecdde(0x3cf),
        0x29: _0x6ecdde(0x145),
        0x2a: _0x6ecdde(0x364),
        0x2b: '&#9773;',
        0x2c: _0x6ecdde(0x39),
        0x2d: _0x6ecdde(0xf8),
        0x2e: '&#9730;',
        0x2f: '&#9739;',
        0x30: _0x6ecdde(0x4e0),
        0x31: _0x6ecdde(0x3a3),
        0x32: _0x6ecdde(0x2f),
        0x33: '&#9791;',
        0x34: _0x6ecdde(0x1d1),
        0x35: _0x6ecdde(0x188),
        0x36: _0x6ecdde(0x2cd),
        0x37: _0x6ecdde(0x18f),
        0x38: _0x6ecdde(0x319),
        0x39: _0x6ecdde(0x7c),
        0x3a: _0x6ecdde(0x1d3),
        0x3b: _0x6ecdde(0x117),
        0x3c: _0x6ecdde(0x34f),
        0x3d: '&#10130;',
        0x3e: _0x6ecdde(0x3b0)
    },
    's3': {
        0x1: _0x6ecdde(0x1bd),
        0x2: _0x6ecdde(0x31b),
        0x3: _0x6ecdde(0x111),
        0x4: '&#270;',
        0x5: _0x6ecdde(0x38c),
        0x6: _0x6ecdde(0x2d0),
        0x7: '&#286;',
        0x8: _0x6ecdde(0x311),
        0x9: '&#296;',
        0xa: _0x6ecdde(0x504),
        0xb: _0x6ecdde(0x306),
        0xc: _0x6ecdde(0x4b5),
        0xd: _0x6ecdde(0x174),
        0xe: _0x6ecdde(0x151),
        0xf: _0x6ecdde(0x1f6),
        0x10: _0x6ecdde(0x82),
        0x11: 'Q',
        0x12: _0x6ecdde(0xbb),
        0x13: _0x6ecdde(0x467),
        0x14: _0x6ecdde(0x391),
        0x15: '&Uacute;',
        0x16: 'V',
        0x17: _0x6ecdde(0x246),
        0x18: '&#1046;',
        0x19: _0x6ecdde(0x479),
        0x1a: _0x6ecdde(0x30e),
        0x1b: _0x6ecdde(0x1bd),
        0x1c: _0x6ecdde(0x31b),
        0x1d: '&#268;',
        0x1e: '&#270;',
        0x1f: _0x6ecdde(0x38c),
        0x20: _0x6ecdde(0x2d0),
        0x21: _0x6ecdde(0x76),
        0x22: _0x6ecdde(0x311),
        0x23: _0x6ecdde(0x421),
        0x24: '&#308;',
        0x25: _0x6ecdde(0x306),
        0x26: _0x6ecdde(0x4b5),
        0x27: _0x6ecdde(0x174),
        0x28: _0x6ecdde(0x151),
        0x29: _0x6ecdde(0x1f6),
        0x2a: '&#1056;',
        0x2b: 'Q',
        0x2c: '&#340;',
        0x2d: _0x6ecdde(0x467),
        0x2e: _0x6ecdde(0x391),
        0x2f: _0x6ecdde(0x2d2),
        0x30: 'V',
        0x31: _0x6ecdde(0x246),
        0x32: _0x6ecdde(0x10a),
        0x33: _0x6ecdde(0x479),
        0x34: _0x6ecdde(0x30e),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's4': {
        0x1: '&#592;',
        0x2: 'q',
        0x3: _0x6ecdde(0x162),
        0x4: 'p',
        0x5: _0x6ecdde(0x252),
        0x6: '&#607;',
        0x7: '&#387;',
        0x8: '&#613;',
        0x9: '&#7433;',
        0xa: _0x6ecdde(0x1f),
        0xb: '&#670;',
        0xc: 'l',
        0xd: _0x6ecdde(0x138),
        0xe: 'u',
        0xf: 'o',
        0x10: 'd',
        0x11: 'b',
        0x12: '&#633;',
        0x13: 's',
        0x14: _0x6ecdde(0x323),
        0x15: 'n',
        0x16: _0x6ecdde(0x4dc),
        0x17: _0x6ecdde(0x28d),
        0x18: 'x',
        0x19: '&#654;',
        0x1a: 'z',
        0x1b: _0x6ecdde(0x4b1),
        0x1c: 'q',
        0x1d: '&#596;',
        0x1e: 'p',
        0x1f: '&#477;',
        0x20: _0x6ecdde(0x15c),
        0x21: _0x6ecdde(0x1d8),
        0x22: _0x6ecdde(0xcf),
        0x23: _0x6ecdde(0x160),
        0x24: _0x6ecdde(0x1f),
        0x25: _0x6ecdde(0x446),
        0x26: 'l',
        0x27: '&#623;',
        0x28: 'u',
        0x29: 'o',
        0x2a: 'd',
        0x2b: 'b',
        0x2c: _0x6ecdde(0x4b2),
        0x2d: 's',
        0x2e: _0x6ecdde(0x323),
        0x2f: 'n',
        0x30: _0x6ecdde(0x4dc),
        0x31: _0x6ecdde(0x28d),
        0x32: 'x',
        0x33: _0x6ecdde(0x403),
        0x34: 'z',
        0x35: _0x6ecdde(0x41e),
        0x36: _0x6ecdde(0x224),
        0x37: _0x6ecdde(0x45c),
        0x38: _0x6ecdde(0x45f),
        0x39: _0x6ecdde(0x1d5),
        0x3a: '9',
        0x3b: '&#12581;',
        0x3c: '8',
        0x3d: '6',
        0x3e: '0'
    },
    's5': {
        0x1: _0x6ecdde(0xa2),
        0x2: _0x6ecdde(0x31b),
        0x3: _0x6ecdde(0x281),
        0x4: _0x6ecdde(0x3f),
        0x5: _0x6ecdde(0x3cd),
        0x6: _0x6ecdde(0x2cb),
        0x7: _0x6ecdde(0x490),
        0x8: '&#294;',
        0x9: _0x6ecdde(0x452),
        0xa: _0x6ecdde(0x504),
        0xb: _0x6ecdde(0x47e),
        0xc: _0x6ecdde(0x42f),
        0xd: _0x6ecdde(0x4c6),
        0xe: _0x6ecdde(0x456),
        0xf: '&Oslash;',
        0x10: _0x6ecdde(0x22c),
        0x11: _0x6ecdde(0x5c),
        0x12: _0x6ecdde(0x231),
        0x13: _0x6ecdde(0x2a0),
        0x14: _0x6ecdde(0x2d0),
        0x15: _0x6ecdde(0x20f),
        0x16: 'V',
        0x17: _0x6ecdde(0x246),
        0x18: _0x6ecdde(0x10a),
        0x19: _0x6ecdde(0x29c),
        0x1a: _0x6ecdde(0x229),
        0x1b: '&Delta;',
        0x1c: _0x6ecdde(0x31b),
        0x1d: _0x6ecdde(0x281),
        0x1e: _0x6ecdde(0x3f),
        0x1f: _0x6ecdde(0x3cd),
        0x20: _0x6ecdde(0x2cb),
        0x21: _0x6ecdde(0x490),
        0x22: '&#294;',
        0x23: '&#407;',
        0x24: _0x6ecdde(0x504),
        0x25: _0x6ecdde(0x47e),
        0x26: _0x6ecdde(0x42f),
        0x27: _0x6ecdde(0x4c6),
        0x28: _0x6ecdde(0x456),
        0x29: '&Oslash;',
        0x2a: _0x6ecdde(0x22c),
        0x2b: _0x6ecdde(0x5c),
        0x2c: _0x6ecdde(0x231),
        0x2d: '&#350;',
        0x2e: _0x6ecdde(0x2d0),
        0x2f: _0x6ecdde(0x20f),
        0x30: 'V',
        0x31: _0x6ecdde(0x246),
        0x32: '&#1046;',
        0x33: _0x6ecdde(0x29c),
        0x34: _0x6ecdde(0x229),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's6': {
        0x1: _0x6ecdde(0x1f9),
        0x2: _0x6ecdde(0x4a0),
        0x3: _0x6ecdde(0x2b5),
        0x4: _0x6ecdde(0x3c6),
        0x5: _0x6ecdde(0x232),
        0x6: _0x6ecdde(0x103),
        0x7: _0x6ecdde(0x134),
        0x8: _0x6ecdde(0xe9),
        0x9: _0x6ecdde(0x163),
        0xa: _0x6ecdde(0xee),
        0xb: _0x6ecdde(0x18e),
        0xc: _0x6ecdde(0x310),
        0xd: _0x6ecdde(0x499),
        0xe: _0x6ecdde(0x37),
        0xf: _0x6ecdde(0x233),
        0x10: _0x6ecdde(0x364),
        0x11: _0x6ecdde(0x291),
        0x12: _0x6ecdde(0x216),
        0x13: '&#3619;',
        0x14: _0x6ecdde(0x19e),
        0x15: '&micro;',
        0x16: _0x6ecdde(0x48d),
        0x17: _0x6ecdde(0x3a3),
        0x18: _0x6ecdde(0x511),
        0x19: '&#4327;',
        0x1a: '&#438;',
        0x1b: _0x6ecdde(0x1f9),
        0x1c: _0x6ecdde(0x4a0),
        0x1d: '&#2798;',
        0x1e: _0x6ecdde(0x3c6),
        0x1f: '&epsilon;',
        0x20: _0x6ecdde(0x103),
        0x21: _0x6ecdde(0x134),
        0x22: _0x6ecdde(0xe9),
        0x23: _0x6ecdde(0x163),
        0x24: _0x6ecdde(0xee),
        0x25: _0x6ecdde(0x18e),
        0x26: _0x6ecdde(0x310),
        0x27: _0x6ecdde(0x499),
        0x28: '&#627;',
        0x29: _0x6ecdde(0x233),
        0x2a: '&rho;',
        0x2b: '&phi;',
        0x2c: _0x6ecdde(0x216),
        0x2d: _0x6ecdde(0xea),
        0x2e: _0x6ecdde(0x19e),
        0x2f: _0x6ecdde(0x3d4),
        0x30: _0x6ecdde(0x48d),
        0x31: _0x6ecdde(0x3a3),
        0x32: _0x6ecdde(0x511),
        0x33: _0x6ecdde(0x268),
        0x34: _0x6ecdde(0x18b),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's7': {
        0x1: _0x6ecdde(0x94),
        0x2: _0x6ecdde(0x37d),
        0x3: _0x6ecdde(0x154),
        0x4: _0x6ecdde(0x22f),
        0x5: '&#5620;',
        0x6: _0x6ecdde(0xb3),
        0x7: _0x6ecdde(0x490),
        0x8: _0x6ecdde(0x60),
        0x9: _0x6ecdde(0x284),
        0xa: _0x6ecdde(0x2e2),
        0xb: _0x6ecdde(0x105),
        0xc: _0x6ecdde(0x37f),
        0xd: '&#5616;',
        0xe: _0x6ecdde(0x399),
        0xf: _0x6ecdde(0x444),
        0x10: '&#5229;',
        0x11: _0x6ecdde(0x3cc),
        0x12: _0x6ecdde(0x27a),
        0x13: '&#5397;',
        0x14: _0x6ecdde(0x49b),
        0x15: '&#5196;',
        0x16: _0x6ecdde(0x46),
        0x17: _0x6ecdde(0x395),
        0x18: _0x6ecdde(0x492),
        0x19: _0x6ecdde(0x21d),
        0x1a: '&#20057;',
        0x1b: _0x6ecdde(0x94),
        0x1c: _0x6ecdde(0x37d),
        0x1d: '&#5205;',
        0x1e: '&#5610;',
        0x1f: _0x6ecdde(0x26d),
        0x20: _0x6ecdde(0xb3),
        0x21: _0x6ecdde(0x490),
        0x22: _0x6ecdde(0x60),
        0x23: _0x6ecdde(0x284),
        0x24: _0x6ecdde(0x2e2),
        0x25: '&#5845;',
        0x26: _0x6ecdde(0x37f),
        0x27: _0x6ecdde(0x352),
        0x28: '&#5198;',
        0x29: _0x6ecdde(0x444),
        0x2a: _0x6ecdde(0x11c),
        0x2b: '&#586;',
        0x2c: _0x6ecdde(0x27a),
        0x2d: _0x6ecdde(0x343),
        0x2e: '&#19973;',
        0x2f: '&#5196;',
        0x30: _0x6ecdde(0x46),
        0x31: '&#5615;',
        0x32: _0x6ecdde(0x492),
        0x33: _0x6ecdde(0x21d),
        0x34: _0x6ecdde(0xc3),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's8': {
        0x1: _0x6ecdde(0x481),
        0x2: _0x6ecdde(0x1b4),
        0x3: _0x6ecdde(0x68),
        0x4: _0x6ecdde(0x4a3),
        0x5: _0x6ecdde(0x4),
        0x6: 'f',
        0x7: '&#4330;',
        0x8: 'h',
        0x9: _0x6ecdde(0xe6),
        0xa: _0x6ecdde(0x18a),
        0xb: _0x6ecdde(0x129),
        0xc: 'l',
        0xd: _0x6ecdde(0x2c4),
        0xe: _0x6ecdde(0x4d4),
        0xf: _0x6ecdde(0x1ae),
        0x10: _0x6ecdde(0x364),
        0x11: _0x6ecdde(0x19f),
        0x12: '&Gamma;',
        0x13: '&#4336;',
        0x14: '&#3923;',
        0x15: _0x6ecdde(0xa),
        0x16: _0x6ecdde(0x3f4),
        0x17: 'w',
        0x18: _0x6ecdde(0xe1),
        0x19: _0x6ecdde(0x268),
        0x1a: _0x6ecdde(0x29f),
        0x1b: '&#4315;',
        0x1c: _0x6ecdde(0x1b4),
        0x1d: '&#4308;',
        0x1e: _0x6ecdde(0x4a3),
        0x1f: _0x6ecdde(0x4),
        0x20: 'f',
        0x21: _0x6ecdde(0x15a),
        0x22: 'h',
        0x23: '&#7990;',
        0x24: _0x6ecdde(0x18a),
        0x25: _0x6ecdde(0x129),
        0x26: 'l',
        0x27: _0x6ecdde(0x2c4),
        0x28: _0x6ecdde(0x4d4),
        0x29: _0x6ecdde(0x1ae),
        0x2a: '&rho;',
        0x2b: _0x6ecdde(0x19f),
        0x2c: _0x6ecdde(0x25f),
        0x2d: '&#4336;',
        0x2e: _0x6ecdde(0x75),
        0x2f: '&upsilon;',
        0x30: '&#8023;',
        0x31: 'w',
        0x32: _0x6ecdde(0xe1),
        0x33: _0x6ecdde(0x268),
        0x34: _0x6ecdde(0x29f),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's9': {
        0x1: _0x6ecdde(0x1a3),
        0x2: _0x6ecdde(0x2f0),
        0x3: _0x6ecdde(0x23b),
        0x4: _0x6ecdde(0x1ff),
        0x5: _0x6ecdde(0x4a),
        0x6: _0x6ecdde(0x2b1),
        0x7: _0x6ecdde(0x36b),
        0x8: _0x6ecdde(0xca),
        0x9: _0x6ecdde(0x36),
        0xa: _0x6ecdde(0x31),
        0xb: _0x6ecdde(0x397),
        0xc: _0x6ecdde(0x36f),
        0xd: _0x6ecdde(0x41b),
        0xe: '&#942;',
        0xf: '&#972;',
        0x10: '&rho;',
        0x11: 'q',
        0x12: _0x6ecdde(0x4ed),
        0x13: _0x6ecdde(0x4c0),
        0x14: '&#355;',
        0x15: _0x6ecdde(0x4b6),
        0x16: _0x6ecdde(0x317),
        0x17: _0x6ecdde(0x2ef),
        0x18: 'x',
        0x19: _0x6ecdde(0x23c),
        0x1a: '&#382;',
        0x1b: _0x6ecdde(0x1a3),
        0x1c: _0x6ecdde(0x2f0),
        0x1d: _0x6ecdde(0x23b),
        0x1e: _0x6ecdde(0x1ff),
        0x1f: _0x6ecdde(0x4a),
        0x20: _0x6ecdde(0x2b1),
        0x21: _0x6ecdde(0x36b),
        0x22: _0x6ecdde(0xca),
        0x23: _0x6ecdde(0x36),
        0x24: _0x6ecdde(0x31),
        0x25: '&#311;',
        0x26: '&#315;',
        0x27: _0x6ecdde(0x41b),
        0x28: '&#942;',
        0x29: '&#972;',
        0x2a: '&rho;',
        0x2b: 'q',
        0x2c: '&#341;',
        0x2d: '&#351;',
        0x2e: _0x6ecdde(0x339),
        0x2f: _0x6ecdde(0x4b6),
        0x30: '&nu;',
        0x31: _0x6ecdde(0x2ef),
        0x32: 'x',
        0x33: _0x6ecdde(0x23c),
        0x34: _0x6ecdde(0xa6),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's10': {
        0x1: _0x6ecdde(0xf3),
        0x2: _0x6ecdde(0x158),
        0x3: _0x6ecdde(0x4b7),
        0x4: '&#41045;',
        0x5: _0x6ecdde(0x2a2),
        0x6: _0x6ecdde(0xbf),
        0x7: '&#41037;',
        0x8: _0x6ecdde(0x519),
        0x9: _0x6ecdde(0x20a),
        0xa: _0x6ecdde(0x516),
        0xb: _0x6ecdde(0x2a),
        0xc: _0x6ecdde(0x59),
        0xd: '&#41042;',
        0xe: '&#41081;',
        0xf: _0x6ecdde(0x1d),
        0x10: _0x6ecdde(0x443),
        0x11: _0x6ecdde(0xd7),
        0x12: '&#42131;',
        0x13: _0x6ecdde(0x17a),
        0x14: _0x6ecdde(0x1d7),
        0x15: _0x6ecdde(0x21f),
        0x16: _0x6ecdde(0x2e7),
        0x17: _0x6ecdde(0xa9),
        0x18: _0x6ecdde(0xad),
        0x19: _0x6ecdde(0x49a),
        0x1a: _0x6ecdde(0x265),
        0x1b: _0x6ecdde(0xf3),
        0x1c: '&#41155;',
        0x1d: _0x6ecdde(0x4b7),
        0x1e: '&#41045;',
        0x1f: _0x6ecdde(0x2a2),
        0x20: '&#41240;',
        0x21: _0x6ecdde(0x44e),
        0x22: _0x6ecdde(0x519),
        0x23: _0x6ecdde(0x20a),
        0x24: _0x6ecdde(0x516),
        0x25: _0x6ecdde(0x2a),
        0x26: '&#42130;',
        0x27: '&#41042;',
        0x28: '&#41081;',
        0x29: _0x6ecdde(0x1d),
        0x2a: _0x6ecdde(0x443),
        0x2b: _0x6ecdde(0xd7),
        0x2c: '&#42131;',
        0x2d: '&#41754;',
        0x2e: _0x6ecdde(0x1d7),
        0x2f: _0x6ecdde(0x21f),
        0x30: _0x6ecdde(0x2e7),
        0x31: '&#41296;',
        0x32: _0x6ecdde(0xad),
        0x33: _0x6ecdde(0x49a),
        0x34: _0x6ecdde(0x265),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's11': {
        0x1: _0x6ecdde(0x296),
        0x2: '&#1041;',
        0x3: 'C',
        0x4: 'D',
        0x5: _0x6ecdde(0xb6),
        0x6: 'F',
        0x7: 'G',
        0x8: 'H',
        0x9: 'I',
        0xa: 'J',
        0xb: '&#1180;',
        0xc: 'L',
        0xd: 'M',
        0xe: '&#1048;',
        0xf: _0x6ecdde(0x480),
        0x10: 'P',
        0x11: '&#490;',
        0x12: '&#1071;',
        0x13: 'S',
        0x14: _0x6ecdde(0x25f),
        0x15: '&#1062;',
        0x16: 'V',
        0x17: '&#1065;',
        0x18: _0x6ecdde(0x10a),
        0x19: _0x6ecdde(0x44a),
        0x1a: 'Z',
        0x1b: _0x6ecdde(0x296),
        0x1c: '&#1041;',
        0x1d: 'C',
        0x1e: 'D',
        0x1f: _0x6ecdde(0xb6),
        0x20: 'F',
        0x21: 'G',
        0x22: 'H',
        0x23: 'I',
        0x24: 'J',
        0x25: '&#1180;',
        0x26: 'L',
        0x27: 'M',
        0x28: _0x6ecdde(0x4ee),
        0x29: _0x6ecdde(0x480),
        0x2a: 'P',
        0x2b: _0x6ecdde(0xbd),
        0x2c: _0x6ecdde(0x1ef),
        0x2d: 'S',
        0x2e: '&Gamma;',
        0x2f: '&#1062;',
        0x30: 'V',
        0x31: _0x6ecdde(0x15f),
        0x32: _0x6ecdde(0x10a),
        0x33: _0x6ecdde(0x44a),
        0x34: 'Z',
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's12': {
        0x1: '&#41807;',
        0x2: '&#41731;',
        0x3: '&#41555;',
        0x4: '&#41016;',
        0x5: _0x6ecdde(0x2a2),
        0x6: _0x6ecdde(0x40a),
        0x7: _0x6ecdde(0x31a),
        0x8: _0x6ecdde(0x50f),
        0x9: _0x6ecdde(0xcc),
        0xa: _0x6ecdde(0x516),
        0xb: '&#40984;',
        0xc: _0x6ecdde(0x59),
        0xd: '&#41141;',
        0xe: _0x6ecdde(0xb5),
        0xf: '&#41126;',
        0x10: _0x6ecdde(0x443),
        0x11: _0x6ecdde(0x431),
        0x12: _0x6ecdde(0x2c0),
        0x13: _0x6ecdde(0x1ee),
        0x14: _0x6ecdde(0x3d6),
        0x15: '&#40974;',
        0x16: '&#41204;',
        0x17: '&#41295;',
        0x18: _0x6ecdde(0x27e),
        0x19: _0x6ecdde(0x78),
        0x1a: _0x6ecdde(0x265),
        0x1b: _0x6ecdde(0x34a),
        0x1c: '&#41731;',
        0x1d: '&#41555;',
        0x1e: '&#41016;',
        0x1f: _0x6ecdde(0x2a2),
        0x20: _0x6ecdde(0x40a),
        0x21: '&#41029;',
        0x22: _0x6ecdde(0x50f),
        0x23: _0x6ecdde(0xcc),
        0x24: '&#41005;',
        0x25: _0x6ecdde(0x1c9),
        0x26: _0x6ecdde(0x59),
        0x27: _0x6ecdde(0x2c),
        0x28: _0x6ecdde(0xb5),
        0x29: _0x6ecdde(0x244),
        0x2a: _0x6ecdde(0x443),
        0x2b: _0x6ecdde(0x431),
        0x2c: _0x6ecdde(0x2c0),
        0x2d: _0x6ecdde(0x1ee),
        0x2e: _0x6ecdde(0x3d6),
        0x2f: _0x6ecdde(0x1c6),
        0x30: _0x6ecdde(0x1aa),
        0x31: '&#41295;',
        0x32: '&#41660;',
        0x33: _0x6ecdde(0x78),
        0x34: '&#41076;',
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's13': {
        0x1: _0x6ecdde(0x340),
        0x2: _0x6ecdde(0x2da),
        0x3: '&#41556;',
        0x4: _0x6ecdde(0x3e3),
        0x5: _0x6ecdde(0x12e),
        0x6: _0x6ecdde(0x1b5),
        0x7: _0x6ecdde(0x213),
        0x8: _0x6ecdde(0x3ae),
        0x9: _0x6ecdde(0x41a),
        0xa: _0x6ecdde(0xd5),
        0xb: _0x6ecdde(0x1c9),
        0xc: _0x6ecdde(0x59),
        0xd: _0x6ecdde(0x2c),
        0xe: '&#41674;',
        0xf: _0x6ecdde(0x266),
        0x10: _0x6ecdde(0x443),
        0x11: '&#41392;',
        0x12: _0x6ecdde(0x2c0),
        0x13: _0x6ecdde(0x3a2),
        0x14: _0x6ecdde(0x3d6),
        0x15: '&#42148;',
        0x16: _0x6ecdde(0x4be),
        0x17: _0x6ecdde(0xa9),
        0x18: _0x6ecdde(0x1b7),
        0x19: _0x6ecdde(0x4f6),
        0x1a: '&#41076;',
        0x1b: _0x6ecdde(0x340),
        0x1c: _0x6ecdde(0x2da),
        0x1d: _0x6ecdde(0xb0),
        0x1e: _0x6ecdde(0x3e3),
        0x1f: _0x6ecdde(0x12e),
        0x20: _0x6ecdde(0x1b5),
        0x21: _0x6ecdde(0x213),
        0x22: _0x6ecdde(0x3ae),
        0x23: '&#42128;',
        0x24: _0x6ecdde(0xd5),
        0x25: _0x6ecdde(0x1c9),
        0x26: _0x6ecdde(0x59),
        0x27: _0x6ecdde(0x2c),
        0x28: _0x6ecdde(0x1db),
        0x29: '&#41266;',
        0x2a: _0x6ecdde(0x443),
        0x2b: '&#41392;',
        0x2c: _0x6ecdde(0x2c0),
        0x2d: '&#41433;',
        0x2e: '&#42180;',
        0x2f: _0x6ecdde(0x4c4),
        0x30: _0x6ecdde(0x4be),
        0x31: _0x6ecdde(0xa9),
        0x32: '&#41575;',
        0x33: _0x6ecdde(0x4f6),
        0x34: _0x6ecdde(0x265),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's14': {
        0x1: _0x6ecdde(0x389),
        0x2: '&#998;',
        0x3: _0x6ecdde(0xf0),
        0x4: _0x6ecdde(0x478),
        0x5: _0x6ecdde(0x45c),
        0x6: 'F',
        0x7: _0x6ecdde(0x367),
        0x8: '&#1085;',
        0x9: '&#618;',
        0xa: '&#65420;',
        0xb: _0x6ecdde(0x4e8),
        0xc: _0x6ecdde(0x42f),
        0xd: _0x6ecdde(0x354),
        0xe: _0x6ecdde(0x428),
        0xf: _0x6ecdde(0x2ab),
        0x10: _0x6ecdde(0x2ff),
        0x11: '&#1192;',
        0x12: _0x6ecdde(0x4f9),
        0x13: _0x6ecdde(0x349),
        0x14: _0x6ecdde(0x391),
        0x15: '&#1062;',
        0x16: '&#404;',
        0x17: '&#412;',
        0x18: _0x6ecdde(0x457),
        0x19: _0x6ecdde(0x316),
        0x1a: _0x6ecdde(0x3c2),
        0x1b: '&Lambda;',
        0x1c: _0x6ecdde(0xd9),
        0x1d: _0x6ecdde(0xf0),
        0x1e: '&ETH;',
        0x1f: '&#400;',
        0x20: 'F',
        0x21: _0x6ecdde(0x367),
        0x22: _0x6ecdde(0x203),
        0x23: _0x6ecdde(0x275),
        0x24: '&#65420;',
        0x25: _0x6ecdde(0x4e8),
        0x26: _0x6ecdde(0x42f),
        0x27: _0x6ecdde(0x354),
        0x28: _0x6ecdde(0x428),
        0x29: '&Oslash;',
        0x2a: _0x6ecdde(0x2ff),
        0x2b: _0x6ecdde(0x169),
        0x2c: _0x6ecdde(0x4f9),
        0x2d: _0x6ecdde(0x349),
        0x2e: _0x6ecdde(0x391),
        0x2f: _0x6ecdde(0x4ae),
        0x30: _0x6ecdde(0x3cb),
        0x31: _0x6ecdde(0x1e3),
        0x32: _0x6ecdde(0x457),
        0x33: _0x6ecdde(0x316),
        0x34: _0x6ecdde(0x3c2),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's15': {
        0x1: _0x6ecdde(0x61),
        0x2: '&#385;',
        0x3: _0x6ecdde(0x332),
        0x4: _0x6ecdde(0x32d),
        0x5: _0x6ecdde(0x1b9),
        0x6: _0x6ecdde(0x62),
        0x7: _0x6ecdde(0x367),
        0x8: _0x6ecdde(0x3bf),
        0x9: '&#406;',
        0xa: _0x6ecdde(0x219),
        0xb: '&#408;',
        0xc: '&#1340;',
        0xd: 'M',
        0xe: _0x6ecdde(0x1fc),
        0xf: _0x6ecdde(0x171),
        0x10: _0x6ecdde(0x22c),
        0x11: '&#418;',
        0x12: '&#422;',
        0x13: _0x6ecdde(0x48c),
        0x14: _0x6ecdde(0x37c),
        0x15: _0x6ecdde(0x41c),
        0x16: _0x6ecdde(0x3cb),
        0x17: '&#412;',
        0x18: _0x6ecdde(0x28e),
        0x19: '&#435;',
        0x1a: _0x6ecdde(0x3ed),
        0x1b: _0x6ecdde(0x61),
        0x1c: _0x6ecdde(0x1c3),
        0x1d: '&#391;',
        0x1e: _0x6ecdde(0x32d),
        0x1f: '&#1028;',
        0x20: _0x6ecdde(0x62),
        0x21: _0x6ecdde(0x367),
        0x22: _0x6ecdde(0x3bf),
        0x23: _0x6ecdde(0x41e),
        0x24: _0x6ecdde(0x219),
        0x25: _0x6ecdde(0xb),
        0x26: '&#1340;',
        0x27: 'M',
        0x28: '&#413;',
        0x29: '&#416;',
        0x2a: _0x6ecdde(0x22c),
        0x2b: _0x6ecdde(0x16c),
        0x2c: _0x6ecdde(0x2ee),
        0x2d: '&#423;',
        0x2e: _0x6ecdde(0x37c),
        0x2f: _0x6ecdde(0x41c),
        0x30: _0x6ecdde(0x3cb),
        0x31: _0x6ecdde(0x1e3),
        0x32: _0x6ecdde(0x28e),
        0x33: _0x6ecdde(0x21d),
        0x34: _0x6ecdde(0x3ed),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's16': {
        0x1: '&#41074;',
        0x2: _0x6ecdde(0x299),
        0x3: _0x6ecdde(0x200),
        0x4: _0x6ecdde(0x50c),
        0x5: _0x6ecdde(0x1f4),
        0x6: _0x6ecdde(0x26f),
        0x7: _0x6ecdde(0x31a),
        0x8: '&#41833;',
        0x9: _0x6ecdde(0x20a),
        0xa: _0x6ecdde(0xd5),
        0xb: '&#40983;',
        0xc: '&#42130;',
        0xd: _0x6ecdde(0x2c),
        0xe: _0x6ecdde(0x1db),
        0xf: _0x6ecdde(0x244),
        0x10: _0x6ecdde(0x443),
        0x11: _0x6ecdde(0x3fd),
        0x12: _0x6ecdde(0x1dd),
        0x13: _0x6ecdde(0x17a),
        0x14: _0x6ecdde(0x3f8),
        0x15: _0x6ecdde(0x21f),
        0x16: '&#41008;',
        0x17: _0x6ecdde(0x40f),
        0x18: _0x6ecdde(0x393),
        0x19: '&#42014;',
        0x1a: '&#41076;',
        0x1b: _0x6ecdde(0x116),
        0x1c: _0x6ecdde(0x299),
        0x1d: _0x6ecdde(0x200),
        0x1e: '&#41120;',
        0x1f: _0x6ecdde(0x1f4),
        0x20: _0x6ecdde(0x26f),
        0x21: _0x6ecdde(0x31a),
        0x22: _0x6ecdde(0x3fe),
        0x23: '&#41105;',
        0x24: _0x6ecdde(0xd5),
        0x25: _0x6ecdde(0x2a),
        0x26: _0x6ecdde(0x59),
        0x27: '&#41141;',
        0x28: '&#41674;',
        0x29: _0x6ecdde(0x244),
        0x2a: _0x6ecdde(0x443),
        0x2b: _0x6ecdde(0x3fd),
        0x2c: _0x6ecdde(0x1dd),
        0x2d: _0x6ecdde(0x17a),
        0x2e: _0x6ecdde(0x3f8),
        0x2f: _0x6ecdde(0x21f),
        0x30: _0x6ecdde(0xef),
        0x31: _0x6ecdde(0x40f),
        0x32: '&#41426;',
        0x33: _0x6ecdde(0x416),
        0x34: _0x6ecdde(0x265),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's17': {
        0x1: _0x6ecdde(0x512),
        0x2: _0x6ecdde(0x4f3),
        0x3: _0x6ecdde(0x1e),
        0x4: '&#1338;',
        0x5: _0x6ecdde(0x177),
        0x6: _0x6ecdde(0x4a1),
        0x7: _0x6ecdde(0x2b6),
        0x8: '&#615;',
        0x9: _0x6ecdde(0x387),
        0xa: _0x6ecdde(0xee),
        0xb: '&#409;',
        0xc: _0x6ecdde(0x3e1),
        0xd: _0x6ecdde(0x28d),
        0xe: '&#1356;',
        0xf: _0x6ecdde(0x131),
        0x10: _0x6ecdde(0x364),
        0x11: _0x6ecdde(0x291),
        0x12: _0x6ecdde(0x293),
        0x13: _0x6ecdde(0x19),
        0x14: '&#1333;',
        0x15: _0x6ecdde(0x27c),
        0x16: '&#1506;',
        0x17: _0x6ecdde(0x26b),
        0x18: _0x6ecdde(0x8f),
        0x19: _0x6ecdde(0x381),
        0x1a: _0x6ecdde(0x108),
        0x1b: '&#1337;',
        0x1c: _0x6ecdde(0x4f3),
        0x1d: _0x6ecdde(0x1e),
        0x1e: _0x6ecdde(0xae),
        0x1f: _0x6ecdde(0x177),
        0x20: _0x6ecdde(0x4a1),
        0x21: '&#1331;',
        0x22: _0x6ecdde(0x24b),
        0x23: _0x6ecdde(0x387),
        0x24: _0x6ecdde(0xee),
        0x25: _0x6ecdde(0x328),
        0x26: _0x6ecdde(0x3e1),
        0x27: _0x6ecdde(0x28d),
        0x28: '&#1356;',
        0x29: _0x6ecdde(0x131),
        0x2a: _0x6ecdde(0x364),
        0x2b: _0x6ecdde(0x291),
        0x2c: '&#1360;',
        0x2d: _0x6ecdde(0x19),
        0x2e: _0x6ecdde(0x1bf),
        0x2f: _0x6ecdde(0x27c),
        0x30: '&#1506;',
        0x31: _0x6ecdde(0x26b),
        0x32: _0x6ecdde(0x8f),
        0x33: _0x6ecdde(0x381),
        0x34: _0x6ecdde(0x108),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's18': {
        0x1: _0x6ecdde(0x1f9),
        0x2: _0x6ecdde(0x65),
        0x3: _0x6ecdde(0x23b),
        0x4: 'd',
        0x5: '&epsilon;',
        0x6: _0x6ecdde(0x103),
        0x7: 'g',
        0x8: 'h',
        0x9: _0x6ecdde(0x4db),
        0xa: _0x6ecdde(0x50b),
        0xb: '&kappa;',
        0xc: _0x6ecdde(0x81),
        0xd: 'm',
        0xe: _0x6ecdde(0x2ae),
        0xf: '&oplus;',
        0x10: 'p',
        0x11: _0x6ecdde(0x5c),
        0x12: 'r',
        0x13: '&scaron;',
        0x14: _0x6ecdde(0x149),
        0x15: 'u',
        0x16: _0x6ecdde(0x230),
        0x17: _0x6ecdde(0x3a3),
        0x18: 'x',
        0x19: '&psi;',
        0x1a: 'z',
        0x1b: '&alpha;',
        0x1c: _0x6ecdde(0x65),
        0x1d: '&sigmaf;',
        0x1e: 'd',
        0x1f: '&epsilon;',
        0x20: _0x6ecdde(0x103),
        0x21: 'g',
        0x22: 'h',
        0x23: '&iuml;',
        0x24: '&#1397;',
        0x25: _0x6ecdde(0x129),
        0x26: _0x6ecdde(0x81),
        0x27: 'm',
        0x28: _0x6ecdde(0x2ae),
        0x29: _0x6ecdde(0x4e5),
        0x2a: 'p',
        0x2b: _0x6ecdde(0x5c),
        0x2c: 'r',
        0x2d: '&scaron;',
        0x2e: '&dagger;',
        0x2f: 'u',
        0x30: _0x6ecdde(0x230),
        0x31: _0x6ecdde(0x3a3),
        0x32: 'x',
        0x33: '&psi;',
        0x34: 'z',
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's19': {
        0x1: _0x6ecdde(0x136),
        0x2: _0x6ecdde(0x15a),
        0x3: _0x6ecdde(0x273),
        0x4: _0x6ecdde(0x4a3),
        0x5: _0x6ecdde(0x25b),
        0x6: '&#1330;',
        0x7: _0x6ecdde(0x3c3),
        0x8: _0x6ecdde(0xc0),
        0x9: _0x6ecdde(0x387),
        0xa: '&#646;',
        0xb: _0x6ecdde(0x1b8),
        0xc: _0x6ecdde(0x226),
        0xd: _0x6ecdde(0x499),
        0xe: _0x6ecdde(0x218),
        0xf: _0x6ecdde(0x33f),
        0x10: _0x6ecdde(0x43c),
        0x11: _0x6ecdde(0x405),
        0x12: _0x6ecdde(0x293),
        0x13: _0x6ecdde(0x23b),
        0x14: _0x6ecdde(0x322),
        0x15: _0x6ecdde(0xa),
        0x16: _0x6ecdde(0x4cc),
        0x17: _0x6ecdde(0x3a3),
        0x18: _0x6ecdde(0x3dd),
        0x19: '&#1506;',
        0x1a: '&#2749;',
        0x1b: _0x6ecdde(0x136),
        0x1c: _0x6ecdde(0x15a),
        0x1d: '&#2414;',
        0x1e: '&#4331;',
        0x1f: _0x6ecdde(0x25b),
        0x20: '&#1330;',
        0x21: _0x6ecdde(0x3c3),
        0x22: _0x6ecdde(0xc0),
        0x23: _0x6ecdde(0x387),
        0x24: '&#646;',
        0x25: _0x6ecdde(0x1b8),
        0x26: '&#1350;',
        0x27: _0x6ecdde(0x499),
        0x28: _0x6ecdde(0x218),
        0x29: _0x6ecdde(0x33f),
        0x2a: _0x6ecdde(0x43c),
        0x2b: '&#1193;',
        0x2c: _0x6ecdde(0x293),
        0x2d: _0x6ecdde(0x23b),
        0x2e: _0x6ecdde(0x322),
        0x2f: _0x6ecdde(0xa),
        0x30: _0x6ecdde(0x4cc),
        0x31: _0x6ecdde(0x3a3),
        0x32: _0x6ecdde(0x3dd),
        0x33: _0x6ecdde(0x3a8),
        0x34: _0x6ecdde(0x3b4),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's20': {
        0x1: '&#1072;',
        0x2: _0x6ecdde(0x3ec),
        0x3: 'c',
        0x4: '&#1076;',
        0x5: _0x6ecdde(0x2d9),
        0x6: 'f',
        0x7: 'g',
        0x8: _0x6ecdde(0x203),
        0x9: _0x6ecdde(0x260),
        0xa: 'j',
        0xb: _0x6ecdde(0x1df),
        0xc: _0x6ecdde(0x3df),
        0xd: _0x6ecdde(0x92),
        0xe: _0x6ecdde(0x2a6),
        0xf: _0x6ecdde(0x3c9),
        0x10: 'p',
        0x11: '&#1092;',
        0x12: '&#1103;',
        0x13: '$',
        0x14: _0x6ecdde(0x4d7),
        0x15: '&#1094;',
        0x16: _0x6ecdde(0x48d),
        0x17: _0x6ecdde(0x4ca),
        0x18: _0x6ecdde(0x4d1),
        0x19: '&#1095;',
        0x1a: '&#1079;',
        0x1b: _0x6ecdde(0x1cc),
        0x1c: _0x6ecdde(0x1ac),
        0x1d: 'C',
        0x1e: _0x6ecdde(0x296),
        0x1f: '&#1028;',
        0x20: 'F',
        0x21: 'G',
        0x22: 'H',
        0x23: _0x6ecdde(0x360),
        0x24: 'J',
        0x25: _0x6ecdde(0xa8),
        0x26: _0x6ecdde(0x1be),
        0x27: '&#1130;',
        0x28: _0x6ecdde(0x165),
        0x29: '&#1138;',
        0x2a: 'P',
        0x2b: _0x6ecdde(0x480),
        0x2c: '&#1071;',
        0x2d: '$',
        0x2e: 'T',
        0x2f: _0x6ecdde(0x4ae),
        0x30: '&#1140;',
        0x31: '&#1064;',
        0x32: _0x6ecdde(0x10a),
        0x33: _0x6ecdde(0x6),
        0x34: _0x6ecdde(0x13b),
        0x35: '1',
        0x36: '2',
        0x37: '3',
        0x38: '4',
        0x39: '5',
        0x3a: '6',
        0x3b: '7',
        0x3c: '8',
        0x3d: '9',
        0x3e: '0'
    },
    's21': {
        0x1: 'a&#830;',
        0x2: 'b&#830;',
        0x3: 'c&#830;',
        0x4: _0x6ecdde(0x3d0),
        0x5: _0x6ecdde(0x167),
        0x6: _0x6ecdde(0x190),
        0x7: 'g&#830;',
        0x8: _0x6ecdde(0x38e),
        0x9: _0x6ecdde(0x3b9),
        0xa: _0x6ecdde(0x4b9),
        0xb: _0x6ecdde(0x345),
        0xc: _0x6ecdde(0x2b3),
        0xd: _0x6ecdde(0x1e8),
        0xe: _0x6ecdde(0x351),
        0xf: _0x6ecdde(0xb8),
        0x10: 'p&#830;',
        0x11: _0x6ecdde(0x7a),
        0x12: 'r&#830;',
        0x13: _0x6ecdde(0xf),
        0x14: _0x6ecdde(0x241),
        0x15: 'u&#830;',
        0x16: _0x6ecdde(0x2fb),
        0x17: _0x6ecdde(0x1b3),
        0x18: _0x6ecdde(0xa1),
        0x19: _0x6ecdde(0x2eb),
        0x1a: _0x6ecdde(0x28c),
        0x1b: 'A&#830;',
        0x1c: 'B&#830;',
        0x1d: _0x6ecdde(0x271),
        0x1e: _0x6ecdde(0x30d),
        0x1f: 'E&#830;',
        0x20: _0x6ecdde(0x6b),
        0x21: _0x6ecdde(0x4ab),
        0x22: _0x6ecdde(0x1a5),
        0x23: 'I&#830;',
        0x24: _0x6ecdde(0x4d2),
        0x25: _0x6ecdde(0x4fa),
        0x26: 'L&#830;',
        0x27: _0x6ecdde(0x1d9),
        0x28: _0x6ecdde(0x290),
        0x29: _0x6ecdde(0x4bf),
        0x2a: _0x6ecdde(0x16f),
        0x2b: _0x6ecdde(0x289),
        0x2c: _0x6ecdde(0x305),
        0x2d: _0x6ecdde(0x19d),
        0x2e: _0x6ecdde(0x3d),
        0x2f: _0x6ecdde(0x4f5),
        0x30: _0x6ecdde(0x454),
        0x31: 'W&#830;',
        0x32: _0x6ecdde(0x35e),
        0x33: _0x6ecdde(0x294),
        0x34: _0x6ecdde(0x4ad),
        0x35: _0x6ecdde(0x4ff),
        0x36: '2&#830;',
        0x37: '3&#830;',
        0x38: _0x6ecdde(0x2a3),
        0x39: _0x6ecdde(0x2d7),
        0x3a: _0x6ecdde(0x321),
        0x3b: _0x6ecdde(0x1fb),
        0x3c: _0x6ecdde(0x331),
        0x3d: _0x6ecdde(0x2d5),
        0x3e: _0x6ecdde(0x3b1)
    },
    's22': {
        0x1: _0x6ecdde(0x46e),
        0x2: _0x6ecdde(0xc7),
        0x3: _0x6ecdde(0x255),
        0x4: _0x6ecdde(0x1a2),
        0x5: _0x6ecdde(0x35c),
        0x6: 'f&#838;',
        0x7: _0x6ecdde(0x2a9),
        0x8: _0x6ecdde(0x394),
        0x9: 'i&#838;',
        0xa: _0x6ecdde(0x38a),
        0xb: _0x6ecdde(0x49e),
        0xc: _0x6ecdde(0x2ed),
        0xd: _0x6ecdde(0x243),
        0xe: _0x6ecdde(0x1f7),
        0xf: _0x6ecdde(0x193),
        0x10: _0x6ecdde(0x2bd),
        0x11: _0x6ecdde(0x33e),
        0x12: _0x6ecdde(0x406),
        0x13: 's&#838;',
        0x14: _0x6ecdde(0x453),
        0x15: _0x6ecdde(0x50e),
        0x16: _0x6ecdde(0x43e),
        0x17: 'w&#838;',
        0x18: _0x6ecdde(0x120),
        0x19: _0x6ecdde(0x3ad),
        0x1a: _0x6ecdde(0x283),
        0x1b: 'A&#838;',
        0x1c: _0x6ecdde(0x263),
        0x1d: 'C&#838;',
        0x1e: _0x6ecdde(0x469),
        0x1f: 'E&#838;',
        0x20: _0x6ecdde(0x40c),
        0x21: _0x6ecdde(0x238),
        0x22: _0x6ecdde(0x357),
        0x23: _0x6ecdde(0x13d),
        0x24: _0x6ecdde(0x147),
        0x25: _0x6ecdde(0x46a),
        0x26: _0x6ecdde(0x430),
        0x27: _0x6ecdde(0x464),
        0x28: _0x6ecdde(0x3f0),
        0x29: 'O&#838;',
        0x2a: _0x6ecdde(0x493),
        0x2b: 'Q&#838;',
        0x2c: _0x6ecdde(0x333),
        0x2d: _0x6ecdde(0x377),
        0x2e: _0x6ecdde(0x355),
        0x2f: _0x6ecdde(0xd),
        0x30: 'V&#838;',
        0x31: 'W&#838;',
        0x32: 'X&#838;',
        0x33: _0x6ecdde(0x432),
        0x34: _0x6ecdde(0x482),
        0x35: _0x6ecdde(0x38d),
        0x36: '2&#838;',
        0x37: '3&#838;',
        0x38: '4&#838;',
        0x39: '5&#838;',
        0x3a: _0x6ecdde(0x269),
        0x3b: _0x6ecdde(0x46f),
        0x3c: _0x6ecdde(0xf4),
        0x3d: '9&#838;',
        0x3e: _0x6ecdde(0x3a9)
    },
    's23': {
        0x1: _0x6ecdde(0x7b),
        0x2: 'b&#826;',
        0x3: _0x6ecdde(0x471),
        0x4: _0x6ecdde(0x1f1),
        0x5: _0x6ecdde(0x496),
        0x6: _0x6ecdde(0x2b0),
        0x7: _0x6ecdde(0x3d8),
        0x8: _0x6ecdde(0x2c2),
        0x9: 'i&#826;',
        0xa: 'j&#826;',
        0xb: _0x6ecdde(0x350),
        0xc: _0x6ecdde(0x415),
        0xd: _0x6ecdde(0x1f8),
        0xe: _0x6ecdde(0x23e),
        0xf: _0x6ecdde(0x2ce),
        0x10: _0x6ecdde(0x1b1),
        0x11: 'q&#826;',
        0x12: _0x6ecdde(0x33d),
        0x13: _0x6ecdde(0x408),
        0x14: _0x6ecdde(0x2fc),
        0x15: _0x6ecdde(0x10c),
        0x16: 'v&#826;',
        0x17: _0x6ecdde(0x1e1),
        0x18: 'x&#826;',
        0x19: 'y&#826;',
        0x1a: _0x6ecdde(0x135),
        0x1b: _0x6ecdde(0x1ec),
        0x1c: 'B&#826;',
        0x1d: 'C&#826;',
        0x1e: _0x6ecdde(0x3c4),
        0x1f: _0x6ecdde(0x20e),
        0x20: _0x6ecdde(0x3d3),
        0x21: _0x6ecdde(0x2e),
        0x22: _0x6ecdde(0x132),
        0x23: _0x6ecdde(0x4e3),
        0x24: _0x6ecdde(0x1a4),
        0x25: _0x6ecdde(0x196),
        0x26: _0x6ecdde(0x1a),
        0x27: _0x6ecdde(0x257),
        0x28: _0x6ecdde(0x87),
        0x29: _0x6ecdde(0x34b),
        0x2a: 'P&#826;',
        0x2b: 'Q&#826;',
        0x2c: _0x6ecdde(0x1e6),
        0x2d: _0x6ecdde(0x3f6),
        0x2e: _0x6ecdde(0x3b3),
        0x2f: 'U&#826;',
        0x30: _0x6ecdde(0x29b),
        0x31: 'W&#826;',
        0x32: _0x6ecdde(0x20c),
        0x33: 'Y&#826;',
        0x34: 'Z&#826;',
        0x35: _0x6ecdde(0x42),
        0x36: _0x6ecdde(0x210),
        0x37: _0x6ecdde(0x11d),
        0x38: '4&#826;',
        0x39: _0x6ecdde(0x4e7),
        0x3a: _0x6ecdde(0x1e9),
        0x3b: '7&#826;',
        0x3c: _0x6ecdde(0xde),
        0x3d: _0x6ecdde(0x6a),
        0x3e: _0x6ecdde(0x495)
    },
    's24': {
        0x1: _0x6ecdde(0x2b4),
        0x2: _0x6ecdde(0x474),
        0x3: _0x6ecdde(0x112),
        0x4: 'd&#857;',
        0x5: _0x6ecdde(0x3a7),
        0x6: _0x6ecdde(0xe7),
        0x7: _0x6ecdde(0x4bd),
        0x8: _0x6ecdde(0x384),
        0x9: 'i&#857;',
        0xa: _0x6ecdde(0x503),
        0xb: _0x6ecdde(0xdb),
        0xc: _0x6ecdde(0x63),
        0xd: _0x6ecdde(0xe0),
        0xe: _0x6ecdde(0x302),
        0xf: 'o&#857;',
        0x10: 'p&#857;',
        0x11: 'q&#857;',
        0x12: _0x6ecdde(0x2f3),
        0x13: _0x6ecdde(0x517),
        0x14: 't&#857;',
        0x15: 'u&#857;',
        0x16: 'v&#857;',
        0x17: 'w&#857;',
        0x18: 'x&#857;',
        0x19: _0x6ecdde(0x222),
        0x1a: 'z&#857;',
        0x1b: _0x6ecdde(0x32a),
        0x1c: _0x6ecdde(0x39d),
        0x1d: _0x6ecdde(0x118),
        0x1e: _0x6ecdde(0xba),
        0x1f: _0x6ecdde(0x142),
        0x20: _0x6ecdde(0x31f),
        0x21: 'G&#857;',
        0x22: _0x6ecdde(0x10e),
        0x23: _0x6ecdde(0x3ac),
        0x24: _0x6ecdde(0xe4),
        0x25: _0x6ecdde(0x307),
        0x26: _0x6ecdde(0x48a),
        0x27: _0x6ecdde(0x2ca),
        0x28: _0x6ecdde(0x1a7),
        0x29: _0x6ecdde(0x3e9),
        0x2a: _0x6ecdde(0x2b9),
        0x2b: _0x6ecdde(0x43),
        0x2c: 'R&#857;',
        0x2d: _0x6ecdde(0x139),
        0x2e: 'T&#857;',
        0x2f: _0x6ecdde(0x282),
        0x30: _0x6ecdde(0x337),
        0x31: _0x6ecdde(0x44b),
        0x32: _0x6ecdde(0x361),
        0x33: _0x6ecdde(0x9d),
        0x34: 'Z&#857;',
        0x35: _0x6ecdde(0x14b),
        0x36: _0x6ecdde(0x0),
        0x37: _0x6ecdde(0x2ac),
        0x38: '4&#857;',
        0x39: '5&#857;',
        0x3a: _0x6ecdde(0x9f),
        0x3b: _0x6ecdde(0x23d),
        0x3c: _0x6ecdde(0x30f),
        0x3d: '9&#857;',
        0x3e: _0x6ecdde(0x4d9)
    },
    's25': {
        0x1: _0x6ecdde(0x84),
        0x2: _0x6ecdde(0x70),
        0x3: 'c&#799;',
        0x4: _0x6ecdde(0x2bf),
        0x5: _0x6ecdde(0xdf),
        0x6: 'f&#799;',
        0x7: _0x6ecdde(0x1c1),
        0x8: _0x6ecdde(0x259),
        0x9: 'i&#799;',
        0xa: _0x6ecdde(0x488),
        0xb: _0x6ecdde(0x1d2),
        0xc: _0x6ecdde(0x330),
        0xd: _0x6ecdde(0x3f7),
        0xe: _0x6ecdde(0x189),
        0xf: 'o&#799;',
        0x10: _0x6ecdde(0x2ad),
        0x11: _0x6ecdde(0x6e),
        0x12: _0x6ecdde(0x175),
        0x13: _0x6ecdde(0x382),
        0x14: _0x6ecdde(0xb7),
        0x15: _0x6ecdde(0x30a),
        0x16: _0x6ecdde(0x106),
        0x17: _0x6ecdde(0x33a),
        0x18: _0x6ecdde(0x2e1),
        0x19: _0x6ecdde(0x1e5),
        0x1a: _0x6ecdde(0xbc),
        0x1b: _0x6ecdde(0x422),
        0x1c: _0x6ecdde(0x476),
        0x1d: _0x6ecdde(0x12c),
        0x1e: _0x6ecdde(0xe),
        0x1f: _0x6ecdde(0x30b),
        0x20: _0x6ecdde(0x400),
        0x21: 'G&#799;',
        0x22: _0x6ecdde(0x3b),
        0x23: 'I&#799;',
        0x24: _0x6ecdde(0x127),
        0x25: _0x6ecdde(0xda),
        0x26: 'L&#799;',
        0x27: _0x6ecdde(0x466),
        0x28: _0x6ecdde(0x412),
        0x29: _0x6ecdde(0x463),
        0x2a: _0x6ecdde(0x195),
        0x2b: 'Q&#799;',
        0x2c: _0x6ecdde(0x12b),
        0x2d: _0x6ecdde(0x366),
        0x2e: _0x6ecdde(0x21e),
        0x2f: 'U&#799;',
        0x30: 'V&#799;',
        0x31: _0x6ecdde(0x24d),
        0x32: 'X&#799;',
        0x33: _0x6ecdde(0x2fd),
        0x34: _0x6ecdde(0x64),
        0x35: '1&#799;',
        0x36: _0x6ecdde(0x439),
        0x37: '3&#799;',
        0x38: '4&#799;',
        0x39: '5&#799;',
        0x3a: _0x6ecdde(0x201),
        0x3b: _0x6ecdde(0x95),
        0x3c: _0x6ecdde(0x146),
        0x3d: _0x6ecdde(0x155),
        0x3e: _0x6ecdde(0x23f)
    },
    's26': {
        0x1: 'a&#846;',
        0x2: 'b&#846;',
        0x3: 'c&#846;',
        0x4: _0x6ecdde(0x4f),
        0x5: _0x6ecdde(0x435),
        0x6: _0x6ecdde(0x372),
        0x7: _0x6ecdde(0x2dc),
        0x8: _0x6ecdde(0x197),
        0x9: 'i&#846;',
        0xa: 'j&#846;',
        0xb: _0x6ecdde(0x507),
        0xc: _0x6ecdde(0x17d),
        0xd: _0x6ecdde(0x3e),
        0xe: _0x6ecdde(0x2c1),
        0xf: _0x6ecdde(0x23),
        0x10: _0x6ecdde(0x1c2),
        0x11: 'q&#846;',
        0x12: _0x6ecdde(0x86),
        0x13: _0x6ecdde(0x7),
        0x14: _0x6ecdde(0x378),
        0x15: 'u&#846;',
        0x16: _0x6ecdde(0x2c3),
        0x17: 'w&#846;',
        0x18: _0x6ecdde(0x448),
        0x19: _0x6ecdde(0x1d0),
        0x1a: _0x6ecdde(0x234),
        0x1b: 'A&#846;',
        0x1c: _0x6ecdde(0x24),
        0x1d: _0x6ecdde(0x16e),
        0x1e: 'D&#846;',
        0x1f: _0x6ecdde(0x32c),
        0x20: 'F&#846;',
        0x21: _0x6ecdde(0xf6),
        0x22: 'H&#846;',
        0x23: _0x6ecdde(0x392),
        0x24: 'J&#846;',
        0x25: _0x6ecdde(0x41f),
        0x26: 'L&#846;',
        0x27: _0x6ecdde(0x1a0),
        0x28: 'N&#846;',
        0x29: 'O&#846;',
        0x2a: _0x6ecdde(0x235),
        0x2b: _0x6ecdde(0x4f4),
        0x2c: 'R&#846;',
        0x2d: _0x6ecdde(0x28b),
        0x2e: 'T&#846;',
        0x2f: _0x6ecdde(0x1eb),
        0x30: _0x6ecdde(0x1a6),
        0x31: _0x6ecdde(0x2f8),
        0x32: _0x6ecdde(0x22d),
        0x33: 'Y&#846;',
        0x34: _0x6ecdde(0x1a1),
        0x35: _0x6ecdde(0x301),
        0x36: _0x6ecdde(0x221),
        0x37: _0x6ecdde(0x501),
        0x38: _0x6ecdde(0xf5),
        0x39: _0x6ecdde(0x25d),
        0x3a: _0x6ecdde(0x468),
        0x3b: _0x6ecdde(0x35b),
        0x3c: _0x6ecdde(0x4c),
        0x3d: _0x6ecdde(0x413),
        0x3e: _0x6ecdde(0x4e1)
    },
    's27': {
        0x1: _0x6ecdde(0x11a),
        0x2: _0x6ecdde(0x40d),
        0x3: _0x6ecdde(0x27f),
        0x4: _0x6ecdde(0xe8),
        0x5: _0x6ecdde(0x227),
        0x6: _0x6ecdde(0x22a),
        0x7: _0x6ecdde(0x3bc),
        0x8: _0x6ecdde(0x2a7),
        0x9: _0x6ecdde(0x1ba),
        0xa: _0x6ecdde(0x3e4),
        0xb: _0x6ecdde(0x15),
        0xc: _0x6ecdde(0x247),
        0xd: 'm&#829;&#851;',
        0xe: _0x6ecdde(0xd3),
        0xf: 'o&#829;&#851;',
        0x10: _0x6ecdde(0x11b),
        0x11: _0x6ecdde(0x1ab),
        0x12: _0x6ecdde(0x484),
        0x13: _0x6ecdde(0x47a),
        0x14: _0x6ecdde(0x254),
        0x15: 'u&#829;&#851;',
        0x16: _0x6ecdde(0x386),
        0x17: _0x6ecdde(0x4a7),
        0x18: _0x6ecdde(0x506),
        0x19: _0x6ecdde(0x4ec),
        0x1a: _0x6ecdde(0x32),
        0x1b: _0x6ecdde(0x2d6),
        0x1c: _0x6ecdde(0xb1),
        0x1d: _0x6ecdde(0x11e),
        0x1e: _0x6ecdde(0x418),
        0x1f: 'E&#829;&#851;',
        0x20: _0x6ecdde(0x4d8),
        0x21: _0x6ecdde(0x31c),
        0x22: 'H&#829;&#851;',
        0x23: 'I&#829;&#851;',
        0x24: _0x6ecdde(0x4ef),
        0x25: _0x6ecdde(0x3b5),
        0x26: _0x6ecdde(0x19a),
        0x27: _0x6ecdde(0x375),
        0x28: _0x6ecdde(0x438),
        0x29: 'O&#829;&#851;',
        0x2a: _0x6ecdde(0x5e),
        0x2b: _0x6ecdde(0xac),
        0x2c: _0x6ecdde(0x1ad),
        0x2d: _0x6ecdde(0x390),
        0x2e: 'T&#829;&#851;',
        0x2f: _0x6ecdde(0x4ce),
        0x30: _0x6ecdde(0x48b),
        0x31: 'W&#829;&#851;',
        0x32: 'X&#829;&#851;',
        0x33: _0x6ecdde(0xc1),
        0x34: 'Z&#829;&#851;',
        0x35: _0x6ecdde(0x124),
        0x36: _0x6ecdde(0x42a),
        0x37: _0x6ecdde(0x19b),
        0x38: _0x6ecdde(0x1c5),
        0x39: _0x6ecdde(0x4f0),
        0x3a: _0x6ecdde(0x1f5),
        0x3b: _0x6ecdde(0x10b),
        0x3c: _0x6ecdde(0x4b3),
        0x3d: '9&#829;&#851;',
        0x3e: _0x6ecdde(0x1a8)
    },
    's29': {
        0x1: '&#120458;&#823;',
        0x2: '&#120459;&#823;',
        0x3: _0x6ecdde(0x4a2),
        0x4: _0x6ecdde(0x1f0),
        0x5: _0x6ecdde(0x12d),
        0x6: _0x6ecdde(0x47),
        0x7: _0x6ecdde(0x58),
        0x8: _0x6ecdde(0x93),
        0x9: _0x6ecdde(0x19c),
        0xa: _0x6ecdde(0xd6),
        0xb: _0x6ecdde(0x419),
        0xc: '&#120469;&#823;',
        0xd: '&#120470;&#823;',
        0xe: _0x6ecdde(0x166),
        0xf: _0x6ecdde(0x4c3),
        0x10: '&#120473;&#823;',
        0x11: _0x6ecdde(0x358),
        0x12: _0x6ecdde(0x3f1),
        0x13: _0x6ecdde(0x3d7),
        0x14: '&#120477;&#823;',
        0x15: _0x6ecdde(0x3ff),
        0x16: _0x6ecdde(0x44d),
        0x17: '&#120480;&#823;',
        0x18: _0x6ecdde(0x3da),
        0x19: '&#120482;&#823;',
        0x1a: _0x6ecdde(0x4a8),
        0x1b: _0x6ecdde(0x16),
        0x1c: _0x6ecdde(0xbe),
        0x1d: _0x6ecdde(0x101),
        0x1e: _0x6ecdde(0x363),
        0x1f: _0x6ecdde(0x4a6),
        0x20: _0x6ecdde(0x449),
        0x21: _0x6ecdde(0x14e),
        0x22: _0x6ecdde(0x12a),
        0x23: '&#120440;&#823;',
        0x24: _0x6ecdde(0x159),
        0x25: _0x6ecdde(0x29a),
        0x26: _0x6ecdde(0x72),
        0x27: _0x6ecdde(0x21c),
        0x28: '&#120445;&#823;',
        0x29: '&#120446;&#823;',
        0x2a: _0x6ecdde(0xfd),
        0x2b: '&#120448;&#823;',
        0x2c: '&#120449;&#823;',
        0x2d: _0x6ecdde(0x100),
        0x2e: '&#120451;&#823;',
        0x2f: '&#120452;&#823;',
        0x30: '&#120453;&#823;',
        0x31: _0x6ecdde(0x341),
        0x32: _0x6ecdde(0x66),
        0x33: '&#120456;&#823;',
        0x34: _0x6ecdde(0x371),
        0x35: _0x6ecdde(0x1fd),
        0x36: _0x6ecdde(0x29e),
        0x37: _0x6ecdde(0x56),
        0x38: '&#120826;&#823;',
        0x39: _0x6ecdde(0x143),
        0x3a: _0x6ecdde(0x172),
        0x3b: _0x6ecdde(0x38),
        0x3c: _0x6ecdde(0x91),
        0x3d: _0x6ecdde(0x3),
        0x3e: _0x6ecdde(0x74)
    },
    's30': {
        0x1: _0x6ecdde(0x460),
        0x2: _0x6ecdde(0x287),
        0x3: _0x6ecdde(0x14),
        0x4: 'd&#866;',
        0x5: _0x6ecdde(0x35a),
        0x6: _0x6ecdde(0x383),
        0x7: _0x6ecdde(0x1c4),
        0x8: _0x6ecdde(0x4c7),
        0x9: _0x6ecdde(0x4bc),
        0xa: _0x6ecdde(0x45),
        0xb: _0x6ecdde(0x335),
        0xc: 'l&#866;',
        0xd: _0x6ecdde(0x4a5),
        0xe: _0x6ecdde(0x40e),
        0xf: _0x6ecdde(0x4e9),
        0x10: _0x6ecdde(0x414),
        0x11: _0x6ecdde(0x342),
        0x12: _0x6ecdde(0x186),
        0x13: 's&#866;',
        0x14: _0x6ecdde(0x52),
        0x15: _0x6ecdde(0x285),
        0x16: 'v&#866;',
        0x17: _0x6ecdde(0x3c1),
        0x18: _0x6ecdde(0x4ea),
        0x19: _0x6ecdde(0x34d),
        0x1a: _0x6ecdde(0x4c1),
        0x1b: 'A&#866;',
        0x1c: _0x6ecdde(0x509),
        0x1d: _0x6ecdde(0x10),
        0x1e: _0x6ecdde(0xff),
        0x1f: 'E&#866;',
        0x20: 'F&#866;',
        0x21: _0x6ecdde(0x3ee),
        0x22: 'H&#866;',
        0x23: _0x6ecdde(0x22b),
        0x24: _0x6ecdde(0xd2),
        0x25: _0x6ecdde(0x327),
        0x26: _0x6ecdde(0x9a),
        0x27: 'M&#866;',
        0x28: _0x6ecdde(0x3ce),
        0x29: _0x6ecdde(0x4aa),
        0x2a: 'P&#866;',
        0x2b: _0x6ecdde(0x192),
        0x2c: _0x6ecdde(0x156),
        0x2d: _0x6ecdde(0xf9),
        0x2e: _0x6ecdde(0x437),
        0x2f: _0x6ecdde(0x514),
        0x30: _0x6ecdde(0x2de),
        0x31: _0x6ecdde(0x2ec),
        0x32: 'X&#866;',
        0x33: _0x6ecdde(0x97),
        0x34: _0x6ecdde(0x1bb),
        0x35: _0x6ecdde(0x37b),
        0x36: _0x6ecdde(0x42d),
        0x37: _0x6ecdde(0x3a4),
        0x38: _0x6ecdde(0x445),
        0x39: _0x6ecdde(0xc6),
        0x3a: _0x6ecdde(0x348),
        0x3b: '7&#866;',
        0x3c: _0x6ecdde(0x4de),
        0x3d: _0x6ecdde(0x25e),
        0x3e: _0x6ecdde(0x1da)
    },
    's31': {
        0x1: 'a&#828;',
        0x2: _0x6ecdde(0x32f),
        0x3: _0x6ecdde(0x433),
        0x4: _0x6ecdde(0x475),
        0x5: _0x6ecdde(0x3f5),
        0x6: _0x6ecdde(0x80),
        0x7: _0x6ecdde(0x2be),
        0x8: _0x6ecdde(0x2ba),
        0x9: _0x6ecdde(0x43b),
        0xa: _0x6ecdde(0x346),
        0xb: _0x6ecdde(0x3f9),
        0xc: _0x6ecdde(0x2d),
        0xd: _0x6ecdde(0x38b),
        0xe: _0x6ecdde(0x278),
        0xf: 'o&#828;',
        0x10: _0x6ecdde(0x27b),
        0x11: _0x6ecdde(0x1cb),
        0x12: _0x6ecdde(0x137),
        0x13: 's&#828;',
        0x14: _0x6ecdde(0x50a),
        0x15: _0x6ecdde(0x427),
        0x16: 'v&#828;',
        0x17: _0x6ecdde(0x237),
        0x18: 'x&#828;',
        0x19: _0x6ecdde(0x1b0),
        0x1a: _0x6ecdde(0x20),
        0x1b: _0x6ecdde(0x5),
        0x1c: _0x6ecdde(0xb2),
        0x1d: _0x6ecdde(0x161),
        0x1e: _0x6ecdde(0x423),
        0x1f: 'E&#828;',
        0x20: _0x6ecdde(0x3fb),
        0x21: 'G&#828;',
        0x22: 'H&#828;',
        0x23: 'I&#828;',
        0x24: _0x6ecdde(0x43d),
        0x25: _0x6ecdde(0x26c),
        0x26: _0x6ecdde(0x223),
        0x27: _0x6ecdde(0x73),
        0x28: _0x6ecdde(0x2f7),
        0x29: _0x6ecdde(0x2a5),
        0x2a: _0x6ecdde(0x2e3),
        0x2b: 'Q&#828;',
        0x2c: 'R&#828;',
        0x2d: _0x6ecdde(0x37e),
        0x2e: _0x6ecdde(0x356),
        0x2f: _0x6ecdde(0x119),
        0x30: _0x6ecdde(0x20b),
        0x31: 'W&#828;',
        0x32: _0x6ecdde(0x1),
        0x33: _0x6ecdde(0xa3),
        0x34: _0x6ecdde(0x23a),
        0x35: _0x6ecdde(0x1a9),
        0x36: _0x6ecdde(0x491),
        0x37: _0x6ecdde(0x40b),
        0x38: '4&#828;',
        0x39: _0x6ecdde(0x148),
        0x3a: _0x6ecdde(0x3eb),
        0x3b: '7&#828;',
        0x3c: _0x6ecdde(0x309),
        0x3d: '9&#828;',
        0x3e: _0x6ecdde(0x37a)
    }
};

function Change(_0x4f504b, _0x653280) {
    var _0x1d5046 = _0x6ecdde,
        _0x24a255 = '',
        _0x4f504b = _0x4f504b;
    if (_0x4f504b[_0x1d5046(0x4d3)] == 0x0) return;
    for (i = 0x0; i < _0x4f504b[_0x1d5046(0x4d3)]; i++) {
        var _0x12292d = _0x4f504b[_0x1d5046(0x22)](i),
            _0x4e5e33 = normal[_0x1d5046(0x4fe)](_0x12292d) + 0x1;
        if (_0x12292d == '\x20') _0x24a255 += '\x20';
        else !_0x4e5e33 ? _0x24a255 += _0x12292d : _0x24a255 += newtext[_0x653280][_0x4e5e33];
    }
    return _0x24a255;
}
const futureAlienCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'ᗩ',
        'b': 'ᗷ',
        'c': 'ᑢ',
        'd': 'ᕲ',
        'e': 'ᘿ',
        'f': 'ᖴ',
        'g': 'ᘜ',
        'h': 'ᕼ',
        'i': 'ᓰ',
        'j': 'ᒚ',
        'k': 'ᖽᐸ',
        'l': 'ᒪ',
        'm': 'ᘻ',
        'n': 'ᘉ',
        'o': 'ᓍ',
        'p': 'ᕵ',
        'q': 'ᕴ',
        'r': 'ᖇ',
        's': 'S',
        't': 'ᖶ',
        'u': 'ᑘ',
        'v': 'ᐺ',
        'w': 'ᘺ',
        'x': '᙭',
        'y': 'ᖻ',
        'z': 'ᗱ',
        'A': 'ᗩ',
        'B': 'ᗷ',
        'C': 'ᑢ',
        'D': 'ᕲ',
        'E': 'ᘿ',
        'F': 'ᖴ',
        'G': 'ᘜ',
        'H': 'ᕼ',
        'I': 'ᓰ',
        'J': 'ᒚ',
        'K': 'ᖽᐸ',
        'L': 'ᒪ',
        'M': 'ᘻ',
        'N': 'ᘉ',
        'O': 'ᓍ',
        'P': 'ᕵ',
        'Q': 'ᕴ',
        'R': 'ᖇ',
        'S': 'S',
        'T': 'ᖶ',
        'U': 'ᑘ',
        'V': 'ᐺ',
        'W': 'ᘺ',
        'X': '᙭',
        'Y': 'ᖻ',
        'Z': 'ᗱ'
    },
    squiggle6CharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'ค',
        'b': '๖',
        'c': '¢',
        'd': '໓',
        'e': 'ē',
        'f': 'f',
        'g': 'ງ',
        'h': 'h',
        'i': 'i',
        'j': 'ว',
        'k': 'k',
        'l': 'l',
        'm': '๓',
        'n': 'ຖ',
        'o': '໐',
        'p': 'p',
        'q': '๑',
        'r': 'r',
        's': 'Ş',
        't': 't',
        'u': 'น',
        'v': 'ง',
        'w': 'ຟ',
        'x': 'x',
        'y': 'ฯ',
        'z': 'ຊ',
        'A': 'ค',
        'B': '๖',
        'C': '¢',
        'D': '໓',
        'E': 'ē',
        'F': 'f',
        'G': 'ງ',
        'H': 'h',
        'I': 'i',
        'J': 'ว',
        'K': 'k',
        'L': 'l',
        'M': '๓',
        'N': 'ຖ',
        'O': '໐',
        'P': 'p',
        'Q': '๑',
        'R': 'r',
        'S': 'Ş',
        'T': 't',
        'U': 'น',
        'V': 'ง',
        'W': 'ຟ',
        'X': 'x',
        'Y': 'ฯ',
        'Z': 'ຊ'
    },
    squiggle5CharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'ą',
        'b': 'ც',
        'c': 'ƈ',
        'd': 'ɖ',
        'e': 'ɛ',
        'f': 'ʄ',
        'g': 'ɠ',
        'h': 'ɧ',
        'i': 'ı',
        'j': 'ʝ',
        'k': 'ƙ',
        'l': 'Ɩ',
        'm': 'ɱ',
        'n': 'ŋ',
        'o': 'ơ',
        'p': '℘',
        'q': 'զ',
        'r': 'ཞ',
        's': 'ʂ',
        't': 'ɬ',
        'u': 'ų',
        'v': '۷',
        'w': 'ῳ',
        'x': 'ҳ',
        'y': 'ყ',
        'z': 'ʑ',
        'A': 'ą',
        'B': 'ც',
        'C': 'ƈ',
        'D': 'ɖ',
        'E': 'ɛ',
        'F': 'ʄ',
        'G': 'ɠ',
        'H': 'ɧ',
        'I': 'ı',
        'J': 'ʝ',
        'K': 'ƙ',
        'L': 'Ɩ',
        'M': 'ɱ',
        'N': 'ŋ',
        'O': 'ơ',
        'P': '℘',
        'Q': 'զ',
        'R': 'ཞ',
        'S': 'ʂ',
        'T': 'ɬ',
        'U': 'ų',
        'V': '۷',
        'W': 'ῳ',
        'X': 'ҳ',
        'Y': 'ყ',
        'Z': 'ʑ'
    },
    asianStyle2CharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'ﾑ',
        'b': '乃',
        'c': 'ᄃ',
        'd': 'り',
        'e': '乇',
        'f': 'ｷ',
        'g': 'ム',
        'h': 'ん',
        'i': 'ﾉ',
        'j': 'ﾌ',
        'k': 'ズ',
        'l': 'ﾚ',
        'm': 'ﾶ',
        'n': '刀',
        'o': 'の',
        'p': 'ｱ',
        'q': 'ゐ',
        'r': '尺',
        's': '丂',
        't': 'ｲ',
        'u': 'ひ',
        'v': '√',
        'w': 'W',
        'x': 'ﾒ',
        'y': 'ﾘ',
        'z': '乙',
        'A': 'ﾑ',
        'B': '乃',
        'C': 'ᄃ',
        'D': 'り',
        'E': '乇',
        'F': 'ｷ',
        'G': 'ム',
        'H': 'ん',
        'I': 'ﾉ',
        'J': 'ﾌ',
        'K': 'ズ',
        'L': 'ﾚ',
        'M': 'ﾶ',
        'N': '刀',
        'O': 'の',
        'P': 'ｱ',
        'Q': 'ゐ',
        'R': '尺',
        'S': '丂',
        'T': 'ｲ',
        'U': 'ひ',
        'V': '√',
        'W': 'W',
        'X': 'ﾒ',
        'Y': 'ﾘ',
        'Z': '乙'
    },
    asianStyleCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': '卂',
        'b': '乃',
        'c': '匚',
        'd': 'ᗪ',
        'e': '乇',
        'f': '千',
        'g': 'Ꮆ',
        'h': '卄',
        'i': '丨',
        'j': 'ﾌ',
        'k': 'Ҝ',
        'l': 'ㄥ',
        'm': '爪',
        'n': '几',
        'o': 'ㄖ',
        'p': '卩',
        'q': 'Ɋ',
        'r': '尺',
        's': '丂',
        't': 'ㄒ',
        'u': 'ㄩ',
        'v': 'ᐯ',
        'w': '山',
        'x': '乂',
        'y': 'ㄚ',
        'z': '乙',
        'A': '卂',
        'B': '乃',
        'C': '匚',
        'D': 'ᗪ',
        'E': '乇',
        'F': '千',
        'G': 'Ꮆ',
        'H': '卄',
        'I': '丨',
        'J': 'ﾌ',
        'K': 'Ҝ',
        'L': 'ㄥ',
        'M': '爪',
        'N': '几',
        'O': 'ㄖ',
        'P': '卩',
        'Q': 'Ɋ',
        'R': '尺',
        'S': '丂',
        'T': 'ㄒ',
        'U': 'ㄩ',
        'V': 'ᐯ',
        'W': '山',
        'X': '乂',
        'Y': 'ㄚ',
        'Z': '乙'
    },
    squaresCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': '🄰',
        'b': '🄱',
        'c': '🄲',
        'd': '🄳',
        'e': '🄴',
        'f': '🄵',
        'g': '🄶',
        'h': '🄷',
        'i': '🄸',
        'j': '🄹',
        'k': '🄺',
        'l': '🄻',
        'm': '🄼',
        'n': '🄽',
        'o': '🄾',
        'p': '🄿',
        'q': '🅀',
        'r': '🅁',
        's': '🅂',
        't': '🅃',
        'u': '🅄',
        'v': '🅅',
        'w': '🅆',
        'x': '🅇',
        'y': '🅈',
        'z': '🅉',
        'A': '🄰',
        'B': '🄱',
        'C': '🄲',
        'D': '🄳',
        'E': '🄴',
        'F': '🄵',
        'G': '🄶',
        'H': '🄷',
        'I': '🄸',
        'J': '🄹',
        'K': '🄺',
        'L': '🄻',
        'M': '🄼',
        'N': '🄽',
        'O': '🄾',
        'P': '🄿',
        'Q': '🅀',
        'R': '🅁',
        'S': '🅂',
        'T': '🅃',
        'U': '🅄',
        'V': '🅅',
        'W': '🅆',
        'X': '🅇',
        'Y': '🅈',
        'Z': '🅉'
    },
    squiggle4CharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'Ꮧ',
        'b': 'Ᏸ',
        'c': 'ፈ',
        'd': 'Ꮄ',
        'e': 'Ꮛ',
        'f': 'Ꭶ',
        'g': 'Ꮆ',
        'h': 'Ꮒ',
        'i': 'Ꭵ',
        'j': 'Ꮰ',
        'k': 'Ꮶ',
        'l': 'Ꮭ',
        'm': 'Ꮇ',
        'n': 'Ꮑ',
        'o': 'Ꭷ',
        'p': 'Ꭾ',
        'q': 'Ꭴ',
        'r': 'Ꮢ',
        's': 'Ꮥ',
        't': 'Ꮦ',
        'u': 'Ꮼ',
        'v': 'Ꮙ',
        'w': 'Ꮗ',
        'x': 'ጀ',
        'y': 'Ꭹ',
        'z': 'ፚ',
        'A': 'Ꮧ',
        'B': 'Ᏸ',
        'C': 'ፈ',
        'D': 'Ꮄ',
        'E': 'Ꮛ',
        'F': 'Ꭶ',
        'G': 'Ꮆ',
        'H': 'Ꮒ',
        'I': 'Ꭵ',
        'J': 'Ꮰ',
        'K': 'Ꮶ',
        'L': 'Ꮭ',
        'M': 'Ꮇ',
        'N': 'Ꮑ',
        'O': 'Ꭷ',
        'P': 'Ꭾ',
        'Q': 'Ꭴ',
        'R': 'Ꮢ',
        'S': 'Ꮥ',
        'T': 'Ꮦ',
        'U': 'Ꮼ',
        'V': 'Ꮙ',
        'W': 'Ꮗ',
        'X': 'ጀ',
        'Y': 'Ꭹ',
        'Z': 'ፚ'
    },
    neonCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'ᗩ',
        'b': 'ᗷ',
        'c': 'ᑕ',
        'd': 'ᗪ',
        'e': 'E',
        'f': 'ᖴ',
        'g': 'G',
        'h': 'ᕼ',
        'i': 'I',
        'j': 'ᒍ',
        'k': 'K',
        'l': 'ᒪ',
        'm': 'ᗰ',
        'n': 'ᑎ',
        'o': 'O',
        'p': 'ᑭ',
        'q': 'ᑫ',
        'r': 'ᖇ',
        's': 'ᔕ',
        't': 'T',
        'u': 'ᑌ',
        'v': 'ᐯ',
        'w': 'ᗯ',
        'x': '᙭',
        'y': 'Y',
        'z': 'ᘔ',
        'A': 'ᗩ',
        'B': 'ᗷ',
        'C': 'ᑕ',
        'D': 'ᗪ',
        'E': 'E',
        'F': 'ᖴ',
        'G': 'G',
        'H': 'ᕼ',
        'I': 'I',
        'J': 'ᒍ',
        'K': 'K',
        'L': 'ᒪ',
        'M': 'ᗰ',
        'N': 'ᑎ',
        'O': 'O',
        'P': 'ᑭ',
        'Q': 'ᑫ',
        'R': 'ᖇ',
        'S': 'ᔕ',
        'T': 'T',
        'U': 'ᑌ',
        'V': 'ᐯ',
        'W': 'ᗯ',
        'X': '᙭',
        'Y': 'Y',
        'Z': 'ᘔ'
    },
    squiggle3CharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'ǟ',
        'b': 'ɮ',
        'c': 'ƈ',
        'd': 'ɖ',
        'e': 'ɛ',
        'f': 'ʄ',
        'g': 'ɢ',
        'h': 'ɦ',
        'i': 'ɨ',
        'j': 'ʝ',
        'k': 'ӄ',
        'l': 'ʟ',
        'm': 'ʍ',
        'n': 'ռ',
        'o': 'օ',
        'p': 'ք',
        'q': 'զ',
        'r': 'ʀ',
        's': 'ֆ',
        't': 'ȶ',
        'u': 'ʊ',
        'v': 'ʋ',
        'w': 'ա',
        'x': 'Ӽ',
        'y': 'ʏ',
        'z': 'ʐ',
        'A': 'ǟ',
        'B': 'ɮ',
        'C': 'ƈ',
        'D': 'ɖ',
        'E': 'ɛ',
        'F': 'ʄ',
        'G': 'ɢ',
        'H': 'ɦ',
        'I': 'ɨ',
        'J': 'ʝ',
        'K': 'ӄ',
        'L': 'ʟ',
        'M': 'ʍ',
        'N': 'ռ',
        'O': 'օ',
        'P': 'ք',
        'Q': 'զ',
        'R': 'ʀ',
        'S': 'ֆ',
        'T': 'ȶ',
        'U': 'ʊ',
        'V': 'ʋ',
        'W': 'ա',
        'X': 'Ӽ',
        'Y': 'ʏ',
        'Z': 'ʐ'
    },
    monospaceCharMap = {
        0x0: '𝟶',
        0x1: '𝟷',
        0x2: '𝟸',
        0x3: '𝟹',
        0x4: '𝟺',
        0x5: '𝟻',
        0x6: '𝟼',
        0x7: '𝟽',
        0x8: '𝟾',
        0x9: '𝟿',
        'a': '𝚊',
        'b': '𝚋',
        'c': '𝚌',
        'd': '𝚍',
        'e': '𝚎',
        'f': '𝚏',
        'g': '𝚐',
        'h': '𝚑',
        'i': '𝚒',
        'j': '𝚓',
        'k': '𝚔',
        'l': '𝚕',
        'm': '𝚖',
        'n': '𝚗',
        'o': '𝚘',
        'p': '𝚙',
        'q': '𝚚',
        'r': '𝚛',
        's': '𝚜',
        't': '𝚝',
        'u': '𝚞',
        'v': '𝚟',
        'w': '𝚠',
        'x': '𝚡',
        'y': '𝚢',
        'z': '𝚣',
        'A': '𝙰',
        'B': '𝙱',
        'C': '𝙲',
        'D': '𝙳',
        'E': '𝙴',
        'F': '𝙵',
        'G': '𝙶',
        'H': '𝙷',
        'I': '𝙸',
        'J': '𝙹',
        'K': '𝙺',
        'L': '𝙻',
        'M': '𝙼',
        'N': '𝙽',
        'O': '𝙾',
        'P': '𝙿',
        'Q': '𝚀',
        'R': '𝚁',
        'S': '𝚂',
        'T': '𝚃',
        'U': '𝚄',
        'V': '𝚅',
        'W': '𝚆',
        'X': '𝚇',
        'Y': '𝚈',
        'Z': '𝚉'
    },
    boldItalicCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': '𝙖',
        'b': '𝙗',
        'c': '𝙘',
        'd': '𝙙',
        'e': '𝙚',
        'f': '𝙛',
        'g': '𝙜',
        'h': '𝙝',
        'i': '𝙞',
        'j': '𝙟',
        'k': '𝙠',
        'l': '𝙡',
        'm': '𝙢',
        'n': '𝙣',
        'o': '𝙤',
        'p': '𝙥',
        'q': '𝙦',
        'r': '𝙧',
        's': '𝙨',
        't': '𝙩',
        'u': '𝙪',
        'v': '𝙫',
        'w': '𝙬',
        'x': '𝙭',
        'y': '𝙮',
        'z': '𝙯',
        'A': '𝘼',
        'B': '𝘽',
        'C': '𝘾',
        'D': '𝘿',
        'E': '𝙀',
        'F': '𝙁',
        'G': '𝙂',
        'H': '𝙃',
        'I': '𝙄',
        'J': '𝙅',
        'K': '𝙆',
        'L': '𝙇',
        'M': '𝙈',
        'N': '𝙉',
        'O': '𝙊',
        'P': '𝙋',
        'Q': '𝙌',
        'R': '𝙍',
        'S': '𝙎',
        'T': '𝙏',
        'U': '𝙐',
        'V': '𝙑',
        'W': '𝙒',
        'X': '𝙓',
        'Y': '𝙔',
        'Z': '𝙕'
    },
    boldCharMap = {
        0x0: '𝟎',
        0x1: '𝟏',
        0x2: '𝟐',
        0x3: '𝟑',
        0x4: '𝟒',
        0x5: '𝟓',
        0x6: '𝟔',
        0x7: '𝟕',
        0x8: '𝟖',
        0x9: '𝟗',
        'a': '𝐚',
        'b': '𝐛',
        'c': '𝐜',
        'd': '𝐝',
        'e': '𝐞',
        'f': '𝐟',
        'g': '𝐠',
        'h': '𝐡',
        'i': '𝐢',
        'j': '𝐣',
        'k': '𝐤',
        'l': '𝐥',
        'm': '𝐦',
        'n': '𝐧',
        'o': '𝐨',
        'p': '𝐩',
        'q': '𝐪',
        'r': '𝐫',
        's': '𝐬',
        't': '𝐭',
        'u': '𝐮',
        'v': '𝐯',
        'w': '𝐰',
        'x': '𝐱',
        'y': '𝐲',
        'z': '𝐳',
        'A': '𝐀',
        'B': '𝐁',
        'C': '𝐂',
        'D': '𝐃',
        'E': '𝐄',
        'F': '𝐅',
        'G': '𝐆',
        'H': '𝐇',
        'I': '𝐈',
        'J': '𝐉',
        'K': '𝐊',
        'L': '𝐋',
        'M': '𝐌',
        'N': '𝐍',
        'O': '𝐎',
        'P': '𝐏',
        'Q': '𝐐',
        'R': '𝐑',
        'S': '𝐒',
        'T': '𝐓',
        'U': '𝐔',
        'V': '𝐕',
        'W': '𝐖',
        'X': '𝐗',
        'Y': '𝐘',
        'Z': '𝐙'
    },
    italicCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': '𝘢',
        'b': '𝘣',
        'c': '𝘤',
        'd': '𝘥',
        'e': '𝘦',
        'f': '𝘧',
        'g': '𝘨',
        'h': '𝘩',
        'i': '𝘪',
        'j': '𝘫',
        'k': '𝘬',
        'l': '𝘭',
        'm': '𝘮',
        'n': '𝘯',
        'o': '𝘰',
        'p': '𝘱',
        'q': '𝘲',
        'r': '𝘳',
        's': '𝘴',
        't': '𝘵',
        'u': '𝘶',
        'v': '𝘷',
        'w': '𝘸',
        'x': '𝘹',
        'y': '𝘺',
        'z': '𝘻',
        'A': '𝘈',
        'B': '𝘉',
        'C': '𝘊',
        'D': '𝘋',
        'E': '𝘌',
        'F': '𝘍',
        'G': '𝘎',
        'H': '𝘏',
        'I': '𝘐',
        'J': '𝘑',
        'K': '𝘒',
        'L': '𝘓',
        'M': '𝘔',
        'N': '𝘕',
        'O': '𝘖',
        'P': '𝘗',
        'Q': '𝘘',
        'R': '𝘙',
        'S': '𝘚',
        'T': '𝘛',
        'U': '𝘜',
        'V': '𝘝',
        'W': '𝘞',
        'X': '𝘟',
        'Y': '𝘠',
        'Z': '𝘡'
    },
    squiggle2CharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'α',
        'b': 'Ⴆ',
        'c': 'ƈ',
        'd': 'ԃ',
        'e': 'ҽ',
        'f': 'ϝ',
        'g': 'ɠ',
        'h': 'ԋ',
        'i': 'ι',
        'j': 'ʝ',
        'k': 'ƙ',
        'l': 'ʅ',
        'm': 'ɱ',
        'n': 'ɳ',
        'o': 'σ',
        'p': 'ρ',
        'q': 'ϙ',
        'r': 'ɾ',
        's': 'ʂ',
        't': 'ƚ',
        'u': 'υ',
        'v': 'ʋ',
        'w': 'ɯ',
        'x': 'x',
        'y': 'ყ',
        'z': 'ȥ',
        'A': 'A',
        'B': 'B',
        'C': 'C',
        'D': 'D',
        'E': 'E',
        'F': 'F',
        'G': 'G',
        'H': 'H',
        'I': 'I',
        'J': 'J',
        'K': 'K',
        'L': 'L',
        'M': 'M',
        'N': 'N',
        'O': 'O',
        'P': 'P',
        'Q': 'Q',
        'R': 'R',
        'S': 'S',
        'T': 'T',
        'U': 'U',
        'V': 'V',
        'W': 'W',
        'X': 'X',
        'Y': 'Y',
        'Z': 'Z'
    },
    currencyCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': '₳',
        'b': '฿',
        'c': '₵',
        'd': 'Đ',
        'e': 'Ɇ',
        'f': '₣',
        'g': '₲',
        'h': 'Ⱨ',
        'i': 'ł',
        'j': 'J',
        'k': '₭',
        'l': 'Ⱡ',
        'm': '₥',
        'n': '₦',
        'o': 'Ø',
        'p': '₱',
        'q': 'Q',
        'r': 'Ɽ',
        's': '₴',
        't': '₮',
        'u': 'Ʉ',
        'v': 'V',
        'w': '₩',
        'x': 'Ӿ',
        'y': 'Ɏ',
        'z': 'Ⱬ',
        'A': '₳',
        'B': '฿',
        'C': '₵',
        'D': 'Đ',
        'E': 'Ɇ',
        'F': '₣',
        'G': '₲',
        'H': 'Ⱨ',
        'I': 'ł',
        'J': 'J',
        'K': '₭',
        'L': 'Ⱡ',
        'M': '₥',
        'N': '₦',
        'O': 'Ø',
        'P': '₱',
        'Q': 'Q',
        'R': 'Ɽ',
        'S': '₴',
        'T': '₮',
        'U': 'Ʉ',
        'V': 'V',
        'W': '₩',
        'X': 'Ӿ',
        'Y': 'Ɏ',
        'Z': 'Ⱬ'
    },
    symbolsCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'å',
        'b': 'ß',
        'c': '¢',
        'd': 'Ð',
        'e': 'ê',
        'f': '£',
        'g': 'g',
        'h': 'h',
        'i': 'ï',
        'j': 'j',
        'k': 'k',
        'l': 'l',
        'm': 'm',
        'n': 'ñ',
        'o': 'ð',
        'p': 'þ',
        'q': 'q',
        'r': 'r',
        's': '§',
        't': '†',
        'u': 'µ',
        'v': 'v',
        'w': 'w',
        'x': 'x',
        'y': '¥',
        'z': 'z',
        'A': 'Ä',
        'B': 'ß',
        'C': 'Ç',
        'D': 'Ð',
        'E': 'È',
        'F': '£',
        'G': 'G',
        'H': 'H',
        'I': 'Ì',
        'J': 'J',
        'K': 'K',
        'L': 'L',
        'M': 'M',
        'N': 'ñ',
        'O': 'Ö',
        'P': 'þ',
        'Q': 'Q',
        'R': 'R',
        'S': '§',
        'T': '†',
        'U': 'Ú',
        'V': 'V',
        'W': 'W',
        'X': '×',
        'Y': '¥',
        'Z': 'Z'
    },
    greekCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'α',
        'b': 'в',
        'c': '¢',
        'd': '∂',
        'e': 'є',
        'f': 'ƒ',
        'g': 'g',
        'h': 'н',
        'i': 'ι',
        'j': 'נ',
        'k': 'к',
        'l': 'ℓ',
        'm': 'м',
        'n': 'η',
        'o': 'σ',
        'p': 'ρ',
        'q': 'q',
        'r': 'я',
        's': 'ѕ',
        't': 'т',
        'u': 'υ',
        'v': 'ν',
        'w': 'ω',
        'x': 'χ',
        'y': 'у',
        'z': 'z',
        'A': 'α',
        'B': 'в',
        'C': '¢',
        'D': '∂',
        'E': 'є',
        'F': 'ƒ',
        'G': 'g',
        'H': 'н',
        'I': 'ι',
        'J': 'נ',
        'K': 'к',
        'L': 'ℓ',
        'M': 'м',
        'N': 'η',
        'O': 'σ',
        'P': 'ρ',
        'Q': 'q',
        'R': 'я',
        'S': 'ѕ',
        'T': 'т',
        'U': 'υ',
        'V': 'ν',
        'W': 'ω',
        'X': 'χ',
        'Y': 'у',
        'Z': 'z'
    },
    bentTextCharMap = {
        0x0: '⊘',
        0x1: '𝟙',
        0x2: 'ϩ',
        0x3: 'Ӡ',
        0x4: '५',
        0x5: 'Ƽ',
        0x6: 'Ϭ',
        0x7: '7',
        0x8: '𝟠',
        0x9: '९',
        'a': 'ą',
        'b': 'ҍ',
        'c': 'ç',
        'd': 'ժ',
        'e': 'ҽ',
        'f': 'ƒ',
        'g': 'ց',
        'h': 'հ',
        'i': 'ì',
        'j': 'ʝ',
        'k': 'ҟ',
        'l': 'Ӏ',
        'm': 'ʍ',
        'n': 'ղ',
        'o': 'օ',
        'p': 'ք',
        'q': 'զ',
        'r': 'ɾ',
        's': 'ʂ',
        't': 'է',
        'u': 'մ',
        'v': 'ѵ',
        'w': 'ա',
        'x': '×',
        'y': 'վ',
        'z': 'Հ',
        'A': 'Ⱥ',
        'B': 'β',
        'C': '↻',
        'D': 'Ꭰ',
        'E': 'Ɛ',
        'F': 'Ƒ',
        'G': 'Ɠ',
        'H': 'Ƕ',
        'I': 'į',
        'J': 'ل',
        'K': 'Ҡ',
        'L': 'Ꝉ',
        'M': 'Ɱ',
        'N': 'ហ',
        'O': 'ට',
        'P': 'φ',
        'Q': 'Ҩ',
        'R': 'འ',
        'S': 'Ϛ',
        'T': 'Ͳ',
        'U': 'Ա',
        'V': 'Ỽ',
        'W': 'చ',
        'X': 'ჯ',
        'Y': 'Ӌ',
        'Z': 'ɀ'
    },
    upperAnglesCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'Λ',
        'b': 'B',
        'c': 'ᄃ',
        'd': 'D',
        'e': 'Σ',
        'f': 'F',
        'g': 'G',
        'h': 'Ή',
        'i': 'I',
        'j': 'J',
        'k': 'K',
        'l': 'ᄂ',
        'm': 'M',
        'n': 'П',
        'o': 'Ө',
        'p': 'P',
        'q': 'Q',
        'r': 'Я',
        's': 'Ƨ',
        't': 'Ƭ',
        'u': 'Ц',
        'v': 'V',
        'w': 'Щ',
        'x': 'X',
        'y': 'Y',
        'z': 'Z',
        'A': 'Λ',
        'B': 'B',
        'C': 'ᄃ',
        'D': 'D',
        'E': 'Σ',
        'F': 'F',
        'G': 'G',
        'H': 'Ή',
        'I': 'I',
        'J': 'J',
        'K': 'K',
        'L': 'ᄂ',
        'M': 'M',
        'N': 'П',
        'O': 'Ө',
        'P': 'P',
        'Q': 'Q',
        'R': 'Я',
        'S': 'Ƨ',
        'T': 'Ƭ',
        'U': 'Ц',
        'V': 'V',
        'W': 'Щ',
        'X': 'X',
        'Y': 'Y',
        'Z': 'Z'
    },
    subscriptCharMap = {
        0x0: '₀',
        0x1: '₁',
        0x2: '₂',
        0x3: '₃',
        0x4: '₄',
        0x5: '₅',
        0x6: '₆',
        0x7: '₇',
        0x8: '₈',
        0x9: '₉',
        'a': 'ₐ',
        'b': 'b',
        'c': 'c',
        'd': 'd',
        'e': 'ₑ',
        'f': 'f',
        'g': 'g',
        'h': 'ₕ',
        'i': 'ᵢ',
        'j': 'ⱼ',
        'k': 'ₖ',
        'l': 'ₗ',
        'm': 'ₘ',
        'n': 'ₙ',
        'o': 'ₒ',
        'p': 'ₚ',
        'q': 'q',
        'r': 'ᵣ',
        's': 'ₛ',
        't': 'ₜ',
        'u': 'ᵤ',
        'v': 'ᵥ',
        'w': 'w',
        'x': 'ₓ',
        'y': 'y',
        'z': 'z',
        'A': 'ₐ',
        'B': 'B',
        'C': 'C',
        'D': 'D',
        'E': 'ₑ',
        'F': 'F',
        'G': 'G',
        'H': 'ₕ',
        'I': 'ᵢ',
        'J': 'ⱼ',
        'K': 'ₖ',
        'L': 'ₗ',
        'M': 'ₘ',
        'N': 'ₙ',
        'O': 'ₒ',
        'P': 'ₚ',
        'Q': 'Q',
        'R': 'ᵣ',
        'S': 'ₛ',
        'T': 'ₜ',
        'U': 'ᵤ',
        'V': 'ᵥ',
        'W': 'W',
        'X': 'ₓ',
        'Y': 'Y',
        'Z': 'Z',
        '+': '₊',
        '-': '₋',
        '=': '₌',
        '(': '₍',
        ')': '₎'
    },
    superscriptCharMap = {
        0x0: '⁰',
        0x1: '¹',
        0x2: '²',
        0x3: '³',
        0x4: '⁴',
        0x5: '⁵',
        0x6: '⁶',
        0x7: '⁷',
        0x8: '⁸',
        0x9: '⁹',
        'a': 'ᵃ',
        'b': 'ᵇ',
        'c': 'ᶜ',
        'd': 'ᵈ',
        'e': 'ᵉ',
        'f': 'ᶠ',
        'g': 'ᵍ',
        'h': 'ʰ',
        'i': 'ⁱ',
        'j': 'ʲ',
        'k': 'ᵏ',
        'l': 'ˡ',
        'm': 'ᵐ',
        'n': 'ⁿ',
        'o': 'ᵒ',
        'p': 'ᵖ',
        'q': 'q',
        'r': 'ʳ',
        's': 'ˢ',
        't': 'ᵗ',
        'u': 'ᵘ',
        'v': 'ᵛ',
        'w': 'ʷ',
        'x': 'ˣ',
        'y': 'ʸ',
        'z': 'ᶻ',
        'A': 'ᴬ',
        'B': 'ᴮ',
        'C': 'ᶜ',
        'D': 'ᴰ',
        'E': 'ᴱ',
        'F': 'ᶠ',
        'G': 'ᴳ',
        'H': 'ᴴ',
        'I': 'ᴵ',
        'J': 'ᴶ',
        'K': 'ᴷ',
        'L': 'ᴸ',
        'M': 'ᴹ',
        'N': 'ᴺ',
        'O': 'ᴼ',
        'P': 'ᴾ',
        'Q': 'Q',
        'R': 'ᴿ',
        'S': 'ˢ',
        'T': 'ᵀ',
        'U': 'ᵁ',
        'V': 'ⱽ',
        'W': 'ᵂ',
        'X': 'ˣ',
        'Y': 'ʸ',
        'Z': 'ᶻ',
        '+': '⁺',
        '-': '⁻',
        '=': '⁼',
        '(': '⁽',
        ')': '⁾'
    },
    squiggleCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': 'ค',
        'b': '๒',
        'c': 'ς',
        'd': '๔',
        'e': 'є',
        'f': 'Ŧ',
        'g': 'ﻮ',
        'h': 'ђ',
        'i': 'เ',
        'j': 'ן',
        'k': 'к',
        'l': 'ɭ',
        'm': '๓',
        'n': 'ภ',
        'o': '๏',
        'p': 'ק',
        'q': 'ợ',
        'r': 'г',
        's': 'ร',
        't': 'Շ',
        'u': 'ย',
        'v': 'ש',
        'w': 'ฬ',
        'x': 'א',
        'y': 'ץ',
        'z': 'չ',
        'A': 'ค',
        'B': '๒',
        'C': 'ς',
        'D': '๔',
        'E': 'є',
        'F': 'Ŧ',
        'G': 'ﻮ',
        'H': 'ђ',
        'I': 'เ',
        'J': 'ן',
        'K': 'к',
        'L': 'ɭ',
        'M': '๓',
        'N': 'ภ',
        'O': '๏',
        'P': 'ק',
        'Q': 'ợ',
        'R': 'г',
        'S': 'ร',
        'T': 'Շ',
        'U': 'ย',
        'V': 'ש',
        'W': 'ฬ',
        'X': 'א',
        'Y': 'ץ',
        'Z': 'չ'
    },
    doubleStruckCharMap = {
        0x0: '𝟘',
        0x1: '𝟙',
        0x2: '𝟚',
        0x3: '𝟛',
        0x4: '𝟜',
        0x5: '𝟝',
        0x6: '𝟞',
        0x7: '𝟟',
        0x8: '𝟠',
        0x9: '𝟡',
        'a': '𝕒',
        'b': '𝕓',
        'c': '𝕔',
        'd': '𝕕',
        'e': '𝕖',
        'f': '𝕗',
        'g': '𝕘',
        'h': '𝕙',
        'i': '𝕚',
        'j': '𝕛',
        'k': '𝕜',
        'l': '𝕝',
        'm': '𝕞',
        'n': '𝕟',
        'o': '𝕠',
        'p': '𝕡',
        'q': '𝕢',
        'r': '𝕣',
        's': '𝕤',
        't': '𝕥',
        'u': '𝕦',
        'v': '𝕧',
        'w': '𝕨',
        'x': '𝕩',
        'y': '𝕪',
        'z': '𝕫',
        'A': '𝔸',
        'B': '𝔹',
        'C': 'ℂ',
        'D': '𝔻',
        'E': '𝔼',
        'F': '𝔽',
        'G': '𝔾',
        'H': 'ℍ',
        'I': '𝕀',
        'J': '𝕁',
        'K': '𝕂',
        'L': '𝕃',
        'M': '𝕄',
        'N': 'ℕ',
        'O': '𝕆',
        'P': 'ℙ',
        'Q': 'ℚ',
        'R': 'ℝ',
        'S': '𝕊',
        'T': '𝕋',
        'U': '𝕌',
        'V': '𝕍',
        'W': '𝕎',
        'X': '𝕏',
        'Y': '𝕐',
        'Z': 'ℤ'
    },
    medievalCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': '𝖆',
        'b': '𝖇',
        'c': '𝖈',
        'd': '𝖉',
        'e': '𝖊',
        'f': '𝖋',
        'g': '𝖌',
        'h': '𝖍',
        'i': '𝖎',
        'j': '𝖏',
        'k': '𝖐',
        'l': '𝖑',
        'm': '𝖒',
        'n': '𝖓',
        'o': '𝖔',
        'p': '𝖕',
        'q': '𝖖',
        'r': '𝖗',
        's': '𝖘',
        't': '𝖙',
        'u': '𝖚',
        'v': '𝖛',
        'w': '𝖜',
        'x': '𝖝',
        'y': '𝖞',
        'z': '𝖟',
        'A': '𝕬',
        'B': '𝕭',
        'C': '𝕮',
        'D': '𝕯',
        'E': '𝕰',
        'F': '𝕱',
        'G': '𝕲',
        'H': '𝕳',
        'I': '𝕴',
        'J': '𝕵',
        'K': '𝕶',
        'L': '𝕷',
        'M': '𝕸',
        'N': '𝕹',
        'O': '𝕺',
        'P': '𝕻',
        'Q': '𝕼',
        'R': '𝕽',
        'S': '𝕾',
        'T': '𝕿',
        'U': '𝖀',
        'V': '𝖁',
        'W': '𝖂',
        'X': '𝖃',
        'Y': '𝖄',
        'Z': '𝖅'
    },
    invertedSquaresCharMap = {
        'q': '🆀',
        'w': '🆆',
        'e': '🅴',
        'r': '🆁',
        't': '🆃',
        'y': '🆈',
        'u': '🆄',
        'i': '🅸',
        'o': '🅾',
        'p': '🅿',
        'a': '🅰',
        's': '🆂',
        'd': '🅳',
        'f': '🅵',
        'g': '🅶',
        'h': '🅷',
        'j': '🅹',
        'k': '🅺',
        'l': '🅻',
        'z': '🆉',
        'x': '🆇',
        'c': '🅲',
        'v': '🆅',
        'b': '🅱',
        'n': '🅽',
        'm': '🅼'
    },
    cursiveCharMap = {
        0x0: '0',
        0x1: '1',
        0x2: '2',
        0x3: '3',
        0x4: '4',
        0x5: '5',
        0x6: '6',
        0x7: '7',
        0x8: '8',
        0x9: '9',
        'a': '𝓪',
        'b': '𝓫',
        'c': '𝓬',
        'd': '𝓭',
        'e': '𝓮',
        'f': '𝓯',
        'g': '𝓰',
        'h': '𝓱',
        'i': '𝓲',
        'j': '𝓳',
        'k': '𝓴',
        'l': '𝓵',
        'm': '𝓶',
        'n': '𝓷',
        'o': '𝓸',
        'p': '𝓹',
        'q': '𝓺',
        'r': '𝓻',
        's': '𝓼',
        't': '𝓽',
        'u': '𝓾',
        'v': '𝓿',
        'w': '𝔀',
        'x': '𝔁',
        'y': '𝔂',
        'z': '𝔃',
        'A': '𝓐',
        'B': '𝓑',
        'C': '𝓒',
        'D': '𝓓',
        'E': '𝓔',
        'F': '𝓕',
        'G': '𝓖',
        'H': '𝓗',
        'I': '𝓘',
        'J': '𝓙',
        'K': '𝓚',
        'L': '𝓛',
        'M': '𝓜',
        'N': '𝓝',
        'O': '𝓞',
        'P': '𝓟',
        'Q': '𝓠',
        'R': '𝓡',
        'S': '𝓢',
        'T': '𝓣',
        'U': '𝓤',
        'V': '𝓥',
        'W': '𝓦',
        'X': '𝓧',
        'Y': '𝓨',
        'Z': '𝓩'
    },
    oldEnglishCharMap = {
        'a': '𝔞',
        'b': '𝔟',
        'c': '𝔠',
        'd': '𝔡',
        'e': '𝔢',
        'f': '𝔣',
        'g': '𝔤',
        'h': '𝔥',
        'i': '𝔦',
        'j': '𝔧',
        'k': '𝔨',
        'l': '𝔩',
        'm': '𝔪',
        'n': '𝔫',
        'o': '𝔬',
        'p': '𝔭',
        'q': '𝔮',
        'r': '𝔯',
        's': '𝔰',
        't': '𝔱',
        'u': '𝔲',
        'v': '𝔳',
        'w': '𝔴',
        'x': '𝔵',
        'y': '𝔶',
        'z': '𝔷',
        'A': '𝔄',
        'B': '𝔅',
        'C': 'ℭ',
        'D': '𝔇',
        'E': '𝔈',
        'F': '𝔉',
        'G': '𝔊',
        'H': 'ℌ',
        'I': 'ℑ',
        'J': '𝔍',
        'K': '𝔎',
        'L': '𝔏',
        'M': '𝔐',
        'N': '𝔑',
        'O': '𝔒',
        'P': '𝔓',
        'Q': '𝔔',
        'R': 'ℜ',
        'S': '𝔖',
        'T': '𝔗',
        'U': '𝔘',
        'V': '𝔙',
        'W': '𝔚',
        'X': '𝔛',
        'Y': '𝔜',
        'Z': 'ℨ'
    },
    wideTextCharMap = {
        '`': '`',
        0x1: '１',
        0x2: '２',
        0x3: '３',
        0x4: '４',
        0x5: '５',
        0x6: '６',
        0x7: '７',
        0x8: '８',
        0x9: '９',
        0x0: '０',
        '-': '－',
        '=': '＝',
        '~': '~',
        '!': '！',
        '@': '＠',
        '#': '＃',
        '$': '＄',
        '%': '％',
        '^': '^',
        '&': '＆',
        '*': '＊',
        '(': '（',
        ')': '）',
        '_': '_',
        '+': '＋',
        'q': 'ｑ',
        'w': 'ｗ',
        'e': 'ｅ',
        'r': 'ｒ',
        't': 'ｔ',
        'y': 'ｙ',
        'u': 'ｕ',
        'i': 'ｉ',
        'o': 'ｏ',
        'p': 'ｐ',
        '[': '[',
        ']': ']',
        '\x5c': '\x5c',
        'Q': 'Ｑ',
        'W': 'Ｗ',
        'E': 'Ｅ',
        'R': 'Ｒ',
        'T': 'Ｔ',
        'Y': 'Ｙ',
        'U': 'Ｕ',
        'I': 'Ｉ',
        'O': 'Ｏ',
        'P': 'Ｐ',
        '{': '{',
        '}': '}',
        '|': '|',
        'a': 'ａ',
        's': 'ｓ',
        'd': 'ｄ',
        'f': 'ｆ',
        'g': 'ｇ',
        'h': 'ｈ',
        'j': 'ｊ',
        'k': 'ｋ',
        'l': 'ｌ',
        ';': '；',
        '\x27': '＇',
        'A': 'Ａ',
        'S': 'Ｓ',
        'D': 'Ｄ',
        'F': 'Ｆ',
        'G': 'Ｇ',
        'H': 'Ｈ',
        'J': 'Ｊ',
        'K': 'Ｋ',
        'L': 'Ｌ',
        ':': '：',
        '\x22': '\x22',
        'z': 'ｚ',
        'x': 'ｘ',
        'c': 'ｃ',
        'v': 'ｖ',
        'b': 'ｂ',
        'n': 'ｎ',
        'm': 'ｍ',
        ',': '，',
        '.': '．',
        '/': '／',
        'Z': 'Ｚ',
        'X': 'Ｘ',
        'C': 'Ｃ',
        'V': 'Ｖ',
        'B': 'Ｂ',
        'N': 'Ｎ',
        'M': 'Ｍ',
        '<': '<',
        '>': '>',
        '?': '？'
    };

function Lunicode() {
    var _0xc89546 = _0x6ecdde;
    this[_0xc89546(0x16b)] = {
        'flip': {
            'init': function() {
                var _0x3a1c17 = _0xc89546;
                for (i in this[_0x3a1c17(0x4df)]) this[_0x3a1c17(0x4df)][this[_0x3a1c17(0x4df)][i]] = i;
            },
            'encode': function(_0x358f4d) {
                var _0x5964cb = _0xc89546;
                for (var _0x6eb714, _0x5e8f02 = [], _0x58b0a1 = 0x0, _0x3d0b6c = _0x358f4d[_0x5964cb(0x4d3)]; _0x3d0b6c > _0x58b0a1; _0x58b0a1++) _0x6eb714 = _0x358f4d['charAt'](_0x58b0a1), _0x58b0a1 > 0x0 && ('̤' == _0x6eb714 || '̗' == _0x6eb714 || '̖' == _0x6eb714 || '̮' == _0x6eb714) ? (_0x6eb714 = this[_0x5964cb(0x4df)][_0x358f4d[_0x5964cb(0x22)](_0x58b0a1 - 0x1) + _0x6eb714], _0x5e8f02['pop']()) : (_0x6eb714 = this[_0x5964cb(0x4df)][_0x6eb714], 'undefined' == typeof _0x6eb714 && (_0x6eb714 = _0x358f4d[_0x5964cb(0x22)](_0x58b0a1))), _0x5e8f02['push'](_0x6eb714);
                return _0x5e8f02[_0x5964cb(0x182)]()[_0x5964cb(0x280)]('');
            },
            'decode': function(_0x7067dc) {
                var _0x48bdf7 = _0xc89546;
                for (var _0x43afe9, _0x20fa26 = [], _0x42c1ec = 0x0, _0x25b64c = _0x7067dc[_0x48bdf7(0x4d3)]; _0x25b64c > _0x42c1ec; _0x42c1ec++) _0x43afe9 = _0x7067dc[_0x48bdf7(0x22)](_0x42c1ec), _0x42c1ec > 0x0 && ('̤' == _0x43afe9 || '̗' == _0x43afe9 || '̖' == _0x43afe9 || '̮' == _0x43afe9) ? (_0x43afe9 = this[_0x48bdf7(0x4df)][_0x7067dc['charAt'](_0x42c1ec - 0x1) + _0x43afe9], _0x20fa26[_0x48bdf7(0x2e5)]()) : (_0x43afe9 = this[_0x48bdf7(0x4df)][_0x43afe9], _0x48bdf7(0x26a) == typeof _0x43afe9 && (_0x43afe9 = _0x7067dc[_0x48bdf7(0x22)](_0x42c1ec))), _0x20fa26[_0x48bdf7(0x39a)](_0x43afe9);
                return _0x20fa26[_0x48bdf7(0x182)]()[_0x48bdf7(0x280)]('');
            },
            'map': {
                'a': 'ɐ',
                'b': 'q',
                'c': 'ɔ',
                'd': 'p',
                'e': 'ǝ',
                'f': 'ɟ',
                'g': 'ɓ',
                'h': 'ɥ',
                'i': 'ı',
                'j': 'ɾ',
                'k': 'ʞ',
                'l': 'l',
                'm': 'ɯ',
                'n': 'u',
                'r': 'ɹ',
                't': 'ʇ',
                'v': 'ʌ',
                'w': 'ʍ',
                'y': 'ʎ',
                'A': '∀',
                'B': 'ᙠ',
                'C': 'Ɔ',
                'D': 'ᗡ',
                'E': 'Ǝ',
                'F': 'Ⅎ',
                'G': '⅁',
                'J': 'ſ',
                'K': '⋊',
                'L': '˥',
                'M': 'W',
                'P': 'Ԁ',
                'Q': 'Ό',
                'R': 'ᴚ',
                'T': '⊥',
                'U': '∩',
                'V': 'Λ',
                'Y': '⅄',
                0x1: '⇂',
                0x2: 'ᄅ',
                0x3: 'Ɛ',
                0x4: 'ㄣ',
                0x5: 'ގ',
                0x6: '9',
                0x7: 'ㄥ',
                '&': '⅋',
                '.': '˙',
                '\x22': '„',
                ';': '؛',
                '[': ']',
                '(': ')',
                '{': '}',
                '?': '¿',
                '!': '¡',
                '\x27': ',',
                '<': '>',
                '‾': '_',
                '¯': '_',
                '‿': '⁀',
                '⁅': '⁆',
                '∴': '∵',
                '\x0d': '\x0a',
                'ß': 'ᙠ',
                '̈': '̤',
                'ä': 'ɐ̤',
                'ö': 'o̤',
                'ü': 'n̤',
                'Ä': '∀̤',
                'Ö': 'O̤',
                'Ü': '∩̤',
                '´': '\x20̗',
                'é': 'ǝ̗',
                'á': 'ɐ̗',
                'ó': 'o̗',
                'ú': 'n̗',
                'É': 'Ǝ̗',
                'Á': '∀̗',
                'Ó': 'O̗',
                'Ú': '∩̗',
                '`': '\x20̖',
                'è': 'ǝ̖',
                'à': 'ɐ̖',
                'ò': 'o̖',
                'ù': 'n̖',
                'È': 'Ǝ̖',
                'À': '∀̖',
                'Ò': 'O̖',
                'Ù': '∩̖',
                '^': '\x20̮',
                'ê': 'ǝ̮',
                'â': 'ɐ̮',
                'ô': 'o̮',
                'û': 'n̮',
                'Ê': 'Ǝ̮',
                'Â': '∀̮',
                'Ô': 'O̮',
                'Û': '∩̮'
            }
        },
        'mirror': {
            'init': function() {
                var _0x1c26fd = _0xc89546;
                for (i in this['map']) this[_0x1c26fd(0x4df)][this[_0x1c26fd(0x4df)][i]] = i;
            },
            'encode': function(_0xb92938) {
                var _0x5a1f0a = _0xc89546;
                for (var _0x37dff, _0x18d6e7 = [], _0x5590bd = [], _0x19a768 = 0x0, _0x39b8c8 = _0xb92938[_0x5a1f0a(0x4d3)]; _0x39b8c8 > _0x19a768; _0x19a768++) _0x37dff = _0xb92938[_0x5a1f0a(0x22)](_0x19a768), _0x19a768 > 0x0 && ('̈' == _0x37dff || '̀' == _0x37dff || '́' == _0x37dff || '̂' == _0x37dff) ? (_0x37dff = this[_0x5a1f0a(0x4df)][_0xb92938['charAt'](_0x19a768 - 0x1) + _0x37dff], _0x18d6e7[_0x5a1f0a(0x2e5)]()) : (_0x37dff = this[_0x5a1f0a(0x4df)][_0x37dff], _0x5a1f0a(0x26a) == typeof _0x37dff && (_0x37dff = _0xb92938[_0x5a1f0a(0x22)](_0x19a768))), '\x0a' == _0x37dff ? (_0x5590bd['push'](_0x18d6e7[_0x5a1f0a(0x182)]()['join']('')), _0x18d6e7 = []) : _0x18d6e7[_0x5a1f0a(0x39a)](_0x37dff);
                return _0x5590bd[_0x5a1f0a(0x39a)](_0x18d6e7['reverse']()['join']('')), _0x5590bd['join']('\x0a');
            },
            'decode': function(_0x242d42) {
                var _0x3db8b1 = _0xc89546;
                for (var _0x5c5171, _0x4a846e = [], _0x4dc0ad = [], _0x4a69ab = 0x0, _0x58692b = _0x242d42['length']; _0x58692b > _0x4a69ab; _0x4a69ab++) _0x5c5171 = _0x242d42['charAt'](_0x4a69ab), _0x4a69ab > 0x0 && ('̈' == _0x5c5171 || '̀' == _0x5c5171 || '́' == _0x5c5171 || '̂' == _0x5c5171) ? (_0x5c5171 = this['map'][_0x242d42['charAt'](_0x4a69ab - 0x1) + _0x5c5171], _0x4a846e[_0x3db8b1(0x2e5)]()) : (_0x5c5171 = this['map'][_0x5c5171], _0x3db8b1(0x26a) == typeof _0x5c5171 && (_0x5c5171 = _0x242d42['charAt'](_0x4a69ab))), '\x0a' == _0x5c5171 ? (_0x4dc0ad[_0x3db8b1(0x39a)](_0x4a846e['reverse']()[_0x3db8b1(0x280)]('')), _0x4a846e = []) : _0x4a846e[_0x3db8b1(0x39a)](_0x5c5171);
                return _0x4dc0ad[_0x3db8b1(0x39a)](_0x4a846e['reverse']()[_0x3db8b1(0x280)]('')), _0x4dc0ad[_0x3db8b1(0x280)]('\x0a');
            },
            'map': {
                'a': 'ɒ',
                'b': 'd',
                'c': 'ɔ',
                'e': 'ɘ',
                'f': 'Ꮈ',
                'g': 'ǫ',
                'h': 'ʜ',
                'j': 'ꞁ',
                'k': 'ʞ',
                'l': '|',
                'n': 'ᴎ',
                'p': 'q',
                'r': 'ɿ',
                's': 'ꙅ',
                't': 'ƚ',
                'y': 'ʏ',
                'z': 'ƹ',
                'B': 'ᙠ',
                'C': 'Ɔ',
                'D': 'ᗡ',
                'E': 'Ǝ',
                'F': 'ꟻ',
                'G': 'Ꭾ',
                'J': 'Ⴑ',
                'K': '⋊',
                'L': '⅃',
                'N': 'Ͷ',
                'P': 'ꟼ',
                'Q': 'Ọ',
                'R': 'Я',
                'S': 'Ꙅ',
                'Z': 'Ƹ',
                0x1: '',
                0x2: '',
                0x3: '',
                0x4: '',
                0x5: '',
                0x6: '',
                0x7: '',
                '&': '',
                ';': '',
                '[': ']',
                '(': ')',
                '{': '}',
                '?': '⸮',
                '<': '>',
                'ä': 'ɒ̈',
                'ß': 'ᙠ',
                '´': '`',
                'é': 'ɘ̀',
                'á': 'ɒ̀',
                'ó': 'ò',
                'ú': 'ù',
                'É': 'Ǝ̀',
                'Á': 'À',
                'Ó': 'Ò',
                'Ú': 'Ù',
                '`': '´',
                'è': 'ɘ́',
                'à': 'ɒ́',
                'È': 'Ǝ́',
                'ê': 'ɘ̂',
                'â': 'ɒ̂',
                'Ê': 'Ǝ̂',
                'Ø': 'ᴓ',
                'ø': 'ᴓ'
            }
        },
        'creepify': {
            'init': function() {
                var _0x12be80 = _0xc89546;
                for (var _0x541e8b = 0x300; 0x315 >= _0x541e8b; _0x541e8b++) this['diacriticsTop'][_0x12be80(0x39a)](String[_0x12be80(0x96)](_0x541e8b));
                for (var _0x541e8b = 0x316; 0x333 >= _0x541e8b; _0x541e8b++) 0x31a != _0x541e8b && 0x31b != _0x541e8b && this[_0x12be80(0x30c)]['push'](String[_0x12be80(0x96)](_0x541e8b));
                this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x31a)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String['fromCharCode'](0x31b));
                for (var _0x541e8b = 0x334; 0x338 >= _0x541e8b; _0x541e8b++) this[_0x12be80(0x4d0)][_0x12be80(0x39a)](String[_0x12be80(0x96)](_0x541e8b));
                for (var _0x541e8b = 0x339; 0x33c >= _0x541e8b; _0x541e8b++) this[_0x12be80(0x30c)][_0x12be80(0x39a)](String[_0x12be80(0x96)](_0x541e8b));
                for (var _0x541e8b = 0x33d; 0x344 >= _0x541e8b; _0x541e8b++) this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](_0x541e8b));
                this[_0x12be80(0x13a)][_0x12be80(0x39a)](String['fromCharCode'](0x344)), this[_0x12be80(0x30c)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x345)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x346)), this[_0x12be80(0x30c)][_0x12be80(0x39a)](String['fromCharCode'](0x347)), this[_0x12be80(0x30c)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x348)), this[_0x12be80(0x30c)]['push'](String[_0x12be80(0x96)](0x349)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x34a)), this[_0x12be80(0x13a)]['push'](String[_0x12be80(0x96)](0x34b)), this[_0x12be80(0x13a)]['push'](String[_0x12be80(0x96)](0x34c)), this[_0x12be80(0x30c)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x34d)), this[_0x12be80(0x30c)]['push'](String[_0x12be80(0x96)](0x34e)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x350)), this[_0x12be80(0x13a)]['push'](String['fromCharCode'](0x351)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x352)), this[_0x12be80(0x30c)]['push'](String[_0x12be80(0x96)](0x353)), this['diacriticsBottom']['push'](String[_0x12be80(0x96)](0x354)), this['diacriticsBottom'][_0x12be80(0x39a)](String['fromCharCode'](0x355)), this['diacriticsBottom']['push'](String[_0x12be80(0x96)](0x356)), this['diacriticsTop'][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x357)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x358)), this['diacriticsBottom'][_0x12be80(0x39a)](String['fromCharCode'](0x359)), this[_0x12be80(0x30c)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x35a)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x35b)), this['diacriticsBottom'][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x35c)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x35d)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x35d)), this[_0x12be80(0x30c)][_0x12be80(0x39a)](String[_0x12be80(0x96)](0x35f)), this[_0x12be80(0x13a)][_0x12be80(0x39a)](String['fromCharCode'](0x360)), this[_0x12be80(0x13a)]['push'](String['fromCharCode'](0x361));
            },
            'encode': function(_0x34551e) {
                var _0xabc3d = _0xc89546,
                    _0x125b5e, _0x3a50f0 = '';
                for (i in _0x34551e) {
                    if (_0x125b5e = _0x34551e[i], this['options']['middle'] && (_0x125b5e += this['diacriticsMiddle'][Math[_0xabc3d(0xab)](Math[_0xabc3d(0x1c)]() * this[_0xabc3d(0x4d0)][_0xabc3d(0x4d3)])]), this[_0xabc3d(0x272)]['top']) {
                        for (var _0x58fe44 = this[_0xabc3d(0x13a)][_0xabc3d(0x4d3)] - 0x1, _0x43b775 = 0x0, _0x3cf6a1 = this[_0xabc3d(0x272)][_0xabc3d(0x17c)] - Math[_0xabc3d(0x1c)]() * (this['options'][_0xabc3d(0x208)] / 0x64 * this[_0xabc3d(0x272)][_0xabc3d(0x17c)]); _0x3cf6a1 > _0x43b775; _0x43b775++) _0x125b5e += this['diacriticsTop'][Math[_0xabc3d(0xab)](Math[_0xabc3d(0x1c)]() * _0x58fe44)];
                    }
                    if (this['options'][_0xabc3d(0x3be)]) {
                        for (var _0x1ba987 = this[_0xabc3d(0x30c)][_0xabc3d(0x4d3)] - 0x1, _0x43b775 = 0x0, _0x3cf6a1 = this['options'][_0xabc3d(0x17c)] - Math[_0xabc3d(0x1c)]() * (this[_0xabc3d(0x272)][_0xabc3d(0x208)] / 0x64 * this[_0xabc3d(0x272)][_0xabc3d(0x17c)]); _0x3cf6a1 > _0x43b775; _0x43b775++) _0x125b5e += this[_0xabc3d(0x30c)][Math['floor'](Math[_0xabc3d(0x1c)]() * _0x1ba987)];
                    }
                    _0x3a50f0 += _0x125b5e;
                }
                return _0x3a50f0;
            },
            'decode': function(_0x35a6ad) {
                var _0x445406, _0x7306e1 = '';
                for (i in _0x35a6ad) _0x445406 = _0x35a6ad[i]['charCodeAt'](0x0), (0x300 > _0x445406 || _0x445406 > 0x361) && (_0x7306e1 += _0x35a6ad[i]);
                return _0x7306e1;
            },
            'diacriticsTop': [],
            'diacriticsMiddle': [],
            'diacriticsBottom': [],
            'options': {
                'top': !0x0,
                'middle': !0x0,
                'bottom': !0x0,
                'maxHeight': 0xf,
                'randomization': 0x64
            }
        },
        'bubbles': {
            'init': function() {
                var _0x2e351a = _0xc89546;
                for (var _0x3c5a98 = 0x31; 0x39 >= _0x3c5a98; _0x3c5a98++) this[_0x2e351a(0x4df)][String[_0x2e351a(0x96)](_0x3c5a98)] = String['fromCharCode'](_0x3c5a98 + 0x242f);
                this[_0x2e351a(0x4df)][0x0] = '⓪';
                for (var _0x3c5a98 = 0x41; 0x5a >= _0x3c5a98; _0x3c5a98++) this[_0x2e351a(0x4df)][String[_0x2e351a(0x96)](_0x3c5a98)] = String[_0x2e351a(0x96)](_0x3c5a98 + 0x2475);
                for (var _0x3c5a98 = 0x61; 0x7a >= _0x3c5a98; _0x3c5a98++) this[_0x2e351a(0x4df)][String[_0x2e351a(0x96)](_0x3c5a98)] = String[_0x2e351a(0x96)](_0x3c5a98 + 0x246f);
                for (_0x3c5a98 in this[_0x2e351a(0x4df)]) this[_0x2e351a(0x1c8)][this['map'][_0x3c5a98]] = _0x3c5a98;
            },
            'encode': function(_0x3eb008) {
                var _0x47f1d8 = _0xc89546,
                    _0xc7ec88, _0x207a1e = '',
                    _0x2a8592 = !0x0;
                for (i in _0x3eb008) _0xc7ec88 = this[_0x47f1d8(0x4df)][_0x3eb008[i]], _0x47f1d8(0x26a) == typeof _0xc7ec88 && (_0x3eb008[i][_0x47f1d8(0x3d5)](0x0) >= 0x21 ? (_0xc7ec88 = _0x3eb008[i] + String[_0x47f1d8(0x96)](0x20dd), _0x2a8592 || (_0xc7ec88 = String[_0x47f1d8(0x96)](0x202f) + String['fromCharCode'](0xa0) + String['fromCharCode'](0xa0) + String[_0x47f1d8(0x96)](0x202f) + _0xc7ec88)) : _0xc7ec88 = _0x3eb008[i]), _0x207a1e += _0xc7ec88, _0x2a8592 = '\x0a' == _0xc7ec88;
                return _0x207a1e;
            },
            'decode': function(_0x3e7e27) {
                var _0x4486ee = _0xc89546,
                    _0x11ae60, _0x3eb20c = '',
                    _0x2a8239 = '';
                for (i in _0x3e7e27) _0x11ae60 = this['mapInverse'][_0x3e7e27[i]], _0x3eb20c += _0x4486ee(0x26a) == typeof _0x11ae60 ? _0x3e7e27[i] : _0x11ae60;
                for (i in _0x3eb20c) _0x11ae60 = _0x3eb20c[i][_0x4486ee(0x3d5)](0x0), 0xa0 != _0x11ae60 && 0x202f != _0x11ae60 && 0x20dd != _0x11ae60 && (_0x2a8239 += _0x3eb20c[i]);
                return _0x2a8239;
            },
            'map': {},
            'mapInverse': {}
        },
        'squares': {
            'init': function() {},
            'encode': function(_0x178aa6) {
                var _0x179d7a = _0xc89546,
                    _0x4b5d04, _0x3eee41 = '',
                    _0x220f8b = !0x0;
                for (i in _0x178aa6) _0x178aa6[i][_0x179d7a(0x3d5)](0x0) >= 0x21 ? (_0x4b5d04 = _0x178aa6[i] + String['fromCharCode'](0x20de), _0x220f8b || (_0x4b5d04 = String[_0x179d7a(0x96)](0x202f) + String['fromCharCode'](0xa0) + String[_0x179d7a(0x96)](0xa0) + String[_0x179d7a(0x96)](0x202f) + _0x4b5d04)) : _0x4b5d04 = _0x178aa6[i], _0x3eee41 += _0x4b5d04, _0x220f8b = '\x0a' == _0x4b5d04;
                return _0x3eee41;
            },
            'decode': function(_0x5bf17c) {
                var _0x327d2f = _0xc89546,
                    _0x46bcfa, _0x18cb2c = '';
                for (i in _0x5bf17c) _0x46bcfa = _0x5bf17c[i][_0x327d2f(0x3d5)](0x0), 0xa0 != _0x46bcfa && 0x202f != _0x46bcfa && 0x20de != _0x46bcfa && (_0x18cb2c += _0x5bf17c[i]);
                return _0x18cb2c;
            }
        },
        'roundsquares': {
            'init': function() {},
            'encode': function(_0x3938d0) {
                var _0x4f4738 = _0xc89546,
                    _0x518415, _0xbbfab6 = '',
                    _0x26fa5e = !0x0;
                for (i in _0x3938d0) _0x3938d0[i][_0x4f4738(0x3d5)](0x0) >= 0x21 ? (_0x518415 = _0x3938d0[i] + String[_0x4f4738(0x96)](0x20e3), _0x26fa5e || (_0x518415 = String['fromCharCode'](0xa0) + String[_0x4f4738(0x96)](0xa0) + String[_0x4f4738(0x96)](0xa0) + _0x518415)) : _0x518415 = _0x3938d0[i], _0xbbfab6 += _0x518415, _0x26fa5e = '\x0a' == _0x518415;
                return _0xbbfab6;
            },
            'decode': function(_0x561c19) {
                var _0x1619a9, _0x57e37e = '';
                for (i in _0x561c19) _0x1619a9 = _0x561c19[i]['charCodeAt'](0x0), 0xa0 != _0x1619a9 && 0x202f != _0x1619a9 && 0x20e3 != _0x1619a9 && (_0x57e37e += _0x561c19[i]);
                return _0x57e37e;
            }
        },
        'bent': {
            'init': function() {
                var _0x226e04 = _0xc89546;
                for (i in this[_0x226e04(0x4df)]) this[_0x226e04(0x4df)][this[_0x226e04(0x4df)][i]] = i;
            },
            'encode': function(_0x59a185) {
                var _0x991607 = _0xc89546;
                for (var _0x1174a4, _0x4128cd = '', _0x45cc76 = 0x0, _0x3e358a = _0x59a185[_0x991607(0x4d3)]; _0x3e358a > _0x45cc76; _0x45cc76++) _0x1174a4 = this['map'][_0x59a185[_0x991607(0x22)](_0x45cc76)], _0x991607(0x26a) == typeof _0x1174a4 && (_0x1174a4 = _0x59a185[_0x991607(0x22)](_0x45cc76)), _0x4128cd += _0x1174a4;
                return _0x4128cd;
            },
            'decode': function(_0x454837) {
                var _0x4d23fd = _0xc89546;
                for (var _0x4630f1, _0x680cfd = '', _0x1c6acd = 0x0, _0x103dc8 = _0x454837['length']; _0x103dc8 > _0x1c6acd; _0x1c6acd++) _0x4630f1 = this['map'][_0x454837[_0x4d23fd(0x22)](_0x1c6acd)], 'undefined' == typeof _0x4630f1 && (_0x4630f1 = _0x454837[_0x4d23fd(0x22)](_0x1c6acd)), _0x680cfd += _0x4630f1;
                return _0x680cfd;
            },
            'map': {
                'a': 'ą',
                'b': 'ҍ',
                'c': 'ç',
                'd': 'ժ',
                'e': 'ҽ',
                'f': 'ƒ',
                'g': 'ց',
                'h': 'հ',
                'i': 'ì',
                'j': 'ʝ',
                'k': 'ҟ',
                'l': 'Ӏ',
                'm': 'ʍ',
                'n': 'ղ',
                'o': 'օ',
                'p': 'ք',
                'q': 'զ',
                'r': 'ɾ',
                's': 'ʂ',
                't': 'է',
                'u': 'մ',
                'v': 'ѵ',
                'w': 'ա',
                'x': '×',
                'y': 'վ',
                'z': 'Հ',
                'A': 'Ⱥ',
                'B': 'β',
                'C': '↻',
                'D': 'Ꭰ',
                'E': 'Ɛ',
                'F': 'Ƒ',
                'G': 'Ɠ',
                'H': 'Ƕ',
                'I': 'į',
                'J': 'ل',
                'K': 'Ҡ',
                'L': 'Ꝉ',
                'M': 'Ɱ',
                'N': 'ហ',
                'O': 'ට',
                'P': 'φ',
                'Q': 'Ҩ',
                'R': 'འ',
                'S': 'Ϛ',
                'T': 'Ͳ',
                'U': 'Ա',
                'V': 'Ỽ',
                'W': 'చ',
                'X': 'ჯ',
                'Y': 'Ӌ',
                'Z': 'ɀ',
                0x0: '⊘',
                0x1: '������',
                0x2: 'ϩ',
                0x3: 'Ӡ',
                0x4: '५',
                0x5: 'Ƽ',
                0x6: 'Ϭ',
                0x7: '7',
                0x8: _0xc89546(0x24e),
                0x9: '९',
                '&': '⅋',
                '(': '{',
                ')': '}',
                '{': '(',
                '}': ')',
                'ä': 'ą̈',
                'ö': 'օ̈',
                'ü': 'մ̈',
                'Ä': 'Ⱥ̈',
                'Ö': 'ට̈',
                'Ü': 'Ա̈',
                'é': 'ҽ́',
                'á': 'ą́',
                'ó': 'օ́',
                'ú': 'մ́',
                'É': 'Ɛ́',
                'Á': 'Ⱥ́',
                'Ó': 'ට́',
                'Ú': 'Ա́',
                'è': 'ҽ̀',
                'à': 'ą̀',
                'ò': 'օ̀',
                'ù': 'մ̀',
                'È': 'Ɛ̀',
                'À': 'Ⱥ̀',
                'Ò': 'ට̀',
                'Ù': 'Ա̀',
                'ê': 'ҽ̂',
                'â': 'ą̂',
                'ô': 'օ̂',
                'û': 'մ̂',
                'Ê': 'Ɛ̂',
                'Â': 'Ⱥ̂',
                'Ô': 'ට̂',
                'Û': 'Ա̂'
            }
        },
        'tiny': {
            'init': function() {
                var _0x3636c5 = _0xc89546;
                for (i in this[_0x3636c5(0x4df)]) this[_0x3636c5(0x4df)][this[_0x3636c5(0x4df)][i]] = i;
            },
            'encode': function(_0x554d66) {
                var _0x4834ac = _0xc89546,
                    _0x1cdf49, _0x54a289 = '';
                _0x554d66 = _0x554d66[_0x4834ac(0x4b8)]();
                for (var _0xca626f = 0x0, _0x1f25fa = _0x554d66['length']; _0x1f25fa > _0xca626f; _0xca626f++) _0x1cdf49 = this[_0x4834ac(0x4df)][_0x554d66[_0x4834ac(0x22)](_0xca626f)], 'undefined' == typeof _0x1cdf49 && (_0x1cdf49 = _0x554d66[_0x4834ac(0x22)](_0xca626f)), _0x54a289 += _0x1cdf49;
                return _0x54a289;
            },
            'decode': function(_0x52b01c) {
                var _0x55e352 = _0xc89546;
                for (var _0x9f506a, _0x3966b7 = '', _0x43cc49 = 0x0, _0x38294b = _0x52b01c[_0x55e352(0x4d3)]; _0x38294b > _0x43cc49; _0x43cc49++) _0x9f506a = this[_0x55e352(0x4df)][_0x52b01c[_0x55e352(0x22)](_0x43cc49)], 'undefined' == typeof _0x9f506a && (_0x9f506a = _0x52b01c[_0x55e352(0x22)](_0x43cc49)), _0x3966b7 += _0x9f506a;
                return _0x3966b7;
            },
            'map': {
                'A': 'ᴀ',
                'B': 'ʙ',
                'C': 'ᴄ',
                'D': 'ᴅ',
                'E': 'ᴇ',
                'F': 'ꜰ',
                'G': 'ɢ',
                'H': 'ʜ',
                'I': 'ɪ',
                'J': 'ᴊ',
                'K': 'ᴋ',
                'L': 'ʟ',
                'M': 'ᴍ',
                'N': 'ɴ',
                'O': 'ᴏ',
                'P': 'ᴘ',
                'Q': 'Q',
                'R': 'ʀ',
                'S': 'ꜱ',
                'T': 'ᴛ',
                'U': 'ᴜ',
                'V': 'ᴠ',
                'W': 'ᴡ',
                'X': 'x',
                'Y': 'ʏ',
                'Z': 'ᴢ'
            }
        }
    };
    for (i in this[_0xc89546(0x16b)]) this[_0xc89546(0x16b)][i][_0xc89546(0x31e)]();
    this[_0xc89546(0x4fd)] = function(_0x13bccc) {
        var _0x5ec8f3 = _0xc89546;
        for (var _0x28e220, _0x37328d = '', _0x5d7682 = !0x0, _0x4d627a = 0x0, _0x20f62c = 0x0, _0x4d46b4 = 0x0, _0x5382b5 = _0x13bccc['length']; _0x5382b5 > _0x4d46b4; _0x4d46b4++) _0x28e220 = _0x13bccc['charCodeAt'](_0x4d46b4), 0xa == _0x28e220 || 0xd == _0x28e220 ? (_0x37328d += '<br>\x0a', _0x5d7682 = !0x0) : 0x20 == _0x28e220 ? _0x5d7682 ? (_0x37328d += '\x20', _0x5d7682 = !0x1) : (_0x37328d += '\x20', _0x5d7682 = !0x0) : (_0x28e220 >= 0xd800 && 0xdbff >= _0x28e220 ? (_0x4d627a = _0x28e220, _0x20f62c = 0x0) : _0x4d627a > 0x0 ? (_0x28e220 >= 0xdc00 && 0xdfff >= _0x28e220 && (_0x20f62c = 0x400 * (_0x4d627a - 0xd800) + (_0x28e220 - 0xdc00) + 0x10000), _0x4d627a = 0x0) : _0x20f62c = _0x28e220, 0x0 != _0x20f62c && (_0x37328d += _0x5ec8f3(0x2c5) + _0x20f62c[_0x5ec8f3(0x35d)](0x10) + ';', _0x5d7682 = !0x0));
        return _0x37328d;
    };
}

function cuteText(_0x582f26) {
    var _0x5243de = _0x6ecdde;
    if (_0x582f26['trim']() === '') return '';
    qi = -0x1;
    var _0x268b93 = boundingString(Math[_0x5243de(0xab)](Math[_0x5243de(0x1c)]() * 0x2) + 0x1);
    return _0x268b93 + _0x5243de(0x18d) + _0x582f26[_0x5243de(0x2f1)](/([!?.]+)/gi)['map'](cuteSentence)[_0x5243de(0x280)]('') + _0x5243de(0x18d) + esrever[_0x5243de(0x182)](_0x268b93);
}

function cuteSentence(_0x5be024) {
    var _0x1ef172 = _0x6ecdde;
    return _0x5be024[_0x1ef172(0x2f1)](/([\s,]+)/gi)[_0x1ef172(0x4df)](cuteWord)[_0x1ef172(0x280)]('');
}

function cuteWord(_0x598a49) {
    var _0x1ec924 = _0x6ecdde;
    if (_0x598a49 === '' || /[[!?.\s,]+]/gi [_0x1ec924(0x2e6)](_0x598a49)) return _0x598a49;
    return _0x598a49 = roundReplace(_0x598a49), _0x598a49 = punctReplace(_0x598a49), _0x598a49 = emojiReplace(_0x598a49), scriptify(_0x598a49);
}
var qi = -0x1,
    qa = ['❝', '❞'];

function _0x2a57() {
    var _0xc5e0c0 = ['2&#857;', 'X&#828;', '<:::::[]=¤\x20[[text]]\x20(▀̿̿Ĺ̯̿̿▀̿\x20̿)', '&#120831;&#823;', '&#4318;', 'A&#828;', '&#1063;', 's&#846;', '(✿ヘᴥヘ)', '.lunitoolsmirrorencode', '&upsilon;', '&#408;', '.emoticon7', 'U&#838;', 'D&#799;', 's&#830;', 'C&#866;', '••¤(`×[¤\x20[[text]]\x20¤]×´)¤••', '.cuteText5', '.thankyou7', 'c&#866;', 'k&#829;&#851;', '&#120432;&#823;', 'classList', '.luniroundsquares', '&#1359;', 'L&#826;', '★彡\x20[[text]]\x20彡★', 'random', '&#41346;', '&#1351;', '&#638;', 'z&#828;', '.illuminati', 'charAt', 'o&#846;', 'B&#846;', '.result-s25', '🕛︎', '⦚$1⦚', '(-_-)\x20[[text]]\x20(-_-)', '#fontSize', '&#40983;', 'bubbles', '&#41141;', 'l&#828;', 'G&#826;', '&#8984;', '.squiggle4CharMap', '&#1112;', 'z&#829;&#851;', '.result-s20', 'щ（ﾟДﾟщ）\x20<\x20', 'addEventListener', '&#943;', '&#627;', '&#120829;&#823;', '&#9736;', '-·=»‡«=·-\x20[[text]]\x20-·=»‡«=·-', 'H&#799;', '(☝◞‸◟)☞', 'T&#830;', 'm&#846;', '&#272;', '╚»★«╝\x20', '🕿︎', '1&#826;', 'Q&#857;', 'exports', 'j&#866;', '&#5167;', '&#120463;&#823;', '&#989;', '🎯🍧', '&#941;', '✰.｡.✵°✵,¸.•✵´', '8&#846;', '【｡_｡】\x20[[text]]\x20【｡_｡】', '.fullCrazy4', 'd&#846;', '★彡[', '.star8', 't&#866;', '.result-s18', '💣︎', '.hashJoiner', '&#120825;&#823;', 'forEach', '&#120464;&#823;', '&#42130;', '.currencyCharMap', '&#9687;', '&Omega;', '&#985;', 'P&#829;&#851;', '&#9730;', '&#5500;', '&#411;', '&#401;', 'l&#857;', 'Z&#799;', '&szlig;', '&#120455;&#823;', 's24', '&#4308;', '♥⊱ღ', '9&#826;', 'F&#830;', '`•.¸¸.•´´¯`••._.•\x20[[text]]\x20•._.••`¯´´•.¸¸.•`', 'val', 'q&#799;', '×º°”˜`”°º×\x20[[text]]\x20×º°”˜`”°º×', 'b&#799;', '๑۞๑,¸¸,ø¤º°`°๑۩\x20', '&#120443;&#823;', 'M&#828;', '&#120822;&#823;', '&#3923;', '&#286;', '👌︎', '&#41769;', 's10', 'q&#830;', 'a&#826;', '&#10126;', '.curlybrackets', '.emoticon3', 'appendChild', 'f&#828;', '&#65434;', '&#1056;', '.heart6', 'a&#799;', '\x20.o0×X×0o.\x20[[text]]\x20.o0×X×0o.', 'r&#846;', 'N&#826;', '.thankyou4', 'html', '.heart4', '💧︎', '•●◉✿\x20', '★｡\x20🎀', '&#9791;', '&#1347;', 'amd', '&#120830;&#823;', '&#1131;', '&#120465;&#823;', '&#5609;', '7&#799;', 'fromCharCode', 'Y&#866;', '&#988;', '.thickBox', 'L&#866;', '.clear', '═─◄█▓▒░', 'Y&#857;', '••¤(`×[¤\x20', '6&#857;', '.fullCrazy1', 'x&#830;', '&Delta;', 'Y&#828;', '.pubggame2', '.fullCrazy5', '&#382;', 'esrever', '&#1050;', '&#41296;', '♪(･ω･)ﾉ', 'floor', 'Q&#829;&#851;', '&#41427;', '&#1338;', '&#392;', '&#41556;', 'B&#829;&#851;', 'B&#828;', '&#5556;', '🕖︎', '&#41508;', '&Xi;', 't&#799;', 'o&#830;', '•._.••´¯``•.¸¸.•`\x20', 'D&#857;', '&#340;', 'z&#799;', '&#490;', '&#120433;&#823;', '&#41240;', '&#1210;', 'Y&#829;&#851;', '.squiggle3CharMap', '&#20057;', '.cuteText1', '(*ˊᗜˋ*)', '5&#866;', 'b&#838;', '#Name-FF', 'px}\x20</style>', '&#295;', '.bigrus', '&#40996;', '🕙︎', '🌟⭐ıllıllı', '&#613;', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '🗏︎', 'J&#866;', 'n&#829;&#851;', '•´¯`•.\x20[[text]]\x20.•´¯`•', '&#42171;', '&#120467;&#823;', '&#41080;', '\x20.o0×X×0o.\x20', '&#998;', 'K&#799;', 'k&#857;', '🖂︎', '.sad4', '8&#826;', 'e&#799;', 'm&#857;', '&#4335;', '.lunitoolsflipencode', '(¯´•._.•\x20', 'J&#857;', '🕐︎', '&#7990;', 'f&#857;', 'd&#829;&#851;', '&#614;', '&#3619;', '.doubleUnderline', 'copied-show', 'insertBefore', '&#669;', '&#41008;', '&#12552;', '🕒︎', '🕔︎', '&#41707;', '8&#838;', '4&#846;', 'G&#846;', '.sad7', '&#9442;', 'S&#866;', '🖃︎', 'ﾟ･:,｡★＼(^-^\x20)♪', '.star2', '&#120447;&#823;', '\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20', 'D&#866;', '&#120450;&#823;', '&#120434;&#823;', '[̲̅$1]', '&fnof;', 's20', '&#5845;', 'v&#799;', '·.★·.·´¯`·.·★', '&#1344;', 's25', '&#1046;', '7&#829;&#851;', 'u&#826;', '.sad3', 'H&#857;', 'creepify', '.sad1', '&#268;', 'c&#857;', '(✿^▽^)', '.emoticon5', '.subscriptCharMap', '&#41074;', '&#10128;', 'C&#857;', 'U&#828;', 'a&#829;&#851;', 'p&#829;&#851;', '&#5229;', '3&#826;', 'C&#829;&#851;', '&#9796;', 'x&#838;', 's29', '💖´\x20*•.¸♥¸.•**\x20', 'ﻬஐﻬツ', '1&#829;&#851;', '&iota;', '—(••÷', 'J&#799;', '⧼$1&#828;⧽', '&kappa;', '&#120439;&#823;', 'R&#799;', 'C&#799;', '&#120462;&#823;', '&#41922;', '▀▄▀▄▀▄\x20[[text]]\x20▄▀▄▀▄▀', '♪ღ♪*•.¸¸.•*¨¨*•.♪\x20[[text]]\x20♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪', '&#1342;', 'H&#826;', '.singlewavyJoiner', '&#608;', 'z&#826;', '&#3588;', 'r&#828;', '&#623;', 'S&#857;', 'diacriticsTop', '&#1047;', '(•◡•)', 'I&#838;', '꧁༒༻☬ད\x20[[text]]\x20ཌ☬༺༒꧂', '.lunitoolstinyencode', '∙∙·▫▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ\x20[[text]]\x20ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫▫·∙∙', '(|||❛︵❛.)', 'E&#857;', '&#120827;&#823;', '¸,ø¤º°`°º¤ø,¸\x20', '&#8857;', '8&#799;', 'J&#838;', '5&#828;', '&dagger;', '¸„.-•~¹°”ˆ˜¨\x20', '1&#857;', '⦏$1&#x302;⦎', '&#9739;', '&#120438;&#823;', '`•.,¸¸,.•´¯\x20', '.crossAboveBelow', '&#323;', '(¯´•._.•\x20[[text]]\x20•._.•´¯)', '★·.·´¯`·.·★\x20', '&#5205;', '9&#799;', 'R&#866;', '.result-s30', '&#41155;', '&#120441;&#823;', '&#4330;', '.squiggle5CharMap', '&#607;', '▌│█║▌║▌║\x20[[text]]\x20║▌║▌║█│▌', 'nodeType', '&#1065;', '&#7433;', 'C&#828;', '&#596;', '&#3648;', '♡❤●•◦', '&#1049;', '&#120471;&#823;', 'e&#830;', '.boldItalicCharMap', '&#1192;', '.connectedJoiner', 'tools', '&#418;', '▁\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20', 'C&#846;', 'P&#830;', '\x20¤]×´)¤••', '&#416;', '&#120828;&#823;', '°°°·.°·..·°¯°·._.·\x20[[text]]\x20·._.·°¯°·.·°\x20.·°°°', '&#1052;', 'r&#799;', '.upperAnglesCharMap', '&#541;', '&#10081;', 'ツﻬஐﻬ', '&#41754;', 'object', 'maxHeight', 'l&#846;', '¸,ø¤º°`°º¤ø,¸\x20[[text]]\x20¸,ø¤º°`°º¤ø,¸', '╚»★«╝', '🖮︎', '٭⊹•꧂', 'reverse', '.result-s16', '-漫~*\x27¨¯¨\x27*·舞~\x20', '.result-s1', 'r&#866;', '★⡀.•☆•.★', '&#10122;', 'n&#799;', '&#4325;', '&#438;', 'ஜ۩۞۩ஜ', '\x20\x20🎀\x20\x20', '&#1185;', '&#10124;', 'f&#830;', '📄︎', 'Q&#866;', 'o&#838;', '(づ｡◕‿‿◕｡)づ\x20', 'P&#799;', 'K&#826;', 'h&#846;', '|!¤*\x27~``~\x27*¤!|\x20[[text]]\x20|!¤*\x27~``~\x27*¤!|', '(◍•ᴗ•◍)\x20ミ💖\x20', 'L&#829;&#851;', '3&#829;&#851;', '&#120466;&#823;', 'S&#830;', '&#429;', '&#4306;', 'M&#846;', 'Z&#846;', 'd&#838;', '&#940;', 'J&#826;', 'H&#830;', 'V&#846;', 'N&#857;', '0&#829;&#851;', '1&#828;', '&#41204;', 'q&#829;&#851;', '&#1041;', 'R&#829;&#851;', '&otilde;', '.cuteText2', 'y&#828;', 'p&#826;', '.firework', 'w&#830;', '&#4329;', '&#41648;', '•´¯`•.\x20', '&#41575;', '&#1179;', '&#1028;', 'i&#829;&#851;', 'Z&#866;', '(ㅅꈍ﹃ꈍ)*\x20[[text]]\x20*(ꈍ﹃ꈍㅅ)♡', '&#258;', '&#1043;', '&#1333;', '.emoticon4', 'g&#799;', 'p&#846;', '&#385;', 'g&#866;', '4&#829;&#851;', '&#40974;', 's12', 'mapInverse', '&#40984;', '📬︎', 'q&#828;', '&#1040;', '●‿●', 's16', '.wideTextCharMap', 'y&#846;', '&#9761;', 'k&#799;', '&#10127;', '.bentTextCharMap', '&#987;', 'ıllıllı\x20[[text]]\x20ıllıllı', '&#42181;', '&#387;', 'M&#830;', '0&#866;', '&#41674;', '^ㅂ^', '&#41733;', 'ஜ۩۞۩ஜ\x20[[text]]\x20ஜ۩۞۩ஜ', '&#1082;', 'remove', 'w&#826;', ']\x20𒆜𓊉꧂', '&#412;', '.thankyou0', 'y&#799;', 'R&#826;', '.arrowBox', 'm&#830;', '6&#826;', '🌘‿🌘\x20\x20', 'U&#846;', 'A&#826;', '.star1', '&#41751;', '&#1071;', '&#120461;&#823;', 'd&#826;', '.lunisquares', 'Nick\x20Name\x20FF', '&#41532;', '6&#829;&#851;', '&#336;', 'n&#838;', 'm&#826;', '&alpha;', '\x20•°*”˜.•°*”˜', '7&#830;', '&#413;', '&#120823;&#823;', '══━一', '&#545;', '&#41007;', '6&#799;', '¸,ø¤º°`°º¤ø,¸¸,ø¤º°\x20[[text]]\x20°º¤ø,¸¸,ø¤º°`°º¤ø,¸', '&#1085;', 'ღ(¯`◕‿◕´¯)\x20♫\x20♪\x20♫\x20[[text]]\x20♫\x20♪\x20♫\x20(¯`◕‿◕´¯)ღ', '.result-s22', '⁀‿⁀', '*•.¸♡\x20[[text]]\x20♡¸.•*', 'randomization', '•°¯`••\x20[[text]]\x20••´¯°•', '&#41105;', 'V&#828;', 'X&#826;', '•._.••´¯``•.¸¸.•`\x20[[text]]\x20`•.¸¸.•´´¯`••._.•', 'E&#826;', '&#7918;', '2&#826;', '🕘︎', '(^▽^)\x20\x20', '&#41804;', '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯', '.thickBlockFramed', '&#2792;', '(｀∀´)Ψ', '&#1352;', '&#646;', ']彡★', '`•.,¸¸,.•´¯\x20[[text]]\x20¯`•.,¸¸,.•´', '&#120444;&#823;', '&#435;', 'T&#799;', '&#41991;', 'location', '2&#846;', 'y&#857;', 'L&#828;', '&#4357;', '—(••÷[\x20[[text]]\x20]÷••)—', '&#1350;', 'e&#829;&#851;', '.squaresCharMap', '&#381;', 'f&#829;&#851;', 'I&#866;', '&#420;', 'X&#846;', '♥╣[-_-]╠♥', '&#5610;', '&forall;', '&#344;', '&epsilon;', '&sigma;', 'z&#846;', 'P&#846;', 's19', 'w&#828;', 'G&#838;', '.scriptify', 'Z&#828;', '&sigmaf;', '&#1095;', '7&#857;', 'n&#826;', '0&#799;', '◠◡◠', 't&#830;', '.oldEnglishCharMap', 'm&#838;', '&#41126;', '🕆︎', '&#372;', 'l&#829;&#851;', '.heart2', '¨˜ˆ”°⍣~•✡⊹٭„¸\x20\x20', '😐︎', '&#615;', '*´¯`*.¸¸.*´¯`*\x20', 'W&#799;', '������', '•]••´º´•»\x20', '❀◕‿◕❀', '🖰︎', '&#477;', '٭⊹¤.•⨳•.*☆✬\x20', 't&#829;&#851;', 'c&#838;', '.star3', 'M&#826;', '.star4', 'h&#799;', '⎝⎝✧GͥOͣDͫ✧⎠⎠\x20[[text]]\x20⎝⎝✧GͥOͣDͫ✧⎠⎠', '&#2799;', 's30', '5&#846;', '9&#866;', '&Gamma;', '&#1111;', '&#1008;', 'click', 'B&#838;', '෴❤️෴', '&#41076;', '&#41266;', '癶๑)ლ〜♡', '&#4327;', '6&#838;', 'undefined', '&#1377;', 'K&#828;', '&#5620;', '.heart1', '&#41246;', '<style>\x20//\x20Discord\x20Fonts\x20by\x20:DiscordFonts@gmail.com\x20</style>', 'C&#830;', 'options', '&#2414;', '\x20⎝⎝✧GͥOͣDͫ✧⎠⎠', '&#618;', '(oꆤ︵ꆤo)\x20', '&#549;', 'n&#828;', '¸„.-•~¹°”ˆ˜¨\x20[[text]]\x20¨˜ˆ”°¹~•-.„¸', '&#5511;', 'p&#828;', '&#1348;', '•]••´º´•»\x20[[text]]\x20«•´º´••[•', '&#41660;', 'c&#829;&#851;', 'join', '&#262;', 'U&#857;', 'z&#838;', '&#5029;', 'u&#866;', '—(••÷[\x20', 'b&#866;', '🌘‿🌘', 'Q&#830;', '\x20✿◉●•◦', 'S&#846;', 'z&#830;', '&#653;', '&#1202;', '✬☆*.•⨳•.¤⊹٭', 'N&#830;', '&phi;', 'ღ⊱♥', '&#1360;', 'Y&#830;', '.star5', '&#1044;', 'toLowerCase', '.sad6', '&#41712;', '&#120442;&#823;', 'V&#826;', '&yen;', '.star9', '&#120824;&#823;', '&#576;', '&#350;', '.thankyou1', '&#41823;', '4&#830;', '▀▄▀▄▀▄\x20', 'O&#828;', '&#1087;', 'h&#829;&#851;', 'リサフランク現代のコンピュ竹内\x20まりや若者が履く流行のスニーカー真夜中のドアホットドッグマスターストライカーソニーブギ新しい日の誕生ライフ\x20-\x20ヒスイ蒸気波\x20無線゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚゛゜ゝゞゟ亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科', 'g&#838;', '【$1】', '&Oslash;', '3&#857;', 'p&#799;', '&eta;', '.cuteText', 'f&#826;', '&#1171;', '⦏$1⦎', 'l&#830;', 'a&#857;', '&#2798;', '&#1331;', '§.•´¨\x27°÷•..×\x20', '.result-s23', 'P&#857;', 'h&#828;', '📪︎', '.sad2', 'p&#838;', 'g&#828;', 'd&#799;', '&#41706;', 'n&#846;', 'h&#826;', 'v&#846;', '&#4317;', '&#x', '°·.¸.·°¯°·.¸.·°¯°·.¸.->\x20', '꧁༒☬\x20[[text]]\x20☬༒꧂', '\x20⋆\x20', '↫↫↫↫↫\x20[[text]]\x20↬↬↬↬↬', 'M&#857;', '&#8355;', '(｡◕‿◕｡)', '&#10123;', 'o&#826;', '.result-s5', '&#358;', '.result-s24', '&Uacute;', '×º°”˜`”°º×\x20', 'mirror', '9&#830;', 'A&#829;&#851;', '5&#830;', '୧(•̀ᗝ•́)૭\x20[[text]]\x20୧(⇀‸↼‶)૭', '&#1105;', '&#41203;', '🐣♖', 'g&#846;', 'function', 'V&#866;', '彡(✿╹◡╹)\x20', '&#9837;', 'x&#799;', '&#5262;', 'P&#828;', '🕚︎', 'pop', 'test', '&#41949;', '.squiggle6CharMap', '.symbolsCharMap', '\x20(\x20◔\x20ʖ̯\x20◔\x20)', 'y&#830;', 'W&#866;', 'l&#838;', '&#422;', '&#974;', '&#1074;', 'split', '💖彡', 'r&#857;', 'replace', '.result-s17', '.greekCharMap', 'N&#828;', 'W&#846;', '.thankyou5', 'round', 'v&#830;', 't&#826;', 'Y&#799;', '★·.·´¯`·.·★\x20[[text]]\x20★·.·´¯`·.·★', '&thorn;', '.result-s9', '1&#846;', 'n&#857;', '◕‿◕', '░▒▓█►─═', 'R&#830;', '&#310;', 'K&#857;', '.arrowBelow', '8&#828;', 'u&#799;', 'E&#799;', 'diacriticsBottom', 'D&#830;', '&#377;', '8&#857;', '&#8467;', '&#292;', '.wingdings', '◦•●◉✿\x20[[text]]\x20✿◉●•◦', '˜”*°•.˜”*°•\x20', 'encode', '&#996;', '&nu;', '☞ó\x20͜つò☞\x20\x20', '&#10125;', '&#41029;', '&beta;', 'G&#829;&#851;', '&#1291;', 'init', 'F&#857;', '.littleSparkles', '6&#830;', '&#2670;', '&#647;', 'hasOwnProperty', '&#1283;', '.fullCrazy3', 'K&#866;', '&#409;', '【〖〘〚［', 'A&#857;', 'ღƪ(ˆ◡ˆ)ʃ♡\x20[[text]]\x20♡ƪ(ˆ◡ˆ)ʃ♪', 'E&#846;', '&#394;', '(✿╹◡╹)', 'b&#828;', 'l&#799;', '8&#830;', '&#391;', 'R&#838;', 's13', 'k&#866;', 'value', 'V&#857;', '(⌒‿⌒)', '&#355;', 'w&#799;', '.copied', '&#651;', 'r&#826;', 'q&#838;', '&#2790;', '&#41708;', '&#120454;&#823;', 'q&#866;', '&#5397;', '(¯`·.¸¸.·´¯`·.¸¸.->\x20', 'k&#830;', 'j&#828;', '(′︿‵｡)', '6&#866;', '&#12425;', '&#41807;', 'O&#826;', '👎︎', 'y&#866;', '.•♫•♬•\x20[[text]]\x20•♬•♫•.', '&#10129;', 'k&#826;', 'n&#830;', '&#5616;', '\x20🎀\x20🐿', '&#3057;', 'T&#838;', 'T&#828;', 'H&#838;', '&#120474;&#823;', 'add', 'e&#866;', '7&#846;', 'e&#838;', 'toString', 'X&#830;', '.diametricAngleFrame', '&#1031;', 'X&#857;', '&#9790;', '&#120435;&#823;', '&rho;', '.bricks', 'S&#799;', '&#403;', '.result-s15', 'max', '&#778;\x20⫶', '&#291;', '(≧◡≦)', '[[text]]', '(づ｡◕‿‿◕｡)づ', '&#315;', 'copy', '&#120457;&#823;', 'f&#846;', '.heart0', '꧁𓊈𒆜', 'M&#829;&#851;', '.invertedSquaresCharMap', 'S&#838;', 't&#846;', '.asianStyleCharMap', '0&#828;', '1&#866;', '&#428;', '&#5623;', 'S&#828;', '&#5290;', '.star10', '&#1358;', 's&#799;', 'f&#866;', 'h&#857;', 'global', 'v&#829;&#851;', '&#639;', '⫷\x20[[text]]\x20⫸', '&Lambda;', 'j&#838;', 'm&#828;', '&#276;', '1&#838;', 'h&#830;', '¤¸¸.•´¯`•¸¸.•..>>\x20', 'S&#829;&#851;', '&#356;', 'I&#846;', '&#41426;', 'h&#838;', '&#5615;', '.result-s10', '&#311;', '$2$1', '&#5198;', 'push', '♥࿐✮', '.star6', 'B&#857;', '(\x20◔\x20ʖ̯\x20◔\x20)\x20', '.wrap4', '๑۞๑,¸¸,ø¤º°`°๑۩\x20[[text]]\x20๑۩\x20,¸¸,ø¤º°`°๑۞๑', '\x20٩꒰´·⌢•｀꒱۶⁼³₌₃', '&#41433;', '&omega;', '3&#866;', '.star0', '.neonCharMap', 'e&#857;', '&#1506;', '0&#838;', '🖫︎', '.result-s3', 'I&#857;', 'y&#838;', '&#41053;', '(^▽^)', '&#9450;', '0&#830;', '«-(¯`v´¯)-«\x20', 'T&#826;', '&#2749;', 'K&#829;&#851;', '.wrap1', 's11', '(.﹒︠₋﹒︡.)\x20ﾟ😳☹', 'i&#830;', '(人◕‿◕)', '.superscriptCharMap', 'g&#829;&#851;', '.vaporwaveText', 'bottom', '&#1223;', 'createElement', 'w&#866;', '&#7828;', '&#2797;', 'D&#826;', '(\x20ﾟ∀ﾟ)ﾉ【[[text]]】', '&part;', '↤↤↤↤↤\x20[[text]]\x20↦↦↦↦↦', '••.•´¯`•.••\x20', '&#1139;', '.heart3', '&#404;', '&#586;', '&euro;', 'N&#866;', '&#9835;', 'd&#830;', '.result-s26', '.result-s13', 'F&#826;', '&micro;', 'charCodeAt', '&#42180;', '&#120476;&#823;', 'g&#826;', '\x20(๑′°︿°๑)', '&#120481;&#823;', '✿.｡.:*\x20☆:**:.\x20[[text]]\x20.:**:.☆*.:｡.✿', '.pubggame3', '&#2794;', '📁︎', '&#1075;', 's26', '&#645;', '\x20║▌║▌║█│▌', '&#42159;', 'j&#829;&#851;', '▁\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20[[text]]\x20█\x20▇\x20▆\x20▅\x20▄\x20▂\x20▁', 'ᵔ⌣ᵔ', '『$1』', '¨˜ˆ”°⍣~•✡⊹٭„¸', 'O&#857;', '.lunicreepify', '6&#828;', '&#1073;', '&#548;', 'G&#866;', '◦•●❤♡\x20', 'N&#838;', '&#120475;&#823;', '(っ◔◡◔)っ\x20♥\x20', 'https://www.nicknameffkeren.com/?=', '&#8023;', 'e&#828;', 'S&#826;', 'm&#799;', '&#41686;', 'k&#828;', '꜍$1꜉', 'F&#828;', '.cuteText4', '&#41079;', '&#41833;', '&#120478;&#823;', 'F&#799;', '\x20(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)', '.squiggle2CharMap', '&#654;', 'roundsquares', '&#1193;', 'r&#838;', '🖬︎', 's&#826;', 'body', '&#41863;', '3&#828;', 'F&#838;', 'b&#829;&#851;', 'n&#866;', '&#41295;', '\x20卐ॐ\x20ཌ꧂◤', 'tiny', 'N&#799;', '9&#846;', 'p&#866;', 'l&#826;', '&#42014;', '.:｡+ﾟ', 'D&#829;&#851;', '&#120468;&#823;', '&#42128;', '&#1084;', '&#434;', '<%=\x20version\x20%>', '&#406;', 'K&#846;', '🐿\x20🎀', '&#296;', 'A&#799;', 'D&#828;', '.emoticon6', ',-*\x27\x20^\x20\x27~*-.,_,.-*~\x20[[text]]\x20~*-.,_,.-*~\x27\x20^\x20\x27*-,', '(Y)', 'u&#828;', '&#1051;', '📂︎', '2&#829;&#851;', '&#9812;', '╚»★«╝\x20[[text]]\x20╚»★«╝', '2&#866;', '\x20●︿●', '&#321;', 'L&#838;', '&#41392;', 'Y&#838;', 'c&#828;', '(/◔◡◔)/', 'e&#846;', '.result-s27', 'T&#866;', 'N&#829;&#851;', '2&#799;', '&#9815;', 'i&#828;', '&#447;', 'J&#828;', 'v&#838;', 's17', '.result-s11', '.squiggleCharMap', '¸„٭⊹✡•~⍣°”ˆ˜¨', '&#41571;', '&#5597;', '4&#866;', '&#670;', '◥꧁ད\x20ॐ卐', 'x&#846;', '&#120437;&#823;', '&#1059;', 'W&#857;', 'querySelector', '&#120479;&#823;', '&#41037;', '•?((¯°·._.•\x20[[text]]\x20•._.·°¯))؟•', '.text', '.dotBoxtwo', '&#407;', 't&#838;', 'V&#830;', '🕕︎', '&#327;', '&chi;', '⫷\x20\x20', '𒆜𓊉꧂', '.fullCrazy2', '.diametricBox', '&#400;', '.crazyWithFlourishOrSymbols1', '.emoticon1', '&#12579;', 'a&#866;', '.result-s14', '.cuteText3', 'O&#799;', 'M&#838;', '༻༒۝', 'M&#799;', '&#346;', '6&#846;', 'D&#838;', 'K&#838;', '(y)', '٩(˘◡˘)۶', '.dottyJoiner', 'a&#838;', '7&#838;', '§.•´¨\x27°÷•..×\x20[[text]]\x20×,.•´¨\x27°÷•..§', 'c&#826;', '.star7', '&#9773;', 'b&#857;', 'd&#828;', 'B&#799;', '.DiscordFonts', '&ETH;', '&#374;', 's&#829;&#851;', '｡*ﾟ.*.｡(っ\x20ᐛ\x20)っ✂╰⋃╯\x20[[text]]', '.result-s29', '(ɔ◔‿◔)ɔ', '&#1180;', 'href', '&#1060;', '&#4315;', 'Z&#838;', 'textarea', 'r&#829;&#851;', '.fullCrazy', ']|I{•------»\x20', '⎝⎝✧GͥOͣDͫ✧⎠⎠', 'j&#799;', '&#9834;', 'L&#857;', 'V&#829;&#851;', '&#423;', '&#1141;', '.wrap3', '🗐︎', '&#484;', '2&#828;', '&#5741;', 'P&#838;', '.stinky', '0&#826;', 'e&#826;', '░▒▓█\x20[[text]]\x20█▓▒░', '(◕︿◕✿)\x20', '&#625;', '&#42015;', '&#19973;', '&#823;', '.boldCharMap', 'k&#838;', '.Name-FF', '&#595;', '&#1330;', '&#120460;&#823;', '&#4331;', '.strikeThrough', 'm&#866;', '&#120436;&#823;', 'w&#829;&#851;', '&#120483;&#823;', '🖲︎', 'O&#866;', 'G&#830;', '.starJoiner', 'Z&#830;', '&#1062;', 'ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥\x20\x20', '.tildeStrikeThrough', '&#592;', '&#633;', '8&#829;&#851;', 'trim', '&#313;', '&ugrave;', '&#41976;', 'toUpperCase', 'j&#830;', '🗄︎', '🕓︎', 'i&#866;', 'g&#857;', '&#42150;', 'O&#830;', '&#351;', 'z&#866;', '.o0×X×0o.\x20', '&#120472;&#823;', '&#42148;', '.thankyou6', '&Mu;', 'h&#866;', '¸♩·¯·ξξ(∵❤◡❤∵)ξξ🌸', '.vaporwaveText2', '&#1097;', '.dotBox', '&#3182;', '(*ゝω・)', 'U&#829;&#851;', 'innerText', 'diacriticsMiddle', '&#1078;', 'J&#830;', 'length', '&#8134;', '.asianStyle2CharMap', '⦑$1⦒', '&#1090;', 'F&#829;&#851;', '0&#857;', '+｡:.ﾟヽ(*´∀)ﾉﾟ', '&iuml;', '&#652;', '★ᶦᶰᵈ᭄', '8&#866;', 'map', '&#10003;', '0&#846;', '.futureAlienCharMap', 'I&#826;', '★¸.•☆•.¸★\x20', '&oplus;', 's31', '5&#826;', '&#1178;', 'o&#866;', 'x&#866;', '[[text]]\x20☜(`o´)', 'y&#829;&#851;', '&#341;', '&#1048;', 'J&#829;&#851;', '5&#829;&#851;', '\x20(︶︹︺)', '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯\x20[[text]]\x20¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯', '&#1349;', 'Q&#846;', 'U&#830;', '&#41766;', '.thankyou2', '.cursiveCharMap', '&#23610;', 'K&#830;', '&#8627;', '.•°¤*(¯`★´¯)*¤°\x20', 'getHTML', 'indexOf', '1&#830;', '¸¸♬·¯·♩¸¸♪·¯·♫¸¸\x20[[text]]\x20¸¸♫·¯·♪¸¸♩·¯·♬¸¸', '3&#846;', '♡〜ლ(๑癶\x20', 'j&#857;', '&#308;', '\x20ıllıllı⭐🌟', 'x&#829;&#851;', 'k&#846;', '.crazyWithFlourishOrSymbols2', 'B&#866;', 't&#828;', '&#1397;', '&#41120;', '•?((¯°·._.•\x20', 'u&#838;', '&#41157;', '&#1213;', '&#1488;', '&#1337;', '🕑︎', 'U&#866;', '┏༼\x20◉\x20╭╮\x20◉༽┓\x20', '&#41005;', 's&#857;', '░▒▓█►─═\x20\x20[[text]]\x20═─◄█▓▒░', '&#42075;'];
    _0x2a57 = function() {
        return _0xc5e0c0;
    };
    return _0x2a57();
}

function quotes() {
    qi++;
    if (qi === 0x2) qi = 0x0;
    return qa[qi];
}

function punctReplace(_0x1eea7f) {
    var _0x416a6c = _0x6ecdde;
    return _0x1eea7f[_0x416a6c(0x2f1)]('')[_0x416a6c(0x4df)](function(_0xe1e6c1) {
        if (_0xe1e6c1 === '!') return randomElement(['❣', '❢']);
        else {
            if (_0xe1e6c1 === '?') return randomElement(['¿', '?']);
            else {
                if (_0xe1e6c1 === '\x22') return quotes();
                else return _0xe1e6c1;
            }
        }
    })['join']('');
}

function emojiReplace(_0x16c6ee) {
    var _0x5c1d20 = _0x6ecdde;
    return _0x16c6ee['replace'](':)', randomElement(emoji[':)']))[_0x5c1d20(0x2f4)]('(:', randomElement(emoji[':)']))[_0x5c1d20(0x2f4)]('^^', randomElement(emoji['^^']))['replace'](':P', randomElement(emoji[':p']))[_0x5c1d20(0x2f4)](':p', randomElement(emoji[':p']))[_0x5c1d20(0x2f4)](':D', randomElement(emoji[':D']))[_0x5c1d20(0x2f4)]('<3', randomElement(emoji['<3']))[_0x5c1d20(0x2f4)]('(y)', randomElement(emoji[_0x5c1d20(0x46b)]))[_0x5c1d20(0x2f4)](_0x5c1d20(0x426), randomElement(emoji[_0x5c1d20(0x46b)]));
}

function roundReplace(_0x5d24a3) {
    var _0x5544ef = _0x6ecdde;
    return _0x5d24a3[_0x5544ef(0x2f1)]('')[_0x5544ef(0x4df)](function(_0x5b3b9b) {
        var _0x3e29c8 = _0x5544ef;
        return _0x5b3b9b[_0x3e29c8(0x297)]() === 'o' || _0x5b3b9b === '0' ? randomElement(round) : _0x5b3b9b;
    })['join']('');
}
var emoji = {
        ':)': [_0x6ecdde(0x46c), _0x6ecdde(0x13c), _0x6ecdde(0x47d), _0x6ecdde(0x250), _0x6ecdde(0x2cc), _0x6ecdde(0x1cd), _0x6ecdde(0x303), '😍', 'ツ', _0x6ecdde(0x8), _0x6ecdde(0x288), _0x6ecdde(0x36e), _0x6ecdde(0x434), 's(^‿^)-b', _0x6ecdde(0x3ba), _0x6ecdde(0x32e), '◔◡◔'],
        '^^': [_0x6ecdde(0x3af), _0x6ecdde(0x113), _0x6ecdde(0x3e6), 'ᵔᴥᵔ', _0x6ecdde(0x36c), '^ㅅ^', _0x6ecdde(0x1dc), _0x6ecdde(0x338), _0x6ecdde(0x240), _0x6ecdde(0x206), ''],
        ':p': [':Þ', ''],
        ':D': [_0x6ecdde(0xd0), '(✿◕ᗜ◕)━♫.*･｡ﾟ', 'ᕕ(ᐛ)ᕗ'],
        '<3': ['♡', '❤', '♥', '❥', '💘', '💙', '💗', '💖', '💕', '💓', '💞', '💝', '💟'],
        '(y)': ['👍', '👌']
    },
    round = ['❁', '🌺', '❀', '💮', '🏵', '🌸', '☯', '😍', '♡', '🍩', '🍬', '💙', '🌞', '💍', '🍪', '❤', '💗', '🍑', '💞'],
    food = ['🍬', '🍭', '🍒', '🍎', '🍉', '🍇', '🍓', '🍌', '🍑', '🍰', '🎂', '🍩', '🍪', '🍧', '🍦', '🍫', '🍡'],
    flowers = ['✿', '⚘', '❦', '❧', '✾', '❁', '❀', '💐', '🌸', '💮', '🏵', '🌹', '🌺', '🌻', '🌷', '☘', '🌱', '🌲', '🌳', '🌴', '🌿', '🍂'],
    twinkles = ['⚛', '🌌', '🌠', '*', ':', '｡', '･ﾟ', '✧', '✮', '★', '✩', '⋆', '.', '°', '`', '✴', '｡', '✴', '⋆', '✳', '✶', '✷', '❈'],
    animals = ['🐯', '🐎', '🐖', '🐷', '🐏', '🐑', '🐐', '🐫', '🐘', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿', '🐻', '🐨', '🐼', '🐾', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊', '🐸', '🐢', '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🐙', '🐚', '🐌', '🐞'],
    plants = ['✿', '⚘', '❦', '❧', '✾', '❁', '❀', '💐', '🌸', '💮', '🏵', '🌹', '🌺', '🌻', '🌷', '☘', '🌱', '🌲', '🌳', '🌴', '🌿', '🍂'],
    misc = ['🌌', '🌠', '🎉', '🎊', '🎈', '💌', '🎎', '🎁', '🎀', '🕯', '🔮', '🛀', '🎖', '🏆', '🏅', '👑', '💍', '👶', '👼', '👸', '👯', '👒', '👻'],
    music = ['♫', '♬', '♪', '♩', '°', '｡', '✧', '🎻', '🎺', '🎸', '🎷', '📯'],
    flourish = [_0x6ecdde(0x50d), 'ıllıllı\x20', '¸,ø¤º°`°º¤ø,¸¸,ø¤º°\x20', '°°°·.°·..·°¯°·._.·\x20', _0x6ecdde(0x1b6), _0x6ecdde(0x2d3), _0x6ecdde(0x24f), _0x6ecdde(0x486), _0x6ecdde(0x2b7), '•°¯`••\x20', _0x6ecdde(0x344), _0x6ecdde(0x24c), '(¯`·.¸¸.->\x20°º\x20', _0x6ecdde(0x2c6), _0x6ecdde(0xb9), _0x6ecdde(0x14a), _0x6ecdde(0xe3), '••¤(`×', '•´¯`•»\x20', _0x6ecdde(0x14f), _0x6ecdde(0x144), _0x6ecdde(0x4c2), ',-*\x27^\x27~*-.,_,.-*~\x20', '`•.¸¸.•´´¯`••._.•\x20', _0x6ecdde(0x126), _0x6ecdde(0x38f), _0x6ecdde(0x3c8), _0x6ecdde(0x4fc), _0x6ecdde(0x71), _0x6ecdde(0x184), _0x6ecdde(0x153), _0x6ecdde(0x16d), _0x6ecdde(0x2a4), '▌│█║▌║▌║\x20'];

function boundingString(_0x182398) {
    return randomElement([foodString, twinkleString, animalString, flourishString])(_0x182398);
}

function foodString(_0x3e87da) {
    var _0x27370d = _0x6ecdde;
    return new Array(_0x3e87da + 0x1)['join']('0')['split']('')['map'](function(_0x4e2669) {
        return randomElement(food);
    })[_0x27370d(0x280)](_0x27370d(0x2c8));
}

function twinkleString(_0x844e4f) {
    var _0x10d19b = _0x6ecdde;
    return new Array(_0x844e4f + 0x1)['join']('0')['split']('')[_0x10d19b(0x4df)](function() {
        return randomElement(twinkles);
    })[_0x10d19b(0x280)]('');
}

function animalString(_0xa7b5d0) {
    var _0x4b825e = _0x6ecdde;
    return new Array(_0xa7b5d0 + 0x1)[_0x4b825e(0x280)]('0')[_0x4b825e(0x2f1)]('')['map'](function(_0xe97760) {
        return randomElement(animals);
    })[_0x4b825e(0x280)](_0x4b825e(0x2c8));
}

function flourishString(_0x467b8e) {
    return randomElement(flourish);
}

function scriptify(_0x4d9658) {
    var _0x5315fc = _0x6ecdde,
        _0x48347a = {
            0x0: '𝟢',
            0x1: '𝟣',
            0x2: '𝟤',
            0x3: '𝟥',
            0x4: '𝟦',
            0x5: '𝟧',
            0x6: '𝟨',
            0x7: '𝟩',
            0x8: '𝟪',
            0x9: '𝟫',
            'a': '𝒶',
            'b': '𝒷',
            'c': '𝒸',
            'd': '𝒹',
            'e': '𝑒',
            'f': '𝒻',
            'g': '𝑔',
            'h': '𝒽',
            'i': '𝒾',
            'j': '𝒿',
            'k': '𝓀',
            'l': '𝓁',
            'm': '𝓂',
            'n': '𝓃',
            'o': '𝑜',
            'p': '𝓅',
            'q': '𝓆',
            'r': '𝓇',
            's': '𝓈',
            't': '𝓉',
            'u': '𝓊',
            'v': '𝓋',
            'w': '𝓌',
            'x': '𝓍',
            'y': '𝓎',
            'z': '𝓏',
            'A': '𝒜',
            'B': '𝐵',
            'C': '𝒞',
            'D': '𝒟',
            'E': '𝐸',
            'F': '𝐹',
            'G': '𝒢',
            'H': '𝐻',
            'J': '𝒥',
            'K': '𝒦',
            'I': '𝐼',
            'L': '𝐿',
            'M': '𝑀',
            'N': '𝒩',
            'O': '𝒪',
            'P': '𝒫',
            'Q': '𝒬',
            'R': '𝑅',
            'S': '𝒮',
            'T': '𝒯',
            'U': '𝒰',
            'V': '𝒱',
            'W': '𝒲',
            'X': '𝒳',
            'Y': '𝒴',
            'Z': '𝒵'
        },
        _0x4a64b2 = _0x4d9658[_0x5315fc(0x2f1)]('');
    for (var _0x5255be = 0x0; _0x5255be < _0x4a64b2[_0x5315fc(0x4d3)]; _0x5255be++) {
        _0x48347a[_0x4a64b2[_0x5255be][_0x5315fc(0x297)]()] && (_0x4a64b2[_0x5255be] = _0x48347a[_0x4a64b2[_0x5255be]]);
    }
    return _0x4d9658 = _0x4a64b2[_0x5315fc(0x280)](''), _0x4d9658;
}

function shuffleArray(_0x2be8a3) {
    var _0x5a49af = _0x6ecdde,
        _0x5cb06f = _0x2be8a3[_0x5a49af(0x4d3)],
        _0x49bce5, _0x3e6cd2;
    while (0x0 !== _0x5cb06f) {
        _0x3e6cd2 = Math['floor'](Math['random']() * _0x5cb06f), _0x5cb06f -= 0x1, _0x49bce5 = _0x2be8a3[_0x5cb06f], _0x2be8a3[_0x5cb06f] = _0x2be8a3[_0x3e6cd2], _0x2be8a3[_0x3e6cd2] = _0x49bce5;
    }
    return _0x2be8a3;
}

function randomElement(_0x1d5ebc) {
    var _0x5a1f71 = _0x6ecdde;
    return _0x1d5ebc[Math[_0x5a1f71(0xab)](Math['random']() * _0x1d5ebc[_0x5a1f71(0x4d3)])];
}! function(_0x1c9962) {
    var _0x35a0a8 = _0x6ecdde,
        _0x4df564 = 'object' == typeof exports && exports,
        _0x5eed70 = _0x35a0a8(0x17b) == typeof module && module && module[_0x35a0a8(0x44)] == _0x4df564 && module,
        _0x12edd8 = _0x35a0a8(0x17b) == typeof global && global;
    (_0x12edd8[_0x35a0a8(0x385)] === _0x12edd8 || _0x12edd8['window'] === _0x12edd8) && (_0x1c9962 = _0x12edd8);
    var _0x554555 = /(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g,
        _0x51e9e3 = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,
        _0x22d9f1 = function(_0x490a56) {
            var _0x1e3e61 = _0x35a0a8;
            _0x490a56 = _0x490a56[_0x1e3e61(0x2f4)](_0x554555, function(_0x24ac5f, _0x1e6e3b, _0x3eac0b) {
                return _0x22d9f1(_0x3eac0b) + _0x1e6e3b;
            })[_0x1e3e61(0x2f4)](_0x51e9e3, _0x1e3e61(0x398));
            for (var _0x17bed6 = '', _0x4777c1 = _0x490a56[_0x1e3e61(0x4d3)]; _0x4777c1--;) _0x17bed6 += _0x490a56[_0x1e3e61(0x22)](_0x4777c1);
            return _0x17bed6;
        },
        _0x1d52a9 = {
            'version': _0x35a0a8(0x41d),
            'reverse': _0x22d9f1
        };
    if (_0x35a0a8(0x2dd) == typeof define && _0x35a0a8(0x17b) == typeof define[_0x35a0a8(0x90)] && define[_0x35a0a8(0x90)]) define(function() {
        return _0x1d52a9;
    });
    else {
        if (_0x4df564 && !_0x4df564[_0x35a0a8(0x15e)]) {
            if (_0x5eed70) _0x5eed70[_0x35a0a8(0x44)] = _0x1d52a9;
            else {
                for (var _0x15a98a in _0x1d52a9) _0x1d52a9[_0x35a0a8(0x324)](_0x15a98a) && (_0x4df564[_0x15a98a] = _0x1d52a9[_0x15a98a]);
            }
        } else _0x1c9962[_0x35a0a8(0xa7)] = _0x1d52a9;
    }
}(this);

function fullCrazy(_0x8f538a) {
    var _0x5b9206 = _0x6ecdde;
    if (_0x8f538a[_0x5b9206(0x4b4)]() === '') return '';
    return randomSymbols(0x2) + '\x20\x20' + crazifyText(_0x8f538a) + '\x20\x20' + randomSymbols(0x2);
}

function crazifyText(_0x2d27f3) {
    var _0x408679 = _0x6ecdde;
    _0x2d27f3 = _0x2d27f3[_0x408679(0x2f1)]('');
    for (var _0x21ddbd = 0x0; _0x21ddbd < _0x2d27f3['length']; _0x21ddbd++) {
        _0x2d27f3[_0x21ddbd] = crazifyCharacter(_0x2d27f3[_0x21ddbd]);
    }
    return _0x2d27f3[_0x408679(0x280)]('');
}

function crazifyCharacter(_0x4d42ae) {
    var _0x50d543 = _0x6ecdde;
    _0x4d42ae = _0x4d42ae[_0x50d543(0x297)]();
    var _0x542192 = {
        '&': '⅋',
        '%': ['⅍', '℀', '℁', '℆', '℅'],
        0x0: ['０', 'Ѳ', 'ʘ'],
        0x1: ['➀', '❶', '１'],
        0x2: ['２', '❷', '➁'],
        0x3: ['３', '❸', '➂'],
        0x4: ['４', '❹', '➃'],
        0x5: ['❺', '➄', '５'],
        0x6: ['６', '❻', '➅'],
        0x7: ['７', '❼', '➆'],
        0x8: ['８', '➇', '❽'],
        0x9: ['➈', '❾', '９'],
        '<': ['≼', '≺', '≪', '☾', '≾', '⋜', '⋞', '⋐', '⊂', '⊏', '⊑', '《', '＜', '❮', '❰', '⫷'],
        '>': '☽≫≻≽≿⋝⋟⋑⊃⊐⊒⫸》＞❯❱',
        '[': _0x50d543(0x329),
        ']': '】〗〙〛］',
        '*': '✨✩✪✫✬✭✮✯✰✦✱✲✳✴✵✶✷֍֎✸✹✺✻✼✽✾✿❀❁❂❃❄★☆＊',
        'a': ['Ⓐ', 'ⓐ', 'α', 'Ａ', 'ａ', 'ᗩ', '卂', 'Δ', 'ค', 'α', 'ά', 'Ã', '𝔞', '𝓪', '𝒶', '𝓐', '𝐀', '𝐚', '𝔸', '𝕒', 'ᵃ'],
        'b': ['Ⓑ', 'ⓑ', 'в', 'Ｂ', '乃', 'ｂ', 'ᗷ', 'β', '๒', 'в', 'в', 'β', '𝔟', '𝓫', '𝒷', '𝓑', '𝐁', '𝐛', '𝔹', '𝕓', 'ᵇ'],
        'c': ['Ⓒ', 'ⓒ', '匚', '¢', 'Ｃ', 'ｃ', 'ᑕ', 'Ć', 'ς', 'c', 'ς', 'Č', '℃', '𝔠', '𝓬', '𝒸', '𝓒', '𝐂', '𝐜', 'ℂ', '𝕔', 'ᶜ'],
        'd': ['Ⓓ', 'ⓓ', '∂', 'Ｄ', 'ｄ', 'ᗪ', 'Đ', '๔', '∂', 'đ', 'Ď', '𝔡', '𝓭', '𝒹', '𝓓', '𝐃', 'ᗪ', '𝐝', '𝔻', '𝕕', 'ᵈ'],
        'e': ['Ⓔ', '乇', 'ⓔ', 'є', 'Ｅ', 'ｅ', 'ᗴ', '€', 'є', 'ε', 'έ', 'Ẹ', '𝔢', '𝒆', '𝑒', '𝓔', '𝐄', '𝐞', '𝔼', '𝕖', 'ᵉ'],
        'f': ['Ⓕ', 'ⓕ', 'ƒ', 'Ｆ', 'ｆ', '千', 'ᖴ', 'ℱ', 'Ŧ', 'ғ', 'ғ', 'Ƒ', '𝔣', '𝒇', '𝒻', '𝓕', '𝐅', '𝐟', '𝔽', '𝕗', 'ᶠ'],
        'g': ['Ⓖ', 'ⓖ', 'ق', 'g', 'Ｇ', 'ｇ', 'Ǥ', 'Ꮆ', 'ﻮ', 'g', 'ģ', 'Ğ', '𝔤', '𝓰', '𝑔', '𝓖', '𝐆', '𝐠', '𝔾', '𝕘', 'ᵍ', 'Ꮆ'],
        'h': ['Ⓗ', '卄', 'ⓗ', 'н', 'Ｈ', 'ｈ', 'ᕼ', 'Ħ', 'ђ', 'н', 'ħ', 'Ĥ', '𝔥', '𝓱', '𝒽', '𝓗', '𝐇', '𝐡', 'ℍ', '𝕙', 'ʰ'],
        'i': ['Ⓘ', 'ⓘ', 'ι', 'Ｉ', 'ｉ', 'Ꭵ', '丨', 'Ɨ', 'เ', 'ι', 'ί', 'Į', '𝔦', '𝓲', '𝒾', '𝓘', '𝐈', '𝐢', '𝕀', '𝕚', 'ᶤ'],
        'j': ['Ⓙ', 'ⓙ', 'נ', 'Ｊ', 'ڶ', 'ｊ', 'ᒎ', 'Ĵ', 'ן', 'נ', 'ј', 'Ĵ', '𝔧', '𝓳', '𝒿', '𝓙', '𝐉', '𝐣', '𝕁', '𝕛', 'ʲ'],
        'k': ['Ⓚ', 'ⓚ', 'к', 'Ｋ', 'ｋ', 'ᛕ', 'Ҝ', 'к', 'к', 'ķ', 'Ќ', '𝔨', '𝓴', '𝓀', '𝓚', '𝐊', '𝐤', '𝕂', '𝕜', 'ᵏ', 'Ҝ'],
        'l': ['Ⓛ', 'ⓛ', 'ℓ', 'ㄥ', 'Ｌ', 'ｌ', 'ᒪ', 'Ł', 'l', 'ℓ', 'Ļ', 'Ĺ', '𝔩', '𝓵', '𝓁', '𝓛', '𝐋', '𝐥', '𝕃', '𝕝', 'ˡ'],
        'm': ['Ⓜ', 'ⓜ', 'м', 'Ｍ', 'ｍ', 'ᗰ', 'Μ', '๓', 'м', 'м', 'ϻ', '𝔪', '𝓶', '𝓂', '𝓜', '𝐌', '𝐦', '𝕄', '𝕞', 'ᵐ', '爪'],
        'n': ['Ⓝ', '几', 'ⓝ', 'η', 'Ｎ', 'ｎ', 'ᑎ', 'Ň', 'ภ', 'η', 'ή', 'Ň', '𝔫', '𝓷', '𝓃', '𝓝', '𝐍', '𝐧', 'ℕ', '𝕟', 'ᶰ'],
        'o': ['Ⓞ', 'ㄖ', 'ⓞ', 'σ', 'Ｏ', 'ｏ', 'ᗝ', 'Ø', '๏', 'σ', 'ό', 'Ỗ', '𝔬', '𝓸', '𝑜', '𝓞', '𝐎', '𝐨', '𝕆', '𝕠', 'ᵒ'],
        'p': ['Ⓟ', 'ⓟ', 'ρ', 'Ｐ', 'ｐ', '卩', 'ᑭ', 'Ƥ', 'ק', 'ρ', 'ρ', 'Ƥ', '𝔭', '𝓹', '𝓅', '𝓟', '𝐏', '𝐩', 'ℙ', '𝕡', 'ᵖ'],
        'q': ['Ⓠ', 'ⓠ', 'q', 'Ｑ', 'ｑ', 'Ɋ', 'Ω', 'ợ', 'q', 'q', 'Ǫ', '𝔮', '𝓺', '𝓆', '𝓠', '𝐐', '𝐪', 'ℚ', '𝕢', 'ᵠ'],
        'r': ['Ⓡ', 'ⓡ', 'я', '尺', 'Ｒ', 'ｒ', 'ᖇ', 'Ř', 'г', 'я', 'ŕ', 'Ř', '𝔯', '𝓻', '𝓇', '𝓡', '𝐑', '𝐫', 'ℝ', '𝕣', 'ʳ'],
        's': ['Ⓢ', 'ⓢ', 'ѕ', 'Ｓ', '丂', 'ｓ', 'ᔕ', 'Ş', 'ร', 's', 'ş', 'Ŝ', '𝔰', '𝓼', '𝓈', '𝓢', '𝐒', '𝐬', '𝕊', '𝕤', 'ˢ'],
        't': ['Ⓣ', 'ⓣ', 'т', 'Ｔ', 'ｔ', '丅', 'Ŧ', 't', 'т', 'ţ', 'Ť', '𝔱', '𝓽', '𝓉', '𝓣', '𝐓', '𝐭', '𝕋', '𝕥', 'ᵗ'],
        'u': ['Ⓤ', 'ⓤ', 'υ', 'Ｕ', 'ｕ', 'ᑌ', 'Ữ', 'ย', 'υ', 'ù', 'Ǘ', '𝔲', '𝓾', '𝓊', '𝓤', '𝐔', '𝐮', '𝕌', '𝕦', 'ᵘ'],
        'v': ['Ⓥ', 'ⓥ', 'ν', 'Ｖ', 'ｖ', 'ᐯ', 'V', 'ש', 'v', 'ν', 'Ѷ', '𝔳', '𝓿', '𝓋', '𝓥', '𝐕', '𝐯', '𝕍', '𝕧', 'ᵛ'],
        'w': ['Ⓦ', 'ⓦ', 'ω', 'Ｗ', 'ｗ', 'ᗯ', 'Ŵ', 'ฬ', 'ω', 'ώ', 'Ŵ', '𝔴', '𝔀', '𝓌', '𝓦', '𝐖', '𝐰', '𝕎', '𝕨', 'ʷ', '山'],
        'x': ['Ⓧ', 'ⓧ', 'χ', 'Ｘ', '乂', 'ｘ', '᙭', 'Ж', 'א', 'x', 'x', 'Ж', '𝔵', '𝔁', '𝓍', '𝓧', '𝐗', '𝐱', '𝕏', '𝕩', 'ˣ'],
        'y': ['Ⓨ', 'ㄚ', 'ⓨ', 'у', 'Ｙ', 'ｙ', 'Ƴ', '¥', 'ץ', 'ү', 'ч', 'Ў', '𝔶', '𝔂', '𝓎', '𝓨', '𝐘', '𝐲', '𝕐', '𝕪', 'ʸ'],
        'z': ['Ⓩ', 'ⓩ', 'z', '乙', 'Ｚ', 'ｚ', 'Ƶ', 'Ž', 'z', 'z', 'ž', 'Ż', '𝔷', '𝔃', '𝓏', '𝓩', '𝐙', '𝐳', 'ℤ', '𝕫', 'ᶻ']
    };
    return _0x542192[_0x4d42ae] ? randomElement(_0x542192[_0x4d42ae]) : _0x4d42ae;
}

function randomElement(_0x46ad43) {
    var _0x581b0b = _0x6ecdde;
    return _0x46ad43[Math[_0x581b0b(0xab)](Math['random']() * _0x46ad43[_0x581b0b(0x4d3)])];
}

function randomSymbols(_0x4d1a27) {
    var _0x1c3b0a = _0x6ecdde,
        _0x7d0110 = ['🐙', '🐉', '🐊', '🐒', '🐝', '🐜', '🐚', '🐲', '🐳', '🐸', '👑', '👹', '👺', '👤', '💲', '💣', '💙', '💚', '💛', '💜', '💝', '💗', '💘', '💞', '💔', '💥', '🐯', '🐼', '🐻', '🐺', '👌', '🐍', '🐧', '🐟', '🐠', '🐨', '🎯', '🏆', '🎁', '🎀', '🎉', '🎈', '🍮', '🍭', '🍬', '🍫', '🍪', '🍧', '🌷', '🍓', '😺', '😾', '✎', '😎', '😝', '😂', '😈', '😡', '😲', '😳', '🍔', '🍟', '🍩', '🎃', '🎄', '🎅', '🐣', '🐤', '👍', '👊', '👻', '👽', '👮', '💎', '💋', '👣', '💀', '💢', '🔥', '♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '♠', '♡', '♢', '♣', '♤', '♥', '♦', '♧', '♨', '♩', '♪', '♬', '★', '☆', '☺', '☹', '☯', '☮', '☢', '☠', '☟', '☞', '☝', '☜', '✌', '✋', '✊', '⛵', 'ൠ', '✌', 'ඏ'],
        _0x3a5685 = [];
    for (var _0x4e72fa = 0x0; _0x4e72fa < _0x4d1a27; _0x4e72fa++) _0x3a5685[_0x1c3b0a(0x39a)](randomElement(_0x7d0110));
    return _0x3a5685[_0x1c3b0a(0x280)]('');
}

function randInt(_0x37fdf1, _0x54e6f9) {
    var _0x73185f = _0x6ecdde;
    return _0x37fdf1 + Math[_0x73185f(0xab)](Math[_0x73185f(0x1c)]() * (_0x54e6f9 - _0x37fdf1 + 0x1));
}
$(document)['ready'](function() {
    var _0x1ce6f9 = _0x6ecdde;
    $(_0x1ce6f9(0x270))[_0x1ce6f9(0xed)](_0x1ce6f9(0x409)), $(_0x1ce6f9(0x29))['on']('input\x20change', function() {
        var _0x2eecdb = _0x1ce6f9;
        $('<style>\x20.DiscordFonts\x20p{font-size:' + $(this)['val']() + _0x2eecdb(0xc9))['insertBefore'](_0x2eecdb(0x409));
    }), _0x5c8ab5(default_text), $(_0x1ce6f9(0x49f))['on']('input', function(_0x982b9) {
        var _0x2e3e3f = _0x1ce6f9;
        if ($(_0x2e3e3f(0xc8))['val']() < 0x1) _0x5c8ab5(default_text);
        else {
            var _0x4e5e92 = $(_0x2e3e3f(0xc8))[_0x2e3e3f(0x6d)]();
            _0x5c8ab5(_0x4e5e92);
        }
    });
    var _0x2752ac = window[_0x1ce6f9(0x220)][_0x1ce6f9(0x47f)],
        _0x179a13 = _0x2752ac[_0x1ce6f9(0x2f1)](_0x1ce6f9(0x3f3));
    urltext = _0x179a13[0x1];
    urltext && (urltext = decodeURIComponent(urltext), $(_0x1ce6f9(0xc8))[_0x1ce6f9(0x6d)](urltext), _0x5c8ab5(urltext));

    function _0x5c8ab5(_0x104d52) {
        var _0x19837d = _0x1ce6f9;
        _0x104d52 = _0x104d52[_0x19837d(0x4b4)](), $(_0x19837d(0x185))[_0x19837d(0x89)](Change(_0x104d52, 's1')), $('.result-s2')[_0x19837d(0x89)](Change(_0x104d52, 's2')), $(_0x19837d(0x3ab))[_0x19837d(0x89)](Change(_0x104d52, 's3')), $('.result-s4')[_0x19837d(0x89)](Change(_0x104d52, 's4')), $(_0x19837d(0x2cf))[_0x19837d(0x89)](Change(_0x104d52, 's5')), $('.result-s6')[_0x19837d(0x89)](Change(_0x104d52, 's6')), $('.result-s7')[_0x19837d(0x89)](Change(_0x104d52, 's7')), $('.result-s8')[_0x19837d(0x89)](Change(_0x104d52, 's8')), $(_0x19837d(0x300))[_0x19837d(0x89)](Change(_0x104d52, 's9')), $(_0x19837d(0x396))[_0x19837d(0x89)](Change(_0x104d52, _0x19837d(0x79))), $(_0x19837d(0x440))[_0x19837d(0x89)](Change(_0x104d52, _0x19837d(0x3b7))), $('.result-s12')[_0x19837d(0x89)](Change(_0x104d52, _0x19837d(0x1c7))), $(_0x19837d(0x3d2))['html'](Change(_0x104d52, _0x19837d(0x334))), $(_0x19837d(0x461))[_0x19837d(0x89)](Change(_0x104d52, 's14')), $(_0x19837d(0x368))[_0x19837d(0x89)](Change(_0x104d52, 's15')), $(_0x19837d(0x183))[_0x19837d(0x89)](Change(_0x104d52, _0x19837d(0x1ce))), $(_0x19837d(0x2f5))[_0x19837d(0x89)](Change(_0x104d52, _0x19837d(0x43f))), $(_0x19837d(0x53))[_0x19837d(0x89)](Change(_0x104d52, 's18')), $('.result-s19')['html'](Change(_0x104d52, _0x19837d(0x236))), $(_0x19837d(0x33))['html'](Change(_0x104d52, _0x19837d(0x104))), $('.result-s21')['html'](Change(_0x104d52, 's21')), $(_0x19837d(0x205))[_0x19837d(0x89)](Change(_0x104d52, 's22')), $(_0x19837d(0x2b8))[_0x19837d(0x89)](Change(_0x104d52, 's23')), $(_0x19837d(0x2d1))['html'](Change(_0x104d52, _0x19837d(0x67))), $(_0x19837d(0x25))[_0x19837d(0x89)](Change(_0x104d52, _0x19837d(0x109))), $(_0x19837d(0x3d1))[_0x19837d(0x89)](Change(_0x104d52, _0x19837d(0x3e0))), $(_0x19837d(0x436))[_0x19837d(0x89)](Change(_0x104d52, 's27')), $(_0x19837d(0x47c))['html'](Change(_0x104d52, _0x19837d(0x121))), $(_0x19837d(0x157))[_0x19837d(0x89)](Change(_0x104d52, _0x19837d(0x25c))), $('.result-s31')[_0x19837d(0x89)](Change(_0x104d52, _0x19837d(0x4e6))), $('.lunitoolsbubbles')[_0x19837d(0x89)](luni[_0x19837d(0x16b)][_0x19837d(0x2b)][_0x19837d(0x315)](_0x104d52)), $(_0x19837d(0x376))[_0x19837d(0x89)](applyCharMap(invertedSquaresCharMap, _0x104d52)), $(_0x19837d(0x21))[_0x19837d(0x89)](illuminati(_0x104d52)), $('.textgun')[_0x19837d(0x89)](textgun(_0x104d52)), $('.minigame')['html'](minigame(_0x104d52)), $('.pubggame1')[_0x19837d(0x89)](pubggame1(_0x104d52)), $(_0x19837d(0xa4))[_0x19837d(0x89)](pubggame2(_0x104d52)), $(_0x19837d(0x3dc))[_0x19837d(0x89)](pubggame3(_0x104d52)), $(_0x19837d(0x365))['html'](bricks(_0x104d52)), $(_0x19837d(0xcb))['html'](bigrus(_0x104d52)), $(_0x19837d(0x1cf))[_0x19837d(0x89)](applyCharMap(wideTextCharMap, _0x104d52)), $(_0x19837d(0x13f))[_0x19837d(0x89)](luni['tools'][_0x19837d(0x411)][_0x19837d(0x315)](_0x104d52)), $(_0x19837d(0xe2))[_0x19837d(0x89)](luni[_0x19837d(0x16b)]['flip'][_0x19837d(0x315)](_0x104d52)), $(_0x19837d(0x228))[_0x19837d(0x89)](applyCharMap(squaresCharMap, _0x104d52)), $(_0x19837d(0x9))[_0x19837d(0x89)](luni['tools'][_0x19837d(0x2d4)][_0x19837d(0x315)](_0x104d52)), $(_0x19837d(0x115))[_0x19837d(0x89)](applyCharMap(subscriptCharMap, _0x104d52)), $(_0x19837d(0x3bb))[_0x19837d(0x89)](applyCharMap(superscriptCharMap, _0x104d52)), $(_0x19837d(0x1d4))[_0x19837d(0x89)](applyCharMap(bentTextCharMap, _0x104d52)), $(_0x19837d(0x3a6))[_0x19837d(0x89)](applyCharMap(neonCharMap, _0x104d52)), $(_0x19837d(0x4e2))['html'](applyCharMap(futureAlienCharMap, _0x104d52)), $(_0x19837d(0x4a4))[_0x19837d(0x89)](strikeThrough(_0x104d52)), $(_0x19837d(0x4b0))[_0x19837d(0x89)](tildeStrikeThrough(_0x104d52)), $('.slashThrough')[_0x19837d(0x89)](slashThrough(_0x104d52)), $('.underline')[_0x19837d(0x89)](underline(_0x104d52)), $(_0x19837d(0xeb))[_0x19837d(0x89)](doubleUnderline(_0x104d52)), $(_0x19837d(0x3ea))[_0x19837d(0x89)](luni['tools'][_0x19837d(0x10f)][_0x19837d(0x315)](_0x104d52)), $(_0x19837d(0x441))[_0x19837d(0x89)](applyCharMap(squiggleCharMap, _0x104d52)), $(_0x19837d(0x402))['html'](applyCharMap(squiggle2CharMap, _0x104d52)), $(_0x19837d(0xc2))[_0x19837d(0x89)](applyCharMap(squiggle3CharMap, _0x104d52)), $(_0x19837d(0x30))[_0x19837d(0x89)](applyCharMap(squiggle4CharMap, _0x104d52)), $(_0x19837d(0x15b))[_0x19837d(0x89)](applyCharMap(squiggle5CharMap, _0x104d52)), $(_0x19837d(0x2e8))[_0x19837d(0x89)](applyCharMap(squiggle6CharMap, _0x104d52)), $(_0x19837d(0x49d))[_0x19837d(0x89)](applyCharMap(boldCharMap, _0x104d52)), $(_0x19837d(0x18))['html'](luni[_0x19837d(0x16b)][_0x19837d(0x404)][_0x19837d(0x315)](_0x104d52)), $(_0x19837d(0x1f2))['html'](luni[_0x19837d(0x16b)]['squares']['encode'](_0x104d52[_0x19837d(0x4b8)]())), $(_0x19837d(0x242))[_0x19837d(0x89)](applyCharMap(oldEnglishCharMap, _0x104d52)), $('.medievalCharMap')[_0x19837d(0x89)](applyCharMap(medievalCharMap, _0x104d52)), $(_0x19837d(0x4f8))[_0x19837d(0x89)](applyCharMap(cursiveCharMap, _0x104d52)), $(_0x19837d(0x239))[_0x19837d(0x89)](scriptify(_0x104d52)), $('.doubleStruckCharMap')[_0x19837d(0x89)](applyCharMap(doubleStruckCharMap, _0x104d52)), $('.italicCharMap')[_0x19837d(0x89)](applyCharMap(italicCharMap, _0x104d52)), $(_0x19837d(0x168))[_0x19837d(0x89)](applyCharMap(boldItalicCharMap, _0x104d52)), $('.monospaceCharMap')['html'](applyCharMap(monospaceCharMap, _0x104d52)), $(_0x19837d(0x176))[_0x19837d(0x89)](applyCharMap(upperAnglesCharMap, _0x104d52)), $(_0x19837d(0x2f6))[_0x19837d(0x89)](applyCharMap(greekCharMap, _0x104d52)), $(_0x19837d(0x2e9))[_0x19837d(0x89)](applyCharMap(symbolsCharMap, _0x104d52)), $(_0x19837d(0x5a))[_0x19837d(0x89)](applyCharMap(currencyCharMap, _0x104d52)), $(_0x19837d(0x379))[_0x19837d(0x89)](applyCharMap(asianStyleCharMap, _0x104d52)), $(_0x19837d(0x4d5))[_0x19837d(0x89)](applyCharMap(asianStyle2CharMap, _0x104d52)), $(_0x19837d(0x215))[_0x19837d(0x89)](thickBlockFramed(_0x104d52)), $(_0x19837d(0x35f))[_0x19837d(0x89)](diametricAngleFrame(_0x104d52)), $('.wavyJoiner')[_0x19837d(0x89)](wavyJoiner(_0x104d52)), $(_0x19837d(0x46d))[_0x19837d(0x89)](dottyJoiner(_0x104d52)), $('.kirbyHug')[_0x19837d(0x89)](kirbyHug(_0x104d52)), $(_0x19837d(0x3bd))[_0x19837d(0x89)](vaporwaveText(_0x104d52)), $('.vaporwaveText1')[_0x19837d(0x89)](vaporwaveText1(_0x104d52)), $(_0x19837d(0x4c9))[_0x19837d(0x89)](vaporwaveText2(_0x104d52)), $(_0x19837d(0x320))[_0x19837d(0x89)](littleSparkles(_0x104d52)), $('.weirdBox')[_0x19837d(0x89)](weirdBox(_0x104d52)), $(_0x19837d(0x99))[_0x19837d(0x89)](thickBox(_0x104d52)), $('.zigzagJoiner')[_0x19837d(0x89)](zigzagJoiner(_0x104d52)), $(_0x19837d(0x55))[_0x19837d(0x89)](hashJoiner(_0x104d52)), $(_0x19837d(0x4ac))[_0x19837d(0x89)](starJoiner(_0x104d52)), $(_0x19837d(0x16a))['html'](connectedJoiner(_0x104d52)), $('.arrowjoin')['html'](arrowjoin(_0x104d52)), $(_0x19837d(0x451))['html'](dotBoxtwo(_0x104d52)), $(_0x19837d(0x4cb))[_0x19837d(0x89)](dotBox(_0x104d52)), $(_0x19837d(0x45b))[_0x19837d(0x89)](diametricBox(_0x104d52)), $(_0x19837d(0x1e7))[_0x19837d(0x89)](arrowBox(_0x104d52)), $(_0x19837d(0x7d))[_0x19837d(0x89)](curlybrackets(_0x104d52)), $(_0x19837d(0x133))[_0x19837d(0x89)](singlewavyJoiner(_0x104d52)), $(_0x19837d(0x1b2))['html'](firework(_0x104d52)), $(_0x19837d(0x494))[_0x19837d(0x89)](stinky(_0x104d52)), $('.heartsBetween')['html'](heartsBetween(_0x104d52)), $(_0x19837d(0x308))['html'](arrowBelow(_0x104d52)), $(_0x19837d(0x150))[_0x19837d(0x89)](crossAboveBelow(_0x104d52)), $(_0x19837d(0x312))['html'](wingdings(_0x104d52)), $(_0x19837d(0x485))['html'](fullCrazy(_0x104d52)), $('.crazyWithFlourishOrSymbols')['html'](crazyWithFlourishOrSymbols(_0x104d52)), $(_0x19837d(0x2af))[_0x19837d(0x89)](cuteText(_0x104d52)), $(_0x19837d(0x3a5))['html'](star0(_0x104d52)), $(_0x19837d(0x1ed))[_0x19837d(0x89)](star1(_0x104d52)), $(_0x19837d(0xfc))[_0x19837d(0x89)](star2(_0x104d52)), $(_0x19837d(0x256))[_0x19837d(0x89)](star3(_0x104d52)), $(_0x19837d(0x258))['html'](star4(_0x104d52)), $(_0x19837d(0x295))[_0x19837d(0x89)](star5(_0x104d52)), $(_0x19837d(0x39c))[_0x19837d(0x89)](star6(_0x104d52)), $(_0x19837d(0x472))[_0x19837d(0x89)](star7(_0x104d52)), $(_0x19837d(0x51))[_0x19837d(0x89)](star8(_0x104d52)), $(_0x19837d(0x29d))[_0x19837d(0x89)](star9(_0x104d52)), $(_0x19837d(0x380))['html'](star10(_0x104d52)), $(_0x19837d(0x373))['html'](heart0(_0x104d52)), $(_0x19837d(0x26e))[_0x19837d(0x89)](heart1(_0x104d52)), $(_0x19837d(0x248))[_0x19837d(0x89)](heart2(_0x104d52)), $(_0x19837d(0x3ca))['html'](heart3(_0x104d52)), $(_0x19837d(0x8a))[_0x19837d(0x89)](heart4(_0x104d52)), $('.heart5')[_0x19837d(0x89)](heart5(_0x104d52)), $(_0x19837d(0x83))[_0x19837d(0x89)](heart6(_0x104d52)), $('.heart7')[_0x19837d(0x89)](heart7(_0x104d52)), $('.emoticon0')[_0x19837d(0x89)](emoticon0(_0x104d52)), $(_0x19837d(0x45e))[_0x19837d(0x89)](emoticon1(_0x104d52)), $('.emoticon2')[_0x19837d(0x89)](emoticon2(_0x104d52)), $(_0x19837d(0x7e))['html'](emoticon3(_0x104d52)), $(_0x19837d(0x1c0))[_0x19837d(0x89)](emoticon4(_0x104d52)), $(_0x19837d(0x114))[_0x19837d(0x89)](emoticon5(_0x104d52)), $(_0x19837d(0x424))['html'](emoticon6(_0x104d52)), $(_0x19837d(0xc))['html'](emoticon7(_0x104d52)), $(_0x19837d(0x1e4))[_0x19837d(0x89)](thankyou0(_0x104d52)), $(_0x19837d(0x2a1))[_0x19837d(0x89)](thankyou1(_0x104d52)), $(_0x19837d(0x4f7))[_0x19837d(0x89)](thankyou2(_0x104d52)), $('.thankyou3')[_0x19837d(0x89)](thankyou3(_0x104d52)), $(_0x19837d(0x88))[_0x19837d(0x89)](thankyou4(_0x104d52)), $(_0x19837d(0x2f9))[_0x19837d(0x89)](thankyou5(_0x104d52)), $(_0x19837d(0x4c5))[_0x19837d(0x89)](thankyou6(_0x104d52)), $(_0x19837d(0x13))[_0x19837d(0x89)](thankyou7(_0x104d52)), $('.sad0')[_0x19837d(0x89)](sad0(_0x104d52)), $(_0x19837d(0x110))[_0x19837d(0x89)](sad1(_0x104d52)), $(_0x19837d(0x2bc))[_0x19837d(0x89)](sad2(_0x104d52)), $(_0x19837d(0x10d))[_0x19837d(0x89)](sad3(_0x104d52)), $(_0x19837d(0xdd))['html'](sad4(_0x104d52)), $('.sad5')[_0x19837d(0x89)](sad5(_0x104d52)), $(_0x19837d(0x298))[_0x19837d(0x89)](sad6(_0x104d52)), $(_0x19837d(0xf7))[_0x19837d(0x89)](sad7(_0x104d52)), $(_0x19837d(0xc4))[_0x19837d(0x89)](cuteText1(_0x104d52)), $(_0x19837d(0x1af))['html'](cuteText2(_0x104d52)), $(_0x19837d(0x462))['html'](cuteText3(_0x104d52)), $(_0x19837d(0x3fc))[_0x19837d(0x89)](cuteText4(_0x104d52)), $(_0x19837d(0x12))[_0x19837d(0x89)](cuteText5(_0x104d52)), $(_0x19837d(0x45d))[_0x19837d(0x89)](crazyWithFlourishOrSymbols1(_0x104d52)), $(_0x19837d(0x508))[_0x19837d(0x89)](crazyWithFlourishOrSymbols2(_0x104d52)), $('.crazyWithFlourishOrSymbols3')[_0x19837d(0x89)](crazyWithFlourishOrSymbols3(_0x104d52)), $('.crazyWithFlourishOrSymbols4')[_0x19837d(0x89)](crazyWithFlourishOrSymbols4(_0x104d52)), $('.crazyWithFlourishOrSymbols5')['html'](crazyWithFlourishOrSymbols5(_0x104d52)), $(_0x19837d(0xa0))[_0x19837d(0x89)](fullCrazy1(_0x104d52)), $(_0x19837d(0x45a))[_0x19837d(0x89)](fullCrazy2(_0x104d52)), $(_0x19837d(0x326))[_0x19837d(0x89)](fullCrazy3(_0x104d52)), $(_0x19837d(0x4e))[_0x19837d(0x89)](fullCrazy4(_0x104d52)), $(_0x19837d(0xa5))[_0x19837d(0x89)](fullCrazy5(_0x104d52)), $(_0x19837d(0x3b6))['html'](wrap1(_0x104d52)), $('.wrap2')[_0x19837d(0x89)](wrap2(_0x104d52)), $(_0x19837d(0x48e))[_0x19837d(0x89)](wrap3(_0x104d52)), $(_0x19837d(0x39f))[_0x19837d(0x89)](wrap4(_0x104d52)), $('.wrap5')[_0x19837d(0x89)](wrap5(_0x104d52));
    }
    $(_0x1ce6f9(0x9b))[_0x1ce6f9(0x262)](function() {
        var _0xce9202 = _0x1ce6f9;
        $(_0xce9202(0xc8))['val']('');
    });

    function _0x1f4334() {
        var _0x4d3df5 = _0x1ce6f9,
            _0x203324 = document[_0x4d3df5(0x44c)](_0x4d3df5(0x33b)),
            _0x175e3f = _0x203324[_0x4d3df5(0x44c)](_0x4d3df5(0x450));
        document['querySelectorAll'](_0x4d3df5(0x477))[_0x4d3df5(0x57)](_0x2367ff => {
            var _0x1e3f94 = _0x4d3df5;
            _0x2367ff[_0x1e3f94(0x35)](_0x1e3f94(0x262), () => {
                var _0x4e5fdb = _0x1e3f94;
                _0x175e3f[_0x4e5fdb(0x336)] = _0x2367ff[_0x4e5fdb(0x44c)]('p')[_0x4e5fdb(0x4cf)], _0x1edf1f(_0x175e3f), _0x203324[_0x4e5fdb(0x17)][_0x4e5fdb(0x359)](_0x4e5fdb(0xec)), setTimeout(() => {
                    var _0x2a861e = _0x4e5fdb;
                    _0x203324[_0x2a861e(0x17)]['remove'](_0x2a861e(0xec));
                }, 0x3e8);
            });
        });
    }
    _0x1f4334();

    function _0x1edf1f(_0x36eca2) {
        var _0x2f347f = _0x1ce6f9,
            _0x3b18bd = document[_0x2f347f(0x3c0)](_0x2f347f(0x483));
        _0x3b18bd[_0x2f347f(0x336)] = _0x36eca2[_0x2f347f(0x4cf)] || _0x36eca2[_0x2f347f(0x336)], document['body'][_0x2f347f(0x7f)](_0x3b18bd), _0x3b18bd['select'](), document['execCommand'](_0x2f347f(0x370)), _0x3b18bd[_0x2f347f(0x1e0)]();
    }
});
