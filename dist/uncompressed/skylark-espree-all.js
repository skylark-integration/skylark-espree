/**
 * skylark-espree - A version of espree that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-acorn/generated/astralIdentifierCodes',[],function () {
    'use strict';
    return [
        509,
        0,
        227,
        0,
        150,
        4,
        294,
        9,
        1368,
        2,
        2,
        1,
        6,
        3,
        41,
        2,
        5,
        0,
        166,
        1,
        574,
        3,
        9,
        9,
        370,
        1,
        81,
        2,
        71,
        10,
        50,
        3,
        123,
        2,
        54,
        14,
        32,
        10,
        3,
        1,
        11,
        3,
        46,
        10,
        8,
        0,
        46,
        9,
        7,
        2,
        37,
        13,
        2,
        9,
        6,
        1,
        45,
        0,
        13,
        2,
        49,
        13,
        9,
        3,
        2,
        11,
        83,
        11,
        7,
        0,
        3,
        0,
        158,
        11,
        6,
        9,
        7,
        3,
        56,
        1,
        2,
        6,
        3,
        1,
        3,
        2,
        10,
        0,
        11,
        1,
        3,
        6,
        4,
        4,
        193,
        17,
        10,
        9,
        5,
        0,
        82,
        19,
        13,
        9,
        214,
        6,
        3,
        8,
        28,
        1,
        83,
        16,
        16,
        9,
        82,
        12,
        9,
        9,
        84,
        14,
        5,
        9,
        243,
        14,
        166,
        9,
        71,
        5,
        2,
        1,
        3,
        3,
        2,
        0,
        2,
        1,
        13,
        9,
        120,
        6,
        3,
        6,
        4,
        0,
        29,
        9,
        41,
        6,
        2,
        3,
        9,
        0,
        10,
        10,
        47,
        15,
        406,
        7,
        2,
        7,
        17,
        9,
        57,
        21,
        2,
        13,
        123,
        5,
        4,
        0,
        2,
        1,
        2,
        6,
        2,
        0,
        9,
        9,
        49,
        4,
        2,
        1,
        2,
        4,
        9,
        9,
        330,
        3,
        10,
        1,
        2,
        0,
        49,
        6,
        4,
        4,
        14,
        9,
        5351,
        0,
        7,
        14,
        13835,
        9,
        87,
        9,
        39,
        4,
        60,
        6,
        26,
        9,
        1014,
        0,
        2,
        54,
        8,
        3,
        82,
        0,
        12,
        1,
        19628,
        1,
        4706,
        45,
        3,
        22,
        543,
        4,
        4,
        5,
        9,
        7,
        3,
        6,
        31,
        3,
        149,
        2,
        1418,
        49,
        513,
        54,
        5,
        49,
        9,
        0,
        15,
        0,
        23,
        4,
        2,
        14,
        1361,
        6,
        2,
        16,
        3,
        6,
        2,
        1,
        2,
        4,
        101,
        0,
        161,
        6,
        10,
        9,
        357,
        0,
        62,
        13,
        499,
        13,
        983,
        6,
        110,
        6,
        6,
        9,
        4759,
        9,
        787719,
        239
    ];
});
define('skylark-acorn/generated/astralIdentifierStartCodes',[],function () {
    'use strict';
    return [
        0,
        11,
        2,
        25,
        2,
        18,
        2,
        1,
        2,
        14,
        3,
        13,
        35,
        122,
        70,
        52,
        268,
        28,
        4,
        48,
        48,
        31,
        14,
        29,
        6,
        37,
        11,
        29,
        3,
        35,
        5,
        7,
        2,
        4,
        43,
        157,
        19,
        35,
        5,
        35,
        5,
        39,
        9,
        51,
        13,
        10,
        2,
        14,
        2,
        6,
        2,
        1,
        2,
        10,
        2,
        14,
        2,
        6,
        2,
        1,
        68,
        310,
        10,
        21,
        11,
        7,
        25,
        5,
        2,
        41,
        2,
        8,
        70,
        5,
        3,
        0,
        2,
        43,
        2,
        1,
        4,
        0,
        3,
        22,
        11,
        22,
        10,
        30,
        66,
        18,
        2,
        1,
        11,
        21,
        11,
        25,
        71,
        55,
        7,
        1,
        65,
        0,
        16,
        3,
        2,
        2,
        2,
        28,
        43,
        28,
        4,
        28,
        36,
        7,
        2,
        27,
        28,
        53,
        11,
        21,
        11,
        18,
        14,
        17,
        111,
        72,
        56,
        50,
        14,
        50,
        14,
        35,
        349,
        41,
        7,
        1,
        79,
        28,
        11,
        0,
        9,
        21,
        43,
        17,
        47,
        20,
        28,
        22,
        13,
        52,
        58,
        1,
        3,
        0,
        14,
        44,
        33,
        24,
        27,
        35,
        30,
        0,
        3,
        0,
        9,
        34,
        4,
        0,
        13,
        47,
        15,
        3,
        22,
        0,
        2,
        0,
        36,
        17,
        2,
        24,
        20,
        1,
        64,
        6,
        2,
        0,
        2,
        3,
        2,
        14,
        2,
        9,
        8,
        46,
        39,
        7,
        3,
        1,
        3,
        21,
        2,
        6,
        2,
        1,
        2,
        4,
        4,
        0,
        19,
        0,
        13,
        4,
        159,
        52,
        19,
        3,
        21,
        2,
        31,
        47,
        21,
        1,
        2,
        0,
        185,
        46,
        42,
        3,
        37,
        47,
        21,
        0,
        60,
        42,
        14,
        0,
        72,
        26,
        38,
        6,
        186,
        43,
        117,
        63,
        32,
        7,
        3,
        0,
        3,
        7,
        2,
        1,
        2,
        23,
        16,
        0,
        2,
        0,
        95,
        7,
        3,
        38,
        17,
        0,
        2,
        0,
        29,
        0,
        11,
        39,
        8,
        0,
        22,
        0,
        12,
        45,
        20,
        0,
        19,
        72,
        264,
        8,
        2,
        36,
        18,
        0,
        50,
        29,
        113,
        6,
        2,
        1,
        2,
        37,
        22,
        0,
        26,
        5,
        2,
        1,
        2,
        31,
        15,
        0,
        328,
        18,
        16,
        0,
        2,
        12,
        2,
        33,
        125,
        0,
        80,
        921,
        103,
        110,
        18,
        195,
        2637,
        96,
        16,
        1071,
        18,
        5,
        4026,
        582,
        8634,
        568,
        8,
        30,
        18,
        78,
        18,
        29,
        19,
        47,
        17,
        3,
        32,
        20,
        6,
        18,
        689,
        63,
        129,
        74,
        6,
        0,
        67,
        12,
        65,
        1,
        2,
        0,
        29,
        6135,
        9,
        1237,
        43,
        8,
        8936,
        3,
        2,
        6,
        2,
        1,
        2,
        290,
        16,
        0,
        30,
        2,
        3,
        0,
        15,
        3,
        9,
        395,
        2309,
        106,
        6,
        12,
        4,
        8,
        8,
        9,
        5991,
        84,
        2,
        70,
        2,
        1,
        3,
        0,
        3,
        1,
        3,
        3,
        2,
        11,
        2,
        0,
        2,
        6,
        2,
        64,
        2,
        3,
        3,
        7,
        2,
        6,
        2,
        27,
        2,
        3,
        2,
        4,
        2,
        0,
        4,
        6,
        2,
        339,
        3,
        24,
        2,
        24,
        2,
        30,
        2,
        24,
        2,
        30,
        2,
        24,
        2,
        30,
        2,
        24,
        2,
        30,
        2,
        24,
        2,
        7,
        1845,
        30,
        7,
        5,
        262,
        61,
        147,
        44,
        11,
        6,
        17,
        0,
        322,
        29,
        19,
        43,
        485,
        27,
        757,
        6,
        2,
        3,
        2,
        1,
        2,
        14,
        2,
        196,
        60,
        67,
        8,
        0,
        1205,
        3,
        2,
        26,
        2,
        1,
        2,
        0,
        3,
        0,
        2,
        9,
        2,
        3,
        2,
        0,
        2,
        0,
        7,
        0,
        5,
        0,
        2,
        0,
        2,
        0,
        2,
        2,
        2,
        1,
        2,
        0,
        3,
        0,
        2,
        0,
        2,
        0,
        2,
        0,
        2,
        0,
        2,
        1,
        2,
        0,
        3,
        3,
        2,
        6,
        2,
        3,
        2,
        3,
        2,
        0,
        2,
        9,
        2,
        16,
        6,
        2,
        2,
        4,
        2,
        16,
        4421,
        42719,
        33,
        4153,
        7,
        221,
        3,
        5761,
        15,
        7472,
        3104,
        541,
        1507,
        4938,
        6,
        4191
    ];
});
define('skylark-acorn/generated/nonASCIIidentifierChars',[],function () {
    'use strict';
    return '‌‍\xB7̀-ͯ\u0387҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳\u07FDࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛\u0898-\u089F\u08CA-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯\u09FEਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯\u0AFA-\u0AFFଁ-ଃ଼ା-ୄେୈୋ-୍\u0B55-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-\u0C04\u0C3Cా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯\u0CF3\u0D00-ഃ\u0D3B\u0D3Cാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯\u0D81-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-\u0ECE໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟\u1369-\u1371ᜒ-\u1715ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍\u180F-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-\u19DAᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽\u1ABF-\u1ACEᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴\u1CF7-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ\uA82Cꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱\uA8FF-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿';
});
define('skylark-acorn/generated/nonASCIIidentifierStartChars',[],function () {
    'use strict';
    return 'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙ\u0560-\u0588א-ת\u05EF-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘ\u0860-\u086A\u0870-\u0887\u0889-\u088Eࢠ-\u08C9ऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱ\u09FCਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ\u0C5Dౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ\u0CDDೞೠೡೱೲ\u0D04-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄ\u0E86-ຊ\u0E8C-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑ\u171F-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-\u1878ᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-\u1B4Cᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈ\u1C90-\u1CBA\u1CBD-\u1CBFᳩ-ᳬᳮ-ᳳᳵᳶ\u1CFAᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ\u2118-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ\u309B-ゟァ-ヺー-ヿㄅ-\u312Fㄱ-ㆎㆠ-\u31BFㇰ-ㇿ㐀-\u4DBF一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽ\uA8FEꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-\uAB69ꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ';
});
define('skylark-acorn/identifier',[
    './generated/astralIdentifierCodes',
    './generated/astralIdentifierStartCodes',
    './generated/nonASCIIidentifierChars',
    './generated/nonASCIIidentifierStartChars'
], function (astralIdentifierCodes, astralIdentifierStartCodes, nonASCIIidentifierChars, nonASCIIidentifierStartChars) {
    'use strict';
    const reservedWords = {
        3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
        5: 'class enum extends super const export import',
        6: 'enum',
        strict: 'implements interface let package private protected public static yield',
        strictBind: 'eval arguments'
    };
    const ecma5AndLessKeywords = 'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this';
    const keywords = {
        5: ecma5AndLessKeywords,
        '5module': ecma5AndLessKeywords + ' export import',
        6: ecma5AndLessKeywords + ' const class extends export import super'
    };
    const keywordRelationalOperator = /^in(stanceof)?$/;
    const nonASCIIidentifierStart = new RegExp('[' + nonASCIIidentifierStartChars + ']');
    const nonASCIIidentifier = new RegExp('[' + nonASCIIidentifierStartChars + nonASCIIidentifierChars + ']');
    function isInAstralSet(code, set) {
        let pos = 65536;
        for (let i = 0; i < set.length; i += 2) {
            pos += set[i];
            if (pos > code)
                return false;
            pos += set[i + 1];
            if (pos >= code)
                return true;
        }
        return false;
    }
    function isIdentifierStart(code, astral) {
        if (code < 65)
            return code === 36;
        if (code < 91)
            return true;
        if (code < 97)
            return code === 95;
        if (code < 123)
            return true;
        if (code <= 65535)
            return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
        if (astral === false)
            return false;
        return isInAstralSet(code, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code, astral) {
        if (code < 48)
            return code === 36;
        if (code < 58)
            return true;
        if (code < 65)
            return false;
        if (code < 91)
            return true;
        if (code < 97)
            return code === 95;
        if (code < 123)
            return true;
        if (code <= 65535)
            return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
        if (astral === false)
            return false;
        return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
    }
    return {
        reservedWords: reservedWords,
        keywords: keywords,
        keywordRelationalOperator: keywordRelationalOperator,
        isIdentifierStart: isIdentifierStart,
        isIdentifierChar: isIdentifierChar
    };
});
define('skylark-acorn/tokentype',[],function () {
    'use strict';
    class TokenType {
        constructor(label, conf = {}) {
            this.label = label;
            this.keyword = conf.keyword;
            this.beforeExpr = !!conf.beforeExpr;
            this.startsExpr = !!conf.startsExpr;
            this.isLoop = !!conf.isLoop;
            this.isAssign = !!conf.isAssign;
            this.prefix = !!conf.prefix;
            this.postfix = !!conf.postfix;
            this.binop = conf.binop || null;
            this.updateContext = null;
        }
    }
    function binop(name, prec) {
        return new TokenType(name, {
            beforeExpr: true,
            binop: prec
        });
    }
    const beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };
    const keywords = {};
    function kw(name, options = {}) {
        options.keyword = name;
        return keywords[name] = new TokenType(name, options);
    }
    const types = {
        num: new TokenType('num', startsExpr),
        regexp: new TokenType('regexp', startsExpr),
        string: new TokenType('string', startsExpr),
        name: new TokenType('name', startsExpr),
        privateId: new TokenType('privateId', startsExpr),
        eof: new TokenType('eof'),
        bracketL: new TokenType('[', {
            beforeExpr: true,
            startsExpr: true
        }),
        bracketR: new TokenType(']'),
        braceL: new TokenType('{', {
            beforeExpr: true,
            startsExpr: true
        }),
        braceR: new TokenType('}'),
        parenL: new TokenType('(', {
            beforeExpr: true,
            startsExpr: true
        }),
        parenR: new TokenType(')'),
        comma: new TokenType(',', beforeExpr),
        semi: new TokenType(';', beforeExpr),
        colon: new TokenType(':', beforeExpr),
        dot: new TokenType('.'),
        question: new TokenType('?', beforeExpr),
        questionDot: new TokenType('?.'),
        arrow: new TokenType('=>', beforeExpr),
        template: new TokenType('template'),
        invalidTemplate: new TokenType('invalidTemplate'),
        ellipsis: new TokenType('...', beforeExpr),
        backQuote: new TokenType('`', startsExpr),
        dollarBraceL: new TokenType('${', {
            beforeExpr: true,
            startsExpr: true
        }),
        eq: new TokenType('=', {
            beforeExpr: true,
            isAssign: true
        }),
        assign: new TokenType('_=', {
            beforeExpr: true,
            isAssign: true
        }),
        incDec: new TokenType('++/--', {
            prefix: true,
            postfix: true,
            startsExpr: true
        }),
        prefix: new TokenType('!/~', {
            beforeExpr: true,
            prefix: true,
            startsExpr: true
        }),
        logicalOR: binop('||', 1),
        logicalAND: binop('&&', 2),
        bitwiseOR: binop('|', 3),
        bitwiseXOR: binop('^', 4),
        bitwiseAND: binop('&', 5),
        equality: binop('==/!=/===/!==', 6),
        relational: binop('</>/<=/>=', 7),
        bitShift: binop('<</>>/>>>', 8),
        plusMin: new TokenType('+/-', {
            beforeExpr: true,
            binop: 9,
            prefix: true,
            startsExpr: true
        }),
        modulo: binop('%', 10),
        star: binop('*', 10),
        slash: binop('/', 10),
        starstar: new TokenType('**', { beforeExpr: true }),
        coalesce: binop('??', 1),
        _break: kw('break'),
        _case: kw('case', beforeExpr),
        _catch: kw('catch'),
        _continue: kw('continue'),
        _debugger: kw('debugger'),
        _default: kw('default', beforeExpr),
        _do: kw('do', {
            isLoop: true,
            beforeExpr: true
        }),
        _else: kw('else', beforeExpr),
        _finally: kw('finally'),
        _for: kw('for', { isLoop: true }),
        _function: kw('function', startsExpr),
        _if: kw('if'),
        _return: kw('return', beforeExpr),
        _switch: kw('switch'),
        _throw: kw('throw', beforeExpr),
        _try: kw('try'),
        _var: kw('var'),
        _const: kw('const'),
        _while: kw('while', { isLoop: true }),
        _with: kw('with'),
        _new: kw('new', {
            beforeExpr: true,
            startsExpr: true
        }),
        _this: kw('this', startsExpr),
        _super: kw('super', startsExpr),
        _class: kw('class', startsExpr),
        _extends: kw('extends', beforeExpr),
        _export: kw('export'),
        _import: kw('import', startsExpr),
        _null: kw('null', startsExpr),
        _true: kw('true', startsExpr),
        _false: kw('false', startsExpr),
        _in: kw('in', {
            beforeExpr: true,
            binop: 7
        }),
        _instanceof: kw('instanceof', {
            beforeExpr: true,
            binop: 7
        }),
        _typeof: kw('typeof', {
            beforeExpr: true,
            prefix: true,
            startsExpr: true
        }),
        _void: kw('void', {
            beforeExpr: true,
            prefix: true,
            startsExpr: true
        }),
        _delete: kw('delete', {
            beforeExpr: true,
            prefix: true,
            startsExpr: true
        })
    };
    return {
        TokenType: TokenType,
        keywords: keywords,
        types: types
    };
});
define('skylark-acorn/whitespace',[],function () {
    'use strict';
    const lineBreak = /\r\n?|\n|\u2028|\u2029/;
    const lineBreakG = new RegExp(lineBreak.source, 'g');
    function isNewLine(code) {
        return code === 10 || code === 13 || code === 8232 || code === 8233;
    }
    function nextLineBreak(code, from, end = code.length) {
        for (let i = from; i < end; i++) {
            let next = code.charCodeAt(i);
            if (isNewLine(next))
                return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1;
        }
        return -1;
    }
    const nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
    const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
    return {
        lineBreak: lineBreak,
        lineBreakG: lineBreakG,
        isNewLine: isNewLine,
        nextLineBreak: nextLineBreak,
        nonASCIIwhitespace: nonASCIIwhitespace,
        skipWhiteSpace: skipWhiteSpace
    };
});
define('skylark-acorn/util',[],function () {
    'use strict';
    const {hasOwnProperty, toString} = Object.prototype;
    const hasOwn = Object.hasOwn || ((obj, propName) => hasOwnProperty.call(obj, propName));
    const isArray = Array.isArray || (obj => toString.call(obj) === '[object Array]');
    function wordsRegexp(words) {
        return new RegExp('^(?:' + words.replace(/ /g, '|') + ')$');
    }
    function codePointToString(code) {
        if (code <= 65535)
            return String.fromCharCode(code);
        code -= 65536;
        return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
    }
    const loneSurrogate = /[\uD800-\uDFFF]/u;
    return {
        hasOwn: hasOwn,
        isArray: isArray,
        wordsRegexp: wordsRegexp,
        codePointToString: codePointToString,
        loneSurrogate: loneSurrogate
    };
});
define('skylark-acorn/locutil',['./whitespace'], function (m_whitespace) {
    'use strict';
    const {nextLineBreak} = m_whitespace;
    class Position {
        constructor(line, col) {
            this.line = line;
            this.column = col;
        }
        offset(n) {
            return new Position(this.line, this.column + n);
        }
    }
    class SourceLocation {
        constructor(p, start, end) {
            this.start = start;
            this.end = end;
            if (p.sourceFile !== null)
                this.source = p.sourceFile;
        }
    }
    function getLineInfo(input, offset) {
        for (let line = 1, cur = 0;;) {
            let nextBreak = nextLineBreak(input, cur, offset);
            if (nextBreak < 0)
                return new Position(line, offset - cur);
            ++line;
            cur = nextBreak;
        }
    }
    return {
        Position: Position,
        SourceLocation: SourceLocation,
        getLineInfo: getLineInfo
    };
});
define('skylark-acorn/options',[
    './util',
    './locutil'
], function (m_util, m_locutil) {
    'use strict';
    const {hasOwn, isArray} = m_util;
    const {SourceLocation} = m_locutil;
    const defaultOptions = {
        ecmaVersion: null,
        sourceType: 'script',
        onInsertedSemicolon: null,
        onTrailingComma: null,
        allowReserved: null,
        allowReturnOutsideFunction: false,
        allowImportExportEverywhere: false,
        allowAwaitOutsideFunction: null,
        allowSuperOutsideMethod: null,
        allowHashBang: false,
        checkPrivateFields: true,
        locations: false,
        onToken: null,
        onComment: null,
        ranges: false,
        program: null,
        sourceFile: null,
        directSourceFile: null,
        preserveParens: false
    };
    let warnedAboutEcmaVersion = false;
    function getOptions(opts) {
        let options = {};
        for (let opt in defaultOptions)
            options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
        if (options.ecmaVersion === 'latest') {
            options.ecmaVersion = 100000000;
        } else if (options.ecmaVersion == null) {
            if (!warnedAboutEcmaVersion && typeof console === 'object' && console.warn) {
                warnedAboutEcmaVersion = true;
                console.warn('Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.');
            }
            options.ecmaVersion = 11;
        } else if (options.ecmaVersion >= 2015) {
            options.ecmaVersion -= 2009;
        }
        if (options.allowReserved == null)
            options.allowReserved = options.ecmaVersion < 5;
        if (!opts || opts.allowHashBang == null)
            options.allowHashBang = options.ecmaVersion >= 14;
        if (isArray(options.onToken)) {
            let tokens = options.onToken;
            options.onToken = token => tokens.push(token);
        }
        if (isArray(options.onComment))
            options.onComment = pushComment(options, options.onComment);
        return options;
    }
    function pushComment(options, array) {
        return function (block, text, start, end, startLoc, endLoc) {
            let comment = {
                type: block ? 'Block' : 'Line',
                value: text,
                start: start,
                end: end
            };
            if (options.locations)
                comment.loc = new SourceLocation(this, startLoc, endLoc);
            if (options.ranges)
                comment.range = [
                    start,
                    end
                ];
            array.push(comment);
        };
    }
    return {
        defaultOptions: defaultOptions,
        getOptions: getOptions
    };
});
define('skylark-acorn/scopeflags',[],function () {
    'use strict';
    const SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128, SCOPE_CLASS_STATIC_BLOCK = 256, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
    function functionFlags(async, generator) {
        return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
    }
    const BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
    return {
        SCOPE_TOP: SCOPE_TOP,
        SCOPE_FUNCTION: SCOPE_FUNCTION,
        SCOPE_ASYNC: SCOPE_ASYNC,
        SCOPE_GENERATOR: SCOPE_GENERATOR,
        SCOPE_ARROW: SCOPE_ARROW,
        SCOPE_SIMPLE_CATCH: SCOPE_SIMPLE_CATCH,
        SCOPE_SUPER: SCOPE_SUPER,
        SCOPE_DIRECT_SUPER: SCOPE_DIRECT_SUPER,
        SCOPE_CLASS_STATIC_BLOCK: SCOPE_CLASS_STATIC_BLOCK,
        SCOPE_VAR: SCOPE_VAR,
        functionFlags: functionFlags,
        BIND_NONE: BIND_NONE,
        BIND_VAR: BIND_VAR,
        BIND_LEXICAL: BIND_LEXICAL,
        BIND_FUNCTION: BIND_FUNCTION,
        BIND_SIMPLE_CATCH: BIND_SIMPLE_CATCH,
        BIND_OUTSIDE: BIND_OUTSIDE
    };
});
define('skylark-acorn/state',[
    './identifier',
    './tokentype',
    './whitespace',
    './options',
    './util',
    './scopeflags'
], function (m_identifier, m_tokentype, m_whitespace, m_options, m_util, m_scopeflags) {
    'use strict';
    const {reservedWords, keywords} = m_identifier;
    const {types : tt} = m_tokentype;

    const {lineBreak} = m_whitespace;
    const {getOptions} = m_options;
    const {wordsRegexp} = m_util;
    const {SCOPE_TOP, SCOPE_FUNCTION, SCOPE_ASYNC, SCOPE_GENERATOR, SCOPE_SUPER, SCOPE_DIRECT_SUPER, SCOPE_CLASS_STATIC_BLOCK} = m_scopeflags;
    class Parser {
        constructor(options, input, startPos) {
            this.options = options = getOptions(options);
            this.sourceFile = options.sourceFile;
            this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === 'module' ? '5module' : 5]);
            let reserved = '';
            if (options.allowReserved !== true) {
                reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
                if (options.sourceType === 'module')
                    reserved += ' await';
            }
            this.reservedWords = wordsRegexp(reserved);
            let reservedStrict = (reserved ? reserved + ' ' : '') + reservedWords.strict;
            this.reservedWordsStrict = wordsRegexp(reservedStrict);
            this.reservedWordsStrictBind = wordsRegexp(reservedStrict + ' ' + reservedWords.strictBind);
            this.input = String(input);
            this.containsEsc = false;
            if (startPos) {
                this.pos = startPos;
                this.lineStart = this.input.lastIndexOf('\n', startPos - 1) + 1;
                this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
            } else {
                this.pos = this.lineStart = 0;
                this.curLine = 1;
            }
            this.type = tt.eof;
            this.value = null;
            this.start = this.end = this.pos;
            this.startLoc = this.endLoc = this.curPosition();
            this.lastTokEndLoc = this.lastTokStartLoc = null;
            this.lastTokStart = this.lastTokEnd = this.pos;
            this.context = this.initialContext();
            this.exprAllowed = true;
            this.inModule = options.sourceType === 'module';
            this.strict = this.inModule || this.strictDirective(this.pos);
            this.potentialArrowAt = -1;
            this.potentialArrowInForAwait = false;
            this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
            this.labels = [];
            this.undefinedExports = Object.create(null);
            if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === '#!')
                this.skipLineComment(2);
            this.scopeStack = [];
            this.enterScope(SCOPE_TOP);
            this.regexpState = null;
            this.privateNameStack = [];
        }
        parse() {
            let node = this.options.program || this.startNode();
            this.nextToken();
            return this.parseTopLevel(node);
        }
        get inFunction() {
            return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
        }
        get inGenerator() {
            return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit;
        }
        get inAsync() {
            return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit;
        }
        get canAwait() {
            for (let i = this.scopeStack.length - 1; i >= 0; i--) {
                let scope = this.scopeStack[i];
                if (scope.inClassFieldInit || scope.flags & SCOPE_CLASS_STATIC_BLOCK)
                    return false;
                if (scope.flags & SCOPE_FUNCTION)
                    return (scope.flags & SCOPE_ASYNC) > 0;
            }
            return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
        }
        get allowSuper() {
            const {flags, inClassFieldInit} = this.currentThisScope();
            return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod;
        }
        get allowDirectSuper() {
            return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
        }
        get treatFunctionsAsVar() {
            return this.treatFunctionsAsVarInScope(this.currentScope());
        }
        get allowNewDotTarget() {
            const {flags, inClassFieldInit} = this.currentThisScope();
            return (flags & (SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK)) > 0 || inClassFieldInit;
        }
        get inClassStaticBlock() {
            return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
        }
        static extend(...plugins) {
            let cls = this;
            for (let i = 0; i < plugins.length; i++)
                cls = plugins[i](cls);
            return cls;
        }
        static parse(input, options) {
            return new this(options, input).parse();
        }
        static parseExpressionAt(input, pos, options) {
            let parser = new this(options, input, pos);
            parser.nextToken();
            return parser.parseExpression();
        }
        static tokenizer(input, options) {
            return new this(options, input);
        }
    }
    return { Parser: Parser };
});
define('skylark-acorn/parseutil',[
    './tokentype',
    './state',
    './whitespace'
], function (m_tokentype, m_state, m_whitespace) {
    'use strict';
    const {types : tt} = m_tokentype;

    const {Parser} = m_state;
    const {lineBreak, skipWhiteSpace} = m_whitespace;
    const pp = Parser.prototype;
    const literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
    pp.strictDirective = function (start) {
        if (this.options.ecmaVersion < 5)
            return false;
        for (;;) {
            skipWhiteSpace.lastIndex = start;
            start += skipWhiteSpace.exec(this.input)[0].length;
            let match = literal.exec(this.input.slice(start));
            if (!match)
                return false;
            if ((match[1] || match[2]) === 'use strict') {
                skipWhiteSpace.lastIndex = start + match[0].length;
                let spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
                let next = this.input.charAt(end);
                return next === ';' || next === '}' || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === '!' && this.input.charAt(end + 1) === '=');
            }
            start += match[0].length;
            skipWhiteSpace.lastIndex = start;
            start += skipWhiteSpace.exec(this.input)[0].length;
            if (this.input[start] === ';')
                start++;
        }
    };
    pp.eat = function (type) {
        if (this.type === type) {
            this.next();
            return true;
        } else {
            return false;
        }
    };
    pp.isContextual = function (name) {
        return this.type === tt.name && this.value === name && !this.containsEsc;
    };
    pp.eatContextual = function (name) {
        if (!this.isContextual(name))
            return false;
        this.next();
        return true;
    };
    pp.expectContextual = function (name) {
        if (!this.eatContextual(name))
            this.unexpected();
    };
    pp.canInsertSemicolon = function () {
        return this.type === tt.eof || this.type === tt.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
    };
    pp.insertSemicolon = function () {
        if (this.canInsertSemicolon()) {
            if (this.options.onInsertedSemicolon)
                this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
            return true;
        }
    };
    pp.semicolon = function () {
        if (!this.eat(tt.semi) && !this.insertSemicolon())
            this.unexpected();
    };
    pp.afterTrailingComma = function (tokType, notNext) {
        if (this.type === tokType) {
            if (this.options.onTrailingComma)
                this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
            if (!notNext)
                this.next();
            return true;
        }
    };
    pp.expect = function (type) {
        this.eat(type) || this.unexpected();
    };
    pp.unexpected = function (pos) {
        this.raise(pos != null ? pos : this.start, 'Unexpected token');
    };
    class DestructuringErrors {
        constructor() {
            this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
        }
    }
    pp.checkPatternErrors = function (refDestructuringErrors, isAssign) {
        if (!refDestructuringErrors)
            return;
        if (refDestructuringErrors.trailingComma > -1)
            this.raiseRecoverable(refDestructuringErrors.trailingComma, 'Comma is not permitted after the rest element');
        let parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
        if (parens > -1)
            this.raiseRecoverable(parens, isAssign ? 'Assigning to rvalue' : 'Parenthesized pattern');
    };
    pp.checkExpressionErrors = function (refDestructuringErrors, andThrow) {
        if (!refDestructuringErrors)
            return false;
        let {shorthandAssign, doubleProto} = refDestructuringErrors;
        if (!andThrow)
            return shorthandAssign >= 0 || doubleProto >= 0;
        if (shorthandAssign >= 0)
            this.raise(shorthandAssign, 'Shorthand property assignments are valid only in destructuring patterns');
        if (doubleProto >= 0)
            this.raiseRecoverable(doubleProto, 'Redefinition of __proto__ property');
    };
    pp.checkYieldAwaitInDefaultParams = function () {
        if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
            this.raise(this.yieldPos, 'Yield expression cannot be a default value');
        if (this.awaitPos)
            this.raise(this.awaitPos, 'Await expression cannot be a default value');
    };
    pp.isSimpleAssignTarget = function (expr) {
        if (expr.type === 'ParenthesizedExpression')
            return this.isSimpleAssignTarget(expr.expression);
        return expr.type === 'Identifier' || expr.type === 'MemberExpression';
    };
    return { DestructuringErrors: DestructuringErrors };
});
define('skylark-acorn/statement',[
    './tokentype',
    './state',
    './whitespace',
    './identifier',
    './util',
    './parseutil',
    './scopeflags'
], function (m_tokentype, m_state, m_whitespace, m_identifier, m_util, m_parseutil, m_scopeflags) {
    'use strict';
    const {types : tt} = m_tokentype;

    const {Parser} = m_state;
    const {lineBreak, skipWhiteSpace} = m_whitespace;
    const {isIdentifierStart, isIdentifierChar, keywordRelationalOperator} = m_identifier;
    const {hasOwn, loneSurrogate} = m_util;
    const {DestructuringErrors} = m_parseutil;
    const {functionFlags, SCOPE_SIMPLE_CATCH, BIND_SIMPLE_CATCH, BIND_LEXICAL, BIND_VAR, BIND_FUNCTION, SCOPE_CLASS_STATIC_BLOCK, SCOPE_SUPER} = m_scopeflags;
    const pp = Parser.prototype;
    pp.parseTopLevel = function (node) {
        let exports = Object.create(null);
        if (!node.body)
            node.body = [];
        while (this.type !== tt.eof) {
            let stmt = this.parseStatement(null, true, exports);
            node.body.push(stmt);
        }
        if (this.inModule)
            for (let name of Object.keys(this.undefinedExports))
                this.raiseRecoverable(this.undefinedExports[name].start, `Export '${ name }' is not defined`);
        this.adaptDirectivePrologue(node.body);
        this.next();
        node.sourceType = this.options.sourceType;
        return this.finishNode(node, 'Program');
    };
    const loopLabel = { kind: 'loop' }, switchLabel = { kind: 'switch' };
    pp.isLet = function (context) {
        if (this.options.ecmaVersion < 6 || !this.isContextual('let'))
            return false;
        skipWhiteSpace.lastIndex = this.pos;
        let skip = skipWhiteSpace.exec(this.input);
        let next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 91 || nextCh === 92)
            return true;
        if (context)
            return false;
        if (nextCh === 123 || nextCh > 55295 && nextCh < 56320)
            return true;
        if (isIdentifierStart(nextCh, true)) {
            let pos = next + 1;
            while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true))
                ++pos;
            if (nextCh === 92 || nextCh > 55295 && nextCh < 56320)
                return true;
            let ident = this.input.slice(next, pos);
            if (!keywordRelationalOperator.test(ident))
                return true;
        }
        return false;
    };
    pp.isAsyncFunction = function () {
        if (this.options.ecmaVersion < 8 || !this.isContextual('async'))
            return false;
        skipWhiteSpace.lastIndex = this.pos;
        let skip = skipWhiteSpace.exec(this.input);
        let next = this.pos + skip[0].length, after;
        return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === 'function' && (next + 8 === this.input.length || !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
    };
    pp.parseStatement = function (context, topLevel, exports) {
        let starttype = this.type, node = this.startNode(), kind;
        if (this.isLet(context)) {
            starttype = tt._var;
            kind = 'let';
        }
        switch (starttype) {
        case tt._break:
        case tt._continue:
            return this.parseBreakContinueStatement(node, starttype.keyword);
        case tt._debugger:
            return this.parseDebuggerStatement(node);
        case tt._do:
            return this.parseDoStatement(node);
        case tt._for:
            return this.parseForStatement(node);
        case tt._function:
            if (context && (this.strict || context !== 'if' && context !== 'label') && this.options.ecmaVersion >= 6)
                this.unexpected();
            return this.parseFunctionStatement(node, false, !context);
        case tt._class:
            if (context)
                this.unexpected();
            return this.parseClass(node, true);
        case tt._if:
            return this.parseIfStatement(node);
        case tt._return:
            return this.parseReturnStatement(node);
        case tt._switch:
            return this.parseSwitchStatement(node);
        case tt._throw:
            return this.parseThrowStatement(node);
        case tt._try:
            return this.parseTryStatement(node);
        case tt._const:
        case tt._var:
            kind = kind || this.value;
            if (context && kind !== 'var')
                this.unexpected();
            return this.parseVarStatement(node, kind);
        case tt._while:
            return this.parseWhileStatement(node);
        case tt._with:
            return this.parseWithStatement(node);
        case tt.braceL:
            return this.parseBlock(true, node);
        case tt.semi:
            return this.parseEmptyStatement(node);
        case tt._export:
        case tt._import:
            if (this.options.ecmaVersion > 10 && starttype === tt._import) {
                skipWhiteSpace.lastIndex = this.pos;
                let skip = skipWhiteSpace.exec(this.input);
                let next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
                if (nextCh === 40 || nextCh === 46)
                    return this.parseExpressionStatement(node, this.parseExpression());
            }
            if (!this.options.allowImportExportEverywhere) {
                if (!topLevel)
                    this.raise(this.start, "'import' and 'export' may only appear at the top level");
                if (!this.inModule)
                    this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
            }
            return starttype === tt._import ? this.parseImport(node) : this.parseExport(node, exports);
        default:
            if (this.isAsyncFunction()) {
                if (context)
                    this.unexpected();
                this.next();
                return this.parseFunctionStatement(node, true, !context);
            }
            let maybeName = this.value, expr = this.parseExpression();
            if (starttype === tt.name && expr.type === 'Identifier' && this.eat(tt.colon))
                return this.parseLabeledStatement(node, maybeName, expr, context);
            else
                return this.parseExpressionStatement(node, expr);
        }
    };
    pp.parseBreakContinueStatement = function (node, keyword) {
        let isBreak = keyword === 'break';
        this.next();
        if (this.eat(tt.semi) || this.insertSemicolon())
            node.label = null;
        else if (this.type !== tt.name)
            this.unexpected();
        else {
            node.label = this.parseIdent();
            this.semicolon();
        }
        let i = 0;
        for (; i < this.labels.length; ++i) {
            let lab = this.labels[i];
            if (node.label == null || lab.name === node.label.name) {
                if (lab.kind != null && (isBreak || lab.kind === 'loop'))
                    break;
                if (node.label && isBreak)
                    break;
            }
        }
        if (i === this.labels.length)
            this.raise(node.start, 'Unsyntactic ' + keyword);
        return this.finishNode(node, isBreak ? 'BreakStatement' : 'ContinueStatement');
    };
    pp.parseDebuggerStatement = function (node) {
        this.next();
        this.semicolon();
        return this.finishNode(node, 'DebuggerStatement');
    };
    pp.parseDoStatement = function (node) {
        this.next();
        this.labels.push(loopLabel);
        node.body = this.parseStatement('do');
        this.labels.pop();
        this.expect(tt._while);
        node.test = this.parseParenExpression();
        if (this.options.ecmaVersion >= 6)
            this.eat(tt.semi);
        else
            this.semicolon();
        return this.finishNode(node, 'DoWhileStatement');
    };
    pp.parseForStatement = function (node) {
        this.next();
        let awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual('await') ? this.lastTokStart : -1;
        this.labels.push(loopLabel);
        this.enterScope(0);
        this.expect(tt.parenL);
        if (this.type === tt.semi) {
            if (awaitAt > -1)
                this.unexpected(awaitAt);
            return this.parseFor(node, null);
        }
        let isLet = this.isLet();
        if (this.type === tt._var || this.type === tt._const || isLet) {
            let init = this.startNode(), kind = isLet ? 'let' : this.value;
            this.next();
            this.parseVar(init, true, kind);
            this.finishNode(init, 'VariableDeclaration');
            if ((this.type === tt._in || this.options.ecmaVersion >= 6 && this.isContextual('of')) && init.declarations.length === 1) {
                if (this.options.ecmaVersion >= 9) {
                    if (this.type === tt._in) {
                        if (awaitAt > -1)
                            this.unexpected(awaitAt);
                    } else
                        node.await = awaitAt > -1;
                }
                return this.parseForIn(node, init);
            }
            if (awaitAt > -1)
                this.unexpected(awaitAt);
            return this.parseFor(node, init);
        }
        let startsWithLet = this.isContextual('let'), isForOf = false;
        let refDestructuringErrors = new DestructuringErrors();
        let init = this.parseExpression(awaitAt > -1 ? 'await' : true, refDestructuringErrors);
        if (this.type === tt._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual('of'))) {
            if (this.options.ecmaVersion >= 9) {
                if (this.type === tt._in) {
                    if (awaitAt > -1)
                        this.unexpected(awaitAt);
                } else
                    node.await = awaitAt > -1;
            }
            if (startsWithLet && isForOf)
                this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
            this.toAssignable(init, false, refDestructuringErrors);
            this.checkLValPattern(init);
            return this.parseForIn(node, init);
        } else {
            this.checkExpressionErrors(refDestructuringErrors, true);
        }
        if (awaitAt > -1)
            this.unexpected(awaitAt);
        return this.parseFor(node, init);
    };
    pp.parseFunctionStatement = function (node, isAsync, declarationPosition) {
        this.next();
        return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
    };
    pp.parseIfStatement = function (node) {
        this.next();
        node.test = this.parseParenExpression();
        node.consequent = this.parseStatement('if');
        node.alternate = this.eat(tt._else) ? this.parseStatement('if') : null;
        return this.finishNode(node, 'IfStatement');
    };
    pp.parseReturnStatement = function (node) {
        if (!this.inFunction && !this.options.allowReturnOutsideFunction)
            this.raise(this.start, "'return' outside of function");
        this.next();
        if (this.eat(tt.semi) || this.insertSemicolon())
            node.argument = null;
        else {
            node.argument = this.parseExpression();
            this.semicolon();
        }
        return this.finishNode(node, 'ReturnStatement');
    };
    pp.parseSwitchStatement = function (node) {
        this.next();
        node.discriminant = this.parseParenExpression();
        node.cases = [];
        this.expect(tt.braceL);
        this.labels.push(switchLabel);
        this.enterScope(0);
        let cur;
        for (let sawDefault = false; this.type !== tt.braceR;) {
            if (this.type === tt._case || this.type === tt._default) {
                let isCase = this.type === tt._case;
                if (cur)
                    this.finishNode(cur, 'SwitchCase');
                node.cases.push(cur = this.startNode());
                cur.consequent = [];
                this.next();
                if (isCase) {
                    cur.test = this.parseExpression();
                } else {
                    if (sawDefault)
                        this.raiseRecoverable(this.lastTokStart, 'Multiple default clauses');
                    sawDefault = true;
                    cur.test = null;
                }
                this.expect(tt.colon);
            } else {
                if (!cur)
                    this.unexpected();
                cur.consequent.push(this.parseStatement(null));
            }
        }
        this.exitScope();
        if (cur)
            this.finishNode(cur, 'SwitchCase');
        this.next();
        this.labels.pop();
        return this.finishNode(node, 'SwitchStatement');
    };
    pp.parseThrowStatement = function (node) {
        this.next();
        if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
            this.raise(this.lastTokEnd, 'Illegal newline after throw');
        node.argument = this.parseExpression();
        this.semicolon();
        return this.finishNode(node, 'ThrowStatement');
    };
    const empty = [];
    pp.parseCatchClauseParam = function () {
        const param = this.parseBindingAtom();
        let simple = param.type === 'Identifier';
        this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
        this.checkLValPattern(param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
        this.expect(tt.parenR);
        return param;
    };
    pp.parseTryStatement = function (node) {
        this.next();
        node.block = this.parseBlock();
        node.handler = null;
        if (this.type === tt._catch) {
            let clause = this.startNode();
            this.next();
            if (this.eat(tt.parenL)) {
                clause.param = this.parseCatchClauseParam();
            } else {
                if (this.options.ecmaVersion < 10)
                    this.unexpected();
                clause.param = null;
                this.enterScope(0);
            }
            clause.body = this.parseBlock(false);
            this.exitScope();
            node.handler = this.finishNode(clause, 'CatchClause');
        }
        node.finalizer = this.eat(tt._finally) ? this.parseBlock() : null;
        if (!node.handler && !node.finalizer)
            this.raise(node.start, 'Missing catch or finally clause');
        return this.finishNode(node, 'TryStatement');
    };
    pp.parseVarStatement = function (node, kind, allowMissingInitializer) {
        this.next();
        this.parseVar(node, false, kind, allowMissingInitializer);
        this.semicolon();
        return this.finishNode(node, 'VariableDeclaration');
    };
    pp.parseWhileStatement = function (node) {
        this.next();
        node.test = this.parseParenExpression();
        this.labels.push(loopLabel);
        node.body = this.parseStatement('while');
        this.labels.pop();
        return this.finishNode(node, 'WhileStatement');
    };
    pp.parseWithStatement = function (node) {
        if (this.strict)
            this.raise(this.start, "'with' in strict mode");
        this.next();
        node.object = this.parseParenExpression();
        node.body = this.parseStatement('with');
        return this.finishNode(node, 'WithStatement');
    };
    pp.parseEmptyStatement = function (node) {
        this.next();
        return this.finishNode(node, 'EmptyStatement');
    };
    pp.parseLabeledStatement = function (node, maybeName, expr, context) {
        for (let label of this.labels)
            if (label.name === maybeName)
                this.raise(expr.start, "Label '" + maybeName + "' is already declared");
        let kind = this.type.isLoop ? 'loop' : this.type === tt._switch ? 'switch' : null;
        for (let i = this.labels.length - 1; i >= 0; i--) {
            let label = this.labels[i];
            if (label.statementStart === node.start) {
                label.statementStart = this.start;
                label.kind = kind;
            } else
                break;
        }
        this.labels.push({
            name: maybeName,
            kind,
            statementStart: this.start
        });
        node.body = this.parseStatement(context ? context.indexOf('label') === -1 ? context + 'label' : context : 'label');
        this.labels.pop();
        node.label = expr;
        return this.finishNode(node, 'LabeledStatement');
    };
    pp.parseExpressionStatement = function (node, expr) {
        node.expression = expr;
        this.semicolon();
        return this.finishNode(node, 'ExpressionStatement');
    };
    pp.parseBlock = function (createNewLexicalScope = true, node = this.startNode(), exitStrict) {
        node.body = [];
        this.expect(tt.braceL);
        if (createNewLexicalScope)
            this.enterScope(0);
        while (this.type !== tt.braceR) {
            let stmt = this.parseStatement(null);
            node.body.push(stmt);
        }
        if (exitStrict)
            this.strict = false;
        this.next();
        if (createNewLexicalScope)
            this.exitScope();
        return this.finishNode(node, 'BlockStatement');
    };
    pp.parseFor = function (node, init) {
        node.init = init;
        this.expect(tt.semi);
        node.test = this.type === tt.semi ? null : this.parseExpression();
        this.expect(tt.semi);
        node.update = this.type === tt.parenR ? null : this.parseExpression();
        this.expect(tt.parenR);
        node.body = this.parseStatement('for');
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, 'ForStatement');
    };
    pp.parseForIn = function (node, init) {
        const isForIn = this.type === tt._in;
        this.next();
        if (init.type === 'VariableDeclaration' && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== 'var' || init.declarations[0].id.type !== 'Identifier')) {
            this.raise(init.start, `${ isForIn ? 'for-in' : 'for-of' } loop variable declaration may not have an initializer`);
        }
        node.left = init;
        node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
        this.expect(tt.parenR);
        node.body = this.parseStatement('for');
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, isForIn ? 'ForInStatement' : 'ForOfStatement');
    };
    pp.parseVar = function (node, isFor, kind, allowMissingInitializer) {
        node.declarations = [];
        node.kind = kind;
        for (;;) {
            let decl = this.startNode();
            this.parseVarId(decl, kind);
            if (this.eat(tt.eq)) {
                decl.init = this.parseMaybeAssign(isFor);
            } else if (!allowMissingInitializer && kind === 'const' && !(this.type === tt._in || this.options.ecmaVersion >= 6 && this.isContextual('of'))) {
                this.unexpected();
            } else if (!allowMissingInitializer && decl.id.type !== 'Identifier' && !(isFor && (this.type === tt._in || this.isContextual('of')))) {
                this.raise(this.lastTokEnd, 'Complex binding patterns require an initialization value');
            } else {
                decl.init = null;
            }
            node.declarations.push(this.finishNode(decl, 'VariableDeclarator'));
            if (!this.eat(tt.comma))
                break;
        }
        return node;
    };
    pp.parseVarId = function (decl, kind) {
        decl.id = this.parseBindingAtom();
        this.checkLValPattern(decl.id, kind === 'var' ? BIND_VAR : BIND_LEXICAL, false);
    };
    const FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
    pp.parseFunction = function (node, statement, allowExpressionBody, isAsync, forInit) {
        this.initFunction(node);
        if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
            if (this.type === tt.star && statement & FUNC_HANGING_STATEMENT)
                this.unexpected();
            node.generator = this.eat(tt.star);
        }
        if (this.options.ecmaVersion >= 8)
            node.async = !!isAsync;
        if (statement & FUNC_STATEMENT) {
            node.id = statement & FUNC_NULLABLE_ID && this.type !== tt.name ? null : this.parseIdent();
            if (node.id && !(statement & FUNC_HANGING_STATEMENT))
                this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
        }
        let oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(node.async, node.generator));
        if (!(statement & FUNC_STATEMENT))
            node.id = this.type === tt.name ? this.parseIdent() : null;
        this.parseFunctionParams(node);
        this.parseFunctionBody(node, allowExpressionBody, false, forInit);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, statement & FUNC_STATEMENT ? 'FunctionDeclaration' : 'FunctionExpression');
    };
    pp.parseFunctionParams = function (node) {
        this.expect(tt.parenL);
        node.params = this.parseBindingList(tt.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
    };
    pp.parseClass = function (node, isStatement) {
        this.next();
        const oldStrict = this.strict;
        this.strict = true;
        this.parseClassId(node, isStatement);
        this.parseClassSuper(node);
        const privateNameMap = this.enterClassBody();
        const classBody = this.startNode();
        let hadConstructor = false;
        classBody.body = [];
        this.expect(tt.braceL);
        while (this.type !== tt.braceR) {
            const element = this.parseClassElement(node.superClass !== null);
            if (element) {
                classBody.body.push(element);
                if (element.type === 'MethodDefinition' && element.kind === 'constructor') {
                    if (hadConstructor)
                        this.raiseRecoverable(element.start, 'Duplicate constructor in the same class');
                    hadConstructor = true;
                } else if (element.key && element.key.type === 'PrivateIdentifier' && isPrivateNameConflicted(privateNameMap, element)) {
                    this.raiseRecoverable(element.key.start, `Identifier '#${ element.key.name }' has already been declared`);
                }
            }
        }
        this.strict = oldStrict;
        this.next();
        node.body = this.finishNode(classBody, 'ClassBody');
        this.exitClassBody();
        return this.finishNode(node, isStatement ? 'ClassDeclaration' : 'ClassExpression');
    };
    pp.parseClassElement = function (constructorAllowsSuper) {
        if (this.eat(tt.semi))
            return null;
        const ecmaVersion = this.options.ecmaVersion;
        const node = this.startNode();
        let keyName = '';
        let isGenerator = false;
        let isAsync = false;
        let kind = 'method';
        let isStatic = false;
        if (this.eatContextual('static')) {
            if (ecmaVersion >= 13 && this.eat(tt.braceL)) {
                this.parseClassStaticBlock(node);
                return node;
            }
            if (this.isClassElementNameStart() || this.type === tt.star) {
                isStatic = true;
            } else {
                keyName = 'static';
            }
        }
        node.static = isStatic;
        if (!keyName && ecmaVersion >= 8 && this.eatContextual('async')) {
            if ((this.isClassElementNameStart() || this.type === tt.star) && !this.canInsertSemicolon()) {
                isAsync = true;
            } else {
                keyName = 'async';
            }
        }
        if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(tt.star)) {
            isGenerator = true;
        }
        if (!keyName && !isAsync && !isGenerator) {
            const lastValue = this.value;
            if (this.eatContextual('get') || this.eatContextual('set')) {
                if (this.isClassElementNameStart()) {
                    kind = lastValue;
                } else {
                    keyName = lastValue;
                }
            }
        }
        if (keyName) {
            node.computed = false;
            node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
            node.key.name = keyName;
            this.finishNode(node.key, 'Identifier');
        } else {
            this.parseClassElementName(node);
        }
        if (ecmaVersion < 13 || this.type === tt.parenL || kind !== 'method' || isGenerator || isAsync) {
            const isConstructor = !node.static && checkKeyName(node, 'constructor');
            const allowsDirectSuper = isConstructor && constructorAllowsSuper;
            if (isConstructor && kind !== 'method')
                this.raise(node.key.start, "Constructor can't have get/set modifier");
            node.kind = isConstructor ? 'constructor' : kind;
            this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
        } else {
            this.parseClassField(node);
        }
        return node;
    };
    pp.isClassElementNameStart = function () {
        return this.type === tt.name || this.type === tt.privateId || this.type === tt.num || this.type === tt.string || this.type === tt.bracketL || this.type.keyword;
    };
    pp.parseClassElementName = function (element) {
        if (this.type === tt.privateId) {
            if (this.value === 'constructor') {
                this.raise(this.start, "Classes can't have an element named '#constructor'");
            }
            element.computed = false;
            element.key = this.parsePrivateIdent();
        } else {
            this.parsePropertyName(element);
        }
    };
    pp.parseClassMethod = function (method, isGenerator, isAsync, allowsDirectSuper) {
        const key = method.key;
        if (method.kind === 'constructor') {
            if (isGenerator)
                this.raise(key.start, "Constructor can't be a generator");
            if (isAsync)
                this.raise(key.start, "Constructor can't be an async method");
        } else if (method.static && checkKeyName(method, 'prototype')) {
            this.raise(key.start, 'Classes may not have a static property named prototype');
        }
        const value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
        if (method.kind === 'get' && value.params.length !== 0)
            this.raiseRecoverable(value.start, 'getter should have no params');
        if (method.kind === 'set' && value.params.length !== 1)
            this.raiseRecoverable(value.start, 'setter should have exactly one param');
        if (method.kind === 'set' && value.params[0].type === 'RestElement')
            this.raiseRecoverable(value.params[0].start, 'Setter cannot use rest params');
        return this.finishNode(method, 'MethodDefinition');
    };
    pp.parseClassField = function (field) {
        if (checkKeyName(field, 'constructor')) {
            this.raise(field.key.start, "Classes can't have a field named 'constructor'");
        } else if (field.static && checkKeyName(field, 'prototype')) {
            this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
        }
        if (this.eat(tt.eq)) {
            const scope = this.currentThisScope();
            const inClassFieldInit = scope.inClassFieldInit;
            scope.inClassFieldInit = true;
            field.value = this.parseMaybeAssign();
            scope.inClassFieldInit = inClassFieldInit;
        } else {
            field.value = null;
        }
        this.semicolon();
        return this.finishNode(field, 'PropertyDefinition');
    };
    pp.parseClassStaticBlock = function (node) {
        node.body = [];
        let oldLabels = this.labels;
        this.labels = [];
        this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
        while (this.type !== tt.braceR) {
            let stmt = this.parseStatement(null);
            node.body.push(stmt);
        }
        this.next();
        this.exitScope();
        this.labels = oldLabels;
        return this.finishNode(node, 'StaticBlock');
    };
    pp.parseClassId = function (node, isStatement) {
        if (this.type === tt.name) {
            node.id = this.parseIdent();
            if (isStatement)
                this.checkLValSimple(node.id, BIND_LEXICAL, false);
        } else {
            if (isStatement === true)
                this.unexpected();
            node.id = null;
        }
    };
    pp.parseClassSuper = function (node) {
        node.superClass = this.eat(tt._extends) ? this.parseExprSubscripts(null, false) : null;
    };
    pp.enterClassBody = function () {
        const element = {
            declared: Object.create(null),
            used: []
        };
        this.privateNameStack.push(element);
        return element.declared;
    };
    pp.exitClassBody = function () {
        const {declared, used} = this.privateNameStack.pop();
        if (!this.options.checkPrivateFields)
            return;
        const len = this.privateNameStack.length;
        const parent = len === 0 ? null : this.privateNameStack[len - 1];
        for (let i = 0; i < used.length; ++i) {
            const id = used[i];
            if (!hasOwn(declared, id.name)) {
                if (parent) {
                    parent.used.push(id);
                } else {
                    this.raiseRecoverable(id.start, `Private field '#${ id.name }' must be declared in an enclosing class`);
                }
            }
        }
    };
    function isPrivateNameConflicted(privateNameMap, element) {
        const name = element.key.name;
        const curr = privateNameMap[name];
        let next = 'true';
        if (element.type === 'MethodDefinition' && (element.kind === 'get' || element.kind === 'set')) {
            next = (element.static ? 's' : 'i') + element.kind;
        }
        if (curr === 'iget' && next === 'iset' || curr === 'iset' && next === 'iget' || curr === 'sget' && next === 'sset' || curr === 'sset' && next === 'sget') {
            privateNameMap[name] = 'true';
            return false;
        } else if (!curr) {
            privateNameMap[name] = next;
            return false;
        } else {
            return true;
        }
    }
    function checkKeyName(node, name) {
        const {computed, key} = node;
        return !computed && (key.type === 'Identifier' && key.name === name || key.type === 'Literal' && key.value === name);
    }
    pp.parseExportAllDeclaration = function (node, exports) {
        if (this.options.ecmaVersion >= 11) {
            if (this.eatContextual('as')) {
                node.exported = this.parseModuleExportName();
                this.checkExport(exports, node.exported, this.lastTokStart);
            } else {
                node.exported = null;
            }
        }
        this.expectContextual('from');
        if (this.type !== tt.string)
            this.unexpected();
        node.source = this.parseExprAtom();
        this.semicolon();
        return this.finishNode(node, 'ExportAllDeclaration');
    };
    pp.parseExport = function (node, exports) {
        this.next();
        if (this.eat(tt.star)) {
            return this.parseExportAllDeclaration(node, exports);
        }
        if (this.eat(tt._default)) {
            this.checkExport(exports, 'default', this.lastTokStart);
            node.declaration = this.parseExportDefaultDeclaration();
            return this.finishNode(node, 'ExportDefaultDeclaration');
        }
        if (this.shouldParseExportStatement()) {
            node.declaration = this.parseExportDeclaration(node);
            if (node.declaration.type === 'VariableDeclaration')
                this.checkVariableExport(exports, node.declaration.declarations);
            else
                this.checkExport(exports, node.declaration.id, node.declaration.id.start);
            node.specifiers = [];
            node.source = null;
        } else {
            node.declaration = null;
            node.specifiers = this.parseExportSpecifiers(exports);
            if (this.eatContextual('from')) {
                if (this.type !== tt.string)
                    this.unexpected();
                node.source = this.parseExprAtom();
            } else {
                for (let spec of node.specifiers) {
                    this.checkUnreserved(spec.local);
                    this.checkLocalExport(spec.local);
                    if (spec.local.type === 'Literal') {
                        this.raise(spec.local.start, 'A string literal cannot be used as an exported binding without `from`.');
                    }
                }
                node.source = null;
            }
            this.semicolon();
        }
        return this.finishNode(node, 'ExportNamedDeclaration');
    };
    pp.parseExportDeclaration = function (node) {
        return this.parseStatement(null);
    };
    pp.parseExportDefaultDeclaration = function () {
        let isAsync;
        if (this.type === tt._function || (isAsync = this.isAsyncFunction())) {
            let fNode = this.startNode();
            this.next();
            if (isAsync)
                this.next();
            return this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
        } else if (this.type === tt._class) {
            let cNode = this.startNode();
            return this.parseClass(cNode, 'nullableID');
        } else {
            let declaration = this.parseMaybeAssign();
            this.semicolon();
            return declaration;
        }
    };
    pp.checkExport = function (exports, name, pos) {
        if (!exports)
            return;
        if (typeof name !== 'string')
            name = name.type === 'Identifier' ? name.name : name.value;
        if (hasOwn(exports, name))
            this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
        exports[name] = true;
    };
    pp.checkPatternExport = function (exports, pat) {
        let type = pat.type;
        if (type === 'Identifier')
            this.checkExport(exports, pat, pat.start);
        else if (type === 'ObjectPattern')
            for (let prop of pat.properties)
                this.checkPatternExport(exports, prop);
        else if (type === 'ArrayPattern')
            for (let elt of pat.elements) {
                if (elt)
                    this.checkPatternExport(exports, elt);
            }
        else if (type === 'Property')
            this.checkPatternExport(exports, pat.value);
        else if (type === 'AssignmentPattern')
            this.checkPatternExport(exports, pat.left);
        else if (type === 'RestElement')
            this.checkPatternExport(exports, pat.argument);
        else if (type === 'ParenthesizedExpression')
            this.checkPatternExport(exports, pat.expression);
    };
    pp.checkVariableExport = function (exports, decls) {
        if (!exports)
            return;
        for (let decl of decls)
            this.checkPatternExport(exports, decl.id);
    };
    pp.shouldParseExportStatement = function () {
        return this.type.keyword === 'var' || this.type.keyword === 'const' || this.type.keyword === 'class' || this.type.keyword === 'function' || this.isLet() || this.isAsyncFunction();
    };
    pp.parseExportSpecifier = function (exports) {
        let node = this.startNode();
        node.local = this.parseModuleExportName();
        node.exported = this.eatContextual('as') ? this.parseModuleExportName() : node.local;
        this.checkExport(exports, node.exported, node.exported.start);
        return this.finishNode(node, 'ExportSpecifier');
    };
    pp.parseExportSpecifiers = function (exports) {
        let nodes = [], first = true;
        this.expect(tt.braceL);
        while (!this.eat(tt.braceR)) {
            if (!first) {
                this.expect(tt.comma);
                if (this.afterTrailingComma(tt.braceR))
                    break;
            } else
                first = false;
            nodes.push(this.parseExportSpecifier(exports));
        }
        return nodes;
    };
    pp.parseImport = function (node) {
        this.next();
        if (this.type === tt.string) {
            node.specifiers = empty;
            node.source = this.parseExprAtom();
        } else {
            node.specifiers = this.parseImportSpecifiers();
            this.expectContextual('from');
            node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected();
        }
        this.semicolon();
        return this.finishNode(node, 'ImportDeclaration');
    };
    pp.parseImportSpecifier = function () {
        let node = this.startNode();
        node.imported = this.parseModuleExportName();
        if (this.eatContextual('as')) {
            node.local = this.parseIdent();
        } else {
            this.checkUnreserved(node.imported);
            node.local = node.imported;
        }
        this.checkLValSimple(node.local, BIND_LEXICAL);
        return this.finishNode(node, 'ImportSpecifier');
    };
    pp.parseImportDefaultSpecifier = function () {
        let node = this.startNode();
        node.local = this.parseIdent();
        this.checkLValSimple(node.local, BIND_LEXICAL);
        return this.finishNode(node, 'ImportDefaultSpecifier');
    };
    pp.parseImportNamespaceSpecifier = function () {
        let node = this.startNode();
        this.next();
        this.expectContextual('as');
        node.local = this.parseIdent();
        this.checkLValSimple(node.local, BIND_LEXICAL);
        return this.finishNode(node, 'ImportNamespaceSpecifier');
    };
    pp.parseImportSpecifiers = function () {
        let nodes = [], first = true;
        if (this.type === tt.name) {
            nodes.push(this.parseImportDefaultSpecifier());
            if (!this.eat(tt.comma))
                return nodes;
        }
        if (this.type === tt.star) {
            nodes.push(this.parseImportNamespaceSpecifier());
            return nodes;
        }
        this.expect(tt.braceL);
        while (!this.eat(tt.braceR)) {
            if (!first) {
                this.expect(tt.comma);
                if (this.afterTrailingComma(tt.braceR))
                    break;
            } else
                first = false;
            nodes.push(this.parseImportSpecifier());
        }
        return nodes;
    };
    pp.parseModuleExportName = function () {
        if (this.options.ecmaVersion >= 13 && this.type === tt.string) {
            const stringLiteral = this.parseLiteral(this.value);
            if (loneSurrogate.test(stringLiteral.value)) {
                this.raise(stringLiteral.start, 'An export name cannot include a lone surrogate.');
            }
            return stringLiteral;
        }
        return this.parseIdent(true);
    };
    pp.adaptDirectivePrologue = function (statements) {
        for (let i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
            statements[i].directive = statements[i].expression.raw.slice(1, -1);
        }
    };
    pp.isDirectiveCandidate = function (statement) {
        return this.options.ecmaVersion >= 5 && statement.type === 'ExpressionStatement' && statement.expression.type === 'Literal' && typeof statement.expression.value === 'string' && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
    };
});
define('skylark-acorn/lval',[
    './tokentype',
    './state',
    './util',
    './scopeflags'
], function (m_tokentype, m_state, m_util, m_scopeflags) {
    'use strict';
    const {types : tt} = m_tokentype;

    const {Parser} = m_state;
    const {hasOwn} = m_util;
    const {BIND_NONE, BIND_OUTSIDE, BIND_LEXICAL} = m_scopeflags;
    const pp = Parser.prototype;
    pp.toAssignable = function (node, isBinding, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 6 && node) {
            switch (node.type) {
            case 'Identifier':
                if (this.inAsync && node.name === 'await')
                    this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
                break;
            case 'ObjectPattern':
            case 'ArrayPattern':
            case 'AssignmentPattern':
            case 'RestElement':
                break;
            case 'ObjectExpression':
                node.type = 'ObjectPattern';
                if (refDestructuringErrors)
                    this.checkPatternErrors(refDestructuringErrors, true);
                for (let prop of node.properties) {
                    this.toAssignable(prop, isBinding);
                    if (prop.type === 'RestElement' && (prop.argument.type === 'ArrayPattern' || prop.argument.type === 'ObjectPattern')) {
                        this.raise(prop.argument.start, 'Unexpected token');
                    }
                }
                break;
            case 'Property':
                if (node.kind !== 'init')
                    this.raise(node.key.start, "Object pattern can't contain getter or setter");
                this.toAssignable(node.value, isBinding);
                break;
            case 'ArrayExpression':
                node.type = 'ArrayPattern';
                if (refDestructuringErrors)
                    this.checkPatternErrors(refDestructuringErrors, true);
                this.toAssignableList(node.elements, isBinding);
                break;
            case 'SpreadElement':
                node.type = 'RestElement';
                this.toAssignable(node.argument, isBinding);
                if (node.argument.type === 'AssignmentPattern')
                    this.raise(node.argument.start, 'Rest elements cannot have a default value');
                break;
            case 'AssignmentExpression':
                if (node.operator !== '=')
                    this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
                node.type = 'AssignmentPattern';
                delete node.operator;
                this.toAssignable(node.left, isBinding);
                break;
            case 'ParenthesizedExpression':
                this.toAssignable(node.expression, isBinding, refDestructuringErrors);
                break;
            case 'ChainExpression':
                this.raiseRecoverable(node.start, 'Optional chaining cannot appear in left-hand side');
                break;
            case 'MemberExpression':
                if (!isBinding)
                    break;
            default:
                this.raise(node.start, 'Assigning to rvalue');
            }
        } else if (refDestructuringErrors)
            this.checkPatternErrors(refDestructuringErrors, true);
        return node;
    };
    pp.toAssignableList = function (exprList, isBinding) {
        let end = exprList.length;
        for (let i = 0; i < end; i++) {
            let elt = exprList[i];
            if (elt)
                this.toAssignable(elt, isBinding);
        }
        if (end) {
            let last = exprList[end - 1];
            if (this.options.ecmaVersion === 6 && isBinding && last && last.type === 'RestElement' && last.argument.type !== 'Identifier')
                this.unexpected(last.argument.start);
        }
        return exprList;
    };
    pp.parseSpread = function (refDestructuringErrors) {
        let node = this.startNode();
        this.next();
        node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
        return this.finishNode(node, 'SpreadElement');
    };
    pp.parseRestBinding = function () {
        let node = this.startNode();
        this.next();
        if (this.options.ecmaVersion === 6 && this.type !== tt.name)
            this.unexpected();
        node.argument = this.parseBindingAtom();
        return this.finishNode(node, 'RestElement');
    };
    pp.parseBindingAtom = function () {
        if (this.options.ecmaVersion >= 6) {
            switch (this.type) {
            case tt.bracketL:
                let node = this.startNode();
                this.next();
                node.elements = this.parseBindingList(tt.bracketR, true, true);
                return this.finishNode(node, 'ArrayPattern');
            case tt.braceL:
                return this.parseObj(true);
            }
        }
        return this.parseIdent();
    };
    pp.parseBindingList = function (close, allowEmpty, allowTrailingComma, allowModifiers) {
        let elts = [], first = true;
        while (!this.eat(close)) {
            if (first)
                first = false;
            else
                this.expect(tt.comma);
            if (allowEmpty && this.type === tt.comma) {
                elts.push(null);
            } else if (allowTrailingComma && this.afterTrailingComma(close)) {
                break;
            } else if (this.type === tt.ellipsis) {
                let rest = this.parseRestBinding();
                this.parseBindingListItem(rest);
                elts.push(rest);
                if (this.type === tt.comma)
                    this.raiseRecoverable(this.start, 'Comma is not permitted after the rest element');
                this.expect(close);
                break;
            } else {
                elts.push(this.parseAssignableListItem(allowModifiers));
            }
        }
        return elts;
    };
    pp.parseAssignableListItem = function (allowModifiers) {
        let elem = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(elem);
        return elem;
    };
    pp.parseBindingListItem = function (param) {
        return param;
    };
    pp.parseMaybeDefault = function (startPos, startLoc, left) {
        left = left || this.parseBindingAtom();
        if (this.options.ecmaVersion < 6 || !this.eat(tt.eq))
            return left;
        let node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.right = this.parseMaybeAssign();
        return this.finishNode(node, 'AssignmentPattern');
    };
    pp.checkLValSimple = function (expr, bindingType = BIND_NONE, checkClashes) {
        const isBind = bindingType !== BIND_NONE;
        switch (expr.type) {
        case 'Identifier':
            if (this.strict && this.reservedWordsStrictBind.test(expr.name))
                this.raiseRecoverable(expr.start, (isBind ? 'Binding ' : 'Assigning to ') + expr.name + ' in strict mode');
            if (isBind) {
                if (bindingType === BIND_LEXICAL && expr.name === 'let')
                    this.raiseRecoverable(expr.start, 'let is disallowed as a lexically bound name');
                if (checkClashes) {
                    if (hasOwn(checkClashes, expr.name))
                        this.raiseRecoverable(expr.start, 'Argument name clash');
                    checkClashes[expr.name] = true;
                }
                if (bindingType !== BIND_OUTSIDE)
                    this.declareName(expr.name, bindingType, expr.start);
            }
            break;
        case 'ChainExpression':
            this.raiseRecoverable(expr.start, 'Optional chaining cannot appear in left-hand side');
            break;
        case 'MemberExpression':
            if (isBind)
                this.raiseRecoverable(expr.start, 'Binding member expression');
            break;
        case 'ParenthesizedExpression':
            if (isBind)
                this.raiseRecoverable(expr.start, 'Binding parenthesized expression');
            return this.checkLValSimple(expr.expression, bindingType, checkClashes);
        default:
            this.raise(expr.start, (isBind ? 'Binding' : 'Assigning to') + ' rvalue');
        }
    };
    pp.checkLValPattern = function (expr, bindingType = BIND_NONE, checkClashes) {
        switch (expr.type) {
        case 'ObjectPattern':
            for (let prop of expr.properties) {
                this.checkLValInnerPattern(prop, bindingType, checkClashes);
            }
            break;
        case 'ArrayPattern':
            for (let elem of expr.elements) {
                if (elem)
                    this.checkLValInnerPattern(elem, bindingType, checkClashes);
            }
            break;
        default:
            this.checkLValSimple(expr, bindingType, checkClashes);
        }
    };
    pp.checkLValInnerPattern = function (expr, bindingType = BIND_NONE, checkClashes) {
        switch (expr.type) {
        case 'Property':
            this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
            break;
        case 'AssignmentPattern':
            this.checkLValPattern(expr.left, bindingType, checkClashes);
            break;
        case 'RestElement':
            this.checkLValPattern(expr.argument, bindingType, checkClashes);
            break;
        default:
            this.checkLValPattern(expr, bindingType, checkClashes);
        }
    };
});
define('skylark-acorn/tokencontext',[
    './state',
    './tokentype',
    './whitespace'
], function (m_state, m_tokentype, m_whitespace) {
    'use strict';
    const {Parser} = m_state;
    const {types : tt} = m_tokentype;
    const {lineBreak} = m_whitespace;
    class TokContext {
        constructor(token, isExpr, preserveSpace, override, generator) {
            this.token = token;
            this.isExpr = !!isExpr;
            this.preserveSpace = !!preserveSpace;
            this.override = override;
            this.generator = !!generator;
        }
    }
    const types = {
        b_stat: new TokContext('{', false),
        b_expr: new TokContext('{', true),
        b_tmpl: new TokContext('${', false),
        p_stat: new TokContext('(', false),
        p_expr: new TokContext('(', true),
        q_tmpl: new TokContext('`', true, true, p => p.tryReadTemplateToken()),
        f_stat: new TokContext('function', false),
        f_expr: new TokContext('function', true),
        f_expr_gen: new TokContext('function', true, false, null, true),
        f_gen: new TokContext('function', false, false, null, true)
    };
    const pp = Parser.prototype;
    pp.initialContext = function () {
        return [types.b_stat];
    };
    pp.curContext = function () {
        return this.context[this.context.length - 1];
    };
    pp.braceIsBlock = function (prevType) {
        let parent = this.curContext();
        if (parent === types.f_expr || parent === types.f_stat)
            return true;
        if (prevType === tt.colon && (parent === types.b_stat || parent === types.b_expr))
            return !parent.isExpr;
        if (prevType === tt._return || prevType === tt.name && this.exprAllowed)
            return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
        if (prevType === tt._else || prevType === tt.semi || prevType === tt.eof || prevType === tt.parenR || prevType === tt.arrow)
            return true;
        if (prevType === tt.braceL)
            return parent === types.b_stat;
        if (prevType === tt._var || prevType === tt._const || prevType === tt.name)
            return false;
        return !this.exprAllowed;
    };
    pp.inGeneratorContext = function () {
        for (let i = this.context.length - 1; i >= 1; i--) {
            let context = this.context[i];
            if (context.token === 'function')
                return context.generator;
        }
        return false;
    };
    pp.updateContext = function (prevType) {
        let update, type = this.type;
        if (type.keyword && prevType === tt.dot)
            this.exprAllowed = false;
        else if (update = type.updateContext)
            update.call(this, prevType);
        else
            this.exprAllowed = type.beforeExpr;
    };
    pp.overrideContext = function (tokenCtx) {
        if (this.curContext() !== tokenCtx) {
            this.context[this.context.length - 1] = tokenCtx;
        }
    };
    tt.parenR.updateContext = tt.braceR.updateContext = function () {
        if (this.context.length === 1) {
            this.exprAllowed = true;
            return;
        }
        let out = this.context.pop();
        if (out === types.b_stat && this.curContext().token === 'function') {
            out = this.context.pop();
        }
        this.exprAllowed = !out.isExpr;
    };
    tt.braceL.updateContext = function (prevType) {
        this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
        this.exprAllowed = true;
    };
    tt.dollarBraceL.updateContext = function () {
        this.context.push(types.b_tmpl);
        this.exprAllowed = true;
    };
    tt.parenL.updateContext = function (prevType) {
        let statementParens = prevType === tt._if || prevType === tt._for || prevType === tt._with || prevType === tt._while;
        this.context.push(statementParens ? types.p_stat : types.p_expr);
        this.exprAllowed = true;
    };
    tt.incDec.updateContext = function () {
    };
    tt._function.updateContext = tt._class.updateContext = function (prevType) {
        if (prevType.beforeExpr && prevType !== tt._else && !(prevType === tt.semi && this.curContext() !== types.p_stat) && !(prevType === tt._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === tt.colon || prevType === tt.braceL) && this.curContext() === types.b_stat))
            this.context.push(types.f_expr);
        else
            this.context.push(types.f_stat);
        this.exprAllowed = false;
    };
    tt.backQuote.updateContext = function () {
        if (this.curContext() === types.q_tmpl)
            this.context.pop();
        else
            this.context.push(types.q_tmpl);
        this.exprAllowed = false;
    };
    tt.star.updateContext = function (prevType) {
        if (prevType === tt._function) {
            let index = this.context.length - 1;
            if (this.context[index] === types.f_expr)
                this.context[index] = types.f_expr_gen;
            else
                this.context[index] = types.f_gen;
        }
        this.exprAllowed = true;
    };
    tt.name.updateContext = function (prevType) {
        let allowed = false;
        if (this.options.ecmaVersion >= 6 && prevType !== tt.dot) {
            if (this.value === 'of' && !this.exprAllowed || this.value === 'yield' && this.inGeneratorContext())
                allowed = true;
        }
        this.exprAllowed = allowed;
    };
    return {
        TokContext: TokContext,
        types: types
    };
});
define('skylark-acorn/expression',[
    './tokentype',
    './tokencontext',
    './state',
    './parseutil',
    './whitespace',
    './scopeflags'
], function (m_tokentype, m_tokencontext, m_state, m_parseutil, m_whitespace, m_scopeflags) {
    'use strict';

    const {types : tt} = m_tokentype;
    const {types : tokenCtxTypes} = m_tokencontext;

    const {Parser} = m_state;
    const {DestructuringErrors} = m_parseutil;
    const {lineBreak} = m_whitespace;
    const {functionFlags, SCOPE_ARROW, SCOPE_SUPER, SCOPE_DIRECT_SUPER, BIND_OUTSIDE, BIND_VAR} = m_scopeflags;
    const pp = Parser.prototype;
    pp.checkPropClash = function (prop, propHash, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 9 && prop.type === 'SpreadElement')
            return;
        if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
            return;
        let {key} = prop, name;
        switch (key.type) {
        case 'Identifier':
            name = key.name;
            break;
        case 'Literal':
            name = String(key.value);
            break;
        default:
            return;
        }
        let {kind} = prop;
        if (this.options.ecmaVersion >= 6) {
            if (name === '__proto__' && kind === 'init') {
                if (propHash.proto) {
                    if (refDestructuringErrors) {
                        if (refDestructuringErrors.doubleProto < 0) {
                            refDestructuringErrors.doubleProto = key.start;
                        }
                    } else {
                        this.raiseRecoverable(key.start, 'Redefinition of __proto__ property');
                    }
                }
                propHash.proto = true;
            }
            return;
        }
        name = '$' + name;
        let other = propHash[name];
        if (other) {
            let redefinition;
            if (kind === 'init') {
                redefinition = this.strict && other.init || other.get || other.set;
            } else {
                redefinition = other.init || other[kind];
            }
            if (redefinition)
                this.raiseRecoverable(key.start, 'Redefinition of property');
        } else {
            other = propHash[name] = {
                init: false,
                get: false,
                set: false
            };
        }
        other[kind] = true;
    };
    pp.parseExpression = function (forInit, refDestructuringErrors) {
        let startPos = this.start, startLoc = this.startLoc;
        let expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
        if (this.type === tt.comma) {
            let node = this.startNodeAt(startPos, startLoc);
            node.expressions = [expr];
            while (this.eat(tt.comma))
                node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
            return this.finishNode(node, 'SequenceExpression');
        }
        return expr;
    };
    pp.parseMaybeAssign = function (forInit, refDestructuringErrors, afterLeftParse) {
        if (this.isContextual('yield')) {
            if (this.inGenerator)
                return this.parseYield(forInit);
            else
                this.exprAllowed = false;
        }
        let ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
        if (refDestructuringErrors) {
            oldParenAssign = refDestructuringErrors.parenthesizedAssign;
            oldTrailingComma = refDestructuringErrors.trailingComma;
            oldDoubleProto = refDestructuringErrors.doubleProto;
            refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
        } else {
            refDestructuringErrors = new DestructuringErrors();
            ownDestructuringErrors = true;
        }
        let startPos = this.start, startLoc = this.startLoc;
        if (this.type === tt.parenL || this.type === tt.name) {
            this.potentialArrowAt = this.start;
            this.potentialArrowInForAwait = forInit === 'await';
        }
        let left = this.parseMaybeConditional(forInit, refDestructuringErrors);
        if (afterLeftParse)
            left = afterLeftParse.call(this, left, startPos, startLoc);
        if (this.type.isAssign) {
            let node = this.startNodeAt(startPos, startLoc);
            node.operator = this.value;
            if (this.type === tt.eq)
                left = this.toAssignable(left, false, refDestructuringErrors);
            if (!ownDestructuringErrors) {
                refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
            }
            if (refDestructuringErrors.shorthandAssign >= left.start)
                refDestructuringErrors.shorthandAssign = -1;
            if (this.type === tt.eq)
                this.checkLValPattern(left);
            else
                this.checkLValSimple(left);
            node.left = left;
            this.next();
            node.right = this.parseMaybeAssign(forInit);
            if (oldDoubleProto > -1)
                refDestructuringErrors.doubleProto = oldDoubleProto;
            return this.finishNode(node, 'AssignmentExpression');
        } else {
            if (ownDestructuringErrors)
                this.checkExpressionErrors(refDestructuringErrors, true);
        }
        if (oldParenAssign > -1)
            refDestructuringErrors.parenthesizedAssign = oldParenAssign;
        if (oldTrailingComma > -1)
            refDestructuringErrors.trailingComma = oldTrailingComma;
        return left;
    };
    pp.parseMaybeConditional = function (forInit, refDestructuringErrors) {
        let startPos = this.start, startLoc = this.startLoc;
        let expr = this.parseExprOps(forInit, refDestructuringErrors);
        if (this.checkExpressionErrors(refDestructuringErrors))
            return expr;
        if (this.eat(tt.question)) {
            let node = this.startNodeAt(startPos, startLoc);
            node.test = expr;
            node.consequent = this.parseMaybeAssign();
            this.expect(tt.colon);
            node.alternate = this.parseMaybeAssign(forInit);
            return this.finishNode(node, 'ConditionalExpression');
        }
        return expr;
    };
    pp.parseExprOps = function (forInit, refDestructuringErrors) {
        let startPos = this.start, startLoc = this.startLoc;
        let expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
        if (this.checkExpressionErrors(refDestructuringErrors))
            return expr;
        return expr.start === startPos && expr.type === 'ArrowFunctionExpression' ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
    };
    pp.parseExprOp = function (left, leftStartPos, leftStartLoc, minPrec, forInit) {
        let prec = this.type.binop;
        if (prec != null && (!forInit || this.type !== tt._in)) {
            if (prec > minPrec) {
                let logical = this.type === tt.logicalOR || this.type === tt.logicalAND;
                let coalesce = this.type === tt.coalesce;
                if (coalesce) {
                    prec = tt.logicalAND.binop;
                }
                let op = this.value;
                this.next();
                let startPos = this.start, startLoc = this.startLoc;
                let right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
                let node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
                if (logical && this.type === tt.coalesce || coalesce && (this.type === tt.logicalOR || this.type === tt.logicalAND)) {
                    this.raiseRecoverable(this.start, 'Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses');
                }
                return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
            }
        }
        return left;
    };
    pp.buildBinary = function (startPos, startLoc, left, right, op, logical) {
        if (right.type === 'PrivateIdentifier')
            this.raise(right.start, 'Private identifier can only be left side of binary expression');
        let node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.operator = op;
        node.right = right;
        return this.finishNode(node, logical ? 'LogicalExpression' : 'BinaryExpression');
    };
    pp.parseMaybeUnary = function (refDestructuringErrors, sawUnary, incDec, forInit) {
        let startPos = this.start, startLoc = this.startLoc, expr;
        if (this.isContextual('await') && this.canAwait) {
            expr = this.parseAwait(forInit);
            sawUnary = true;
        } else if (this.type.prefix) {
            let node = this.startNode(), update = this.type === tt.incDec;
            node.operator = this.value;
            node.prefix = true;
            this.next();
            node.argument = this.parseMaybeUnary(null, true, update, forInit);
            this.checkExpressionErrors(refDestructuringErrors, true);
            if (update)
                this.checkLValSimple(node.argument);
            else if (this.strict && node.operator === 'delete' && node.argument.type === 'Identifier')
                this.raiseRecoverable(node.start, 'Deleting local variable in strict mode');
            else if (node.operator === 'delete' && isPrivateFieldAccess(node.argument))
                this.raiseRecoverable(node.start, 'Private fields can not be deleted');
            else
                sawUnary = true;
            expr = this.finishNode(node, update ? 'UpdateExpression' : 'UnaryExpression');
        } else if (!sawUnary && this.type === tt.privateId) {
            if ((forInit || this.privateNameStack.length === 0) && this.options.checkPrivateFields)
                this.unexpected();
            expr = this.parsePrivateIdent();
            if (this.type !== tt._in)
                this.unexpected();
        } else {
            expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
            if (this.checkExpressionErrors(refDestructuringErrors))
                return expr;
            while (this.type.postfix && !this.canInsertSemicolon()) {
                let node = this.startNodeAt(startPos, startLoc);
                node.operator = this.value;
                node.prefix = false;
                node.argument = expr;
                this.checkLValSimple(expr);
                this.next();
                expr = this.finishNode(node, 'UpdateExpression');
            }
        }
        if (!incDec && this.eat(tt.starstar)) {
            if (sawUnary)
                this.unexpected(this.lastTokStart);
            else
                return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), '**', false);
        } else {
            return expr;
        }
    };
    function isPrivateFieldAccess(node) {
        return node.type === 'MemberExpression' && node.property.type === 'PrivateIdentifier' || node.type === 'ChainExpression' && isPrivateFieldAccess(node.expression);
    }
    pp.parseExprSubscripts = function (refDestructuringErrors, forInit) {
        let startPos = this.start, startLoc = this.startLoc;
        let expr = this.parseExprAtom(refDestructuringErrors, forInit);
        if (expr.type === 'ArrowFunctionExpression' && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ')')
            return expr;
        let result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
        if (refDestructuringErrors && result.type === 'MemberExpression') {
            if (refDestructuringErrors.parenthesizedAssign >= result.start)
                refDestructuringErrors.parenthesizedAssign = -1;
            if (refDestructuringErrors.parenthesizedBind >= result.start)
                refDestructuringErrors.parenthesizedBind = -1;
            if (refDestructuringErrors.trailingComma >= result.start)
                refDestructuringErrors.trailingComma = -1;
        }
        return result;
    };
    pp.parseSubscripts = function (base, startPos, startLoc, noCalls, forInit) {
        let maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === 'Identifier' && base.name === 'async' && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
        let optionalChained = false;
        while (true) {
            let element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
            if (element.optional)
                optionalChained = true;
            if (element === base || element.type === 'ArrowFunctionExpression') {
                if (optionalChained) {
                    const chainNode = this.startNodeAt(startPos, startLoc);
                    chainNode.expression = element;
                    element = this.finishNode(chainNode, 'ChainExpression');
                }
                return element;
            }
            base = element;
        }
    };
    pp.shouldParseAsyncArrow = function () {
        return !this.canInsertSemicolon() && this.eat(tt.arrow);
    };
    pp.parseSubscriptAsyncArrow = function (startPos, startLoc, exprList, forInit) {
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
    };
    pp.parseSubscript = function (base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
        let optionalSupported = this.options.ecmaVersion >= 11;
        let optional = optionalSupported && this.eat(tt.questionDot);
        if (noCalls && optional)
            this.raise(this.lastTokStart, 'Optional chaining cannot appear in the callee of new expressions');
        let computed = this.eat(tt.bracketL);
        if (computed || optional && this.type !== tt.parenL && this.type !== tt.backQuote || this.eat(tt.dot)) {
            let node = this.startNodeAt(startPos, startLoc);
            node.object = base;
            if (computed) {
                node.property = this.parseExpression();
                this.expect(tt.bracketR);
            } else if (this.type === tt.privateId && base.type !== 'Super') {
                node.property = this.parsePrivateIdent();
            } else {
                node.property = this.parseIdent(this.options.allowReserved !== 'never');
            }
            node.computed = !!computed;
            if (optionalSupported) {
                node.optional = optional;
            }
            base = this.finishNode(node, 'MemberExpression');
        } else if (!noCalls && this.eat(tt.parenL)) {
            let refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
            this.yieldPos = 0;
            this.awaitPos = 0;
            this.awaitIdentPos = 0;
            let exprList = this.parseExprList(tt.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
            if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) {
                this.checkPatternErrors(refDestructuringErrors, false);
                this.checkYieldAwaitInDefaultParams();
                if (this.awaitIdentPos > 0)
                    this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
                this.yieldPos = oldYieldPos;
                this.awaitPos = oldAwaitPos;
                this.awaitIdentPos = oldAwaitIdentPos;
                return this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit);
            }
            this.checkExpressionErrors(refDestructuringErrors, true);
            this.yieldPos = oldYieldPos || this.yieldPos;
            this.awaitPos = oldAwaitPos || this.awaitPos;
            this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
            let node = this.startNodeAt(startPos, startLoc);
            node.callee = base;
            node.arguments = exprList;
            if (optionalSupported) {
                node.optional = optional;
            }
            base = this.finishNode(node, 'CallExpression');
        } else if (this.type === tt.backQuote) {
            if (optional || optionalChained) {
                this.raise(this.start, 'Optional chaining cannot appear in the tag of tagged template expressions');
            }
            let node = this.startNodeAt(startPos, startLoc);
            node.tag = base;
            node.quasi = this.parseTemplate({ isTagged: true });
            base = this.finishNode(node, 'TaggedTemplateExpression');
        }
        return base;
    };
    pp.parseExprAtom = function (refDestructuringErrors, forInit, forNew) {
        if (this.type === tt.slash)
            this.readRegexp();
        let node, canBeArrow = this.potentialArrowAt === this.start;
        switch (this.type) {
        case tt._super:
            if (!this.allowSuper)
                this.raise(this.start, "'super' keyword outside a method");
            node = this.startNode();
            this.next();
            if (this.type === tt.parenL && !this.allowDirectSuper)
                this.raise(node.start, 'super() call outside constructor of a subclass');
            if (this.type !== tt.dot && this.type !== tt.bracketL && this.type !== tt.parenL)
                this.unexpected();
            return this.finishNode(node, 'Super');
        case tt._this:
            node = this.startNode();
            this.next();
            return this.finishNode(node, 'ThisExpression');
        case tt.name:
            let startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
            let id = this.parseIdent(false);
            if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === 'async' && !this.canInsertSemicolon() && this.eat(tt._function)) {
                this.overrideContext(tokenCtxTypes.f_expr);
                return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
            }
            if (canBeArrow && !this.canInsertSemicolon()) {
                if (this.eat(tt.arrow))
                    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
                if (this.options.ecmaVersion >= 8 && id.name === 'async' && this.type === tt.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== 'of' || this.containsEsc)) {
                    id = this.parseIdent(false);
                    if (this.canInsertSemicolon() || !this.eat(tt.arrow))
                        this.unexpected();
                    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
                }
            }
            return id;
        case tt.regexp:
            let value = this.value;
            node = this.parseLiteral(value.value);
            node.regex = {
                pattern: value.pattern,
                flags: value.flags
            };
            return node;
        case tt.num:
        case tt.string:
            return this.parseLiteral(this.value);
        case tt._null:
        case tt._true:
        case tt._false:
            node = this.startNode();
            node.value = this.type === tt._null ? null : this.type === tt._true;
            node.raw = this.type.keyword;
            this.next();
            return this.finishNode(node, 'Literal');
        case tt.parenL:
            let start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
            if (refDestructuringErrors) {
                if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
                    refDestructuringErrors.parenthesizedAssign = start;
                if (refDestructuringErrors.parenthesizedBind < 0)
                    refDestructuringErrors.parenthesizedBind = start;
            }
            return expr;
        case tt.bracketL:
            node = this.startNode();
            this.next();
            node.elements = this.parseExprList(tt.bracketR, true, true, refDestructuringErrors);
            return this.finishNode(node, 'ArrayExpression');
        case tt.braceL:
            this.overrideContext(tokenCtxTypes.b_expr);
            return this.parseObj(false, refDestructuringErrors);
        case tt._function:
            node = this.startNode();
            this.next();
            return this.parseFunction(node, 0);
        case tt._class:
            return this.parseClass(this.startNode(), false);
        case tt._new:
            return this.parseNew();
        case tt.backQuote:
            return this.parseTemplate();
        case tt._import:
            if (this.options.ecmaVersion >= 11) {
                return this.parseExprImport(forNew);
            } else {
                return this.unexpected();
            }
        default:
            return this.parseExprAtomDefault();
        }
    };
    pp.parseExprAtomDefault = function () {
        this.unexpected();
    };
    pp.parseExprImport = function (forNew) {
        const node = this.startNode();
        if (this.containsEsc)
            this.raiseRecoverable(this.start, 'Escape sequence in keyword import');
        const meta = this.parseIdent(true);
        if (this.type === tt.parenL && !forNew) {
            return this.parseDynamicImport(node);
        } else if (this.type === tt.dot) {
            node.meta = meta;
            return this.parseImportMeta(node);
        } else {
            this.unexpected();
        }
    };
    pp.parseDynamicImport = function (node) {
        this.next();
        node.source = this.parseMaybeAssign();
        if (!this.eat(tt.parenR)) {
            const errorPos = this.start;
            if (this.eat(tt.comma) && this.eat(tt.parenR)) {
                this.raiseRecoverable(errorPos, 'Trailing comma is not allowed in import()');
            } else {
                this.unexpected(errorPos);
            }
        }
        return this.finishNode(node, 'ImportExpression');
    };
    pp.parseImportMeta = function (node) {
        this.next();
        const containsEsc = this.containsEsc;
        node.property = this.parseIdent(true);
        if (node.property.name !== 'meta')
            this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
        if (containsEsc)
            this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
        if (this.options.sourceType !== 'module' && !this.options.allowImportExportEverywhere)
            this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
        return this.finishNode(node, 'MetaProperty');
    };
    pp.parseLiteral = function (value) {
        let node = this.startNode();
        node.value = value;
        node.raw = this.input.slice(this.start, this.end);
        if (node.raw.charCodeAt(node.raw.length - 1) === 110)
            node.bigint = node.raw.slice(0, -1).replace(/_/g, '');
        this.next();
        return this.finishNode(node, 'Literal');
    };
    pp.parseParenExpression = function () {
        this.expect(tt.parenL);
        let val = this.parseExpression();
        this.expect(tt.parenR);
        return val;
    };
    pp.shouldParseArrow = function (exprList) {
        return !this.canInsertSemicolon();
    };
    pp.parseParenAndDistinguishExpression = function (canBeArrow, forInit) {
        let startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
            this.next();
            let innerStartPos = this.start, innerStartLoc = this.startLoc;
            let exprList = [], first = true, lastIsComma = false;
            let refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
            this.yieldPos = 0;
            this.awaitPos = 0;
            while (this.type !== tt.parenR) {
                first ? first = false : this.expect(tt.comma);
                if (allowTrailingComma && this.afterTrailingComma(tt.parenR, true)) {
                    lastIsComma = true;
                    break;
                } else if (this.type === tt.ellipsis) {
                    spreadStart = this.start;
                    exprList.push(this.parseParenItem(this.parseRestBinding()));
                    if (this.type === tt.comma) {
                        this.raiseRecoverable(this.start, 'Comma is not permitted after the rest element');
                    }
                    break;
                } else {
                    exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
                }
            }
            let innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
            this.expect(tt.parenR);
            if (canBeArrow && this.shouldParseArrow(exprList) && this.eat(tt.arrow)) {
                this.checkPatternErrors(refDestructuringErrors, false);
                this.checkYieldAwaitInDefaultParams();
                this.yieldPos = oldYieldPos;
                this.awaitPos = oldAwaitPos;
                return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
            }
            if (!exprList.length || lastIsComma)
                this.unexpected(this.lastTokStart);
            if (spreadStart)
                this.unexpected(spreadStart);
            this.checkExpressionErrors(refDestructuringErrors, true);
            this.yieldPos = oldYieldPos || this.yieldPos;
            this.awaitPos = oldAwaitPos || this.awaitPos;
            if (exprList.length > 1) {
                val = this.startNodeAt(innerStartPos, innerStartLoc);
                val.expressions = exprList;
                this.finishNodeAt(val, 'SequenceExpression', innerEndPos, innerEndLoc);
            } else {
                val = exprList[0];
            }
        } else {
            val = this.parseParenExpression();
        }
        if (this.options.preserveParens) {
            let par = this.startNodeAt(startPos, startLoc);
            par.expression = val;
            return this.finishNode(par, 'ParenthesizedExpression');
        } else {
            return val;
        }
    };
    pp.parseParenItem = function (item) {
        return item;
    };
    pp.parseParenArrowList = function (startPos, startLoc, exprList, forInit) {
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
    };
    const empty = [];
    pp.parseNew = function () {
        if (this.containsEsc)
            this.raiseRecoverable(this.start, 'Escape sequence in keyword new');
        let node = this.startNode();
        let meta = this.parseIdent(true);
        if (this.options.ecmaVersion >= 6 && this.eat(tt.dot)) {
            node.meta = meta;
            let containsEsc = this.containsEsc;
            node.property = this.parseIdent(true);
            if (node.property.name !== 'target')
                this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
            if (containsEsc)
                this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
            if (!this.allowNewDotTarget)
                this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
            return this.finishNode(node, 'MetaProperty');
        }
        let startPos = this.start, startLoc = this.startLoc;
        node.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), startPos, startLoc, true, false);
        if (this.eat(tt.parenL))
            node.arguments = this.parseExprList(tt.parenR, this.options.ecmaVersion >= 8, false);
        else
            node.arguments = empty;
        return this.finishNode(node, 'NewExpression');
    };
    pp.parseTemplateElement = function ({isTagged}) {
        let elem = this.startNode();
        if (this.type === tt.invalidTemplate) {
            if (!isTagged) {
                this.raiseRecoverable(this.start, 'Bad escape sequence in untagged template literal');
            }
            elem.value = {
                raw: this.value,
                cooked: null
            };
        } else {
            elem.value = {
                raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, '\n'),
                cooked: this.value
            };
        }
        this.next();
        elem.tail = this.type === tt.backQuote;
        return this.finishNode(elem, 'TemplateElement');
    };
    pp.parseTemplate = function ({
        isTagged = false
    } = {}) {
        let node = this.startNode();
        this.next();
        node.expressions = [];
        let curElt = this.parseTemplateElement({ isTagged });
        node.quasis = [curElt];
        while (!curElt.tail) {
            if (this.type === tt.eof)
                this.raise(this.pos, 'Unterminated template literal');
            this.expect(tt.dollarBraceL);
            node.expressions.push(this.parseExpression());
            this.expect(tt.braceR);
            node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
        }
        this.next();
        return this.finishNode(node, 'TemplateLiteral');
    };
    pp.isAsyncProp = function (prop) {
        return !prop.computed && prop.key.type === 'Identifier' && prop.key.name === 'async' && (this.type === tt.name || this.type === tt.num || this.type === tt.string || this.type === tt.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === tt.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
    };
    pp.parseObj = function (isPattern, refDestructuringErrors) {
        let node = this.startNode(), first = true, propHash = {};
        node.properties = [];
        this.next();
        while (!this.eat(tt.braceR)) {
            if (!first) {
                this.expect(tt.comma);
                if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(tt.braceR))
                    break;
            } else
                first = false;
            const prop = this.parseProperty(isPattern, refDestructuringErrors);
            if (!isPattern)
                this.checkPropClash(prop, propHash, refDestructuringErrors);
            node.properties.push(prop);
        }
        return this.finishNode(node, isPattern ? 'ObjectPattern' : 'ObjectExpression');
    };
    pp.parseProperty = function (isPattern, refDestructuringErrors) {
        let prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
        if (this.options.ecmaVersion >= 9 && this.eat(tt.ellipsis)) {
            if (isPattern) {
                prop.argument = this.parseIdent(false);
                if (this.type === tt.comma) {
                    this.raiseRecoverable(this.start, 'Comma is not permitted after the rest element');
                }
                return this.finishNode(prop, 'RestElement');
            }
            prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
            if (this.type === tt.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
                refDestructuringErrors.trailingComma = this.start;
            }
            return this.finishNode(prop, 'SpreadElement');
        }
        if (this.options.ecmaVersion >= 6) {
            prop.method = false;
            prop.shorthand = false;
            if (isPattern || refDestructuringErrors) {
                startPos = this.start;
                startLoc = this.startLoc;
            }
            if (!isPattern)
                isGenerator = this.eat(tt.star);
        }
        let containsEsc = this.containsEsc;
        this.parsePropertyName(prop);
        if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
            isAsync = true;
            isGenerator = this.options.ecmaVersion >= 9 && this.eat(tt.star);
            this.parsePropertyName(prop);
        } else {
            isAsync = false;
        }
        this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
        return this.finishNode(prop, 'Property');
    };
    pp.parseGetterSetter = function (prop) {
        prop.kind = prop.key.name;
        this.parsePropertyName(prop);
        prop.value = this.parseMethod(false);
        let paramCount = prop.kind === 'get' ? 0 : 1;
        if (prop.value.params.length !== paramCount) {
            let start = prop.value.start;
            if (prop.kind === 'get')
                this.raiseRecoverable(start, 'getter should have no params');
            else
                this.raiseRecoverable(start, 'setter should have exactly one param');
        } else {
            if (prop.kind === 'set' && prop.value.params[0].type === 'RestElement')
                this.raiseRecoverable(prop.value.params[0].start, 'Setter cannot use rest params');
        }
    };
    pp.parsePropertyValue = function (prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
        if ((isGenerator || isAsync) && this.type === tt.colon)
            this.unexpected();
        if (this.eat(tt.colon)) {
            prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
            prop.kind = 'init';
        } else if (this.options.ecmaVersion >= 6 && this.type === tt.parenL) {
            if (isPattern)
                this.unexpected();
            prop.kind = 'init';
            prop.method = true;
            prop.value = this.parseMethod(isGenerator, isAsync);
        } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === 'Identifier' && (prop.key.name === 'get' || prop.key.name === 'set') && (this.type !== tt.comma && this.type !== tt.braceR && this.type !== tt.eq)) {
            if (isGenerator || isAsync)
                this.unexpected();
            this.parseGetterSetter(prop);
        } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === 'Identifier') {
            if (isGenerator || isAsync)
                this.unexpected();
            this.checkUnreserved(prop.key);
            if (prop.key.name === 'await' && !this.awaitIdentPos)
                this.awaitIdentPos = startPos;
            prop.kind = 'init';
            if (isPattern) {
                prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
            } else if (this.type === tt.eq && refDestructuringErrors) {
                if (refDestructuringErrors.shorthandAssign < 0)
                    refDestructuringErrors.shorthandAssign = this.start;
                prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
            } else {
                prop.value = this.copyNode(prop.key);
            }
            prop.shorthand = true;
        } else
            this.unexpected();
    };
    pp.parsePropertyName = function (prop) {
        if (this.options.ecmaVersion >= 6) {
            if (this.eat(tt.bracketL)) {
                prop.computed = true;
                prop.key = this.parseMaybeAssign();
                this.expect(tt.bracketR);
                return prop.key;
            } else {
                prop.computed = false;
            }
        }
        return prop.key = this.type === tt.num || this.type === tt.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== 'never');
    };
    pp.initFunction = function (node) {
        node.id = null;
        if (this.options.ecmaVersion >= 6)
            node.generator = node.expression = false;
        if (this.options.ecmaVersion >= 8)
            node.async = false;
    };
    pp.parseMethod = function (isGenerator, isAsync, allowDirectSuper) {
        let node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.initFunction(node);
        if (this.options.ecmaVersion >= 6)
            node.generator = isGenerator;
        if (this.options.ecmaVersion >= 8)
            node.async = !!isAsync;
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
        this.expect(tt.parenL);
        node.params = this.parseBindingList(tt.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
        this.parseFunctionBody(node, false, true, false);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, 'FunctionExpression');
    };
    pp.parseArrowExpression = function (node, params, isAsync, forInit) {
        let oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
        this.initFunction(node);
        if (this.options.ecmaVersion >= 8)
            node.async = !!isAsync;
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        node.params = this.toAssignableList(params, true);
        this.parseFunctionBody(node, true, false, forInit);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, 'ArrowFunctionExpression');
    };
    pp.parseFunctionBody = function (node, isArrowFunction, isMethod, forInit) {
        let isExpression = isArrowFunction && this.type !== tt.braceL;
        let oldStrict = this.strict, useStrict = false;
        if (isExpression) {
            node.body = this.parseMaybeAssign(forInit);
            node.expression = true;
            this.checkParams(node, false);
        } else {
            let nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
            if (!oldStrict || nonSimple) {
                useStrict = this.strictDirective(this.end);
                if (useStrict && nonSimple)
                    this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
            }
            let oldLabels = this.labels;
            this.labels = [];
            if (useStrict)
                this.strict = true;
            this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
            if (this.strict && node.id)
                this.checkLValSimple(node.id, BIND_OUTSIDE);
            node.body = this.parseBlock(false, undefined, useStrict && !oldStrict);
            node.expression = false;
            this.adaptDirectivePrologue(node.body.body);
            this.labels = oldLabels;
        }
        this.exitScope();
    };
    pp.isSimpleParamList = function (params) {
        for (let param of params)
            if (param.type !== 'Identifier')
                return false;
        return true;
    };
    pp.checkParams = function (node, allowDuplicates) {
        let nameHash = Object.create(null);
        for (let param of node.params)
            this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
    };
    pp.parseExprList = function (close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
        let elts = [], first = true;
        while (!this.eat(close)) {
            if (!first) {
                this.expect(tt.comma);
                if (allowTrailingComma && this.afterTrailingComma(close))
                    break;
            } else
                first = false;
            let elt;
            if (allowEmpty && this.type === tt.comma)
                elt = null;
            else if (this.type === tt.ellipsis) {
                elt = this.parseSpread(refDestructuringErrors);
                if (refDestructuringErrors && this.type === tt.comma && refDestructuringErrors.trailingComma < 0)
                    refDestructuringErrors.trailingComma = this.start;
            } else {
                elt = this.parseMaybeAssign(false, refDestructuringErrors);
            }
            elts.push(elt);
        }
        return elts;
    };
    pp.checkUnreserved = function ({start, end, name}) {
        if (this.inGenerator && name === 'yield')
            this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
        if (this.inAsync && name === 'await')
            this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
        if (this.currentThisScope().inClassFieldInit && name === 'arguments')
            this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
        if (this.inClassStaticBlock && (name === 'arguments' || name === 'await'))
            this.raise(start, `Cannot use ${ name } in class static initialization block`);
        if (this.keywords.test(name))
            this.raise(start, `Unexpected keyword '${ name }'`);
        if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf('\\') !== -1)
            return;
        const re = this.strict ? this.reservedWordsStrict : this.reservedWords;
        if (re.test(name)) {
            if (!this.inAsync && name === 'await')
                this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
            this.raiseRecoverable(start, `The keyword '${ name }' is reserved`);
        }
    };
    pp.parseIdent = function (liberal) {
        let node = this.parseIdentNode();
        this.next(!!liberal);
        this.finishNode(node, 'Identifier');
        if (!liberal) {
            this.checkUnreserved(node);
            if (node.name === 'await' && !this.awaitIdentPos)
                this.awaitIdentPos = node.start;
        }
        return node;
    };
    pp.parseIdentNode = function () {
        let node = this.startNode();
        if (this.type === tt.name) {
            node.name = this.value;
        } else if (this.type.keyword) {
            node.name = this.type.keyword;
            if ((node.name === 'class' || node.name === 'function') && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
                this.context.pop();
            }
        } else {
            this.unexpected();
        }
        return node;
    };
    pp.parsePrivateIdent = function () {
        const node = this.startNode();
        if (this.type === tt.privateId) {
            node.name = this.value;
        } else {
            this.unexpected();
        }
        this.next();
        this.finishNode(node, 'PrivateIdentifier');
        if (this.options.checkPrivateFields) {
            if (this.privateNameStack.length === 0) {
                this.raise(node.start, `Private field '#${ node.name }' must be declared in an enclosing class`);
            } else {
                this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
            }
        }
        return node;
    };
    pp.parseYield = function (forInit) {
        if (!this.yieldPos)
            this.yieldPos = this.start;
        let node = this.startNode();
        this.next();
        if (this.type === tt.semi || this.canInsertSemicolon() || this.type !== tt.star && !this.type.startsExpr) {
            node.delegate = false;
            node.argument = null;
        } else {
            node.delegate = this.eat(tt.star);
            node.argument = this.parseMaybeAssign(forInit);
        }
        return this.finishNode(node, 'YieldExpression');
    };
    pp.parseAwait = function (forInit) {
        if (!this.awaitPos)
            this.awaitPos = this.start;
        let node = this.startNode();
        this.next();
        node.argument = this.parseMaybeUnary(null, true, false, forInit);
        return this.finishNode(node, 'AwaitExpression');
    };
});
define('skylark-acorn/location',[
    './state',
    './locutil'
], function (m_state, m_locutil) {
    'use strict';
    const {Parser} = m_state;
    const {Position, getLineInfo} = m_locutil;
    const pp = Parser.prototype;
    pp.raise = function (pos, message) {
        let loc = getLineInfo(this.input, pos);
        message += ' (' + loc.line + ':' + loc.column + ')';
        let err = new SyntaxError(message);
        err.pos = pos;
        err.loc = loc;
        err.raisedAt = this.pos;
        throw err;
    };
    pp.raiseRecoverable = pp.raise;
    pp.curPosition = function () {
        if (this.options.locations) {
            return new Position(this.curLine, this.pos - this.lineStart);
        }
    };
});
define('skylark-acorn/scope',[
    './state',
    './scopeflags'
], function (m_state, m_scopeflags) {
    'use strict';
    const {Parser} = m_state;
    const {SCOPE_VAR, SCOPE_FUNCTION, SCOPE_TOP, SCOPE_ARROW, SCOPE_SIMPLE_CATCH, BIND_LEXICAL, BIND_SIMPLE_CATCH, BIND_FUNCTION} = m_scopeflags;
    const pp = Parser.prototype;
    class Scope {
        constructor(flags) {
            this.flags = flags;
            this.var = [];
            this.lexical = [];
            this.functions = [];
            this.inClassFieldInit = false;
        }
    }
    pp.enterScope = function (flags) {
        this.scopeStack.push(new Scope(flags));
    };
    pp.exitScope = function () {
        this.scopeStack.pop();
    };
    pp.treatFunctionsAsVarInScope = function (scope) {
        return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
    };
    pp.declareName = function (name, bindingType, pos) {
        let redeclared = false;
        if (bindingType === BIND_LEXICAL) {
            const scope = this.currentScope();
            redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
            scope.lexical.push(name);
            if (this.inModule && scope.flags & SCOPE_TOP)
                delete this.undefinedExports[name];
        } else if (bindingType === BIND_SIMPLE_CATCH) {
            const scope = this.currentScope();
            scope.lexical.push(name);
        } else if (bindingType === BIND_FUNCTION) {
            const scope = this.currentScope();
            if (this.treatFunctionsAsVar)
                redeclared = scope.lexical.indexOf(name) > -1;
            else
                redeclared = scope.lexical.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
            scope.functions.push(name);
        } else {
            for (let i = this.scopeStack.length - 1; i >= 0; --i) {
                const scope = this.scopeStack[i];
                if (scope.lexical.indexOf(name) > -1 && !(scope.flags & SCOPE_SIMPLE_CATCH && scope.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope) && scope.functions.indexOf(name) > -1) {
                    redeclared = true;
                    break;
                }
                scope.var.push(name);
                if (this.inModule && scope.flags & SCOPE_TOP)
                    delete this.undefinedExports[name];
                if (scope.flags & SCOPE_VAR)
                    break;
            }
        }
        if (redeclared)
            this.raiseRecoverable(pos, `Identifier '${ name }' has already been declared`);
    };
    pp.checkLocalExport = function (id) {
        if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
            this.undefinedExports[id.name] = id;
        }
    };
    pp.currentScope = function () {
        return this.scopeStack[this.scopeStack.length - 1];
    };
    pp.currentVarScope = function () {
        for (let i = this.scopeStack.length - 1;; i--) {
            let scope = this.scopeStack[i];
            if (scope.flags & SCOPE_VAR)
                return scope;
        }
    };
    pp.currentThisScope = function () {
        for (let i = this.scopeStack.length - 1;; i--) {
            let scope = this.scopeStack[i];
            if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW))
                return scope;
        }
    };
});
define('skylark-acorn/node',[
    './state',
    './locutil'
], function (m_state, m_locutil) {
    'use strict';
    const {Parser} = m_state;
    const {SourceLocation} = m_locutil;
    class Node {
        constructor(parser, pos, loc) {
            this.type = '';
            this.start = pos;
            this.end = 0;
            if (parser.options.locations)
                this.loc = new SourceLocation(parser, loc);
            if (parser.options.directSourceFile)
                this.sourceFile = parser.options.directSourceFile;
            if (parser.options.ranges)
                this.range = [
                    pos,
                    0
                ];
        }
    }
    const pp = Parser.prototype;
    pp.startNode = function () {
        return new Node(this, this.start, this.startLoc);
    };
    pp.startNodeAt = function (pos, loc) {
        return new Node(this, pos, loc);
    };
    function finishNodeAt(node, type, pos, loc) {
        node.type = type;
        node.end = pos;
        if (this.options.locations)
            node.loc.end = loc;
        if (this.options.ranges)
            node.range[1] = pos;
        return node;
    }
    pp.finishNode = function (node, type) {
        return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
    };
    pp.finishNodeAt = function (node, type, pos, loc) {
        return finishNodeAt.call(this, node, type, pos, loc);
    };
    pp.copyNode = function (node) {
        let newNode = new Node(this, node.start, this.startLoc);
        for (let prop in node)
            newNode[prop] = node[prop];
        return newNode;
    };
    return { Node: Node };
});
define('skylark-acorn/unicode-property-data',['./util'], function (m_util) {
    'use strict';
    const {wordsRegexp} = m_util;
    const ecma9BinaryProperties = 'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS';
    const ecma10BinaryProperties = ecma9BinaryProperties + ' Extended_Pictographic';
    const ecma11BinaryProperties = ecma10BinaryProperties;
    const ecma12BinaryProperties = ecma11BinaryProperties + ' EBase EComp EMod EPres ExtPict';
    const ecma13BinaryProperties = ecma12BinaryProperties;
    const ecma14BinaryProperties = ecma13BinaryProperties;
    const unicodeBinaryProperties = {
        9: ecma9BinaryProperties,
        10: ecma10BinaryProperties,
        11: ecma11BinaryProperties,
        12: ecma12BinaryProperties,
        13: ecma13BinaryProperties,
        14: ecma14BinaryProperties
    };
    const ecma14BinaryPropertiesOfStrings = 'Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji';
    const unicodeBinaryPropertiesOfStrings = {
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: ecma14BinaryPropertiesOfStrings
    };
    const unicodeGeneralCategoryValues = 'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu';
    const ecma9ScriptValues = 'Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb';
    const ecma10ScriptValues = ecma9ScriptValues + ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd';
    const ecma11ScriptValues = ecma10ScriptValues + ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho';
    const ecma12ScriptValues = ecma11ScriptValues + ' Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi';
    const ecma13ScriptValues = ecma12ScriptValues + ' Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith';
    const ecma14ScriptValues = ecma13ScriptValues + ' Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz';
    const unicodeScriptValues = {
        9: ecma9ScriptValues,
        10: ecma10ScriptValues,
        11: ecma11ScriptValues,
        12: ecma12ScriptValues,
        13: ecma13ScriptValues,
        14: ecma14ScriptValues
    };
    const data = {};
    function buildUnicodeData(ecmaVersion) {
        const d = data[ecmaVersion] = {
            binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + ' ' + unicodeGeneralCategoryValues),
            binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion]),
            nonBinary: {
                General_Category: wordsRegexp(unicodeGeneralCategoryValues),
                Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
            }
        };
        d.nonBinary.Script_Extensions = d.nonBinary.Script;
        d.nonBinary.gc = d.nonBinary.General_Category;
        d.nonBinary.sc = d.nonBinary.Script;
        d.nonBinary.scx = d.nonBinary.Script_Extensions;
    }
    for (const ecmaVersion of [
            9,
            10,
            11,
            12,
            13,
            14
        ]) {
        buildUnicodeData(ecmaVersion);
    }
    return data;
});
define('skylark-acorn/regexp',[
    './identifier',
    './state',
    './unicode-property-data',
    './util'
], function (m_identifier, m_state, UNICODE_PROPERTY_VALUES, m_util) {
    'use strict';
    const {isIdentifierStart, isIdentifierChar} = m_identifier;
    const {Parser} = m_state;
    const {hasOwn, codePointToString} = m_util;
    const pp = Parser.prototype;
    class RegExpValidationState {
        constructor(parser) {
            this.parser = parser;
            this.validFlags = `gim${ parser.options.ecmaVersion >= 6 ? 'uy' : '' }${ parser.options.ecmaVersion >= 9 ? 's' : '' }${ parser.options.ecmaVersion >= 13 ? 'd' : '' }${ parser.options.ecmaVersion >= 15 ? 'v' : '' }`;
            this.unicodeProperties = UNICODE_PROPERTY_VALUES[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion];
            this.source = '';
            this.flags = '';
            this.start = 0;
            this.switchU = false;
            this.switchV = false;
            this.switchN = false;
            this.pos = 0;
            this.lastIntValue = 0;
            this.lastStringValue = '';
            this.lastAssertionIsQuantifiable = false;
            this.numCapturingParens = 0;
            this.maxBackReference = 0;
            this.groupNames = [];
            this.backReferenceNames = [];
        }
        reset(start, pattern, flags) {
            const unicodeSets = flags.indexOf('v') !== -1;
            const unicode = flags.indexOf('u') !== -1;
            this.start = start | 0;
            this.source = pattern + '';
            this.flags = flags;
            if (unicodeSets && this.parser.options.ecmaVersion >= 15) {
                this.switchU = true;
                this.switchV = true;
                this.switchN = true;
            } else {
                this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
                this.switchV = false;
                this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
            }
        }
        raise(message) {
            this.parser.raiseRecoverable(this.start, `Invalid regular expression: /${ this.source }/: ${ message }`);
        }
        at(i, forceU = false) {
            const s = this.source;
            const l = s.length;
            if (i >= l) {
                return -1;
            }
            const c = s.charCodeAt(i);
            if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l) {
                return c;
            }
            const next = s.charCodeAt(i + 1);
            return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
        }
        nextIndex(i, forceU = false) {
            const s = this.source;
            const l = s.length;
            if (i >= l) {
                return l;
            }
            let c = s.charCodeAt(i), next;
            if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
                return i + 1;
            }
            return i + 2;
        }
        current(forceU = false) {
            return this.at(this.pos, forceU);
        }
        lookahead(forceU = false) {
            return this.at(this.nextIndex(this.pos, forceU), forceU);
        }
        advance(forceU = false) {
            this.pos = this.nextIndex(this.pos, forceU);
        }
        eat(ch, forceU = false) {
            if (this.current(forceU) === ch) {
                this.advance(forceU);
                return true;
            }
            return false;
        }
        eatChars(chs, forceU = false) {
            let pos = this.pos;
            for (const ch of chs) {
                const current = this.at(pos, forceU);
                if (current === -1 || current !== ch) {
                    return false;
                }
                pos = this.nextIndex(pos, forceU);
            }
            this.pos = pos;
            return true;
        }
    }
    pp.validateRegExpFlags = function (state) {
        const validFlags = state.validFlags;
        const flags = state.flags;
        let u = false;
        let v = false;
        for (let i = 0; i < flags.length; i++) {
            const flag = flags.charAt(i);
            if (validFlags.indexOf(flag) === -1) {
                this.raise(state.start, 'Invalid regular expression flag');
            }
            if (flags.indexOf(flag, i + 1) > -1) {
                this.raise(state.start, 'Duplicate regular expression flag');
            }
            if (flag === 'u')
                u = true;
            if (flag === 'v')
                v = true;
        }
        if (this.options.ecmaVersion >= 15 && u && v) {
            this.raise(state.start, 'Invalid regular expression flag');
        }
    };
    pp.validateRegExpPattern = function (state) {
        this.regexp_pattern(state);
        if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
            state.switchN = true;
            this.regexp_pattern(state);
        }
    };
    pp.regexp_pattern = function (state) {
        state.pos = 0;
        state.lastIntValue = 0;
        state.lastStringValue = '';
        state.lastAssertionIsQuantifiable = false;
        state.numCapturingParens = 0;
        state.maxBackReference = 0;
        state.groupNames.length = 0;
        state.backReferenceNames.length = 0;
        this.regexp_disjunction(state);
        if (state.pos !== state.source.length) {
            if (state.eat(41)) {
                state.raise("Unmatched ')'");
            }
            if (state.eat(93) || state.eat(125)) {
                state.raise('Lone quantifier brackets');
            }
        }
        if (state.maxBackReference > state.numCapturingParens) {
            state.raise('Invalid escape');
        }
        for (const name of state.backReferenceNames) {
            if (state.groupNames.indexOf(name) === -1) {
                state.raise('Invalid named capture referenced');
            }
        }
    };
    pp.regexp_disjunction = function (state) {
        this.regexp_alternative(state);
        while (state.eat(124)) {
            this.regexp_alternative(state);
        }
        if (this.regexp_eatQuantifier(state, true)) {
            state.raise('Nothing to repeat');
        }
        if (state.eat(123)) {
            state.raise('Lone quantifier brackets');
        }
    };
    pp.regexp_alternative = function (state) {
        while (state.pos < state.source.length && this.regexp_eatTerm(state));
    };
    pp.regexp_eatTerm = function (state) {
        if (this.regexp_eatAssertion(state)) {
            if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
                if (state.switchU) {
                    state.raise('Invalid quantifier');
                }
            }
            return true;
        }
        if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
            this.regexp_eatQuantifier(state);
            return true;
        }
        return false;
    };
    pp.regexp_eatAssertion = function (state) {
        const start = state.pos;
        state.lastAssertionIsQuantifiable = false;
        if (state.eat(94) || state.eat(36)) {
            return true;
        }
        if (state.eat(92)) {
            if (state.eat(66) || state.eat(98)) {
                return true;
            }
            state.pos = start;
        }
        if (state.eat(40) && state.eat(63)) {
            let lookbehind = false;
            if (this.options.ecmaVersion >= 9) {
                lookbehind = state.eat(60);
            }
            if (state.eat(61) || state.eat(33)) {
                this.regexp_disjunction(state);
                if (!state.eat(41)) {
                    state.raise('Unterminated group');
                }
                state.lastAssertionIsQuantifiable = !lookbehind;
                return true;
            }
        }
        state.pos = start;
        return false;
    };
    pp.regexp_eatQuantifier = function (state, noError = false) {
        if (this.regexp_eatQuantifierPrefix(state, noError)) {
            state.eat(63);
            return true;
        }
        return false;
    };
    pp.regexp_eatQuantifierPrefix = function (state, noError) {
        return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
    };
    pp.regexp_eatBracedQuantifier = function (state, noError) {
        const start = state.pos;
        if (state.eat(123)) {
            let min = 0, max = -1;
            if (this.regexp_eatDecimalDigits(state)) {
                min = state.lastIntValue;
                if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
                    max = state.lastIntValue;
                }
                if (state.eat(125)) {
                    if (max !== -1 && max < min && !noError) {
                        state.raise('numbers out of order in {} quantifier');
                    }
                    return true;
                }
            }
            if (state.switchU && !noError) {
                state.raise('Incomplete quantifier');
            }
            state.pos = start;
        }
        return false;
    };
    pp.regexp_eatAtom = function (state) {
        return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
    };
    pp.regexp_eatReverseSolidusAtomEscape = function (state) {
        const start = state.pos;
        if (state.eat(92)) {
            if (this.regexp_eatAtomEscape(state)) {
                return true;
            }
            state.pos = start;
        }
        return false;
    };
    pp.regexp_eatUncapturingGroup = function (state) {
        const start = state.pos;
        if (state.eat(40)) {
            if (state.eat(63) && state.eat(58)) {
                this.regexp_disjunction(state);
                if (state.eat(41)) {
                    return true;
                }
                state.raise('Unterminated group');
            }
            state.pos = start;
        }
        return false;
    };
    pp.regexp_eatCapturingGroup = function (state) {
        if (state.eat(40)) {
            if (this.options.ecmaVersion >= 9) {
                this.regexp_groupSpecifier(state);
            } else if (state.current() === 63) {
                state.raise('Invalid group');
            }
            this.regexp_disjunction(state);
            if (state.eat(41)) {
                state.numCapturingParens += 1;
                return true;
            }
            state.raise('Unterminated group');
        }
        return false;
    };
    pp.regexp_eatExtendedAtom = function (state) {
        return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
    };
    pp.regexp_eatInvalidBracedQuantifier = function (state) {
        if (this.regexp_eatBracedQuantifier(state, true)) {
            state.raise('Nothing to repeat');
        }
        return false;
    };
    pp.regexp_eatSyntaxCharacter = function (state) {
        const ch = state.current();
        if (isSyntaxCharacter(ch)) {
            state.lastIntValue = ch;
            state.advance();
            return true;
        }
        return false;
    };
    function isSyntaxCharacter(ch) {
        return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
    }
    pp.regexp_eatPatternCharacters = function (state) {
        const start = state.pos;
        let ch = 0;
        while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
            state.advance();
        }
        return state.pos !== start;
    };
    pp.regexp_eatExtendedPatternCharacter = function (state) {
        const ch = state.current();
        if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
            state.advance();
            return true;
        }
        return false;
    };
    pp.regexp_groupSpecifier = function (state) {
        if (state.eat(63)) {
            if (this.regexp_eatGroupName(state)) {
                if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
                    state.raise('Duplicate capture group name');
                }
                state.groupNames.push(state.lastStringValue);
                return;
            }
            state.raise('Invalid group');
        }
    };
    pp.regexp_eatGroupName = function (state) {
        state.lastStringValue = '';
        if (state.eat(60)) {
            if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
                return true;
            }
            state.raise('Invalid capture group name');
        }
        return false;
    };
    pp.regexp_eatRegExpIdentifierName = function (state) {
        state.lastStringValue = '';
        if (this.regexp_eatRegExpIdentifierStart(state)) {
            state.lastStringValue += codePointToString(state.lastIntValue);
            while (this.regexp_eatRegExpIdentifierPart(state)) {
                state.lastStringValue += codePointToString(state.lastIntValue);
            }
            return true;
        }
        return false;
    };
    pp.regexp_eatRegExpIdentifierStart = function (state) {
        const start = state.pos;
        const forceU = this.options.ecmaVersion >= 11;
        let ch = state.current(forceU);
        state.advance(forceU);
        if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
            ch = state.lastIntValue;
        }
        if (isRegExpIdentifierStart(ch)) {
            state.lastIntValue = ch;
            return true;
        }
        state.pos = start;
        return false;
    };
    function isRegExpIdentifierStart(ch) {
        return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
    }
    pp.regexp_eatRegExpIdentifierPart = function (state) {
        const start = state.pos;
        const forceU = this.options.ecmaVersion >= 11;
        let ch = state.current(forceU);
        state.advance(forceU);
        if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
            ch = state.lastIntValue;
        }
        if (isRegExpIdentifierPart(ch)) {
            state.lastIntValue = ch;
            return true;
        }
        state.pos = start;
        return false;
    };
    function isRegExpIdentifierPart(ch) {
        return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
    }
    pp.regexp_eatAtomEscape = function (state) {
        if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
            return true;
        }
        if (state.switchU) {
            if (state.current() === 99) {
                state.raise('Invalid unicode escape');
            }
            state.raise('Invalid escape');
        }
        return false;
    };
    pp.regexp_eatBackReference = function (state) {
        const start = state.pos;
        if (this.regexp_eatDecimalEscape(state)) {
            const n = state.lastIntValue;
            if (state.switchU) {
                if (n > state.maxBackReference) {
                    state.maxBackReference = n;
                }
                return true;
            }
            if (n <= state.numCapturingParens) {
                return true;
            }
            state.pos = start;
        }
        return false;
    };
    pp.regexp_eatKGroupName = function (state) {
        if (state.eat(107)) {
            if (this.regexp_eatGroupName(state)) {
                state.backReferenceNames.push(state.lastStringValue);
                return true;
            }
            state.raise('Invalid named reference');
        }
        return false;
    };
    pp.regexp_eatCharacterEscape = function (state) {
        return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
    };
    pp.regexp_eatCControlLetter = function (state) {
        const start = state.pos;
        if (state.eat(99)) {
            if (this.regexp_eatControlLetter(state)) {
                return true;
            }
            state.pos = start;
        }
        return false;
    };
    pp.regexp_eatZero = function (state) {
        if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
            state.lastIntValue = 0;
            state.advance();
            return true;
        }
        return false;
    };
    pp.regexp_eatControlEscape = function (state) {
        const ch = state.current();
        if (ch === 116) {
            state.lastIntValue = 9;
            state.advance();
            return true;
        }
        if (ch === 110) {
            state.lastIntValue = 10;
            state.advance();
            return true;
        }
        if (ch === 118) {
            state.lastIntValue = 11;
            state.advance();
            return true;
        }
        if (ch === 102) {
            state.lastIntValue = 12;
            state.advance();
            return true;
        }
        if (ch === 114) {
            state.lastIntValue = 13;
            state.advance();
            return true;
        }
        return false;
    };
    pp.regexp_eatControlLetter = function (state) {
        const ch = state.current();
        if (isControlLetter(ch)) {
            state.lastIntValue = ch % 32;
            state.advance();
            return true;
        }
        return false;
    };
    function isControlLetter(ch) {
        return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
    }
    pp.regexp_eatRegExpUnicodeEscapeSequence = function (state, forceU = false) {
        const start = state.pos;
        const switchU = forceU || state.switchU;
        if (state.eat(117)) {
            if (this.regexp_eatFixedHexDigits(state, 4)) {
                const lead = state.lastIntValue;
                if (switchU && lead >= 55296 && lead <= 56319) {
                    const leadSurrogateEnd = state.pos;
                    if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
                        const trail = state.lastIntValue;
                        if (trail >= 56320 && trail <= 57343) {
                            state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
                            return true;
                        }
                    }
                    state.pos = leadSurrogateEnd;
                    state.lastIntValue = lead;
                }
                return true;
            }
            if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
                return true;
            }
            if (switchU) {
                state.raise('Invalid unicode escape');
            }
            state.pos = start;
        }
        return false;
    };
    function isValidUnicode(ch) {
        return ch >= 0 && ch <= 1114111;
    }
    pp.regexp_eatIdentityEscape = function (state) {
        if (state.switchU) {
            if (this.regexp_eatSyntaxCharacter(state)) {
                return true;
            }
            if (state.eat(47)) {
                state.lastIntValue = 47;
                return true;
            }
            return false;
        }
        const ch = state.current();
        if (ch !== 99 && (!state.switchN || ch !== 107)) {
            state.lastIntValue = ch;
            state.advance();
            return true;
        }
        return false;
    };
    pp.regexp_eatDecimalEscape = function (state) {
        state.lastIntValue = 0;
        let ch = state.current();
        if (ch >= 49 && ch <= 57) {
            do {
                state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
                state.advance();
            } while ((ch = state.current()) >= 48 && ch <= 57);
            return true;
        }
        return false;
    };
    const CharSetNone = 0;
    const CharSetOk = 1;
    const CharSetString = 2;
    pp.regexp_eatCharacterClassEscape = function (state) {
        const ch = state.current();
        if (isCharacterClassEscape(ch)) {
            state.lastIntValue = -1;
            state.advance();
            return CharSetOk;
        }
        let negate = false;
        if (state.switchU && this.options.ecmaVersion >= 9 && ((negate = ch === 80) || ch === 112)) {
            state.lastIntValue = -1;
            state.advance();
            let result;
            if (state.eat(123) && (result = this.regexp_eatUnicodePropertyValueExpression(state)) && state.eat(125)) {
                if (negate && result === CharSetString)
                    state.raise('Invalid property name');
                return result;
            }
            state.raise('Invalid property name');
        }
        return CharSetNone;
    };
    function isCharacterClassEscape(ch) {
        return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
    }
    pp.regexp_eatUnicodePropertyValueExpression = function (state) {
        const start = state.pos;
        if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
            const name = state.lastStringValue;
            if (this.regexp_eatUnicodePropertyValue(state)) {
                const value = state.lastStringValue;
                this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
                return CharSetOk;
            }
        }
        state.pos = start;
        if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
            const nameOrValue = state.lastStringValue;
            return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
        }
        return CharSetNone;
    };
    pp.regexp_validateUnicodePropertyNameAndValue = function (state, name, value) {
        if (!hasOwn(state.unicodeProperties.nonBinary, name))
            state.raise('Invalid property name');
        if (!state.unicodeProperties.nonBinary[name].test(value))
            state.raise('Invalid property value');
    };
    pp.regexp_validateUnicodePropertyNameOrValue = function (state, nameOrValue) {
        if (state.unicodeProperties.binary.test(nameOrValue))
            return CharSetOk;
        if (state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue))
            return CharSetString;
        state.raise('Invalid property name');
    };
    pp.regexp_eatUnicodePropertyName = function (state) {
        let ch = 0;
        state.lastStringValue = '';
        while (isUnicodePropertyNameCharacter(ch = state.current())) {
            state.lastStringValue += codePointToString(ch);
            state.advance();
        }
        return state.lastStringValue !== '';
    };
    function isUnicodePropertyNameCharacter(ch) {
        return isControlLetter(ch) || ch === 95;
    }
    pp.regexp_eatUnicodePropertyValue = function (state) {
        let ch = 0;
        state.lastStringValue = '';
        while (isUnicodePropertyValueCharacter(ch = state.current())) {
            state.lastStringValue += codePointToString(ch);
            state.advance();
        }
        return state.lastStringValue !== '';
    };
    function isUnicodePropertyValueCharacter(ch) {
        return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
    }
    pp.regexp_eatLoneUnicodePropertyNameOrValue = function (state) {
        return this.regexp_eatUnicodePropertyValue(state);
    };
    pp.regexp_eatCharacterClass = function (state) {
        if (state.eat(91)) {
            const negate = state.eat(94);
            const result = this.regexp_classContents(state);
            if (!state.eat(93))
                state.raise('Unterminated character class');
            if (negate && result === CharSetString)
                state.raise('Negated character class may contain strings');
            return true;
        }
        return false;
    };
    pp.regexp_classContents = function (state) {
        if (state.current() === 93)
            return CharSetOk;
        if (state.switchV)
            return this.regexp_classSetExpression(state);
        this.regexp_nonEmptyClassRanges(state);
        return CharSetOk;
    };
    pp.regexp_nonEmptyClassRanges = function (state) {
        while (this.regexp_eatClassAtom(state)) {
            const left = state.lastIntValue;
            if (state.eat(45) && this.regexp_eatClassAtom(state)) {
                const right = state.lastIntValue;
                if (state.switchU && (left === -1 || right === -1)) {
                    state.raise('Invalid character class');
                }
                if (left !== -1 && right !== -1 && left > right) {
                    state.raise('Range out of order in character class');
                }
            }
        }
    };
    pp.regexp_eatClassAtom = function (state) {
        const start = state.pos;
        if (state.eat(92)) {
            if (this.regexp_eatClassEscape(state)) {
                return true;
            }
            if (state.switchU) {
                const ch = state.current();
                if (ch === 99 || isOctalDigit(ch)) {
                    state.raise('Invalid class escape');
                }
                state.raise('Invalid escape');
            }
            state.pos = start;
        }
        const ch = state.current();
        if (ch !== 93) {
            state.lastIntValue = ch;
            state.advance();
            return true;
        }
        return false;
    };
    pp.regexp_eatClassEscape = function (state) {
        const start = state.pos;
        if (state.eat(98)) {
            state.lastIntValue = 8;
            return true;
        }
        if (state.switchU && state.eat(45)) {
            state.lastIntValue = 45;
            return true;
        }
        if (!state.switchU && state.eat(99)) {
            if (this.regexp_eatClassControlLetter(state)) {
                return true;
            }
            state.pos = start;
        }
        return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
    };
    pp.regexp_classSetExpression = function (state) {
        let result = CharSetOk, subResult;
        if (this.regexp_eatClassSetRange(state)) {
        } else if (subResult = this.regexp_eatClassSetOperand(state)) {
            if (subResult === CharSetString)
                result = CharSetString;
            const start = state.pos;
            while (state.eatChars([
                    38,
                    38
                ])) {
                if (state.current() !== 38 && (subResult = this.regexp_eatClassSetOperand(state))) {
                    if (subResult !== CharSetString)
                        result = CharSetOk;
                    continue;
                }
                state.raise('Invalid character in character class');
            }
            if (start !== state.pos)
                return result;
            while (state.eatChars([
                    45,
                    45
                ])) {
                if (this.regexp_eatClassSetOperand(state))
                    continue;
                state.raise('Invalid character in character class');
            }
            if (start !== state.pos)
                return result;
        } else {
            state.raise('Invalid character in character class');
        }
        for (;;) {
            if (this.regexp_eatClassSetRange(state))
                continue;
            subResult = this.regexp_eatClassSetOperand(state);
            if (!subResult)
                return result;
            if (subResult === CharSetString)
                result = CharSetString;
        }
    };
    pp.regexp_eatClassSetRange = function (state) {
        const start = state.pos;
        if (this.regexp_eatClassSetCharacter(state)) {
            const left = state.lastIntValue;
            if (state.eat(45) && this.regexp_eatClassSetCharacter(state)) {
                const right = state.lastIntValue;
                if (left !== -1 && right !== -1 && left > right) {
                    state.raise('Range out of order in character class');
                }
                return true;
            }
            state.pos = start;
        }
        return false;
    };
    pp.regexp_eatClassSetOperand = function (state) {
        if (this.regexp_eatClassSetCharacter(state))
            return CharSetOk;
        return this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state);
    };
    pp.regexp_eatNestedClass = function (state) {
        const start = state.pos;
        if (state.eat(91)) {
            const negate = state.eat(94);
            const result = this.regexp_classContents(state);
            if (state.eat(93)) {
                if (negate && result === CharSetString) {
                    state.raise('Negated character class may contain strings');
                }
                return result;
            }
            state.pos = start;
        }
        if (state.eat(92)) {
            const result = this.regexp_eatCharacterClassEscape(state);
            if (result) {
                return result;
            }
            state.pos = start;
        }
        return null;
    };
    pp.regexp_eatClassStringDisjunction = function (state) {
        const start = state.pos;
        if (state.eatChars([
                92,
                113
            ])) {
            if (state.eat(123)) {
                const result = this.regexp_classStringDisjunctionContents(state);
                if (state.eat(125)) {
                    return result;
                }
            } else {
                state.raise('Invalid escape');
            }
            state.pos = start;
        }
        return null;
    };
    pp.regexp_classStringDisjunctionContents = function (state) {
        let result = this.regexp_classString(state);
        while (state.eat(124)) {
            if (this.regexp_classString(state) === CharSetString)
                result = CharSetString;
        }
        return result;
    };
    pp.regexp_classString = function (state) {
        let count = 0;
        while (this.regexp_eatClassSetCharacter(state))
            count++;
        return count === 1 ? CharSetOk : CharSetString;
    };
    pp.regexp_eatClassSetCharacter = function (state) {
        const start = state.pos;
        if (state.eat(92)) {
            if (this.regexp_eatCharacterEscape(state) || this.regexp_eatClassSetReservedPunctuator(state)) {
                return true;
            }
            if (state.eat(98)) {
                state.lastIntValue = 8;
                return true;
            }
            state.pos = start;
            return false;
        }
        const ch = state.current();
        if (ch < 0 || ch === state.lookahead() && isClassSetReservedDoublePunctuatorCharacter(ch))
            return false;
        if (isClassSetSyntaxCharacter(ch))
            return false;
        state.advance();
        state.lastIntValue = ch;
        return true;
    };
    function isClassSetReservedDoublePunctuatorCharacter(ch) {
        return ch === 33 || ch >= 35 && ch <= 38 || ch >= 42 && ch <= 44 || ch === 46 || ch >= 58 && ch <= 64 || ch === 94 || ch === 96 || ch === 126;
    }
    function isClassSetSyntaxCharacter(ch) {
        return ch === 40 || ch === 41 || ch === 45 || ch === 47 || ch >= 91 && ch <= 93 || ch >= 123 && ch <= 125;
    }
    pp.regexp_eatClassSetReservedPunctuator = function (state) {
        const ch = state.current();
        if (isClassSetReservedPunctuator(ch)) {
            state.lastIntValue = ch;
            state.advance();
            return true;
        }
        return false;
    };
    function isClassSetReservedPunctuator(ch) {
        return ch === 33 || ch === 35 || ch === 37 || ch === 38 || ch === 44 || ch === 45 || ch >= 58 && ch <= 62 || ch === 64 || ch === 96 || ch === 126;
    }
    pp.regexp_eatClassControlLetter = function (state) {
        const ch = state.current();
        if (isDecimalDigit(ch) || ch === 95) {
            state.lastIntValue = ch % 32;
            state.advance();
            return true;
        }
        return false;
    };
    pp.regexp_eatHexEscapeSequence = function (state) {
        const start = state.pos;
        if (state.eat(120)) {
            if (this.regexp_eatFixedHexDigits(state, 2)) {
                return true;
            }
            if (state.switchU) {
                state.raise('Invalid escape');
            }
            state.pos = start;
        }
        return false;
    };
    pp.regexp_eatDecimalDigits = function (state) {
        const start = state.pos;
        let ch = 0;
        state.lastIntValue = 0;
        while (isDecimalDigit(ch = state.current())) {
            state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
            state.advance();
        }
        return state.pos !== start;
    };
    function isDecimalDigit(ch) {
        return ch >= 48 && ch <= 57;
    }
    pp.regexp_eatHexDigits = function (state) {
        const start = state.pos;
        let ch = 0;
        state.lastIntValue = 0;
        while (isHexDigit(ch = state.current())) {
            state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
            state.advance();
        }
        return state.pos !== start;
    };
    function isHexDigit(ch) {
        return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
    }
    function hexToInt(ch) {
        if (ch >= 65 && ch <= 70) {
            return 10 + (ch - 65);
        }
        if (ch >= 97 && ch <= 102) {
            return 10 + (ch - 97);
        }
        return ch - 48;
    }
    pp.regexp_eatLegacyOctalEscapeSequence = function (state) {
        if (this.regexp_eatOctalDigit(state)) {
            const n1 = state.lastIntValue;
            if (this.regexp_eatOctalDigit(state)) {
                const n2 = state.lastIntValue;
                if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
                    state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
                } else {
                    state.lastIntValue = n1 * 8 + n2;
                }
            } else {
                state.lastIntValue = n1;
            }
            return true;
        }
        return false;
    };
    pp.regexp_eatOctalDigit = function (state) {
        const ch = state.current();
        if (isOctalDigit(ch)) {
            state.lastIntValue = ch - 48;
            state.advance();
            return true;
        }
        state.lastIntValue = 0;
        return false;
    };
    function isOctalDigit(ch) {
        return ch >= 48 && ch <= 55;
    }
    pp.regexp_eatFixedHexDigits = function (state, length) {
        const start = state.pos;
        state.lastIntValue = 0;
        for (let i = 0; i < length; ++i) {
            const ch = state.current();
            if (!isHexDigit(ch)) {
                state.pos = start;
                return false;
            }
            state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
            state.advance();
        }
        return true;
    };
    return { RegExpValidationState: RegExpValidationState };
});
define('skylark-acorn/tokenize',[
    './identifier',
    './tokentype',
    './state',
    './locutil',
    './regexp',
    './whitespace',
    './util'
], function (m_identifier, m_tokentype, m_state, m_locutil, m_regexp, m_whitespace, m_util) {
    'use strict';
    const {isIdentifierStart, isIdentifierChar} = m_identifier;

    const {types : tt, keywords : keywordTypes} = m_tokentype;

    const {Parser} = m_state;
    const {SourceLocation} = m_locutil;
    const {RegExpValidationState} = m_regexp;
    const {lineBreak, nextLineBreak, isNewLine, nonASCIIwhitespace} = m_whitespace;
    const {codePointToString} = m_util;
    class Token {
        constructor(p) {
            this.type = p.type;
            this.value = p.value;
            this.start = p.start;
            this.end = p.end;
            if (p.options.locations)
                this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
            if (p.options.ranges)
                this.range = [
                    p.start,
                    p.end
                ];
        }
    }
    const pp = Parser.prototype;
    pp.next = function (ignoreEscapeSequenceInKeyword) {
        if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc)
            this.raiseRecoverable(this.start, 'Escape sequence in keyword ' + this.type.keyword);
        if (this.options.onToken)
            this.options.onToken(new Token(this));
        this.lastTokEnd = this.end;
        this.lastTokStart = this.start;
        this.lastTokEndLoc = this.endLoc;
        this.lastTokStartLoc = this.startLoc;
        this.nextToken();
    };
    pp.getToken = function () {
        this.next();
        return new Token(this);
    };
    if (typeof Symbol !== 'undefined')
        pp[Symbol.iterator] = function () {
            return {
                next: () => {
                    let token = this.getToken();
                    return {
                        done: token.type === tt.eof,
                        value: token
                    };
                }
            };
        };
    pp.nextToken = function () {
        let curContext = this.curContext();
        if (!curContext || !curContext.preserveSpace)
            this.skipSpace();
        this.start = this.pos;
        if (this.options.locations)
            this.startLoc = this.curPosition();
        if (this.pos >= this.input.length)
            return this.finishToken(tt.eof);
        if (curContext.override)
            return curContext.override(this);
        else
            this.readToken(this.fullCharCodeAtPos());
    };
    pp.readToken = function (code) {
        if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92)
            return this.readWord();
        return this.getTokenFromCode(code);
    };
    pp.fullCharCodeAtPos = function () {
        let code = this.input.charCodeAt(this.pos);
        if (code <= 55295 || code >= 56320)
            return code;
        let next = this.input.charCodeAt(this.pos + 1);
        return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
    };
    pp.skipBlockComment = function () {
        let startLoc = this.options.onComment && this.curPosition();
        let start = this.pos, end = this.input.indexOf('*/', this.pos += 2);
        if (end === -1)
            this.raise(this.pos - 2, 'Unterminated comment');
        this.pos = end + 2;
        if (this.options.locations) {
            for (let nextBreak, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1;) {
                ++this.curLine;
                pos = this.lineStart = nextBreak;
            }
        }
        if (this.options.onComment)
            this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos, startLoc, this.curPosition());
    };
    pp.skipLineComment = function (startSkip) {
        let start = this.pos;
        let startLoc = this.options.onComment && this.curPosition();
        let ch = this.input.charCodeAt(this.pos += startSkip);
        while (this.pos < this.input.length && !isNewLine(ch)) {
            ch = this.input.charCodeAt(++this.pos);
        }
        if (this.options.onComment)
            this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.curPosition());
    };
    pp.skipSpace = function () {
        loop:
            while (this.pos < this.input.length) {
                let ch = this.input.charCodeAt(this.pos);
                switch (ch) {
                case 32:
                case 160:
                    ++this.pos;
                    break;
                case 13:
                    if (this.input.charCodeAt(this.pos + 1) === 10) {
                        ++this.pos;
                    }
                case 10:
                case 8232:
                case 8233:
                    ++this.pos;
                    if (this.options.locations) {
                        ++this.curLine;
                        this.lineStart = this.pos;
                    }
                    break;
                case 47:
                    switch (this.input.charCodeAt(this.pos + 1)) {
                    case 42:
                        this.skipBlockComment();
                        break;
                    case 47:
                        this.skipLineComment(2);
                        break;
                    default:
                        break loop;
                    }
                    break;
                default:
                    if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
                        ++this.pos;
                    } else {
                        break loop;
                    }
                }
            }
    };
    pp.finishToken = function (type, val) {
        this.end = this.pos;
        if (this.options.locations)
            this.endLoc = this.curPosition();
        let prevType = this.type;
        this.type = type;
        this.value = val;
        this.updateContext(prevType);
    };
    pp.readToken_dot = function () {
        let next = this.input.charCodeAt(this.pos + 1);
        if (next >= 48 && next <= 57)
            return this.readNumber(true);
        let next2 = this.input.charCodeAt(this.pos + 2);
        if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
            this.pos += 3;
            return this.finishToken(tt.ellipsis);
        } else {
            ++this.pos;
            return this.finishToken(tt.dot);
        }
    };
    pp.readToken_slash = function () {
        let next = this.input.charCodeAt(this.pos + 1);
        if (this.exprAllowed) {
            ++this.pos;
            return this.readRegexp();
        }
        if (next === 61)
            return this.finishOp(tt.assign, 2);
        return this.finishOp(tt.slash, 1);
    };
    pp.readToken_mult_modulo_exp = function (code) {
        let next = this.input.charCodeAt(this.pos + 1);
        let size = 1;
        let tokentype = code === 42 ? tt.star : tt.modulo;
        if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
            ++size;
            tokentype = tt.starstar;
            next = this.input.charCodeAt(this.pos + 2);
        }
        if (next === 61)
            return this.finishOp(tt.assign, size + 1);
        return this.finishOp(tokentype, size);
    };
    pp.readToken_pipe_amp = function (code) {
        let next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
            if (this.options.ecmaVersion >= 12) {
                let next2 = this.input.charCodeAt(this.pos + 2);
                if (next2 === 61)
                    return this.finishOp(tt.assign, 3);
            }
            return this.finishOp(code === 124 ? tt.logicalOR : tt.logicalAND, 2);
        }
        if (next === 61)
            return this.finishOp(tt.assign, 2);
        return this.finishOp(code === 124 ? tt.bitwiseOR : tt.bitwiseAND, 1);
    };
    pp.readToken_caret = function () {
        let next = this.input.charCodeAt(this.pos + 1);
        if (next === 61)
            return this.finishOp(tt.assign, 2);
        return this.finishOp(tt.bitwiseXOR, 1);
    };
    pp.readToken_plus_min = function (code) {
        let next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
            if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
                this.skipLineComment(3);
                this.skipSpace();
                return this.nextToken();
            }
            return this.finishOp(tt.incDec, 2);
        }
        if (next === 61)
            return this.finishOp(tt.assign, 2);
        return this.finishOp(tt.plusMin, 1);
    };
    pp.readToken_lt_gt = function (code) {
        let next = this.input.charCodeAt(this.pos + 1);
        let size = 1;
        if (next === code) {
            size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
            if (this.input.charCodeAt(this.pos + size) === 61)
                return this.finishOp(tt.assign, size + 1);
            return this.finishOp(tt.bitShift, size);
        }
        if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
            this.skipLineComment(4);
            this.skipSpace();
            return this.nextToken();
        }
        if (next === 61)
            size = 2;
        return this.finishOp(tt.relational, size);
    };
    pp.readToken_eq_excl = function (code) {
        let next = this.input.charCodeAt(this.pos + 1);
        if (next === 61)
            return this.finishOp(tt.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
        if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
            this.pos += 2;
            return this.finishToken(tt.arrow);
        }
        return this.finishOp(code === 61 ? tt.eq : tt.prefix, 1);
    };
    pp.readToken_question = function () {
        const ecmaVersion = this.options.ecmaVersion;
        if (ecmaVersion >= 11) {
            let next = this.input.charCodeAt(this.pos + 1);
            if (next === 46) {
                let next2 = this.input.charCodeAt(this.pos + 2);
                if (next2 < 48 || next2 > 57)
                    return this.finishOp(tt.questionDot, 2);
            }
            if (next === 63) {
                if (ecmaVersion >= 12) {
                    let next2 = this.input.charCodeAt(this.pos + 2);
                    if (next2 === 61)
                        return this.finishOp(tt.assign, 3);
                }
                return this.finishOp(tt.coalesce, 2);
            }
        }
        return this.finishOp(tt.question, 1);
    };
    pp.readToken_numberSign = function () {
        const ecmaVersion = this.options.ecmaVersion;
        let code = 35;
        if (ecmaVersion >= 13) {
            ++this.pos;
            code = this.fullCharCodeAtPos();
            if (isIdentifierStart(code, true) || code === 92) {
                return this.finishToken(tt.privateId, this.readWord1());
            }
        }
        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
    };
    pp.getTokenFromCode = function (code) {
        switch (code) {
        case 46:
            return this.readToken_dot();
        case 40:
            ++this.pos;
            return this.finishToken(tt.parenL);
        case 41:
            ++this.pos;
            return this.finishToken(tt.parenR);
        case 59:
            ++this.pos;
            return this.finishToken(tt.semi);
        case 44:
            ++this.pos;
            return this.finishToken(tt.comma);
        case 91:
            ++this.pos;
            return this.finishToken(tt.bracketL);
        case 93:
            ++this.pos;
            return this.finishToken(tt.bracketR);
        case 123:
            ++this.pos;
            return this.finishToken(tt.braceL);
        case 125:
            ++this.pos;
            return this.finishToken(tt.braceR);
        case 58:
            ++this.pos;
            return this.finishToken(tt.colon);
        case 96:
            if (this.options.ecmaVersion < 6)
                break;
            ++this.pos;
            return this.finishToken(tt.backQuote);
        case 48:
            let next = this.input.charCodeAt(this.pos + 1);
            if (next === 120 || next === 88)
                return this.readRadixNumber(16);
            if (this.options.ecmaVersion >= 6) {
                if (next === 111 || next === 79)
                    return this.readRadixNumber(8);
                if (next === 98 || next === 66)
                    return this.readRadixNumber(2);
            }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            return this.readNumber(false);
        case 34:
        case 39:
            return this.readString(code);
        case 47:
            return this.readToken_slash();
        case 37:
        case 42:
            return this.readToken_mult_modulo_exp(code);
        case 124:
        case 38:
            return this.readToken_pipe_amp(code);
        case 94:
            return this.readToken_caret();
        case 43:
        case 45:
            return this.readToken_plus_min(code);
        case 60:
        case 62:
            return this.readToken_lt_gt(code);
        case 61:
        case 33:
            return this.readToken_eq_excl(code);
        case 63:
            return this.readToken_question();
        case 126:
            return this.finishOp(tt.prefix, 1);
        case 35:
            return this.readToken_numberSign();
        }
        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
    };
    pp.finishOp = function (type, size) {
        let str = this.input.slice(this.pos, this.pos + size);
        this.pos += size;
        return this.finishToken(type, str);
    };
    pp.readRegexp = function () {
        let escaped, inClass, start = this.pos;
        for (;;) {
            if (this.pos >= this.input.length)
                this.raise(start, 'Unterminated regular expression');
            let ch = this.input.charAt(this.pos);
            if (lineBreak.test(ch))
                this.raise(start, 'Unterminated regular expression');
            if (!escaped) {
                if (ch === '[')
                    inClass = true;
                else if (ch === ']' && inClass)
                    inClass = false;
                else if (ch === '/' && !inClass)
                    break;
                escaped = ch === '\\';
            } else
                escaped = false;
            ++this.pos;
        }
        let pattern = this.input.slice(start, this.pos);
        ++this.pos;
        let flagsStart = this.pos;
        let flags = this.readWord1();
        if (this.containsEsc)
            this.unexpected(flagsStart);
        const state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
        state.reset(start, pattern, flags);
        this.validateRegExpFlags(state);
        this.validateRegExpPattern(state);
        let value = null;
        try {
            value = new RegExp(pattern, flags);
        } catch (e) {
        }
        return this.finishToken(tt.regexp, {
            pattern,
            flags,
            value
        });
    };
    pp.readInt = function (radix, len, maybeLegacyOctalNumericLiteral) {
        const allowSeparators = this.options.ecmaVersion >= 12 && len === undefined;
        const isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
        let start = this.pos, total = 0, lastCode = 0;
        for (let i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
            let code = this.input.charCodeAt(this.pos), val;
            if (allowSeparators && code === 95) {
                if (isLegacyOctalNumericLiteral)
                    this.raiseRecoverable(this.pos, 'Numeric separator is not allowed in legacy octal numeric literals');
                if (lastCode === 95)
                    this.raiseRecoverable(this.pos, 'Numeric separator must be exactly one underscore');
                if (i === 0)
                    this.raiseRecoverable(this.pos, 'Numeric separator is not allowed at the first of digits');
                lastCode = code;
                continue;
            }
            if (code >= 97)
                val = code - 97 + 10;
            else if (code >= 65)
                val = code - 65 + 10;
            else if (code >= 48 && code <= 57)
                val = code - 48;
            else
                val = Infinity;
            if (val >= radix)
                break;
            lastCode = code;
            total = total * radix + val;
        }
        if (allowSeparators && lastCode === 95)
            this.raiseRecoverable(this.pos - 1, 'Numeric separator is not allowed at the last of digits');
        if (this.pos === start || len != null && this.pos - start !== len)
            return null;
        return total;
    };
    function stringToNumber(str, isLegacyOctalNumericLiteral) {
        if (isLegacyOctalNumericLiteral) {
            return parseInt(str, 8);
        }
        return parseFloat(str.replace(/_/g, ''));
    }
    function stringToBigInt(str) {
        if (typeof BigInt !== 'function') {
            return null;
        }
        return BigInt(str.replace(/_/g, ''));
    }
    pp.readRadixNumber = function (radix) {
        let start = this.pos;
        this.pos += 2;
        let val = this.readInt(radix);
        if (val == null)
            this.raise(this.start + 2, 'Expected number in radix ' + radix);
        if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
            val = stringToBigInt(this.input.slice(start, this.pos));
            ++this.pos;
        } else if (isIdentifierStart(this.fullCharCodeAtPos()))
            this.raise(this.pos, 'Identifier directly after number');
        return this.finishToken(tt.num, val);
    };
    pp.readNumber = function (startsWithDot) {
        let start = this.pos;
        if (!startsWithDot && this.readInt(10, undefined, true) === null)
            this.raise(start, 'Invalid number');
        let octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
        if (octal && this.strict)
            this.raise(start, 'Invalid number');
        let next = this.input.charCodeAt(this.pos);
        if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
            let val = stringToBigInt(this.input.slice(start, this.pos));
            ++this.pos;
            if (isIdentifierStart(this.fullCharCodeAtPos()))
                this.raise(this.pos, 'Identifier directly after number');
            return this.finishToken(tt.num, val);
        }
        if (octal && /[89]/.test(this.input.slice(start, this.pos)))
            octal = false;
        if (next === 46 && !octal) {
            ++this.pos;
            this.readInt(10);
            next = this.input.charCodeAt(this.pos);
        }
        if ((next === 69 || next === 101) && !octal) {
            next = this.input.charCodeAt(++this.pos);
            if (next === 43 || next === 45)
                ++this.pos;
            if (this.readInt(10) === null)
                this.raise(start, 'Invalid number');
        }
        if (isIdentifierStart(this.fullCharCodeAtPos()))
            this.raise(this.pos, 'Identifier directly after number');
        let val = stringToNumber(this.input.slice(start, this.pos), octal);
        return this.finishToken(tt.num, val);
    };
    pp.readCodePoint = function () {
        let ch = this.input.charCodeAt(this.pos), code;
        if (ch === 123) {
            if (this.options.ecmaVersion < 6)
                this.unexpected();
            let codePos = ++this.pos;
            code = this.readHexChar(this.input.indexOf('}', this.pos) - this.pos);
            ++this.pos;
            if (code > 1114111)
                this.invalidStringToken(codePos, 'Code point out of bounds');
        } else {
            code = this.readHexChar(4);
        }
        return code;
    };
    pp.readString = function (quote) {
        let out = '', chunkStart = ++this.pos;
        for (;;) {
            if (this.pos >= this.input.length)
                this.raise(this.start, 'Unterminated string constant');
            let ch = this.input.charCodeAt(this.pos);
            if (ch === quote)
                break;
            if (ch === 92) {
                out += this.input.slice(chunkStart, this.pos);
                out += this.readEscapedChar(false);
                chunkStart = this.pos;
            } else if (ch === 8232 || ch === 8233) {
                if (this.options.ecmaVersion < 10)
                    this.raise(this.start, 'Unterminated string constant');
                ++this.pos;
                if (this.options.locations) {
                    this.curLine++;
                    this.lineStart = this.pos;
                }
            } else {
                if (isNewLine(ch))
                    this.raise(this.start, 'Unterminated string constant');
                ++this.pos;
            }
        }
        out += this.input.slice(chunkStart, this.pos++);
        return this.finishToken(tt.string, out);
    };
    const INVALID_TEMPLATE_ESCAPE_ERROR = {};
    pp.tryReadTemplateToken = function () {
        this.inTemplateElement = true;
        try {
            this.readTmplToken();
        } catch (err) {
            if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
                this.readInvalidTemplateToken();
            } else {
                throw err;
            }
        }
        this.inTemplateElement = false;
    };
    pp.invalidStringToken = function (position, message) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
            throw INVALID_TEMPLATE_ESCAPE_ERROR;
        } else {
            this.raise(position, message);
        }
    };
    pp.readTmplToken = function () {
        let out = '', chunkStart = this.pos;
        for (;;) {
            if (this.pos >= this.input.length)
                this.raise(this.start, 'Unterminated template');
            let ch = this.input.charCodeAt(this.pos);
            if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
                if (this.pos === this.start && (this.type === tt.template || this.type === tt.invalidTemplate)) {
                    if (ch === 36) {
                        this.pos += 2;
                        return this.finishToken(tt.dollarBraceL);
                    } else {
                        ++this.pos;
                        return this.finishToken(tt.backQuote);
                    }
                }
                out += this.input.slice(chunkStart, this.pos);
                return this.finishToken(tt.template, out);
            }
            if (ch === 92) {
                out += this.input.slice(chunkStart, this.pos);
                out += this.readEscapedChar(true);
                chunkStart = this.pos;
            } else if (isNewLine(ch)) {
                out += this.input.slice(chunkStart, this.pos);
                ++this.pos;
                switch (ch) {
                case 13:
                    if (this.input.charCodeAt(this.pos) === 10)
                        ++this.pos;
                case 10:
                    out += '\n';
                    break;
                default:
                    out += String.fromCharCode(ch);
                    break;
                }
                if (this.options.locations) {
                    ++this.curLine;
                    this.lineStart = this.pos;
                }
                chunkStart = this.pos;
            } else {
                ++this.pos;
            }
        }
    };
    pp.readInvalidTemplateToken = function () {
        for (; this.pos < this.input.length; this.pos++) {
            switch (this.input[this.pos]) {
            case '\\':
                ++this.pos;
                break;
            case '$':
                if (this.input[this.pos + 1] !== '{') {
                    break;
                }
            case '`':
                return this.finishToken(tt.invalidTemplate, this.input.slice(this.start, this.pos));
            }
        }
        this.raise(this.start, 'Unterminated template');
    };
    pp.readEscapedChar = function (inTemplate) {
        let ch = this.input.charCodeAt(++this.pos);
        ++this.pos;
        switch (ch) {
        case 110:
            return '\n';
        case 114:
            return '\r';
        case 120:
            return String.fromCharCode(this.readHexChar(2));
        case 117:
            return codePointToString(this.readCodePoint());
        case 116:
            return '\t';
        case 98:
            return '\b';
        case 118:
            return '\x0B';
        case 102:
            return '\f';
        case 13:
            if (this.input.charCodeAt(this.pos) === 10)
                ++this.pos;
        case 10:
            if (this.options.locations) {
                this.lineStart = this.pos;
                ++this.curLine;
            }
            return '';
        case 56:
        case 57:
            if (this.strict) {
                this.invalidStringToken(this.pos - 1, 'Invalid escape sequence');
            }
            if (inTemplate) {
                const codePos = this.pos - 1;
                this.invalidStringToken(codePos, 'Invalid escape sequence in template string');
            }
        default:
            if (ch >= 48 && ch <= 55) {
                let octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
                let octal = parseInt(octalStr, 8);
                if (octal > 255) {
                    octalStr = octalStr.slice(0, -1);
                    octal = parseInt(octalStr, 8);
                }
                this.pos += octalStr.length - 1;
                ch = this.input.charCodeAt(this.pos);
                if ((octalStr !== '0' || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
                    this.invalidStringToken(this.pos - 1 - octalStr.length, inTemplate ? 'Octal literal in template string' : 'Octal literal in strict mode');
                }
                return String.fromCharCode(octal);
            }
            if (isNewLine(ch)) {
                return '';
            }
            return String.fromCharCode(ch);
        }
    };
    pp.readHexChar = function (len) {
        let codePos = this.pos;
        let n = this.readInt(16, len);
        if (n === null)
            this.invalidStringToken(codePos, 'Bad character escape sequence');
        return n;
    };
    pp.readWord1 = function () {
        this.containsEsc = false;
        let word = '', first = true, chunkStart = this.pos;
        let astral = this.options.ecmaVersion >= 6;
        while (this.pos < this.input.length) {
            let ch = this.fullCharCodeAtPos();
            if (isIdentifierChar(ch, astral)) {
                this.pos += ch <= 65535 ? 1 : 2;
            } else if (ch === 92) {
                this.containsEsc = true;
                word += this.input.slice(chunkStart, this.pos);
                let escStart = this.pos;
                if (this.input.charCodeAt(++this.pos) !== 117)
                    this.invalidStringToken(this.pos, 'Expecting Unicode escape sequence \\uXXXX');
                ++this.pos;
                let esc = this.readCodePoint();
                if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
                    this.invalidStringToken(escStart, 'Invalid Unicode escape');
                word += codePointToString(esc);
                chunkStart = this.pos;
            } else {
                break;
            }
            first = false;
        }
        return word + this.input.slice(chunkStart, this.pos);
    };
    pp.readWord = function () {
        let word = this.readWord1();
        let type = tt.name;
        if (this.keywords.test(word)) {
            type = keywordTypes[word];
        }
        return this.finishToken(type, word);
    };
    return { Token: Token };
});
define('skylark-acorn/main',[
    './state',
    './parseutil',
    './statement',
    './lval',
    './expression',
    './location',
    './scope',
    './options',
    './locutil',
    './node',
    './tokentype',
    './tokencontext',
    './identifier',
    './tokenize',
    './whitespace'
], function (m_state, m_parseutil,m_statement,m_lval,m_expression,m_location,m_scope,m_options, m_locutil, m_node, m_tokentype, m_tokencontext,  m_identifier, m_tokenize, m_whitespace) {
    'use strict';
    const {Parser} = m_state;
    const {defaultOptions} = m_options;
    const {Position, SourceLocation, getLineInfo} = m_locutil;
    const {Node} = m_node;
    const {TokenType, types : tokTypes, keywords : keywordTypes} = m_tokentype;
    const {TokContext,types : tokContexts} = m_tokencontext;
    const {isIdentifierChar, isIdentifierStart} = m_identifier;
    const {Token} = m_tokenize;
    const {isNewLine, lineBreak, lineBreakG, nonASCIIwhitespace} = m_whitespace;
    
    const version = '8.10.0';
    Parser.acorn = {
        Parser,
        version,
        defaultOptions,
        Position,
        SourceLocation,
        getLineInfo,
        Node,
        TokenType,
        tokTypes,
        keywordTypes,
        TokContext,
        tokContexts,
        isIdentifierChar,
        isIdentifierStart,
        Token,
        isNewLine,
        lineBreak,
        lineBreakG,
        nonASCIIwhitespace
    };
    function parse(input, options) {
        return Parser.parse(input, options);
    }
    function parseExpressionAt(input, pos, options) {
        return Parser.parseExpressionAt(input, pos, options);
    }
    function tokenizer(input, options) {
        return Parser.tokenizer(input, options);
    }
    return {
        version: version,
        Parser,
        defaultOptions,
        Position,
        SourceLocation,
        getLineInfo,
        Node,
        TokenType,
        tokTypes,
        keywordTypes,
        TokContext,
        tokContexts,
        isIdentifierChar,
        isIdentifierStart,
        Token,
        isNewLine,
        lineBreak,
        lineBreakG,
        nonASCIIwhitespace,
        parse: parse,
        parseExpressionAt: parseExpressionAt,
        tokenizer: tokenizer
    };
});
define('skylark-acorn', ['skylark-acorn/main'], function (main) { return main; });

define('skylark-acorn/plugins/jsx',[],function(){
  const XHTMLEntities = {
    quot: '\u0022',
    amp: '&',
    apos: '\u0027',
    lt: '<',
    gt: '>',
    nbsp: '\u00A0',
    iexcl: '\u00A1',
    cent: '\u00A2',
    pound: '\u00A3',
    curren: '\u00A4',
    yen: '\u00A5',
    brvbar: '\u00A6',
    sect: '\u00A7',
    uml: '\u00A8',
    copy: '\u00A9',
    ordf: '\u00AA',
    laquo: '\u00AB',
    not: '\u00AC',
    shy: '\u00AD',
    reg: '\u00AE',
    macr: '\u00AF',
    deg: '\u00B0',
    plusmn: '\u00B1',
    sup2: '\u00B2',
    sup3: '\u00B3',
    acute: '\u00B4',
    micro: '\u00B5',
    para: '\u00B6',
    middot: '\u00B7',
    cedil: '\u00B8',
    sup1: '\u00B9',
    ordm: '\u00BA',
    raquo: '\u00BB',
    frac14: '\u00BC',
    frac12: '\u00BD',
    frac34: '\u00BE',
    iquest: '\u00BF',
    Agrave: '\u00C0',
    Aacute: '\u00C1',
    Acirc: '\u00C2',
    Atilde: '\u00C3',
    Auml: '\u00C4',
    Aring: '\u00C5',
    AElig: '\u00C6',
    Ccedil: '\u00C7',
    Egrave: '\u00C8',
    Eacute: '\u00C9',
    Ecirc: '\u00CA',
    Euml: '\u00CB',
    Igrave: '\u00CC',
    Iacute: '\u00CD',
    Icirc: '\u00CE',
    Iuml: '\u00CF',
    ETH: '\u00D0',
    Ntilde: '\u00D1',
    Ograve: '\u00D2',
    Oacute: '\u00D3',
    Ocirc: '\u00D4',
    Otilde: '\u00D5',
    Ouml: '\u00D6',
    times: '\u00D7',
    Oslash: '\u00D8',
    Ugrave: '\u00D9',
    Uacute: '\u00DA',
    Ucirc: '\u00DB',
    Uuml: '\u00DC',
    Yacute: '\u00DD',
    THORN: '\u00DE',
    szlig: '\u00DF',
    agrave: '\u00E0',
    aacute: '\u00E1',
    acirc: '\u00E2',
    atilde: '\u00E3',
    auml: '\u00E4',
    aring: '\u00E5',
    aelig: '\u00E6',
    ccedil: '\u00E7',
    egrave: '\u00E8',
    eacute: '\u00E9',
    ecirc: '\u00EA',
    euml: '\u00EB',
    igrave: '\u00EC',
    iacute: '\u00ED',
    icirc: '\u00EE',
    iuml: '\u00EF',
    eth: '\u00F0',
    ntilde: '\u00F1',
    ograve: '\u00F2',
    oacute: '\u00F3',
    ocirc: '\u00F4',
    otilde: '\u00F5',
    ouml: '\u00F6',
    divide: '\u00F7',
    oslash: '\u00F8',
    ugrave: '\u00F9',
    uacute: '\u00FA',
    ucirc: '\u00FB',
    uuml: '\u00FC',
    yacute: '\u00FD',
    thorn: '\u00FE',
    yuml: '\u00FF',
    OElig: '\u0152',
    oelig: '\u0153',
    Scaron: '\u0160',
    scaron: '\u0161',
    Yuml: '\u0178',
    fnof: '\u0192',
    circ: '\u02C6',
    tilde: '\u02DC',
    Alpha: '\u0391',
    Beta: '\u0392',
    Gamma: '\u0393',
    Delta: '\u0394',
    Epsilon: '\u0395',
    Zeta: '\u0396',
    Eta: '\u0397',
    Theta: '\u0398',
    Iota: '\u0399',
    Kappa: '\u039A',
    Lambda: '\u039B',
    Mu: '\u039C',
    Nu: '\u039D',
    Xi: '\u039E',
    Omicron: '\u039F',
    Pi: '\u03A0',
    Rho: '\u03A1',
    Sigma: '\u03A3',
    Tau: '\u03A4',
    Upsilon: '\u03A5',
    Phi: '\u03A6',
    Chi: '\u03A7',
    Psi: '\u03A8',
    Omega: '\u03A9',
    alpha: '\u03B1',
    beta: '\u03B2',
    gamma: '\u03B3',
    delta: '\u03B4',
    epsilon: '\u03B5',
    zeta: '\u03B6',
    eta: '\u03B7',
    theta: '\u03B8',
    iota: '\u03B9',
    kappa: '\u03BA',
    lambda: '\u03BB',
    mu: '\u03BC',
    nu: '\u03BD',
    xi: '\u03BE',
    omicron: '\u03BF',
    pi: '\u03C0',
    rho: '\u03C1',
    sigmaf: '\u03C2',
    sigma: '\u03C3',
    tau: '\u03C4',
    upsilon: '\u03C5',
    phi: '\u03C6',
    chi: '\u03C7',
    psi: '\u03C8',
    omega: '\u03C9',
    thetasym: '\u03D1',
    upsih: '\u03D2',
    piv: '\u03D6',
    ensp: '\u2002',
    emsp: '\u2003',
    thinsp: '\u2009',
    zwnj: '\u200C',
    zwj: '\u200D',
    lrm: '\u200E',
    rlm: '\u200F',
    ndash: '\u2013',
    mdash: '\u2014',
    lsquo: '\u2018',
    rsquo: '\u2019',
    sbquo: '\u201A',
    ldquo: '\u201C',
    rdquo: '\u201D',
    bdquo: '\u201E',
    dagger: '\u2020',
    Dagger: '\u2021',
    bull: '\u2022',
    hellip: '\u2026',
    permil: '\u2030',
    prime: '\u2032',
    Prime: '\u2033',
    lsaquo: '\u2039',
    rsaquo: '\u203A',
    oline: '\u203E',
    frasl: '\u2044',
    euro: '\u20AC',
    image: '\u2111',
    weierp: '\u2118',
    real: '\u211C',
    trade: '\u2122',
    alefsym: '\u2135',
    larr: '\u2190',
    uarr: '\u2191',
    rarr: '\u2192',
    darr: '\u2193',
    harr: '\u2194',
    crarr: '\u21B5',
    lArr: '\u21D0',
    uArr: '\u21D1',
    rArr: '\u21D2',
    dArr: '\u21D3',
    hArr: '\u21D4',
    forall: '\u2200',
    part: '\u2202',
    exist: '\u2203',
    empty: '\u2205',
    nabla: '\u2207',
    isin: '\u2208',
    notin: '\u2209',
    ni: '\u220B',
    prod: '\u220F',
    sum: '\u2211',
    minus: '\u2212',
    lowast: '\u2217',
    radic: '\u221A',
    prop: '\u221D',
    infin: '\u221E',
    ang: '\u2220',
    and: '\u2227',
    or: '\u2228',
    cap: '\u2229',
    cup: '\u222A',
    'int': '\u222B',
    there4: '\u2234',
    sim: '\u223C',
    cong: '\u2245',
    asymp: '\u2248',
    ne: '\u2260',
    equiv: '\u2261',
    le: '\u2264',
    ge: '\u2265',
    sub: '\u2282',
    sup: '\u2283',
    nsub: '\u2284',
    sube: '\u2286',
    supe: '\u2287',
    oplus: '\u2295',
    otimes: '\u2297',
    perp: '\u22A5',
    sdot: '\u22C5',
    lceil: '\u2308',
    rceil: '\u2309',
    lfloor: '\u230A',
    rfloor: '\u230B',
    lang: '\u2329',
    rang: '\u232A',
    loz: '\u25CA',
    spades: '\u2660',
    clubs: '\u2663',
    hearts: '\u2665',
    diams: '\u2666'
  };

  const hexNumber = /^[\da-fA-F]+$/;
  const decimalNumber = /^\d+$/;

  // The map to `acorn-jsx` tokens from `acorn` namespace objects.
  const acornJsxMap = new WeakMap();

  // Get the original tokens for the given `acorn` namespace object.
  function getJsxTokens(acorn) {
    acorn = acorn.Parser.acorn || acorn;
    let acornJsx = acornJsxMap.get(acorn);
    if (!acornJsx) {
      const tt = acorn.tokTypes;
      const TokContext = acorn.TokContext;
      const TokenType = acorn.TokenType;
      const tc_oTag = new TokContext('<tag', false);
      const tc_cTag = new TokContext('</tag', false);
      const tc_expr = new TokContext('<tag>...</tag>', true, true);
      const tokContexts = {
        tc_oTag: tc_oTag,
        tc_cTag: tc_cTag,
        tc_expr: tc_expr
      };
      const tokTypes = {
        jsxName: new TokenType('jsxName'),
        jsxText: new TokenType('jsxText', {beforeExpr: true}),
        jsxTagStart: new TokenType('jsxTagStart', {startsExpr: true}),
        jsxTagEnd: new TokenType('jsxTagEnd')
      };

      tokTypes.jsxTagStart.updateContext = function() {
        this.context.push(tc_expr); // treat as beginning of JSX expression
        this.context.push(tc_oTag); // start opening tag context
        this.exprAllowed = false;
      };
      tokTypes.jsxTagEnd.updateContext = function(prevType) {
        let out = this.context.pop();
        if (out === tc_oTag && prevType === tt.slash || out === tc_cTag) {
          this.context.pop();
          this.exprAllowed = this.curContext() === tc_expr;
        } else {
          this.exprAllowed = true;
        }
      };

      acornJsx = { tokContexts: tokContexts, tokTypes: tokTypes };
      acornJsxMap.set(acorn, acornJsx);
    }

    return acornJsx;
  }

  // Transforms JSX element name to string.

  function getQualifiedJSXName(object) {
    if (!object)
      return object;

    if (object.type === 'JSXIdentifier')
      return object.name;

    if (object.type === 'JSXNamespacedName')
      return object.namespace.name + ':' + object.name.name;

    if (object.type === 'JSXMemberExpression')
      return getQualifiedJSXName(object.object) + '.' +
      getQualifiedJSXName(object.property);
  }

  function jsx(options) {
    options = options || {};
    return function(Parser) {
      return plugin({
        allowNamespaces: options.allowNamespaces !== false,
        allowNamespacedObjects: !!options.allowNamespacedObjects
      }, Parser);
    };
  };

  // This is `tokTypes` of the peer dep.
  // This can be different instances from the actual `tokTypes` this plugin uses.
  Object.defineProperty(jsx, "tokTypes", {
    get: function get_tokTypes() {
      return getJsxTokens(require("acorn")).tokTypes;
    },
    configurable: true,
    enumerable: true
  });

  function plugin(options, Parser) {
    const acorn = Parser.acorn || require("acorn");
    const acornJsx = getJsxTokens(acorn);
    const tt = acorn.tokTypes;
    const tok = acornJsx.tokTypes;
    const tokContexts = acorn.tokContexts;
    const tc_oTag = acornJsx.tokContexts.tc_oTag;
    const tc_cTag = acornJsx.tokContexts.tc_cTag;
    const tc_expr = acornJsx.tokContexts.tc_expr;
    const isNewLine = acorn.isNewLine;
    const isIdentifierStart = acorn.isIdentifierStart;
    const isIdentifierChar = acorn.isIdentifierChar;

    return class extends Parser {
      // Expose actual `tokTypes` and `tokContexts` to other plugins.
      static get acornJsx() {
        return acornJsx;
      }

      // Reads inline JSX contents token.
      jsx_readToken() {
        let out = '', chunkStart = this.pos;
        for (;;) {
          if (this.pos >= this.input.length)
            this.raise(this.start, 'Unterminated JSX contents');
          let ch = this.input.charCodeAt(this.pos);

          switch (ch) {
          case 60: // '<'
          case 123: // '{'
            if (this.pos === this.start) {
              if (ch === 60 && this.exprAllowed) {
                ++this.pos;
                return this.finishToken(tok.jsxTagStart);
              }
              return this.getTokenFromCode(ch);
            }
            out += this.input.slice(chunkStart, this.pos);
            return this.finishToken(tok.jsxText, out);

          case 38: // '&'
            out += this.input.slice(chunkStart, this.pos);
            out += this.jsx_readEntity();
            chunkStart = this.pos;
            break;

          case 62: // '>'
          case 125: // '}'
            this.raise(
              this.pos,
              "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" +
                (ch === 62 ? "&gt;" : "&rbrace;") + "` or " + "`{\"" + this.input[this.pos] + "\"}" + "`?"
            );

          default:
            if (isNewLine(ch)) {
              out += this.input.slice(chunkStart, this.pos);
              out += this.jsx_readNewLine(true);
              chunkStart = this.pos;
            } else {
              ++this.pos;
            }
          }
        }
      }

      jsx_readNewLine(normalizeCRLF) {
        let ch = this.input.charCodeAt(this.pos);
        let out;
        ++this.pos;
        if (ch === 13 && this.input.charCodeAt(this.pos) === 10) {
          ++this.pos;
          out = normalizeCRLF ? '\n' : '\r\n';
        } else {
          out = String.fromCharCode(ch);
        }
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }

        return out;
      }

      jsx_readString(quote) {
        let out = '', chunkStart = ++this.pos;
        for (;;) {
          if (this.pos >= this.input.length)
            this.raise(this.start, 'Unterminated string constant');
          let ch = this.input.charCodeAt(this.pos);
          if (ch === quote) break;
          if (ch === 38) { // '&'
            out += this.input.slice(chunkStart, this.pos);
            out += this.jsx_readEntity();
            chunkStart = this.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.jsx_readNewLine(false);
            chunkStart = this.pos;
          } else {
            ++this.pos;
          }
        }
        out += this.input.slice(chunkStart, this.pos++);
        return this.finishToken(tt.string, out);
      }

      jsx_readEntity() {
        let str = '', count = 0, entity;
        let ch = this.input[this.pos];
        if (ch !== '&')
          this.raise(this.pos, 'Entity must start with an ampersand');
        let startPos = ++this.pos;
        while (this.pos < this.input.length && count++ < 10) {
          ch = this.input[this.pos++];
          if (ch === ';') {
            if (str[0] === '#') {
              if (str[1] === 'x') {
                str = str.substr(2);
                if (hexNumber.test(str))
                  entity = String.fromCharCode(parseInt(str, 16));
              } else {
                str = str.substr(1);
                if (decimalNumber.test(str))
                  entity = String.fromCharCode(parseInt(str, 10));
              }
            } else {
              entity = XHTMLEntities[str];
            }
            break;
          }
          str += ch;
        }
        if (!entity) {
          this.pos = startPos;
          return '&';
        }
        return entity;
      }

      // Read a JSX identifier (valid tag or attribute name).
      //
      // Optimized version since JSX identifiers can't contain
      // escape characters and so can be read as single slice.
      // Also assumes that first character was already checked
      // by isIdentifierStart in readToken.

      jsx_readWord() {
        let ch, start = this.pos;
        do {
          ch = this.input.charCodeAt(++this.pos);
        } while (isIdentifierChar(ch) || ch === 45); // '-'
        return this.finishToken(tok.jsxName, this.input.slice(start, this.pos));
      }

      // Parse next token as JSX identifier

      jsx_parseIdentifier() {
        let node = this.startNode();
        if (this.type === tok.jsxName)
          node.name = this.value;
        else if (this.type.keyword)
          node.name = this.type.keyword;
        else
          this.unexpected();
        this.next();
        return this.finishNode(node, 'JSXIdentifier');
      }

      // Parse namespaced identifier.

      jsx_parseNamespacedName() {
        let startPos = this.start, startLoc = this.startLoc;
        let name = this.jsx_parseIdentifier();
        if (!options.allowNamespaces || !this.eat(tt.colon)) return name;
        var node = this.startNodeAt(startPos, startLoc);
        node.namespace = name;
        node.name = this.jsx_parseIdentifier();
        return this.finishNode(node, 'JSXNamespacedName');
      }

      // Parses element name in any form - namespaced, member
      // or single identifier.

      jsx_parseElementName() {
        if (this.type === tok.jsxTagEnd) return '';
        let startPos = this.start, startLoc = this.startLoc;
        let node = this.jsx_parseNamespacedName();
        if (this.type === tt.dot && node.type === 'JSXNamespacedName' && !options.allowNamespacedObjects) {
          this.unexpected();
        }
        while (this.eat(tt.dot)) {
          let newNode = this.startNodeAt(startPos, startLoc);
          newNode.object = node;
          newNode.property = this.jsx_parseIdentifier();
          node = this.finishNode(newNode, 'JSXMemberExpression');
        }
        return node;
      }

      // Parses any type of JSX attribute value.

      jsx_parseAttributeValue() {
        switch (this.type) {
        case tt.braceL:
          let node = this.jsx_parseExpressionContainer();
          if (node.expression.type === 'JSXEmptyExpression')
            this.raise(node.start, 'JSX attributes must only be assigned a non-empty expression');
          return node;

        case tok.jsxTagStart:
        case tt.string:
          return this.parseExprAtom();

        default:
          this.raise(this.start, 'JSX value should be either an expression or a quoted JSX text');
        }
      }

      // JSXEmptyExpression is unique type since it doesn't actually parse anything,
      // and so it should start at the end of last read token (left brace) and finish
      // at the beginning of the next one (right brace).

      jsx_parseEmptyExpression() {
        let node = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(node, 'JSXEmptyExpression', this.start, this.startLoc);
      }

      // Parses JSX expression enclosed into curly brackets.

      jsx_parseExpressionContainer() {
        let node = this.startNode();
        this.next();
        node.expression = this.type === tt.braceR
          ? this.jsx_parseEmptyExpression()
          : this.parseExpression();
        this.expect(tt.braceR);
        return this.finishNode(node, 'JSXExpressionContainer');
      }

      // Parses following JSX attribute name-value pair.

      jsx_parseAttribute() {
        let node = this.startNode();
        if (this.eat(tt.braceL)) {
          this.expect(tt.ellipsis);
          node.argument = this.parseMaybeAssign();
          this.expect(tt.braceR);
          return this.finishNode(node, 'JSXSpreadAttribute');
        }
        node.name = this.jsx_parseNamespacedName();
        node.value = this.eat(tt.eq) ? this.jsx_parseAttributeValue() : null;
        return this.finishNode(node, 'JSXAttribute');
      }

      // Parses JSX opening tag starting after '<'.

      jsx_parseOpeningElementAt(startPos, startLoc) {
        let node = this.startNodeAt(startPos, startLoc);
        node.attributes = [];
        let nodeName = this.jsx_parseElementName();
        if (nodeName) node.name = nodeName;
        while (this.type !== tt.slash && this.type !== tok.jsxTagEnd)
          node.attributes.push(this.jsx_parseAttribute());
        node.selfClosing = this.eat(tt.slash);
        this.expect(tok.jsxTagEnd);
        return this.finishNode(node, nodeName ? 'JSXOpeningElement' : 'JSXOpeningFragment');
      }

      // Parses JSX closing tag starting after '</'.

      jsx_parseClosingElementAt(startPos, startLoc) {
        let node = this.startNodeAt(startPos, startLoc);
        let nodeName = this.jsx_parseElementName();
        if (nodeName) node.name = nodeName;
        this.expect(tok.jsxTagEnd);
        return this.finishNode(node, nodeName ? 'JSXClosingElement' : 'JSXClosingFragment');
      }

      // Parses entire JSX element, including it's opening tag
      // (starting after '<'), attributes, contents and closing tag.

      jsx_parseElementAt(startPos, startLoc) {
        let node = this.startNodeAt(startPos, startLoc);
        let children = [];
        let openingElement = this.jsx_parseOpeningElementAt(startPos, startLoc);
        let closingElement = null;

        if (!openingElement.selfClosing) {
          contents: for (;;) {
            switch (this.type) {
            case tok.jsxTagStart:
              startPos = this.start; startLoc = this.startLoc;
              this.next();
              if (this.eat(tt.slash)) {
                closingElement = this.jsx_parseClosingElementAt(startPos, startLoc);
                break contents;
              }
              children.push(this.jsx_parseElementAt(startPos, startLoc));
              break;

            case tok.jsxText:
              children.push(this.parseExprAtom());
              break;

            case tt.braceL:
              children.push(this.jsx_parseExpressionContainer());
              break;

            default:
              this.unexpected();
            }
          }
          if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
            this.raise(
              closingElement.start,
              'Expected corresponding JSX closing tag for <' + getQualifiedJSXName(openingElement.name) + '>');
          }
        }
        let fragmentOrElement = openingElement.name ? 'Element' : 'Fragment';

        node['opening' + fragmentOrElement] = openingElement;
        node['closing' + fragmentOrElement] = closingElement;
        node.children = children;
        if (this.type === tt.relational && this.value === "<") {
          this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
        }
        return this.finishNode(node, 'JSX' + fragmentOrElement);
      }

      // Parse JSX text

      jsx_parseText() {
        let node = this.parseLiteral(this.value);
        node.type = "JSXText";
        return node;
      }

      // Parses entire JSX element from current position.

      jsx_parseElement() {
        let startPos = this.start, startLoc = this.startLoc;
        this.next();
        return this.jsx_parseElementAt(startPos, startLoc);
      }

      parseExprAtom(refShortHandDefaultPos) {
        if (this.type === tok.jsxText)
          return this.jsx_parseText();
        else if (this.type === tok.jsxTagStart)
          return this.jsx_parseElement();
        else
          return super.parseExprAtom(refShortHandDefaultPos);
      }

      readToken(code) {
        let context = this.curContext();

        if (context === tc_expr) return this.jsx_readToken();

        if (context === tc_oTag || context === tc_cTag) {
          if (isIdentifierStart(code)) return this.jsx_readWord();

          if (code == 62) {
            ++this.pos;
            return this.finishToken(tok.jsxTagEnd);
          }

          if ((code === 34 || code === 39) && context == tc_oTag)
            return this.jsx_readString(code);
        }

        if (code === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) {
          ++this.pos;
          return this.finishToken(tok.jsxTagStart);
        }
        return super.readToken(code);
      }

      updateContext(prevType) {
        if (this.type == tt.braceL) {
          var curContext = this.curContext();
          if (curContext == tc_oTag) this.context.push(tokContexts.b_expr);
          else if (curContext == tc_expr) this.context.push(tokContexts.b_tmpl);
          else super.updateContext(prevType);
          this.exprAllowed = true;
        } else if (this.type === tt.slash && prevType === tok.jsxTagStart) {
          this.context.length -= 2; // do not consider JSX expr -> JSX open tag -> ... anymore
          this.context.push(tc_cTag); // reconsider as closing tag context
          this.exprAllowed = false;
        } else {
          return super.updateContext(prevType);
        }
      }
    };
  }

  return jsx;
});
define('skylark-espree/lib/token-translator',[],function(){

    /**
     * @fileoverview Translates tokens between Acorn format and Esprima format.
     * @author Nicholas C. Zakas
     */
    /* eslint no-underscore-dangle: 0 */

    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    // none!

    //------------------------------------------------------------------------------
    // Private
    //------------------------------------------------------------------------------


    // Esprima Token Types
    const Token = {
        Boolean: "Boolean",
        EOF: "<end>",
        Identifier: "Identifier",
        PrivateIdentifier: "PrivateIdentifier",
        Keyword: "Keyword",
        Null: "Null",
        Numeric: "Numeric",
        Punctuator: "Punctuator",
        String: "String",
        RegularExpression: "RegularExpression",
        Template: "Template",
        JSXIdentifier: "JSXIdentifier",
        JSXText: "JSXText"
    };

    /**
     * Converts part of a template into an Esprima token.
     * @param {AcornToken[]} tokens The Acorn tokens representing the template.
     * @param {string} code The source code.
     * @returns {EsprimaToken} The Esprima equivalent of the template token.
     * @private
     */
    function convertTemplatePart(tokens, code) {
        const firstToken = tokens[0],
            lastTemplateToken = tokens[tokens.length - 1];

        const token = {
            type: Token.Template,
            value: code.slice(firstToken.start, lastTemplateToken.end)
        };

        if (firstToken.loc) {
            token.loc = {
                start: firstToken.loc.start,
                end: lastTemplateToken.loc.end
            };
        }

        if (firstToken.range) {
            token.start = firstToken.range[0];
            token.end = lastTemplateToken.range[1];
            token.range = [token.start, token.end];
        }

        return token;
    }

    /**
     * Contains logic to translate Acorn tokens into Esprima tokens.
     * @param {Object} acornTokTypes The Acorn token types.
     * @param {string} code The source code Acorn is parsing. This is necessary
     *      to correct the "value" property of some tokens.
     * @constructor
     */
    function TokenTranslator(acornTokTypes, code) {

        // token types
        this._acornTokTypes = acornTokTypes;

        // token buffer for templates
        this._tokens = [];

        // track the last curly brace
        this._curlyBrace = null;

        // the source code
        this._code = code;

    }

    TokenTranslator.prototype = {
        constructor: TokenTranslator,

        /**
         * Translates a single Esprima token to a single Acorn token. This may be
         * inaccurate due to how templates are handled differently in Esprima and
         * Acorn, but should be accurate for all other tokens.
         * @param {AcornToken} token The Acorn token to translate.
         * @param {Object} extra Espree extra object.
         * @returns {EsprimaToken} The Esprima version of the token.
         */
        translate(token, extra) {

            const type = token.type,
                tt = this._acornTokTypes;

            if (type === tt.name) {
                token.type = Token.Identifier;

                // TODO: See if this is an Acorn bug
                if (token.value === "static") {
                    token.type = Token.Keyword;
                }

                if (extra.ecmaVersion > 5 && (token.value === "yield" || token.value === "let")) {
                    token.type = Token.Keyword;
                }

            } else if (type === tt.privateId) {
                token.type = Token.PrivateIdentifier;

            } else if (type === tt.semi || type === tt.comma ||
                     type === tt.parenL || type === tt.parenR ||
                     type === tt.braceL || type === tt.braceR ||
                     type === tt.dot || type === tt.bracketL ||
                     type === tt.colon || type === tt.question ||
                     type === tt.bracketR || type === tt.ellipsis ||
                     type === tt.arrow || type === tt.jsxTagStart ||
                     type === tt.incDec || type === tt.starstar ||
                     type === tt.jsxTagEnd || type === tt.prefix ||
                     type === tt.questionDot ||
                     (type.binop && !type.keyword) ||
                     type.isAssign) {

                token.type = Token.Punctuator;
                token.value = this._code.slice(token.start, token.end);
            } else if (type === tt.jsxName) {
                token.type = Token.JSXIdentifier;
            } else if (type.label === "jsxText" || type === tt.jsxAttrValueToken) {
                token.type = Token.JSXText;
            } else if (type.keyword) {
                if (type.keyword === "true" || type.keyword === "false") {
                    token.type = Token.Boolean;
                } else if (type.keyword === "null") {
                    token.type = Token.Null;
                } else {
                    token.type = Token.Keyword;
                }
            } else if (type === tt.num) {
                token.type = Token.Numeric;
                token.value = this._code.slice(token.start, token.end);
            } else if (type === tt.string) {

                if (extra.jsxAttrValueToken) {
                    extra.jsxAttrValueToken = false;
                    token.type = Token.JSXText;
                } else {
                    token.type = Token.String;
                }

                token.value = this._code.slice(token.start, token.end);
            } else if (type === tt.regexp) {
                token.type = Token.RegularExpression;
                const value = token.value;

                token.regex = {
                    flags: value.flags,
                    pattern: value.pattern
                };
                token.value = `/${value.pattern}/${value.flags}`;
            }

            return token;
        },

        /**
         * Function to call during Acorn's onToken handler.
         * @param {AcornToken} token The Acorn token.
         * @param {Object} extra The Espree extra object.
         * @returns {void}
         */
        onToken(token, extra) {

            const that = this,
                tt = this._acornTokTypes,
                tokens = extra.tokens,
                templateTokens = this._tokens;

            /**
             * Flushes the buffered template tokens and resets the template
             * tracking.
             * @returns {void}
             * @private
             */
            function translateTemplateTokens() {
                tokens.push(convertTemplatePart(that._tokens, that._code));
                that._tokens = [];
            }

            if (token.type === tt.eof) {

                // might be one last curlyBrace
                if (this._curlyBrace) {
                    tokens.push(this.translate(this._curlyBrace, extra));
                }

                return;
            }

            if (token.type === tt.backQuote) {

                // if there's already a curly, it's not part of the template
                if (this._curlyBrace) {
                    tokens.push(this.translate(this._curlyBrace, extra));
                    this._curlyBrace = null;
                }

                templateTokens.push(token);

                // it's the end
                if (templateTokens.length > 1) {
                    translateTemplateTokens();
                }

                return;
            }
            if (token.type === tt.dollarBraceL) {
                templateTokens.push(token);
                translateTemplateTokens();
                return;
            }
            if (token.type === tt.braceR) {

                // if there's already a curly, it's not part of the template
                if (this._curlyBrace) {
                    tokens.push(this.translate(this._curlyBrace, extra));
                }

                // store new curly for later
                this._curlyBrace = token;
                return;
            }
            if (token.type === tt.template || token.type === tt.invalidTemplate) {
                if (this._curlyBrace) {
                    templateTokens.push(this._curlyBrace);
                    this._curlyBrace = null;
                }

                templateTokens.push(token);
                return;
            }

            if (this._curlyBrace) {
                tokens.push(this.translate(this._curlyBrace, extra));
                this._curlyBrace = null;
            }

            tokens.push(this.translate(token, extra));
        }
    };

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    return TokenTranslator;

});
define('skylark-espree/lib/options',[],function(){

    /**
     * @fileoverview A collection of methods for processing Espree's options.
     * @author Kai Cataldo
     */

    //------------------------------------------------------------------------------
    // Helpers
    //------------------------------------------------------------------------------

    const SUPPORTED_VERSIONS = [
        3,
        5,
        6, // 2015
        7, // 2016
        8, // 2017
        9, // 2018
        10, // 2019
        11, // 2020
        12, // 2021
        13, // 2022
        14, // 2023
        15 // 2024
    ];

    /**
     * Get the latest ECMAScript version supported by Espree.
     * @returns {number} The latest ECMAScript version.
     */
    function getLatestEcmaVersion() {
        return SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1];
    }

    /**
     * Get the list of ECMAScript versions supported by Espree.
     * @returns {number[]} An array containing the supported ECMAScript versions.
     */
    function getSupportedEcmaVersions() {
        return [...SUPPORTED_VERSIONS];
    }

    /**
     * Normalize ECMAScript version from the initial config
     * @param {(number|"latest")} ecmaVersion ECMAScript version from the initial config
     * @throws {Error} throws an error if the ecmaVersion is invalid.
     * @returns {number} normalized ECMAScript version
     */
    function normalizeEcmaVersion(ecmaVersion = 5) {

        let version = ecmaVersion === "latest" ? getLatestEcmaVersion() : ecmaVersion;

        if (typeof version !== "number") {
            throw new Error(`ecmaVersion must be a number or "latest". Received value of type ${typeof ecmaVersion} instead.`);
        }

        // Calculate ECMAScript edition number from official year version starting with
        // ES2015, which corresponds with ES6 (or a difference of 2009).
        if (version >= 2015) {
            version -= 2009;
        }

        if (!SUPPORTED_VERSIONS.includes(version)) {
            throw new Error("Invalid ecmaVersion.");
        }

        return version;
    }

    /**
     * Normalize sourceType from the initial config
     * @param {string} sourceType to normalize
     * @throws {Error} throw an error if sourceType is invalid
     * @returns {string} normalized sourceType
     */
    function normalizeSourceType(sourceType = "script") {
        if (sourceType === "script" || sourceType === "module") {
            return sourceType;
        }

        if (sourceType === "commonjs") {
            return "script";
        }

        throw new Error("Invalid sourceType.");
    }

    /**
     * Normalize parserOptions
     * @param {Object} options the parser options to normalize
     * @throws {Error} throw an error if found invalid option.
     * @returns {Object} normalized options
     */
    function normalizeOptions(options) {
        const ecmaVersion = normalizeEcmaVersion(options.ecmaVersion);
        const sourceType = normalizeSourceType(options.sourceType);
        const ranges = options.range === true;
        const locations = options.loc === true;

        if (ecmaVersion !== 3 && options.allowReserved) {

            // a value of `false` is intentionally allowed here, so a shared config can overwrite it when needed
            throw new Error("`allowReserved` is only supported when ecmaVersion is 3");
        }
        if (typeof options.allowReserved !== "undefined" && typeof options.allowReserved !== "boolean") {
            throw new Error("`allowReserved`, when present, must be `true` or `false`");
        }
        const allowReserved = ecmaVersion === 3 ? (options.allowReserved || "never") : false;
        const ecmaFeatures = options.ecmaFeatures || {};
        const allowReturnOutsideFunction = options.sourceType === "commonjs" ||
            Boolean(ecmaFeatures.globalReturn);

        if (sourceType === "module" && ecmaVersion < 6) {
            throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");
        }

        return Object.assign({}, options, {
            ecmaVersion,
            sourceType,
            ranges,
            locations,
            allowReserved,
            allowReturnOutsideFunction
        });
    }


    return {
        getLatestEcmaVersion,
        getSupportedEcmaVersions,
        normalizeOptions
    };

});
define('skylark-espree/lib/espree',[
    "./token-translator",
    "./options"
],function(TokenTranslator,options){

    /* eslint-disable no-param-reassign*/
    const  { normalizeOptions } = options;


    const STATE = Symbol("espree's internal state");
    const ESPRIMA_FINISH_NODE = Symbol("espree's esprimaFinishNode");


    /**
     * Converts an Acorn comment to a Esprima comment.
     * @param {boolean} block True if it's a block comment, false if not.
     * @param {string} text The text of the comment.
     * @param {int} start The index at which the comment starts.
     * @param {int} end The index at which the comment ends.
     * @param {Location} startLoc The location at which the comment starts.
     * @param {Location} endLoc The location at which the comment ends.
     * @param {string} code The source code being parsed.
     * @returns {Object} The comment object.
     * @private
     */
    function convertAcornCommentToEsprimaComment(block, text, start, end, startLoc, endLoc, code) {
        let type;

        if (block) {
            type = "Block";
        } else if (code.slice(start, start + 2) === "#!") {
            type = "Hashbang";
        } else {
            type = "Line";
        }

        const comment = {
            type,
            value: text
        };

        if (typeof start === "number") {
            comment.start = start;
            comment.end = end;
            comment.range = [start, end];
        }

        if (typeof startLoc === "object") {
            comment.loc = {
                start: startLoc,
                end: endLoc
            };
        }

        return comment;
    }

    return () => Parser => {
        const tokTypes = Object.assign({}, Parser.acorn.tokTypes);

        if (Parser.acornJsx) {
            Object.assign(tokTypes, Parser.acornJsx.tokTypes);
        }

        return class Espree extends Parser {
            constructor(opts, code) {
                if (typeof opts !== "object" || opts === null) {
                    opts = {};
                }
                if (typeof code !== "string" && !(code instanceof String)) {
                    code = String(code);
                }

                // save original source type in case of commonjs
                const originalSourceType = opts.sourceType;
                const options = normalizeOptions(opts);
                const ecmaFeatures = options.ecmaFeatures || {};
                const tokenTranslator =
                    options.tokens === true
                        ? new TokenTranslator(tokTypes, code)
                        : null;

                /*
                 * Data that is unique to Espree and is not represented internally
                 * in Acorn.
                 *
                 * For ES2023 hashbangs, Espree will call `onComment()` during the
                 * constructor, so we must define state before having access to
                 * `this`.
                 */
                const state = {
                    originalSourceType: originalSourceType || options.sourceType,
                    tokens: tokenTranslator ? [] : null,
                    comments: options.comment === true ? [] : null,
                    impliedStrict: ecmaFeatures.impliedStrict === true && options.ecmaVersion >= 5,
                    ecmaVersion: options.ecmaVersion,
                    jsxAttrValueToken: false,
                    lastToken: null,
                    templateElements: []
                };

                // Initialize acorn parser.
                super({

                    // do not use spread, because we don't want to pass any unknown options to acorn
                    ecmaVersion: options.ecmaVersion,
                    sourceType: options.sourceType,
                    ranges: options.ranges,
                    locations: options.locations,
                    allowReserved: options.allowReserved,

                    // Truthy value is true for backward compatibility.
                    allowReturnOutsideFunction: options.allowReturnOutsideFunction,

                    // Collect tokens
                    onToken: token => {
                        if (tokenTranslator) {

                            // Use `tokens`, `ecmaVersion`, and `jsxAttrValueToken` in the state.
                            tokenTranslator.onToken(token, state);
                        }
                        if (token.type !== tokTypes.eof) {
                            state.lastToken = token;
                        }
                    },

                    // Collect comments
                    onComment: (block, text, start, end, startLoc, endLoc) => {
                        if (state.comments) {
                            const comment = convertAcornCommentToEsprimaComment(block, text, start, end, startLoc, endLoc, code);

                            state.comments.push(comment);
                        }
                    }
                }, code);

                /*
                 * We put all of this data into a symbol property as a way to avoid
                 * potential naming conflicts with future versions of Acorn.
                 */
                this[STATE] = state;
            }

            tokenize() {
                do {
                    this.next();
                } while (this.type !== tokTypes.eof);

                // Consume the final eof token
                this.next();

                const extra = this[STATE];
                const tokens = extra.tokens;

                if (extra.comments) {
                    tokens.comments = extra.comments;
                }

                return tokens;
            }

            finishNode(...args) {
                const result = super.finishNode(...args);

                return this[ESPRIMA_FINISH_NODE](result);
            }

            finishNodeAt(...args) {
                const result = super.finishNodeAt(...args);

                return this[ESPRIMA_FINISH_NODE](result);
            }

            parse() {
                const extra = this[STATE];
                const program = super.parse();

                program.sourceType = extra.originalSourceType;

                if (extra.comments) {
                    program.comments = extra.comments;
                }
                if (extra.tokens) {
                    program.tokens = extra.tokens;
                }

                /*
                 * Adjust opening and closing position of program to match Esprima.
                 * Acorn always starts programs at range 0 whereas Esprima starts at the
                 * first AST node's start (the only real difference is when there's leading
                 * whitespace or leading comments). Acorn also counts trailing whitespace
                 * as part of the program whereas Esprima only counts up to the last token.
                 */
                if (program.body.length) {
                    const [firstNode] = program.body;

                    if (program.range) {
                        program.range[0] = firstNode.range[0];
                    }
                    if (program.loc) {
                        program.loc.start = firstNode.loc.start;
                    }
                    program.start = firstNode.start;
                }
                if (extra.lastToken) {
                    if (program.range) {
                        program.range[1] = extra.lastToken.range[1];
                    }
                    if (program.loc) {
                        program.loc.end = extra.lastToken.loc.end;
                    }
                    program.end = extra.lastToken.end;
                }


                /*
                 * https://github.com/eslint/espree/issues/349
                 * Ensure that template elements have correct range information.
                 * This is one location where Acorn produces a different value
                 * for its start and end properties vs. the values present in the
                 * range property. In order to avoid confusion, we set the start
                 * and end properties to the values that are present in range.
                 * This is done here, instead of in finishNode(), because Acorn
                 * uses the values of start and end internally while parsing, making
                 * it dangerous to change those values while parsing is ongoing.
                 * By waiting until the end of parsing, we can safely change these
                 * values without affect any other part of the process.
                 */
                this[STATE].templateElements.forEach(templateElement => {
                    const startOffset = -1;
                    const endOffset = templateElement.tail ? 1 : 2;

                    templateElement.start += startOffset;
                    templateElement.end += endOffset;

                    if (templateElement.range) {
                        templateElement.range[0] += startOffset;
                        templateElement.range[1] += endOffset;
                    }

                    if (templateElement.loc) {
                        templateElement.loc.start.column += startOffset;
                        templateElement.loc.end.column += endOffset;
                    }
                });

                return program;
            }

            parseTopLevel(node) {
                if (this[STATE].impliedStrict) {
                    this.strict = true;
                }
                return super.parseTopLevel(node);
            }

            /**
             * Overwrites the default raise method to throw Esprima-style errors.
             * @param {int} pos The position of the error.
             * @param {string} message The error message.
             * @throws {SyntaxError} A syntax error.
             * @returns {void}
             */
            raise(pos, message) {
                const loc = Parser.acorn.getLineInfo(this.input, pos);
                const err = new SyntaxError(message);

                err.index = pos;
                err.lineNumber = loc.line;
                err.column = loc.column + 1; // acorn uses 0-based columns
                throw err;
            }

            /**
             * Overwrites the default raise method to throw Esprima-style errors.
             * @param {int} pos The position of the error.
             * @param {string} message The error message.
             * @throws {SyntaxError} A syntax error.
             * @returns {void}
             */
            raiseRecoverable(pos, message) {
                this.raise(pos, message);
            }

            /**
             * Overwrites the default unexpected method to throw Esprima-style errors.
             * @param {int} pos The position of the error.
             * @throws {SyntaxError} A syntax error.
             * @returns {void}
             */
            unexpected(pos) {
                let message = "Unexpected token";

                if (pos !== null && pos !== void 0) {
                    this.pos = pos;

                    if (this.options.locations) {
                        while (this.pos < this.lineStart) {
                            this.lineStart = this.input.lastIndexOf("\n", this.lineStart - 2) + 1;
                            --this.curLine;
                        }
                    }

                    this.nextToken();
                }

                if (this.end > this.start) {
                    message += ` ${this.input.slice(this.start, this.end)}`;
                }

                this.raise(this.start, message);
            }

            /*
            * Esprima-FB represents JSX strings as tokens called "JSXText", but Acorn-JSX
            * uses regular tt.string without any distinction between this and regular JS
            * strings. As such, we intercept an attempt to read a JSX string and set a flag
            * on extra so that when tokens are converted, the next token will be switched
            * to JSXText via onToken.
            */
            jsx_readString(quote) { // eslint-disable-line camelcase
                const result = super.jsx_readString(quote);

                if (this.type === tokTypes.string) {
                    this[STATE].jsxAttrValueToken = true;
                }
                return result;
            }

            /**
             * Performs last-minute Esprima-specific compatibility checks and fixes.
             * @param {ASTNode} result The node to check.
             * @returns {ASTNode} The finished node.
             */
            [ESPRIMA_FINISH_NODE](result) {

                // Acorn doesn't count the opening and closing backticks as part of templates
                // so we have to adjust ranges/locations appropriately.
                if (result.type === "TemplateElement") {

                    // save template element references to fix start/end later
                    this[STATE].templateElements.push(result);
                }

                if (result.type.includes("Function") && !result.generator) {
                    result.generator = false;
                }

                return result;
            }
        };
    };


});
define('skylark-espree/lib/version',[],function(){
	const version = "main";

	return version;

});

define('skylark-espree/eslint-visitor-keys',[],function(){
	/**
	 * @typedef {{ readonly [type: string]: ReadonlyArray<string> }} VisitorKeys
	 */

	/**
	 * @type {VisitorKeys}
	 */
	const KEYS = {
	    ArrayExpression: [
	        "elements"
	    ],
	    ArrayPattern: [
	        "elements"
	    ],
	    ArrowFunctionExpression: [
	        "params",
	        "body"
	    ],
	    AssignmentExpression: [
	        "left",
	        "right"
	    ],
	    AssignmentPattern: [
	        "left",
	        "right"
	    ],
	    AwaitExpression: [
	        "argument"
	    ],
	    BinaryExpression: [
	        "left",
	        "right"
	    ],
	    BlockStatement: [
	        "body"
	    ],
	    BreakStatement: [
	        "label"
	    ],
	    CallExpression: [
	        "callee",
	        "arguments"
	    ],
	    CatchClause: [
	        "param",
	        "body"
	    ],
	    ChainExpression: [
	        "expression"
	    ],
	    ClassBody: [
	        "body"
	    ],
	    ClassDeclaration: [
	        "id",
	        "superClass",
	        "body"
	    ],
	    ClassExpression: [
	        "id",
	        "superClass",
	        "body"
	    ],
	    ConditionalExpression: [
	        "test",
	        "consequent",
	        "alternate"
	    ],
	    ContinueStatement: [
	        "label"
	    ],
	    DebuggerStatement: [],
	    DoWhileStatement: [
	        "body",
	        "test"
	    ],
	    EmptyStatement: [],
	    ExperimentalRestProperty: [
	        "argument"
	    ],
	    ExperimentalSpreadProperty: [
	        "argument"
	    ],
	    ExportAllDeclaration: [
	        "exported",
	        "source"
	    ],
	    ExportDefaultDeclaration: [
	        "declaration"
	    ],
	    ExportNamedDeclaration: [
	        "declaration",
	        "specifiers",
	        "source"
	    ],
	    ExportSpecifier: [
	        "exported",
	        "local"
	    ],
	    ExpressionStatement: [
	        "expression"
	    ],
	    ForInStatement: [
	        "left",
	        "right",
	        "body"
	    ],
	    ForOfStatement: [
	        "left",
	        "right",
	        "body"
	    ],
	    ForStatement: [
	        "init",
	        "test",
	        "update",
	        "body"
	    ],
	    FunctionDeclaration: [
	        "id",
	        "params",
	        "body"
	    ],
	    FunctionExpression: [
	        "id",
	        "params",
	        "body"
	    ],
	    Identifier: [],
	    IfStatement: [
	        "test",
	        "consequent",
	        "alternate"
	    ],
	    ImportDeclaration: [
	        "specifiers",
	        "source"
	    ],
	    ImportDefaultSpecifier: [
	        "local"
	    ],
	    ImportExpression: [
	        "source"
	    ],
	    ImportNamespaceSpecifier: [
	        "local"
	    ],
	    ImportSpecifier: [
	        "imported",
	        "local"
	    ],
	    JSXAttribute: [
	        "name",
	        "value"
	    ],
	    JSXClosingElement: [
	        "name"
	    ],
	    JSXClosingFragment: [],
	    JSXElement: [
	        "openingElement",
	        "children",
	        "closingElement"
	    ],
	    JSXEmptyExpression: [],
	    JSXExpressionContainer: [
	        "expression"
	    ],
	    JSXFragment: [
	        "openingFragment",
	        "children",
	        "closingFragment"
	    ],
	    JSXIdentifier: [],
	    JSXMemberExpression: [
	        "object",
	        "property"
	    ],
	    JSXNamespacedName: [
	        "namespace",
	        "name"
	    ],
	    JSXOpeningElement: [
	        "name",
	        "attributes"
	    ],
	    JSXOpeningFragment: [],
	    JSXSpreadAttribute: [
	        "argument"
	    ],
	    JSXSpreadChild: [
	        "expression"
	    ],
	    JSXText: [],
	    LabeledStatement: [
	        "label",
	        "body"
	    ],
	    Literal: [],
	    LogicalExpression: [
	        "left",
	        "right"
	    ],
	    MemberExpression: [
	        "object",
	        "property"
	    ],
	    MetaProperty: [
	        "meta",
	        "property"
	    ],
	    MethodDefinition: [
	        "key",
	        "value"
	    ],
	    NewExpression: [
	        "callee",
	        "arguments"
	    ],
	    ObjectExpression: [
	        "properties"
	    ],
	    ObjectPattern: [
	        "properties"
	    ],
	    PrivateIdentifier: [],
	    Program: [
	        "body"
	    ],
	    Property: [
	        "key",
	        "value"
	    ],
	    PropertyDefinition: [
	        "key",
	        "value"
	    ],
	    RestElement: [
	        "argument"
	    ],
	    ReturnStatement: [
	        "argument"
	    ],
	    SequenceExpression: [
	        "expressions"
	    ],
	    SpreadElement: [
	        "argument"
	    ],
	    StaticBlock: [
	        "body"
	    ],
	    Super: [],
	    SwitchCase: [
	        "test",
	        "consequent"
	    ],
	    SwitchStatement: [
	        "discriminant",
	        "cases"
	    ],
	    TaggedTemplateExpression: [
	        "tag",
	        "quasi"
	    ],
	    TemplateElement: [],
	    TemplateLiteral: [
	        "quasis",
	        "expressions"
	    ],
	    ThisExpression: [],
	    ThrowStatement: [
	        "argument"
	    ],
	    TryStatement: [
	        "block",
	        "handler",
	        "finalizer"
	    ],
	    UnaryExpression: [
	        "argument"
	    ],
	    UpdateExpression: [
	        "argument"
	    ],
	    VariableDeclaration: [
	        "declarations"
	    ],
	    VariableDeclarator: [
	        "id",
	        "init"
	    ],
	    WhileStatement: [
	        "test",
	        "body"
	    ],
	    WithStatement: [
	        "object",
	        "body"
	    ],
	    YieldExpression: [
	        "argument"
	    ]
	};

	// Types.
	const NODE_TYPES = Object.keys(KEYS);

	// Freeze the keys.
	for (const type of NODE_TYPES) {
	    Object.freeze(KEYS[type]);
	}
	Object.freeze(KEYS);

	/**
	 * @typedef {import('./visitor-keys.js').VisitorKeys} VisitorKeys
	 */

	// List to ignore keys.
	const KEY_BLACKLIST = new Set([
	    "parent",
	    "leadingComments",
	    "trailingComments"
	]);

	/**
	 * Check whether a given key should be used or not.
	 * @param {string} key The key to check.
	 * @returns {boolean} `true` if the key should be used.
	 */
	function filterKey(key) {
	    return !KEY_BLACKLIST.has(key) && key[0] !== "_";
	}

	/**
	 * Get visitor keys of a given node.
	 * @param {object} node The AST node to get keys.
	 * @returns {readonly string[]} Visitor keys of the node.
	 */
	function getKeys(node) {
	    return Object.keys(node).filter(filterKey);
	}

	// Disable valid-jsdoc rule because it reports syntax error on the type of @returns.
	// eslint-disable-next-line valid-jsdoc
	/**
	 * Make the union set with `KEYS` and given keys.
	 * @param {VisitorKeys} additionalKeys The additional keys.
	 * @returns {VisitorKeys} The union set.
	 */
	function unionWith(additionalKeys) {
	    const retv = /** @type {{
	        [type: string]: ReadonlyArray<string>
	    }} */ (Object.assign({}, KEYS));

	    for (const type of Object.keys(additionalKeys)) {
	        if (Object.prototype.hasOwnProperty.call(retv, type)) {
	            const keys = new Set(additionalKeys[type]);

	            for (const key of retv[type]) {
	                keys.add(key);
	            }

	            retv[type] = Object.freeze(Array.from(keys));
	        } else {
	            retv[type] = Object.freeze(Array.from(additionalKeys[type]));
	        }
	    }

	    return Object.freeze(retv);
	}

	return  {
	  KEYS,
	  getKeys,
	  unionWith
	};

});
define('skylark-espree/espree',[
    "skylark-acorn",
    "skylark-acorn/plugins/jsx",
    "./lib/espree",
    "./lib/version",
    "./lib/options",
    "./eslint-visitor-keys"
],function(
    acorn,
    jsx,
    espree,
    espreeVersion,
    options,
    visitorKeys
){


    /**
     * @fileoverview Main Espree file that converts Acorn into Esprima output.
     *
     * This file contains code from the following MIT-licensed projects:
     * 1. Acorn
     * 2. Babylon
     * 3. Babel-ESLint
     *
     * This file also contains code from Esprima, which is BSD licensed.
     *
     * Acorn is Copyright 2012-2015 Acorn Contributors (https://github.com/marijnh/acorn/blob/master/AUTHORS)
     * Babylon is Copyright 2014-2015 various contributors (https://github.com/babel/babel/blob/master/packages/babylon/AUTHORS)
     * Babel-ESLint is Copyright 2014-2015 Sebastian McKenzie <sebmck@gmail.com>
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     * * Redistributions of source code must retain the above copyright
     *   notice, this list of conditions and the following disclaimer.
     * * Redistributions in binary form must reproduce the above copyright
     *   notice, this list of conditions and the following disclaimer in the
     *   documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     *
     * Esprima is Copyright (c) jQuery Foundation, Inc. and Contributors, All Rights Reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are met:
     *
     *   * Redistributions of source code must retain the above copyright
     *     notice, this list of conditions and the following disclaimer.
     *   * Redistributions in binary form must reproduce the above copyright
     *     notice, this list of conditions and the following disclaimer in the
     *     documentation and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
     * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
     * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
     * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
     * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
     * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */
    /* eslint no-undefined:0, no-use-before-define: 0 */

    const  { getLatestEcmaVersion, getSupportedEcmaVersions } = options;


    // To initialize lazily.
    const parsers = {
        _regular: null,
        _jsx: null,

        get regular() {
            if (this._regular === null) {
                this._regular = acorn.Parser.extend(espree());
            }
            return this._regular;
        },

        get jsx() {
            if (this._jsx === null) {
                this._jsx = acorn.Parser.extend(jsx(), espree());
            }
            return this._jsx;
        },

        get(options) {
            const useJsx = Boolean(
                options &&
                options.ecmaFeatures &&
                options.ecmaFeatures.jsx
            );

            return useJsx ? this.jsx : this.regular;
        }
    };

    //------------------------------------------------------------------------------
    // Tokenizer
    //------------------------------------------------------------------------------

    /**
     * Tokenizes the given code.
     * @param {string} code The code to tokenize.
     * @param {Object} options Options defining how to tokenize.
     * @returns {Token[]} An array of tokens.
     * @throws {SyntaxError} If the input code is invalid.
     * @private
     */
    function tokenize(code, options) {
        const Parser = parsers.get(options);

        // Ensure to collect tokens.
        if (!options || options.tokens !== true) {
            options = Object.assign({}, options, { tokens: true }); // eslint-disable-line no-param-reassign
        }

        return new Parser(options, code).tokenize();
    }

    //------------------------------------------------------------------------------
    // Parser
    //------------------------------------------------------------------------------

    /**
     * Parses the given code.
     * @param {string} code The code to tokenize.
     * @param {Object} options Options defining how to tokenize.
     * @returns {ASTNode} The "Program" AST node.
     * @throws {SyntaxError} If the input code is invalid.
     */
     function parse(code, options) {
        const Parser = parsers.get(options);

        return new Parser(options, code).parse();
    }

    //------------------------------------------------------------------------------
    // Public
    //------------------------------------------------------------------------------

    const version = espreeVersion;
    const name = "espree";

    /* istanbul ignore next */
    const VisitorKeys = (function() {
        return visitorKeys.KEYS;
    }());

    // Derive node types from VisitorKeys
    /* istanbul ignore next */
    const Syntax = (function() {
        let key,
            types = {};

        if (typeof Object.create === "function") {
            types = Object.create(null);
        }

        for (key in VisitorKeys) {
            if (Object.hasOwnProperty.call(VisitorKeys, key)) {
                types[key] = key;
            }
        }

        if (typeof Object.freeze === "function") {
            Object.freeze(types);
        }

        return types;
    }());


    const latestEcmaVersion = getLatestEcmaVersion();

    const supportedEcmaVersions = getSupportedEcmaVersions();

    return {
        tokenize,
        parse,
        version,
        name,
        VisitorKeys,
        Syntax,
        latestEcmaVersion,
        supportedEcmaVersions
    }

});

define('skylark-espree/main',[
	"./espree"
],function(espree){
	return espree;
});
define('skylark-espree', ['skylark-espree/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-espree-all.js.map
