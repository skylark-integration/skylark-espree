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
    function normalizeEcmaVersion(ecmaVersion = 'latest') { //5 lwf

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
//# sourceMappingURL=sourcemaps/skylark-espree.js.map
