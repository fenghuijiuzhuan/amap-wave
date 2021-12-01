(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("AMapWave", [], factory);
	else if(typeof exports === 'object')
		exports["AMapWave"] = factory();
	else
		root["AMapWave"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
;// CONCATENATED MODULE: ./src/index.js




function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = src_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }

function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * @path        : \amap-wave\src\index.js
 * @message     : 
 * @Author      : yvangod
 */

/*地图水波扩散特效 Start*/
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
/**
 * sos告警圆形范围绘制(只有存在map对象时才可以使用)
 * @param map 添加特效的地图实例
 * @param radius 半径
 * @param level 层数
 * @param point 高德位置对象，LngLat
 * @param color  颜色对象，包含{fillColor,fillOpacity}
 * @constructor
 */

var ShowWave = /*#__PURE__*/function () {
  function ShowWave(map, radius, level, point, color) {
    _classCallCheck(this, ShowWave);

    this.radius = radius;
    this.level = new Number(level);
    this.point = point;
    this.color = color;
    this.map = map;

    if (Number.isNaN(this.level)) {
      this.level = 1;
    } //至少1层


    if (!this.color || !this.color.fillColor) {
      this.color = {
        fillColor: "blue",
        fillOpacity: 0.3 //默认初始透明度0.3

      };
    } //计算平均每段扩展距离的透明度


    this.endOpacity = 0; //终止透明度设置为0

    this.speedOpacity = (this.color.fillOpacity - this.endOpacity) / this.radius; //每米的透明度
    //按层数循环构造覆盖物，并加在图片上

    this.circles = new Array();

    for (var i = 0; i < this.level; i++) {
      var circle = new AMap.Circle({
        center: point,
        icon: 'direct.png',
        radius: radius,
        fillColor: this.color.fillColor,
        fillOpacity: this.color.fillOpacity,
        strokeWeight: 0,
        strokeColor: this.color.fillColor,
        //线条颜色，为了保证感觉无线条，和填充颜色一致即可
        strokeOpacity: this.color.fillOpacity,
        //线条透明度，为了保证感觉无线条，和填充颜色透明度一致即可
        zIndex: 50
      });
      this.circles.push(circle);
      circle.setMap(this.map);
    }

    this.clock = new Array(this.level);
  }
  /**
   * 动画启动
   * @param distance 每轮动画播放总时间（单位ms）
   * @param t0 扩散一次所需的时间
   */


  _createClass(ShowWave, [{
    key: "start",
    value: function start(distance, t0) {
      var _self = this;
      /**
       * 定义动画函数
       * @param startTime 启动的初始时间
       * @param circle 圆形覆盖物对象
       * @param index 序号
       */


      function animateStart(startTime, circle, index) {
        //计算时间差
        var time = new Date().getTime() - startTime;

        if (time < 0) {
          circle.setOptions({
            radius: 0,
            strokeOpacity: 0,
            fillOpacity: 0
          }); //如果未达到执行实现则直接等待
        } else if (time >= t0) {
          // //达到运行时间之后
          // //设置圆形覆盖物的样式
          circle.setOptions({
            radius: 0,
            strokeOpacity: 0,
            fillOpacity: 0
          }); //透明度

          startTime = new Date().getTime(); //起始时间设置为当前时间加上1倍的时间间隔
        } else {
          //计算当前半径
          //匀减速运动下，每隔t时间，应该扩散的半径:
          //r=r0*(2*t*t0-t*t)/t0
          //其中，r0为最终的扩散半径，即this.radius
          var r = Math.floor(_self.radius * (2 * time / t0 - time * time / t0 / t0)); //计算透明度

          var opacity = parseFloat((_self.color.fillOpacity - _self.speedOpacity * r).toFixed(5)); //设置圆形覆盖物的样式

          circle.setOptions({
            radius: r,
            strokeOpacity: opacity,
            fillOpacity: opacity
          });
        }

        _self.clock[index] = window.requestAnimationFrame(animateStart.bind(null, startTime, circle, index));
      } //循环每一层执行动画


      var _iterator = _createForOfIteratorHelper(this.circles.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              circle = _step$value[1];

          animateStart(new Date().getTime() + index / this.level * distance, circle, index);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * 停止动画.
     */

  }, {
    key: "stop",
    value: function stop() {
      var _iterator2 = _createForOfIteratorHelper(this.clock),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var caf = _step2.value;
          window.cancelAnimationFrame(caf);
        } //重置覆盖物样式

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(this.circles),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var circle = _step3.value;
          circle.setRadius(0); //半径

          circle.setFillOpacity(this.color.fillOpacity); //透明度

          circle.getStrokeOpacity(this.color.fillOpacity); //透明度
        } // this.clock=null;
        //map.remove(this.Marker);

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * 移除覆盖物.
     */

  }, {
    key: "remove",
    value: function remove() {
      //停止动画
      var _iterator4 = _createForOfIteratorHelper(this.clock),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var caf = _step4.value;
          window.cancelAnimationFrame(caf);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var _iterator5 = _createForOfIteratorHelper(this.circles),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var circle = _step5.value;
          this.map.remove(circle);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }]);

  return ShowWave;
}();

/* harmony default export */ const src = (ShowWave);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});