var _0x187c56 = _0x2856,
    normal = _0x187c56(0xb4),
    default_text = _0x187c56(0x5a);

function applyCharMap(_0x3593fc, _0x3c857c) {
    var _0x9cc90b = _0x187c56;
    let _0x2eba9c = '';
    for (let _0x38d6a5 of _0x3c857c[_0x9cc90b(0x3d3)]('')) {
        if (_0x3593fc[_0x38d6a5] !== undefined) _0x2eba9c += _0x3593fc[_0x38d6a5];
        else {
            if (_0x3593fc[_0x38d6a5[_0x9cc90b(0x187)]()] !== undefined) _0x2eba9c += _0x3593fc[_0x38d6a5[_0x9cc90b(0x187)]()];
            else _0x2eba9c += _0x38d6a5;
        }
    }
    return _0x2eba9c;
}

function invertedSquaresCharMapFun(_0x54a082) {
    return applyCharMap(invertedSquaresCharMap, _0x54a082);
}

function wideTextCharMapFun(_0x34724b) {
    return applyCharMap(wideTextCharMap, _0x34724b);
}

function squaresCharMapFun(_0xafecf5) {
    return applyCharMap(squaresCharMap, _0xafecf5);
}

function subscriptCharMapFun(_0x1cc8b9) {
    return applyCharMap(subscriptCharMap, _0x1cc8b9);
}

function bentTextCharMapFun(_0x3d5568) {
    return applyCharMap(bentTextCharMap, _0x3d5568);
}

function neonCharMapFun(_0x26389e) {
    return applyCharMap(neonCharMap, _0x26389e);
}

function futureAlienCharMapFun(_0x525de7) {
    return applyCharMap(futureAlienCharMap, _0x525de7);
}

function squiggleCharMapFun(_0x9ef357) {
    return applyCharMap(squiggleCharMap, _0x9ef357);
}

function squiggle2CharMapFun(_0x164b5f) {
    return applyCharMap(squiggle2CharMap, _0x164b5f);
}

function squiggle3CharMapFun(_0x4e6998) {
    return applyCharMap(squiggle3CharMap, _0x4e6998);
}

function squiggle4CharMapFun(_0x4c7361) {
    return applyCharMap(squiggle4CharMap, _0x4c7361);
}

function squiggle5CharMapFun(_0x40e703) {
    return applyCharMap(squiggle5CharMap, _0x40e703);
}

function squiggle6CharMapFun(_0x50e56e) {
    return applyCharMap(squiggle6CharMap, _0x50e56e);
}

function boldCharMapFun(_0x274b8a) {
    return applyCharMap(boldCharMap, _0x274b8a);
}

function oldEnglishCharMapFun(_0x324268) {
    return applyCharMap(oldEnglishCharMap, _0x324268);
}

function medievalCharMapFun(_0xa1a033) {
    return applyCharMap(medievalCharMap, _0xa1a033);
}

function cursiveCharMapFun(_0xb32270) {
    return applyCharMap(cursiveCharMap, _0xb32270);
}

function doubleStruckCharMapFun(_0x3f1198) {
    return applyCharMap(doubleStruckCharMap, _0x3f1198);
}

function italicCharMapFun(_0x55f486) {
    return applyCharMap(italicCharMap, _0x55f486);
}

function boldItalicCharMapFun(_0x23a79f) {
    return applyCharMap(boldItalicCharMap, _0x23a79f);
}

function monospaceCharMapFun(_0x45aad1) {
    return applyCharMap(monospaceCharMap, _0x45aad1);
}

function upperAnglesCharMapFun(_0x47fc06) {
    return applyCharMap(upperAnglesCharMap, _0x47fc06);
}

function greekCharMapFun(_0xa9ffef) {
    return applyCharMap(greekCharMap, _0xa9ffef);
}

function symbolsCharMapFun(_0x382759) {
    return applyCharMap(symbolsCharMap, _0x382759);
}

function currencyCharMapFun(_0x34fbae) {
    return applyCharMap(currencyCharMap, _0x34fbae);
}

function asianStyleCharMapFun(_0x3326ea) {
    return applyCharMap(asianStyleCharMap, _0x3326ea);
}

function asianStyle2CharMapFun(_0x57e4a4) {
    return applyCharMap(asianStyle2CharMap, _0x57e4a4);
}
var luni = new Lunicode();
luni[_0x187c56(0x1e6)][_0x187c56(0x19)][_0x187c56(0x152)]['maxHeight'] = 0xa;

function crazyWithFlourishOrSymbols(_0x2e6596) {
    var _0x1f524a = _0x187c56;
    if (Math[_0x1f524a(0xe6)]() < 0.7) return wrapInSymbols(crazifyText(_0x2e6596), 0x2);
    else return wrapInFlourish(crazifyText(_0x2e6596), 0x2);
}

function illuminati(_0x321ea6) {
    var _0x21ce29 = _0x187c56;
    return applyCharMap(doubleStruckCharMap, _0x21ce29(0x219) + _0x321ea6 + _0x21ce29(0x3b4));
}

function textgun(_0x44e8a4) {
    var _0x4715b1 = _0x187c56;
    return _0x4715b1(0x479) + _0x44e8a4[_0x4715b1(0x3d3)]('')['join'](_0x4715b1(0x131)) + _0x4715b1(0x1d9);
}

function minigame(_0x3ea6bd) {
    var _0x2d3ffc = _0x187c56;
    return _0x2d3ffc(0x40e) + luni[_0x2d3ffc(0x1e6)][_0x2d3ffc(0xc5)][_0x2d3ffc(0x2f7)](_0x3ea6bd) + _0x2d3ffc(0x205);
}

function pubggame1(_0x49caa9) {
    return applyCharMap(cursiveCharMap, '༒☬' + _0x49caa9 + '☬༒');
}

function pubggame2(_0x1fa883) {
    var _0x5ef0c5 = _0x187c56;
    return applyCharMap(cursiveCharMap, _0x5ef0c5(0x2fc) + _0x1fa883 + '༻༒۝');
}

function pubggame3(_0x1a2b1b) {
    var _0x59ac20 = _0x187c56;
    return applyCharMap(invertedSquaresCharMap, _0x59ac20(0x82) + _0x1a2b1b + _0x59ac20(0x316));
}

function bricks(_0x576c55) {
    var _0x49095a = _0x187c56;
    return applyCharMap(squaresCharMap, _0x49095a(0x1cc) + _0x576c55 + _0x49095a(0x2a1));
}

function bigrus(_0x1d38eb) {
    var _0x2cef46 = _0x187c56;
    return applyCharMap(boldItalicCharMap, _0x2cef46(0x272) + _0x1d38eb + '♥࿐٭');
}

function strikeThrough(_0x3597a5) {
    var _0x25a306 = _0x187c56;
    return _0x3597a5[_0x25a306(0x3d3)]('')[_0x25a306(0x211)]('̶') + '̶';
}

function tildeStrikeThrough(_0x2dd208) {
    var _0x530072 = _0x187c56;
    return _0x2dd208[_0x530072(0x3d3)]('')[_0x530072(0x211)]('̴') + '̴';
}

function underline(_0x2888e6) {
    var _0x34113c = _0x187c56;
    return _0x2888e6['split']('')[_0x34113c(0x211)]('̲') + '̲';
}

function doubleUnderline(_0x21c6cb) {
    var _0x34a5aa = _0x187c56;
    return _0x21c6cb[_0x34a5aa(0x3d3)]('')[_0x34a5aa(0x211)]('̳') + '̳';
}

function slashThrough(_0x1aad90) {
    var _0x2398bc = _0x187c56;
    return _0x1aad90['split']('')[_0x2398bc(0x211)]('̷') + '̷';
}

function stinky(_0x484854) {
    var _0x292a53 = _0x187c56;
    return _0x484854[_0x292a53(0x3d3)]('')[_0x292a53(0x211)]('̾') + '̾';
}

function heartsBetween(_0x36e033) {
    var _0x4d06f2 = _0x187c56;
    return _0x36e033['split']('')[_0x4d06f2(0x211)]('♥');
}

function arrowBelow(_0x4f472d) {
    var _0x3033f7 = _0x187c56;
    return _0x4f472d['split']('')[_0x3033f7(0x211)]('͎') + '͎';
}

function crossAboveBelow(_0x3aa008) {
    var _0x33d90e = _0x187c56;
    return _0x3aa008['split']('')[_0x33d90e(0x211)]('͓̽') + '͓̽';
}
const wingdingsCharMap = {
    0x0: _0x187c56(0x3aa),
    0x1: '📂︎',
    0x2: '📄︎',
    0x3: _0x187c56(0xf8),
    0x4: _0x187c56(0x3d2),
    0x5: _0x187c56(0x1a3),
    0x6: '⌛︎',
    0x7: '🖮︎',
    0x8: _0x187c56(0x83),
    0x9: _0x187c56(0x23c),
    '!': '✏︎',
    '\x22': '✂︎',
    '#': '✁︎',
    '$': _0x187c56(0x2c4),
    '%': _0x187c56(0x377),
    '&': _0x187c56(0x24d),
    '\x27': _0x187c56(0x3ee),
    '(': _0x187c56(0x2fe),
    ')': '✆︎',
    '*': _0x187c56(0x3cf),
    '+': _0x187c56(0x2ad),
    ',': _0x187c56(0x3e1),
    '-': _0x187c56(0xb0),
    '.': '📬︎',
    '/': _0x187c56(0x36e),
    ':': _0x187c56(0x4b0),
    ';': '🖴︎',
    '<': '🖫︎',
    '=': _0x187c56(0x4ad),
    '>': '✇︎',
    '?': '✍︎',
    'A': '✌︎',
    'B': _0x187c56(0x59),
    'C': _0x187c56(0x417),
    'D': _0x187c56(0x11a),
    'E': '☜︎',
    'F': '☞︎',
    'G': '☝︎',
    'H': '☟︎',
    'I': '✋︎',
    'J': '☺︎',
    'K': _0x187c56(0x262),
    'L': '☹︎',
    'M': _0x187c56(0xf5),
    'N': '☠︎',
    'O': '⚐︎',
    'P': _0x187c56(0x166),
    'Q': '✈︎',
    'R': '☼︎',
    'S': '💧︎',
    'T': '❄︎',
    'U': _0x187c56(0xd6),
    'V': '✞︎',
    'W': _0x187c56(0x2ba),
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
    '·': _0x187c56(0x67),
    '¸': _0x187c56(0x30d),
    '¹': _0x187c56(0x256),
    'º': _0x187c56(0x3af),
    '»': '🕔︎',
    '¼': _0x187c56(0x134),
    '½': '🕖︎',
    '¾': _0x187c56(0x9c),
    '¿': _0x187c56(0x478),
    'À': _0x187c56(0x418),
    'Á': _0x187c56(0x49e),
    'Â': '🕛︎',
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

function wingdings(_0x1cf1fb) {
    var _0x126d8b = _0x187c56;
    return _0x1cf1fb[_0x126d8b(0x3d3)]('')[_0x126d8b(0x21e)](function(_0x53a706) {
        return wingdingsCharMap[_0x53a706] ? wingdingsCharMap[_0x53a706] : _0x53a706;
    })[_0x126d8b(0x211)]('');
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

function _0x2856(_0x16b41f, _0x2856b3) {
    var _0x331361 = _0x16b4();
    return _0x2856 = function(_0x6d115, _0x296551) {
        _0x6d115 = _0x6d115 - 0x0;
        var _0x43e7e1 = _0x331361[_0x6d115];
        return _0x43e7e1;
    }, _0x2856(_0x16b41f, _0x2856b3);
}

function vaporwaveText(_0x126009) {
    var _0x28f63d = _0x187c56,
        _0x35f58d = _0x126009['split']('\x20')[_0x28f63d(0x5f)];
    _0x126009 = applyCharMap(vaporwaveCharMap, _0x126009);
    var _0x19cc1c = getAsianChars(Math[_0x28f63d(0x376)](0x3, _0x35f58d));
    if (_0x35f58d > 0x6) _0x19cc1c = _0x19cc1c[_0x28f63d(0x3d3)]('')[_0x28f63d(0x21e)](_0x216b0a => _0x216b0a + ['', ''][Math[_0x28f63d(0x368)](Math[_0x28f63d(0xe6)]() * 0.6)])[_0x28f63d(0x211)]('');
    var _0x70ad14 = [];
    return _0x70ad14[_0x28f63d(0x302)](_0x126009), _0x70ad14[_0x28f63d(0x211)]();
}

function vaporwaveText1(_0x14c9c1) {
    var _0x5ac309 = _0x187c56,
        _0x51ee27 = _0x14c9c1[_0x5ac309(0x3d3)]('\x20')[_0x5ac309(0x5f)];
    _0x14c9c1 = applyCharMap(vaporwaveCharMap, _0x14c9c1);
    var _0x4dcada = getAsianChars(Math[_0x5ac309(0x376)](0x3, _0x51ee27));
    if (_0x51ee27 > 0x6) _0x4dcada = _0x4dcada[_0x5ac309(0x3d3)]('')[_0x5ac309(0x21e)](_0x16483f => _0x16483f + ['', ''][Math[_0x5ac309(0x368)](Math[_0x5ac309(0xe6)]() * 0.6)])[_0x5ac309(0x211)]('');
    var _0x40b238 = [];
    return _0x40b238[_0x5ac309(0x302)](_0x14c9c1[_0x5ac309(0x9f)](/　/g, '░')[_0x5ac309(0x9f)](/ａｅ/, 'æ')[_0x5ac309(0x9f)](/Ａ/g, 'Λ')[_0x5ac309(0x9f)](/Ｅ/g, function() {
        var _0x25e6e3 = _0x5ac309;
        return Math[_0x25e6e3(0xe6)]() > 0.5 ? 'Ξ' : 'Σ';
    })['replace'](/Ｏ/g, '♢')), _0x40b238[_0x5ac309(0x211)]();
}

function vaporwaveText2(_0x1bb1a7) {
    var _0x5e4bfb = _0x187c56,
        _0x226f7b = _0x1bb1a7[_0x5e4bfb(0x3d3)]('\x20')['length'];
    _0x1bb1a7 = applyCharMap(vaporwaveCharMap, _0x1bb1a7);
    var _0x4b6268 = getAsianChars(Math['max'](0x3, _0x226f7b));
    if (_0x226f7b > 0x6) _0x4b6268 = _0x4b6268['split']('')[_0x5e4bfb(0x21e)](_0x3b5990 => _0x3b5990 + ['', ''][Math['round'](Math[_0x5e4bfb(0xe6)]() * 0.6)])[_0x5e4bfb(0x211)]('');
    var _0x4ef559 = [];
    return _0x4ef559[_0x5e4bfb(0x302)]('【\ufeff' + _0x1bb1a7 + '】'), _0x4ef559[_0x5e4bfb(0x211)]();
}

function getAsianChars(_0x17da6f) {
    var _0xae8b5e = _0x187c56;
    if (!_0x17da6f) _0x17da6f = 0x1;
    var _0x37087f = _0xae8b5e(0x441),
        _0x271511 = '';
    for (var _0x19f40b = 0x0; _0x19f40b < _0x17da6f; _0x19f40b++) {
        _0x271511 += _0x37087f[Math[_0xae8b5e(0x4bd)](Math[_0xae8b5e(0xe6)]() * _0x37087f[_0xae8b5e(0x5f)])];
    }
    return _0x271511;
}
const flourishArray = [_0x187c56(0x442), _0x187c56(0x3b1), _0x187c56(0xb9), '⚔️\x20[[text]]\x20⚔️', _0x187c56(0x10b), '♪ღ♪*•.¸¸.•*¨¨*•.♪\x20[[text]]\x20♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪', _0x187c56(0x465), '(\x20ﾟ∀ﾟ)ﾉ【[[text]]】', _0x187c56(0x343), '[[text]]\x20☜(`o´)', '⎝⎝✧GͥOͣDͫ✧⎠⎠\x20[[text]]\x20⎝⎝✧GͥOͣDͫ✧⎠⎠', _0x187c56(0x2de), _0x187c56(0x440), _0x187c56(0xf1), _0x187c56(0x323), '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯\x20[[text]]\x20¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯', _0x187c56(0x16c), _0x187c56(0x240), _0x187c56(0x2bb), _0x187c56(0x16b), _0x187c56(0x16a), _0x187c56(0x9a), '▌│█║▌║▌║\x20[[text]]\x20║▌║▌║█│▌', _0x187c56(0x505), _0x187c56(0xcc), _0x187c56(0x124), _0x187c56(0x2d7), _0x187c56(0xa6), _0x187c56(0x20d), '¸„.-•~¹°”ˆ˜¨\x20[[text]]\x20¨˜ˆ”°¹~•-.„¸', _0x187c56(0x277), _0x187c56(0x27), _0x187c56(0x363), _0x187c56(0x361), _0x187c56(0x1e7), _0x187c56(0x38), _0x187c56(0x29d), _0x187c56(0x111), _0x187c56(0x30f), '¸„.-•~¹°”ˆ˜¨\x20[[text]]\x20¨˜ˆ”°¹~•-.„¸', _0x187c56(0x20d), '••¤(`×[¤\x20[[text]]\x20¤]×´)¤••', _0x187c56(0x110), _0x187c56(0x36c), _0x187c56(0x141), _0x187c56(0x4ed), '¸,ø¤º°`°º¤ø,¸\x20[[text]]\x20¸,ø¤º°`°º¤ø,¸', _0x187c56(0x460), ',-*\x27\x20^\x20\x27~*-.,_,.-*~\x20[[text]]\x20~*-.,_,.-*~\x27\x20^\x20\x27*-,', _0x187c56(0x24a), '↤↤↤↤↤\x20[[text]]\x20↦↦↦↦↦', _0x187c56(0x4ce), _0x187c56(0x483), _0x187c56(0x24c), _0x187c56(0x425), _0x187c56(0x210), '▀▄▀▄▀▄\x20[[text]]\x20▄▀▄▀▄▀', '(-_-)\x20[[text]]\x20(-_-)', _0x187c56(0x361), '-漫~*\x27¨¯¨\x27*·舞~\x20[[text]]\x20~舞*\x27¨¯¨\x27*·~漫-', _0x187c56(0x19f), _0x187c56(0xa6), '••.•´¯`•.••\x20[[text]]\x20••.•´¯`•.••', _0x187c56(0x141), _0x187c56(0x24e), _0x187c56(0x1da), _0x187c56(0x419), _0x187c56(0x3d5), _0x187c56(0x3b7), '∙∙·▫▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ\x20[[text]]\x20ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫▫·∙∙', _0x187c56(0x1ff), 'ஜ۩۞۩ஜ\x20[[text]]\x20ஜ۩۞۩ஜ', _0x187c56(0xa3), _0x187c56(0x54), _0x187c56(0x12d), _0x187c56(0x4ec), _0x187c56(0x25c), _0x187c56(0x344)];

function wrapInFlourish(_0x5b120b) {
    var _0x3c6fa6 = _0x187c56;
    return flourishArray[Math[_0x3c6fa6(0x4bd)](Math['random']() * flourishArray[_0x3c6fa6(0x5f)])]['replace'](_0x3c6fa6(0x28e), _0x5b120b);
}

function Flourishlist(_0x43e208, _0x4c06f6) {
    var _0x267385 = _0x187c56;
    return flourishArray[_0x43e208][_0x267385(0x9f)](_0x267385(0x28e), _0x4c06f6);
}

function wrapInSymbols(_0x57ca0e, _0x116e1e) {
    return randomSymbols(_0x116e1e) + '\x20\x20' + _0x57ca0e + '\x20\x20' + randomSymbols(_0x116e1e);
}

function firework(_0x2f3e39) {
    return _0x2f3e39['split']('')['join']('҉') + '҉';
}

function weirdBox(_0x162065) {
    var _0x2a61a9 = _0x187c56;
    return _0x162065[_0x2a61a9(0x9f)](/([^\s])/g, _0x2a61a9(0x24));
}

function curlybrackets(_0xf68114) {
    var _0x3382f8 = _0x187c56;
    return _0xf68114[_0x3382f8(0x9f)](/([^\s])/g, _0x3382f8(0xb1));
}

function singlewavyJoiner(_0x26c1fb) {
    var _0x52810b = _0x187c56;
    return '〜' + _0x26c1fb[_0x52810b(0x3d3)]('')[_0x52810b(0x211)]('∿') + '〜';
}

function thickBox(_0x52c037) {
    var _0x52ef10 = _0x187c56;
    return _0x52c037['replace'](/([^\s])/g, _0x52ef10(0x4ea));
}

function zigzagJoiner(_0x120d21) {
    var _0x506112 = _0x187c56;
    return _0x120d21[_0x506112(0x9f)](/([^\s])/g, '⦚$1⦚');
}

function hashJoiner(_0x56937b) {
    var _0x384531 = _0x187c56;
    return _0x56937b[_0x384531(0x3d3)]('')[_0x384531(0x211)]('⨳');
}

function starJoiner(_0xac3c78) {
    var _0x3de6eb = _0x187c56;
    return _0xac3c78[_0x3de6eb(0x9f)](/([^\s])/g, _0x3de6eb(0x4d7));
}

function connectedJoiner(_0x4e0826) {
    var _0x5f0405 = _0x187c56;
    return _0x4e0826[_0x5f0405(0x3d3)]('')[_0x5f0405(0x211)]('⊶');
}

function arrowjoin(_0x116914) {
    var _0xb2272f = _0x187c56;
    return _0x116914[_0xb2272f(0x9f)](/([^\s])/g, _0xb2272f(0x4c8));
}

function dotBoxtwo(_0x2d2170) {
    var _0x19803e = _0x187c56;
    return _0x2d2170['split']('')[_0x19803e(0x211)](_0x19803e(0x32c));
}

function dotBox(_0x1841d7) {
    var _0x32cc78 = _0x187c56;
    return _0x1841d7[_0x32cc78(0x9f)](/([^\s])/g, _0x32cc78(0x420));
}

function diametricBox(_0x1edd17) {
    var _0x28fef6 = _0x187c56;
    return _0x1edd17[_0x28fef6(0x9f)](/([^\s])/g, _0x28fef6(0x34));
}

function arrowBox(_0x24bd88) {
    var _0x40abc8 = _0x187c56;
    return _0x24bd88[_0x40abc8(0x9f)](/([^\s])/g, _0x40abc8(0xf9));
}

function littleSparkles(_0x13f427) {
    var _0x2d2c90 = _0x187c56;
    return _0x2d2c90(0x11b) + _0x13f427 + _0x2d2c90(0x4df);
}

function kirbyHug(_0x451937) {
    var _0x28a5fa = _0x187c56;
    return _0x28a5fa(0x2a0) + _0x451937 + '\x20♥';
}

function dottyJoiner(_0x184b1c) {
    var _0x20b0c4 = _0x187c56;
    return '░' + _0x184b1c[_0x20b0c4(0x3d3)]('')[_0x20b0c4(0x211)]('░') + '░';
}

function wavyJoiner(_0x59d978) {
    var _0x5adc0a = _0x187c56;
    return '≋' + _0x59d978[_0x5adc0a(0x3d3)]('')[_0x5adc0a(0x211)]('≋') + '≋';
}

function diametricAngleFrame(_0x2c07a2) {
    var _0x2fbdce = _0x187c56;
    return _0x2c07a2['replace'](/([^\s])/g, _0x2fbdce(0x2c3));
}

function thickBlockFramed(_0x82ce4b) {
    var _0x314360 = _0x187c56;
    return _0x82ce4b[_0x314360(0x9f)](/([^\s])/g, '【$1】');
}

function star0(_0x523fbc) {
    var _0x277db5 = _0x187c56;
    return applyCharMap(italicCharMap, _0x277db5(0x10f) + _0x523fbc + '★彡');
}

function star1(_0x869cc8) {
    var _0x2e113f = _0x187c56;
    return applyCharMap(monospaceCharMap, _0x2e113f(0x106) + _0x869cc8 + _0x2e113f(0x2e8));
}

function star2(_0xf0fd06) {
    var _0x3be890 = _0x187c56;
    return applyCharMap(currencyCharMap, '\x20ıllıllı⭐🌟' + _0xf0fd06 + _0x3be890(0x48d));
}

function star3(_0x505d44) {
    var _0x3b501e = _0x187c56;
    return applyCharMap(monospaceCharMap, _0x3b501e(0x176) + _0x505d44 + '★★•╯');
}

function star4(_0x3c0b0b) {
    var _0x1eaf38 = _0x187c56;
    return applyCharMap(squaresCharMap, '`✵•.¸,✵°✵.｡.✰\x20\x20' + _0x3c0b0b + _0x1eaf38(0x239));
}

function star5(_0x141ae0) {
    var _0x3d2ee6 = _0x187c56;
    return applyCharMap(doubleStruckCharMap, _0x3d2ee6(0x144) + _0x141ae0 + _0x3d2ee6(0x2d1));
}

function star6(_0x140583) {
    var _0x606dae = _0x187c56;
    return applyCharMap(invertedSquaresCharMap, '¨˜ˆ”°⍣~•✡⊹٭„¸\x20\x20' + _0x140583 + _0x606dae(0x4fd));
}

function star7(_0x1fc222) {
    var _0x4491f0 = _0x187c56;
    return applyCharMap(asianStyleCharMap, _0x4491f0(0x4fd) + _0x1fc222 + _0x4491f0(0x164));
}

function star8(_0x3727be) {
    var _0x420f16 = _0x187c56;
    return applyCharMap(asianStyle2CharMap, _0x420f16(0x17d) + _0x3727be + '★⡀.•☆•.★');
}

function star9(_0x76829d) {
    var _0xb9859 = _0x187c56;
    return applyCharMap(neonCharMap, _0xb9859(0x359) + _0x76829d + _0xb9859(0xab));
}

function star10(_0xb51139) {
    var _0xeef71c = _0x187c56;
    return applyCharMap(squiggle6CharMap, _0xeef71c(0x359) + _0xb51139 + _0xeef71c(0xab));
}

function heart0(_0x18160b) {
    var _0x4d4b2c = _0x187c56;
    return applyCharMap(squiggle5CharMap, _0x4d4b2c(0x2ed) + _0x18160b + _0x4d4b2c(0x11e));
}

function heart1(_0x5ee7a9) {
    var _0x542bbc = _0x187c56;
    return applyCharMap(futureAlienCharMap, _0x542bbc(0x20f) + _0x5ee7a9 + _0x542bbc(0x57));
}

function heart2(_0x6069d0) {
    var _0x8214a = _0x187c56;
    return applyCharMap(boldCharMap, _0x8214a(0xf) + _0x6069d0 + _0x8214a(0x423));
}

function heart3(_0x5cb186) {
    var _0x22298f = _0x187c56;
    return applyCharMap(firework, '♡〜ლ(๑癶\x20' + _0x5cb186 + _0x22298f(0x3b6));
}

function heart4(_0x38cbc7) {
    var _0x5d8e12 = _0x187c56;
    return applyCharMap(symbolsCharMap, _0x5d8e12(0x250) + _0x38cbc7 + _0x5d8e12(0x233));
}

function heart5(_0x1a2986) {
    var _0xed57a0 = _0x187c56;
    return applyCharMap(bentTextCharMap, '🌸ξξ(∵❤◡❤∵)ξξ·¯·♩¸\x20' + _0x1a2986 + _0xed57a0(0x157));
}

function heart6(_0x4cd3cf) {
    var _0x3b80a0 = _0x187c56;
    return applyCharMap(upperAnglesCharMap, '♥╣[-_-]╠♥' + _0x4cd3cf + _0x3b80a0(0x3c3));
}

function heart7(_0x39da51) {
    var _0x5f3d41 = _0x187c56;
    return applyCharMap(boldCharMap, 'ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥\x20\x20' + _0x39da51 + _0x5f3d41(0xa7));
}

function emoticon0(_0x140cd2) {
    var _0xdd4ced = _0x187c56;
    return applyCharMap(oldEnglishCharMap, _0xdd4ced(0x3b0) + _0x140cd2 + '(｀∀´)Ψ');
}

function emoticon1(_0xa49984) {
    var _0x4bd3fc = _0x187c56;
    return applyCharMap(squiggle6CharMap, _0x4bd3fc(0x11d) + _0xa49984 + ')');
}

function emoticon2(_0x35f03e) {
    var _0x5859a7 = _0x187c56;
    return applyCharMap(boldCharMap, _0x5859a7(0x171) + _0x35f03e + '');
}

function emoticon3(_0x363767) {
    return applyCharMap(squiggle5CharMap, '(☝◞‸◟)☞' + _0x363767 + '');
}

function emoticon4(_0x3ae019) {
    var _0x34dfdc = _0x187c56;
    return applyCharMap(cursiveCharMap, _0x34dfdc(0x456) + _0x3ae019 + _0x34dfdc(0x494));
}

function emoticon5(_0x18ccf7) {
    var _0x3a5677 = _0x187c56;
    return applyCharMap(squiggle3CharMap, _0x3a5677(0x49b) + _0x18ccf7 + _0x3a5677(0x32e));
}

function emoticon6(_0x3ccd96) {
    var _0x230695 = _0x187c56;
    return applyCharMap(wideTextCharMap, _0x230695(0x413) + _0x3ccd96 + _0x230695(0x4a8));
}

function emoticon7(_0x279d9e) {
    var _0x1c9220 = _0x187c56;
    return applyCharMap(squiggle2CharMap, '(人◕‿◕)' + _0x279d9e + _0x1c9220(0x34d));
}

function thankyou0(_0x47d174) {
    var _0x504220 = _0x187c56;
    return applyCharMap(doubleStruckCharMap, _0x504220(0x28f) + _0x47d174 + _0x504220(0x299));
}

function thankyou1(_0x362b3d) {
    var _0x2e06c3 = _0x187c56;
    return applyCharMap(cursiveCharMap, _0x2e06c3(0x4e0) + _0x362b3d + _0x2e06c3(0x4e0));
}

function thankyou2(_0xa2d4a0) {
    var _0x4e5dfb = _0x187c56;
    return applyCharMap(doubleStruckCharMap, _0x4e5dfb(0x2ce) + _0xa2d4a0 + _0x4e5dfb(0x304));
}

function thankyou3(_0xa07c60) {
    var _0x17a055 = _0x187c56;
    return applyCharMap(upperAnglesCharMap, _0x17a055(0x2cc) + _0xa07c60 + '');
}

function thankyou4(_0x3a56d8) {
    var _0x21b883 = _0x187c56;
    return applyCharMap(squiggle2CharMap, _0x21b883(0x434) + _0x3a56d8 + '');
}

function thankyou5(_0x305b00) {
    var _0x5efc76 = _0x187c56;
    return applyCharMap(asianStyleCharMap, _0x5efc76(0x4f) + _0x305b00 + _0x5efc76(0x3a7));
}

function thankyou6(_0x394a40) {
    var _0x29aca6 = _0x187c56;
    return applyCharMap(medievalCharMap, _0x29aca6(0x415) + _0x394a40 + '.:｡+ﾟ');
}

function thankyou7(_0x2dfbdb) {
    var _0xf6aada = _0x187c56;
    return applyCharMap(neonCharMap, _0xf6aada(0x2ce) + _0x2dfbdb + _0xf6aada(0x2ce));
}

function sad0(_0x2a1109) {
    var _0x65d05d = _0x187c56;
    return applyCharMap(squiggle5CharMap, _0x65d05d(0x487) + _0x2a1109 + _0x65d05d(0x308));
}

function sad1(_0x2ed156) {
    var _0x312d99 = _0x187c56;
    return applyCharMap(monospaceCharMap, _0x312d99(0x4b6) + _0x2ed156 + '\x20(︶︹︺)');
}

function sad2(_0x29c2bf) {
    var _0x38714b = _0x187c56;
    return applyCharMap(squiggleCharMap, _0x38714b(0x85) + _0x29c2bf + _0x38714b(0x222));
}

function sad3(_0x2d5508) {
    var _0x44f2fd = _0x187c56;
    return applyCharMap(italicCharMap, _0x44f2fd(0x23b) + _0x2d5508 + _0x44f2fd(0x36b));
}

function sad4(_0x4f20af) {
    var _0x420daa = _0x187c56;
    return applyCharMap(squiggle3CharMap, '(ಥ\x20͜ʖಥ)\x20' + _0x4f20af + _0x420daa(0x76));
}

function sad5(_0x550bb6) {
    var _0x649483 = _0x187c56;
    return applyCharMap(bentTextCharMap, _0x649483(0x519) + _0x550bb6 + _0x649483(0x101));
}

function sad6(_0x1cbdd1) {
    var _0x4be327 = _0x187c56;
    return applyCharMap(medievalCharMap, _0x4be327(0x3f1) + _0x1cbdd1 + _0x4be327(0x2f8));
}

function sad7(_0x31d19c) {
    var _0x2cc38a = _0x187c56;
    return applyCharMap(symbolsCharMap, _0x2cc38a(0x309) + _0x31d19c + _0x2cc38a(0xa9));
}

function cuteText1(_0x4d9b0a) {
    var _0x1a9a88 = _0x187c56;
    return applyCharMap(italicCharMap, _0x1a9a88(0x424) + _0x4d9b0a + _0x1a9a88(0x424));
}

function cuteText2(_0xa7bfec) {
    var _0x423824 = _0x187c56;
    return applyCharMap(squiggle5CharMap, _0x423824(0x2b0) + _0xa7bfec + _0x423824(0x226));
}

function cuteText3(_0x705dbb) {
    var _0x571dc9 = _0x187c56;
    return applyCharMap(oldEnglishCharMap, _0x571dc9(0xf7) + _0x705dbb + _0x571dc9(0x36f));
}

function cuteText4(_0x2d3f0d) {
    var _0x589ca3 = _0x187c56;
    return applyCharMap(squiggleCharMap, _0x589ca3(0x527) + _0x2d3f0d + _0x589ca3(0xa5));
}

function cuteText5(_0x4d95d1) {
    return applyCharMap(cursiveCharMap, '🎯🍧' + _0x4d95d1 + '💜💘');
}

function fullCrazy1(_0x33e8d4) {
    var _0x481a40 = _0x187c56;
    return applyCharMap(boldCharMap, '◥꧁ད\x20ॐ卐' + _0x33e8d4 + _0x481a40(0x3a5));
}

function fullCrazy2(_0x13f1df) {
    var _0xf0176f = _0x187c56;
    return applyCharMap(squiggleCharMap, _0xf0176f(0x1b5) + _0x13f1df + '\x20¤]×´)¤••');
}

function fullCrazy3(_0x12b174) {
    var _0x4a8435 = _0x187c56;
    return applyCharMap(doubleStruckCharMap, _0x4a8435(0x3d6) + _0x12b174 + _0x4a8435(0x31c));
}

function fullCrazy4(_0x4e37c9) {
    return applyCharMap(currencyCharMap, '.o0×X×0o.\x20' + _0x4e37c9 + '\x20.o0×X×0o.\x20');
}

function fullCrazy5(_0x4ff817) {
    var _0x3e7cc5 = _0x187c56;
    return applyCharMap(wideTextCharMap, _0x3e7cc5(0x378) + _0x4ff817 + _0x3e7cc5(0x52));
}

function crazyWithFlourishOrSymbols3(_0xf258f) {
    return applyCharMap(italicCharMap, '⎝⎝✧GͥOͣDͫ✧⎠⎠' + _0xf258f + '\x20⎝⎝✧GͥOͣDͫ✧⎠⎠');
}

function crazyWithFlourishOrSymbols4(_0xa3bc20) {
    var _0x562320 = _0x187c56;
    return applyCharMap(asianStyle2CharMap, _0x562320(0x3cc) + _0xa3bc20 + _0x562320(0x360));
}

function crazyWithFlourishOrSymbols1(_0x129a2c) {
    return applyCharMap(italicCharMap, '⫷\x20\x20' + _0x129a2c + '\x20⫸');
}

function _0x16b4() {
    var _0x3b01ee = ['x&#830;', 'p&#866;', '.lunitoolsmirrorencode', '&#41508;', '&Omega;', '&#120442;&#823;', 'E&#846;', 'W&#828;', 'C&#866;', '&#1044;', '(づ｡◕‿‿◕｡)づ', 'X&#846;', '&omega;', 't&#829;&#851;', 'r&#826;', '💖´\x20*•.¸♥¸.•**\x20', '(｡◕‿◕｡)', '1&#828;', '&#576;', '7&#830;', 'v&#829;&#851;', '2&#857;', 'px}\x20</style>', 'f&#830;', '&#613;', 'creepify', '❀◕‿◕❀', '&#548;', '&#638;', 'W&#799;', '.doubleStruckCharMap', '.heart5', '6&#838;', '.zigzagJoiner', '★·.·´¯`·.·★\x20', 'S&#866;', '[̲̅$1]', 'A&#799;', '&#41346;', '░▒▓█►─═\x20\x20[[text]]\x20═─◄█▓▒░', '&otilde;', '6&#866;', '&phi;', 'n&#857;', '9&#826;', 'D&#829;&#851;', '&#276;', '������', '&#1050;', 'j&#866;', '&#1333;', '&#8857;', '⦑$1⦒', '&#41120;', 's17', 'Z&#866;', '•°¯`••\x20[[text]]\x20••´¯°•', 's&#826;', '&thorn;', 'G&#799;', '9&#846;', 'G&#838;', '.result-s18', 'd&#829;&#851;', '<style>\x20//\x20Discord\x20Fonts\x20by\x20:DiscordFonts@gmail.com\x20</style>', 'F&#866;', '】〗〙〛］', '&#10125;', '&#3057;', '&#2792;', 'm&#838;', '&#262;', '.wrap4', 'H&#829;&#851;', 'ᵔ⌣ᵔ', 'U&#830;', '&dagger;', '$2$1', '.thickBlockFramed', 'ﾟ･:,｡★＼(^-^\x20)♪', '0&#829;&#851;', '&#42150;', '\x20✿◉●•◦', '&#4315;', '(¯`·.¸¸.·´¯`·.¸¸.->\x20[[text]]\x20<-.¸¸.·´¯`·.¸¸.·´¯)', 'function', '&#41204;', '෴❤️෴', 'e&#830;', '👌︎', 'Discord\x20Fonts', 'val', '.illuminati', '^ㅂ^', '&#1377;', 'length', 'w&#846;', 'f&#846;', '&#1048;', '&#2799;', '\x20»-(¯`v´¯)-»', 'k&#799;', '&#120825;&#823;', '🕐︎', '(^▽^)', 'textarea', '&#9736;', '.crazyWithFlourishOrSymbols3', '<%=\x20version\x20%>', '#fontSize', '&#1141;', '&#41686;', 'E&#829;&#851;', 't&#828;', 'V&#830;', '.italicCharMap', 'w&#799;', 'U&#826;', '\x20٩꒰´·⌢•｀꒱۶⁼³₌₃', '.doubleUnderline', '&#2798;', '&#1331;', 'i&#857;', 'C&#857;', '8&#828;', '&#41426;', '.star10', '4&#830;', '.result-s4', '&#1051;', '꧁𓊈𒆜', '🖰︎', 'P&#799;', '(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)', 'q&#838;', '&#1348;', '&alpha;', '&#1139;', 'q&#828;', '&#41005;', '«-(¯`v´¯)-«\x20', 'e&#846;', 'o&#857;', '&#4335;', '.thankyou0', 'w&#829;&#851;', 'm&#826;', 'U&#846;', 'z&#857;', 'G&#866;', '&#120469;&#823;', 'a&#866;', 'y&#857;', '&#3588;', '•?((¯°·._.•\x20[[text]]\x20•._.·°¯))؟•', '&Mu;', '🕗︎', '═─◄█▓▒░', 'J&#866;', 'replace', 'x&#838;', '&#41863;', 'B&#838;', '¤\x20(¯´☆✭.¸_)¤\x20[[text]]\x20¤(_¸.✭☆´¯)\x20¤', '.emoticon5', '★｡\x20🎀', '.•°¤*(¯`★´¯)*¤°\x20[[text]]\x20°¤*(¯´★`¯)*¤°•.', '♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡', '&#989;', '♦👺\x20（（●´∧｀●））', '&#41707;', '✬☆*.•⨳•.¤⊹٭', 'value', '&#423;', '&#327;', 'i&#830;', '📫︎', '⧼$1&#828;⧽', 'N&#826;', '&#9791;', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', '6&#846;', '&#4325;', '0&#826;', '&#1337;', '★·.·´¯`·.·★\x20[[text]]\x20★·.·´¯`·.·★', '&#258;', '&forall;', 'ready', '0&#857;', '&#1350;', 'P&#828;', 'Q&#866;', '.lunisquares', 'd&#799;', 'i&#866;', 'V&#857;', 'tiny', '&#1192;', '&upsilon;', '&#1351;', '&#9773;', 'N&#846;', '.dottyJoiner', '•]••´º´•»\x20[[text]]\x20«•´º´••[•', 'X&#838;', 'P&#826;', '.star1', 'l&#846;', 'M&#828;', 'S&#828;', '&#4306;', 'a&#830;', '.sad1', '🕆︎', 'H&#866;', 'u&#828;', 's31', 'D&#846;', '.o0×X×0o.\x20', '&#2790;', '.•°¤*(¯`★´¯)*¤°\x20', 'z&#828;', '&#7918;', '&#412;', '.fullCrazy4', '.copied', '&#120473;&#823;', '&#409;', 'H&#828;', 'random', '&#2670;', 'z&#830;', 'O&#866;', 'h&#866;', '&#120463;&#823;', 'r&#829;&#851;', '.result-s16', 'a&#828;', 'Q&#829;&#851;', 'b&#828;', '┗(^o^\x20)┓三\x20[[text]]\x20三\x20┗(^o^\x20)┓', '9&#830;', '.thankyou5', 'Q&#857;', '💣︎', '&epsilon;', '🐣♖', '🗏︎', '⦏$1⦎', 'k&#828;', 'Q&#830;', 's22', '&Lambda;', 'c&#857;', '&#1356;', '&#356;', '\x20●︿●', '&#408;', 'g&#866;', 'w&#826;', 'l&#826;', '꧁•⊹٭', 'N&#857;', '.heart4', '&#1397;', '8&#846;', '꧁༒༻☬ད\x20[[text]]\x20ཌ☬༺༒꧂', '&#374;', '&#377;', 'D&#826;', 'ミ★\x20', '•´¯`•»\x20[[text]]\x20«•´¯`•', '|!¤*\x27~``~\x27*¤!|\x20[[text]]\x20|!¤*\x27~``~\x27*¤!|', 'init', 'o&#838;', '&#41648;', 'g&#828;', 'f&#799;', '&#435;', '&#41556;', '3&#829;&#851;', '👎︎', '˜”*°•.˜”*°•\x20', '&#12579;', 'щ（ﾟДﾟщ）\x20<\x20', '💖彡', '.vaporwaveText1', 'c&#826;', '&#1059;', '&#120448;&#823;', '7&#857;', '*•.¸♡\x20[[text]]\x20♡¸.•*', 'g&#829;&#851;', '.fullCrazy2', 'e&#799;', '&#1291;', '&#625;', '.cursiveCharMap', 't&#799;', '.crazyWithFlourishOrSymbols1', '✿.｡.:*\x20☆:**:.\x20[[text]]\x20.:**:.☆*.:｡.✿', 'l&#866;', 'K&#828;', '&#4310;', '&#823;', '&#120479;&#823;', 'T&#799;', '🕕︎', '&#308;', '••¤(`×', '&#5597;', '&#10123;', '&#42159;', '.underline', '&#120474;&#823;', 'Q&#838;', 'v&#838;', 'I&#828;', 'z&#829;&#851;', '•?((¯°·._.•\x20', '¤¸¸.•´¯`•¸¸.•..>>\x20[[text]]\x20<<..•.¸¸•´¯`•.¸¸¤', 'u&#799;', '&#41766;', '·.★·.·´¯`·.·★', 'C&#799;', '&#391;', '&#943;', '.strikeThrough', 'd&#857;', '4&#857;', 'F&#830;', '&#41295;', 'M&#799;', 'N&#829;&#851;', '&#642;', 's24', '&#120470;&#823;', 'options', 'input', 'B&#857;', 't&#857;', 'X&#828;', '¸♩·¯·ξξ(∵❤◡❤∵)ξξ🌸', '&#1179;', 'R&#829;&#851;', 'A&#857;', '&#120444;&#823;', '&#41571;', 'I&#857;', '&#355;', 'undefined', '&#41823;', 'A&#866;', '&#120478;&#823;', 'q&#829;&#851;', '¨˜ˆ”°⍣~•✡⊹٭„¸', 'E&#838;', '🏱︎', '&#9834;', '&#5616;', '&#1178;', 'ıllıllı\x20[[text]]\x20ıllıllı', '¸,ø¤º°`°º¤ø,¸¸,ø¤º°\x20[[text]]\x20°º¤ø,¸¸,ø¤º°`°º¤ø,¸', '୧(•̀ᗝ•́)૭\x20[[text]]\x20୧(⇀‸↼‶)૭', '&#41126;', 'S&#826;', '&#1084;', '&#41754;', '☞ó\x20͜つò☞\x20\x20', '&#12425;', '7&#829;&#851;', 'p&#838;', '.sad3', '╰•★★\x20', '&#10003;', '&#1342;', '&#120480;&#823;', '&#41203;', 'Y&#857;', '&#418;', '★¸.•☆•.¸★\x20', '&#998;', 'p&#826;', '&#41240;', '&#315;', '&#41079;', '.result-s31', '&euro;', 'P&#829;&#851;', 'L&#826;', 'toLowerCase', '4&#799;', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', 'b&#829;&#851;', 's&#799;', 'q&#826;', '.superscriptCharMap', 'i&#826;', 'D&#857;', '-漫~*\x27¨¯¨\x27*·舞~\x20', 'toUpperCase', 'N&#866;', 't&#866;', '.sad2', '&#477;', 's30', 'r&#866;', '&#645;', 'h&#829;&#851;', '░▒▓█►─═', '&#41706;', '.result-s26', 'fromCharCode', '&#9815;', '๑۞๑,¸¸,ø¤º°`°๑۩\x20[[text]]\x20๑۩\x20,¸¸,ø¤º°`°๑۞๑', '`•.,¸¸,.•´¯\x20', '&#120468;&#823;', 'z&#866;', '🗄︎', 'j&#857;', '&#618;', '&#344;', '6&#829;&#851;', 'q&#857;', '.bigrus', 'Y&#826;', 's20', 'b&#866;', 'x&#846;', 'P&#838;', '.thankyou3', '&#1082;', 'copied-show', 'G&#826;', '^ㅅ^', '.slashThrough', '••¤(`×[¤\x20', 's&#828;', 'b&#857;', 'p&#830;', '&#270;', 'B&#830;', 'b&#846;', '&#120831;&#823;', 'T&#866;', '&Gamma;', 'D&#799;', '&#41804;', '3&#799;', 'randomization', 'C&#829;&#851;', '6&#799;', 's&#857;', '&#1090;', 'innerText', '4&#846;', '&#4308;', 'j&#826;', '&#120481;&#823;', 'ツﻬஐﻬ', '&#1352;', 'n&#826;', 'g&#838;', '&#429;', 'h&#846;', '&#120824;&#823;', '&#1359;', 'k&#826;', '4&#838;', '&#1097;', 'q&#799;', '.hashJoiner', '══━一', '꧁𓊈𒆜\x20[[text]]\x20𒆜𓊉꧂', 'U&#799;', 'R&#857;', 'E&#830;', '.diametricBox', '&#447;', '&#413;', '&#1340;', '&#5615;', '&#40984;', '4&#829;&#851;', '&#120445;&#823;', 'tools', '§.•´¨\x27°÷•..×\x20[[text]]\x20×,.•´¨\x27°÷•..§', '&#5556;', '&#1112;', 'U&#866;', '&#549;', '&#545;', 'exports', 'L&#830;', '&#351;', '&#311;', '&#1062;', '&#350;', 's14', '&#40996;', 'y&#866;', '&#2414;', 'Z&#846;', '&#120439;&#823;', 'N&#830;', '.asianStyleCharMap', 'n&#799;', '&#272;', '1&#838;', 's10', '¸¸♬·¯·♩¸¸♪·¯·♫¸¸\x20[[text]]\x20¸¸♫·¯·♪¸¸♩·¯·♬¸¸', 'z&#838;', '&#653;', '&#434;', '4&#828;', '&#41141;', ']彡★', '◕‿◕', '&#490;', 'squares', '&#394;', '&#372;', '&#4331;', 'diacriticsBottom', '(¯´•._.•\x20[[text]]\x20•._.•´¯)', '&#1180;', '෴❤️෴\x20\x20', ']|I{•------»\x20[[text]]\x20«------•}I|[', 'join', '&#268;', '&#296;', '&#42148;', 's&#846;', 'E&#857;', 'J&#838;', '&#595;', 'ღ⊱♥', 'd&#830;', 'g&#846;', '—(••÷', '.star7', 'map', '.boldCharMap', 'D&#828;', '&ETH;', '\x20(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)', 'h&#799;', 'y&#838;', '&#41105;', '\x20🎀\x20🐿', '.cuteText', '4&#866;', '.result-s5', 'd&#828;', '.thankyou4', '&#670;', '&#120437;&#823;', '.emoticon4', 'W&#857;', '&#5229;', '&#420;', '§.•´¨\x27°÷•..×\x20', '♡❤●•◦', 'b&#830;', 'l&#830;', '&#41007;', '▌│█║▌║▌║\x20', '9&#866;', '✰.｡.✵°✵,¸.•✵´', '&#120435;&#823;', '(\x20◔\x20ʖ̯\x20◔\x20)\x20', '🖲︎', 'j&#799;', 'W&#826;', '&iuml;', '▁\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20[[text]]\x20█\x20▇\x20▆\x20▅\x20▄\x20▂\x20▁', 'S&#829;&#851;', '&#9796;', '&#403;', '.cuteText2', '&#41433;', '&#987;', 'B&#846;', '&#1041;', '.tildeStrikeThrough', '`•.,¸¸,.•´¯\x20[[text]]\x20¯`•.,¸¸,.•´', 'p&#829;&#851;', '·.¸¸.·♩♪♫\x20[[text]]\x20♫♪♩·.¸¸.·', '🕮︎', '◦•●◉✿\x20[[text]]\x20✿◉●•◦', '.result-s10', '◦•●❤♡\x20', '&#1193;', 'X&#829;&#851;', 'x&#866;', 'q&#866;', '&#42131;', '🕒︎', ']|I{•------»\x20', '&#12552;', 'V&#826;', '&#323;', '&#1202;', 'ღ(¯`◕‿◕´¯)\x20♫\x20♪\x20♫\x20[[text]]\x20♫\x20♪\x20♫\x20(¯`◕‿◕´¯)ღ', '&#10127;', 'k&#838;', '(≧◡≦)', '&#996;', '9&#828;', '😐︎', '&#41733;', '6&#828;', '.DiscordFonts', '&#41712;', '.heart3', '7&#846;', '&#972;', 'J&#799;', '&scaron;', '•]••´º´•»\x20', 'C&#846;', '.result-s11', 'g&#830;', '&#41016;', 'f&#829;&#851;', '٭ᶦᶰᵈ᭄', '&#4317;', '&#592;', '&#654;', '.emoticon7', '░▒▓█\x20[[text]]\x20█▓▒░', '.heartsBetween', 'K&#866;', 'mapInverse', '.currencyCharMap', '&chi;', '.star5', '&#1085;', '&#41833;', 'i&#799;', '&#41392;', 'ஜ۩۞۩ஜ', 'Q&#826;', '&eta;', 'C&#838;', 'P&#866;', '&#1138;', 'p&#799;', 'nodeType', 'E&#866;', '&#1046;', '&#9739;', 'createElement', '[[text]]', '(･ω･)♪', 'w&#857;', 'K&#830;', '&#647;', 'a&#857;', '&#120436;&#823;', '&#416;', '&#120822;&#823;', '&#988;', '&#120446;&#823;', '♪(･ω･)ﾉ', '&micro;', 'N&#828;', '&#1506;', '(¯`*•.¸,¤°´✿.｡.:*\x20[[text]]\x20*.:｡.✿`°¤,¸.•*´¯)', '&#10124;', '&#x', '(っ◔◡◔)っ\x20♥\x20', 'ﻬஐﻬツ', '6&#857;', '&#41076;', '&#9790;', '5&#838;', 'O&#799;', '.dotBox', '.crazyWithFlourishOrSymbols', 'G&#830;', '&#120438;&#823;', '&#1072;', 'F&#846;', '🖃︎', '(/◔◡◔)/', '&#292;', '🐿\x20🎀', 'f&#857;', '&#42181;', '.emoticon3', '&#65434;', 'c&#829;&#851;', '&sigmaf;', '&#41708;', '&#41660;', '&#9687;', '🕈︎', '°°°·.°·..·°¯°·._.·\x20[[text]]\x20·._.·°¯°·.·°\x20.·°°°', 'H&#838;', '.result-s30', '.heart7', 'L&#857;', '&#41008;', 'M&#846;', 'L&#866;', '『$1』', '👓︎', '.starJoiner', '#Sk-text', '&#41029;', 'Y&#866;', '.sad5', '&#41991;', '&#1213;', '<(_\x20_*)>', '&#41427;', '(*ゝω・)', 'Z&#828;', 'd&#846;', '★·.·´¯`·.·★.·', 'a&#799;', '0&#799;', '&#41532;', 'q&#830;', '.sad0', '╰☆☆\x20[[text]]\x20☆☆╮', 'l&#828;', 'v&#799;', 'S&#846;', 's12', '&beta;', 'j&#830;', '<:::::[]=¤\x20[[text]]\x20(▀̿̿Ĺ̯̿̿▀̿\x20̿)', '.boldItalicCharMap', '\x20⋆\x20', '&#1344;', '&#41155;', '&#484;', '&#5290;', '&#120453;&#823;', '☽≫≻≽≿⋝⋟⋑⊃⊐⊒⫸》＞❯❱', '&#406;', '٭⊹•꧂', '&oplus;', 'K&#826;', '2&#799;', '&#1087;', '(◍•ᴗ•◍)\x20ミ💖\x20', '&#646;', '9&#799;', 'D&#866;', 'ஜ۩۞۩ஜ\x20', '&#42130;', 'O&#830;', '●‿●', '&#1347;', '&#400;', 'encode', '(|||❛︵❛.)', '&#120472;&#823;', '.emoticon0', 'W&#866;', '۝༒༺', '&#974;', '🕿︎', 'click', 'T&#829;&#851;', '&#120828;&#823;', 'push', 'W&#829;&#851;', '(ω・*ゝ)', 'T&#830;', '.result-s13', '1&#829;&#851;', '\x20(๑′°︿°๑)', '(.﹒︠₋﹒︡.)\x20ﾟ😳☹', '.star6', 'e&#857;', 'a&#829;&#851;', '🕑︎', '5&#866;', '•._.••´¯``•.¸¸.•`\x20[[text]]\x20`•.¸¸.•´´¯`••._.•', '&#1111;', 'diacriticsMiddle', '3&#830;', 'f&#828;', '&#1071;', 'M&#866;', '𒆜𓊉꧂', '.wrap3', '&#9812;', '7&#838;', '&#1105;', 'w&#828;', '\x20]÷••)—\x20', 'M&#857;', '&#310;', '(⌒‿⌒)', '8&#799;', '&#669;', '&#10130;', '(ㅅꈍ﹃ꈍ)*\x20[[text]]\x20*(ꈍ﹃ꈍㅅ)♡', '5&#829;&#851;', '&#313;', '&#40974;', '&#5610;', 't&#838;', '&#120457;&#823;', '.emoticon2', 'reverse', '&#778;\x20⫶', 'L&#828;', '(✿ヘᴥヘ)', '&#1078;', '6&#826;', 'c&#830;', '⁀‿⁀', 'I&#846;', 'A&#838;', '&#5845;', 'g&#799;', '&#633;', '&#3648;', '&iota;', '&#41575;', '&#42180;', '×º°”˜`”°º×\x20', '.dotBoxtwo', '.text', '&#340;', '&ugrave;', '&#1065;', '&#9837;', 'ღƪ(ˆ◡ˆ)ʃ♡\x20[[text]]\x20♡ƪ(ˆ◡ˆ)ʃ♪', '«-(¯`v´¯)-«\x20[[text]]\x20»-(¯`v´¯)-»', 'R&#846;', '✨✩✪✫✬✭✮✯✰✦✱✲✳✴✵✶✷֍֎✸✹✺✻✼✽✾✿❀❁❂❃❄★☆＊', '&#1063;', 'amd', 'Z&#799;', '&#20057;', 'location', '&#120449;&#823;', '(•◡•)', 'getHTML', '&#120455;&#823;', '.result-s19', 't&#826;', '&#41976;', 'g&#857;', 'C&#828;', '7&#866;', 'z&#826;', 'A&#828;', '&#941;', '٭⊹¤.•⨳•.*☆✬\x20', 'A&#826;', '&#428;', 'k&#857;', 'top', 'y&#829;&#851;', '&#19973;', '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯', '•´¯`•.\x20[[text]]\x20.•´¯`•', '&#5167;', '★彡\x20[[text]]\x20彡★', 'P&#857;', '&#1047;', '&#4357;', '8&#826;', 'round', 'S&#799;', 'v&#826;', '\x20(\x20◔\x20ʖ̯\x20◔\x20)', '\x20.o0×X×0o.\x20[[text]]\x20.o0×X×0o.', 'addEventListener', '📭︎', '\x20🎀\x20🍒', '.result-s9', '&#41081;', 'flip', '&#1043;', '\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20', 'E&#826;', 'max', '🕭︎', '•●◉✿\x20', 'k&#846;', '.result-s21', 'V&#866;', '&#8355;', '&#1056;', '.squiggle2CharMap', '&#358;', '(人◕‿◕)', '&#41949;', '٩(˘◡˘)۶', '&Oslash;', '&psi;', '🌘‿🌘', '.squiggle3CharMap', '&#1130;', 'T&#838;', 'S&#838;', 'G&#846;', '.asianStyle2CharMap', 'body', '.star3', '0&#830;', '.fullCrazy5', 'c&#846;', '&#9730;', 'a&#846;', '.sad6', 'N&#799;', '.wideTextCharMap', '&#120454;&#823;', 'j&#846;', '&#1223;', 'm&#846;', 'u&#826;', '.result-s7', '&#41037;', 'v&#846;', '.arrowjoin', '&fnof;', 'X&#857;', '&part;', '&#1095;', '.fullCrazy3', '2&#830;', '\x20卐ॐ\x20ཌ꧂◤', '&#40983;', '♪(\x20^-^)/★,｡･:･ﾟ', '.thankyou7', 'A&#846;', '📁︎', '&#438;', '&#336;', '&#541;', '&#120482;&#823;', '🕓︎', '彡(✿╹◡╹)\x20', '◥꧁ད\x20[[text]]\x20ཌ꧂◤', 'F&#829;&#851;', '.squiggle4CharMap', '♥⊱ღ', 'remove', '癶๑)ლ〜♡', '-·=»‡«=·-\x20[[text]]\x20-·=»‡«=·-', 'c&#799;', '.fullCrazy', '&#41555;', 'u&#829;&#851;', '.wingdings', '&#1358;', '&sigma;', '.neonCharMap', '&rho;', 'G&#857;', '&#5620;', '♥╣[-_-]╠♥', '.crazyWithFlourishOrSymbols4', ']\x20𒆜𓊉꧂', '&#1064;', 'B&#826;', 'u&#846;', '.star0', '&#9835;', '&#1210;', '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯\x20\x20', 'd&#838;', '&#1049;', '🖂︎', 'o&#826;', '.cuteText4', '🗐︎', 'split', 'm&#799;', '⫷\x20[[text]]\x20⫸', '—(••÷[\x20', '&#1349;', 'f&#866;', '.symbolsCharMap', '&#404;', '.cuteText5', '&#1074;', 'M&#830;', '3&#826;', 'J&#846;', '(y)', '📪︎', 's23', 'W&#846;', 'html', '&#3182;', '.arrowBox', 'J&#826;', '.result-s22', '&#5205;', '&#286;', 'c&#828;', 'ᵔᴥᵔ', '.singlewavyJoiner', '🕯︎', '•°¯`••\x20', 'Q&#799;', '(′︿‵｡)', '&#385;', 's(^‿^)-b', '&#120443;&#823;', 'diacriticsTop', 'M&#826;', '&#942;', '.wrap5', 'H&#826;', '&#41751;', 'a&#826;', 'Q&#846;', 'a&#838;', '&#8627;', '&#381;', 'V&#838;', '&#41807;', '\x20\x20🎀\x20\x20', '°°°·.°·..·°¯°·._.·\x20', '&#41731;', '&#65420;', '¸,ø¤º°`°º¤ø,¸¸,ø¤º°\x20', '&#1073;', '&#41080;', 'b&#799;', '&#295;', 'Y&#828;', 'M&#829;&#851;', '.greekCharMap', '★彡[', 'q&#846;', 'Y&#846;', '.futureAlienCharMap', '&#614;', '(^▽^)\x20\x20', '.pubggame1', '+｡:.ﾟヽ(*´∀)ﾉﾟ', '¸,ø¤º°`°º¤ø,¸\x20', '👍︎', '🕙︎', '╚»★«╝\x20[[text]]\x20╚»★«╝', '&#120827;&#823;', '&#1131;', 'classList', 'hasOwnProperty', '&#985;', 'm&#829;&#851;', '꜍$1꜉', '&#5609;', '.sad4', '**•.¸♥¸.•*´💖', '💘🎀', '【｡_｡】\x20[[text]]\x20【｡_｡】', '1&#846;', '.wavyJoiner', 'r&#838;', '&#627;', 'O&#826;', '(ɔ◔‿◔)ɔ', 'T&#857;', '&#1079;', '&#1330;', 'm&#828;', 'F&#826;', 'trim', '.wrap1', 'y&#799;', '★⌒(●ゝω・)', 'K&#846;', '5&#828;', 'K&#829;&#851;', '&#1360;', '&#5196;', 'o&#830;', '.curlybrackets', '&#401;', '&#341;', '&#120462;&#823;', 'e&#838;', '｡*ﾟ.*.｡(っ\x20ᐛ\x20)っ✂╰⋃╯\x20[[text]]', 'リサフランク現代のコンピュ竹内\x20まりや若者が履く流行のスニーカー真夜中のドアホットドッグマスターストライカーソニーブギ新しい日の誕生ライフ\x20-\x20ヒスイ蒸気波\x20無線゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚゛゜ゝゞゟ亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科', '꧁༒☬\x20[[text]]\x20☬༒꧂', '&#608;', 'https://www.discordfonts.com/?=', '&#41674;', '◠◡◠', 'U&#828;', 's18', '&#1028;', 'R&#828;', '&#41045;', '.littleSparkles', 'global', '╚»★«╝', '&#2797;', 'U&#829;&#851;', '&szlig;', 'v&#830;', '&#4318;', '&#8134;', 'querySelector', '(づ｡◕‿‿◕｡)づ\x20', '&#321;', 'E&#828;', '0&#838;', '&#120441;&#823;', '.connectedJoiner', 't&#830;', '&Uacute;', '&#41769;', 'o&#829;&#851;', '`•.¸¸.•´´¯`••._.•\x20[[text]]\x20•._.••`¯´´•.¸¸.•`', '&#5511;', 'e&#829;&#851;', 'C&#826;', '&#407;', '◥꧁ད\x20ॐ卐[[text]]\x20卐ॐ\x20ཌ꧂◤', 'charCodeAt', '&#7433;', 'U&#857;', 'G&#828;', 'add', 'pop', 'u&#838;', '&nu;', '.lunitoolsflipencode', 'F&#857;', '๑۞๑,¸¸,ø¤º°`°๑۩\x20', 'Z&#826;', '5&#830;', '&#1076;', '.result-s1', 'test', '.sad7', 's13', '🕘︎', '▄︻デ', '.thickBox', '.thankyou2', '&#4329;', '&#120475;&#823;', 's29', '3&#828;', '.cuteText3', 'Z&#857;', '&#41246;', '↫↫↫↫↫\x20[[text]]\x20↬↬↬↬↬', '&#9442;', 'm&#830;', '&#2794;', '(◕︿◕✿)\x20', '&#3619;', '&#387;', '2&#838;', '&#291;', '.star2', '🌟⭐ıllıllı', '.crazyWithFlourishOrSymbols2', '&#5500;', 'u&#857;', 'D&#830;', 'x&#799;', '&#3923;', '\x20٩(˘◡˘)۶', '.result-s25', '&#1338;', '▀▄▀▄▀▄\x20', 'L&#799;', 'o&#866;', '.thankyou6', '🌘‿🌘\x20\x20', 'object', 'toString', '🕚︎', 'X&#830;', '&#1060;', '&#120465;&#823;', '&#586;', '&#4327;', 's&#829;&#851;', 'R&#799;', '&kappa;', '&#42128;', '(✿^▽^)', '.bentTextCharMap', 'I&#830;', 'c&#838;', '2&#866;', '🖬︎', 'l&#799;', 'charAt', '🖳︎', '.crazyWithFlourishOrSymbols5', 'W&#830;', '7&#826;', 'maxHeight', 'u&#830;', '┏༼\x20◉\x20╭╮\x20◉༽┓\x20', '.clear', '&#42171;', '.result-s3', '&#120456;&#823;', '.vaporwaveText', '&#5262;', 'floor', 'p&#846;', 'r&#799;', '••.•´¯`•.••\x20', 'X&#866;', 'o&#799;', '&#1185;', '&#4330;', 's15', '1&#826;', '&#5198;', '⦏$1&#x302;⦎', '.squaresCharMap', '&#41157;', '.result-s27', '&#615;', 'v&#857;', '➶➶➶➶➶\x20[[text]]\x20➷➷➷➷➷', '&#639;', '.oldEnglishCharMap', '.squiggle5CharMap', '&#5029;', 'V&#828;', '7&#828;', '&#2749;', 'H&#830;', '⦚$1⦚', '`•.¸¸.•´´¯`••._.•\x20', '&#23610;', 'bottom', '.result-s24', '&#596;', 'y&#830;', '8&#866;', '\x20•°*”˜.•°*”˜', '(*ˊᗜˋ*)', 'z&#846;', '.heart0', 'k&#866;', '&#5397;', '&#411;', '&#392;', '&#120447;&#823;', '.arrowBelow', '▁\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20', '⟦$1⟧', '&#1094;', '.•♫•♬•\x20[[text]]\x20•♬•♫•.', '—(••÷[\x20[[text]]\x20]÷••)—', '5&#799;', '&#41296;', '╚»★«╝\x20', '&yen;', 'j&#828;', 's21', 'I&#866;', '.firework', 's26', '&#41266;', '&#1031;', 'V&#799;', '&#42014;', '.monospaceCharMap', '&#120461;&#823;', '¸„٭⊹✡•~⍣°”ˆ˜¨', '.result-s17', '&#10081;', '&#41922;', '&#7990;', '&#8984;', 'F&#828;', 'x&#828;', '×º°”˜`”°º×\x20[[text]]\x20×º°”˜`”°º×', '6&#830;', 'u&#866;', '&#346;', '&#5741;', '&#4336;', 'T&#826;', 'T&#846;', '&#1488;', '&#120829;&#823;', '(¯´•._.•\x20', '5&#857;', 'I&#799;', '&#652;', 'S&#830;', 'r&#857;', '&Xi;', '5&#846;', '.crossAboveBelow', '&#10122;', '(oꆤ︵ꆤo)\x20', 's25', '9&#838;', '1&#799;', 'G&#829;&#851;', '&#8467;', 'h&#838;', 'l&#857;', 'R&#830;', '&#607;', '&#41042;', '&#7828;', 'B&#829;&#851;', 'y&#828;', '👻ൠ', 'e&#826;', 'b&#838;', '\x20\x20█\x20▇\x20▆\x20▅\x20▄\x20▂▁', 'P&#830;'];
    _0x16b4 = function() {
        return _0x3b01ee;
    };
    return _0x16b4();
}

function crazyWithFlourishOrSymbols2(_0x59a79b) {
    var _0x50aabb = _0x187c56;
    return applyCharMap(boldItalicCharMap, _0x50aabb(0x8c) + _0x59a79b + _0x50aabb(0x64));
}

function crazyWithFlourishOrSymbols5(_0x3a351c) {
    var _0x2dac41 = _0x187c56;
    return applyCharMap(squaresCharMap, _0x2dac41(0x2f1) + _0x3a351c + _0x2dac41(0x282));
}

function wrap1(_0x176dee) {
    var _0x30895e = _0x187c56;
    return applyCharMap(boldCharMap, _0x30895e(0x19a) + [_0x176dee] + _0x30895e(0x9d));
}

function wrap2(_0x1453f7) {
    var _0x3ea69a = _0x187c56;
    return applyCharMap(cursiveCharMap, _0x3ea69a(0x374) + [_0x1453f7] + _0x3ea69a(0x52a));
}

function wrap3(_0x19884f) {
    var _0x2656ea = _0x187c56;
    return applyCharMap(boldItalicCharMap, _0x2656ea(0x237) + [_0x19884f] + '\x20║▌║▌║█│▌');
}

function wrap4(_0x446f81) {
    var _0x202f93 = _0x187c56;
    return applyCharMap(neonCharMap, _0x202f93(0x82) + [_0x446f81] + _0x202f93(0x3c5));
}

function wrap5(_0x2279ae) {
    var _0x45f440 = _0x187c56;
    return applyCharMap(boldItalicCharMap, _0x45f440(0x4f0) + [_0x2279ae] + _0x45f440(0x44e));
}
var newtext = {
    's1': {
        0x1: _0x187c56(0x88),
        0x2: _0x187c56(0x130),
        0x3: _0x187c56(0x4e6),
        0x4: '&#1283;',
        0x5: _0x187c56(0x2cb),
        0x6: _0x187c56(0xa8),
        0x7: '&#608;',
        0x8: _0x187c56(0x128),
        0x9: _0x187c56(0x339),
        0xa: '&#669;',
        0xb: _0x187c56(0xe4),
        0xc: _0x187c56(0x198),
        0xd: _0x187c56(0x129),
        0xe: _0x187c56(0x429),
        0xf: _0x187c56(0x3be),
        0x10: '&rho;',
        0x11: _0x187c56(0x41e),
        0x12: _0x187c56(0x1c),
        0x13: _0x187c56(0x14f),
        0x14: '&#410;',
        0x15: _0x187c56(0xc7),
        0x16: '&#651;',
        0x17: '&#623;',
        0x18: 'x',
        0x19: _0x187c56(0x4a3),
        0x1a: _0x187c56(0x1eb),
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
        0x1: _0x187c56(0x401),
        0x2: '&#9837;',
        0x3: _0x187c56(0x2a4),
        0x4: _0x187c56(0x2b9),
        0x5: _0x187c56(0x184),
        0x6: _0x187c56(0x297),
        0x7: _0x187c56(0x4ff),
        0x8: _0x187c56(0x242),
        0x9: _0x187c56(0x19e),
        0xa: _0x187c56(0x167),
        0xb: '&#1008;',
        0xc: _0x187c56(0x3fe),
        0xd: '&#9812;',
        0xe: _0x187c56(0x3ca),
        0xf: '&#8857;',
        0x10: _0x187c56(0x3c0),
        0x11: _0x187c56(0xc9),
        0x12: '&#9736;',
        0x13: _0x187c56(0x484),
        0x14: _0x187c56(0x391),
        0x15: _0x187c56(0x28c),
        0x16: _0x187c56(0x177),
        0x17: _0x187c56(0xc),
        0x18: _0x187c56(0x502),
        0x19: '&#9791;',
        0x1a: '&#9761;',
        0x1b: _0x187c56(0x401),
        0x1c: _0x187c56(0x342),
        0x1d: _0x187c56(0x2a4),
        0x1e: _0x187c56(0x2b9),
        0x1f: '&euro;',
        0x20: '&#988;',
        0x21: _0x187c56(0x4ff),
        0x22: _0x187c56(0x242),
        0x23: _0x187c56(0x19e),
        0x24: '&#9834;',
        0x25: '&#1008;',
        0x26: _0x187c56(0x3fe),
        0x27: _0x187c56(0x318),
        0x28: _0x187c56(0x3ca),
        0x29: _0x187c56(0x33),
        0x2a: '&rho;',
        0x2b: _0x187c56(0xc9),
        0x2c: _0x187c56(0x6a),
        0x2d: _0x187c56(0x484),
        0x2e: _0x187c56(0x391),
        0x2f: _0x187c56(0x28c),
        0x30: _0x187c56(0x177),
        0x31: _0x187c56(0xc),
        0x32: '&#8984;',
        0x33: _0x187c56(0xb3),
        0x34: '&#9761;',
        0x35: _0x187c56(0x518),
        0x36: _0x187c56(0x138),
        0x37: _0x187c56(0x29e),
        0x38: _0x187c56(0x43),
        0x39: '&#10126;',
        0x3a: _0x187c56(0x25d),
        0x3b: '&#10128;',
        0x3c: '&#10129;',
        0x3d: _0x187c56(0x322),
        0x3e: '&#9450;'
    },
    's3': {
        0x1: _0x187c56(0xba),
        0x2: _0x187c56(0x2dc),
        0x3: _0x187c56(0x212),
        0x4: '&#270;',
        0x5: '&#276;',
        0x6: _0x187c56(0x37f),
        0x7: _0x187c56(0x3ea),
        0x8: _0x187c56(0x2af),
        0x9: _0x187c56(0x213),
        0xa: _0x187c56(0x135),
        0xb: _0x187c56(0x31e),
        0xc: _0x187c56(0x325),
        0xd: '&#1052;',
        0xe: _0x187c56(0x25a),
        0xf: _0x187c56(0x3ac),
        0x10: _0x187c56(0x37d),
        0x11: 'Q',
        0x12: _0x187c56(0x33f),
        0x13: _0x187c56(0x508),
        0x14: _0x187c56(0x100),
        0x15: _0x187c56(0x45d),
        0x16: 'V',
        0x17: _0x187c56(0x20a),
        0x18: '&#1046;',
        0x19: _0x187c56(0x10c),
        0x1a: '&#377;',
        0x1b: _0x187c56(0xba),
        0x1c: '&beta;',
        0x1d: _0x187c56(0x212),
        0x1e: _0x187c56(0x1b9),
        0x1f: _0x187c56(0x2e),
        0x20: _0x187c56(0x37f),
        0x21: _0x187c56(0x3ea),
        0x22: _0x187c56(0x2af),
        0x23: _0x187c56(0x213),
        0x24: _0x187c56(0x135),
        0x25: '&#310;',
        0x26: _0x187c56(0x325),
        0x27: '&#1052;',
        0x28: '&#323;',
        0x29: _0x187c56(0x3ac),
        0x2a: _0x187c56(0x37d),
        0x2b: 'Q',
        0x2c: _0x187c56(0x33f),
        0x2d: '&#346;',
        0x2e: _0x187c56(0x100),
        0x2f: _0x187c56(0x45d),
        0x30: 'V',
        0x31: _0x187c56(0x20a),
        0x32: _0x187c56(0x28b),
        0x33: _0x187c56(0x10c),
        0x34: _0x187c56(0x10d),
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
        0x1: _0x187c56(0x274),
        0x2: 'q',
        0x3: _0x187c56(0x4dc),
        0x4: 'p',
        0x5: _0x187c56(0x195),
        0x6: _0x187c56(0x522),
        0x7: _0x187c56(0x489),
        0x8: _0x187c56(0x18),
        0x9: '&#7433;',
        0xa: _0x187c56(0x1c),
        0xb: _0x187c56(0x22c),
        0xc: 'l',
        0xd: '&#623;',
        0xe: 'u',
        0xf: 'o',
        0x10: 'd',
        0x11: 'b',
        0x12: _0x187c56(0x337),
        0x13: 's',
        0x14: _0x187c56(0x292),
        0x15: 'n',
        0x16: _0x187c56(0x512),
        0x17: _0x187c56(0x201),
        0x18: 'x',
        0x19: _0x187c56(0x275),
        0x1a: 'z',
        0x1b: '&#592;',
        0x1c: 'q',
        0x1d: _0x187c56(0x4dc),
        0x1e: 'p',
        0x1f: _0x187c56(0x195),
        0x20: _0x187c56(0x522),
        0x21: _0x187c56(0x489),
        0x22: _0x187c56(0x18),
        0x23: _0x187c56(0x467),
        0x24: _0x187c56(0x1c),
        0x25: _0x187c56(0x22c),
        0x26: 'l',
        0x27: '&#623;',
        0x28: 'u',
        0x29: 'o',
        0x2a: 'd',
        0x2b: 'b',
        0x2c: _0x187c56(0x337),
        0x2d: 's',
        0x2e: '&#647;',
        0x2f: 'n',
        0x30: _0x187c56(0x512),
        0x31: '&#653;',
        0x32: 'x',
        0x33: _0x187c56(0x275),
        0x34: 'z',
        0x35: _0x187c56(0x2e7),
        0x36: _0x187c56(0x366),
        0x37: _0x187c56(0x2f6),
        0x38: _0x187c56(0x11c),
        0x39: _0x187c56(0x246),
        0x3a: '9',
        0x3b: '&#12581;',
        0x3c: '8',
        0x3d: '6',
        0x3e: '0'
    },
    's5': {
        0x1: '&Delta;',
        0x2: '&beta;',
        0x3: _0x187c56(0x47),
        0x4: _0x187c56(0x1fc),
        0x5: _0x187c56(0x184),
        0x6: _0x187c56(0x37c),
        0x7: _0x187c56(0x2e3),
        0x8: '&#294;',
        0x9: _0x187c56(0x464),
        0xa: '&#308;',
        0xb: _0x187c56(0x20e),
        0xc: _0x187c56(0x457),
        0xd: _0x187c56(0x9b),
        0xe: _0x187c56(0xae),
        0xf: _0x187c56(0x383),
        0x10: _0x187c56(0x231),
        0x11: _0x187c56(0x4),
        0x12: _0x187c56(0x1a6),
        0x13: _0x187c56(0x1f2),
        0x14: _0x187c56(0x37f),
        0x15: '&#7918;',
        0x16: 'V',
        0x17: _0x187c56(0x20a),
        0x18: _0x187c56(0x28b),
        0x19: _0x187c56(0x4f1),
        0x1a: _0x187c56(0x3ff),
        0x1b: '&Delta;',
        0x1c: _0x187c56(0x2dc),
        0x1d: _0x187c56(0x47),
        0x1e: _0x187c56(0x1fc),
        0x1f: _0x187c56(0x184),
        0x20: _0x187c56(0x37c),
        0x21: _0x187c56(0x2e3),
        0x22: '&#294;',
        0x23: _0x187c56(0x464),
        0x24: _0x187c56(0x135),
        0x25: _0x187c56(0x20e),
        0x26: _0x187c56(0x457),
        0x27: _0x187c56(0x9b),
        0x28: _0x187c56(0xae),
        0x29: _0x187c56(0x383),
        0x2a: _0x187c56(0x231),
        0x2b: _0x187c56(0x4),
        0x2c: '&#344;',
        0x2d: _0x187c56(0x1f2),
        0x2e: _0x187c56(0x37f),
        0x2f: _0x187c56(0xdf),
        0x30: 'V',
        0x31: _0x187c56(0x20a),
        0x32: _0x187c56(0x28b),
        0x33: _0x187c56(0x4f1),
        0x34: _0x187c56(0x3ff),
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
        0x1: _0x187c56(0x88),
        0x2: _0x187c56(0x218),
        0x3: _0x187c56(0x78),
        0x4: _0x187c56(0x3a1),
        0x5: _0x187c56(0xf6),
        0x6: _0x187c56(0x39f),
        0x7: _0x187c56(0x443),
        0x8: _0x187c56(0x412),
        0x9: _0x187c56(0x338),
        0xa: _0x187c56(0x321),
        0xb: '&#1185;',
        0xc: _0x187c56(0x51e),
        0xd: '&#625;',
        0xe: _0x187c56(0x429),
        0xf: _0x187c56(0x3be),
        0x10: _0x187c56(0x3c0),
        0x11: _0x187c56(0x2a),
        0x12: _0x187c56(0x45),
        0x13: _0x187c56(0x488),
        0x14: '&#429;',
        0x15: '&micro;',
        0x16: '&#1141;',
        0x17: _0x187c56(0xc),
        0x18: _0x187c56(0x50d),
        0x19: '&#4327;',
        0x1a: '&#438;',
        0x1b: '&alpha;',
        0x1c: _0x187c56(0x218),
        0x1d: _0x187c56(0x78),
        0x1e: _0x187c56(0x3a1),
        0x1f: _0x187c56(0xf6),
        0x20: _0x187c56(0x39f),
        0x21: _0x187c56(0x443),
        0x22: _0x187c56(0x412),
        0x23: _0x187c56(0x338),
        0x24: _0x187c56(0x321),
        0x25: _0x187c56(0x4c3),
        0x26: _0x187c56(0x51e),
        0x27: _0x187c56(0x129),
        0x28: _0x187c56(0x429),
        0x29: _0x187c56(0x3be),
        0x2a: _0x187c56(0x3c0),
        0x2b: '&phi;',
        0x2c: '&#2792;',
        0x2d: _0x187c56(0x488),
        0x2e: _0x187c56(0x1d0),
        0x2f: _0x187c56(0x29a),
        0x30: _0x187c56(0x6e),
        0x31: _0x187c56(0xc),
        0x32: _0x187c56(0x50d),
        0x33: _0x187c56(0x4a3),
        0x34: _0x187c56(0x3ab),
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
        0x1: _0x187c56(0x421),
        0x2: '&#5623;',
        0x3: '&#5205;',
        0x4: _0x187c56(0x327),
        0x5: _0x187c56(0x3c2),
        0x6: _0x187c56(0x1e8),
        0x7: _0x187c56(0x2e3),
        0x8: _0x187c56(0x48f),
        0x9: _0x187c56(0x4d2),
        0xa: '&#5262;',
        0xb: _0x187c56(0x335),
        0xc: _0x187c56(0x2e4),
        0xd: _0x187c56(0x168),
        0xe: _0x187c56(0x4c7),
        0xf: _0x187c56(0x137),
        0x10: '&#5229;',
        0x11: '&#586;',
        0x12: _0x187c56(0x461),
        0x13: _0x187c56(0x4e4),
        0x14: '&#19973;',
        0x15: _0x187c56(0x439),
        0x16: _0x187c56(0x362),
        0x17: '&#5615;',
        0x18: _0x187c56(0x509),
        0x19: _0x187c56(0x117),
        0x1a: _0x187c56(0x34a),
        0x1b: _0x187c56(0x421),
        0x1c: '&#5623;',
        0x1d: _0x187c56(0x3e9),
        0x1e: _0x187c56(0x327),
        0x1f: '&#5620;',
        0x20: _0x187c56(0x1e8),
        0x21: '&#484;',
        0x22: _0x187c56(0x48f),
        0x23: _0x187c56(0x4d2),
        0x24: _0x187c56(0x4bc),
        0x25: '&#5845;',
        0x26: _0x187c56(0x2e4),
        0x27: _0x187c56(0x168),
        0x28: _0x187c56(0x4c7),
        0x29: '&#5597;',
        0x2a: _0x187c56(0x230),
        0x2b: _0x187c56(0x4a2),
        0x2c: _0x187c56(0x461),
        0x2d: '&#5397;',
        0x2e: _0x187c56(0x35f),
        0x2f: _0x187c56(0x439),
        0x30: _0x187c56(0x362),
        0x31: _0x187c56(0x1e2),
        0x32: '&#5741;',
        0x33: _0x187c56(0x117),
        0x34: _0x187c56(0x34a),
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
        0x1: _0x187c56(0x53),
        0x2: '&#4329;',
        0x3: _0x187c56(0x1c9),
        0x4: _0x187c56(0x20b),
        0x5: _0x187c56(0x453),
        0x6: 'f',
        0x7: _0x187c56(0x4c4),
        0x8: 'h',
        0x9: _0x187c56(0x501),
        0xa: _0x187c56(0xb6),
        0xb: _0x187c56(0x4a6),
        0xc: 'l',
        0xd: _0x187c56(0x273),
        0xe: '&#8134;',
        0xf: _0x187c56(0x28),
        0x10: '&rho;',
        0x11: '&#4306;',
        0x12: _0x187c56(0x1be),
        0x13: _0x187c56(0x50a),
        0x14: _0x187c56(0x493),
        0x15: _0x187c56(0xc7),
        0x16: '&#8023;',
        0x17: 'w',
        0x18: _0x187c56(0x8f),
        0x19: '&#4327;',
        0x1a: _0x187c56(0x12),
        0x1b: _0x187c56(0x53),
        0x1c: _0x187c56(0x47c),
        0x1d: _0x187c56(0x1c9),
        0x1e: _0x187c56(0x20b),
        0x1f: _0x187c56(0x453),
        0x20: 'f',
        0x21: _0x187c56(0x4c4),
        0x22: 'h',
        0x23: '&#7990;',
        0x24: '&#4325;',
        0x25: _0x187c56(0x4a6),
        0x26: 'l',
        0x27: '&#4317;',
        0x28: _0x187c56(0x454),
        0x29: _0x187c56(0x28),
        0x2a: _0x187c56(0x3c0),
        0x2b: _0x187c56(0xd3),
        0x2c: _0x187c56(0x1be),
        0x2d: '&#4336;',
        0x2e: _0x187c56(0x493),
        0x2f: _0x187c56(0xc7),
        0x30: '&#8023;',
        0x31: 'w',
        0x32: _0x187c56(0x8f),
        0x33: _0x187c56(0x4a3),
        0x34: _0x187c56(0x12),
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
        0x1: '&#940;',
        0x2: _0x187c56(0x3dc),
        0x3: _0x187c56(0x2b6),
        0x4: '&#545;',
        0x5: _0x187c56(0x358),
        0x6: '&#1171;',
        0x7: _0x187c56(0x48b),
        0x8: _0x187c56(0x40a),
        0x9: _0x187c56(0x147),
        0xa: _0x187c56(0x1e9),
        0xb: '&#311;',
        0xc: _0x187c56(0x181),
        0xd: _0x187c56(0x16f),
        0xe: _0x187c56(0x3f7),
        0xf: _0x187c56(0x269),
        0x10: '&rho;',
        0x11: 'q',
        0x12: '&#341;',
        0x13: _0x187c56(0x1ef),
        0x14: _0x187c56(0x15e),
        0x15: _0x187c56(0x340),
        0x16: _0x187c56(0x46d),
        0x17: _0x187c56(0x2fd),
        0x18: 'x',
        0x19: _0x187c56(0x3a2),
        0x1a: '&#382;',
        0x1b: '&#940;',
        0x1c: '&#1074;',
        0x1d: _0x187c56(0x2b6),
        0x1e: _0x187c56(0x1ec),
        0x1f: _0x187c56(0x358),
        0x20: '&#1171;',
        0x21: _0x187c56(0x48b),
        0x22: '&#295;',
        0x23: _0x187c56(0x147),
        0x24: _0x187c56(0x1e9),
        0x25: _0x187c56(0x1f0),
        0x26: _0x187c56(0x181),
        0x27: '&#1084;',
        0x28: _0x187c56(0x3f7),
        0x29: '&#972;',
        0x2a: _0x187c56(0x3c0),
        0x2b: 'q',
        0x2c: _0x187c56(0x43d),
        0x2d: _0x187c56(0x1ef),
        0x2e: '&#355;',
        0x2f: _0x187c56(0x340),
        0x30: _0x187c56(0x46d),
        0x31: _0x187c56(0x2fd),
        0x32: 'x',
        0x33: _0x187c56(0x3a2),
        0x34: '&#382;',
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
        0x1: _0x187c56(0xaa),
        0x2: _0x187c56(0x2e2),
        0x3: _0x187c56(0x352),
        0x4: _0x187c56(0x44b),
        0x5: _0x187c56(0x160),
        0x6: _0x187c56(0x180),
        0x7: '&#41037;',
        0x8: '&#42075;',
        0x9: '&#41105;',
        0xa: _0x187c56(0x8b),
        0xb: _0x187c56(0x3a6),
        0xc: _0x187c56(0x2f2),
        0xd: _0x187c56(0x523),
        0xe: _0x187c56(0x371),
        0xf: _0x187c56(0x26),
        0x10: _0x187c56(0x15c),
        0x11: _0x187c56(0x408),
        0x12: '&#42131;',
        0x13: _0x187c56(0x170),
        0x14: _0x187c56(0x2b2),
        0x15: '&#41991;',
        0x16: '&#41949;',
        0x17: _0x187c56(0x4ef),
        0x18: _0x187c56(0x2cd),
        0x19: '&#42015;',
        0x1a: '&#41076;',
        0x1b: _0x187c56(0xaa),
        0x1c: _0x187c56(0x2e2),
        0x1d: '&#41976;',
        0x1e: _0x187c56(0x44b),
        0x1f: _0x187c56(0x160),
        0x20: _0x187c56(0x180),
        0x21: _0x187c56(0x39c),
        0x22: '&#42075;',
        0x23: _0x187c56(0x225),
        0x24: _0x187c56(0x8b),
        0x25: _0x187c56(0x3a6),
        0x26: '&#42130;',
        0x27: _0x187c56(0x523),
        0x28: '&#41081;',
        0x29: _0x187c56(0x26),
        0x2a: '&#41571;',
        0x2b: '&#41080;',
        0x2c: _0x187c56(0x255),
        0x2d: '&#41754;',
        0x2e: '&#42181;',
        0x2f: '&#41991;',
        0x30: _0x187c56(0x381),
        0x31: _0x187c56(0x4ef),
        0x32: _0x187c56(0x2cd),
        0x33: '&#42015;',
        0x34: _0x187c56(0x2a3),
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
        0x1: _0x187c56(0x9),
        0x2: _0x187c56(0x248),
        0x3: 'C',
        0x4: 'D',
        0x5: _0x187c56(0x515),
        0x6: 'F',
        0x7: 'G',
        0x8: 'H',
        0x9: 'I',
        0xa: 'J',
        0xb: '&#1180;',
        0xc: 'L',
        0xd: 'M',
        0xe: _0x187c56(0x62),
        0xf: '&#1060;',
        0x10: 'P',
        0x11: _0x187c56(0x207),
        0x12: _0x187c56(0x314),
        0x13: 'S',
        0x14: _0x187c56(0x1be),
        0x15: _0x187c56(0x1f1),
        0x16: 'V',
        0x17: _0x187c56(0x341),
        0x18: '&#1046;',
        0x19: _0x187c56(0x121),
        0x1a: 'Z',
        0x1b: _0x187c56(0x9),
        0x1c: _0x187c56(0x248),
        0x1d: 'C',
        0x1e: 'D',
        0x1f: _0x187c56(0x515),
        0x20: 'F',
        0x21: 'G',
        0x22: 'H',
        0x23: 'I',
        0x24: 'J',
        0x25: _0x187c56(0x20e),
        0x26: 'L',
        0x27: 'M',
        0x28: _0x187c56(0x62),
        0x29: _0x187c56(0x4a0),
        0x2a: 'P',
        0x2b: '&#490;',
        0x2c: _0x187c56(0x314),
        0x2d: 'S',
        0x2e: _0x187c56(0x1be),
        0x2f: _0x187c56(0x1f1),
        0x30: 'V',
        0x31: _0x187c56(0x341),
        0x32: _0x187c56(0x28b),
        0x33: _0x187c56(0x121),
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
        0x1: _0x187c56(0x401),
        0x2: _0x187c56(0x404),
        0x3: '&#41555;',
        0x4: _0x187c56(0x270),
        0x5: _0x187c56(0x160),
        0x6: _0x187c56(0xa1),
        0x7: _0x187c56(0x2c7),
        0x8: _0x187c56(0x4ca),
        0x9: _0x187c56(0x1f4),
        0xa: _0x187c56(0x8b),
        0xb: _0x187c56(0x1e3),
        0xc: _0x187c56(0x2f2),
        0xd: _0x187c56(0x204),
        0xe: _0x187c56(0x3),
        0xf: _0x187c56(0x16d),
        0x10: _0x187c56(0x15c),
        0x11: _0x187c56(0x281),
        0x12: _0x187c56(0x19b),
        0x13: _0x187c56(0x3fa),
        0x14: _0x187c56(0x33b),
        0x15: '&#40974;',
        0x16: _0x187c56(0x56),
        0x17: _0x187c56(0x14c),
        0x18: _0x187c56(0x2b8),
        0x19: _0x187c56(0x45e),
        0x1a: _0x187c56(0x2a3),
        0x1b: _0x187c56(0x401),
        0x1c: _0x187c56(0x404),
        0x1d: _0x187c56(0x3ba),
        0x1e: '&#41016;',
        0x1f: _0x187c56(0x160),
        0x20: _0x187c56(0xa1),
        0x21: _0x187c56(0x2c7),
        0x22: _0x187c56(0x4ca),
        0x23: '&#40996;',
        0x24: _0x187c56(0x8b),
        0x25: _0x187c56(0x1e3),
        0x26: _0x187c56(0x2f2),
        0x27: _0x187c56(0x204),
        0x28: _0x187c56(0x3),
        0x29: '&#41126;',
        0x2a: _0x187c56(0x15c),
        0x2b: _0x187c56(0x281),
        0x2c: _0x187c56(0x19b),
        0x2d: '&#41751;',
        0x2e: _0x187c56(0x33b),
        0x2f: _0x187c56(0x326),
        0x30: _0x187c56(0x56),
        0x31: _0x187c56(0x14c),
        0x32: '&#41660;',
        0x33: _0x187c56(0x45e),
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
        0x1: _0x187c56(0x2b7),
        0x2: _0x187c56(0x17a),
        0x3: _0x187c56(0x118),
        0x4: _0x187c56(0x139),
        0x5: _0x187c56(0x500),
        0x6: _0x187c56(0x114),
        0x7: '&#41804;',
        0x8: '&#41053;',
        0x9: _0x187c56(0x4a7),
        0xa: _0x187c56(0x4b8),
        0xb: _0x187c56(0x1e3),
        0xc: '&#42130;',
        0xd: '&#41141;',
        0xe: _0x187c56(0x445),
        0xf: _0x187c56(0x4f7),
        0x10: _0x187c56(0x15c),
        0x11: '&#41392;',
        0x12: _0x187c56(0x19b),
        0x13: '&#41433;',
        0x14: _0x187c56(0x33b),
        0x15: _0x187c56(0x214),
        0x16: '&#42150;',
        0x17: _0x187c56(0x4ef),
        0x18: _0x187c56(0x33a),
        0x19: _0x187c56(0x143),
        0x1a: _0x187c56(0x2a3),
        0x1b: _0x187c56(0x2b7),
        0x1c: _0x187c56(0x17a),
        0x1d: '&#41556;',
        0x1e: _0x187c56(0x139),
        0x1f: _0x187c56(0x500),
        0x20: _0x187c56(0x114),
        0x21: _0x187c56(0x1c0),
        0x22: '&#41053;',
        0x23: _0x187c56(0x4a7),
        0x24: _0x187c56(0x4b8),
        0x25: '&#40984;',
        0x26: _0x187c56(0x2f2),
        0x27: '&#41141;',
        0x28: _0x187c56(0x445),
        0x29: '&#41266;',
        0x2a: _0x187c56(0x15c),
        0x2b: '&#41392;',
        0x2c: _0x187c56(0x19b),
        0x2d: _0x187c56(0x245),
        0x2e: _0x187c56(0x33b),
        0x2f: _0x187c56(0x214),
        0x30: _0x187c56(0x51),
        0x31: '&#41296;',
        0x32: _0x187c56(0x33a),
        0x33: _0x187c56(0x143),
        0x34: _0x187c56(0x2a3),
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
        0x1: _0x187c56(0xfd),
        0x2: _0x187c56(0x17e),
        0x3: _0x187c56(0x258),
        0x4: _0x187c56(0x221),
        0x5: _0x187c56(0x2f6),
        0x6: 'F',
        0x7: _0x187c56(0x243),
        0x8: _0x187c56(0x27e),
        0x9: _0x187c56(0x1a5),
        0xa: _0x187c56(0x405),
        0xb: _0x187c56(0x169),
        0xc: _0x187c56(0x457),
        0xd: _0x187c56(0x44),
        0xe: _0x187c56(0x81),
        0xf: _0x187c56(0x383),
        0x10: _0x187c56(0x3a),
        0x11: _0x187c56(0xc6),
        0x12: _0x187c56(0x4d9),
        0x13: _0x187c56(0x172),
        0x14: _0x187c56(0x100),
        0x15: _0x187c56(0x1f1),
        0x16: _0x187c56(0x3da),
        0x17: '&#412;',
        0x18: _0x187c56(0x27c),
        0x19: _0x187c56(0x260),
        0x1a: _0x187c56(0x524),
        0x1b: _0x187c56(0xfd),
        0x1c: _0x187c56(0x17e),
        0x1d: _0x187c56(0x258),
        0x1e: '&ETH;',
        0x1f: '&#400;',
        0x20: 'F',
        0x21: _0x187c56(0x243),
        0x22: _0x187c56(0x27e),
        0x23: '&#618;',
        0x24: _0x187c56(0x405),
        0x25: _0x187c56(0x169),
        0x26: _0x187c56(0x457),
        0x27: '&#3057;',
        0x28: _0x187c56(0x81),
        0x29: _0x187c56(0x383),
        0x2a: _0x187c56(0x3a),
        0x2b: _0x187c56(0xc6),
        0x2c: _0x187c56(0x4d9),
        0x2d: _0x187c56(0x172),
        0x2e: _0x187c56(0x100),
        0x2f: '&#1062;',
        0x30: _0x187c56(0x3da),
        0x31: _0x187c56(0xe0),
        0x32: '&chi;',
        0x33: _0x187c56(0x260),
        0x34: _0x187c56(0x524),
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
        0x1: _0x187c56(0x4e5),
        0x2: _0x187c56(0x3f2),
        0x3: '&#391;',
        0x4: '&#394;',
        0x5: _0x187c56(0x449),
        0x6: '&#401;',
        0x7: '&#403;',
        0x8: _0x187c56(0x398),
        0x9: '&#406;',
        0xa: _0x187c56(0x2ee),
        0xb: _0x187c56(0x102),
        0xc: _0x187c56(0x1e1),
        0xd: 'M',
        0xe: _0x187c56(0x1e0),
        0xf: _0x187c56(0x295),
        0x10: _0x187c56(0x231),
        0x11: '&#418;',
        0x12: '&#422;',
        0x13: _0x187c56(0xad),
        0x14: _0x187c56(0x35b),
        0x15: '&#434;',
        0x16: '&#404;',
        0x17: '&#412;',
        0x18: _0x187c56(0x25b),
        0x19: _0x187c56(0x117),
        0x1a: _0x187c56(0x1b),
        0x1b: _0x187c56(0x4e5),
        0x1c: _0x187c56(0x3f2),
        0x1d: _0x187c56(0x146),
        0x1e: _0x187c56(0x209),
        0x1f: '&#1028;',
        0x20: _0x187c56(0x43c),
        0x21: _0x187c56(0x243),
        0x22: '&#1223;',
        0x23: _0x187c56(0x2e7),
        0x24: '&#646;',
        0x25: _0x187c56(0x102),
        0x26: _0x187c56(0x1e1),
        0x27: 'M',
        0x28: _0x187c56(0x1e0),
        0x29: _0x187c56(0x295),
        0x2a: _0x187c56(0x231),
        0x2b: _0x187c56(0x17c),
        0x2c: '&#422;',
        0x2d: _0x187c56(0xad),
        0x2e: '&#428;',
        0x2f: _0x187c56(0x202),
        0x30: _0x187c56(0x3da),
        0x31: _0x187c56(0xe0),
        0x32: _0x187c56(0x25b),
        0x33: _0x187c56(0x117),
        0x34: '&#548;',
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
        0x2: _0x187c56(0x266),
        0x3: _0x187c56(0x236),
        0x4: _0x187c56(0x35),
        0x5: _0x187c56(0x2d4),
        0x6: _0x187c56(0x482),
        0x7: _0x187c56(0x2c7),
        0x8: _0x187c56(0x27f),
        0x9: '&#41105;',
        0xa: _0x187c56(0x4b8),
        0xb: '&#40983;',
        0xc: '&#42130;',
        0xd: _0x187c56(0x204),
        0xe: _0x187c56(0x445),
        0xf: _0x187c56(0x16d),
        0x10: _0x187c56(0x15c),
        0x11: _0x187c56(0x182),
        0x12: _0x187c56(0x263),
        0x13: _0x187c56(0x170),
        0x14: '&#41686;',
        0x15: _0x187c56(0x2ca),
        0x16: _0x187c56(0x2c0),
        0x17: _0x187c56(0x14c),
        0x18: _0x187c56(0x7d),
        0x19: _0x187c56(0x4fa),
        0x1a: '&#41076;',
        0x1b: '&#41074;',
        0x1c: _0x187c56(0x266),
        0x1d: _0x187c56(0x236),
        0x1e: '&#41120;',
        0x1f: _0x187c56(0x2d4),
        0x20: _0x187c56(0x482),
        0x21: _0x187c56(0x2c7),
        0x22: _0x187c56(0x27f),
        0x23: _0x187c56(0x225),
        0x24: _0x187c56(0x4b8),
        0x25: _0x187c56(0x3a6),
        0x26: '&#42130;',
        0x27: _0x187c56(0x204),
        0x28: _0x187c56(0x445),
        0x29: _0x187c56(0x16d),
        0x2a: _0x187c56(0x15c),
        0x2b: _0x187c56(0x182),
        0x2c: '&#41733;',
        0x2d: _0x187c56(0x170),
        0x2e: _0x187c56(0x6f),
        0x2f: _0x187c56(0x2ca),
        0x30: _0x187c56(0x2c0),
        0x31: '&#41295;',
        0x32: _0x187c56(0x7d),
        0x33: '&#42014;',
        0x34: _0x187c56(0x2a3),
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
        0x1: _0x187c56(0xb8),
        0x2: _0x187c56(0x3d7),
        0x3: _0x187c56(0xc8),
        0x4: _0x187c56(0x496),
        0x5: _0x187c56(0x3ad),
        0x6: _0x187c56(0x42e),
        0x7: _0x187c56(0x79),
        0x8: _0x187c56(0x4cc),
        0x9: _0x187c56(0x4cf),
        0xa: _0x187c56(0x321),
        0xb: _0x187c56(0xe4),
        0xc: '&#645;',
        0xd: _0x187c56(0x201),
        0xe: _0x187c56(0xff),
        0xf: _0x187c56(0x178),
        0x10: _0x187c56(0x3c0),
        0x11: '&phi;',
        0x12: _0x187c56(0x438),
        0x13: '&#1359;',
        0x14: _0x187c56(0x32),
        0x15: _0x187c56(0x87),
        0x16: _0x187c56(0x29c),
        0x17: _0x187c56(0x5e),
        0x18: '&#1347;',
        0x19: '&#1358;',
        0x1a: _0x187c56(0x2e1),
        0x1b: _0x187c56(0xb8),
        0x1c: _0x187c56(0x3d7),
        0x1d: _0x187c56(0xc8),
        0x1e: _0x187c56(0x496),
        0x1f: _0x187c56(0x3ad),
        0x20: _0x187c56(0x42e),
        0x21: _0x187c56(0x79),
        0x22: '&#615;',
        0x23: _0x187c56(0x4cf),
        0x24: _0x187c56(0x321),
        0x25: '&#409;',
        0x26: _0x187c56(0x198),
        0x27: _0x187c56(0x201),
        0x28: '&#1356;',
        0x29: '&#1342;',
        0x2a: _0x187c56(0x3c0),
        0x2b: _0x187c56(0x2a),
        0x2c: _0x187c56(0x438),
        0x2d: _0x187c56(0x1d3),
        0x2e: _0x187c56(0x32),
        0x2f: _0x187c56(0x87),
        0x30: _0x187c56(0x29c),
        0x31: _0x187c56(0x5e),
        0x32: _0x187c56(0x2f5),
        0x33: _0x187c56(0x3bd),
        0x34: _0x187c56(0x2e1),
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
        0x1: '&alpha;',
        0x2: '&szlig;',
        0x3: _0x187c56(0x2b6),
        0x4: 'd',
        0x5: '&epsilon;',
        0x6: _0x187c56(0x39f),
        0x7: 'g',
        0x8: 'h',
        0x9: _0x187c56(0x23f),
        0xa: _0x187c56(0x109),
        0xb: _0x187c56(0x4a6),
        0xc: _0x187c56(0x2b4),
        0xd: 'm',
        0xe: _0x187c56(0x284),
        0xf: _0x187c56(0x2e9),
        0x10: 'p',
        0x11: _0x187c56(0x4),
        0x12: 'r',
        0x13: _0x187c56(0x26b),
        0x14: '&dagger;',
        0x15: 'u',
        0x16: _0x187c56(0xbb),
        0x17: _0x187c56(0xc),
        0x18: 'x',
        0x19: _0x187c56(0x384),
        0x1a: 'z',
        0x1b: _0x187c56(0x88),
        0x1c: _0x187c56(0x451),
        0x1d: _0x187c56(0x2b6),
        0x1e: 'd',
        0x1f: '&epsilon;',
        0x20: '&fnof;',
        0x21: 'g',
        0x22: 'h',
        0x23: _0x187c56(0x23f),
        0x24: '&#1397;',
        0x25: _0x187c56(0x4a6),
        0x26: '&#65434;',
        0x27: 'm',
        0x28: '&eta;',
        0x29: _0x187c56(0x2e9),
        0x2a: 'p',
        0x2b: _0x187c56(0x4),
        0x2c: 'r',
        0x2d: '&scaron;',
        0x2e: _0x187c56(0x4c),
        0x2f: 'u',
        0x30: _0x187c56(0xbb),
        0x31: _0x187c56(0xc),
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
        0x1: _0x187c56(0x99),
        0x2: _0x187c56(0x4c4),
        0x3: _0x187c56(0x1f6),
        0x4: _0x187c56(0x20b),
        0x5: _0x187c56(0x63),
        0x6: _0x187c56(0x42e),
        0x7: _0x187c56(0x44f),
        0x8: _0x187c56(0x3cb),
        0x9: _0x187c56(0x4cf),
        0xa: '&#646;',
        0xb: _0x187c56(0x158),
        0xc: _0x187c56(0xbe),
        0xd: _0x187c56(0x129),
        0xe: _0x187c56(0x1cd),
        0xf: _0x187c56(0xdc),
        0x10: _0x187c56(0x1df),
        0x11: _0x187c56(0x251),
        0x12: _0x187c56(0x438),
        0x13: '&sigmaf;',
        0x14: _0x187c56(0xe7),
        0x15: _0x187c56(0xc7),
        0x16: '&#3182;',
        0x17: _0x187c56(0xc),
        0x18: _0x187c56(0x486),
        0x19: _0x187c56(0x29c),
        0x1a: _0x187c56(0x4d5),
        0x1b: '&#3588;',
        0x1c: _0x187c56(0x4c4),
        0x1d: _0x187c56(0x1f6),
        0x1e: _0x187c56(0x20b),
        0x1f: '&#2799;',
        0x20: _0x187c56(0x42e),
        0x21: _0x187c56(0x44f),
        0x22: _0x187c56(0x3cb),
        0x23: '&#639;',
        0x24: _0x187c56(0x2ee),
        0x25: _0x187c56(0x158),
        0x26: _0x187c56(0xbe),
        0x27: _0x187c56(0x129),
        0x28: _0x187c56(0x1cd),
        0x29: '&#2790;',
        0x2a: '&#447;',
        0x2b: _0x187c56(0x251),
        0x2c: '&#1360;',
        0x2d: _0x187c56(0x2b6),
        0x2e: _0x187c56(0xe7),
        0x2f: '&upsilon;',
        0x30: _0x187c56(0x3e5),
        0x31: _0x187c56(0xc),
        0x32: '&#2794;',
        0x33: '&#1506;',
        0x34: _0x187c56(0x4d5),
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
        0x1: _0x187c56(0x2ab),
        0x2: _0x187c56(0x407),
        0x3: 'c',
        0x4: _0x187c56(0x473),
        0x5: _0x187c56(0x31a),
        0x6: 'f',
        0x7: 'g',
        0x8: _0x187c56(0x27e),
        0x9: _0x187c56(0x310),
        0xa: 'j',
        0xb: _0x187c56(0x1b0),
        0xc: '&#1075;',
        0xd: _0x187c56(0x41b),
        0xe: _0x187c56(0x2ec),
        0xf: _0x187c56(0x89),
        0x10: 'p',
        0x11: '&#1092;',
        0x12: '&#1103;',
        0x13: '$',
        0x14: _0x187c56(0x1c6),
        0x15: _0x187c56(0x4eb),
        0x16: _0x187c56(0x6e),
        0x17: _0x187c56(0x1d6),
        0x18: _0x187c56(0x32f),
        0x19: _0x187c56(0x3a2),
        0x1a: _0x187c56(0x42d),
        0x1b: '&#1040;',
        0x1c: _0x187c56(0x248),
        0x1d: 'C',
        0x1e: _0x187c56(0x9),
        0x1f: _0x187c56(0x449),
        0x20: 'F',
        0x21: 'G',
        0x22: 'H',
        0x23: _0x187c56(0x4f8),
        0x24: 'J',
        0x25: _0x187c56(0x30),
        0x26: _0x187c56(0x373),
        0x27: _0x187c56(0x387),
        0x28: _0x187c56(0x3ce),
        0x29: _0x187c56(0x287),
        0x2a: 'P',
        0x2b: '&#1060;',
        0x2c: _0x187c56(0x314),
        0x2d: '$',
        0x2e: 'T',
        0x2f: _0x187c56(0x1f1),
        0x30: '&#1140;',
        0x31: _0x187c56(0x3c6),
        0x32: _0x187c56(0x28b),
        0x33: _0x187c56(0x347),
        0x34: _0x187c56(0x365),
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
        0x1: _0x187c56(0xd4),
        0x2: _0x187c56(0x234),
        0x3: _0x187c56(0x331),
        0x4: _0x187c56(0x21a),
        0x5: _0x187c56(0x58),
        0x6: _0x187c56(0x17),
        0x7: _0x187c56(0x26f),
        0x8: 'h&#830;',
        0x9: _0x187c56(0xaf),
        0xa: _0x187c56(0x2dd),
        0xb: 'k&#830;',
        0xc: _0x187c56(0x235),
        0xd: _0x187c56(0x485),
        0xe: 'n&#830;',
        0xf: _0x187c56(0x43a),
        0x10: _0x187c56(0x1b8),
        0x11: _0x187c56(0x2d5),
        0x12: 'r&#830;',
        0x13: 's&#830;',
        0x14: _0x187c56(0x45c),
        0x15: _0x187c56(0x4b5),
        0x16: _0x187c56(0x452),
        0x17: 'w&#830;',
        0x18: _0x187c56(0x0),
        0x19: _0x187c56(0x4dd),
        0x1a: _0x187c56(0xe8),
        0x1b: 'A&#830;',
        0x1c: _0x187c56(0x1ba),
        0x1d: 'C&#830;',
        0x1e: _0x187c56(0x491),
        0x1f: _0x187c56(0x1dd),
        0x20: _0x187c56(0x14b),
        0x21: _0x187c56(0x2a9),
        0x22: _0x187c56(0x4d6),
        0x23: _0x187c56(0x4aa),
        0x24: 'J&#830;',
        0x25: _0x187c56(0x291),
        0x26: _0x187c56(0x1ee),
        0x27: _0x187c56(0x3dd),
        0x28: _0x187c56(0x1f9),
        0x29: _0x187c56(0x2f3),
        0x2a: _0x187c56(0x52b),
        0x2b: _0x187c56(0xfb),
        0x2c: _0x187c56(0x521),
        0x2d: _0x187c56(0x513),
        0x2e: _0x187c56(0x305),
        0x2f: _0x187c56(0x4b),
        0x30: _0x187c56(0x72),
        0x31: _0x187c56(0x4b2),
        0x32: _0x187c56(0x49f),
        0x33: 'Y&#830;',
        0x34: 'Z&#830;',
        0x35: '1&#830;',
        0x36: _0x187c56(0x3a4),
        0x37: _0x187c56(0x312),
        0x38: _0x187c56(0x7f),
        0x39: _0x187c56(0x472),
        0x3a: _0x187c56(0x506),
        0x3b: _0x187c56(0x13),
        0x3c: '8&#830;',
        0x3d: _0x187c56(0xf2),
        0x3e: _0x187c56(0x38e)
    },
    's22': {
        0x1: _0x187c56(0x3fd),
        0x2: _0x187c56(0x529),
        0x3: _0x187c56(0x4ab),
        0x4: _0x187c56(0x3cd),
        0x5: _0x187c56(0x43f),
        0x6: 'f&#838;',
        0x7: _0x187c56(0x1cf),
        0x8: _0x187c56(0x51f),
        0x9: 'i&#838;',
        0xa: 'j&#838;',
        0xb: _0x187c56(0x25e),
        0xc: 'l&#838;',
        0xd: _0x187c56(0x46),
        0xe: 'n&#838;',
        0xf: _0x187c56(0x113),
        0x10: _0x187c56(0x174),
        0x11: _0x187c56(0x86),
        0x12: _0x187c56(0x428),
        0x13: 's&#838;',
        0x14: _0x187c56(0x328),
        0x15: _0x187c56(0x46c),
        0x16: _0x187c56(0x13d),
        0x17: 'w&#838;',
        0x18: _0x187c56(0xa0),
        0x19: _0x187c56(0x224),
        0x1a: _0x187c56(0x200),
        0x1b: _0x187c56(0x334),
        0x1c: _0x187c56(0xa2),
        0x1d: _0x187c56(0x285),
        0x1e: 'D&#838;',
        0x1f: _0x187c56(0x165),
        0x20: 'F&#838;',
        0x21: _0x187c56(0x3d),
        0x22: _0x187c56(0x2bc),
        0x23: 'I&#838;',
        0x24: _0x187c56(0x217),
        0x25: 'K&#838;',
        0x26: 'L&#838;',
        0x27: 'M&#838;',
        0x28: 'N&#838;',
        0x29: 'O&#838;',
        0x2a: _0x187c56(0x1ae),
        0x2b: _0x187c56(0x13c),
        0x2c: 'R&#838;',
        0x2d: _0x187c56(0x389),
        0x2e: _0x187c56(0x388),
        0x2f: 'U&#838;',
        0x30: _0x187c56(0x400),
        0x31: 'W&#838;',
        0x32: _0x187c56(0xcd),
        0x33: 'Y&#838;',
        0x34: 'Z&#838;',
        0x35: _0x187c56(0x1fd),
        0x36: _0x187c56(0x48a),
        0x37: '3&#838;',
        0x38: _0x187c56(0x1d5),
        0x39: _0x187c56(0x2a5),
        0x3a: _0x187c56(0x20),
        0x3b: _0x187c56(0x319),
        0x3c: '8&#838;',
        0x3d: _0x187c56(0x51b),
        0x3e: _0x187c56(0x459)
    },
    's23': {
        0x1: _0x187c56(0x3fb),
        0x2: 'b&#826;',
        0x3: _0x187c56(0x120),
        0x4: 'd&#826;',
        0x5: _0x187c56(0x528),
        0x6: 'f&#826;',
        0x7: 'g&#826;',
        0x8: 'h&#826;',
        0x9: _0x187c56(0x18e),
        0xa: _0x187c56(0x1ca),
        0xb: _0x187c56(0x1d4),
        0xc: _0x187c56(0x105),
        0xd: _0x187c56(0x92),
        0xe: _0x187c56(0x1ce),
        0xf: _0x187c56(0x3d0),
        0x10: _0x187c56(0x17f),
        0x11: _0x187c56(0x18c),
        0x12: _0x187c56(0xe),
        0x13: _0x187c56(0x39),
        0x14: _0x187c56(0x351),
        0x15: _0x187c56(0x39a),
        0x16: _0x187c56(0x36a),
        0x17: _0x187c56(0x104),
        0x18: 'x&#826;',
        0x19: 'y&#826;',
        0x1a: _0x187c56(0x356),
        0x1b: _0x187c56(0x35a),
        0x1c: _0x187c56(0x3c7),
        0x1d: _0x187c56(0x463),
        0x1e: _0x187c56(0x10e),
        0x1f: _0x187c56(0x375),
        0x20: _0x187c56(0x430),
        0x21: _0x187c56(0x1b2),
        0x22: _0x187c56(0x3f9),
        0x23: 'I&#826;',
        0x24: _0x187c56(0x3e7),
        0x25: _0x187c56(0x2ea),
        0x26: _0x187c56(0x186),
        0x27: _0x187c56(0x3f6),
        0x28: _0x187c56(0xb2),
        0x29: _0x187c56(0x42a),
        0x2a: _0x187c56(0xce),
        0x2b: _0x187c56(0x283),
        0x2c: 'R&#826;',
        0x2d: _0x187c56(0x16e),
        0x2e: _0x187c56(0x50b),
        0x2f: _0x187c56(0x75),
        0x30: _0x187c56(0x259),
        0x31: _0x187c56(0x23e),
        0x32: 'X&#826;',
        0x33: _0x187c56(0x1aa),
        0x34: _0x187c56(0x471),
        0x35: _0x187c56(0x4c6),
        0x36: '2&#826;',
        0x37: _0x187c56(0x3de),
        0x38: '4&#826;',
        0x39: '5&#826;',
        0x3a: _0x187c56(0x330),
        0x3b: _0x187c56(0x4b3),
        0x3c: _0x187c56(0x367),
        0x3d: _0x187c56(0x2c),
        0x3e: _0x187c56(0xb7)
    },
    's24': {
        0x1: _0x187c56(0x293),
        0x2: _0x187c56(0x1b7),
        0x3: _0x187c56(0xfe),
        0x4: _0x187c56(0x149),
        0x5: _0x187c56(0x30b),
        0x6: _0x187c56(0x2b1),
        0x7: _0x187c56(0x353),
        0x8: 'h&#857;',
        0x9: _0x187c56(0x7a),
        0xa: _0x187c56(0x1a4),
        0xb: _0x187c56(0x35c),
        0xc: _0x187c56(0x520),
        0xd: 'm&#857;',
        0xe: _0x187c56(0x2b),
        0xf: _0x187c56(0x8e),
        0x10: 'p&#857;',
        0x11: _0x187c56(0x1a8),
        0x12: _0x187c56(0x514),
        0x13: _0x187c56(0x1c5),
        0x14: _0x187c56(0x155),
        0x15: _0x187c56(0x490),
        0x16: _0x187c56(0x4cd),
        0x17: _0x187c56(0x290),
        0x18: 'x&#857;',
        0x19: _0x187c56(0x98),
        0x1a: _0x187c56(0x94),
        0x1b: _0x187c56(0x15a),
        0x1c: _0x187c56(0x154),
        0x1d: _0x187c56(0x7b),
        0x1e: _0x187c56(0x18f),
        0x1f: _0x187c56(0x216),
        0x20: _0x187c56(0x46f),
        0x21: _0x187c56(0x3c1),
        0x22: 'H&#857;',
        0x23: _0x187c56(0x15d),
        0x24: 'J&#857;',
        0x25: 'K&#857;',
        0x26: _0x187c56(0x2bf),
        0x27: _0x187c56(0x31d),
        0x28: _0x187c56(0x107),
        0x29: 'O&#857;',
        0x2a: _0x187c56(0x364),
        0x2b: _0x187c56(0xf4),
        0x2c: _0x187c56(0x1dc),
        0x2d: 'S&#857;',
        0x2e: _0x187c56(0x42c),
        0x2f: _0x187c56(0x468),
        0x30: _0x187c56(0xc4),
        0x31: _0x187c56(0x22f),
        0x32: _0x187c56(0x3a0),
        0x33: _0x187c56(0x17b),
        0x34: _0x187c56(0x481),
        0x35: '1&#857;',
        0x36: _0x187c56(0x15),
        0x37: '3&#857;',
        0x38: _0x187c56(0x14a),
        0x39: _0x187c56(0x510),
        0x3a: _0x187c56(0x2a2),
        0x3b: _0x187c56(0x123),
        0x3c: '8&#857;',
        0x3d: '9&#857;',
        0x3e: _0x187c56(0xbd)
    },
    's25': {
        0x1: _0x187c56(0x2d2),
        0x2: _0x187c56(0x409),
        0x3: _0x187c56(0x3b8),
        0x4: _0x187c56(0xc2),
        0x5: _0x187c56(0x127),
        0x6: _0x187c56(0x116),
        0x7: _0x187c56(0x336),
        0x8: _0x187c56(0x223),
        0x9: _0x187c56(0x280),
        0xa: _0x187c56(0x23d),
        0xb: _0x187c56(0x65),
        0xc: _0x187c56(0x4ae),
        0xd: _0x187c56(0x3d4),
        0xe: _0x187c56(0x1fb),
        0xf: _0x187c56(0x4c2),
        0x10: _0x187c56(0x288),
        0x11: _0x187c56(0x1d7),
        0x12: _0x187c56(0x4bf),
        0x13: _0x187c56(0x18b),
        0x14: _0x187c56(0x12b),
        0x15: _0x187c56(0x142),
        0x16: _0x187c56(0x2d9),
        0x17: _0x187c56(0x74),
        0x18: _0x187c56(0x492),
        0x19: _0x187c56(0x433),
        0x1a: 'z&#799;',
        0x1b: _0x187c56(0x25),
        0x1c: 'B&#799;',
        0x1d: _0x187c56(0x145),
        0x1e: _0x187c56(0x1bf),
        0x1f: 'E&#799;',
        0x20: 'F&#799;',
        0x21: _0x187c56(0x3b),
        0x22: 'H&#799;',
        0x23: _0x187c56(0x511),
        0x24: _0x187c56(0x26a),
        0x25: 'K&#799;',
        0x26: _0x187c56(0x498),
        0x27: _0x187c56(0x14d),
        0x28: _0x187c56(0x394),
        0x29: _0x187c56(0x2a6),
        0x2a: _0x187c56(0x84),
        0x2b: _0x187c56(0x3f0),
        0x2c: _0x187c56(0x4a5),
        0x2d: _0x187c56(0x369),
        0x2e: _0x187c56(0x133),
        0x2f: _0x187c56(0x1db),
        0x30: _0x187c56(0x4f9),
        0x31: _0x187c56(0x1d),
        0x32: 'X&#799;',
        0x33: 'Y&#799;',
        0x34: _0x187c56(0x349),
        0x35: _0x187c56(0x51c),
        0x36: _0x187c56(0x2eb),
        0x37: _0x187c56(0x1c1),
        0x38: _0x187c56(0x188),
        0x39: _0x187c56(0x4ee),
        0x3a: _0x187c56(0x1c4),
        0x3b: '7&#799;',
        0x3c: _0x187c56(0x320),
        0x3d: _0x187c56(0x2ef),
        0x3e: _0x187c56(0x2d3)
    },
    's26': {
        0x1: _0x187c56(0x392),
        0x2: _0x187c56(0x1bb),
        0x3: _0x187c56(0x390),
        0x4: _0x187c56(0x2d0),
        0x5: _0x187c56(0x8d),
        0x6: _0x187c56(0x61),
        0x7: _0x187c56(0x21b),
        0x8: _0x187c56(0x1d1),
        0x9: 'i&#846;',
        0xa: _0x187c56(0x397),
        0xb: _0x187c56(0x379),
        0xc: _0x187c56(0xd0),
        0xd: _0x187c56(0x399),
        0xe: 'n&#846;',
        0xf: 'o&#846;',
        0x10: _0x187c56(0x4be),
        0x11: _0x187c56(0x40f),
        0x12: 'r&#846;',
        0x13: _0x187c56(0x215),
        0x14: 't&#846;',
        0x15: _0x187c56(0x3c8),
        0x16: _0x187c56(0x39d),
        0x17: _0x187c56(0x60),
        0x18: _0x187c56(0x1ad),
        0x19: 'y&#846;',
        0x1a: _0x187c56(0x4e1),
        0x1b: _0x187c56(0x3a9),
        0x1c: _0x187c56(0x247),
        0x1d: _0x187c56(0x26d),
        0x1e: _0x187c56(0xda),
        0x1f: _0x187c56(0x6),
        0x20: _0x187c56(0x2ac),
        0x21: _0x187c56(0x38a),
        0x22: 'H&#846;',
        0x23: _0x187c56(0x333),
        0x24: _0x187c56(0x3df),
        0x25: _0x187c56(0x435),
        0x26: 'L&#846;',
        0x27: _0x187c56(0x2c1),
        0x28: _0x187c56(0xca),
        0x29: 'O&#846;',
        0x2a: 'P&#846;',
        0x2b: _0x187c56(0x3fc),
        0x2c: _0x187c56(0x345),
        0x2d: _0x187c56(0x2da),
        0x2e: _0x187c56(0x50c),
        0x2f: _0x187c56(0x93),
        0x30: 'V&#846;',
        0x31: _0x187c56(0x3e3),
        0x32: _0x187c56(0xb),
        0x33: _0x187c56(0x410),
        0x34: _0x187c56(0x1f7),
        0x35: _0x187c56(0x426),
        0x36: '2&#846;',
        0x37: '3&#846;',
        0x38: _0x187c56(0x1c8),
        0x39: _0x187c56(0x516),
        0x3a: _0x187c56(0xb5),
        0x3b: _0x187c56(0x268),
        0x3c: _0x187c56(0x10a),
        0x3d: _0x187c56(0x3c),
        0x3e: '0&#846;'
    },
    's27': {
        0x1: _0x187c56(0x30c),
        0x2: _0x187c56(0x18a),
        0x3: _0x187c56(0x2b5),
        0x4: _0x187c56(0x3f),
        0x5: _0x187c56(0x462),
        0x6: _0x187c56(0x271),
        0x7: _0x187c56(0x125),
        0x8: _0x187c56(0x199),
        0x9: 'i&#829;&#851;',
        0xa: 'j&#829;&#851;',
        0xb: 'k&#829;&#851;',
        0xc: 'l&#829;&#851;',
        0xd: _0x187c56(0x41f),
        0xe: 'n&#829;&#851;',
        0xf: _0x187c56(0x45f),
        0x10: _0x187c56(0x24b),
        0x11: _0x187c56(0x163),
        0x12: _0x187c56(0xec),
        0x13: _0x187c56(0x4a4),
        0x14: _0x187c56(0xd),
        0x15: _0x187c56(0x3bb),
        0x16: _0x187c56(0x14),
        0x17: _0x187c56(0x91),
        0x18: 'x&#829;&#851;',
        0x19: _0x187c56(0x35e),
        0x1a: _0x187c56(0x13f),
        0x1b: 'A&#829;&#851;',
        0x1c: _0x187c56(0x525),
        0x1d: _0x187c56(0x1c3),
        0x1e: _0x187c56(0x2d),
        0x1f: _0x187c56(0x70),
        0x20: _0x187c56(0x3b2),
        0x21: _0x187c56(0x51d),
        0x22: _0x187c56(0x49),
        0x23: 'I&#829;&#851;',
        0x24: 'J&#829;&#851;',
        0x25: _0x187c56(0x437),
        0x26: 'L&#829;&#851;',
        0x27: _0x187c56(0x40c),
        0x28: _0x187c56(0x14e),
        0x29: 'O&#829;&#851;',
        0x2a: _0x187c56(0x185),
        0x2b: _0x187c56(0xef),
        0x2c: _0x187c56(0x159),
        0x2d: _0x187c56(0x241),
        0x2e: _0x187c56(0x300),
        0x2f: _0x187c56(0x450),
        0x30: 'V&#829;&#851;',
        0x31: _0x187c56(0x303),
        0x32: _0x187c56(0x252),
        0x33: 'Y&#829;&#851;',
        0x34: 'Z&#829;&#851;',
        0x35: _0x187c56(0x307),
        0x36: '2&#829;&#851;',
        0x37: _0x187c56(0x119),
        0x38: _0x187c56(0x1e4),
        0x39: _0x187c56(0x324),
        0x3a: _0x187c56(0x1a7),
        0x3b: _0x187c56(0x173),
        0x3c: '8&#829;&#851;',
        0x3d: '9&#829;&#851;',
        0x3e: _0x187c56(0x50)
    },
    's29': {
        0x1: '&#120458;&#823;',
        0x2: '&#120459;&#823;',
        0x3: '&#120460;&#823;',
        0x4: _0x187c56(0x4fc),
        0x5: _0x187c56(0x43e),
        0x6: _0x187c56(0xeb),
        0x7: '&#120464;&#823;',
        0x8: _0x187c56(0x4a1),
        0x9: '&#120466;&#823;',
        0xa: '&#120467;&#823;',
        0xb: _0x187c56(0x1a1),
        0xc: _0x187c56(0x96),
        0xd: _0x187c56(0x151),
        0xe: '&#120471;&#823;',
        0xf: _0x187c56(0x2f9),
        0x10: _0x187c56(0xe3),
        0x11: _0x187c56(0x13b),
        0x12: _0x187c56(0x47d),
        0x13: '&#120476;&#823;',
        0x14: '&#120477;&#823;',
        0x15: _0x187c56(0x162),
        0x16: _0x187c56(0x132),
        0x17: _0x187c56(0x179),
        0x18: _0x187c56(0x1cb),
        0x19: _0x187c56(0x3ae),
        0x1a: '&#120483;&#823;',
        0x1b: '&#120432;&#823;',
        0x1c: '&#120433;&#823;',
        0x1d: '&#120434;&#823;',
        0x1e: _0x187c56(0x23a),
        0x1f: _0x187c56(0x294),
        0x20: _0x187c56(0x22d),
        0x21: _0x187c56(0x2aa),
        0x22: _0x187c56(0x1f8),
        0x23: '&#120440;&#823;',
        0x24: _0x187c56(0x45a),
        0x25: _0x187c56(0x5),
        0x26: _0x187c56(0x3f4),
        0x27: _0x187c56(0x15b),
        0x28: _0x187c56(0x1e5),
        0x29: _0x187c56(0x298),
        0x2a: _0x187c56(0x4e7),
        0x2b: _0x187c56(0x122),
        0x2c: _0x187c56(0x34c),
        0x2d: '&#120450;&#823;',
        0x2e: '&#120451;&#823;',
        0x2f: '&#120452;&#823;',
        0x30: _0x187c56(0x2e5),
        0x31: _0x187c56(0x396),
        0x32: _0x187c56(0x34f),
        0x33: _0x187c56(0x4ba),
        0x34: _0x187c56(0x329),
        0x35: '&#120823;&#823;',
        0x36: _0x187c56(0x1d2),
        0x37: _0x187c56(0x66),
        0x38: '&#120826;&#823;',
        0x39: _0x187c56(0x41a),
        0x3a: _0x187c56(0x301),
        0x3b: _0x187c56(0x50e),
        0x3c: '&#120830;&#823;',
        0x3d: _0x187c56(0x1bc),
        0x3e: _0x187c56(0x296)
    },
    's30': {
        0x1: _0x187c56(0x97),
        0x2: _0x187c56(0x1ac),
        0x3: 'c&#866;',
        0x4: 'd&#866;',
        0x5: 'e&#866;',
        0x6: _0x187c56(0x3d8),
        0x7: _0x187c56(0x103),
        0x8: _0x187c56(0xea),
        0x9: _0x187c56(0xc3),
        0xa: _0x187c56(0x31),
        0xb: _0x187c56(0x4e3),
        0xc: _0x187c56(0x12e),
        0xd: 'm&#866;',
        0xe: 'n&#866;',
        0xf: _0x187c56(0x499),
        0x10: _0x187c56(0x1),
        0x11: _0x187c56(0x254),
        0x12: _0x187c56(0x197),
        0x13: 's&#866;',
        0x14: _0x187c56(0x193),
        0x15: _0x187c56(0x507),
        0x16: 'v&#866;',
        0x17: 'w&#866;',
        0x18: _0x187c56(0x253),
        0x19: _0x187c56(0x1f5),
        0x1a: _0x187c56(0x1a2),
        0x1b: _0x187c56(0x161),
        0x1c: 'B&#866;',
        0x1d: _0x187c56(0x8),
        0x1e: _0x187c56(0x2f0),
        0x1f: _0x187c56(0x28a),
        0x20: _0x187c56(0x41),
        0x21: _0x187c56(0x95),
        0x22: _0x187c56(0xd7),
        0x23: _0x187c56(0x4f4),
        0x24: _0x187c56(0x9e),
        0x25: _0x187c56(0x279),
        0x26: _0x187c56(0x2c2),
        0x27: _0x187c56(0x315),
        0x28: _0x187c56(0x192),
        0x29: _0x187c56(0xe9),
        0x2a: _0x187c56(0x286),
        0x2b: _0x187c56(0xc0),
        0x2c: 'R&#866;',
        0x2d: _0x187c56(0x23),
        0x2e: _0x187c56(0x1bd),
        0x2f: _0x187c56(0x1ea),
        0x30: _0x187c56(0x37b),
        0x31: _0x187c56(0x2fb),
        0x32: _0x187c56(0x4c1),
        0x33: _0x187c56(0x2c8),
        0x34: _0x187c56(0x37),
        0x35: '1&#866;',
        0x36: _0x187c56(0x4ac),
        0x37: '3&#866;',
        0x38: _0x187c56(0x228),
        0x39: _0x187c56(0x30e),
        0x3a: _0x187c56(0x29),
        0x3b: _0x187c56(0x355),
        0x3c: _0x187c56(0x4de),
        0x3d: _0x187c56(0x238),
        0x3e: '0&#866;'
    },
    's31': {
        0x1: _0x187c56(0xee),
        0x2: _0x187c56(0xf0),
        0x3: _0x187c56(0x3eb),
        0x4: _0x187c56(0x22a),
        0x5: 'e&#828;',
        0x6: _0x187c56(0x313),
        0x7: _0x187c56(0x115),
        0x8: 'h&#828;',
        0x9: 'i&#828;',
        0xa: _0x187c56(0x4f2),
        0xb: _0x187c56(0xfa),
        0xc: _0x187c56(0x2d8),
        0xd: _0x187c56(0x42f),
        0xe: 'n&#828;',
        0xf: 'o&#828;',
        0x10: 'p&#828;',
        0x11: _0x187c56(0x8a),
        0x12: 'r&#828;',
        0x13: _0x187c56(0x1b6),
        0x14: _0x187c56(0x71),
        0x15: _0x187c56(0xd8),
        0x16: 'v&#828;',
        0x17: _0x187c56(0x31b),
        0x18: _0x187c56(0x504),
        0x19: _0x187c56(0x526),
        0x1a: _0x187c56(0xde),
        0x1b: _0x187c56(0x357),
        0x1c: 'B&#828;',
        0x1d: _0x187c56(0x354),
        0x1e: _0x187c56(0x220),
        0x1f: _0x187c56(0x458),
        0x20: _0x187c56(0x503),
        0x21: _0x187c56(0x469),
        0x22: _0x187c56(0xe5),
        0x23: _0x187c56(0x13e),
        0x24: 'J&#828;',
        0x25: _0x187c56(0x12f),
        0x26: _0x187c56(0x32d),
        0x27: _0x187c56(0xd1),
        0x28: _0x187c56(0x29b),
        0x29: 'O&#828;',
        0x2a: _0x187c56(0xbf),
        0x2b: 'Q&#828;',
        0x2c: _0x187c56(0x44a),
        0x2d: _0x187c56(0xd2),
        0x2e: 'T&#828;',
        0x2f: _0x187c56(0x447),
        0x30: _0x187c56(0x4d3),
        0x31: _0x187c56(0x7),
        0x32: _0x187c56(0x156),
        0x33: _0x187c56(0x40b),
        0x34: _0x187c56(0x2cf),
        0x35: _0x187c56(0x11),
        0x36: '2&#828;',
        0x37: _0x187c56(0x47f),
        0x38: _0x187c56(0x203),
        0x39: _0x187c56(0x436),
        0x3a: _0x187c56(0x264),
        0x3b: _0x187c56(0x4d4),
        0x3c: _0x187c56(0x7c),
        0x3d: _0x187c56(0x261),
        0x3e: '0&#828;'
    }
};

function Change(_0x5f2985, _0x1b2932) {
    var _0x4d6ec7 = _0x187c56,
        _0x1942ac = '',
        _0x5f2985 = _0x5f2985;
    if (_0x5f2985[_0x4d6ec7(0x5f)] == 0x0) return;
    for (i = 0x0; i < _0x5f2985[_0x4d6ec7(0x5f)]; i++) {
        var _0x455ae1 = _0x5f2985['charAt'](i),
            _0x32f691 = normal['indexOf'](_0x455ae1) + 0x1;
        if (_0x455ae1 == '\x20') _0x1942ac += '\x20';
        else !_0x32f691 ? _0x1942ac += _0x455ae1 : _0x1942ac += newtext[_0x1b2932][_0x32f691];
    }
    return _0x1942ac;
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
    var _0x39ba67 = _0x187c56;
    this['tools'] = {
        'flip': {
            'init': function() {
                var _0x1aca4c = _0x2856;
                for (i in this[_0x1aca4c(0x21e)]) this[_0x1aca4c(0x21e)][this[_0x1aca4c(0x21e)][i]] = i;
            },
            'encode': function(_0x4d695b) {
                var _0x14a186 = _0x2856;
                for (var _0x551b95, _0x540f89 = [], _0x4318cd = 0x0, _0x555f7a = _0x4d695b[_0x14a186(0x5f)]; _0x555f7a > _0x4318cd; _0x4318cd++) _0x551b95 = _0x4d695b[_0x14a186(0x4af)](_0x4318cd), _0x4318cd > 0x0 && ('̤' == _0x551b95 || '̗' == _0x551b95 || '̖' == _0x551b95 || '̮' == _0x551b95) ? (_0x551b95 = this[_0x14a186(0x21e)][_0x4d695b[_0x14a186(0x4af)](_0x4318cd - 0x1) + _0x551b95], _0x540f89[_0x14a186(0x46b)]()) : (_0x551b95 = this[_0x14a186(0x21e)][_0x551b95], 'undefined' == typeof _0x551b95 && (_0x551b95 = _0x4d695b[_0x14a186(0x4af)](_0x4318cd))), _0x540f89[_0x14a186(0x302)](_0x551b95);
                return _0x540f89['reverse']()['join']('');
            },
            'decode': function(_0x73235c) {
                var _0x292976 = _0x2856;
                for (var _0x2d5f70, _0x267d14 = [], _0x4a5c3b = 0x0, _0xeae8fc = _0x73235c[_0x292976(0x5f)]; _0xeae8fc > _0x4a5c3b; _0x4a5c3b++) _0x2d5f70 = _0x73235c[_0x292976(0x4af)](_0x4a5c3b), _0x4a5c3b > 0x0 && ('̤' == _0x2d5f70 || '̗' == _0x2d5f70 || '̖' == _0x2d5f70 || '̮' == _0x2d5f70) ? (_0x2d5f70 = this[_0x292976(0x21e)][_0x73235c['charAt'](_0x4a5c3b - 0x1) + _0x2d5f70], _0x267d14[_0x292976(0x46b)]()) : (_0x2d5f70 = this[_0x292976(0x21e)][_0x2d5f70], _0x292976(0x15f) == typeof _0x2d5f70 && (_0x2d5f70 = _0x73235c['charAt'](_0x4a5c3b))), _0x267d14['push'](_0x2d5f70);
                return _0x267d14[_0x292976(0x32b)]()[_0x292976(0x211)]('');
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
                var _0x3a9c5a = _0x2856;
                for (i in this[_0x3a9c5a(0x21e)]) this[_0x3a9c5a(0x21e)][this[_0x3a9c5a(0x21e)][i]] = i;
            },
            'encode': function(_0x563d7a) {
                var _0x451082 = _0x2856;
                for (var _0x1272b7, _0x1a25be = [], _0x4a4554 = [], _0x1dd88c = 0x0, _0x22e5d1 = _0x563d7a[_0x451082(0x5f)]; _0x22e5d1 > _0x1dd88c; _0x1dd88c++) _0x1272b7 = _0x563d7a[_0x451082(0x4af)](_0x1dd88c), _0x1dd88c > 0x0 && ('̈' == _0x1272b7 || '̀' == _0x1272b7 || '́' == _0x1272b7 || '̂' == _0x1272b7) ? (_0x1272b7 = this[_0x451082(0x21e)][_0x563d7a[_0x451082(0x4af)](_0x1dd88c - 0x1) + _0x1272b7], _0x1a25be[_0x451082(0x46b)]()) : (_0x1272b7 = this[_0x451082(0x21e)][_0x1272b7], _0x451082(0x15f) == typeof _0x1272b7 && (_0x1272b7 = _0x563d7a['charAt'](_0x1dd88c))), '\x0a' == _0x1272b7 ? (_0x4a4554[_0x451082(0x302)](_0x1a25be[_0x451082(0x32b)]()[_0x451082(0x211)]('')), _0x1a25be = []) : _0x1a25be['push'](_0x1272b7);
                return _0x4a4554[_0x451082(0x302)](_0x1a25be[_0x451082(0x32b)]()[_0x451082(0x211)]('')), _0x4a4554['join']('\x0a');
            },
            'decode': function(_0x4c3585) {
                var _0xf3c676 = _0x2856;
                for (var _0x374449, _0x5266d9 = [], _0x2a355d = [], _0x57abd6 = 0x0, _0x56e709 = _0x4c3585[_0xf3c676(0x5f)]; _0x56e709 > _0x57abd6; _0x57abd6++) _0x374449 = _0x4c3585[_0xf3c676(0x4af)](_0x57abd6), _0x57abd6 > 0x0 && ('̈' == _0x374449 || '̀' == _0x374449 || '́' == _0x374449 || '̂' == _0x374449) ? (_0x374449 = this[_0xf3c676(0x21e)][_0x4c3585['charAt'](_0x57abd6 - 0x1) + _0x374449], _0x5266d9[_0xf3c676(0x46b)]()) : (_0x374449 = this[_0xf3c676(0x21e)][_0x374449], _0xf3c676(0x15f) == typeof _0x374449 && (_0x374449 = _0x4c3585[_0xf3c676(0x4af)](_0x57abd6))), '\x0a' == _0x374449 ? (_0x2a355d['push'](_0x5266d9['reverse']()['join']('')), _0x5266d9 = []) : _0x5266d9[_0xf3c676(0x302)](_0x374449);
                return _0x2a355d[_0xf3c676(0x302)](_0x5266d9[_0xf3c676(0x32b)]()['join']('')), _0x2a355d[_0xf3c676(0x211)]('\x0a');
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
                var _0xa03803 = _0x2856;
                for (var _0xb30636 = 0x300; 0x315 >= _0xb30636; _0xb30636++) this[_0xa03803(0x3f5)]['push'](String[_0xa03803(0x19d)](_0xb30636));
                for (var _0xb30636 = 0x316; 0x333 >= _0xb30636; _0xb30636++) 0x31a != _0xb30636 && 0x31b != _0xb30636 && this['diacriticsBottom']['push'](String['fromCharCode'](_0xb30636));
                this[_0xa03803(0x3f5)]['push'](String[_0xa03803(0x19d)](0x31a)), this['diacriticsTop'][_0xa03803(0x302)](String['fromCharCode'](0x31b));
                for (var _0xb30636 = 0x334; 0x338 >= _0xb30636; _0xb30636++) this['diacriticsMiddle']['push'](String['fromCharCode'](_0xb30636));
                for (var _0xb30636 = 0x339; 0x33c >= _0xb30636; _0xb30636++) this['diacriticsBottom']['push'](String[_0xa03803(0x19d)](_0xb30636));
                for (var _0xb30636 = 0x33d; 0x344 >= _0xb30636; _0xb30636++) this[_0xa03803(0x3f5)][_0xa03803(0x302)](String['fromCharCode'](_0xb30636));
                this[_0xa03803(0x3f5)][_0xa03803(0x302)](String['fromCharCode'](0x344)), this[_0xa03803(0x20c)]['push'](String[_0xa03803(0x19d)](0x345)), this[_0xa03803(0x3f5)]['push'](String[_0xa03803(0x19d)](0x346)), this[_0xa03803(0x20c)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x347)), this[_0xa03803(0x20c)]['push'](String['fromCharCode'](0x348)), this[_0xa03803(0x20c)][_0xa03803(0x302)](String['fromCharCode'](0x349)), this[_0xa03803(0x3f5)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x34a)), this[_0xa03803(0x3f5)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x34b)), this[_0xa03803(0x3f5)][_0xa03803(0x302)](String['fromCharCode'](0x34c)), this[_0xa03803(0x20c)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x34d)), this['diacriticsBottom'][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x34e)), this[_0xa03803(0x3f5)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x350)), this[_0xa03803(0x3f5)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x351)), this[_0xa03803(0x3f5)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x352)), this[_0xa03803(0x20c)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x353)), this['diacriticsBottom']['push'](String[_0xa03803(0x19d)](0x354)), this[_0xa03803(0x20c)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x355)), this[_0xa03803(0x20c)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x356)), this['diacriticsTop']['push'](String[_0xa03803(0x19d)](0x357)), this[_0xa03803(0x3f5)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x358)), this['diacriticsBottom'][_0xa03803(0x302)](String['fromCharCode'](0x359)), this['diacriticsBottom'][_0xa03803(0x302)](String['fromCharCode'](0x35a)), this['diacriticsTop'][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x35b)), this[_0xa03803(0x20c)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x35c)), this['diacriticsTop'][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x35d)), this['diacriticsTop']['push'](String['fromCharCode'](0x35d)), this[_0xa03803(0x20c)]['push'](String[_0xa03803(0x19d)](0x35f)), this[_0xa03803(0x3f5)][_0xa03803(0x302)](String[_0xa03803(0x19d)](0x360)), this['diacriticsTop'][_0xa03803(0x302)](String['fromCharCode'](0x361));
            },
            'encode': function(_0x1312cd) {
                var _0x56833e = _0x2856,
                    _0x4357b8, _0x79220b = '';
                for (i in _0x1312cd) {
                    if (_0x4357b8 = _0x1312cd[i], this[_0x56833e(0x152)]['middle'] && (_0x4357b8 += this[_0x56833e(0x311)][Math[_0x56833e(0x4bd)](Math[_0x56833e(0xe6)]() * this[_0x56833e(0x311)][_0x56833e(0x5f)])]), this[_0x56833e(0x152)][_0x56833e(0x35d)]) {
                        for (var _0x582a37 = this[_0x56833e(0x3f5)]['length'] - 0x1, _0x11ce7c = 0x0, _0x46c1b2 = this['options'][_0x56833e(0x4b4)] - Math['random']() * (this['options'][_0x56833e(0x1c2)] / 0x64 * this['options'][_0x56833e(0x4b4)]); _0x46c1b2 > _0x11ce7c; _0x11ce7c++) _0x4357b8 += this['diacriticsTop'][Math['floor'](Math['random']() * _0x582a37)];
                    }
                    if (this[_0x56833e(0x152)][_0x56833e(0x4da)]) {
                        for (var _0x4d540a = this[_0x56833e(0x20c)][_0x56833e(0x5f)] - 0x1, _0x11ce7c = 0x0, _0x46c1b2 = this[_0x56833e(0x152)][_0x56833e(0x4b4)] - Math[_0x56833e(0xe6)]() * (this[_0x56833e(0x152)][_0x56833e(0x1c2)] / 0x64 * this[_0x56833e(0x152)][_0x56833e(0x4b4)]); _0x46c1b2 > _0x11ce7c; _0x11ce7c++) _0x4357b8 += this[_0x56833e(0x20c)][Math['floor'](Math[_0x56833e(0xe6)]() * _0x4d540a)];
                    }
                    _0x79220b += _0x4357b8;
                }
                return _0x79220b;
            },
            'decode': function(_0x14b76f) {
                var _0x2cd7d6 = _0x2856,
                    _0x304994, _0x1e270f = '';
                for (i in _0x14b76f) _0x304994 = _0x14b76f[i][_0x2cd7d6(0x466)](0x0), (0x300 > _0x304994 || _0x304994 > 0x361) && (_0x1e270f += _0x14b76f[i]);
                return _0x1e270f;
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
                var _0x3be3c6 = _0x2856;
                for (var _0x5ce9da = 0x31; 0x39 >= _0x5ce9da; _0x5ce9da++) this[_0x3be3c6(0x21e)][String[_0x3be3c6(0x19d)](_0x5ce9da)] = String[_0x3be3c6(0x19d)](_0x5ce9da + 0x242f);
                this[_0x3be3c6(0x21e)][0x0] = '⓪';
                for (var _0x5ce9da = 0x41; 0x5a >= _0x5ce9da; _0x5ce9da++) this[_0x3be3c6(0x21e)][String['fromCharCode'](_0x5ce9da)] = String[_0x3be3c6(0x19d)](_0x5ce9da + 0x2475);
                for (var _0x5ce9da = 0x61; 0x7a >= _0x5ce9da; _0x5ce9da++) this[_0x3be3c6(0x21e)][String['fromCharCode'](_0x5ce9da)] = String['fromCharCode'](_0x5ce9da + 0x246f);
                for (_0x5ce9da in this[_0x3be3c6(0x21e)]) this[_0x3be3c6(0x27a)][this[_0x3be3c6(0x21e)][_0x5ce9da]] = _0x5ce9da;
            },
            'encode': function(_0x41f02e) {
                var _0x478067 = _0x2856,
                    _0x3a1caa, _0x47ee99 = '',
                    _0x2f380d = !0x0;
                for (i in _0x41f02e) _0x3a1caa = this[_0x478067(0x21e)][_0x41f02e[i]], 'undefined' == typeof _0x3a1caa && (_0x41f02e[i][_0x478067(0x466)](0x0) >= 0x21 ? (_0x3a1caa = _0x41f02e[i] + String['fromCharCode'](0x20dd), _0x2f380d || (_0x3a1caa = String['fromCharCode'](0x202f) + String['fromCharCode'](0xa0) + String[_0x478067(0x19d)](0xa0) + String['fromCharCode'](0x202f) + _0x3a1caa)) : _0x3a1caa = _0x41f02e[i]), _0x47ee99 += _0x3a1caa, _0x2f380d = '\x0a' == _0x3a1caa;
                return _0x47ee99;
            },
            'decode': function(_0x5b323b) {
                var _0x149975 = _0x2856,
                    _0x22f575, _0x3a8b45 = '',
                    _0x48dce5 = '';
                for (i in _0x5b323b) _0x22f575 = this[_0x149975(0x27a)][_0x5b323b[i]], _0x3a8b45 += _0x149975(0x15f) == typeof _0x22f575 ? _0x5b323b[i] : _0x22f575;
                for (i in _0x3a8b45) _0x22f575 = _0x3a8b45[i][_0x149975(0x466)](0x0), 0xa0 != _0x22f575 && 0x202f != _0x22f575 && 0x20dd != _0x22f575 && (_0x48dce5 += _0x3a8b45[i]);
                return _0x48dce5;
            },
            'map': {},
            'mapInverse': {}
        },
        'squares': {
            'init': function() {},
            'encode': function(_0x5852a0) {
                var _0x295f39 = _0x2856,
                    _0x28d782, _0x4febe7 = '',
                    _0x3b676f = !0x0;
                for (i in _0x5852a0) _0x5852a0[i][_0x295f39(0x466)](0x0) >= 0x21 ? (_0x28d782 = _0x5852a0[i] + String['fromCharCode'](0x20de), _0x3b676f || (_0x28d782 = String[_0x295f39(0x19d)](0x202f) + String['fromCharCode'](0xa0) + String['fromCharCode'](0xa0) + String[_0x295f39(0x19d)](0x202f) + _0x28d782)) : _0x28d782 = _0x5852a0[i], _0x4febe7 += _0x28d782, _0x3b676f = '\x0a' == _0x28d782;
                return _0x4febe7;
            },
            'decode': function(_0xca0e08) {
                var _0x2d6704 = _0x2856,
                    _0x16c01d, _0x3c319a = '';
                for (i in _0xca0e08) _0x16c01d = _0xca0e08[i][_0x2d6704(0x466)](0x0), 0xa0 != _0x16c01d && 0x202f != _0x16c01d && 0x20de != _0x16c01d && (_0x3c319a += _0xca0e08[i]);
                return _0x3c319a;
            }
        },
        'roundsquares': {
            'init': function() {},
            'encode': function(_0x1cdda1) {
                var _0x8405bd = _0x2856,
                    _0x39f52f, _0x27d213 = '',
                    _0x1b0850 = !0x0;
                for (i in _0x1cdda1) _0x1cdda1[i][_0x8405bd(0x466)](0x0) >= 0x21 ? (_0x39f52f = _0x1cdda1[i] + String[_0x8405bd(0x19d)](0x20e3), _0x1b0850 || (_0x39f52f = String[_0x8405bd(0x19d)](0xa0) + String[_0x8405bd(0x19d)](0xa0) + String[_0x8405bd(0x19d)](0xa0) + _0x39f52f)) : _0x39f52f = _0x1cdda1[i], _0x27d213 += _0x39f52f, _0x1b0850 = '\x0a' == _0x39f52f;
                return _0x27d213;
            },
            'decode': function(_0x226971) {
                var _0x3db852 = _0x2856,
                    _0x12a19f, _0x122755 = '';
                for (i in _0x226971) _0x12a19f = _0x226971[i][_0x3db852(0x466)](0x0), 0xa0 != _0x12a19f && 0x202f != _0x12a19f && 0x20e3 != _0x12a19f && (_0x122755 += _0x226971[i]);
                return _0x122755;
            }
        },
        'bent': {
            'init': function() {
                var _0x3ba377 = _0x2856;
                for (i in this['map']) this[_0x3ba377(0x21e)][this[_0x3ba377(0x21e)][i]] = i;
            },
            'encode': function(_0x5611c0) {
                var _0x2bd389 = _0x2856;
                for (var _0x3b1bb5, _0x584d66 = '', _0x477b0c = 0x0, _0x2bd066 = _0x5611c0[_0x2bd389(0x5f)]; _0x2bd066 > _0x477b0c; _0x477b0c++) _0x3b1bb5 = this[_0x2bd389(0x21e)][_0x5611c0['charAt'](_0x477b0c)], _0x2bd389(0x15f) == typeof _0x3b1bb5 && (_0x3b1bb5 = _0x5611c0[_0x2bd389(0x4af)](_0x477b0c)), _0x584d66 += _0x3b1bb5;
                return _0x584d66;
            },
            'decode': function(_0x371d45) {
                var _0x36775f = _0x2856;
                for (var _0x20518f, _0x47fe84 = '', _0x554dda = 0x0, _0x4c444c = _0x371d45[_0x36775f(0x5f)]; _0x4c444c > _0x554dda; _0x554dda++) _0x20518f = this[_0x36775f(0x21e)][_0x371d45[_0x36775f(0x4af)](_0x554dda)], _0x36775f(0x15f) == typeof _0x20518f && (_0x20518f = _0x371d45[_0x36775f(0x4af)](_0x554dda)), _0x47fe84 += _0x20518f;
                return _0x47fe84;
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
                0x8: _0x39ba67(0x2f),
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
                var _0x3fdb36 = _0x39ba67;
                for (i in this[_0x3fdb36(0x21e)]) this[_0x3fdb36(0x21e)][this['map'][i]] = i;
            },
            'encode': function(_0xa49d38) {
                var _0x453320 = _0x39ba67,
                    _0x1d5b54, _0xd39e52 = '';
                _0xa49d38 = _0xa49d38[_0x453320(0x191)]();
                for (var _0x4a902e = 0x0, _0x5435e4 = _0xa49d38['length']; _0x5435e4 > _0x4a902e; _0x4a902e++) _0x1d5b54 = this[_0x453320(0x21e)][_0xa49d38[_0x453320(0x4af)](_0x4a902e)], _0x453320(0x15f) == typeof _0x1d5b54 && (_0x1d5b54 = _0xa49d38[_0x453320(0x4af)](_0x4a902e)), _0xd39e52 += _0x1d5b54;
                return _0xd39e52;
            },
            'decode': function(_0x35b557) {
                var _0x4f7dc8 = _0x39ba67;
                for (var _0xe44dbe, _0x246d09 = '', _0x3525eb = 0x0, _0xae7a1f = _0x35b557[_0x4f7dc8(0x5f)]; _0xae7a1f > _0x3525eb; _0x3525eb++) _0xe44dbe = this[_0x4f7dc8(0x21e)][_0x35b557[_0x4f7dc8(0x4af)](_0x3525eb)], _0x4f7dc8(0x15f) == typeof _0xe44dbe && (_0xe44dbe = _0x35b557[_0x4f7dc8(0x4af)](_0x3525eb)), _0x246d09 += _0xe44dbe;
                return _0x246d09;
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
    for (i in this[_0x39ba67(0x1e6)]) this[_0x39ba67(0x1e6)][i][_0x39ba67(0x112)]();
    this[_0x39ba67(0x34e)] = function(_0x509ab8) {
        var _0x416d3a = _0x39ba67;
        for (var _0x52486b, _0x4e0264 = '', _0x17b91e = !0x0, _0x5e40f1 = 0x0, _0x2be84b = 0x0, _0x4a134f = 0x0, _0x258470 = _0x509ab8[_0x416d3a(0x5f)]; _0x258470 > _0x4a134f; _0x4a134f++) _0x52486b = _0x509ab8[_0x416d3a(0x466)](_0x4a134f), 0xa == _0x52486b || 0xd == _0x52486b ? (_0x4e0264 += '<br>\x0a', _0x17b91e = !0x0) : 0x20 == _0x52486b ? _0x17b91e ? (_0x4e0264 += '\x20', _0x17b91e = !0x1) : (_0x4e0264 += '\x20', _0x17b91e = !0x0) : (_0x52486b >= 0xd800 && 0xdbff >= _0x52486b ? (_0x5e40f1 = _0x52486b, _0x2be84b = 0x0) : _0x5e40f1 > 0x0 ? (_0x52486b >= 0xdc00 && 0xdfff >= _0x52486b && (_0x2be84b = 0x400 * (_0x5e40f1 - 0xd800) + (_0x52486b - 0xdc00) + 0x10000), _0x5e40f1 = 0x0) : _0x2be84b = _0x52486b, 0x0 != _0x2be84b && (_0x4e0264 += _0x416d3a(0x29f) + _0x2be84b[_0x416d3a(0x49d)](0x10) + ';', _0x17b91e = !0x0));
        return _0x4e0264;
    };
}

function cuteText(_0x1ec4eb) {
    var _0x6615d5 = _0x187c56;
    if (_0x1ec4eb[_0x6615d5(0x431)]() === '') return '';
    qi = -0x1;
    var _0x1bb4d3 = boundingString(Math['floor'](Math[_0x6615d5(0xe6)]() * 0x2) + 0x1);
    return _0x1bb4d3 + _0x6615d5(0x402) + _0x1ec4eb['split'](/([!?.]+)/gi)['map'](cuteSentence)['join']('') + _0x6615d5(0x402) + esrever[_0x6615d5(0x32b)](_0x1bb4d3);
}

function cuteSentence(_0x38c0e4) {
    var _0x535e76 = _0x187c56;
    return _0x38c0e4['split'](/([\s,]+)/gi)[_0x535e76(0x21e)](cuteWord)[_0x535e76(0x211)]('');
}

function cuteWord(_0x53d7d9) {
    var _0x15dadf = _0x187c56;
    if (_0x53d7d9 === '' || /[[!?.\s,]+]/gi [_0x15dadf(0x475)](_0x53d7d9)) return _0x53d7d9;
    return _0x53d7d9 = roundReplace(_0x53d7d9), _0x53d7d9 = punctReplace(_0x53d7d9), _0x53d7d9 = emojiReplace(_0x53d7d9), scriptify(_0x53d7d9);
}
var qi = -0x1,
    qa = ['❝', '❞'];

function quotes() {
    qi++;
    if (qi === 0x2) qi = 0x0;
    return qa[qi];
}

function punctReplace(_0x23fab5) {
    var _0x5ad1e1 = _0x187c56;
    return _0x23fab5['split']('')[_0x5ad1e1(0x21e)](function(_0x53cf29) {
        if (_0x53cf29 === '!') return randomElement(['❣', '❢']);
        else {
            if (_0x53cf29 === '?') return randomElement(['¿', '?']);
            else {
                if (_0x53cf29 === '\x22') return quotes();
                else return _0x53cf29;
            }
        }
    })['join']('');
}

function emojiReplace(_0x5165f3) {
    var _0xee38a3 = _0x187c56;
    return _0x5165f3['replace'](':)', randomElement(emoji[':)']))[_0xee38a3(0x9f)]('(:', randomElement(emoji[':)']))[_0xee38a3(0x9f)]('^^', randomElement(emoji['^^']))[_0xee38a3(0x9f)](':P', randomElement(emoji[':p']))['replace'](':p', randomElement(emoji[':p']))[_0xee38a3(0x9f)](':D', randomElement(emoji[':D']))[_0xee38a3(0x9f)]('<3', randomElement(emoji['<3']))['replace'](_0xee38a3(0x3e0), randomElement(emoji[_0xee38a3(0x3e0)]))[_0xee38a3(0x9f)]('(Y)', randomElement(emoji['(y)']));
}

function roundReplace(_0xe4d513) {
    var _0x3909c9 = _0x187c56;
    return _0xe4d513[_0x3909c9(0x3d3)]('')[_0x3909c9(0x21e)](function(_0x1d5036) {
        var _0x33058d = _0x3909c9;
        return _0x1d5036[_0x33058d(0x187)]() === 'o' || _0x1d5036 === '0' ? randomElement(round) : _0x1d5036;
    })[_0x3909c9(0x211)]('');
}
var emoji = {
        ':)': [_0x187c56(0x382), '(•◡•)', _0x187c56(0x42b), _0x187c56(0x1a), _0x187c56(0x10), _0x187c56(0x2f4), _0x187c56(0x206), '😍', 'ツ', '(✿ヘᴥヘ)', _0x187c56(0x385), _0x187c56(0xa), _0x187c56(0x2ae), _0x187c56(0x3f3), _0x187c56(0x380), '(✿╹◡╹)', '◔◡◔'],
        '^^': [_0x187c56(0x68), _0x187c56(0x4a8), _0x187c56(0x4a), _0x187c56(0x3ec), _0x187c56(0x25f), _0x187c56(0x1b3), _0x187c56(0x5d), _0x187c56(0x31f), _0x187c56(0x446), _0x187c56(0x332), ''],
        ':p': [':Þ', ''],
        ':D': [_0x187c56(0x189), '(✿◕ᗜ◕)━♫.*･｡ﾟ', 'ᕕ(ᐛ)ᕗ'],
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
    flourish = [_0x187c56(0x140), 'ıllıllı\x20', _0x187c56(0x406), _0x187c56(0x403), '•´¯`•.\x20', _0x187c56(0x33c), _0x187c56(0x26c), _0x187c56(0x257), _0x187c56(0x232), _0x187c56(0x3ef), '(¯`·.¸¸.·´¯`·.¸¸.->\x20', '*´¯`*.¸¸.*´¯`*\x20', '(¯`·.¸¸.->\x20°º\x20', '°·.¸.·°¯°·.¸.·°¯°·.¸.->\x20', '•._.••´¯``•.¸¸.•`\x20', '¸„.-•~¹°”ˆ˜¨\x20', _0x187c56(0x50f), _0x187c56(0x136), '•´¯`•»\x20', _0x187c56(0x1a0), _0x187c56(0x416), _0x187c56(0xdb), ',-*\x27^\x27~*-.,_,.-*~\x20', _0x187c56(0x4d8), _0x187c56(0x21c), '¤¸¸.•´¯`•¸¸.•..>>\x20', _0x187c56(0x4c0), _0x187c56(0xdd), _0x187c56(0x470), _0x187c56(0x190), _0x187c56(0x22), _0x187c56(0x4e9), _0x187c56(0x497), _0x187c56(0x237)];

function boundingString(_0x2a78d3) {
    return randomElement([foodString, twinkleString, animalString, flourishString])(_0x2a78d3);
}

function foodString(_0x20b2b9) {
    var _0x675f8c = _0x187c56;
    return new Array(_0x20b2b9 + 0x1)['join']('0')[_0x675f8c(0x3d3)]('')[_0x675f8c(0x21e)](function(_0x4ffb17) {
        return randomElement(food);
    })[_0x675f8c(0x211)](_0x675f8c(0x2e0));
}

function twinkleString(_0x38df80) {
    var _0x441903 = _0x187c56;
    return new Array(_0x38df80 + 0x1)[_0x441903(0x211)]('0')['split']('')[_0x441903(0x21e)](function() {
        return randomElement(twinkles);
    })[_0x441903(0x211)]('');
}

function animalString(_0x217505) {
    var _0x2228a3 = _0x187c56;
    return new Array(_0x217505 + 0x1)[_0x2228a3(0x211)]('0')['split']('')[_0x2228a3(0x21e)](function(_0x55f2df) {
        return randomElement(animals);
    })[_0x2228a3(0x211)](_0x2228a3(0x2e0));
}

function flourishString(_0x4b3ae3) {
    return randomElement(flourish);
}

function scriptify(_0x4c1347) {
    var _0x596990 = _0x187c56,
        _0x5a66c4 = {
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
            'I': '𝐼',
            'J': '𝒥',
            'K': '𝒦',
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
        _0xec54f1 = _0x4c1347[_0x596990(0x3d3)]('');
    for (var _0xa0d645 = 0x0; _0xa0d645 < _0xec54f1[_0x596990(0x5f)]; _0xa0d645++) {
        _0x5a66c4[_0xec54f1[_0xa0d645][_0x596990(0x187)]()] && (_0xec54f1[_0xa0d645] = _0x5a66c4[_0xec54f1[_0xa0d645]]);
    }
    return _0x4c1347 = _0xec54f1[_0x596990(0x211)](''), _0x4c1347;
}

function shuffleArray(_0x546889) {
    var _0x21c58f = _0x187c56,
        _0x3d1f6b = _0x546889[_0x21c58f(0x5f)],
        _0x12cc05, _0xa5aba7;
    while (0x0 !== _0x3d1f6b) {
        _0xa5aba7 = Math['floor'](Math[_0x21c58f(0xe6)]() * _0x3d1f6b), _0x3d1f6b -= 0x1, _0x12cc05 = _0x546889[_0x3d1f6b], _0x546889[_0x3d1f6b] = _0x546889[_0xa5aba7], _0x546889[_0xa5aba7] = _0x12cc05;
    }
    return _0x546889;
}

function randomElement(_0x42837b) {
    var _0x184002 = _0x187c56;
    return _0x42837b[Math['floor'](Math[_0x184002(0xe6)]() * _0x42837b[_0x184002(0x5f)])];
}! function(_0x5cebbd) {
    var _0x571b93 = _0x187c56,
        _0x5bb75e = _0x571b93(0x49c) == typeof exports && exports,
        _0x51db62 = _0x571b93(0x49c) == typeof module && module && module[_0x571b93(0x1ed)] == _0x5bb75e && module,
        _0x32e065 = 'object' == typeof global && global;
    (_0x32e065[_0x571b93(0x44d)] === _0x32e065 || _0x32e065['window'] === _0x32e065) && (_0x5cebbd = _0x32e065);
    var _0x20dc62 = /(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g,
        _0x342274 = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,
        _0x11d051 = function(_0xc02b56) {
            var _0x323d4b = _0x571b93;
            _0xc02b56 = _0xc02b56[_0x323d4b(0x9f)](_0x20dc62, function(_0x430f36, _0x584b40, _0x46e7bd) {
                return _0x11d051(_0x46e7bd) + _0x584b40;
            })[_0x323d4b(0x9f)](_0x342274, _0x323d4b(0x4d));
            for (var _0x4487ec = '', _0x5149da = _0xc02b56[_0x323d4b(0x5f)]; _0x5149da--;) _0x4487ec += _0xc02b56[_0x323d4b(0x4af)](_0x5149da);
            return _0x4487ec;
        },
        _0x34143f = {
            'version': _0x571b93(0x6c),
            'reverse': _0x11d051
        };
    if (_0x571b93(0x55) == typeof define && _0x571b93(0x49c) == typeof define[_0x571b93(0x348)] && define[_0x571b93(0x348)]) define(function() {
        return _0x34143f;
    });
    else {
        if (_0x5bb75e && !_0x5bb75e[_0x571b93(0x289)]) {
            if (_0x51db62) _0x51db62[_0x571b93(0x1ed)] = _0x34143f;
            else {
                for (var _0x195bec in _0x34143f) _0x34143f[_0x571b93(0x41d)](_0x195bec) && (_0x5bb75e[_0x195bec] = _0x34143f[_0x195bec]);
            }
        } else _0x5cebbd['esrever'] = _0x34143f;
    }
}(this);

function fullCrazy(_0x38aa70) {
    if (_0x38aa70['trim']() === '') return '';
    return randomSymbols(0x2) + '\x20\x20' + crazifyText(_0x38aa70) + '\x20\x20' + randomSymbols(0x2);
}

function crazifyText(_0x5de7b3) {
    var _0x57b360 = _0x187c56;
    _0x5de7b3 = _0x5de7b3[_0x57b360(0x3d3)]('');
    for (var _0x5671a4 = 0x0; _0x5671a4 < _0x5de7b3[_0x57b360(0x5f)]; _0x5671a4++) {
        _0x5de7b3[_0x5671a4] = crazifyCharacter(_0x5de7b3[_0x5671a4]);
    }
    return _0x5de7b3[_0x57b360(0x211)]('');
}

function crazifyCharacter(_0x518deb) {
    var _0x224b31 = _0x187c56;
    _0x518deb = _0x518deb[_0x224b31(0x187)]();
    var _0x13e8e4 = {
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
        '>': _0x224b31(0x2e6),
        '[': '【〖〘〚［',
        ']': _0x224b31(0x42),
        '*': _0x224b31(0x346),
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
    return _0x13e8e4[_0x518deb] ? randomElement(_0x13e8e4[_0x518deb]) : _0x518deb;
}

function randomElement(_0x558c29) {
    var _0x57e251 = _0x187c56;
    return _0x558c29[Math['floor'](Math[_0x57e251(0xe6)]() * _0x558c29[_0x57e251(0x5f)])];
}

function randomSymbols(_0x3f4fa6) {
    var _0x5ba170 = _0x187c56,
        _0x44c6f4 = ['🐙', '🐉', '🐊', '🐒', '🐝', '🐜', '🐚', '🐲', '🐳', '🐸', '👑', '👹', '👺', '👤', '💲', '💣', '💙', '💚', '💛', '💜', '💝', '💗', '💘', '💞', '💔', '💥', '🐯', '🐼', '🐻', '🐺', '👌', '🐍', '🐧', '🐟', '🐠', '🐨', '🎯', '🏆', '🎁', '🎀', '🎉', '🎈', '🍮', '🍭', '🍬', '🍫', '🍪', '🍧', '🌷', '🍓', '😺', '😾', '✎', '😎', '😝', '😂', '😈', '😡', '😲', '😳', '🍔', '🍟', '🍩', '🎃', '🎄', '🎅', '🐣', '🐤', '👍', '👊', '👻', '👽', '👮', '💎', '💋', '👣', '💀', '💢', '🔥', '♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '♠', '♡', '♢', '♣', '♤', '♥', '♦', '♧', '♨', '♩', '♪', '♬', '★', '☆', '☺', '☹', '☯', '☮', '☢', '☠', '☟', '☞', '☝', '☜', '✌', '✋', '✊', '⛵', 'ൠ', '✌', 'ඏ'],
        _0x548841 = [];
    for (var _0x4eb1d1 = 0x0; _0x4eb1d1 < _0x3f4fa6; _0x4eb1d1++) _0x548841[_0x5ba170(0x302)](randomElement(_0x44c6f4));
    return _0x548841['join']('');
}

function randInt(_0xe5f171, _0x51ed65) {
    var _0x421e86 = _0x187c56;
    return _0xe5f171 + Math[_0x421e86(0x4bd)](Math['random']() * (_0x51ed65 - _0xe5f171 + 0x1));
}
$(document)[_0x187c56(0xbc)](function() {
    var _0x5153c6 = _0x187c56;
    $(_0x5153c6(0x40))['insertBefore'](_0x5153c6(0x38c)), $(_0x5153c6(0x6d))['on']('input\x20change', function() {
        var _0x296138 = _0x5153c6;
        $('<style>\x20.DiscordFonts\x20p{font-size:' + $(this)[_0x296138(0x5b)]() + _0x296138(0x16))['insertBefore']('body');
    }), _0x3d6e14(default_text), $('.Sk-text')['on'](_0x5153c6(0x153), function(_0x5ee5e5) {
        var _0x1c64c3 = _0x5153c6;
        if ($('#Sk-text')[_0x1c64c3(0x5b)]() < 0x1) _0x3d6e14(default_text);
        else {
            var _0x3abb96 = $(_0x1c64c3(0x2c6))[_0x1c64c3(0x5b)]();
            _0x3d6e14(_0x3abb96);
        }
    });
    var _0x12a563 = window[_0x5153c6(0x34b)]['href'],
        _0x2ea9d5 = _0x12a563[_0x5153c6(0x3d3)](_0x5153c6(0x444));
    urltext = _0x2ea9d5[0x1];
    urltext && (urltext = decodeURIComponent(urltext), $(_0x5153c6(0x2c6))[_0x5153c6(0x5b)](urltext), _0x3d6e14(urltext));

    function _0x3d6e14(_0x46d900) {
        var _0x4b228e = _0x5153c6;
        _0x46d900 = _0x46d900['trim'](), $(_0x4b228e(0x474))[_0x4b228e(0x3e4)](Change(_0x46d900, 's1')), $('.result-s2')[_0x4b228e(0x3e4)](Change(_0x46d900, 's2')), $(_0x4b228e(0x4b9))[_0x4b228e(0x3e4)](Change(_0x46d900, 's3')), $(_0x4b228e(0x80))[_0x4b228e(0x3e4)](Change(_0x46d900, 's4')), $(_0x4b228e(0x229))[_0x4b228e(0x3e4)](Change(_0x46d900, 's5')), $('.result-s6')[_0x4b228e(0x3e4)](Change(_0x46d900, 's6')), $(_0x4b228e(0x39b))[_0x4b228e(0x3e4)](Change(_0x46d900, 's7')), $('.result-s8')[_0x4b228e(0x3e4)](Change(_0x46d900, 's8')), $(_0x4b228e(0x370))[_0x4b228e(0x3e4)](Change(_0x46d900, 's9')), $(_0x4b228e(0x24f))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x1fe))), $(_0x4b228e(0x26e))[_0x4b228e(0x3e4)](Change(_0x46d900, 's11')), $('.result-s12')[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x2db))), $(_0x4b228e(0x306))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x477))), $('.result-s14')[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x1f3))), $('.result-s15')[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x4c5))), $(_0x4b228e(0xed))['html'](Change(_0x46d900, 's16')), $(_0x4b228e(0x4fe))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x36))), $(_0x4b228e(0x3e))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x448))), $(_0x4b228e(0x350))['html'](Change(_0x46d900, 's19')), $('.result-s20')[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x1ab))), $(_0x4b228e(0x37a))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x4f3))), $(_0x4b228e(0x3e8))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0xfc))), $('.result-s23')[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x3e2))), $(_0x4b228e(0x4db))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x150))), $(_0x4b228e(0x495))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x51a))), $(_0x4b228e(0x19c))['html'](Change(_0x46d900, _0x4b228e(0x4f6))), $(_0x4b228e(0x4cb))[_0x4b228e(0x3e4)](Change(_0x46d900, 's27')), $('.result-s29')[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x47e))), $(_0x4b228e(0x2bd))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0x196))), $(_0x4b228e(0x183))[_0x4b228e(0x3e4)](Change(_0x46d900, _0x4b228e(0xd9))), $('.lunitoolsbubbles')[_0x4b228e(0x3e4)](luni[_0x4b228e(0x1e6)]['bubbles']['encode'](_0x46d900)), $('.invertedSquaresCharMap')['html'](applyCharMap(invertedSquaresCharMap, _0x46d900)), $(_0x4b228e(0x5c))[_0x4b228e(0x3e4)](illuminati(_0x46d900)), $('.textgun')[_0x4b228e(0x3e4)](textgun(_0x46d900)), $('.minigame')[_0x4b228e(0x3e4)](minigame(_0x46d900)), $(_0x4b228e(0x414))[_0x4b228e(0x3e4)](pubggame1(_0x46d900)), $('.pubggame2')[_0x4b228e(0x3e4)](pubggame2(_0x46d900)), $('.pubggame3')['html'](pubggame3(_0x46d900)), $('.bricks')[_0x4b228e(0x3e4)](bricks(_0x46d900)), $(_0x4b228e(0x1a9))[_0x4b228e(0x3e4)](bigrus(_0x46d900)), $(_0x4b228e(0x395))[_0x4b228e(0x3e4)](applyCharMap(wideTextCharMap, _0x46d900)), $('.lunitoolstinyencode')[_0x4b228e(0x3e4)](luni['tools'][_0x4b228e(0xc5)]['encode'](_0x46d900)), $(_0x4b228e(0x46e))[_0x4b228e(0x3e4)](luni['tools'][_0x4b228e(0x372)][_0x4b228e(0x2f7)](_0x46d900)), $(_0x4b228e(0x4c9))[_0x4b228e(0x3e4)](applyCharMap(squaresCharMap, _0x46d900)), $(_0x4b228e(0x2))[_0x4b228e(0x3e4)](luni[_0x4b228e(0x1e6)]['mirror'][_0x4b228e(0x2f7)](_0x46d900)), $('.subscriptCharMap')[_0x4b228e(0x3e4)](applyCharMap(subscriptCharMap, _0x46d900)), $(_0x4b228e(0x18d))['html'](applyCharMap(superscriptCharMap, _0x46d900)), $(_0x4b228e(0x4a9))[_0x4b228e(0x3e4)](applyCharMap(bentTextCharMap, _0x46d900)), $(_0x4b228e(0x3bf))[_0x4b228e(0x3e4)](applyCharMap(neonCharMap, _0x46d900)), $(_0x4b228e(0x411))['html'](applyCharMap(futureAlienCharMap, _0x46d900)), $(_0x4b228e(0x148))[_0x4b228e(0x3e4)](strikeThrough(_0x46d900)), $(_0x4b228e(0x249))['html'](tildeStrikeThrough(_0x46d900)), $(_0x4b228e(0x1b4))[_0x4b228e(0x3e4)](slashThrough(_0x46d900)), $(_0x4b228e(0x13a))[_0x4b228e(0x3e4)](underline(_0x46d900)), $(_0x4b228e(0x77))[_0x4b228e(0x3e4)](doubleUnderline(_0x46d900)), $('.lunicreepify')[_0x4b228e(0x3e4)](luni[_0x4b228e(0x1e6)][_0x4b228e(0x19)][_0x4b228e(0x2f7)](_0x46d900)), $('.squiggleCharMap')[_0x4b228e(0x3e4)](applyCharMap(squiggleCharMap, _0x46d900)), $(_0x4b228e(0x37e))[_0x4b228e(0x3e4)](applyCharMap(squiggle2CharMap, _0x46d900)), $(_0x4b228e(0x386))[_0x4b228e(0x3e4)](applyCharMap(squiggle3CharMap, _0x46d900)), $(_0x4b228e(0x3b3))['html'](applyCharMap(squiggle4CharMap, _0x46d900)), $(_0x4b228e(0x4d1))[_0x4b228e(0x3e4)](applyCharMap(squiggle5CharMap, _0x46d900)), $('.squiggle6CharMap')[_0x4b228e(0x3e4)](applyCharMap(squiggle6CharMap, _0x46d900)), $(_0x4b228e(0x21f))['html'](applyCharMap(boldCharMap, _0x46d900)), $('.luniroundsquares')['html'](luni[_0x4b228e(0x1e6)]['roundsquares'][_0x4b228e(0x2f7)](_0x46d900)), $(_0x4b228e(0xc1))[_0x4b228e(0x3e4)](luni[_0x4b228e(0x1e6)][_0x4b228e(0x208)][_0x4b228e(0x2f7)](_0x46d900[_0x4b228e(0x191)]())), $(_0x4b228e(0x4d0))[_0x4b228e(0x3e4)](applyCharMap(oldEnglishCharMap, _0x46d900)), $('.medievalCharMap')[_0x4b228e(0x3e4)](applyCharMap(medievalCharMap, _0x46d900)), $(_0x4b228e(0x12a))[_0x4b228e(0x3e4)](applyCharMap(cursiveCharMap, _0x46d900)), $('.scriptify')[_0x4b228e(0x3e4)](scriptify(_0x46d900)), $(_0x4b228e(0x1e))[_0x4b228e(0x3e4)](applyCharMap(doubleStruckCharMap, _0x46d900)), $(_0x4b228e(0x73))[_0x4b228e(0x3e4)](applyCharMap(italicCharMap, _0x46d900)), $(_0x4b228e(0x2df))[_0x4b228e(0x3e4)](applyCharMap(boldItalicCharMap, _0x46d900)), $(_0x4b228e(0x4fb))['html'](applyCharMap(monospaceCharMap, _0x46d900)), $('.upperAnglesCharMap')[_0x4b228e(0x3e4)](applyCharMap(upperAnglesCharMap, _0x46d900)), $(_0x4b228e(0x40d))[_0x4b228e(0x3e4)](applyCharMap(greekCharMap, _0x46d900)), $(_0x4b228e(0x3d9))[_0x4b228e(0x3e4)](applyCharMap(symbolsCharMap, _0x46d900)), $(_0x4b228e(0x27b))[_0x4b228e(0x3e4)](applyCharMap(currencyCharMap, _0x46d900)), $(_0x4b228e(0x1fa))[_0x4b228e(0x3e4)](applyCharMap(asianStyleCharMap, _0x46d900)), $(_0x4b228e(0x38b))[_0x4b228e(0x3e4)](applyCharMap(asianStyle2CharMap, _0x46d900)), $(_0x4b228e(0x4e))[_0x4b228e(0x3e4)](thickBlockFramed(_0x46d900)), $('.diametricAngleFrame')[_0x4b228e(0x3e4)](diametricAngleFrame(_0x46d900)), $(_0x4b228e(0x427))[_0x4b228e(0x3e4)](wavyJoiner(_0x46d900)), $(_0x4b228e(0xcb))[_0x4b228e(0x3e4)](dottyJoiner(_0x46d900)), $('.kirbyHug')['html'](kirbyHug(_0x46d900)), $(_0x4b228e(0x4bb))[_0x4b228e(0x3e4)](vaporwaveText(_0x46d900)), $(_0x4b228e(0x11f))['html'](vaporwaveText1(_0x46d900)), $('.vaporwaveText2')[_0x4b228e(0x3e4)](vaporwaveText2(_0x46d900)), $(_0x4b228e(0x44c))[_0x4b228e(0x3e4)](littleSparkles(_0x46d900)), $('.weirdBox')[_0x4b228e(0x3e4)](weirdBox(_0x46d900)), $(_0x4b228e(0x47a))['html'](thickBox(_0x46d900)), $(_0x4b228e(0x21))[_0x4b228e(0x3e4)](zigzagJoiner(_0x46d900)), $(_0x4b228e(0x1d8))[_0x4b228e(0x3e4)](hashJoiner(_0x46d900)), $(_0x4b228e(0x2c5))[_0x4b228e(0x3e4)](starJoiner(_0x46d900)), $(_0x4b228e(0x45b))['html'](connectedJoiner(_0x46d900)), $(_0x4b228e(0x39e))['html'](arrowjoin(_0x46d900)), $(_0x4b228e(0x33d))['html'](dotBoxtwo(_0x46d900)), $(_0x4b228e(0x2a7))[_0x4b228e(0x3e4)](dotBox(_0x46d900)), $(_0x4b228e(0x1de))[_0x4b228e(0x3e4)](diametricBox(_0x46d900)), $(_0x4b228e(0x3e6))[_0x4b228e(0x3e4)](arrowBox(_0x46d900)), $(_0x4b228e(0x43b))[_0x4b228e(0x3e4)](curlybrackets(_0x46d900)), $(_0x4b228e(0x3ed))[_0x4b228e(0x3e4)](singlewavyJoiner(_0x46d900)), $(_0x4b228e(0x4f5))[_0x4b228e(0x3e4)](firework(_0x46d900)), $('.stinky')[_0x4b228e(0x3e4)](stinky(_0x46d900)), $(_0x4b228e(0x278))[_0x4b228e(0x3e4)](heartsBetween(_0x46d900)), $(_0x4b228e(0x4e8))['html'](arrowBelow(_0x46d900)), $(_0x4b228e(0x517))['html'](crossAboveBelow(_0x46d900)), $(_0x4b228e(0x3bc))[_0x4b228e(0x3e4)](wingdings(_0x46d900)), $(_0x4b228e(0x3b9))['html'](fullCrazy(_0x46d900)), $(_0x4b228e(0x2a8))[_0x4b228e(0x3e4)](crazyWithFlourishOrSymbols(_0x46d900)), $(_0x4b228e(0x227))['html'](cuteText(_0x46d900)), $(_0x4b228e(0x3c9))['html'](star0(_0x46d900)), $(_0x4b228e(0xcf))[_0x4b228e(0x3e4)](star1(_0x46d900)), $(_0x4b228e(0x48c))[_0x4b228e(0x3e4)](star2(_0x46d900)), $(_0x4b228e(0x38d))[_0x4b228e(0x3e4)](star3(_0x46d900)), $('.star4')[_0x4b228e(0x3e4)](star4(_0x46d900)), $(_0x4b228e(0x27d))[_0x4b228e(0x3e4)](star5(_0x46d900)), $(_0x4b228e(0x30a))[_0x4b228e(0x3e4)](star6(_0x46d900)), $(_0x4b228e(0x21d))[_0x4b228e(0x3e4)](star7(_0x46d900)), $('.star8')[_0x4b228e(0x3e4)](star8(_0x46d900)), $('.star9')[_0x4b228e(0x3e4)](star9(_0x46d900)), $(_0x4b228e(0x7e))[_0x4b228e(0x3e4)](star10(_0x46d900)), $(_0x4b228e(0x4e2))[_0x4b228e(0x3e4)](heart0(_0x46d900)), $('.heart1')[_0x4b228e(0x3e4)](heart1(_0x46d900)), $('.heart2')[_0x4b228e(0x3e4)](heart2(_0x46d900)), $(_0x4b228e(0x267))['html'](heart3(_0x46d900)), $(_0x4b228e(0x108))[_0x4b228e(0x3e4)](heart4(_0x46d900)), $(_0x4b228e(0x1f))['html'](heart5(_0x46d900)), $('.heart6')['html'](heart6(_0x46d900)), $(_0x4b228e(0x2be))[_0x4b228e(0x3e4)](heart7(_0x46d900)), $(_0x4b228e(0x2fa))[_0x4b228e(0x3e4)](emoticon0(_0x46d900)), $('.emoticon1')[_0x4b228e(0x3e4)](emoticon1(_0x46d900)), $(_0x4b228e(0x32a))['html'](emoticon2(_0x46d900)), $(_0x4b228e(0x2b3))[_0x4b228e(0x3e4)](emoticon3(_0x46d900)), $(_0x4b228e(0x22e))[_0x4b228e(0x3e4)](emoticon4(_0x46d900)), $(_0x4b228e(0xa4))[_0x4b228e(0x3e4)](emoticon5(_0x46d900)), $('.emoticon6')[_0x4b228e(0x3e4)](emoticon6(_0x46d900)), $(_0x4b228e(0x276))[_0x4b228e(0x3e4)](emoticon7(_0x46d900)), $(_0x4b228e(0x90))[_0x4b228e(0x3e4)](thankyou0(_0x46d900)), $('.thankyou1')['html'](thankyou1(_0x46d900)), $(_0x4b228e(0x47b))[_0x4b228e(0x3e4)](thankyou2(_0x46d900)), $(_0x4b228e(0x1af))[_0x4b228e(0x3e4)](thankyou3(_0x46d900)), $(_0x4b228e(0x22b))[_0x4b228e(0x3e4)](thankyou4(_0x46d900)), $(_0x4b228e(0xf3))[_0x4b228e(0x3e4)](thankyou5(_0x46d900)), $(_0x4b228e(0x49a))[_0x4b228e(0x3e4)](thankyou6(_0x46d900)), $(_0x4b228e(0x3a8))[_0x4b228e(0x3e4)](thankyou7(_0x46d900)), $(_0x4b228e(0x2d6))[_0x4b228e(0x3e4)](sad0(_0x46d900)), $(_0x4b228e(0xd5))[_0x4b228e(0x3e4)](sad1(_0x46d900)), $(_0x4b228e(0x194))[_0x4b228e(0x3e4)](sad2(_0x46d900)), $(_0x4b228e(0x175))[_0x4b228e(0x3e4)](sad3(_0x46d900)), $(_0x4b228e(0x422))[_0x4b228e(0x3e4)](sad4(_0x46d900)), $(_0x4b228e(0x2c9))[_0x4b228e(0x3e4)](sad5(_0x46d900)), $(_0x4b228e(0x393))[_0x4b228e(0x3e4)](sad6(_0x46d900)), $(_0x4b228e(0x476))[_0x4b228e(0x3e4)](sad7(_0x46d900)), $('.cuteText1')[_0x4b228e(0x3e4)](cuteText1(_0x46d900)), $(_0x4b228e(0x244))[_0x4b228e(0x3e4)](cuteText2(_0x46d900)), $(_0x4b228e(0x480))['html'](cuteText3(_0x46d900)), $(_0x4b228e(0x3d1))[_0x4b228e(0x3e4)](cuteText4(_0x46d900)), $(_0x4b228e(0x3db))['html'](cuteText5(_0x46d900)), $(_0x4b228e(0x12c))[_0x4b228e(0x3e4)](crazyWithFlourishOrSymbols1(_0x46d900)), $(_0x4b228e(0x48e))[_0x4b228e(0x3e4)](crazyWithFlourishOrSymbols2(_0x46d900)), $(_0x4b228e(0x6b))[_0x4b228e(0x3e4)](crazyWithFlourishOrSymbols3(_0x46d900)), $(_0x4b228e(0x3c4))['html'](crazyWithFlourishOrSymbols4(_0x46d900)), $(_0x4b228e(0x4b1))[_0x4b228e(0x3e4)](crazyWithFlourishOrSymbols5(_0x46d900)), $('.fullCrazy1')['html'](fullCrazy1(_0x46d900)), $(_0x4b228e(0x126))[_0x4b228e(0x3e4)](fullCrazy2(_0x46d900)), $(_0x4b228e(0x3a3))[_0x4b228e(0x3e4)](fullCrazy3(_0x46d900)), $(_0x4b228e(0xe1))[_0x4b228e(0x3e4)](fullCrazy4(_0x46d900)), $(_0x4b228e(0x38f))[_0x4b228e(0x3e4)](fullCrazy5(_0x46d900)), $(_0x4b228e(0x432))['html'](wrap1(_0x46d900)), $('.wrap2')['html'](wrap2(_0x46d900)), $(_0x4b228e(0x317))[_0x4b228e(0x3e4)](wrap3(_0x46d900)), $(_0x4b228e(0x48))[_0x4b228e(0x3e4)](wrap4(_0x46d900)), $(_0x4b228e(0x3f8))['html'](wrap5(_0x46d900));
    }
    $(_0x5153c6(0x4b7))[_0x5153c6(0x2ff)](function() {
        var _0x26d477 = _0x5153c6;
        $(_0x26d477(0x2c6))[_0x26d477(0x5b)]('');
    });

    function _0x4d6a28() {
        var _0x3aa331 = _0x5153c6,
            _0x42a669 = document['querySelector'](_0x3aa331(0xe2)),
            _0x152ae6 = _0x42a669[_0x3aa331(0x455)](_0x3aa331(0x33e));
        document['querySelectorAll'](_0x3aa331(0x265))['forEach'](_0x3d5233 => {
            var _0x587721 = _0x3aa331;
            _0x3d5233[_0x587721(0x36d)]('click', () => {
                var _0x49c493 = _0x587721;
                _0x152ae6[_0x49c493(0xac)] = _0x3d5233['querySelector']('p')['innerText'], _0x36207b(_0x152ae6), _0x42a669[_0x49c493(0x41c)][_0x49c493(0x46a)](_0x49c493(0x1b1)), setTimeout(() => {
                    var _0x2e6350 = _0x49c493;
                    _0x42a669['classList'][_0x2e6350(0x3b5)](_0x2e6350(0x1b1));
                }, 0x3e8);
            });
        });
    }
    _0x4d6a28();

    function _0x36207b(_0x17b182) {
        var _0x1117f7 = _0x5153c6,
            _0x3ffaf5 = document[_0x1117f7(0x28d)](_0x1117f7(0x69));
        _0x3ffaf5['value'] = _0x17b182[_0x1117f7(0x1c7)] || _0x17b182[_0x1117f7(0xac)], document[_0x1117f7(0x38c)]['appendChild'](_0x3ffaf5), _0x3ffaf5['select'](), document['execCommand']('copy'), _0x3ffaf5[_0x1117f7(0x3b5)]();
    }
});
