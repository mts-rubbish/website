"use strict";
function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(e, r) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === t && e.constructor && (t = e.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(e)
        : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(e, r)
        : void 0
    );
  }
}

function _iterableToArray(e) {
  if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
}

function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}

function _arrayLikeToArray(e, r) {
  (null == r || r > e.length) && (r = e.length);
  for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
  return a;
}

function _classCallCheck(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var a = r[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}

function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e;
}
var peopleConfig = {
    src: GLOBAL_CONFIG.peoplecanvas.img,
  };
  
  var img = document.createElement("img");
  img.onload = init;
  img.src = peopleConfig.src;
  let peoplecanvasEl = document.getElementById("peoplecanvas");
  
  let ctx = peoplecanvasEl ? peoplecanvasEl.getContext("2d") : undefined,
    stage = {
      width: 0,
      height: 0,
    },
    isbindPjax = false;
  
  function cleanupPeopleCanvas() {
    window.removeEventListener("resize", resize);
  }
  
  function init() {
    if (!peoplecanvasEl) return;
    resize();
    window.addEventListener("resize", resize);
  }
  
  if (!isbindPjax) {
    isbindPjax = true;
    document.addEventListener("pjax:send", function () {
      cleanupPeopleCanvas();
    });
    document.addEventListener("pjax:success", function () {
      peoplecanvasEl = document.getElementById("peoplecanvas");
      if (peoplecanvasEl) {
        ctx = peoplecanvasEl.getContext("2d");
        setTimeout(function () {
          if (!peoplecanvasEl) return;
          resize();
          window.addEventListener("resize", resize);
        }, 300);
      }
    });
  }
  
  function resize() {
    if (peoplecanvasEl && peoplecanvasEl.clientWidth != 0) {
      stage.width = peoplecanvasEl.clientWidth;
      stage.height = peoplecanvasEl.clientHeight;
      peoplecanvasEl.width = stage.width * devicePixelRatio;
      peoplecanvasEl.height = stage.height * devicePixelRatio;
      render();
    }
  }
  
  function render() {
    if (!peoplecanvasEl || !img.complete) return;
    ctx.clearRect(0, 0, peoplecanvasEl.width, peoplecanvasEl.height);
    ctx.save();
    ctx.scale(devicePixelRatio, devicePixelRatio);
  
    // 计算缩放比例，实现 "cover" 效果
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const canvasWidth = stage.width;
    const canvasHeight = stage.height;
  
    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;
    const x = (canvasWidth - newWidth) / 2;
    const y = (canvasHeight - newHeight) / 2;
  
    ctx.drawImage(img, x, y, newWidth, newHeight);
    ctx.restore();
  }
