var _0x77b2=["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890","Fancy Text"];
var normal=_0x77b2[0];
var default_text=_0x77b2[1]

function applyCharMap(_0x59eex3, _0x59eex4) {
    let _0x59eex5 = "";
    for (let _0x59eex6 of _0x59eex4["split"]("")) {
        if (_0x59eex3[_0x59eex6] !== undefined) {
            _0x59eex5 += _0x59eex3[_0x59eex6]
        } else {
            if (_0x59eex3[_0x59eex6["toLowerCase"]()] !== undefined) {
                _0x59eex5 += _0x59eex3[_0x59eex6["toLowerCase"]()]
            } else {
                _0x59eex5 += _0x59eex6
            }
        }
    }
    return _0x59eex5
}

function invertedSquaresCharMapFun(_0x59eex4) {
    return applyCharMap(invertedSquaresCharMap, _0x59eex4)
}

function wideTextCharMapFun(_0x59eex4) {
    return applyCharMap(wideTextCharMap, _0x59eex4)
}

function squaresCharMapFun(_0x59eex4) {
    return applyCharMap(squaresCharMap, _0x59eex4)
}

function subscriptCharMapFun(_0x59eex4) {
    return applyCharMap(subscriptCharMap, _0x59eex4)
}

function bentTextCharMapFun(_0x59eex4) {
    return applyCharMap(bentTextCharMap, _0x59eex4)
}

function neonCharMapFun(_0x59eex4) {
    return applyCharMap(neonCharMap, _0x59eex4)
}

function futureAlienCharMapFun(_0x59eex4) {
    return applyCharMap(futureAlienCharMap, _0x59eex4)
}

function squiggleCharMapFun(_0x59eex4) {
    return applyCharMap(squiggleCharMap, _0x59eex4)
}

function squiggle2CharMapFun(_0x59eex4) {
    return applyCharMap(squiggle2CharMap, _0x59eex4)
}

function squiggle3CharMapFun(_0x59eex4) {
    return applyCharMap(squiggle3CharMap, _0x59eex4)
}

function squiggle4CharMapFun(_0x59eex4) {
    return applyCharMap(squiggle4CharMap, _0x59eex4)
}

function squiggle5CharMapFun(_0x59eex4) {
    return applyCharMap(squiggle5CharMap, _0x59eex4)
}

function squiggle6CharMapFun(_0x59eex4) {
    return applyCharMap(squiggle6CharMap, _0x59eex4)
}

function boldCharMapFun(_0x59eex4) {
    return applyCharMap(boldCharMap, _0x59eex4)
}

function oldEnglishCharMapFun(_0x59eex4) {
    return applyCharMap(oldEnglishCharMap, _0x59eex4)
}

function medievalCharMapFun(_0x59eex4) {
    return applyCharMap(medievalCharMap, _0x59eex4)
}

function cursiveCharMapFun(_0x59eex4) {
    return applyCharMap(cursiveCharMap, _0x59eex4)
}

function doubleStruckCharMapFun(_0x59eex4) {
    return applyCharMap(doubleStruckCharMap, _0x59eex4)
}

function italicCharMapFun(_0x59eex4) {
    return applyCharMap(italicCharMap, _0x59eex4)
}

function boldItalicCharMapFun(_0x59eex4) {
    return applyCharMap(boldItalicCharMap, _0x59eex4)
}

function monospaceCharMapFun(_0x59eex4) {
    return applyCharMap(monospaceCharMap, _0x59eex4)
}

function upperAnglesCharMapFun(_0x59eex4) {
    return applyCharMap(upperAnglesCharMap, _0x59eex4)
}

function greekCharMapFun(_0x59eex4) {
    return applyCharMap(greekCharMap, _0x59eex4)
}

function symbolsCharMapFun(_0x59eex4) {
    return applyCharMap(symbolsCharMap, _0x59eex4)
}

function currencyCharMapFun(_0x59eex4) {
    return applyCharMap(currencyCharMap, _0x59eex4)
}

function asianStyleCharMapFun(_0x59eex4) {
    return applyCharMap(asianStyleCharMap, _0x59eex4)
}

function asianStyle2CharMapFun(_0x59eex4) {
    return applyCharMap(asianStyle2CharMap, _0x59eex4)
}
var luni = new Lunicode();
luni["tools"]["creepify"]["options"]["maxHeight"] = 10;

function crazyWithFlourishOrSymbols(_0x59eex4) {
    if (Math["random"]() < 0.7) {
        return wrapInSymbols(crazifyText(_0x59eex4), 2)
    } else {
        return wrapInFlourish(crazifyText(_0x59eex4), 2)
    }
}

function illuminati(_0x59eex4) {
    return applyCharMap(doubleStruckCharMap, "\u10e6\u22b1\u2665" + _0x59eex4 + "\u2602\ufe0f\u22b1\u10e6")
}

function textgun(_0x59eex4) {
    return "\u2584\ufe3b\u30c7" + _0x59eex4["split"]("")["join"]("&#823;") + "\u2550\u2550\u2501\u4e00"
}

function minigame(_0x59eex4) {
    return "\u2605\u5f61[" + luni["tools"]["tiny"]["encode"](_0x59eex4) + "]\u5f61\u2605"
}

function pubggame1(_0x59eex4) {
    return applyCharMap(cursiveCharMap, "\u0f12\u262c" + _0x59eex4 + "\u262c\u0f12")
}

function pubggame2(_0x59eex4) {
    return applyCharMap(monospaceCharMap, "\u0fd7\u265b" + _0x59eex4 + "\u265b\u0fd7")
}

function pubggame3(_0x59eex4) {
    return applyCharMap(invertedSquaresCharMap, "\ua9c1\ud808\udd9c" + _0x59eex4 + "\ud808\udd9c\ua9c2")
}

function bricks(_0x59eex4) {
    return applyCharMap(squaresCharMap, "\u30c4\u4e97" + _0x59eex4 + "\u4e97\u30c4")
}

function bigrus(_0x59eex4) {
    return applyCharMap(boldItalicCharMap, "\u066d\u1da6\u1db0\u1d48\u1b44" + _0x59eex4 + "\u2665\u0fd0\u066d")
}

function strikeThrough(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u0336") + "\u0336"
}

function tildeStrikeThrough(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u0334") + "\u0334"
}

function underline(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u0332") + "\u0332"
}

function doubleUnderline(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u0333") + "\u0333"
}

function slashThrough(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u0337") + "\u0337"
}

function stinky(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u033e") + "\u033e"
}

function heartsBetween(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u2665")
}

function arrowBelow(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u034e") + "\u034e"
}

function crossAboveBelow(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u033d\u0353") + "\u033d\u0353"
}
const wingdingsCharMap = {
    0: "\ud83d\udcc1\ufe0e",
    1: "\ud83d\udcc2\ufe0e",
    2: "\ud83d\udcc4\ufe0e",
    3: "\ud83d\uddcf\ufe0e",
    4: "\ud83d\uddd0\ufe0e",
    5: "\ud83d\uddc4\ufe0e",
    6: "\u231b\ufe0e",
    7: "\ud83d\uddae\ufe0e",
    8: "\ud83d\uddb0\ufe0e",
    9: "\ud83d\uddb2\ufe0e",
    "!": "\u270f\ufe0e",
    '\"': "\u2702\ufe0e",
    "#": "\u2701\ufe0e",
    $: "\ud83d\udc53\ufe0e",
    "%": "\ud83d\udd6d\ufe0e",
    "&": "\ud83d\udd6e\ufe0e",
    "\'": "\ud83d\udd6f\ufe0e",
    "(": "\ud83d\udd7f\ufe0e",
    ")": "\u2706\ufe0e",
    "*": "\ud83d\udd82\ufe0e",
    "+": "\ud83d\udd83\ufe0e",
    ",": "\ud83d\udcea\ufe0e",
    "-": "\ud83d\udceb\ufe0e",
    ".": "\ud83d\udcec\ufe0e",
    "/": "\ud83d\udced\ufe0e",
    ":": "\ud83d\uddb3\ufe0e",
    ";": "\ud83d\uddb4\ufe0e",
    "<": "\ud83d\uddab\ufe0e",
    "=": "\ud83d\uddac\ufe0e",
    ">": "\u2707\ufe0e",
    "?": "\u270d\ufe0e",
    A: "\u270c\ufe0e",
    B: "\ud83d\udc4c\ufe0e",
    C: "\ud83d\udc4d\ufe0e",
    D: "\ud83d\udc4e\ufe0e",
    E: "\u261c\ufe0e",
    F: "\u261e\ufe0e",
    G: "\u261d\ufe0e",
    H: "\u261f\ufe0e",
    I: "\u270b\ufe0e",
    J: "\u263a\ufe0e",
    K: "\ud83d\ude10\ufe0e",
    L: "\u2639\ufe0e",
    M: "\ud83d\udca3\ufe0e",
    N: "\u2620\ufe0e",
    O: "\u2690\ufe0e",
    P: "\ud83c\udff1\ufe0e",
    Q: "\u2708\ufe0e",
    R: "\u263c\ufe0e",
    S: "\ud83d\udca7\ufe0e",
    T: "\u2744\ufe0e",
    U: "\ud83d\udd46\ufe0e",
    V: "\u271e\ufe0e",
    W: "\ud83d\udd48\ufe0e",
    X: "\u2720\ufe0e",
    Y: "\u2721\ufe0e",
    Z: "\u262a\ufe0e",
    "[": "\u262f\ufe0e",
    "\\": "\u0950\ufe0e",
    "]": "\u2638\ufe0e",
    "^": "\u2648\ufe0e",
    _: "\u2649\ufe0e",
    "`": "\u264a\ufe0e",
    a: "\u264b\ufe0e",
    b: "\u264c\ufe0e",
    c: "\u264d\ufe0e",
    d: "\u264e\ufe0e",
    e: "\u264f\ufe0e",
    f: "\u2650\ufe0e",
    g: "\u2651\ufe0e",
    h: "\u2652\ufe0e",
    i: "\u2653\ufe0e",
    j: "\ud83d\ude70",
    k: "\ud83d\ude75",
    l: "\u25cf\ufe0e",
    m: "\u274d\ufe0e",
    n: "\u25a0\ufe0e",
    o: "\u25a1\ufe0e",
    p: "\u25fb\ufe0e",
    q: "\u2751\ufe0e",
    r: "\u2752\ufe0e",
    s: "\u2b27\ufe0e",
    t: "\u29eb\ufe0e",
    u: "\u25c6\ufe0e",
    v: "\u2756\ufe0e",
    w: "\u2b25\ufe0e",
    x: "\u2327\ufe0e",
    y: "\u2353\ufe0e",
    z: "\u2318\ufe0e",
    "{": "\u2740\ufe0e",
    "|": "\u273f\ufe0e",
    "}": "\u275d\ufe0e",
    "~": "\u275e\ufe0e",
    " ": "\u25af\ufe0e",
    "\u20ac": "\u24ea\ufe0e",
    " ": "\u2460\ufe0e",
    "\u201a": "\u2461\ufe0e",
    ƒ: "\u2462\ufe0e",
    "\u201e": "\u2463\ufe0e",
    "\u2026": "\u2464\ufe0e",
    "\u2020": "\u2465\ufe0e",
    "\u2021": "\u2466\ufe0e",
    ˆ: "\u2467\ufe0e",
    "\u2030": "\u2468\ufe0e",
    Š: "\u2469\ufe0e",
    "\u2039": "\u24ff\ufe0e",
    Œ: "\u2776\ufe0e",
    " ": "\u2777\ufe0e",
    Ž: "\u2778\ufe0e",
    " ": "\u2779\ufe0e",
    " ": "\u277a\ufe0e",
    "\u2018": "\u277b\ufe0e",
    "\u2019": "\u277c\ufe0e",
    "\u201c": "\u277d\ufe0e",
    "\u201d": "\u277e\ufe0e",
    "\u2022": "\u277f\ufe0e",
    "\u2013": "\u25fb\ufe0e",
    "\u2014": "\u25fb\ufe0e",
    "\u02dc": "\u25fb\ufe0e",
    "\u2122": "\u25fb\ufe0e",
    š: "\u25fb\ufe0e",
    "\u203a": "\u25fb\ufe0e",
    œ: "\u25fb\ufe0e",
    " ": "\u25fb\ufe0e",
    ž: "\xB7\ufe0e",
    Ÿ: "\u2022\ufe0e",
    "\xA1": "\u25cb\ufe0e",
    "\xA2": "\u2b55\ufe0e",
    "\xA3": "\u25fb\ufe0e",
    "\xA4": "\u25c9\ufe0e",
    "\xA5": "\u25ce\ufe0e",
    "\xA6": "\u25fb\ufe0e",
    "\xA7": "\u25aa\ufe0e",
    "\xA8": "\u25fb\ufe0e",
    "\xA9": "\u25fb\ufe0e",
    ª: "\u2726\ufe0e",
    "\xAB": "\u2605\ufe0e",
    "\xAC": "\u2736\ufe0e",
    "\xAE": "\u2739\ufe0e",
    "\xAF": "\u2735\ufe0e",
    "\xB0": "\u25fb\ufe0e",
    "\xB1": "\u2316\ufe0e",
    "\xB2": "\u27e1\ufe0e",
    "\xB3": "\u2311\ufe0e",
    "\xB4": "\u25fb\ufe0e",
    µ: "\u272a\ufe0e",
    "\xB6": "\u2730\ufe0e",
    "\xB7": "\ud83d\udd50\ufe0e",
    "\xB8": "\ud83d\udd51\ufe0e",
    "\xB9": "\ud83d\udd52\ufe0e",
    º: "\ud83d\udd53\ufe0e",
    "\xBB": "\ud83d\udd54\ufe0e",
    "\xBC": "\ud83d\udd55\ufe0e",
    "\xBD": "\ud83d\udd56\ufe0e",
    "\xBE": "\ud83d\udd57\ufe0e",
    "\xBF": "\ud83d\udd58\ufe0e",
    À: "\ud83d\udd59\ufe0e",
    Á: "\ud83d\udd5a\ufe0e",
    Â: "\ud83d\udd5b\ufe0e",
    Ã: "\u25fb\ufe0e",
    Ä: "\u25fb\ufe0e",
    Å: "\u25fb\ufe0e",
    Æ: "\u25fb\ufe0e",
    Ç: "\u25fb\ufe0e",
    È: "\u25fb\ufe0e",
    É: "\u25fb\ufe0e",
    Ê: "\u25fb\ufe0e",
    Ë: "\u25fb\ufe0e",
    Ì: "\u25fb\ufe0e",
    Í: "\u25fb\ufe0e",
    Î: "\u25fb\ufe0e",
    Ï: "\u25fb\ufe0e",
    Ð: "\u25fb\ufe0e",
    Ñ: "\u25fb\ufe0e",
    Ò: "\u25fb\ufe0e",
    Ó: "\u25fb\ufe0e",
    Ô: "\u25fb\ufe0e",
    Õ: "\u232b\ufe0e",
    Ö: "\u2326\ufe0e",
    "\xD7": "\u25fb\ufe0e",
    Ø: "\u27a2\ufe0e",
    Ù: "\u25fb\ufe0e",
    Ú: "\u25fb\ufe0e",
    Û: "\u25fb\ufe0e",
    Ü: "\u27b2\ufe0e",
    Ý: "\u25fb\ufe0e",
    Þ: "\u25fb\ufe0e",
    ß: "\u25fb\ufe0e",
    à: "\u25fb\ufe0e",
    á: "\u25fb\ufe0e",
    â: "\u25fb\ufe0e",
    ã: "\u25fb\ufe0e",
    ä: "\u25fb\ufe0e",
    å: "\u25fb\ufe0e",
    æ: "\u25fb\ufe0e",
    ç: "\u25fb\ufe0e",
    è: "\u2794\ufe0e",
    é: "\u25fb\ufe0e",
    ê: "\u25fb\ufe0e",
    ë: "\u25fb\ufe0e",
    ì: "\u25fb\ufe0e",
    í: "\u25fb\ufe0e",
    î: "\u25fb\ufe0e",
    ï: "\u21e6\ufe0e",
    ð: "\u21e8\ufe0e",
    ñ: "\u21e7\ufe0e",
    ò: "\u21e9\ufe0e",
    ó: "\u2b04\ufe0e",
    ô: "\u21f3\ufe0e",
    õ: "\u2b00\ufe0e",
    ö: "\u2b01\ufe0e",
    "\xF7": "\u2b03\ufe0e",
    ø: "\u2b02\ufe0e",
    ù: "\u25ad\ufe0e",
    ú: "\u25ab\ufe0e",
    û: "\u2717\ufe0e",
    ü: "\u2713\ufe0e",
    ý: "\u2612\ufe0e",
    þ: "\u2611\ufe0e",
    ÿ: "\u25fb\ufe0e"
};

function wingdings(_0x59eex4) {
    return _0x59eex4["split"]("")["map"](function(_0x59eex37) {
        return wingdingsCharMap[_0x59eex37] ? wingdingsCharMap[_0x59eex37] : _0x59eex37
    })["join"]("")
}
const vaporwaveCharMap = {
    " ": "\u3000",
    "`": "`",
    1: "\uff11",
    2: "\uff12",
    3: "\uff13",
    4: "\uff14",
    5: "\uff15",
    6: "\uff16",
    7: "\uff17",
    8: "\uff18",
    9: "\uff19",
    0: "\uff10",
    "-": "\uff0d",
    "=": "\uff1d",
    "~": "~",
    "!": "\uff01",
    "@": "\uff20",
    "#": "\uff03",
    $: "\uff04",
    "%": "\uff05",
    "^": "^",
    "&": "\uff06",
    "*": "\uff0a",
    "(": "\uff08",
    ")": "\uff09",
    _: "_",
    "+": "\uff0b",
    q: "\uff51",
    w: "\uff57",
    e: "\uff45",
    r: "\uff52",
    t: "\uff54",
    y: "\uff59",
    u: "\uff55",
    i: "\uff49",
    o: "\uff4f",
    p: "\uff50",
    "[": "[",
    "]": "]",
    "\\": "\\",
    Q: "\uff31",
    W: "\uff37",
    E: "\uff25",
    R: "\uff32",
    T: "\uff34",
    Y: "\uff39",
    U: "\uff35",
    I: "\uff29",
    O: "\uff2f",
    P: "\uff30",
    "{": "{",
    "}": "}",
    "|": "|",
    a: "\uff41",
    s: "\uff53",
    d: "\uff44",
    f: "\uff46",
    g: "\uff47",
    h: "\uff48",
    j: "\uff4a",
    k: "\uff4b",
    l: "\uff4c",
    ";": "\uff1b",
    "\'": "\uff07",
    A: "\uff21",
    S: "\uff33",
    D: "\uff24",
    F: "\uff26",
    G: "\uff27",
    H: "\uff28",
    J: "\uff2a",
    K: "\uff2b",
    L: "\uff2c",
    ":": "\uff1a",
    '\"': '\"',
    z: "\uff5a",
    x: "\uff58",
    c: "\uff43",
    v: "\uff56",
    b: "\uff42",
    n: "\uff4e",
    m: "\uff4d",
    ",": "\uff0c",
    ".": "\uff0e",
    "/": "\uff0f",
    Z: "\uff3a",
    X: "\uff38",
    C: "\uff23",
    V: "\uff36",
    B: "\uff22",
    N: "\uff2e",
    M: "\uff2d",
    "<": "<",
    ">": ">",
    "?": "\uff1f"
};

function vaporwaveText(_0x59eex4) {
    var _0x59eex3a = _0x59eex4["split"](" ")["length"];
    _0x59eex4 = applyCharMap(vaporwaveCharMap, _0x59eex4);
    var _0x59eex3b = getAsianChars(Math["max"](3, _0x59eex3a));
    if (_0x59eex3a > 6) {
        _0x59eex3b = _0x59eex3b["split"]("")["map"]((_0x59eex6) => {
            return _0x59eex6 + ["", ""][Math["round"](Math["random"]() * 0.6)]
        })["join"]("")
    }
    var _0x59eex3c = [];
    _0x59eex3c["push"](_0x59eex4);
    return _0x59eex3c["join"]()
}

function vaporwaveText1(_0x59eex4) {
    var _0x59eex3a = _0x59eex4["split"](" ")["length"];
    _0x59eex4 = applyCharMap(vaporwaveCharMap, _0x59eex4);
    var _0x59eex3b = getAsianChars(Math["max"](3, _0x59eex3a));
    if (_0x59eex3a > 6) {
        _0x59eex3b = _0x59eex3b["split"]("")["map"]((_0x59eex6) => {
            return _0x59eex6 + ["", ""][Math["round"](Math["random"]() * 0.6)]
        })["join"]("")
    }
    var _0x59eex3c = [];
    _0x59eex3c["push"](_0x59eex4["replace"](/　/g, "\u2591")["replace"](/ａｅ/, "\xE6")["replace"](/Ａ/g, "\u039b")["replace"](/Ｅ/g, function() {
        return Math["random"]() > 0.5 ? "\u039e" : "\u03a3"
    })["replace"](/Ｏ/g, "\u2662"));
    return _0x59eex3c["join"]()
}

function vaporwaveText2(_0x59eex4) {
    var _0x59eex3a = _0x59eex4["split"](" ")["length"];
    _0x59eex4 = applyCharMap(vaporwaveCharMap, _0x59eex4);
    var _0x59eex3b = getAsianChars(Math["max"](3, _0x59eex3a));
    if (_0x59eex3a > 6) {
        _0x59eex3b = _0x59eex3b["split"]("")["map"]((_0x59eex6) => {
            return _0x59eex6 + ["", ""][Math["round"](Math["random"]() * 0.6)]
        })["join"]("")
    }
    var _0x59eex3c = [];
    _0x59eex3c["push"]("\u3010\ufeff" + _0x59eex4 + "\u3011");
    return _0x59eex3c["join"]()
}

function getAsianChars(_0x59eex40) {
    if (!_0x59eex40) {
        _0x59eex40 = 1
    }
    var _0x59eex41 = "\u30ea\u30b5\u30d5\u30e9\u30f3\u30af\u73fe\u4ee3\u306e\u30b3\u30f3\u30d4\u30e5\u7af9\u5185 \u307e\u308a\u3084\u82e5\u8005\u304c\u5c65\u304f\u6d41\u884c\u306e\u30b9\u30cb\u30fc\u30ab\u30fc\u771f\u591c\u4e2d\u306e\u30c9\u30a2\u30db\u30c3\u30c8\u30c9\u30c3\u30b0\u30de\u30b9\u30bf\u30fc\u30b9\u30c8\u30e9\u30a4\u30ab\u30fc\u30bd\u30cb\u30fc\u30d6\u30ae\u65b0\u3057\u3044\u65e5\u306e\u8a95\u751f\u30e9\u30a4\u30d5 - \u30d2\u30b9\u30a4\u84b8\u6c17\u6ce2 \u7121\u7dda\u30a0\u30a1\u30a2\u30a3\u30a4\u30a5\u30a6\u30a7\u30a8\u30a9\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c3\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e3\u30e4\u30e5\u30e6\u30e7\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ee\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f5\u30f6\u30f7\u30f8\u30f9\u30fa\u30fb\u30fc\u30fd\u30fe\u30ff\u3041\u3042\u3043\u3044\u3045\u3046\u3047\u3048\u3049\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3063\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3083\u3084\u3085\u3086\u3087\u3088\u3089\u308a\u308b\u308c\u308d\u308e\u308f\u3090\u3091\u3092\u3093\u3094\u3095\u3096\u3099\u309a\u309b\u309c\u309d\u309e\u309f\u4e9c\u54c0\u6328\u611b\u66d6\u60aa\u63e1\u5727\u6271\u5b9b\u5d50\u5b89\u6848\u6697\u4ee5\u8863\u4f4d\u56f2\u533b\u4f9d\u59d4\u5a01\u70ba\u754f\u80c3\u5c09\u7570\u79fb\u840e\u5049\u6905\u5f59\u610f\u9055\u7dad\u6170\u907a\u7def\u57df\u80b2\u58f1\u9038\u8328\u828b\u5f15\u5370\u56e0\u54bd\u59fb\u54e1\u9662\u6deb\u9670\u98f2\u96a0\u97fb\u53f3\u5b87\u7fbd\u96e8\u5504\u9b31\u755d\u6d66\u904b\u96f2\u6c38\u6cf3\u82f1\u6620\u6804\u55b6\u8a60\u5f71\u92ed\u885b\u6613\u75ab\u76ca\u6db2\u99c5\u60a6\u8d8a\u8b01\u95b2\u5186\u5ef6\u6cbf\u708e\u6028\u5bb4\u5a9b\u63f4\u5712\u7159\u733f\u9060\u925b\u5869\u6f14\u7e01\u8276\u6c5a\u738b\u51f9\u592e\u5fdc\u5f80\u62bc\u65fa\u6b27\u6bb4\u685c\u7fc1\u5965\u6a2a\u5ca1\u5c4b\u5104\u61b6\u81c6\u865e\u4e59\u4ffa\u5378\u97f3\u6069\u6e29\u7a4f\u4e0b\u5316\u706b\u52a0\u53ef\u4eee\u4f55\u82b1\u4f73\u4fa1\u679c\u6cb3\u82db\u79d1";
    var _0x59eex42 = "";
    for (var _0x59eex43 = 0; _0x59eex43 < _0x59eex40; _0x59eex43++) {
        _0x59eex42 += _0x59eex41[Math["floor"](Math["random"]() * _0x59eex41["length"])]
    }
    return _0x59eex42
}
const flourishArray = ["\ua9c1\u0f12\u262c [[text]] \u262c\u0f12\ua9c2", "\u25e5\ua9c1\u0f51 [[text]] \u0f4c\ua9c2\u25e4", "\u2605\xB7.\xB7\xB4\xAF`\xB7.\xB7\u2605 [[text]] \u2605\xB7.\xB7\xB4\xAF`\xB7.\xB7\u2605", "\u2694\ufe0f [[text]] \u2694\ufe0f", "\ua9c1\u0f12\u0f3b\u262c\u0f51 [[text]] \u0f4c\u262c\u0f3a\u0f12\ua9c2", "\u266a\u10e6\u266a*\u2022.\xB8\xB8.\u2022*\xA8\xA8*\u2022.\u266a [[text]] \u266a\u10e6\u266a*\u2022.\xB8\xB8.\u2022*\xA8\xA8*\u2022.\u266a\u10e6\u266a", "\u25e5\ua9c1\u0f51 \u0950\u5350[[text]] \u5350\u0950 \u0f4c\ua9c2\u25e4", "( \uff9f\u2200\uff9f)\uff89\u3010[[text]]\u3011", "\u10e6\u01aa(\u02c6\u25e1\u02c6)\u0283\u2661 [[text]] \u2661\u01aa(\u02c6\u25e1\u02c6)\u0283\u266a", "[[text]] \u261c(`o\xB4)", "\u239d\u239d\u2727G\u0365O\u0363D\u036b\u2727\u23a0\u23a0 [[text]] \u239d\u239d\u2727G\u0365O\u0363D\u036b\u2727\u23a0\u23a0", "<:::::[]=\xA4 [[text]] (\u2580\u033f\u033f\u0139\u032f\u033f\u033f\u2580\u033f \u033f)", "\uff61*\uff9f.*.\uff61(\u3063 \u141b )\u3063\u2702\u2570\u22c3\u256f [[text]]", "\u2517(^o^ )\u2513\u4e09 [[text]] \u4e09 \u2517(^o^ )\u2513", "(\u3145\ua20d\ufe43\ua20d)* [[text]] *(\ua20d\ufe43\ua20d\u3145)\u2661", "\xAF_( \u0361\xB0 \u035c\u0296 \u0361\xB0)_/\xAF [[text]] \xAF_( \u0361\xB0 \u035c\u0296 \u0361\xB0)_/\xAF", "\u0b67(\u2022\u0300\u15dd\u2022\u0301)\u0aed [[text]] \u0b67(\u21c0\u2038\u21bc\u2036)\u0aed", "\u2581 \u2582 \u2584 \u2585 \u2586 \u2587 \u2588 [[text]] \u2588 \u2587 \u2586 \u2585 \u2584 \u2582 \u2581", "\xB0\xB0\xB0\xB7.\xB0\xB7..\xB7\xB0\xAF\xB0\xB7._.\xB7 [[text]] \xB7._.\xB7\xB0\xAF\xB0\xB7.\xB7\xB0 .\xB7\xB0\xB0\xB0", "\xB8,\xF8\xA4\xBA\xB0`\xB0\xBA\xA4\xF8,\xB8\xB8,\xF8\xA4\xBA\xB0 [[text]] \xB0\xBA\xA4\xF8,\xB8\xB8,\xF8\xA4\xBA\xB0`\xB0\xBA\xA4\xF8,\xB8", "\u0131ll\u0131ll\u0131 [[text]] \u0131ll\u0131ll\u0131", "\u2022?((\xAF\xB0\xB7._.\u2022 [[text]] \u2022._.\xB7\xB0\xAF))\u061f\u2022", "\u258c\u2502\u2588\u2551\u258c\u2551\u258c\u2551 [[text]] \u2551\u258c\u2551\u258c\u2551\u2588\u2502\u258c", "\xD7\xBA\xB0\u201d\u02dc`\u201d\xB0\xBA\xD7 [[text]] \xD7\xBA\xB0\u201d\u02dc`\u201d\xB0\xBA\xD7", "\u2022]\u2022\u2022\xB4\xBA\xB4\u2022\xBB [[text]] \xAB\u2022\xB4\xBA\xB4\u2022\u2022[\u2022", "*\u2022.\xB8\u2661 [[text]] \u2661\xB8.\u2022*", "\u2570\u2606\u2606 [[text]] \u2606\u2606\u256e", ".\u2022\xB0\xA4*(\xAF`\u2605\xB4\xAF)*\xA4\xB0 [[text]] \xB0\xA4*(\xAF\xB4\u2605`\xAF)*\xA4\xB0\u2022.", "(\xAF\xB4\u2022._.\u2022 [[text]] \u2022._.\u2022\xB4\xAF)", "\xB8\u201e.-\u2022~\xB9\xB0\u201d\u02c6\u02dc\xA8 [[text]] \xA8\u02dc\u02c6\u201d\xB0\xB9~\u2022-.\u201e\xB8", "\u2591\u2592\u2593\u2588 [[text]] \u2588\u2593\u2592\u2591", "\u2591\u2592\u2593\u2588\u25ba\u2500\u2550  [[text]] \u2550\u2500\u25c4\u2588\u2593\u2592\u2591", "\u2605\u5f61 [[text]] \u5f61\u2605", "\u2022\xB4\xAF`\u2022. [[text]] .\u2022\xB4\xAF`\u2022", "\xA7.\u2022\xB4\xA8\'\xB0\xF7\u2022..\xD7 [[text]] \xD7,.\u2022\xB4\xA8\'\xB0\xF7\u2022..\xA7", "\u2022\xB0\xAF`\u2022\u2022 [[text]] \u2022\u2022\xB4\xAF\xB0\u2022", "(\xAF`*\u2022.\xB8,\xA4\xB0\xB4\u273f.\uff61.:* [[text]] *.:\uff61.\u273f`\xB0\xA4,\xB8.\u2022*\xB4\xAF)", "|!\xA4*\'~``~\'*\xA4!| [[text]] |!\xA4*\'~``~\'*\xA4!|", "\u2022._.\u2022\u2022\xB4\xAF``\u2022.\xB8\xB8.\u2022` [[text]] `\u2022.\xB8\xB8.\u2022\xB4\xB4\xAF`\u2022\u2022._.\u2022", "\xB8\u201e.-\u2022~\xB9\xB0\u201d\u02c6\u02dc\xA8 [[text]] \xA8\u02dc\u02c6\u201d\xB0\xB9~\u2022-.\u201e\xB8", "(\xAF\xB4\u2022._.\u2022 [[text]] \u2022._.\u2022\xB4\xAF)", "\u2022\u2022\xA4(`\xD7[\xA4 [[text]] \xA4]\xD7\xB4)\xA4\u2022\u2022", "\u2022\xB4\xAF`\u2022\xBB [[text]] \xAB\u2022\xB4\xAF`\u2022", " .o0\xD7X\xD70o. [[text]] .o0\xD7X\xD70o.", "\xA4\xB8\xB8.\u2022\xB4\xAF`\u2022\xB8\xB8.\u2022..>> [[text]] <<..\u2022.\xB8\xB8\u2022\xB4\xAF`\u2022.\xB8\xB8\xA4", "\u2014(\u2022\u2022\xF7[ [[text]] ]\xF7\u2022\u2022)\u2014", "\xB8,\xF8\xA4\xBA\xB0`\xB0\xBA\xA4\xF8,\xB8 [[text]] \xB8,\xF8\xA4\xBA\xB0`\xB0\xBA\xA4\xF8,\xB8", "`\u2022.\xB8\xB8.\u2022\xB4\xB4\xAF`\u2022\u2022._.\u2022 [[text]] \u2022._.\u2022\u2022`\xAF\xB4\xB4\u2022.\xB8\xB8.\u2022`", ",-*\' ^ \'~*-.,_,.-*~ [[text]] ~*-.,_,.-*~\' ^ \'*-,", "`\u2022.,\xB8\xB8,.\u2022\xB4\xAF [[text]] \xAF`\u2022.,\xB8\xB8,.\u2022\xB4", "\u21a4\u21a4\u21a4\u21a4\u21a4 [[text]] \u21a6\u21a6\u21a6\u21a6\u21a6", "\u27b6\u27b6\u27b6\u27b6\u27b6 [[text]] \u27b7\u27b7\u27b7\u27b7\u27b7", "\u21ab\u21ab\u21ab\u21ab\u21ab [[text]] \u21ac\u21ac\u21ac\u21ac\u21ac", "\xB7.\xB8\xB8.\xB7\u2669\u266a\u266b [[text]] \u266b\u266a\u2669\xB7.\xB8\xB8.\xB7", "\u3010\uff61_\uff61\u3011 [[text]] \u3010\uff61_\uff61\u3011", "]|I{\u2022------\xBB [[text]] \xAB------\u2022}I|[", "\u2580\u2584\u2580\u2584\u2580\u2584 [[text]] \u2584\u2580\u2584\u2580\u2584\u2580", "(-_-) [[text]] (-_-)", "\u2022\xB4\xAF`\u2022. [[text]] .\u2022\xB4\xAF`\u2022", "-\u6f2b~*\'\xA8\xAF\xA8\'*\xB7\u821e~ [[text]] ~\u821e*\'\xA8\xAF\xA8\'*\xB7~\u6f2b-", "\u0e51\u06de\u0e51,\xB8\xB8,\xF8\xA4\xBA\xB0`\xB0\u0e51\u06e9 [[text]] \u0e51\u06e9 ,\xB8\xB8,\xF8\xA4\xBA\xB0`\xB0\u0e51\u06de\u0e51", ".\u2022\xB0\xA4*(\xAF`\u2605\xB4\xAF)*\xA4\xB0 [[text]] \xB0\xA4*(\xAF\xB4\u2605`\xAF)*\xA4\xB0\u2022.", "\u2022\u2022.\u2022\xB4\xAF`\u2022.\u2022\u2022 [[text]] \u2022\u2022.\u2022\xB4\xAF`\u2022.\u2022\u2022", "\xA4\xB8\xB8.\u2022\xB4\xAF`\u2022\xB8\xB8.\u2022..>> [[text]] <<..\u2022.\xB8\xB8\u2022\xB4\xAF`\u2022.\xB8\xB8\xA4", "\u25e6\u2022\u25cf\u25c9\u273f [[text]] \u273f\u25c9\u25cf\u2022\u25e6", "\ua9c1\ud80c\ude88\ud808\udd9c [[text]] \ud808\udd9c\ud80c\ude89\ua9c2", "\u255a\xBB\u2605\xAB\u255d [[text]] \u255a\xBB\u2605\xAB\u255d", "\u2af7 [[text]] \u2af8", "-\xB7=\xBB\u2021\xAB=\xB7- [[text]] -\xB7=\xBB\u2021\xAB=\xB7-", "\u2219\u2219\xB7\u25ab\u25ab\u1d52\u1d3c\u1d52\u25ab\u2092\u2092\u25ab\u1d52\u1d3c\u1d52\u25ab\u2092\u2092\u25ab\u1d52\u1d3c\u1d52 [[text]] \u1d52\u1d3c\u1d52\u25ab\u2092\u2092\u25ab\u1d52\u1d3c\u1d52\u25ab\u2092\u2092\u25ab\u1d52\u1d3c\u1d52\u25ab\u25ab\xB7\u2219\u2219", "\xB8\xB8\u266c\xB7\xAF\xB7\u2669\xB8\xB8\u266a\xB7\xAF\xB7\u266b\xB8\xB8 [[text]] \xB8\xB8\u266b\xB7\xAF\xB7\u266a\xB8\xB8\u2669\xB7\xAF\xB7\u266c\xB8\xB8", "\u0b9c\u06e9\u06de\u06e9\u0b9c [[text]] \u0b9c\u06e9\u06de\u06e9\u0b9c", "\xA4 (\xAF\xB4\u2606\u272d.\xB8_)\xA4 [[text]] \xA4(_\xB8.\u272d\u2606\xB4\xAF) \xA4", "(\xAF`\xB7.\xB8\xB8.\xB7\xB4\xAF`\xB7.\xB8\xB8.-> [[text]] <-.\xB8\xB8.\xB7\xB4\xAF`\xB7.\xB8\xB8.\xB7\xB4\xAF)", "\u273f.\uff61.:* \u2606:**:. [[text]] .:**:.\u2606*.:\uff61.\u273f", ".\u2022\u266b\u2022\u266c\u2022 [[text]] \u2022\u266c\u2022\u266b\u2022.", "\u10e6(\xAF`\u25d5\u203f\u25d5\xB4\xAF) \u266b \u266a \u266b [[text]] \u266b \u266a \u266b (\xAF`\u25d5\u203f\u25d5\xB4\xAF)\u10e6", "\xAB-(\xAF`v\xB4\xAF)-\xAB [[text]] \xBB-(\xAF`v\xB4\xAF)-\xBB"];

function wrapInFlourish(_0x59eex4) {
    return flourishArray[Math["floor"](Math["random"]() * flourishArray["length"])]["replace"]("[[text]]", _0x59eex4)
}

function Flourishlist(_0x59eex47, _0x59eex4) {
    return flourishArray[_0x59eex47]["replace"]("[[text]]", _0x59eex4)
}

function wrapInSymbols(_0x59eex4, _0x59eex47) {
    return randomSymbols(_0x59eex47) + "  " + _0x59eex4 + "  " + randomSymbols(_0x59eex47)
}

function firework(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u0489") + "\u0489"
}

function weirdBox(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "[\u0305\u0332$1]")
}

function curlybrackets(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\u29fc$1&#828;\u29fd")
}

function singlewavyJoiner(_0x59eex4) {
    return "\u301c" + _0x59eex4["split"]("")["join"]("\u223f") + "\u301c"
}

function thickBox(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\u27e6$1\u27e7")
}

function zigzagJoiner(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\u299a$1\u299a")
}

function hashJoiner(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u2a33")
}

function starJoiner(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\u299a$1\u299a")
}

function connectedJoiner(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("\u22b6")
}

function arrowjoin(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\u298f$1&#x302;\u298e")
}

function dotBoxtwo(_0x59eex4) {
    return _0x59eex4["split"]("")["join"]("&#778; \u2af6")
}

function dotBox(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\ua70d$1\ua709")
}

function diametricBox(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\u2991$1\u2992")
}

function arrowBox(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\u298f$1\u298e")
}

function littleSparkles(_0x59eex4) {
    return "\u02dc\u201d*\xB0\u2022.\u02dc\u201d*\xB0\u2022 " + _0x59eex4 + " \u2022\xB0*\u201d\u02dc.\u2022\xB0*\u201d\u02dc"
}

function kirbyHug(_0x59eex4) {
    return "(\u3063\u25d4\u25e1\u25d4)\u3063 \u2665 " + _0x59eex4 + " \u2665"
}

function dottyJoiner(_0x59eex4) {
    return "\u2591" + _0x59eex4["split"]("")["join"]("\u2591") + "\u2591"
}

function wavyJoiner(_0x59eex4) {
    return "\u224b" + _0x59eex4["split"]("")["join"]("\u224b") + "\u224b"
}

function diametricAngleFrame(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\u300e$1\u300f")
}

function thickBlockFramed(_0x59eex4) {
    return _0x59eex4["replace"](/([^\s])/g, "\u3010$1\u3011")
}

function star0(_0x59eex4) {
    return applyCharMap(italicCharMap, "\u30df\u2605 " + _0x59eex4 + "\u2605\u5f61")
}

function star1(_0x59eex4) {
    return applyCharMap(monospaceCharMap, "\ua9c1\u2022\u22b9\u066d" + _0x59eex4 + "\u066d\u22b9\u2022\ua9c2")
}

function star2(_0x59eex4) {
    return applyCharMap(currencyCharMap, " \u0131ll\u0131ll\u0131\u2b50\ud83c\udf1f" + _0x59eex4 + "\ud83c\udf1f\u2b50\u0131ll\u0131ll\u0131")
}

function star3(_0x59eex4) {
    return applyCharMap(monospaceCharMap, "\u2570\u2022\u2605\u2605 " + _0x59eex4 + "\u2605\u2605\u2022\u256f")
}

function star4(_0x59eex4) {
    return applyCharMap(squaresCharMap, "`\u2735\u2022.\xB8,\u2735\xB0\u2735.\uff61.\u2730  " + _0x59eex4 + "\u2730.\uff61.\u2735\xB0\u2735,\xB8.\u2022\u2735\xB4")
}

function star5(_0x59eex4) {
    return applyCharMap(doubleStruckCharMap, "\xB7.\u2605\xB7.\xB7\xB4\xAF`\xB7.\xB7\u2605" + _0x59eex4 + "\u2605\xB7.\xB7\xB4\xAF`\xB7.\xB7\u2605.\xB7")
}

function star6(_0x59eex4) {
    return applyCharMap(invertedSquaresCharMap, "\xA8\u02dc\u02c6\u201d\xB0\u2363~\u2022\u2721\u22b9\u066d\u201e\xB8  " + _0x59eex4 + "\xB8\u201e\u066d\u22b9\u2721\u2022~\u2363\xB0\u201d\u02c6\u02dc\xA8")
}

function star7(_0x59eex4) {
    return applyCharMap(asianStyleCharMap, "\xB8\u201e\u066d\u22b9\u2721\u2022~\u2363\xB0\u201d\u02c6\u02dc\xA8" + _0x59eex4 + "\xA8\u02dc\u02c6\u201d\xB0\u2363~\u2022\u2721\u22b9\u066d\u201e\xB8")
}

function star8(_0x59eex4) {
    return applyCharMap(asianStyle2CharMap, "\u2605\xB8.\u2022\u2606\u2022.\xB8\u2605 " + _0x59eex4 + "\u2605\u2840.\u2022\u2606\u2022.\u2605")
}

function star9(_0x59eex4) {
    return applyCharMap(neonCharMap, "\u066d\u22b9\xA4.\u2022\u2a33\u2022.*\u2606\u272c " + _0x59eex4 + "\u272c\u2606*.\u2022\u2a33\u2022.\xA4\u22b9\u066d")
}

function star10(_0x59eex4) {
    return applyCharMap(squiggle6CharMap, "\u066d\u22b9\xA4.\u2022\u2a33\u2022.*\u2606\u272c " + _0x59eex4 + "\u272c\u2606*.\u2022\u2a33\u2022.\xA4\u22b9\u066d")
}

function heart0(_0x59eex4) {
    return applyCharMap(squiggle5CharMap, "(\u25cd\u2022\u1d17\u2022\u25cd) \u30df\ud83d\udc96 " + _0x59eex4 + "\ud83d\udc96\u5f61")
}

function heart1(_0x59eex4) {
    return applyCharMap(futureAlienCharMap, "\u0df4\u2764\ufe0f\u0df4  " + _0x59eex4 + "\u0df4\u2764\ufe0f\u0df4")
}

function heart2(_0x59eex4) {
    return applyCharMap(boldCharMap, "\ud83d\udc96\xB4 *\u2022.\xB8\u2665\xB8.\u2022** " + _0x59eex4 + "**\u2022.\xB8\u2665\xB8.\u2022*\xB4\ud83d\udc96")
}

function heart3(_0x59eex4) {
    return applyCharMap(firework, "\u2661\u301c\u10da(\u0e51\u7676 " + _0x59eex4 + "\u7676\u0e51)\u10da\u301c\u2661")
}

function heart4(_0x59eex4) {
    return applyCharMap(symbolsCharMap, "\u25e6\u2022\u25cf\u2764\u2661 " + _0x59eex4 + "\u2661\u2764\u25cf\u2022\u25e6")
}

function heart5(_0x59eex4) {
    return applyCharMap(bentTextCharMap, "\ud83c\udf38\u03be\u03be(\u2235\u2764\u25e1\u2764\u2235)\u03be\u03be\xB7\xAF\xB7\u2669\xB8 " + _0x59eex4 + "\xB8\u2669\xB7\xAF\xB7\u03be\u03be(\u2235\u2764\u25e1\u2764\u2235)\u03be\u03be\ud83c\udf38")
}

function heart6(_0x59eex4) {
    return applyCharMap(upperAnglesCharMap, "\u2665\u2563[-_-]\u2560\u2665" + _0x59eex4 + "\u2665\u2563[-_-]\u2560\u2665")
}

function heart7(_0x59eex4) {
    return applyCharMap(boldCharMap, "\u30df\u30df\u25e6\u2767\u25e6\xB0\u02da\xB0\u25e6.\xB8\xB8\u25e6\xB0\xB4\u2764*\u2022.\xB8\u2665  " + _0x59eex4 + "\u2665\xB8.\u2022*\u2764\xB4\xB0\u25e6\xB8\xB8.\u25e6\xB0\u02da\xB0\u25e6\u2619\u25e6\u5f61\u5f61")
}

function emoticon0(_0x59eex4) {
    return applyCharMap(oldEnglishCharMap, "\u5f61(\u273f\u2579\u25e1\u2579) " + _0x59eex4 + "(\uff40\u2200\xB4)\u03a8")
}

function emoticon1(_0x59eex4) {
    return applyCharMap(squiggle6CharMap, "\u0449\uff08\uff9f\u0414\uff9f\u0449\uff09 < " + _0x59eex4 + ")")
}

function emoticon2(_0x59eex4) {
    return applyCharMap(boldCharMap, "\u261e\xF3 \u035c\u3064\xF2\u261e  " + _0x59eex4 + "")
}

function emoticon3(_0x59eex4) {
    return applyCharMap(squiggle5CharMap, "(\u261d\u25de\u2038\u25df)\u261e" + _0x59eex4 + "")
}

function emoticon4(_0x59eex4) {
    return applyCharMap(cursiveCharMap, "(\u3065\uff61\u25d5\u203f\u203f\u25d5\uff61)\u3065 " + _0x59eex4 + " \u0669(\u02d8\u25e1\u02d8)\u06f6")
}

function emoticon5(_0x59eex4) {
    return applyCharMap(squiggle3CharMap, "\ud83c\udf18\u203f\ud83c\udf18  " + _0x59eex4 + "(\u273f\u30d8\u1d25\u30d8)")
}

function emoticon6(_0x59eex4) {
    return applyCharMap(wideTextCharMap, "(^\u25bd^)  " + _0x59eex4 + "(\u273f^\u25bd^)")
}

function emoticon7(_0x59eex4) {
    return applyCharMap(squiggle2CharMap, "(\u4eba\u25d5\u203f\u25d5)" + _0x59eex4 + "(\u2022\u25e1\u2022)")
}

function thankyou0(_0x59eex4) {
    return applyCharMap(doubleStruckCharMap, "(\uff65\u03c9\uff65)\u266a" + _0x59eex4 + "\u266a(\uff65\u03c9\uff65)\uff89")
}

function thankyou1(_0x59eex4) {
    return applyCharMap(cursiveCharMap, "(*\u02ca\u15dc\u02cb*)" + _0x59eex4 + "(*\u02ca\u15dc\u02cb*)")
}

function thankyou2(_0x59eex4) {
    return applyCharMap(doubleStruckCharMap, "(*\u309d\u03c9\u30fb)" + _0x59eex4 + "(\u03c9\u30fb*\u309d)")
}

function thankyou3(_0x59eex4) {
    return applyCharMap(upperAnglesCharMap, "<(_ _*)>" + _0x59eex4 + "")
}

function thankyou4(_0x59eex4) {
    return applyCharMap(squiggle2CharMap, "\u2605\u2312(\u25cf\u309d\u03c9\u30fb)" + _0x59eex4 + "")
}

function thankyou5(_0x59eex4) {
    return applyCharMap(asianStyleCharMap, "\uff9f\uff65:,\uff61\u2605\uff3c(^-^ )\u266a" + _0x59eex4 + "\u266a( ^-^)/\u2605,\uff61\uff65:\uff65\uff9f")
}

function thankyou6(_0x59eex4) {
    return applyCharMap(medievalCharMap, "+\uff61:.\uff9f\u30fd(*\xB4\u2200)\uff89\uff9f" + _0x59eex4 + ".:\uff61+\uff9f")
}

function thankyou7(_0x59eex4) {
    return applyCharMap(neonCharMap, "(*\u309d\u03c9\u30fb)" + _0x59eex4 + "(*\u309d\u03c9\u30fb)")
}

function sad0(_0x59eex4) {
    return applyCharMap(squiggle5CharMap, "(\u25d5\ufe3f\u25d5\u273f) " + _0x59eex4 + " (\u0e51\u2032\xB0\ufe3f\xB0\u0e51)")
}

function sad1(_0x59eex4) {
    return applyCharMap(monospaceCharMap, "\u250f\u0f3c \u25c9 \u256d\u256e \u25c9\u0f3d\u2513 " + _0x59eex4 + " (\ufe36\ufe39\ufe3a)")
}

function sad2(_0x59eex4) {
    return applyCharMap(squiggleCharMap, "(\u2688\u0325\u0325\u0325\u0325\u0325\u0301\u2322\u2688\u0325\u0325\u0325\u0325\u0325\u0300)" + _0x59eex4 + " (\u2688\u0325\u0325\u0325\u0325\u0325\u0301\u2322\u2688\u0325\u0325\u0325\u0325\u0325\u0300)")
}

function sad3(_0x59eex4) {
    return applyCharMap(italicCharMap, "( \u25d4 \u0296\u032f \u25d4 ) " + _0x59eex4 + " ( \u25d4 \u0296\u032f \u25d4 )")
}

function sad4(_0x59eex4) {
    return applyCharMap(squiggle3CharMap, "(\u0ca5 \u035c\u0296\u0ca5) " + _0x59eex4 + " \u0669\ua4b0\xB4\xB7\u2322\u2022\uff40\ua4b1\u06f6\u207c\xB3\u208c\u2083")
}

function sad5(_0x59eex4) {
    return applyCharMap(bentTextCharMap, "(o\ua1a4\ufe35\ua1a4o) " + _0x59eex4 + " \u25cf\ufe3f\u25cf")
}

function sad6(_0x59eex4) {
    return applyCharMap(medievalCharMap, "(\u2032\ufe3f\u2035\uff61)" + _0x59eex4 + "(|||\u275b\ufe35\u275b.)")
}

function sad7(_0x59eex4) {
    return applyCharMap(symbolsCharMap, "(.\ufe52\ufe20\u208b\ufe52\ufe21.) \uff9f\ud83d\ude33\u2639" + _0x59eex4 + "\u2666\ud83d\udc7a \uff08\uff08\u25cf\xB4\u2227\uff40\u25cf\uff09\uff09")
}

function cuteText1(_0x59eex4) {
    return applyCharMap(italicCharMap, "\ud83d\udc98\ud83c\udf80" + _0x59eex4 + "\ud83d\udc98\ud83c\udf80")
}

function cuteText2(_0x59eex4) {
    return applyCharMap(squiggle5CharMap, "\ud83d\udc3f \ud83c\udf80" + _0x59eex4 + " \ud83c\udf80 \ud83d\udc3f")
}

function cuteText3(_0x59eex4) {
    return applyCharMap(oldEnglishCharMap, "\ud83d\udc23\u2656" + _0x59eex4 + " \ud83c\udf80 \ud83c\udf52")
}

function cuteText4(_0x59eex4) {
    return applyCharMap(squiggleCharMap, "\ud83d\udc7b\u0d60" + _0x59eex4 + "\u2605\uff61 \ud83c\udf80")
}

function cuteText5(_0x59eex4) {
    return applyCharMap(cursiveCharMap, "\ud83c\udfaf\ud83c\udf67" + _0x59eex4 + "\ud83d\udc9c\ud83d\udc98")
}

function fullCrazy1(_0x59eex4) {
    return applyCharMap(boldCharMap, "\u25e5\ua9c1\u0f51 \u0950\u5350" + _0x59eex4 + " \u5350\u0950 \u0f4c\ua9c2\u25e4")
}

function fullCrazy2(_0x59eex4) {
    return applyCharMap(squiggleCharMap, "\u2022\u2022\xA4(`\xD7[\xA4 " + _0x59eex4 + " \xA4]\xD7\xB4)\xA4\u2022\u2022")
}

function fullCrazy3(_0x59eex4) {
    return applyCharMap(doubleStruckCharMap, "\u2014(\u2022\u2022\xF7[ " + _0x59eex4 + " ]\xF7\u2022\u2022)\u2014 ")
}

function fullCrazy4(_0x59eex4) {
    return applyCharMap(currencyCharMap, ".o0\xD7X\xD70o. " + _0x59eex4 + " .o0\xD7X\xD70o. ")
}

function fullCrazy5(_0x59eex4) {
    return applyCharMap(wideTextCharMap, "\u2022\u25cf\u25c9\u273f " + _0x59eex4 + " \u273f\u25c9\u25cf\u2022\u25e6")
}

function crazyWithFlourishOrSymbols3(_0x59eex4) {
    return applyCharMap(italicCharMap, "\u239d\u239d\u2727G\u0365O\u0363D\u036b\u2727\u23a0\u23a0" + _0x59eex4 + " \u239d\u239d\u2727G\u0365O\u0363D\u036b\u2727\u23a0\u23a0")
}

function crazyWithFlourishOrSymbols4(_0x59eex4) {
    return applyCharMap(asianStyle2CharMap, "\xAF_( \u0361\xB0 \u035c\u0296 \u0361\xB0)_/\xAF  " + _0x59eex4 + "\xAF_( \u0361\xB0 \u035c\u0296 \u0361\xB0)_/\xAF")
}

function crazyWithFlourishOrSymbols1(_0x59eex4) {
    return applyCharMap(italicCharMap, "\u2af7  " + _0x59eex4 + " \u2af8")
}

function crazyWithFlourishOrSymbols2(_0x59eex4) {
    return applyCharMap(boldItalicCharMap, "\xAB-(\xAF`v\xB4\xAF)-\xAB " + _0x59eex4 + " \xBB-(\xAF`v\xB4\xAF)-\xBB")
}

function crazyWithFlourishOrSymbols5(_0x59eex4) {
    return applyCharMap(squaresCharMap, "\u0b9c\u06e9\u06de\u06e9\u0b9c " + _0x59eex4 + "\u0b9c\u06e9\u06de\u06e9\u0b9c")
}

function wrap1(_0x59eex4) {
    return applyCharMap(boldCharMap, "\u2591\u2592\u2593\u2588\u25ba\u2500\u2550" + [_0x59eex4] + "\u2550\u2500\u25c4\u2588\u2593\u2592\u2591")
}

function wrap2(_0x59eex4) {
    return applyCharMap(cursiveCharMap, " \u2582 \u2584 \u2585 \u2586 \u2587 \u2588 " + [_0x59eex4] + "  \u2588 \u2587 \u2586 \u2585 \u2584 \u2582\u2581")
}

function wrap3(_0x59eex4) {
    return applyCharMap(boldItalicCharMap, "\u258c\u2502\u2588\u2551\u258c\u2551\u258c\u2551 " + [_0x59eex4] + " \u2551\u258c\u2551\u258c\u2551\u2588\u2502\u258c")
}

function wrap4(_0x59eex4) {
    return applyCharMap(neonCharMap, "\ua9c1\ud80c\ude88\ud808\udd9c" + [_0x59eex4] + "] \ud808\udd9c\ud80c\ude89\ua9c2")
}

function wrap5(_0x59eex4) {
    return applyCharMap(boldItalicCharMap, "\u255a\xBB\u2605\xAB\u255d " + [_0x59eex4] + "\u255a\xBB\u2605\xAB\u255d")
}
var newtext = {
    s1: {
        1: "&alpha;",
        2: "&#4310;",
        3: "&#392;",
        4: "&#1283;",
        5: "&#1213;",
        6: "&#989;",
        7: "&#608;",
        8: "&#1291;",
        9: "&iota;",
        10: "&#669;",
        11: "&#409;",
        12: "&#645;",
        13: "&#625;",
        14: "&#627;",
        15: "&sigma;",
        16: "&rho;",
        17: "&#985;",
        18: "&#638;",
        19: "&#642;",
        20: "&#410;",
        21: "&upsilon;",
        22: "&#651;",
        23: "&#623;",
        24: "x",
        25: "&#4327;",
        26: "&#549;",
        27: "A",
        28: "B",
        29: "C",
        30: "D",
        31: "E",
        32: "F",
        33: "G",
        34: "H",
        35: "I",
        36: "J",
        37: "K",
        38: "L",
        39: "M",
        40: "N",
        41: "O",
        42: "P",
        43: "Q",
        44: "R",
        45: "S",
        46: "T",
        47: "U",
        48: "V",
        49: "W",
        50: "X",
        51: "Y",
        52: "Z",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s2: {
        1: "&#41807;",
        2: "&#9837;",
        3: "&#9790;",
        4: "&#9687;",
        5: "&euro;",
        6: "&#988;",
        7: "&#10081;",
        8: "&#9796;",
        9: "&#9815;",
        10: "&#9834;",
        11: "&#1008;",
        12: "&#8627;",
        13: "&#9812;",
        14: "&#9835;",
        15: "&#8857;",
        16: "&rho;",
        17: "&#9773;",
        18: "&#9736;",
        19: "&#9442;",
        20: "&#9730;",
        21: "&#9739;",
        22: "&#10003;",
        23: "&omega;",
        24: "&#8984;",
        25: "&#9791;",
        26: "&#9761;",
        27: "&#41807;",
        28: "&#9837;",
        29: "&#9790;",
        30: "&#9687;",
        31: "&euro;",
        32: "&#988;",
        33: "&#10081;",
        34: "&#9796;",
        35: "&#9815;",
        36: "&#9834;",
        37: "&#1008;",
        38: "&#8627;",
        39: "&#9812;",
        40: "&#9835;",
        41: "&#8857;",
        42: "&rho;",
        43: "&#9773;",
        44: "&#9736;",
        45: "&#9442;",
        46: "&#9730;",
        47: "&#9739;",
        48: "&#10003;",
        49: "&omega;",
        50: "&#8984;",
        51: "&#9791;",
        52: "&#9761;",
        53: "&#10122;",
        54: "&#10123;",
        55: "&#10124;",
        56: "&#10125;",
        57: "&#10126;",
        58: "&#10127;",
        59: "&#10128;",
        60: "&#10129;",
        61: "&#10130;",
        62: "&#9450;"
    },
    s3: {
        1: "&#258;",
        2: "&beta;",
        3: "&#268;",
        4: "&#270;",
        5: "&#276;",
        6: "&#358;",
        7: "&#286;",
        8: "&#292;",
        9: "&#296;",
        10: "&#308;",
        11: "&#310;",
        12: "&#313;",
        13: "&#1052;",
        14: "&#323;",
        15: "&#336;",
        16: "&#1056;",
        17: "Q",
        18: "&#340;",
        19: "&#346;",
        20: "&#356;",
        21: "&Uacute;",
        22: "V",
        23: "&#372;",
        24: "&#1046;",
        25: "&#374;",
        26: "&#377;",
        27: "&#258;",
        28: "&beta;",
        29: "&#268;",
        30: "&#270;",
        31: "&#276;",
        32: "&#358;",
        33: "&#286;",
        34: "&#292;",
        35: "&#296;",
        36: "&#308;",
        37: "&#310;",
        38: "&#313;",
        39: "&#1052;",
        40: "&#323;",
        41: "&#336;",
        42: "&#1056;",
        43: "Q",
        44: "&#340;",
        45: "&#346;",
        46: "&#356;",
        47: "&Uacute;",
        48: "V",
        49: "&#372;",
        50: "&#1046;",
        51: "&#374;",
        52: "&#377;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s4: {
        1: "&#592;",
        2: "q",
        3: "&#596;",
        4: "p",
        5: "&#477;",
        6: "&#607;",
        7: "&#387;",
        8: "&#613;",
        9: "&#7433;",
        10: "&#638;",
        11: "&#670;",
        12: "l",
        13: "&#623;",
        14: "u",
        15: "o",
        16: "d",
        17: "b",
        18: "&#633;",
        19: "s",
        20: "&#647;",
        21: "n",
        22: "&#652;",
        23: "&#653;",
        24: "x",
        25: "&#654;",
        26: "z",
        27: "&#592;",
        28: "q",
        29: "&#596;",
        30: "p",
        31: "&#477;",
        32: "&#607;",
        33: "&#387;",
        34: "&#613;",
        35: "&#7433;",
        36: "&#638;",
        37: "&#670;",
        38: "l",
        39: "&#623;",
        40: "u",
        41: "o",
        42: "d",
        43: "b",
        44: "&#633;",
        45: "s",
        46: "&#647;",
        47: "n",
        48: "&#652;",
        49: "&#653;",
        50: "x",
        51: "&#654;",
        52: "z",
        53: "&#406;",
        54: "&#4357;",
        55: "&#400;",
        56: "&#12579;",
        57: "&#987;",
        58: "9",
        59: "&#12581;",
        60: "8",
        61: "6",
        62: "0"
    },
    s5: {
        1: "&Delta;",
        2: "&beta;",
        3: "&#262;",
        4: "&#272;",
        5: "&euro;",
        6: "&#8355;",
        7: "&#484;",
        8: "&#294;",
        9: "&#407;",
        10: "&#308;",
        11: "&#1180;",
        12: "&#321;",
        13: "&Mu;",
        14: "&#327;",
        15: "&Oslash;",
        16: "&#420;",
        17: "&Omega;",
        18: "&#344;",
        19: "&#350;",
        20: "&#358;",
        21: "&#7918;",
        22: "V",
        23: "&#372;",
        24: "&#1046;",
        25: "&yen;",
        26: "&#381;",
        27: "&Delta;",
        28: "&beta;",
        29: "&#262;",
        30: "&#272;",
        31: "&euro;",
        32: "&#8355;",
        33: "&#484;",
        34: "&#294;",
        35: "&#407;",
        36: "&#308;",
        37: "&#1180;",
        38: "&#321;",
        39: "&Mu;",
        40: "&#327;",
        41: "&Oslash;",
        42: "&#420;",
        43: "&Omega;",
        44: "&#344;",
        45: "&#350;",
        46: "&#358;",
        47: "&#7918;",
        48: "V",
        49: "&#372;",
        50: "&#1046;",
        51: "&yen;",
        52: "&#381;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s6: {
        1: "&alpha;",
        2: "&#595;",
        3: "&#2798;",
        4: "&part;",
        5: "&epsilon;",
        6: "&fnof;",
        7: "&#608;",
        8: "&#614;",
        9: "&#3648;",
        10: "&#669;",
        11: "&#1185;",
        12: "&#8467;",
        13: "&#625;",
        14: "&#627;",
        15: "&sigma;",
        16: "&rho;",
        17: "&phi;",
        18: "&#2792;",
        19: "&#3619;",
        20: "&#429;",
        21: "&micro;",
        22: "&#1141;",
        23: "&omega;",
        24: "&#1488;",
        25: "&#4327;",
        26: "&#438;",
        27: "&alpha;",
        28: "&#595;",
        29: "&#2798;",
        30: "&part;",
        31: "&epsilon;",
        32: "&fnof;",
        33: "&#608;",
        34: "&#614;",
        35: "&#3648;",
        36: "&#669;",
        37: "&#1185;",
        38: "&#8467;",
        39: "&#625;",
        40: "&#627;",
        41: "&sigma;",
        42: "&rho;",
        43: "&phi;",
        44: "&#2792;",
        45: "&#3619;",
        46: "&#429;",
        47: "&micro;",
        48: "&#1141;",
        49: "&omega;",
        50: "&#1488;",
        51: "&#4327;",
        52: "&#438;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s7: {
        1: "&#5609;",
        2: "&#5623;",
        3: "&#5205;",
        4: "&#5610;",
        5: "&#5620;",
        6: "&#5556;",
        7: "&#484;",
        8: "&#5500;",
        9: "&#5029;",
        10: "&#5262;",
        11: "&#5845;",
        12: "&#5290;",
        13: "&#5616;",
        14: "&#5198;",
        15: "&#5597;",
        16: "&#5229;",
        17: "&#586;",
        18: "&#5511;",
        19: "&#5397;",
        20: "&#19973;",
        21: "&#5196;",
        22: "&#5167;",
        23: "&#5615;",
        24: "&#5741;",
        25: "&#435;",
        26: "&#20057;",
        27: "&#5609;",
        28: "&#5623;",
        29: "&#5205;",
        30: "&#5610;",
        31: "&#5620;",
        32: "&#5556;",
        33: "&#484;",
        34: "&#5500;",
        35: "&#5029;",
        36: "&#5262;",
        37: "&#5845;",
        38: "&#5290;",
        39: "&#5616;",
        40: "&#5198;",
        41: "&#5597;",
        42: "&#5229;",
        43: "&#586;",
        44: "&#5511;",
        45: "&#5397;",
        46: "&#19973;",
        47: "&#5196;",
        48: "&#5167;",
        49: "&#5615;",
        50: "&#5741;",
        51: "&#435;",
        52: "&#20057;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s8: {
        1: "&#4315;",
        2: "&#4329;",
        3: "&#4308;",
        4: "&#4331;",
        5: "&#4318;",
        6: "f",
        7: "&#4330;",
        8: "h",
        9: "&#7990;",
        10: "&#4325;",
        11: "&kappa;",
        12: "l",
        13: "&#4317;",
        14: "&#8134;",
        15: "&otilde;",
        16: "&rho;",
        17: "&#4306;",
        18: "&Gamma;",
        19: "&#4336;",
        20: "&#3923;",
        21: "&upsilon;",
        22: "&#8023;",
        23: "w",
        24: "&#4335;",
        25: "&#4327;",
        26: "&#576;",
        27: "&#4315;",
        28: "&#4329;",
        29: "&#4308;",
        30: "&#4331;",
        31: "&#4318;",
        32: "f",
        33: "&#4330;",
        34: "h",
        35: "&#7990;",
        36: "&#4325;",
        37: "&kappa;",
        38: "l",
        39: "&#4317;",
        40: "&#8134;",
        41: "&otilde;",
        42: "&rho;",
        43: "&#4306;",
        44: "&Gamma;",
        45: "&#4336;",
        46: "&#3923;",
        47: "&upsilon;",
        48: "&#8023;",
        49: "w",
        50: "&#4335;",
        51: "&#4327;",
        52: "&#576;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s9: {
        1: "&#940;",
        2: "&#1074;",
        3: "&sigmaf;",
        4: "&#545;",
        5: "&#941;",
        6: "&#1171;",
        7: "&#291;",
        8: "&#295;",
        9: "&#943;",
        10: "&#1112;",
        11: "&#311;",
        12: "&#315;",
        13: "&#1084;",
        14: "&#942;",
        15: "&#972;",
        16: "&rho;",
        17: "q",
        18: "&#341;",
        19: "&#351;",
        20: "&#355;",
        21: "&ugrave;",
        22: "&nu;",
        23: "&#974;",
        24: "x",
        25: "&#1095;",
        26: "&#382;",
        27: "&#940;",
        28: "&#1074;",
        29: "&sigmaf;",
        30: "&#545;",
        31: "&#941;",
        32: "&#1171;",
        33: "&#291;",
        34: "&#295;",
        35: "&#943;",
        36: "&#1112;",
        37: "&#311;",
        38: "&#315;",
        39: "&#1084;",
        40: "&#942;",
        41: "&#972;",
        42: "&rho;",
        43: "q",
        44: "&#341;",
        45: "&#351;",
        46: "&#355;",
        47: "&ugrave;",
        48: "&nu;",
        49: "&#974;",
        50: "x",
        51: "&#1095;",
        52: "&#382;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s10: {
        1: "&#41707;",
        2: "&#41155;",
        3: "&#41976;",
        4: "&#41045;",
        5: "&#41823;",
        6: "&#41240;",
        7: "&#41037;",
        8: "&#42075;",
        9: "&#41105;",
        10: "&#41005;",
        11: "&#40983;",
        12: "&#42130;",
        13: "&#41042;",
        14: "&#41081;",
        15: "&#41346;",
        16: "&#41571;",
        17: "&#41080;",
        18: "&#42131;",
        19: "&#41754;",
        20: "&#42181;",
        21: "&#41991;",
        22: "&#41949;",
        23: "&#41296;",
        24: "&#41427;",
        25: "&#42015;",
        26: "&#41076;",
        27: "&#41707;",
        28: "&#41155;",
        29: "&#41976;",
        30: "&#41045;",
        31: "&#41823;",
        32: "&#41240;",
        33: "&#41037;",
        34: "&#42075;",
        35: "&#41105;",
        36: "&#41005;",
        37: "&#40983;",
        38: "&#42130;",
        39: "&#41042;",
        40: "&#41081;",
        41: "&#41346;",
        42: "&#41571;",
        43: "&#41080;",
        44: "&#42131;",
        45: "&#41754;",
        46: "&#42181;",
        47: "&#41991;",
        48: "&#41949;",
        49: "&#41296;",
        50: "&#41427;",
        51: "&#42015;",
        52: "&#41076;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s11: {
        1: "&#1044;",
        2: "&#1041;",
        3: "C",
        4: "D",
        5: "&Xi;",
        6: "F",
        7: "G",
        8: "H",
        9: "I",
        10: "J",
        11: "&#1180;",
        12: "L",
        13: "M",
        14: "&#1048;",
        15: "&#1060;",
        16: "P",
        17: "&#490;",
        18: "&#1071;",
        19: "S",
        20: "&Gamma;",
        21: "&#1062;",
        22: "V",
        23: "&#1065;",
        24: "&#1046;",
        25: "&#1059;",
        26: "Z",
        27: "&#1044;",
        28: "&#1041;",
        29: "C",
        30: "D",
        31: "&Xi;",
        32: "F",
        33: "G",
        34: "H",
        35: "I",
        36: "J",
        37: "&#1180;",
        38: "L",
        39: "M",
        40: "&#1048;",
        41: "&#1060;",
        42: "P",
        43: "&#490;",
        44: "&#1071;",
        45: "S",
        46: "&Gamma;",
        47: "&#1062;",
        48: "V",
        49: "&#1065;",
        50: "&#1046;",
        51: "&#1059;",
        52: "Z",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s12: {
        1: "&#41807;",
        2: "&#41731;",
        3: "&#41555;",
        4: "&#41016;",
        5: "&#41823;",
        6: "&#41863;",
        7: "&#41029;",
        8: "&#41157;",
        9: "&#40996;",
        10: "&#41005;",
        11: "&#40984;",
        12: "&#42130;",
        13: "&#41141;",
        14: "&#41508;",
        15: "&#41126;",
        16: "&#41571;",
        17: "&#41392;",
        18: "&#41706;",
        19: "&#41751;",
        20: "&#42180;",
        21: "&#40974;",
        22: "&#41204;",
        23: "&#41295;",
        24: "&#41660;",
        25: "&#41769;",
        26: "&#41076;",
        27: "&#41807;",
        28: "&#41731;",
        29: "&#41555;",
        30: "&#41016;",
        31: "&#41823;",
        32: "&#41863;",
        33: "&#41029;",
        34: "&#41157;",
        35: "&#40996;",
        36: "&#41005;",
        37: "&#40984;",
        38: "&#42130;",
        39: "&#41141;",
        40: "&#41508;",
        41: "&#41126;",
        42: "&#41571;",
        43: "&#41392;",
        44: "&#41706;",
        45: "&#41751;",
        46: "&#42180;",
        47: "&#40974;",
        48: "&#41204;",
        49: "&#41295;",
        50: "&#41660;",
        51: "&#41769;",
        52: "&#41076;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s13: {
        1: "&#41708;",
        2: "&#41203;",
        3: "&#41556;",
        4: "&#42159;",
        5: "&#41922;",
        6: "&#41648;",
        7: "&#41804;",
        8: "&#41053;",
        9: "&#42128;",
        10: "&#42171;",
        11: "&#40984;",
        12: "&#42130;",
        13: "&#41141;",
        14: "&#41674;",
        15: "&#41266;",
        16: "&#41571;",
        17: "&#41392;",
        18: "&#41706;",
        19: "&#41433;",
        20: "&#42180;",
        21: "&#42148;",
        22: "&#42150;",
        23: "&#41296;",
        24: "&#41575;",
        25: "&#41766;",
        26: "&#41076;",
        27: "&#41708;",
        28: "&#41203;",
        29: "&#41556;",
        30: "&#42159;",
        31: "&#41922;",
        32: "&#41648;",
        33: "&#41804;",
        34: "&#41053;",
        35: "&#42128;",
        36: "&#42171;",
        37: "&#40984;",
        38: "&#42130;",
        39: "&#41141;",
        40: "&#41674;",
        41: "&#41266;",
        42: "&#41571;",
        43: "&#41392;",
        44: "&#41706;",
        45: "&#41433;",
        46: "&#42180;",
        47: "&#42148;",
        48: "&#42150;",
        49: "&#41296;",
        50: "&#41575;",
        51: "&#41766;",
        52: "&#41076;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s14: {
        1: "&Lambda;",
        2: "&#998;",
        3: "&#12552;",
        4: "&ETH;",
        5: "&#400;",
        6: "F",
        7: "&#403;",
        8: "&#1085;",
        9: "&#618;",
        10: "&#65420;",
        11: "&#1178;",
        12: "&#321;",
        13: "&#3057;",
        14: "&#1051;",
        15: "&Oslash;",
        16: "&thorn;",
        17: "&#1192;",
        18: "&#23610;",
        19: "&#12425;",
        20: "&#356;",
        21: "&#1062;",
        22: "&#404;",
        23: "&#412;",
        24: "&chi;",
        25: "&#996;",
        26: "&#7828;",
        27: "&Lambda;",
        28: "&#998;",
        29: "&#12552;",
        30: "&ETH;",
        31: "&#400;",
        32: "F",
        33: "&#403;",
        34: "&#1085;",
        35: "&#618;",
        36: "&#65420;",
        37: "&#1178;",
        38: "&#321;",
        39: "&#3057;",
        40: "&#1051;",
        41: "&Oslash;",
        42: "&thorn;",
        43: "&#1192;",
        44: "&#23610;",
        45: "&#12425;",
        46: "&#356;",
        47: "&#1062;",
        48: "&#404;",
        49: "&#412;",
        50: "&chi;",
        51: "&#996;",
        52: "&#7828;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s15: {
        1: "&#411;",
        2: "&#385;",
        3: "&#391;",
        4: "&#394;",
        5: "&#1028;",
        6: "&#401;",
        7: "&#403;",
        8: "&#1223;",
        9: "&#406;",
        10: "&#646;",
        11: "&#408;",
        12: "&#1340;",
        13: "M",
        14: "&#413;",
        15: "&#416;",
        16: "&#420;",
        17: "&#418;",
        18: "&#422;",
        19: "&#423;",
        20: "&#428;",
        21: "&#434;",
        22: "&#404;",
        23: "&#412;",
        24: "&#1202;",
        25: "&#435;",
        26: "&#548;",
        27: "&#411;",
        28: "&#385;",
        29: "&#391;",
        30: "&#394;",
        31: "&#1028;",
        32: "&#401;",
        33: "&#403;",
        34: "&#1223;",
        35: "&#406;",
        36: "&#646;",
        37: "&#408;",
        38: "&#1340;",
        39: "M",
        40: "&#413;",
        41: "&#416;",
        42: "&#420;",
        43: "&#418;",
        44: "&#422;",
        45: "&#423;",
        46: "&#428;",
        47: "&#434;",
        48: "&#404;",
        49: "&#412;",
        50: "&#1202;",
        51: "&#435;",
        52: "&#548;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s16: {
        1: "&#41074;",
        2: "&#41712;",
        3: "&#41007;",
        4: "&#41120;",
        5: "&#41532;",
        6: "&#41246;",
        7: "&#41029;",
        8: "&#41833;",
        9: "&#41105;",
        10: "&#42171;",
        11: "&#40983;",
        12: "&#42130;",
        13: "&#41141;",
        14: "&#41674;",
        15: "&#41126;",
        16: "&#41571;",
        17: "&#41079;",
        18: "&#41733;",
        19: "&#41754;",
        20: "&#41686;",
        21: "&#41991;",
        22: "&#41008;",
        23: "&#41295;",
        24: "&#41426;",
        25: "&#42014;",
        26: "&#41076;",
        27: "&#41074;",
        28: "&#41712;",
        29: "&#41007;",
        30: "&#41120;",
        31: "&#41532;",
        32: "&#41246;",
        33: "&#41029;",
        34: "&#41833;",
        35: "&#41105;",
        36: "&#42171;",
        37: "&#40983;",
        38: "&#42130;",
        39: "&#41141;",
        40: "&#41674;",
        41: "&#41126;",
        42: "&#41571;",
        43: "&#41079;",
        44: "&#41733;",
        45: "&#41754;",
        46: "&#41686;",
        47: "&#41991;",
        48: "&#41008;",
        49: "&#41295;",
        50: "&#41426;",
        51: "&#42014;",
        52: "&#41076;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s17: {
        1: "&#1337;",
        2: "&#1349;",
        3: "&#1351;",
        4: "&#1338;",
        5: "&#541;",
        6: "&#1330;",
        7: "&#1331;",
        8: "&#615;",
        9: "&#639;",
        10: "&#669;",
        11: "&#409;",
        12: "&#645;",
        13: "&#653;",
        14: "&#1356;",
        15: "&#1342;",
        16: "&rho;",
        17: "&phi;",
        18: "&#1360;",
        19: "&#1359;",
        20: "&#1333;",
        21: "&#1348;",
        22: "&#1506;",
        23: "&#1377;",
        24: "&#1347;",
        25: "&#1358;",
        26: "&#1344;",
        27: "&#1337;",
        28: "&#1349;",
        29: "&#1351;",
        30: "&#1338;",
        31: "&#541;",
        32: "&#1330;",
        33: "&#1331;",
        34: "&#615;",
        35: "&#639;",
        36: "&#669;",
        37: "&#409;",
        38: "&#645;",
        39: "&#653;",
        40: "&#1356;",
        41: "&#1342;",
        42: "&rho;",
        43: "&phi;",
        44: "&#1360;",
        45: "&#1359;",
        46: "&#1333;",
        47: "&#1348;",
        48: "&#1506;",
        49: "&#1377;",
        50: "&#1347;",
        51: "&#1358;",
        52: "&#1344;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s18: {
        1: "&alpha;",
        2: "&szlig;",
        3: "&sigmaf;",
        4: "d",
        5: "&epsilon;",
        6: "&fnof;",
        7: "g",
        8: "h",
        9: "&iuml;",
        10: "&#1397;",
        11: "&kappa;",
        12: "&#65434;",
        13: "m",
        14: "&eta;",
        15: "&oplus;",
        16: "p",
        17: "&Omega;",
        18: "r",
        19: "&scaron;",
        20: "&dagger;",
        21: "u",
        22: "&forall;",
        23: "&omega;",
        24: "x",
        25: "&psi;",
        26: "z",
        27: "&alpha;",
        28: "&szlig;",
        29: "&sigmaf;",
        30: "d",
        31: "&epsilon;",
        32: "&fnof;",
        33: "g",
        34: "h",
        35: "&iuml;",
        36: "&#1397;",
        37: "&kappa;",
        38: "&#65434;",
        39: "m",
        40: "&eta;",
        41: "&oplus;",
        42: "p",
        43: "&Omega;",
        44: "r",
        45: "&scaron;",
        46: "&dagger;",
        47: "u",
        48: "&forall;",
        49: "&omega;",
        50: "x",
        51: "&psi;",
        52: "z",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s19: {
        1: "&#3588;",
        2: "&#4330;",
        3: "&#2414;",
        4: "&#4331;",
        5: "&#2799;",
        6: "&#1330;",
        7: "&#2797;",
        8: "&#1210;",
        9: "&#639;",
        10: "&#646;",
        11: "&#1179;",
        12: "&#1350;",
        13: "&#625;",
        14: "&#1352;",
        15: "&#2790;",
        16: "&#447;",
        17: "&#1193;",
        18: "&#1360;",
        19: "&sigmaf;",
        20: "&#2670;",
        21: "&upsilon;",
        22: "&#3182;",
        23: "&omega;",
        24: "&#2794;",
        25: "&#1506;",
        26: "&#2749;",
        27: "&#3588;",
        28: "&#4330;",
        29: "&#2414;",
        30: "&#4331;",
        31: "&#2799;",
        32: "&#1330;",
        33: "&#2797;",
        34: "&#1210;",
        35: "&#639;",
        36: "&#646;",
        37: "&#1179;",
        38: "&#1350;",
        39: "&#625;",
        40: "&#1352;",
        41: "&#2790;",
        42: "&#447;",
        43: "&#1193;",
        44: "&#1360;",
        45: "&sigmaf;",
        46: "&#2670;",
        47: "&upsilon;",
        48: "&#3182;",
        49: "&omega;",
        50: "&#2794;",
        51: "&#1506;",
        52: "&#2749;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s20: {
        1: "&#1072;",
        2: "&#1073;",
        3: "c",
        4: "&#1076;",
        5: "&#1105;",
        6: "f",
        7: "g",
        8: "&#1085;",
        9: "&#1111;",
        10: "j",
        11: "&#1082;",
        12: "&#1075;",
        13: "&#1131;",
        14: "&#1087;",
        15: "&#1139;",
        16: "p",
        17: "&#1092;",
        18: "&#1103;",
        19: "$",
        20: "&#1090;",
        21: "&#1094;",
        22: "&#1141;",
        23: "&#1097;",
        24: "&#1078;",
        25: "&#1095;",
        26: "&#1079;",
        27: "&#1040;",
        28: "&#1041;",
        29: "C",
        30: "&#1044;",
        31: "&#1028;",
        32: "F",
        33: "G",
        34: "H",
        35: "&#1031;",
        36: "J",
        37: "&#1050;",
        38: "&#1043;",
        39: "&#1130;",
        40: "&#1049;",
        41: "&#1138;",
        42: "P",
        43: "&#1060;",
        44: "&#1071;",
        45: "$",
        46: "T",
        47: "&#1062;",
        48: "&#1140;",
        49: "&#1064;",
        50: "&#1046;",
        51: "&#1063;",
        52: "&#1047;",
        53: "1",
        54: "2",
        55: "3",
        56: "4",
        57: "5",
        58: "6",
        59: "7",
        60: "8",
        61: "9",
        62: "0"
    },
    s21: {
        1: "a&#830;",
        2: "b&#830;",
        3: "c&#830;",
        4: "d&#830;",
        5: "e&#830;",
        6: "f&#830;",
        7: "g&#830;",
        8: "h&#830;",
        9: "i&#830;",
        10: "j&#830;",
        11: "k&#830;",
        12: "l&#830;",
        13: "m&#830;",
        14: "n&#830;",
        15: "o&#830;",
        16: "p&#830;",
        17: "q&#830;",
        18: "r&#830;",
        19: "s&#830;",
        20: "t&#830;",
        21: "u&#830;",
        22: "v&#830;",
        23: "w&#830;",
        24: "x&#830;",
        25: "y&#830;",
        26: "z&#830;",
        27: "A&#830;",
        28: "B&#830;",
        29: "C&#830;",
        30: "D&#830;",
        31: "E&#830;",
        32: "F&#830;",
        33: "G&#830;",
        34: "H&#830;",
        35: "I&#830;",
        36: "J&#830;",
        37: "K&#830;",
        38: "L&#830;",
        39: "M&#830;",
        40: "N&#830;",
        41: "O&#830;",
        42: "P&#830;",
        43: "Q&#830;",
        44: "R&#830;",
        45: "S&#830;",
        46: "T&#830;",
        47: "U&#830;",
        48: "V&#830;",
        49: "W&#830;",
        50: "X&#830;",
        51: "Y&#830;",
        52: "Z&#830;",
        53: "1&#830;",
        54: "2&#830;",
        55: "3&#830;",
        56: "4&#830;",
        57: "5&#830;",
        58: "6&#830;",
        59: "7&#830;",
        60: "8&#830;",
        61: "9&#830;",
        62: "0&#830;"
    },
    s22: {
        1: "a&#838;",
        2: "b&#838;",
        3: "c&#838;",
        4: "d&#838;",
        5: "e&#838;",
        6: "f&#838;",
        7: "g&#838;",
        8: "h&#838;",
        9: "i&#838;",
        10: "j&#838;",
        11: "k&#838;",
        12: "l&#838;",
        13: "m&#838;",
        14: "n&#838;",
        15: "o&#838;",
        16: "p&#838;",
        17: "q&#838;",
        18: "r&#838;",
        19: "s&#838;",
        20: "t&#838;",
        21: "u&#838;",
        22: "v&#838;",
        23: "w&#838;",
        24: "x&#838;",
        25: "y&#838;",
        26: "z&#838;",
        27: "A&#838;",
        28: "B&#838;",
        29: "C&#838;",
        30: "D&#838;",
        31: "E&#838;",
        32: "F&#838;",
        33: "G&#838;",
        34: "H&#838;",
        35: "I&#838;",
        36: "J&#838;",
        37: "K&#838;",
        38: "L&#838;",
        39: "M&#838;",
        40: "N&#838;",
        41: "O&#838;",
        42: "P&#838;",
        43: "Q&#838;",
        44: "R&#838;",
        45: "S&#838;",
        46: "T&#838;",
        47: "U&#838;",
        48: "V&#838;",
        49: "W&#838;",
        50: "X&#838;",
        51: "Y&#838;",
        52: "Z&#838;",
        53: "1&#838;",
        54: "2&#838;",
        55: "3&#838;",
        56: "4&#838;",
        57: "5&#838;",
        58: "6&#838;",
        59: "7&#838;",
        60: "8&#838;",
        61: "9&#838;",
        62: "0&#838;"
    },
    s23: {
        1: "a&#826;",
        2: "b&#826;",
        3: "c&#826;",
        4: "d&#826;",
        5: "e&#826;",
        6: "f&#826;",
        7: "g&#826;",
        8: "h&#826;",
        9: "i&#826;",
        10: "j&#826;",
        11: "k&#826;",
        12: "l&#826;",
        13: "m&#826;",
        14: "n&#826;",
        15: "o&#826;",
        16: "p&#826;",
        17: "q&#826;",
        18: "r&#826;",
        19: "s&#826;",
        20: "t&#826;",
        21: "u&#826;",
        22: "v&#826;",
        23: "w&#826;",
        24: "x&#826;",
        25: "y&#826;",
        26: "z&#826;",
        27: "A&#826;",
        28: "B&#826;",
        29: "C&#826;",
        30: "D&#826;",
        31: "E&#826;",
        32: "F&#826;",
        33: "G&#826;",
        34: "H&#826;",
        35: "I&#826;",
        36: "J&#826;",
        37: "K&#826;",
        38: "L&#826;",
        39: "M&#826;",
        40: "N&#826;",
        41: "O&#826;",
        42: "P&#826;",
        43: "Q&#826;",
        44: "R&#826;",
        45: "S&#826;",
        46: "T&#826;",
        47: "U&#826;",
        48: "V&#826;",
        49: "W&#826;",
        50: "X&#826;",
        51: "Y&#826;",
        52: "Z&#826;",
        53: "1&#826;",
        54: "2&#826;",
        55: "3&#826;",
        56: "4&#826;",
        57: "5&#826;",
        58: "6&#826;",
        59: "7&#826;",
        60: "8&#826;",
        61: "9&#826;",
        62: "0&#826;"
    },
    s24: {
        1: "a&#857;",
        2: "b&#857;",
        3: "c&#857;",
        4: "d&#857;",
        5: "e&#857;",
        6: "f&#857;",
        7: "g&#857;",
        8: "h&#857;",
        9: "i&#857;",
        10: "j&#857;",
        11: "k&#857;",
        12: "l&#857;",
        13: "m&#857;",
        14: "n&#857;",
        15: "o&#857;",
        16: "p&#857;",
        17: "q&#857;",
        18: "r&#857;",
        19: "s&#857;",
        20: "t&#857;",
        21: "u&#857;",
        22: "v&#857;",
        23: "w&#857;",
        24: "x&#857;",
        25: "y&#857;",
        26: "z&#857;",
        27: "A&#857;",
        28: "B&#857;",
        29: "C&#857;",
        30: "D&#857;",
        31: "E&#857;",
        32: "F&#857;",
        33: "G&#857;",
        34: "H&#857;",
        35: "I&#857;",
        36: "J&#857;",
        37: "K&#857;",
        38: "L&#857;",
        39: "M&#857;",
        40: "N&#857;",
        41: "O&#857;",
        42: "P&#857;",
        43: "Q&#857;",
        44: "R&#857;",
        45: "S&#857;",
        46: "T&#857;",
        47: "U&#857;",
        48: "V&#857;",
        49: "W&#857;",
        50: "X&#857;",
        51: "Y&#857;",
        52: "Z&#857;",
        53: "1&#857;",
        54: "2&#857;",
        55: "3&#857;",
        56: "4&#857;",
        57: "5&#857;",
        58: "6&#857;",
        59: "7&#857;",
        60: "8&#857;",
        61: "9&#857;",
        62: "0&#857;"
    },
    s25: {
        1: "a&#799;",
        2: "b&#799;",
        3: "c&#799;",
        4: "d&#799;",
        5: "e&#799;",
        6: "f&#799;",
        7: "g&#799;",
        8: "h&#799;",
        9: "i&#799;",
        10: "j&#799;",
        11: "k&#799;",
        12: "l&#799;",
        13: "m&#799;",
        14: "n&#799;",
        15: "o&#799;",
        16: "p&#799;",
        17: "q&#799;",
        18: "r&#799;",
        19: "s&#799;",
        20: "t&#799;",
        21: "u&#799;",
        22: "v&#799;",
        23: "w&#799;",
        24: "x&#799;",
        25: "y&#799;",
        26: "z&#799;",
        27: "A&#799;",
        28: "B&#799;",
        29: "C&#799;",
        30: "D&#799;",
        31: "E&#799;",
        32: "F&#799;",
        33: "G&#799;",
        34: "H&#799;",
        35: "I&#799;",
        36: "J&#799;",
        37: "K&#799;",
        38: "L&#799;",
        39: "M&#799;",
        40: "N&#799;",
        41: "O&#799;",
        42: "P&#799;",
        43: "Q&#799;",
        44: "R&#799;",
        45: "S&#799;",
        46: "T&#799;",
        47: "U&#799;",
        48: "V&#799;",
        49: "W&#799;",
        50: "X&#799;",
        51: "Y&#799;",
        52: "Z&#799;",
        53: "1&#799;",
        54: "2&#799;",
        55: "3&#799;",
        56: "4&#799;",
        57: "5&#799;",
        58: "6&#799;",
        59: "7&#799;",
        60: "8&#799;",
        61: "9&#799;",
        62: "0&#799;"
    },
    s26: {
        1: "a&#846;",
        2: "b&#846;",
        3: "c&#846;",
        4: "d&#846;",
        5: "e&#846;",
        6: "f&#846;",
        7: "g&#846;",
        8: "h&#846;",
        9: "i&#846;",
        10: "j&#846;",
        11: "k&#846;",
        12: "l&#846;",
        13: "m&#846;",
        14: "n&#846;",
        15: "o&#846;",
        16: "p&#846;",
        17: "q&#846;",
        18: "r&#846;",
        19: "s&#846;",
        20: "t&#846;",
        21: "u&#846;",
        22: "v&#846;",
        23: "w&#846;",
        24: "x&#846;",
        25: "y&#846;",
        26: "z&#846;",
        27: "A&#846;",
        28: "B&#846;",
        29: "C&#846;",
        30: "D&#846;",
        31: "E&#846;",
        32: "F&#846;",
        33: "G&#846;",
        34: "H&#846;",
        35: "I&#846;",
        36: "J&#846;",
        37: "K&#846;",
        38: "L&#846;",
        39: "M&#846;",
        40: "N&#846;",
        41: "O&#846;",
        42: "P&#846;",
        43: "Q&#846;",
        44: "R&#846;",
        45: "S&#846;",
        46: "T&#846;",
        47: "U&#846;",
        48: "V&#846;",
        49: "W&#846;",
        50: "X&#846;",
        51: "Y&#846;",
        52: "Z&#846;",
        53: "1&#846;",
        54: "2&#846;",
        55: "3&#846;",
        56: "4&#846;",
        57: "5&#846;",
        58: "6&#846;",
        59: "7&#846;",
        60: "8&#846;",
        61: "9&#846;",
        62: "0&#846;"
    },
    s27: {
        1: "a&#829;&#851;",
        2: "b&#829;&#851;",
        3: "c&#829;&#851;",
        4: "d&#829;&#851;",
        5: "e&#829;&#851;",
        6: "f&#829;&#851;",
        7: "g&#829;&#851;",
        8: "h&#829;&#851;",
        9: "i&#829;&#851;",
        10: "j&#829;&#851;",
        11: "k&#829;&#851;",
        12: "l&#829;&#851;",
        13: "m&#829;&#851;",
        14: "n&#829;&#851;",
        15: "o&#829;&#851;",
        16: "p&#829;&#851;",
        17: "q&#829;&#851;",
        18: "r&#829;&#851;",
        19: "s&#829;&#851;",
        20: "t&#829;&#851;",
        21: "u&#829;&#851;",
        22: "v&#829;&#851;",
        23: "w&#829;&#851;",
        24: "x&#829;&#851;",
        25: "y&#829;&#851;",
        26: "z&#829;&#851;",
        27: "A&#829;&#851;",
        28: "B&#829;&#851;",
        29: "C&#829;&#851;",
        30: "D&#829;&#851;",
        31: "E&#829;&#851;",
        32: "F&#829;&#851;",
        33: "G&#829;&#851;",
        34: "H&#829;&#851;",
        35: "I&#829;&#851;",
        36: "J&#829;&#851;",
        37: "K&#829;&#851;",
        38: "L&#829;&#851;",
        39: "M&#829;&#851;",
        40: "N&#829;&#851;",
        41: "O&#829;&#851;",
        42: "P&#829;&#851;",
        43: "Q&#829;&#851;",
        44: "R&#829;&#851;",
        45: "S&#829;&#851;",
        46: "T&#829;&#851;",
        47: "U&#829;&#851;",
        48: "V&#829;&#851;",
        49: "W&#829;&#851;",
        50: "X&#829;&#851;",
        51: "Y&#829;&#851;",
        52: "Z&#829;&#851;",
        53: "1&#829;&#851;",
        54: "2&#829;&#851;",
        55: "3&#829;&#851;",
        56: "4&#829;&#851;",
        57: "5&#829;&#851;",
        58: "6&#829;&#851;",
        59: "7&#829;&#851;",
        60: "8&#829;&#851;",
        61: "9&#829;&#851;",
        62: "0&#829;&#851;"
    },
    s29: {
        1: "&#120458;&#823;",
        2: "&#120459;&#823;",
        3: "&#120460;&#823;",
        4: "&#120461;&#823;",
        5: "&#120462;&#823;",
        6: "&#120463;&#823;",
        7: "&#120464;&#823;",
        8: "&#120465;&#823;",
        9: "&#120466;&#823;",
        10: "&#120467;&#823;",
        11: "&#120468;&#823;",
        12: "&#120469;&#823;",
        13: "&#120470;&#823;",
        14: "&#120471;&#823;",
        15: "&#120472;&#823;",
        16: "&#120473;&#823;",
        17: "&#120474;&#823;",
        18: "&#120475;&#823;",
        19: "&#120476;&#823;",
        20: "&#120477;&#823;",
        21: "&#120478;&#823;",
        22: "&#120479;&#823;",
        23: "&#120480;&#823;",
        24: "&#120481;&#823;",
        25: "&#120482;&#823;",
        26: "&#120483;&#823;",
        27: "&#120432;&#823;",
        28: "&#120433;&#823;",
        29: "&#120434;&#823;",
        30: "&#120435;&#823;",
        31: "&#120436;&#823;",
        32: "&#120437;&#823;",
        33: "&#120438;&#823;",
        34: "&#120439;&#823;",
        35: "&#120440;&#823;",
        36: "&#120441;&#823;",
        37: "&#120442;&#823;",
        38: "&#120443;&#823;",
        39: "&#120444;&#823;",
        40: "&#120445;&#823;",
        41: "&#120446;&#823;",
        42: "&#120447;&#823;",
        43: "&#120448;&#823;",
        44: "&#120449;&#823;",
        45: "&#120450;&#823;",
        46: "&#120451;&#823;",
        47: "&#120452;&#823;",
        48: "&#120453;&#823;",
        49: "&#120454;&#823;",
        50: "&#120455;&#823;",
        51: "&#120456;&#823;",
        52: "&#120457;&#823;",
        53: "&#120823;&#823;",
        54: "&#120824;&#823;",
        55: "&#120825;&#823;",
        56: "&#120826;&#823;",
        57: "&#120827;&#823;",
        58: "&#120828;&#823;",
        59: "&#120829;&#823;",
        60: "&#120830;&#823;",
        61: "&#120831;&#823;",
        62: "&#120822;&#823;"
    },
    s30: {
        1: "a&#866;",
        2: "b&#866;",
        3: "c&#866;",
        4: "d&#866;",
        5: "e&#866;",
        6: "f&#866;",
        7: "g&#866;",
        8: "h&#866;",
        9: "i&#866;",
        10: "j&#866;",
        11: "k&#866;",
        12: "l&#866;",
        13: "m&#866;",
        14: "n&#866;",
        15: "o&#866;",
        16: "p&#866;",
        17: "q&#866;",
        18: "r&#866;",
        19: "s&#866;",
        20: "t&#866;",
        21: "u&#866;",
        22: "v&#866;",
        23: "w&#866;",
        24: "x&#866;",
        25: "y&#866;",
        26: "z&#866;",
        27: "A&#866;",
        28: "B&#866;",
        29: "C&#866;",
        30: "D&#866;",
        31: "E&#866;",
        32: "F&#866;",
        33: "G&#866;",
        34: "H&#866;",
        35: "I&#866;",
        36: "J&#866;",
        37: "K&#866;",
        38: "L&#866;",
        39: "M&#866;",
        40: "N&#866;",
        41: "O&#866;",
        42: "P&#866;",
        43: "Q&#866;",
        44: "R&#866;",
        45: "S&#866;",
        46: "T&#866;",
        47: "U&#866;",
        48: "V&#866;",
        49: "W&#866;",
        50: "X&#866;",
        51: "Y&#866;",
        52: "Z&#866;",
        53: "1&#866;",
        54: "2&#866;",
        55: "3&#866;",
        56: "4&#866;",
        57: "5&#866;",
        58: "6&#866;",
        59: "7&#866;",
        60: "8&#866;",
        61: "9&#866;",
        62: "0&#866;"
    },
    s31: {
        1: "a&#828;",
        2: "b&#828;",
        3: "c&#828;",
        4: "d&#828;",
        5: "e&#828;",
        6: "f&#828;",
        7: "g&#828;",
        8: "h&#828;",
        9: "i&#828;",
        10: "j&#828;",
        11: "k&#828;",
        12: "l&#828;",
        13: "m&#828;",
        14: "n&#828;",
        15: "o&#828;",
        16: "p&#828;",
        17: "q&#828;",
        18: "r&#828;",
        19: "s&#828;",
        20: "t&#828;",
        21: "u&#828;",
        22: "v&#828;",
        23: "w&#828;",
        24: "x&#828;",
        25: "y&#828;",
        26: "z&#828;",
        27: "A&#828;",
        28: "B&#828;",
        29: "C&#828;",
        30: "D&#828;",
        31: "E&#828;",
        32: "F&#828;",
        33: "G&#828;",
        34: "H&#828;",
        35: "I&#828;",
        36: "J&#828;",
        37: "K&#828;",
        38: "L&#828;",
        39: "M&#828;",
        40: "N&#828;",
        41: "O&#828;",
        42: "P&#828;",
        43: "Q&#828;",
        44: "R&#828;",
        45: "S&#828;",
        46: "T&#828;",
        47: "U&#828;",
        48: "V&#828;",
        49: "W&#828;",
        50: "X&#828;",
        51: "Y&#828;",
        52: "Z&#828;",
        53: "1&#828;",
        54: "2&#828;",
        55: "3&#828;",
        56: "4&#828;",
        57: "5&#828;",
        58: "6&#828;",
        59: "7&#828;",
        60: "8&#828;",
        61: "9&#828;",
        62: "0&#828;"
    }
};

function Change(_0x59eex9e, _0x59eex9f) {
    var _0x59eex4 = "";
    var _0x59eex9e = _0x59eex9e;
    if (_0x59eex9e["length"] == 0) {
        return
    }
    for (i = 0; i < _0x59eex9e["length"]; i++) {
        var _0x59eex6 = _0x59eex9e["charAt"](i),
            _0x59eexa0 = normal["indexOf"](_0x59eex6) + 1;
        if (_0x59eex6 == " ") {
            _0x59eex4 += " "
        } else {
            if (!_0x59eexa0) {
                _0x59eex4 += _0x59eex6
            } else {
                _0x59eex4 += newtext[_0x59eex9f][_0x59eexa0]
            }
        }
    }
    return _0x59eex4
}
const futureAlienCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u15e9",
    b: "\u15f7",
    c: "\u1462",
    d: "\u1572",
    e: "\u163f",
    f: "\u15b4",
    g: "\u161c",
    h: "\u157c",
    i: "\u14f0",
    j: "\u149a",
    k: "\u15bd\u1438",
    l: "\u14aa",
    m: "\u163b",
    n: "\u1609",
    o: "\u14cd",
    p: "\u1575",
    q: "\u1574",
    r: "\u1587",
    s: "S",
    t: "\u15b6",
    u: "\u1458",
    v: "\u143a",
    w: "\u163a",
    x: "\u166d",
    y: "\u15bb",
    z: "\u15f1",
    A: "\u15e9",
    B: "\u15f7",
    C: "\u1462",
    D: "\u1572",
    E: "\u163f",
    F: "\u15b4",
    G: "\u161c",
    H: "\u157c",
    I: "\u14f0",
    J: "\u149a",
    K: "\u15bd\u1438",
    L: "\u14aa",
    M: "\u163b",
    N: "\u1609",
    O: "\u14cd",
    P: "\u1575",
    Q: "\u1574",
    R: "\u1587",
    S: "S",
    T: "\u15b6",
    U: "\u1458",
    V: "\u143a",
    W: "\u163a",
    X: "\u166d",
    Y: "\u15bb",
    Z: "\u15f1"
};
const squiggle6CharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u0e04",
    b: "\u0e56",
    c: "\xA2",
    d: "\u0ed3",
    e: "\u0113",
    f: "f",
    g: "\u0e87",
    h: "h",
    i: "i",
    j: "\u0e27",
    k: "k",
    l: "l",
    m: "\u0e53",
    n: "\u0e96",
    o: "\u0ed0",
    p: "p",
    q: "\u0e51",
    r: "r",
    s: "\u015e",
    t: "t",
    u: "\u0e19",
    v: "\u0e07",
    w: "\u0e9f",
    x: "x",
    y: "\u0e2f",
    z: "\u0e8a",
    A: "\u0e04",
    B: "\u0e56",
    C: "\xA2",
    D: "\u0ed3",
    E: "\u0113",
    F: "f",
    G: "\u0e87",
    H: "h",
    I: "i",
    J: "\u0e27",
    K: "k",
    L: "l",
    M: "\u0e53",
    N: "\u0e96",
    O: "\u0ed0",
    P: "p",
    Q: "\u0e51",
    R: "r",
    S: "\u015e",
    T: "t",
    U: "\u0e19",
    V: "\u0e07",
    W: "\u0e9f",
    X: "x",
    Y: "\u0e2f",
    Z: "\u0e8a"
};
const squiggle5CharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u0105",
    b: "\u10ea",
    c: "\u0188",
    d: "\u0256",
    e: "\u025b",
    f: "\u0284",
    g: "\u0260",
    h: "\u0267",
    i: "\u0131",
    j: "\u029d",
    k: "\u0199",
    l: "\u0196",
    m: "\u0271",
    n: "\u014b",
    o: "\u01a1",
    p: "\u2118",
    q: "\u0566",
    r: "\u0f5e",
    s: "\u0282",
    t: "\u026c",
    u: "\u0173",
    v: "\u06f7",
    w: "\u1ff3",
    x: "\u04b3",
    y: "\u10e7",
    z: "\u0291",
    A: "\u0105",
    B: "\u10ea",
    C: "\u0188",
    D: "\u0256",
    E: "\u025b",
    F: "\u0284",
    G: "\u0260",
    H: "\u0267",
    I: "\u0131",
    J: "\u029d",
    K: "\u0199",
    L: "\u0196",
    M: "\u0271",
    N: "\u014b",
    O: "\u01a1",
    P: "\u2118",
    Q: "\u0566",
    R: "\u0f5e",
    S: "\u0282",
    T: "\u026c",
    U: "\u0173",
    V: "\u06f7",
    W: "\u1ff3",
    X: "\u04b3",
    Y: "\u10e7",
    Z: "\u0291"
};
const asianStyle2CharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\uff91",
    b: "\u4e43",
    c: "\u1103",
    d: "\u308a",
    e: "\u4e47",
    f: "\uff77",
    g: "\u30e0",
    h: "\u3093",
    i: "\uff89",
    j: "\uff8c",
    k: "\u30ba",
    l: "\uff9a",
    m: "\uffb6",
    n: "\u5200",
    o: "\u306e",
    p: "\uff71",
    q: "\u3090",
    r: "\u5c3a",
    s: "\u4e02",
    t: "\uff72",
    u: "\u3072",
    v: "\u221a",
    w: "W",
    x: "\uff92",
    y: "\uff98",
    z: "\u4e59",
    A: "\uff91",
    B: "\u4e43",
    C: "\u1103",
    D: "\u308a",
    E: "\u4e47",
    F: "\uff77",
    G: "\u30e0",
    H: "\u3093",
    I: "\uff89",
    J: "\uff8c",
    K: "\u30ba",
    L: "\uff9a",
    M: "\uffb6",
    N: "\u5200",
    O: "\u306e",
    P: "\uff71",
    Q: "\u3090",
    R: "\u5c3a",
    S: "\u4e02",
    T: "\uff72",
    U: "\u3072",
    V: "\u221a",
    W: "W",
    X: "\uff92",
    Y: "\uff98",
    Z: "\u4e59"
};
const asianStyleCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u5342",
    b: "\u4e43",
    c: "\u531a",
    d: "\u15ea",
    e: "\u4e47",
    f: "\u5343",
    g: "\u13b6",
    h: "\u5344",
    i: "\u4e28",
    j: "\uff8c",
    k: "\u049c",
    l: "\u3125",
    m: "\u722a",
    n: "\u51e0",
    o: "\u3116",
    p: "\u5369",
    q: "\u024a",
    r: "\u5c3a",
    s: "\u4e02",
    t: "\u3112",
    u: "\u3129",
    v: "\u142f",
    w: "\u5c71",
    x: "\u4e42",
    y: "\u311a",
    z: "\u4e59",
    A: "\u5342",
    B: "\u4e43",
    C: "\u531a",
    D: "\u15ea",
    E: "\u4e47",
    F: "\u5343",
    G: "\u13b6",
    H: "\u5344",
    I: "\u4e28",
    J: "\uff8c",
    K: "\u049c",
    L: "\u3125",
    M: "\u722a",
    N: "\u51e0",
    O: "\u3116",
    P: "\u5369",
    Q: "\u024a",
    R: "\u5c3a",
    S: "\u4e02",
    T: "\u3112",
    U: "\u3129",
    V: "\u142f",
    W: "\u5c71",
    X: "\u4e42",
    Y: "\u311a",
    Z: "\u4e59"
};
const squaresCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\ud83c\udd30",
    b: "\ud83c\udd31",
    c: "\ud83c\udd32",
    d: "\ud83c\udd33",
    e: "\ud83c\udd34",
    f: "\ud83c\udd35",
    g: "\ud83c\udd36",
    h: "\ud83c\udd37",
    i: "\ud83c\udd38",
    j: "\ud83c\udd39",
    k: "\ud83c\udd3a",
    l: "\ud83c\udd3b",
    m: "\ud83c\udd3c",
    n: "\ud83c\udd3d",
    o: "\ud83c\udd3e",
    p: "\ud83c\udd3f",
    q: "\ud83c\udd40",
    r: "\ud83c\udd41",
    s: "\ud83c\udd42",
    t: "\ud83c\udd43",
    u: "\ud83c\udd44",
    v: "\ud83c\udd45",
    w: "\ud83c\udd46",
    x: "\ud83c\udd47",
    y: "\ud83c\udd48",
    z: "\ud83c\udd49",
    A: "\ud83c\udd30",
    B: "\ud83c\udd31",
    C: "\ud83c\udd32",
    D: "\ud83c\udd33",
    E: "\ud83c\udd34",
    F: "\ud83c\udd35",
    G: "\ud83c\udd36",
    H: "\ud83c\udd37",
    I: "\ud83c\udd38",
    J: "\ud83c\udd39",
    K: "\ud83c\udd3a",
    L: "\ud83c\udd3b",
    M: "\ud83c\udd3c",
    N: "\ud83c\udd3d",
    O: "\ud83c\udd3e",
    P: "\ud83c\udd3f",
    Q: "\ud83c\udd40",
    R: "\ud83c\udd41",
    S: "\ud83c\udd42",
    T: "\ud83c\udd43",
    U: "\ud83c\udd44",
    V: "\ud83c\udd45",
    W: "\ud83c\udd46",
    X: "\ud83c\udd47",
    Y: "\ud83c\udd48",
    Z: "\ud83c\udd49"
};
const squiggle4CharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u13d7",
    b: "\u13f0",
    c: "\u1348",
    d: "\u13b4",
    e: "\u13cb",
    f: "\u13a6",
    g: "\u13b6",
    h: "\u13c2",
    i: "\u13a5",
    j: "\u13e0",
    k: "\u13e6",
    l: "\u13dd",
    m: "\u13b7",
    n: "\u13c1",
    o: "\u13a7",
    p: "\u13ae",
    q: "\u13a4",
    r: "\u13d2",
    s: "\u13d5",
    t: "\u13d6",
    u: "\u13ec",
    v: "\u13c9",
    w: "\u13c7",
    x: "\u1300",
    y: "\u13a9",
    z: "\u135a",
    A: "\u13d7",
    B: "\u13f0",
    C: "\u1348",
    D: "\u13b4",
    E: "\u13cb",
    F: "\u13a6",
    G: "\u13b6",
    H: "\u13c2",
    I: "\u13a5",
    J: "\u13e0",
    K: "\u13e6",
    L: "\u13dd",
    M: "\u13b7",
    N: "\u13c1",
    O: "\u13a7",
    P: "\u13ae",
    Q: "\u13a4",
    R: "\u13d2",
    S: "\u13d5",
    T: "\u13d6",
    U: "\u13ec",
    V: "\u13c9",
    W: "\u13c7",
    X: "\u1300",
    Y: "\u13a9",
    Z: "\u135a"
};
const neonCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u15e9",
    b: "\u15f7",
    c: "\u1455",
    d: "\u15ea",
    e: "E",
    f: "\u15b4",
    g: "G",
    h: "\u157c",
    i: "I",
    j: "\u148d",
    k: "K",
    l: "\u14aa",
    m: "\u15f0",
    n: "\u144e",
    o: "O",
    p: "\u146d",
    q: "\u146b",
    r: "\u1587",
    s: "\u1515",
    t: "T",
    u: "\u144c",
    v: "\u142f",
    w: "\u15ef",
    x: "\u166d",
    y: "Y",
    z: "\u1614",
    A: "\u15e9",
    B: "\u15f7",
    C: "\u1455",
    D: "\u15ea",
    E: "E",
    F: "\u15b4",
    G: "G",
    H: "\u157c",
    I: "I",
    J: "\u148d",
    K: "K",
    L: "\u14aa",
    M: "\u15f0",
    N: "\u144e",
    O: "O",
    P: "\u146d",
    Q: "\u146b",
    R: "\u1587",
    S: "\u1515",
    T: "T",
    U: "\u144c",
    V: "\u142f",
    W: "\u15ef",
    X: "\u166d",
    Y: "Y",
    Z: "\u1614"
};
const squiggle3CharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u01df",
    b: "\u026e",
    c: "\u0188",
    d: "\u0256",
    e: "\u025b",
    f: "\u0284",
    g: "\u0262",
    h: "\u0266",
    i: "\u0268",
    j: "\u029d",
    k: "\u04c4",
    l: "\u029f",
    m: "\u028d",
    n: "\u057c",
    o: "\u0585",
    p: "\u0584",
    q: "\u0566",
    r: "\u0280",
    s: "\u0586",
    t: "\u0236",
    u: "\u028a",
    v: "\u028b",
    w: "\u0561",
    x: "\u04fc",
    y: "\u028f",
    z: "\u0290",
    A: "\u01df",
    B: "\u026e",
    C: "\u0188",
    D: "\u0256",
    E: "\u025b",
    F: "\u0284",
    G: "\u0262",
    H: "\u0266",
    I: "\u0268",
    J: "\u029d",
    K: "\u04c4",
    L: "\u029f",
    M: "\u028d",
    N: "\u057c",
    O: "\u0585",
    P: "\u0584",
    Q: "\u0566",
    R: "\u0280",
    S: "\u0586",
    T: "\u0236",
    U: "\u028a",
    V: "\u028b",
    W: "\u0561",
    X: "\u04fc",
    Y: "\u028f",
    Z: "\u0290"
};
const monospaceCharMap = {
    0: "\ud835\udff6",
    1: "\ud835\udff7",
    2: "\ud835\udff8",
    3: "\ud835\udff9",
    4: "\ud835\udffa",
    5: "\ud835\udffb",
    6: "\ud835\udffc",
    7: "\ud835\udffd",
    8: "\ud835\udffe",
    9: "\ud835\udfff",
    a: "\ud835\ude8a",
    b: "\ud835\ude8b",
    c: "\ud835\ude8c",
    d: "\ud835\ude8d",
    e: "\ud835\ude8e",
    f: "\ud835\ude8f",
    g: "\ud835\ude90",
    h: "\ud835\ude91",
    i: "\ud835\ude92",
    j: "\ud835\ude93",
    k: "\ud835\ude94",
    l: "\ud835\ude95",
    m: "\ud835\ude96",
    n: "\ud835\ude97",
    o: "\ud835\ude98",
    p: "\ud835\ude99",
    q: "\ud835\ude9a",
    r: "\ud835\ude9b",
    s: "\ud835\ude9c",
    t: "\ud835\ude9d",
    u: "\ud835\ude9e",
    v: "\ud835\ude9f",
    w: "\ud835\udea0",
    x: "\ud835\udea1",
    y: "\ud835\udea2",
    z: "\ud835\udea3",
    A: "\ud835\ude70",
    B: "\ud835\ude71",
    C: "\ud835\ude72",
    D: "\ud835\ude73",
    E: "\ud835\ude74",
    F: "\ud835\ude75",
    G: "\ud835\ude76",
    H: "\ud835\ude77",
    I: "\ud835\ude78",
    J: "\ud835\ude79",
    K: "\ud835\ude7a",
    L: "\ud835\ude7b",
    M: "\ud835\ude7c",
    N: "\ud835\ude7d",
    O: "\ud835\ude7e",
    P: "\ud835\ude7f",
    Q: "\ud835\ude80",
    R: "\ud835\ude81",
    S: "\ud835\ude82",
    T: "\ud835\ude83",
    U: "\ud835\ude84",
    V: "\ud835\ude85",
    W: "\ud835\ude86",
    X: "\ud835\ude87",
    Y: "\ud835\ude88",
    Z: "\ud835\ude89"
};
const boldItalicCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\ud835\ude56",
    b: "\ud835\ude57",
    c: "\ud835\ude58",
    d: "\ud835\ude59",
    e: "\ud835\ude5a",
    f: "\ud835\ude5b",
    g: "\ud835\ude5c",
    h: "\ud835\ude5d",
    i: "\ud835\ude5e",
    j: "\ud835\ude5f",
    k: "\ud835\ude60",
    l: "\ud835\ude61",
    m: "\ud835\ude62",
    n: "\ud835\ude63",
    o: "\ud835\ude64",
    p: "\ud835\ude65",
    q: "\ud835\ude66",
    r: "\ud835\ude67",
    s: "\ud835\ude68",
    t: "\ud835\ude69",
    u: "\ud835\ude6a",
    v: "\ud835\ude6b",
    w: "\ud835\ude6c",
    x: "\ud835\ude6d",
    y: "\ud835\ude6e",
    z: "\ud835\ude6f",
    A: "\ud835\ude3c",
    B: "\ud835\ude3d",
    C: "\ud835\ude3e",
    D: "\ud835\ude3f",
    E: "\ud835\ude40",
    F: "\ud835\ude41",
    G: "\ud835\ude42",
    H: "\ud835\ude43",
    I: "\ud835\ude44",
    J: "\ud835\ude45",
    K: "\ud835\ude46",
    L: "\ud835\ude47",
    M: "\ud835\ude48",
    N: "\ud835\ude49",
    O: "\ud835\ude4a",
    P: "\ud835\ude4b",
    Q: "\ud835\ude4c",
    R: "\ud835\ude4d",
    S: "\ud835\ude4e",
    T: "\ud835\ude4f",
    U: "\ud835\ude50",
    V: "\ud835\ude51",
    W: "\ud835\ude52",
    X: "\ud835\ude53",
    Y: "\ud835\ude54",
    Z: "\ud835\ude55"
};
const boldCharMap = {
    0: "\ud835\udfce",
    1: "\ud835\udfcf",
    2: "\ud835\udfd0",
    3: "\ud835\udfd1",
    4: "\ud835\udfd2",
    5: "\ud835\udfd3",
    6: "\ud835\udfd4",
    7: "\ud835\udfd5",
    8: "\ud835\udfd6",
    9: "\ud835\udfd7",
    a: "\ud835\udc1a",
    b: "\ud835\udc1b",
    c: "\ud835\udc1c",
    d: "\ud835\udc1d",
    e: "\ud835\udc1e",
    f: "\ud835\udc1f",
    g: "\ud835\udc20",
    h: "\ud835\udc21",
    i: "\ud835\udc22",
    j: "\ud835\udc23",
    k: "\ud835\udc24",
    l: "\ud835\udc25",
    m: "\ud835\udc26",
    n: "\ud835\udc27",
    o: "\ud835\udc28",
    p: "\ud835\udc29",
    q: "\ud835\udc2a",
    r: "\ud835\udc2b",
    s: "\ud835\udc2c",
    t: "\ud835\udc2d",
    u: "\ud835\udc2e",
    v: "\ud835\udc2f",
    w: "\ud835\udc30",
    x: "\ud835\udc31",
    y: "\ud835\udc32",
    z: "\ud835\udc33",
    A: "\ud835\udc00",
    B: "\ud835\udc01",
    C: "\ud835\udc02",
    D: "\ud835\udc03",
    E: "\ud835\udc04",
    F: "\ud835\udc05",
    G: "\ud835\udc06",
    H: "\ud835\udc07",
    I: "\ud835\udc08",
    J: "\ud835\udc09",
    K: "\ud835\udc0a",
    L: "\ud835\udc0b",
    M: "\ud835\udc0c",
    N: "\ud835\udc0d",
    O: "\ud835\udc0e",
    P: "\ud835\udc0f",
    Q: "\ud835\udc10",
    R: "\ud835\udc11",
    S: "\ud835\udc12",
    T: "\ud835\udc13",
    U: "\ud835\udc14",
    V: "\ud835\udc15",
    W: "\ud835\udc16",
    X: "\ud835\udc17",
    Y: "\ud835\udc18",
    Z: "\ud835\udc19"
};
const italicCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\ud835\ude22",
    b: "\ud835\ude23",
    c: "\ud835\ude24",
    d: "\ud835\ude25",
    e: "\ud835\ude26",
    f: "\ud835\ude27",
    g: "\ud835\ude28",
    h: "\ud835\ude29",
    i: "\ud835\ude2a",
    j: "\ud835\ude2b",
    k: "\ud835\ude2c",
    l: "\ud835\ude2d",
    m: "\ud835\ude2e",
    n: "\ud835\ude2f",
    o: "\ud835\ude30",
    p: "\ud835\ude31",
    q: "\ud835\ude32",
    r: "\ud835\ude33",
    s: "\ud835\ude34",
    t: "\ud835\ude35",
    u: "\ud835\ude36",
    v: "\ud835\ude37",
    w: "\ud835\ude38",
    x: "\ud835\ude39",
    y: "\ud835\ude3a",
    z: "\ud835\ude3b",
    A: "\ud835\ude08",
    B: "\ud835\ude09",
    C: "\ud835\ude0a",
    D: "\ud835\ude0b",
    E: "\ud835\ude0c",
    F: "\ud835\ude0d",
    G: "\ud835\ude0e",
    H: "\ud835\ude0f",
    I: "\ud835\ude10",
    J: "\ud835\ude11",
    K: "\ud835\ude12",
    L: "\ud835\ude13",
    M: "\ud835\ude14",
    N: "\ud835\ude15",
    O: "\ud835\ude16",
    P: "\ud835\ude17",
    Q: "\ud835\ude18",
    R: "\ud835\ude19",
    S: "\ud835\ude1a",
    T: "\ud835\ude1b",
    U: "\ud835\ude1c",
    V: "\ud835\ude1d",
    W: "\ud835\ude1e",
    X: "\ud835\ude1f",
    Y: "\ud835\ude20",
    Z: "\ud835\ude21"
};
const squiggle2CharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u03b1",
    b: "\u10a6",
    c: "\u0188",
    d: "\u0503",
    e: "\u04bd",
    f: "\u03dd",
    g: "\u0260",
    h: "\u050b",
    i: "\u03b9",
    j: "\u029d",
    k: "\u0199",
    l: "\u0285",
    m: "\u0271",
    n: "\u0273",
    o: "\u03c3",
    p: "\u03c1",
    q: "\u03d9",
    r: "\u027e",
    s: "\u0282",
    t: "\u019a",
    u: "\u03c5",
    v: "\u028b",
    w: "\u026f",
    x: "x",
    y: "\u10e7",
    z: "\u0225",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    E: "E",
    F: "F",
    G: "G",
    H: "H",
    I: "I",
    J: "J",
    K: "K",
    L: "L",
    M: "M",
    N: "N",
    O: "O",
    P: "P",
    Q: "Q",
    R: "R",
    S: "S",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "Z"
};
const currencyCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u20b3",
    b: "\u0e3f",
    c: "\u20b5",
    d: "\u0110",
    e: "\u0246",
    f: "\u20a3",
    g: "\u20b2",
    h: "\u2c67",
    i: "\u0142",
    j: "J",
    k: "\u20ad",
    l: "\u2c60",
    m: "\u20a5",
    n: "\u20a6",
    o: "\xD8",
    p: "\u20b1",
    q: "Q",
    r: "\u2c64",
    s: "\u20b4",
    t: "\u20ae",
    u: "\u0244",
    v: "V",
    w: "\u20a9",
    x: "\u04fe",
    y: "\u024e",
    z: "\u2c6b",
    A: "\u20b3",
    B: "\u0e3f",
    C: "\u20b5",
    D: "\u0110",
    E: "\u0246",
    F: "\u20a3",
    G: "\u20b2",
    H: "\u2c67",
    I: "\u0142",
    J: "J",
    K: "\u20ad",
    L: "\u2c60",
    M: "\u20a5",
    N: "\u20a6",
    O: "\xD8",
    P: "\u20b1",
    Q: "Q",
    R: "\u2c64",
    S: "\u20b4",
    T: "\u20ae",
    U: "\u0244",
    V: "V",
    W: "\u20a9",
    X: "\u04fe",
    Y: "\u024e",
    Z: "\u2c6b"
};
const symbolsCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\xE5",
    b: "\xDF",
    c: "\xA2",
    d: "\xD0",
    e: "\xEA",
    f: "\xA3",
    g: "g",
    h: "h",
    i: "\xEF",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    n: "\xF1",
    o: "\xF0",
    p: "\xFE",
    q: "q",
    r: "r",
    s: "\xA7",
    t: "\u2020",
    u: "\xB5",
    v: "v",
    w: "w",
    x: "x",
    y: "\xA5",
    z: "z",
    A: "\xC4",
    B: "\xDF",
    C: "\xC7",
    D: "\xD0",
    E: "\xC8",
    F: "\xA3",
    G: "G",
    H: "H",
    I: "\xCC",
    J: "J",
    K: "K",
    L: "L",
    M: "M",
    N: "\xF1",
    O: "\xD6",
    P: "\xFE",
    Q: "Q",
    R: "R",
    S: "\xA7",
    T: "\u2020",
    U: "\xDA",
    V: "V",
    W: "W",
    X: "\xD7",
    Y: "\xA5",
    Z: "Z"
};
const greekCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u03b1",
    b: "\u0432",
    c: "\xA2",
    d: "\u2202",
    e: "\u0454",
    f: "\u0192",
    g: "g",
    h: "\u043d",
    i: "\u03b9",
    j: "\u05e0",
    k: "\u043a",
    l: "\u2113",
    m: "\u043c",
    n: "\u03b7",
    o: "\u03c3",
    p: "\u03c1",
    q: "q",
    r: "\u044f",
    s: "\u0455",
    t: "\u0442",
    u: "\u03c5",
    v: "\u03bd",
    w: "\u03c9",
    x: "\u03c7",
    y: "\u0443",
    z: "z",
    A: "\u03b1",
    B: "\u0432",
    C: "\xA2",
    D: "\u2202",
    E: "\u0454",
    F: "\u0192",
    G: "g",
    H: "\u043d",
    I: "\u03b9",
    J: "\u05e0",
    K: "\u043a",
    L: "\u2113",
    M: "\u043c",
    N: "\u03b7",
    O: "\u03c3",
    P: "\u03c1",
    Q: "q",
    R: "\u044f",
    S: "\u0455",
    T: "\u0442",
    U: "\u03c5",
    V: "\u03bd",
    W: "\u03c9",
    X: "\u03c7",
    Y: "\u0443",
    Z: "z"
};
const bentTextCharMap = {
    0: "\u2298",
    1: "\ud835\udfd9",
    2: "\u03e9",
    3: "\u04e0",
    4: "\u096b",
    5: "\u01bc",
    6: "\u03ec",
    7: "7",
    8: "\ud835\udfe0",
    9: "\u096f",
    a: "\u0105",
    b: "\u048d",
    c: "\xE7",
    d: "\u056a",
    e: "\u04bd",
    f: "\u0192",
    g: "\u0581",
    h: "\u0570",
    i: "\xEC",
    j: "\u029d",
    k: "\u049f",
    l: "\u04c0",
    m: "\u028d",
    n: "\u0572",
    o: "\u0585",
    p: "\u0584",
    q: "\u0566",
    r: "\u027e",
    s: "\u0282",
    t: "\u0567",
    u: "\u0574",
    v: "\u0475",
    w: "\u0561",
    x: "\xD7",
    y: "\u057e",
    z: "\u0540",
    A: "\u023a",
    B: "\u03b2",
    C: "\u21bb",
    D: "\u13a0",
    E: "\u0190",
    F: "\u0191",
    G: "\u0193",
    H: "\u01f6",
    I: "\u012f",
    J: "\u0644",
    K: "\u04a0",
    L: "\ua748",
    M: "\u2c6e",
    N: "\u17a0",
    O: "\u0da7",
    P: "\u03c6",
    Q: "\u04a8",
    R: "\u0f60",
    S: "\u03da",
    T: "\u0372",
    U: "\u0531",
    V: "\u1efc",
    W: "\u0c1a",
    X: "\u10ef",
    Y: "\u04cb",
    Z: "\u0240"
};
const upperAnglesCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u039b",
    b: "B",
    c: "\u1103",
    d: "D",
    e: "\u03a3",
    f: "F",
    g: "G",
    h: "\u0389",
    i: "I",
    j: "J",
    k: "K",
    l: "\u1102",
    m: "M",
    n: "\u041f",
    o: "\u04e8",
    p: "P",
    q: "Q",
    r: "\u042f",
    s: "\u01a7",
    t: "\u01ac",
    u: "\u0426",
    v: "V",
    w: "\u0429",
    x: "X",
    y: "Y",
    z: "Z",
    A: "\u039b",
    B: "B",
    C: "\u1103",
    D: "D",
    E: "\u03a3",
    F: "F",
    G: "G",
    H: "\u0389",
    I: "I",
    J: "J",
    K: "K",
    L: "\u1102",
    M: "M",
    N: "\u041f",
    O: "\u04e8",
    P: "P",
    Q: "Q",
    R: "\u042f",
    S: "\u01a7",
    T: "\u01ac",
    U: "\u0426",
    V: "V",
    W: "\u0429",
    X: "X",
    Y: "Y",
    Z: "Z"
};
const subscriptCharMap = {
    0: "\u2080",
    1: "\u2081",
    2: "\u2082",
    3: "\u2083",
    4: "\u2084",
    5: "\u2085",
    6: "\u2086",
    7: "\u2087",
    8: "\u2088",
    9: "\u2089",
    a: "\u2090",
    b: "b",
    c: "c",
    d: "d",
    e: "\u2091",
    f: "f",
    g: "g",
    h: "\u2095",
    i: "\u1d62",
    j: "\u2c7c",
    k: "\u2096",
    l: "\u2097",
    m: "\u2098",
    n: "\u2099",
    o: "\u2092",
    p: "\u209a",
    q: "q",
    r: "\u1d63",
    s: "\u209b",
    t: "\u209c",
    u: "\u1d64",
    v: "\u1d65",
    w: "w",
    x: "\u2093",
    y: "y",
    z: "z",
    A: "\u2090",
    B: "B",
    C: "C",
    D: "D",
    E: "\u2091",
    F: "F",
    G: "G",
    H: "\u2095",
    I: "\u1d62",
    J: "\u2c7c",
    K: "\u2096",
    L: "\u2097",
    M: "\u2098",
    N: "\u2099",
    O: "\u2092",
    P: "\u209a",
    Q: "Q",
    R: "\u1d63",
    S: "\u209b",
    T: "\u209c",
    U: "\u1d64",
    V: "\u1d65",
    W: "W",
    X: "\u2093",
    Y: "Y",
    Z: "Z",
    "+": "\u208a",
    "-": "\u208b",
    "=": "\u208c",
    "(": "\u208d",
    ")": "\u208e"
};
const superscriptCharMap = {
    0: "\u2070",
    1: "\xB9",
    2: "\xB2",
    3: "\xB3",
    4: "\u2074",
    5: "\u2075",
    6: "\u2076",
    7: "\u2077",
    8: "\u2078",
    9: "\u2079",
    a: "\u1d43",
    b: "\u1d47",
    c: "\u1d9c",
    d: "\u1d48",
    e: "\u1d49",
    f: "\u1da0",
    g: "\u1d4d",
    h: "\u02b0",
    i: "\u2071",
    j: "\u02b2",
    k: "\u1d4f",
    l: "\u02e1",
    m: "\u1d50",
    n: "\u207f",
    o: "\u1d52",
    p: "\u1d56",
    q: "q",
    r: "\u02b3",
    s: "\u02e2",
    t: "\u1d57",
    u: "\u1d58",
    v: "\u1d5b",
    w: "\u02b7",
    x: "\u02e3",
    y: "\u02b8",
    z: "\u1dbb",
    A: "\u1d2c",
    B: "\u1d2e",
    C: "\u1d9c",
    D: "\u1d30",
    E: "\u1d31",
    F: "\u1da0",
    G: "\u1d33",
    H: "\u1d34",
    I: "\u1d35",
    J: "\u1d36",
    K: "\u1d37",
    L: "\u1d38",
    M: "\u1d39",
    N: "\u1d3a",
    O: "\u1d3c",
    P: "\u1d3e",
    Q: "Q",
    R: "\u1d3f",
    S: "\u02e2",
    T: "\u1d40",
    U: "\u1d41",
    V: "\u2c7d",
    W: "\u1d42",
    X: "\u02e3",
    Y: "\u02b8",
    Z: "\u1dbb",
    "+": "\u207a",
    "-": "\u207b",
    "=": "\u207c",
    "(": "\u207d",
    ")": "\u207e"
};
const squiggleCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\u0e04",
    b: "\u0e52",
    c: "\u03c2",
    d: "\u0e54",
    e: "\u0454",
    f: "\u0166",
    g: "\ufeee",
    h: "\u0452",
    i: "\u0e40",
    j: "\u05df",
    k: "\u043a",
    l: "\u026d",
    m: "\u0e53",
    n: "\u0e20",
    o: "\u0e4f",
    p: "\u05e7",
    q: "\u1ee3",
    r: "\u0433",
    s: "\u0e23",
    t: "\u0547",
    u: "\u0e22",
    v: "\u05e9",
    w: "\u0e2c",
    x: "\u05d0",
    y: "\u05e5",
    z: "\u0579",
    A: "\u0e04",
    B: "\u0e52",
    C: "\u03c2",
    D: "\u0e54",
    E: "\u0454",
    F: "\u0166",
    G: "\ufeee",
    H: "\u0452",
    I: "\u0e40",
    J: "\u05df",
    K: "\u043a",
    L: "\u026d",
    M: "\u0e53",
    N: "\u0e20",
    O: "\u0e4f",
    P: "\u05e7",
    Q: "\u1ee3",
    R: "\u0433",
    S: "\u0e23",
    T: "\u0547",
    U: "\u0e22",
    V: "\u05e9",
    W: "\u0e2c",
    X: "\u05d0",
    Y: "\u05e5",
    Z: "\u0579"
};
const doubleStruckCharMap = {
    0: "\ud835\udfd8",
    1: "\ud835\udfd9",
    2: "\ud835\udfda",
    3: "\ud835\udfdb",
    4: "\ud835\udfdc",
    5: "\ud835\udfdd",
    6: "\ud835\udfde",
    7: "\ud835\udfdf",
    8: "\ud835\udfe0",
    9: "\ud835\udfe1",
    a: "\ud835\udd52",
    b: "\ud835\udd53",
    c: "\ud835\udd54",
    d: "\ud835\udd55",
    e: "\ud835\udd56",
    f: "\ud835\udd57",
    g: "\ud835\udd58",
    h: "\ud835\udd59",
    i: "\ud835\udd5a",
    j: "\ud835\udd5b",
    k: "\ud835\udd5c",
    l: "\ud835\udd5d",
    m: "\ud835\udd5e",
    n: "\ud835\udd5f",
    o: "\ud835\udd60",
    p: "\ud835\udd61",
    q: "\ud835\udd62",
    r: "\ud835\udd63",
    s: "\ud835\udd64",
    t: "\ud835\udd65",
    u: "\ud835\udd66",
    v: "\ud835\udd67",
    w: "\ud835\udd68",
    x: "\ud835\udd69",
    y: "\ud835\udd6a",
    z: "\ud835\udd6b",
    A: "\ud835\udd38",
    B: "\ud835\udd39",
    C: "\u2102",
    D: "\ud835\udd3b",
    E: "\ud835\udd3c",
    F: "\ud835\udd3d",
    G: "\ud835\udd3e",
    H: "\u210d",
    I: "\ud835\udd40",
    J: "\ud835\udd41",
    K: "\ud835\udd42",
    L: "\ud835\udd43",
    M: "\ud835\udd44",
    N: "\u2115",
    O: "\ud835\udd46",
    P: "\u2119",
    Q: "\u211a",
    R: "\u211d",
    S: "\ud835\udd4a",
    T: "\ud835\udd4b",
    U: "\ud835\udd4c",
    V: "\ud835\udd4d",
    W: "\ud835\udd4e",
    X: "\ud835\udd4f",
    Y: "\ud835\udd50",
    Z: "\u2124"
};
const medievalCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\ud835\udd86",
    b: "\ud835\udd87",
    c: "\ud835\udd88",
    d: "\ud835\udd89",
    e: "\ud835\udd8a",
    f: "\ud835\udd8b",
    g: "\ud835\udd8c",
    h: "\ud835\udd8d",
    i: "\ud835\udd8e",
    j: "\ud835\udd8f",
    k: "\ud835\udd90",
    l: "\ud835\udd91",
    m: "\ud835\udd92",
    n: "\ud835\udd93",
    o: "\ud835\udd94",
    p: "\ud835\udd95",
    q: "\ud835\udd96",
    r: "\ud835\udd97",
    s: "\ud835\udd98",
    t: "\ud835\udd99",
    u: "\ud835\udd9a",
    v: "\ud835\udd9b",
    w: "\ud835\udd9c",
    x: "\ud835\udd9d",
    y: "\ud835\udd9e",
    z: "\ud835\udd9f",
    A: "\ud835\udd6c",
    B: "\ud835\udd6d",
    C: "\ud835\udd6e",
    D: "\ud835\udd6f",
    E: "\ud835\udd70",
    F: "\ud835\udd71",
    G: "\ud835\udd72",
    H: "\ud835\udd73",
    I: "\ud835\udd74",
    J: "\ud835\udd75",
    K: "\ud835\udd76",
    L: "\ud835\udd77",
    M: "\ud835\udd78",
    N: "\ud835\udd79",
    O: "\ud835\udd7a",
    P: "\ud835\udd7b",
    Q: "\ud835\udd7c",
    R: "\ud835\udd7d",
    S: "\ud835\udd7e",
    T: "\ud835\udd7f",
    U: "\ud835\udd80",
    V: "\ud835\udd81",
    W: "\ud835\udd82",
    X: "\ud835\udd83",
    Y: "\ud835\udd84",
    Z: "\ud835\udd85"
};
const invertedSquaresCharMap = {
    q: "\ud83c\udd80",
    w: "\ud83c\udd86",
    e: "\ud83c\udd74",
    r: "\ud83c\udd81",
    t: "\ud83c\udd83",
    y: "\ud83c\udd88",
    u: "\ud83c\udd84",
    i: "\ud83c\udd78",
    o: "\ud83c\udd7e",
    p: "\ud83c\udd7f",
    a: "\ud83c\udd70",
    s: "\ud83c\udd82",
    d: "\ud83c\udd73",
    f: "\ud83c\udd75",
    g: "\ud83c\udd76",
    h: "\ud83c\udd77",
    j: "\ud83c\udd79",
    k: "\ud83c\udd7a",
    l: "\ud83c\udd7b",
    z: "\ud83c\udd89",
    x: "\ud83c\udd87",
    c: "\ud83c\udd72",
    v: "\ud83c\udd85",
    b: "\ud83c\udd71",
    n: "\ud83c\udd7d",
    m: "\ud83c\udd7c"
};
const cursiveCharMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    a: "\ud835\udcea",
    b: "\ud835\udceb",
    c: "\ud835\udcec",
    d: "\ud835\udced",
    e: "\ud835\udcee",
    f: "\ud835\udcef",
    g: "\ud835\udcf0",
    h: "\ud835\udcf1",
    i: "\ud835\udcf2",
    j: "\ud835\udcf3",
    k: "\ud835\udcf4",
    l: "\ud835\udcf5",
    m: "\ud835\udcf6",
    n: "\ud835\udcf7",
    o: "\ud835\udcf8",
    p: "\ud835\udcf9",
    q: "\ud835\udcfa",
    r: "\ud835\udcfb",
    s: "\ud835\udcfc",
    t: "\ud835\udcfd",
    u: "\ud835\udcfe",
    v: "\ud835\udcff",
    w: "\ud835\udd00",
    x: "\ud835\udd01",
    y: "\ud835\udd02",
    z: "\ud835\udd03",
    A: "\ud835\udcd0",
    B: "\ud835\udcd1",
    C: "\ud835\udcd2",
    D: "\ud835\udcd3",
    E: "\ud835\udcd4",
    F: "\ud835\udcd5",
    G: "\ud835\udcd6",
    H: "\ud835\udcd7",
    I: "\ud835\udcd8",
    J: "\ud835\udcd9",
    K: "\ud835\udcda",
    L: "\ud835\udcdb",
    M: "\ud835\udcdc",
    N: "\ud835\udcdd",
    O: "\ud835\udcde",
    P: "\ud835\udcdf",
    Q: "\ud835\udce0",
    R: "\ud835\udce1",
    S: "\ud835\udce2",
    T: "\ud835\udce3",
    U: "\ud835\udce4",
    V: "\ud835\udce5",
    W: "\ud835\udce6",
    X: "\ud835\udce7",
    Y: "\ud835\udce8",
    Z: "\ud835\udce9"
};
const oldEnglishCharMap = {
    a: "\ud835\udd1e",
    b: "\ud835\udd1f",
    c: "\ud835\udd20",
    d: "\ud835\udd21",
    e: "\ud835\udd22",
    f: "\ud835\udd23",
    g: "\ud835\udd24",
    h: "\ud835\udd25",
    i: "\ud835\udd26",
    j: "\ud835\udd27",
    k: "\ud835\udd28",
    l: "\ud835\udd29",
    m: "\ud835\udd2a",
    n: "\ud835\udd2b",
    o: "\ud835\udd2c",
    p: "\ud835\udd2d",
    q: "\ud835\udd2e",
    r: "\ud835\udd2f",
    s: "\ud835\udd30",
    t: "\ud835\udd31",
    u: "\ud835\udd32",
    v: "\ud835\udd33",
    w: "\ud835\udd34",
    x: "\ud835\udd35",
    y: "\ud835\udd36",
    z: "\ud835\udd37",
    A: "\ud835\udd04",
    B: "\ud835\udd05",
    C: "\u212d",
    D: "\ud835\udd07",
    E: "\ud835\udd08",
    F: "\ud835\udd09",
    G: "\ud835\udd0a",
    H: "\u210c",
    I: "\u2111",
    J: "\ud835\udd0d",
    K: "\ud835\udd0e",
    L: "\ud835\udd0f",
    M: "\ud835\udd10",
    N: "\ud835\udd11",
    O: "\ud835\udd12",
    P: "\ud835\udd13",
    Q: "\ud835\udd14",
    R: "\u211c",
    S: "\ud835\udd16",
    T: "\ud835\udd17",
    U: "\ud835\udd18",
    V: "\ud835\udd19",
    W: "\ud835\udd1a",
    X: "\ud835\udd1b",
    Y: "\ud835\udd1c",
    Z: "\u2128"
};
const wideTextCharMap = {
    "`": "`",
    1: "\uff11",
    2: "\uff12",
    3: "\uff13",
    4: "\uff14",
    5: "\uff15",
    6: "\uff16",
    7: "\uff17",
    8: "\uff18",
    9: "\uff19",
    0: "\uff10",
    "-": "\uff0d",
    "=": "\uff1d",
    "~": "~",
    "!": "\uff01",
    "@": "\uff20",
    "#": "\uff03",
    $: "\uff04",
    "%": "\uff05",
    "^": "^",
    "&": "\uff06",
    "*": "\uff0a",
    "(": "\uff08",
    ")": "\uff09",
    _: "_",
    "+": "\uff0b",
    q: "\uff51",
    w: "\uff57",
    e: "\uff45",
    r: "\uff52",
    t: "\uff54",
    y: "\uff59",
    u: "\uff55",
    i: "\uff49",
    o: "\uff4f",
    p: "\uff50",
    "[": "[",
    "]": "]",
    "\\": "\\",
    Q: "\uff31",
    W: "\uff37",
    E: "\uff25",
    R: "\uff32",
    T: "\uff34",
    Y: "\uff39",
    U: "\uff35",
    I: "\uff29",
    O: "\uff2f",
    P: "\uff30",
    "{": "{",
    "}": "}",
    "|": "|",
    a: "\uff41",
    s: "\uff53",
    d: "\uff44",
    f: "\uff46",
    g: "\uff47",
    h: "\uff48",
    j: "\uff4a",
    k: "\uff4b",
    l: "\uff4c",
    ";": "\uff1b",
    "\'": "\uff07",
    A: "\uff21",
    S: "\uff33",
    D: "\uff24",
    F: "\uff26",
    G: "\uff27",
    H: "\uff28",
    J: "\uff2a",
    K: "\uff2b",
    L: "\uff2c",
    ":": "\uff1a",
    '\"': '\"',
    z: "\uff5a",
    x: "\uff58",
    c: "\uff43",
    v: "\uff56",
    b: "\uff42",
    n: "\uff4e",
    m: "\uff4d",
    ",": "\uff0c",
    ".": "\uff0e",
    "/": "\uff0f",
    Z: "\uff3a",
    X: "\uff38",
    C: "\uff23",
    V: "\uff36",
    B: "\uff22",
    N: "\uff2e",
    M: "\uff2d",
    "<": "<",
    ">": ">",
    "?": "\uff1f"
};

function Lunicode() {
    this["tools"] = {
        flip: {
            init: function() {
                for (i in this["map"]) {
                    this["map"][this["map"][i]] = i
                }
            },
            encode: function(_0x59eex43) {
                for (var _0x59eexbe, _0x59eexbf = [], _0x59eexc0 = 0, _0x59eexc1 = _0x59eex43["length"]; _0x59eexc1 > _0x59eexc0; _0x59eexc0++) {
                    (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc0)), _0x59eexc0 > 0 && ("\u0324" == _0x59eexbe || "\u0317" == _0x59eexbe || "\u0316" == _0x59eexbe || "\u032e" == _0x59eexbe) ? ((_0x59eexbe = this["map"][_0x59eex43["charAt"](_0x59eexc0 - 1) + _0x59eexbe]), _0x59eexbf["pop"]()) : ((_0x59eexbe = this["map"][_0x59eexbe]), "undefined" == typeof _0x59eexbe && (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc0))), _0x59eexbf["push"](_0x59eexbe)
                }
                return _0x59eexbf["reverse"]()["join"]("")
            },
            decode: function(_0x59eex43) {
                for (var _0x59eexbe, _0x59eexbf = [], _0x59eexc0 = 0, _0x59eexc1 = _0x59eex43["length"]; _0x59eexc1 > _0x59eexc0; _0x59eexc0++) {
                    (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc0)), _0x59eexc0 > 0 && ("\u0324" == _0x59eexbe || "\u0317" == _0x59eexbe || "\u0316" == _0x59eexbe || "\u032e" == _0x59eexbe) ? ((_0x59eexbe = this["map"][_0x59eex43["charAt"](_0x59eexc0 - 1) + _0x59eexbe]), _0x59eexbf["pop"]()) : ((_0x59eexbe = this["map"][_0x59eexbe]), "undefined" == typeof _0x59eexbe && (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc0))), _0x59eexbf["push"](_0x59eexbe)
                }
                return _0x59eexbf["reverse"]()["join"]("")
            },
            map: {
                a: "\u0250",
                b: "q",
                c: "\u0254",
                d: "p",
                e: "\u01dd",
                f: "\u025f",
                g: "\u0253",
                h: "\u0265",
                i: "\u0131",
                j: "\u027e",
                k: "\u029e",
                l: "l",
                m: "\u026f",
                n: "u",
                r: "\u0279",
                t: "\u0287",
                v: "\u028c",
                w: "\u028d",
                y: "\u028e",
                A: "\u2200",
                B: "\u1660",
                C: "\u0186",
                D: "\u15e1",
                E: "\u018e",
                F: "\u2132",
                G: "\u2141",
                J: "\u017f",
                K: "\u22ca",
                L: "\u02e5",
                M: "W",
                P: "\u0500",
                Q: "\u038c",
                R: "\u1d1a",
                T: "\u22a5",
                U: "\u2229",
                V: "\u039b",
                Y: "\u2144",
                1: "\u21c2",
                2: "\u1105",
                3: "\u0190",
                4: "\u3123",
                5: "\u078e",
                6: "9",
                7: "\u3125",
                "&": "\u214b",
                ".": "\u02d9",
                '\"': "\u201e",
                ";": "\u061b",
                "[": "]",
                "(": ")",
                "{": "}",
                "?": "\xBF",
                "!": "\xA1",
                "\'": ",",
                "<": ">",
                "\u203e": "_",
                "\xAF": "_",
                "\u203f": "\u2040",
                "\u2045": "\u2046",
                "\u2234": "\u2235",
                "\x0D": "\x0A",
                ß: "\u1660",
                "\u0308": "\u0324",
                ä: "\u0250\u0324",
                ö: "o\u0324",
                ü: "n\u0324",
                Ä: "\u2200\u0324",
                Ö: "O\u0324",
                Ü: "\u2229\u0324",
                "\xB4": " \u0317",
                é: "\u01dd\u0317",
                á: "\u0250\u0317",
                ó: "o\u0317",
                ú: "n\u0317",
                É: "\u018e\u0317",
                Á: "\u2200\u0317",
                Ó: "O\u0317",
                Ú: "\u2229\u0317",
                "`": " \u0316",
                è: "\u01dd\u0316",
                à: "\u0250\u0316",
                ò: "o\u0316",
                ù: "n\u0316",
                È: "\u018e\u0316",
                À: "\u2200\u0316",
                Ò: "O\u0316",
                Ù: "\u2229\u0316",
                "^": " \u032e",
                ê: "\u01dd\u032e",
                â: "\u0250\u032e",
                ô: "o\u032e",
                û: "n\u032e",
                Ê: "\u018e\u032e",
                Â: "\u2200\u032e",
                Ô: "O\u032e",
                Û: "\u2229\u032e"
            }
        },
        mirror: {
            init: function() {
                for (i in this["map"]) {
                    this["map"][this["map"][i]] = i
                }
            },
            encode: function(_0x59eex43) {
                for (var _0x59eexbe, _0x59eexbf = [], _0x59eexc0 = [], _0x59eexc1 = 0, _0x59eex40 = _0x59eex43["length"]; _0x59eex40 > _0x59eexc1; _0x59eexc1++) {
                    (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc1)), _0x59eexc1 > 0 && ("\u0308" == _0x59eexbe || "\u0300" == _0x59eexbe || "\u0301" == _0x59eexbe || "\u0302" == _0x59eexbe) ? ((_0x59eexbe = this["map"][_0x59eex43["charAt"](_0x59eexc1 - 1) + _0x59eexbe]), _0x59eexbf["pop"]()) : ((_0x59eexbe = this["map"][_0x59eexbe]), "undefined" == typeof _0x59eexbe && (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc1))), "\x0A" == _0x59eexbe ? (_0x59eexc0["push"](_0x59eexbf["reverse"]()["join"]("")), (_0x59eexbf = [])) : _0x59eexbf["push"](_0x59eexbe)
                }
                return _0x59eexc0["push"](_0x59eexbf["reverse"]()["join"]("")), _0x59eexc0["join"]("\x0A")
            },
            decode: function(_0x59eex43) {
                for (var _0x59eexbe, _0x59eexbf = [], _0x59eexc0 = [], _0x59eexc1 = 0, _0x59eex40 = _0x59eex43["length"]; _0x59eex40 > _0x59eexc1; _0x59eexc1++) {
                    (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc1)), _0x59eexc1 > 0 && ("\u0308" == _0x59eexbe || "\u0300" == _0x59eexbe || "\u0301" == _0x59eexbe || "\u0302" == _0x59eexbe) ? ((_0x59eexbe = this["map"][_0x59eex43["charAt"](_0x59eexc1 - 1) + _0x59eexbe]), _0x59eexbf["pop"]()) : ((_0x59eexbe = this["map"][_0x59eexbe]), "undefined" == typeof _0x59eexbe && (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc1))), "\x0A" == _0x59eexbe ? (_0x59eexc0["push"](_0x59eexbf["reverse"]()["join"]("")), (_0x59eexbf = [])) : _0x59eexbf["push"](_0x59eexbe)
                }
                return _0x59eexc0["push"](_0x59eexbf["reverse"]()["join"]("")), _0x59eexc0["join"]("\x0A")
            },
            map: {
                a: "\u0252",
                b: "d",
                c: "\u0254",
                e: "\u0258",
                f: "\u13b8",
                g: "\u01eb",
                h: "\u029c",
                j: "\ua781",
                k: "\u029e",
                l: "|",
                n: "\u1d0e",
                p: "q",
                r: "\u027f",
                s: "\ua645",
                t: "\u019a",
                y: "\u028f",
                z: "\u01b9",
                B: "\u1660",
                C: "\u0186",
                D: "\u15e1",
                E: "\u018e",
                F: "\ua7fb",
                G: "\u13ae",
                J: "\u10b1",
                K: "\u22ca",
                L: "\u2143",
                N: "\u0376",
                P: "\ua7fc",
                Q: "\u1ecc",
                R: "\u042f",
                S: "\ua644",
                Z: "\u01b8",
                1: "",
                2: "",
                3: "",
                4: "",
                5: "",
                6: "",
                7: "",
                "&": "",
                ";": "",
                "[": "]",
                "(": ")",
                "{": "}",
                "?": "\u2e2e",
                "<": ">",
                ä: "\u0252\u0308",
                ß: "\u1660",
                "\xB4": "`",
                é: "\u0258\u0300",
                á: "\u0252\u0300",
                ó: "\xF2",
                ú: "\xF9",
                É: "\u018e\u0300",
                Á: "\xC0",
                Ó: "\xD2",
                Ú: "\xD9",
                "`": "\xB4",
                è: "\u0258\u0301",
                à: "\u0252\u0301",
                È: "\u018e\u0301",
                ê: "\u0258\u0302",
                â: "\u0252\u0302",
                Ê: "\u018e\u0302",
                Ø: "\u1d13",
                ø: "\u1d13"
            }
        },
        creepify: {
            init: function() {
                for (var _0x59eex43 = 768; 789 >= _0x59eex43; _0x59eex43++) {
                    this["diacriticsTop"]["push"](String["fromCharCode"](_0x59eex43))
                }
                for (var _0x59eex43 = 790; 819 >= _0x59eex43; _0x59eex43++) {
                    794 != _0x59eex43 && 795 != _0x59eex43 && this["diacriticsBottom"]["push"](String["fromCharCode"](_0x59eex43))
                }
                this["diacriticsTop"]["push"](String["fromCharCode"](794)), this["diacriticsTop"]["push"](String["fromCharCode"](795));
                for (var _0x59eex43 = 820; 824 >= _0x59eex43; _0x59eex43++) {
                    this["diacriticsMiddle"]["push"](String["fromCharCode"](_0x59eex43))
                }
                for (var _0x59eex43 = 825; 828 >= _0x59eex43; _0x59eex43++) {
                    this["diacriticsBottom"]["push"](String["fromCharCode"](_0x59eex43))
                }
                for (var _0x59eex43 = 829; 836 >= _0x59eex43; _0x59eex43++) {
                    this["diacriticsTop"]["push"](String["fromCharCode"](_0x59eex43))
                }
                this["diacriticsTop"]["push"](String["fromCharCode"](836)), this["diacriticsBottom"]["push"](String["fromCharCode"](837)), this["diacriticsTop"]["push"](String["fromCharCode"](838)), this["diacriticsBottom"]["push"](String["fromCharCode"](839)), this["diacriticsBottom"]["push"](String["fromCharCode"](840)), this["diacriticsBottom"]["push"](String["fromCharCode"](841)), this["diacriticsTop"]["push"](String["fromCharCode"](842)), this["diacriticsTop"]["push"](String["fromCharCode"](843)), this["diacriticsTop"]["push"](String["fromCharCode"](844)), this["diacriticsBottom"]["push"](String["fromCharCode"](845)), this["diacriticsBottom"]["push"](String["fromCharCode"](846)), this["diacriticsTop"]["push"](String["fromCharCode"](848)), this["diacriticsTop"]["push"](String["fromCharCode"](849)), this["diacriticsTop"]["push"](String["fromCharCode"](850)), this["diacriticsBottom"]["push"](String["fromCharCode"](851)), this["diacriticsBottom"]["push"](String["fromCharCode"](852)), this["diacriticsBottom"]["push"](String["fromCharCode"](853)), this["diacriticsBottom"]["push"](String["fromCharCode"](854)), this["diacriticsTop"]["push"](String["fromCharCode"](855)), this["diacriticsTop"]["push"](String["fromCharCode"](856)), this["diacriticsBottom"]["push"](String["fromCharCode"](857)), this["diacriticsBottom"]["push"](String["fromCharCode"](858)), this["diacriticsTop"]["push"](String["fromCharCode"](859)), this["diacriticsBottom"]["push"](String["fromCharCode"](860)), this["diacriticsTop"]["push"](String["fromCharCode"](861)), this["diacriticsTop"]["push"](String["fromCharCode"](861)), this["diacriticsBottom"]["push"](String["fromCharCode"](863)), this["diacriticsTop"]["push"](String["fromCharCode"](864)), this["diacriticsTop"]["push"](String["fromCharCode"](865))
            },
            encode: function(_0x59eexbe) {
                var _0x59eexbf, _0x59eexc0 = "";
                for (i in _0x59eexbe) {
                    if (((_0x59eexbf = _0x59eexbe[i]), this["options"]["middle"] && (_0x59eexbf += this["diacriticsMiddle"][Math["floor"](Math["random"]() * this["diacriticsMiddle"]["length"])]), this["options"]["top"])) {
                        for (var _0x59eexc1 = this["diacriticsTop"]["length"] - 1, _0x59eex40 = 0, _0x59eex37 = this["options"]["maxHeight"] - Math["random"]() * ((this["options"]["randomization"] / 100) * this["options"]["maxHeight"]); _0x59eex37 > _0x59eex40; _0x59eex40++) {
                            _0x59eexbf += this["diacriticsTop"][Math["floor"](Math["random"]() * _0x59eexc1)]
                        }
                    }
                    if (this["options"]["bottom"]) {
                        for (var _0x59eexc2 = this["diacriticsBottom"]["length"] - 1, _0x59eex40 = 0, _0x59eex37 = this["options"]["maxHeight"] - Math["random"]() * ((this["options"]["randomization"] / 100) * this["options"]["maxHeight"]); _0x59eex37 > _0x59eex40; _0x59eex40++) {
                            _0x59eexbf += this["diacriticsBottom"][Math["floor"](Math["random"]() * _0x59eexc2)]
                        }
                    }
                    _0x59eexc0 += _0x59eexbf
                }
                return _0x59eexc0
            },
            decode: function(_0x59eexbe) {
                var _0x59eexbf, _0x59eexc0 = "";
                for (i in _0x59eexbe) {
                    (_0x59eexbf = _0x59eexbe[i]["charCodeAt"](0)), (768 > _0x59eexbf || _0x59eexbf > 865) && (_0x59eexc0 += _0x59eexbe[i])
                }
                return _0x59eexc0
            },
            diacriticsTop: [],
            diacriticsMiddle: [],
            diacriticsBottom: [],
            options: {
                top: !0,
                middle: !0,
                bottom: !0,
                maxHeight: 15,
                randomization: 100
            }
        },
        bubbles: {
            init: function() {
                for (var _0x59eex43 = 49; 57 >= _0x59eex43; _0x59eex43++) {
                    this["map"][String["fromCharCode"](_0x59eex43)] = String["fromCharCode"](_0x59eex43 + 9263)
                }
                this["map"][0] = "\u24ea";
                for (var _0x59eex43 = 65; 90 >= _0x59eex43; _0x59eex43++) {
                    this["map"][String["fromCharCode"](_0x59eex43)] = String["fromCharCode"](_0x59eex43 + 9333)
                }
                for (var _0x59eex43 = 97; 122 >= _0x59eex43; _0x59eex43++) {
                    this["map"][String["fromCharCode"](_0x59eex43)] = String["fromCharCode"](_0x59eex43 + 9327)
                }
                for (_0x59eex43 in this["map"]) {
                    this["mapInverse"][this["map"][_0x59eex43]] = _0x59eex43
                }
            },
            encode: function(_0x59eexbe) {
                var _0x59eexbf, _0x59eexc0 = "",
                    _0x59eexc1 = !0;
                for (i in _0x59eexbe) {
                    (_0x59eexbf = this["map"][_0x59eexbe[i]]), "undefined" == typeof _0x59eexbf && (_0x59eexbe[i]["charCodeAt"](0) >= 33 ? ((_0x59eexbf = _0x59eexbe[i] + String["fromCharCode"](8413)), _0x59eexc1 || (_0x59eexbf = String["fromCharCode"](8239) + String["fromCharCode"](160) + String["fromCharCode"](160) + String["fromCharCode"](8239) + _0x59eexbf)) : (_0x59eexbf = _0x59eexbe[i])), (_0x59eexc0 += _0x59eexbf), (_0x59eexc1 = "\x0A" == _0x59eexbf)
                }
                return _0x59eexc0
            },
            decode: function(_0x59eexbe) {
                var _0x59eexbf, _0x59eexc0 = "",
                    _0x59eexc1 = "";
                for (i in _0x59eexbe) {
                    (_0x59eexbf = this["mapInverse"][_0x59eexbe[i]]), (_0x59eexc0 += "undefined" == typeof _0x59eexbf ? _0x59eexbe[i] : _0x59eexbf)
                }
                for (i in _0x59eexc0) {
                    (_0x59eexbf = _0x59eexc0[i]["charCodeAt"](0)), 160 != _0x59eexbf && 8239 != _0x59eexbf && 8413 != _0x59eexbf && (_0x59eexc1 += _0x59eexc0[i])
                }
                return _0x59eexc1
            },
            map: {},
            mapInverse: {}
        },
        squares: {
            init: function() {},
            encode: function(_0x59eexbe) {
                var _0x59eexbf, _0x59eexc0 = "",
                    _0x59eexc1 = !0;
                for (i in _0x59eexbe) {
                    _0x59eexbe[i]["charCodeAt"](0) >= 33 ? ((_0x59eexbf = _0x59eexbe[i] + String["fromCharCode"](8414)), _0x59eexc1 || (_0x59eexbf = String["fromCharCode"](8239) + String["fromCharCode"](160) + String["fromCharCode"](160) + String["fromCharCode"](8239) + _0x59eexbf)) : (_0x59eexbf = _0x59eexbe[i]), (_0x59eexc0 += _0x59eexbf), (_0x59eexc1 = "\x0A" == _0x59eexbf)
                }
                return _0x59eexc0
            },
            decode: function(_0x59eexbe) {
                var _0x59eexbf, _0x59eexc0 = "";
                for (i in _0x59eexbe) {
                    (_0x59eexbf = _0x59eexbe[i]["charCodeAt"](0)), 160 != _0x59eexbf && 8239 != _0x59eexbf && 8414 != _0x59eexbf && (_0x59eexc0 += _0x59eexbe[i])
                }
                return _0x59eexc0
            }
        },
        roundsquares: {
            init: function() {},
            encode: function(_0x59eexbe) {
                var _0x59eexbf, _0x59eexc0 = "",
                    _0x59eexc1 = !0;
                for (i in _0x59eexbe) {
                    _0x59eexbe[i]["charCodeAt"](0) >= 33 ? ((_0x59eexbf = _0x59eexbe[i] + String["fromCharCode"](8419)), _0x59eexc1 || (_0x59eexbf = String["fromCharCode"](160) + String["fromCharCode"](160) + String["fromCharCode"](160) + _0x59eexbf)) : (_0x59eexbf = _0x59eexbe[i]), (_0x59eexc0 += _0x59eexbf), (_0x59eexc1 = "\x0A" == _0x59eexbf)
                }
                return _0x59eexc0
            },
            decode: function(_0x59eexbe) {
                var _0x59eexbf, _0x59eexc0 = "";
                for (i in _0x59eexbe) {
                    (_0x59eexbf = _0x59eexbe[i]["charCodeAt"](0)), 160 != _0x59eexbf && 8239 != _0x59eexbf && 8419 != _0x59eexbf && (_0x59eexc0 += _0x59eexbe[i])
                }
                return _0x59eexc0
            }
        },
        bent: {
            init: function() {
                for (i in this["map"]) {
                    this["map"][this["map"][i]] = i
                }
            },
            encode: function(_0x59eex43) {
                for (var _0x59eexbe, _0x59eexbf = "", _0x59eexc0 = 0, _0x59eexc1 = _0x59eex43["length"]; _0x59eexc1 > _0x59eexc0; _0x59eexc0++) {
                    (_0x59eexbe = this["map"][_0x59eex43["charAt"](_0x59eexc0)]), "undefined" == typeof _0x59eexbe && (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc0)), (_0x59eexbf += _0x59eexbe)
                }
                return _0x59eexbf
            },
            decode: function(_0x59eex43) {
                for (var _0x59eexbe, _0x59eexbf = "", _0x59eexc0 = 0, _0x59eexc1 = _0x59eex43["length"]; _0x59eexc1 > _0x59eexc0; _0x59eexc0++) {
                    (_0x59eexbe = this["map"][_0x59eex43["charAt"](_0x59eexc0)]), "undefined" == typeof _0x59eexbe && (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc0)), (_0x59eexbf += _0x59eexbe)
                }
                return _0x59eexbf
            },
            map: {
                a: "\u0105",
                b: "\u048d",
                c: "\xE7",
                d: "\u056a",
                e: "\u04bd",
                f: "\u0192",
                g: "\u0581",
                h: "\u0570",
                i: "\xEC",
                j: "\u029d",
                k: "\u049f",
                l: "\u04c0",
                m: "\u028d",
                n: "\u0572",
                o: "\u0585",
                p: "\u0584",
                q: "\u0566",
                r: "\u027e",
                s: "\u0282",
                t: "\u0567",
                u: "\u0574",
                v: "\u0475",
                w: "\u0561",
                x: "\xD7",
                y: "\u057e",
                z: "\u0540",
                A: "\u023a",
                B: "\u03b2",
                C: "\u21bb",
                D: "\u13a0",
                E: "\u0190",
                F: "\u0191",
                G: "\u0193",
                H: "\u01f6",
                I: "\u012f",
                J: "\u0644",
                K: "\u04a0",
                L: "\ua748",
                M: "\u2c6e",
                N: "\u17a0",
                O: "\u0da7",
                P: "\u03c6",
                Q: "\u04a8",
                R: "\u0f60",
                S: "\u03da",
                T: "\u0372",
                U: "\u0531",
                V: "\u1efc",
                W: "\u0c1a",
                X: "\u10ef",
                Y: "\u04cb",
                Z: "\u0240",
                0: "\u2298",
                1: "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd",
                2: "\u03e9",
                3: "\u04e0",
                4: "\u096b",
                5: "\u01bc",
                6: "\u03ec",
                7: "7",
                8: "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd",
                9: "\u096f",
                "&": "\u214b",
                "(": "{",
                ")": "}",
                "{": "(",
                "}": ")",
                ä: "\u0105\u0308",
                ö: "\u0585\u0308",
                ü: "\u0574\u0308",
                Ä: "\u023a\u0308",
                Ö: "\u0da7\u0308",
                Ü: "\u0531\u0308",
                é: "\u04bd\u0301",
                á: "\u0105\u0301",
                ó: "\u0585\u0301",
                ú: "\u0574\u0301",
                É: "\u0190\u0301",
                Á: "\u023a\u0301",
                Ó: "\u0da7\u0301",
                Ú: "\u0531\u0301",
                è: "\u04bd\u0300",
                à: "\u0105\u0300",
                ò: "\u0585\u0300",
                ù: "\u0574\u0300",
                È: "\u0190\u0300",
                À: "\u023a\u0300",
                Ò: "\u0da7\u0300",
                Ù: "\u0531\u0300",
                ê: "\u04bd\u0302",
                â: "\u0105\u0302",
                ô: "\u0585\u0302",
                û: "\u0574\u0302",
                Ê: "\u0190\u0302",
                Â: "\u023a\u0302",
                Ô: "\u0da7\u0302",
                Û: "\u0531\u0302"
            }
        },
        tiny: {
            init: function() {
                for (i in this["map"]) {
                    this["map"][this["map"][i]] = i
                }
            },
            encode: function(_0x59eex43) {
                var _0x59eexbe, _0x59eexbf = "";
                _0x59eex43 = _0x59eex43["toUpperCase"]();
                for (var _0x59eexc0 = 0, _0x59eexc1 = _0x59eex43["length"]; _0x59eexc1 > _0x59eexc0; _0x59eexc0++) {
                    (_0x59eexbe = this["map"][_0x59eex43["charAt"](_0x59eexc0)]), "undefined" == typeof _0x59eexbe && (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc0)), (_0x59eexbf += _0x59eexbe)
                }
                return _0x59eexbf
            },
            decode: function(_0x59eex43) {
                for (var _0x59eexbe, _0x59eexbf = "", _0x59eexc0 = 0, _0x59eexc1 = _0x59eex43["length"]; _0x59eexc1 > _0x59eexc0; _0x59eexc0++) {
                    (_0x59eexbe = this["map"][_0x59eex43["charAt"](_0x59eexc0)]), "undefined" == typeof _0x59eexbe && (_0x59eexbe = _0x59eex43["charAt"](_0x59eexc0)), (_0x59eexbf += _0x59eexbe)
                }
                return _0x59eexbf
            },
            map: {
                A: "\u1d00",
                B: "\u0299",
                C: "\u1d04",
                D: "\u1d05",
                E: "\u1d07",
                F: "\ua730",
                G: "\u0262",
                H: "\u029c",
                I: "\u026a",
                J: "\u1d0a",
                K: "\u1d0b",
                L: "\u029f",
                M: "\u1d0d",
                N: "\u0274",
                O: "\u1d0f",
                P: "\u1d18",
                Q: "Q",
                R: "\u0280",
                S: "\ua731",
                T: "\u1d1b",
                U: "\u1d1c",
                V: "\u1d20",
                W: "\u1d21",
                X: "x",
                Y: "\u028f",
                Z: "\u1d22"
            }
        }
    };
    for (i in this["tools"]) {
        this["tools"][i]["init"]()
    }
    this["getHTML"] = function(_0x59eex43) {
        for (var _0x59eexbe, _0x59eexbf = "", _0x59eexc0 = !0, _0x59eexc1 = 0, _0x59eex40 = 0, _0x59eex37 = 0, _0x59eexc2 = _0x59eex43["length"]; _0x59eexc2 > _0x59eex37; _0x59eex37++) {
            (_0x59eexbe = _0x59eex43["charCodeAt"](_0x59eex37)), 10 == _0x59eexbe || 13 == _0x59eexbe ? ((_0x59eexbf += "<br>\x0A"), (_0x59eexc0 = !0)) : 32 == _0x59eexbe ? _0x59eexc0 ? ((_0x59eexbf += " "), (_0x59eexc0 = !1)) : ((_0x59eexbf += " "), (_0x59eexc0 = !0)) : (_0x59eexbe >= 55296 && 56319 >= _0x59eexbe ? ((_0x59eexc1 = _0x59eexbe), (_0x59eex40 = 0)) : _0x59eexc1 > 0 ? (_0x59eexbe >= 56320 && 57343 >= _0x59eexbe && (_0x59eex40 = 1024 * (_0x59eexc1 - 55296) + (_0x59eexbe - 56320) + 65536), (_0x59eexc1 = 0)) : (_0x59eex40 = _0x59eexbe), 0 != _0x59eex40 && ((_0x59eexbf += "&#x" + _0x59eex40.toString(16) + ";"), (_0x59eexc0 = !0)))
        }
        return _0x59eexbf
    }
}

function cuteText(_0x59eex4) {
    if (_0x59eex4["trim"]() === "") {
        return ""
    }
    qi = -1;
    var _0x59eexc4 = boundingString(Math["floor"](Math["random"]() * 2) + 1);
    return (_0x59eexc4 + "  \ud83c\udf80  " + _0x59eex4["split"](/([!?.]+)/gi)["map"](cuteSentence)["join"]("") + "  \ud83c\udf80  " + esrever["reverse"](_0x59eexc4))
}

function cuteSentence(_0x59eexc6) {
    return _0x59eexc6["split"](/([\s,]+)/gi)["map"](cuteWord)["join"]("")
}

function cuteWord(_0x59eexc8) {
    if (_0x59eexc8 === "" || /[[!?.\s,]+]/gi ["test"](_0x59eexc8)) {
        return _0x59eexc8
    }
    _0x59eexc8 = roundReplace(_0x59eexc8);
    _0x59eexc8 = punctReplace(_0x59eexc8);
    _0x59eexc8 = emojiReplace(_0x59eexc8);
    return scriptify(_0x59eexc8)
}
var qi = -1;
var qa = ["\u275d", "\u275e"];

function quotes() {
    qi++;
    if (qi === 2) {
        qi = 0
    }
    return qa[qi]
}

function punctReplace(_0x59eexc8) {
    return _0x59eexc8["split"]("")["map"](function(_0x59eex37) {
        if (_0x59eex37 === "!") {
            return randomElement(["\u2763", "\u2762"])
        } else {
            if (_0x59eex37 === "?") {
                return randomElement(["\xBF", "?"])
            } else {
                if (_0x59eex37 === '\"') {
                    return quotes()
                } else {
                    return _0x59eex37
                }
            }
        }
    })["join"]("")
}

function emojiReplace(_0x59eexc8) {
    return _0x59eexc8["replace"](":)", randomElement(emoji[":)"]))["replace"]("(:", randomElement(emoji[":)"]))["replace"]("^^", randomElement(emoji["^^"]))["replace"](":P", randomElement(emoji[":p"]))["replace"](":p", randomElement(emoji[":p"]))["replace"](":D", randomElement(emoji[":D"]))["replace"]("<3", randomElement(emoji["<3"]))["replace"]("(y)", randomElement(emoji["(y)"]))["replace"]("(Y)", randomElement(emoji["(y)"]))
}

function roundReplace(_0x59eex4) {
    return _0x59eex4["split"]("")["map"](function(_0x59eex37) {
        if (_0x59eex37["toLowerCase"]() === "o" || _0x59eex37 === "0") {
            return randomElement(round)
        } else {
            return _0x59eex37
        }
    })["join"]("")
}
var emoji = {
    ":)": ["\u0669(\u02d8\u25e1\u02d8)\u06f6", "(\u2022\u25e1\u2022)", "(\u0254\u25d4\u203f\u25d4)\u0254", "\u2740\u25d5\u203f\u25d5\u2740", "(\uff61\u25d5\u203f\u25d5\uff61)", "\u25cf\u203f\u25cf", "\u25d5\u203f\u25d5", "\ud83d\ude0d", "\u30c4", "(\u273f\u30d8\u1d25\u30d8)", "\ud83c\udf18\u203f\ud83c\udf18", "(\u3065\uff61\u25d5\u203f\u203f\u25d5\uff61)\u3065", "(/\u25d4\u25e1\u25d4)/", "s(^\u203f^)-b", "(\u4eba\u25d5\u203f\u25d5)", "(\u273f\u2579\u25e1\u2579)", "\u25d4\u25e1\u25d4"],
    "^^": ["(^\u25bd^)", "(\u273f^\u25bd^)", "\u1d54\u2323\u1d54", "\u1d54\u1d25\u1d54", "(\u2267\u25e1\u2266)", "^\u3145^", "^\u3142^", "(\u2312\u203f\u2312)", "\u25e0\u25e1\u25e0", "\u2040\u203f\u2040", ""],
    ":p": [":\xDE", ""],
    ":D": ["(\uff89\u25d5\u30ee\u25d5)\uff89*:\uff65\uff9f\u2727", "(\u273f\u25d5\u15dc\u25d5)\u2501\u266b.*\uff65\uff61\uff9f", "\u1555(\u141b)\u1557"],
    "<3": ["\u2661", "\u2764", "\u2665", "\u2765", "\ud83d\udc98", "\ud83d\udc99", "\ud83d\udc97", "\ud83d\udc96", "\ud83d\udc95", "\ud83d\udc93", "\ud83d\udc9e", "\ud83d\udc9d", "\ud83d\udc9f"],
    "(y)": ["\ud83d\udc4d", "\ud83d\udc4c"]
};
var round = ["\u2741", "\ud83c\udf3a", "\u2740", "\ud83d\udcae", "\ud83c\udff5", "\ud83c\udf38", "\u262f", "\ud83d\ude0d", "\u2661", "\ud83c\udf69", "\ud83c\udf6c", "\ud83d\udc99", "\ud83c\udf1e", "\ud83d\udc8d", "\ud83c\udf6a", "\u2764", "\ud83d\udc97", "\ud83c\udf51", "\ud83d\udc9e"];
var food = ["\ud83c\udf6c", "\ud83c\udf6d", "\ud83c\udf52", "\ud83c\udf4e", "\ud83c\udf49", "\ud83c\udf47", "\ud83c\udf53", "\ud83c\udf4c", "\ud83c\udf51", "\ud83c\udf70", "\ud83c\udf82", "\ud83c\udf69", "\ud83c\udf6a", "\ud83c\udf67", "\ud83c\udf66", "\ud83c\udf6b", "\ud83c\udf61"];
var flowers = ["\u273f", "\u2698", "\u2766", "\u2767", "\u273e", "\u2741", "\u2740", "\ud83d\udc90", "\ud83c\udf38", "\ud83d\udcae", "\ud83c\udff5", "\ud83c\udf39", "\ud83c\udf3a", "\ud83c\udf3b", "\ud83c\udf37", "\u2618", "\ud83c\udf31", "\ud83c\udf32", "\ud83c\udf33", "\ud83c\udf34", "\ud83c\udf3f", "\ud83c\udf42"];
var twinkles = ["\u269b", "\ud83c\udf0c", "\ud83c\udf20", "*", ":", "\uff61", "\uff65\uff9f", "\u2727", "\u272e", "\u2605", "\u2729", "\u22c6", ".", "\xB0", "`", "\u2734", "\uff61", "\u2734", "\u22c6", "\u2733", "\u2736", "\u2737", "\u2748"];
var animals = ["\ud83d\udc2f", "\ud83d\udc0e", "\ud83d\udc16", "\ud83d\udc37", "\ud83d\udc0f", "\ud83d\udc11", "\ud83d\udc10", "\ud83d\udc2b", "\ud83d\udc18", "\ud83d\udc2d", "\ud83d\udc01", "\ud83d\udc00", "\ud83d\udc39", "\ud83d\udc30", "\ud83d\udc07", "\ud83d\udc3f", "\ud83d\udc3b", "\ud83d\udc28", "\ud83d\udc3c", "\ud83d\udc3e", "\ud83d\udc14", "\ud83d\udc13", "\ud83d\udc23", "\ud83d\udc24", "\ud83d\udc25", "\ud83d\udc26", "\ud83d\udc27", "\ud83d\udd4a", "\ud83d\udc38", "\ud83d\udc22", "\ud83d\udc33", "\ud83d\udc0b", "\ud83d\udc2c", "\ud83d\udc1f", "\ud83d\udc20", "\ud83d\udc21", "\ud83d\udc19", "\ud83d\udc1a", "\ud83d\udc0c", "\ud83d\udc1e"];
var plants = ["\u273f", "\u2698", "\u2766", "\u2767", "\u273e", "\u2741", "\u2740", "\ud83d\udc90", "\ud83c\udf38", "\ud83d\udcae", "\ud83c\udff5", "\ud83c\udf39", "\ud83c\udf3a", "\ud83c\udf3b", "\ud83c\udf37", "\u2618", "\ud83c\udf31", "\ud83c\udf32", "\ud83c\udf33", "\ud83c\udf34", "\ud83c\udf3f", "\ud83c\udf42"];
var misc = ["\ud83c\udf0c", "\ud83c\udf20", "\ud83c\udf89", "\ud83c\udf8a", "\ud83c\udf88", "\ud83d\udc8c", "\ud83c\udf8e", "\ud83c\udf81", "\ud83c\udf80", "\ud83d\udd6f", "\ud83d\udd2e", "\ud83d\udec0", "\ud83c\udf96", "\ud83c\udfc6", "\ud83c\udfc5", "\ud83d\udc51", "\ud83d\udc8d", "\ud83d\udc76", "\ud83d\udc7c", "\ud83d\udc78", "\ud83d\udc6f", "\ud83d\udc52", "\ud83d\udc7b"];
var music = ["\u266b", "\u266c", "\u266a", "\u2669", "\xB0", "\uff61", "\u2727", "\ud83c\udfbb", "\ud83c\udfba", "\ud83c\udfb8", "\ud83c\udfb7", "\ud83d\udcef"];
var flourish = ["\u2022?((\xAF\xB0\xB7._.\u2022 ", "\u0131ll\u0131ll\u0131 ", "\xB8,\xF8\xA4\xBA\xB0`\xB0\xBA\xA4\xF8,\xB8\xB8,\xF8\xA4\xBA\xB0 ", "\xB0\xB0\xB0\xB7.\xB0\xB7..\xB7\xB0\xAF\xB0\xB7._.\xB7 ", "\u2022\xB4\xAF`\u2022. ", "\xD7\xBA\xB0\u201d\u02dc`\u201d\xB0\xBA\xD7 ", "\u2022]\u2022\u2022\xB4\xBA\xB4\u2022\xBB ", "]|I{\u2022------\xBB ", "\xA7.\u2022\xB4\xA8\'\xB0\xF7\u2022..\xD7 ", "\u2022\xB0\xAF`\u2022\u2022 ", "(\xAF`\xB7.\xB8\xB8.\xB7\xB4\xAF`\xB7.\xB8\xB8.-> ", "*\xB4\xAF`*.\xB8\xB8.*\xB4\xAF`* ", "(\xAF`\xB7.\xB8\xB8.-> \xB0\xBA ", "\xB0\xB7.\xB8.\xB7\xB0\xAF\xB0\xB7.\xB8.\xB7\xB0\xAF\xB0\xB7.\xB8.-> ", "\u2022._.\u2022\u2022\xB4\xAF``\u2022.\xB8\xB8.\u2022` ", "\xB8\u201e.-\u2022~\xB9\xB0\u201d\u02c6\u02dc\xA8 ", "(\xAF\xB4\u2022._.\u2022 ", "\u2022\u2022\xA4(`\xD7", "\u2022\xB4\xAF`\u2022\xBB ", "`\u2022.,\xB8\xB8,.\u2022\xB4\xAF ", "\xB8,\xF8\xA4\xBA\xB0`\xB0\xBA\xA4\xF8,\xB8 ", ".o0\xD7X\xD70o. ", ",-*\'^\'~*-.,_,.-*~ ", "`\u2022.\xB8\xB8.\u2022\xB4\xB4\xAF`\u2022\u2022._.\u2022 ", "\u2014(\u2022\u2022\xF7", "\xA4\xB8\xB8.\u2022\xB4\xAF`\u2022\xB8\xB8.\u2022..>> ", "\u2022\u2022.\u2022\xB4\xAF`\u2022.\u2022\u2022 ", ".\u2022\xB0\xA4*(\xAF`\u2605\xB4\xAF)*\xA4\xB0 ", "\u0e51\u06de\u0e51,\xB8\xB8,\xF8\xA4\xBA\xB0`\xB0\u0e51\u06e9 ", "-\u6f2b~*\'\xA8\xAF\xA8\'*\xB7\u821e~ ", "\u2605\xB7.\xB7\xB4\xAF`\xB7.\xB7\u2605 ", "\u2581 \u2582 \u2584 \u2585 \u2586 \u2587 \u2588 ", "\u2580\u2584\u2580\u2584\u2580\u2584 ", "\u258c\u2502\u2588\u2551\u258c\u2551\u258c\u2551 "];

function boundingString(_0x59eex40) {
    return randomElement([foodString, twinkleString, animalString, flourishString])(_0x59eex40)
}

function foodString(_0x59eex40) {
    return new Array(_0x59eex40 + 1)["join"]("0")["split"]("")["map"](function(_0x59eex37) {
        return randomElement(food)
    })["join"](" \u22c6 ")
}

function twinkleString(_0x59eex40) {
    return new Array(_0x59eex40 + 1)["join"]("0")["split"]("")["map"](function() {
        return randomElement(twinkles)
    })["join"]("")
}

function animalString(_0x59eex40) {
    return new Array(_0x59eex40 + 1)["join"]("0")["split"]("")["map"](function(_0x59eex37) {
        return randomElement(animals)
    })["join"](" \u22c6 ")
}

function flourishString(_0x59eex40) {
    return randomElement(flourish)
}

function scriptify(_0x59eex4) {
    var _0x59eex3 = {
        0: "\ud835\udfe2",
        1: "\ud835\udfe3",
        2: "\ud835\udfe4",
        3: "\ud835\udfe5",
        4: "\ud835\udfe6",
        5: "\ud835\udfe7",
        6: "\ud835\udfe8",
        7: "\ud835\udfe9",
        8: "\ud835\udfea",
        9: "\ud835\udfeb",
        a: "\ud835\udcb6",
        b: "\ud835\udcb7",
        c: "\ud835\udcb8",
        d: "\ud835\udcb9",
        e: "\ud835\udc52",
        f: "\ud835\udcbb",
        g: "\ud835\udc54",
        h: "\ud835\udcbd",
        i: "\ud835\udcbe",
        j: "\ud835\udcbf",
        k: "\ud835\udcc0",
        l: "\ud835\udcc1",
        m: "\ud835\udcc2",
        n: "\ud835\udcc3",
        o: "\ud835\udc5c",
        p: "\ud835\udcc5",
        q: "\ud835\udcc6",
        r: "\ud835\udcc7",
        s: "\ud835\udcc8",
        t: "\ud835\udcc9",
        u: "\ud835\udcca",
        v: "\ud835\udccb",
        w: "\ud835\udccc",
        x: "\ud835\udccd",
        y: "\ud835\udcce",
        z: "\ud835\udccf",
        A: "\ud835\udc9c",
        B: "\ud835\udc35",
        C: "\ud835\udc9e",
        D: "\ud835\udc9f",
        E: "\ud835\udc38",
        F: "\ud835\udc39",
        G: "\ud835\udca2",
        H: "\ud835\udc3b",
        I: "\ud835\udc3c",
        J: "\ud835\udca5",
        K: "\ud835\udca6",
        L: "\ud835\udc3f",
        M: "\ud835\udc40",
        N: "\ud835\udca9",
        O: "\ud835\udcaa",
        P: "\ud835\udcab",
        Q: "\ud835\udcac",
        R: "\ud835\udc45",
        S: "\ud835\udcae",
        T: "\ud835\udcaf",
        U: "\ud835\udcb0",
        V: "\ud835\udcb1",
        W: "\ud835\udcb2",
        X: "\ud835\udcb3",
        Y: "\ud835\udcb4",
        Z: "\ud835\udcb5"
    };
    var _0x59eexdf = _0x59eex4["split"]("");
    for (var _0x59eex43 = 0; _0x59eex43 < _0x59eexdf["length"]; _0x59eex43++) {
        if (_0x59eex3[_0x59eexdf[_0x59eex43]["toLowerCase"]()]) {
            _0x59eexdf[_0x59eex43] = _0x59eex3[_0x59eexdf[_0x59eex43]]
        }
    }
    _0x59eex4 = _0x59eexdf["join"]("");
    return _0x59eex4
}

function shuffleArray(_0x59eexe1) {
    var _0x59eexe2 = _0x59eexe1["length"],
        _0x59eexe3, _0x59eexe4;
    while (0 !== _0x59eexe2) {
        _0x59eexe4 = Math["floor"](Math["random"]() * _0x59eexe2);
        _0x59eexe2 -= 1;
        _0x59eexe3 = _0x59eexe1[_0x59eexe2];
        _0x59eexe1[_0x59eexe2] = _0x59eexe1[_0x59eexe4];
        _0x59eexe1[_0x59eexe4] = _0x59eexe3
    }
    return _0x59eexe1
}

function randomElement(_0x59eex37) {
    return _0x59eex37[Math["floor"](Math["random"]() * _0x59eex37["length"])]
}!(function(_0x59eexe6) {
    var _0x59eexc0 = "object" == typeof exports && exports,
        _0x59eexbe = "object" == typeof module && module && module["exports"] == _0x59eexc0 && module,
        _0x59eex40 = "object" == typeof global && global;
    (_0x59eex40["global"] === _0x59eex40 || _0x59eex40["window"] === _0x59eex40) && (_0x59eexe6 = _0x59eex40);
    var _0x59eexbf = /(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g,
        _0x59eex43 = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,
        _0x59eexe7 = function(_0x59eexe6) {
            _0x59eexe6 = _0x59eexe6["replace"](_0x59eexbf, function(_0x59eexe6, _0x59eexc0, _0x59eexbe) {
                return _0x59eexe7(_0x59eexbe) + _0x59eexc0
            })["replace"](_0x59eex43, "$2$1");
            for (var _0x59eexc0 = "", _0x59eexbe = _0x59eexe6["length"]; _0x59eexbe--;) {
                _0x59eexc0 += _0x59eexe6["charAt"](_0x59eexbe)
            }
            return _0x59eexc0
        },
        _0x59eexe8 = {
            version: "<%= version %>",
            reverse: _0x59eexe7
        };
    if ("function" == typeof define && "object" == typeof define["amd"] && define["amd"]) {
        define(function() {
            return _0x59eexe8
        })
    } else {
        if (_0x59eexc0 && !_0x59eexc0["nodeType"]) {
            if (_0x59eexbe) {
                _0x59eexbe["exports"] = _0x59eexe8
            } else {
                for (var _0x59eex37 in _0x59eexe8) {
                    _0x59eexe8["hasOwnProperty"](_0x59eex37) && (_0x59eexc0[_0x59eex37] = _0x59eexe8[_0x59eex37])
                }
            }
        } else {
            _0x59eexe6["esrever"] = _0x59eexe8
        }
    }
})(this);

function fullCrazy(_0x59eex4) {
    if (_0x59eex4["trim"]() === "") {
        return ""
    }
    return randomSymbols(2) + "  " + crazifyText(_0x59eex4) + "  " + randomSymbols(2)
}

function crazifyText(_0x59eex4) {
    _0x59eex4 = _0x59eex4["split"]("");
    for (var _0x59eex43 = 0; _0x59eex43 < _0x59eex4["length"]; _0x59eex43++) {
        _0x59eex4[_0x59eex43] = crazifyCharacter(_0x59eex4[_0x59eex43])
    }
    return _0x59eex4["join"]("")
}

function crazifyCharacter(_0x59eex6) {
    _0x59eex6 = _0x59eex6["toLowerCase"]();
    var _0x59eex3 = {
        "&": "\u214b",
        "%": ["\u214d", "\u2100", "\u2101", "\u2106", "\u2105"],
        0: ["\uff10", "\u0472", "\u0298"],
        1: ["\u2780", "\u2776", "\uff11"],
        2: ["\uff12", "\u2777", "\u2781"],
        3: ["\uff13", "\u2778", "\u2782"],
        4: ["\uff14", "\u2779", "\u2783"],
        5: ["\u277a", "\u2784", "\uff15"],
        6: ["\uff16", "\u277b", "\u2785"],
        7: ["\uff17", "\u277c", "\u2786"],
        8: ["\uff18", "\u2787", "\u277d"],
        9: ["\u2788", "\u277e", "\uff19"],
        "<": ["\u227c", "\u227a", "\u226a", "\u263e", "\u227e", "\u22dc", "\u22de", "\u22d0", "\u2282", "\u228f", "\u2291", "\u300a", "\uff1c", "\u276e", "\u2770", "\u2af7"],
        ">": "\u263d\u226b\u227b\u227d\u227f\u22dd\u22df\u22d1\u2283\u2290\u2292\u2af8\u300b\uff1e\u276f\u2771",
        "[": "\u3010\u3016\u3018\u301a\uff3b",
        "]": "\u3011\u3017\u3019\u301b\uff3d",
        "*": "\u2728\u2729\u272a\u272b\u272c\u272d\u272e\u272f\u2730\u2726\u2731\u2732\u2733\u2734\u2735\u2736\u2737\u058d\u058e\u2738\u2739\u273a\u273b\u273c\u273d\u273e\u273f\u2740\u2741\u2742\u2743\u2744\u2605\u2606\uff0a",
        a: ["\u24b6", "\u24d0", "\u03b1", "\uff21", "\uff41", "\u15e9", "\u5342", "\u0394", "\u0e04", "\u03b1", "\u03ac", "\xC3", "\ud835\udd1e", "\ud835\udcea", "\ud835\udcb6", "\ud835\udcd0", "\ud835\udc00", "\ud835\udc1a", "\ud835\udd38", "\ud835\udd52", "\u1d43"],
        b: ["\u24b7", "\u24d1", "\u0432", "\uff22", "\u4e43", "\uff42", "\u15f7", "\u03b2", "\u0e52", "\u0432", "\u0432", "\u03b2", "\ud835\udd1f", "\ud835\udceb", "\ud835\udcb7", "\ud835\udcd1", "\ud835\udc01", "\ud835\udc1b", "\ud835\udd39", "\ud835\udd53", "\u1d47"],
        c: ["\u24b8", "\u24d2", "\u531a", "\xA2", "\uff23", "\uff43", "\u1455", "\u0106", "\u03c2", "c", "\u03c2", "\u010c", "\u2103", "\ud835\udd20", "\ud835\udcec", "\ud835\udcb8", "\ud835\udcd2", "\ud835\udc02", "\ud835\udc1c", "\u2102", "\ud835\udd54", "\u1d9c"],
        d: ["\u24b9", "\u24d3", "\u2202", "\uff24", "\uff44", "\u15ea", "\u0110", "\u0e54", "\u2202", "\u0111", "\u010e", "\ud835\udd21", "\ud835\udced", "\ud835\udcb9", "\ud835\udcd3", "\ud835\udc03", "\u15ea", "\ud835\udc1d", "\ud835\udd3b", "\ud835\udd55", "\u1d48"],
        e: ["\u24ba", "\u4e47", "\u24d4", "\u0454", "\uff25", "\uff45", "\u15f4", "\u20ac", "\u0454", "\u03b5", "\u03ad", "\u1eb8", "\ud835\udd22", "\ud835\udc86", "\ud835\udc52", "\ud835\udcd4", "\ud835\udc04", "\ud835\udc1e", "\ud835\udd3c", "\ud835\udd56", "\u1d49"],
        f: ["\u24bb", "\u24d5", "\u0192", "\uff26", "\uff46", "\u5343", "\u15b4", "\u2131", "\u0166", "\u0493", "\u0493", "\u0191", "\ud835\udd23", "\ud835\udc87", "\ud835\udcbb", "\ud835\udcd5", "\ud835\udc05", "\ud835\udc1f", "\ud835\udd3d", "\ud835\udd57", "\u1da0"],
        g: ["\u24bc", "\u24d6", "\u0642", "g", "\uff27", "\uff47", "\u01e4", "\u13b6", "\ufeee", "g", "\u0123", "\u011e", "\ud835\udd24", "\ud835\udcf0", "\ud835\udc54", "\ud835\udcd6", "\ud835\udc06", "\ud835\udc20", "\ud835\udd3e", "\ud835\udd58", "\u1d4d", "\u13b6"],
        h: ["\u24bd", "\u5344", "\u24d7", "\u043d", "\uff28", "\uff48", "\u157c", "\u0126", "\u0452", "\u043d", "\u0127", "\u0124", "\ud835\udd25", "\ud835\udcf1", "\ud835\udcbd", "\ud835\udcd7", "\ud835\udc07", "\ud835\udc21", "\u210d", "\ud835\udd59", "\u02b0"],
        i: ["\u24be", "\u24d8", "\u03b9", "\uff29", "\uff49", "\u13a5", "\u4e28", "\u0197", "\u0e40", "\u03b9", "\u03af", "\u012e", "\ud835\udd26", "\ud835\udcf2", "\ud835\udcbe", "\ud835\udcd8", "\ud835\udc08", "\ud835\udc22", "\ud835\udd40", "\ud835\udd5a", "\u1da4"],
        j: ["\u24bf", "\u24d9", "\u05e0", "\uff2a", "\u06b6", "\uff4a", "\u148e", "\u0134", "\u05df", "\u05e0", "\u0458", "\u0134", "\ud835\udd27", "\ud835\udcf3", "\ud835\udcbf", "\ud835\udcd9", "\ud835\udc09", "\ud835\udc23", "\ud835\udd41", "\ud835\udd5b", "\u02b2"],
        k: ["\u24c0", "\u24da", "\u043a", "\uff2b", "\uff4b", "\u16d5", "\u049c", "\u043a", "\u043a", "\u0137", "\u040c", "\ud835\udd28", "\ud835\udcf4", "\ud835\udcc0", "\ud835\udcda", "\ud835\udc0a", "\ud835\udc24", "\ud835\udd42", "\ud835\udd5c", "\u1d4f", "\u049c"],
        l: ["\u24c1", "\u24db", "\u2113", "\u3125", "\uff2c", "\uff4c", "\u14aa", "\u0141", "l", "\u2113", "\u013b", "\u0139", "\ud835\udd29", "\ud835\udcf5", "\ud835\udcc1", "\ud835\udcdb", "\ud835\udc0b", "\ud835\udc25", "\ud835\udd43", "\ud835\udd5d", "\u02e1"],
        m: ["\u24c2", "\u24dc", "\u043c", "\uff2d", "\uff4d", "\u15f0", "\u039c", "\u0e53", "\u043c", "\u043c", "\u03fb", "\ud835\udd2a", "\ud835\udcf6", "\ud835\udcc2", "\ud835\udcdc", "\ud835\udc0c", "\ud835\udc26", "\ud835\udd44", "\ud835\udd5e", "\u1d50", "\u722a"],
        n: ["\u24c3", "\u51e0", "\u24dd", "\u03b7", "\uff2e", "\uff4e", "\u144e", "\u0147", "\u0e20", "\u03b7", "\u03ae", "\u0147", "\ud835\udd2b", "\ud835\udcf7", "\ud835\udcc3", "\ud835\udcdd", "\ud835\udc0d", "\ud835\udc27", "\u2115", "\ud835\udd5f", "\u1db0"],
        o: ["\u24c4", "\u3116", "\u24de", "\u03c3", "\uff2f", "\uff4f", "\u15dd", "\xD8", "\u0e4f", "\u03c3", "\u03cc", "\u1ed6", "\ud835\udd2c", "\ud835\udcf8", "\ud835\udc5c", "\ud835\udcde", "\ud835\udc0e", "\ud835\udc28", "\ud835\udd46", "\ud835\udd60", "\u1d52"],
        p: ["\u24c5", "\u24df", "\u03c1", "\uff30", "\uff50", "\u5369", "\u146d", "\u01a4", "\u05e7", "\u03c1", "\u03c1", "\u01a4", "\ud835\udd2d", "\ud835\udcf9", "\ud835\udcc5", "\ud835\udcdf", "\ud835\udc0f", "\ud835\udc29", "\u2119", "\ud835\udd61", "\u1d56"],
        q: ["\u24c6", "\u24e0", "q", "\uff31", "\uff51", "\u024a", "\u03a9", "\u1ee3", "q", "q", "\u01ea", "\ud835\udd2e", "\ud835\udcfa", "\ud835\udcc6", "\ud835\udce0", "\ud835\udc10", "\ud835\udc2a", "\u211a", "\ud835\udd62", "\u1d60"],
        r: ["\u24c7", "\u24e1", "\u044f", "\u5c3a", "\uff32", "\uff52", "\u1587", "\u0158", "\u0433", "\u044f", "\u0155", "\u0158", "\ud835\udd2f", "\ud835\udcfb", "\ud835\udcc7", "\ud835\udce1", "\ud835\udc11", "\ud835\udc2b", "\u211d", "\ud835\udd63", "\u02b3"],
        s: ["\u24c8", "\u24e2", "\u0455", "\uff33", "\u4e02", "\uff53", "\u1515", "\u015e", "\u0e23", "s", "\u015f", "\u015c", "\ud835\udd30", "\ud835\udcfc", "\ud835\udcc8", "\ud835\udce2", "\ud835\udc12", "\ud835\udc2c", "\ud835\udd4a", "\ud835\udd64", "\u02e2"],
        t: ["\u24c9", "\u24e3", "\u0442", "\uff34", "\uff54", "\u4e05", "\u0166", "t", "\u0442", "\u0163", "\u0164", "\ud835\udd31", "\ud835\udcfd", "\ud835\udcc9", "\ud835\udce3", "\ud835\udc13", "\ud835\udc2d", "\ud835\udd4b", "\ud835\udd65", "\u1d57"],
        u: ["\u24ca", "\u24e4", "\u03c5", "\uff35", "\uff55", "\u144c", "\u1eee", "\u0e22", "\u03c5", "\xF9", "\u01d7", "\ud835\udd32", "\ud835\udcfe", "\ud835\udcca", "\ud835\udce4", "\ud835\udc14", "\ud835\udc2e", "\ud835\udd4c", "\ud835\udd66", "\u1d58"],
        v: ["\u24cb", "\u24e5", "\u03bd", "\uff36", "\uff56", "\u142f", "V", "\u05e9", "v", "\u03bd", "\u0476", "\ud835\udd33", "\ud835\udcff", "\ud835\udccb", "\ud835\udce5", "\ud835\udc15", "\ud835\udc2f", "\ud835\udd4d", "\ud835\udd67", "\u1d5b"],
        w: ["\u24cc", "\u24e6", "\u03c9", "\uff37", "\uff57", "\u15ef", "\u0174", "\u0e2c", "\u03c9", "\u03ce", "\u0174", "\ud835\udd34", "\ud835\udd00", "\ud835\udccc", "\ud835\udce6", "\ud835\udc16", "\ud835\udc30", "\ud835\udd4e", "\ud835\udd68", "\u02b7", "\u5c71"],
        x: ["\u24cd", "\u24e7", "\u03c7", "\uff38", "\u4e42", "\uff58", "\u166d", "\u0416", "\u05d0", "x", "x", "\u0416", "\ud835\udd35", "\ud835\udd01", "\ud835\udccd", "\ud835\udce7", "\ud835\udc17", "\ud835\udc31", "\ud835\udd4f", "\ud835\udd69", "\u02e3"],
        y: ["\u24ce", "\u311a", "\u24e8", "\u0443", "\uff39", "\uff59", "\u01b3", "\xA5", "\u05e5", "\u04af", "\u0447", "\u040e", "\ud835\udd36", "\ud835\udd02", "\ud835\udcce", "\ud835\udce8", "\ud835\udc18", "\ud835\udc32", "\ud835\udd50", "\ud835\udd6a", "\u02b8"],
        z: ["\u24cf", "\u24e9", "z", "\u4e59", "\uff3a", "\uff5a", "\u01b5", "\u017d", "z", "z", "\u017e", "\u017b", "\ud835\udd37", "\ud835\udd03", "\ud835\udccf", "\ud835\udce9", "\ud835\udc19", "\ud835\udc33", "\u2124", "\ud835\udd6b", "\u1dbb"]
    };
    if (_0x59eex3[_0x59eex6]) {
        return randomElement(_0x59eex3[_0x59eex6])
    } else {
        return _0x59eex6
    }
}

function randomElement(_0x59eexe1) {
    return _0x59eexe1[Math["floor"](Math["random"]() * _0x59eexe1["length"])]
}

function randomSymbols(_0x59eex40) {
    var _0x59eexed = ["\ud83d\udc19", "\ud83d\udc09", "\ud83d\udc0a", "\ud83d\udc12", "\ud83d\udc1d", "\ud83d\udc1c", "\ud83d\udc1a", "\ud83d\udc32", "\ud83d\udc33", "\ud83d\udc38", "\ud83d\udc51", "\ud83d\udc79", "\ud83d\udc7a", "\ud83d\udc64", "\ud83d\udcb2", "\ud83d\udca3", "\ud83d\udc99", "\ud83d\udc9a", "\ud83d\udc9b", "\ud83d\udc9c", "\ud83d\udc9d", "\ud83d\udc97", "\ud83d\udc98", "\ud83d\udc9e", "\ud83d\udc94", "\ud83d\udca5", "\ud83d\udc2f", "\ud83d\udc3c", "\ud83d\udc3b", "\ud83d\udc3a", "\ud83d\udc4c", "\ud83d\udc0d", "\ud83d\udc27", "\ud83d\udc1f", "\ud83d\udc20", "\ud83d\udc28", "\ud83c\udfaf", "\ud83c\udfc6", "\ud83c\udf81", "\ud83c\udf80", "\ud83c\udf89", "\ud83c\udf88", "\ud83c\udf6e", "\ud83c\udf6d", "\ud83c\udf6c", "\ud83c\udf6b", "\ud83c\udf6a", "\ud83c\udf67", "\ud83c\udf37", "\ud83c\udf53", "\ud83d\ude3a", "\ud83d\ude3e", "\u270e", "\ud83d\ude0e", "\ud83d\ude1d", "\ud83d\ude02", "\ud83d\ude08", "\ud83d\ude21", "\ud83d\ude32", "\ud83d\ude33", "\ud83c\udf54", "\ud83c\udf5f", "\ud83c\udf69", "\ud83c\udf83", "\ud83c\udf84", "\ud83c\udf85", "\ud83d\udc23", "\ud83d\udc24", "\ud83d\udc4d", "\ud83d\udc4a", "\ud83d\udc7b", "\ud83d\udc7d", "\ud83d\udc6e", "\ud83d\udc8e", "\ud83d\udc8b", "\ud83d\udc63", "\ud83d\udc80", "\ud83d\udca2", "\ud83d\udd25", "\u2654", "\u2655", "\u2656", "\u2657", "\u2658", "\u2659", "\u265a", "\u265b", "\u265c", "\u265d", "\u265e", "\u265f", "\u2660", "\u2661", "\u2662", "\u2663", "\u2664", "\u2665", "\u2666", "\u2667", "\u2668", "\u2669", "\u266a", "\u266c", "\u2605", "\u2606", "\u263a", "\u2639", "\u262f", "\u262e", "\u2622", "\u2620", "\u261f", "\u261e", "\u261d", "\u261c", "\u270c", "\u270b", "\u270a", "\u26f5", "\u0d60", "\u270c", "\u0d8f"];
    var _0x59eexc2 = [];
    for (var _0x59eex43 = 0; _0x59eex43 < _0x59eex40; _0x59eex43++) {
        _0x59eexc2["push"](randomElement(_0x59eexed))
    }
    return _0x59eexc2["join"]("")
}

function randInt(_0x59eexef, _0x59eexf0) {
    return _0x59eexef + Math["floor"](Math["random"]() * (_0x59eexf0 - _0x59eexef + 1))
}
$(document)["ready"](function() {
    $("<style> // Discord Fonts by :DiscordFonts@gmail.com </style>")["insertBefore"]("body");
    $("#fontSize")["on"]("input change", function() {
        $("<style> .DiscordFonts p{font-size:" + $(this)["val"]() + "px} </style>")["insertBefore"]("body")
    });
    _0x59eexf3(default_text);
    $(".Sk-text")["on"]("input", function(_0x59eexe6) {
        if ($("#Sk-text")["val"]() < 1) {
            _0x59eexf3(default_text)
        } else {
            var _0x59eex4 = $("#Sk-text")["val"]();
            _0x59eexf3(_0x59eex4)
        }
    });
    var _0x59eexf1 = window["location"]["href"];
    var _0x59eexf2 = _0x59eexf1["split"]("https://www.discordfonts.com/?=");
    urltext = _0x59eexf2[1];
    if (urltext) {
        urltext = decodeURIComponent(urltext);
        $("#Sk-text")["val"](urltext);
        _0x59eexf3(urltext)
    }

    function _0x59eexf3(_0x59eex4) {
        _0x59eex4 = _0x59eex4["trim"]();
        $(".result-s1")["html"](Change(_0x59eex4, "s1"));
        $(".result-s2")["html"](Change(_0x59eex4, "s2"));
        $(".result-s3")["html"](Change(_0x59eex4, "s3"));
        $(".result-s4")["html"](Change(_0x59eex4, "s4"));
        $(".result-s5")["html"](Change(_0x59eex4, "s5"));
        $(".result-s6")["html"](Change(_0x59eex4, "s6"));
        $(".result-s7")["html"](Change(_0x59eex4, "s7"));
        $(".result-s8")["html"](Change(_0x59eex4, "s8"));
        $(".result-s9")["html"](Change(_0x59eex4, "s9"));
        $(".result-s10")["html"](Change(_0x59eex4, "s10"));
        $(".result-s11")["html"](Change(_0x59eex4, "s11"));
        $(".result-s12")["html"](Change(_0x59eex4, "s12"));
        $(".result-s13")["html"](Change(_0x59eex4, "s13"));
        $(".result-s14")["html"](Change(_0x59eex4, "s14"));
        $(".result-s15")["html"](Change(_0x59eex4, "s15"));
        $(".result-s16")["html"](Change(_0x59eex4, "s16"));
        $(".result-s17")["html"](Change(_0x59eex4, "s17"));
        $(".result-s18")["html"](Change(_0x59eex4, "s18"));
        $(".result-s19")["html"](Change(_0x59eex4, "s19"));
        $(".result-s20")["html"](Change(_0x59eex4, "s20"));
        $(".result-s21")["html"](Change(_0x59eex4, "s21"));
        $(".result-s22")["html"](Change(_0x59eex4, "s22"));
        $(".result-s23")["html"](Change(_0x59eex4, "s23"));
        $(".result-s24")["html"](Change(_0x59eex4, "s24"));
        $(".result-s25")["html"](Change(_0x59eex4, "s25"));
        $(".result-s26")["html"](Change(_0x59eex4, "s26"));
        $(".result-s27")["html"](Change(_0x59eex4, "s27"));
        $(".result-s29")["html"](Change(_0x59eex4, "s29"));
        $(".result-s30")["html"](Change(_0x59eex4, "s30"));
        $(".result-s31")["html"](Change(_0x59eex4, "s31"));
        $(".lunitoolsbubbles")["html"](luni["tools"]["bubbles"]["encode"](_0x59eex4));
        $(".invertedSquaresCharMap")["html"](applyCharMap(invertedSquaresCharMap, _0x59eex4));
        $(".illuminati")["html"](illuminati(_0x59eex4));
        $(".textgun")["html"](textgun(_0x59eex4));
        $(".minigame")["html"](minigame(_0x59eex4));
        $(".pubggame1")["html"](pubggame1(_0x59eex4));
        $(".pubggame2")["html"](pubggame2(_0x59eex4));
        $(".pubggame3")["html"](pubggame3(_0x59eex4));
        $(".bricks")["html"](bricks(_0x59eex4));
        $(".bigrus")["html"](bigrus(_0x59eex4));
        $(".wideTextCharMap")["html"](applyCharMap(wideTextCharMap, _0x59eex4));
        $(".lunitoolstinyencode")["html"](luni["tools"]["tiny"]["encode"](_0x59eex4));
        $(".lunitoolsflipencode")["html"](luni["tools"]["flip"]["encode"](_0x59eex4));
        $(".squaresCharMap")["html"](applyCharMap(squaresCharMap, _0x59eex4));
        $(".lunitoolsmirrorencode")["html"](luni["tools"]["mirror"]["encode"](_0x59eex4));
        $(".subscriptCharMap")["html"](applyCharMap(subscriptCharMap, _0x59eex4));
        $(".superscriptCharMap")["html"](applyCharMap(superscriptCharMap, _0x59eex4));
        $(".bentTextCharMap")["html"](applyCharMap(bentTextCharMap, _0x59eex4));
        $(".neonCharMap")["html"](applyCharMap(neonCharMap, _0x59eex4));
        $(".futureAlienCharMap")["html"](applyCharMap(futureAlienCharMap, _0x59eex4));
        $(".strikeThrough")["html"](strikeThrough(_0x59eex4));
        $(".tildeStrikeThrough")["html"](tildeStrikeThrough(_0x59eex4));
        $(".slashThrough")["html"](slashThrough(_0x59eex4));
        $(".underline")["html"](underline(_0x59eex4));
        $(".doubleUnderline")["html"](doubleUnderline(_0x59eex4));
        $(".lunicreepify")["html"](luni["tools"]["creepify"]["encode"](_0x59eex4));
        $(".squiggleCharMap")["html"](applyCharMap(squiggleCharMap, _0x59eex4));
        $(".squiggle2CharMap")["html"](applyCharMap(squiggle2CharMap, _0x59eex4));
        $(".squiggle3CharMap")["html"](applyCharMap(squiggle3CharMap, _0x59eex4));
        $(".squiggle4CharMap")["html"](applyCharMap(squiggle4CharMap, _0x59eex4));
        $(".squiggle5CharMap")["html"](applyCharMap(squiggle5CharMap, _0x59eex4));
        $(".squiggle6CharMap")["html"](applyCharMap(squiggle6CharMap, _0x59eex4));
        $(".boldCharMap")["html"](applyCharMap(boldCharMap, _0x59eex4));
        $(".luniroundsquares")["html"](luni["tools"]["roundsquares"]["encode"](_0x59eex4));
        $(".lunisquares")["html"](luni["tools"]["squares"]["encode"](_0x59eex4["toUpperCase"]()));
        $(".oldEnglishCharMap")["html"](applyCharMap(oldEnglishCharMap, _0x59eex4));
        $(".medievalCharMap")["html"](applyCharMap(medievalCharMap, _0x59eex4));
        $(".cursiveCharMap")["html"](applyCharMap(cursiveCharMap, _0x59eex4));
        $(".scriptify")["html"](scriptify(_0x59eex4));
        $(".doubleStruckCharMap")["html"](applyCharMap(doubleStruckCharMap, _0x59eex4));
        $(".italicCharMap")["html"](applyCharMap(italicCharMap, _0x59eex4));
        $(".boldItalicCharMap")["html"](applyCharMap(boldItalicCharMap, _0x59eex4));
        $(".monospaceCharMap")["html"](applyCharMap(monospaceCharMap, _0x59eex4));
        $(".upperAnglesCharMap")["html"](applyCharMap(upperAnglesCharMap, _0x59eex4));
        $(".greekCharMap")["html"](applyCharMap(greekCharMap, _0x59eex4));
        $(".symbolsCharMap")["html"](applyCharMap(symbolsCharMap, _0x59eex4));
        $(".currencyCharMap")["html"](applyCharMap(currencyCharMap, _0x59eex4));
        $(".asianStyleCharMap")["html"](applyCharMap(asianStyleCharMap, _0x59eex4));
        $(".asianStyle2CharMap")["html"](applyCharMap(asianStyle2CharMap, _0x59eex4));
        $(".thickBlockFramed")["html"](thickBlockFramed(_0x59eex4));
        $(".diametricAngleFrame")["html"](diametricAngleFrame(_0x59eex4));
        $(".wavyJoiner")["html"](wavyJoiner(_0x59eex4));
        $(".dottyJoiner")["html"](dottyJoiner(_0x59eex4));
        $(".kirbyHug")["html"](kirbyHug(_0x59eex4));
        $(".vaporwaveText")["html"](vaporwaveText(_0x59eex4));
        $(".vaporwaveText1")["html"](vaporwaveText1(_0x59eex4));
        $(".vaporwaveText2")["html"](vaporwaveText2(_0x59eex4));
        $(".littleSparkles")["html"](littleSparkles(_0x59eex4));
        $(".weirdBox")["html"](weirdBox(_0x59eex4));
        $(".thickBox")["html"](thickBox(_0x59eex4));
        $(".zigzagJoiner")["html"](zigzagJoiner(_0x59eex4));
        $(".hashJoiner")["html"](hashJoiner(_0x59eex4));
        $(".starJoiner")["html"](starJoiner(_0x59eex4));
        $(".connectedJoiner")["html"](connectedJoiner(_0x59eex4));
        $(".arrowjoin")["html"](arrowjoin(_0x59eex4));
        $(".dotBoxtwo")["html"](dotBoxtwo(_0x59eex4));
        $(".dotBox")["html"](dotBox(_0x59eex4));
        $(".diametricBox")["html"](diametricBox(_0x59eex4));
        $(".arrowBox")["html"](arrowBox(_0x59eex4));
        $(".curlybrackets")["html"](curlybrackets(_0x59eex4));
        $(".singlewavyJoiner")["html"](singlewavyJoiner(_0x59eex4));
        $(".firework")["html"](firework(_0x59eex4));
        $(".stinky")["html"](stinky(_0x59eex4));
        $(".heartsBetween")["html"](heartsBetween(_0x59eex4));
        $(".arrowBelow")["html"](arrowBelow(_0x59eex4));
        $(".crossAboveBelow")["html"](crossAboveBelow(_0x59eex4));
        $(".wingdings")["html"](wingdings(_0x59eex4));
        $(".fullCrazy")["html"](fullCrazy(_0x59eex4));
        $(".crazyWithFlourishOrSymbols")["html"](crazyWithFlourishOrSymbols(_0x59eex4));
        $(".cuteText")["html"](cuteText(_0x59eex4));
        $(".star0")["html"](star0(_0x59eex4));
        $(".star1")["html"](star1(_0x59eex4));
        $(".star2")["html"](star2(_0x59eex4));
        $(".star3")["html"](star3(_0x59eex4));
        $(".star4")["html"](star4(_0x59eex4));
        $(".star5")["html"](star5(_0x59eex4));
        $(".star6")["html"](star6(_0x59eex4));
        $(".star7")["html"](star7(_0x59eex4));
        $(".star8")["html"](star8(_0x59eex4));
        $(".star9")["html"](star9(_0x59eex4));
        $(".star10")["html"](star10(_0x59eex4));
        $(".heart0")["html"](heart0(_0x59eex4));
        $(".heart1")["html"](heart1(_0x59eex4));
        $(".heart2")["html"](heart2(_0x59eex4));
        $(".heart3")["html"](heart3(_0x59eex4));
        $(".heart4")["html"](heart4(_0x59eex4));
        $(".heart5")["html"](heart5(_0x59eex4));
        $(".heart6")["html"](heart6(_0x59eex4));
        $(".heart7")["html"](heart7(_0x59eex4));
        $(".emoticon0")["html"](emoticon0(_0x59eex4));
        $(".emoticon1")["html"](emoticon1(_0x59eex4));
        $(".emoticon2")["html"](emoticon2(_0x59eex4));
        $(".emoticon3")["html"](emoticon3(_0x59eex4));
        $(".emoticon4")["html"](emoticon4(_0x59eex4));
        $(".emoticon5")["html"](emoticon5(_0x59eex4));
        $(".emoticon6")["html"](emoticon6(_0x59eex4));
        $(".emoticon7")["html"](emoticon7(_0x59eex4));
        $(".thankyou0")["html"](thankyou0(_0x59eex4));
        $(".thankyou1")["html"](thankyou1(_0x59eex4));
        $(".thankyou2")["html"](thankyou2(_0x59eex4));
        $(".thankyou3")["html"](thankyou3(_0x59eex4));
        $(".thankyou4")["html"](thankyou4(_0x59eex4));
        $(".thankyou5")["html"](thankyou5(_0x59eex4));
        $(".thankyou6")["html"](thankyou6(_0x59eex4));
        $(".thankyou7")["html"](thankyou7(_0x59eex4));
        $(".sad0")["html"](sad0(_0x59eex4));
        $(".sad1")["html"](sad1(_0x59eex4));
        $(".sad2")["html"](sad2(_0x59eex4));
        $(".sad3")["html"](sad3(_0x59eex4));
        $(".sad4")["html"](sad4(_0x59eex4));
        $(".sad5")["html"](sad5(_0x59eex4));
        $(".sad6")["html"](sad6(_0x59eex4));
        $(".sad7")["html"](sad7(_0x59eex4));
        $(".cuteText1")["html"](cuteText1(_0x59eex4));
        $(".cuteText2")["html"](cuteText2(_0x59eex4));
        $(".cuteText3")["html"](cuteText3(_0x59eex4));
        $(".cuteText4")["html"](cuteText4(_0x59eex4));
        $(".cuteText5")["html"](cuteText5(_0x59eex4));
        $(".crazyWithFlourishOrSymbols1")["html"](crazyWithFlourishOrSymbols1(_0x59eex4));
        $(".crazyWithFlourishOrSymbols2")["html"](crazyWithFlourishOrSymbols2(_0x59eex4));
        $(".crazyWithFlourishOrSymbols3")["html"](crazyWithFlourishOrSymbols3(_0x59eex4));
        $(".crazyWithFlourishOrSymbols4")["html"](crazyWithFlourishOrSymbols4(_0x59eex4));
        $(".crazyWithFlourishOrSymbols5")["html"](crazyWithFlourishOrSymbols5(_0x59eex4));
        $(".fullCrazy1")["html"](fullCrazy1(_0x59eex4));
        $(".fullCrazy2")["html"](fullCrazy2(_0x59eex4));
        $(".fullCrazy3")["html"](fullCrazy3(_0x59eex4));
        $(".fullCrazy4")["html"](fullCrazy4(_0x59eex4));
        $(".fullCrazy5")["html"](fullCrazy5(_0x59eex4));
        $(".wrap1")["html"](wrap1(_0x59eex4));
        $(".wrap2")["html"](wrap2(_0x59eex4));
        $(".wrap3")["html"](wrap3(_0x59eex4));
        $(".wrap4")["html"](wrap4(_0x59eex4));
        $(".wrap5")["html"](wrap5(_0x59eex4))
    }
    $(".clear")["click"](function() {
        $("#Sk-text")["val"]("")
    });

    function _0x59eexf4() {
        var _0x59eexf4 = document["querySelector"](".copied");
        var _0x59eexf5 = _0x59eexf4["querySelector"](".text");
        document["querySelectorAll"](".DiscordFonts")["forEach"]((_0x59eexe6) => {
            _0x59eexe6["addEventListener"]("click", () => {
                _0x59eexf5["value"] = _0x59eexe6["querySelector"]("p")["innerText"];
                _0x59eexf6(_0x59eexf5);
                _0x59eexf4["classList"]["add"]("copied-show");
                setTimeout(() => {
                    _0x59eexf4["classList"]["remove"]("copied-show")
                }, 1000)
            })
        })
    }
    _0x59eexf4();

    function _0x59eexf6(_0x59eex4) {
        var _0x59eexf7 = document["createElement"]("textarea");
        _0x59eexf7["value"] = _0x59eex4["innerText"] || _0x59eex4["value"];
        document["body"]["appendChild"](_0x59eexf7);
        _0x59eexf7["select"]();
        document["execCommand"]("copy");
        _0x59eexf7["remove"]()
    }
})
