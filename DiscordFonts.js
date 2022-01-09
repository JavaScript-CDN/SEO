var _0x1395d1 = _0x38d0,
    normal = _0x1395d1(0x0),
    default_text = _0x1395d1(0x1);

function applyCharMap(_0x3629f3, _0x158c29) {
    var _0x4e7acb = _0x1395d1;
    let _0x64c9c0 = '';
    for (let _0x1b7937 of _0x158c29[_0x4e7acb(0x2)]('')) {
        if (_0x3629f3[_0x1b7937] !== undefined) _0x64c9c0 += _0x3629f3[_0x1b7937];
        else {
            if (_0x3629f3[_0x1b7937['toLowerCase']()] !== undefined) _0x64c9c0 += _0x3629f3[_0x1b7937[_0x4e7acb(0x3)]()];
            else _0x64c9c0 += _0x1b7937;
        }
    }
    return _0x64c9c0;
}

function invertedSquaresCharMapFun(_0x5694ef) {
    return applyCharMap(invertedSquaresCharMap, _0x5694ef);
}

function wideTextCharMapFun(_0x34144c) {
    return applyCharMap(wideTextCharMap, _0x34144c);
}

function squaresCharMapFun(_0x1ca5c1) {
    return applyCharMap(squaresCharMap, _0x1ca5c1);
}

function subscriptCharMapFun(_0x38cedb) {
    return applyCharMap(subscriptCharMap, _0x38cedb);
}

function bentTextCharMapFun(_0x455d4b) {
    return applyCharMap(bentTextCharMap, _0x455d4b);
}

function neonCharMapFun(_0x41a56d) {
    return applyCharMap(neonCharMap, _0x41a56d);
}

function futureAlienCharMapFun(_0xdd2132) {
    return applyCharMap(futureAlienCharMap, _0xdd2132);
}

function squiggleCharMapFun(_0x1b1602) {
    return applyCharMap(squiggleCharMap, _0x1b1602);
}

function squiggle2CharMapFun(_0x45b0a9) {
    return applyCharMap(squiggle2CharMap, _0x45b0a9);
}

function squiggle3CharMapFun(_0x5b02e0) {
    return applyCharMap(squiggle3CharMap, _0x5b02e0);
}

function squiggle4CharMapFun(_0x11d292) {
    return applyCharMap(squiggle4CharMap, _0x11d292);
}

function squiggle5CharMapFun(_0x3e99f1) {
    return applyCharMap(squiggle5CharMap, _0x3e99f1);
}

function squiggle6CharMapFun(_0x47719e) {
    return applyCharMap(squiggle6CharMap, _0x47719e);
}

function boldCharMapFun(_0x4319de) {
    return applyCharMap(boldCharMap, _0x4319de);
}

function oldEnglishCharMapFun(_0x319516) {
    return applyCharMap(oldEnglishCharMap, _0x319516);
}

function medievalCharMapFun(_0x52d636) {
    return applyCharMap(medievalCharMap, _0x52d636);
}

function cursiveCharMapFun(_0xa000) {
    return applyCharMap(cursiveCharMap, _0xa000);
}

function doubleStruckCharMapFun(_0x44efc2) {
    return applyCharMap(doubleStruckCharMap, _0x44efc2);
}

function italicCharMapFun(_0x48a77c) {
    return applyCharMap(italicCharMap, _0x48a77c);
}

function boldItalicCharMapFun(_0x4b4a21) {
    return applyCharMap(boldItalicCharMap, _0x4b4a21);
}

function monospaceCharMapFun(_0x5bbd79) {
    return applyCharMap(monospaceCharMap, _0x5bbd79);
}

function upperAnglesCharMapFun(_0x2f2f17) {
    return applyCharMap(upperAnglesCharMap, _0x2f2f17);
}

function greekCharMapFun(_0x2ef554) {
    return applyCharMap(greekCharMap, _0x2ef554);
}

function symbolsCharMapFun(_0x2c630c) {
    return applyCharMap(symbolsCharMap, _0x2c630c);
}

function currencyCharMapFun(_0x1bcc42) {
    return applyCharMap(currencyCharMap, _0x1bcc42);
}

function asianStyleCharMapFun(_0x557858) {
    return applyCharMap(asianStyleCharMap, _0x557858);
}

function asianStyle2CharMapFun(_0xabb389) {
    return applyCharMap(asianStyle2CharMap, _0xabb389);
}
var luni = new Lunicode();
luni[_0x1395d1(0x4)]['creepify'][_0x1395d1(0x5)]['maxHeight'] = 0xa;

function crazyWithFlourishOrSymbols(_0x2bb07a) {
    if (Math['random']() < 0.7) return wrapInSymbols(crazifyText(_0x2bb07a), 0x2);
    else return wrapInFlourish(crazifyText(_0x2bb07a), 0x2);
}

function illuminati(_0x11de7e) {
    var _0x3e28ec = _0x1395d1;
    return applyCharMap(doubleStruckCharMap, _0x3e28ec(0x6) + _0x11de7e + _0x3e28ec(0x7));
}

function textgun(_0x86f20) {
    var _0x273635 = _0x1395d1;
    return '▄︻デ' + _0x86f20['split']('')[_0x273635(0x8)](_0x273635(0x9)) + _0x273635(0xa);
}

function minigame(_0x2a1122) {
    var _0x131d75 = _0x1395d1;
    return _0x131d75(0xb) + luni[_0x131d75(0x4)][_0x131d75(0xc)]['encode'](_0x2a1122) + _0x131d75(0xd);
}

function pubggame1(_0x163d64) {
    return applyCharMap(cursiveCharMap, '༒☬' + _0x163d64 + '☬༒');
}

function pubggame2(_0x33a9ac) {
    var _0xc8aa25 = _0x1395d1;
    return applyCharMap(cursiveCharMap, _0xc8aa25(0xe) + _0x33a9ac + _0xc8aa25(0xf));
}

function pubggame3(_0xc3958f) {
    var _0x1731f2 = _0x1395d1;
    return applyCharMap(invertedSquaresCharMap, '꧁𓊈𒆜' + _0xc3958f + _0x1731f2(0x10));
}

function bricks(_0x407c1b) {
    var _0x5640ad = _0x1395d1;
    return applyCharMap(squaresCharMap, _0x5640ad(0x11) + _0x407c1b + _0x5640ad(0x12));
}

function bigrus(_0x3dd98b) {
    var _0x1238a2 = _0x1395d1;
    return applyCharMap(boldItalicCharMap, _0x1238a2(0x13) + _0x3dd98b + '♥࿐٭');
}

function strikeThrough(_0x643e4e) {
    var _0x2509bb = _0x1395d1;
    return _0x643e4e[_0x2509bb(0x2)]('')[_0x2509bb(0x8)]('̶') + '̶';
}

function tildeStrikeThrough(_0x3b45a8) {
    var _0x523ffc = _0x1395d1;
    return _0x3b45a8['split']('')[_0x523ffc(0x8)]('̴') + '̴';
}

function underline(_0x22100e) {
    var _0xb34b6f = _0x1395d1;
    return _0x22100e['split']('')[_0xb34b6f(0x8)]('̲') + '̲';
}

function doubleUnderline(_0x23aecf) {
    var _0x59ee8e = _0x1395d1;
    return _0x23aecf[_0x59ee8e(0x2)]('')['join']('̳') + '̳';
}

function _0x38d0(_0x4ba30a, _0x38d09a) {
    var _0x1a3cae = _0x4ba3();
    return _0x38d0 = function(_0x35eaaa, _0x2e0f1e) {
        _0x35eaaa = _0x35eaaa - 0x0;
        var _0x3cf15d = _0x1a3cae[_0x35eaaa];
        return _0x3cf15d;
    }, _0x38d0(_0x4ba30a, _0x38d09a);
}

function slashThrough(_0x3a757b) {
    return _0x3a757b['split']('')['join']('̷') + '̷';
}

function stinky(_0x248fcc) {
    var _0x229f35 = _0x1395d1;
    return _0x248fcc[_0x229f35(0x2)]('')[_0x229f35(0x8)]('̾') + '̾';
}

function heartsBetween(_0x244035) {
    var _0x3d1310 = _0x1395d1;
    return _0x244035[_0x3d1310(0x2)]('')[_0x3d1310(0x8)]('♥');
}

function arrowBelow(_0x3aa203) {
    var _0x4cb6ee = _0x1395d1;
    return _0x3aa203['split']('')[_0x4cb6ee(0x8)]('͎') + '͎';
}

function crossAboveBelow(_0x14b030) {
    var _0x50dd8b = _0x1395d1;
    return _0x14b030['split']('')[_0x50dd8b(0x8)]('͓̽') + '͓̽';
}
const wingdingsCharMap = {
    0x0: _0x1395d1(0x14),
    0x1: _0x1395d1(0x15),
    0x2: _0x1395d1(0x16),
    0x3: _0x1395d1(0x17),
    0x4: _0x1395d1(0x18),
    0x5: _0x1395d1(0x19),
    0x6: '⌛︎',
    0x7: _0x1395d1(0x1a),
    0x8: '🖰︎',
    0x9: _0x1395d1(0x1b),
    '!': '✏︎',
    '\x22': '✂︎',
    '#': '✁︎',
    '$': _0x1395d1(0x1c),
    '%': _0x1395d1(0x1d),
    '&': _0x1395d1(0x1e),
    '\x27': _0x1395d1(0x1f),
    '(': _0x1395d1(0x20),
    ')': '✆︎',
    '*': _0x1395d1(0x21),
    '+': '🖃︎',
    ',': _0x1395d1(0x22),
    '-': _0x1395d1(0x23),
    '.': _0x1395d1(0x24),
    '/': _0x1395d1(0x25),
    ':': _0x1395d1(0x26),
    ';': '🖴︎',
    '<': '🖫︎',
    '=': _0x1395d1(0x27),
    '>': '✇︎',
    '?': '✍︎',
    'A': '✌︎',
    'B': _0x1395d1(0x28),
    'C': _0x1395d1(0x29),
    'D': _0x1395d1(0x2a),
    'E': '☜︎',
    'F': '☞︎',
    'G': '☝︎',
    'H': '☟︎',
    'I': '✋︎',
    'J': '☺︎',
    'K': '😐︎',
    'L': '☹︎',
    'M': _0x1395d1(0x2b),
    'N': '☠︎',
    'O': '⚐︎',
    'P': '🏱︎',
    'Q': '✈︎',
    'R': '☼︎',
    'S': '💧︎',
    'T': '❄︎',
    'U': _0x1395d1(0x2c),
    'V': '✞︎',
    'W': _0x1395d1(0x2d),
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
    '·': '🕐︎',
    '¸': _0x1395d1(0x2e),
    '¹': _0x1395d1(0x2f),
    'º': _0x1395d1(0x30),
    '»': _0x1395d1(0x31),
    '¼': _0x1395d1(0x32),
    '½': '🕖︎',
    '¾': _0x1395d1(0x33),
    '¿': _0x1395d1(0x34),
    'À': '🕙︎',
    'Á': _0x1395d1(0x35),
    'Â': _0x1395d1(0x36),
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

function wingdings(_0x88587a) {
    var _0x4a51b1 = _0x1395d1;
    return _0x88587a[_0x4a51b1(0x2)]('')[_0x4a51b1(0x37)](function(_0x21fcf8) {
        return wingdingsCharMap[_0x21fcf8] ? wingdingsCharMap[_0x21fcf8] : _0x21fcf8;
    })[_0x4a51b1(0x8)]('');
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

function vaporwaveText(_0x35ae99) {
    var _0x434310 = _0x1395d1,
        _0x1b3904 = _0x35ae99[_0x434310(0x2)]('\x20')[_0x434310(0x38)];
    _0x35ae99 = applyCharMap(vaporwaveCharMap, _0x35ae99);
    var _0x2dbcea = getAsianChars(Math[_0x434310(0x39)](0x3, _0x1b3904));
    if (_0x1b3904 > 0x6) _0x2dbcea = _0x2dbcea['split']('')[_0x434310(0x37)](_0x1fab47 => _0x1fab47 + ['', ''][Math[_0x434310(0x3a)](Math[_0x434310(0x3b)]() * 0.6)])[_0x434310(0x8)]('');
    var _0x1d379a = [];
    return _0x1d379a['push'](_0x35ae99), _0x1d379a[_0x434310(0x8)]();
}

function vaporwaveText1(_0x25a746) {
    var _0x3ae724 = _0x1395d1,
        _0x4a7124 = _0x25a746[_0x3ae724(0x2)]('\x20')[_0x3ae724(0x38)];
    _0x25a746 = applyCharMap(vaporwaveCharMap, _0x25a746);
    var _0x18ac05 = getAsianChars(Math['max'](0x3, _0x4a7124));
    if (_0x4a7124 > 0x6) _0x18ac05 = _0x18ac05[_0x3ae724(0x2)]('')[_0x3ae724(0x37)](_0x41361f => _0x41361f + ['', ''][Math[_0x3ae724(0x3a)](Math[_0x3ae724(0x3b)]() * 0.6)])['join']('');
    var _0x196980 = [];
    return _0x196980['push'](_0x25a746[_0x3ae724(0x3c)](/　/g, '░')[_0x3ae724(0x3c)](/ａｅ/, 'æ')[_0x3ae724(0x3c)](/Ａ/g, 'Λ')[_0x3ae724(0x3c)](/Ｅ/g, function() {
        var _0x2c97a5 = _0x3ae724;
        return Math[_0x2c97a5(0x3b)]() > 0.5 ? 'Ξ' : 'Σ';
    })[_0x3ae724(0x3c)](/Ｏ/g, '♢')), _0x196980[_0x3ae724(0x8)]();
}

function vaporwaveText2(_0x281b2f) {
    var _0x3272a0 = _0x1395d1,
        _0x1d9db3 = _0x281b2f[_0x3272a0(0x2)]('\x20')[_0x3272a0(0x38)];
    _0x281b2f = applyCharMap(vaporwaveCharMap, _0x281b2f);
    var _0x3e4ce1 = getAsianChars(Math[_0x3272a0(0x39)](0x3, _0x1d9db3));
    if (_0x1d9db3 > 0x6) _0x3e4ce1 = _0x3e4ce1[_0x3272a0(0x2)]('')[_0x3272a0(0x37)](_0x62fa4d => _0x62fa4d + ['', ''][Math['round'](Math[_0x3272a0(0x3b)]() * 0.6)])[_0x3272a0(0x8)]('');
    var _0x4bd427 = [];
    return _0x4bd427[_0x3272a0(0x3d)]('【\ufeff' + _0x281b2f + '】'), _0x4bd427[_0x3272a0(0x8)]();
}

function getAsianChars(_0x32ad4b) {
    var _0x3887eb = _0x1395d1;
    if (!_0x32ad4b) _0x32ad4b = 0x1;
    var _0x31f2ee = _0x3887eb(0x3e),
        _0x9d8475 = '';
    for (var _0x421297 = 0x0; _0x421297 < _0x32ad4b; _0x421297++) {
        _0x9d8475 += _0x31f2ee[Math[_0x3887eb(0x3f)](Math[_0x3887eb(0x3b)]() * _0x31f2ee[_0x3887eb(0x38)])];
    }
    return _0x9d8475;
}
const flourishArray = [_0x1395d1(0x40), _0x1395d1(0x41), '★·.·´¯`·.·★\x20[[text]]\x20★·.·´¯`·.·★', '⚔️\x20[[text]]\x20⚔️', _0x1395d1(0x42), _0x1395d1(0x43), _0x1395d1(0x44), _0x1395d1(0x45), _0x1395d1(0x46), '[[text]]\x20☜(`o´)', _0x1395d1(0x47), _0x1395d1(0x48), _0x1395d1(0x49), _0x1395d1(0x4a), _0x1395d1(0x4b), _0x1395d1(0x4c), _0x1395d1(0x4d), '▁\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20[[text]]\x20█\x20▇\x20▆\x20▅\x20▄\x20▂\x20▁', _0x1395d1(0x4e), _0x1395d1(0x4f), 'ıllıllı\x20[[text]]\x20ıllıllı', _0x1395d1(0x50), _0x1395d1(0x51), _0x1395d1(0x52), '•]••´º´•»\x20[[text]]\x20«•´º´••[•', _0x1395d1(0x53), _0x1395d1(0x54), '.•°¤*(¯`★´¯)*¤°\x20[[text]]\x20°¤*(¯´★`¯)*¤°•.', '(¯´•._.•\x20[[text]]\x20•._.•´¯)', _0x1395d1(0x55), _0x1395d1(0x56), _0x1395d1(0x57), _0x1395d1(0x58), _0x1395d1(0x59), _0x1395d1(0x5a), '•°¯`••\x20[[text]]\x20••´¯°•', _0x1395d1(0x5b), _0x1395d1(0x5c), _0x1395d1(0x5d), '¸„.-•~¹°”ˆ˜¨\x20[[text]]\x20¨˜ˆ”°¹~•-.„¸', _0x1395d1(0x5e), _0x1395d1(0x5f), _0x1395d1(0x60), _0x1395d1(0x61), _0x1395d1(0x62), '—(••÷[\x20[[text]]\x20]÷••)—', _0x1395d1(0x63), _0x1395d1(0x64), ',-*\x27\x20^\x20\x27~*-.,_,.-*~\x20[[text]]\x20~*-.,_,.-*~\x27\x20^\x20\x27*-,', '`•.,¸¸,.•´¯\x20[[text]]\x20¯`•.,¸¸,.•´', _0x1395d1(0x65), '➶➶➶➶➶\x20[[text]]\x20➷➷➷➷➷', _0x1395d1(0x66), _0x1395d1(0x67), '【｡_｡】\x20[[text]]\x20【｡_｡】', _0x1395d1(0x68), _0x1395d1(0x69), _0x1395d1(0x6a), _0x1395d1(0x59), _0x1395d1(0x6b), _0x1395d1(0x6c), _0x1395d1(0x6d), _0x1395d1(0x6e), '¤¸¸.•´¯`•¸¸.•..>>\x20[[text]]\x20<<..•.¸¸•´¯`•.¸¸¤', _0x1395d1(0x6f), '꧁𓊈𒆜\x20[[text]]\x20𒆜𓊉꧂', _0x1395d1(0x70), '⫷\x20[[text]]\x20⫸', _0x1395d1(0x71), _0x1395d1(0x72), _0x1395d1(0x73), _0x1395d1(0x74), _0x1395d1(0x75), _0x1395d1(0x76), '✿.｡.:*\x20☆:**:.\x20[[text]]\x20.:**:.☆*.:｡.✿', _0x1395d1(0x77), _0x1395d1(0x78), '«-(¯`v´¯)-«\x20[[text]]\x20»-(¯`v´¯)-»'];

function wrapInFlourish(_0x3f3eb4) {
    var _0x15d1e7 = _0x1395d1;
    return flourishArray[Math[_0x15d1e7(0x3f)](Math[_0x15d1e7(0x3b)]() * flourishArray['length'])][_0x15d1e7(0x3c)](_0x15d1e7(0x79), _0x3f3eb4);
}

function Flourishlist(_0x164866, _0x339c30) {
    var _0x4c8b8b = _0x1395d1;
    return flourishArray[_0x164866]['replace'](_0x4c8b8b(0x79), _0x339c30);
}

function wrapInSymbols(_0x466cd8, _0x384911) {
    return randomSymbols(_0x384911) + '\x20\x20' + _0x466cd8 + '\x20\x20' + randomSymbols(_0x384911);
}

function firework(_0x97f5fc) {
    var _0x59d3d7 = _0x1395d1;
    return _0x97f5fc['split']('')[_0x59d3d7(0x8)]('҉') + '҉';
}

function weirdBox(_0x4c2a5a) {
    var _0x2190e7 = _0x1395d1;
    return _0x4c2a5a[_0x2190e7(0x3c)](/([^\s])/g, _0x2190e7(0x7a));
}

function curlybrackets(_0xb56492) {
    var _0x2372e7 = _0x1395d1;
    return _0xb56492['replace'](/([^\s])/g, _0x2372e7(0x7b));
}

function singlewavyJoiner(_0x34be5d) {
    var _0x28a673 = _0x1395d1;
    return '〜' + _0x34be5d['split']('')[_0x28a673(0x8)]('∿') + '〜';
}

function thickBox(_0x3ebdf2) {
    var _0x115e61 = _0x1395d1;
    return _0x3ebdf2[_0x115e61(0x3c)](/([^\s])/g, '⟦$1⟧');
}

function zigzagJoiner(_0x555c75) {
    var _0x5a71d4 = _0x1395d1;
    return _0x555c75[_0x5a71d4(0x3c)](/([^\s])/g, _0x5a71d4(0x7c));
}

function hashJoiner(_0x1ebef3) {
    var _0xde55eb = _0x1395d1;
    return _0x1ebef3[_0xde55eb(0x2)]('')[_0xde55eb(0x8)]('⨳');
}

function starJoiner(_0x45446a) {
    return _0x45446a['replace'](/([^\s])/g, '⦚$1⦚');
}

function connectedJoiner(_0x201b61) {
    var _0x1d9162 = _0x1395d1;
    return _0x201b61[_0x1d9162(0x2)]('')[_0x1d9162(0x8)]('⊶');
}

function arrowjoin(_0x2b8412) {
    var _0x453cc9 = _0x1395d1;
    return _0x2b8412[_0x453cc9(0x3c)](/([^\s])/g, _0x453cc9(0x7d));
}

function dotBoxtwo(_0x2dc147) {
    var _0x486e6f = _0x1395d1;
    return _0x2dc147[_0x486e6f(0x2)]('')[_0x486e6f(0x8)](_0x486e6f(0x7e));
}

function dotBox(_0x1175d7) {
    var _0x5ce8f3 = _0x1395d1;
    return _0x1175d7['replace'](/([^\s])/g, _0x5ce8f3(0x7f));
}

function diametricBox(_0x5b89de) {
    var _0x117403 = _0x1395d1;
    return _0x5b89de[_0x117403(0x3c)](/([^\s])/g, _0x117403(0x80));
}

function arrowBox(_0x2c2d70) {
    var _0xbbaf4d = _0x1395d1;
    return _0x2c2d70[_0xbbaf4d(0x3c)](/([^\s])/g, _0xbbaf4d(0x81));
}

function littleSparkles(_0x3b655d) {
    var _0x4caecf = _0x1395d1;
    return _0x4caecf(0x82) + _0x3b655d + _0x4caecf(0x83);
}

function kirbyHug(_0x18525d) {
    var _0x3c099a = _0x1395d1;
    return _0x3c099a(0x84) + _0x18525d + '\x20♥';
}

function dottyJoiner(_0x28c424) {
    var _0x2ccace = _0x1395d1;
    return '░' + _0x28c424[_0x2ccace(0x2)]('')[_0x2ccace(0x8)]('░') + '░';
}

function wavyJoiner(_0x453e2b) {
    var _0x398367 = _0x1395d1;
    return '≋' + _0x453e2b[_0x398367(0x2)]('')[_0x398367(0x8)]('≋') + '≋';
}

function diametricAngleFrame(_0x385d54) {
    var _0x444892 = _0x1395d1;
    return _0x385d54[_0x444892(0x3c)](/([^\s])/g, '『$1』');
}

function thickBlockFramed(_0x5a62be) {
    return _0x5a62be['replace'](/([^\s])/g, '【$1】');
}

function star0(_0x539173) {
    var _0x45b5f4 = _0x1395d1;
    return applyCharMap(italicCharMap, _0x45b5f4(0x85) + _0x539173 + '★彡');
}

function star1(_0x3d9014) {
    var _0x1ebe36 = _0x1395d1;
    return applyCharMap(monospaceCharMap, _0x1ebe36(0x86) + _0x3d9014 + '٭⊹•꧂');
}

function star2(_0x172269) {
    var _0x5b2370 = _0x1395d1;
    return applyCharMap(currencyCharMap, _0x5b2370(0x87) + _0x172269 + '🌟⭐ıllıllı');
}

function star3(_0x6e6352) {
    var _0x44f2cb = _0x1395d1;
    return applyCharMap(monospaceCharMap, _0x44f2cb(0x88) + _0x6e6352 + _0x44f2cb(0x89));
}

function star4(_0x46ef86) {
    var _0x25c006 = _0x1395d1;
    return applyCharMap(squaresCharMap, _0x25c006(0x8a) + _0x46ef86 + _0x25c006(0x8b));
}

function star5(_0x3f82aa) {
    var _0x4baeca = _0x1395d1;
    return applyCharMap(doubleStruckCharMap, _0x4baeca(0x8c) + _0x3f82aa + _0x4baeca(0x8d));
}

function star6(_0x2d7748) {
    var _0x472a3b = _0x1395d1;
    return applyCharMap(invertedSquaresCharMap, '¨˜ˆ”°⍣~•✡⊹٭„¸\x20\x20' + _0x2d7748 + _0x472a3b(0x8e));
}

function star7(_0x2b8f7f) {
    var _0x254594 = _0x1395d1;
    return applyCharMap(asianStyleCharMap, _0x254594(0x8e) + _0x2b8f7f + '¨˜ˆ”°⍣~•✡⊹٭„¸');
}

function star8(_0x2e8489) {
    var _0x35bd43 = _0x1395d1;
    return applyCharMap(asianStyle2CharMap, _0x35bd43(0x8f) + _0x2e8489 + '★⡀.•☆•.★');
}

function star9(_0x5212bc) {
    var _0x31f6de = _0x1395d1;
    return applyCharMap(neonCharMap, _0x31f6de(0x90) + _0x5212bc + '✬☆*.•⨳•.¤⊹٭');
}

function star10(_0x53f1f2) {
    var _0x208307 = _0x1395d1;
    return applyCharMap(squiggle6CharMap, _0x208307(0x90) + _0x53f1f2 + '✬☆*.•⨳•.¤⊹٭');
}

function heart0(_0x2e5638) {
    var _0x23d398 = _0x1395d1;
    return applyCharMap(squiggle5CharMap, _0x23d398(0x91) + _0x2e5638 + _0x23d398(0x92));
}

function heart1(_0x302318) {
    return applyCharMap(futureAlienCharMap, '෴❤️෴\x20\x20' + _0x302318 + '෴❤️෴');
}

function heart2(_0x38a57d) {
    var _0x27fc99 = _0x1395d1;
    return applyCharMap(boldCharMap, _0x27fc99(0x93) + _0x38a57d + _0x27fc99(0x94));
}

function heart3(_0x51d1a5) {
    var _0x49880f = _0x1395d1;
    return applyCharMap(firework, '♡〜ლ(๑癶\x20' + _0x51d1a5 + _0x49880f(0x95));
}

function heart4(_0x26f7f0) {
    var _0x58391b = _0x1395d1;
    return applyCharMap(symbolsCharMap, _0x58391b(0x96) + _0x26f7f0 + _0x58391b(0x97));
}

function heart5(_0x230ee2) {
    var _0x3ad149 = _0x1395d1;
    return applyCharMap(bentTextCharMap, '🌸ξξ(∵❤◡❤∵)ξξ·¯·♩¸\x20' + _0x230ee2 + _0x3ad149(0x98));
}

function heart6(_0x1f99ae) {
    var _0x2b918d = _0x1395d1;
    return applyCharMap(upperAnglesCharMap, _0x2b918d(0x99) + _0x1f99ae + _0x2b918d(0x99));
}

function heart7(_0x1d2850) {
    var _0x7d56a7 = _0x1395d1;
    return applyCharMap(boldCharMap, _0x7d56a7(0x9a) + _0x1d2850 + _0x7d56a7(0x9b));
}

function emoticon0(_0x58776e) {
    var _0x2cf07c = _0x1395d1;
    return applyCharMap(oldEnglishCharMap, _0x2cf07c(0x9c) + _0x58776e + _0x2cf07c(0x9d));
}

function emoticon1(_0x1142e3) {
    return applyCharMap(squiggle6CharMap, 'щ（ﾟДﾟщ）\x20<\x20' + _0x1142e3 + ')');
}

function emoticon2(_0x2db6bf) {
    var _0x96c350 = _0x1395d1;
    return applyCharMap(boldCharMap, _0x96c350(0x9e) + _0x2db6bf + '');
}

function emoticon3(_0x51bc19) {
    var _0x381602 = _0x1395d1;
    return applyCharMap(squiggle5CharMap, _0x381602(0x9f) + _0x51bc19 + '');
}

function emoticon4(_0x520667) {
    var _0x4bf3bb = _0x1395d1;
    return applyCharMap(cursiveCharMap, _0x4bf3bb(0xa0) + _0x520667 + _0x4bf3bb(0xa1));
}

function emoticon5(_0x5b8f76) {
    var _0x10870a = _0x1395d1;
    return applyCharMap(squiggle3CharMap, _0x10870a(0xa2) + _0x5b8f76 + '(✿ヘᴥヘ)');
}

function emoticon6(_0x33fe37) {
    var _0xe74e3e = _0x1395d1;
    return applyCharMap(wideTextCharMap, _0xe74e3e(0xa3) + _0x33fe37 + _0xe74e3e(0xa4));
}

function emoticon7(_0x4279c8) {
    var _0x5a165a = _0x1395d1;
    return applyCharMap(squiggle2CharMap, _0x5a165a(0xa5) + _0x4279c8 + _0x5a165a(0xa6));
}

function thankyou0(_0x41ac7f) {
    var _0x4c02ab = _0x1395d1;
    return applyCharMap(doubleStruckCharMap, '(･ω･)♪' + _0x41ac7f + _0x4c02ab(0xa7));
}

function thankyou1(_0x4f64e6) {
    var _0x506be8 = _0x1395d1;
    return applyCharMap(cursiveCharMap, _0x506be8(0xa8) + _0x4f64e6 + '(*ˊᗜˋ*)');
}

function thankyou2(_0x540a27) {
    var _0x2b03b5 = _0x1395d1;
    return applyCharMap(doubleStruckCharMap, _0x2b03b5(0xa9) + _0x540a27 + _0x2b03b5(0xaa));
}

function thankyou3(_0x267f9a) {
    var _0x4599cc = _0x1395d1;
    return applyCharMap(upperAnglesCharMap, _0x4599cc(0xab) + _0x267f9a + '');
}

function thankyou4(_0x8e5cbf) {
    var _0x12085d = _0x1395d1;
    return applyCharMap(squiggle2CharMap, _0x12085d(0xac) + _0x8e5cbf + '');
}

function thankyou5(_0x1e5c21) {
    var _0x1ccff7 = _0x1395d1;
    return applyCharMap(asianStyleCharMap, _0x1ccff7(0xad) + _0x1e5c21 + _0x1ccff7(0xae));
}

function thankyou6(_0x2a8c12) {
    var _0x1b7554 = _0x1395d1;
    return applyCharMap(medievalCharMap, '+｡:.ﾟヽ(*´∀)ﾉﾟ' + _0x2a8c12 + _0x1b7554(0xaf));
}

function thankyou7(_0x37670b) {
    var _0x4de84b = _0x1395d1;
    return applyCharMap(neonCharMap, '(*ゝω・)' + _0x37670b + _0x4de84b(0xa9));
}

function sad0(_0x10d23d) {
    var _0x5e48b7 = _0x1395d1;
    return applyCharMap(squiggle5CharMap, _0x5e48b7(0xb0) + _0x10d23d + _0x5e48b7(0xb1));
}

function sad1(_0x8a53dd) {
    var _0x214044 = _0x1395d1;
    return applyCharMap(monospaceCharMap, _0x214044(0xb2) + _0x8a53dd + '\x20(︶︹︺)');
}

function sad2(_0x2ae0e5) {
    return applyCharMap(squiggleCharMap, '(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)' + _0x2ae0e5 + '\x20(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)');
}

function sad3(_0xd79998) {
    var _0x157091 = _0x1395d1;
    return applyCharMap(italicCharMap, _0x157091(0xb3) + _0xd79998 + _0x157091(0xb4));
}

function sad4(_0x12b3f4) {
    var _0x2d667f = _0x1395d1;
    return applyCharMap(squiggle3CharMap, '(ಥ\x20͜ʖಥ)\x20' + _0x12b3f4 + _0x2d667f(0xb5));
}

function sad5(_0x28c7ef) {
    var _0x4e5cb7 = _0x1395d1;
    return applyCharMap(bentTextCharMap, _0x4e5cb7(0xb6) + _0x28c7ef + _0x4e5cb7(0xb7));
}

function sad6(_0x2dcd58) {
    var _0xe7ba46 = _0x1395d1;
    return applyCharMap(medievalCharMap, _0xe7ba46(0xb8) + _0x2dcd58 + _0xe7ba46(0xb9));
}

function sad7(_0x5a4f80) {
    var _0x805796 = _0x1395d1;
    return applyCharMap(symbolsCharMap, _0x805796(0xba) + _0x5a4f80 + _0x805796(0xbb));
}

function cuteText1(_0xc4234f) {
    var _0x21b02c = _0x1395d1;
    return applyCharMap(italicCharMap, _0x21b02c(0xbc) + _0xc4234f + '💘🎀');
}

function cuteText2(_0x51ea0a) {
    var _0xe81215 = _0x1395d1;
    return applyCharMap(squiggle5CharMap, _0xe81215(0xbd) + _0x51ea0a + '\x20🎀\x20🐿');
}

function cuteText3(_0x24e4d0) {
    var _0x3a7c36 = _0x1395d1;
    return applyCharMap(oldEnglishCharMap, _0x3a7c36(0xbe) + _0x24e4d0 + '\x20🎀\x20🍒');
}

function cuteText4(_0x21b1d2) {
    var _0x3e130d = _0x1395d1;
    return applyCharMap(squiggleCharMap, _0x3e130d(0xbf) + _0x21b1d2 + _0x3e130d(0xc0));
}

function cuteText5(_0x5de8ba) {
    var _0x4eed86 = _0x1395d1;
    return applyCharMap(cursiveCharMap, '🎯🍧' + _0x5de8ba + _0x4eed86(0xc1));
}

function fullCrazy1(_0x2b7a49) {
    var _0x4c96bd = _0x1395d1;
    return applyCharMap(boldCharMap, _0x4c96bd(0xc2) + _0x2b7a49 + _0x4c96bd(0xc3));
}

function fullCrazy2(_0x530a5c) {
    var _0x510fbb = _0x1395d1;
    return applyCharMap(squiggleCharMap, _0x510fbb(0xc4) + _0x530a5c + _0x510fbb(0xc5));
}

function fullCrazy3(_0x189d6a) {
    var _0x60124e = _0x1395d1;
    return applyCharMap(doubleStruckCharMap, _0x60124e(0xc6) + _0x189d6a + '\x20]÷••)—\x20');
}

function fullCrazy4(_0x59b7c1) {
    var _0x1aa623 = _0x1395d1;
    return applyCharMap(currencyCharMap, _0x1aa623(0xc7) + _0x59b7c1 + _0x1aa623(0xc8));
}

function fullCrazy5(_0x1750c5) {
    var _0x3d5339 = _0x1395d1;
    return applyCharMap(wideTextCharMap, _0x3d5339(0xc9) + _0x1750c5 + '\x20✿◉●•◦');
}

function crazyWithFlourishOrSymbols3(_0x139f1a) {
    var _0x537241 = _0x1395d1;
    return applyCharMap(italicCharMap, _0x537241(0xca) + _0x139f1a + _0x537241(0xcb));
}

function crazyWithFlourishOrSymbols4(_0x45fb9d) {
    var _0x51b152 = _0x1395d1;
    return applyCharMap(asianStyle2CharMap, _0x51b152(0xcc) + _0x45fb9d + _0x51b152(0xcd));
}

function crazyWithFlourishOrSymbols1(_0x43366c) {
    return applyCharMap(italicCharMap, '⫷\x20\x20' + _0x43366c + '\x20⫸');
}

function crazyWithFlourishOrSymbols2(_0x46fbfc) {
    var _0x489dcb = _0x1395d1;
    return applyCharMap(boldItalicCharMap, _0x489dcb(0xce) + _0x46fbfc + _0x489dcb(0xcf));
}

function crazyWithFlourishOrSymbols5(_0x52eaa6) {
    var _0x55356f = _0x1395d1;
    return applyCharMap(squaresCharMap, _0x55356f(0xd0) + _0x52eaa6 + _0x55356f(0xd1));
}

function wrap1(_0x400d38) {
    var _0x4635f8 = _0x1395d1;
    return applyCharMap(boldCharMap, _0x4635f8(0xd2) + [_0x400d38] + _0x4635f8(0xd3));
}

function _0x4ba3() {
    var _0x1db994 = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', 'Discord\x20Fonts', 'split', 'toLowerCase', 'tools', 'options', 'ღ⊱♥', '♥⊱ღ', 'join', '&#823;', '══━一', '★彡[', 'tiny', ']彡★', '۝༒༺', '༻༒۝', '𒆜𓊉꧂', 'ツﻬஐﻬ', 'ﻬஐﻬツ', '٭ᶦᶰᵈ᭄', '📁︎', '📂︎', '📄︎', '🗏︎', '🗐︎', '🗄︎', '🖮︎', '🖲︎', '👓︎', '🕭︎', '🕮︎', '🕯︎', '🕿︎', '🖂︎', '📪︎', '📫︎', '📬︎', '📭︎', '🖳︎', '🖬︎', '👌︎', '👍︎', '👎︎', '💣︎', '🕆︎', '🕈︎', '🕑︎', '🕒︎', '🕓︎', '🕔︎', '🕕︎', '🕗︎', '🕘︎', '🕚︎', '🕛︎', 'map', 'length', 'max', 'round', 'random', 'replace', 'push', 'リサフランク現代のコンピュ竹内\x20まりや若者が履く流行のスニーカー真夜中のドアホットドッグマスターストライカーソニーブギ新しい日の誕生ライフ\x20-\x20ヒスイ蒸気波\x20無線゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚゛゜ゝゞゟ亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科', 'floor', '꧁༒☬\x20[[text]]\x20☬༒꧂', '◥꧁ད\x20[[text]]\x20ཌ꧂◤', '꧁༒༻☬ད\x20[[text]]\x20ཌ☬༺༒꧂', '♪ღ♪*•.¸¸.•*¨¨*•.♪\x20[[text]]\x20♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪', '◥꧁ད\x20ॐ卐[[text]]\x20卐ॐ\x20ཌ꧂◤', '(\x20ﾟ∀ﾟ)ﾉ【[[text]]】', 'ღƪ(ˆ◡ˆ)ʃ♡\x20[[text]]\x20♡ƪ(ˆ◡ˆ)ʃ♪', '⎝⎝✧GͥOͣDͫ✧⎠⎠\x20[[text]]\x20⎝⎝✧GͥOͣDͫ✧⎠⎠', '<:::::[]=¤\x20[[text]]\x20(▀̿̿Ĺ̯̿̿▀̿\x20̿)', '｡*ﾟ.*.｡(っ\x20ᐛ\x20)っ✂╰⋃╯\x20[[text]]', '┗(^o^\x20)┓三\x20[[text]]\x20三\x20┗(^o^\x20)┓', '(ㅅꈍ﹃ꈍ)*\x20[[text]]\x20*(ꈍ﹃ꈍㅅ)♡', '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯\x20[[text]]\x20¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯', '୧(•̀ᗝ•́)૭\x20[[text]]\x20୧(⇀‸↼‶)૭', '°°°·.°·..·°¯°·._.·\x20[[text]]\x20·._.·°¯°·.·°\x20.·°°°', '¸,ø¤º°`°º¤ø,¸¸,ø¤º°\x20[[text]]\x20°º¤ø,¸¸,ø¤º°`°º¤ø,¸', '•?((¯°·._.•\x20[[text]]\x20•._.·°¯))؟•', '▌│█║▌║▌║\x20[[text]]\x20║▌║▌║█│▌', '×º°”˜`”°º×\x20[[text]]\x20×º°”˜`”°º×', '*•.¸♡\x20[[text]]\x20♡¸.•*', '╰☆☆\x20[[text]]\x20☆☆╮', '¸„.-•~¹°”ˆ˜¨\x20[[text]]\x20¨˜ˆ”°¹~•-.„¸', '░▒▓█\x20[[text]]\x20█▓▒░', '░▒▓█►─═\x20\x20[[text]]\x20═─◄█▓▒░', '★彡\x20[[text]]\x20彡★', '•´¯`•.\x20[[text]]\x20.•´¯`•', '§.•´¨\x27°÷•..×\x20[[text]]\x20×,.•´¨\x27°÷•..§', '(¯`*•.¸,¤°´✿.｡.:*\x20[[text]]\x20*.:｡.✿`°¤,¸.•*´¯)', '|!¤*\x27~``~\x27*¤!|\x20[[text]]\x20|!¤*\x27~``~\x27*¤!|', '•._.••´¯``•.¸¸.•`\x20[[text]]\x20`•.¸¸.•´´¯`••._.•', '(¯´•._.•\x20[[text]]\x20•._.•´¯)', '••¤(`×[¤\x20[[text]]\x20¤]×´)¤••', '•´¯`•»\x20[[text]]\x20«•´¯`•', '\x20.o0×X×0o.\x20[[text]]\x20.o0×X×0o.', '¤¸¸.•´¯`•¸¸.•..>>\x20[[text]]\x20<<..•.¸¸•´¯`•.¸¸¤', '¸,ø¤º°`°º¤ø,¸\x20[[text]]\x20¸,ø¤º°`°º¤ø,¸', '`•.¸¸.•´´¯`••._.•\x20[[text]]\x20•._.••`¯´´•.¸¸.•`', '↤↤↤↤↤\x20[[text]]\x20↦↦↦↦↦', '↫↫↫↫↫\x20[[text]]\x20↬↬↬↬↬', '·.¸¸.·♩♪♫\x20[[text]]\x20♫♪♩·.¸¸.·', ']|I{•------»\x20[[text]]\x20«------•}I|[', '▀▄▀▄▀▄\x20[[text]]\x20▄▀▄▀▄▀', '(-_-)\x20[[text]]\x20(-_-)', '-漫~*\x27¨¯¨\x27*·舞~\x20[[text]]\x20~舞*\x27¨¯¨\x27*·~漫-', '๑۞๑,¸¸,ø¤º°`°๑۩\x20[[text]]\x20๑۩\x20,¸¸,ø¤º°`°๑۞๑', '.•°¤*(¯`★´¯)*¤°\x20[[text]]\x20°¤*(¯´★`¯)*¤°•.', '••.•´¯`•.••\x20[[text]]\x20••.•´¯`•.••', '◦•●◉✿\x20[[text]]\x20✿◉●•◦', '╚»★«╝\x20[[text]]\x20╚»★«╝', '-·=»‡«=·-\x20[[text]]\x20-·=»‡«=·-', '∙∙·▫▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ\x20[[text]]\x20ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫▫·∙∙', '¸¸♬·¯·♩¸¸♪·¯·♫¸¸\x20[[text]]\x20¸¸♫·¯·♪¸¸♩·¯·♬¸¸', 'ஜ۩۞۩ஜ\x20[[text]]\x20ஜ۩۞۩ஜ', '¤\x20(¯´☆✭.¸_)¤\x20[[text]]\x20¤(_¸.✭☆´¯)\x20¤', '(¯`·.¸¸.·´¯`·.¸¸.->\x20[[text]]\x20<-.¸¸.·´¯`·.¸¸.·´¯)', '.•♫•♬•\x20[[text]]\x20•♬•♫•.', 'ღ(¯`◕‿◕´¯)\x20♫\x20♪\x20♫\x20[[text]]\x20♫\x20♪\x20♫\x20(¯`◕‿◕´¯)ღ', '[[text]]', '[̲̅$1]', '⧼$1&#828;⧽', '⦚$1⦚', '⦏$1&#x302;⦎', '&#778;\x20⫶', '꜍$1꜉', '⦑$1⦒', '⦏$1⦎', '˜”*°•.˜”*°•\x20', '\x20•°*”˜.•°*”˜', '(っ◔◡◔)っ\x20♥\x20', 'ミ★\x20', '꧁•⊹٭', '\x20ıllıllı⭐🌟', '╰•★★\x20', '★★•╯', '`✵•.¸,✵°✵.｡.✰\x20\x20', '✰.｡.✵°✵,¸.•✵´', '·.★·.·´¯`·.·★', '★·.·´¯`·.·★.·', '¸„٭⊹✡•~⍣°”ˆ˜¨', '★¸.•☆•.¸★\x20', '٭⊹¤.•⨳•.*☆✬\x20', '(◍•ᴗ•◍)\x20ミ💖\x20', '💖彡', '💖´\x20*•.¸♥¸.•**\x20', '**•.¸♥¸.•*´💖', '癶๑)ლ〜♡', '◦•●❤♡\x20', '♡❤●•◦', '¸♩·¯·ξξ(∵❤◡❤∵)ξξ🌸', '♥╣[-_-]╠♥', 'ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥\x20\x20', '♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡', '彡(✿╹◡╹)\x20', '(｀∀´)Ψ', '☞ó\x20͜つò☞\x20\x20', '(☝◞‸◟)☞', '(づ｡◕‿‿◕｡)づ\x20', '\x20٩(˘◡˘)۶', '🌘‿🌘\x20\x20', '(^▽^)\x20\x20', '(✿^▽^)', '(人◕‿◕)', '(•◡•)', '♪(･ω･)ﾉ', '(*ˊᗜˋ*)', '(*ゝω・)', '(ω・*ゝ)', '<(_\x20_*)>', '★⌒(●ゝω・)', 'ﾟ･:,｡★＼(^-^\x20)♪', '♪(\x20^-^)/★,｡･:･ﾟ', '.:｡+ﾟ', '(◕︿◕✿)\x20', '\x20(๑′°︿°๑)', '┏༼\x20◉\x20╭╮\x20◉༽┓\x20', '(\x20◔\x20ʖ̯\x20◔\x20)\x20', '\x20(\x20◔\x20ʖ̯\x20◔\x20)', '\x20٩꒰´·⌢•｀꒱۶⁼³₌₃', '(oꆤ︵ꆤo)\x20', '\x20●︿●', '(′︿‵｡)', '(|||❛︵❛.)', '(.﹒︠₋﹒︡.)\x20ﾟ😳☹', '♦👺\x20（（●´∧｀●））', '💘🎀', '🐿\x20🎀', '🐣♖', '👻ൠ', '★｡\x20🎀', '💜💘', '◥꧁ད\x20ॐ卐', '\x20卐ॐ\x20ཌ꧂◤', '••¤(`×[¤\x20', '\x20¤]×´)¤••', '—(••÷[\x20', '.o0×X×0o.\x20', '\x20.o0×X×0o.\x20', '•●◉✿\x20', '⎝⎝✧GͥOͣDͫ✧⎠⎠', '\x20⎝⎝✧GͥOͣDͫ✧⎠⎠', '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯\x20\x20', '¯_(\x20͡°\x20͜ʖ\x20͡°)_/¯', '«-(¯`v´¯)-«\x20', '\x20»-(¯`v´¯)-»', 'ஜ۩۞۩ஜ\x20', 'ஜ۩۞۩ஜ', '░▒▓█►─═', '═─◄█▓▒░', '\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20', '\x20\x20█\x20▇\x20▆\x20▅\x20▄\x20▂▁', '▌│█║▌║▌║\x20', '꧁𓊈𒆜', '╚»★«╝\x20', '&#4310;', '&#392;', '&#1283;', '&#1213;', '&#989;', '&#608;', '&#1291;', '&iota;', '&#669;', '&#409;', '&#625;', '&rho;', '&#985;', '&#638;', '&upsilon;', '&#4327;', '&#41807;', '&#9837;', '&#9790;', '&#9687;', '&euro;', '&#988;', '&#10081;', '&#9796;', '&#9815;', '&#1008;', '&#8627;', '&#9835;', '&#8857;', '&#9773;', '&#9736;', '&#9739;', '&#10003;', '&omega;', '&#8984;', '&#9791;', '&#9761;', '&#9834;', '&#9812;', '&#9442;', '&#9730;', '&#10122;', '&#10123;', '&#10125;', '&#10126;', '&#10127;', '&#10128;', '&#10130;', '&#9450;', '&beta;', '&#270;', '&#358;', '&#286;', '&#296;', '&#310;', '&#313;', '&#1052;', '&#323;', '&#336;', '&#340;', '&#346;', '&#356;', '&#372;', '&#1046;', '&#377;', '&#258;', '&#276;', '&#292;', '&#1056;', '&Uacute;', '&#374;', '&#592;', '&#596;', '&#477;', '&#607;', '&#387;', '&#7433;', '&#670;', '&#623;', '&#633;', '&#647;', '&#653;', '&#613;', '&#654;', '&#406;', '&#4357;', '&#400;', '&#987;', '&#12581;', '&#262;', '&#272;', '&#484;', '&#294;', '&#407;', '&#308;', '&#1180;', '&#321;', '&Mu;', '&#420;', '&Omega;', '&#350;', '&#7918;', '&yen;', '&Delta;', '&#8355;', '&#381;', '&alpha;', '&#2798;', '&part;', '&epsilon;', '&#614;', '&#3648;', '&#1185;', '&#8467;', '&#627;', '&phi;', '&#429;', '&micro;', '&#1141;', '&#1488;', '&#438;', '&fnof;', '&#2792;', '&#5609;', '&#5623;', '&#5205;', '&#5620;', '&#5556;', '&#5500;', '&#5029;', '&#5290;', '&#5616;', '&#5198;', '&#5597;', '&#5229;', '&#586;', '&#5511;', '&#5397;', '&#19973;', '&#5615;', '&#5741;', '&#435;', '&#5610;', '&#5845;', '&#20057;', '&#4315;', '&#4329;', '&#4308;', '&#4331;', '&#4318;', '&#4330;', '&#7990;', '&#4325;', '&#4317;', '&#8134;', '&#4306;', '&Gamma;', '&#4336;', '&#8023;', '&#4335;', '&kappa;', '&#3923;', '&#940;', '&#1074;', '&sigmaf;', '&#545;', '&#941;', '&#291;', '&#295;', '&#1112;', '&#311;', '&#315;', '&#942;', '&#972;', '&#341;', '&#355;', '&#974;', '&#1095;', '&#382;', '&#943;', '&#1084;', '&#351;', '&ugrave;', '&#41707;', '&#41155;', '&#41976;', '&#41045;', '&#41240;', '&#41037;', '&#42075;', '&#41105;', '&#42130;', '&#41042;', '&#41081;', '&#41571;', '&#41080;', '&#42131;', '&#41754;', '&#42181;', '&#41991;', '&#41949;', '&#41296;', '&#41427;', '&#41076;', '&#41005;', '&#40983;', '&#41346;', '&#42015;', '&#1041;', '&#1048;', '&#1060;', '&#490;', '&#1071;', '&#1062;', '&#1065;', '&#1059;', '&#1044;', '&Xi;', '&#41731;', '&#41016;', '&#41157;', '&#40996;', '&#40984;', '&#41141;', '&#41508;', '&#41126;', '&#41706;', '&#41751;', '&#42180;', '&#41204;', '&#41769;', '&#41823;', '&#41863;', '&#41295;', '&#41660;', '&#41708;', '&#41203;', '&#41556;', '&#42159;', '&#41922;', '&#41648;', '&#41804;', '&#42128;', '&#42171;', '&#41266;', '&#41433;', '&#42148;', '&#42150;', '&#41575;', '&#41766;', '&#41053;', '&#41674;', '&#41392;', '&Lambda;', '&#998;', '&#12552;', '&ETH;', '&#403;', '&#1085;', '&#618;', '&#65420;', '&#1178;', '&#3057;', '&#1051;', '&Oslash;', '&thorn;', '&#1192;', '&#23610;', '&#12425;', '&#404;', '&#412;', '&chi;', '&#996;', '&#7828;', '&#411;', '&#385;', '&#401;', '&#1223;', '&#408;', '&#1340;', '&#413;', '&#416;', '&#423;', '&#434;', '&#1202;', '&#548;', '&#391;', '&#394;', '&#1028;', '&#418;', '&#422;', '&#428;', '&#41074;', '&#41007;', '&#41120;', '&#41532;', '&#41246;', '&#41029;', '&#41833;', '&#41079;', '&#41686;', '&#41008;', '&#41426;', '&#42014;', '&#41712;', '&#41733;', '&#1337;', '&#1349;', '&#1351;', '&#1338;', '&#541;', '&#1330;', '&#1331;', '&#615;', '&#639;', '&#1342;', '&#1360;', '&#1359;', '&#1333;', '&#1347;', '&#1358;', '&#1348;', '&#1506;', '&#1377;', '&#1344;', '&szlig;', '&iuml;', '&#1397;', '&oplus;', '&forall;', '&psi;', '&#65434;', '&scaron;', '&dagger;', '&#3588;', '&#2799;', '&#2797;', '&#1210;', '&#1179;', '&#1350;', '&#1352;', '&#447;', '&#1193;', '&#2670;', '&#3182;', '&#2794;', '&#2414;', '&#646;', '&#2790;', '&#2749;', '&#1072;', '&#1073;', '&#1076;', '&#1105;', '&#1082;', '&#1075;', '&#1131;', '&#1087;', '&#1139;', '&#1103;', '&#1094;', '&#1078;', '&#1079;', '&#1040;', '&#1031;', '&#1043;', '&#1130;', '&#1049;', '&#1064;', '&#1047;', 'c&#830;', 'e&#830;', 'f&#830;', 'g&#830;', 'h&#830;', 'i&#830;', 'j&#830;', 'k&#830;', 'l&#830;', 'n&#830;', 'o&#830;', 'p&#830;', 'q&#830;', 'r&#830;', 's&#830;', 'u&#830;', 'v&#830;', 'w&#830;', 'y&#830;', 'z&#830;', 'A&#830;', 'B&#830;', 'C&#830;', 'E&#830;', 'F&#830;', 'G&#830;', 'H&#830;', 'L&#830;', 'M&#830;', 'O&#830;', 'P&#830;', 'S&#830;', 'T&#830;', 'U&#830;', 'V&#830;', 'W&#830;', 'X&#830;', 'Y&#830;', 'Z&#830;', '2&#830;', '3&#830;', '5&#830;', '6&#830;', '7&#830;', '9&#830;', '0&#830;', 'a&#838;', 'c&#838;', 'd&#838;', 'e&#838;', 'i&#838;', 'j&#838;', 'o&#838;', 'p&#838;', 'q&#838;', 'r&#838;', 't&#838;', 'u&#838;', 'w&#838;', 'x&#838;', 'y&#838;', 'D&#838;', 'E&#838;', 'H&#838;', 'I&#838;', 'J&#838;', 'K&#838;', 'L&#838;', 'O&#838;', 'Q&#838;', 'R&#838;', 'S&#838;', 'V&#838;', 'W&#838;', 'Y&#838;', 'Z&#838;', '1&#838;', '2&#838;', '3&#838;', '4&#838;', '5&#838;', '6&#838;', '8&#838;', '9&#838;', '0&#838;', 'a&#826;', 'b&#826;', 'c&#826;', 'd&#826;', 'e&#826;', 'f&#826;', 'h&#826;', 'j&#826;', 'l&#826;', 'm&#826;', 'n&#826;', 'o&#826;', 'q&#826;', 's&#826;', 't&#826;', 'v&#826;', 'z&#826;', 'B&#826;', 'G&#826;', 'H&#826;', 'J&#826;', 'K&#826;', 'L&#826;', 'O&#826;', 'P&#826;', 'Q&#826;', 'S&#826;', 'T&#826;', 'V&#826;', 'W&#826;', 'Z&#826;', '2&#826;', '3&#826;', '4&#826;', '5&#826;', '7&#826;', '8&#826;', '9&#826;', '0&#826;', 'a&#857;', 'b&#857;', 'd&#857;', 'e&#857;', 'g&#857;', 'i&#857;', 'k&#857;', 'l&#857;', 'm&#857;', 'n&#857;', 'o&#857;', 'q&#857;', 'r&#857;', 't&#857;', 'u&#857;', 'v&#857;', 'w&#857;', 'x&#857;', 'y&#857;', 'C&#857;', 'D&#857;', 'E&#857;', 'F&#857;', 'H&#857;', 'I&#857;', 'J&#857;', 'L&#857;', 'M&#857;', 'N&#857;', 'P&#857;', 'Q&#857;', 'R&#857;', 'U&#857;', 'W&#857;', 'X&#857;', 'Y&#857;', 'Z&#857;', '2&#857;', '3&#857;', '5&#857;', '6&#857;', '7&#857;', '8&#857;', '9&#857;', 'a&#799;', 'c&#799;', 'd&#799;', 'e&#799;', 'f&#799;', 'g&#799;', 'h&#799;', 'j&#799;', 'k&#799;', 'l&#799;', 'm&#799;', 'n&#799;', 'o&#799;', 'p&#799;', 'q&#799;', 'r&#799;', 's&#799;', 'u&#799;', 'v&#799;', 'w&#799;', 'x&#799;', 'y&#799;', 'z&#799;', 'A&#799;', 'B&#799;', 'C&#799;', 'F&#799;', 'G&#799;', 'H&#799;', 'I&#799;', 'J&#799;', 'K&#799;', 'M&#799;', 'N&#799;', 'P&#799;', 'Q&#799;', 'R&#799;', 'S&#799;', 'T&#799;', 'W&#799;', 'X&#799;', 'Z&#799;', '1&#799;', '2&#799;', '5&#799;', '6&#799;', '7&#799;', '9&#799;', '0&#799;', 'a&#846;', 'b&#846;', 'c&#846;', 'd&#846;', 'e&#846;', 'f&#846;', 'g&#846;', 'h&#846;', 'i&#846;', 'j&#846;', 'k&#846;', 'l&#846;', 'm&#846;', 'q&#846;', 'r&#846;', 's&#846;', 't&#846;', 'v&#846;', 'w&#846;', 'x&#846;', 'y&#846;', 'z&#846;', 'A&#846;', 'D&#846;', 'G&#846;', 'H&#846;', 'I&#846;', 'J&#846;', 'K&#846;', 'M&#846;', 'O&#846;', 'P&#846;', 'Q&#846;', 'R&#846;', 'S&#846;', 'V&#846;', 'W&#846;', 'X&#846;', 'Y&#846;', 'Z&#846;', '2&#846;', '3&#846;', '4&#846;', '5&#846;', '7&#846;', '8&#846;', 'a&#829;&#851;', 'b&#829;&#851;', 'e&#829;&#851;', 'i&#829;&#851;', 'j&#829;&#851;', 'k&#829;&#851;', 'l&#829;&#851;', 'm&#829;&#851;', 'o&#829;&#851;', 'p&#829;&#851;', 'q&#829;&#851;', 'r&#829;&#851;', 's&#829;&#851;', 'u&#829;&#851;', 'w&#829;&#851;', 'x&#829;&#851;', 'y&#829;&#851;', 'z&#829;&#851;', 'A&#829;&#851;', 'B&#829;&#851;', 'E&#829;&#851;', 'G&#829;&#851;', 'H&#829;&#851;', 'I&#829;&#851;', 'J&#829;&#851;', 'K&#829;&#851;', 'M&#829;&#851;', 'N&#829;&#851;', 'O&#829;&#851;', 'P&#829;&#851;', 'Q&#829;&#851;', 'S&#829;&#851;', 'U&#829;&#851;', 'V&#829;&#851;', 'W&#829;&#851;', 'X&#829;&#851;', 'Z&#829;&#851;', '1&#829;&#851;', '2&#829;&#851;', '3&#829;&#851;', '4&#829;&#851;', '7&#829;&#851;', '8&#829;&#851;', '9&#829;&#851;', '&#120458;&#823;', '&#120459;&#823;', '&#120460;&#823;', '&#120461;&#823;', '&#120464;&#823;', '&#120465;&#823;', '&#120466;&#823;', '&#120467;&#823;', '&#120468;&#823;', '&#120469;&#823;', '&#120471;&#823;', '&#120472;&#823;', '&#120473;&#823;', '&#120474;&#823;', '&#120475;&#823;', '&#120476;&#823;', '&#120477;&#823;', '&#120478;&#823;', '&#120479;&#823;', '&#120481;&#823;', '&#120482;&#823;', '&#120432;&#823;', '&#120433;&#823;', '&#120434;&#823;', '&#120435;&#823;', '&#120436;&#823;', '&#120437;&#823;', '&#120438;&#823;', '&#120439;&#823;', '&#120440;&#823;', '&#120442;&#823;', '&#120443;&#823;', '&#120444;&#823;', '&#120445;&#823;', '&#120446;&#823;', '&#120447;&#823;', '&#120449;&#823;', '&#120450;&#823;', '&#120451;&#823;', '&#120452;&#823;', '&#120453;&#823;', '&#120454;&#823;', '&#120456;&#823;', '&#120823;&#823;', '&#120824;&#823;', '&#120825;&#823;', '&#120826;&#823;', '&#120828;&#823;', '&#120830;&#823;', '&#120831;&#823;', 'a&#866;', 'c&#866;', 'd&#866;', 'e&#866;', 'f&#866;', 'g&#866;', 'h&#866;', 'j&#866;', 'k&#866;', 'l&#866;', 'm&#866;', 'n&#866;', 'o&#866;', 'p&#866;', 'q&#866;', 's&#866;', 't&#866;', 'v&#866;', 'x&#866;', 'y&#866;', 'z&#866;', 'C&#866;', 'F&#866;', 'G&#866;', 'H&#866;', 'J&#866;', 'K&#866;', 'L&#866;', 'M&#866;', 'O&#866;', 'Q&#866;', 'R&#866;', 'S&#866;', 'T&#866;', 'U&#866;', 'V&#866;', 'W&#866;', 'X&#866;', 'Y&#866;', 'Z&#866;', '2&#866;', '3&#866;', '4&#866;', '6&#866;', '9&#866;', 'a&#828;', 'c&#828;', 'e&#828;', 'g&#828;', 'h&#828;', 'j&#828;', 'k&#828;', 'l&#828;', 'm&#828;', 'n&#828;', 'o&#828;', 'q&#828;', 'r&#828;', 't&#828;', 'v&#828;', 'y&#828;', 'z&#828;', 'A&#828;', 'B&#828;', 'C&#828;', 'D&#828;', 'E&#828;', 'F&#828;', 'G&#828;', 'I&#828;', 'K&#828;', 'O&#828;', 'P&#828;', 'Q&#828;', 'R&#828;', 'S&#828;', 'T&#828;', 'U&#828;', 'V&#828;', 'X&#828;', 'Y&#828;', 'Z&#828;', '1&#828;', '2&#828;', '6&#828;', '7&#828;', '8&#828;', '9&#828;', 'charAt', 'pop', 'undefined', 'reverse', 'diacriticsTop', 'fromCharCode', 'diacriticsBottom', 'diacriticsMiddle', 'top', 'maxHeight', 'randomization', 'bottom', 'charCodeAt', 'mapInverse', '������', 'toUpperCase', 'getHTML', '<br>\x0a', 'toString', 'trim', '\x20\x20🎀\x20\x20', 'test', '(y)', '(Y)', '٩(˘◡˘)۶', '(ɔ◔‿◔)ɔ', '❀◕‿◕❀', '(｡◕‿◕｡)', '◕‿◕', '🌘‿🌘', '(/◔◡◔)/', 's(^‿^)-b', '◔◡◔', '(^▽^)', 'ᵔ⌣ᵔ', '^ㅅ^', '^ㅂ^', '(⌒‿⌒)', '◠◡◠', '⁀‿⁀', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', 'ᕕ(ᐛ)ᕗ', '•?((¯°·._.•\x20', '¸,ø¤º°`°º¤ø,¸¸,ø¤º°\x20', '•´¯`•.\x20', '×º°”˜`”°º×\x20', '•]••´º´•»\x20', '§.•´¨\x27°÷•..×\x20', '(¯`·.¸¸.·´¯`·.¸¸.->\x20', '*´¯`*.¸¸.*´¯`*\x20', '°·.¸.·°¯°·.¸.·°¯°·.¸.->\x20', '¸„.-•~¹°”ˆ˜¨\x20', '(¯´•._.•\x20', '••¤(`×', '•´¯`•»\x20', '`•.,¸¸,.•´¯\x20', '¸,ø¤º°`°º¤ø,¸\x20', ',-*\x27^\x27~*-.,_,.-*~\x20', '`•.¸¸.•´´¯`••._.•\x20', '—(••÷', '¤¸¸.•´¯`•¸¸.•..>>\x20', '••.•´¯`•.••\x20', '-漫~*\x27¨¯¨\x27*·舞~\x20', '★·.·´¯`·.·★\x20', '▁\x20▂\x20▄\x20▅\x20▆\x20▇\x20█\x20', '\x20⋆\x20', 'object', 'exports', 'global', 'window', '$2$1', '<%=\x20version\x20%>', 'function', 'amd', 'nodeType', '☽≫≻≽≿⋝⋟⋑⊃⊐⊒⫸》＞❯❱', '【〖〘〚［', '】〗〙〛］', '✨✩✪✫✬✭✮✯✰✦✱✲✳✴✵✶✷֍֎✸✹✺✻✼✽✾✿❀❁❂❃❄★☆＊', 'ready', '<style>\x20//\x20tipos\x20de\x20letras\x20by\x20:herosinghdj9@gmail.com\x20</style>', 'body', '#fontSize', 'input\x20change', '<style>\x20.DiscordFonts\x20p{font-size:', 'px}\x20</style>', 'insertBefore', '.Sk-text', '#Sk-text', 'val', 'location', 'href', '.result-s1', '.result-s2', 'html', '.result-s4', '.result-s5', '.result-s7', '.result-s9', '.result-s10', 's10', '.result-s11', 's11', '.result-s12', 's12', '.result-s13', 's13', 's14', 's15', 's16', '.result-s17', '.result-s18', '.result-s19', '.result-s20', 's20', '.result-s21', 's22', '.result-s23', 's23', '.result-s24', '.result-s25', 's26', '.result-s27', 's27', '.result-s29', 's29', '.result-s30', 's30', '.result-s31', '.lunitoolsbubbles', 'bubbles', '.invertedSquaresCharMap', '.illuminati', '.textgun', '.minigame', '.pubggame1', '.pubggame2', '.bricks', '.bigrus', '.wideTextCharMap', '.lunitoolstinyencode', 'encode', '.lunitoolsflipencode', '.lunitoolsmirrorencode', '.subscriptCharMap', '.superscriptCharMap', '.futureAlienCharMap', '.strikeThrough', '.tildeStrikeThrough', '.slashThrough', '.underline', '.lunicreepify', 'creepify', '.squiggle3CharMap', '.squiggle4CharMap', '.squiggle6CharMap', '.boldCharMap', '.luniroundsquares', '.lunisquares', '.oldEnglishCharMap', '.medievalCharMap', '.doubleStruckCharMap', '.italicCharMap', '.boldItalicCharMap', '.monospaceCharMap', '.greekCharMap', '.symbolsCharMap', '.asianStyleCharMap', '.thickBlockFramed', '.diametricAngleFrame', '.wavyJoiner', '.dottyJoiner', '.vaporwaveText1', '.vaporwaveText2', '.weirdBox', '.thickBox', '.zigzagJoiner', '.hashJoiner', '.starJoiner', '.connectedJoiner', '.dotBoxtwo', '.diametricBox', '.arrowBox', '.curlybrackets', '.singlewavyJoiner', '.stinky', '.arrowBelow', '.crazyWithFlourishOrSymbols', '.star2', '.star3', '.star5', '.star6', '.star7', '.heart2', '.heart3', '.heart4', '.heart5', '.heart6', '.emoticon0', '.emoticon1', '.emoticon2', '.emoticon5', '.emoticon6', '.thankyou0', '.thankyou2', '.thankyou3', '.thankyou4', '.thankyou5', '.thankyou7', '.sad0', '.sad2', '.sad3', '.sad4', '.cuteText1', '.cuteText2', '.cuteText3', '.cuteText4', '.crazyWithFlourishOrSymbols1', '.crazyWithFlourishOrSymbols2', '.crazyWithFlourishOrSymbols3', '.crazyWithFlourishOrSymbols5', '.fullCrazy1', '.fullCrazy2', '.fullCrazy3', '.fullCrazy4', '.fullCrazy5', '.wrap1', '.wrap4', '.wrap5', '.clear', 'click', 'querySelector', '.copied', 'querySelectorAll', '.DiscordFonts', 'forEach', 'addEventListener', 'innerText', 'classList', 'createElement', 'textarea', 'value', 'select', 'copy', 'remove'];
    _0x4ba3 = function() {
        return _0x1db994;
    };
    return _0x4ba3();
}

function wrap2(_0x1d5e33) {
    var _0x7c23b = _0x1395d1;
    return applyCharMap(cursiveCharMap, _0x7c23b(0xd4) + [_0x1d5e33] + _0x7c23b(0xd5));
}

function wrap3(_0xdccaf2) {
    var _0x4e8e64 = _0x1395d1;
    return applyCharMap(boldItalicCharMap, _0x4e8e64(0xd6) + [_0xdccaf2] + '\x20║▌║▌║█│▌');
}

function wrap4(_0x2e93ff) {
    var _0x46d5bd = _0x1395d1;
    return applyCharMap(neonCharMap, _0x46d5bd(0xd7) + [_0x2e93ff] + ']\x20𒆜𓊉꧂');
}

function wrap5(_0x130538) {
    var _0x4cfa59 = _0x1395d1;
    return applyCharMap(boldItalicCharMap, _0x4cfa59(0xd8) + [_0x130538] + '╚»★«╝');
}
var newtext = {
    's1': {
        0x1: '&alpha;',
        0x2: _0x1395d1(0xd9),
        0x3: _0x1395d1(0xda),
        0x4: _0x1395d1(0xdb),
        0x5: _0x1395d1(0xdc),
        0x6: _0x1395d1(0xdd),
        0x7: _0x1395d1(0xde),
        0x8: _0x1395d1(0xdf),
        0x9: _0x1395d1(0xe0),
        0xa: _0x1395d1(0xe1),
        0xb: _0x1395d1(0xe2),
        0xc: '&#645;',
        0xd: _0x1395d1(0xe3),
        0xe: '&#627;',
        0xf: '&sigma;',
        0x10: _0x1395d1(0xe4),
        0x11: _0x1395d1(0xe5),
        0x12: _0x1395d1(0xe6),
        0x13: '&#642;',
        0x14: '&#410;',
        0x15: _0x1395d1(0xe7),
        0x16: '&#651;',
        0x17: '&#623;',
        0x18: 'x',
        0x19: _0x1395d1(0xe8),
        0x1a: '&#549;',
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
        0x1: _0x1395d1(0xe9),
        0x2: _0x1395d1(0xea),
        0x3: _0x1395d1(0xeb),
        0x4: _0x1395d1(0xec),
        0x5: _0x1395d1(0xed),
        0x6: _0x1395d1(0xee),
        0x7: _0x1395d1(0xef),
        0x8: _0x1395d1(0xf0),
        0x9: _0x1395d1(0xf1),
        0xa: '&#9834;',
        0xb: _0x1395d1(0xf2),
        0xc: _0x1395d1(0xf3),
        0xd: '&#9812;',
        0xe: _0x1395d1(0xf4),
        0xf: _0x1395d1(0xf5),
        0x10: _0x1395d1(0xe4),
        0x11: _0x1395d1(0xf6),
        0x12: _0x1395d1(0xf7),
        0x13: '&#9442;',
        0x14: '&#9730;',
        0x15: _0x1395d1(0xf8),
        0x16: _0x1395d1(0xf9),
        0x17: _0x1395d1(0xfa),
        0x18: _0x1395d1(0xfb),
        0x19: _0x1395d1(0xfc),
        0x1a: _0x1395d1(0xfd),
        0x1b: _0x1395d1(0xe9),
        0x1c: _0x1395d1(0xea),
        0x1d: _0x1395d1(0xeb),
        0x1e: _0x1395d1(0xec),
        0x1f: _0x1395d1(0xed),
        0x20: _0x1395d1(0xee),
        0x21: _0x1395d1(0xef),
        0x22: '&#9796;',
        0x23: _0x1395d1(0xf1),
        0x24: _0x1395d1(0xfe),
        0x25: '&#1008;',
        0x26: _0x1395d1(0xf3),
        0x27: _0x1395d1(0xff),
        0x28: _0x1395d1(0xf4),
        0x29: _0x1395d1(0xf5),
        0x2a: _0x1395d1(0xe4),
        0x2b: _0x1395d1(0xf6),
        0x2c: '&#9736;',
        0x2d: _0x1395d1(0x100),
        0x2e: _0x1395d1(0x101),
        0x2f: _0x1395d1(0xf8),
        0x30: _0x1395d1(0xf9),
        0x31: _0x1395d1(0xfa),
        0x32: '&#8984;',
        0x33: _0x1395d1(0xfc),
        0x34: _0x1395d1(0xfd),
        0x35: _0x1395d1(0x102),
        0x36: _0x1395d1(0x103),
        0x37: '&#10124;',
        0x38: _0x1395d1(0x104),
        0x39: _0x1395d1(0x105),
        0x3a: _0x1395d1(0x106),
        0x3b: _0x1395d1(0x107),
        0x3c: '&#10129;',
        0x3d: _0x1395d1(0x108),
        0x3e: _0x1395d1(0x109)
    },
    's3': {
        0x1: '&#258;',
        0x2: _0x1395d1(0x10a),
        0x3: '&#268;',
        0x4: _0x1395d1(0x10b),
        0x5: '&#276;',
        0x6: _0x1395d1(0x10c),
        0x7: _0x1395d1(0x10d),
        0x8: '&#292;',
        0x9: _0x1395d1(0x10e),
        0xa: '&#308;',
        0xb: _0x1395d1(0x10f),
        0xc: _0x1395d1(0x110),
        0xd: _0x1395d1(0x111),
        0xe: _0x1395d1(0x112),
        0xf: _0x1395d1(0x113),
        0x10: '&#1056;',
        0x11: 'Q',
        0x12: _0x1395d1(0x114),
        0x13: _0x1395d1(0x115),
        0x14: _0x1395d1(0x116),
        0x15: '&Uacute;',
        0x16: 'V',
        0x17: _0x1395d1(0x117),
        0x18: _0x1395d1(0x118),
        0x19: '&#374;',
        0x1a: _0x1395d1(0x119),
        0x1b: _0x1395d1(0x11a),
        0x1c: '&beta;',
        0x1d: '&#268;',
        0x1e: _0x1395d1(0x10b),
        0x1f: _0x1395d1(0x11b),
        0x20: _0x1395d1(0x10c),
        0x21: _0x1395d1(0x10d),
        0x22: _0x1395d1(0x11c),
        0x23: _0x1395d1(0x10e),
        0x24: '&#308;',
        0x25: _0x1395d1(0x10f),
        0x26: _0x1395d1(0x110),
        0x27: _0x1395d1(0x111),
        0x28: _0x1395d1(0x112),
        0x29: _0x1395d1(0x113),
        0x2a: _0x1395d1(0x11d),
        0x2b: 'Q',
        0x2c: _0x1395d1(0x114),
        0x2d: '&#346;',
        0x2e: _0x1395d1(0x116),
        0x2f: _0x1395d1(0x11e),
        0x30: 'V',
        0x31: '&#372;',
        0x32: _0x1395d1(0x118),
        0x33: _0x1395d1(0x11f),
        0x34: _0x1395d1(0x119),
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
        0x1: _0x1395d1(0x120),
        0x2: 'q',
        0x3: _0x1395d1(0x121),
        0x4: 'p',
        0x5: _0x1395d1(0x122),
        0x6: _0x1395d1(0x123),
        0x7: _0x1395d1(0x124),
        0x8: '&#613;',
        0x9: _0x1395d1(0x125),
        0xa: _0x1395d1(0xe6),
        0xb: _0x1395d1(0x126),
        0xc: 'l',
        0xd: _0x1395d1(0x127),
        0xe: 'u',
        0xf: 'o',
        0x10: 'd',
        0x11: 'b',
        0x12: _0x1395d1(0x128),
        0x13: 's',
        0x14: _0x1395d1(0x129),
        0x15: 'n',
        0x16: '&#652;',
        0x17: _0x1395d1(0x12a),
        0x18: 'x',
        0x19: '&#654;',
        0x1a: 'z',
        0x1b: _0x1395d1(0x120),
        0x1c: 'q',
        0x1d: '&#596;',
        0x1e: 'p',
        0x1f: _0x1395d1(0x122),
        0x20: _0x1395d1(0x123),
        0x21: _0x1395d1(0x124),
        0x22: _0x1395d1(0x12b),
        0x23: '&#7433;',
        0x24: _0x1395d1(0xe6),
        0x25: _0x1395d1(0x126),
        0x26: 'l',
        0x27: _0x1395d1(0x127),
        0x28: 'u',
        0x29: 'o',
        0x2a: 'd',
        0x2b: 'b',
        0x2c: '&#633;',
        0x2d: 's',
        0x2e: _0x1395d1(0x129),
        0x2f: 'n',
        0x30: '&#652;',
        0x31: _0x1395d1(0x12a),
        0x32: 'x',
        0x33: _0x1395d1(0x12c),
        0x34: 'z',
        0x35: _0x1395d1(0x12d),
        0x36: _0x1395d1(0x12e),
        0x37: _0x1395d1(0x12f),
        0x38: '&#12579;',
        0x39: _0x1395d1(0x130),
        0x3a: '9',
        0x3b: _0x1395d1(0x131),
        0x3c: '8',
        0x3d: '6',
        0x3e: '0'
    },
    's5': {
        0x1: '&Delta;',
        0x2: _0x1395d1(0x10a),
        0x3: _0x1395d1(0x132),
        0x4: _0x1395d1(0x133),
        0x5: '&euro;',
        0x6: '&#8355;',
        0x7: _0x1395d1(0x134),
        0x8: _0x1395d1(0x135),
        0x9: _0x1395d1(0x136),
        0xa: _0x1395d1(0x137),
        0xb: _0x1395d1(0x138),
        0xc: _0x1395d1(0x139),
        0xd: _0x1395d1(0x13a),
        0xe: '&#327;',
        0xf: '&Oslash;',
        0x10: _0x1395d1(0x13b),
        0x11: _0x1395d1(0x13c),
        0x12: '&#344;',
        0x13: _0x1395d1(0x13d),
        0x14: '&#358;',
        0x15: _0x1395d1(0x13e),
        0x16: 'V',
        0x17: _0x1395d1(0x117),
        0x18: _0x1395d1(0x118),
        0x19: _0x1395d1(0x13f),
        0x1a: '&#381;',
        0x1b: _0x1395d1(0x140),
        0x1c: '&beta;',
        0x1d: _0x1395d1(0x132),
        0x1e: '&#272;',
        0x1f: _0x1395d1(0xed),
        0x20: _0x1395d1(0x141),
        0x21: '&#484;',
        0x22: _0x1395d1(0x135),
        0x23: '&#407;',
        0x24: _0x1395d1(0x137),
        0x25: _0x1395d1(0x138),
        0x26: _0x1395d1(0x139),
        0x27: _0x1395d1(0x13a),
        0x28: '&#327;',
        0x29: '&Oslash;',
        0x2a: _0x1395d1(0x13b),
        0x2b: _0x1395d1(0x13c),
        0x2c: '&#344;',
        0x2d: _0x1395d1(0x13d),
        0x2e: '&#358;',
        0x2f: _0x1395d1(0x13e),
        0x30: 'V',
        0x31: _0x1395d1(0x117),
        0x32: _0x1395d1(0x118),
        0x33: _0x1395d1(0x13f),
        0x34: _0x1395d1(0x142),
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
        0x1: _0x1395d1(0x143),
        0x2: '&#595;',
        0x3: _0x1395d1(0x144),
        0x4: _0x1395d1(0x145),
        0x5: _0x1395d1(0x146),
        0x6: '&fnof;',
        0x7: _0x1395d1(0xde),
        0x8: _0x1395d1(0x147),
        0x9: _0x1395d1(0x148),
        0xa: _0x1395d1(0xe1),
        0xb: _0x1395d1(0x149),
        0xc: _0x1395d1(0x14a),
        0xd: _0x1395d1(0xe3),
        0xe: _0x1395d1(0x14b),
        0xf: '&sigma;',
        0x10: '&rho;',
        0x11: _0x1395d1(0x14c),
        0x12: '&#2792;',
        0x13: '&#3619;',
        0x14: _0x1395d1(0x14d),
        0x15: _0x1395d1(0x14e),
        0x16: _0x1395d1(0x14f),
        0x17: _0x1395d1(0xfa),
        0x18: _0x1395d1(0x150),
        0x19: '&#4327;',
        0x1a: _0x1395d1(0x151),
        0x1b: _0x1395d1(0x143),
        0x1c: '&#595;',
        0x1d: _0x1395d1(0x144),
        0x1e: _0x1395d1(0x145),
        0x1f: _0x1395d1(0x146),
        0x20: _0x1395d1(0x152),
        0x21: '&#608;',
        0x22: _0x1395d1(0x147),
        0x23: _0x1395d1(0x148),
        0x24: _0x1395d1(0xe1),
        0x25: '&#1185;',
        0x26: '&#8467;',
        0x27: _0x1395d1(0xe3),
        0x28: _0x1395d1(0x14b),
        0x29: '&sigma;',
        0x2a: _0x1395d1(0xe4),
        0x2b: '&phi;',
        0x2c: _0x1395d1(0x153),
        0x2d: '&#3619;',
        0x2e: _0x1395d1(0x14d),
        0x2f: _0x1395d1(0x14e),
        0x30: _0x1395d1(0x14f),
        0x31: _0x1395d1(0xfa),
        0x32: '&#1488;',
        0x33: _0x1395d1(0xe8),
        0x34: _0x1395d1(0x151),
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
        0x1: _0x1395d1(0x154),
        0x2: _0x1395d1(0x155),
        0x3: _0x1395d1(0x156),
        0x4: '&#5610;',
        0x5: _0x1395d1(0x157),
        0x6: _0x1395d1(0x158),
        0x7: _0x1395d1(0x134),
        0x8: _0x1395d1(0x159),
        0x9: _0x1395d1(0x15a),
        0xa: '&#5262;',
        0xb: '&#5845;',
        0xc: _0x1395d1(0x15b),
        0xd: _0x1395d1(0x15c),
        0xe: _0x1395d1(0x15d),
        0xf: _0x1395d1(0x15e),
        0x10: _0x1395d1(0x15f),
        0x11: _0x1395d1(0x160),
        0x12: _0x1395d1(0x161),
        0x13: _0x1395d1(0x162),
        0x14: _0x1395d1(0x163),
        0x15: '&#5196;',
        0x16: '&#5167;',
        0x17: _0x1395d1(0x164),
        0x18: _0x1395d1(0x165),
        0x19: _0x1395d1(0x166),
        0x1a: '&#20057;',
        0x1b: _0x1395d1(0x154),
        0x1c: _0x1395d1(0x155),
        0x1d: _0x1395d1(0x156),
        0x1e: _0x1395d1(0x167),
        0x1f: _0x1395d1(0x157),
        0x20: _0x1395d1(0x158),
        0x21: _0x1395d1(0x134),
        0x22: _0x1395d1(0x159),
        0x23: _0x1395d1(0x15a),
        0x24: '&#5262;',
        0x25: _0x1395d1(0x168),
        0x26: _0x1395d1(0x15b),
        0x27: _0x1395d1(0x15c),
        0x28: _0x1395d1(0x15d),
        0x29: _0x1395d1(0x15e),
        0x2a: '&#5229;',
        0x2b: _0x1395d1(0x160),
        0x2c: _0x1395d1(0x161),
        0x2d: '&#5397;',
        0x2e: _0x1395d1(0x163),
        0x2f: '&#5196;',
        0x30: '&#5167;',
        0x31: _0x1395d1(0x164),
        0x32: _0x1395d1(0x165),
        0x33: _0x1395d1(0x166),
        0x34: _0x1395d1(0x169),
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
        0x1: _0x1395d1(0x16a),
        0x2: _0x1395d1(0x16b),
        0x3: _0x1395d1(0x16c),
        0x4: _0x1395d1(0x16d),
        0x5: _0x1395d1(0x16e),
        0x6: 'f',
        0x7: _0x1395d1(0x16f),
        0x8: 'h',
        0x9: _0x1395d1(0x170),
        0xa: _0x1395d1(0x171),
        0xb: '&kappa;',
        0xc: 'l',
        0xd: _0x1395d1(0x172),
        0xe: _0x1395d1(0x173),
        0xf: '&otilde;',
        0x10: _0x1395d1(0xe4),
        0x11: _0x1395d1(0x174),
        0x12: _0x1395d1(0x175),
        0x13: _0x1395d1(0x176),
        0x14: '&#3923;',
        0x15: _0x1395d1(0xe7),
        0x16: _0x1395d1(0x177),
        0x17: 'w',
        0x18: _0x1395d1(0x178),
        0x19: _0x1395d1(0xe8),
        0x1a: '&#576;',
        0x1b: _0x1395d1(0x16a),
        0x1c: '&#4329;',
        0x1d: _0x1395d1(0x16c),
        0x1e: _0x1395d1(0x16d),
        0x1f: '&#4318;',
        0x20: 'f',
        0x21: _0x1395d1(0x16f),
        0x22: 'h',
        0x23: _0x1395d1(0x170),
        0x24: _0x1395d1(0x171),
        0x25: _0x1395d1(0x179),
        0x26: 'l',
        0x27: '&#4317;',
        0x28: '&#8134;',
        0x29: '&otilde;',
        0x2a: '&rho;',
        0x2b: _0x1395d1(0x174),
        0x2c: _0x1395d1(0x175),
        0x2d: '&#4336;',
        0x2e: _0x1395d1(0x17a),
        0x2f: _0x1395d1(0xe7),
        0x30: _0x1395d1(0x177),
        0x31: 'w',
        0x32: '&#4335;',
        0x33: _0x1395d1(0xe8),
        0x34: '&#576;',
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
        0x1: _0x1395d1(0x17b),
        0x2: _0x1395d1(0x17c),
        0x3: _0x1395d1(0x17d),
        0x4: _0x1395d1(0x17e),
        0x5: _0x1395d1(0x17f),
        0x6: '&#1171;',
        0x7: _0x1395d1(0x180),
        0x8: _0x1395d1(0x181),
        0x9: '&#943;',
        0xa: _0x1395d1(0x182),
        0xb: _0x1395d1(0x183),
        0xc: _0x1395d1(0x184),
        0xd: '&#1084;',
        0xe: _0x1395d1(0x185),
        0xf: _0x1395d1(0x186),
        0x10: _0x1395d1(0xe4),
        0x11: 'q',
        0x12: _0x1395d1(0x187),
        0x13: '&#351;',
        0x14: _0x1395d1(0x188),
        0x15: '&ugrave;',
        0x16: '&nu;',
        0x17: _0x1395d1(0x189),
        0x18: 'x',
        0x19: _0x1395d1(0x18a),
        0x1a: _0x1395d1(0x18b),
        0x1b: _0x1395d1(0x17b),
        0x1c: _0x1395d1(0x17c),
        0x1d: _0x1395d1(0x17d),
        0x1e: _0x1395d1(0x17e),
        0x1f: _0x1395d1(0x17f),
        0x20: '&#1171;',
        0x21: _0x1395d1(0x180),
        0x22: _0x1395d1(0x181),
        0x23: _0x1395d1(0x18c),
        0x24: '&#1112;',
        0x25: _0x1395d1(0x183),
        0x26: _0x1395d1(0x184),
        0x27: _0x1395d1(0x18d),
        0x28: '&#942;',
        0x29: _0x1395d1(0x186),
        0x2a: _0x1395d1(0xe4),
        0x2b: 'q',
        0x2c: '&#341;',
        0x2d: _0x1395d1(0x18e),
        0x2e: _0x1395d1(0x188),
        0x2f: _0x1395d1(0x18f),
        0x30: '&nu;',
        0x31: _0x1395d1(0x189),
        0x32: 'x',
        0x33: _0x1395d1(0x18a),
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
        0x1: _0x1395d1(0x190),
        0x2: _0x1395d1(0x191),
        0x3: _0x1395d1(0x192),
        0x4: _0x1395d1(0x193),
        0x5: '&#41823;',
        0x6: _0x1395d1(0x194),
        0x7: _0x1395d1(0x195),
        0x8: _0x1395d1(0x196),
        0x9: _0x1395d1(0x197),
        0xa: '&#41005;',
        0xb: '&#40983;',
        0xc: _0x1395d1(0x198),
        0xd: _0x1395d1(0x199),
        0xe: _0x1395d1(0x19a),
        0xf: '&#41346;',
        0x10: _0x1395d1(0x19b),
        0x11: _0x1395d1(0x19c),
        0x12: _0x1395d1(0x19d),
        0x13: _0x1395d1(0x19e),
        0x14: _0x1395d1(0x19f),
        0x15: _0x1395d1(0x1a0),
        0x16: _0x1395d1(0x1a1),
        0x17: _0x1395d1(0x1a2),
        0x18: _0x1395d1(0x1a3),
        0x19: '&#42015;',
        0x1a: _0x1395d1(0x1a4),
        0x1b: '&#41707;',
        0x1c: _0x1395d1(0x191),
        0x1d: _0x1395d1(0x192),
        0x1e: _0x1395d1(0x193),
        0x1f: '&#41823;',
        0x20: _0x1395d1(0x194),
        0x21: _0x1395d1(0x195),
        0x22: _0x1395d1(0x196),
        0x23: '&#41105;',
        0x24: _0x1395d1(0x1a5),
        0x25: _0x1395d1(0x1a6),
        0x26: _0x1395d1(0x198),
        0x27: '&#41042;',
        0x28: '&#41081;',
        0x29: _0x1395d1(0x1a7),
        0x2a: '&#41571;',
        0x2b: _0x1395d1(0x19c),
        0x2c: _0x1395d1(0x19d),
        0x2d: _0x1395d1(0x19e),
        0x2e: _0x1395d1(0x19f),
        0x2f: _0x1395d1(0x1a0),
        0x30: _0x1395d1(0x1a1),
        0x31: _0x1395d1(0x1a2),
        0x32: '&#41427;',
        0x33: _0x1395d1(0x1a8),
        0x34: _0x1395d1(0x1a4),
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
        0x2: _0x1395d1(0x1a9),
        0x3: 'C',
        0x4: 'D',
        0x5: '&Xi;',
        0x6: 'F',
        0x7: 'G',
        0x8: 'H',
        0x9: 'I',
        0xa: 'J',
        0xb: _0x1395d1(0x138),
        0xc: 'L',
        0xd: 'M',
        0xe: _0x1395d1(0x1aa),
        0xf: _0x1395d1(0x1ab),
        0x10: 'P',
        0x11: _0x1395d1(0x1ac),
        0x12: _0x1395d1(0x1ad),
        0x13: 'S',
        0x14: _0x1395d1(0x175),
        0x15: _0x1395d1(0x1ae),
        0x16: 'V',
        0x17: _0x1395d1(0x1af),
        0x18: '&#1046;',
        0x19: _0x1395d1(0x1b0),
        0x1a: 'Z',
        0x1b: _0x1395d1(0x1b1),
        0x1c: _0x1395d1(0x1a9),
        0x1d: 'C',
        0x1e: 'D',
        0x1f: _0x1395d1(0x1b2),
        0x20: 'F',
        0x21: 'G',
        0x22: 'H',
        0x23: 'I',
        0x24: 'J',
        0x25: '&#1180;',
        0x26: 'L',
        0x27: 'M',
        0x28: _0x1395d1(0x1aa),
        0x29: '&#1060;',
        0x2a: 'P',
        0x2b: '&#490;',
        0x2c: _0x1395d1(0x1ad),
        0x2d: 'S',
        0x2e: '&Gamma;',
        0x2f: '&#1062;',
        0x30: 'V',
        0x31: _0x1395d1(0x1af),
        0x32: _0x1395d1(0x118),
        0x33: '&#1059;',
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
        0x1: _0x1395d1(0xe9),
        0x2: _0x1395d1(0x1b3),
        0x3: '&#41555;',
        0x4: _0x1395d1(0x1b4),
        0x5: '&#41823;',
        0x6: '&#41863;',
        0x7: '&#41029;',
        0x8: _0x1395d1(0x1b5),
        0x9: _0x1395d1(0x1b6),
        0xa: _0x1395d1(0x1a5),
        0xb: _0x1395d1(0x1b7),
        0xc: '&#42130;',
        0xd: _0x1395d1(0x1b8),
        0xe: _0x1395d1(0x1b9),
        0xf: _0x1395d1(0x1ba),
        0x10: _0x1395d1(0x19b),
        0x11: '&#41392;',
        0x12: _0x1395d1(0x1bb),
        0x13: _0x1395d1(0x1bc),
        0x14: _0x1395d1(0x1bd),
        0x15: '&#40974;',
        0x16: _0x1395d1(0x1be),
        0x17: '&#41295;',
        0x18: '&#41660;',
        0x19: _0x1395d1(0x1bf),
        0x1a: _0x1395d1(0x1a4),
        0x1b: _0x1395d1(0xe9),
        0x1c: _0x1395d1(0x1b3),
        0x1d: '&#41555;',
        0x1e: _0x1395d1(0x1b4),
        0x1f: _0x1395d1(0x1c0),
        0x20: _0x1395d1(0x1c1),
        0x21: '&#41029;',
        0x22: '&#41157;',
        0x23: '&#40996;',
        0x24: _0x1395d1(0x1a5),
        0x25: _0x1395d1(0x1b7),
        0x26: '&#42130;',
        0x27: '&#41141;',
        0x28: _0x1395d1(0x1b9),
        0x29: _0x1395d1(0x1ba),
        0x2a: _0x1395d1(0x19b),
        0x2b: '&#41392;',
        0x2c: _0x1395d1(0x1bb),
        0x2d: _0x1395d1(0x1bc),
        0x2e: _0x1395d1(0x1bd),
        0x2f: '&#40974;',
        0x30: '&#41204;',
        0x31: _0x1395d1(0x1c2),
        0x32: _0x1395d1(0x1c3),
        0x33: _0x1395d1(0x1bf),
        0x34: _0x1395d1(0x1a4),
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
        0x1: _0x1395d1(0x1c4),
        0x2: _0x1395d1(0x1c5),
        0x3: _0x1395d1(0x1c6),
        0x4: _0x1395d1(0x1c7),
        0x5: _0x1395d1(0x1c8),
        0x6: _0x1395d1(0x1c9),
        0x7: _0x1395d1(0x1ca),
        0x8: '&#41053;',
        0x9: _0x1395d1(0x1cb),
        0xa: _0x1395d1(0x1cc),
        0xb: '&#40984;',
        0xc: _0x1395d1(0x198),
        0xd: _0x1395d1(0x1b8),
        0xe: '&#41674;',
        0xf: _0x1395d1(0x1cd),
        0x10: '&#41571;',
        0x11: '&#41392;',
        0x12: _0x1395d1(0x1bb),
        0x13: _0x1395d1(0x1ce),
        0x14: _0x1395d1(0x1bd),
        0x15: _0x1395d1(0x1cf),
        0x16: _0x1395d1(0x1d0),
        0x17: _0x1395d1(0x1a2),
        0x18: _0x1395d1(0x1d1),
        0x19: _0x1395d1(0x1d2),
        0x1a: _0x1395d1(0x1a4),
        0x1b: '&#41708;',
        0x1c: _0x1395d1(0x1c5),
        0x1d: _0x1395d1(0x1c6),
        0x1e: _0x1395d1(0x1c7),
        0x1f: _0x1395d1(0x1c8),
        0x20: '&#41648;',
        0x21: _0x1395d1(0x1ca),
        0x22: _0x1395d1(0x1d3),
        0x23: '&#42128;',
        0x24: '&#42171;',
        0x25: _0x1395d1(0x1b7),
        0x26: '&#42130;',
        0x27: '&#41141;',
        0x28: _0x1395d1(0x1d4),
        0x29: _0x1395d1(0x1cd),
        0x2a: '&#41571;',
        0x2b: _0x1395d1(0x1d5),
        0x2c: '&#41706;',
        0x2d: _0x1395d1(0x1ce),
        0x2e: '&#42180;',
        0x2f: '&#42148;',
        0x30: _0x1395d1(0x1d0),
        0x31: _0x1395d1(0x1a2),
        0x32: _0x1395d1(0x1d1),
        0x33: _0x1395d1(0x1d2),
        0x34: _0x1395d1(0x1a4),
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
        0x1: _0x1395d1(0x1d6),
        0x2: _0x1395d1(0x1d7),
        0x3: _0x1395d1(0x1d8),
        0x4: _0x1395d1(0x1d9),
        0x5: _0x1395d1(0x12f),
        0x6: 'F',
        0x7: _0x1395d1(0x1da),
        0x8: _0x1395d1(0x1db),
        0x9: _0x1395d1(0x1dc),
        0xa: _0x1395d1(0x1dd),
        0xb: _0x1395d1(0x1de),
        0xc: '&#321;',
        0xd: _0x1395d1(0x1df),
        0xe: _0x1395d1(0x1e0),
        0xf: _0x1395d1(0x1e1),
        0x10: _0x1395d1(0x1e2),
        0x11: _0x1395d1(0x1e3),
        0x12: _0x1395d1(0x1e4),
        0x13: _0x1395d1(0x1e5),
        0x14: '&#356;',
        0x15: '&#1062;',
        0x16: _0x1395d1(0x1e6),
        0x17: _0x1395d1(0x1e7),
        0x18: _0x1395d1(0x1e8),
        0x19: _0x1395d1(0x1e9),
        0x1a: _0x1395d1(0x1ea),
        0x1b: _0x1395d1(0x1d6),
        0x1c: _0x1395d1(0x1d7),
        0x1d: _0x1395d1(0x1d8),
        0x1e: _0x1395d1(0x1d9),
        0x1f: '&#400;',
        0x20: 'F',
        0x21: _0x1395d1(0x1da),
        0x22: '&#1085;',
        0x23: _0x1395d1(0x1dc),
        0x24: '&#65420;',
        0x25: '&#1178;',
        0x26: _0x1395d1(0x139),
        0x27: '&#3057;',
        0x28: _0x1395d1(0x1e0),
        0x29: _0x1395d1(0x1e1),
        0x2a: '&thorn;',
        0x2b: _0x1395d1(0x1e3),
        0x2c: _0x1395d1(0x1e4),
        0x2d: _0x1395d1(0x1e5),
        0x2e: _0x1395d1(0x116),
        0x2f: _0x1395d1(0x1ae),
        0x30: _0x1395d1(0x1e6),
        0x31: '&#412;',
        0x32: '&chi;',
        0x33: _0x1395d1(0x1e9),
        0x34: _0x1395d1(0x1ea),
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
        0x1: _0x1395d1(0x1eb),
        0x2: _0x1395d1(0x1ec),
        0x3: '&#391;',
        0x4: '&#394;',
        0x5: '&#1028;',
        0x6: _0x1395d1(0x1ed),
        0x7: _0x1395d1(0x1da),
        0x8: _0x1395d1(0x1ee),
        0x9: _0x1395d1(0x12d),
        0xa: '&#646;',
        0xb: _0x1395d1(0x1ef),
        0xc: _0x1395d1(0x1f0),
        0xd: 'M',
        0xe: _0x1395d1(0x1f1),
        0xf: _0x1395d1(0x1f2),
        0x10: _0x1395d1(0x13b),
        0x11: '&#418;',
        0x12: '&#422;',
        0x13: _0x1395d1(0x1f3),
        0x14: '&#428;',
        0x15: _0x1395d1(0x1f4),
        0x16: _0x1395d1(0x1e6),
        0x17: _0x1395d1(0x1e7),
        0x18: _0x1395d1(0x1f5),
        0x19: _0x1395d1(0x166),
        0x1a: _0x1395d1(0x1f6),
        0x1b: '&#411;',
        0x1c: _0x1395d1(0x1ec),
        0x1d: _0x1395d1(0x1f7),
        0x1e: _0x1395d1(0x1f8),
        0x1f: _0x1395d1(0x1f9),
        0x20: _0x1395d1(0x1ed),
        0x21: _0x1395d1(0x1da),
        0x22: '&#1223;',
        0x23: '&#406;',
        0x24: '&#646;',
        0x25: '&#408;',
        0x26: _0x1395d1(0x1f0),
        0x27: 'M',
        0x28: '&#413;',
        0x29: _0x1395d1(0x1f2),
        0x2a: _0x1395d1(0x13b),
        0x2b: _0x1395d1(0x1fa),
        0x2c: _0x1395d1(0x1fb),
        0x2d: _0x1395d1(0x1f3),
        0x2e: _0x1395d1(0x1fc),
        0x2f: '&#434;',
        0x30: '&#404;',
        0x31: _0x1395d1(0x1e7),
        0x32: _0x1395d1(0x1f5),
        0x33: _0x1395d1(0x166),
        0x34: _0x1395d1(0x1f6),
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
        0x1: _0x1395d1(0x1fd),
        0x2: '&#41712;',
        0x3: _0x1395d1(0x1fe),
        0x4: _0x1395d1(0x1ff),
        0x5: _0x1395d1(0x200),
        0x6: _0x1395d1(0x201),
        0x7: _0x1395d1(0x202),
        0x8: _0x1395d1(0x203),
        0x9: '&#41105;',
        0xa: '&#42171;',
        0xb: _0x1395d1(0x1a6),
        0xc: _0x1395d1(0x198),
        0xd: _0x1395d1(0x1b8),
        0xe: _0x1395d1(0x1d4),
        0xf: '&#41126;',
        0x10: _0x1395d1(0x19b),
        0x11: _0x1395d1(0x204),
        0x12: '&#41733;',
        0x13: _0x1395d1(0x19e),
        0x14: _0x1395d1(0x205),
        0x15: '&#41991;',
        0x16: _0x1395d1(0x206),
        0x17: '&#41295;',
        0x18: _0x1395d1(0x207),
        0x19: _0x1395d1(0x208),
        0x1a: _0x1395d1(0x1a4),
        0x1b: '&#41074;',
        0x1c: _0x1395d1(0x209),
        0x1d: _0x1395d1(0x1fe),
        0x1e: _0x1395d1(0x1ff),
        0x1f: _0x1395d1(0x200),
        0x20: '&#41246;',
        0x21: _0x1395d1(0x202),
        0x22: _0x1395d1(0x203),
        0x23: _0x1395d1(0x197),
        0x24: _0x1395d1(0x1cc),
        0x25: '&#40983;',
        0x26: _0x1395d1(0x198),
        0x27: _0x1395d1(0x1b8),
        0x28: _0x1395d1(0x1d4),
        0x29: _0x1395d1(0x1ba),
        0x2a: '&#41571;',
        0x2b: '&#41079;',
        0x2c: _0x1395d1(0x20a),
        0x2d: _0x1395d1(0x19e),
        0x2e: _0x1395d1(0x205),
        0x2f: _0x1395d1(0x1a0),
        0x30: _0x1395d1(0x206),
        0x31: _0x1395d1(0x1c2),
        0x32: _0x1395d1(0x207),
        0x33: _0x1395d1(0x208),
        0x34: _0x1395d1(0x1a4),
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
        0x1: _0x1395d1(0x20b),
        0x2: _0x1395d1(0x20c),
        0x3: _0x1395d1(0x20d),
        0x4: _0x1395d1(0x20e),
        0x5: _0x1395d1(0x20f),
        0x6: _0x1395d1(0x210),
        0x7: _0x1395d1(0x211),
        0x8: _0x1395d1(0x212),
        0x9: _0x1395d1(0x213),
        0xa: _0x1395d1(0xe1),
        0xb: _0x1395d1(0xe2),
        0xc: '&#645;',
        0xd: _0x1395d1(0x12a),
        0xe: '&#1356;',
        0xf: _0x1395d1(0x214),
        0x10: '&rho;',
        0x11: _0x1395d1(0x14c),
        0x12: _0x1395d1(0x215),
        0x13: _0x1395d1(0x216),
        0x14: _0x1395d1(0x217),
        0x15: '&#1348;',
        0x16: '&#1506;',
        0x17: '&#1377;',
        0x18: _0x1395d1(0x218),
        0x19: _0x1395d1(0x219),
        0x1a: '&#1344;',
        0x1b: _0x1395d1(0x20b),
        0x1c: '&#1349;',
        0x1d: _0x1395d1(0x20d),
        0x1e: _0x1395d1(0x20e),
        0x1f: _0x1395d1(0x20f),
        0x20: _0x1395d1(0x210),
        0x21: '&#1331;',
        0x22: '&#615;',
        0x23: _0x1395d1(0x213),
        0x24: _0x1395d1(0xe1),
        0x25: _0x1395d1(0xe2),
        0x26: '&#645;',
        0x27: _0x1395d1(0x12a),
        0x28: '&#1356;',
        0x29: _0x1395d1(0x214),
        0x2a: '&rho;',
        0x2b: '&phi;',
        0x2c: _0x1395d1(0x215),
        0x2d: _0x1395d1(0x216),
        0x2e: '&#1333;',
        0x2f: _0x1395d1(0x21a),
        0x30: _0x1395d1(0x21b),
        0x31: _0x1395d1(0x21c),
        0x32: '&#1347;',
        0x33: '&#1358;',
        0x34: _0x1395d1(0x21d),
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
        0x2: _0x1395d1(0x21e),
        0x3: _0x1395d1(0x17d),
        0x4: 'd',
        0x5: _0x1395d1(0x146),
        0x6: _0x1395d1(0x152),
        0x7: 'g',
        0x8: 'h',
        0x9: _0x1395d1(0x21f),
        0xa: _0x1395d1(0x220),
        0xb: _0x1395d1(0x179),
        0xc: '&#65434;',
        0xd: 'm',
        0xe: '&eta;',
        0xf: _0x1395d1(0x221),
        0x10: 'p',
        0x11: _0x1395d1(0x13c),
        0x12: 'r',
        0x13: '&scaron;',
        0x14: '&dagger;',
        0x15: 'u',
        0x16: _0x1395d1(0x222),
        0x17: '&omega;',
        0x18: 'x',
        0x19: _0x1395d1(0x223),
        0x1a: 'z',
        0x1b: _0x1395d1(0x143),
        0x1c: _0x1395d1(0x21e),
        0x1d: _0x1395d1(0x17d),
        0x1e: 'd',
        0x1f: _0x1395d1(0x146),
        0x20: '&fnof;',
        0x21: 'g',
        0x22: 'h',
        0x23: _0x1395d1(0x21f),
        0x24: _0x1395d1(0x220),
        0x25: _0x1395d1(0x179),
        0x26: _0x1395d1(0x224),
        0x27: 'm',
        0x28: '&eta;',
        0x29: '&oplus;',
        0x2a: 'p',
        0x2b: _0x1395d1(0x13c),
        0x2c: 'r',
        0x2d: _0x1395d1(0x225),
        0x2e: _0x1395d1(0x226),
        0x2f: 'u',
        0x30: _0x1395d1(0x222),
        0x31: _0x1395d1(0xfa),
        0x32: 'x',
        0x33: _0x1395d1(0x223),
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
        0x1: _0x1395d1(0x227),
        0x2: _0x1395d1(0x16f),
        0x3: '&#2414;',
        0x4: _0x1395d1(0x16d),
        0x5: _0x1395d1(0x228),
        0x6: _0x1395d1(0x210),
        0x7: _0x1395d1(0x229),
        0x8: _0x1395d1(0x22a),
        0x9: _0x1395d1(0x213),
        0xa: '&#646;',
        0xb: _0x1395d1(0x22b),
        0xc: _0x1395d1(0x22c),
        0xd: '&#625;',
        0xe: _0x1395d1(0x22d),
        0xf: '&#2790;',
        0x10: _0x1395d1(0x22e),
        0x11: _0x1395d1(0x22f),
        0x12: '&#1360;',
        0x13: _0x1395d1(0x17d),
        0x14: _0x1395d1(0x230),
        0x15: '&upsilon;',
        0x16: _0x1395d1(0x231),
        0x17: _0x1395d1(0xfa),
        0x18: _0x1395d1(0x232),
        0x19: '&#1506;',
        0x1a: '&#2749;',
        0x1b: '&#3588;',
        0x1c: _0x1395d1(0x16f),
        0x1d: _0x1395d1(0x233),
        0x1e: _0x1395d1(0x16d),
        0x1f: _0x1395d1(0x228),
        0x20: _0x1395d1(0x210),
        0x21: '&#2797;',
        0x22: _0x1395d1(0x22a),
        0x23: _0x1395d1(0x213),
        0x24: _0x1395d1(0x234),
        0x25: _0x1395d1(0x22b),
        0x26: _0x1395d1(0x22c),
        0x27: '&#625;',
        0x28: '&#1352;',
        0x29: _0x1395d1(0x235),
        0x2a: '&#447;',
        0x2b: _0x1395d1(0x22f),
        0x2c: _0x1395d1(0x215),
        0x2d: _0x1395d1(0x17d),
        0x2e: _0x1395d1(0x230),
        0x2f: _0x1395d1(0xe7),
        0x30: '&#3182;',
        0x31: '&omega;',
        0x32: _0x1395d1(0x232),
        0x33: _0x1395d1(0x21b),
        0x34: _0x1395d1(0x236),
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
        0x1: _0x1395d1(0x237),
        0x2: _0x1395d1(0x238),
        0x3: 'c',
        0x4: _0x1395d1(0x239),
        0x5: _0x1395d1(0x23a),
        0x6: 'f',
        0x7: 'g',
        0x8: _0x1395d1(0x1db),
        0x9: '&#1111;',
        0xa: 'j',
        0xb: _0x1395d1(0x23b),
        0xc: _0x1395d1(0x23c),
        0xd: _0x1395d1(0x23d),
        0xe: _0x1395d1(0x23e),
        0xf: _0x1395d1(0x23f),
        0x10: 'p',
        0x11: '&#1092;',
        0x12: _0x1395d1(0x240),
        0x13: '$',
        0x14: '&#1090;',
        0x15: _0x1395d1(0x241),
        0x16: _0x1395d1(0x14f),
        0x17: '&#1097;',
        0x18: _0x1395d1(0x242),
        0x19: '&#1095;',
        0x1a: _0x1395d1(0x243),
        0x1b: _0x1395d1(0x244),
        0x1c: _0x1395d1(0x1a9),
        0x1d: 'C',
        0x1e: _0x1395d1(0x1b1),
        0x1f: _0x1395d1(0x1f9),
        0x20: 'F',
        0x21: 'G',
        0x22: 'H',
        0x23: _0x1395d1(0x245),
        0x24: 'J',
        0x25: '&#1050;',
        0x26: _0x1395d1(0x246),
        0x27: _0x1395d1(0x247),
        0x28: _0x1395d1(0x248),
        0x29: '&#1138;',
        0x2a: 'P',
        0x2b: _0x1395d1(0x1ab),
        0x2c: _0x1395d1(0x1ad),
        0x2d: '$',
        0x2e: 'T',
        0x2f: _0x1395d1(0x1ae),
        0x30: '&#1140;',
        0x31: _0x1395d1(0x249),
        0x32: _0x1395d1(0x118),
        0x33: '&#1063;',
        0x34: _0x1395d1(0x24a),
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
        0x3: _0x1395d1(0x24b),
        0x4: 'd&#830;',
        0x5: _0x1395d1(0x24c),
        0x6: _0x1395d1(0x24d),
        0x7: _0x1395d1(0x24e),
        0x8: _0x1395d1(0x24f),
        0x9: _0x1395d1(0x250),
        0xa: _0x1395d1(0x251),
        0xb: _0x1395d1(0x252),
        0xc: _0x1395d1(0x253),
        0xd: 'm&#830;',
        0xe: _0x1395d1(0x254),
        0xf: _0x1395d1(0x255),
        0x10: _0x1395d1(0x256),
        0x11: _0x1395d1(0x257),
        0x12: _0x1395d1(0x258),
        0x13: _0x1395d1(0x259),
        0x14: 't&#830;',
        0x15: _0x1395d1(0x25a),
        0x16: _0x1395d1(0x25b),
        0x17: _0x1395d1(0x25c),
        0x18: 'x&#830;',
        0x19: _0x1395d1(0x25d),
        0x1a: _0x1395d1(0x25e),
        0x1b: _0x1395d1(0x25f),
        0x1c: _0x1395d1(0x260),
        0x1d: _0x1395d1(0x261),
        0x1e: 'D&#830;',
        0x1f: _0x1395d1(0x262),
        0x20: _0x1395d1(0x263),
        0x21: _0x1395d1(0x264),
        0x22: _0x1395d1(0x265),
        0x23: 'I&#830;',
        0x24: 'J&#830;',
        0x25: 'K&#830;',
        0x26: _0x1395d1(0x266),
        0x27: _0x1395d1(0x267),
        0x28: 'N&#830;',
        0x29: _0x1395d1(0x268),
        0x2a: _0x1395d1(0x269),
        0x2b: 'Q&#830;',
        0x2c: 'R&#830;',
        0x2d: _0x1395d1(0x26a),
        0x2e: _0x1395d1(0x26b),
        0x2f: _0x1395d1(0x26c),
        0x30: _0x1395d1(0x26d),
        0x31: _0x1395d1(0x26e),
        0x32: _0x1395d1(0x26f),
        0x33: _0x1395d1(0x270),
        0x34: _0x1395d1(0x271),
        0x35: '1&#830;',
        0x36: _0x1395d1(0x272),
        0x37: _0x1395d1(0x273),
        0x38: '4&#830;',
        0x39: _0x1395d1(0x274),
        0x3a: _0x1395d1(0x275),
        0x3b: _0x1395d1(0x276),
        0x3c: '8&#830;',
        0x3d: _0x1395d1(0x277),
        0x3e: _0x1395d1(0x278)
    },
    's22': {
        0x1: _0x1395d1(0x279),
        0x2: 'b&#838;',
        0x3: _0x1395d1(0x27a),
        0x4: _0x1395d1(0x27b),
        0x5: _0x1395d1(0x27c),
        0x6: 'f&#838;',
        0x7: 'g&#838;',
        0x8: 'h&#838;',
        0x9: _0x1395d1(0x27d),
        0xa: _0x1395d1(0x27e),
        0xb: 'k&#838;',
        0xc: 'l&#838;',
        0xd: 'm&#838;',
        0xe: 'n&#838;',
        0xf: _0x1395d1(0x27f),
        0x10: _0x1395d1(0x280),
        0x11: _0x1395d1(0x281),
        0x12: _0x1395d1(0x282),
        0x13: 's&#838;',
        0x14: _0x1395d1(0x283),
        0x15: _0x1395d1(0x284),
        0x16: 'v&#838;',
        0x17: _0x1395d1(0x285),
        0x18: _0x1395d1(0x286),
        0x19: _0x1395d1(0x287),
        0x1a: 'z&#838;',
        0x1b: 'A&#838;',
        0x1c: 'B&#838;',
        0x1d: 'C&#838;',
        0x1e: _0x1395d1(0x288),
        0x1f: _0x1395d1(0x289),
        0x20: 'F&#838;',
        0x21: 'G&#838;',
        0x22: _0x1395d1(0x28a),
        0x23: _0x1395d1(0x28b),
        0x24: _0x1395d1(0x28c),
        0x25: _0x1395d1(0x28d),
        0x26: _0x1395d1(0x28e),
        0x27: 'M&#838;',
        0x28: 'N&#838;',
        0x29: _0x1395d1(0x28f),
        0x2a: 'P&#838;',
        0x2b: _0x1395d1(0x290),
        0x2c: _0x1395d1(0x291),
        0x2d: _0x1395d1(0x292),
        0x2e: 'T&#838;',
        0x2f: 'U&#838;',
        0x30: _0x1395d1(0x293),
        0x31: _0x1395d1(0x294),
        0x32: 'X&#838;',
        0x33: _0x1395d1(0x295),
        0x34: _0x1395d1(0x296),
        0x35: _0x1395d1(0x297),
        0x36: _0x1395d1(0x298),
        0x37: _0x1395d1(0x299),
        0x38: _0x1395d1(0x29a),
        0x39: _0x1395d1(0x29b),
        0x3a: _0x1395d1(0x29c),
        0x3b: '7&#838;',
        0x3c: _0x1395d1(0x29d),
        0x3d: _0x1395d1(0x29e),
        0x3e: _0x1395d1(0x29f)
    },
    's23': {
        0x1: _0x1395d1(0x2a0),
        0x2: _0x1395d1(0x2a1),
        0x3: _0x1395d1(0x2a2),
        0x4: _0x1395d1(0x2a3),
        0x5: _0x1395d1(0x2a4),
        0x6: _0x1395d1(0x2a5),
        0x7: 'g&#826;',
        0x8: _0x1395d1(0x2a6),
        0x9: 'i&#826;',
        0xa: _0x1395d1(0x2a7),
        0xb: 'k&#826;',
        0xc: _0x1395d1(0x2a8),
        0xd: _0x1395d1(0x2a9),
        0xe: _0x1395d1(0x2aa),
        0xf: _0x1395d1(0x2ab),
        0x10: 'p&#826;',
        0x11: _0x1395d1(0x2ac),
        0x12: 'r&#826;',
        0x13: _0x1395d1(0x2ad),
        0x14: _0x1395d1(0x2ae),
        0x15: 'u&#826;',
        0x16: _0x1395d1(0x2af),
        0x17: 'w&#826;',
        0x18: 'x&#826;',
        0x19: 'y&#826;',
        0x1a: _0x1395d1(0x2b0),
        0x1b: 'A&#826;',
        0x1c: _0x1395d1(0x2b1),
        0x1d: 'C&#826;',
        0x1e: 'D&#826;',
        0x1f: 'E&#826;',
        0x20: 'F&#826;',
        0x21: _0x1395d1(0x2b2),
        0x22: _0x1395d1(0x2b3),
        0x23: 'I&#826;',
        0x24: _0x1395d1(0x2b4),
        0x25: _0x1395d1(0x2b5),
        0x26: _0x1395d1(0x2b6),
        0x27: 'M&#826;',
        0x28: 'N&#826;',
        0x29: _0x1395d1(0x2b7),
        0x2a: _0x1395d1(0x2b8),
        0x2b: _0x1395d1(0x2b9),
        0x2c: 'R&#826;',
        0x2d: _0x1395d1(0x2ba),
        0x2e: _0x1395d1(0x2bb),
        0x2f: 'U&#826;',
        0x30: _0x1395d1(0x2bc),
        0x31: _0x1395d1(0x2bd),
        0x32: 'X&#826;',
        0x33: 'Y&#826;',
        0x34: _0x1395d1(0x2be),
        0x35: '1&#826;',
        0x36: _0x1395d1(0x2bf),
        0x37: _0x1395d1(0x2c0),
        0x38: _0x1395d1(0x2c1),
        0x39: _0x1395d1(0x2c2),
        0x3a: '6&#826;',
        0x3b: _0x1395d1(0x2c3),
        0x3c: _0x1395d1(0x2c4),
        0x3d: _0x1395d1(0x2c5),
        0x3e: _0x1395d1(0x2c6)
    },
    's24': {
        0x1: _0x1395d1(0x2c7),
        0x2: _0x1395d1(0x2c8),
        0x3: 'c&#857;',
        0x4: _0x1395d1(0x2c9),
        0x5: _0x1395d1(0x2ca),
        0x6: 'f&#857;',
        0x7: _0x1395d1(0x2cb),
        0x8: 'h&#857;',
        0x9: _0x1395d1(0x2cc),
        0xa: 'j&#857;',
        0xb: _0x1395d1(0x2cd),
        0xc: _0x1395d1(0x2ce),
        0xd: _0x1395d1(0x2cf),
        0xe: _0x1395d1(0x2d0),
        0xf: _0x1395d1(0x2d1),
        0x10: 'p&#857;',
        0x11: _0x1395d1(0x2d2),
        0x12: _0x1395d1(0x2d3),
        0x13: 's&#857;',
        0x14: _0x1395d1(0x2d4),
        0x15: _0x1395d1(0x2d5),
        0x16: _0x1395d1(0x2d6),
        0x17: _0x1395d1(0x2d7),
        0x18: _0x1395d1(0x2d8),
        0x19: _0x1395d1(0x2d9),
        0x1a: 'z&#857;',
        0x1b: 'A&#857;',
        0x1c: 'B&#857;',
        0x1d: _0x1395d1(0x2da),
        0x1e: _0x1395d1(0x2db),
        0x1f: _0x1395d1(0x2dc),
        0x20: _0x1395d1(0x2dd),
        0x21: 'G&#857;',
        0x22: _0x1395d1(0x2de),
        0x23: _0x1395d1(0x2df),
        0x24: _0x1395d1(0x2e0),
        0x25: 'K&#857;',
        0x26: _0x1395d1(0x2e1),
        0x27: _0x1395d1(0x2e2),
        0x28: _0x1395d1(0x2e3),
        0x29: 'O&#857;',
        0x2a: _0x1395d1(0x2e4),
        0x2b: _0x1395d1(0x2e5),
        0x2c: _0x1395d1(0x2e6),
        0x2d: 'S&#857;',
        0x2e: 'T&#857;',
        0x2f: _0x1395d1(0x2e7),
        0x30: 'V&#857;',
        0x31: _0x1395d1(0x2e8),
        0x32: _0x1395d1(0x2e9),
        0x33: _0x1395d1(0x2ea),
        0x34: _0x1395d1(0x2eb),
        0x35: '1&#857;',
        0x36: _0x1395d1(0x2ec),
        0x37: _0x1395d1(0x2ed),
        0x38: '4&#857;',
        0x39: _0x1395d1(0x2ee),
        0x3a: _0x1395d1(0x2ef),
        0x3b: _0x1395d1(0x2f0),
        0x3c: _0x1395d1(0x2f1),
        0x3d: _0x1395d1(0x2f2),
        0x3e: '0&#857;'
    },
    's25': {
        0x1: _0x1395d1(0x2f3),
        0x2: 'b&#799;',
        0x3: _0x1395d1(0x2f4),
        0x4: _0x1395d1(0x2f5),
        0x5: _0x1395d1(0x2f6),
        0x6: _0x1395d1(0x2f7),
        0x7: _0x1395d1(0x2f8),
        0x8: _0x1395d1(0x2f9),
        0x9: 'i&#799;',
        0xa: _0x1395d1(0x2fa),
        0xb: _0x1395d1(0x2fb),
        0xc: _0x1395d1(0x2fc),
        0xd: _0x1395d1(0x2fd),
        0xe: _0x1395d1(0x2fe),
        0xf: _0x1395d1(0x2ff),
        0x10: _0x1395d1(0x300),
        0x11: _0x1395d1(0x301),
        0x12: _0x1395d1(0x302),
        0x13: _0x1395d1(0x303),
        0x14: 't&#799;',
        0x15: _0x1395d1(0x304),
        0x16: _0x1395d1(0x305),
        0x17: _0x1395d1(0x306),
        0x18: _0x1395d1(0x307),
        0x19: _0x1395d1(0x308),
        0x1a: _0x1395d1(0x309),
        0x1b: _0x1395d1(0x30a),
        0x1c: _0x1395d1(0x30b),
        0x1d: _0x1395d1(0x30c),
        0x1e: 'D&#799;',
        0x1f: 'E&#799;',
        0x20: _0x1395d1(0x30d),
        0x21: _0x1395d1(0x30e),
        0x22: _0x1395d1(0x30f),
        0x23: _0x1395d1(0x310),
        0x24: _0x1395d1(0x311),
        0x25: _0x1395d1(0x312),
        0x26: 'L&#799;',
        0x27: _0x1395d1(0x313),
        0x28: _0x1395d1(0x314),
        0x29: 'O&#799;',
        0x2a: _0x1395d1(0x315),
        0x2b: _0x1395d1(0x316),
        0x2c: _0x1395d1(0x317),
        0x2d: _0x1395d1(0x318),
        0x2e: _0x1395d1(0x319),
        0x2f: 'U&#799;',
        0x30: 'V&#799;',
        0x31: _0x1395d1(0x31a),
        0x32: _0x1395d1(0x31b),
        0x33: 'Y&#799;',
        0x34: _0x1395d1(0x31c),
        0x35: _0x1395d1(0x31d),
        0x36: _0x1395d1(0x31e),
        0x37: '3&#799;',
        0x38: '4&#799;',
        0x39: _0x1395d1(0x31f),
        0x3a: _0x1395d1(0x320),
        0x3b: _0x1395d1(0x321),
        0x3c: '8&#799;',
        0x3d: _0x1395d1(0x322),
        0x3e: _0x1395d1(0x323)
    },
    's26': {
        0x1: _0x1395d1(0x324),
        0x2: _0x1395d1(0x325),
        0x3: _0x1395d1(0x326),
        0x4: _0x1395d1(0x327),
        0x5: _0x1395d1(0x328),
        0x6: _0x1395d1(0x329),
        0x7: _0x1395d1(0x32a),
        0x8: _0x1395d1(0x32b),
        0x9: _0x1395d1(0x32c),
        0xa: _0x1395d1(0x32d),
        0xb: _0x1395d1(0x32e),
        0xc: _0x1395d1(0x32f),
        0xd: _0x1395d1(0x330),
        0xe: 'n&#846;',
        0xf: 'o&#846;',
        0x10: 'p&#846;',
        0x11: _0x1395d1(0x331),
        0x12: _0x1395d1(0x332),
        0x13: _0x1395d1(0x333),
        0x14: _0x1395d1(0x334),
        0x15: 'u&#846;',
        0x16: _0x1395d1(0x335),
        0x17: _0x1395d1(0x336),
        0x18: _0x1395d1(0x337),
        0x19: _0x1395d1(0x338),
        0x1a: _0x1395d1(0x339),
        0x1b: _0x1395d1(0x33a),
        0x1c: 'B&#846;',
        0x1d: 'C&#846;',
        0x1e: _0x1395d1(0x33b),
        0x1f: 'E&#846;',
        0x20: 'F&#846;',
        0x21: _0x1395d1(0x33c),
        0x22: _0x1395d1(0x33d),
        0x23: _0x1395d1(0x33e),
        0x24: _0x1395d1(0x33f),
        0x25: _0x1395d1(0x340),
        0x26: 'L&#846;',
        0x27: _0x1395d1(0x341),
        0x28: 'N&#846;',
        0x29: _0x1395d1(0x342),
        0x2a: _0x1395d1(0x343),
        0x2b: _0x1395d1(0x344),
        0x2c: _0x1395d1(0x345),
        0x2d: _0x1395d1(0x346),
        0x2e: 'T&#846;',
        0x2f: 'U&#846;',
        0x30: _0x1395d1(0x347),
        0x31: _0x1395d1(0x348),
        0x32: _0x1395d1(0x349),
        0x33: _0x1395d1(0x34a),
        0x34: _0x1395d1(0x34b),
        0x35: '1&#846;',
        0x36: _0x1395d1(0x34c),
        0x37: _0x1395d1(0x34d),
        0x38: _0x1395d1(0x34e),
        0x39: _0x1395d1(0x34f),
        0x3a: '6&#846;',
        0x3b: _0x1395d1(0x350),
        0x3c: _0x1395d1(0x351),
        0x3d: '9&#846;',
        0x3e: '0&#846;'
    },
    's27': {
        0x1: _0x1395d1(0x352),
        0x2: _0x1395d1(0x353),
        0x3: 'c&#829;&#851;',
        0x4: 'd&#829;&#851;',
        0x5: _0x1395d1(0x354),
        0x6: 'f&#829;&#851;',
        0x7: 'g&#829;&#851;',
        0x8: 'h&#829;&#851;',
        0x9: _0x1395d1(0x355),
        0xa: _0x1395d1(0x356),
        0xb: _0x1395d1(0x357),
        0xc: _0x1395d1(0x358),
        0xd: _0x1395d1(0x359),
        0xe: 'n&#829;&#851;',
        0xf: _0x1395d1(0x35a),
        0x10: _0x1395d1(0x35b),
        0x11: _0x1395d1(0x35c),
        0x12: _0x1395d1(0x35d),
        0x13: _0x1395d1(0x35e),
        0x14: 't&#829;&#851;',
        0x15: _0x1395d1(0x35f),
        0x16: 'v&#829;&#851;',
        0x17: _0x1395d1(0x360),
        0x18: _0x1395d1(0x361),
        0x19: _0x1395d1(0x362),
        0x1a: _0x1395d1(0x363),
        0x1b: _0x1395d1(0x364),
        0x1c: _0x1395d1(0x365),
        0x1d: 'C&#829;&#851;',
        0x1e: 'D&#829;&#851;',
        0x1f: _0x1395d1(0x366),
        0x20: 'F&#829;&#851;',
        0x21: _0x1395d1(0x367),
        0x22: _0x1395d1(0x368),
        0x23: _0x1395d1(0x369),
        0x24: _0x1395d1(0x36a),
        0x25: _0x1395d1(0x36b),
        0x26: 'L&#829;&#851;',
        0x27: _0x1395d1(0x36c),
        0x28: _0x1395d1(0x36d),
        0x29: _0x1395d1(0x36e),
        0x2a: _0x1395d1(0x36f),
        0x2b: _0x1395d1(0x370),
        0x2c: 'R&#829;&#851;',
        0x2d: _0x1395d1(0x371),
        0x2e: 'T&#829;&#851;',
        0x2f: _0x1395d1(0x372),
        0x30: _0x1395d1(0x373),
        0x31: _0x1395d1(0x374),
        0x32: _0x1395d1(0x375),
        0x33: 'Y&#829;&#851;',
        0x34: _0x1395d1(0x376),
        0x35: _0x1395d1(0x377),
        0x36: _0x1395d1(0x378),
        0x37: _0x1395d1(0x379),
        0x38: _0x1395d1(0x37a),
        0x39: '5&#829;&#851;',
        0x3a: '6&#829;&#851;',
        0x3b: _0x1395d1(0x37b),
        0x3c: _0x1395d1(0x37c),
        0x3d: _0x1395d1(0x37d),
        0x3e: '0&#829;&#851;'
    },
    's29': {
        0x1: _0x1395d1(0x37e),
        0x2: _0x1395d1(0x37f),
        0x3: _0x1395d1(0x380),
        0x4: _0x1395d1(0x381),
        0x5: '&#120462;&#823;',
        0x6: '&#120463;&#823;',
        0x7: _0x1395d1(0x382),
        0x8: _0x1395d1(0x383),
        0x9: _0x1395d1(0x384),
        0xa: _0x1395d1(0x385),
        0xb: _0x1395d1(0x386),
        0xc: _0x1395d1(0x387),
        0xd: '&#120470;&#823;',
        0xe: _0x1395d1(0x388),
        0xf: _0x1395d1(0x389),
        0x10: _0x1395d1(0x38a),
        0x11: _0x1395d1(0x38b),
        0x12: _0x1395d1(0x38c),
        0x13: _0x1395d1(0x38d),
        0x14: _0x1395d1(0x38e),
        0x15: _0x1395d1(0x38f),
        0x16: _0x1395d1(0x390),
        0x17: '&#120480;&#823;',
        0x18: _0x1395d1(0x391),
        0x19: _0x1395d1(0x392),
        0x1a: '&#120483;&#823;',
        0x1b: _0x1395d1(0x393),
        0x1c: _0x1395d1(0x394),
        0x1d: _0x1395d1(0x395),
        0x1e: _0x1395d1(0x396),
        0x1f: _0x1395d1(0x397),
        0x20: _0x1395d1(0x398),
        0x21: _0x1395d1(0x399),
        0x22: _0x1395d1(0x39a),
        0x23: _0x1395d1(0x39b),
        0x24: '&#120441;&#823;',
        0x25: _0x1395d1(0x39c),
        0x26: _0x1395d1(0x39d),
        0x27: _0x1395d1(0x39e),
        0x28: _0x1395d1(0x39f),
        0x29: _0x1395d1(0x3a0),
        0x2a: _0x1395d1(0x3a1),
        0x2b: '&#120448;&#823;',
        0x2c: _0x1395d1(0x3a2),
        0x2d: _0x1395d1(0x3a3),
        0x2e: _0x1395d1(0x3a4),
        0x2f: _0x1395d1(0x3a5),
        0x30: _0x1395d1(0x3a6),
        0x31: _0x1395d1(0x3a7),
        0x32: '&#120455;&#823;',
        0x33: _0x1395d1(0x3a8),
        0x34: '&#120457;&#823;',
        0x35: _0x1395d1(0x3a9),
        0x36: _0x1395d1(0x3aa),
        0x37: _0x1395d1(0x3ab),
        0x38: _0x1395d1(0x3ac),
        0x39: '&#120827;&#823;',
        0x3a: _0x1395d1(0x3ad),
        0x3b: '&#120829;&#823;',
        0x3c: _0x1395d1(0x3ae),
        0x3d: _0x1395d1(0x3af),
        0x3e: '&#120822;&#823;'
    },
    's30': {
        0x1: _0x1395d1(0x3b0),
        0x2: 'b&#866;',
        0x3: _0x1395d1(0x3b1),
        0x4: _0x1395d1(0x3b2),
        0x5: _0x1395d1(0x3b3),
        0x6: _0x1395d1(0x3b4),
        0x7: _0x1395d1(0x3b5),
        0x8: _0x1395d1(0x3b6),
        0x9: 'i&#866;',
        0xa: _0x1395d1(0x3b7),
        0xb: _0x1395d1(0x3b8),
        0xc: _0x1395d1(0x3b9),
        0xd: _0x1395d1(0x3ba),
        0xe: _0x1395d1(0x3bb),
        0xf: _0x1395d1(0x3bc),
        0x10: _0x1395d1(0x3bd),
        0x11: _0x1395d1(0x3be),
        0x12: 'r&#866;',
        0x13: _0x1395d1(0x3bf),
        0x14: _0x1395d1(0x3c0),
        0x15: 'u&#866;',
        0x16: _0x1395d1(0x3c1),
        0x17: 'w&#866;',
        0x18: _0x1395d1(0x3c2),
        0x19: _0x1395d1(0x3c3),
        0x1a: _0x1395d1(0x3c4),
        0x1b: 'A&#866;',
        0x1c: 'B&#866;',
        0x1d: _0x1395d1(0x3c5),
        0x1e: 'D&#866;',
        0x1f: 'E&#866;',
        0x20: _0x1395d1(0x3c6),
        0x21: _0x1395d1(0x3c7),
        0x22: _0x1395d1(0x3c8),
        0x23: 'I&#866;',
        0x24: _0x1395d1(0x3c9),
        0x25: _0x1395d1(0x3ca),
        0x26: _0x1395d1(0x3cb),
        0x27: _0x1395d1(0x3cc),
        0x28: 'N&#866;',
        0x29: _0x1395d1(0x3cd),
        0x2a: 'P&#866;',
        0x2b: _0x1395d1(0x3ce),
        0x2c: _0x1395d1(0x3cf),
        0x2d: _0x1395d1(0x3d0),
        0x2e: _0x1395d1(0x3d1),
        0x2f: _0x1395d1(0x3d2),
        0x30: _0x1395d1(0x3d3),
        0x31: _0x1395d1(0x3d4),
        0x32: _0x1395d1(0x3d5),
        0x33: _0x1395d1(0x3d6),
        0x34: _0x1395d1(0x3d7),
        0x35: '1&#866;',
        0x36: _0x1395d1(0x3d8),
        0x37: _0x1395d1(0x3d9),
        0x38: _0x1395d1(0x3da),
        0x39: '5&#866;',
        0x3a: _0x1395d1(0x3db),
        0x3b: '7&#866;',
        0x3c: '8&#866;',
        0x3d: _0x1395d1(0x3dc),
        0x3e: '0&#866;'
    },
    's31': {
        0x1: _0x1395d1(0x3dd),
        0x2: 'b&#828;',
        0x3: _0x1395d1(0x3de),
        0x4: 'd&#828;',
        0x5: _0x1395d1(0x3df),
        0x6: 'f&#828;',
        0x7: _0x1395d1(0x3e0),
        0x8: _0x1395d1(0x3e1),
        0x9: 'i&#828;',
        0xa: _0x1395d1(0x3e2),
        0xb: _0x1395d1(0x3e3),
        0xc: _0x1395d1(0x3e4),
        0xd: _0x1395d1(0x3e5),
        0xe: _0x1395d1(0x3e6),
        0xf: _0x1395d1(0x3e7),
        0x10: 'p&#828;',
        0x11: _0x1395d1(0x3e8),
        0x12: _0x1395d1(0x3e9),
        0x13: 's&#828;',
        0x14: _0x1395d1(0x3ea),
        0x15: 'u&#828;',
        0x16: _0x1395d1(0x3eb),
        0x17: 'w&#828;',
        0x18: 'x&#828;',
        0x19: _0x1395d1(0x3ec),
        0x1a: _0x1395d1(0x3ed),
        0x1b: _0x1395d1(0x3ee),
        0x1c: _0x1395d1(0x3ef),
        0x1d: _0x1395d1(0x3f0),
        0x1e: _0x1395d1(0x3f1),
        0x1f: _0x1395d1(0x3f2),
        0x20: _0x1395d1(0x3f3),
        0x21: _0x1395d1(0x3f4),
        0x22: 'H&#828;',
        0x23: _0x1395d1(0x3f5),
        0x24: 'J&#828;',
        0x25: _0x1395d1(0x3f6),
        0x26: 'L&#828;',
        0x27: 'M&#828;',
        0x28: 'N&#828;',
        0x29: _0x1395d1(0x3f7),
        0x2a: _0x1395d1(0x3f8),
        0x2b: _0x1395d1(0x3f9),
        0x2c: _0x1395d1(0x3fa),
        0x2d: _0x1395d1(0x3fb),
        0x2e: _0x1395d1(0x3fc),
        0x2f: _0x1395d1(0x3fd),
        0x30: _0x1395d1(0x3fe),
        0x31: 'W&#828;',
        0x32: _0x1395d1(0x3ff),
        0x33: _0x1395d1(0x400),
        0x34: _0x1395d1(0x401),
        0x35: _0x1395d1(0x402),
        0x36: _0x1395d1(0x403),
        0x37: '3&#828;',
        0x38: '4&#828;',
        0x39: '5&#828;',
        0x3a: _0x1395d1(0x404),
        0x3b: _0x1395d1(0x405),
        0x3c: _0x1395d1(0x406),
        0x3d: _0x1395d1(0x407),
        0x3e: '0&#828;'
    }
};

function Change(_0x580ea3, _0x1e6b1e) {
    var _0x2624d5 = _0x1395d1,
        _0x29e646 = '',
        _0x580ea3 = _0x580ea3;
    if (_0x580ea3[_0x2624d5(0x38)] == 0x0) return;
    for (i = 0x0; i < _0x580ea3[_0x2624d5(0x38)]; i++) {
        var _0x4373fe = _0x580ea3['charAt'](i),
            _0x57e36f = normal['indexOf'](_0x4373fe) + 0x1;
        if (_0x4373fe == '\x20') _0x29e646 += '\x20';
        else !_0x57e36f ? _0x29e646 += _0x4373fe : _0x29e646 += newtext[_0x1e6b1e][_0x57e36f];
    }
    return _0x29e646;
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
    var _0xd61394 = _0x1395d1;
    this[_0xd61394(0x4)] = {
        'flip': {
            'init': function() {
                var _0x45b79b = _0xd61394;
                for (i in this['map']) this[_0x45b79b(0x37)][this[_0x45b79b(0x37)][i]] = i;
            },
            'encode': function(_0x5cb803) {
                var _0x18a9fa = _0xd61394;
                for (var _0x16676b, _0x584664 = [], _0x383430 = 0x0, _0x4ed7bc = _0x5cb803[_0x18a9fa(0x38)]; _0x4ed7bc > _0x383430; _0x383430++) _0x16676b = _0x5cb803[_0x18a9fa(0x408)](_0x383430), _0x383430 > 0x0 && ('̤' == _0x16676b || '̗' == _0x16676b || '̖' == _0x16676b || '̮' == _0x16676b) ? (_0x16676b = this[_0x18a9fa(0x37)][_0x5cb803['charAt'](_0x383430 - 0x1) + _0x16676b], _0x584664[_0x18a9fa(0x409)]()) : (_0x16676b = this[_0x18a9fa(0x37)][_0x16676b], _0x18a9fa(0x40a) == typeof _0x16676b && (_0x16676b = _0x5cb803[_0x18a9fa(0x408)](_0x383430))), _0x584664['push'](_0x16676b);
                return _0x584664[_0x18a9fa(0x40b)]()[_0x18a9fa(0x8)]('');
            },
            'decode': function(_0x524c75) {
                var _0x106720 = _0xd61394;
                for (var _0x12a251, _0x2f9241 = [], _0x13aeed = 0x0, _0xbb6c49 = _0x524c75[_0x106720(0x38)]; _0xbb6c49 > _0x13aeed; _0x13aeed++) _0x12a251 = _0x524c75[_0x106720(0x408)](_0x13aeed), _0x13aeed > 0x0 && ('̤' == _0x12a251 || '̗' == _0x12a251 || '̖' == _0x12a251 || '̮' == _0x12a251) ? (_0x12a251 = this['map'][_0x524c75[_0x106720(0x408)](_0x13aeed - 0x1) + _0x12a251], _0x2f9241['pop']()) : (_0x12a251 = this[_0x106720(0x37)][_0x12a251], 'undefined' == typeof _0x12a251 && (_0x12a251 = _0x524c75[_0x106720(0x408)](_0x13aeed))), _0x2f9241[_0x106720(0x3d)](_0x12a251);
                return _0x2f9241['reverse']()[_0x106720(0x8)]('');
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
                var _0x2566e1 = _0xd61394;
                for (i in this[_0x2566e1(0x37)]) this['map'][this[_0x2566e1(0x37)][i]] = i;
            },
            'encode': function(_0x502a55) {
                var _0x1efdb2 = _0xd61394;
                for (var _0xb6700f, _0x90b211 = [], _0x138bdc = [], _0x977a32 = 0x0, _0x1755b5 = _0x502a55[_0x1efdb2(0x38)]; _0x1755b5 > _0x977a32; _0x977a32++) _0xb6700f = _0x502a55[_0x1efdb2(0x408)](_0x977a32), _0x977a32 > 0x0 && ('̈' == _0xb6700f || '̀' == _0xb6700f || '́' == _0xb6700f || '̂' == _0xb6700f) ? (_0xb6700f = this[_0x1efdb2(0x37)][_0x502a55[_0x1efdb2(0x408)](_0x977a32 - 0x1) + _0xb6700f], _0x90b211['pop']()) : (_0xb6700f = this[_0x1efdb2(0x37)][_0xb6700f], _0x1efdb2(0x40a) == typeof _0xb6700f && (_0xb6700f = _0x502a55[_0x1efdb2(0x408)](_0x977a32))), '\x0a' == _0xb6700f ? (_0x138bdc['push'](_0x90b211[_0x1efdb2(0x40b)]()[_0x1efdb2(0x8)]('')), _0x90b211 = []) : _0x90b211[_0x1efdb2(0x3d)](_0xb6700f);
                return _0x138bdc[_0x1efdb2(0x3d)](_0x90b211[_0x1efdb2(0x40b)]()[_0x1efdb2(0x8)]('')), _0x138bdc[_0x1efdb2(0x8)]('\x0a');
            },
            'decode': function(_0x58c3c0) {
                var _0x28c0b6 = _0xd61394;
                for (var _0x139011, _0x314c3f = [], _0x4e8c9e = [], _0x30c296 = 0x0, _0x1f9c81 = _0x58c3c0[_0x28c0b6(0x38)]; _0x1f9c81 > _0x30c296; _0x30c296++) _0x139011 = _0x58c3c0[_0x28c0b6(0x408)](_0x30c296), _0x30c296 > 0x0 && ('̈' == _0x139011 || '̀' == _0x139011 || '́' == _0x139011 || '̂' == _0x139011) ? (_0x139011 = this[_0x28c0b6(0x37)][_0x58c3c0['charAt'](_0x30c296 - 0x1) + _0x139011], _0x314c3f['pop']()) : (_0x139011 = this[_0x28c0b6(0x37)][_0x139011], _0x28c0b6(0x40a) == typeof _0x139011 && (_0x139011 = _0x58c3c0[_0x28c0b6(0x408)](_0x30c296))), '\x0a' == _0x139011 ? (_0x4e8c9e[_0x28c0b6(0x3d)](_0x314c3f[_0x28c0b6(0x40b)]()[_0x28c0b6(0x8)]('')), _0x314c3f = []) : _0x314c3f[_0x28c0b6(0x3d)](_0x139011);
                return _0x4e8c9e[_0x28c0b6(0x3d)](_0x314c3f[_0x28c0b6(0x40b)]()[_0x28c0b6(0x8)]('')), _0x4e8c9e['join']('\x0a');
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
                var _0x3ce302 = _0xd61394;
                for (var _0x1fdb9f = 0x300; 0x315 >= _0x1fdb9f; _0x1fdb9f++) this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](_0x1fdb9f));
                for (var _0x1fdb9f = 0x316; 0x333 >= _0x1fdb9f; _0x1fdb9f++) 0x31a != _0x1fdb9f && 0x31b != _0x1fdb9f && this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](_0x1fdb9f));
                this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x31a)), this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x31b));
                for (var _0x1fdb9f = 0x334; 0x338 >= _0x1fdb9f; _0x1fdb9f++) this[_0x3ce302(0x40f)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](_0x1fdb9f));
                for (var _0x1fdb9f = 0x339; 0x33c >= _0x1fdb9f; _0x1fdb9f++) this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](_0x1fdb9f));
                for (var _0x1fdb9f = 0x33d; 0x344 >= _0x1fdb9f; _0x1fdb9f++) this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String['fromCharCode'](_0x1fdb9f));
                this['diacriticsTop'][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x344)), this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x345)), this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x346)), this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x347)), this['diacriticsBottom'][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x348)), this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x349)), this['diacriticsTop'][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x34a)), this['diacriticsTop'][_0x3ce302(0x3d)](String['fromCharCode'](0x34b)), this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x34c)), this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String['fromCharCode'](0x34d)), this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String['fromCharCode'](0x34e)), this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x350)), this['diacriticsTop']['push'](String[_0x3ce302(0x40d)](0x351)), this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String['fromCharCode'](0x352)), this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x353)), this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x354)), this['diacriticsBottom'][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x355)), this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x356)), this['diacriticsTop'][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x357)), this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x358)), this[_0x3ce302(0x40e)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x359)), this[_0x3ce302(0x40e)]['push'](String[_0x3ce302(0x40d)](0x35a)), this['diacriticsTop'][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x35b)), this['diacriticsBottom'][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x35c)), this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x35d)), this[_0x3ce302(0x40c)][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x35d)), this['diacriticsBottom']['push'](String['fromCharCode'](0x35f)), this['diacriticsTop'][_0x3ce302(0x3d)](String[_0x3ce302(0x40d)](0x360)), this[_0x3ce302(0x40c)]['push'](String[_0x3ce302(0x40d)](0x361));
            },
            'encode': function(_0x43033b) {
                var _0x4757fd = _0xd61394,
                    _0x269703, _0xa7121b = '';
                for (i in _0x43033b) {
                    if (_0x269703 = _0x43033b[i], this[_0x4757fd(0x5)]['middle'] && (_0x269703 += this['diacriticsMiddle'][Math[_0x4757fd(0x3f)](Math[_0x4757fd(0x3b)]() * this['diacriticsMiddle']['length'])]), this[_0x4757fd(0x5)][_0x4757fd(0x410)]) {
                        for (var _0x47829f = this[_0x4757fd(0x40c)][_0x4757fd(0x38)] - 0x1, _0x3b7d22 = 0x0, _0x5559a6 = this[_0x4757fd(0x5)][_0x4757fd(0x411)] - Math['random']() * (this[_0x4757fd(0x5)][_0x4757fd(0x412)] / 0x64 * this[_0x4757fd(0x5)][_0x4757fd(0x411)]); _0x5559a6 > _0x3b7d22; _0x3b7d22++) _0x269703 += this[_0x4757fd(0x40c)][Math[_0x4757fd(0x3f)](Math[_0x4757fd(0x3b)]() * _0x47829f)];
                    }
                    if (this[_0x4757fd(0x5)][_0x4757fd(0x413)]) {
                        for (var _0x11fc7f = this[_0x4757fd(0x40e)][_0x4757fd(0x38)] - 0x1, _0x3b7d22 = 0x0, _0x5559a6 = this['options']['maxHeight'] - Math[_0x4757fd(0x3b)]() * (this[_0x4757fd(0x5)][_0x4757fd(0x412)] / 0x64 * this[_0x4757fd(0x5)][_0x4757fd(0x411)]); _0x5559a6 > _0x3b7d22; _0x3b7d22++) _0x269703 += this[_0x4757fd(0x40e)][Math[_0x4757fd(0x3f)](Math[_0x4757fd(0x3b)]() * _0x11fc7f)];
                    }
                    _0xa7121b += _0x269703;
                }
                return _0xa7121b;
            },
            'decode': function(_0x50e357) {
                var _0x43cadc = _0xd61394,
                    _0x226ebb, _0x31ca94 = '';
                for (i in _0x50e357) _0x226ebb = _0x50e357[i][_0x43cadc(0x414)](0x0), (0x300 > _0x226ebb || _0x226ebb > 0x361) && (_0x31ca94 += _0x50e357[i]);
                return _0x31ca94;
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
                var _0x57edf3 = _0xd61394;
                for (var _0x168658 = 0x31; 0x39 >= _0x168658; _0x168658++) this[_0x57edf3(0x37)][String[_0x57edf3(0x40d)](_0x168658)] = String[_0x57edf3(0x40d)](_0x168658 + 0x242f);
                this[_0x57edf3(0x37)][0x0] = '⓪';
                for (var _0x168658 = 0x41; 0x5a >= _0x168658; _0x168658++) this[_0x57edf3(0x37)][String[_0x57edf3(0x40d)](_0x168658)] = String['fromCharCode'](_0x168658 + 0x2475);
                for (var _0x168658 = 0x61; 0x7a >= _0x168658; _0x168658++) this[_0x57edf3(0x37)][String[_0x57edf3(0x40d)](_0x168658)] = String[_0x57edf3(0x40d)](_0x168658 + 0x246f);
                for (_0x168658 in this[_0x57edf3(0x37)]) this[_0x57edf3(0x415)][this[_0x57edf3(0x37)][_0x168658]] = _0x168658;
            },
            'encode': function(_0x346992) {
                var _0x18ba4c = _0xd61394,
                    _0x4f0a21, _0x2befed = '',
                    _0x5d6e64 = !0x0;
                for (i in _0x346992) _0x4f0a21 = this[_0x18ba4c(0x37)][_0x346992[i]], _0x18ba4c(0x40a) == typeof _0x4f0a21 && (_0x346992[i]['charCodeAt'](0x0) >= 0x21 ? (_0x4f0a21 = _0x346992[i] + String[_0x18ba4c(0x40d)](0x20dd), _0x5d6e64 || (_0x4f0a21 = String[_0x18ba4c(0x40d)](0x202f) + String[_0x18ba4c(0x40d)](0xa0) + String[_0x18ba4c(0x40d)](0xa0) + String[_0x18ba4c(0x40d)](0x202f) + _0x4f0a21)) : _0x4f0a21 = _0x346992[i]), _0x2befed += _0x4f0a21, _0x5d6e64 = '\x0a' == _0x4f0a21;
                return _0x2befed;
            },
            'decode': function(_0x20fe2b) {
                var _0x4ed5ff = _0xd61394,
                    _0x27b12e, _0x3e6516 = '',
                    _0x18f1e0 = '';
                for (i in _0x20fe2b) _0x27b12e = this[_0x4ed5ff(0x415)][_0x20fe2b[i]], _0x3e6516 += _0x4ed5ff(0x40a) == typeof _0x27b12e ? _0x20fe2b[i] : _0x27b12e;
                for (i in _0x3e6516) _0x27b12e = _0x3e6516[i]['charCodeAt'](0x0), 0xa0 != _0x27b12e && 0x202f != _0x27b12e && 0x20dd != _0x27b12e && (_0x18f1e0 += _0x3e6516[i]);
                return _0x18f1e0;
            },
            'map': {},
            'mapInverse': {}
        },
        'squares': {
            'init': function() {},
            'encode': function(_0x45fd43) {
                var _0x1ca2c6 = _0xd61394,
                    _0x30b13f, _0x240457 = '',
                    _0x30b2ad = !0x0;
                for (i in _0x45fd43) _0x45fd43[i]['charCodeAt'](0x0) >= 0x21 ? (_0x30b13f = _0x45fd43[i] + String[_0x1ca2c6(0x40d)](0x20de), _0x30b2ad || (_0x30b13f = String['fromCharCode'](0x202f) + String[_0x1ca2c6(0x40d)](0xa0) + String[_0x1ca2c6(0x40d)](0xa0) + String[_0x1ca2c6(0x40d)](0x202f) + _0x30b13f)) : _0x30b13f = _0x45fd43[i], _0x240457 += _0x30b13f, _0x30b2ad = '\x0a' == _0x30b13f;
                return _0x240457;
            },
            'decode': function(_0x4e5a45) {
                var _0xbdae84 = _0xd61394,
                    _0x2708be, _0xb577b8 = '';
                for (i in _0x4e5a45) _0x2708be = _0x4e5a45[i][_0xbdae84(0x414)](0x0), 0xa0 != _0x2708be && 0x202f != _0x2708be && 0x20de != _0x2708be && (_0xb577b8 += _0x4e5a45[i]);
                return _0xb577b8;
            }
        },
        'roundsquares': {
            'init': function() {},
            'encode': function(_0x5e33d0) {
                var _0x53725b = _0xd61394,
                    _0x2250d0, _0x2dd5ab = '',
                    _0x35bad6 = !0x0;
                for (i in _0x5e33d0) _0x5e33d0[i][_0x53725b(0x414)](0x0) >= 0x21 ? (_0x2250d0 = _0x5e33d0[i] + String[_0x53725b(0x40d)](0x20e3), _0x35bad6 || (_0x2250d0 = String[_0x53725b(0x40d)](0xa0) + String[_0x53725b(0x40d)](0xa0) + String[_0x53725b(0x40d)](0xa0) + _0x2250d0)) : _0x2250d0 = _0x5e33d0[i], _0x2dd5ab += _0x2250d0, _0x35bad6 = '\x0a' == _0x2250d0;
                return _0x2dd5ab;
            },
            'decode': function(_0x4db46b) {
                var _0x165763 = _0xd61394,
                    _0x3f1648, _0x5b468c = '';
                for (i in _0x4db46b) _0x3f1648 = _0x4db46b[i][_0x165763(0x414)](0x0), 0xa0 != _0x3f1648 && 0x202f != _0x3f1648 && 0x20e3 != _0x3f1648 && (_0x5b468c += _0x4db46b[i]);
                return _0x5b468c;
            }
        },
        'bent': {
            'init': function() {
                var _0x5cc734 = _0xd61394;
                for (i in this[_0x5cc734(0x37)]) this[_0x5cc734(0x37)][this[_0x5cc734(0x37)][i]] = i;
            },
            'encode': function(_0x541b63) {
                var _0x32e07a = _0xd61394;
                for (var _0x39cd4f, _0x13c001 = '', _0x19dd0e = 0x0, _0x1bcfe6 = _0x541b63[_0x32e07a(0x38)]; _0x1bcfe6 > _0x19dd0e; _0x19dd0e++) _0x39cd4f = this['map'][_0x541b63[_0x32e07a(0x408)](_0x19dd0e)], 'undefined' == typeof _0x39cd4f && (_0x39cd4f = _0x541b63[_0x32e07a(0x408)](_0x19dd0e)), _0x13c001 += _0x39cd4f;
                return _0x13c001;
            },
            'decode': function(_0x3e6494) {
                var _0x501c74 = _0xd61394;
                for (var _0x2df6e5, _0x41fb35 = '', _0x57fa2c = 0x0, _0x178fa2 = _0x3e6494[_0x501c74(0x38)]; _0x178fa2 > _0x57fa2c; _0x57fa2c++) _0x2df6e5 = this['map'][_0x3e6494['charAt'](_0x57fa2c)], _0x501c74(0x40a) == typeof _0x2df6e5 && (_0x2df6e5 = _0x3e6494[_0x501c74(0x408)](_0x57fa2c)), _0x41fb35 += _0x2df6e5;
                return _0x41fb35;
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
                0x8: _0xd61394(0x416),
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
                var _0x3caade = _0xd61394;
                for (i in this[_0x3caade(0x37)]) this[_0x3caade(0x37)][this['map'][i]] = i;
            },
            'encode': function(_0x356325) {
                var _0xd0424d = _0xd61394,
                    _0x5d01aa, _0x37ae12 = '';
                _0x356325 = _0x356325[_0xd0424d(0x417)]();
                for (var _0x2936f1 = 0x0, _0x564314 = _0x356325['length']; _0x564314 > _0x2936f1; _0x2936f1++) _0x5d01aa = this[_0xd0424d(0x37)][_0x356325['charAt'](_0x2936f1)], _0xd0424d(0x40a) == typeof _0x5d01aa && (_0x5d01aa = _0x356325['charAt'](_0x2936f1)), _0x37ae12 += _0x5d01aa;
                return _0x37ae12;
            },
            'decode': function(_0x3eeade) {
                var _0x3ee6e1 = _0xd61394;
                for (var _0x2d2175, _0x528abf = '', _0x3a6c37 = 0x0, _0x3724ec = _0x3eeade[_0x3ee6e1(0x38)]; _0x3724ec > _0x3a6c37; _0x3a6c37++) _0x2d2175 = this[_0x3ee6e1(0x37)][_0x3eeade[_0x3ee6e1(0x408)](_0x3a6c37)], 'undefined' == typeof _0x2d2175 && (_0x2d2175 = _0x3eeade['charAt'](_0x3a6c37)), _0x528abf += _0x2d2175;
                return _0x528abf;
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
    for (i in this[_0xd61394(0x4)]) this[_0xd61394(0x4)][i]['init']();
    this[_0xd61394(0x418)] = function(_0xa87b0) {
        var _0x466bdf = _0xd61394;
        for (var _0x44d5e3, _0x434959 = '', _0x567369 = !0x0, _0x57eac9 = 0x0, _0x3cde5a = 0x0, _0x4bf381 = 0x0, _0x6670c4 = _0xa87b0[_0x466bdf(0x38)]; _0x6670c4 > _0x4bf381; _0x4bf381++) _0x44d5e3 = _0xa87b0[_0x466bdf(0x414)](_0x4bf381), 0xa == _0x44d5e3 || 0xd == _0x44d5e3 ? (_0x434959 += _0x466bdf(0x419), _0x567369 = !0x0) : 0x20 == _0x44d5e3 ? _0x567369 ? (_0x434959 += '\x20', _0x567369 = !0x1) : (_0x434959 += '\x20', _0x567369 = !0x0) : (_0x44d5e3 >= 0xd800 && 0xdbff >= _0x44d5e3 ? (_0x57eac9 = _0x44d5e3, _0x3cde5a = 0x0) : _0x57eac9 > 0x0 ? (_0x44d5e3 >= 0xdc00 && 0xdfff >= _0x44d5e3 && (_0x3cde5a = 0x400 * (_0x57eac9 - 0xd800) + (_0x44d5e3 - 0xdc00) + 0x10000), _0x57eac9 = 0x0) : _0x3cde5a = _0x44d5e3, 0x0 != _0x3cde5a && (_0x434959 += '&#x' + _0x3cde5a[_0x466bdf(0x41a)](0x10) + ';', _0x567369 = !0x0));
        return _0x434959;
    };
}

function cuteText(_0x2b367d) {
    var _0x33d1ba = _0x1395d1;
    if (_0x2b367d[_0x33d1ba(0x41b)]() === '') return '';
    qi = -0x1;
    var _0x3de85d = boundingString(Math[_0x33d1ba(0x3f)](Math[_0x33d1ba(0x3b)]() * 0x2) + 0x1);
    return _0x3de85d + _0x33d1ba(0x41c) + _0x2b367d['split'](/([!?.]+)/gi)[_0x33d1ba(0x37)](cuteSentence)['join']('') + _0x33d1ba(0x41c) + esrever['reverse'](_0x3de85d);
}

function cuteSentence(_0x51d2c9) {
    var _0x3b158e = _0x1395d1;
    return _0x51d2c9['split'](/([\s,]+)/gi)['map'](cuteWord)[_0x3b158e(0x8)]('');
}

function cuteWord(_0x506c51) {
    var _0x445d28 = _0x1395d1;
    if (_0x506c51 === '' || /[[!?.\s,]+]/gi [_0x445d28(0x41d)](_0x506c51)) return _0x506c51;
    return _0x506c51 = roundReplace(_0x506c51), _0x506c51 = punctReplace(_0x506c51), _0x506c51 = emojiReplace(_0x506c51), scriptify(_0x506c51);
}
var qi = -0x1,
    qa = ['❝', '❞'];

function quotes() {
    qi++;
    if (qi === 0x2) qi = 0x0;
    return qa[qi];
}

function punctReplace(_0x23d727) {
    var _0x37cab1 = _0x1395d1;
    return _0x23d727[_0x37cab1(0x2)]('')['map'](function(_0x1472e1) {
        if (_0x1472e1 === '!') return randomElement(['❣', '❢']);
        else {
            if (_0x1472e1 === '?') return randomElement(['¿', '?']);
            else {
                if (_0x1472e1 === '\x22') return quotes();
                else return _0x1472e1;
            }
        }
    })['join']('');
}

function emojiReplace(_0xb3908f) {
    var _0x393365 = _0x1395d1;
    return _0xb3908f['replace'](':)', randomElement(emoji[':)']))[_0x393365(0x3c)]('(:', randomElement(emoji[':)']))[_0x393365(0x3c)]('^^', randomElement(emoji['^^']))[_0x393365(0x3c)](':P', randomElement(emoji[':p']))[_0x393365(0x3c)](':p', randomElement(emoji[':p']))[_0x393365(0x3c)](':D', randomElement(emoji[':D']))[_0x393365(0x3c)]('<3', randomElement(emoji['<3']))[_0x393365(0x3c)]('(y)', randomElement(emoji[_0x393365(0x41e)]))[_0x393365(0x3c)](_0x393365(0x41f), randomElement(emoji['(y)']));
}

function roundReplace(_0x34f343) {
    var _0x169144 = _0x1395d1;
    return _0x34f343[_0x169144(0x2)]('')['map'](function(_0x4894b4) {
        return _0x4894b4['toLowerCase']() === 'o' || _0x4894b4 === '0' ? randomElement(round) : _0x4894b4;
    })[_0x169144(0x8)]('');
}
var emoji = {
        ':)': [_0x1395d1(0x420), _0x1395d1(0xa6), _0x1395d1(0x421), _0x1395d1(0x422), _0x1395d1(0x423), '●‿●', _0x1395d1(0x424), '😍', 'ツ', '(✿ヘᴥヘ)', _0x1395d1(0x425), '(づ｡◕‿‿◕｡)づ', _0x1395d1(0x426), _0x1395d1(0x427), _0x1395d1(0xa5), '(✿╹◡╹)', _0x1395d1(0x428)],
        '^^': [_0x1395d1(0x429), _0x1395d1(0xa4), _0x1395d1(0x42a), 'ᵔᴥᵔ', '(≧◡≦)', _0x1395d1(0x42b), _0x1395d1(0x42c), _0x1395d1(0x42d), _0x1395d1(0x42e), _0x1395d1(0x42f), ''],
        ':p': [':Þ', ''],
        ':D': [_0x1395d1(0x430), '(✿◕ᗜ◕)━♫.*･｡ﾟ', _0x1395d1(0x431)],
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
    flourish = [_0x1395d1(0x432), 'ıllıllı\x20', _0x1395d1(0x433), '°°°·.°·..·°¯°·._.·\x20', _0x1395d1(0x434), _0x1395d1(0x435), _0x1395d1(0x436), ']|I{•------»\x20', _0x1395d1(0x437), '•°¯`••\x20', _0x1395d1(0x438), _0x1395d1(0x439), '(¯`·.¸¸.->\x20°º\x20', _0x1395d1(0x43a), '•._.••´¯``•.¸¸.•`\x20', _0x1395d1(0x43b), _0x1395d1(0x43c), _0x1395d1(0x43d), _0x1395d1(0x43e), _0x1395d1(0x43f), _0x1395d1(0x440), _0x1395d1(0xc7), _0x1395d1(0x441), _0x1395d1(0x442), _0x1395d1(0x443), _0x1395d1(0x444), _0x1395d1(0x445), '.•°¤*(¯`★´¯)*¤°\x20', '๑۞๑,¸¸,ø¤º°`°๑۩\x20', _0x1395d1(0x446), _0x1395d1(0x447), _0x1395d1(0x448), '▀▄▀▄▀▄\x20', _0x1395d1(0xd6)];

function boundingString(_0x441469) {
    return randomElement([foodString, twinkleString, animalString, flourishString])(_0x441469);
}

function foodString(_0x16ed94) {
    var _0x339f81 = _0x1395d1;
    return new Array(_0x16ed94 + 0x1)[_0x339f81(0x8)]('0')[_0x339f81(0x2)]('')[_0x339f81(0x37)](function(_0x512cc1) {
        return randomElement(food);
    })[_0x339f81(0x8)]('\x20⋆\x20');
}

function twinkleString(_0x3d7d74) {
    var _0x47b2ec = _0x1395d1;
    return new Array(_0x3d7d74 + 0x1)[_0x47b2ec(0x8)]('0')['split']('')['map'](function() {
        return randomElement(twinkles);
    })[_0x47b2ec(0x8)]('');
}

function animalString(_0x39c383) {
    var _0x37c260 = _0x1395d1;
    return new Array(_0x39c383 + 0x1)[_0x37c260(0x8)]('0')['split']('')[_0x37c260(0x37)](function(_0x7690ce) {
        return randomElement(animals);
    })[_0x37c260(0x8)](_0x37c260(0x449));
}

function flourishString(_0x3ba859) {
    return randomElement(flourish);
}

function scriptify(_0x58ce5c) {
    var _0xb8acb2 = _0x1395d1,
        _0x2e3ade = {
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
        _0x3c59ac = _0x58ce5c[_0xb8acb2(0x2)]('');
    for (var _0x584eb4 = 0x0; _0x584eb4 < _0x3c59ac['length']; _0x584eb4++) {
        _0x2e3ade[_0x3c59ac[_0x584eb4][_0xb8acb2(0x3)]()] && (_0x3c59ac[_0x584eb4] = _0x2e3ade[_0x3c59ac[_0x584eb4]]);
    }
    return _0x58ce5c = _0x3c59ac[_0xb8acb2(0x8)](''), _0x58ce5c;
}

function shuffleArray(_0x15648a) {
    var _0xfdd6f4 = _0x1395d1,
        _0x49c14d = _0x15648a['length'],
        _0x1e687f, _0x24128e;
    while (0x0 !== _0x49c14d) {
        _0x24128e = Math['floor'](Math[_0xfdd6f4(0x3b)]() * _0x49c14d), _0x49c14d -= 0x1, _0x1e687f = _0x15648a[_0x49c14d], _0x15648a[_0x49c14d] = _0x15648a[_0x24128e], _0x15648a[_0x24128e] = _0x1e687f;
    }
    return _0x15648a;
}

function randomElement(_0x1a28ba) {
    var _0x325391 = _0x1395d1;
    return _0x1a28ba[Math['floor'](Math['random']() * _0x1a28ba[_0x325391(0x38)])];
}! function(_0x467267) {
    var _0x1f5e13 = _0x1395d1,
        _0x320759 = 'object' == typeof exports && exports,
        _0x3b734b = _0x1f5e13(0x44a) == typeof module && module && module[_0x1f5e13(0x44b)] == _0x320759 && module,
        _0x4746bd = 'object' == typeof global && global;
    (_0x4746bd[_0x1f5e13(0x44c)] === _0x4746bd || _0x4746bd[_0x1f5e13(0x44d)] === _0x4746bd) && (_0x467267 = _0x4746bd);
    var _0x41b6c0 = /(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g,
        _0x41440f = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,
        _0x4bfc86 = function(_0x5b61f3) {
            var _0x142c57 = _0x1f5e13;
            _0x5b61f3 = _0x5b61f3[_0x142c57(0x3c)](_0x41b6c0, function(_0x264287, _0x30bb30, _0x21f40e) {
                return _0x4bfc86(_0x21f40e) + _0x30bb30;
            })[_0x142c57(0x3c)](_0x41440f, _0x142c57(0x44e));
            for (var _0xf0961a = '', _0x3b1fea = _0x5b61f3[_0x142c57(0x38)]; _0x3b1fea--;) _0xf0961a += _0x5b61f3[_0x142c57(0x408)](_0x3b1fea);
            return _0xf0961a;
        },
        _0x33ccd6 = {
            'version': _0x1f5e13(0x44f),
            'reverse': _0x4bfc86
        };
    if (_0x1f5e13(0x450) == typeof define && 'object' == typeof define[_0x1f5e13(0x451)] && define[_0x1f5e13(0x451)]) define(function() {
        return _0x33ccd6;
    });
    else {
        if (_0x320759 && !_0x320759[_0x1f5e13(0x452)]) {
            if (_0x3b734b) _0x3b734b[_0x1f5e13(0x44b)] = _0x33ccd6;
            else {
                for (var _0xfd3213 in _0x33ccd6) _0x33ccd6['hasOwnProperty'](_0xfd3213) && (_0x320759[_0xfd3213] = _0x33ccd6[_0xfd3213]);
            }
        } else _0x467267['esrever'] = _0x33ccd6;
    }
}(this);

function fullCrazy(_0x47cc0c) {
    if (_0x47cc0c['trim']() === '') return '';
    return randomSymbols(0x2) + '\x20\x20' + crazifyText(_0x47cc0c) + '\x20\x20' + randomSymbols(0x2);
}

function crazifyText(_0x5e06f9) {
    var _0x4b24c0 = _0x1395d1;
    _0x5e06f9 = _0x5e06f9['split']('');
    for (var _0x18d8fd = 0x0; _0x18d8fd < _0x5e06f9[_0x4b24c0(0x38)]; _0x18d8fd++) {
        _0x5e06f9[_0x18d8fd] = crazifyCharacter(_0x5e06f9[_0x18d8fd]);
    }
    return _0x5e06f9[_0x4b24c0(0x8)]('');
}

function crazifyCharacter(_0x1a70b9) {
    var _0x15297d = _0x1395d1;
    _0x1a70b9 = _0x1a70b9['toLowerCase']();
    var _0x4ef233 = {
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
        '>': _0x15297d(0x453),
        '[': _0x15297d(0x454),
        ']': _0x15297d(0x455),
        '*': _0x15297d(0x456),
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
    return _0x4ef233[_0x1a70b9] ? randomElement(_0x4ef233[_0x1a70b9]) : _0x1a70b9;
}

function randomElement(_0x14ecf1) {
    var _0x334b4b = _0x1395d1;
    return _0x14ecf1[Math[_0x334b4b(0x3f)](Math[_0x334b4b(0x3b)]() * _0x14ecf1['length'])];
}

function randomSymbols(_0x11e9ba) {
    var _0x417866 = _0x1395d1,
        _0x4632a6 = ['🐙', '🐉', '🐊', '🐒', '🐝', '🐜', '🐚', '🐲', '🐳', '🐸', '👑', '👹', '👺', '👤', '💲', '💣', '💙', '💚', '💛', '💜', '💝', '💗', '💘', '💞', '💔', '💥', '🐯', '🐼', '🐻', '🐺', '👌', '🐍', '🐧', '🐟', '🐠', '🐨', '🎯', '🏆', '🎁', '🎀', '🎉', '🎈', '🍮', '🍭', '🍬', '🍫', '🍪', '🍧', '🌷', '🍓', '😺', '😾', '✎', '😎', '😝', '😂', '😈', '😡', '😲', '😳', '🍔', '🍟', '🍩', '🎃', '🎄', '🎅', '🐣', '🐤', '👍', '👊', '👻', '👽', '👮', '💎', '💋', '👣', '💀', '💢', '🔥', '♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '♠', '♡', '♢', '♣', '♤', '♥', '♦', '♧', '♨', '♩', '♪', '♬', '★', '☆', '☺', '☹', '☯', '☮', '☢', '☠', '☟', '☞', '☝', '☜', '✌', '✋', '✊', '⛵', 'ൠ', '✌', 'ඏ'],
        _0x1811ef = [];
    for (var _0x37c749 = 0x0; _0x37c749 < _0x11e9ba; _0x37c749++) _0x1811ef[_0x417866(0x3d)](randomElement(_0x4632a6));
    return _0x1811ef[_0x417866(0x8)]('');
}

function randInt(_0x5eb747, _0x149037) {
    var _0xaa176d = _0x1395d1;
    return _0x5eb747 + Math[_0xaa176d(0x3f)](Math[_0xaa176d(0x3b)]() * (_0x149037 - _0x5eb747 + 0x1));
}
$(document)[_0x1395d1(0x457)](function() {
    var _0x4c3cc2 = _0x1395d1;
    $(_0x4c3cc2(0x458))['insertBefore'](_0x4c3cc2(0x459)), $(_0x4c3cc2(0x45a))['on'](_0x4c3cc2(0x45b), function() {
        var _0x303603 = _0x4c3cc2;
        $(_0x303603(0x45c) + $(this)['val']() + _0x303603(0x45d))[_0x303603(0x45e)]('body');
    }), _0x35422e(default_text), $(_0x4c3cc2(0x45f))['on']('input', function(_0x2ba663) {
        var _0x196a7d = _0x4c3cc2;
        if ($(_0x196a7d(0x460))[_0x196a7d(0x461)]() < 0x1) _0x35422e(default_text);
        else {
            var _0xf02402 = $(_0x196a7d(0x460))['val']();
            _0x35422e(_0xf02402);
        }
    });
    var _0x394e8a = window[_0x4c3cc2(0x462)][_0x4c3cc2(0x463)],
        _0x4cd14f = _0x394e8a[_0x4c3cc2(0x2)]('?=');
    urltext = _0x4cd14f[0x1];
    urltext && (urltext = decodeURIComponent(urltext), $(_0x4c3cc2(0x460))[_0x4c3cc2(0x461)](urltext), _0x35422e(urltext));

    function _0x35422e(_0x32070d) {
        var _0x2988af = _0x4c3cc2;
        _0x32070d = _0x32070d[_0x2988af(0x41b)](), $(_0x2988af(0x464))['html'](Change(_0x32070d, 's1')), $(_0x2988af(0x465))[_0x2988af(0x466)](Change(_0x32070d, 's2')), $('.result-s3')[_0x2988af(0x466)](Change(_0x32070d, 's3')), $(_0x2988af(0x467))[_0x2988af(0x466)](Change(_0x32070d, 's4')), $(_0x2988af(0x468))[_0x2988af(0x466)](Change(_0x32070d, 's5')), $('.result-s6')[_0x2988af(0x466)](Change(_0x32070d, 's6')), $(_0x2988af(0x469))[_0x2988af(0x466)](Change(_0x32070d, 's7')), $('.result-s8')[_0x2988af(0x466)](Change(_0x32070d, 's8')), $(_0x2988af(0x46a))[_0x2988af(0x466)](Change(_0x32070d, 's9')), $(_0x2988af(0x46b))['html'](Change(_0x32070d, _0x2988af(0x46c))), $(_0x2988af(0x46d))['html'](Change(_0x32070d, _0x2988af(0x46e))), $(_0x2988af(0x46f))[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x470))), $(_0x2988af(0x471))[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x472))), $('.result-s14')[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x473))), $('.result-s15')[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x474))), $('.result-s16')[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x475))), $(_0x2988af(0x476))[_0x2988af(0x466)](Change(_0x32070d, 's17')), $(_0x2988af(0x477))['html'](Change(_0x32070d, 's18')), $(_0x2988af(0x478))[_0x2988af(0x466)](Change(_0x32070d, 's19')), $(_0x2988af(0x479))[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x47a))), $(_0x2988af(0x47b))[_0x2988af(0x466)](Change(_0x32070d, 's21')), $('.result-s22')[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x47c))), $(_0x2988af(0x47d))[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x47e))), $(_0x2988af(0x47f))[_0x2988af(0x466)](Change(_0x32070d, 's24')), $(_0x2988af(0x480))[_0x2988af(0x466)](Change(_0x32070d, 's25')), $('.result-s26')[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x481))), $(_0x2988af(0x482))[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x483))), $(_0x2988af(0x484))[_0x2988af(0x466)](Change(_0x32070d, _0x2988af(0x485))), $(_0x2988af(0x486))['html'](Change(_0x32070d, _0x2988af(0x487))), $(_0x2988af(0x488))[_0x2988af(0x466)](Change(_0x32070d, 's31')), $(_0x2988af(0x489))[_0x2988af(0x466)](luni[_0x2988af(0x4)][_0x2988af(0x48a)]['encode'](_0x32070d)), $(_0x2988af(0x48b))[_0x2988af(0x466)](applyCharMap(invertedSquaresCharMap, _0x32070d)), $(_0x2988af(0x48c))['html'](illuminati(_0x32070d)), $(_0x2988af(0x48d))[_0x2988af(0x466)](textgun(_0x32070d)), $(_0x2988af(0x48e))[_0x2988af(0x466)](minigame(_0x32070d)), $(_0x2988af(0x48f))[_0x2988af(0x466)](pubggame1(_0x32070d)), $(_0x2988af(0x490))[_0x2988af(0x466)](pubggame2(_0x32070d)), $('.pubggame3')[_0x2988af(0x466)](pubggame3(_0x32070d)), $(_0x2988af(0x491))[_0x2988af(0x466)](bricks(_0x32070d)), $(_0x2988af(0x492))[_0x2988af(0x466)](bigrus(_0x32070d)), $(_0x2988af(0x493))[_0x2988af(0x466)](applyCharMap(wideTextCharMap, _0x32070d)), $(_0x2988af(0x494))[_0x2988af(0x466)](luni[_0x2988af(0x4)][_0x2988af(0xc)][_0x2988af(0x495)](_0x32070d)), $(_0x2988af(0x496))['html'](luni[_0x2988af(0x4)]['flip'][_0x2988af(0x495)](_0x32070d)), $('.squaresCharMap')['html'](applyCharMap(squaresCharMap, _0x32070d)), $(_0x2988af(0x497))[_0x2988af(0x466)](luni[_0x2988af(0x4)]['mirror'][_0x2988af(0x495)](_0x32070d)), $(_0x2988af(0x498))[_0x2988af(0x466)](applyCharMap(subscriptCharMap, _0x32070d)), $(_0x2988af(0x499))['html'](applyCharMap(superscriptCharMap, _0x32070d)), $('.bentTextCharMap')[_0x2988af(0x466)](applyCharMap(bentTextCharMap, _0x32070d)), $('.neonCharMap')[_0x2988af(0x466)](applyCharMap(neonCharMap, _0x32070d)), $(_0x2988af(0x49a))[_0x2988af(0x466)](applyCharMap(futureAlienCharMap, _0x32070d)), $(_0x2988af(0x49b))[_0x2988af(0x466)](strikeThrough(_0x32070d)), $(_0x2988af(0x49c))[_0x2988af(0x466)](tildeStrikeThrough(_0x32070d)), $(_0x2988af(0x49d))[_0x2988af(0x466)](slashThrough(_0x32070d)), $(_0x2988af(0x49e))[_0x2988af(0x466)](underline(_0x32070d)), $('.doubleUnderline')[_0x2988af(0x466)](doubleUnderline(_0x32070d)), $(_0x2988af(0x49f))[_0x2988af(0x466)](luni[_0x2988af(0x4)][_0x2988af(0x4a0)][_0x2988af(0x495)](_0x32070d)), $('.squiggleCharMap')[_0x2988af(0x466)](applyCharMap(squiggleCharMap, _0x32070d)), $('.squiggle2CharMap')[_0x2988af(0x466)](applyCharMap(squiggle2CharMap, _0x32070d)), $(_0x2988af(0x4a1))['html'](applyCharMap(squiggle3CharMap, _0x32070d)), $(_0x2988af(0x4a2))['html'](applyCharMap(squiggle4CharMap, _0x32070d)), $('.squiggle5CharMap')[_0x2988af(0x466)](applyCharMap(squiggle5CharMap, _0x32070d)), $(_0x2988af(0x4a3))[_0x2988af(0x466)](applyCharMap(squiggle6CharMap, _0x32070d)), $(_0x2988af(0x4a4))[_0x2988af(0x466)](applyCharMap(boldCharMap, _0x32070d)), $(_0x2988af(0x4a5))['html'](luni['tools']['roundsquares'][_0x2988af(0x495)](_0x32070d)), $(_0x2988af(0x4a6))['html'](luni[_0x2988af(0x4)]['squares'][_0x2988af(0x495)](_0x32070d[_0x2988af(0x417)]())), $(_0x2988af(0x4a7))[_0x2988af(0x466)](applyCharMap(oldEnglishCharMap, _0x32070d)), $(_0x2988af(0x4a8))[_0x2988af(0x466)](applyCharMap(medievalCharMap, _0x32070d)), $('.cursiveCharMap')[_0x2988af(0x466)](applyCharMap(cursiveCharMap, _0x32070d)), $('.scriptify')[_0x2988af(0x466)](scriptify(_0x32070d)), $(_0x2988af(0x4a9))[_0x2988af(0x466)](applyCharMap(doubleStruckCharMap, _0x32070d)), $(_0x2988af(0x4aa))[_0x2988af(0x466)](applyCharMap(italicCharMap, _0x32070d)), $(_0x2988af(0x4ab))[_0x2988af(0x466)](applyCharMap(boldItalicCharMap, _0x32070d)), $(_0x2988af(0x4ac))[_0x2988af(0x466)](applyCharMap(monospaceCharMap, _0x32070d)), $('.upperAnglesCharMap')[_0x2988af(0x466)](applyCharMap(upperAnglesCharMap, _0x32070d)), $(_0x2988af(0x4ad))[_0x2988af(0x466)](applyCharMap(greekCharMap, _0x32070d)), $(_0x2988af(0x4ae))[_0x2988af(0x466)](applyCharMap(symbolsCharMap, _0x32070d)), $('.currencyCharMap')[_0x2988af(0x466)](applyCharMap(currencyCharMap, _0x32070d)), $(_0x2988af(0x4af))['html'](applyCharMap(asianStyleCharMap, _0x32070d)), $('.asianStyle2CharMap')['html'](applyCharMap(asianStyle2CharMap, _0x32070d)), $(_0x2988af(0x4b0))[_0x2988af(0x466)](thickBlockFramed(_0x32070d)), $(_0x2988af(0x4b1))[_0x2988af(0x466)](diametricAngleFrame(_0x32070d)), $(_0x2988af(0x4b2))[_0x2988af(0x466)](wavyJoiner(_0x32070d)), $(_0x2988af(0x4b3))['html'](dottyJoiner(_0x32070d)), $('.kirbyHug')[_0x2988af(0x466)](kirbyHug(_0x32070d)), $('.vaporwaveText')['html'](vaporwaveText(_0x32070d)), $(_0x2988af(0x4b4))[_0x2988af(0x466)](vaporwaveText1(_0x32070d)), $(_0x2988af(0x4b5))['html'](vaporwaveText2(_0x32070d)), $('.littleSparkles')['html'](littleSparkles(_0x32070d)), $(_0x2988af(0x4b6))[_0x2988af(0x466)](weirdBox(_0x32070d)), $(_0x2988af(0x4b7))[_0x2988af(0x466)](thickBox(_0x32070d)), $(_0x2988af(0x4b8))['html'](zigzagJoiner(_0x32070d)), $(_0x2988af(0x4b9))[_0x2988af(0x466)](hashJoiner(_0x32070d)), $(_0x2988af(0x4ba))[_0x2988af(0x466)](starJoiner(_0x32070d)), $(_0x2988af(0x4bb))[_0x2988af(0x466)](connectedJoiner(_0x32070d)), $('.arrowjoin')[_0x2988af(0x466)](arrowjoin(_0x32070d)), $(_0x2988af(0x4bc))['html'](dotBoxtwo(_0x32070d)), $('.dotBox')[_0x2988af(0x466)](dotBox(_0x32070d)), $(_0x2988af(0x4bd))['html'](diametricBox(_0x32070d)), $(_0x2988af(0x4be))['html'](arrowBox(_0x32070d)), $(_0x2988af(0x4bf))[_0x2988af(0x466)](curlybrackets(_0x32070d)), $(_0x2988af(0x4c0))['html'](singlewavyJoiner(_0x32070d)), $('.firework')[_0x2988af(0x466)](firework(_0x32070d)), $(_0x2988af(0x4c1))[_0x2988af(0x466)](stinky(_0x32070d)), $('.heartsBetween')[_0x2988af(0x466)](heartsBetween(_0x32070d)), $(_0x2988af(0x4c2))[_0x2988af(0x466)](arrowBelow(_0x32070d)), $('.crossAboveBelow')['html'](crossAboveBelow(_0x32070d)), $('.wingdings')[_0x2988af(0x466)](wingdings(_0x32070d)), $('.fullCrazy')['html'](fullCrazy(_0x32070d)), $(_0x2988af(0x4c3))[_0x2988af(0x466)](crazyWithFlourishOrSymbols(_0x32070d)), $('.cuteText')['html'](cuteText(_0x32070d)), $('.star0')[_0x2988af(0x466)](star0(_0x32070d)), $('.star1')[_0x2988af(0x466)](star1(_0x32070d)), $(_0x2988af(0x4c4))[_0x2988af(0x466)](star2(_0x32070d)), $(_0x2988af(0x4c5))[_0x2988af(0x466)](star3(_0x32070d)), $('.star4')[_0x2988af(0x466)](star4(_0x32070d)), $(_0x2988af(0x4c6))[_0x2988af(0x466)](star5(_0x32070d)), $(_0x2988af(0x4c7))[_0x2988af(0x466)](star6(_0x32070d)), $(_0x2988af(0x4c8))[_0x2988af(0x466)](star7(_0x32070d)), $('.star8')[_0x2988af(0x466)](star8(_0x32070d)), $('.star9')[_0x2988af(0x466)](star9(_0x32070d)), $('.star10')['html'](star10(_0x32070d)), $('.heart0')[_0x2988af(0x466)](heart0(_0x32070d)), $('.heart1')[_0x2988af(0x466)](heart1(_0x32070d)), $(_0x2988af(0x4c9))['html'](heart2(_0x32070d)), $(_0x2988af(0x4ca))[_0x2988af(0x466)](heart3(_0x32070d)), $(_0x2988af(0x4cb))[_0x2988af(0x466)](heart4(_0x32070d)), $(_0x2988af(0x4cc))[_0x2988af(0x466)](heart5(_0x32070d)), $(_0x2988af(0x4cd))['html'](heart6(_0x32070d)), $('.heart7')[_0x2988af(0x466)](heart7(_0x32070d)), $(_0x2988af(0x4ce))[_0x2988af(0x466)](emoticon0(_0x32070d)), $(_0x2988af(0x4cf))[_0x2988af(0x466)](emoticon1(_0x32070d)), $(_0x2988af(0x4d0))[_0x2988af(0x466)](emoticon2(_0x32070d)), $('.emoticon3')['html'](emoticon3(_0x32070d)), $('.emoticon4')[_0x2988af(0x466)](emoticon4(_0x32070d)), $(_0x2988af(0x4d1))['html'](emoticon5(_0x32070d)), $(_0x2988af(0x4d2))[_0x2988af(0x466)](emoticon6(_0x32070d)), $('.emoticon7')[_0x2988af(0x466)](emoticon7(_0x32070d)), $(_0x2988af(0x4d3))['html'](thankyou0(_0x32070d)), $('.thankyou1')[_0x2988af(0x466)](thankyou1(_0x32070d)), $(_0x2988af(0x4d4))[_0x2988af(0x466)](thankyou2(_0x32070d)), $(_0x2988af(0x4d5))[_0x2988af(0x466)](thankyou3(_0x32070d)), $(_0x2988af(0x4d6))['html'](thankyou4(_0x32070d)), $(_0x2988af(0x4d7))[_0x2988af(0x466)](thankyou5(_0x32070d)), $('.thankyou6')[_0x2988af(0x466)](thankyou6(_0x32070d)), $(_0x2988af(0x4d8))[_0x2988af(0x466)](thankyou7(_0x32070d)), $(_0x2988af(0x4d9))['html'](sad0(_0x32070d)), $('.sad1')['html'](sad1(_0x32070d)), $(_0x2988af(0x4da))[_0x2988af(0x466)](sad2(_0x32070d)), $(_0x2988af(0x4db))['html'](sad3(_0x32070d)), $(_0x2988af(0x4dc))[_0x2988af(0x466)](sad4(_0x32070d)), $('.sad5')[_0x2988af(0x466)](sad5(_0x32070d)), $('.sad6')[_0x2988af(0x466)](sad6(_0x32070d)), $('.sad7')[_0x2988af(0x466)](sad7(_0x32070d)), $(_0x2988af(0x4dd))[_0x2988af(0x466)](cuteText1(_0x32070d)), $(_0x2988af(0x4de))[_0x2988af(0x466)](cuteText2(_0x32070d)), $(_0x2988af(0x4df))['html'](cuteText3(_0x32070d)), $(_0x2988af(0x4e0))[_0x2988af(0x466)](cuteText4(_0x32070d)), $('.cuteText5')['html'](cuteText5(_0x32070d)), $(_0x2988af(0x4e1))[_0x2988af(0x466)](crazyWithFlourishOrSymbols1(_0x32070d)), $(_0x2988af(0x4e2))['html'](crazyWithFlourishOrSymbols2(_0x32070d)), $(_0x2988af(0x4e3))[_0x2988af(0x466)](crazyWithFlourishOrSymbols3(_0x32070d)), $('.crazyWithFlourishOrSymbols4')['html'](crazyWithFlourishOrSymbols4(_0x32070d)), $(_0x2988af(0x4e4))[_0x2988af(0x466)](crazyWithFlourishOrSymbols5(_0x32070d)), $(_0x2988af(0x4e5))['html'](fullCrazy1(_0x32070d)), $(_0x2988af(0x4e6))[_0x2988af(0x466)](fullCrazy2(_0x32070d)), $(_0x2988af(0x4e7))[_0x2988af(0x466)](fullCrazy3(_0x32070d)), $(_0x2988af(0x4e8))['html'](fullCrazy4(_0x32070d)), $(_0x2988af(0x4e9))['html'](fullCrazy5(_0x32070d)), $(_0x2988af(0x4ea))[_0x2988af(0x466)](wrap1(_0x32070d)), $('.wrap2')[_0x2988af(0x466)](wrap2(_0x32070d)), $('.wrap3')['html'](wrap3(_0x32070d)), $(_0x2988af(0x4eb))['html'](wrap4(_0x32070d)), $(_0x2988af(0x4ec))[_0x2988af(0x466)](wrap5(_0x32070d));
    }
    $(_0x4c3cc2(0x4ed))[_0x4c3cc2(0x4ee)](function() {
        var _0x439d43 = _0x4c3cc2;
        $(_0x439d43(0x460))[_0x439d43(0x461)]('');
    });

    function _0x58444e() {
        var _0x217b44 = _0x4c3cc2,
            _0xe98f97 = document[_0x217b44(0x4ef)](_0x217b44(0x4f0)),
            _0x2c5422 = _0xe98f97[_0x217b44(0x4ef)]('.text');
        document[_0x217b44(0x4f1)](_0x217b44(0x4f2))[_0x217b44(0x4f3)](_0x5832a2 => {
            var _0x199ceb = _0x217b44;
            _0x5832a2[_0x199ceb(0x4f4)](_0x199ceb(0x4ee), () => {
                var _0x284a11 = _0x199ceb;
                _0x2c5422['value'] = _0x5832a2[_0x284a11(0x4ef)]('p')[_0x284a11(0x4f5)], _0x488799(_0x2c5422), _0xe98f97[_0x284a11(0x4f6)]['add']('copied-show'), setTimeout(() => {
                    var _0x36d78b = _0x284a11;
                    _0xe98f97[_0x36d78b(0x4f6)]['remove']('copied-show');
                }, 0x3e8);
            });
        });
    }
    _0x58444e();

    function _0x488799(_0x5f2672) {
        var _0x4f25d8 = _0x4c3cc2,
            _0x1649d5 = document[_0x4f25d8(0x4f7)](_0x4f25d8(0x4f8));
        _0x1649d5[_0x4f25d8(0x4f9)] = _0x5f2672[_0x4f25d8(0x4f5)] || _0x5f2672[_0x4f25d8(0x4f9)], document[_0x4f25d8(0x459)]['appendChild'](_0x1649d5), _0x1649d5[_0x4f25d8(0x4fa)](), document['execCommand'](_0x4f25d8(0x4fb)), _0x1649d5[_0x4f25d8(0x4fc)]();
    }
});
