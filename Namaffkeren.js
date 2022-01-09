var _0xf04b4d = _0xc368,
    normal = _0xf04b4d(0x0),
    default_text = _0xf04b4d(0x1);

function applyCharMap(_0x4e6a82, _0x31eb3f) {
    var _0x32c659 = _0xf04b4d;
    let _0x582e40 = '';
    for (let _0x177729 of _0x31eb3f[_0x32c659(0x2)]('')) {
        if (_0x4e6a82[_0x177729] !== undefined) _0x582e40 += _0x4e6a82[_0x177729];
        else {
            if (_0x4e6a82[_0x177729[_0x32c659(0x3)]()] !== undefined) _0x582e40 += _0x4e6a82[_0x177729['toLowerCase']()];
            else _0x582e40 += _0x177729;
        }
    }
    return _0x582e40;
}

function invertedSquaresCharMapFun(_0x59c8d7) {
    return applyCharMap(invertedSquaresCharMap, _0x59c8d7);
}

function wideTextCharMapFun(_0x5235f6) {
    return applyCharMap(wideTextCharMap, _0x5235f6);
}

function squaresCharMapFun(_0x5d36b4) {
    return applyCharMap(squaresCharMap, _0x5d36b4);
}

function subscriptCharMapFun(_0x483fbe) {
    return applyCharMap(subscriptCharMap, _0x483fbe);
}

function bentTextCharMapFun(_0x2a1185) {
    return applyCharMap(bentTextCharMap, _0x2a1185);
}

function neonCharMapFun(_0x30b7e2) {
    return applyCharMap(neonCharMap, _0x30b7e2);
}

function futureAlienCharMapFun(_0x2bd59b) {
    return applyCharMap(futureAlienCharMap, _0x2bd59b);
}

function squiggleCharMapFun(_0x3bffd7) {
    return applyCharMap(squiggleCharMap, _0x3bffd7);
}

function squiggle2CharMapFun(_0x58699d) {
    return applyCharMap(squiggle2CharMap, _0x58699d);
}

function squiggle3CharMapFun(_0x31d22c) {
    return applyCharMap(squiggle3CharMap, _0x31d22c);
}

function squiggle4CharMapFun(_0x3c9952) {
    return applyCharMap(squiggle4CharMap, _0x3c9952);
}

function squiggle5CharMapFun(_0x37dc60) {
    return applyCharMap(squiggle5CharMap, _0x37dc60);
}

function squiggle6CharMapFun(_0x50ecca) {
    return applyCharMap(squiggle6CharMap, _0x50ecca);
}

function boldCharMapFun(_0x22a76f) {
    return applyCharMap(boldCharMap, _0x22a76f);
}

function oldEnglishCharMapFun(_0x92e229) {
    return applyCharMap(oldEnglishCharMap, _0x92e229);
}

function medievalCharMapFun(_0x4cefc9) {
    return applyCharMap(medievalCharMap, _0x4cefc9);
}

function cursiveCharMapFun(_0x2bb9d9) {
    return applyCharMap(cursiveCharMap, _0x2bb9d9);
}

function doubleStruckCharMapFun(_0x2ca167) {
    return applyCharMap(doubleStruckCharMap, _0x2ca167);
}

function italicCharMapFun(_0x42ab55) {
    return applyCharMap(italicCharMap, _0x42ab55);
}

function boldItalicCharMapFun(_0x429d88) {
    return applyCharMap(boldItalicCharMap, _0x429d88);
}

function monospaceCharMapFun(_0xbb5533) {
    return applyCharMap(monospaceCharMap, _0xbb5533);
}

function upperAnglesCharMapFun(_0x54fc5c) {
    return applyCharMap(upperAnglesCharMap, _0x54fc5c);
}

function greekCharMapFun(_0x412dfe) {
    return applyCharMap(greekCharMap, _0x412dfe);
}

function symbolsCharMapFun(_0x17faed) {
    return applyCharMap(symbolsCharMap, _0x17faed);
}

function currencyCharMapFun(_0xc4012d) {
    return applyCharMap(currencyCharMap, _0xc4012d);
}

function asianStyleCharMapFun(_0x351b63) {
    return applyCharMap(asianStyleCharMap, _0x351b63);
}

function asianStyle2CharMapFun(_0x11c547) {
    return applyCharMap(asianStyle2CharMap, _0x11c547);
}
var luni = new Lunicode();
luni[_0xf04b4d(0x4)][_0xf04b4d(0x5)][_0xf04b4d(0x6)]['maxHeight'] = 0xa;

function crazyWithFlourishOrSymbols(_0x4ccca3) {
    var _0x4cdc61 = _0xf04b4d;
    if (Math[_0x4cdc61(0x7)]() < 0.7) return wrapInSymbols(crazifyText(_0x4ccca3), 0x2);
    else return wrapInFlourish(crazifyText(_0x4ccca3), 0x2);
}

function illuminati(_0x39ddf8) {
    var _0x863c98 = _0xf04b4d;
    return applyCharMap(doubleStruckCharMap, 'ღ⊱♥' + _0x39ddf8 + _0x863c98(0x8));
}

function textgun(_0x4379aa) {
    var _0x3f3d70 = _0xf04b4d;
    return _0x3f3d70(0x9) + _0x4379aa[_0x3f3d70(0x2)]('')[_0x3f3d70(0xa)]('&#823;') + '══━一';
}

function minigame(_0x246ddb) {
    var _0x4727b6 = _0xf04b4d;
    return '★彡[' + luni[_0x4727b6(0x4)][_0x4727b6(0xb)][_0x4727b6(0xc)](_0x246ddb) + _0x4727b6(0xd);
}

function pubggame1(_0x393015) {
    return applyCharMap(cursiveCharMap, '༒☬' + _0x393015 + '☬༒');
}

function pubggame2(_0x491c4d) {
    var _0xbb1642 = _0xf04b4d;
    return applyCharMap(cursiveCharMap, _0xbb1642(0xe) + _0x491c4d + '༻༒۝');
}

function pubggame3(_0x48a018) {
    var _0x5bdd79 = _0xf04b4d;
    return applyCharMap(invertedSquaresCharMap, _0x5bdd79(0xf) + _0x48a018 + '𒆜𓊉꧂');
}

function bricks(_0xd87e2b) {
    var _0x344fba = _0xf04b4d;
    return applyCharMap(squaresCharMap, _0x344fba(0x10) + _0xd87e2b + 'ﻬஐﻬツ');
}

function bigrus(_0x440f4d) {
    var _0x3c3875 = _0xf04b4d;
    return applyCharMap(boldItalicCharMap, _0x3c3875(0x11) + _0x440f4d + _0x3c3875(0x12));
}

function strikeThrough(_0x54cafa) {
    var _0x4e4639 = _0xf04b4d;
    return _0x54cafa[_0x4e4639(0x2)]('')['join']('̶') + '̶';
}

function tildeStrikeThrough(_0x53bc67) {
    var _0x17aebe = _0xf04b4d;
    return _0x53bc67[_0x17aebe(0x2)]('')[_0x17aebe(0xa)]('̴') + '̴';
}

function underline(_0x37273d) {
    var _0x11fb3d = _0xf04b4d;
    return _0x37273d[_0x11fb3d(0x2)]('')['join']('̲') + '̲';
}

function doubleUnderline(_0x1f2802) {
    var _0x3b037a = _0xf04b4d;
    return _0x1f2802['split']('')[_0x3b037a(0xa)]('̳') + '̳';
}

function slashThrough(_0x384879) {
    var _0x282164 = _0xf04b4d;
    return _0x384879[_0x282164(0x2)]('')[_0x282164(0xa)]('̷') + '̷';
}

function stinky(_0x3d2106) {
    var _0x22f85d = _0xf04b4d;
    return _0x3d2106[_0x22f85d(0x2)]('')[_0x22f85d(0xa)]('̾') + '̾';
}

function heartsBetween(_0x1f4a15) {
    var _0x117598 = _0xf04b4d;
    return _0x1f4a15[_0x117598(0x2)]('')['join']('♥');
}

function arrowBelow(_0x503e33) {
    var _0x4fe08b = _0xf04b4d;
    return _0x503e33[_0x4fe08b(0x2)]('')[_0x4fe08b(0xa)]('͎') + '͎';
}

function crossAboveBelow(_0x514494) {
    var _0x4241fc = _0xf04b4d;
    return _0x514494[_0x4241fc(0x2)]('')[_0x4241fc(0xa)]('͓̽') + '͓̽';
}
const wingdingsCharMap = {
    0x0: _0xf04b4d(0x13),
    0x1: _0xf04b4d(0x14),
    0x2: '📄︎',
    0x3: _0xf04b4d(0x15),
    0x4: '🗐︎',
    0x5: '🗄︎',
    0x6: '⌛︎',
    0x7: '🖮︎',
    0x8: _0xf04b4d(0x16),
    0x9: _0xf04b4d(0x17),
    '!': '✏︎',
    '\x22': '✂︎',
    '#': '✁︎',
    '$': _0xf04b4d(0x18),
    '%': _0xf04b4d(0x19),
    '&': _0xf04b4d(0x1a),
    '\x27': _0xf04b4d(0x1b),
    '(': _0xf04b4d(0x1c),
    ')': '✆︎',
    '*': _0xf04b4d(0x1d),
    '+': _0xf04b4d(0x1e),
    ',': _0xf04b4d(0x1f),
    '-': '📫︎',
    '.': _0xf04b4d(0x20),
    '/': _0xf04b4d(0x21),
    ':': '🖳︎',
    ';': _0xf04b4d(0x22),
    '<': _0xf04b4d(0x23),
    '=': '🖬︎',
    '>': '✇︎',
    '?': '✍︎',
    'A': '✌︎',
    'B': _0xf04b4d(0x24),
    'C': _0xf04b4d(0x25),
    'D': _0xf04b4d(0x26),
    'E': '☜︎',
    'F': '☞︎',
    'G': '☝︎',
    'H': '☟︎',
    'I': '✋︎',
    'J': '☺︎',
    'K': _0xf04b4d(0x27),
    'L': '☹︎',
    'M': _0xf04b4d(0x28),
    'N': '☠︎',
    'O': '⚐︎',
    'P': _0xf04b4d(0x29),
    'Q': '✈︎',
    'R': '☼︎',
    'S': '💧︎',
    'T': '❄︎',
    'U': '🕆︎',
    'V': '✞︎',
    'W': _0xf04b4d(0x2a),
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
    '·': _0xf04b4d(0x2b),
    '¸': '🕑︎',
    '¹': '🕒︎',
    'º': _0xf04b4d(0x2c),
    '»': _0xf04b4d(0x2d),
    '¼': _0xf04b4d(0x2e),
    '½': _0xf04b4d(0x2f),
    '¾': _0xf04b4d(0x30),
    '¿': _0xf04b4d(0x31),
    'À': '🕙︎',
    'Á': '🕚︎',
    'Â': _0xf04b4d(0x32),
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

function wingdings(_0x44f208) {
    var _0x24d366 = _0xf04b4d;
    return _0x44f208[_0x24d366(0x2)]('')['map'](function(_0x23d647) {
        return wingdingsCharMap[_0x23d647] ? wingdingsCharMap[_0x23d647] : _0x23d647;
    })[_0x24d366(0xa)]('');
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

function vaporwaveText(_0x4687d1) {
    var _0x4fa894 = _0xf04b4d,
        _0x1a60c9 = _0x4687d1[_0x4fa894(0x2)]('\x20')['length'];
    _0x4687d1 = applyCharMap(vaporwaveCharMap, _0x4687d1);
    var _0x40b4bb = getAsianChars(Math[_0x4fa894(0x33)](0x3, _0x1a60c9));
    if (_0x1a60c9 > 0x6) _0x40b4bb = _0x40b4bb[_0x4fa894(0x2)]('')[_0x4fa894(0x34)](_0x14976c => _0x14976c + ['', ''][Math[_0x4fa894(0x35)](Math[_0x4fa894(0x7)]() * 0.6)])[_0x4fa894(0xa)]('');
    var _0x40a309 = [];
    return _0x40a309[_0x4fa894(0x36)](_0x4687d1), _0x40a309[_0x4fa894(0xa)]();
}

function vaporwaveText1(_0x5e4832) {
    var _0x466b12 = _0xf04b4d,
        _0x82d63 = _0x5e4832['split']('\x20')[_0x466b12(0x37)];
    _0x5e4832 = applyCharMap(vaporwaveCharMap, _0x5e4832);
    var _0x3b3821 = getAsianChars(Math[_0x466b12(0x33)](0x3, _0x82d63));
    if (_0x82d63 > 0x6) _0x3b3821 = _0x3b3821['split']('')[_0x466b12(0x34)](_0x5b4580 => _0x5b4580 + ['', ''][Math[_0x466b12(0x35)](Math[_0x466b12(0x7)]() * 0.6)])[_0x466b12(0xa)]('');
    var _0x1bf7ef = [];
    return _0x1bf7ef[_0x466b12(0x36)](_0x5e4832[_0x466b12(0x38)](/　/g, '░')[_0x466b12(0x38)](/ａｅ/, 'æ')[_0x466b12(0x38)](/Ａ/g, 'Λ')[_0x466b12(0x38)](/Ｅ/g, function() {
        var _0x1fdb5b = _0x466b12;
        return Math[_0x1fdb5b(0x7)]() > 0.5 ? 'Ξ' : 'Σ';
    })[_0x466b12(0x38)](/Ｏ/g, '♢')), _0x1bf7ef[_0x466b12(0xa)]();
}

function vaporwaveText2(_0x236fca) {
    var _0x5b5119 = _0xf04b4d,
        _0x4f7acb = _0x236fca[_0x5b5119(0x2)]('\x20')[_0x5b5119(0x37)];
    _0x236fca = applyCharMap(vaporwaveCharMap, _0x236fca);
    var _0xe1f31d = getAsianChars(Math['max'](0x3, _0x4f7acb));
    if (_0x4f7acb > 0x6) _0xe1f31d = _0xe1f31d[_0x5b5119(0x2)]('')[_0x5b5119(0x34)](_0x16a0d7 => _0x16a0d7 + ['', ''][Math['round'](Math['random']() * 0.6)])[_0x5b5119(0xa)]('');
    var _0x2176e2 = [];
    return _0x2176e2[_0x5b5119(0x36)]('【\ufeff' + _0x236fca + '】'), _0x2176e2['join']();
}

function getAsianChars(_0x22caee) {
    var _0x2dbe49 = _0xf04b4d;
    if (!_0x22caee) _0x22caee = 0x1;
    var _0x3c8325 = _0x2dbe49(0x39),
        _0x3e44a7 = '';
    for (var _0x22b223 = 0x0; _0x22b223 < _0x22caee; _0x22b223++) {
        _0x3e44a7 += _0x3c8325[Math[_0x2dbe49(0x3a)](Math['random']() * _0x3c8325[_0x2dbe49(0x37)])];
    }
    return _0x3e44a7;
}
const flourishArray = [_0xf04b4d(0x3b), _0xf04b4d(0x3c), _0xf04b4d(0x3d), _0xf04b4d(0x3e), _0xf04b4d(0x3f), _0xf04b4d(0x40), _0xf04b4d(0x41), '(\x20ﾟ∀ﾟ)ﾉ【[[text]]】', 'ღƪ(ˆ◡ˆ)ʃ♡\x20[[text]]\x20♡ƪ(ˆ◡ˆ)ʃ♪', _0xf04b4d(0x42), _0xf04b4d(0x43), '<:::::[]=¤\x20[[text]]\x20(▀̿̿Ĺ̯̿̿▀̿\x20̿)', '｡*ﾟ.*.｡(っ\x20ᐛ\x20)っ✂╰⋃╯\x20[[text]]', _0xf04b4d(0x44), _0xf04b4d(0x45), _0xf04b4d(0x46), _0xf04b4d(0x47), _0xf04b4d(0x48), _0xf04b4d(0x49), _0xf04b4d(0x4a), 'ıllıllı\x20[[text]]\x20ıllıllı', _0xf04b4d(0x4b), _0xf04b4d(0x4c), _0xf04b4d(0x4d), _0xf04b4d(0x4e), _0xf04b4d(0x4f), '╰☆☆\x20[[text]]\x20☆☆╮', _0xf04b4d(0x50), _0xf04b4d(0x51), _0xf04b4d(0x52), '░▒▓█\x20[[text]]\x20█▓▒░', _0xf04b4d(0x53), _0xf04b4d(0x54), _0xf04b4d(0x55), '§.•´¨\x27°÷•..×\x20[[text]]\x20×,.•´¨\x27°÷•..§', '•°¯`••\x20[[text]]\x20••´¯°•', '(¯`*•.¸,¤°´✿.｡.:*\x20[[text]]\x20*.:｡.✿`°¤,¸.•*´¯)', _0xf04b4d(0x56), '•._.••´¯``•.¸¸.•`\x20[[text]]\x20`•.¸¸.•´´¯`••._.•', '¸„.-•~¹°”ˆ˜¨\x20[[text]]\x20¨˜ˆ”°¹~•-.„¸', _0xf04b4d(0x51), '••¤(`×[¤\x20[[text]]\x20¤]×´)¤••', _0xf04b4d(0x57), _0xf04b4d(0x58), '¤¸¸.•´¯`•¸¸.•..>>\x20[[text]]\x20<<..•.¸¸•´¯`•.¸¸¤', _0xf04b4d(0x59), _0xf04b4d(0x5a), _0xf04b4d(0x5b), ',-*\x27\x20^\x20\x27~*-.,_,.-*~\x20[[text]]\x20~*-.,_,.-*~\x27\x20^\x20\x27*-,', _0xf04b4d(0x5c), _0xf04b4d(0x5d), _0xf04b4d(0x5e), _0xf04b4d(0x5f), _0xf04b4d(0x60), _0xf04b4d(0x61), _0xf04b4d(0x62), '▀▄▀▄▀▄\x20[[text]]\x20▄▀▄▀▄▀', '(-_-)\x20[[text]]\x20(-_-)', '•´¯`•.\x20[[text]]\x20.•´¯`•', _0xf04b4d(0x63), _0xf04b4d(0x64), '.•°¤*(¯`★´¯)*¤°\x20[[text]]\x20°¤*(¯´★`¯)*¤°•.', '••.•´¯`•.••\x20[[text]]\x20••.•´¯`•.••', _0xf04b4d(0x65), _0xf04b4d(0x66), _0xf04b4d(0x67), _0xf04b4d(0x68), _0xf04b4d(0x69), '-·=»‡«=·-\x20[[text]]\x20-·=»‡«=·-', _0xf04b4d(0x6a), _0xf04b4d(0x6b), _0xf04b4d(0x6c), _0xf04b4d(0x6d), _0xf04b4d(0x6e), _0xf04b4d(0x6f), _0xf04b4d(0x70), _0xf04b4d(0x71), _0xf04b4d(0x72)];

function wrapInFlourish(_0x305e51) {
    var _0x757d77 = _0xf04b4d;
    return flourishArray[Math['floor'](Math[_0x757d77(0x7)]() * flourishArray['length'])][_0x757d77(0x38)]('[[text]]', _0x305e51);
}

function Flourishlist(_0x54569d, _0x13c17b) {
    var _0x3a5a9f = _0xf04b4d;
    return flourishArray[_0x54569d][_0x3a5a9f(0x38)](_0x3a5a9f(0x73), _0x13c17b);
}

function wrapInSymbols(_0x353758, _0x486bb8) {
    return randomSymbols(_0x486bb8) + '\x20\x20' + _0x353758 + '\x20\x20' + randomSymbols(_0x486bb8);
}

function firework(_0xa87269) {
    var _0x419a3f = _0xf04b4d;
    return _0xa87269[_0x419a3f(0x2)]('')[_0x419a3f(0xa)]('҉') + '҉';
}

function weirdBox(_0x85f0fa) {
    var _0x51045e = _0xf04b4d;
    return _0x85f0fa[_0x51045e(0x38)](/([^\s])/g, _0x51045e(0x74));
}

function curlybrackets(_0x2b2972) {
    var _0x58bd47 = _0xf04b4d;
    return _0x2b2972['replace'](/([^\s])/g, _0x58bd47(0x75));
}

function singlewavyJoiner(_0x3aa094) {
    var _0x155110 = _0xf04b4d;
    return '〜' + _0x3aa094[_0x155110(0x2)]('')[_0x155110(0xa)]('∿') + '〜';
}

function thickBox(_0x5c946b) {
    var _0x4c3e4d = _0xf04b4d;
    return _0x5c946b[_0x4c3e4d(0x38)](/([^\s])/g, _0x4c3e4d(0x76));
}

function zigzagJoiner(_0xd019ac) {
    var _0x4f3497 = _0xf04b4d;
    return _0xd019ac[_0x4f3497(0x38)](/([^\s])/g, _0x4f3497(0x77));
}

function hashJoiner(_0x3c1d3a) {
    var _0x4f1169 = _0xf04b4d;
    return _0x3c1d3a[_0x4f1169(0x2)]('')[_0x4f1169(0xa)]('⨳');
}

function starJoiner(_0x4cea5b) {
    var _0x2c1ff4 = _0xf04b4d;
    return _0x4cea5b[_0x2c1ff4(0x38)](/([^\s])/g, '⦚$1⦚');
}

function connectedJoiner(_0x105c10) {
    var _0x16de12 = _0xf04b4d;
    return _0x105c10[_0x16de12(0x2)]('')[_0x16de12(0xa)]('⊶');
}

function arrowjoin(_0x598fde) {
    var _0x4ad6ae = _0xf04b4d;
    return _0x598fde[_0x4ad6ae(0x38)](/([^\s])/g, _0x4ad6ae(0x78));
}

function dotBoxtwo(_0x4a29ea) {
    var _0x2c9afc = _0xf04b4d;
    return _0x4a29ea[_0x2c9afc(0x2)]('')[_0x2c9afc(0xa)](_0x2c9afc(0x79));
}

function dotBox(_0x9e0d86) {
    var _0x196d87 = _0xf04b4d;
    return _0x9e0d86[_0x196d87(0x38)](/([^\s])/g, '꜍$1꜉');
}

function diametricBox(_0x20319f) {
    var _0x4b184d = _0xf04b4d;
    return _0x20319f[_0x4b184d(0x38)](/([^\s])/g, '⦑$1⦒');
}

function arrowBox(_0x3b94d1) {
    var _0x241b8e = _0xf04b4d;
    return _0x3b94d1[_0x241b8e(0x38)](/([^\s])/g, _0x241b8e(0x7a));
}

function littleSparkles(_0xfca809) {
    var _0x571e15 = _0xf04b4d;
    return _0x571e15(0x7b) + _0xfca809 + '\x20•°*”˜.•°*”˜';
}

function kirbyHug(_0x445a37) {
    var _0x49317c = _0xf04b4d;
    return _0x49317c(0x7c) + _0x445a37 + '\x20♥';
}

function dottyJoiner(_0x56cac6) {
    var _0x7dfca4 = _0xf04b4d;
    return '░' + _0x56cac6[_0x7dfca4(0x2)]('')[_0x7dfca4(0xa)]('░') + '░';
}

function wavyJoiner(_0x412b7d) {
    var _0x253a14 = _0xf04b4d;
    return '≋' + _0x412b7d[_0x253a14(0x2)]('')[_0x253a14(0xa)]('≋') + '≋';
}

function diametricAngleFrame(_0x16acb9) {
    var _0x81e17f = _0xf04b4d;
    return _0x16acb9[_0x81e17f(0x38)](/([^\s])/g, '『$1』');
}

function thickBlockFramed(_0x572e66) {
    var _0xc11bd1 = _0xf04b4d;
    return _0x572e66[_0xc11bd1(0x38)](/([^\s])/g, _0xc11bd1(0x7d));
}

function star0(_0x35d7d5) {
    var _0x550325 = _0xf04b4d;
    return applyCharMap(italicCharMap, _0x550325(0x7e) + _0x35d7d5 + '★彡');
}

function star1(_0x24c3f2) {
    var _0x1d2b06 = _0xf04b4d;
    return applyCharMap(monospaceCharMap, _0x1d2b06(0x7f) + _0x24c3f2 + _0x1d2b06(0x80));
}

function star2(_0xc8785f) {
    var _0x13183e = _0xf04b4d;
    return applyCharMap(currencyCharMap, _0x13183e(0x81) + _0xc8785f + _0x13183e(0x82));
}

function star3(_0x37eb85) {
    var _0x3fce84 = _0xf04b4d;
    return applyCharMap(monospaceCharMap, '╰•★★\x20' + _0x37eb85 + _0x3fce84(0x83));
}

function star4(_0x31570a) {
    var _0x16fe08 = _0xf04b4d;
    return applyCharMap(squaresCharMap, _0x16fe08(0x84) + _0x31570a + _0x16fe08(0x85));
}

function star5(_0x9d0215) {
    var _0x152cf2 = _0xf04b4d;
    return applyCharMap(doubleStruckCharMap, '·.★·.·´¯`·.·★' + _0x9d0215 + _0x152cf2(0x86));
}

function star6(_0x3ef8a1) {
    var _0x32932f = _0xf04b4d;
    return applyCharMap(invertedSquaresCharMap, '¨˜ˆ”°⍣~•✡⊹٭„¸\x20\x20' + _0x3ef8a1 + _0x32932f(0x87));
}

function star7(_0x42e1c4) {
    var _0x42c74d = _0xf04b4d;
    return applyCharMap(asianStyleCharMap, _0x42c74d(0x87) + _0x42e1c4 + _0x42c74d(0x88));
}

function star8(_0x5aa43d) {
    var _0xad58da = _0xf04b4d;
    return applyCharMap(asianStyle2CharMap, _0xad58da(0x89) + _0x5aa43d + '★⡀.•☆•.★');
}

function star9(_0x118583) {
    var _0x3ddb0a = _0xf04b4d;
    return applyCharMap(neonCharMap, _0x3ddb0a(0x8a) + _0x118583 + _0x3ddb0a(0x8b));
}

function star10(_0x227538) {
    var _0x5b9631 = _0xf04b4d;
    return applyCharMap(squiggle6CharMap, _0x5b9631(0x8a) + _0x227538 + _0x5b9631(0x8b));
}

function heart0(_0x25ef5c) {
    var _0x405803 = _0xf04b4d;
    return applyCharMap(squiggle5CharMap, _0x405803(0x8c) + _0x25ef5c + '💖彡');
}

function heart1(_0x25522e) {
    var _0x20b957 = _0xf04b4d;
    return applyCharMap(futureAlienCharMap, _0x20b957(0x8d) + _0x25522e + _0x20b957(0x8e));
}

function heart2(_0x24a35a) {
    var _0x2135bc = _0xf04b4d;
    return applyCharMap(boldCharMap, '💖´\x20*•.¸♥¸.•**\x20' + _0x24a35a + _0x2135bc(0x8f));
}

function heart3(_0xb26b91) {
    var _0x37b175 = _0xf04b4d;
    return applyCharMap(firework, _0x37b175(0x90) + _0xb26b91 + _0x37b175(0x91));
}

function heart4(_0x2d947b) {
    var _0x347008 = _0xf04b4d;
    return applyCharMap(symbolsCharMap, _0x347008(0x92) + _0x2d947b + _0x347008(0x93));
}

function heart5(_0x5a9754) {
    var _0x319493 = _0xf04b4d;
    return applyCharMap(bentTextCharMap, _0x319493(0x94) + _0x5a9754 + '¸♩·¯·ξξ(∵❤◡❤∵)ξξ🌸');
}

function heart6(_0x3f3bca) {
    var _0x42b763 = _0xf04b4d;
    return applyCharMap(upperAnglesCharMap, '♥╣[-_-]╠♥' + _0x3f3bca + _0x42b763(0x95));
}

function heart7(_0x23e64f) {
    var _0x4e7bec = _0xf04b4d;
    return applyCharMap(boldCharMap, 'ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥\x20\x20' + _0x23e64f + _0x4e7bec(0x96));
}

function emoticon0(_0x4c52c3) {
    var _0x3a66f1 = _0xf04b4d;
    return applyCharMap(oldEnglishCharMap, _0x3a66f1(0x97) + _0x4c52c3 + _0x3a66f1(0x98));
}

function emoticon1(_0x1ce629) {
    var _0x2f585c = _0xf04b4d;
    return applyCharMap(squiggle6CharMap, _0x2f585c(0x99) + _0x1ce629 + ')');
}

function emoticon2(_0x1a9c56) {
    return applyCharMap(boldCharMap, '☞ó\x20͜つò☞\x20\x20' + _0x1a9c56 + '');
}

function emoticon3(_0x3428bd) {
    return applyCharMap(squiggle5CharMap, '(☝◞‸◟)☞' + _0x3428bd + '');
}

function emoticon4(_0x4e8b5c) {
    var _0x3bdb5c = _0xf04b4d;
    return applyCharMap(cursiveCharMap, _0x3bdb5c(0x9a) + _0x4e8b5c + _0x3bdb5c(0x9b));
}

function emoticon5(_0x49b27d) {
    var _0x2ca303 = _0xf04b4d;
    return applyCharMap(squiggle3CharMap, _0x2ca303(0x9c) + _0x49b27d + _0x2ca303(0x9d));
}

function emoticon6(_0x518615) {
    var _0x261372 = _0xf04b4d;
    return applyCharMap(wideTextCharMap, _0x261372(0x9e) + _0x518615 + _0x261372(0x9f));
}

function emoticon7(_0x1cf9e6) {
    var _0x3d5575 = _0xf04b4d;
    return applyCharMap(squiggle2CharMap, '(人◕‿◕)' + _0x1cf9e6 + _0x3d5575(0xa0));
}

function thankyou0(_0x67dbb8) {
    var _0x9cc9e = _0xf04b4d;
    return applyCharMap(doubleStruckCharMap, _0x9cc9e(0xa1) + _0x67dbb8 + '♪(･ω･)ﾉ');
}

function thankyou1(_0x252e15) {
    var _0x4139ba = _0xf04b4d;
    return applyCharMap(cursiveCharMap, _0x4139ba(0xa2) + _0x252e15 + _0x4139ba(0xa2));
}

function thankyou2(_0x1d0987) {
    var _0x42f747 = _0xf04b4d;
    return applyCharMap(doubleStruckCharMap, _0x42f747(0xa3) + _0x1d0987 + '(ω・*ゝ)');
}

function thankyou3(_0x599f74) {
    var _0x195924 = _0xf04b4d;
    return applyCharMap(upperAnglesCharMap, _0x195924(0xa4) + _0x599f74 + '');
}

function thankyou4(_0x31a521) {
    var _0x2743dc = _0xf04b4d;
    return applyCharMap(squiggle2CharMap, _0x2743dc(0xa5) + _0x31a521 + '');
}

function thankyou5(_0x52a530) {
    var _0x11efb2 = _0xf04b4d;
    return applyCharMap(asianStyleCharMap, 'ﾟ･:,｡★＼(^-^\x20)♪' + _0x52a530 + _0x11efb2(0xa6));
}

function thankyou6(_0x500358) {
    var _0x30e871 = _0xf04b4d;
    return applyCharMap(medievalCharMap, _0x30e871(0xa7) + _0x500358 + _0x30e871(0xa8));
}

function thankyou7(_0x3f2387) {
    var _0x2f5576 = _0xf04b4d;
    return applyCharMap(neonCharMap, _0x2f5576(0xa3) + _0x3f2387 + _0x2f5576(0xa3));
}

function sad0(_0xa31ace) {
    var _0x59ea44 = _0xf04b4d;
    return applyCharMap(squiggle5CharMap, _0x59ea44(0xa9) + _0xa31ace + _0x59ea44(0xaa));
}

function sad1(_0x4dec3a) {
    var _0x522bad = _0xf04b4d;
    return applyCharMap(monospaceCharMap, _0x522bad(0xab) + _0x4dec3a + _0x522bad(0xac));
}

function sad2(_0x3c5aad) {
    return applyCharMap(squiggleCharMap, '(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)' + _0x3c5aad + '\x20(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)');
}

function sad3(_0x4dd7ae) {
    var _0x526f3b = _0xf04b4d;
    return applyCharMap(italicCharMap, _0x526f3b(0xad) + _0x4dd7ae + _0x526f3b(0xae));
}

function sad4(_0x57482a) {
    var _0x180432 = _0xf04b4d;
    return applyCharMap(squiggle3CharMap, _0x180432(0xaf) + _0x57482a + _0x180432(0xb0));
}

function sad5(_0x51f5f6) {
    var _0x17ac75 = _0xf04b4d;
    return applyCharMap(bentTextCharMap, _0x17ac75(0xb1) + _0x51f5f6 + _0x17ac75(0xb2));
}

function sad6(_0x571e1a) {
    var _0x5a70e8 = _0xf04b4d;
    return applyCharMap(medievalCharMap, '(′︿‵｡)' + _0x571e1a + _0x5a70e8(0xb3));
}

function sad7(_0x677744) {
    var _0x2d3574 = _0xf04b4d;
    return applyCharMap(symbolsCharMap, _0x2d3574(0xb4) + _0x677744 + _0x2d3574(0xb5));
}

function cuteText1(_0x49fd8d) {
    var _0x1978cd = _0xf04b4d;
    return applyCharMap(italicCharMap, _0x1978cd(0xb6) + _0x49fd8d + _0x1978cd(0xb6));
}

function cuteText2(_0x4a6de5) {
    var _0x1635db = _0xf04b4d;
    return applyCharMap(squiggle5CharMap, _0x1635db(0xb7) + _0x4a6de5 + '\x20🎀\x20🐿');
}

function cuteText3(_0x14c25e) {
    var _0x21be36 = _0xf04b4d;
    return applyCharMap(oldEnglishCharMap, _0x21be36(0xb8) + _0x14c25e + '\x20🎀\x20🍒');
}

function cuteText4(_0x2e8091) {
    var _0x4d4051 = _0xf04b4d;
    return applyCharMap(squiggleCharMap, '👻ൠ' + _0x2e8091 + _0x4d4051(0xb9));
}

function cuteText5(_0x43b803) {
    var _0x13ccb2 = _0xf04b4d;
    return applyCharMap(cursiveCharMap, _0x13ccb2(0xba) + _0x43b803 + _0x13ccb2(0xbb));
}

function _0xc368(_0x53185c, _0xc3685a) {
    var _0xcdaf68 = _0x5318();
    return _0xc368 = function(_0x4d5b26, _0x223b29) {
        _0x4d5b26 = _0x4d5b26 - 0x0;
        var _0x44f6b0 = _0xcdaf68[_0x4d5b26];
        return _0x44f6b0;
    }, _0xc368(_0x53185c, _0xc3685a);
}

function fullCrazy1(_0x264202) {
    var _0x4477c4 = _0xf04b4d;
    return applyCharMap(boldCharMap, _0x4477c4(0xbc) + _0x264202 + '\x20卐ॐ\x20ཌ꧂◤');
}

function fullCrazy2(_0x57dad7) {
    var _0x57938d = _0xf04b4d;
    return applyCharMap(squiggleCharMap, _0x57938d(0xbd) + _0x57dad7 + _0x57938d(0xbe));
}

function fullCrazy3(_0x3961e6) {
    var _0xa40f97 = _0xf04b4d;
    return applyCharMap(doubleStruckCharMap, _0xa40f97(0xbf) + _0x3961e6 + _0xa40f97(0xc0));
}

function fullCrazy4(_0x624eb1) {
    var _0x4b5f66 = _0xf04b4d;
    return applyCharMap(currencyCharMap, _0x4b5f66(0xc1) + _0x624eb1 + _0x4b5f66(0xc2));
}

function fullCrazy5(_0x19e8e3) {
    var _0x44ce4a = _0xf04b4d;
    return applyCharMap(wideTextCharMap, _0x44ce4a(0xc3) + _0x19e8e3 + _0x44ce4a(0xc4));
}

function crazyWithFlourishOrSymbols3(_0x33a2b0) {
    var _0x4ae711 = _0xf04b4d;
    return applyCharMap(italicCharMap, _0x4ae711(0xc5) + _0x33a2b0 + _0x4ae711(0xc6));
}

function crazyWithFlourishOrSymbols4(_0x3f8f6f) {
    return applyCharMap(asianStyle2CharMap, '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯\x20\x20' + _0x3f8f6f + '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯');
}

function crazyWithFlourishOrSymbols1(_0x549d62) {
    var _0x4b12c0 = _0xf04b4d;
    return applyCharMap(italicCharMap, _0x4b12c0(0xc7) + _0x549d62 + '\x20⫸');
}

function crazyWithFlourishOrSymbols2(_0x1a8124) {
    var _0x3d95c5 = _0xf04b4d;
    return applyCharMap(boldItalicCharMap, _0x3d95c5(0xc8) + _0x1a8124 + _0x3d95c5(0xc9));
}

function crazyWithFlourishOrSymbols5(_0x1c48c4) {
    var _0xa79260 = _0xf04b4d;
    return applyCharMap(squaresCharMap, _0xa79260(0xca) + _0x1c48c4 + _0xa79260(0xcb));
}

function wrap1(_0x12ade0) {
    var _0x1a8eea = _0xf04b4d;
    return applyCharMap(boldCharMap, _0x1a8eea(0xcc) + [_0x12ade0] + _0x1a8eea(0xcd));
}

function wrap2(_0x3a276a) {
    var _0x5966e0 = _0xf04b4d;
    return applyCharMap(cursiveCharMap, _0x5966e0(0xce) + [_0x3a276a] + _0x5966e0(0xcf));
}

function wrap3(_0xacf9ed) {
    var _0x203a64 = _0xf04b4d;
    return applyCharMap(boldItalicCharMap, '▌│█║▌║▌║\x20' + [_0xacf9ed] + _0x203a64(0xd0));
}

function wrap4(_0x2dec96) {
    var _0x3b94eb = _0xf04b4d;
    return applyCharMap(neonCharMap, _0x3b94eb(0xf) + [_0x2dec96] + _0x3b94eb(0xd1));
}

function wrap5(_0xa90df1) {
    var _0x37b80f = _0xf04b4d;
    return applyCharMap(boldItalicCharMap, '╚»★«╝\x20' + [_0xa90df1] + _0x37b80f(0xd2));
}
var newtext = {
    's1': {
        0x1: _0xf04b4d(0xd3),
        0x2: _0xf04b4d(0xd4),
        0x3: _0xf04b4d(0xd5),
        0x4: _0xf04b4d(0xd6),
        0x5: _0xf04b4d(0xd7),
        0x6: _0xf04b4d(0xd8),
        0x7: _0xf04b4d(0xd9),
        0x8: '&#1291;',
        0x9: _0xf04b4d(0xda),
        0xa: '&#669;',
        0xb: _0xf04b4d(0xdb),
        0xc: _0xf04b4d(0xdc),
        0xd: _0xf04b4d(0xdd),
        0xe: '&#627;',
        0xf: '&sigma;',
        0x10: _0xf04b4d(0xde),
        0x11: _0xf04b4d(0xdf),
        0x12: _0xf04b4d(0xe0),
        0x13: _0xf04b4d(0xe1),
        0x14: _0xf04b4d(0xe2),
        0x15: _0xf04b4d(0xe3),
        0x16: '&#651;',
        0x17: _0xf04b4d(0xe4),
        0x18: 'x',
        0x19: _0xf04b4d(0xe5),
        0x1a: _0xf04b4d(0xe6),
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
        0x1: _0xf04b4d(0xe7),
        0x2: _0xf04b4d(0xe8),
        0x3: _0xf04b4d(0xe9),
        0x4: _0xf04b4d(0xea),
        0x5: _0xf04b4d(0xeb),
        0x6: '&#988;',
        0x7: _0xf04b4d(0xec),
        0x8: _0xf04b4d(0xed),
        0x9: _0xf04b4d(0xee),
        0xa: _0xf04b4d(0xef),
        0xb: _0xf04b4d(0xf0),
        0xc: _0xf04b4d(0xf1),
        0xd: _0xf04b4d(0xf2),
        0xe: '&#9835;',
        0xf: '&#8857;',
        0x10: _0xf04b4d(0xde),
        0x11: _0xf04b4d(0xf3),
        0x12: _0xf04b4d(0xf4),
        0x13: '&#9442;',
        0x14: _0xf04b4d(0xf5),
        0x15: '&#9739;',
        0x16: '&#10003;',
        0x17: _0xf04b4d(0xf6),
        0x18: '&#8984;',
        0x19: _0xf04b4d(0xf7),
        0x1a: _0xf04b4d(0xf8),
        0x1b: '&#41807;',
        0x1c: _0xf04b4d(0xe8),
        0x1d: _0xf04b4d(0xe9),
        0x1e: '&#9687;',
        0x1f: _0xf04b4d(0xeb),
        0x20: '&#988;',
        0x21: _0xf04b4d(0xec),
        0x22: '&#9796;',
        0x23: _0xf04b4d(0xee),
        0x24: _0xf04b4d(0xef),
        0x25: _0xf04b4d(0xf0),
        0x26: _0xf04b4d(0xf1),
        0x27: _0xf04b4d(0xf2),
        0x28: _0xf04b4d(0xf9),
        0x29: _0xf04b4d(0xfa),
        0x2a: _0xf04b4d(0xde),
        0x2b: _0xf04b4d(0xf3),
        0x2c: '&#9736;',
        0x2d: _0xf04b4d(0xfb),
        0x2e: '&#9730;',
        0x2f: _0xf04b4d(0xfc),
        0x30: _0xf04b4d(0xfd),
        0x31: _0xf04b4d(0xf6),
        0x32: '&#8984;',
        0x33: _0xf04b4d(0xf7),
        0x34: _0xf04b4d(0xf8),
        0x35: _0xf04b4d(0xfe),
        0x36: _0xf04b4d(0xff),
        0x37: _0xf04b4d(0x100),
        0x38: _0xf04b4d(0x101),
        0x39: _0xf04b4d(0x102),
        0x3a: _0xf04b4d(0x103),
        0x3b: '&#10128;',
        0x3c: _0xf04b4d(0x104),
        0x3d: _0xf04b4d(0x105),
        0x3e: _0xf04b4d(0x106)
    },
    's3': {
        0x1: _0xf04b4d(0x107),
        0x2: _0xf04b4d(0x108),
        0x3: '&#268;',
        0x4: _0xf04b4d(0x109),
        0x5: '&#276;',
        0x6: _0xf04b4d(0x10a),
        0x7: _0xf04b4d(0x10b),
        0x8: _0xf04b4d(0x10c),
        0x9: _0xf04b4d(0x10d),
        0xa: _0xf04b4d(0x10e),
        0xb: _0xf04b4d(0x10f),
        0xc: _0xf04b4d(0x110),
        0xd: _0xf04b4d(0x111),
        0xe: '&#323;',
        0xf: _0xf04b4d(0x112),
        0x10: _0xf04b4d(0x113),
        0x11: 'Q',
        0x12: _0xf04b4d(0x114),
        0x13: _0xf04b4d(0x115),
        0x14: _0xf04b4d(0x116),
        0x15: _0xf04b4d(0x117),
        0x16: 'V',
        0x17: _0xf04b4d(0x118),
        0x18: '&#1046;',
        0x19: _0xf04b4d(0x119),
        0x1a: _0xf04b4d(0x11a),
        0x1b: _0xf04b4d(0x107),
        0x1c: '&beta;',
        0x1d: _0xf04b4d(0x11b),
        0x1e: '&#270;',
        0x1f: _0xf04b4d(0x11c),
        0x20: _0xf04b4d(0x10a),
        0x21: _0xf04b4d(0x10b),
        0x22: '&#292;',
        0x23: _0xf04b4d(0x10d),
        0x24: _0xf04b4d(0x10e),
        0x25: _0xf04b4d(0x10f),
        0x26: '&#313;',
        0x27: _0xf04b4d(0x111),
        0x28: _0xf04b4d(0x11d),
        0x29: _0xf04b4d(0x112),
        0x2a: '&#1056;',
        0x2b: 'Q',
        0x2c: _0xf04b4d(0x114),
        0x2d: _0xf04b4d(0x115),
        0x2e: '&#356;',
        0x2f: _0xf04b4d(0x117),
        0x30: 'V',
        0x31: _0xf04b4d(0x118),
        0x32: '&#1046;',
        0x33: _0xf04b4d(0x119),
        0x34: '&#377;',
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
        0x1: _0xf04b4d(0x11e),
        0x2: 'q',
        0x3: _0xf04b4d(0x11f),
        0x4: 'p',
        0x5: _0xf04b4d(0x120),
        0x6: _0xf04b4d(0x121),
        0x7: _0xf04b4d(0x122),
        0x8: _0xf04b4d(0x123),
        0x9: _0xf04b4d(0x124),
        0xa: _0xf04b4d(0xe0),
        0xb: '&#670;',
        0xc: 'l',
        0xd: _0xf04b4d(0xe4),
        0xe: 'u',
        0xf: 'o',
        0x10: 'd',
        0x11: 'b',
        0x12: _0xf04b4d(0x125),
        0x13: 's',
        0x14: _0xf04b4d(0x126),
        0x15: 'n',
        0x16: _0xf04b4d(0x127),
        0x17: '&#653;',
        0x18: 'x',
        0x19: '&#654;',
        0x1a: 'z',
        0x1b: _0xf04b4d(0x11e),
        0x1c: 'q',
        0x1d: _0xf04b4d(0x11f),
        0x1e: 'p',
        0x1f: _0xf04b4d(0x120),
        0x20: _0xf04b4d(0x121),
        0x21: _0xf04b4d(0x122),
        0x22: _0xf04b4d(0x123),
        0x23: _0xf04b4d(0x124),
        0x24: _0xf04b4d(0xe0),
        0x25: _0xf04b4d(0x128),
        0x26: 'l',
        0x27: _0xf04b4d(0xe4),
        0x28: 'u',
        0x29: 'o',
        0x2a: 'd',
        0x2b: 'b',
        0x2c: '&#633;',
        0x2d: 's',
        0x2e: _0xf04b4d(0x126),
        0x2f: 'n',
        0x30: _0xf04b4d(0x127),
        0x31: '&#653;',
        0x32: 'x',
        0x33: _0xf04b4d(0x129),
        0x34: 'z',
        0x35: _0xf04b4d(0x12a),
        0x36: _0xf04b4d(0x12b),
        0x37: _0xf04b4d(0x12c),
        0x38: '&#12579;',
        0x39: _0xf04b4d(0x12d),
        0x3a: '9',
        0x3b: '&#12581;',
        0x3c: '8',
        0x3d: '6',
        0x3e: '0'
    },
    's5': {
        0x1: _0xf04b4d(0x12e),
        0x2: _0xf04b4d(0x108),
        0x3: '&#262;',
        0x4: _0xf04b4d(0x12f),
        0x5: _0xf04b4d(0xeb),
        0x6: _0xf04b4d(0x130),
        0x7: '&#484;',
        0x8: _0xf04b4d(0x131),
        0x9: _0xf04b4d(0x132),
        0xa: _0xf04b4d(0x10e),
        0xb: '&#1180;',
        0xc: _0xf04b4d(0x133),
        0xd: _0xf04b4d(0x134),
        0xe: '&#327;',
        0xf: '&Oslash;',
        0x10: _0xf04b4d(0x135),
        0x11: '&Omega;',
        0x12: _0xf04b4d(0x136),
        0x13: _0xf04b4d(0x137),
        0x14: '&#358;',
        0x15: _0xf04b4d(0x138),
        0x16: 'V',
        0x17: _0xf04b4d(0x118),
        0x18: _0xf04b4d(0x139),
        0x19: '&yen;',
        0x1a: _0xf04b4d(0x13a),
        0x1b: _0xf04b4d(0x12e),
        0x1c: _0xf04b4d(0x108),
        0x1d: '&#262;',
        0x1e: _0xf04b4d(0x12f),
        0x1f: '&euro;',
        0x20: _0xf04b4d(0x130),
        0x21: '&#484;',
        0x22: _0xf04b4d(0x131),
        0x23: _0xf04b4d(0x132),
        0x24: _0xf04b4d(0x10e),
        0x25: _0xf04b4d(0x13b),
        0x26: _0xf04b4d(0x133),
        0x27: _0xf04b4d(0x134),
        0x28: _0xf04b4d(0x13c),
        0x29: _0xf04b4d(0x13d),
        0x2a: _0xf04b4d(0x135),
        0x2b: _0xf04b4d(0x13e),
        0x2c: '&#344;',
        0x2d: _0xf04b4d(0x137),
        0x2e: _0xf04b4d(0x10a),
        0x2f: _0xf04b4d(0x138),
        0x30: 'V',
        0x31: '&#372;',
        0x32: _0xf04b4d(0x139),
        0x33: _0xf04b4d(0x13f),
        0x34: _0xf04b4d(0x13a),
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
        0x1: _0xf04b4d(0xd3),
        0x2: _0xf04b4d(0x140),
        0x3: _0xf04b4d(0x141),
        0x4: '&part;',
        0x5: _0xf04b4d(0x142),
        0x6: _0xf04b4d(0x143),
        0x7: _0xf04b4d(0xd9),
        0x8: _0xf04b4d(0x144),
        0x9: _0xf04b4d(0x145),
        0xa: '&#669;',
        0xb: _0xf04b4d(0x146),
        0xc: _0xf04b4d(0x147),
        0xd: _0xf04b4d(0xdd),
        0xe: _0xf04b4d(0x148),
        0xf: _0xf04b4d(0x149),
        0x10: '&rho;',
        0x11: '&phi;',
        0x12: _0xf04b4d(0x14a),
        0x13: _0xf04b4d(0x14b),
        0x14: _0xf04b4d(0x14c),
        0x15: '&micro;',
        0x16: _0xf04b4d(0x14d),
        0x17: _0xf04b4d(0xf6),
        0x18: '&#1488;',
        0x19: _0xf04b4d(0xe5),
        0x1a: _0xf04b4d(0x14e),
        0x1b: _0xf04b4d(0xd3),
        0x1c: _0xf04b4d(0x140),
        0x1d: '&#2798;',
        0x1e: _0xf04b4d(0x14f),
        0x1f: _0xf04b4d(0x142),
        0x20: _0xf04b4d(0x143),
        0x21: _0xf04b4d(0xd9),
        0x22: _0xf04b4d(0x144),
        0x23: _0xf04b4d(0x145),
        0x24: '&#669;',
        0x25: _0xf04b4d(0x146),
        0x26: '&#8467;',
        0x27: '&#625;',
        0x28: '&#627;',
        0x29: '&sigma;',
        0x2a: _0xf04b4d(0xde),
        0x2b: _0xf04b4d(0x150),
        0x2c: _0xf04b4d(0x14a),
        0x2d: _0xf04b4d(0x14b),
        0x2e: _0xf04b4d(0x14c),
        0x2f: _0xf04b4d(0x151),
        0x30: _0xf04b4d(0x14d),
        0x31: _0xf04b4d(0xf6),
        0x32: _0xf04b4d(0x152),
        0x33: '&#4327;',
        0x34: _0xf04b4d(0x14e),
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
        0x1: _0xf04b4d(0x153),
        0x2: _0xf04b4d(0x154),
        0x3: _0xf04b4d(0x155),
        0x4: '&#5610;',
        0x5: _0xf04b4d(0x156),
        0x6: _0xf04b4d(0x157),
        0x7: _0xf04b4d(0x158),
        0x8: _0xf04b4d(0x159),
        0x9: _0xf04b4d(0x15a),
        0xa: _0xf04b4d(0x15b),
        0xb: '&#5845;',
        0xc: '&#5290;',
        0xd: _0xf04b4d(0x15c),
        0xe: _0xf04b4d(0x15d),
        0xf: '&#5597;',
        0x10: _0xf04b4d(0x15e),
        0x11: _0xf04b4d(0x15f),
        0x12: _0xf04b4d(0x160),
        0x13: _0xf04b4d(0x161),
        0x14: _0xf04b4d(0x162),
        0x15: '&#5196;',
        0x16: _0xf04b4d(0x163),
        0x17: '&#5615;',
        0x18: _0xf04b4d(0x164),
        0x19: _0xf04b4d(0x165),
        0x1a: '&#20057;',
        0x1b: '&#5609;',
        0x1c: _0xf04b4d(0x154),
        0x1d: _0xf04b4d(0x155),
        0x1e: _0xf04b4d(0x166),
        0x1f: _0xf04b4d(0x156),
        0x20: _0xf04b4d(0x157),
        0x21: _0xf04b4d(0x158),
        0x22: '&#5500;',
        0x23: _0xf04b4d(0x15a),
        0x24: _0xf04b4d(0x15b),
        0x25: _0xf04b4d(0x167),
        0x26: '&#5290;',
        0x27: _0xf04b4d(0x15c),
        0x28: _0xf04b4d(0x15d),
        0x29: _0xf04b4d(0x168),
        0x2a: _0xf04b4d(0x15e),
        0x2b: _0xf04b4d(0x15f),
        0x2c: _0xf04b4d(0x160),
        0x2d: _0xf04b4d(0x161),
        0x2e: _0xf04b4d(0x162),
        0x2f: '&#5196;',
        0x30: _0xf04b4d(0x163),
        0x31: _0xf04b4d(0x169),
        0x32: '&#5741;',
        0x33: _0xf04b4d(0x165),
        0x34: _0xf04b4d(0x16a),
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
        0x1: _0xf04b4d(0x16b),
        0x2: _0xf04b4d(0x16c),
        0x3: _0xf04b4d(0x16d),
        0x4: _0xf04b4d(0x16e),
        0x5: '&#4318;',
        0x6: 'f',
        0x7: _0xf04b4d(0x16f),
        0x8: 'h',
        0x9: _0xf04b4d(0x170),
        0xa: '&#4325;',
        0xb: '&kappa;',
        0xc: 'l',
        0xd: '&#4317;',
        0xe: '&#8134;',
        0xf: '&otilde;',
        0x10: _0xf04b4d(0xde),
        0x11: _0xf04b4d(0x171),
        0x12: _0xf04b4d(0x172),
        0x13: _0xf04b4d(0x173),
        0x14: _0xf04b4d(0x174),
        0x15: '&upsilon;',
        0x16: '&#8023;',
        0x17: 'w',
        0x18: _0xf04b4d(0x175),
        0x19: _0xf04b4d(0xe5),
        0x1a: _0xf04b4d(0x176),
        0x1b: _0xf04b4d(0x16b),
        0x1c: _0xf04b4d(0x16c),
        0x1d: _0xf04b4d(0x16d),
        0x1e: _0xf04b4d(0x16e),
        0x1f: _0xf04b4d(0x177),
        0x20: 'f',
        0x21: _0xf04b4d(0x16f),
        0x22: 'h',
        0x23: _0xf04b4d(0x170),
        0x24: _0xf04b4d(0x178),
        0x25: _0xf04b4d(0x179),
        0x26: 'l',
        0x27: '&#4317;',
        0x28: _0xf04b4d(0x17a),
        0x29: _0xf04b4d(0x17b),
        0x2a: _0xf04b4d(0xde),
        0x2b: _0xf04b4d(0x171),
        0x2c: _0xf04b4d(0x172),
        0x2d: '&#4336;',
        0x2e: _0xf04b4d(0x174),
        0x2f: _0xf04b4d(0xe3),
        0x30: _0xf04b4d(0x17c),
        0x31: 'w',
        0x32: '&#4335;',
        0x33: _0xf04b4d(0xe5),
        0x34: _0xf04b4d(0x176),
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
        0x1: _0xf04b4d(0x17d),
        0x2: '&#1074;',
        0x3: _0xf04b4d(0x17e),
        0x4: '&#545;',
        0x5: _0xf04b4d(0x17f),
        0x6: '&#1171;',
        0x7: _0xf04b4d(0x180),
        0x8: _0xf04b4d(0x181),
        0x9: _0xf04b4d(0x182),
        0xa: _0xf04b4d(0x183),
        0xb: '&#311;',
        0xc: _0xf04b4d(0x184),
        0xd: _0xf04b4d(0x185),
        0xe: _0xf04b4d(0x186),
        0xf: _0xf04b4d(0x187),
        0x10: '&rho;',
        0x11: 'q',
        0x12: _0xf04b4d(0x188),
        0x13: _0xf04b4d(0x189),
        0x14: _0xf04b4d(0x18a),
        0x15: _0xf04b4d(0x18b),
        0x16: _0xf04b4d(0x18c),
        0x17: _0xf04b4d(0x18d),
        0x18: 'x',
        0x19: _0xf04b4d(0x18e),
        0x1a: _0xf04b4d(0x18f),
        0x1b: _0xf04b4d(0x17d),
        0x1c: _0xf04b4d(0x190),
        0x1d: _0xf04b4d(0x17e),
        0x1e: _0xf04b4d(0x191),
        0x1f: '&#941;',
        0x20: '&#1171;',
        0x21: '&#291;',
        0x22: _0xf04b4d(0x181),
        0x23: _0xf04b4d(0x182),
        0x24: _0xf04b4d(0x183),
        0x25: '&#311;',
        0x26: _0xf04b4d(0x184),
        0x27: _0xf04b4d(0x185),
        0x28: _0xf04b4d(0x186),
        0x29: _0xf04b4d(0x187),
        0x2a: '&rho;',
        0x2b: 'q',
        0x2c: _0xf04b4d(0x188),
        0x2d: _0xf04b4d(0x189),
        0x2e: '&#355;',
        0x2f: _0xf04b4d(0x18b),
        0x30: _0xf04b4d(0x18c),
        0x31: '&#974;',
        0x32: 'x',
        0x33: _0xf04b4d(0x18e),
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
        0x1: _0xf04b4d(0x192),
        0x2: _0xf04b4d(0x193),
        0x3: _0xf04b4d(0x194),
        0x4: _0xf04b4d(0x195),
        0x5: _0xf04b4d(0x196),
        0x6: '&#41240;',
        0x7: _0xf04b4d(0x197),
        0x8: _0xf04b4d(0x198),
        0x9: _0xf04b4d(0x199),
        0xa: _0xf04b4d(0x19a),
        0xb: _0xf04b4d(0x19b),
        0xc: _0xf04b4d(0x19c),
        0xd: '&#41042;',
        0xe: _0xf04b4d(0x19d),
        0xf: _0xf04b4d(0x19e),
        0x10: _0xf04b4d(0x19f),
        0x11: '&#41080;',
        0x12: '&#42131;',
        0x13: _0xf04b4d(0x1a0),
        0x14: _0xf04b4d(0x1a1),
        0x15: _0xf04b4d(0x1a2),
        0x16: '&#41949;',
        0x17: '&#41296;',
        0x18: _0xf04b4d(0x1a3),
        0x19: _0xf04b4d(0x1a4),
        0x1a: '&#41076;',
        0x1b: _0xf04b4d(0x192),
        0x1c: _0xf04b4d(0x193),
        0x1d: '&#41976;',
        0x1e: _0xf04b4d(0x195),
        0x1f: _0xf04b4d(0x196),
        0x20: _0xf04b4d(0x1a5),
        0x21: _0xf04b4d(0x197),
        0x22: _0xf04b4d(0x198),
        0x23: _0xf04b4d(0x199),
        0x24: _0xf04b4d(0x19a),
        0x25: _0xf04b4d(0x19b),
        0x26: _0xf04b4d(0x19c),
        0x27: _0xf04b4d(0x1a6),
        0x28: _0xf04b4d(0x19d),
        0x29: _0xf04b4d(0x19e),
        0x2a: _0xf04b4d(0x19f),
        0x2b: _0xf04b4d(0x1a7),
        0x2c: _0xf04b4d(0x1a8),
        0x2d: _0xf04b4d(0x1a0),
        0x2e: _0xf04b4d(0x1a1),
        0x2f: '&#41991;',
        0x30: '&#41949;',
        0x31: _0xf04b4d(0x1a9),
        0x32: _0xf04b4d(0x1a3),
        0x33: _0xf04b4d(0x1a4),
        0x34: _0xf04b4d(0x1aa),
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
        0x1: '&#1044;',
        0x2: '&#1041;',
        0x3: 'C',
        0x4: 'D',
        0x5: '&Xi;',
        0x6: 'F',
        0x7: 'G',
        0x8: 'H',
        0x9: 'I',
        0xa: 'J',
        0xb: '&#1180;',
        0xc: 'L',
        0xd: 'M',
        0xe: _0xf04b4d(0x1ab),
        0xf: _0xf04b4d(0x1ac),
        0x10: 'P',
        0x11: _0xf04b4d(0x1ad),
        0x12: _0xf04b4d(0x1ae),
        0x13: 'S',
        0x14: _0xf04b4d(0x172),
        0x15: _0xf04b4d(0x1af),
        0x16: 'V',
        0x17: _0xf04b4d(0x1b0),
        0x18: _0xf04b4d(0x139),
        0x19: _0xf04b4d(0x1b1),
        0x1a: 'Z',
        0x1b: _0xf04b4d(0x1b2),
        0x1c: _0xf04b4d(0x1b3),
        0x1d: 'C',
        0x1e: 'D',
        0x1f: _0xf04b4d(0x1b4),
        0x20: 'F',
        0x21: 'G',
        0x22: 'H',
        0x23: 'I',
        0x24: 'J',
        0x25: _0xf04b4d(0x13b),
        0x26: 'L',
        0x27: 'M',
        0x28: '&#1048;',
        0x29: '&#1060;',
        0x2a: 'P',
        0x2b: _0xf04b4d(0x1ad),
        0x2c: _0xf04b4d(0x1ae),
        0x2d: 'S',
        0x2e: _0xf04b4d(0x172),
        0x2f: _0xf04b4d(0x1af),
        0x30: 'V',
        0x31: _0xf04b4d(0x1b0),
        0x32: _0xf04b4d(0x139),
        0x33: _0xf04b4d(0x1b1),
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
        0x1: _0xf04b4d(0xe7),
        0x2: _0xf04b4d(0x1b5),
        0x3: _0xf04b4d(0x1b6),
        0x4: _0xf04b4d(0x1b7),
        0x5: _0xf04b4d(0x196),
        0x6: _0xf04b4d(0x1b8),
        0x7: '&#41029;',
        0x8: _0xf04b4d(0x1b9),
        0x9: '&#40996;',
        0xa: _0xf04b4d(0x19a),
        0xb: _0xf04b4d(0x1ba),
        0xc: _0xf04b4d(0x19c),
        0xd: _0xf04b4d(0x1bb),
        0xe: _0xf04b4d(0x1bc),
        0xf: _0xf04b4d(0x1bd),
        0x10: _0xf04b4d(0x19f),
        0x11: '&#41392;',
        0x12: _0xf04b4d(0x1be),
        0x13: '&#41751;',
        0x14: '&#42180;',
        0x15: _0xf04b4d(0x1bf),
        0x16: '&#41204;',
        0x17: _0xf04b4d(0x1c0),
        0x18: _0xf04b4d(0x1c1),
        0x19: _0xf04b4d(0x1c2),
        0x1a: _0xf04b4d(0x1aa),
        0x1b: _0xf04b4d(0xe7),
        0x1c: _0xf04b4d(0x1b5),
        0x1d: _0xf04b4d(0x1b6),
        0x1e: '&#41016;',
        0x1f: '&#41823;',
        0x20: '&#41863;',
        0x21: _0xf04b4d(0x1c3),
        0x22: _0xf04b4d(0x1b9),
        0x23: '&#40996;',
        0x24: _0xf04b4d(0x19a),
        0x25: '&#40984;',
        0x26: _0xf04b4d(0x19c),
        0x27: _0xf04b4d(0x1bb),
        0x28: _0xf04b4d(0x1bc),
        0x29: '&#41126;',
        0x2a: _0xf04b4d(0x19f),
        0x2b: '&#41392;',
        0x2c: '&#41706;',
        0x2d: _0xf04b4d(0x1c4),
        0x2e: _0xf04b4d(0x1c5),
        0x2f: _0xf04b4d(0x1bf),
        0x30: '&#41204;',
        0x31: _0xf04b4d(0x1c0),
        0x32: _0xf04b4d(0x1c1),
        0x33: _0xf04b4d(0x1c2),
        0x34: _0xf04b4d(0x1aa),
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
        0x1: '&#41708;',
        0x2: _0xf04b4d(0x1c6),
        0x3: _0xf04b4d(0x1c7),
        0x4: _0xf04b4d(0x1c8),
        0x5: _0xf04b4d(0x1c9),
        0x6: _0xf04b4d(0x1ca),
        0x7: _0xf04b4d(0x1cb),
        0x8: _0xf04b4d(0x1cc),
        0x9: _0xf04b4d(0x1cd),
        0xa: _0xf04b4d(0x1ce),
        0xb: _0xf04b4d(0x1ba),
        0xc: _0xf04b4d(0x19c),
        0xd: _0xf04b4d(0x1bb),
        0xe: '&#41674;',
        0xf: _0xf04b4d(0x1cf),
        0x10: _0xf04b4d(0x19f),
        0x11: _0xf04b4d(0x1d0),
        0x12: _0xf04b4d(0x1be),
        0x13: '&#41433;',
        0x14: _0xf04b4d(0x1c5),
        0x15: _0xf04b4d(0x1d1),
        0x16: _0xf04b4d(0x1d2),
        0x17: '&#41296;',
        0x18: _0xf04b4d(0x1d3),
        0x19: '&#41766;',
        0x1a: '&#41076;',
        0x1b: '&#41708;',
        0x1c: _0xf04b4d(0x1c6),
        0x1d: _0xf04b4d(0x1c7),
        0x1e: _0xf04b4d(0x1c8),
        0x1f: '&#41922;',
        0x20: _0xf04b4d(0x1ca),
        0x21: _0xf04b4d(0x1cb),
        0x22: '&#41053;',
        0x23: _0xf04b4d(0x1cd),
        0x24: _0xf04b4d(0x1ce),
        0x25: '&#40984;',
        0x26: _0xf04b4d(0x19c),
        0x27: '&#41141;',
        0x28: _0xf04b4d(0x1d4),
        0x29: _0xf04b4d(0x1cf),
        0x2a: _0xf04b4d(0x19f),
        0x2b: _0xf04b4d(0x1d0),
        0x2c: _0xf04b4d(0x1be),
        0x2d: _0xf04b4d(0x1d5),
        0x2e: '&#42180;',
        0x2f: _0xf04b4d(0x1d1),
        0x30: _0xf04b4d(0x1d2),
        0x31: _0xf04b4d(0x1a9),
        0x32: _0xf04b4d(0x1d3),
        0x33: _0xf04b4d(0x1d6),
        0x34: _0xf04b4d(0x1aa),
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
        0x1: _0xf04b4d(0x1d7),
        0x2: _0xf04b4d(0x1d8),
        0x3: _0xf04b4d(0x1d9),
        0x4: _0xf04b4d(0x1da),
        0x5: '&#400;',
        0x6: 'F',
        0x7: _0xf04b4d(0x1db),
        0x8: _0xf04b4d(0x1dc),
        0x9: '&#618;',
        0xa: _0xf04b4d(0x1dd),
        0xb: _0xf04b4d(0x1de),
        0xc: _0xf04b4d(0x133),
        0xd: _0xf04b4d(0x1df),
        0xe: _0xf04b4d(0x1e0),
        0xf: _0xf04b4d(0x13d),
        0x10: _0xf04b4d(0x1e1),
        0x11: _0xf04b4d(0x1e2),
        0x12: _0xf04b4d(0x1e3),
        0x13: _0xf04b4d(0x1e4),
        0x14: _0xf04b4d(0x116),
        0x15: '&#1062;',
        0x16: _0xf04b4d(0x1e5),
        0x17: '&#412;',
        0x18: _0xf04b4d(0x1e6),
        0x19: _0xf04b4d(0x1e7),
        0x1a: _0xf04b4d(0x1e8),
        0x1b: _0xf04b4d(0x1d7),
        0x1c: _0xf04b4d(0x1d8),
        0x1d: '&#12552;',
        0x1e: _0xf04b4d(0x1da),
        0x1f: '&#400;',
        0x20: 'F',
        0x21: _0xf04b4d(0x1db),
        0x22: _0xf04b4d(0x1dc),
        0x23: _0xf04b4d(0x1e9),
        0x24: _0xf04b4d(0x1dd),
        0x25: _0xf04b4d(0x1de),
        0x26: _0xf04b4d(0x133),
        0x27: '&#3057;',
        0x28: _0xf04b4d(0x1e0),
        0x29: '&Oslash;',
        0x2a: '&thorn;',
        0x2b: _0xf04b4d(0x1e2),
        0x2c: _0xf04b4d(0x1e3),
        0x2d: _0xf04b4d(0x1e4),
        0x2e: _0xf04b4d(0x116),
        0x2f: '&#1062;',
        0x30: '&#404;',
        0x31: _0xf04b4d(0x1ea),
        0x32: _0xf04b4d(0x1e6),
        0x33: _0xf04b4d(0x1e7),
        0x34: '&#7828;',
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
        0x1: _0xf04b4d(0x1eb),
        0x2: _0xf04b4d(0x1ec),
        0x3: _0xf04b4d(0x1ed),
        0x4: '&#394;',
        0x5: _0xf04b4d(0x1ee),
        0x6: _0xf04b4d(0x1ef),
        0x7: _0xf04b4d(0x1db),
        0x8: _0xf04b4d(0x1f0),
        0x9: _0xf04b4d(0x12a),
        0xa: '&#646;',
        0xb: _0xf04b4d(0x1f1),
        0xc: _0xf04b4d(0x1f2),
        0xd: 'M',
        0xe: '&#413;',
        0xf: '&#416;',
        0x10: _0xf04b4d(0x135),
        0x11: _0xf04b4d(0x1f3),
        0x12: '&#422;',
        0x13: '&#423;',
        0x14: _0xf04b4d(0x1f4),
        0x15: _0xf04b4d(0x1f5),
        0x16: '&#404;',
        0x17: _0xf04b4d(0x1ea),
        0x18: _0xf04b4d(0x1f6),
        0x19: _0xf04b4d(0x165),
        0x1a: _0xf04b4d(0x1f7),
        0x1b: '&#411;',
        0x1c: _0xf04b4d(0x1ec),
        0x1d: '&#391;',
        0x1e: _0xf04b4d(0x1f8),
        0x1f: _0xf04b4d(0x1ee),
        0x20: _0xf04b4d(0x1ef),
        0x21: _0xf04b4d(0x1db),
        0x22: _0xf04b4d(0x1f0),
        0x23: _0xf04b4d(0x12a),
        0x24: _0xf04b4d(0x1f9),
        0x25: '&#408;',
        0x26: '&#1340;',
        0x27: 'M',
        0x28: _0xf04b4d(0x1fa),
        0x29: _0xf04b4d(0x1fb),
        0x2a: _0xf04b4d(0x135),
        0x2b: _0xf04b4d(0x1f3),
        0x2c: _0xf04b4d(0x1fc),
        0x2d: _0xf04b4d(0x1fd),
        0x2e: _0xf04b4d(0x1f4),
        0x2f: '&#434;',
        0x30: _0xf04b4d(0x1e5),
        0x31: _0xf04b4d(0x1ea),
        0x32: '&#1202;',
        0x33: _0xf04b4d(0x165),
        0x34: _0xf04b4d(0x1f7),
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
        0x1: _0xf04b4d(0x1fe),
        0x2: '&#41712;',
        0x3: _0xf04b4d(0x1ff),
        0x4: '&#41120;',
        0x5: _0xf04b4d(0x200),
        0x6: _0xf04b4d(0x201),
        0x7: _0xf04b4d(0x1c3),
        0x8: '&#41833;',
        0x9: '&#41105;',
        0xa: _0xf04b4d(0x1ce),
        0xb: _0xf04b4d(0x19b),
        0xc: _0xf04b4d(0x19c),
        0xd: '&#41141;',
        0xe: '&#41674;',
        0xf: _0xf04b4d(0x1bd),
        0x10: '&#41571;',
        0x11: '&#41079;',
        0x12: _0xf04b4d(0x202),
        0x13: _0xf04b4d(0x1a0),
        0x14: '&#41686;',
        0x15: _0xf04b4d(0x1a2),
        0x16: _0xf04b4d(0x203),
        0x17: _0xf04b4d(0x1c0),
        0x18: _0xf04b4d(0x204),
        0x19: _0xf04b4d(0x205),
        0x1a: _0xf04b4d(0x1aa),
        0x1b: _0xf04b4d(0x1fe),
        0x1c: '&#41712;',
        0x1d: _0xf04b4d(0x1ff),
        0x1e: _0xf04b4d(0x206),
        0x1f: _0xf04b4d(0x200),
        0x20: _0xf04b4d(0x201),
        0x21: _0xf04b4d(0x1c3),
        0x22: _0xf04b4d(0x207),
        0x23: '&#41105;',
        0x24: _0xf04b4d(0x1ce),
        0x25: _0xf04b4d(0x19b),
        0x26: _0xf04b4d(0x19c),
        0x27: '&#41141;',
        0x28: '&#41674;',
        0x29: _0xf04b4d(0x1bd),
        0x2a: _0xf04b4d(0x19f),
        0x2b: _0xf04b4d(0x208),
        0x2c: _0xf04b4d(0x202),
        0x2d: _0xf04b4d(0x1a0),
        0x2e: _0xf04b4d(0x209),
        0x2f: _0xf04b4d(0x1a2),
        0x30: '&#41008;',
        0x31: _0xf04b4d(0x1c0),
        0x32: '&#41426;',
        0x33: _0xf04b4d(0x205),
        0x34: _0xf04b4d(0x1aa),
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
        0x1: _0xf04b4d(0x20a),
        0x2: _0xf04b4d(0x20b),
        0x3: _0xf04b4d(0x20c),
        0x4: _0xf04b4d(0x20d),
        0x5: _0xf04b4d(0x20e),
        0x6: _0xf04b4d(0x20f),
        0x7: _0xf04b4d(0x210),
        0x8: '&#615;',
        0x9: _0xf04b4d(0x211),
        0xa: _0xf04b4d(0x212),
        0xb: _0xf04b4d(0xdb),
        0xc: _0xf04b4d(0xdc),
        0xd: _0xf04b4d(0x213),
        0xe: _0xf04b4d(0x214),
        0xf: _0xf04b4d(0x215),
        0x10: _0xf04b4d(0xde),
        0x11: _0xf04b4d(0x150),
        0x12: _0xf04b4d(0x216),
        0x13: _0xf04b4d(0x217),
        0x14: _0xf04b4d(0x218),
        0x15: '&#1348;',
        0x16: '&#1506;',
        0x17: _0xf04b4d(0x219),
        0x18: _0xf04b4d(0x21a),
        0x19: _0xf04b4d(0x21b),
        0x1a: '&#1344;',
        0x1b: _0xf04b4d(0x20a),
        0x1c: _0xf04b4d(0x20b),
        0x1d: _0xf04b4d(0x20c),
        0x1e: _0xf04b4d(0x20d),
        0x1f: _0xf04b4d(0x20e),
        0x20: _0xf04b4d(0x20f),
        0x21: '&#1331;',
        0x22: '&#615;',
        0x23: _0xf04b4d(0x211),
        0x24: _0xf04b4d(0x212),
        0x25: _0xf04b4d(0xdb),
        0x26: _0xf04b4d(0xdc),
        0x27: _0xf04b4d(0x213),
        0x28: _0xf04b4d(0x214),
        0x29: _0xf04b4d(0x215),
        0x2a: _0xf04b4d(0xde),
        0x2b: _0xf04b4d(0x150),
        0x2c: _0xf04b4d(0x216),
        0x2d: '&#1359;',
        0x2e: _0xf04b4d(0x218),
        0x2f: _0xf04b4d(0x21c),
        0x30: _0xf04b4d(0x21d),
        0x31: _0xf04b4d(0x219),
        0x32: '&#1347;',
        0x33: _0xf04b4d(0x21b),
        0x34: _0xf04b4d(0x21e),
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
        0x1: _0xf04b4d(0xd3),
        0x2: _0xf04b4d(0x21f),
        0x3: _0xf04b4d(0x17e),
        0x4: 'd',
        0x5: _0xf04b4d(0x142),
        0x6: '&fnof;',
        0x7: 'g',
        0x8: 'h',
        0x9: _0xf04b4d(0x220),
        0xa: _0xf04b4d(0x221),
        0xb: '&kappa;',
        0xc: '&#65434;',
        0xd: 'm',
        0xe: _0xf04b4d(0x222),
        0xf: _0xf04b4d(0x223),
        0x10: 'p',
        0x11: _0xf04b4d(0x13e),
        0x12: 'r',
        0x13: '&scaron;',
        0x14: _0xf04b4d(0x224),
        0x15: 'u',
        0x16: _0xf04b4d(0x225),
        0x17: _0xf04b4d(0xf6),
        0x18: 'x',
        0x19: _0xf04b4d(0x226),
        0x1a: 'z',
        0x1b: _0xf04b4d(0xd3),
        0x1c: _0xf04b4d(0x21f),
        0x1d: _0xf04b4d(0x17e),
        0x1e: 'd',
        0x1f: _0xf04b4d(0x142),
        0x20: _0xf04b4d(0x143),
        0x21: 'g',
        0x22: 'h',
        0x23: _0xf04b4d(0x220),
        0x24: _0xf04b4d(0x221),
        0x25: '&kappa;',
        0x26: '&#65434;',
        0x27: 'm',
        0x28: _0xf04b4d(0x222),
        0x29: _0xf04b4d(0x223),
        0x2a: 'p',
        0x2b: _0xf04b4d(0x13e),
        0x2c: 'r',
        0x2d: _0xf04b4d(0x227),
        0x2e: _0xf04b4d(0x224),
        0x2f: 'u',
        0x30: _0xf04b4d(0x225),
        0x31: _0xf04b4d(0xf6),
        0x32: 'x',
        0x33: _0xf04b4d(0x226),
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
        0x1: _0xf04b4d(0x228),
        0x2: _0xf04b4d(0x16f),
        0x3: '&#2414;',
        0x4: '&#4331;',
        0x5: '&#2799;',
        0x6: _0xf04b4d(0x20f),
        0x7: _0xf04b4d(0x229),
        0x8: _0xf04b4d(0x22a),
        0x9: '&#639;',
        0xa: _0xf04b4d(0x1f9),
        0xb: _0xf04b4d(0x22b),
        0xc: _0xf04b4d(0x22c),
        0xd: _0xf04b4d(0xdd),
        0xe: _0xf04b4d(0x22d),
        0xf: _0xf04b4d(0x22e),
        0x10: _0xf04b4d(0x22f),
        0x11: _0xf04b4d(0x230),
        0x12: _0xf04b4d(0x216),
        0x13: _0xf04b4d(0x17e),
        0x14: _0xf04b4d(0x231),
        0x15: _0xf04b4d(0xe3),
        0x16: _0xf04b4d(0x232),
        0x17: _0xf04b4d(0xf6),
        0x18: _0xf04b4d(0x233),
        0x19: _0xf04b4d(0x21d),
        0x1a: _0xf04b4d(0x234),
        0x1b: _0xf04b4d(0x228),
        0x1c: _0xf04b4d(0x16f),
        0x1d: _0xf04b4d(0x235),
        0x1e: '&#4331;',
        0x1f: _0xf04b4d(0x236),
        0x20: _0xf04b4d(0x20f),
        0x21: '&#2797;',
        0x22: _0xf04b4d(0x22a),
        0x23: '&#639;',
        0x24: _0xf04b4d(0x1f9),
        0x25: '&#1179;',
        0x26: _0xf04b4d(0x22c),
        0x27: '&#625;',
        0x28: _0xf04b4d(0x22d),
        0x29: _0xf04b4d(0x22e),
        0x2a: _0xf04b4d(0x22f),
        0x2b: _0xf04b4d(0x230),
        0x2c: _0xf04b4d(0x216),
        0x2d: '&sigmaf;',
        0x2e: _0xf04b4d(0x231),
        0x2f: _0xf04b4d(0xe3),
        0x30: '&#3182;',
        0x31: '&omega;',
        0x32: _0xf04b4d(0x233),
        0x33: '&#1506;',
        0x34: _0xf04b4d(0x234),
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
        0x1: _0xf04b4d(0x237),
        0x2: _0xf04b4d(0x238),
        0x3: 'c',
        0x4: _0xf04b4d(0x239),
        0x5: _0xf04b4d(0x23a),
        0x6: 'f',
        0x7: 'g',
        0x8: '&#1085;',
        0x9: _0xf04b4d(0x23b),
        0xa: 'j',
        0xb: '&#1082;',
        0xc: '&#1075;',
        0xd: _0xf04b4d(0x23c),
        0xe: _0xf04b4d(0x23d),
        0xf: _0xf04b4d(0x23e),
        0x10: 'p',
        0x11: _0xf04b4d(0x23f),
        0x12: _0xf04b4d(0x240),
        0x13: '$',
        0x14: '&#1090;',
        0x15: _0xf04b4d(0x241),
        0x16: _0xf04b4d(0x14d),
        0x17: _0xf04b4d(0x242),
        0x18: '&#1078;',
        0x19: '&#1095;',
        0x1a: _0xf04b4d(0x243),
        0x1b: _0xf04b4d(0x244),
        0x1c: _0xf04b4d(0x1b3),
        0x1d: 'C',
        0x1e: _0xf04b4d(0x1b2),
        0x1f: _0xf04b4d(0x1ee),
        0x20: 'F',
        0x21: 'G',
        0x22: 'H',
        0x23: '&#1031;',
        0x24: 'J',
        0x25: _0xf04b4d(0x245),
        0x26: _0xf04b4d(0x246),
        0x27: '&#1130;',
        0x28: _0xf04b4d(0x247),
        0x29: _0xf04b4d(0x248),
        0x2a: 'P',
        0x2b: _0xf04b4d(0x1ac),
        0x2c: _0xf04b4d(0x1ae),
        0x2d: '$',
        0x2e: 'T',
        0x2f: _0xf04b4d(0x1af),
        0x30: '&#1140;',
        0x31: _0xf04b4d(0x249),
        0x32: _0xf04b4d(0x139),
        0x33: _0xf04b4d(0x24a),
        0x34: '&#1047;',
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
        0x1: _0xf04b4d(0x24b),
        0x2: _0xf04b4d(0x24c),
        0x3: _0xf04b4d(0x24d),
        0x4: _0xf04b4d(0x24e),
        0x5: 'e&#830;',
        0x6: _0xf04b4d(0x24f),
        0x7: 'g&#830;',
        0x8: _0xf04b4d(0x250),
        0x9: _0xf04b4d(0x251),
        0xa: 'j&#830;',
        0xb: _0xf04b4d(0x252),
        0xc: _0xf04b4d(0x253),
        0xd: 'm&#830;',
        0xe: _0xf04b4d(0x254),
        0xf: _0xf04b4d(0x255),
        0x10: _0xf04b4d(0x256),
        0x11: 'q&#830;',
        0x12: _0xf04b4d(0x257),
        0x13: _0xf04b4d(0x258),
        0x14: 't&#830;',
        0x15: 'u&#830;',
        0x16: _0xf04b4d(0x259),
        0x17: _0xf04b4d(0x25a),
        0x18: _0xf04b4d(0x25b),
        0x19: 'y&#830;',
        0x1a: 'z&#830;',
        0x1b: _0xf04b4d(0x25c),
        0x1c: _0xf04b4d(0x25d),
        0x1d: _0xf04b4d(0x25e),
        0x1e: 'D&#830;',
        0x1f: 'E&#830;',
        0x20: _0xf04b4d(0x25f),
        0x21: _0xf04b4d(0x260),
        0x22: _0xf04b4d(0x261),
        0x23: _0xf04b4d(0x262),
        0x24: _0xf04b4d(0x263),
        0x25: _0xf04b4d(0x264),
        0x26: _0xf04b4d(0x265),
        0x27: _0xf04b4d(0x266),
        0x28: 'N&#830;',
        0x29: _0xf04b4d(0x267),
        0x2a: _0xf04b4d(0x268),
        0x2b: _0xf04b4d(0x269),
        0x2c: _0xf04b4d(0x26a),
        0x2d: _0xf04b4d(0x26b),
        0x2e: 'T&#830;',
        0x2f: _0xf04b4d(0x26c),
        0x30: _0xf04b4d(0x26d),
        0x31: _0xf04b4d(0x26e),
        0x32: _0xf04b4d(0x26f),
        0x33: _0xf04b4d(0x270),
        0x34: _0xf04b4d(0x271),
        0x35: _0xf04b4d(0x272),
        0x36: _0xf04b4d(0x273),
        0x37: _0xf04b4d(0x274),
        0x38: _0xf04b4d(0x275),
        0x39: '5&#830;',
        0x3a: _0xf04b4d(0x276),
        0x3b: _0xf04b4d(0x277),
        0x3c: _0xf04b4d(0x278),
        0x3d: _0xf04b4d(0x279),
        0x3e: _0xf04b4d(0x27a)
    },
    's22': {
        0x1: _0xf04b4d(0x27b),
        0x2: 'b&#838;',
        0x3: _0xf04b4d(0x27c),
        0x4: _0xf04b4d(0x27d),
        0x5: _0xf04b4d(0x27e),
        0x6: _0xf04b4d(0x27f),
        0x7: _0xf04b4d(0x280),
        0x8: _0xf04b4d(0x281),
        0x9: 'i&#838;',
        0xa: _0xf04b4d(0x282),
        0xb: 'k&#838;',
        0xc: 'l&#838;',
        0xd: _0xf04b4d(0x283),
        0xe: 'n&#838;',
        0xf: 'o&#838;',
        0x10: _0xf04b4d(0x284),
        0x11: _0xf04b4d(0x285),
        0x12: _0xf04b4d(0x286),
        0x13: 's&#838;',
        0x14: _0xf04b4d(0x287),
        0x15: _0xf04b4d(0x288),
        0x16: _0xf04b4d(0x289),
        0x17: _0xf04b4d(0x28a),
        0x18: _0xf04b4d(0x28b),
        0x19: 'y&#838;',
        0x1a: _0xf04b4d(0x28c),
        0x1b: _0xf04b4d(0x28d),
        0x1c: _0xf04b4d(0x28e),
        0x1d: _0xf04b4d(0x28f),
        0x1e: 'D&#838;',
        0x1f: _0xf04b4d(0x290),
        0x20: _0xf04b4d(0x291),
        0x21: _0xf04b4d(0x292),
        0x22: _0xf04b4d(0x293),
        0x23: _0xf04b4d(0x294),
        0x24: _0xf04b4d(0x295),
        0x25: 'K&#838;',
        0x26: 'L&#838;',
        0x27: _0xf04b4d(0x296),
        0x28: _0xf04b4d(0x297),
        0x29: 'O&#838;',
        0x2a: _0xf04b4d(0x298),
        0x2b: _0xf04b4d(0x299),
        0x2c: _0xf04b4d(0x29a),
        0x2d: _0xf04b4d(0x29b),
        0x2e: _0xf04b4d(0x29c),
        0x2f: _0xf04b4d(0x29d),
        0x30: _0xf04b4d(0x29e),
        0x31: _0xf04b4d(0x29f),
        0x32: _0xf04b4d(0x2a0),
        0x33: _0xf04b4d(0x2a1),
        0x34: _0xf04b4d(0x2a2),
        0x35: '1&#838;',
        0x36: _0xf04b4d(0x2a3),
        0x37: '3&#838;',
        0x38: '4&#838;',
        0x39: '5&#838;',
        0x3a: '6&#838;',
        0x3b: _0xf04b4d(0x2a4),
        0x3c: _0xf04b4d(0x2a5),
        0x3d: '9&#838;',
        0x3e: '0&#838;'
    },
    's23': {
        0x1: _0xf04b4d(0x2a6),
        0x2: _0xf04b4d(0x2a7),
        0x3: _0xf04b4d(0x2a8),
        0x4: _0xf04b4d(0x2a9),
        0x5: _0xf04b4d(0x2aa),
        0x6: 'f&#826;',
        0x7: 'g&#826;',
        0x8: _0xf04b4d(0x2ab),
        0x9: _0xf04b4d(0x2ac),
        0xa: _0xf04b4d(0x2ad),
        0xb: _0xf04b4d(0x2ae),
        0xc: _0xf04b4d(0x2af),
        0xd: _0xf04b4d(0x2b0),
        0xe: _0xf04b4d(0x2b1),
        0xf: _0xf04b4d(0x2b2),
        0x10: _0xf04b4d(0x2b3),
        0x11: 'q&#826;',
        0x12: _0xf04b4d(0x2b4),
        0x13: _0xf04b4d(0x2b5),
        0x14: _0xf04b4d(0x2b6),
        0x15: _0xf04b4d(0x2b7),
        0x16: _0xf04b4d(0x2b8),
        0x17: 'w&#826;',
        0x18: _0xf04b4d(0x2b9),
        0x19: 'y&#826;',
        0x1a: _0xf04b4d(0x2ba),
        0x1b: 'A&#826;',
        0x1c: _0xf04b4d(0x2bb),
        0x1d: 'C&#826;',
        0x1e: _0xf04b4d(0x2bc),
        0x1f: _0xf04b4d(0x2bd),
        0x20: _0xf04b4d(0x2be),
        0x21: _0xf04b4d(0x2bf),
        0x22: 'H&#826;',
        0x23: _0xf04b4d(0x2c0),
        0x24: _0xf04b4d(0x2c1),
        0x25: _0xf04b4d(0x2c2),
        0x26: _0xf04b4d(0x2c3),
        0x27: _0xf04b4d(0x2c4),
        0x28: _0xf04b4d(0x2c5),
        0x29: _0xf04b4d(0x2c6),
        0x2a: _0xf04b4d(0x2c7),
        0x2b: _0xf04b4d(0x2c8),
        0x2c: 'R&#826;',
        0x2d: 'S&#826;',
        0x2e: _0xf04b4d(0x2c9),
        0x2f: _0xf04b4d(0x2ca),
        0x30: 'V&#826;',
        0x31: _0xf04b4d(0x2cb),
        0x32: _0xf04b4d(0x2cc),
        0x33: _0xf04b4d(0x2cd),
        0x34: _0xf04b4d(0x2ce),
        0x35: _0xf04b4d(0x2cf),
        0x36: _0xf04b4d(0x2d0),
        0x37: _0xf04b4d(0x2d1),
        0x38: _0xf04b4d(0x2d2),
        0x39: '5&#826;',
        0x3a: '6&#826;',
        0x3b: _0xf04b4d(0x2d3),
        0x3c: _0xf04b4d(0x2d4),
        0x3d: _0xf04b4d(0x2d5),
        0x3e: '0&#826;'
    },
    's24': {
        0x1: _0xf04b4d(0x2d6),
        0x2: _0xf04b4d(0x2d7),
        0x3: 'c&#857;',
        0x4: _0xf04b4d(0x2d8),
        0x5: 'e&#857;',
        0x6: _0xf04b4d(0x2d9),
        0x7: _0xf04b4d(0x2da),
        0x8: _0xf04b4d(0x2db),
        0x9: 'i&#857;',
        0xa: 'j&#857;',
        0xb: _0xf04b4d(0x2dc),
        0xc: _0xf04b4d(0x2dd),
        0xd: 'm&#857;',
        0xe: 'n&#857;',
        0xf: 'o&#857;',
        0x10: 'p&#857;',
        0x11: _0xf04b4d(0x2de),
        0x12: _0xf04b4d(0x2df),
        0x13: _0xf04b4d(0x2e0),
        0x14: _0xf04b4d(0x2e1),
        0x15: _0xf04b4d(0x2e2),
        0x16: _0xf04b4d(0x2e3),
        0x17: 'w&#857;',
        0x18: _0xf04b4d(0x2e4),
        0x19: _0xf04b4d(0x2e5),
        0x1a: 'z&#857;',
        0x1b: _0xf04b4d(0x2e6),
        0x1c: _0xf04b4d(0x2e7),
        0x1d: 'C&#857;',
        0x1e: _0xf04b4d(0x2e8),
        0x1f: _0xf04b4d(0x2e9),
        0x20: 'F&#857;',
        0x21: _0xf04b4d(0x2ea),
        0x22: _0xf04b4d(0x2eb),
        0x23: _0xf04b4d(0x2ec),
        0x24: _0xf04b4d(0x2ed),
        0x25: _0xf04b4d(0x2ee),
        0x26: _0xf04b4d(0x2ef),
        0x27: 'M&#857;',
        0x28: 'N&#857;',
        0x29: 'O&#857;',
        0x2a: 'P&#857;',
        0x2b: _0xf04b4d(0x2f0),
        0x2c: _0xf04b4d(0x2f1),
        0x2d: 'S&#857;',
        0x2e: _0xf04b4d(0x2f2),
        0x2f: _0xf04b4d(0x2f3),
        0x30: _0xf04b4d(0x2f4),
        0x31: _0xf04b4d(0x2f5),
        0x32: 'X&#857;',
        0x33: _0xf04b4d(0x2f6),
        0x34: _0xf04b4d(0x2f7),
        0x35: _0xf04b4d(0x2f8),
        0x36: _0xf04b4d(0x2f9),
        0x37: _0xf04b4d(0x2fa),
        0x38: '4&#857;',
        0x39: '5&#857;',
        0x3a: '6&#857;',
        0x3b: '7&#857;',
        0x3c: _0xf04b4d(0x2fb),
        0x3d: _0xf04b4d(0x2fc),
        0x3e: _0xf04b4d(0x2fd)
    },
    's25': {
        0x1: _0xf04b4d(0x2fe),
        0x2: _0xf04b4d(0x2ff),
        0x3: _0xf04b4d(0x300),
        0x4: _0xf04b4d(0x301),
        0x5: _0xf04b4d(0x302),
        0x6: 'f&#799;',
        0x7: _0xf04b4d(0x303),
        0x8: _0xf04b4d(0x304),
        0x9: _0xf04b4d(0x305),
        0xa: 'j&#799;',
        0xb: 'k&#799;',
        0xc: 'l&#799;',
        0xd: _0xf04b4d(0x306),
        0xe: _0xf04b4d(0x307),
        0xf: _0xf04b4d(0x308),
        0x10: 'p&#799;',
        0x11: _0xf04b4d(0x309),
        0x12: _0xf04b4d(0x30a),
        0x13: _0xf04b4d(0x30b),
        0x14: 't&#799;',
        0x15: 'u&#799;',
        0x16: _0xf04b4d(0x30c),
        0x17: 'w&#799;',
        0x18: 'x&#799;',
        0x19: _0xf04b4d(0x30d),
        0x1a: _0xf04b4d(0x30e),
        0x1b: _0xf04b4d(0x30f),
        0x1c: _0xf04b4d(0x310),
        0x1d: _0xf04b4d(0x311),
        0x1e: 'D&#799;',
        0x1f: _0xf04b4d(0x312),
        0x20: _0xf04b4d(0x313),
        0x21: _0xf04b4d(0x314),
        0x22: _0xf04b4d(0x315),
        0x23: 'I&#799;',
        0x24: _0xf04b4d(0x316),
        0x25: _0xf04b4d(0x317),
        0x26: _0xf04b4d(0x318),
        0x27: _0xf04b4d(0x319),
        0x28: _0xf04b4d(0x31a),
        0x29: _0xf04b4d(0x31b),
        0x2a: 'P&#799;',
        0x2b: _0xf04b4d(0x31c),
        0x2c: 'R&#799;',
        0x2d: _0xf04b4d(0x31d),
        0x2e: 'T&#799;',
        0x2f: _0xf04b4d(0x31e),
        0x30: _0xf04b4d(0x31f),
        0x31: _0xf04b4d(0x320),
        0x32: 'X&#799;',
        0x33: 'Y&#799;',
        0x34: _0xf04b4d(0x321),
        0x35: _0xf04b4d(0x322),
        0x36: _0xf04b4d(0x323),
        0x37: _0xf04b4d(0x324),
        0x38: _0xf04b4d(0x325),
        0x39: _0xf04b4d(0x326),
        0x3a: _0xf04b4d(0x327),
        0x3b: '7&#799;',
        0x3c: _0xf04b4d(0x328),
        0x3d: _0xf04b4d(0x329),
        0x3e: _0xf04b4d(0x32a)
    },
    's26': {
        0x1: _0xf04b4d(0x32b),
        0x2: _0xf04b4d(0x32c),
        0x3: _0xf04b4d(0x32d),
        0x4: _0xf04b4d(0x32e),
        0x5: _0xf04b4d(0x32f),
        0x6: _0xf04b4d(0x330),
        0x7: _0xf04b4d(0x331),
        0x8: _0xf04b4d(0x332),
        0x9: _0xf04b4d(0x333),
        0xa: _0xf04b4d(0x334),
        0xb: 'k&#846;',
        0xc: _0xf04b4d(0x335),
        0xd: 'm&#846;',
        0xe: 'n&#846;',
        0xf: _0xf04b4d(0x336),
        0x10: _0xf04b4d(0x337),
        0x11: _0xf04b4d(0x338),
        0x12: _0xf04b4d(0x339),
        0x13: _0xf04b4d(0x33a),
        0x14: 't&#846;',
        0x15: 'u&#846;',
        0x16: 'v&#846;',
        0x17: 'w&#846;',
        0x18: _0xf04b4d(0x33b),
        0x19: _0xf04b4d(0x33c),
        0x1a: _0xf04b4d(0x33d),
        0x1b: _0xf04b4d(0x33e),
        0x1c: 'B&#846;',
        0x1d: _0xf04b4d(0x33f),
        0x1e: _0xf04b4d(0x340),
        0x1f: _0xf04b4d(0x341),
        0x20: _0xf04b4d(0x342),
        0x21: 'G&#846;',
        0x22: _0xf04b4d(0x343),
        0x23: _0xf04b4d(0x344),
        0x24: _0xf04b4d(0x345),
        0x25: 'K&#846;',
        0x26: 'L&#846;',
        0x27: _0xf04b4d(0x346),
        0x28: _0xf04b4d(0x347),
        0x29: _0xf04b4d(0x348),
        0x2a: 'P&#846;',
        0x2b: 'Q&#846;',
        0x2c: _0xf04b4d(0x349),
        0x2d: _0xf04b4d(0x34a),
        0x2e: _0xf04b4d(0x34b),
        0x2f: _0xf04b4d(0x34c),
        0x30: _0xf04b4d(0x34d),
        0x31: 'W&#846;',
        0x32: _0xf04b4d(0x34e),
        0x33: _0xf04b4d(0x34f),
        0x34: _0xf04b4d(0x350),
        0x35: _0xf04b4d(0x351),
        0x36: _0xf04b4d(0x352),
        0x37: '3&#846;',
        0x38: '4&#846;',
        0x39: '5&#846;',
        0x3a: _0xf04b4d(0x353),
        0x3b: '7&#846;',
        0x3c: _0xf04b4d(0x354),
        0x3d: _0xf04b4d(0x355),
        0x3e: _0xf04b4d(0x356)
    },
    's27': {
        0x1: _0xf04b4d(0x357),
        0x2: _0xf04b4d(0x358),
        0x3: _0xf04b4d(0x359),
        0x4: _0xf04b4d(0x35a),
        0x5: _0xf04b4d(0x35b),
        0x6: _0xf04b4d(0x35c),
        0x7: _0xf04b4d(0x35d),
        0x8: _0xf04b4d(0x35e),
        0x9: _0xf04b4d(0x35f),
        0xa: _0xf04b4d(0x360),
        0xb: _0xf04b4d(0x361),
        0xc: _0xf04b4d(0x362),
        0xd: _0xf04b4d(0x363),
        0xe: _0xf04b4d(0x364),
        0xf: _0xf04b4d(0x365),
        0x10: 'p&#829;&#851;',
        0x11: 'q&#829;&#851;',
        0x12: _0xf04b4d(0x366),
        0x13: _0xf04b4d(0x367),
        0x14: _0xf04b4d(0x368),
        0x15: _0xf04b4d(0x369),
        0x16: _0xf04b4d(0x36a),
        0x17: _0xf04b4d(0x36b),
        0x18: _0xf04b4d(0x36c),
        0x19: _0xf04b4d(0x36d),
        0x1a: _0xf04b4d(0x36e),
        0x1b: 'A&#829;&#851;',
        0x1c: 'B&#829;&#851;',
        0x1d: 'C&#829;&#851;',
        0x1e: _0xf04b4d(0x36f),
        0x1f: _0xf04b4d(0x370),
        0x20: 'F&#829;&#851;',
        0x21: _0xf04b4d(0x371),
        0x22: _0xf04b4d(0x372),
        0x23: _0xf04b4d(0x373),
        0x24: _0xf04b4d(0x374),
        0x25: _0xf04b4d(0x375),
        0x26: _0xf04b4d(0x376),
        0x27: 'M&#829;&#851;',
        0x28: _0xf04b4d(0x377),
        0x29: _0xf04b4d(0x378),
        0x2a: _0xf04b4d(0x379),
        0x2b: 'Q&#829;&#851;',
        0x2c: _0xf04b4d(0x37a),
        0x2d: _0xf04b4d(0x37b),
        0x2e: _0xf04b4d(0x37c),
        0x2f: _0xf04b4d(0x37d),
        0x30: _0xf04b4d(0x37e),
        0x31: 'W&#829;&#851;',
        0x32: _0xf04b4d(0x37f),
        0x33: _0xf04b4d(0x380),
        0x34: 'Z&#829;&#851;',
        0x35: _0xf04b4d(0x381),
        0x36: _0xf04b4d(0x382),
        0x37: _0xf04b4d(0x383),
        0x38: _0xf04b4d(0x384),
        0x39: _0xf04b4d(0x385),
        0x3a: _0xf04b4d(0x386),
        0x3b: _0xf04b4d(0x387),
        0x3c: _0xf04b4d(0x388),
        0x3d: '9&#829;&#851;',
        0x3e: _0xf04b4d(0x389)
    },
    's29': {
        0x1: _0xf04b4d(0x38a),
        0x2: _0xf04b4d(0x38b),
        0x3: _0xf04b4d(0x38c),
        0x4: _0xf04b4d(0x38d),
        0x5: '&#120462;&#823;',
        0x6: _0xf04b4d(0x38e),
        0x7: '&#120464;&#823;',
        0x8: _0xf04b4d(0x38f),
        0x9: _0xf04b4d(0x390),
        0xa: _0xf04b4d(0x391),
        0xb: _0xf04b4d(0x392),
        0xc: '&#120469;&#823;',
        0xd: _0xf04b4d(0x393),
        0xe: _0xf04b4d(0x394),
        0xf: '&#120472;&#823;',
        0x10: _0xf04b4d(0x395),
        0x11: '&#120474;&#823;',
        0x12: _0xf04b4d(0x396),
        0x13: '&#120476;&#823;',
        0x14: _0xf04b4d(0x397),
        0x15: _0xf04b4d(0x398),
        0x16: _0xf04b4d(0x399),
        0x17: '&#120480;&#823;',
        0x18: _0xf04b4d(0x39a),
        0x19: _0xf04b4d(0x39b),
        0x1a: _0xf04b4d(0x39c),
        0x1b: _0xf04b4d(0x39d),
        0x1c: '&#120433;&#823;',
        0x1d: _0xf04b4d(0x39e),
        0x1e: _0xf04b4d(0x39f),
        0x1f: '&#120436;&#823;',
        0x20: _0xf04b4d(0x3a0),
        0x21: _0xf04b4d(0x3a1),
        0x22: _0xf04b4d(0x3a2),
        0x23: _0xf04b4d(0x3a3),
        0x24: _0xf04b4d(0x3a4),
        0x25: _0xf04b4d(0x3a5),
        0x26: _0xf04b4d(0x3a6),
        0x27: '&#120444;&#823;',
        0x28: _0xf04b4d(0x3a7),
        0x29: _0xf04b4d(0x3a8),
        0x2a: _0xf04b4d(0x3a9),
        0x2b: _0xf04b4d(0x3aa),
        0x2c: _0xf04b4d(0x3ab),
        0x2d: _0xf04b4d(0x3ac),
        0x2e: _0xf04b4d(0x3ad),
        0x2f: _0xf04b4d(0x3ae),
        0x30: _0xf04b4d(0x3af),
        0x31: '&#120454;&#823;',
        0x32: _0xf04b4d(0x3b0),
        0x33: _0xf04b4d(0x3b1),
        0x34: _0xf04b4d(0x3b2),
        0x35: _0xf04b4d(0x3b3),
        0x36: '&#120824;&#823;',
        0x37: _0xf04b4d(0x3b4),
        0x38: _0xf04b4d(0x3b5),
        0x39: _0xf04b4d(0x3b6),
        0x3a: _0xf04b4d(0x3b7),
        0x3b: '&#120829;&#823;',
        0x3c: '&#120830;&#823;',
        0x3d: '&#120831;&#823;',
        0x3e: _0xf04b4d(0x3b8)
    },
    's30': {
        0x1: _0xf04b4d(0x3b9),
        0x2: _0xf04b4d(0x3ba),
        0x3: 'c&#866;',
        0x4: _0xf04b4d(0x3bb),
        0x5: 'e&#866;',
        0x6: 'f&#866;',
        0x7: 'g&#866;',
        0x8: _0xf04b4d(0x3bc),
        0x9: _0xf04b4d(0x3bd),
        0xa: _0xf04b4d(0x3be),
        0xb: 'k&#866;',
        0xc: _0xf04b4d(0x3bf),
        0xd: _0xf04b4d(0x3c0),
        0xe: _0xf04b4d(0x3c1),
        0xf: _0xf04b4d(0x3c2),
        0x10: _0xf04b4d(0x3c3),
        0x11: _0xf04b4d(0x3c4),
        0x12: _0xf04b4d(0x3c5),
        0x13: _0xf04b4d(0x3c6),
        0x14: _0xf04b4d(0x3c7),
        0x15: _0xf04b4d(0x3c8),
        0x16: 'v&#866;',
        0x17: _0xf04b4d(0x3c9),
        0x18: _0xf04b4d(0x3ca),
        0x19: _0xf04b4d(0x3cb),
        0x1a: _0xf04b4d(0x3cc),
        0x1b: 'A&#866;',
        0x1c: _0xf04b4d(0x3cd),
        0x1d: 'C&#866;',
        0x1e: _0xf04b4d(0x3ce),
        0x1f: 'E&#866;',
        0x20: _0xf04b4d(0x3cf),
        0x21: _0xf04b4d(0x3d0),
        0x22: 'H&#866;',
        0x23: _0xf04b4d(0x3d1),
        0x24: _0xf04b4d(0x3d2),
        0x25: _0xf04b4d(0x3d3),
        0x26: 'L&#866;',
        0x27: 'M&#866;',
        0x28: _0xf04b4d(0x3d4),
        0x29: 'O&#866;',
        0x2a: _0xf04b4d(0x3d5),
        0x2b: _0xf04b4d(0x3d6),
        0x2c: _0xf04b4d(0x3d7),
        0x2d: _0xf04b4d(0x3d8),
        0x2e: _0xf04b4d(0x3d9),
        0x2f: _0xf04b4d(0x3da),
        0x30: _0xf04b4d(0x3db),
        0x31: _0xf04b4d(0x3dc),
        0x32: _0xf04b4d(0x3dd),
        0x33: 'Y&#866;',
        0x34: _0xf04b4d(0x3de),
        0x35: '1&#866;',
        0x36: _0xf04b4d(0x3df),
        0x37: '3&#866;',
        0x38: _0xf04b4d(0x3e0),
        0x39: _0xf04b4d(0x3e1),
        0x3a: _0xf04b4d(0x3e2),
        0x3b: _0xf04b4d(0x3e3),
        0x3c: _0xf04b4d(0x3e4),
        0x3d: '9&#866;',
        0x3e: _0xf04b4d(0x3e5)
    },
    's31': {
        0x1: 'a&#828;',
        0x2: 'b&#828;',
        0x3: _0xf04b4d(0x3e6),
        0x4: _0xf04b4d(0x3e7),
        0x5: _0xf04b4d(0x3e8),
        0x6: _0xf04b4d(0x3e9),
        0x7: _0xf04b4d(0x3ea),
        0x8: _0xf04b4d(0x3eb),
        0x9: _0xf04b4d(0x3ec),
        0xa: _0xf04b4d(0x3ed),
        0xb: _0xf04b4d(0x3ee),
        0xc: _0xf04b4d(0x3ef),
        0xd: 'm&#828;',
        0xe: _0xf04b4d(0x3f0),
        0xf: _0xf04b4d(0x3f1),
        0x10: _0xf04b4d(0x3f2),
        0x11: _0xf04b4d(0x3f3),
        0x12: 'r&#828;',
        0x13: 's&#828;',
        0x14: 't&#828;',
        0x15: 'u&#828;',
        0x16: 'v&#828;',
        0x17: _0xf04b4d(0x3f4),
        0x18: _0xf04b4d(0x3f5),
        0x19: _0xf04b4d(0x3f6),
        0x1a: _0xf04b4d(0x3f7),
        0x1b: _0xf04b4d(0x3f8),
        0x1c: 'B&#828;',
        0x1d: _0xf04b4d(0x3f9),
        0x1e: _0xf04b4d(0x3fa),
        0x1f: _0xf04b4d(0x3fb),
        0x20: _0xf04b4d(0x3fc),
        0x21: _0xf04b4d(0x3fd),
        0x22: _0xf04b4d(0x3fe),
        0x23: _0xf04b4d(0x3ff),
        0x24: 'J&#828;',
        0x25: 'K&#828;',
        0x26: _0xf04b4d(0x400),
        0x27: _0xf04b4d(0x401),
        0x28: _0xf04b4d(0x402),
        0x29: _0xf04b4d(0x403),
        0x2a: _0xf04b4d(0x404),
        0x2b: 'Q&#828;',
        0x2c: _0xf04b4d(0x405),
        0x2d: _0xf04b4d(0x406),
        0x2e: _0xf04b4d(0x407),
        0x2f: 'U&#828;',
        0x30: _0xf04b4d(0x408),
        0x31: _0xf04b4d(0x409),
        0x32: _0xf04b4d(0x40a),
        0x33: _0xf04b4d(0x40b),
        0x34: _0xf04b4d(0x40c),
        0x35: '1&#828;',
        0x36: _0xf04b4d(0x40d),
        0x37: '3&#828;',
        0x38: _0xf04b4d(0x40e),
        0x39: _0xf04b4d(0x40f),
        0x3a: _0xf04b4d(0x410),
        0x3b: _0xf04b4d(0x411),
        0x3c: _0xf04b4d(0x412),
        0x3d: _0xf04b4d(0x413),
        0x3e: _0xf04b4d(0x414)
    }
};

function Change(_0x34a79c, _0x1b9191) {
    var _0x1b74fd = _0xf04b4d,
        _0x2023c9 = '',
        _0x34a79c = _0x34a79c;
    if (_0x34a79c['length'] == 0x0) return;
    for (i = 0x0; i < _0x34a79c[_0x1b74fd(0x37)]; i++) {
        var _0x5be556 = _0x34a79c[_0x1b74fd(0x415)](i),
            _0x1b8b0b = normal[_0x1b74fd(0x416)](_0x5be556) + 0x1;
        if (_0x5be556 == '\x20') _0x2023c9 += '\x20';
        else !_0x1b8b0b ? _0x2023c9 += _0x5be556 : _0x2023c9 += newtext[_0x1b9191][_0x1b8b0b];
    }
    return _0x2023c9;
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
    var _0x47a12f = _0xf04b4d;
    this[_0x47a12f(0x4)] = {
        'flip': {
            'init': function() {
                var _0x219d56 = _0x47a12f;
                for (i in this[_0x219d56(0x34)]) this['map'][this[_0x219d56(0x34)][i]] = i;
            },
            'encode': function(_0x5ed990) {
                var _0x408831 = _0x47a12f;
                for (var _0x2eacbf, _0x29f70d = [], _0x1ef03e = 0x0, _0x43e820 = _0x5ed990[_0x408831(0x37)]; _0x43e820 > _0x1ef03e; _0x1ef03e++) _0x2eacbf = _0x5ed990[_0x408831(0x415)](_0x1ef03e), _0x1ef03e > 0x0 && ('̤' == _0x2eacbf || '̗' == _0x2eacbf || '̖' == _0x2eacbf || '̮' == _0x2eacbf) ? (_0x2eacbf = this[_0x408831(0x34)][_0x5ed990['charAt'](_0x1ef03e - 0x1) + _0x2eacbf], _0x29f70d['pop']()) : (_0x2eacbf = this[_0x408831(0x34)][_0x2eacbf], 'undefined' == typeof _0x2eacbf && (_0x2eacbf = _0x5ed990[_0x408831(0x415)](_0x1ef03e))), _0x29f70d['push'](_0x2eacbf);
                return _0x29f70d[_0x408831(0x417)]()[_0x408831(0xa)]('');
            },
            'decode': function(_0x8c6636) {
                var _0x31606b = _0x47a12f;
                for (var _0x2d6fe9, _0x534c9e = [], _0x1a01bd = 0x0, _0x327774 = _0x8c6636[_0x31606b(0x37)]; _0x327774 > _0x1a01bd; _0x1a01bd++) _0x2d6fe9 = _0x8c6636[_0x31606b(0x415)](_0x1a01bd), _0x1a01bd > 0x0 && ('̤' == _0x2d6fe9 || '̗' == _0x2d6fe9 || '̖' == _0x2d6fe9 || '̮' == _0x2d6fe9) ? (_0x2d6fe9 = this[_0x31606b(0x34)][_0x8c6636[_0x31606b(0x415)](_0x1a01bd - 0x1) + _0x2d6fe9], _0x534c9e[_0x31606b(0x418)]()) : (_0x2d6fe9 = this[_0x31606b(0x34)][_0x2d6fe9], 'undefined' == typeof _0x2d6fe9 && (_0x2d6fe9 = _0x8c6636[_0x31606b(0x415)](_0x1a01bd))), _0x534c9e[_0x31606b(0x36)](_0x2d6fe9);
                return _0x534c9e[_0x31606b(0x417)]()[_0x31606b(0xa)]('');
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
                var _0x168831 = _0x47a12f;
                for (i in this[_0x168831(0x34)]) this[_0x168831(0x34)][this[_0x168831(0x34)][i]] = i;
            },
            'encode': function(_0x1a9c1a) {
                var _0x57e854 = _0x47a12f;
                for (var _0x2893d8, _0x439f68 = [], _0x56efbf = [], _0x6c2635 = 0x0, _0x3999af = _0x1a9c1a['length']; _0x3999af > _0x6c2635; _0x6c2635++) _0x2893d8 = _0x1a9c1a[_0x57e854(0x415)](_0x6c2635), _0x6c2635 > 0x0 && ('̈' == _0x2893d8 || '̀' == _0x2893d8 || '́' == _0x2893d8 || '̂' == _0x2893d8) ? (_0x2893d8 = this[_0x57e854(0x34)][_0x1a9c1a[_0x57e854(0x415)](_0x6c2635 - 0x1) + _0x2893d8], _0x439f68['pop']()) : (_0x2893d8 = this[_0x57e854(0x34)][_0x2893d8], _0x57e854(0x419) == typeof _0x2893d8 && (_0x2893d8 = _0x1a9c1a[_0x57e854(0x415)](_0x6c2635))), '\x0a' == _0x2893d8 ? (_0x56efbf[_0x57e854(0x36)](_0x439f68['reverse']()['join']('')), _0x439f68 = []) : _0x439f68[_0x57e854(0x36)](_0x2893d8);
                return _0x56efbf[_0x57e854(0x36)](_0x439f68[_0x57e854(0x417)]()[_0x57e854(0xa)]('')), _0x56efbf[_0x57e854(0xa)]('\x0a');
            },
            'decode': function(_0x2c00ff) {
                var _0x5508a8 = _0x47a12f;
                for (var _0x229b1b, _0x5c6cb2 = [], _0x368430 = [], _0x4edf2f = 0x0, _0x1e4da8 = _0x2c00ff[_0x5508a8(0x37)]; _0x1e4da8 > _0x4edf2f; _0x4edf2f++) _0x229b1b = _0x2c00ff['charAt'](_0x4edf2f), _0x4edf2f > 0x0 && ('̈' == _0x229b1b || '̀' == _0x229b1b || '́' == _0x229b1b || '̂' == _0x229b1b) ? (_0x229b1b = this['map'][_0x2c00ff[_0x5508a8(0x415)](_0x4edf2f - 0x1) + _0x229b1b], _0x5c6cb2[_0x5508a8(0x418)]()) : (_0x229b1b = this[_0x5508a8(0x34)][_0x229b1b], _0x5508a8(0x419) == typeof _0x229b1b && (_0x229b1b = _0x2c00ff[_0x5508a8(0x415)](_0x4edf2f))), '\x0a' == _0x229b1b ? (_0x368430[_0x5508a8(0x36)](_0x5c6cb2[_0x5508a8(0x417)]()[_0x5508a8(0xa)]('')), _0x5c6cb2 = []) : _0x5c6cb2[_0x5508a8(0x36)](_0x229b1b);
                return _0x368430[_0x5508a8(0x36)](_0x5c6cb2[_0x5508a8(0x417)]()[_0x5508a8(0xa)]('')), _0x368430[_0x5508a8(0xa)]('\x0a');
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
                var _0x1f7cb7 = _0x47a12f;
                for (var _0xd24f8e = 0x300; 0x315 >= _0xd24f8e; _0xd24f8e++) this['diacriticsTop'][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](_0xd24f8e));
                for (var _0xd24f8e = 0x316; 0x333 >= _0xd24f8e; _0xd24f8e++) 0x31a != _0xd24f8e && 0x31b != _0xd24f8e && this[_0x1f7cb7(0x41b)]['push'](String[_0x1f7cb7(0x41a)](_0xd24f8e));
                this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x31a)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x31b));
                for (var _0xd24f8e = 0x334; 0x338 >= _0xd24f8e; _0xd24f8e++) this[_0x1f7cb7(0x41d)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](_0xd24f8e));
                for (var _0xd24f8e = 0x339; 0x33c >= _0xd24f8e; _0xd24f8e++) this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String['fromCharCode'](_0xd24f8e));
                for (var _0xd24f8e = 0x33d; 0x344 >= _0xd24f8e; _0xd24f8e++) this[_0x1f7cb7(0x41c)]['push'](String[_0x1f7cb7(0x41a)](_0xd24f8e));
                this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x344)), this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x345)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x346)), this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x347)), this['diacriticsBottom'][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x348)), this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x349)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x34a)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x34b)), this['diacriticsTop'][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x34c)), this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x34d)), this[_0x1f7cb7(0x41b)]['push'](String[_0x1f7cb7(0x41a)](0x34e)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x350)), this['diacriticsTop']['push'](String[_0x1f7cb7(0x41a)](0x351)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x352)), this['diacriticsBottom']['push'](String[_0x1f7cb7(0x41a)](0x353)), this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String['fromCharCode'](0x354)), this['diacriticsBottom'][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x355)), this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String['fromCharCode'](0x356)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x357)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String['fromCharCode'](0x358)), this['diacriticsBottom'][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x359)), this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x35a)), this['diacriticsTop'][_0x1f7cb7(0x36)](String['fromCharCode'](0x35b)), this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String['fromCharCode'](0x35c)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String[_0x1f7cb7(0x41a)](0x35d)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String['fromCharCode'](0x35d)), this[_0x1f7cb7(0x41b)][_0x1f7cb7(0x36)](String['fromCharCode'](0x35f)), this[_0x1f7cb7(0x41c)][_0x1f7cb7(0x36)](String['fromCharCode'](0x360)), this[_0x1f7cb7(0x41c)]['push'](String[_0x1f7cb7(0x41a)](0x361));
            },
            'encode': function(_0x1cb1d4) {
                var _0x1e84e8 = _0x47a12f,
                    _0x57e6c5, _0x5880dc = '';
                for (i in _0x1cb1d4) {
                    if (_0x57e6c5 = _0x1cb1d4[i], this[_0x1e84e8(0x6)][_0x1e84e8(0x41e)] && (_0x57e6c5 += this['diacriticsMiddle'][Math[_0x1e84e8(0x3a)](Math[_0x1e84e8(0x7)]() * this[_0x1e84e8(0x41d)][_0x1e84e8(0x37)])]), this['options']['top']) {
                        for (var _0x5cba31 = this[_0x1e84e8(0x41c)][_0x1e84e8(0x37)] - 0x1, _0x1cb90c = 0x0, _0x299f7a = this['options'][_0x1e84e8(0x41f)] - Math[_0x1e84e8(0x7)]() * (this[_0x1e84e8(0x6)][_0x1e84e8(0x420)] / 0x64 * this[_0x1e84e8(0x6)][_0x1e84e8(0x41f)]); _0x299f7a > _0x1cb90c; _0x1cb90c++) _0x57e6c5 += this[_0x1e84e8(0x41c)][Math[_0x1e84e8(0x3a)](Math[_0x1e84e8(0x7)]() * _0x5cba31)];
                    }
                    if (this[_0x1e84e8(0x6)][_0x1e84e8(0x421)]) {
                        for (var _0x28f9b9 = this['diacriticsBottom']['length'] - 0x1, _0x1cb90c = 0x0, _0x299f7a = this[_0x1e84e8(0x6)]['maxHeight'] - Math[_0x1e84e8(0x7)]() * (this[_0x1e84e8(0x6)][_0x1e84e8(0x420)] / 0x64 * this[_0x1e84e8(0x6)][_0x1e84e8(0x41f)]); _0x299f7a > _0x1cb90c; _0x1cb90c++) _0x57e6c5 += this[_0x1e84e8(0x41b)][Math[_0x1e84e8(0x3a)](Math[_0x1e84e8(0x7)]() * _0x28f9b9)];
                    }
                    _0x5880dc += _0x57e6c5;
                }
                return _0x5880dc;
            },
            'decode': function(_0x1a0c45) {
                var _0x43488d = _0x47a12f,
                    _0x2c3af2, _0x5869da = '';
                for (i in _0x1a0c45) _0x2c3af2 = _0x1a0c45[i][_0x43488d(0x422)](0x0), (0x300 > _0x2c3af2 || _0x2c3af2 > 0x361) && (_0x5869da += _0x1a0c45[i]);
                return _0x5869da;
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
                var _0x51ad65 = _0x47a12f;
                for (var _0x38ce47 = 0x31; 0x39 >= _0x38ce47; _0x38ce47++) this[_0x51ad65(0x34)][String['fromCharCode'](_0x38ce47)] = String[_0x51ad65(0x41a)](_0x38ce47 + 0x242f);
                this[_0x51ad65(0x34)][0x0] = '⓪';
                for (var _0x38ce47 = 0x41; 0x5a >= _0x38ce47; _0x38ce47++) this[_0x51ad65(0x34)][String['fromCharCode'](_0x38ce47)] = String['fromCharCode'](_0x38ce47 + 0x2475);
                for (var _0x38ce47 = 0x61; 0x7a >= _0x38ce47; _0x38ce47++) this[_0x51ad65(0x34)][String['fromCharCode'](_0x38ce47)] = String[_0x51ad65(0x41a)](_0x38ce47 + 0x246f);
                for (_0x38ce47 in this[_0x51ad65(0x34)]) this[_0x51ad65(0x423)][this[_0x51ad65(0x34)][_0x38ce47]] = _0x38ce47;
            },
            'encode': function(_0x4ffbff) {
                var _0x155bd4 = _0x47a12f,
                    _0x5094bf, _0x20987b = '',
                    _0x187ad5 = !0x0;
                for (i in _0x4ffbff) _0x5094bf = this[_0x155bd4(0x34)][_0x4ffbff[i]], _0x155bd4(0x419) == typeof _0x5094bf && (_0x4ffbff[i]['charCodeAt'](0x0) >= 0x21 ? (_0x5094bf = _0x4ffbff[i] + String['fromCharCode'](0x20dd), _0x187ad5 || (_0x5094bf = String[_0x155bd4(0x41a)](0x202f) + String[_0x155bd4(0x41a)](0xa0) + String['fromCharCode'](0xa0) + String[_0x155bd4(0x41a)](0x202f) + _0x5094bf)) : _0x5094bf = _0x4ffbff[i]), _0x20987b += _0x5094bf, _0x187ad5 = '\x0a' == _0x5094bf;
                return _0x20987b;
            },
            'decode': function(_0x7ee6db) {
                var _0x395d98 = _0x47a12f,
                    _0x56101c, _0xcc8bee = '',
                    _0x56ac10 = '';
                for (i in _0x7ee6db) _0x56101c = this[_0x395d98(0x423)][_0x7ee6db[i]], _0xcc8bee += _0x395d98(0x419) == typeof _0x56101c ? _0x7ee6db[i] : _0x56101c;
                for (i in _0xcc8bee) _0x56101c = _0xcc8bee[i]['charCodeAt'](0x0), 0xa0 != _0x56101c && 0x202f != _0x56101c && 0x20dd != _0x56101c && (_0x56ac10 += _0xcc8bee[i]);
                return _0x56ac10;
            },
            'map': {},
            'mapInverse': {}
        },
        'squares': {
            'init': function() {},
            'encode': function(_0x52878d) {
                var _0x2064f7 = _0x47a12f,
                    _0x3ef84f, _0xdecdcf = '',
                    _0x4a3ba5 = !0x0;
                for (i in _0x52878d) _0x52878d[i][_0x2064f7(0x422)](0x0) >= 0x21 ? (_0x3ef84f = _0x52878d[i] + String[_0x2064f7(0x41a)](0x20de), _0x4a3ba5 || (_0x3ef84f = String[_0x2064f7(0x41a)](0x202f) + String[_0x2064f7(0x41a)](0xa0) + String[_0x2064f7(0x41a)](0xa0) + String['fromCharCode'](0x202f) + _0x3ef84f)) : _0x3ef84f = _0x52878d[i], _0xdecdcf += _0x3ef84f, _0x4a3ba5 = '\x0a' == _0x3ef84f;
                return _0xdecdcf;
            },
            'decode': function(_0x181e31) {
                var _0x406e27 = _0x47a12f,
                    _0x277861, _0x18f73c = '';
                for (i in _0x181e31) _0x277861 = _0x181e31[i][_0x406e27(0x422)](0x0), 0xa0 != _0x277861 && 0x202f != _0x277861 && 0x20de != _0x277861 && (_0x18f73c += _0x181e31[i]);
                return _0x18f73c;
            }
        },
        'roundsquares': {
            'init': function() {},
            'encode': function(_0x12342b) {
                var _0x10b4f8 = _0x47a12f,
                    _0x35ba59, _0x530b58 = '',
                    _0x2424fc = !0x0;
                for (i in _0x12342b) _0x12342b[i][_0x10b4f8(0x422)](0x0) >= 0x21 ? (_0x35ba59 = _0x12342b[i] + String['fromCharCode'](0x20e3), _0x2424fc || (_0x35ba59 = String[_0x10b4f8(0x41a)](0xa0) + String[_0x10b4f8(0x41a)](0xa0) + String['fromCharCode'](0xa0) + _0x35ba59)) : _0x35ba59 = _0x12342b[i], _0x530b58 += _0x35ba59, _0x2424fc = '\x0a' == _0x35ba59;
                return _0x530b58;
            },
            'decode': function(_0xf92731) {
                var _0x37a395 = _0x47a12f,
                    _0x5c31f1, _0x44f369 = '';
                for (i in _0xf92731) _0x5c31f1 = _0xf92731[i][_0x37a395(0x422)](0x0), 0xa0 != _0x5c31f1 && 0x202f != _0x5c31f1 && 0x20e3 != _0x5c31f1 && (_0x44f369 += _0xf92731[i]);
                return _0x44f369;
            }
        },
        'bent': {
            'init': function() {
                var _0xb9013b = _0x47a12f;
                for (i in this[_0xb9013b(0x34)]) this[_0xb9013b(0x34)][this[_0xb9013b(0x34)][i]] = i;
            },
            'encode': function(_0x444048) {
                var _0x22936c = _0x47a12f;
                for (var _0x3cf787, _0x2e6370 = '', _0x53ff5e = 0x0, _0x5e1d5a = _0x444048[_0x22936c(0x37)]; _0x5e1d5a > _0x53ff5e; _0x53ff5e++) _0x3cf787 = this[_0x22936c(0x34)][_0x444048[_0x22936c(0x415)](_0x53ff5e)], _0x22936c(0x419) == typeof _0x3cf787 && (_0x3cf787 = _0x444048[_0x22936c(0x415)](_0x53ff5e)), _0x2e6370 += _0x3cf787;
                return _0x2e6370;
            },
            'decode': function(_0x43a63b) {
                var _0x4b2445 = _0x47a12f;
                for (var _0x1d41cc, _0x58f73a = '', _0x5efbc6 = 0x0, _0x95e8ba = _0x43a63b[_0x4b2445(0x37)]; _0x95e8ba > _0x5efbc6; _0x5efbc6++) _0x1d41cc = this['map'][_0x43a63b['charAt'](_0x5efbc6)], _0x4b2445(0x419) == typeof _0x1d41cc && (_0x1d41cc = _0x43a63b['charAt'](_0x5efbc6)), _0x58f73a += _0x1d41cc;
                return _0x58f73a;
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
                0x1: _0x47a12f(0x424),
                0x2: 'ϩ',
                0x3: 'Ӡ',
                0x4: '५',
                0x5: 'Ƽ',
                0x6: 'Ϭ',
                0x7: '7',
                0x8: '������',
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
                var _0x3edc76 = _0x47a12f;
                for (i in this[_0x3edc76(0x34)]) this[_0x3edc76(0x34)][this['map'][i]] = i;
            },
            'encode': function(_0x47d3b2) {
                var _0xd64166 = _0x47a12f,
                    _0x616408, _0x403269 = '';
                _0x47d3b2 = _0x47d3b2[_0xd64166(0x425)]();
                for (var _0x3ee00a = 0x0, _0x26ae88 = _0x47d3b2[_0xd64166(0x37)]; _0x26ae88 > _0x3ee00a; _0x3ee00a++) _0x616408 = this[_0xd64166(0x34)][_0x47d3b2['charAt'](_0x3ee00a)], _0xd64166(0x419) == typeof _0x616408 && (_0x616408 = _0x47d3b2[_0xd64166(0x415)](_0x3ee00a)), _0x403269 += _0x616408;
                return _0x403269;
            },
            'decode': function(_0x26b0f9) {
                var _0x211c47 = _0x47a12f;
                for (var _0x3fc554, _0x1d24ee = '', _0x4352c4 = 0x0, _0x28df1b = _0x26b0f9[_0x211c47(0x37)]; _0x28df1b > _0x4352c4; _0x4352c4++) _0x3fc554 = this[_0x211c47(0x34)][_0x26b0f9[_0x211c47(0x415)](_0x4352c4)], _0x211c47(0x419) == typeof _0x3fc554 && (_0x3fc554 = _0x26b0f9[_0x211c47(0x415)](_0x4352c4)), _0x1d24ee += _0x3fc554;
                return _0x1d24ee;
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
    for (i in this['tools']) this[_0x47a12f(0x4)][i][_0x47a12f(0x426)]();
    this[_0x47a12f(0x427)] = function(_0x36ce6e) {
        var _0x47f622 = _0x47a12f;
        for (var _0x6917d5, _0x1ec013 = '', _0x14375c = !0x0, _0x4cd350 = 0x0, _0x410f2c = 0x0, _0x3463ac = 0x0, _0x96b0b = _0x36ce6e[_0x47f622(0x37)]; _0x96b0b > _0x3463ac; _0x3463ac++) _0x6917d5 = _0x36ce6e[_0x47f622(0x422)](_0x3463ac), 0xa == _0x6917d5 || 0xd == _0x6917d5 ? (_0x1ec013 += _0x47f622(0x428), _0x14375c = !0x0) : 0x20 == _0x6917d5 ? _0x14375c ? (_0x1ec013 += '\x20', _0x14375c = !0x1) : (_0x1ec013 += '\x20', _0x14375c = !0x0) : (_0x6917d5 >= 0xd800 && 0xdbff >= _0x6917d5 ? (_0x4cd350 = _0x6917d5, _0x410f2c = 0x0) : _0x4cd350 > 0x0 ? (_0x6917d5 >= 0xdc00 && 0xdfff >= _0x6917d5 && (_0x410f2c = 0x400 * (_0x4cd350 - 0xd800) + (_0x6917d5 - 0xdc00) + 0x10000), _0x4cd350 = 0x0) : _0x410f2c = _0x6917d5, 0x0 != _0x410f2c && (_0x1ec013 += _0x47f622(0x429) + _0x410f2c[_0x47f622(0x42a)](0x10) + ';', _0x14375c = !0x0));
        return _0x1ec013;
    };
}

function cuteText(_0x5c6ae6) {
    var _0x4c6d45 = _0xf04b4d;
    if (_0x5c6ae6[_0x4c6d45(0x42b)]() === '') return '';
    qi = -0x1;
    var _0x29d799 = boundingString(Math[_0x4c6d45(0x3a)](Math[_0x4c6d45(0x7)]() * 0x2) + 0x1);
    return _0x29d799 + _0x4c6d45(0x42c) + _0x5c6ae6[_0x4c6d45(0x2)](/([!?.]+)/gi)['map'](cuteSentence)[_0x4c6d45(0xa)]('') + _0x4c6d45(0x42c) + esrever['reverse'](_0x29d799);
}

function cuteSentence(_0x273a84) {
    var _0x47f66b = _0xf04b4d;
    return _0x273a84[_0x47f66b(0x2)](/([\s,]+)/gi)[_0x47f66b(0x34)](cuteWord)[_0x47f66b(0xa)]('');
}

function cuteWord(_0xa3f2e1) {
    var _0x193899 = _0xf04b4d;
    if (_0xa3f2e1 === '' || /[[!?.\s,]+]/gi [_0x193899(0x42d)](_0xa3f2e1)) return _0xa3f2e1;
    return _0xa3f2e1 = roundReplace(_0xa3f2e1), _0xa3f2e1 = punctReplace(_0xa3f2e1), _0xa3f2e1 = emojiReplace(_0xa3f2e1), scriptify(_0xa3f2e1);
}
var qi = -0x1,
    qa = ['❝', '❞'];

function quotes() {
    qi++;
    if (qi === 0x2) qi = 0x0;
    return qa[qi];
}

function punctReplace(_0x264018) {
    var _0x3a4e7b = _0xf04b4d;
    return _0x264018[_0x3a4e7b(0x2)]('')[_0x3a4e7b(0x34)](function(_0x8e87fa) {
        if (_0x8e87fa === '!') return randomElement(['❣', '❢']);
        else {
            if (_0x8e87fa === '?') return randomElement(['¿', '?']);
            else {
                if (_0x8e87fa === '\x22') return quotes();
                else return _0x8e87fa;
            }
        }
    })[_0x3a4e7b(0xa)]('');
}

function emojiReplace(_0x2d630b) {
    var _0x4130c2 = _0xf04b4d;
    return _0x2d630b[_0x4130c2(0x38)](':)', randomElement(emoji[':)']))['replace']('(:', randomElement(emoji[':)']))[_0x4130c2(0x38)]('^^', randomElement(emoji['^^']))[_0x4130c2(0x38)](':P', randomElement(emoji[':p']))[_0x4130c2(0x38)](':p', randomElement(emoji[':p']))[_0x4130c2(0x38)](':D', randomElement(emoji[':D']))[_0x4130c2(0x38)]('<3', randomElement(emoji['<3']))[_0x4130c2(0x38)](_0x4130c2(0x42e), randomElement(emoji[_0x4130c2(0x42e)]))[_0x4130c2(0x38)]('(Y)', randomElement(emoji['(y)']));
}

function roundReplace(_0x4a3825) {
    var _0x50b412 = _0xf04b4d;
    return _0x4a3825['split']('')[_0x50b412(0x34)](function(_0x59d94d) {
        var _0x566149 = _0x50b412;
        return _0x59d94d[_0x566149(0x3)]() === 'o' || _0x59d94d === '0' ? randomElement(round) : _0x59d94d;
    })[_0x50b412(0xa)]('');
}
var emoji = {
        ':)': ['٩(˘◡˘)۶', _0xf04b4d(0xa0), _0xf04b4d(0x42f), '❀◕‿◕❀', _0xf04b4d(0x430), _0xf04b4d(0x431), _0xf04b4d(0x432), '😍', 'ツ', _0xf04b4d(0x9d), _0xf04b4d(0x433), '(づ｡◕‿‿◕｡)づ', _0xf04b4d(0x434), 's(^‿^)-b', _0xf04b4d(0x435), _0xf04b4d(0x436), _0xf04b4d(0x437)],
        '^^': [_0xf04b4d(0x438), _0xf04b4d(0x9f), _0xf04b4d(0x439), 'ᵔᴥᵔ', '(≧◡≦)', '^ㅅ^', _0xf04b4d(0x43a), _0xf04b4d(0x43b), _0xf04b4d(0x43c), _0xf04b4d(0x43d), ''],
        ':p': [':Þ', ''],
        ':D': [_0xf04b4d(0x43e), _0xf04b4d(0x43f), _0xf04b4d(0x440)],
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
    flourish = [_0xf04b4d(0x441), _0xf04b4d(0x442), _0xf04b4d(0x443), _0xf04b4d(0x444), _0xf04b4d(0x445), '×º°”˜`”°º×\x20', _0xf04b4d(0x446), ']|I{•------»\x20', _0xf04b4d(0x447), _0xf04b4d(0x448), _0xf04b4d(0x449), _0xf04b4d(0x44a), _0xf04b4d(0x44b), _0xf04b4d(0x44c), '•._.••´¯``•.¸¸.•`\x20', '¸„.-•~¹°”ˆ˜¨\x20', _0xf04b4d(0x44d), _0xf04b4d(0x44e), _0xf04b4d(0x44f), _0xf04b4d(0x450), '¸,ø¤º°`°º¤ø,¸\x20', '.o0×X×0o.\x20', _0xf04b4d(0x451), _0xf04b4d(0x452), _0xf04b4d(0x453), '¤¸¸.•´¯`•¸¸.•..>>\x20', '••.•´¯`•.••\x20', '.•°¤*(¯`★´¯)*¤°\x20', '๑۞๑,¸¸,ø¤º°`°๑۩\x20', '-漫~*\x27¨¯¨\x27*·舞~\x20', _0xf04b4d(0x454), '▁\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20', _0xf04b4d(0x455), '▌│█║▌║▌║\x20'];

function boundingString(_0x15fb7a) {
    return randomElement([foodString, twinkleString, animalString, flourishString])(_0x15fb7a);
}

function foodString(_0x8ff4c7) {
    var _0x522dc4 = _0xf04b4d;
    return new Array(_0x8ff4c7 + 0x1)[_0x522dc4(0xa)]('0')[_0x522dc4(0x2)]('')[_0x522dc4(0x34)](function(_0x1118ac) {
        return randomElement(food);
    })[_0x522dc4(0xa)](_0x522dc4(0x456));
}

function twinkleString(_0x5c7798) {
    var _0x248df5 = _0xf04b4d;
    return new Array(_0x5c7798 + 0x1)[_0x248df5(0xa)]('0')[_0x248df5(0x2)]('')[_0x248df5(0x34)](function() {
        return randomElement(twinkles);
    })[_0x248df5(0xa)]('');
}

function animalString(_0x2c4eb5) {
    var _0x2b8851 = _0xf04b4d;
    return new Array(_0x2c4eb5 + 0x1)[_0x2b8851(0xa)]('0')[_0x2b8851(0x2)]('')['map'](function(_0x299d41) {
        return randomElement(animals);
    })[_0x2b8851(0xa)]('\x20⋆\x20');
}

function flourishString(_0x2fb7f9) {
    return randomElement(flourish);
}

function scriptify(_0xe27c01) {
    var _0x1916f7 = _0xf04b4d,
        _0x54c825 = {
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
        _0x357e8c = _0xe27c01['split']('');
    for (var _0x415286 = 0x0; _0x415286 < _0x357e8c['length']; _0x415286++) {
        _0x54c825[_0x357e8c[_0x415286]['toLowerCase']()] && (_0x357e8c[_0x415286] = _0x54c825[_0x357e8c[_0x415286]]);
    }
    return _0xe27c01 = _0x357e8c[_0x1916f7(0xa)](''), _0xe27c01;
}

function _0x5318() {
    var _0x46bad3 = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', 'Nama\x20FF\x20Keren', 'split', 'toLowerCase', 'tools', 'creepify', 'options', 'random', '♥⊱ღ', '▄︻デ', 'join', 'tiny', 'encode', ']彡★', '۝༒༺', '꧁𓊈𒆜', 'ツﻬஐﻬ', '٭ᶦᶰᵈ᭄', '♥࿐٭', '📁︎', '📂︎', '🗏︎', '🖰︎', '🖲︎', '👓︎', '🕭︎', '🕮︎', '🕯︎', '🕿︎', '🖂︎', '🖃︎', '📪︎', '📬︎', '📭︎', '🖴︎', '🖫︎', '👌︎', '👍︎', '👎︎', '😐︎', '💣︎', '🏱︎', '🕈︎', '🕐︎', '🕓︎', '🕔︎', '🕕︎', '🕖︎', '🕗︎', '🕘︎', '🕛︎', 'max', 'map', 'round', 'push', 'length', 'replace', 'リサフランク現代のコンピュ竹内\x20まりや若者が履く流行のスニーカー真夜中のドアホットドッグマスターストライカーソニーブギ新しい日の誕生ライフ\x20-\x20ヒスイ蒸気波\x20無線゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚゛゜ゝゞゟ亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科', 'floor', '꧁༒☬\x20[[text]]\x20☬༒꧂', '◥꧁ད\x20[[text]]\x20ཌ꧂◤', '★·.·´¯`·.·★\x20[[text]]\x20★·.·´¯`·.·★', '⚔️\x20[[text]]\x20⚔️', '꧁༒༻☬ད\x20[[text]]\x20ཌ☬༺༒꧂', '♪ღ♪*•.¸¸.•*¨¨*•.♪\x20[[text]]\x20♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪', '◥꧁ད\x20ॐ卐[[text]]\x20卐ॐ\x20ཌ꧂◤', '[[text]]\x20☜(`o´)', '⎝⎝✧GͥOͣDͫ✧⎠⎠\x20[[text]]\x20⎝⎝✧GͥOͣDͫ✧⎠⎠', '┗(^o^\x20)┓三\x20[[text]]\x20三\x20┗(^o^\x20)┓', '(ㅅꈍ﹃ꈍ)*\x20[[text]]\x20*(ꈍ﹃ꈍㅅ)♡', '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯\x20[[text]]\x20¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯', '୧(•̀ᗝ•́)૭\x20[[text]]\x20୧(⇀‸↼‶)૭', '▁\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20[[text]]\x20█\x20▇\x20▆\x20▅\x20▄\x20▂\x20▁', '°°°·.°·..·°¯°·._.·\x20[[text]]\x20·._.·°¯°·.·°\x20.·°°°', '¸,ø¤º°`°º¤ø,¸¸,ø¤º°\x20[[text]]\x20°º¤ø,¸¸,ø¤º°`°º¤ø,¸', '•?((¯°·._.•\x20[[text]]\x20•._.·°¯))؟•', '▌│█║▌║▌║\x20[[text]]\x20║▌║▌║█│▌', '×º°”˜`”°º×\x20[[text]]\x20×º°”˜`”°º×', '•]••´º´•»\x20[[text]]\x20«•´º´••[•', '*•.¸♡\x20[[text]]\x20♡¸.•*', '.•°¤*(¯`★´¯)*¤°\x20[[text]]\x20°¤*(¯´★`¯)*¤°•.', '(¯´•._.•\x20[[text]]\x20•._.•´¯)', '¸„.-•~¹°”ˆ˜¨\x20[[text]]\x20¨˜ˆ”°¹~•-.„¸', '░▒▓█►─═\x20\x20[[text]]\x20═─◄█▓▒░', '★彡\x20[[text]]\x20彡★', '•´¯`•.\x20[[text]]\x20.•´¯`•', '|!¤*\x27~``~\x27*¤!|\x20[[text]]\x20|!¤*\x27~``~\x27*¤!|', '•´¯`•»\x20[[text]]\x20«•´¯`•', '\x20.o0×X×0o.\x20[[text]]\x20.o0×X×0o.', '—(••÷[\x20[[text]]\x20]÷••)—', '¸,ø¤º°`°º¤ø,¸\x20[[text]]\x20¸,ø¤º°`°º¤ø,¸', '`•.¸¸.•´´¯`••._.•\x20[[text]]\x20•._.••`¯´´•.¸¸.•`', '`•.,¸¸,.•´¯\x20[[text]]\x20¯`•.,¸¸,.•´', '↤↤↤↤↤\x20[[text]]\x20↦↦↦↦↦', '➶➶➶➶➶\x20[[text]]\x20➷➷➷➷➷', '↫↫↫↫↫\x20[[text]]\x20↬↬↬↬↬', '·.¸¸.·♩♪♫\x20[[text]]\x20♫♪♩·.¸¸.·', '【｡_｡】\x20[[text]]\x20【｡_｡】', ']|I{•------»\x20[[text]]\x20«------•}I|[', '-漫~*\x27¨¯¨\x27*·舞~\x20[[text]]\x20~舞*\x27¨¯¨\x27*·~漫-', '๑۞๑,¸¸,ø¤º°`°๑۩\x20[[text]]\x20๑۩\x20,¸¸,ø¤º°`°๑۞๑', '¤¸¸.•´¯`•¸¸.•..>>\x20[[text]]\x20<<..•.¸¸•´¯`•.¸¸¤', '◦•●◉✿\x20[[text]]\x20✿◉●•◦', '꧁𓊈𒆜\x20[[text]]\x20𒆜𓊉꧂', '╚»★«╝\x20[[text]]\x20╚»★«╝', '⫷\x20[[text]]\x20⫸', '∙∙·▫▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ\x20[[text]]\x20ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫▫·∙∙', '¸¸♬·¯·♩¸¸♪·¯·♫¸¸\x20[[text]]\x20¸¸♫·¯·♪¸¸♩·¯·♬¸¸', 'ஜ۩۞۩ஜ\x20[[text]]\x20ஜ۩۞۩ஜ', '¤\x20(¯´☆✭.¸_)¤\x20[[text]]\x20¤(_¸.✭☆´¯)\x20¤', '(¯`·.¸¸.·´¯`·.¸¸.->\x20[[text]]\x20<-.¸¸.·´¯`·.¸¸.·´¯)', '✿.｡.:*\x20☆:**:.\x20[[text]]\x20.:**:.☆*.:｡.✿', '.•♫•♬•\x20[[text]]\x20•♬•♫•.', 'ღ(¯`◕‿◕´¯)\x20♫\x20♪\x20♫\x20[[text]]\x20♫\x20♪\x20♫\x20(¯`◕‿◕´¯)ღ', '«-(¯`v´¯)-«\x20[[text]]\x20»-(¯`v´¯)-»', '[[text]]', '[̲̅$1]', '⧼$1&#828;⧽', '⟦$1⟧', '⦚$1⦚', '⦏$1&#x302;⦎', '&#778;\x20⫶', '⦏$1⦎', '˜”*°•.˜”*°•\x20', '(っ◔◡◔)っ\x20♥\x20', '【$1】', 'ミ★\x20', '꧁•⊹٭', '٭⊹•꧂', '\x20ıllıllı⭐🌟', '🌟⭐ıllıllı', '★★•╯', '`✵•.¸,✵°✵.｡.✰\x20\x20', '✰.｡.✵°✵,¸.•✵´', '★·.·´¯`·.·★.·', '¸„٭⊹✡•~⍣°”ˆ˜¨', '¨˜ˆ”°⍣~•✡⊹٭„¸', '★¸.•☆•.¸★\x20', '٭⊹¤.•⨳•.*☆✬\x20', '✬☆*.•⨳•.¤⊹٭', '(◍•ᴗ•◍)\x20ミ💖\x20', '෴❤️෴\x20\x20', '෴❤️෴', '**•.¸♥¸.•*´💖', '♡〜ლ(๑癶\x20', '癶๑)ლ〜♡', '◦•●❤♡\x20', '♡❤●•◦', '🌸ξξ(∵❤◡❤∵)ξξ·¯·♩¸\x20', '♥╣[-_-]╠♥', '♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡', '彡(✿╹◡╹)\x20', '(｀∀´)Ψ', 'щ（ﾟДﾟщ）\x20<\x20', '(づ｡◕‿‿◕｡)づ\x20', '\x20٩(˘◡˘)۶', '🌘‿🌘\x20\x20', '(✿ヘᴥヘ)', '(^▽^)\x20\x20', '(✿^▽^)', '(•◡•)', '(･ω･)♪', '(*ˊᗜˋ*)', '(*ゝω・)', '<(_\x20_*)>', '★⌒(●ゝω・)', '♪(\x20^-^)/★,｡･:･ﾟ', '+｡:.ﾟヽ(*´∀)ﾉﾟ', '.:｡+ﾟ', '(◕︿◕✿)\x20', '\x20(๑′°︿°๑)', '┏༼\x20◉\x20╭╮\x20◉༽┓\x20', '\x20(︶︹︺)', '(\x20◔\x20ʖ̯\x20◔\x20)\x20', '\x20(\x20◔\x20ʖ̯\x20◔\x20)', '(ಥ\x20͜ʖಥ)\x20', '\x20٩꒰´·⌢•｀꒱۶⁼³₌₃', '(oꆤ︵ꆤo)\x20', '\x20●︿●', '(|||❛︵❛.)', '(.﹒︠₋﹒︡.)\x20ﾟ😳☹', '♦👺\x20（（●´∧｀●））', '💘🎀', '🐿\x20🎀', '🐣♖', '★｡\x20🎀', '🎯🍧', '💜💘', '◥꧁ད\x20ॐ卐', '••¤(`×[¤\x20', '\x20¤]×´)¤••', '—(••÷[\x20', '\x20]÷••)—\x20', '.o0×X×0o.\x20', '\x20.o0×X×0o.\x20', '•●◉✿\x20', '\x20✿◉●•◦', '⎝⎝✧GͥOͣDͫ✧⎠⎠', '\x20⎝⎝✧GͥOͣDͫ✧⎠⎠', '⫷\x20\x20', '«-(¯`v´¯)-«\x20', '\x20»-(¯`v´¯)-»', 'ஜ۩۞۩ஜ\x20', 'ஜ۩۞۩ஜ', '░▒▓█►─═', '═─◄█▓▒░', '\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20', '\x20\x20█\x20▇\x20▆\x20▅\x20▄\x20▂▁', '\x20║▌║▌║█│▌', ']\x20𒆜𓊉꧂', '╚»★«╝', '&alpha;', '&#4310;', '&#392;', '&#1283;', '&#1213;', '&#989;', '&#608;', '&iota;', '&#409;', '&#645;', '&#625;', '&rho;', '&#985;', '&#638;', '&#642;', '&#410;', '&upsilon;', '&#623;', '&#4327;', '&#549;', '&#41807;', '&#9837;', '&#9790;', '&#9687;', '&euro;', '&#10081;', '&#9796;', '&#9815;', '&#9834;', '&#1008;', '&#8627;', '&#9812;', '&#9773;', '&#9736;', '&#9730;', '&omega;', '&#9791;', '&#9761;', '&#9835;', '&#8857;', '&#9442;', '&#9739;', '&#10003;', '&#10122;', '&#10123;', '&#10124;', '&#10125;', '&#10126;', '&#10127;', '&#10129;', '&#10130;', '&#9450;', '&#258;', '&beta;', '&#270;', '&#358;', '&#286;', '&#292;', '&#296;', '&#308;', '&#310;', '&#313;', '&#1052;', '&#336;', '&#1056;', '&#340;', '&#346;', '&#356;', '&Uacute;', '&#372;', '&#374;', '&#377;', '&#268;', '&#276;', '&#323;', '&#592;', '&#596;', '&#477;', '&#607;', '&#387;', '&#613;', '&#7433;', '&#633;', '&#647;', '&#652;', '&#670;', '&#654;', '&#406;', '&#4357;', '&#400;', '&#987;', '&Delta;', '&#272;', '&#8355;', '&#294;', '&#407;', '&#321;', '&Mu;', '&#420;', '&#344;', '&#350;', '&#7918;', '&#1046;', '&#381;', '&#1180;', '&#327;', '&Oslash;', '&Omega;', '&yen;', '&#595;', '&#2798;', '&epsilon;', '&fnof;', '&#614;', '&#3648;', '&#1185;', '&#8467;', '&#627;', '&sigma;', '&#2792;', '&#3619;', '&#429;', '&#1141;', '&#438;', '&part;', '&phi;', '&micro;', '&#1488;', '&#5609;', '&#5623;', '&#5205;', '&#5620;', '&#5556;', '&#484;', '&#5500;', '&#5029;', '&#5262;', '&#5616;', '&#5198;', '&#5229;', '&#586;', '&#5511;', '&#5397;', '&#19973;', '&#5167;', '&#5741;', '&#435;', '&#5610;', '&#5845;', '&#5597;', '&#5615;', '&#20057;', '&#4315;', '&#4329;', '&#4308;', '&#4331;', '&#4330;', '&#7990;', '&#4306;', '&Gamma;', '&#4336;', '&#3923;', '&#4335;', '&#576;', '&#4318;', '&#4325;', '&kappa;', '&#8134;', '&otilde;', '&#8023;', '&#940;', '&sigmaf;', '&#941;', '&#291;', '&#295;', '&#943;', '&#1112;', '&#315;', '&#1084;', '&#942;', '&#972;', '&#341;', '&#351;', '&#355;', '&ugrave;', '&nu;', '&#974;', '&#1095;', '&#382;', '&#1074;', '&#545;', '&#41707;', '&#41155;', '&#41976;', '&#41045;', '&#41823;', '&#41037;', '&#42075;', '&#41105;', '&#41005;', '&#40983;', '&#42130;', '&#41081;', '&#41346;', '&#41571;', '&#41754;', '&#42181;', '&#41991;', '&#41427;', '&#42015;', '&#41240;', '&#41042;', '&#41080;', '&#42131;', '&#41296;', '&#41076;', '&#1048;', '&#1060;', '&#490;', '&#1071;', '&#1062;', '&#1065;', '&#1059;', '&#1044;', '&#1041;', '&Xi;', '&#41731;', '&#41555;', '&#41016;', '&#41863;', '&#41157;', '&#40984;', '&#41141;', '&#41508;', '&#41126;', '&#41706;', '&#40974;', '&#41295;', '&#41660;', '&#41769;', '&#41029;', '&#41751;', '&#42180;', '&#41203;', '&#41556;', '&#42159;', '&#41922;', '&#41648;', '&#41804;', '&#41053;', '&#42128;', '&#42171;', '&#41266;', '&#41392;', '&#42148;', '&#42150;', '&#41575;', '&#41674;', '&#41433;', '&#41766;', '&Lambda;', '&#998;', '&#12552;', '&ETH;', '&#403;', '&#1085;', '&#65420;', '&#1178;', '&#3057;', '&#1051;', '&thorn;', '&#1192;', '&#23610;', '&#12425;', '&#404;', '&chi;', '&#996;', '&#7828;', '&#618;', '&#412;', '&#411;', '&#385;', '&#391;', '&#1028;', '&#401;', '&#1223;', '&#408;', '&#1340;', '&#418;', '&#428;', '&#434;', '&#1202;', '&#548;', '&#394;', '&#646;', '&#413;', '&#416;', '&#422;', '&#423;', '&#41074;', '&#41007;', '&#41532;', '&#41246;', '&#41733;', '&#41008;', '&#41426;', '&#42014;', '&#41120;', '&#41833;', '&#41079;', '&#41686;', '&#1337;', '&#1349;', '&#1351;', '&#1338;', '&#541;', '&#1330;', '&#1331;', '&#639;', '&#669;', '&#653;', '&#1356;', '&#1342;', '&#1360;', '&#1359;', '&#1333;', '&#1377;', '&#1347;', '&#1358;', '&#1348;', '&#1506;', '&#1344;', '&szlig;', '&iuml;', '&#1397;', '&eta;', '&oplus;', '&dagger;', '&forall;', '&psi;', '&scaron;', '&#3588;', '&#2797;', '&#1210;', '&#1179;', '&#1350;', '&#1352;', '&#2790;', '&#447;', '&#1193;', '&#2670;', '&#3182;', '&#2794;', '&#2749;', '&#2414;', '&#2799;', '&#1072;', '&#1073;', '&#1076;', '&#1105;', '&#1111;', '&#1131;', '&#1087;', '&#1139;', '&#1092;', '&#1103;', '&#1094;', '&#1097;', '&#1079;', '&#1040;', '&#1050;', '&#1043;', '&#1049;', '&#1138;', '&#1064;', '&#1063;', 'a&#830;', 'b&#830;', 'c&#830;', 'd&#830;', 'f&#830;', 'h&#830;', 'i&#830;', 'k&#830;', 'l&#830;', 'n&#830;', 'o&#830;', 'p&#830;', 'r&#830;', 's&#830;', 'v&#830;', 'w&#830;', 'x&#830;', 'A&#830;', 'B&#830;', 'C&#830;', 'F&#830;', 'G&#830;', 'H&#830;', 'I&#830;', 'J&#830;', 'K&#830;', 'L&#830;', 'M&#830;', 'O&#830;', 'P&#830;', 'Q&#830;', 'R&#830;', 'S&#830;', 'U&#830;', 'V&#830;', 'W&#830;', 'X&#830;', 'Y&#830;', 'Z&#830;', '1&#830;', '2&#830;', '3&#830;', '4&#830;', '6&#830;', '7&#830;', '8&#830;', '9&#830;', '0&#830;', 'a&#838;', 'c&#838;', 'd&#838;', 'e&#838;', 'f&#838;', 'g&#838;', 'h&#838;', 'j&#838;', 'm&#838;', 'p&#838;', 'q&#838;', 'r&#838;', 't&#838;', 'u&#838;', 'v&#838;', 'w&#838;', 'x&#838;', 'z&#838;', 'A&#838;', 'B&#838;', 'C&#838;', 'E&#838;', 'F&#838;', 'G&#838;', 'H&#838;', 'I&#838;', 'J&#838;', 'M&#838;', 'N&#838;', 'P&#838;', 'Q&#838;', 'R&#838;', 'S&#838;', 'T&#838;', 'U&#838;', 'V&#838;', 'W&#838;', 'X&#838;', 'Y&#838;', 'Z&#838;', '2&#838;', '7&#838;', '8&#838;', 'a&#826;', 'b&#826;', 'c&#826;', 'd&#826;', 'e&#826;', 'h&#826;', 'i&#826;', 'j&#826;', 'k&#826;', 'l&#826;', 'm&#826;', 'n&#826;', 'o&#826;', 'p&#826;', 'r&#826;', 's&#826;', 't&#826;', 'u&#826;', 'v&#826;', 'x&#826;', 'z&#826;', 'B&#826;', 'D&#826;', 'E&#826;', 'F&#826;', 'G&#826;', 'I&#826;', 'J&#826;', 'K&#826;', 'L&#826;', 'M&#826;', 'N&#826;', 'O&#826;', 'P&#826;', 'Q&#826;', 'T&#826;', 'U&#826;', 'W&#826;', 'X&#826;', 'Y&#826;', 'Z&#826;', '1&#826;', '2&#826;', '3&#826;', '4&#826;', '7&#826;', '8&#826;', '9&#826;', 'a&#857;', 'b&#857;', 'd&#857;', 'f&#857;', 'g&#857;', 'h&#857;', 'k&#857;', 'l&#857;', 'q&#857;', 'r&#857;', 's&#857;', 't&#857;', 'u&#857;', 'v&#857;', 'x&#857;', 'y&#857;', 'A&#857;', 'B&#857;', 'D&#857;', 'E&#857;', 'G&#857;', 'H&#857;', 'I&#857;', 'J&#857;', 'K&#857;', 'L&#857;', 'Q&#857;', 'R&#857;', 'T&#857;', 'U&#857;', 'V&#857;', 'W&#857;', 'Y&#857;', 'Z&#857;', '1&#857;', '2&#857;', '3&#857;', '8&#857;', '9&#857;', '0&#857;', 'a&#799;', 'b&#799;', 'c&#799;', 'd&#799;', 'e&#799;', 'g&#799;', 'h&#799;', 'i&#799;', 'm&#799;', 'n&#799;', 'o&#799;', 'q&#799;', 'r&#799;', 's&#799;', 'v&#799;', 'y&#799;', 'z&#799;', 'A&#799;', 'B&#799;', 'C&#799;', 'E&#799;', 'F&#799;', 'G&#799;', 'H&#799;', 'J&#799;', 'K&#799;', 'L&#799;', 'M&#799;', 'N&#799;', 'O&#799;', 'Q&#799;', 'S&#799;', 'U&#799;', 'V&#799;', 'W&#799;', 'Z&#799;', '1&#799;', '2&#799;', '3&#799;', '4&#799;', '5&#799;', '6&#799;', '8&#799;', '9&#799;', '0&#799;', 'a&#846;', 'b&#846;', 'c&#846;', 'd&#846;', 'e&#846;', 'f&#846;', 'g&#846;', 'h&#846;', 'i&#846;', 'j&#846;', 'l&#846;', 'o&#846;', 'p&#846;', 'q&#846;', 'r&#846;', 's&#846;', 'x&#846;', 'y&#846;', 'z&#846;', 'A&#846;', 'C&#846;', 'D&#846;', 'E&#846;', 'F&#846;', 'H&#846;', 'I&#846;', 'J&#846;', 'M&#846;', 'N&#846;', 'O&#846;', 'R&#846;', 'S&#846;', 'T&#846;', 'U&#846;', 'V&#846;', 'X&#846;', 'Y&#846;', 'Z&#846;', '1&#846;', '2&#846;', '6&#846;', '8&#846;', '9&#846;', '0&#846;', 'a&#829;&#851;', 'b&#829;&#851;', 'c&#829;&#851;', 'd&#829;&#851;', 'e&#829;&#851;', 'f&#829;&#851;', 'g&#829;&#851;', 'h&#829;&#851;', 'i&#829;&#851;', 'j&#829;&#851;', 'k&#829;&#851;', 'l&#829;&#851;', 'm&#829;&#851;', 'n&#829;&#851;', 'o&#829;&#851;', 'r&#829;&#851;', 's&#829;&#851;', 't&#829;&#851;', 'u&#829;&#851;', 'v&#829;&#851;', 'w&#829;&#851;', 'x&#829;&#851;', 'y&#829;&#851;', 'z&#829;&#851;', 'D&#829;&#851;', 'E&#829;&#851;', 'G&#829;&#851;', 'H&#829;&#851;', 'I&#829;&#851;', 'J&#829;&#851;', 'K&#829;&#851;', 'L&#829;&#851;', 'N&#829;&#851;', 'O&#829;&#851;', 'P&#829;&#851;', 'R&#829;&#851;', 'S&#829;&#851;', 'T&#829;&#851;', 'U&#829;&#851;', 'V&#829;&#851;', 'X&#829;&#851;', 'Y&#829;&#851;', '1&#829;&#851;', '2&#829;&#851;', '3&#829;&#851;', '4&#829;&#851;', '5&#829;&#851;', '6&#829;&#851;', '7&#829;&#851;', '8&#829;&#851;', '0&#829;&#851;', '&#120458;&#823;', '&#120459;&#823;', '&#120460;&#823;', '&#120461;&#823;', '&#120463;&#823;', '&#120465;&#823;', '&#120466;&#823;', '&#120467;&#823;', '&#120468;&#823;', '&#120470;&#823;', '&#120471;&#823;', '&#120473;&#823;', '&#120475;&#823;', '&#120477;&#823;', '&#120478;&#823;', '&#120479;&#823;', '&#120481;&#823;', '&#120482;&#823;', '&#120483;&#823;', '&#120432;&#823;', '&#120434;&#823;', '&#120435;&#823;', '&#120437;&#823;', '&#120438;&#823;', '&#120439;&#823;', '&#120440;&#823;', '&#120441;&#823;', '&#120442;&#823;', '&#120443;&#823;', '&#120445;&#823;', '&#120446;&#823;', '&#120447;&#823;', '&#120448;&#823;', '&#120449;&#823;', '&#120450;&#823;', '&#120451;&#823;', '&#120452;&#823;', '&#120453;&#823;', '&#120455;&#823;', '&#120456;&#823;', '&#120457;&#823;', '&#120823;&#823;', '&#120825;&#823;', '&#120826;&#823;', '&#120827;&#823;', '&#120828;&#823;', '&#120822;&#823;', 'a&#866;', 'b&#866;', 'd&#866;', 'h&#866;', 'i&#866;', 'j&#866;', 'l&#866;', 'm&#866;', 'n&#866;', 'o&#866;', 'p&#866;', 'q&#866;', 'r&#866;', 's&#866;', 't&#866;', 'u&#866;', 'w&#866;', 'x&#866;', 'y&#866;', 'z&#866;', 'B&#866;', 'D&#866;', 'F&#866;', 'G&#866;', 'I&#866;', 'J&#866;', 'K&#866;', 'N&#866;', 'P&#866;', 'Q&#866;', 'R&#866;', 'S&#866;', 'T&#866;', 'U&#866;', 'V&#866;', 'W&#866;', 'X&#866;', 'Z&#866;', '2&#866;', '4&#866;', '5&#866;', '6&#866;', '7&#866;', '8&#866;', '0&#866;', 'c&#828;', 'd&#828;', 'e&#828;', 'f&#828;', 'g&#828;', 'h&#828;', 'i&#828;', 'j&#828;', 'k&#828;', 'l&#828;', 'n&#828;', 'o&#828;', 'p&#828;', 'q&#828;', 'w&#828;', 'x&#828;', 'y&#828;', 'z&#828;', 'A&#828;', 'C&#828;', 'D&#828;', 'E&#828;', 'F&#828;', 'G&#828;', 'H&#828;', 'I&#828;', 'L&#828;', 'M&#828;', 'N&#828;', 'O&#828;', 'P&#828;', 'R&#828;', 'S&#828;', 'T&#828;', 'V&#828;', 'W&#828;', 'X&#828;', 'Y&#828;', 'Z&#828;', '2&#828;', '4&#828;', '5&#828;', '6&#828;', '7&#828;', '8&#828;', '9&#828;', '0&#828;', 'charAt', 'indexOf', 'reverse', 'pop', 'undefined', 'fromCharCode', 'diacriticsBottom', 'diacriticsTop', 'diacriticsMiddle', 'middle', 'maxHeight', 'randomization', 'bottom', 'charCodeAt', 'mapInverse', '������', 'toUpperCase', 'init', 'getHTML', '<br>\x0a', '&#x', 'toString', 'trim', '\x20\x20🎀\x20\x20', 'test', '(y)', '(ɔ◔‿◔)ɔ', '(｡◕‿◕｡)', '●‿●', '◕‿◕', '🌘‿🌘', '(/◔◡◔)/', '(人◕‿◕)', '(✿╹◡╹)', '◔◡◔', '(^▽^)', 'ᵔ⌣ᵔ', '^ㅂ^', '(⌒‿⌒)', '◠◡◠', '⁀‿⁀', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '(✿◕ᗜ◕)━♫.*･｡ﾟ', 'ᕕ(ᐛ)ᕗ', '•?((¯°·._.•\x20', 'ıllıllı\x20', '¸,ø¤º°`°º¤ø,¸¸,ø¤º°\x20', '°°°·.°·..·°¯°·._.·\x20', '•´¯`•.\x20', '•]••´º´•»\x20', '§.•´¨\x27°÷•..×\x20', '•°¯`••\x20', '(¯`·.¸¸.·´¯`·.¸¸.->\x20', '*´¯`*.¸¸.*´¯`*\x20', '(¯`·.¸¸.->\x20°º\x20', '°·.¸.·°¯°·.¸.·°¯°·.¸.->\x20', '(¯´•._.•\x20', '••¤(`×', '•´¯`•»\x20', '`•.,¸¸,.•´¯\x20', ',-*\x27^\x27~*-.,_,.-*~\x20', '`•.¸¸.•´´¯`••._.•\x20', '—(••÷', '★·.·´¯`·.·★\x20', '▀▄▀▄▀▄\x20', '\x20⋆\x20', 'object', 'exports', '$2$1', '<%=\x20version\x20%>', 'function', 'amd', 'nodeType', 'esrever', '☽≫≻≽≿⋝⋟⋑⊃⊐⊒⫸》＞❯❱', '【〖〘〚［', 'ready', '<style>\x20//\x20tipos\x20de\x20letras\x20by\x20:herosinghdj9@gmail.com\x20</style>', 'insertBefore', 'input\x20change', '<style>\x20.DiscordFonts\x20p{font-size:', 'val', 'px}\x20</style>', '.Sk-text', 'input', '#Sk-text', 'location', 'href', '.result-s1', 'html', '.result-s2', '.result-s3', '.result-s4', '.result-s5', '.result-s6', '.result-s7', '.result-s9', '.result-s10', 's10', '.result-s11', 's11', '.result-s12', 's12', '.result-s13', '.result-s14', 's14', '.result-s15', '.result-s16', 's16', 's17', 's18', '.result-s19', 's19', '.result-s20', 's20', '.result-s22', '.result-s23', 's23', '.result-s24', 's25', '.result-s26', 's26', '.result-s27', 's27', '.result-s29', 's29', '.result-s30', 's31', '.invertedSquaresCharMap', '.illuminati', '.minigame', '.pubggame2', '.pubggame3', '.bricks', '.bigrus', '.wideTextCharMap', '.lunitoolstinyencode', '.squaresCharMap', '.lunitoolsmirrorencode', 'mirror', '.subscriptCharMap', '.superscriptCharMap', '.bentTextCharMap', '.neonCharMap', '.strikeThrough', '.tildeStrikeThrough', '.underline', '.doubleUnderline', '.lunicreepify', '.squiggleCharMap', '.squiggle3CharMap', '.squiggle5CharMap', '.squiggle6CharMap', '.boldCharMap', '.luniroundsquares', 'roundsquares', '.lunisquares', 'squares', '.cursiveCharMap', '.scriptify', '.monospaceCharMap', '.upperAnglesCharMap', '.symbolsCharMap', '.asianStyleCharMap', '.asianStyle2CharMap', '.wavyJoiner', '.dottyJoiner', '.vaporwaveText', '.vaporwaveText2', '.littleSparkles', '.weirdBox', '.thickBox', '.zigzagJoiner', '.connectedJoiner', '.arrowjoin', '.dotBoxtwo', '.dotBox', '.diametricBox', '.arrowBox', '.curlybrackets', '.singlewavyJoiner', '.firework', '.stinky', '.heartsBetween', '.arrowBelow', '.crossAboveBelow', '.wingdings', '.crazyWithFlourishOrSymbols', '.cuteText', '.star0', '.star1', '.star2', '.star3', '.star5', '.star6', '.star9', '.heart0', '.heart2', '.heart4', '.heart6', '.heart7', '.emoticon1', '.emoticon2', '.emoticon3', '.emoticon4', '.emoticon5', '.emoticon6', '.emoticon7', '.thankyou0', '.thankyou1', '.thankyou3', '.thankyou4', '.thankyou5', '.thankyou6', '.thankyou7', '.sad1', '.sad2', '.sad3', '.sad5', '.sad6', '.sad7', '.cuteText1', '.cuteText2', '.cuteText3', '.cuteText4', '.cuteText5', '.crazyWithFlourishOrSymbols1', '.crazyWithFlourishOrSymbols2', '.crazyWithFlourishOrSymbols3', '.crazyWithFlourishOrSymbols4', '.crazyWithFlourishOrSymbols5', '.fullCrazy1', '.fullCrazy2', '.fullCrazy3', '.fullCrazy4', '.fullCrazy5', '.wrap1', '.wrap4', '.wrap5', '.clear', 'querySelector', '.copied', '.text', '.DiscordFonts', 'addEventListener', 'value', 'innerText', 'classList', 'remove', 'textarea', 'appendChild', 'select', 'execCommand', 'copy'];
    _0x5318 = function() {
        return _0x46bad3;
    };
    return _0x5318();
}

function shuffleArray(_0x31948c) {
    var _0x5c27f5 = _0xf04b4d,
        _0x3f55ed = _0x31948c['length'],
        _0x330fa4, _0x433a27;
    while (0x0 !== _0x3f55ed) {
        _0x433a27 = Math['floor'](Math[_0x5c27f5(0x7)]() * _0x3f55ed), _0x3f55ed -= 0x1, _0x330fa4 = _0x31948c[_0x3f55ed], _0x31948c[_0x3f55ed] = _0x31948c[_0x433a27], _0x31948c[_0x433a27] = _0x330fa4;
    }
    return _0x31948c;
}

function randomElement(_0x402350) {
    var _0x12dad1 = _0xf04b4d;
    return _0x402350[Math[_0x12dad1(0x3a)](Math[_0x12dad1(0x7)]() * _0x402350['length'])];
}! function(_0x2569ad) {
    var _0x3e9871 = _0xf04b4d,
        _0x43ce60 = _0x3e9871(0x457) == typeof exports && exports,
        _0x4462d2 = _0x3e9871(0x457) == typeof module && module && module[_0x3e9871(0x458)] == _0x43ce60 && module,
        _0x1762d0 = _0x3e9871(0x457) == typeof global && global;
    (_0x1762d0['global'] === _0x1762d0 || _0x1762d0['window'] === _0x1762d0) && (_0x2569ad = _0x1762d0);
    var _0x4fc697 = /(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g,
        _0x404934 = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,
        _0x4af976 = function(_0x3eee64) {
            var _0x464a2e = _0x3e9871;
            _0x3eee64 = _0x3eee64[_0x464a2e(0x38)](_0x4fc697, function(_0x565bac, _0x5ddcb9, _0x229085) {
                return _0x4af976(_0x229085) + _0x5ddcb9;
            })[_0x464a2e(0x38)](_0x404934, _0x464a2e(0x459));
            for (var _0x4c5f0b = '', _0x148816 = _0x3eee64[_0x464a2e(0x37)]; _0x148816--;) _0x4c5f0b += _0x3eee64[_0x464a2e(0x415)](_0x148816);
            return _0x4c5f0b;
        },
        _0x3e6014 = {
            'version': _0x3e9871(0x45a),
            'reverse': _0x4af976
        };
    if (_0x3e9871(0x45b) == typeof define && _0x3e9871(0x457) == typeof define[_0x3e9871(0x45c)] && define[_0x3e9871(0x45c)]) define(function() {
        return _0x3e6014;
    });
    else {
        if (_0x43ce60 && !_0x43ce60[_0x3e9871(0x45d)]) {
            if (_0x4462d2) _0x4462d2[_0x3e9871(0x458)] = _0x3e6014;
            else {
                for (var _0x1df669 in _0x3e6014) _0x3e6014['hasOwnProperty'](_0x1df669) && (_0x43ce60[_0x1df669] = _0x3e6014[_0x1df669]);
            }
        } else _0x2569ad[_0x3e9871(0x45e)] = _0x3e6014;
    }
}(this);

function fullCrazy(_0x429c56) {
    var _0x37e29b = _0xf04b4d;
    if (_0x429c56[_0x37e29b(0x42b)]() === '') return '';
    return randomSymbols(0x2) + '\x20\x20' + crazifyText(_0x429c56) + '\x20\x20' + randomSymbols(0x2);
}

function crazifyText(_0x1b557d) {
    var _0x2e5acb = _0xf04b4d;
    _0x1b557d = _0x1b557d['split']('');
    for (var _0x511124 = 0x0; _0x511124 < _0x1b557d[_0x2e5acb(0x37)]; _0x511124++) {
        _0x1b557d[_0x511124] = crazifyCharacter(_0x1b557d[_0x511124]);
    }
    return _0x1b557d[_0x2e5acb(0xa)]('');
}

function crazifyCharacter(_0xab1692) {
    var _0x5b6b26 = _0xf04b4d;
    _0xab1692 = _0xab1692['toLowerCase']();
    var _0x2559c0 = {
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
        '>': _0x5b6b26(0x45f),
        '[': _0x5b6b26(0x460),
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
    return _0x2559c0[_0xab1692] ? randomElement(_0x2559c0[_0xab1692]) : _0xab1692;
}

function randomElement(_0x558909) {
    var _0x50de44 = _0xf04b4d;
    return _0x558909[Math[_0x50de44(0x3a)](Math[_0x50de44(0x7)]() * _0x558909['length'])];
}

function randomSymbols(_0x37ca1a) {
    var _0x4cb719 = _0xf04b4d,
        _0x2ee823 = ['🐙', '🐉', '🐊', '🐒', '🐝', '🐜', '🐚', '🐲', '🐳', '🐸', '👑', '👹', '👺', '👤', '💲', '💣', '💙', '💚', '💛', '💜', '💝', '💗', '💘', '💞', '💔', '💥', '🐯', '🐼', '🐻', '🐺', '👌', '🐍', '🐧', '🐟', '🐠', '🐨', '🎯', '🏆', '🎁', '🎀', '🎉', '🎈', '🍮', '🍭', '🍬', '🍫', '🍪', '🍧', '🌷', '🍓', '😺', '😾', '✎', '😎', '😝', '😂', '😈', '😡', '😲', '😳', '🍔', '🍟', '🍩', '🎃', '🎄', '🎅', '🐣', '🐤', '👍', '👊', '👻', '👽', '👮', '💎', '💋', '👣', '💀', '💢', '🔥', '♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '♠', '♡', '♢', '♣', '♤', '♥', '♦', '♧', '♨', '♩', '♪', '♬', '★', '☆', '☺', '☹', '☯', '☮', '☢', '☠', '☟', '☞', '☝', '☜', '✌', '✋', '✊', '⛵', 'ൠ', '✌', 'ඏ'],
        _0x4618d6 = [];
    for (var _0x144640 = 0x0; _0x144640 < _0x37ca1a; _0x144640++) _0x4618d6[_0x4cb719(0x36)](randomElement(_0x2ee823));
    return _0x4618d6[_0x4cb719(0xa)]('');
}

function randInt(_0x2982da, _0x34f45c) {
    var _0x11b174 = _0xf04b4d;
    return _0x2982da + Math['floor'](Math[_0x11b174(0x7)]() * (_0x34f45c - _0x2982da + 0x1));
}
$(document)[_0xf04b4d(0x461)](function() {
    var _0x482a09 = _0xf04b4d;
    $(_0x482a09(0x462))[_0x482a09(0x463)]('body'), $('#fontSize')['on'](_0x482a09(0x464), function() {
        var _0x39ef46 = _0x482a09;
        $(_0x39ef46(0x465) + $(this)[_0x39ef46(0x466)]() + _0x39ef46(0x467))[_0x39ef46(0x463)]('body');
    }), _0x445a4f(default_text), $(_0x482a09(0x468))['on'](_0x482a09(0x469), function(_0x57d762) {
        var _0x3edfaa = _0x482a09;
        if ($(_0x3edfaa(0x46a))[_0x3edfaa(0x466)]() < 0x1) _0x445a4f(default_text);
        else {
            var _0x32acf2 = $(_0x3edfaa(0x46a))[_0x3edfaa(0x466)]();
            _0x445a4f(_0x32acf2);
        }
    });
    var _0x4234f9 = window[_0x482a09(0x46b)][_0x482a09(0x46c)],
        _0x4a5009 = _0x4234f9['split']('?=');
    urltext = _0x4a5009[0x1];
    urltext && (urltext = decodeURIComponent(urltext), $(_0x482a09(0x46a))['val'](urltext), _0x445a4f(urltext));

    function _0x445a4f(_0xf1d899) {
        var _0x541715 = _0x482a09;
        _0xf1d899 = _0xf1d899['trim'](), $(_0x541715(0x46d))[_0x541715(0x46e)](Change(_0xf1d899, 's1')), $(_0x541715(0x46f))['html'](Change(_0xf1d899, 's2')), $(_0x541715(0x470))[_0x541715(0x46e)](Change(_0xf1d899, 's3')), $(_0x541715(0x471))['html'](Change(_0xf1d899, 's4')), $(_0x541715(0x472))[_0x541715(0x46e)](Change(_0xf1d899, 's5')), $(_0x541715(0x473))['html'](Change(_0xf1d899, 's6')), $(_0x541715(0x474))['html'](Change(_0xf1d899, 's7')), $('.result-s8')[_0x541715(0x46e)](Change(_0xf1d899, 's8')), $(_0x541715(0x475))[_0x541715(0x46e)](Change(_0xf1d899, 's9')), $(_0x541715(0x476))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x477))), $(_0x541715(0x478))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x479))), $(_0x541715(0x47a))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x47b))), $(_0x541715(0x47c))[_0x541715(0x46e)](Change(_0xf1d899, 's13')), $(_0x541715(0x47d))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x47e))), $(_0x541715(0x47f))[_0x541715(0x46e)](Change(_0xf1d899, 's15')), $(_0x541715(0x480))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x481))), $('.result-s17')['html'](Change(_0xf1d899, _0x541715(0x482))), $('.result-s18')['html'](Change(_0xf1d899, _0x541715(0x483))), $(_0x541715(0x484))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x485))), $(_0x541715(0x486))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x487))), $('.result-s21')[_0x541715(0x46e)](Change(_0xf1d899, 's21')), $(_0x541715(0x488))[_0x541715(0x46e)](Change(_0xf1d899, 's22')), $(_0x541715(0x489))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x48a))), $(_0x541715(0x48b))['html'](Change(_0xf1d899, 's24')), $('.result-s25')[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x48c))), $(_0x541715(0x48d))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x48e))), $(_0x541715(0x48f))[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x490))), $(_0x541715(0x491))['html'](Change(_0xf1d899, _0x541715(0x492))), $(_0x541715(0x493))[_0x541715(0x46e)](Change(_0xf1d899, 's30')), $('.result-s31')[_0x541715(0x46e)](Change(_0xf1d899, _0x541715(0x494))), $('.lunitoolsbubbles')['html'](luni[_0x541715(0x4)]['bubbles'][_0x541715(0xc)](_0xf1d899)), $(_0x541715(0x495))['html'](applyCharMap(invertedSquaresCharMap, _0xf1d899)), $(_0x541715(0x496))[_0x541715(0x46e)](illuminati(_0xf1d899)), $('.textgun')[_0x541715(0x46e)](textgun(_0xf1d899)), $(_0x541715(0x497))['html'](minigame(_0xf1d899)), $('.pubggame1')[_0x541715(0x46e)](pubggame1(_0xf1d899)), $(_0x541715(0x498))['html'](pubggame2(_0xf1d899)), $(_0x541715(0x499))[_0x541715(0x46e)](pubggame3(_0xf1d899)), $(_0x541715(0x49a))[_0x541715(0x46e)](bricks(_0xf1d899)), $(_0x541715(0x49b))[_0x541715(0x46e)](bigrus(_0xf1d899)), $(_0x541715(0x49c))['html'](applyCharMap(wideTextCharMap, _0xf1d899)), $(_0x541715(0x49d))[_0x541715(0x46e)](luni[_0x541715(0x4)][_0x541715(0xb)][_0x541715(0xc)](_0xf1d899)), $('.lunitoolsflipencode')[_0x541715(0x46e)](luni[_0x541715(0x4)]['flip']['encode'](_0xf1d899)), $(_0x541715(0x49e))[_0x541715(0x46e)](applyCharMap(squaresCharMap, _0xf1d899)), $(_0x541715(0x49f))[_0x541715(0x46e)](luni['tools'][_0x541715(0x4a0)][_0x541715(0xc)](_0xf1d899)), $(_0x541715(0x4a1))[_0x541715(0x46e)](applyCharMap(subscriptCharMap, _0xf1d899)), $(_0x541715(0x4a2))[_0x541715(0x46e)](applyCharMap(superscriptCharMap, _0xf1d899)), $(_0x541715(0x4a3))[_0x541715(0x46e)](applyCharMap(bentTextCharMap, _0xf1d899)), $(_0x541715(0x4a4))[_0x541715(0x46e)](applyCharMap(neonCharMap, _0xf1d899)), $('.futureAlienCharMap')['html'](applyCharMap(futureAlienCharMap, _0xf1d899)), $(_0x541715(0x4a5))[_0x541715(0x46e)](strikeThrough(_0xf1d899)), $(_0x541715(0x4a6))[_0x541715(0x46e)](tildeStrikeThrough(_0xf1d899)), $('.slashThrough')[_0x541715(0x46e)](slashThrough(_0xf1d899)), $(_0x541715(0x4a7))[_0x541715(0x46e)](underline(_0xf1d899)), $(_0x541715(0x4a8))[_0x541715(0x46e)](doubleUnderline(_0xf1d899)), $(_0x541715(0x4a9))[_0x541715(0x46e)](luni[_0x541715(0x4)][_0x541715(0x5)][_0x541715(0xc)](_0xf1d899)), $(_0x541715(0x4aa))['html'](applyCharMap(squiggleCharMap, _0xf1d899)), $('.squiggle2CharMap')['html'](applyCharMap(squiggle2CharMap, _0xf1d899)), $(_0x541715(0x4ab))[_0x541715(0x46e)](applyCharMap(squiggle3CharMap, _0xf1d899)), $('.squiggle4CharMap')[_0x541715(0x46e)](applyCharMap(squiggle4CharMap, _0xf1d899)), $(_0x541715(0x4ac))[_0x541715(0x46e)](applyCharMap(squiggle5CharMap, _0xf1d899)), $(_0x541715(0x4ad))['html'](applyCharMap(squiggle6CharMap, _0xf1d899)), $(_0x541715(0x4ae))['html'](applyCharMap(boldCharMap, _0xf1d899)), $(_0x541715(0x4af))[_0x541715(0x46e)](luni[_0x541715(0x4)][_0x541715(0x4b0)][_0x541715(0xc)](_0xf1d899)), $(_0x541715(0x4b1))['html'](luni['tools'][_0x541715(0x4b2)]['encode'](_0xf1d899[_0x541715(0x425)]())), $('.oldEnglishCharMap')[_0x541715(0x46e)](applyCharMap(oldEnglishCharMap, _0xf1d899)), $('.medievalCharMap')[_0x541715(0x46e)](applyCharMap(medievalCharMap, _0xf1d899)), $(_0x541715(0x4b3))[_0x541715(0x46e)](applyCharMap(cursiveCharMap, _0xf1d899)), $(_0x541715(0x4b4))[_0x541715(0x46e)](scriptify(_0xf1d899)), $('.doubleStruckCharMap')[_0x541715(0x46e)](applyCharMap(doubleStruckCharMap, _0xf1d899)), $('.italicCharMap')['html'](applyCharMap(italicCharMap, _0xf1d899)), $('.boldItalicCharMap')[_0x541715(0x46e)](applyCharMap(boldItalicCharMap, _0xf1d899)), $(_0x541715(0x4b5))['html'](applyCharMap(monospaceCharMap, _0xf1d899)), $(_0x541715(0x4b6))[_0x541715(0x46e)](applyCharMap(upperAnglesCharMap, _0xf1d899)), $('.greekCharMap')[_0x541715(0x46e)](applyCharMap(greekCharMap, _0xf1d899)), $(_0x541715(0x4b7))[_0x541715(0x46e)](applyCharMap(symbolsCharMap, _0xf1d899)), $('.currencyCharMap')[_0x541715(0x46e)](applyCharMap(currencyCharMap, _0xf1d899)), $(_0x541715(0x4b8))[_0x541715(0x46e)](applyCharMap(asianStyleCharMap, _0xf1d899)), $(_0x541715(0x4b9))[_0x541715(0x46e)](applyCharMap(asianStyle2CharMap, _0xf1d899)), $('.thickBlockFramed')[_0x541715(0x46e)](thickBlockFramed(_0xf1d899)), $('.diametricAngleFrame')[_0x541715(0x46e)](diametricAngleFrame(_0xf1d899)), $(_0x541715(0x4ba))[_0x541715(0x46e)](wavyJoiner(_0xf1d899)), $(_0x541715(0x4bb))[_0x541715(0x46e)](dottyJoiner(_0xf1d899)), $('.kirbyHug')[_0x541715(0x46e)](kirbyHug(_0xf1d899)), $(_0x541715(0x4bc))[_0x541715(0x46e)](vaporwaveText(_0xf1d899)), $('.vaporwaveText1')[_0x541715(0x46e)](vaporwaveText1(_0xf1d899)), $(_0x541715(0x4bd))['html'](vaporwaveText2(_0xf1d899)), $(_0x541715(0x4be))[_0x541715(0x46e)](littleSparkles(_0xf1d899)), $(_0x541715(0x4bf))[_0x541715(0x46e)](weirdBox(_0xf1d899)), $(_0x541715(0x4c0))[_0x541715(0x46e)](thickBox(_0xf1d899)), $(_0x541715(0x4c1))[_0x541715(0x46e)](zigzagJoiner(_0xf1d899)), $('.hashJoiner')[_0x541715(0x46e)](hashJoiner(_0xf1d899)), $('.starJoiner')['html'](starJoiner(_0xf1d899)), $(_0x541715(0x4c2))[_0x541715(0x46e)](connectedJoiner(_0xf1d899)), $(_0x541715(0x4c3))[_0x541715(0x46e)](arrowjoin(_0xf1d899)), $(_0x541715(0x4c4))[_0x541715(0x46e)](dotBoxtwo(_0xf1d899)), $(_0x541715(0x4c5))[_0x541715(0x46e)](dotBox(_0xf1d899)), $(_0x541715(0x4c6))[_0x541715(0x46e)](diametricBox(_0xf1d899)), $(_0x541715(0x4c7))[_0x541715(0x46e)](arrowBox(_0xf1d899)), $(_0x541715(0x4c8))[_0x541715(0x46e)](curlybrackets(_0xf1d899)), $(_0x541715(0x4c9))[_0x541715(0x46e)](singlewavyJoiner(_0xf1d899)), $(_0x541715(0x4ca))[_0x541715(0x46e)](firework(_0xf1d899)), $(_0x541715(0x4cb))[_0x541715(0x46e)](stinky(_0xf1d899)), $(_0x541715(0x4cc))['html'](heartsBetween(_0xf1d899)), $(_0x541715(0x4cd))[_0x541715(0x46e)](arrowBelow(_0xf1d899)), $(_0x541715(0x4ce))[_0x541715(0x46e)](crossAboveBelow(_0xf1d899)), $(_0x541715(0x4cf))[_0x541715(0x46e)](wingdings(_0xf1d899)), $('.fullCrazy')[_0x541715(0x46e)](fullCrazy(_0xf1d899)), $(_0x541715(0x4d0))['html'](crazyWithFlourishOrSymbols(_0xf1d899)), $(_0x541715(0x4d1))[_0x541715(0x46e)](cuteText(_0xf1d899)), $(_0x541715(0x4d2))[_0x541715(0x46e)](star0(_0xf1d899)), $(_0x541715(0x4d3))[_0x541715(0x46e)](star1(_0xf1d899)), $(_0x541715(0x4d4))[_0x541715(0x46e)](star2(_0xf1d899)), $(_0x541715(0x4d5))['html'](star3(_0xf1d899)), $('.star4')['html'](star4(_0xf1d899)), $(_0x541715(0x4d6))[_0x541715(0x46e)](star5(_0xf1d899)), $(_0x541715(0x4d7))[_0x541715(0x46e)](star6(_0xf1d899)), $('.star7')[_0x541715(0x46e)](star7(_0xf1d899)), $('.star8')[_0x541715(0x46e)](star8(_0xf1d899)), $(_0x541715(0x4d8))['html'](star9(_0xf1d899)), $('.star10')[_0x541715(0x46e)](star10(_0xf1d899)), $(_0x541715(0x4d9))[_0x541715(0x46e)](heart0(_0xf1d899)), $('.heart1')['html'](heart1(_0xf1d899)), $(_0x541715(0x4da))[_0x541715(0x46e)](heart2(_0xf1d899)), $('.heart3')[_0x541715(0x46e)](heart3(_0xf1d899)), $(_0x541715(0x4db))[_0x541715(0x46e)](heart4(_0xf1d899)), $('.heart5')[_0x541715(0x46e)](heart5(_0xf1d899)), $(_0x541715(0x4dc))['html'](heart6(_0xf1d899)), $(_0x541715(0x4dd))[_0x541715(0x46e)](heart7(_0xf1d899)), $('.emoticon0')[_0x541715(0x46e)](emoticon0(_0xf1d899)), $(_0x541715(0x4de))[_0x541715(0x46e)](emoticon1(_0xf1d899)), $(_0x541715(0x4df))[_0x541715(0x46e)](emoticon2(_0xf1d899)), $(_0x541715(0x4e0))[_0x541715(0x46e)](emoticon3(_0xf1d899)), $(_0x541715(0x4e1))['html'](emoticon4(_0xf1d899)), $(_0x541715(0x4e2))[_0x541715(0x46e)](emoticon5(_0xf1d899)), $(_0x541715(0x4e3))['html'](emoticon6(_0xf1d899)), $(_0x541715(0x4e4))['html'](emoticon7(_0xf1d899)), $(_0x541715(0x4e5))[_0x541715(0x46e)](thankyou0(_0xf1d899)), $(_0x541715(0x4e6))[_0x541715(0x46e)](thankyou1(_0xf1d899)), $('.thankyou2')[_0x541715(0x46e)](thankyou2(_0xf1d899)), $(_0x541715(0x4e7))[_0x541715(0x46e)](thankyou3(_0xf1d899)), $(_0x541715(0x4e8))[_0x541715(0x46e)](thankyou4(_0xf1d899)), $(_0x541715(0x4e9))['html'](thankyou5(_0xf1d899)), $(_0x541715(0x4ea))[_0x541715(0x46e)](thankyou6(_0xf1d899)), $(_0x541715(0x4eb))[_0x541715(0x46e)](thankyou7(_0xf1d899)), $('.sad0')['html'](sad0(_0xf1d899)), $(_0x541715(0x4ec))[_0x541715(0x46e)](sad1(_0xf1d899)), $(_0x541715(0x4ed))['html'](sad2(_0xf1d899)), $(_0x541715(0x4ee))['html'](sad3(_0xf1d899)), $('.sad4')['html'](sad4(_0xf1d899)), $(_0x541715(0x4ef))[_0x541715(0x46e)](sad5(_0xf1d899)), $(_0x541715(0x4f0))[_0x541715(0x46e)](sad6(_0xf1d899)), $(_0x541715(0x4f1))[_0x541715(0x46e)](sad7(_0xf1d899)), $(_0x541715(0x4f2))[_0x541715(0x46e)](cuteText1(_0xf1d899)), $(_0x541715(0x4f3))[_0x541715(0x46e)](cuteText2(_0xf1d899)), $(_0x541715(0x4f4))['html'](cuteText3(_0xf1d899)), $(_0x541715(0x4f5))[_0x541715(0x46e)](cuteText4(_0xf1d899)), $(_0x541715(0x4f6))[_0x541715(0x46e)](cuteText5(_0xf1d899)), $(_0x541715(0x4f7))['html'](crazyWithFlourishOrSymbols1(_0xf1d899)), $(_0x541715(0x4f8))[_0x541715(0x46e)](crazyWithFlourishOrSymbols2(_0xf1d899)), $(_0x541715(0x4f9))[_0x541715(0x46e)](crazyWithFlourishOrSymbols3(_0xf1d899)), $(_0x541715(0x4fa))[_0x541715(0x46e)](crazyWithFlourishOrSymbols4(_0xf1d899)), $(_0x541715(0x4fb))[_0x541715(0x46e)](crazyWithFlourishOrSymbols5(_0xf1d899)), $(_0x541715(0x4fc))[_0x541715(0x46e)](fullCrazy1(_0xf1d899)), $(_0x541715(0x4fd))['html'](fullCrazy2(_0xf1d899)), $(_0x541715(0x4fe))[_0x541715(0x46e)](fullCrazy3(_0xf1d899)), $(_0x541715(0x4ff))[_0x541715(0x46e)](fullCrazy4(_0xf1d899)), $(_0x541715(0x500))[_0x541715(0x46e)](fullCrazy5(_0xf1d899)), $(_0x541715(0x501))[_0x541715(0x46e)](wrap1(_0xf1d899)), $('.wrap2')[_0x541715(0x46e)](wrap2(_0xf1d899)), $('.wrap3')[_0x541715(0x46e)](wrap3(_0xf1d899)), $(_0x541715(0x502))[_0x541715(0x46e)](wrap4(_0xf1d899)), $(_0x541715(0x503))[_0x541715(0x46e)](wrap5(_0xf1d899));
    }
    $(_0x482a09(0x504))['click'](function() {
        var _0x5c64d4 = _0x482a09;
        $(_0x5c64d4(0x46a))['val']('');
    });

    function _0x34cd62() {
        var _0x4818d4 = _0x482a09,
            _0x3f966b = document[_0x4818d4(0x505)](_0x4818d4(0x506)),
            _0x52cfcc = _0x3f966b[_0x4818d4(0x505)](_0x4818d4(0x507));
        document['querySelectorAll'](_0x4818d4(0x508))['forEach'](_0x5abe98 => {
            var _0x2fc60d = _0x4818d4;
            _0x5abe98[_0x2fc60d(0x509)]('click', () => {
                var _0x1ebaaa = _0x2fc60d;
                _0x52cfcc[_0x1ebaaa(0x50a)] = _0x5abe98[_0x1ebaaa(0x505)]('p')[_0x1ebaaa(0x50b)], _0x4900a3(_0x52cfcc), _0x3f966b[_0x1ebaaa(0x50c)]['add']('copied-show'), setTimeout(() => {
                    var _0x39a4ea = _0x1ebaaa;
                    _0x3f966b[_0x39a4ea(0x50c)][_0x39a4ea(0x50d)]('copied-show');
                }, 0x3e8);
            });
        });
    }
    _0x34cd62();

    function _0x4900a3(_0x2ef9cc) {
        var _0x479b3d = _0x482a09,
            _0x474105 = document['createElement'](_0x479b3d(0x50e));
        _0x474105[_0x479b3d(0x50a)] = _0x2ef9cc[_0x479b3d(0x50b)] || _0x2ef9cc[_0x479b3d(0x50a)], document['body'][_0x479b3d(0x50f)](_0x474105), _0x474105[_0x479b3d(0x510)](), document[_0x479b3d(0x511)](_0x479b3d(0x512)), _0x474105['remove']();
    }
});