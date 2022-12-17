module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0277":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_id_517f8bed_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d308");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_id_517f8bed_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_id_517f8bed_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3f3a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "99c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ac4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_id_61c2982a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3f3a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_id_61c2982a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_id_61c2982a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d308":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "vsButton", function() { return /* reexport */ components_vsButton; });
__webpack_require__.d(__webpack_exports__, "vsSelect", function() { return /* reexport */ components_vsSelect; });
__webpack_require__.d(__webpack_exports__, "vsSwitch", function() { return /* reexport */ components_vsSwitch; });
__webpack_require__.d(__webpack_exports__, "vsCheckbox", function() { return /* reexport */ components_vsCheckBox; });
__webpack_require__.d(__webpack_exports__, "vsRadio", function() { return /* reexport */ components_vsRadio; });
__webpack_require__.d(__webpack_exports__, "vsInput", function() { return /* reexport */ components_vsInput; });
__webpack_require__.d(__webpack_exports__, "vsTabs", function() { return /* reexport */ components_vsTabs; });
__webpack_require__.d(__webpack_exports__, "vsSlider", function() { return /* reexport */ components_vsSlider; });
__webpack_require__.d(__webpack_exports__, "vsInputNumber", function() { return /* reexport */ components_vsInputNumber; });
__webpack_require__.d(__webpack_exports__, "vsTooltip", function() { return /* reexport */ components_vsTooltip; });
__webpack_require__.d(__webpack_exports__, "vsUpload", function() { return /* reexport */ components_vsUpload; });
__webpack_require__.d(__webpack_exports__, "vsPopup", function() { return /* reexport */ components_vsPopup; });
__webpack_require__.d(__webpack_exports__, "vsAlert", function() { return /* reexport */ components_vsAlert; });
__webpack_require__.d(__webpack_exports__, "vsChip", function() { return /* reexport */ components_vsChip; });
__webpack_require__.d(__webpack_exports__, "vsProgress", function() { return /* reexport */ components_vsProgress; });
__webpack_require__.d(__webpack_exports__, "vsCard", function() { return /* reexport */ components_vsCard; });
__webpack_require__.d(__webpack_exports__, "vsList", function() { return /* reexport */ components_vsList; });
__webpack_require__.d(__webpack_exports__, "vsAvatar", function() { return /* reexport */ components_vsAvatar; });
__webpack_require__.d(__webpack_exports__, "vsPagination", function() { return /* reexport */ components_vsPagination; });
__webpack_require__.d(__webpack_exports__, "vsBreadcrumb", function() { return /* reexport */ components_vsBreadcrumb; });
__webpack_require__.d(__webpack_exports__, "vsPrompt", function() { return /* reexport */ vsPrompt; });
__webpack_require__.d(__webpack_exports__, "vsDivider", function() { return /* reexport */ components_vsDivider; });
__webpack_require__.d(__webpack_exports__, "vsSpacer", function() { return /* reexport */ components_vsSpacer; });
__webpack_require__.d(__webpack_exports__, "vsIcon", function() { return /* reexport */ components_vsIcon; });
__webpack_require__.d(__webpack_exports__, "vsNavbar", function() { return /* reexport */ components_vsNavbar; });
__webpack_require__.d(__webpack_exports__, "vsSideBar", function() { return /* reexport */ vsSideBar; });
__webpack_require__.d(__webpack_exports__, "vsDropDown", function() { return /* reexport */ components_vsDropDown; });
__webpack_require__.d(__webpack_exports__, "vsTable", function() { return /* reexport */ components_vsTable; });
__webpack_require__.d(__webpack_exports__, "vsTextarea", function() { return /* reexport */ components_vsTextarea; });
__webpack_require__.d(__webpack_exports__, "vsCollapse", function() { return /* reexport */ components_vsCollapse; });
__webpack_require__.d(__webpack_exports__, "vsImages", function() { return /* reexport */ components_vsImages; });
__webpack_require__.d(__webpack_exports__, "vsRow", function() { return /* reexport */ layout_vsRow; });
__webpack_require__.d(__webpack_exports__, "vsCol", function() { return /* reexport */ layout_vsCol; });

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "vsButton", function() { return components_vsButton; });
__webpack_require__.d(components_namespaceObject, "vsSelect", function() { return components_vsSelect; });
__webpack_require__.d(components_namespaceObject, "vsSwitch", function() { return components_vsSwitch; });
__webpack_require__.d(components_namespaceObject, "vsCheckbox", function() { return components_vsCheckBox; });
__webpack_require__.d(components_namespaceObject, "vsRadio", function() { return components_vsRadio; });
__webpack_require__.d(components_namespaceObject, "vsInput", function() { return components_vsInput; });
__webpack_require__.d(components_namespaceObject, "vsTabs", function() { return components_vsTabs; });
__webpack_require__.d(components_namespaceObject, "vsSlider", function() { return components_vsSlider; });
__webpack_require__.d(components_namespaceObject, "vsInputNumber", function() { return components_vsInputNumber; });
__webpack_require__.d(components_namespaceObject, "vsTooltip", function() { return components_vsTooltip; });
__webpack_require__.d(components_namespaceObject, "vsUpload", function() { return components_vsUpload; });
__webpack_require__.d(components_namespaceObject, "vsPopup", function() { return components_vsPopup; });
__webpack_require__.d(components_namespaceObject, "vsAlert", function() { return components_vsAlert; });
__webpack_require__.d(components_namespaceObject, "vsChip", function() { return components_vsChip; });
__webpack_require__.d(components_namespaceObject, "vsProgress", function() { return components_vsProgress; });
__webpack_require__.d(components_namespaceObject, "vsCard", function() { return components_vsCard; });
__webpack_require__.d(components_namespaceObject, "vsList", function() { return components_vsList; });
__webpack_require__.d(components_namespaceObject, "vsAvatar", function() { return components_vsAvatar; });
__webpack_require__.d(components_namespaceObject, "vsPagination", function() { return components_vsPagination; });
__webpack_require__.d(components_namespaceObject, "vsBreadcrumb", function() { return components_vsBreadcrumb; });
__webpack_require__.d(components_namespaceObject, "vsPrompt", function() { return vsPrompt; });
__webpack_require__.d(components_namespaceObject, "vsDivider", function() { return components_vsDivider; });
__webpack_require__.d(components_namespaceObject, "vsSpacer", function() { return components_vsSpacer; });
__webpack_require__.d(components_namespaceObject, "vsIcon", function() { return components_vsIcon; });
__webpack_require__.d(components_namespaceObject, "vsNavbar", function() { return components_vsNavbar; });
__webpack_require__.d(components_namespaceObject, "vsSideBar", function() { return vsSideBar; });
__webpack_require__.d(components_namespaceObject, "vsDropDown", function() { return components_vsDropDown; });
__webpack_require__.d(components_namespaceObject, "vsTable", function() { return components_vsTable; });
__webpack_require__.d(components_namespaceObject, "vsTextarea", function() { return components_vsTextarea; });
__webpack_require__.d(components_namespaceObject, "vsCollapse", function() { return components_vsCollapse; });
__webpack_require__.d(components_namespaceObject, "vsImages", function() { return components_vsImages; });
__webpack_require__.d(components_namespaceObject, "vsRow", function() { return layout_vsRow; });
__webpack_require__.d(components_namespaceObject, "vsCol", function() { return layout_vsCol; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsButton/vsButton.vue?vue&type=template&id=3e8b34eb&lang=html&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',_vm._g(_vm._b({ref:"btn",staticClass:"vs-component vs-button",class:[`vs-button-${_vm.isColor() ? _vm.color : null}`,`vs-button-${_vm.type}`,{
    'isActive':_vm.isActive,
    'includeIcon':_vm.icon,
    'includeIconOnly':_vm.icon && !_vm.$slots.default,
    'vs-radius':_vm.radius
  }, _vm.size],style:([_vm.styles,{
    'width':/[px]/.test(_vm.size) ? `${_vm.size}` : null,
    'height':/[px]/.test(_vm.size) ? `${_vm.size}` : null
  }]),attrs:{"type":_vm.button,"name":"button"}},'button',_vm.$attrs,false),_vm.listeners),[(!_vm.is('line')&&!_vm.is('gradient')&&!_vm.is('relief'))?_c('span',{ref:"backgroundx",staticClass:"vs-button-backgroundx vs-button--background",style:(_vm.stylesBackGround)}):_vm._e(),(_vm.icon)?_c('vs-icon',{staticClass:"vs-button--icon",style:({
      'order':_vm.iconAfter ? 2 : 0,
      ['margin-' + _vm.isRTL('left')]: _vm.$slots.default && !_vm.iconAfter ? '5px' : '0px',
      ['margin-' + _vm.isRTL('right')]: _vm.$slots.default && _vm.iconAfter ? '5px' : '0px'
    }),attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}):_vm._e(),(_vm.$slots.default)?_c('span',{staticClass:"vs-button-text vs-button--text"},[_vm._t("default")],2):_vm._e(),_c('span',{ref:"linex",staticClass:"vs-button-linex",style:(_vm.styleLine)})],1)
}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue?vue&type=template&id=3e8b34eb&lang=html&

// CONCATENATED MODULE: ./src/utils/color.js
/* harmony default export */ var utils_color = ({
  darken(color, percent) {
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
  },
  getColor(colorx, alphax = 1, defaultx = true){
    // change color hex to RGB
    if(/^[#]/.test(colorx)){
      let c = this.hexToRgb(colorx)

      if(alphax == 1){
        colorx = `rgb(${c.r},${c.g},${c.b})`

      } else {
        colorx = `rgba(${c.r},${c.g},${c.b},${alphax})`

      }
    } else if (/^rgba/.test(colorx)) {

      if(colorx.search(/.([0-9]\))$/)==-1 && !defaultx){
        colorx = colorx.replace(/.?([0-9]\))$/,`${alphax})`)
      }


    } else if (/^(rgb)/.test(colorx)) {
    // change rgb and rgba
      if(alphax != 1){
        colorx = colorx.replace(/^(rgb)/,`rgba`)
        colorx = colorx.replace(/\)$/,`,${alphax})`)
      }

    }
    return colorx
  },
  isColor(colorx){
    let vscolors = ['primary','secondary','success','danger','warning','dark', 'light']
    return vscolors.includes(colorx)
  },
  RandomColor(){
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
  },
  rColor(colorx,opacity=1){
    if(/^[#]/.test(colorx)){
      let c = this.hexToRgb(colorx)
      colorx = `rgba(${c.r},${c.g},${c.b},${opacity})`
    } else if (/^[rgb]/.test(colorx)){
      let colorSplit = colorx.split(')')[0]
      if(!/^[rgba]/.test(colorx)){
        colorSplit.replace('rgb','rgba')
        colorSplit += `,${opacity})`
      } else {
        // colorSplit.replace('rgb','rgba')
        colorSplit += `)`
      }
      colorx = colorSplit
    }

    let vscolors = ['primary','success','danger','warning','dark']
    if(colorx){
      if(/[#()]/.test(colorx)){
        return colorx
      } else {
        if(vscolors.includes(colorx)){
          return `rgba(var(--vs-${colorx}),${opacity})`
        } else {
          return `rgba(var(--vs-primary),${opacity})`
        }
      }
    } else {
      return `rgba(var(--vs-primary),${opacity})`
    }
  },
  contrastColor(elementx) {
    let c = elementx
    if(/[#]/g.test(elementx)){
      let rgbx = this.hexToRgb(elementx)
      c = `rgb(${rgbx.r},${rgbx.g},${rgbx.b})`
    }
    var rgb = c.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
    var yiq = ((rgb[0]*299)+(rgb[1]*587)+(rgb[2]*114))/1000;
    if(yiq >= 128){
      return true
    } else {
      return false
    }
  },
  setCssVariable(propertyName, value) {
    if(typeof window !== 'undefined'){
      document.documentElement.style.setProperty(propertyName, value);
    }
  },
  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  getVariable(styles, propertyName) {
    return String(styles.getPropertyValue(propertyName)).trim();
  },
  changeColor(colorInicial){
    let colores = ['primary','success','danger','warning','dark']
    let colorx

    if(colores.includes(colorInicial)){
      let style = getComputedStyle(document.documentElement)
      colorx = this.getVariable(style,'--vs-'+colorInicial)
    } else {
      if(/[rgb()]/g.test(colorInicial)){
        colorx = colorInicial.replace(/[rgb()]/g,'')
      } else if(/[#]/g.test(colorInicial)){
        let rgbx = this.hexToRgb(colorInicial)
        colorx = `${rgbx.r},${rgbx.g},${rgbx.b}`
      } else {
        colorx = '--vs-'+colorInicial
      }
    }
    return colorx
    // this.setCssVariable('--vs-'+clave,colorx)
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsButton/vsButton.vue?vue&type=script&lang=js&


/* harmony default export */ var vsButtonvue_type_script_lang_js_ = ({
  name:'VsButton',
  inheritAttrs:false,
  props:{
    type:{
      default:'filled',
      type:String
    },
    color:{
      default:'primary',
      type:String
    },
    textColor:{
      default:null,
      type:String
    },
    lineOrigin:{
      default:'center',
      type:String
    },
    linePosition:{
      default:'bottom',
      type:String
    },
    gradientDirection:{
      default:'30deg',
      type:String
    },
    gradientColorSecondary:{
      default:'primary',
      type:String
    },
    size:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    iconAfter:{
      default:false,
      type:Boolean
    },
    radius:{
      default:false,
      type:Boolean
    },
    to:{
      default:false,
      type:String | Object
    },
    href:{
      default:'',
      type:String | Object
    },
    target:{
      default:false,
      type:[Boolean, String]
    },
    button:{
      default:'button',
      type:String
    }
  },
  data:()=>({
    isActive:false,
    hoverx:false,
    leftBackgorund:20,
    topBackgorund:20,
    radio:0,
    time:0.3,
    timeOpacity:0.3,
    opacity:1,
  }),
  computed:{
    listeners() {
      return {
        ...this.$listeners,
        click: (event) => this.clickButton(event),
        blur: (event) => this.blurButton(event),
        mouseover: (event) => this.mouseoverx(event),
        mouseout: (event) => this.mouseoutx(event)
      }
    },
    styles() {
      if(this.is('filled')){
        return {
          color: utils_color.getColor(this.textColor, 1),
          background: utils_color.getColor(this.color, 1),
          boxShadow: this.hoverx ? `0px 8px 25px -8px ${utils_color.getColor(this.color, 1)}` : null
        }
      } else if (this.is('border') || this.is('flat')){
        return {
          border: `${this.is('flat') ? 0 : 1}px solid ${utils_color.getColor(this.color, 1)}`,
          background: this.hoverx?utils_color.getColor(this.color, .1) : 'transparent',
          color:utils_color.getColor(this.textColor, 1) || utils_color.getColor(this.color, 1)
        }
      } else if (this.is('line')) {
        return {
          color:utils_color.getColor(this.textColor, 1) || utils_color.getColor(this.color, 1),
          borderBottomWidth: this.linePosition == 'bottom' ? `2px` : null,
          borderColor: `${utils_color.getColor(this.color, .2)}`,
          borderTopWidth: this.linePosition == 'top' ? `2px` : null,
        }
      } else if (this.is('gradient')) {
        let backgroundx = `linear-gradient(${this.gradientDirection}, ${utils_color.getColor(this.color)} 0%, ${utils_color.getColor(this.gradientColorSecondary, 1)} 100%)`
        return {
          background: backgroundx,
        }
      } else if (this.is('relief')) {
        let color = utils_color.getColor(this.color, 1)
        return {
          background: utils_color.getColor(this.color, 1),
          boxShadow: `0 3px 0 0 ${utils_color.darken(color, -0.4)}`
        }
      }
    },
    stylesBackGround(){
      let styles = {
        background: this.is('flat') || this.is('border') ? utils_color.getColor(this.color, 1, false) : null,
        opacity: this.opacity,
        left: `${this.leftBackgorund}px`,
        top: `${this.topBackgorund}px`,
        width: `${this.radio}px`,
        height: `${this.radio}px`,
        transition: `width ${this.time}s ease, height ${this.time}s ease, opacity ${this.timeOpacity}s ease`
      }

      return styles

    },
    styleLine(){
      let lineOrigin = '50%'
      if(this.lineOrigin == 'left'){
        lineOrigin = '0%'
      } else if (this.lineOrigin == 'right') {
        lineOrigin = 'auto'
      }

      let styles = {
        top: this.linePosition == 'top' ? '-2px' : 'auto',
        bottom: this.linePosition == 'bottom' ? '-2px' : 'auto',
        background: utils_color.getColor(this.color, 1),
        left: lineOrigin,
        right: lineOrigin == 'auto' ? '0px' : null,
        transform: lineOrigin == '50%' ? 'translate(-50%)' : null
      }

      return styles
    }
  },
  methods:{
    isRTL(value) {
      if(this.$vs.rtl) {
        return value
      }else {
        if(value === 'right') {
          return 'left'
        }
        if(value === 'left') {
          return 'right'
        }
      }
    },
    routerPush() {
      this.$router.push(this.to).catch(err => { this.$emit("routeErr", err) })
    },
    is(which){
      let type = this.type
      return type == which
    },
    mouseoverx(event){
      this.$emit('mouseover', event)
      this.hoverx = true
    },
    mouseoutx(event){
      this.$emit('mouseout', event)
      this.hoverx = false
    },
    blurButton(event){
      this.$emit('blur',event)
      this.$nextTick(() => {
        if(this.type == 'border' || this.type == 'flat'){
          this.opacity = 0
          setTimeout( () => {
            this.radio = 0
          }, 150)
          this.isActive = false
        }
      });
      
    },
    clickButton(event){
      this.$emit('click', event)
      this.$nextTick(() => {
        if(this.isActive){
          return
        }
        if(this.to){
          this.routerPush()
        }
        if(this.href){
          if ( typeof(this.href) == 'string') {
            this.target ? window.open(this.href) : window.location.href = this.href
          } else {
            this.target ? window.open(this.href.url) : window.location.href = this.href.url
          }
        }
        if (this.type == 'border' || this.type == 'flat') {
          this.isActive = true
        }
        let btn = this.$refs.btn
        let xEvent = event.offsetX
        let yEvent = event.offsetY
        let radio = btn.clientWidth * 3
        this.time  = btn.clientWidth / (btn.clientWidth + (this.is('border') || this.is('flat') ? 70 : 20))
        if(this.is('filled')){
          this.timeOpacity = this.time
        }

        if(event.srcElement ? event.srcElement != btn : false) {
          xEvent += event.target.offsetLeft
          yEvent += event.target.offsetTop
        }
        this.leftBackgorund = xEvent
        this.topBackgorund = yEvent
        this.radio = radio
        if(this.is('filled')){
          this.opacity = 0
        } else {
          this.opacity = 1
        }

        if(this.is('filled')){
          setTimeout( () => {
            this.time = this.timeOpacity = this.radio = 0
            this.opacity = 1
            this.isActive = false
          }, this.time * 1100)
        } else {
          setTimeout( () => {
            this.timeOpacity = .15
          }, this.time * 1100)
        }
      });
      

    },
    isColor(){
      return utils_color.isColor(this.color)
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsButton_vsButtonvue_type_script_lang_js_ = (vsButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue





/* normalize component */

var component = normalizeComponent(
  vsButton_vsButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsButton = (component.exports);
// CONCATENATED MODULE: ./src/components/vsButton/index.js


/* harmony default export */ var components_vsButton = (Vue => {
  Vue.component(vsButton.name, vsButton)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelect.vue?vue&type=template&id=41c46ea3&lang=html&
var vsSelectvue_type_template_id_41c46ea3_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"con-select",class:{
    'autocompletex':_vm.autocomplete,
    'activeOptions':_vm.active,
    'input-select-validate-success':_vm.success,
    'input-select-validate-danger':_vm.danger,
    'input-select-validate-warning':_vm.warning},style:(_vm.getWidth)},[(_vm.label)?_c('label',{ref:"inputSelectLabel",staticClass:"vs-select--label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"input-select-con"},[_c('input',_vm._g(_vm._b({ref:"inputselect",staticClass:"input-select vs-select--input",attrs:{"readonly":!_vm.autocomplete,"type":"text"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"]))return null;$event.stopPropagation();$event.preventDefault();return _vm.closeOptions.apply(null, arguments)}}},'input',_vm.$attrs,false),_vm.listeners)),_c('button',{staticClass:"icon-select-clear vs-select--icon-clear",class:{'activeBtnClear': _vm.activeBtnClear},on:{"click":_vm.clearValue}},[_c('i',{staticClass:"material-icons"},[_vm._v("\n        close\n      ")])]),(!_vm.activeBtnClear)?_c('vs-icon',{staticClass:"icon-select vs-select--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}):_vm._e(),_c('transition',{attrs:{"name":"fadeselect"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],ref:"vsSelectOptions",staticClass:"vs-select--options",class:[`vs-select-${_vm.color}`,{'scrollx':_vm.scrollx}],style:(_vm.cords)},[_c('ul',{ref:"ulx"},[_vm._t("default")],2),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.clear),expression:"clear"}]},[_c('li',{on:{"click":function($event){_vm.filterItems(''),_vm.changeValue()}}},[_vm._v("\n            "+_vm._s(_vm.noData)+"\n          ")])])])])],1),_c('transition-group',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.success)?_c('div',{key:"success",staticClass:"con-text-validation"},[_c('span',{staticClass:"span-text-validation span-text-validation-success"},[_vm._v("\n        "+_vm._s(_vm.successText)+"\n      ")])]):(_vm.danger)?_c('div',{key:"danger",staticClass:"con-text-validation span-text-validation-danger"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.dangerText)+"\n      ")])]):(_vm.warning)?_c('div',{key:"warning",staticClass:"con-text-validation span-text-validation-warning"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.warningText)+"\n      ")])]):_vm._e(),(_vm.descriptionText)?_c('div',{key:"description",staticClass:"con-text-validation span-text-validation"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.descriptionText)+"\n      ")])]):_vm._e()])],1)
}
var vsSelectvue_type_template_id_41c46ea3_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue?vue&type=template&id=41c46ea3&lang=html&

// CONCATENATED MODULE: ./src/utils/index.js
/* harmony default export */ var utils = ({
  insertBody(elx, parent){
    let bodyx = parent ? parent : document.body
    bodyx.insertBefore(elx, bodyx.firstChild)
  },
  removeBody(element, parent) {
    let bodyx = parent ? parent : document.body
    bodyx.removeChild(element);
  },
  changePosition(elx,content,conditional){
    let topx = 0
    let leftx = 0
    let widthx = 0
    let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
    if(elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout( ()=> {
        if(conditional){
          topx = (elx.getBoundingClientRect().top - content.clientHeight) + scrollTopx
        } else {
          topx = (elx.getBoundingClientRect().top - content.clientHeight + elx.clientHeight) + scrollTopx
        }
      }, 1);

    } else {
      topx = conditional?(elx.getBoundingClientRect().top + elx.clientHeight) + scrollTopx + 5:elx.getBoundingClientRect().top + scrollTopx
    }

    leftx = elx.getBoundingClientRect().left
    widthx = elx.offsetWidth

    let cords = {
      left: `${leftx}px`,
      top: `${topx}px`,
      width: `${widthx}px`
    }

    return cords
  },
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelect.vue?vue&type=script&lang=js&


/* harmony default export */ var vsSelectvue_type_script_lang_js_ = ({
  name: "VsSelect",
  props: {
    value: {},
    noData: {
      default: "No data available",
      type: String
    },
    maxSelected: {
      default: null,
      type: [Number, String]
    },
    autocomplete: {
      default: false,
      type: Boolean
    },
    color: {
      default: "primary",
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    label: {
      default: null,
      type: [String]
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    icon: {
      default: "keyboard_arrow_down",
      type: String
    },
    iconClear: {
      default: "close",
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  data: () => ({
    valueFilter: "",
    active: false,
    valuex: "",
    clear: false,
    scrollx: false,
    cords: {},
    filterx: false
  }),
  computed: {
    activeBtnClear() {
      return this.autocomplete && this.filterx;
    },
    getWidth() {
      return this.width ? `width:${this.width};` : null;
    },
    parent() {
      return this;
    },
    listeners() {
      return {
        ...this.$listeners,
        blur: event => {
          if (
            this.autocomplete && event.relatedTarget
              ? !event.relatedTarget.closest(".vs-select--options")
              : false
          ) {
            this.closeOptions();
          }
          this.$emit("blur", event);
        },
        focus: event => {
          this.$emit("focus", event);
          if (event.keyCode ? event.keyCode : event.which) {
            this.focus();
          }
        },
        mouseup: () => {
          this.focus();
        },
        input: event => {
          if (this.autocomplete) {
            this.$emit("input-change", event);
          }
        },
        keyup: event => {
          if (event.key == "ArrowDown" || event.key == "ArrowUp") {
            event.preventDefault();
            let childrens = this.$children.filter(item => {
              return item.visible;
            });
            childrens[0].$el.querySelector(".vs-select--item").focus();
          } else {
            if (this.autocomplete) {
              this.filterItems(event.target.value);
            }
          }

          this.$children.map(item => {
            item.valueInputx = this.$refs.inputselect.value;
          });
        }
      };
    }
  },
  watch: {
    value(event) {
      this.valuex = this.value;
      this.$emit("change", event);
    },
    active() {
      this.$nextTick(() => {
        if (this.active) {
          utils.insertBody(this.$refs.vsSelectOptions);
          setTimeout(() => {
            this.$children.forEach(item => {
              if (item.focusValue) {
                item.focusValue();
              }
            });
            if (this.$refs.ulx.scrollHeight >= 260) this.scrollx = true;
          }, 100);
        } else {
          let [parent] = document.getElementsByTagName("body");
          parent.removeChild(this.$refs.vsSelectOptions);
        }
      });
    }
  },
  mounted() {
    // this.$refs.inputselect.value = this.value
    this.changeValue();
    if (this.active) {
      utils.insertBody(this.$refs.vsSelectOptions);
    }
  },
  beforeDestroy() {
    let [parent] = document.getElementsByTagName("body");

    if (this.active) {
      this.closeOptions();
    }
    if (
      parent &&
      this.$refs.vsSelectOptions &&
      this.$refs.vsSelectOptions.parentNode === parent
    ) {
      parent.removeChild(this.$refs.vsSelectOptions);
    }
  },
  updated() {
    if (!this.active) {
      this.changeValue();
    }
  },
  methods: {
    clearValue() {
      this.focus();
      this.filterItems("");
      this.changeValue();
    },
    addMultiple(value) {
      let currentValues = this.value ? this.value : [];
      if (currentValues.includes(value)) {
        currentValues.splice(currentValues.indexOf(value), 1);
        this.$emit("input", currentValues);
        this.changeValue();
        if (this.autocomplete) {
          this.$refs.inputselect.focus();
        }
      } else {
        if (this.autocomplete) {
          currentValues.push(value);
          this.$emit("input", currentValues);
          this.filterItems("");
          this.changeValue();
          // this.$refs.inputselect.value += ','
          this.$refs.inputselect.focus();
        } else {
          currentValues.push(value);
          this.$emit("input", currentValues);
          this.changeValue();
        }
      }
    },
    filterItems(value) {
      if (value) {
        this.filterx = true;
      } else {
        this.filterx = false;
      }
      let items = this.$children;

      items.forEach(item => {
        if (item.$children.length > 0) {
          items = [...items, ...item.$children];
        }
      });

      items.map(item => {
        if (!("text" in item)) return;

        let text = item.text;

        if (this.multiple) {
          let valuesx = value.split(",");
          valuesx.forEach(value_multi => {
            if (text.toUpperCase().indexOf(value_multi.toUpperCase()) == -1) {
              item.visible = false;
            } else {
              item.visible = true;
            }
          });
        } else {
          if (text.toUpperCase().indexOf(value.toUpperCase()) == -1) {
            item.visible = false;
          } else {
            item.visible = true;
          }
        }
      });

      let lengthx = items.filter(item => {
        return item.visible;
      });

      if (lengthx.length == 0) {
        this.clear = true;
      } else {
        this.clear = false;
      }

      this.$nextTick(() => {
        this.cords = this.changePosition();
      });
    },
    changeValue() {
      this.filterx = false;
      if (this.multiple) {
        let values = this.value ? this.value : [];
        let options = this.$children;

        options.forEach(item => {
          if (item.$children.length > 0) {
            options = [...options, ...item.$children];
          }
        });

        let optionsValues = [];
        values.forEach(item => {
          options.forEach(item_option => {
            if (item_option.value == item) {
              let text = item_option.text;
              text = text.replace("check_circle", "");
              optionsValues.push(text.trim());
            }
          });
        });
        this.$refs.inputselect.value = optionsValues.toString();
      } else {
        if (this.$refs.inputselect) {
          this.$refs.inputselect.value = this.valuex;
        }
      }
    },
    focus() {
      this.active = true;
      document.addEventListener('click', this.clickBlur);
      this.setLabelClass(this.$refs.inputSelectLabel, true);
      let inputx = this.$refs.inputselect;
      if (this.autocomplete && this.multiple) {
        setTimeout(() => {
          if (inputx.value) {
            this.$refs.inputselect.value = inputx.value += ",";
          }
          inputx.selectionStart = inputx.selectionEnd = 10000;
        }, 10);
      } else if (this.autocomplete && !this.multiple) {
        this.$refs.inputselect.select();
      }

      if (!this.autocomplete) {
        if (
          this.multiple ? this.value.length == 0 : !this.value || this.multiple
        ) {
          setTimeout(() => {
            const el = this.$children[0].$el.querySelector(".vs-select--item");
            if (el) el.focus();
          }, 50);
        }
      }
      this.$nextTick(() => {
        this.cords = this.changePosition();
      });
    },
    clickBlur(event) {
      if (event.target === this.$refs.inputselect) {
        return
      }
      let closestx = event.target.closest(".vs-select--option");

      if (!closestx) {
        this.closeOptions();
        if (this.autocomplete) {
          this.filterItems("");
        }
        this.changeValue();
      }
    },
    closeOptions() {
      this.active = false;
      this.setLabelClass(this.$refs.inputSelectLabel, false);
      document.removeEventListener("click", this.clickBlur);
    },
    changePosition() {
      let elx = this.$refs.inputselect;
      let content = this.$refs.vsSelectOptions;
      let conditional = this.autocomplete;
      let topx = 0;
      let leftx = 0;
      let widthx = 0;
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if (
        elx.getBoundingClientRect().top + content.scrollHeight + 20 >=
        window.innerHeight
      ) {
        topx =
          elx.getBoundingClientRect().top +
          elx.clientHeight +
          scrollTopx -
          content.scrollHeight;
        if (conditional) {
          topx = topx - elx.clientHeight - 5;
        }
      } else {
        topx = conditional
          ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5
          : elx.getBoundingClientRect().top + scrollTopx;
      }

      leftx = elx.getBoundingClientRect().left;
      widthx = elx.offsetWidth;

      let cords = {
        left: `${leftx}px`,
        top: `${topx}px`,
        width: `${widthx}px`
      };

      return cords;
    },
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el, done) {
      let h = el.scrollHeight;
      el.style.height = h + "px";
      done();
    },
    leave: function(el) {
      el.style.height = 0 + "px";
    },
    setLabelClass: function(label, focusing) {
      if (!label) {
        return;
      }

      if (focusing) {
        label.classList.add("input-select-label-" + this.color + "--active");
        return;
      }

      label.classList.remove("input-select-label-" + this.color + "--active");
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSelect_vsSelectvue_type_script_lang_js_ = (vsSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue





/* normalize component */

var vsSelect_component = normalizeComponent(
  vsSelect_vsSelectvue_type_script_lang_js_,
  vsSelectvue_type_template_id_41c46ea3_lang_html_render,
  vsSelectvue_type_template_id_41c46ea3_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSelect = (vsSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectItem.vue?vue&type=template&id=2247f336&lang=html&
var vsSelectItemvue_type_template_id_2247f336_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('li',_vm._g({directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"vs-component",attrs:{"data-text":_vm.text}},_vm.listeners),[_c('button',_vm._b({ref:"item",staticClass:"vs-select--item",class:{
      'activex':_vm.$parent.parent.multiple?_vm.getValue.indexOf(_vm.value) != -1:_vm.getValue == _vm.value,
      'con-icon':_vm.$parent.parent.multiple,
      'disabledx':_vm.disabledx
    },style:(_vm.styles),attrs:{"disabled":_vm.disabled,"type":"button","name":"button"},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"backspace",undefined,$event.key,undefined))return null;$event.preventDefault();return _vm.backspace.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"]))return null;$event.preventDefault();return _vm.navigateOptions('next')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"]))return null;$event.preventDefault();return _vm.navigateOptions('prev')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter"))return null;$event.preventDefault();return _vm.clickOption()}]}},'button',_vm.$attrs,false),[(_vm.$parent.parent.multiple)?_c('vs-icon',{staticClass:"icon-item vs-select--item-icon",attrs:{"icon":"check_circle"}}):_vm._e(),_c('span',{domProps:{"innerHTML":_vm._s(_vm.getText)}})],1)])
}
var vsSelectItemvue_type_template_id_2247f336_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue?vue&type=template&id=2247f336&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectItem.vue?vue&type=script&lang=js&


/* harmony default export */ var vsSelectItemvue_type_script_lang_js_ = ({
  name:'VsSelectItem',
  inheritAttrs:false,
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    value:{
      default:null,
    },
    text:{
      default:null,
    }
  },
  data:()=>({
    hoverx:false,
    visible:true,
    getText:null,
    valueInputx:''
  }),
  computed:{
    disabledx(){
      if(this.$parent.parent.multiple){
        if(this.isActive){
          return false
        } else {
          return this.$parent.parent.maxSelected == this.$parent.parent.value.length
        }
      } else {
        return false
      }
    },
    isActive(){
      return this.$parent.parent.multiple?this.getValue.indexOf(this.value) != -1:this.getValue == this.value
    },
    listeners() {
      return {
        ...this.$listeners,
        blur: (event) => {
          if(event.relatedTarget?!event.relatedTarget.closest('.vs-select--options'):true) {
            this.$parent.parent.closeOptions()
          }
        },
        click: (event) => this.clickOption(event),
        mouseover: (event) => {
          this.$emit('mouseover',event)
          this.changeHover(true)
        },
        mouseout: (event) => {
          this.$emit('mouseover',event)
          this.changeHover(false)
        }
      }
    },
    styles(){
      return {
        background: this.isActive?utils_color.getColor(this.$parent.parent.color,.1):null,
        color: this.isActive?utils_color.getColor(this.$parent.parent.color,1):null,
        fontWeight: this.isActive?'bold':null
      }
    },
    getValue(){
      return this.$parent.parent.value
    }
  },
  watch:{
    '$parent.parent.active': function () {
      this.$nextTick(() => {
        if( this.$parent.parent.multiple?this.getValue.indexOf(this.value) != -1:this.getValue == this.value ) {
          this.$emit('update:isSelected', true)
          this.getText = this.text
          this.putValue()
        } else {
          this.$emit('update:isSelected', false)
          this.getText = this.text
          this.putValue()
        }
      })
    },
    valueInputx(){
      if(this.visible){
        let valueInputx = this.valueInputx.split(',')
        if(valueInputx[valueInputx.length-1] == ''){
          this.getText = this.text
          return
        }
        let valuex = valueInputx[valueInputx.length-1]
        var re = new RegExp(valuex,"i");
        if(this.text.toUpperCase().indexOf(valuex.toUpperCase()) == 0){
          valuex = this.MaysPrimera(valuex)
        }
        let text = this.text.replace(re,`<span class="searchx">${valuex}</span>`)
        this.getText = text
      } else {
        this.getText = this.text
      }
    }
  },
  created(){
    this.putValue()
    this.$nextTick(() => {
      if( this.$parent.parent.multiple?this.getValue.indexOf(this.value) != -1:this.getValue == this.value ) {
        this.$emit('update:isSelected', true)
        this.getText = this.text
        this.putValue()
      } else {
        this.$emit('update:isSelected', false)
        this.getText = this.text
        this.putValue()
      }
    })
  },
  updated(){
    this.putValue()
  },
  methods:{
    changeHover(booleanx){
      this.hoverx = booleanx
    },
    MaysPrimera(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    backspace(){
      if(this.$parent.parent.autocomplete){
        let valueInput = this.$parent.parent.$refs.inputselect.value
        this.$parent.parent.$refs.inputselect.value = valueInput.substr(0,valueInput.length-1)
        this.$parent.parent.$refs.inputselect.focus()
      }
    },
    navigateOptions(orientation){
      let
        orientationObject = 'nextSibling',
        lengthx = 0

      function getNextLi(li,orientationObject){
        if(li && li.localName == 'li'){
          let lix = li[orientationObject]
          if(li.style){
            if(li.style.display == 'none'){
              return getNextLi(lix,orientationObject)
            } else {
              return li
            }
          } else {
            return li
          }
        } else {
          return false
        }
      }

      var children = this.$parent.parent.$children

      children.forEach((item)=>{
        if(item.$children.length > 0) {
          children = [...children,...item.$children]
        }
      })

      children = children.filter((item) => {
        return item.$children.length == 0 && item.$el.localName != 'span'
      })

      if(orientation == 'prev'){
        orientationObject = 'previousSibling'
        lengthx = children.length
      }
      let nextElement = getNextLi(this.$el[orientationObject],orientationObject)

      if(nextElement){
        nextElement.querySelector('.vs-select--item').focus()
      } else {
        if (lengthx === children.length) lengthx--
        getNextLi(children[lengthx == 0?1:lengthx].$el,orientationObject).querySelector('.vs-select--item').focus()
      }
    },
    focusValue(index){
      if(this.$parent.parent.multiple?this.$parent.parent.value.indexOf(this.value) != -1:this.value == this.$parent.parent.value){
        if(!this.$parent.parent.autocomplete){
          setTimeout( () => {
            this.$refs.item.focus()
          }, 50);
        }
      } else if (index === 0) {
        if(!this.$parent.parent.autocomplete){
          setTimeout( () => {
            this.$refs.item.focus()
          }, 50);
        }
      }
    },
    putValue(){
      if(this.value == this.$parent.parent.value){
        this.$parent.parent.valuex = this.text
      }

    },
    clickOption(){
      if(this.disabledx){
        return
      }
      let text = this.text
      if(!this.$parent.parent.multiple){
        this.$parent.parent.active = false
        document.removeEventListener('click',this.$parent.parent.clickBlur)
        this.$parent.parent.valuex = text
        this.$parent.parent.$emit('input',this.value)
        this.$parent.parent.changeValue()
      } else if (this.$parent.parent.multiple) {
        this.$parent.parent.valuex = text
        this.$parent.parent.addMultiple(this.value)
      }
      this.$parent.parent.$children.map((item)=>{
        item.valueInputx = ''
      })
    },

    // methods colors
    isColor(){
      return utils_color.isColor(this.color)
    },
  }
});

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSelect_vsSelectItemvue_type_script_lang_js_ = (vsSelectItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue





/* normalize component */

var vsSelectItem_component = normalizeComponent(
  vsSelect_vsSelectItemvue_type_script_lang_js_,
  vsSelectItemvue_type_template_id_2247f336_lang_html_render,
  vsSelectItemvue_type_template_id_2247f336_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSelectItem = (vsSelectItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectGroup.vue?vue&type=template&id=e3d354fc&
var vsSelectGroupvue_type_template_id_e3d354fc_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-select-group"},[(!_vm.filterx)?_c('h4',[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._t("default")],2)
}
var vsSelectGroupvue_type_template_id_e3d354fc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue?vue&type=template&id=e3d354fc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectGroup.vue?vue&type=script&lang=js&

/* harmony default export */ var vsSelectGroupvue_type_script_lang_js_ = ({
  name:'VsSelectGroup',
  props:{
    title:{
      default: 'Group',
      type: String
    }
  },
  data: () => ({
    activeTitle: true
  }),
  computed:{
    filterx() {
      return this.$parent.filterx
    },
    parent(){
      return this.$parent
    }
  },
  methods:{
    focusValue(index) {
      this.$children[0].focusValue(index)
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSelect_vsSelectGroupvue_type_script_lang_js_ = (vsSelectGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue





/* normalize component */

var vsSelectGroup_component = normalizeComponent(
  vsSelect_vsSelectGroupvue_type_script_lang_js_,
  vsSelectGroupvue_type_template_id_e3d354fc_render,
  vsSelectGroupvue_type_template_id_e3d354fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSelectGroup = (vsSelectGroup_component.exports);
// CONCATENATED MODULE: ./src/components/vsSelect/index.js




/* harmony default export */ var components_vsSelect = (Vue => {
  Vue.component(vsSelect.name, vsSelect)
  Vue.component(vsSelectItem.name, vsSelectItem)
  Vue.component(vsSelectGroup.name, vsSelectGroup)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSwitch/vsSwitch.vue?vue&type=template&id=1529e6a0&lang=html&
var vsSwitchvue_type_template_id_1529e6a0_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',_vm._b({staticClass:"vs-component vs-switch",class:[
    `vs-switch-${_vm.color}`,
    {
      'vs-switch-active':_vm.isChecked || _vm.$attrs.checked
    }
  ],style:(_vm.style)},'button',_vm.$attrs,false),[_c('input',_vm._g(_vm._b({ref:"inputCheckbox",staticClass:"input-switch vs-switch--input",attrs:{"disabled":_vm.$attrs.disabled,"type":"checkbox"},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{ref:"on",staticClass:"text-on text-switch vs-switch--text",class:{'active-text':_vm.isChecked || _vm.$attrs.checked}},[_vm._t("on"),_c('vs-icon',{staticClass:"icons-switch vs-switch--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.vsIconOn || _vm.vsIcon}})],2),_c('span',{ref:"off",staticClass:"text-off text-switch vs-switch--text",class:{'active-text':!_vm.isChecked && !_vm.$attrs.checked}},[_vm._t("off"),_c('vs-icon',{staticClass:"icons-switch vs-switch--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.vsIconOff || _vm.vsIcon}})],2),_c('span',{staticClass:"vs-circle-switch vs-switch--circle"})])
}
var vsSwitchvue_type_template_id_1529e6a0_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue?vue&type=template&id=1529e6a0&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSwitch/vsSwitch.vue?vue&type=script&lang=js&


/* harmony default export */ var vsSwitchvue_type_script_lang_js_ = ({
  name:'VsSwitch',
  inheritAttrs:false,
  props:{
    value:{},
    color:{
      default:'primary',
      type:String
    },
    vsIcon:{
      default:null,
      type:String
    },
    vsIconOn:{
      default:null,
      type:String
    },
    vsIconOff:{
      default:null,
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    vsValue:{}
  },
  data:()=>({
    widthx:42,
    checkboxClicked: false,
  }),
  computed:{
    style(){
      return {
        background: this.value?utils_color.getColor(this.color,1):null,
        width: `${this.widthx}px`
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.toggleValue(evt)
        },
      }
    },
    isChecked(){
      return this.isArrayx() ? this.isArrayIncludes() : this.value
    },
  },
  mounted(){
    this.$nextTick(()=>{
      let w = this.$refs.on.clientWidth>this.$refs.off.clientWidth?this.$refs.on.clientWidth:this.$refs.off.clientWidth
      this.widthx = w + 24
    })

  },
  methods:{
    toggleValue(evt){
      if(Array.isArray(this.value)){
        this.setArray(evt)
      }
      else {
        this.$emit('input', !this.value)
        this.$emit('change',evt)
      }
    },
    setArray(evt){
      const value = this.value.slice(0) // Copy Array.
      if(this.isArrayIncludes()){
        value.splice(value.indexOf(this.vsValue),1) // delete value
        this.$emit('input', value)
        this.$emit('change', evt)
      } else {
        value.push(this.vsValue) // add value new
        this.$emit('input', value)
        this.$emit('change', evt)
      }
    },
    isArrayIncludes(){
      let modelx = this.value
      let value = this.vsValue
      return modelx.includes(value)
    },
    isArrayx(){
      return Array.isArray(this.value)
    }
  },
});

// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSwitch_vsSwitchvue_type_script_lang_js_ = (vsSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue





/* normalize component */

var vsSwitch_component = normalizeComponent(
  vsSwitch_vsSwitchvue_type_script_lang_js_,
  vsSwitchvue_type_template_id_1529e6a0_lang_html_render,
  vsSwitchvue_type_template_id_1529e6a0_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSwitch = (vsSwitch_component.exports);
// CONCATENATED MODULE: ./src/components/vsSwitch/index.js


/* harmony default export */ var components_vsSwitch = (Vue => {
  Vue.component(vsSwitch.name, vsSwitch)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCheckBox/vsCheckBox.vue?vue&type=template&id=3519d395&lang=html&
var vsCheckBoxvue_type_template_id_3519d395_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-component con-vs-checkbox",class:[`vs-checkbox-${_vm.color}`, `vs-checkbox-${_vm.size}`]},[_c('input',_vm._g(_vm._b({staticClass:"vs-checkbox--input",attrs:{"type":"checkbox"},domProps:{"checked":_vm.isChecked || _vm.$attrs.checked,"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{staticClass:"checkbox_x vs-checkbox",style:(_vm.style)},[_c('span',{staticClass:"vs-checkbox--check",style:(_vm.style_check)},[_c('vs-icon',{staticClass:"vs-checkbox--icon",attrs:{"icon":_vm.icon,"icon-pack":_vm.iconPack}})],1)]),_c('span',{staticClass:"con-slot-label"},[_vm._t("default")],2)])
}
var vsCheckBoxvue_type_template_id_3519d395_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue?vue&type=template&id=3519d395&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCheckBox/vsCheckBox.vue?vue&type=script&lang=js&


/* harmony default export */ var vsCheckBoxvue_type_script_lang_js_ = ({
  name:'VsCheckbox',
  inheritAttrs: false,
  props:{
    color:{
      default:'primary',
      type:String,
    },
    value:{},
    icon:{
      default:'check',
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    vsValue:{
      type:[Boolean,Array,String,Number,Object],
      default:false
    },
    size:{
      default: 'default',
      type: String
    }
  },
  computed:{
    style_check() {
      return {
        background: this.isChecked ? utils_color.getColor(this.color, 1) : null,
      }
    },
    style() {
      return {
        border: `2px solid ${this.isChecked ? utils_color.getColor(this.color, 1) : 'rgb(180, 180, 180)'}`,
      }
    },
    listeners() {
      return {
        // ...this.$listeners,
        change: (evt) => {
          this.toggleValue(evt)
        },
        // input: (evt) => {
        //   this.toggleValue(evt)
        // }
      }
    },
    isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.value
    },
  },
  methods:{
    giveColor(color) {
      return utils_color.rColor(color)
    },
    toggleValue(evt) {
      if(this.isArrayx()) {
        this.setArray()
      } else if (typeof(this.vsValue) == 'string') {
        this.setValueString()
      }
      else {
        this.$emit('input', !this.value)
        this.$emit('change', evt)
      }
    },
    setArray() {
      // Copy Array
      const value = this.value.slice(0)
      if(this.isArrayIncludes()) {
        value.splice(value.indexOf(this.vsValue), 1)
        this.$emit('input', value)
        this.$emit('change', value)
      } else {
        value.push(this.vsValue)
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    setValueString() {
      if(this.value == this.vsValue) {
        this.$emit('input', null)
        this.$emit('change', null)
      } else {
        this.$emit('input', this.vsValue)
        this.$emit('change', this.vsValue)
      }
    },
    isArrayIncludes() {
      let modelx = this.value
      let value = this.vsValue
      return modelx.includes(value)
    },
    isArrayx() {
      return Array.isArray(this.value)
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCheckBox_vsCheckBoxvue_type_script_lang_js_ = (vsCheckBoxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue





/* normalize component */

var vsCheckBox_component = normalizeComponent(
  vsCheckBox_vsCheckBoxvue_type_script_lang_js_,
  vsCheckBoxvue_type_template_id_3519d395_lang_html_render,
  vsCheckBoxvue_type_template_id_3519d395_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCheckBox = (vsCheckBox_component.exports);
// CONCATENATED MODULE: ./src/components/vsCheckBox/index.js


/* harmony default export */ var components_vsCheckBox = (Vue => {
  Vue.component(vsCheckBox.name, vsCheckBox)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsRadio/vsRadio.vue?vue&type=template&id=0c37efa3&lang=html&
var vsRadiovue_type_template_id_0c37efa3_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('label',{staticClass:"vs-component con-vs-radio",class:[`vs-radio-${_vm.color}`]},[_c('input',_vm._g(_vm._b({staticClass:"vs-radio--input",attrs:{"name":_vm.vsName || _vm.value,"type":"radio"},domProps:{"checked":_vm.isChecked,"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{staticClass:"vs-radio"},[_c('span',{staticClass:"vs-radio--borde",style:(_vm.styles)}),_c('span',{staticClass:"vs-radio--circle",style:(_vm.styleCircle)})]),_c('span',{staticClass:"vs-radio--label"},[_vm._t("default")],2)])
}
var vsRadiovue_type_template_id_0c37efa3_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue?vue&type=template&id=0c37efa3&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsRadio/vsRadio.vue?vue&type=script&lang=js&


/* harmony default export */ var vsRadiovue_type_script_lang_js_ = ({
  name:'VsRadio',
  inheritAttrs:false,
  props:{
    value:{},
    vsValue:{},
    vsName:{},
    color:{
      default:'primary',
      type:String
    }
  },
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        input: () => this.$emit('input', this.vsValue),
        click: () => this.$emit('input', this.vsValue)
      }
    },
    attrs(){
      let attrsx = JSON.parse(JSON.stringify(this.$attrs))
      return {
        attrsx
      }
    },
    isChecked(){
      return this.vsValue == this.value
    },
    styles(){
      return {
        'border': `2px solid ${this.isChecked?utils_color.getColor(this.color,1):'rgb(200, 200, 200)'}`
      }
    },
    styleCircle(){
      return {
        'background': utils_color.getColor(this.color,1),
        'box-shadow': `0px 3px 12px 0px ${utils_color.getColor(this.color,.4)}`
      }
    }
  },
  methods:{
    giveColor(color,opacity){
      return utils_color.rColor(color,opacity)
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsRadio_vsRadiovue_type_script_lang_js_ = (vsRadiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue





/* normalize component */

var vsRadio_component = normalizeComponent(
  vsRadio_vsRadiovue_type_script_lang_js_,
  vsRadiovue_type_template_id_0c37efa3_lang_html_render,
  vsRadiovue_type_template_id_0c37efa3_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsRadio = (vsRadio_component.exports);
// CONCATENATED MODULE: ./src/components/vsRadio/index.js


/* harmony default export */ var components_vsRadio = (Vue => {
  Vue.component(vsRadio.name, vsRadio)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInput/vsInput.vue?vue&type=template&id=5e5503a8&lang=html&
var vsInputvue_type_template_id_5e5503a8_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"coninput",staticClass:"vs-component vs-con-input-label vs-input",class:[`vs-input-${_vm.color}`,{
    'isFocus':_vm.isFocus,
    'input-icon-validate-success':_vm.success,
    'input-icon-validate-danger':_vm.danger,
    'input-icon-validate-warning':_vm.warning,
    'is-label-placeholder':_vm.labelPlaceholder
  }],style:(_vm.styleLabel)},[(_vm.labelPlaceholder?false:_vm.label)?_c('label',{staticClass:"vs-input--label",attrs:{"for":""},on:{"click":_vm.focusInput}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"vs-con-input"},[_c('input',_vm._g(_vm._b({ref:"vsinput",staticClass:"vs-inputx vs-input--input",class:[_vm.size,{
        'hasValue':_vm.value !== '',
        'hasIcon':_vm.icon,
        'icon-after-input':_vm.iconAfter
      }],style:(_vm.style),attrs:{"autofocus":_vm.autofocus,"placeholder":null,"type":_vm.$attrs.type?_vm.$attrs.type:'text'},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('transition',{attrs:{"name":"placeholderx"}},[(_vm.isValue&&(_vm.labelPlaceholder||_vm.$attrs.placeholder))?_c('span',{ref:"spanplaceholder",staticClass:"input-span-placeholder vs-input--placeholder",class:[
          _vm.labelPlaceholder&&(_vm.size),
          _vm.size,
          {
            'vs-placeholder-label': _vm.labelPlaceholder,
        }],style:(_vm.styleLabel),on:{"click":_vm.focusInput}},[_vm._v("\n        "+_vm._s(_vm.$attrs.placeholder || _vm.labelPlaceholder)+"\n      ")]):_vm._e()]),(_vm.icon)?_c('vs-icon',{staticClass:"icon-inputx notranslate vs-input--icon",class:{'icon-after':_vm.iconAfter, 'icon-no-border':_vm.iconNoBorder},attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon},on:{"click":function($event){_vm.focusInput(); _vm.$emit('icon-click');}}}):_vm._e(),_c('transition',{attrs:{"name":"icon-validate"}},[(_vm.success || _vm.danger || _vm.warning)?_c('span',{staticClass:"input-icon-validate vs-input--icon-validate",class:{'icon-before':_vm.iconAfter}},[_c('vs-icon',{class:{'icon-before':_vm.iconAfter},attrs:{"icon-pack":_vm.valIconPack,"icon":_vm.getIcon}})],1):_vm._e()])],1),_c('transition-group',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.success)?_c('div',{key:"success",staticClass:"con-text-validation vs-input--text-validation"},[_c('span',{staticClass:"span-text-validation span-text-validation-success vs-input--text-validation-span"},[_vm._v("\n        "+_vm._s(_vm.successText)+"\n      ")])]):(_vm.danger)?_c('div',{key:"danger",staticClass:"con-text-validation span-text-validation-danger vs-input--text-validation-span"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.dangerText)+"\n      ")])]):(_vm.warning)?_c('div',{key:"warning",staticClass:"con-text-validation span-text-validation-warning vs-input--text-validation-span"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.warningText)+"\n      ")])]):_vm._e(),(_vm.descriptionText)?_c('div',{key:"description",staticClass:"con-text-validation span-text-validation vs-input--text-validation-span"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.descriptionText)+"\n      ")])]):_vm._e()])],1)
}
var vsInputvue_type_template_id_5e5503a8_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue?vue&type=template&id=5e5503a8&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInput/vsInput.vue?vue&type=script&lang=js&


/* harmony default export */ var vsInputvue_type_script_lang_js_ = ({
  name:'VsInput',
  inheritAttrs: false,
  props:{
    value:{
      default:'',
      type:[String,Number]
    },
    labelPlaceholder:{
      default:null,
      type:[String,Number]
    },
    label:{
      default:null,
      type:[String,Number]
    },
    autofocus:{
      default:false,
      type:[Boolean,String]
    },
    icon:{
      default:null,
      type:String
    },
    iconAfter:{
      default:false,
      type:[Boolean,String]
    },
    iconNoBorder:{
      default:false,
      type:Boolean
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    color:{
      default:'primary',
      type:String
    },
    success:{
      default:false,
      type:Boolean
    },
    danger:{
      default:false,
      type:Boolean
    },
    warning:{
      default:false,
      type:Boolean
    },
    successText:{
      default: null,
      type:String
    },
    dangerText:{
      default: null,
      type:String
    },
    warningText:{
      default: null,
      type:String
    },
    descriptionText:{
      default: null,
      type:String
    },
    size:{
      default:'normal',
      type:String
    },
    valIconPack:{
      default:'material-icons',
      type:String
    },
    valIconSuccess:{
      default: null,
      type:String
    },
    valIconDanger:{
      default: null,
      type:String
    },
    valIconWarning:{
      default: null,
      type:String
    },
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data:()=>({
    isFocus:false
  }),
  computed:{
    style(){
      return {
        border: `1px solid ${this.isFocus?utils_color.getColor(this.color,1):'rgba(0, 0, 0,.2)'}`,
      }
    },
    styleLabel(){
      return {
        color: this.isFocus?utils_color.getColor(this.color,1):null,
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.$emit('input',evt.target.value)
        },
        focus: (evt) => {
          this.$emit('focus',evt)
          this.changeFocus(true)
        },
        blur: (evt) => {
          this.$emit('blur',evt)
          this.changeFocus(false)
        }
      }
    },
    isValue(){
      return this.labelPlaceholder?true:!this.value
    },
    getIcon(){
      return this.danger  ? this.valIconDanger
           : this.warning ? this.valIconWarning
           : this.success ? this.valIconSuccess
           : ''
    },
  },
  methods:{
    // animation
    changeFocus(booleanx) {
      this.isFocus = booleanx
    },
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h + 'px'
      done()
    },
    leave: function (el) {
      el.style.height = 0 + 'px'
    },
    focusInput(){
      this.$refs.vsinput.focus()
    }
  },
});

// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsInput_vsInputvue_type_script_lang_js_ = (vsInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue





/* normalize component */

var vsInput_component = normalizeComponent(
  vsInput_vsInputvue_type_script_lang_js_,
  vsInputvue_type_template_id_5e5503a8_lang_html_render,
  vsInputvue_type_template_id_5e5503a8_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsInput = (vsInput_component.exports);
// CONCATENATED MODULE: ./src/components/vsInput/index.js


/* harmony default export */ var components_vsInput = (Vue => {
  Vue.component(vsInput.name, vsInput)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTabs.vue?vue&type=template&id=0bf87e8c&lang=html&
var vsTabsvue_type_template_id_0bf87e8c_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"con-vs-tabs vs-tabs",class:[`vs-tabs-${_vm.color}`,`vs-tabs-position-${_vm.position}`]},[_c('div',{staticClass:"con-ul-tabs"},[_c('ul',{ref:"ul",staticClass:"ul-tabs vs-tabs--ul",class:[`ul-tabs-${_vm.alignment}`]},_vm._l((_vm.children),function(child,index){return _c('li',{ref:"li",refInFor:true,staticClass:"vs-tabs--li",class:{'activeChild':_vm.childActive == index},style:(_vm.childActive == index ? _vm.styleTab : {}),on:{"mouseover":function($event){_vm.hover = true},"mouseout":function($event){_vm.hover = false}}},[_c('button',_vm._g(_vm._b({staticClass:"vs-tabs--btn",style:(_vm.styleAlignIcon(child.icon)),attrs:{"type":"button"},on:{"click":function($event){return _vm.activeChild(index)}}},'button',child.attrs,false),child.listeners),[(child.icon)?_c('vs-icon',{staticClass:"vs-tabs--btn-icon",attrs:{"icon-pack":child.iconPack,"icon":child.icon,"color":_vm.color}}):_vm._e(),(child.label)?_c('span',[_vm._v(_vm._s(child.label))]):_vm._e()],1),(child.tag)?_c('button',{staticClass:"vs-tabs--btn-tag",on:{"click":function($event){return _vm.clickTag(child)}}},[_c('vs-icon',{attrs:{"icon-pack":child.iconPack,"icon":child.tag,"color":child.tagColor}})],1):_vm._e()])}),0),_c('span',{staticClass:"line-vs-tabs",style:(_vm.stylex)})]),_c('div',{staticClass:"con-slot-tabs"},[_vm._t("default")],2)])
}
var vsTabsvue_type_template_id_0bf87e8c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue?vue&type=template&id=0bf87e8c&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsIcon/vsIcon.vue?vue&type=template&id=791767ed&
var vsIconvue_type_template_id_791767ed_render = function render(){var _vm=this,_c=_vm._self._c;return _c('i',_vm._g(_vm._b({staticClass:"vs-icon notranslate icon-scale",class:[_vm.iconPack, _vm.iconPack !='material-icons' ? _vm.icon : '',_vm.iconClass,_vm.getBg,_vm.getBgSize,{'round':_vm.round}],style:(_vm.iconStyle)},'i',_vm.$attrs,false),_vm.$listeners),[_vm._t("default",function(){return [_vm._v(_vm._s(_vm.iconPack == 'material-icons' ? _vm.icon : ''))]})],2)
}
var vsIconvue_type_template_id_791767ed_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue?vue&type=template&id=791767ed&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsIcon/vsIcon.vue?vue&type=script&lang=js&



/* harmony default export */ var vsIconvue_type_script_lang_js_ = ({
  name:'VsIcon',
  props:{
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    color: {
      default: null,
      type: String
    },
    bg: {
      default: null,
      type: String
    },
    size: {
      default: null,
      type: String
    },
    round: {
      default: false,
      type: Boolean
    },

  },
  computed:{
    iconClass() {
      const classes = {}
      classes[this.size] = true
      if (utils_color.isColor(this.color)) {
        classes[`vs-icon-${this.color}`] = true
      }
      return classes
    },
    iconStyle() {
      const style = {
        width: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        height: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        'font-size': /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        color: this.getColor,
        background: this.getBgColor
      }
      return style
    },
    getBg() {
      const classes = {}

      if (utils_color.isColor(this.bg)) {
        classes[`con-vs-icon-bg-${this.bg}`] = true
      }

      return classes
    },
    getBgSize() {
      const classes = {}
      if(['small','medium','large'].includes(this.size))  {
        classes[`bg-${this.size}`] = true;
        classes['vs-icon-bg'] = true;
      }

      return classes
    },
    getColor() {
      return utils_color.isColor(this.color) ? this.color : this.color;
    },
    getBgColor() {
      return utils_color.isColor(this.bg) ? this.bg : this.bg;
    },
  },
});

// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsIcon_vsIconvue_type_script_lang_js_ = (vsIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue





/* normalize component */

var vsIcon_component = normalizeComponent(
  vsIcon_vsIconvue_type_script_lang_js_,
  vsIconvue_type_template_id_791767ed_render,
  vsIconvue_type_template_id_791767ed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsIcon = (vsIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTabs.vue?vue&type=script&lang=js&



/* harmony default export */ var vsTabsvue_type_script_lang_js_ = ({
  name:'VsTabs',
  components:{vsIcon: vsIcon},
  props:{
    value: {
      default: 0,
      type: [Number, String],
    },
    color:{
      default:'primary',
      type: String
    },
    tagColor:{
      default:'primary',
      type: String
    },
    alignment:{
      default:'left',
      type:String,
    },
    position:{
      default:'top',
      type:String
    }
  },
  data:()=>({
    topx:'auto',
    heightx:2,
    hover:false,
    children:[],
    childActive:0,
    leftx:0,
    widthx:0,
    these:false,
  }),
  computed:{
    styleTab(){
      return {
        color: utils_color.getColor(this.color,1),
      }
    },
    stylex(){
      return {
        top: `${this.topx}px`,
        left: `${this.leftx}px`,
        width: `${this.widthx}px`,
        height: `${this.heightx}px`,
        background: `linear-gradient(30deg, ${utils_color.getColor(this.color,1)} 0%, ${utils_color.getColor(this.color,.5)} 100%)`,
        boxShadow: `0px 0px 8px 0px ${utils_color.getColor(this.color,.5)}`,
        transform: `scaleX(${this.these?1.3:1})`
      }
    }
  },
  watch: {
    value(index) {
      const activeIndex = this.parseIndex(index)
      this.activeChild(activeIndex)
    },
  },
  mounted(){
    const activeIndex = this.parseIndex(this.value)
    this.childActive = activeIndex
    this.$nextTick(() => {
      this.activeChild(activeIndex, true)
    })
  },
  methods:{
    clickTag(child) {
      this.$emit('click-tag', child)
    },
    styleAlignIcon(icon){
      return icon ? 'display:flex;align-items:center' : ''
    },
    parseIndex(index) {
      let activeIndex = this.childActive
      if (index < 0) {
        activeIndex = 0
      } else if (index >= this.$children.length) {
        activeIndex = this.$children.length - 1;
      } else if (typeof this.$children[index].$attrs.disabled === 'undefined') {
        activeIndex = parseInt(index);
      }
      return activeIndex;
    },
    activeChild(index, initialAnimation){
      initialAnimation = !!initialAnimation;
      const elem = this.$refs.li[index]
      if(this.childActive == index && !initialAnimation){
        this.these = true
        elem.classList.add('isActive')
        setTimeout(()=>{
          elem.classList.remove('isActive')
          this.these = false
        }, 200);
      }

      this.$children.map((item,item_index)=>{
        if(item_index != index) {
          item.active = false
        }
      })

      if(this.childActive > index){
        this.$children[index].invert = true
        this.$children[this.childActive].invert = false
      } else {
        this.$children[this.childActive].invert = true
        this.$children[index].invert = false
      }

      this.$children[index].active = true
      this.childActive = index
      this.$emit('input', this.childActive)

      if(this.position == 'left' || this.position == 'right'){
        this.$children[index].vertical = true
      }

      this.changePositionLine(elem, initialAnimation)

    },
    changePositionLine(elem, initialAnimation){
      if(this.position == 'left' || this.position == 'right'){
        this.topx = elem.offsetTop
        this.heightx = elem.offsetHeight
        this.widthx = 2
      } else {
        const update = () => {
          this.leftx = elem.offsetLeft
          this.widthx = elem.offsetWidth
          this.topx = (elem.offsetHeight + (elem.getBoundingClientRect().top - this.$refs.ul.getBoundingClientRect().top))
        }
        if (!initialAnimation) {
          update()
        } else {
          setTimeout(update, 100)
        }
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTabs_vsTabsvue_type_script_lang_js_ = (vsTabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue





/* normalize component */

var vsTabs_component = normalizeComponent(
  vsTabs_vsTabsvue_type_script_lang_js_,
  vsTabsvue_type_template_id_0bf87e8c_lang_html_render,
  vsTabsvue_type_template_id_0bf87e8c_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTabs = (vsTabs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTab.vue?vue&type=template&id=68182bc2&lang=html&
var vsTabvue_type_template_id_68182bc2_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":_vm.invert?_vm.vertical?'fade-tab-vertical-invert':'fade-tab-invert':_vm.vertical?'fade-tab-vertical':'fade-tab'}},[(_vm.active)?_c('div',{staticClass:"con-tab vs-tabs--content"},[_vm._t("default")],2):_vm._e()])
}
var vsTabvue_type_template_id_68182bc2_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue?vue&type=template&id=68182bc2&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTab.vue?vue&type=script&lang=js&

/* harmony default export */ var vsTabvue_type_script_lang_js_ = ({
  name:'VsTab',
  inheritAttrs: false,
  props:{
    label:{
      default:'Label',
      type:String
    },
    icon:{
      default:'',
      type:String
    },
    tag:{
      default:'',
      type:String
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
  },
  data:()=>({
    vertical:false,
    active:false,
    id:null,
    invert:false
  }),
  watch: {
    label(val) {
      this.$parent.children[this.id].label = val;
    },
    '$attrs' (val) {
      this.$parent.children[this.id].attrs = val;
    }
  },
  mounted(){
    this.id = this.$parent.children.length
    this.$parent.children.push({
      label: this.label,
      icon: this.icon,
      iconPack: this.iconPack,
      tag: this.tag,
      id: this.$parent.children.length,
      listeners: this.$listeners,
      attrs: this.$attrs
    })
  }
});

// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTabs_vsTabvue_type_script_lang_js_ = (vsTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue





/* normalize component */

var vsTab_component = normalizeComponent(
  vsTabs_vsTabvue_type_script_lang_js_,
  vsTabvue_type_template_id_68182bc2_lang_html_render,
  vsTabvue_type_template_id_68182bc2_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTab = (vsTab_component.exports);
// CONCATENATED MODULE: ./src/components/vsTabs/index.js



/* harmony default export */ var components_vsTabs = (Vue => {
  Vue.component(vsTabs.name, vsTabs)
  Vue.component(vsTab.name, vsTab)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSlider/vsSlider.vue?vue&type=template&id=cd89adc6&lang=html&
var vsSlidervue_type_template_id_cd89adc6_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"con-vs-slider",class:[
    `vs-slider-${_vm.color}`,
    {'disabledx':_vm.disabled}
  ],on:{"mousewheel":function($event){$event.preventDefault();return _vm.mousewheelx.apply(null, arguments)},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"]))return null;if('button' in $event && $event.button !== 0)return null;return _vm.keydownLeft.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"]))return null;if('button' in $event && $event.button !== 2)return null;return _vm.keydownRight.apply(null, arguments)}]}},[_c('button',{ref:"slider",staticClass:"vs-slider",attrs:{"disabled":_vm.disabled,"type":"button"},on:{"click":function($event){_vm.clickSlider($event),_vm.actived = true}}},[_c('span',{staticClass:"vs-slider-line-one",class:{'hasTransition':_vm.effect},style:(_vm.styleLineOne)}),_c('span',{staticClass:"vs-slider-line-two"}),_c('span',{staticClass:"vs-slider-line-efect",class:{'run-effect':_vm.effect},style:(_vm.styleEfect)}),_vm._l((_vm.countTicks),function(tick,index){return (_vm.ticks&&tick)?_c('span',{staticClass:"vs-slider--tick",class:{'isEnd':index == _vm.countTicks-1},style:(_vm.styleTicks(index))}):_vm._e()})],2),_c('button',{ref:"circle1",staticClass:"vs-circle-slider vs-circles-slider vs-slider--circles vs-slider--circle",class:{
      'hasTransition':_vm.effect,
      'isEquals':_vm.isEquals,
      'changeValue':_vm.changeValue,
      'isEndValue':_vm.value == _vm.max
    },style:(_vm.styleCircle),attrs:{"disabled":_vm.disabled,"type":"button"},on:{"touchstart":function($event){_vm.activeFocus($event),_vm.actived = true},"mousedown":function($event){_vm.activeFocus($event),_vm.actived = true}}},[_c('span',{staticClass:"text-circle-slider vs-slider--circle-text",style:(_vm.styleText)},[_vm._v("\n      "+_vm._s(_vm.valueCircle1)+"\n      "),(_vm.textFixed)?_c('span',[_vm._v("\n        "+_vm._s(_vm.textFixed)+"\n      ")]):_vm._e(),_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],1)]),(Array.isArray(_vm.value))?_c('button',{ref:"circle2",staticClass:"vs-circle-slider-two vs-circles-slider vs-slider--circles vs-slider--circle-two",class:{
      'hasTransition':_vm.effect,
      'isEquals':_vm.isEquals,
      'changeValue':_vm.changeValue,
      'isEndValue':_vm.value == _vm.max
    },style:(_vm.styleCircleTwo),attrs:{"disabled":_vm.disabled,"type":"button"},on:{"touchstart":function($event){_vm.activeFocus($event),_vm.two = true,_vm.actived = true},"mousedown":function($event){_vm.activeFocus($event),_vm.two = true,_vm.actived = true}}},[_c('span',{staticClass:"text-circle-slider vs-slider--circle-text",style:(_vm.styleText)},[_vm._v("\n      "+_vm._s(_vm.valueCircle2)+"\n      "),(_vm.textFixed)?_c('span',[_vm._v("\n        "+_vm._s(_vm.textFixed)+"\n      ")]):_vm._e(),(_vm.icon)?_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n        "+_vm._s(_vm.icon)+"\n      ")]):_vm._e()])]):_vm._e()])
}
var vsSlidervue_type_template_id_cd89adc6_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue?vue&type=template&id=cd89adc6&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSlider/vsSlider.vue?vue&type=script&lang=js&


/* harmony default export */ var vsSlidervue_type_script_lang_js_ = ({
  name: "VsSlider",
  props: {
    value: {},
    disabled: {
      default: false,
      type: [Boolean, String]
    },
    color: {
      default: "primary",
      type: String
    },
    max: {
      default: 100,
      type: [Number, String]
    },
    min: {
      default: 0,
      type: Number
    },
    ticks: {
      default: false,
      type: Boolean
    },
    step: {
      default: 1,
      type: [Number, String]
    },
    stepDecimals: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    textFixed: {
      default: null,
      type: String
    }
  },
  data: () => ({
    leftx: 0,
    leftTwo: 0,
    effect: false,
    two: false,
    actived: false,
    changeValue: false,
    valueCircle1: 0,
    valueCircle2: 0
  }),
  computed: {
    isEquals() {
      return Array.isArray(this.value) ? this.value[0] == this.value[1] : false;
    },
    countTicks() {
      return this.max + 1;
    },
    /*
     * styles component
     */
    styleSlider() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleLineOne() {
      let widthx = this.leftTwo - this.leftx;
      let leftx = this.leftx;
      if (this.leftx > this.leftTwo) {
        widthx = this.leftx - this.leftTwo;
        leftx = this.leftTwo;
      }
      return {
        width: `${widthx}%`,
        left: `${leftx}%`,
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleCircle() {
      return {
        left: `${this.leftx}%`,
        border: `2px solid ${utils_color.getColor(this.color, 1)}`
      };
    },
    styleCircleTwo() {
      return {
        left: `${this.leftTwo}%`,
        border: `2px solid ${utils_color.getColor(this.color, 1)}`
      };
    },
    styleEfect() {
      return {
        left: `${this.leftx}%`,
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleText() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    }
  },
  watch: {
    value() {
      if (!this.actived) {
        this.changePosition();
      }
      this.changeValue = true;
      setTimeout(() => {
        this.changeValue = false;
      }, 300);
      this.$emit("change", this.value);
    },
    leftx() {
      if (Array.isArray(this.value)) {
        if (this.leftx > this.leftTwo) {
          this.valueCircle1 = this.value[1];
        } else {
          this.valueCircle1 = this.value[0];
        }
      } else {
        this.valueCircle1 = this.value;
      }
    },
    leftTwo: {
      handler: function() {
        if (this.leftTwo > this.leftx) {
          this.valueCircle2 = this.value[1];
        } else {
          this.valueCircle2 = this.value[0];
        }
      },
      deep: true
    }
  },
  mounted() {
    this.changePosition();
  },

  methods: {
    mousewheelx(evt) {
      if (!Array.isArray(this.value)) {
        if (evt.wheelDelta > 0) {
          let val = parseFloat(this.value) + parseFloat(this.step);
          val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
          if (this.value >= this.max) {
            val = this.max;
          }
          this.leftx = val;
          this.$emit("input", val);
        } else {
          let val = parseFloat(this.value) - parseFloat(this.step);
          val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
          if (this.value <= this.min) {
            val = this.min;
          }
          this.leftx = val;
          this.$emit("input", val);
        }
      }
    },
    keydownLeft() {
      if (!Array.isArray(this.value)) {
        let val = parseFloat(this.value) - parseFloat(this.step);
        val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
        if (this.value == this.min) {
          val = this.min;
        }
        this.leftx = val;
        this.$emit("input", val);
      }
    },
    keydownRight() {
      if (!Array.isArray(this.value)) {
        let val = parseFloat(this.value) + parseFloat(this.step);
        val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
        if (this.value >= this.max) {
          val = this.max;
        }
        this.leftx = val;
        this.$emit("input", val);
      }
    },
    changePosition() {
      if (Array.isArray(this.value)) {
        this.leftx = ((this.value[1] - this.min) / (this.max - this.min)) * 100;
        this.leftTwo =
          ((this.value[0] - this.min) / (this.max - this.min)) * 100;
      } else {
        this.leftx = ((this.value - this.min) / (this.max - this.min)) * 100;
      }
    },
    styleTicks(index) {
      let lengthPerStep = 100 / ((this.max - this.min) / this.step);
      let steps = index / lengthPerStep;
      return {
        left: steps * lengthPerStep + "%"
      };
    },
    activeFocus() {
      window.addEventListener("mousemove", this.mouseMovex);
      window.addEventListener("mouseup", this.removeEvents);
      window.addEventListener("touchmove", this.mouseMovex);
      window.addEventListener("touchend", this.removeEvents);
    },
    mouseMovex(evt) {
      let slider = this.$refs.slider;
      let leftx;
      /*
       * change position left circle and bar
       */
      if (evt.type == "touchmove") {
        leftx =
          event.targetTouches[0].clientX - slider.getBoundingClientRect().left;
      } else {
        leftx = evt.clientX - slider.getBoundingClientRect().left;
      }

      if (Math.sign(leftx) == -1) {
        leftx = 0;
      } else if (leftx > slider.clientWidth) {
        leftx = slider.clientWidth;
      }

      this.changeLeft(leftx);
    },
    removeEvents() {
      this.two = this.actived = false;
      window.removeEventListener("mouseup", this.removeEvents);
      window.removeEventListener("mousemove", this.mouseMovex);
      window.removeEventListener("touchmove", this.mouseMovex);
      window.removeEventListener("touchend", this.removeEvents);
    },
    clickSlider(evt) {
      let slider = this.$refs.slider;
      let leftx = evt.clientX - slider.getBoundingClientRect().left;
      this.effect = true;
      setTimeout(() => {
        this.effect = false;
      }, 200);
      let percentX = Math.round((leftx / slider.clientWidth) * 100);

      if (Array.isArray(this.value)) {
        if (
          Math.abs(percentX - this.leftx) > Math.abs(percentX - this.leftTwo)
        ) {
          this.two = true;
        } else {
          this.two = false;
        }
      }

      this.changeLeft(leftx);
    },
    changeLeft(leftx) {
      let slider = this.$refs.slider;
      let percentX = (leftx / slider.clientWidth) * 100;

      const lengthPerStep = 100 / ((this.max - this.min) / this.step);
      const steps = Math.round(percentX / lengthPerStep);
      let val = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
      val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);

      if (val > this.max) {
        val = this.max;
        this[this.two ? "leftTwo" : "leftx"] = 100;
      } else {
        this[this.two ? "leftTwo" : "leftx"] = steps * lengthPerStep;
      }

      if (Array.isArray(this.value)) {
        let valueNew = val;
        if (val == this.max) {
          valueNew = this.max;
        }
        let vals = this.value;
        let min =
          Math.round((this.leftTwo / 100) * (this.max / this.step)) * this.step;
        let max =
          Math.round((this.leftx / 100) * (this.max / this.step)) * this.step;
        if (this.two) {
          if (min < max) {
            this.$emit("input", [valueNew, vals[1]]);
          } else if (min > max) {
            this.$emit("input", [vals[0], valueNew]);
          } else {
            this.$emit("input", [valueNew, valueNew]);
          }
        } else {
          if (min > max) {
            this.$emit("input", [valueNew, vals[1]]);
          } else if (min < max) {
            this.$emit("input", [vals[0], valueNew]);
          } else {
            this.$emit("input", [valueNew, valueNew]);
          }
        }
      } else {
        this.$emit("input", val);
      }
    },
    toDecimal(value) {
      return parseFloat(value.toFixed(1));
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSlider_vsSlidervue_type_script_lang_js_ = (vsSlidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue





/* normalize component */

var vsSlider_component = normalizeComponent(
  vsSlider_vsSlidervue_type_script_lang_js_,
  vsSlidervue_type_template_id_cd89adc6_lang_html_render,
  vsSlidervue_type_template_id_cd89adc6_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSlider = (vsSlider_component.exports);
// CONCATENATED MODULE: ./src/components/vsSlider/index.js


/* harmony default export */ var components_vsSlider = (Vue => {
  Vue.component(vsSlider.name, vsSlider)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInputNumber/vsInputNumber.vue?vue&type=template&id=05d0647d&lang=html&
var vsInputNumbervue_type_template_id_05d0647d_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-input-number",class:[
    `vs-input-number-size-${_vm.size}`,
    `vs-input-number-${_vm.color}`,
    {'isChangeValue':_vm.isChangeValue}
  ]},[_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.less),expression:"less"}],staticClass:"btn-less vs-input-number--button-less",class:{
      limit:_vm.value <= _vm.min
    },style:({
      background:_vm.getColor
    }),attrs:{"disabled":_vm.$attrs.disabled,"type":"button"}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconDec}})],1),(_vm.label)?_c('span',[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('input',_vm._g(_vm._b({ref:"input",staticClass:"vs-input-number--input",style:(_vm.styleInput),attrs:{"disabled":_vm.isDisabled,"min":_vm.min,"max":_vm.max,"type":"number"},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.plus),expression:"plus"}],staticClass:"btn-plus vs-input-number--button-plus",class:{
      limit:_vm.value >= _vm.max && _vm.max !== null
    },style:({
      background:_vm.getColor
    }),attrs:{"disabled":_vm.$attrs.disabled,"type":"button"}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconInc}})],1)])
}
var vsInputNumbervue_type_template_id_05d0647d_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue?vue&type=template&id=05d0647d&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInputNumber/vsInputNumber.vue?vue&type=script&lang=js&


/* harmony default export */ var vsInputNumbervue_type_script_lang_js_ = ({
  name:'VsInputNumber',
  directives: {
    repeatClick: {
      bind(el, binding, vnode) {
        let intervalx = null;
        let startT;
        const functionx = () => vnode.context[binding.expression].apply();
        const bucle = () => {
          if (new Date() - startT < 100) {
            functionx();
          }
          clearInterval(intervalx);
          intervalx = null;
        };
        const eventx = (e) => {
          if (e.button !== 0) return;
          startT = new Date();
          var escuchando = function() {
            if (bucle) {
              bucle.apply(this, arguments);
            }
            el.removeEventListener('mouseup', escuchando, false);
          };
          el.addEventListener('mouseleave', escuchando ,false);
          el.addEventListener('mouseup', escuchando, false);
          clearInterval(intervalx);
          intervalx = setInterval(functionx, 100);
        }
        el.addEventListener('mousedown', eventx ,false);

      }
    }
  },
  inheritAttrs:false,
  props:{
    value:{},
    color:{
      default:'primary',
      type:String
    },
    label: {
      default: null,
      type: String
    },
    max:{
      default:null,
      type:[Number,String]
    },
    min:{
      default:0,
      type:[Number,String]
    },
    size:{
      default:null,
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    iconDec:{
      default:'remove',
      type:String
    },
    iconInc:{
      default:'add',
      type:String
    },
    step:{
      default:1,
      type:[Number,String]
    },
    isDisabled: {
      type: Boolean,
      default: false,
    }
  },
  data:()=>({
    isChangeValue:false
  }),
  computed:{
    styleInput() {
      return {
        width:`${this.getLength}px`
      }
    },
    getLength(){
      if(this.value){
        return this.value.toString().length * 9.1
      } else {
        return 0
      }
    },
    getColor(){
      return utils_color.getColor(this.color,1)
    },
    listeners(){
      return {
        ...this.$listeners,
        blur:(evt)=>{
          if(parseFloat(this.value) > parseFloat(this.max)) {
            this.$emit('input',this.max)
          } else if (parseFloat(this.value) < parseFloat(this.min)) {
            this.$emit('input',this.min)
            this.$emit('blur',evt)
          }
        },
        input:(evt)=>{
          this.$emit('input',evt.target.value)
        }
      }
    }
  },
  watch:{
    value(){
      this.isChangeValue = true
      setTimeout(()=>{
        this.isChangeValue = false
      },200)
    }
  },
  methods:{
    plus(){
      let newValue
      if(this.value === ''){
        newValue = 0
        this.$emit('input',this.fixPrecision(newValue))
      } else  {
        if(this.max?parseFloat(this.value)<parseFloat(this.max):true){
          newValue = parseFloat(this.value) + parseFloat(this.step)
          this.$emit('input',this.fixPrecision(newValue))
        }
      }
    },
    less(){
      let newValue
      if(this.value === ''){
        newValue = 0
        this.$emit('input',this.fixPrecision(newValue))
      } else  {
        if(this.min?parseFloat(this.value)>parseFloat(this.min):true){
          newValue = parseFloat(this.value) - parseFloat(this.step)
          this.$emit('input',this.fixPrecision(newValue))
        }
      }
    },
    fixPrecision(n) {
      const precision = (this.step + '').split('.')[1];
      return n.toFixed(precision ? precision.length : 0);
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsInputNumber_vsInputNumbervue_type_script_lang_js_ = (vsInputNumbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue





/* normalize component */

var vsInputNumber_component = normalizeComponent(
  vsInputNumber_vsInputNumbervue_type_script_lang_js_,
  vsInputNumbervue_type_template_id_05d0647d_lang_html_render,
  vsInputNumbervue_type_template_id_05d0647d_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsInputNumber = (vsInputNumber_component.exports);
// CONCATENATED MODULE: ./src/components/vsInputNumber/index.js


/* harmony default export */ var components_vsInputNumber = (Vue => {
  Vue.component(vsInputNumber.name, vsInputNumber)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTooltip/vsTooltip.vue?vue&type=template&id=ca4632c0&
var vsTooltipvue_type_template_id_ca4632c0_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"convstooltip",staticClass:"con-vs-tooltip",on:{"mouseleave":_vm.mouseleavex,"mouseenter":_vm.mouseenterx}},[_c('transition',{attrs:{"name":"tooltip-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeTooltip),expression:"activeTooltip"}],ref:"vstooltip",staticClass:"vs-tooltip",class:[`vs-tooltip-${_vm.positionx || _vm.position}`,`vs-tooltip-${_vm.color}`, {'after-none': _vm.noneAfter}],style:(_vm.style)},[_vm._t("content",function(){return [(_vm.title)?_c('h4',[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v("\n        "+_vm._s(_vm.text)+"\n      ")]})],2)]),_vm._t("default")],2)
}
var vsTooltipvue_type_template_id_ca4632c0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue?vue&type=template&id=ca4632c0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTooltip/vsTooltip.vue?vue&type=script&lang=js&



/* harmony default export */ var vsTooltipvue_type_script_lang_js_ = ({
  name:'VsTooltip',
  props:{
    title:{
      default:null,
      type:[String,Number]
    },
    text:{
      default:null,
      type:[String,Number]
    },
    color:{
      default:null,
      type:String
    },
    position:{
      default:'top',
      type:String
    },
    delay:{
      default:'0s',
      type:[Number,String]
    },
    active: {
      default: true,
      type: [Boolean]
    },
    value: Boolean,
  },
  data() {
    return {
      cords:{},
      activeTooltip: this.value,
      widthx: 'auto',
      positionx: null,
      noneAfter: false
    };
  },
  computed:{
    style(){
      return {
        left:this.cords.left,
        top:this.cords.top,
        transitionDelay: this.activeTooltip?this.delay:'0s',
        background:utils_color.getColor(this.color,1),
        width: this.widthx
      }
    }
  },
  watch: {
    value(val) {
      this.activeTooltip = val
    },
    activeTooltip(val) {
      if (this.value !== val) {
        this.$emit('input', val)
      }
    }
  },
  mounted(){
    // utils.insertBody(this.$refs.vstooltip)
  },
  updated() {
    if (!this.$slots.default) {
      this.activeTooltip = false
    }
  },
  beforeDestroy() {
    if(this.$refs.vstooltip && this.activeTooltip) {
      utils.removeBody(this.$refs.vstooltip)
    }
  },
  methods:{
    mouseenterx(){
      if(this.active) {
        this.activeTooltip = true
        this.$nextTick(()=>{
          utils.insertBody(this.$refs.vstooltip)
          this.changePosition(this.$refs.convstooltip,this.$refs.vstooltip)
        })
      }
    },
    mouseleavex(){
      this.activeTooltip = false
      if(this.$refs.vstooltip) {
        utils.removeBody(this.$refs.vstooltip)
      }

    },
    changePosition(elxEvent, tooltip){
      this.noneAfter = false
      this.positionx = null
      let elx = elxEvent.closest('.con-vs-tooltip')
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      let topx = elx.getBoundingClientRect().top + scrollTopx - tooltip.clientHeight - 4
      let leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 + elx.clientWidth / 2
      let widthx = elx.clientWidth

      if(this.position === 'bottom'){
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4
      } else if (this.position === 'left') {
        leftx = elx.getBoundingClientRect().left - tooltip.clientWidth - 4
        topx = elx.getBoundingClientRect().top + scrollTopx + (elx.clientHeight / 2) - (tooltip.clientHeight / 2)
        if (Math.sign(leftx)===-1) {
          leftx = elx.getBoundingClientRect().left
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4
          this.positionx = 'bottom'
          this.noneAfter = true
        }
      } else if (this.position === 'right') {
        leftx = elx.getBoundingClientRect().left + elx.clientWidth + 4
        topx = elx.getBoundingClientRect().top + scrollTopx + (elx.clientHeight / 2) - (tooltip.clientHeight / 2)
        if( window.innerWidth - (leftx + tooltip.clientWidth) <= 20) {
          leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 - 10
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4
          this.positionx = 'bottom'
          this.noneAfter = true
        }
      }



      this.cords = {
        left: `${leftx}px`,
        top: `${topx}px`,
        width: `${widthx}px`
      }

    },
  }
});

// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTooltip_vsTooltipvue_type_script_lang_js_ = (vsTooltipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue





/* normalize component */

var vsTooltip_component = normalizeComponent(
  vsTooltip_vsTooltipvue_type_script_lang_js_,
  vsTooltipvue_type_template_id_ca4632c0_render,
  vsTooltipvue_type_template_id_ca4632c0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTooltip = (vsTooltip_component.exports);
// CONCATENATED MODULE: ./src/components/vsTooltip/index.js


/* harmony default export */ var components_vsTooltip = (Vue => {
  Vue.component(vsTooltip.name, vsTooltip)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/vsUpload.vue?vue&type=template&id=57540f80&
var vsUploadvue_type_template_id_57540f80_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"con-upload"},[(_vm.viewActive)?_c('view-upload',{attrs:{"src":_vm.viewSrc}}):_vm._e(),_c('div',{staticClass:"con-img-upload"},[_vm._l((_vm.getFilesFilter),function(img,index){return _c('div',{key:index,staticClass:"img-upload",class:{
        'fileError':img.error,
        'removeItem':_vm.itemRemove.includes(index)
      }},[_c('button',{staticClass:"btn-x-file",attrs:{"type":"button"},on:{"click":function($event){return _vm.removeFile(index)}}},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n          clear\n        ")])]),(_vm.showUploadButton)?_c('button',{staticClass:"btn-upload-file",class:{
          'on-progress':img.percent,
          'ready-progress':img.percent >= 100
        },style:({
          height: `${img.percent}%`
        }),on:{"click":function($event){return _vm.upload(index)}}},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n          "+_vm._s(img.percent >= 100?img.error?'report_problem':'cloud_done':'cloud_upload')+"\n        ")]),_c('span',[_vm._v(_vm._s(img.percent)+" %")])]):_vm._e(),(img.src)?_c('img',{key:index,style:({
          maxWidth:img.orientation == 'h'?'100%':'none',
          maxHeight:img.orientation == 'w'?'100%':'none'
        }),attrs:{"src":img.src},on:{"touchend":function($event){return _vm.viewImage(img.src,$event)},"click":function($event){return _vm.viewImage(img.src,$event)}}}):_vm._e(),(!img.src)?_c('h4',{staticClass:"text-archive"},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n          description\n        ")]),_c('span',[_vm._v("\n          "+_vm._s(img.name)+"\n        ")])]):_vm._e()])}),_c('div',{staticClass:"con-input-upload",class:{
        'on-progress-all-upload':_vm.percent != 0,
        'is-ready-all-upload':_vm.percent >= 100,
        'disabled-upload':_vm.$attrs.hasOwnProperty('disabled') || _vm.limit?(_vm.srcs.length - _vm.itemRemove.length) >= Number(_vm.limit):false
      }},[_c('input',_vm._b({ref:"fileInput",attrs:{"disabled":_vm.$attrs.disabled || _vm.limit?(_vm.srcs.length - _vm.itemRemove.length) >= Number(_vm.limit):false,"type":"file"},on:{"change":_vm.getFiles}},'input',_vm.$attrs,false)),_c('span',{staticClass:"text-input"},[_vm._v("\n        "+_vm._s(_vm.text)+"\n      ")]),_c('span',{staticClass:"input-progress",style:({
          width:`${_vm.percent}%`
        })}),(_vm.showUploadButton)?_c('button',{staticClass:"btn-upload-all vs-upload--button-upload",attrs:{"disabled":_vm.filesx.length == 0,"type":"button","title":"Upload"},on:{"click":function($event){return _vm.upload('all')}}},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n          cloud_upload\n        ")])]):_vm._e()])],2)],1)
}
var vsUploadvue_type_template_id_57540f80_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue?vue&type=template&id=57540f80&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/viewUpload.vue?vue&type=template&id=31591ed5&
var viewUploadvue_type_template_id_31591ed5_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"view-upload"}},[_c('div',{ref:"view",staticClass:"view-upload",on:{"click":_vm.closeView}},[_c('img',{attrs:{"src":_vm.src,"alt":"image"}})])])
}
var viewUploadvue_type_template_id_31591ed5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue?vue&type=template&id=31591ed5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/viewUpload.vue?vue&type=script&lang=js&

  
  /* harmony default export */ var viewUploadvue_type_script_lang_js_ = ({
    name:'ViewUpload',
    props:{
      active:{
        default:false,
        type:Boolean
      },
      src:{
        default:null,
        type:String
      }
    },
    mounted(){
      utils.insertBody(this.$refs.view)
    },
    upload(){
      utils.insertBody(this.$refs.view)
    },
    methods:{
      closeView(evt){
        if(evt.target.tagName != 'IMG'){
          this.$parent.viewActive = false
        }
      }
    }
  });

// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsUpload_viewUploadvue_type_script_lang_js_ = (viewUploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue





/* normalize component */

var viewUpload_component = normalizeComponent(
  vsUpload_viewUploadvue_type_script_lang_js_,
  viewUploadvue_type_template_id_31591ed5_render,
  viewUploadvue_type_template_id_31591ed5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var viewUpload = (viewUpload_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/vsUpload.vue?vue&type=script&lang=js&

  
  var lastTap = 0;
  /* harmony default export */ var vsUploadvue_type_script_lang_js_ = ({
    name: 'VsUpload',
    components:{
      viewUpload: viewUpload
    },
    inheritAttrs:false,
    props:{
      fileName:{
        default:null,
        type:String
      },
      text:{
        default:'Upload File',
        type:String
      },
      textMax:{
        default:'Maximum of files reached',
        type:String
      },
      limit:{
        default:null,
        type:[Number,String]
      },
      action:{
        default:null,
        type:String
      },
      headers:{
        default:null,
        type:Object
      },
      data: {
        default: null,
        type: Object
      },
      automatic:{
        default: false,
        type: Boolean
      },
      showUploadButton: {
        default: true,
        type: Boolean
      },
      singleUpload: {
        default: false,
        type: Boolean
      }
    },
    data:()=>({
      inputValue:null,
      type:null,
      srcs:[],
      filesx:[],
      itemRemove:[],
      percent:0,
      viewActive:false,
      viewSrc:null,
    }),
    computed:{
      getFilesFilter() {
        let files = this.srcs.filter((item) => {
          return !item.remove
        })

        return files
      },
      postFiles(){
        let postFiles = Array.prototype.slice.call(this.filesx);
        postFiles = postFiles.filter((item)=>{
          return !item.hasOwnProperty('remove') && !item.hasOwnProperty('success');
        })
        return postFiles.length
      },
    },
    watch:{
      percent(){
        if(this.percent >= 100) {
          this.srcs.forEach((file)=>{
            file.percent = 100
          })
          setTimeout(()=>{
            this.percent = 0
          },1000)
        }
      }
    },
    methods:{
      viewImage(src,evt){
        var timeout;

        var eventx = (('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)) ? 'touchstart' : 'click';
        if(eventx == 'click'){
          this.viewActive = true
          this.viewSrc = src
        } else {
          if(evt.type == 'touchend'){
            var currentTime = new Date().getTime();
            var tapLength = currentTime - lastTap;
            clearTimeout(timeout);
            if (tapLength < 500 && tapLength > 0) {
              this.viewActive = true
              this.viewSrc = src
              event.preventDefault();
            }
            lastTap = currentTime;
          }
        }
      },
      removeFile(index){
        this.itemRemove.push(index)
        this.$emit('on-delete', this.filesx[index])
        setTimeout(()=>{
          this.filesx[index].remove = true
        },301)
      },
      getFiles(e) {

        this.$emit('update:vsFile', e.target.value)
        let _this = this
        function uploadImage(e) {
          let orientation = 'h'
          var image = new Image();
          image.src = e.target.result;
          image.onload = function() {
            if(this.width > this.height){
              orientation = 'w'
            }
            switchImage(this,orientation);

          }
        }
        function switchImage(image,orientation) {
          _this.srcs.push({
            src:image.src,
            orientation:orientation,
            type:_this.typex,
            percent:null,
            error:false,
            remove:null
          })
        }

        var files = e.target.files;
        let count = (this.srcs.length - this.itemRemove.length)
        for (const file in files) {


          if (files.hasOwnProperty(file)) {
            if(this.limit) {
              count ++
              if( count > Number(this.limit) ) {
                break
              }
            }

            var reader  = new FileReader();
            const filex = files[file];
            if (/image.*/.test(filex.type)) {
              this.typex = 'image'
              this.filesx.push(filex)
              reader.onload = uploadImage;
              reader.readAsDataURL(filex);
            } else if (/video.*/.test(filex.type)) {
              this.typex = 'video'
              this.filesx.push(filex)
              _this.srcs.push({
                src:null,
                name:filex.name,
                type:'video',
                percent:null,
                error:false,
                remove:null
              })
            } else {
              this.filesx.push(filex)
              _this.srcs.push({
                src:null,
                name:filex.name,
                percent:null,
                error:false,
                remove:null
              })
            }
            this.$emit('change', e.target.value, this.filesx)
          }
        }
        const input = this.$refs.fileInput
        input.type = 'text'
        input.type = 'file'

        if (this.automatic) {
          this.upload('all')
        }
      },
      upload(index) {
        const formData = new FormData();
        let postFiles = Array.prototype.slice.call(this.filesx);
        if(typeof index == 'number'){
          postFiles = [postFiles[index]]
        } else if (index == 'all'){
          postFiles = postFiles.filter((item)=>{
            return !item.hasOwnProperty('remove') && !item.hasOwnProperty('success');
          })
        }

        const data = this.data || {};
        for (var key in data) {
          formData.append(key, data[key]);
        }

        if(this.singleUpload) {
          postFiles.forEach((filex)=>{
            const formData = new FormData();
            for (var key in data) {
              formData.append(key, data[key]);
            }
            formData.append(this.fileName, filex, filex.name)

            this.uploadx(index, formData)
          })
        } else {
          postFiles.forEach((filex)=>{
            formData.append(this.fileName, filex, filex.name)
          })
          this.uploadx(index, formData)
        }
      },
      uploadx(index, formData){
        let self = this
        const xhr = new XMLHttpRequest();

        xhr.onerror = function error(e) {
          self.$emit('on-error',e)
          if(typeof index == 'number'){
            self.srcs[index].error = true
          }
        };

        xhr.onload = function onload(e) {

          if (xhr.status < 200 || xhr.status >= 300) {
            self.$emit('on-error',e)
            if(typeof index == 'number'){
              self.srcs[index].error = true
            }
          } else {
            self.filesx.forEach(function (loaded) {
              loaded.success = true;
            });
            self.$emit('on-success',e)
          }
        }


        if (xhr.upload) {
          xhr.upload.onprogress = function progress(e) {
            if (e.total > 0) {
              let percent = e.loaded / e.total * 100;
              if(typeof index == 'number'){
                self.srcs[index].percent = Math.trunc(percent)
              } else {
                self.percent = Math.trunc(percent)
              }
            }
          };
        }

        xhr.withCredentials = true;

        xhr.open('POST', this.action, true);

        const headers = this.headers || {};

        for (let head in headers) {
          if (headers.hasOwnProperty(head) && headers[head] !== null) {
            xhr.setRequestHeader(head, headers[head]);
          }
        }

        xhr.send(formData)
      },

    }
  });

// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsUpload_vsUploadvue_type_script_lang_js_ = (vsUploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue





/* normalize component */

var vsUpload_component = normalizeComponent(
  vsUpload_vsUploadvue_type_script_lang_js_,
  vsUploadvue_type_template_id_57540f80_render,
  vsUploadvue_type_template_id_57540f80_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsUpload = (vsUpload_component.exports);
// CONCATENATED MODULE: ./src/components/vsUpload/index.js


/* harmony default export */ var components_vsUpload = (Vue => {
  Vue.component(vsUpload.name, vsUpload)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPopup/vsPopup.vue?vue&type=template&id=3b47fefa&lang=html&
var vsPopupvue_type_template_id_3b47fefa_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"popup-t"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],ref:"con",staticClass:"vs-component con-vs-popup",class:[`vs-popup-${_vm.color}`,{'fullscreen':_vm.fullscreen}],on:{"click":function($event){return _vm.close($event,true)}}},[_c('div',{staticClass:"vs-popup--background",style:(_vm.styleCon)}),_c('div',{ref:"popupx",staticClass:"vs-popup",style:(_vm.stylePopup)},[_c('header',{staticClass:"vs-popup--header",style:(_vm.styleHeader)},[_c('div',{staticClass:"vs-popup--title"},[_c('h3',[_vm._v(_vm._s(_vm.title))]),_vm._t("subtitle")],2),(!_vm.buttonCloseHidden)?_c('vs-icon',{ref:"btnclose",staticClass:"vs-popup--close vs-popup--close--icon",style:(_vm.stylePopup),attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconClose},on:{"click":_vm.close}}):_vm._e()],1),_c('div',{staticClass:"vs-popup--content",class:_vm.classContent,style:(_vm.styleContent)},[_vm._t("default")],2)])])])
}
var vsPopupvue_type_template_id_3b47fefa_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue?vue&type=template&id=3b47fefa&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPopup/vsPopup.vue?vue&type=script&lang=js&


/* harmony default export */ var vsPopupvue_type_script_lang_js_ = ({
  name:'VsPopup',
  props:{
    color:{
      default:'primary',
      type:String
    },
    active: {
      default:false,
      type: Boolean
    },
    title:{
      default:'popup',
      type:String
    },
    buttonCloseHidden:{
      default:false,
      type:Boolean
    },
    fullscreen:{
      default:false,
      type:Boolean
    },
    backgroundColor:{
      default:null,
      type:String
    },
    backgroundColorPopup:{
      default:'rgb(255,255,255)',
      type:String
    },
    styleContent:{
      default:null,
      type: String
    },
    classContent:{
      default:null,
      type: String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    iconClose:{
      default:'close',
      type:String
    },
  },
  computed:{
    styleHeader(){
      return {
        color: utils_color.getColor(this.color,1),
      }
    },
    styleAfter(){
      return {
        background: utils_color.getColor(this.color,1)
      }
    },
    styleCon(){
      return {
        background: utils_color.getColor(this.backgroundColor,1)
      }
    },
    stylePopup(){
      return {
        background: utils_color.getColor(this.backgroundColorPopup,1)
      }
    }
  },
  mounted(){
    this.insertBody()
  },
  beforeDestroy() {
    // close the left open prompt
    let elx = this.$refs.con  
    //console.log(elx)  
    if (document.body && elx) {      
      document.body.removeChild(elx)
    }
  },
  methods:{
    giveColor(color){
      return utils_color.rColor(color)
    },
    close(event,con){
      if(con){
        if(event.target.className
            && event.target.className.indexOf
            && event.target.className.indexOf('vs-popup--background')!=-1){
          this.$emit('update:active',false)
          this.$emit('close', false)
        } else if(!this.buttonCloseHidden && event.srcElement == this.$refs.btnclose.$el){
          this.$emit('update:active',false)
          this.$emit('close', false)
        }
      }
    },
    insertBody(){
      let elx = this.$refs.con
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }
});

// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsPopup_vsPopupvue_type_script_lang_js_ = (vsPopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue





/* normalize component */

var vsPopup_component = normalizeComponent(
  vsPopup_vsPopupvue_type_script_lang_js_,
  vsPopupvue_type_template_id_3b47fefa_lang_html_render,
  vsPopupvue_type_template_id_3b47fefa_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsPopup = (vsPopup_component.exports);
// CONCATENATED MODULE: ./src/components/vsPopup/index.js


/* harmony default export */ var components_vsPopup = (Vue => {
  Vue.component(vsPopup.name, vsPopup)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAlert/vsAlert.vue?vue&type=template&id=c0aaec9e&lang=html&
var vsAlertvue_type_template_id_c0aaec9e_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.active)?_c('div',_vm._g(_vm._b({ref:"alert",staticClass:"con-vs-alert",class:[`con-vs-alert-${_vm.color}`,{
      'con-icon':_vm.icon,
    }],style:(_vm.styleAlert)},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.closable)?_c('div',{staticClass:"con-x vs-alert--close",on:{"click":function($event){return _vm.$emit('update:active',false)}}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.closeIcon}})],1):_vm._e(),(_vm.title)?_c('h4',{staticClass:"titlex vs-alert--title",style:(_vm.styleTitle),domProps:{"textContent":_vm._s(_vm.title)}}):_vm._e(),_c('div',{staticClass:"vs-alert",class:{'con-icon': _vm.icon}},[(_vm.icon)?_c('vs-icon',{staticClass:"icon-alert",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}):_vm._e(),_vm._t("default")],2)]):_vm._e()])
}
var vsAlertvue_type_template_id_c0aaec9e_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue?vue&type=template&id=c0aaec9e&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAlert/vsAlert.vue?vue&type=script&lang=js&



/* harmony default export */ var vsAlertvue_type_script_lang_js_ = ({
  name:'VsAlert',
  props:{
    active:{
      type:[Boolean,String],
      default:true
    },
    title:{
      type:String,
      default:null
    },
    closable:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      default:'primary'
    },
    margin:{
      type:[String,Boolean],
      default:'10px'
    },
    icon:{
      type:String,
      default:null
    },
    closeIcon:{
      type:String,
      default:'close'
    },
    iconPack:{
      type:String,
      default:'material-icons'
    }
  },

  computed:{
    styleAlert () {
      return {
        background: utils_color.getColor(this.color,.15),
        boxShadow: `0px 0px 25px 0px ${utils_color.getColor(this.color,.15)}`,
        color: utils_color.getColor(this.color,1)
      }
    },
    styleTitle () {
      return {
        boxShadow: `0px 6px 15px -7px ${utils_color.getColor(this.color,.4)}`
      }
    }
  },
  mounted () {
    if(this.$refs.alert) {
      this.$nextTick(() => {
        let h = this.$refs.alert.scrollHeight
        this.$refs.alert.style.height = h + 'px'
      })
    }
  },
  methods:{
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done){
      let h = this.$refs.alert.scrollHeight
      this.$refs.alert.style.height = h + 'px'
      el.style.opacity = 1
      done()
    },
    leave(el) {
      this.$refs.alert.style.height = 0 + 'px'
      el.style.opacity = 0
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsAlert_vsAlertvue_type_script_lang_js_ = (vsAlertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue





/* normalize component */

var vsAlert_component = normalizeComponent(
  vsAlert_vsAlertvue_type_script_lang_js_,
  vsAlertvue_type_template_id_c0aaec9e_lang_html_render,
  vsAlertvue_type_template_id_c0aaec9e_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsAlert = (vsAlert_component.exports);
// CONCATENATED MODULE: ./src/components/vsAlert/index.js


/* harmony default export */ var components_vsAlert = (Vue => {
  Vue.component(vsAlert.name, vsAlert)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChip.vue?vue&type=template&id=3d1c2090&lang=html&
var vsChipvue_type_template_id_3d1c2090_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"con-vs-chip",class:[
    `vs-chip-${_vm.color}`,
    {
      'closable': _vm.closable,
      'con-color': _vm.color,
      'bg-chip-transparent': _vm.transparent
    }
  ],style:(_vm.styleChip)},[_c('span',{staticClass:"text-chip vs-chip--text"},[_vm._t("default")],2),(_vm.closable)?_c('button',{staticClass:"btn-close vs-chip--close",attrs:{"type":"button"},on:{"click":_vm.closeChip}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.closeIcon}})],1):_vm._e()])
}
var vsChipvue_type_template_id_3d1c2090_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue?vue&type=template&id=3d1c2090&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChip.vue?vue&type=script&lang=js&



/* harmony default export */ var vsChipvue_type_script_lang_js_ = ({
  name:'VsChip',
  props:{
    item:{
      type:Boolean,
    },
    value:{},
    active:{
      type:Boolean,
      default:true,
    },
    text:{
      type:String,
      default:null,
    },
    closable:{
      type:[Boolean,String],
      default:false,
    },
    color:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    closeIcon:{
      type:String,
      default:'clear',
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    styleChip () {
      const background = this.transparent ? utils_color.getColor(this.color, .15) : utils_color.getColor(this.color, 1)
      const color = this.transparent ? utils_color.getColor(this.color, 1) : this.color ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.7)'

      return {
        background: background,
        color: color
      }
    },
    eliminado() {
      if(this.item) {
        return true
      } else {
        if(this.vsClosable) {
          return this.value
        } else {
          return true
        }
      }
    }
  },
  methods:{
    closeChip () {
      this.$emit('input', false)
      this.$emit('click')
    },
    remove(){
      this.$emit('vs-remove', false)
      this.$emit('input', false)
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsChip_vsChipvue_type_script_lang_js_ = (vsChipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue





/* normalize component */

var vsChip_component = normalizeComponent(
  vsChip_vsChipvue_type_script_lang_js_,
  vsChipvue_type_template_id_3d1c2090_lang_html_render,
  vsChipvue_type_template_id_3d1c2090_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsChip = (vsChip_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChips.vue?vue&type=template&id=224d5972&lang=html&
var vsChipsvue_type_template_id_224d5972_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{},[_c('div',{staticClass:"con-chips",class:{'no-items':_vm.value.length == 0}},[_vm._t("default"),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newChip),expression:"newChip"}],staticClass:"con-chips--input",attrs:{"placeholder":_vm.value.length > 0 ? null : _vm.placeholder,"type":"text"},domProps:{"value":(_vm.newChip)},on:{"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter"))return null;return _vm.addItem.apply(null, arguments)},"input":function($event){if($event.target.composing)return;_vm.newChip=$event.target.value}}}),_c('div',{staticClass:"x-global con-chips--remove-all",on:{"click":_vm.removeTotalItems}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.removeIcon}})],1)],2)])
}
var vsChipsvue_type_template_id_224d5972_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue?vue&type=template&id=224d5972&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChips.vue?vue&type=script&lang=js&


/* harmony default export */ var vsChipsvue_type_script_lang_js_ = ({
  name:'VsChips',
  components:{
    vsChip: vsChip
  },
  props:{
    value:{},
    vsColor:{
      type:String,
      default:'primary',
    },
    placeholder:{
      type:String,
      default:'',
    },
    items:{
      type:Array,
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    removeIcon:{
      type:String,
      default:'close',
    },
  },
  data: () => ({
    newChip:'',
    chip1:true,
  }),
  methods:{
    addItem(){
      let valueOld = this.value
      valueOld.push(this.newChip)
      this.$emit('input', valueOld)
      this.newChip = ''
    },
    removeTotalItems(){
      let valueOld = this.value
      valueOld.splice(0, this.value.length);
      this.$emit('input', valueOld)
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsChip_vsChipsvue_type_script_lang_js_ = (vsChipsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue





/* normalize component */

var vsChips_component = normalizeComponent(
  vsChip_vsChipsvue_type_script_lang_js_,
  vsChipsvue_type_template_id_224d5972_lang_html_render,
  vsChipsvue_type_template_id_224d5972_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsChips = (vsChips_component.exports);
// CONCATENATED MODULE: ./src/components/vsChip/index.js



/* harmony default export */ var components_vsChip = (Vue => {
  Vue.component(vsChip.name, vsChip)
  Vue.component(vsChips.name, vsChips)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsProgress/vsProgress.vue?vue&type=template&id=df48fcfc&lang=html&
var vsProgressvue_type_template_id_df48fcfc_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-progress--background",class:[`vs-progress-${_vm.color}`,{
    'indeterminate':_vm.indeterminate,
  }],style:(_vm.styleConProgress)},[_c('div',{staticClass:"vs-progress--foreground",style:(_vm.styleProgress)}),(_vm.indeterminate)?_c('div',{staticClass:"vs-progress--indeterminate",style:(_vm.styleProgress)}):_vm._e()])
}
var vsProgressvue_type_template_id_df48fcfc_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue?vue&type=template&id=df48fcfc&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsProgress/vsProgress.vue?vue&type=script&lang=js&


/* harmony default export */ var vsProgressvue_type_script_lang_js_ = ({
  name:'VsProgress',
  props:{
    height:{
      type:[Number,String],
      default:5
    },
    indeterminate:{
      type:Boolean,
      default:false,
    },
    percent:{
      type:Number,
      default:0
    },
    color:{
      type:String,
      default:'primary'
    }
  },
  data () {
    return {
      percentx: 0
    }
  },
  computed: {
    styleConProgress () {
      return {
        background: utils_color.getColor(this.color,.1),
        height: `${this.height}px`
      }
    },
    styleProgress () {
      return {
        background: utils_color.getColor(this.color),
        width: `${this.percentx}%`
      }
    }
  },
  watch:{
    percent(){
      this.percentx = this.percent
    }
  },
  created () {
    this.percentx = 0
  },
  mounted () {
    setTimeout(() => {
      this.percentx = this.percent // to force animation
    }, 600)
  },
});

// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsProgress_vsProgressvue_type_script_lang_js_ = (vsProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue





/* normalize component */

var vsProgress_component = normalizeComponent(
  vsProgress_vsProgressvue_type_script_lang_js_,
  vsProgressvue_type_template_id_df48fcfc_lang_html_render,
  vsProgressvue_type_template_id_df48fcfc_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsProgress = (vsProgress_component.exports);
// CONCATENATED MODULE: ./src/components/vsProgress/index.js


/* harmony default export */ var components_vsProgress = (Vue => {
  Vue.component(vsProgress.name, vsProgress)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCard/vsCard.vue?vue&type=template&id=32732618&
var vsCardvue_type_template_id_32732618_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"con-vs-card",class:{'withHover': _vm.actionable, 'fixedHeight': _vm.fixedHeight }},[(_vm.hasSlot('header'))?_c('header',{staticClass:"vs-card--header"},[_vm._t("header")],2):_vm._e(),(_vm.hasSlot('media'))?_c('div',{staticClass:"vs-card--media"},[_vm._t("media")],2):_vm._e(),(_vm.hasSlot('default'))?_c('div',{staticClass:"vs-card--content",class:{'fixedHeight': _vm.fixedHeight }},[_vm._t("default")],2):_vm._e(),(_vm.hasSlot('extra-content'))?_c('div',{staticClass:"vs-card-extra--content"},[_vm._t("extra-content")],2):_vm._e(),(_vm.hasSlot('footer'))?_c('footer',{staticClass:"vs-card--footer",class:{'fixedHeight': _vm.fixedHeight }},[_vm._t("footer")],2):_vm._e()])
}
var vsCardvue_type_template_id_32732618_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue?vue&type=template&id=32732618&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCard/vsCard.vue?vue&type=script&lang=js&

  /* harmony default export */ var vsCardvue_type_script_lang_js_ = ({
    name: 'VsCard',
    props:{
      actionable: {
        default: false,
        type: Boolean
      },
      fixedHeight: {
        default: false,
        type: Boolean
      }
    },
    methods: {
      hasSlot(slot) {
        return this.$slots[slot]
      }
    }
  });

// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCard_vsCardvue_type_script_lang_js_ = (vsCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue





/* normalize component */

var vsCard_component = normalizeComponent(
  vsCard_vsCardvue_type_script_lang_js_,
  vsCardvue_type_template_id_32732618_render,
  vsCardvue_type_template_id_32732618_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCard = (vsCard_component.exports);
// CONCATENATED MODULE: ./src/components/vsCard/index.js


/* harmony default export */ var components_vsCard = (Vue => {
  Vue.component(vsCard.name, vsCard)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsList.vue?vue&type=template&id=38998322&lang=html&
var vsListvue_type_template_id_38998322_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-list"},[_vm._t("default")],2)
}
var vsListvue_type_template_id_38998322_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsList/vsList.vue?vue&type=template&id=38998322&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsList.vue?vue&type=script&lang=js&

/* harmony default export */ var vsListvue_type_script_lang_js_ = ({
  name:'VsList'
});

// CONCATENATED MODULE: ./src/components/vsList/vsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsList_vsListvue_type_script_lang_js_ = (vsListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsList/vsList.vue





/* normalize component */

var vsList_component = normalizeComponent(
  vsList_vsListvue_type_script_lang_js_,
  vsListvue_type_template_id_38998322_lang_html_render,
  vsListvue_type_template_id_38998322_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsList = (vsList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListItem.vue?vue&type=template&id=c3fb47ec&lang=html&
var vsListItemvue_type_template_id_c3fb47ec_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-list--item"},[(_vm.$slots.avatar)?_c('div',{staticClass:"vs-list--avatar"},[_vm._t("avatar")],2):_vm._e(),(_vm.icon)?_c('div',{staticClass:"vs-list--icon"},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],1):_vm._e(),_c('div',{staticClass:"list-titles"},[(_vm.title)?_c('div',{staticClass:"vs-list--title"},[_vm._v(_vm._s(_vm.title))]):_vm._t("title"),(_vm.subtitle)?_c('div',{staticClass:"vs-list--subtitle"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._t("subtitle")],2),_c('div',{staticClass:"vs-list--slot"},[_vm._t("default")],2)])
}
var vsListItemvue_type_template_id_c3fb47ec_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue?vue&type=template&id=c3fb47ec&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListItem.vue?vue&type=script&lang=js&

/* harmony default export */ var vsListItemvue_type_script_lang_js_ = ({
  name:'VsListItem',
  props: {
    vsAvatar:{
      type:[Boolean,String],
      default:false,
    },
    title:{
      type:String,
      default:null,
    },
    subtitle:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
    iconPack:{
      type:String,
      default:'material-icons',
    },
  }
});

// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsList_vsListItemvue_type_script_lang_js_ = (vsListItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue





/* normalize component */

var vsListItem_component = normalizeComponent(
  vsList_vsListItemvue_type_script_lang_js_,
  vsListItemvue_type_template_id_c3fb47ec_lang_html_render,
  vsListItemvue_type_template_id_c3fb47ec_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsListItem = (vsListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListHeader.vue?vue&type=template&id=75b02950&lang=html&
var vsListHeadervue_type_template_id_75b02950_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-list--header",class:[`vs-header-list-${_vm.color}`,{
    'with-icon':_vm.icon,
  }],style:(_vm.styleHeader)},[(_vm.icon)?_c('div',{staticClass:"vs-list--icon"},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],1):_vm._e(),_c('div',{staticClass:"list-titles"},[(_vm.title)?_c('div',{staticClass:"vs-list--title"},[_vm._v(_vm._s(_vm.title))]):_vm._e()])])
}
var vsListHeadervue_type_template_id_75b02950_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue?vue&type=template&id=75b02950&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListHeader.vue?vue&type=script&lang=js&


/* harmony default export */ var vsListHeadervue_type_script_lang_js_ = ({
  name:'VsListHeader',
  props: {
    color: {
      type:String,
      default:'primary',
    },
    title:{
      type:String,
      default:null,
    },
    subtitle:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
    iconPack:{
      type:String,
      default:'material-icons',
    },
  },
  computed: {
    styleHeader () {
      return {
        color: utils_color.getColor(this.color)
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsList_vsListHeadervue_type_script_lang_js_ = (vsListHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue





/* normalize component */

var vsListHeader_component = normalizeComponent(
  vsList_vsListHeadervue_type_script_lang_js_,
  vsListHeadervue_type_template_id_75b02950_lang_html_render,
  vsListHeadervue_type_template_id_75b02950_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsListHeader = (vsListHeader_component.exports);
// CONCATENATED MODULE: ./src/components/vsList/index.js




/* harmony default export */ var components_vsList = (Vue => {
  Vue.component(vsList.name, vsList)
  Vue.component(vsListItem.name, vsListItem)
  Vue.component(vsListHeader.name, vsListHeader)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAvatar/vsAvatar.vue?vue&type=template&id=6b3bcfeb&lang=html&
var vsAvatarvue_type_template_id_6b3bcfeb_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',_vm._g(_vm._b({staticClass:"con-vs-avatar",class:_vm.avatarClass,style:(_vm.avatarStyle)},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.badge && _vm.badge > 0)?_c('div',{staticClass:"dot-count vs-avatar--count",class:_vm.badgeClass,style:(_vm.badgeStyle)},[_vm._v("\n    "+_vm._s(typeof _vm.badge != 'boolean' ? _vm.badge : null)+"\n  ")]):_vm._e(),(_vm.src)?_c('div',{staticClass:"con-img vs-avatar--con-img"},[_c('img',{attrs:{"src":_vm.src,"alt":_vm.text}})]):_c('span',{staticClass:"vs-avatar--text notranslate",class:[_vm.text ? '' : _vm.iconPack, _vm.text ? '' : _vm.icon, _vm.textClass],style:(_vm.textStyle),attrs:{"title":_vm.text,"translate":"no"}},[_vm._v("\n    "+_vm._s(_vm.text ? _vm.returnText : _vm.iconPack == 'material-icons' ? _vm.icon : '')+"\n  ")])])
}
var vsAvatarvue_type_template_id_6b3bcfeb_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue?vue&type=template&id=6b3bcfeb&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAvatar/vsAvatar.vue?vue&type=script&lang=js&



/* harmony default export */ var vsAvatarvue_type_script_lang_js_ = ({
  name: 'VsAvatar',
  props:{
    badge:{
      type:[Boolean,String,Number],
      default:false,
    },
    badgeColor:{
      default:'danger',
      type:String,
    },
    size:{
      type:String,
      default:null,
    },
    src:{
      type:String,
      default:null
    },
    icon:{
      type:String,
      default:'person'
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    textColor:{
      type:String,
      default:'rgb(255, 255, 255)',
    },
    text:{
      type:[String,Number],
      default: null,
    },
    color:{
      type:String,
      default:'rgb(195, 195, 195)',
    }
  },
  computed:{
    avatarClass() {
      const classes = {}
      classes[this.size] = true
      if (utils_color.isColor(this.color)) {
        classes[`con-vs-avatar-${this.color}`] = true
      }
      return classes
    },
    avatarStyle() {
      const style = {
        width: /[px]/.test(this.size) ? this.size : null,
        height: /[px]/.test(this.size) ? this.size : null
      }
      if (!utils_color.isColor(this.color)) {
        style.background = utils_color.getColor(this.color)
      }
      return style
    },
    badgeClass() {
      const classes = {
        badgeNumber: (typeof badge != 'boolean')
      }
      if (utils_color.isColor(this.badgeColor)) {
        classes[`dot-count-${this.badgeColor}`] = true
      }
      return classes
    },
    badgeStyle() {
      const style = {}
      if (!utils_color.isColor(this.badgeColor)) {
        style.background = utils_color.getColor(this.badgeColor)
      }
      return style
    },
    textClass() {
      const classes = {
        'material-icons': !this.text
      }
      if (utils_color.isColor(this.textColor)) {
        classes[`vs-avatar-text-${this.textColor}`] = true
      }
      return classes
    },
    textStyle() {
      const style = {
        transform: `translate(-50%,-50%) scale(${this.returnScale})`
      }
      if (!utils_color.isColor(this.textColor)) {
        style.color = utils_color.getColor(this.textColor)
      }
      return style
    },
    returnText() {
      if(this.text.length <= 5) {
        return this.text
      }
      let exp = /\s/g
      var letras = ''
      if(exp.test(this.text)) {
        this.text.split(exp).forEach((word)=>{
          letras += word[0].toUpperCase()
        })
      } else {
        letras = this.text[0].toUpperCase()
      }
      return letras.length > 5 ? letras[0] : letras
    },
    returnScale() {
      if(!this.text) return 1
      let lengthx = this.returnText.length
      if(lengthx <= 5 && lengthx > 1) {
        return lengthx / (lengthx * 1.50)
      } else {
        return 1
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsAvatar_vsAvatarvue_type_script_lang_js_ = (vsAvatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue





/* normalize component */

var vsAvatar_component = normalizeComponent(
  vsAvatar_vsAvatarvue_type_script_lang_js_,
  vsAvatarvue_type_template_id_6b3bcfeb_lang_html_render,
  vsAvatarvue_type_template_id_6b3bcfeb_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsAvatar = (vsAvatar_component.exports);
// CONCATENATED MODULE: ./src/components/vsAvatar/index.js


/* harmony default export */ var components_vsAvatar = (Vue => {
  Vue.component(vsAvatar.name, vsAvatar)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPagination/vsPagination.vue?vue&type=template&id=67409173&
var vsPaginationvue_type_template_id_67409173_render = function render(){var _vm=this,_c=_vm._self._c;return _c('vs-row',{attrs:{"vs-justify":_vm.description ? 'space-between' : 'center',"vs-type":"flex","vs-w":"12"}},[(_vm.description)?_c('vs-col',{staticClass:"vs-pagination--mb",attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[_c('div',[_c('span',{staticStyle:{"margin-right":"5px"}},[_vm._v("\n        "+_vm._s(_vm.descriptionTitle)+": "+_vm._s(_vm.minRows)+" - "+_vm._s(_vm.maxRows)+" "+_vm._s(_vm.descriptionConnector)+" "+_vm._s(_vm.sizeArray)+" | "+_vm._s(_vm.descriptionBody)+":\n\n      ")]),_c('ul',{staticClass:"vs-pagination--array"},_vm._l((_vm.descriptionItems),function(row,index){return _c('li',{key:index},[_c('span',{class:[`vs-description-${_vm.color}`,{ 'vs-pagination--bold': (index==_vm.indexRows)}],style:(_vm.styleDescription),on:{"click":function($event){return _vm.changeRowMaxItems(index)}}},[_vm._v("\n            "+_vm._s(row)+"\n          ")]),(index != (_vm.descriptionItems.length - 1))?_c('span',[_vm._v("\n            ,\n          ")]):_vm._e()])}),0)])]):_vm._e(),_c('vs-col',{staticClass:"vs-pagination--mb",attrs:{"vs-lg":_vm.description ? 6 : 12,"vs-type":"flex","vs-justify":"flex-end","vs-align":"center","vs-sm":"12","vs-xs":"12"}},[_c('div',{staticClass:"con-vs-pagination",class:[`vs-pagination-${_vm.color}`],style:(_vm.stylePagination)},[_c('nav',{staticClass:"vs-pagination--nav"},[_c('button',{staticClass:"vs-pagination--buttons btn-prev-pagination vs-pagination--button-prev",class:{disabled:_vm.current <= 1 ? 'disabled' : null},attrs:{"disabled":_vm.current === 1},on:{"click":_vm.prevPage}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.prevIcon ? _vm.prevIcon : _vm.defaultPrevIcon}})],1),_c('ul',{staticClass:"vs-pagination--ul"},_vm._l((_vm.pages),function(page,index){return _c('li',{key:index,staticClass:"item-pagination vs-pagination--li",class:{'is-current': page == _vm.current},on:{"click":function($event){return _vm.goTo(page)}}},[_c('span',[_vm._v("\n              "+_vm._s(page)+"\n            ")]),_c('div',{staticClass:"effect"})])}),0),_c('button',{staticClass:"vs-pagination--buttons btn-next-pagination vs-pagination--button-next",class:{disabled:_vm.current === _vm.total ? 'disabled' : null},attrs:{"disabled":_vm.current === _vm.total},on:{"click":_vm.nextPage}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.nextIcon ? _vm.nextIcon : _vm.defaultNextIcon}})],1),(_vm.goto)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.go),expression:"go"}],staticClass:"vs-pagination--input-goto",attrs:{"max":_vm.total,"min":"1","type":"number"},domProps:{"value":(_vm.go)},on:{"change":_vm.goTo,"input":function($event){if($event.target.composing)return;_vm.go=$event.target.value}}}):_vm._e()])])])],1)
}
var vsPaginationvue_type_template_id_67409173_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue?vue&type=template&id=67409173&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPagination/vsPagination.vue?vue&type=script&lang=js&



/* harmony default export */ var vsPaginationvue_type_script_lang_js_ = ({
  name: 'VsPagination',
  props:{
    color:{
      type:String,
      default:'primary'
    },
    total:{
      type:Number,
      required:true
    },
    sizeArray:{
      type:Number,
      required:false
    },
    maxItems: {
      type:[Number, String],
      required:false
    },
    value:{
      type:Number,
      required:true,
      default: 1
    },
    max:{
      type:Number,
      default:9
    },
    goto:{
      type:Boolean
    },
    type:{
      type:String
    },
    prevIcon:{
      type:String,
    },
    nextIcon:{
      type:String,
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    description:{
      default: false,
      type: Boolean
    },
    descriptionItems:{
      default: () => [],
      type: Array
    },
    descriptionTitle: {
      type:String,
      default:'Registries'
    },
    descriptionConnector: {
      type:String,
      default:'of'
    },
    descriptionBody: {
      type:String,
      default:'Pages'
    },
  },
  data: () => ({
    pages: [],
    current: 0,
    go: 0,
    prevRange: '',
    nextRange: '',
    hoverBtn1: false,
    minRows: 0,
    maxRows: 0,
    indexRows: 0,
  }),
  computed: {
    defaultNextIcon() {
      if(this.$vs.rtl) return 'chevron_left'
      return 'chevron_right'
    },
    defaultPrevIcon() {
      if(this.$vs.rtl) return 'chevron_right'
      return 'chevron_left'
    },
    stylePagination () {
      let style = {}
      if (!utils_color.isColor(this.color)) {
        style = {
          '--vs-color-pagination': utils_color.getColor(this.color),
          '--vs-color-pagination-alpha': utils_color.getColor(this.color,.5)
        }
      }
      return style
    },
    styleDescription () {
      return {
        'cursor': 'pointer',
      }
    },
  },
  watch: {
    current(val) {
      this.getPages()
      this.calculateMinMax(val)
      this.$emit('input', this.current)
      this.$emit('change', this.current)
    },
    total() {
      this.getPages()
    },
    max() {
      this.getPages()
    },
    value(val) {
      const pageNum = val < 1 ? 1 : (val <= this.total ? val : this.total)
      this.goTo(pageNum)
    },
  },

  async mounted () {
    this.current = this.go = this.value
    await this.calculateMinMax(this.current)
    this.indexRows = this.descriptionItems.indexOf(this.maxItems)
    this.getPages()
  },

  methods:{
    async changeRowMaxItems (index) {
      this.indexRows = index
      await this.$emit('changeMaxItems', index)
      await this.calculateMinMax(this.current)
      this.current = 1
    },
    async calculateMinMax (val) {
      this.maxRows = ( (val * this.maxItems) <= this.sizeArray ) ? val * this.maxItems : this.sizeArray
      this.minRows = ( (val * this.maxItems) <= this.sizeArray ) ? (this.maxRows - this.maxItems) + 1 : ((this.current - 1) * this.maxItems) + 1
    },
    isEllipsis(page) {
      return page === '...'
    },
    goTo(page) {
      if(page === '...') {
        return
      }
      if (typeof page.target === 'undefined') {
        this.current = page
      } else {
        const value  = parseInt(page.target.value, 10)
        this.go      = (
          value < 1 ? 1 : (value <= this.total ? value : this.total)
        )
        this.current = this.go
      }
    },
    getPages() {
      if (this.total <= this.max) {
        let pages = this.setPages(1, this.total)
        this.pages = pages
      }
      const even     = this.max % 2 === 0 ? 1 : 0
      if(this.total < 6) {
        this.prevRange = Math.floor(this.max / (this.max/2))
      } else {
        this.prevRange = Math.floor(this.max / 2)
      }
      this.nextRange = this.total - this.prevRange + 1 + even

      if (this.current >= this.prevRange && this.current <= this.nextRange) {
        const start = this.current - this.prevRange + 2
        const end   = this.current + this.prevRange - 2 - even

        this.pages = [1, '...', ...this.setPages(start, end), '...', this.total]
      } else if (this.total < 6) {
        this.pages = [
          ...this.setPages(1, this.total)
        ]
      } else {
        this.pages = [
          ...this.setPages(1, this.prevRange),
          '...',
          ...this.setPages(this.nextRange, this.total)
        ]
      }

    },
    setPages(start, end) {
      const setPages = []

      for (start > 0 ? start : 1; start <= end; start++) {
        setPages.push(start)
      }

      return setPages
    },
    nextPage() {
      if(this.current < this.total) {
        this.current++
      }
    },
    prevPage() {
      if(this.current > 1) {
        this.current--
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsPagination_vsPaginationvue_type_script_lang_js_ = (vsPaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue





/* normalize component */

var vsPagination_component = normalizeComponent(
  vsPagination_vsPaginationvue_type_script_lang_js_,
  vsPaginationvue_type_template_id_67409173_render,
  vsPaginationvue_type_template_id_67409173_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsPagination = (vsPagination_component.exports);
// CONCATENATED MODULE: ./src/components/vsPagination/index.js


/* harmony default export */ var components_vsPagination = (Vue => {
  Vue.component(vsPagination.name, vsPagination)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=template&id=ce9a457a&lang=html&
var vsBreadcrumbvue_type_template_id_ce9a457a_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('nav',_vm._g(_vm._b({staticClass:"vs-breadcrumb",class:`vs-align-${_vm.align}`,attrs:{"aria-label":"breadcrumb"}},'nav',_vm.$attrs,false),_vm.$listeners),[_c('ol',{staticClass:"vs-breadcrumb--ol"},[_vm._t("default"),_vm._l((_vm.items),function(item){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasSlot),expression:"!hasSlot"}],key:item.title,class:{'vs-active':item.active,'disabled-link':item.disabled},attrs:{"aria-current":item.active ? 'page' : null}},[(!item.active)?_c('a',{staticClass:"vs-breadcrumb--link",attrs:{"href":item.url ? item.url : '#',"title":item.title},domProps:{"textContent":_vm._s(item.title)}}):[_c('span',{staticClass:"vs-breadcrumb--text",class:_vm.textClass,style:(_vm.textStyle),domProps:{"textContent":_vm._s(item.title)}})],(!item.active)?_c('span',{staticClass:"separator notranslate vs-breadcrum--separator",class:_vm.separator.length > 1 ? 'material-icons' : null,attrs:{"translate":"no","aria-hidden":"true"},domProps:{"textContent":_vm._s(_vm.separator)}}):_vm._e()],2)})],2)])
}
var vsBreadcrumbvue_type_template_id_ce9a457a_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=template&id=ce9a457a&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=script&lang=js&



/* harmony default export */ var vsBreadcrumbvue_type_script_lang_js_ = ({
  name:'VsBreadcrumb',
  props:{
    items:{
      type:Array
    },
    separator:{
      type:String,
      default:'/'
    },
    color:{
      type:String,
      default: 'primary'
    },
    align:{
      type:String,
      default:'left'
    }
  },
  computed: {
    textClass() {
      const classes = {}
      if (utils_color.isColor(this.color)) {
        classes[`vs-breadcrumb-text-${this.color}`] = true
      }
      return classes
    },
    textStyle() {
      const style = {}
      if (!utils_color.isColor(this.color)) {
        style.color = utils_color.getColor(this.color)
      }
      return style
    },
    hasSlot () {
      return !!this.$slots.default
    }
  },
  created() {
    if(this.items) {
      this.items = this.items.map(item => {
        if (typeof item.title === "function") {
          return {
            ...item,
            title: item.title(this.$route.params)
          }
        }

        return item
      })
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsBreadcrumb_vsBreadcrumbvue_type_script_lang_js_ = (vsBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue





/* normalize component */

var vsBreadcrumb_component = normalizeComponent(
  vsBreadcrumb_vsBreadcrumbvue_type_script_lang_js_,
  vsBreadcrumbvue_type_template_id_ce9a457a_lang_html_render,
  vsBreadcrumbvue_type_template_id_ce9a457a_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsBreadcrumb = (vsBreadcrumb_component.exports);
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/index.js


/* harmony default export */ var components_vsBreadcrumb = (Vue => {
  Vue.component(vsBreadcrumb.name, vsBreadcrumb)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsDialog/index.vue?vue&type=template&id=42aabbb6&lang=html&
var vsDialogvue_type_template_id_42aabbb6_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"dialog-t"}},[(_vm.isPrompt ? _vm.active : _vm.fActive)?_c('div',{ref:"con",staticClass:"vs-component con-vs-dialog",class:[`vs-dialog-${_vm.color}`]},[_c('div',{staticClass:"vs-dialog-dark",on:{"click":function($event){return _vm.handleClose($event,true)}}}),_c('div',{ref:"dialogx",staticClass:"vs-dialog"},[_c('header',{staticClass:"vs-dialog-header",style:(_vm.styleHeader)},[_c('div',{staticClass:"con-title-after"},[_c('span',{staticClass:"after",style:(_vm.styleAfter)}),_c('h3',{staticClass:"dialog-title"},[_vm._v(_vm._s(_vm.title)+" ")])]),(_vm.type=='alert')?_c('vs-icon',{staticClass:"vs-dialog-cancel vs-dialog-cancel--icon notranslate",attrs:{"icon":_vm.closeIcon,"icon-pack":_vm.iconPack},nativeOn:{"click":function($event){return _vm.handleClose.apply(null, arguments)}}}):_vm._e()],1),_c('div',{staticClass:"vs-dialog-text"},[_vm._t("default"),_vm._v("\n        "+_vm._s(_vm.text)+"\n      ")],2),(_vm.buttonsHidden?false:_vm.isPrompt||_vm.type=='confirm')?_c('footer',[_c('vs-button',{staticClass:"vs-dialog-accept-button",attrs:{"disabled":_vm.isValid=='none'?false:!_vm.isValid,"color":_vm.color,"type":_vm.buttonAccept},on:{"click":_vm.acceptDialog}},[_vm._v(_vm._s(_vm.acceptText))]),_c('vs-button',{staticClass:"vs-dialog-cancel-button",attrs:{"text-color":'rgba(0,0,0,.5)',"type":_vm.buttonCancel},on:{"click":_vm.cancelClose}},[_vm._v(_vm._s(_vm.cancelText))])],1):_vm._e(),(_vm.type=='alert'&&!_vm.isPrompt)?_c('footer',[_c('vs-button',{staticClass:"vs-dialog-accept-button",attrs:{"color":_vm.color,"type":_vm.buttonAccept},on:{"click":_vm.acceptDialog}},[_vm._v(_vm._s(_vm.acceptText))])],1):_vm._e()])]):_vm._e()])
}
var vsDialogvue_type_template_id_42aabbb6_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue?vue&type=template&id=42aabbb6&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsDialog/index.vue?vue&type=script&lang=js&


/* harmony default export */ var vsDialogvue_type_script_lang_js_ = ({
  name:'VsPrompt',
  props:{
    color:{
      default:'primary',
      type:String
    },
    active:{
      default:false,
      type: Boolean
    },
    buttonAccept:{
      default:'filled',
      type:String,
    },
    buttonCancel:{
      default:'flat',
      type:String,
    },
    isValid:{
      default:'none',
      type:[Boolean,String]
    },
    buttonsHidden:{
      default:false,
      type:Boolean
    },
    acceptText:{
      default:'Accept',
      type:String
    },
    cancelText:{
      default:'Cancel',
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    closeIcon:{
      default:'close',
      type:String
    },
    text:{
      default: null,
      type: String
    },
    title:{
      default: 'Dialog',
      type: String
    },
    type:{
      default: 'alert',
      type: String
    },
    parent:{
      default: null,
    }
  },
  data:()=>({
    isPrompt:true,
    fActive: false,
    parameters: null,
  }),
  computed:{
    styleHeader(){
      return {
        color: utils_color.getColor(this.color,1),
      }
    },
    styleAfter(){
      return {
        background: utils_color.getColor(this.color,1)
      }
    }
  },
  watch:{
    active() {
      this.$nextTick(() => {
        if (this.active) {
          this.insertBody()
        }
      })
    },
    fActive() {
      this.$nextTick(() => {
        if (this.fActive) {
          this.insertBody()
        }
      })
    }
  },
  mounted () {
    if (this.active && this.isPrompt) {
      this.insertBody()
    }
    this.fActive = this.active
  },
  beforeDestroy() {
    // close the left open prompt
    let elx = this.$refs.con
    let parentx = this.parent ? this.parent : document.body
    if (elx) {
      parentx.removeChild(elx)
    }
  },
  methods:{
    giveColor(color){
      return utils_color.rColor(color)
    },
    acceptDialog () {
      if(!this.isPrompt){
        this.accept?this.accept(this.parameters):null
        this.fActive = false
        this.$emit('update:active',false)
        this.$emit('accept', this.parameters)
      } else {
        if (this.isValid || this.isValid == 'none') {
          this.accept?this.accept():null
          this.fActive = false
          this.$emit('update:active',false)
          this.$emit('accept', this.parameters)
        }
      }
    },
    rebound(){
      this.$refs.dialogx.classList.add('locked')
      setTimeout( () => {
        this.$refs.dialogx.classList.remove('locked')
      }, 200);
    },
    handleClose(event,con){
      if(con){
        if(event.target.className.indexOf('vs-dialog-dark')!=-1 && this.type == 'alert'){
          this.fActive = false
          this.$emit('update:active',false)
        } else if (event.target.className.indexOf('vs-dialog-dark')!=-1) {
          this.rebound()
        }
      } else {
        if(event?event.target.className.indexOf('vs-dialog-cancel')!=-1:event?event.target.className.indexOf('vs-dialog-cancel--icon')!=-1:false ){
          this.fActive = false
          this.$emit('update:active',false)
        }
      }
      this.$emit('close')
    },
    cancelClose(){
      this.fActive = false
      this.$emit('update:active',false)
      this.$emit('cancel')
      // this.$emit('cancel')
      this.cancel?this.cancel(this.parameters):null

    },
    insertBody(){
      let elx = this.$refs.con
      let parentx = this.parent ? this.parent : document.body
      parentx.insertBefore(elx, parentx.firstChild)
    },
  },
});

// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var functions_vsDialogvue_type_script_lang_js_ = (vsDialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue





/* normalize component */

var vsDialog_component = normalizeComponent(
  functions_vsDialogvue_type_script_lang_js_,
  vsDialogvue_type_template_id_42aabbb6_lang_html_render,
  vsDialogvue_type_template_id_42aabbb6_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDialog = (vsDialog_component.exports);
// CONCATENATED MODULE: ./src/components/vsPrompt/index.js


/* harmony default export */ var vsPrompt = (Vue => {
  Vue.component(vsDialog.name, vsDialog)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDivider/vsDivider.vue?vue&type=template&id=4d91634e&lang=html&
var vsDividervue_type_template_id_4d91634e_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-component vs-divider"},[_c('span',{staticClass:"vs-divider-border after",class:_vm.borderClass,style:(_vm.afterStyle)}),( _vm.icon || _vm.$slots.default)?_c('span',{staticClass:"vs-divider--text",class:_vm.textAndBackgroundClass,style:({
      'color': _vm.textColor,
      'background': _vm.backgroundColor
    })},[(!_vm.icon)?[_vm._t("default")]:_c('vs-icon',{staticClass:"icon-divider notranslate vs-divider--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],2):_vm._e(),_c('span',{staticClass:"vs-divider-border before",class:_vm.borderClass,style:(_vm.beforeStyle)})])
}
var vsDividervue_type_template_id_4d91634e_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue?vue&type=template&id=4d91634e&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDivider/vsDivider.vue?vue&type=script&lang=js&



/* harmony default export */ var vsDividervue_type_script_lang_js_ = ({
  name: "VsDivider",
  props:{
    color:{
      type:String,
      default:'rgba(0, 0, 0,.1)'
    },
    background:{
      type:String,
      default:'transparent'
    },
    icon:{
      default:null,
      type:String
    },
    borderStyle:{
      default:'solid',
      type:String
    },
    borderHeight:{
      default:'1px',
      type:String
    },
    position:{
      default:'center',
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
  },
  computed:{
    getWidthAfter(){
      let widthx = '100%'
      if(this.position == 'left'){
        widthx = '0%'
      } else if (this.position == 'left-center') {
        widthx = '25%'
      } else if (this.position == 'right-center') {
        widthx = '75%'
      } else if (this.position == 'right') {
        widthx = '100%'
      }
      return widthx
    },
    getWidthBefore(){
      let widthx = '100%'
      if(this.position == 'left'){
        widthx = '100%'
      } else if (this.position == 'left-center') {
        widthx = '75%'
      } else if (this.position == 'right-center') {
        widthx = '25%'
      } else if (this.position == 'right') {
        widthx = '0%'
      }
      return widthx
    },
    borderColor() {
      if (!utils_color.isColor(this.color)) {
        return utils_color.getColor(this.color)
      }
    },
    afterStyle() {
      const classes = {
        width: this.getWidthAfter,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      }
      if (!utils_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor
      }
      return classes
    },
    beforeStyle() {
      const classes = {
        width: this.getWidthBefore,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      }
      if (!utils_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor
      }
      return classes
    },
    borderClass() {
      const classes = {}
      let borderColor = utils_color.isColor(this.color) ? this.color : 'default'
      classes[`vs-divider-border-${borderColor}`] = true
      return classes
    },
    textColor() {
      if (!utils_color.isColor(this.color)) {
        return utils_color.getColor(this.color !== 'rgba(0, 0, 0,.1)' ? this.color : null)
      }
    },
    backgroundColor() {
      if (!utils_color.isColor(this.background)) {
        return utils_color.getColor(this.background)
      }
    },
    textAndBackgroundClass() {
      const classes = {}

      let textColor = utils_color.isColor(this.color) ? this.color : 'default'
      classes[`vs-divider-text-${textColor}`] = true

      let backgroundColor = utils_color.isColor(this.background) ? this.background : 'default'
      classes[`vs-divider-background-${backgroundColor}`] = true

      return classes
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDivider_vsDividervue_type_script_lang_js_ = (vsDividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue





/* normalize component */

var vsDivider_component = normalizeComponent(
  vsDivider_vsDividervue_type_script_lang_js_,
  vsDividervue_type_template_id_4d91634e_lang_html_render,
  vsDividervue_type_template_id_4d91634e_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDivider = (vsDivider_component.exports);
// CONCATENATED MODULE: ./src/components/vsDivider/index.js


/* harmony default export */ var components_vsDivider = (Vue => {
  Vue.component(vsDivider.name, vsDivider)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSpacer/vsSpacer.vue?vue&type=template&id=44914ac6&
var vsSpacervue_type_template_id_44914ac6_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-spacer"})
}
var vsSpacervue_type_template_id_44914ac6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue?vue&type=template&id=44914ac6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSpacer/vsSpacer.vue?vue&type=script&lang=js&

/* harmony default export */ var vsSpacervue_type_script_lang_js_ = ({
  name:'VsSpacer'
});

// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSpacer_vsSpacervue_type_script_lang_js_ = (vsSpacervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue





/* normalize component */

var vsSpacer_component = normalizeComponent(
  vsSpacer_vsSpacervue_type_script_lang_js_,
  vsSpacervue_type_template_id_44914ac6_render,
  vsSpacervue_type_template_id_44914ac6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSpacer = (vsSpacer_component.exports);
// CONCATENATED MODULE: ./src/components/vsSpacer/index.js


/* harmony default export */ var components_vsSpacer = (Vue => {
  Vue.component(vsSpacer.name, vsSpacer)
});

// CONCATENATED MODULE: ./src/components/vsIcon/index.js


/* harmony default export */ var components_vsIcon = (Vue => {
  Vue.component(vsIcon.name, vsIcon)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbar.vue?vue&type=template&id=02a86abb&lang=html&
var vsNavbarvue_type_template_id_02a86abb_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('header',{staticClass:"vs-navbar",class:[`vs-navbar-${_vm.type}`, `vs-navbar-color-${_vm.color}`, {'collapse':_vm.collapse}],style:([_vm.styleNavbar])},[_c('div',{staticClass:"vs-navbar--header"},[_c('button',{staticClass:"vs-navbar--btn-responsive",class:{'active-menu' : _vm.activeMenuResponsive},on:{"click":function($event){_vm.activeMenuResponsive = !_vm.activeMenuResponsive}}},[_c('span',{staticClass:"btn-responsive-line line--1"}),_c('span',{staticClass:"btn-responsive-line line--2"}),_c('span',{staticClass:"btn-responsive-line line--3"})]),_vm._t("title")],2),_c('div',{staticClass:"vs-con-items",class:{'activeMenuResponsive' : _vm.activeMenuResponsive}},[_vm._t("default")],2)])
}
var vsNavbarvue_type_template_id_02a86abb_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue?vue&type=template&id=02a86abb&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbar.vue?vue&type=script&lang=js&


/* harmony default export */ var vsNavbarvue_type_script_lang_js_ = ({
  name:'VsNavbar',

  props:{
    value:{},
    type:{
      default: null,
      type: String
    },
    collapse:{
      default:false,
      type: Boolean
    },
    color:{
      type:String,
      default:'transparent',
    },
    activeTextColor: {
      type:String,
      default:'primary',
    },
    textColor: {
      type:String,
      default:'rgb(40,40,40)',
    }
  },

  data:() => ({
    activeMenuResponsive: false
  }),

  computed:{
    styleNavbar () {
      if(utils_color.isColor(this.color)) {
        return {
          background: `rgb(${utils_color.changeColor(this.color)})`
        }
      }
      return {
        background: utils_color.getColor(this.color)
      }
    }
  },
  methods: {
    changeIndex (index) {
      this.$emit('input', index)
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavbarvue_type_script_lang_js_ = (vsNavbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue





/* normalize component */

var vsNavbar_component = normalizeComponent(
  vsNavbar_vsNavbarvue_type_script_lang_js_,
  vsNavbarvue_type_template_id_02a86abb_lang_html_render,
  vsNavbarvue_type_template_id_02a86abb_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavbar = (vsNavbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavItem.vue?vue&type=template&id=6f341d00&
var vsNavItemvue_type_template_id_6f341d00_render = function render(){var _vm=this,_c=_vm._self._c;return _c('li',{staticClass:"vs-navbar--item",class:[{'is-active-item': _vm.isActiveItem}, `vs-navbar-item-${_vm.getActiveTextColor}`],style:([_vm.styleHover]),on:{"click":function($event){return _vm.clickItem()},"mouseout":_vm.mouseout,"mouseover":_vm.mouseover}},[_vm._t("default"),_c('span',{staticClass:"vs-navbar-after",style:([_vm.styleAfter])})],2)
}
var vsNavItemvue_type_template_id_6f341d00_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue?vue&type=template&id=6f341d00&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavItem.vue?vue&type=script&lang=js&


/* harmony default export */ var vsNavItemvue_type_script_lang_js_ = ({
  name:'VsNavbarItem',
  props:{
    index: {
      type: [Number, String],
      default: null
    }
  },
  data:()=>({
    hover: false
  }),
  computed:{
    getActiveTextColor () {
      return this.$parent.$props.activeTextColor
    },
    isActiveItem () {
      return this.$parent.value == this.index
    },
    styleAfter () {
      return {
        background: utils_color.getColor(this.getActiveTextColor)
      }
    },
    styleHover () {
      if (this.isActiveItem) {
        return {
          color: utils_color.getColor(this.getActiveTextColor)
        }
      } else {
        return {
          color: this.hover?utils_color.getColor(this.getActiveTextColor) : utils_color.getColor(this.$parent.$props.textColor)
        }
      }

    }
  },
  methods:{
    clickItem () {
      this.$parent.changeIndex(this.index)
    },
    mouseout () {
      this.hover = false
    },
    mouseover () {
      this.hover = true
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavItemvue_type_script_lang_js_ = (vsNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue





/* normalize component */

var vsNavItem_component = normalizeComponent(
  vsNavbar_vsNavItemvue_type_script_lang_js_,
  vsNavItemvue_type_template_id_6f341d00_render,
  vsNavItemvue_type_template_id_6f341d00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavItem = (vsNavItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavGroup.vue?vue&type=template&id=2d6da28e&
var vsNavGroupvue_type_template_id_2d6da28e_render = function render(){var _vm=this,_c=_vm._self._c;return _c('li',{staticClass:"vs-nav-item"},[_c('div',{staticClass:"vs-nav-item-slot"},[_vm._t("default")],2),_c('ul',{staticClass:"vs-nav-submenu"},[_vm._t("submenu")],2)])
}
var vsNavGroupvue_type_template_id_2d6da28e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue?vue&type=template&id=2d6da28e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavGroup.vue?vue&type=script&lang=js&

/* harmony default export */ var vsNavGroupvue_type_script_lang_js_ = ({
  name:'VsNavbarGroup',
});

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavGroupvue_type_script_lang_js_ = (vsNavGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue





/* normalize component */

var vsNavGroup_component = normalizeComponent(
  vsNavbar_vsNavGroupvue_type_script_lang_js_,
  vsNavGroupvue_type_template_id_2d6da28e_render,
  vsNavGroupvue_type_template_id_2d6da28e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavGroup = (vsNavGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=template&id=abff2492&
var vsNavbarTitlevue_type_template_id_abff2492_render = function render(){var _vm=this,_c=_vm._self._c;return _c('h3',{staticClass:"vs-navbar--title"},[_vm._t("default")],2)
}
var vsNavbarTitlevue_type_template_id_abff2492_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=template&id=abff2492&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=script&lang=js&

/* harmony default export */ var vsNavbarTitlevue_type_script_lang_js_ = ({
  name:'VsNavbarTitle',
});

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavbarTitlevue_type_script_lang_js_ = (vsNavbarTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue





/* normalize component */

var vsNavbarTitle_component = normalizeComponent(
  vsNavbar_vsNavbarTitlevue_type_script_lang_js_,
  vsNavbarTitlevue_type_template_id_abff2492_render,
  vsNavbarTitlevue_type_template_id_abff2492_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavbarTitle = (vsNavbarTitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarItems.vue?vue&type=template&id=fd9aae46&
var vsNavbarItemsvue_type_template_id_fd9aae46_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-navbar--items"},[_vm._t("default")],2)
}
var vsNavbarItemsvue_type_template_id_fd9aae46_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue?vue&type=template&id=fd9aae46&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarItems.vue?vue&type=script&lang=js&

/* harmony default export */ var vsNavbarItemsvue_type_script_lang_js_ = ({
  name: 'VsNavbarItems'
});

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavbarItemsvue_type_script_lang_js_ = (vsNavbarItemsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue





/* normalize component */

var vsNavbarItems_component = normalizeComponent(
  vsNavbar_vsNavbarItemsvue_type_script_lang_js_,
  vsNavbarItemsvue_type_template_id_fd9aae46_render,
  vsNavbarItemsvue_type_template_id_fd9aae46_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavbarItems = (vsNavbarItems_component.exports);
// CONCATENATED MODULE: ./src/components/vsNavbar/index.js






/* harmony default export */ var components_vsNavbar = (Vue => {
  Vue.component(vsNavbar.name, vsNavbar)
  Vue.component(vsNavItem.name, vsNavItem)
  Vue.component(vsNavGroup.name, vsNavGroup)
  Vue.component(vsNavbarTitle.name, vsNavbarTitle)
  Vue.component(vsNavbarItems.name, vsNavbarItems)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebar.vue?vue&type=template&id=74680b86&
var vsSidebarvue_type_template_id_74680b86_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"vs-sidebar-animate"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.staticPosition || _vm.value),expression:"staticPosition || value"}],ref:"sidebarbackground",staticClass:"vs-content-sidebar"},[(!_vm.hiddenBackground)?_c('div',{staticClass:"vs-sidebar--background"}):_vm._e(),_c('div',{ref:"sidebarContainer",staticClass:"vs-sidebar",class:[
        `vs-sidebar-${_vm.color}`,
        {
          'vs-sidebar-parent': _vm.parent != 'body',
          'vs-sidebar-staticPosition': _vm.staticPosition,
          'vs-sidebar-position-right': _vm.positionRight,
          'vs-sidebar-reduce': _vm.reduce,
          'vs-sidebar-reduceNotRebound': _vm.reduceNotRebound,
          'vs-sidebar-reduceNotHoverExpand': _vm.reduceNotHoverExpand
        }
      ]},[(_vm.$slots.header)?_c('header',{staticClass:"vs-sidebar--header"},[_vm._t("header")],2):_vm._e(),_c('div',{staticClass:"vs-sidebar--items"},[_vm._t("default")],2),(_vm.spacer)?_c('vs-spacer'):_vm._e(),(_vm.$slots.footer)?_c('footer',{staticClass:"vs-sidebar--footer"},[_vm._t("footer")],2):_vm._e()],1)])])
}
var vsSidebarvue_type_template_id_74680b86_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue?vue&type=template&id=74680b86&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebar.vue?vue&type=script&lang=js&

/* harmony default export */ var vsSidebarvue_type_script_lang_js_ = ({
  name:'VsSidebar',
  props:{
    value:{
      default: false
    },
    defaultIndex:{
      default: null,
      type: [String, Number]
    },
    color: {
      default:'primary',
      type: String
    },
    parent:{
      default: null,
      type: [String, Object]
    },
    spacer: {
      default: false,
      type: Boolean
    },
    staticPosition: {
      default: false,
      type: Boolean
    },
    positionRight: {
      default: false,
      type:Boolean
    },
    clickNotClose: {
      default: false,
      type: Boolean
    },
    reduce: {
      default: false,
      type: Boolean
    },
    reduceNotRebound:{
      default: false,
      type: Boolean
    },
    reduceNotHoverExpand: {
      default: false,
      type: Boolean
    },
    hiddenBackground: {
      default:false,
      type: Boolean
    }
  },
  data: () => ({
    currentIndex: 0
  }),
  watch:{
    value() {
      if(!this.clickNotClose) this.addEventClick()
    }
  },
  created () {
    this.currentIndex = this.defaultIndex
  },
  mounted () {
    this.insertBody()
  },
  methods:{
    getActive () {
      return this.currentIndex
    },
    setIndexActive (index) {
      this.currentIndex = index
    },
    addEventClick () {
      this.$nextTick(() => {
        let parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent
        let element = parentx || window
        if(this.value) {
          setTimeout(() => {
            element.addEventListener('click', this.closeSidebar)
          }, 300)

        }
      })
    },
    closeSidebar (evt) {
      let parent = evt.target.closest('.vs-sidebar')
      if (!parent) {
        this.$emit('input', false)
        let parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent
        let element = parentx || window
        element.removeEventListener('click', this.closeSidebar)
      }
    },
    insertBody () {
      if(this.parent) {
        let elx = this.$refs.sidebarbackground
        let parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent
        parentx.insertBefore(elx, parentx.firstChild)
      }

    },
  }
});

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSideBar_vsSidebarvue_type_script_lang_js_ = (vsSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue





/* normalize component */

var vsSidebar_component = normalizeComponent(
  vsSideBar_vsSidebarvue_type_script_lang_js_,
  vsSidebarvue_type_template_id_74680b86_render,
  vsSidebarvue_type_template_id_74680b86_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSidebar = (vsSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarItem.vue?vue&type=template&id=4b9f5f94&
var vsSidebarItemvue_type_template_id_4b9f5f94_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-sidebar--item",class:{'vs-sidebar-item-active':_vm.getActive},on:{"click":_vm.setIndexActive}},[(_vm.to)?_c('router-link',{attrs:{"to":_vm.to}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}),_vm._t("default")],2):_c('a',{attrs:{"href":_vm.href}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}),_vm._t("default")],2)],1)
}
var vsSidebarItemvue_type_template_id_4b9f5f94_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue?vue&type=template&id=4b9f5f94&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarItem.vue?vue&type=script&lang=js&

/* harmony default export */ var vsSidebarItemvue_type_script_lang_js_ = ({
  name:'VsSidebarItem',
  props:{
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    href: {
      default:'#',
      type: String
    },
    to: {
      default:null,
      type: [String, Object]
    },
    index: {
      default: null,
      type: [String, Number]
    },
  },
  computed:{
    getActive () {
      return this.$parent.getActive() == this.index
    }
  },
  methods:{
    setIndexActive () {
      this.$parent.setIndexActive(this.index)
      this.$emit('click')
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSideBar_vsSidebarItemvue_type_script_lang_js_ = (vsSidebarItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue





/* normalize component */

var vsSidebarItem_component = normalizeComponent(
  vsSideBar_vsSidebarItemvue_type_script_lang_js_,
  vsSidebarItemvue_type_template_id_4b9f5f94_render,
  vsSidebarItemvue_type_template_id_4b9f5f94_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSidebarItem = (vsSidebarItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=template&id=03dfb3d2&
var vsSidebarGroupvue_type_template_id_03dfb3d2_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-sidebar-group",class:{'vs-sidebar-group-open' : _vm.openItems},on:{"mouseover":_vm.mouseover,"mouseout":_vm.mouseout}},[_c('h4',{on:{"click":_vm.clickGroup}},[_vm._v(_vm._s(_vm.title)+" "),_c('vs-icon',[_vm._v("keyboard_arrow_down")])],1),_c('span',{staticClass:"vs-sidebar--tooltip"},[_vm._v(_vm._s(_vm.title))]),_c('ul',{ref:"items",staticClass:"vs-sidebar--group-items",style:(_vm.styleItems)},[_vm._t("default")],2)])
}
var vsSidebarGroupvue_type_template_id_03dfb3d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=template&id=03dfb3d2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=script&lang=js&

/* harmony default export */ var vsSidebarGroupvue_type_script_lang_js_ = ({
  name:'VsSidebarGroup',
  props: {
    collapsed: {
      default: false,
      type: Boolean
    },
    title: {
      default: null,
      type: String
    },
    openHover: {
      default: false,
      type: Boolean
    },
    open: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    maxHeight: '0px',
    openItems: false
  }),
  computed:{
    styleItems() {
      return {
        maxHeight: this.maxHeight
      }
    }
  },
  watch: {
    maxHeight () {
      this.openItems = this.maxHeight != '0px'

    }
  },
  mounted () {
    this.openItems = this.open
    if(this.open) {
      this.maxHeight = 'none'
    }
  },
  methods:{
    getActive () {
      return this.$parent.getActive()
    },
    setIndexActive (index) {
      this.$parent.setIndexActive(index)
    },
    clickGroup() {
      if(!this.openHover) {
        let scrollHeight = this.$refs.items.scrollHeight
        if(this.maxHeight == '0px') {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = 'none'
          },300)
        } else {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = `${0}px`
          }, 50)
        }
      }
    },
    mouseover() {
      if(this.openHover) {
        let scrollHeight = this.$refs.items.scrollHeight
        this.maxHeight = `${scrollHeight}px`
      }
    },
    mouseout() {
      if(this.openHover) {
        let scrollHeight = 0
        this.maxHeight = `${scrollHeight}px`
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSideBar_vsSidebarGroupvue_type_script_lang_js_ = (vsSidebarGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue





/* normalize component */

var vsSidebarGroup_component = normalizeComponent(
  vsSideBar_vsSidebarGroupvue_type_script_lang_js_,
  vsSidebarGroupvue_type_template_id_03dfb3d2_render,
  vsSidebarGroupvue_type_template_id_03dfb3d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSidebarGroup = (vsSidebarGroup_component.exports);
// CONCATENATED MODULE: ./src/components/vsSideBar/index.js




/* harmony default export */ var vsSideBar = (Vue => {
  Vue.component(vsSidebar.name, vsSidebar)
  Vue.component(vsSidebarItem.name, vsSidebarItem)
  Vue.component(vsSidebarGroup.name, vsSidebarGroup)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDown.vue?vue&type=template&id=5d4c1376&lang=html&
var vsDropDownvue_type_template_id_5d4c1376_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',_vm._g(_vm._b({ref:"dropdown",staticClass:"vs-con-dropdown parent-dropdown",attrs:{"type":"button"}},'button',_vm.$attrs,false),_vm.listeners),[_vm._t("default")],2)
}
var vsDropDownvue_type_template_id_5d4c1376_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue?vue&type=template&id=5d4c1376&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDown.vue?vue&type=script&lang=js&

/* harmony default export */ var vsDropDownvue_type_script_lang_js_ = ({
  name: "VsDropdown",
  inheritAttrs:false,
  props:{
    vsTriggerClick:{
      default:false,
      type:Boolean
    },
    vsTriggerContextmenu:{
      default:false,
      type:Boolean
    },
    color:{
      default:'primary',
      type:String
    },
    vsCustomContent:{
      default:false,
      type:Boolean
    },
    vsDropRight:{
      default:false,
      type:Boolean
    }
  },
  data: () => ({
    vsDropdownVisible: false,
    rightx: false
  }),
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        contextmenu: (evt) => this.vsTriggerContextmenu ? this.clickToogleMenu(evt, true) : {},
        click: (evt) => {
          if (!this.vsTriggerContextmenu) {
            this.clickToogleMenu(evt)
          }

          if(this.$el === evt.target) {
            this.$emit('click')
          }
        },
        mouseout: evt => this.toggleMenu('out', evt),
        mouseover: evt => this.toggleMenu('over', evt),
      }
    }
  },
  watch:{
    vsDropdownVisible() {
      this.changePositionMenu()
      if(this.vsDropdownVisible) {
        this.$emit('focus')
        document.addEventListener('click', this.clickx)
      } else {
        this.$emit('blur')
      }
    }
  },
  mounted() {
    this.changeColor()
    document.addEventListener('click', this.clickx)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickx)
  },
  methods:{
    clickx(evt) {
      let [dropdownMenu] = this.$children.filter(item => item.hasOwnProperty('dropdownVisible'))
      dropdownMenu.vsCustomContent = this.vsCustomContent
      dropdownMenu.vsTriggerClick = this.vsTriggerClick
      dropdownMenu.vsDropRight = this.vsDropRight
      if ((this.vsTriggerClick || this.vsCustomContent) && this.vsDropdownVisible) {
        if ((evt.target !== this.$refs.dropdown &&
        evt.target.parentNode !== this.$refs.dropdown &&
        evt.target.parentNode.parentNode !== this.$refs.dropdown)) {
          if (!evt.target.closest('.vs-dropdown--menu')) {
            dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
            document.removeEventListener('click', this.clickx)
          }

        }
      }
    },
    changeColor() {
      let child = this.$children
      child.forEach(item => {
        if(item.$vnode.tag.indexOf('dropdown') != -1) {
          item.color = this.color
        }
      })
    },
    changePositionMenu() {
      let [dropdownMenu] = this.$children.filter(item => item.hasOwnProperty('dropdownVisible'))
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if(this.$refs.dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
        this.$nextTick(() => {
          dropdownMenu.topx = (this.$refs.dropdown.getBoundingClientRect().top - dropdownMenu.$el.clientHeight - 7) + scrollTopx
          dropdownMenu.notHeight = true
        })
      } else {
        dropdownMenu.notHeight = false
        dropdownMenu.topx = (this.$refs.dropdown.getBoundingClientRect().top + this.$refs.dropdown.clientHeight) + scrollTopx - 5
      }

      this.$nextTick(() => {
        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth


        if(this.$refs.dropdown.getBoundingClientRect().left + dropdownMenu.$el.offsetWidth >= w - 25) {
          // this.rightx = true
        }

        if(this.$refs.dropdown.getBoundingClientRect().right < (dropdownMenu.$el.clientWidth + 25)) {
          dropdownMenu.leftx = dropdownMenu.$el.clientWidth + this.$refs.dropdown.getBoundingClientRect().left
          this.rightx = true
          return
        }
        dropdownMenu.leftx = this.$refs.dropdown.getBoundingClientRect().left + (this.vsDropRight ? dropdownMenu.$el.clientWidth : this.$refs.dropdown.clientWidth );
      })
    },
    clickToogleMenu(evt) {
      if(evt.type == 'contextmenu') {
        evt.preventDefault()
      }
      let [dropdownMenu] = this.$children.filter(item => item.hasOwnProperty('dropdownVisible'))
      if(this.vsTriggerClick || this.vsTriggerContextmenu) {
        if(this.vsDropdownVisible && !evt.target.closest('.vs-dropdown--menu')) {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
        } else {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true
          window.addEventListener('click',() => {
            if(!evt.target.closest('.vs-con-dropdown') && !evt.target.closest('.vs-dropdown--menu')) {
              dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
            }
          })
        }
      }

      this.$emit('click')
    },
    toggleMenu(typex, evt) {
      let [dropdownMenu] = this.$children.filter(item => item.hasOwnProperty('dropdownVisible'))
      if(!this.vsTriggerClick && !this.vsTriggerContextmenu){
        if(typex == 'over'){
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true
        } else {
          if (!evt.relatedTarget.classList.contains('vs-dropdown-menu')) {
            dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
          }
        }
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDropDown_vsDropDownvue_type_script_lang_js_ = (vsDropDownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue





/* normalize component */

var vsDropDown_component = normalizeComponent(
  vsDropDown_vsDropDownvue_type_script_lang_js_,
  vsDropDownvue_type_template_id_5d4c1376_lang_html_render,
  vsDropDownvue_type_template_id_5d4c1376_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDown = (vsDropDown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=template&id=1842abea&lang=html&
var vsDropDownMenuvue_type_template_id_1842abea_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"dropdownx"}},[(_vm.dropdownVisible)?_c('div',{ref:"options",staticClass:"con-vs-dropdown--menu vs-dropdown-menu",class:{'rightx':_vm.vsDropRight || _vm.$parent.rightx,'notHeight': _vm.notHeight},style:({
      'left':`${_vm.leftx}px`,
      'top':`${_vm.topx}px`
    }),on:{"mouseleave":_vm.mouseleavex,"mouseenter":_vm.mouseenterx}},[(!_vm.vsCustomContent)?_c('ul',{staticClass:"vs-component vs-dropdown--menu"},[_vm._t("default")],2):_c('div',{staticClass:"vs-dropdown--custom vs-dropdown--menu"},[_vm._t("default")],2),_c('div',{ref:"menuAfter",class:[ _vm.vsDropRight ? 'vs-dropdown-right--menu--after' : 'vs-dropdown--menu--after']})]):_vm._e()])
}
var vsDropDownMenuvue_type_template_id_1842abea_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=template&id=1842abea&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=script&lang=js&

/* harmony default export */ var vsDropDownMenuvue_type_script_lang_js_ = ({
  name: "VsDropdownMenu",
  data: () => ({
    dropdownVisible: false,
    leftAfter: 20,
    leftx: 0,
    topx: 0,
    rightx: true,
    vsTriggerClick: false,
    vsDropRight: false,
    widthx: 0,
    notHeight: false,
    vsCustomContent: false,
    parentNode: null
  }),
  watch:{
    dropdownVisible(val) {
      let dropdownGroup = this.$children.filter(item => item.hasOwnProperty('activeGroup'))
      dropdownGroup.forEach((item_group)=>{
        item_group.activeGroup = false
      })
      this.setDirection()

      !val ? this.$parent.rightx = false : null
    }
  },
  mounted() {
    this.insertBody()
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods:{
    mouseenterx() {
      if (!this.vsTriggerClick) {
        this.dropdownVisible = true
        this.widthx = this.$el.clientWidth
      }
    },
    mouseleavex() {
      if (!this.vsTriggerClick) {
        this.dropdownVisible = false
        this.widthx = this.$el.clientWidth
      }
    },
    setDirection() {
      setTimeout(() => {
        const dropdown = this.parentNode
        const menuAfter = this.$refs.menuAfter
        if (!menuAfter) return
        if(dropdown && menuAfter && dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
          // const hasGroup = this.$children.find(it=>it.hasOwnProperty('activeGroup'))
          menuAfter.style.bottom = '-5px'
          menuAfter.style.transform = 'rotate(225deg)'
          return
        }
        menuAfter.style.top = '10px'
      }, 100)
    },
    toggleMenu(event){
      if(event.type == 'mouseover' && !this.vsTriggerClick){
        this.dropdownVisible = true
      }
      else if (!this.vsTriggerClick) {
        this.dropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    insertBody(){
      let elp = this.$el
      this.parentNode = this.$el.parentNode
      document.body.insertBefore(elp, document.body.firstChild)
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDropDown_vsDropDownMenuvue_type_script_lang_js_ = (vsDropDownMenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue





/* normalize component */

var vsDropDownMenu_component = normalizeComponent(
  vsDropDown_vsDropDownMenuvue_type_script_lang_js_,
  vsDropDownMenuvue_type_template_id_1842abea_lang_html_render,
  vsDropDownMenuvue_type_template_id_1842abea_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDownMenu = (vsDropDownMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownItem.vue?vue&type=template&id=32c610ab&lang=html&
var vsDropDownItemvue_type_template_id_32c610ab_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('li',{staticClass:"vs-component vs-dropdown--item",class:{'divider':_vm.divider},style:({
    'color':_vm.hoverx?_vm.giveColor()+' !important':null,
    'background':_vm.hoverx?_vm.giveColor(.01)+' !important':null
  }),on:{"click":_vm.closeParent,"mouseover":function($event){_vm.hoverx=true},"mouseout":function($event){_vm.hoverx=false}}},[(_vm.to)?_c('router-link',_vm._g(_vm._b({staticClass:"vs-dropdown--item-link",class:{'disabled':_vm.disabled},attrs:{"to":_vm.to}},'router-link',_vm.$attrs,false),_vm.$listeners),[_vm._v("\n    "+_vm._s(_vm.$attrs.disabled)+"\n    "),_vm._t("default")],2):_c('a',_vm._g(_vm._b({staticClass:"vs-dropdown--item-link",class:{'disabled':_vm.disabled}},'a',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)],1)
}
var vsDropDownItemvue_type_template_id_32c610ab_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue?vue&type=template&id=32c610ab&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownItem.vue?vue&type=script&lang=js&


/* harmony default export */ var vsDropDownItemvue_type_script_lang_js_ = ({
  name: "VsDropdownItem",
  inheritAttrs:false,
  props:{
    to:{},
    disabled:{
      default:false,
      type:Boolean
    },
    divider:{
      default:false,
      type:Boolean
    },
  },
  data: () => ({
    hoverx: false,
    vsDropDownItem: true,
    color: null
  }),
  mounted () {
    this.changeColor()
  },
  updated() {
    this.changeColor()
  },
  methods:{
    closeParent() {
      if(this.disabled) return
      searchParent(this)
      function searchParent(_this) {
        let parent = _this.$parent
        if(!parent.$el.className) return
        if(parent.$el.className.indexOf('parent-dropdown') == -1) {
          searchParent(parent)
        } else {
          let [dropdownMenu] = parent.$children.filter(item => {
            return item.hasOwnProperty('dropdownVisible')
          })
          dropdownMenu.dropdownVisible = parent.vsDropdownVisible = false
        }
      }
    },
    changeColor() {
      let _self = this
      searchParent(this)
      function searchParent(_this){
        let parent = _this.$parent
        if(!parent.$el.className){
          return
        }
        if(parent.$el.className.indexOf('parent-dropdown') == -1) {
          searchParent(parent)
        } else {
          _self.color = parent.color
        }
      }
    },
    giveColor(opacity = 1) {
      return utils_color.rColor(this.color,opacity)
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDropDown_vsDropDownItemvue_type_script_lang_js_ = (vsDropDownItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue





/* normalize component */

var vsDropDownItem_component = normalizeComponent(
  vsDropDown_vsDropDownItemvue_type_script_lang_js_,
  vsDropDownItemvue_type_template_id_32c610ab_lang_html_render,
  vsDropDownItemvue_type_template_id_32c610ab_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDownItem = (vsDropDownItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=template&id=4fe7368c&lang=html&
var vsDropDownGroupvue_type_template_id_4fe7368c_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('li',{ref:"group",staticClass:"vs-component vs-dropdown--group",class:{
    'marginIcon': _vm.vsCollapse,
    'no-cascading': !_vm.vsCollapse,
    'group-rightx': _vm.rightx
  },on:{"click":_vm.clickGroup}},[(_vm.vsCollapse)?_c('span',{staticClass:"span vs-dropdown--group-label",domProps:{"textContent":_vm._s(_vm.vsLabel)}}):_c('h3',{domProps:{"textContent":_vm._s(_vm.vsLabel)}}),(_vm.vsCollapse)?_c('vs-icon',{staticClass:"icon-group notranslate vs-dropdown--group-icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.vsIcon}}):_vm._e(),_c('div',{ref:"ulx",staticClass:"con-dropdown--group-con-ul",class:{'con-dropdown-group-no-cascading':!_vm.vsCollapse},style:(_vm.styleItems)},[_c('ul',{staticClass:"con-dropdown--group-ul"},[_vm._t("default")],2)])],1)
}
var vsDropDownGroupvue_type_template_id_4fe7368c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=template&id=4fe7368c&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=script&lang=js&

/* harmony default export */ var vsDropDownGroupvue_type_script_lang_js_ = ({
  name:'VsDropdownGroup',
  props:{
    vsLabel:{
      default:'Options',
      type:String
    },
    vsCollapse:{
      default:false,
      type:Boolean
    },
    vsIcon: {
      default: 'keyboard_arrow_right',
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    }
  },
  data: () => ({
    activeGroup: false,
    rightx: false,
    widthx: 0,
    maxHeight: '0px',
  }),
  computed:{
    styleItems() {
      return {
        maxHeight: this.vsCollapse ? this.maxHeight : 'auto'
      }
    }
  },
  methods:{
    clickGroup(evt) {
      if(evt.target != this.$refs.group) return
      if(!this.openHover) {
        let scrollHeight = this.$refs.ulx.scrollHeight
        if(this.maxHeight == '0px') {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = 'none'
          },300)
        } else {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = `${0}px`
          }, 50)
        }
      }
    },
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done) {
      // let h = this.$refs.ulx.scrollHeight
      // this.$refs.ulx.style.height = h + 'px'
      // el.style.opacity = 1
      // parents(this)
      // function parents(_this){
      //   if(_this.$parent.$el.className.search('vs-dropdown--group')!=-1){
      //     // this.$parent.$el
      //     let hp = _this.$parent.$refs.ulx.scrollHeight
      //     _this.$parent.$refs.ulx.style.height = hp + h + 'px'
      //     parents(_this.$parent)
      //   }
      // }

      done()
    },
    leave: function (el) {
      let __this = this
      addParents(this)
      function addParents(_this) {
        if(_this.$parent.$refs.ulx) {
          let hp = _this.$parent.$refs.ulx.scrollHeight - __this.$refs.ulx.scrollHeight
          _this.$parent.$refs.ulx.style.height = hp + 'px'
          addParents(_this.$parent)
        }
      }
      if(!this.$parent.$refs.ulx) {
        this.$refs.ulx.style.height = 0 + 'px'
      }
      this.$refs.ulx.style.height = 0 + 'px'
      el.style.opacity = 0
    },
    toggleGroup(evt) {
      if (evt.target == this.$refs.group) {
        this.activeGroup = !this.activeGroup
      }
    }
  },
});

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDropDown_vsDropDownGroupvue_type_script_lang_js_ = (vsDropDownGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue





/* normalize component */

var vsDropDownGroup_component = normalizeComponent(
  vsDropDown_vsDropDownGroupvue_type_script_lang_js_,
  vsDropDownGroupvue_type_template_id_4fe7368c_lang_html_render,
  vsDropDownGroupvue_type_template_id_4fe7368c_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDownGroup = (vsDropDownGroup_component.exports);
// CONCATENATED MODULE: ./src/components/vsDropDown/index.js





/* harmony default export */ var components_vsDropDown = (Vue => {
  Vue.component(vsDropDown.name, vsDropDown)
  Vue.component(vsDropDownMenu.name, vsDropDownMenu)
  Vue.component(vsDropDownItem.name, vsDropDownItem)
  Vue.component(vsDropDownGroup.name, vsDropDownGroup)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTable.vue?vue&type=template&id=a1559ada&
var vsTablevue_type_template_id_a1559ada_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-component vs-con-table",class:[{'stripe': _vm.stripe, 'hoverFlat': _vm.hoverFlat}, `vs-table-${_vm.color}`]},[_c('header',{staticClass:"header-table vs-table--header"},[_vm._t("header"),(_vm.search)?_c('div',{staticClass:"con-input-search vs-table--search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchx),expression:"searchx"}],staticClass:"input-search vs-table--search-input",attrs:{"type":"text"},domProps:{"value":(_vm.searchx)},on:{"input":function($event){if($event.target.composing)return;_vm.searchx=$event.target.value}}}),_c('vs-icon',{attrs:{"icon":"search"}})],1):_vm._e()],2),_c('div',{staticClass:"con-tablex vs-table--content"},[_c('div',{staticClass:"vs-con-tbody vs-table--tbody",style:(_vm.styleConTbody)},[_c('table',{ref:"table",staticClass:"vs-table vs-table--tbody-table"},[_c('thead',{ref:"thead",staticClass:"vs-table--thead"},[_c('tr',[(_vm.multiple || _vm.hasExpadableData)?_c('th',{staticClass:"td-check"},[(_vm.multiple)?_c('span',{staticClass:"con-td-check"},[_c('vs-checkbox',{key:_vm.isCheckedLine ? 'remove' : 'check',attrs:{"icon":_vm.isCheckedLine ? 'remove' : 'check',"checked":_vm.isCheckedMultiple,"size":"small"},on:{"change":_vm.changeCheckedMultiple}})],1):_vm._e()]):_vm._e(),_vm._t("thead")],2)]),_vm._t("default",null,{"data":_vm.datax})],2)]),(_vm.isNoData)?_c('div',{staticClass:"not-data-table vs-table--not-data"},[_vm._v("\n      "+_vm._s(_vm.noDataText)+"\n    ")]):_vm._e(),(_vm.pagination)?_c('div',{staticClass:"con-pagination-table vs-table--pagination"},[_c('vs-pagination',{attrs:{"total":_vm.searchx && !_vm.sst ? _vm.getTotalPagesSearch : _vm.getTotalPages,"description-items":_vm.descriptionItems,"max-items":_vm.maxItemsx,"size-array":_vm.queriedResults.length,"description":_vm.description,"description-title":_vm.descriptionTitle,"description-connector":_vm.descriptionConnector,"description-body":_vm.descriptionBody},on:{"changeMaxItems":_vm.changeMaxItems},model:{value:(_vm.currentx),callback:function ($$v) {_vm.currentx=$$v},expression:"currentx"}})],1):_vm._e()])])
}
var vsTablevue_type_template_id_a1559ada_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTable.vue?vue&type=template&id=a1559ada&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTable.vue?vue&type=script&lang=js&

/* harmony default export */ var vsTablevue_type_script_lang_js_ = ({
  name: "VsTable",
  props:{
    value:{},
    color: {
      default:'primary',
      type: String
    },
    noDataText: {
      default: 'No data Available',
      type: String
    },
    stripe:{
      default: false,
      type: Boolean
    },
    hoverFlat:{
      default: false,
      type: Boolean
    },
    maxHeight:{
      default: 'auto',
      type: String
    },
    multiple:{
      default: false,
      type: Boolean
    },
    data:{
      default: null,
    },
    notSpacer:{
      default:false,
      type:Boolean
    },
    search:{
      default: false,
      type: Boolean
    },
    maxItems:{
      default: 5,
      type: [Number, String]
    },
    pagination:{
      default: false,
      type: Boolean
    },
    description:{
      default: false,
      type: Boolean
    },
    descriptionItems:{
      default: () => [],
      type: Array
    },
    descriptionTitle: {
      type:String,
    },
    descriptionConnector: {
      type:String,
    },
    descriptionBody: {
      type:String,
    },
    currentPage: {
      default: 1,
      type: Number | String
    },
    sst:{
      default: false,
      type: Boolean
    },
    total: {
      type: Number,
      default: 0
    },
    onlyClickCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data:()=>({
    headerWidth: '100%',
    trs: [],
    datax: [],
    searchx: null,
    currentx: 1,
    maxItemsx: 5,
    hasExpadableData: false,
    currentSortKey: null,
    currentSortType: null
  }),
  computed:{
    getTotalPages() {
      const totalLength = this.sst && this.total ? this.total : this.data.length
      return Math.ceil(totalLength / this.maxItemsx)
    },
    getTotalPagesSearch() {
      return Math.ceil(this.queriedResults.length / this.maxItems)
    },
    queriedResults() {
      let queriedResults = this.data
      if(this.searchx && this.search) {
        let dataBase = this.data
        queriedResults = dataBase.filter((tr)=>{
          let values = this.getValues(tr).toString().toLowerCase()
          return values.indexOf(this.searchx.toLowerCase()) != -1
        })
      }
      return queriedResults
    },
    isNoData() {
      if(typeof(this.datax) == Object) {
        return this.datax? Object.keys(this.datax).length == 0: false && false
      } else {
        return this.datax?this.datax.length == 0: false && false
      }
    },
    isCheckedLine () {
      let lengthx = this.data.length
      let lengthSelected = this.value.length
      return lengthx !== lengthSelected
    },
    isCheckedMultiple () {
      return this.value.length > 0
    },
    styleConTbody () {
      return {
        maxHeight: this.maxHeight,
        overflow: this.maxHeight != 'auto'?'auto':null
      }
    },
    getThs () {
      let ths = this.$slots.thead.filter(item => item.tag )
      return ths.length
    },
    tableHeaderStyle () {
      return {
        width: this.headerWidth
      }
    },
  },
  watch:{
    currentPage() {
      this.currentx = this.currentPage
    },
    currentx() {
      if(this.sst) {
        this.$emit('change-page', this.currentx)
      } else {
        this.loadData()
      }
    },
    maxItems(val) {
      this.maxItemsx = val
      this.loadData()
    },
    maxItemsx() {
      this.loadData()
    },
    data() {
      this.loadData()
      this.$nextTick(() => {
        if(this.datax.length > 0) {
          this.changeTdsWidth()
        }
      })
    },
    searchx() {
      if(this.sst) {
        this.$emit('search', this.searchx)
      } else {
        this.loadData()
        this.currentx = 1
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.listenerChangeWidth)
    this.maxItemsx = this.maxItems
    this.loadData()

    // this.$nextTick(() => {
    //   if(this.datax.length > 0) {
    //     this.changeTdsWidth()
    //   }
    // })
  },
  destroyed () {
    window.removeEventListener('resize', this.listenerChangeWidth)
  },
  methods:{
    loadData() {
      let max = Math.ceil(this.currentx * this.maxItemsx)
      let min = max - this.maxItemsx

      if(!this.searchx || this.sst) {
        this.datax = this.pagination ? this.getItems(min, max) : this.sortItems(this.data) || [];
      } else {
        this.datax = this.pagination ? this.getItemsSearch(min, max) : this.getItemsSearch(min, max) || []
      }
    },
    getItems(min, max) {
      let dataBase = this.sortItems(this.data);

      let items = []
      dataBase.forEach((item, index) => {
        if(index >= min && index < max) {
          items.push(item)
        }
      })
      return items
    },
    sortItems(data) {
      const { currentSortKey, currentSortType } = this;
      function compare(a,b) {
        if (a[currentSortKey] < b[currentSortKey])
          return currentSortType == 'desc'?1:-1;
        if (a[currentSortKey] > b[currentSortKey])
          return currentSortType == 'desc'?-1:1;
        return 0;
      }
      return currentSortType !== null ? [...data].sort(compare) : [...data];
    },
    getItemsSearch(min, max) {
      const search = this.normalize(this.searchx);

      return this.sortItems(this.data).filter((tr)=>{
        return this.normalize(this.getValues(tr).toString()).indexOf(search) != -1
      }).filter((_, index) => {
        return (index >= min && index < max);
      });
    },
    sort(key, sortType) {
      this.currentSortKey = key;
      this.currentSortType = sortType;
      if(this.sst) {
        this.$emit('sort', key, sortType)
        return
      }
      this.loadData();
    },
    normalize(string) {
      return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    },
    getValues: function getValues(obj) {
      function flattenDeep(val) {
        return Object.values(val || []).reduce((acc, val) => (typeof val === 'object') ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
      }

      return flattenDeep(obj).filter(function (item) {
        return (typeof item === 'string') || (typeof item === 'number');
      });
    },
    changeCheckedMultiple () {
      let lengthx = this.data.length
      let lengthSelected = this.value.length
      let selectedx = (lengthx - lengthSelected)
      if (selectedx == 0) {
        this.$emit('input', [])
      } else {
        this.$emit('input', this.data)
      }
    },
    handleCheckbox(tr) {
      if(this.multiple && this.onlyClickCheckbox){
        let val = this.value.slice(0)
        if(val.includes(tr)) {
          val.splice(val.indexOf(tr),1)
        } else {
          val.push(tr)
        }

        this.$emit('input', val)
        this.$emit('selected', tr)
      }
    },
    clicktr (tr, isTr) {
      if(this.multiple && isTr && !this.onlyClickCheckbox){
        let val = this.value.slice(0)
        if(val.includes(tr)) {
          val.splice(val.indexOf(tr),1)
        } else {
          val.push(tr)
        }

        this.$emit('input', val)
        this.$emit('selected', tr)
      } else if (isTr && !this.onlyClickCheckbox) {
        this.$emit('input', tr)
        this.$emit('selected', tr)
      }
    },
    dblclicktr (tr, isTr) {

      if (isTr) {
        this.$emit('dblSelection',tr)
      }

    },
    listenerChangeWidth () {
      this.headerWidth = `${this.$refs.table.offsetWidth}px`
      this.changeTdsWidth()
    },
    changeTdsWidth() {
      if(!this.value) return

      let tbody = this.$refs.table.querySelector('tbody')

      // Adding condition removes querySelector none error - if tbody isnot present
      if(tbody) {
        let trvs = tbody.querySelector('.tr-values')
        if (trvs === undefined || trvs === null ) return
        let tds = trvs.querySelectorAll('.td')

        let tdsx = []

        tds.forEach((td, index) => {
          tdsx.push({index: index, widthx: td.offsetWidth})
        });


        let colgrouptable = this.$refs.colgrouptable
        if (colgrouptable !== undefined && colgrouptable !== null ) {
          let colsTable = colgrouptable.querySelectorAll('.col')
          colsTable.forEach((col, index) => {
            col.setAttribute('width', tdsx[index].widthx)
          });
        }

      }
    },
    changeMaxItems (index) {
      this.maxItemsx = this.descriptionItems[index]
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsTable/vsTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsTablevue_type_script_lang_js_ = (vsTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTable.vue





/* normalize component */

var vsTable_component = normalizeComponent(
  vsTable_vsTablevue_type_script_lang_js_,
  vsTablevue_type_template_id_a1559ada_render,
  vsTablevue_type_template_id_a1559ada_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTable = (vsTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTh.vue?vue&type=template&id=78e15cd8&
var vsThvue_type_template_id_78e15cd8_render = function render(){var _vm=this,_c=_vm._self._c;return _c('th',{attrs:{"colspan":"1","rowspan":"1"},on:{"click":function($event){return _vm.sortValue()}}},[_c('div',{staticClass:"vs-table-text"},[_vm._t("default"),(_vm.isColumnSelectedForSort && _vm.currentSort != 0)?_c('span',{staticClass:"sort-th"},[_c('vs-icon',{staticClass:"th-sort-icon",attrs:{"icon":_vm.currentSort == 1 ? 'expand_less' : 'expand_more'}})],1):_vm._e()],2)])
}
var vsThvue_type_template_id_78e15cd8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTh.vue?vue&type=template&id=78e15cd8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTh.vue?vue&type=script&lang=js&

/* harmony default export */ var vsThvue_type_script_lang_js_ = ({
  name: 'VsTh',
  props:{
    sortKey:{
      default:null,
      type: String
    }
  },
  data: () => ({
    thIndex:0,
    thwidth: '100%',
    currentSort: 0,
    sortStatuses: [
      null,
      'asc',
      'desc'
    ]
  }),
  computed: {
    styleth () {
      return {
        width: this.thwidth
      }
    },
    isColumnSelectedForSort() {
      if(!this.sortKey) {
        return false;
      }
      if(this.$parent.currentSortKey != this.sortKey) {
        this.resetSort();
      }
      return this.$parent.currentSortKey == this.sortKey;
    },
    parentSortStatus() {
      return this.$parent.currentSortType;
    }
  },
  methods:{
    sortValue () {
      this.currentSort = this.currentSort !== 2 ? this.currentSort + 1 : 0;
      this.$parent.sort(this.sortKey, this.sortStatuses[this.currentSort]);
    },
    resetSort() {
      this.currentSort = 0;
    }
  }

});

// CONCATENATED MODULE: ./src/components/vsTable/vsTh.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsThvue_type_script_lang_js_ = (vsThvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTh.vue





/* normalize component */

var vsTh_component = normalizeComponent(
  vsTable_vsThvue_type_script_lang_js_,
  vsThvue_type_template_id_78e15cd8_render,
  vsThvue_type_template_id_78e15cd8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTh = (vsTh_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTr.vue?vue&type=template&id=6d2bf854&
var vsTrvue_type_template_id_6d2bf854_render = function render(){var _vm=this,_c=_vm._self._c;return _c('tr',{ref:"tableTr",staticClass:"tr-values vs-table--tr",class:[`tr-table-state-${_vm.state}`, {'is-selected':_vm.isSelected, 'selected': _vm.data, 'is-expand': _vm.maxHeight != '0px', 'activeEdit': _vm.activeEdit, 'hoverFlat': _vm.$parent.hoverFlat}],on:{"dblclick":_vm.dblclicktr,"click":_vm.clicktr}},[(_vm.$parent.multiple || _vm.$slots.expand)?_c('td',{staticClass:"td-check",class:{'active-expanded': _vm.expanded}},[(_vm.$parent.multiple)?_c('vs-checkbox',{attrs:{"checked":_vm.isSelected,"size":"small"},on:{"change":_vm.handleCheckbox}}):_vm._e(),(_vm.$slots.expand)?_c('vs-icon',[_vm._v("keyboard_arrow_down")]):_vm._e()],1):_vm._e(),_vm._t("default")],2)
}
var vsTrvue_type_template_id_6d2bf854_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTr.vue?vue&type=template&id=6d2bf854&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTrExpand.vue?vue&type=template&id=bfc23f06&
var vsTrExpandvue_type_template_id_bfc23f06_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"tr-expand"}},[(_vm.active)?_c('tr',{staticClass:"tr-expand"},[_c('td',{attrs:{"colspan":_vm.colspan}},[_c('div',{staticClass:"content-tr-expand"},[_vm._t("default"),(_vm.close)?_c('button',{staticClass:"tr-expand--close",on:{"click":function($event){return _vm.$emit('click', $event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("\n            clear\n          ")])]):_vm._e()],2)])]):_vm._e()])
}
var vsTrExpandvue_type_template_id_bfc23f06_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTrExpand.vue?vue&type=template&id=bfc23f06&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTrExpand.vue?vue&type=script&lang=js&

/* harmony default export */ var vsTrExpandvue_type_script_lang_js_ = ({
  props: {
    close: {
      type: Boolean,
      default: false
    },
    colspan:{
      default: 1,
      type: Number
    }
  },
  data:() => ({
    active: false
  }),
  mounted() {
    this.active = true
  }
});

// CONCATENATED MODULE: ./src/components/vsTable/vsTrExpand.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsTrExpandvue_type_script_lang_js_ = (vsTrExpandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTrExpand.vue





/* normalize component */

var vsTrExpand_component = normalizeComponent(
  vsTable_vsTrExpandvue_type_script_lang_js_,
  vsTrExpandvue_type_template_id_bfc23f06_render,
  vsTrExpandvue_type_template_id_bfc23f06_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTrExpand = (vsTrExpand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTr.vue?vue&type=script&lang=js&



/* harmony default export */ var vsTrvue_type_script_lang_js_ = ({
  name: 'VsTr',
  props:{
    state:{
      type:String,
      default: null
    },
    data: {
      default: null
    },
  },
  data:()=>({
    colspan:0,
    expanded: false,
    maxHeight:'0px',
    activeEdit: false
  }),
  computed:{
    styleExpand () {
      return {
        maxHeight: this.maxHeight
      }
    },
    getColspanExpand () {
      let lengthx = this.$parent.$refs.colgroup.querySelectorAll('th').length
      return lengthx
    },
    isSelected(){
      if(this.$parent.multiple && this.$parent.value) {
        return this.data ? this.$parent.value.some(
              (item) => JSON.stringify(item) === JSON.stringify(this.data)
            ) : false
      } else {
        return this.data ? this.$parent.value == this.data : false
      }
    }
  },
  watch: {
    '$parent.datax'() {
      this.collapseExpandedData()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.colspan = this.$parent.$refs.thead.querySelectorAll('th').length
      if (this.$slots.expand) {
        this.colspan++
      }
    })
  },
  created() {
    if(this.$slots.expand) this.$parent.hasExpadableData = true
  },
  methods:{
    handleCheckbox() {
      this.$parent.handleCheckbox(this.data)
    },
    insertAfter(e,i){
      if(e.nextSibling){
        e.parentNode.insertBefore(i,e.nextSibling);
      } else {
        e.parentNode.appendChild(i);
      }
    },
    clicktr (evt) {
      this.$parent.clicktr(this.data, true)

      if (this.$slots.expand) {
        this.clicktd(evt)
      }
    },
    dblclicktr () {
      this.$parent.dblclicktr(this.data, true)
    },
    clicktd (evt) {
      if(this.$parent.multiple || !this.$slots.expand) return
      let tr = evt.target.closest('tr')
      if(this.expanded) {
        tr.parentNode.removeChild(tr.nextSibling)
        tr.classList.remove('tr-expandedx')
        this.expanded = false
      } else {
        tr.classList.add('tr-expandedx')
        let trx = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsTrExpand);
        let instance = new trx({parent: this, propsData: {colspan: this.colspan}});
        instance.vm = instance.$mount();
        var newTR = document.createElement('tr').appendChild(instance.vm.$el);
        this.insertAfter(tr, newTR)
        this.expanded = true
      }
    },
    collapseExpandedData() {
      if(this.expanded){
        const tr = this.$refs.tableTr
        tr.parentNode.removeChild(tr.nextSibling)
        tr.classList.remove('tr-expandedx')
        this.expanded = false
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsTable/vsTr.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsTrvue_type_script_lang_js_ = (vsTrvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTr.vue





/* normalize component */

var vsTr_component = normalizeComponent(
  vsTable_vsTrvue_type_script_lang_js_,
  vsTrvue_type_template_id_6d2bf854_render,
  vsTrvue_type_template_id_6d2bf854_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTr = (vsTr_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTd.vue?vue&type=template&id=b91e7154&
var vsTdvue_type_template_id_b91e7154_render = function render(){var _vm=this,_c=_vm._self._c;return _c('td',{ref:"td",staticClass:"td vs-table--td",class:{'td-edit': _vm.$slots.edit}},[_c('span',{on:{"click":_vm.clicktd}},[(_vm.$slots.edit)?_c('vs-icon',{staticClass:"icon-edit",attrs:{"icon":"edit"}}):_vm._e(),_vm._t("default"),(_vm.$slots.edit)?_c('span',{staticClass:"empty"},[_vm._v("\n      "+_vm._s(_vm.data ? '' : 'Empty')+"\n    ")]):_vm._e()],2)])
}
var vsTdvue_type_template_id_b91e7154_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTd.vue?vue&type=template&id=b91e7154&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTd.vue?vue&type=script&lang=js&



/* harmony default export */ var vsTdvue_type_script_lang_js_ = ({
  name: 'VsTd',
  props:{
    data:{
      default: null
    }
  },
  data: () => ({
    activeEdit: false
  }),
  watch:{
    activeEdit() {
      this.$parent.activeEdit = this.activeEdit
    }
  },
  methods:{
    insertAfter(e,i){
      if(e.nextSibling){
        e.parentNode.insertBefore(i,e.nextSibling);
      } else {
        e.parentNode.appendChild(i);
      }
    },
    clicktd (evt) {
      if(this.$slots.edit) {
        let tr = evt.target.closest('tr')
        if(!this.activeEdit) {
          let trx = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsTrExpand);
          let instance = new trx({parent: this, propsData: {colspan: this.$parent.colspan, close: true}});
          instance.$slots.default = this.$slots.edit
          instance.vm = instance.$mount();
          instance.$on('click', this.close)
          var nuevo_parrafo = document.createElement('tr').appendChild(instance.vm.$el);
          this.insertAfter(tr, nuevo_parrafo)
          this.activeEdit = true
          setTimeout(()=>{
            window.addEventListener('click', this.closeEdit)
          }, 20)
        }
      }
    },
    closeEdit (evt) {
      if (!evt.target.closest('.tr-expand') && !evt.target.closest('.vs-select--options')) {
        this.close()
      }
    },
    close(){
      let tr = this.$refs.td.closest('tr')
      this.activeEdit = false
      tr.parentNode.removeChild(tr.nextSibling)
      window.removeEventListener('click', this.closeEdit)
    },
    saveEdit () {
      this.activeEdit = false
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsTable/vsTd.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsTdvue_type_script_lang_js_ = (vsTdvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTd.vue





/* normalize component */

var vsTd_component = normalizeComponent(
  vsTable_vsTdvue_type_script_lang_js_,
  vsTdvue_type_template_id_b91e7154_render,
  vsTdvue_type_template_id_b91e7154_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTd = (vsTd_component.exports);
// CONCATENATED MODULE: ./src/components/vsTable/index.js





/* harmony default export */ var components_vsTable = (Vue => {
  Vue.component(vsTable.name, vsTable)
  Vue.component(vsTh.name, vsTh)
  Vue.component(vsTr.name, vsTr)
  Vue.component(vsTd.name, vsTd)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTextarea/vsTextarea.vue?vue&type=template&id=663276b0&lang=html&
var vsTextareavue_type_template_id_663276b0_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-component vs-con-textarea",class:[`vs-textarea-${_vm.color}`, {'textarea-danger': _vm.counter ? (_vm.value && _vm.value.length > _vm.counter) : false, 'focusx': _vm.isFocus}],style:(_vm.style)},[(_vm.label)?_c('h4',[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]):_vm._e(),_c('textarea',_vm._g(_vm._b({staticClass:"vs-textarea",domProps:{"value":_vm.value}},'textarea',_vm.$attrs,false),_vm.listeners)),(_vm.counter)?_c('div',{staticClass:"count vs-textarea--count"},[_vm._v("\n    "+_vm._s(_vm.value ? _vm.value.length : 0)+" / "+_vm._s(_vm.counter)+"\n  ")]):_vm._e()])
}
var vsTextareavue_type_template_id_663276b0_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue?vue&type=template&id=663276b0&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTextarea/vsTextarea.vue?vue&type=script&lang=js&


/* harmony default export */ var vsTextareavue_type_script_lang_js_ = ({
  name: "VsTextarea",
  inheritAttrs:false,
  props:{
    value:{},
    label:{
      default:null,
      type: String
    },
    color:{
      default:'primary',
      type:String
    },
    counter:{
      default: null,
      type: [Number, String]
    },
    counterDanger:{
      default: false,
      type: Boolean
    },
    height:{
      default:null,
      type: String
    },
    width:{
      default:null,
      type: String
    }
  },
  data:()=>({
    isFocus: false
  }),
  computed:{
    style() {
      let style = {}
      style.border = `1px solid ${this.isFocus?utils_color.getColor(this.color,1):'rgba(0, 0, 0,.08)'}`
      style.height = this.height
      style.width = this.width

      return style
    },
    listeners() {
      return {
        ...this.$listeners,
        input:(evt) => {
          this.$emit('input', evt.target.value)
        },
        focus:() => {
          this.focus()
        },
        blur:() => {
          this.blur()
        }
      }
    }
  },
  watch:{
    value() {
      if(this.value && this.value.length > this.counter) {
        this.$emit('update:counterDanger', true)
      } else {
        this.$emit('update:counterDanger', false)
      }
    }
  },
  methods:{
    focus() {
      this.isFocus = true
      this.$emit('focus')
    },
    blur() {
      this.isFocus = false
      this.$emit('blur')
    }
  }
});


// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTextarea_vsTextareavue_type_script_lang_js_ = (vsTextareavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue





/* normalize component */

var vsTextarea_component = normalizeComponent(
  vsTextarea_vsTextareavue_type_script_lang_js_,
  vsTextareavue_type_template_id_663276b0_lang_html_render,
  vsTextareavue_type_template_id_663276b0_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTextarea = (vsTextarea_component.exports);
// CONCATENATED MODULE: ./src/components/vsTextarea/index.js


/* harmony default export */ var components_vsTextarea = (Vue => {
  Vue.component(vsTextarea.name, vsTextarea)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapse.vue?vue&type=template&id=612664fc&
var vsCollapsevue_type_template_id_612664fc_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-collapse",class:[_vm.type]},[_vm._t("default")],2)
}
var vsCollapsevue_type_template_id_612664fc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue?vue&type=template&id=612664fc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapse.vue?vue&type=script&lang=js&

/* harmony default export */ var vsCollapsevue_type_script_lang_js_ = ({
  name: 'VsCollapse',
  props:{
    accordion:{
      default:false,
      type: Boolean
    },
    type:{
      default:'default',
      type: String
    },
    openHover:{
      default:false,
      type: Boolean
    }
  },
  methods:{
    emitChange() {
      this.$emit('change')
    },
    closeAllItems(el) {
      let children = this.$children
      children.map((item) => {
        if(item.$el !== el) {
          item.maxHeight = '0px'
        }
      })
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCollapse_vsCollapsevue_type_script_lang_js_ = (vsCollapsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue





/* normalize component */

var vsCollapse_component = normalizeComponent(
  vsCollapse_vsCollapsevue_type_script_lang_js_,
  vsCollapsevue_type_template_id_612664fc_render,
  vsCollapsevue_type_template_id_612664fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCollapse = (vsCollapse_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapseItem.vue?vue&type=template&id=fdc77458&
var vsCollapseItemvue_type_template_id_fdc77458_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-collapse-item",class:{'open-item': _vm.maxHeight != '0px', 'disabledx': _vm.disabled},on:{"mouseover":_vm.mouseover,"mouseout":_vm.mouseout}},[_c('header',{staticClass:"vs-collapse-item--header",on:{"click":_vm.toggleContent}},[_vm._t("header"),(!_vm.notArrow)?_c('span',{staticClass:"icon-header vs-collapse-item--icon-header"},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconArrow}})],1):_vm._e()],2),_c('div',{ref:"content",staticClass:"vs-collapse-item--content",style:(_vm.styleContent)},[_c('div',{staticClass:"con-content--item"},[_vm._t("default")],2)])])
}
var vsCollapseItemvue_type_template_id_fdc77458_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue?vue&type=template&id=fdc77458&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapseItem.vue?vue&type=script&lang=js&




/* harmony default export */ var vsCollapseItemvue_type_script_lang_js_ = ({
  name:'VsCollapseItem',
  components: {
    vsicon: components_vsIcon
  },
  props:{
    open: {
      default: false,
      type: Boolean
    },
    disabled:{
      default:false,
      type: Boolean
    },
    notArrow:{
      default: false,
      type: Boolean
    },
    iconArrow:{
      default: 'keyboard_arrow_down',
      type: String
    },
    iconPack:{
      default: 'material-icons',
      type: String
    },
    sst: {
      default: false,
      type: Boolean
    }
  },
  data:() => ({
    maxHeight: '0px',
    // only used for sst
    dataReady: false
  }),
  computed:{
    accordion() {
      return this.$parent.accordion
    },
    openHover() {
      return this.$parent.openHover
    },
    styleContent() {
      return {
        maxHeight: this.maxHeight
      }
    }
  },
  watch:{
    maxHeight() {
      this.$parent.emitChange()
    },
    ready(newVal, oldVal) {
      if (oldVal != newVal && newVal) {
        this.initMaxHeight()
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.changeHeight)
    const maxHeightx = this.$refs.content.scrollHeight
    if(this.open) {
      this.maxHeight = `${maxHeightx}px`
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeHeight);
  },
  methods:{
    changeHeight () {
      const maxHeightx = this.$refs.content.scrollHeight
      if(this.maxHeight != '0px') {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    toggleContent() {
      if(this.openHover || this.disabled) return

      if(this.accordion) {
        this.$parent.closeAllItems(this.$el)
      }

      if (this.sst && !this.dataReady) {
        this.$emit('fetch', {
          done: () => {
            this.initMaxHeight();
            this.dataReady = true
          }
        })
      } else {
        this.initMaxHeight()
      }
    },
    initMaxHeight() {
      const maxHeightx = this.$refs.content.scrollHeight
      if(this.maxHeight == '0px') {
        this.maxHeight = `${maxHeightx}px`
      } else {
        this.maxHeight = `0px`
      }
    },
    mouseover() {
      if(this.disabled) return
      let maxHeightx = this.$refs.content.scrollHeight
      if(this.openHover) {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    mouseout() {
      if(this.openHover) {
        this.maxHeight = `0px`
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCollapse_vsCollapseItemvue_type_script_lang_js_ = (vsCollapseItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue





/* normalize component */

var vsCollapseItem_component = normalizeComponent(
  vsCollapse_vsCollapseItemvue_type_script_lang_js_,
  vsCollapseItemvue_type_template_id_fdc77458_render,
  vsCollapseItemvue_type_template_id_fdc77458_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCollapseItem = (vsCollapseItem_component.exports);
// CONCATENATED MODULE: ./src/components/vsCollapse/index.js



/* harmony default export */ var components_vsCollapse = (Vue => {
  Vue.component(vsCollapse.name, vsCollapse)
  Vue.component(vsCollapseItem.name, vsCollapseItem)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImages.vue?vue&type=template&id=436ca6f9&lang=html&
var vsImagesvue_type_template_id_436ca6f9_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-component vs-images",class:[`vs-images-hover-${_vm.hover}`, {'alternating': _vm.alternating, 'notBorderRadius': _vm.notBorderRadius, 'notMargin': _vm.notMargin}]},[_c('ul',{staticClass:"vs-ul-images vs-images--ul"},[_vm._t("default")],2)])
}
var vsImagesvue_type_template_id_436ca6f9_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue?vue&type=template&id=436ca6f9&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImages.vue?vue&type=script&lang=js&

/* harmony default export */ var vsImagesvue_type_script_lang_js_ = ({
  name: "VsImages",
  inheritAttrs:false,
  props:{
    hover:{
      default:'default',
      type: String
    },
    alternating: {
      default: false,
      type: Boolean
    },
    notBorderRadius:{
      default: false,
      type: Boolean
    },
    notMargin:{
      default: false,
      type: Boolean
    }
  },
  data:()=>({

  }),
});

// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsImages_vsImagesvue_type_script_lang_js_ = (vsImagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue





/* normalize component */

var vsImages_component = normalizeComponent(
  vsImages_vsImagesvue_type_script_lang_js_,
  vsImagesvue_type_template_id_436ca6f9_lang_html_render,
  vsImagesvue_type_template_id_436ca6f9_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsImages = (vsImages_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImage.vue?vue&type=template&id=347c0686&
var vsImagevue_type_template_id_347c0686_render = function render(){var _vm=this,_c=_vm._self._c;return _c('li',{staticClass:"vs-image"},[_c('div',{staticClass:"con-vs-image"},[_c('div',{staticClass:"vs-image--img",style:(_vm.styleImage),attrs:{"v-bind":_vm.$attrs}})]),_c('img',{staticClass:"imag-blur",attrs:{"src":_vm.src,"alt":""}})])
}
var vsImagevue_type_template_id_347c0686_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue?vue&type=template&id=347c0686&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImage.vue?vue&type=script&lang=js&

/* harmony default export */ var vsImagevue_type_script_lang_js_ = ({
  name: 'VsImage',
  inheritAttrs: false,
  props:{
    src:{
      default: null,
      type: String
    }
  },
  computed:{
    styleImage () {
      return {
        backgroundImage: `url(${this.src})`
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsImages_vsImagevue_type_script_lang_js_ = (vsImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue





/* normalize component */

var vsImage_component = normalizeComponent(
  vsImages_vsImagevue_type_script_lang_js_,
  vsImagevue_type_template_id_347c0686_render,
  vsImagevue_type_template_id_347c0686_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsImage = (vsImage_component.exports);
// CONCATENATED MODULE: ./src/components/vsImages/index.js



/* harmony default export */ var components_vsImages = (Vue => {
  Vue.component(vsImages.name, vsImages)
  Vue.component(vsImage.name, vsImage)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsRow/vsRow.vue?vue&type=template&id=517f8bed&lang=html&
var vsRowvue_type_template_id_517f8bed_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-row",style:({
    'align-items':_vm.vsAlign,
    'justify-content':_vm.vsJustify,
    'display':_vm.vsType,
    'overflow': _vm.vsType === 'block' ? 'hidden' : null,
    'width':_vm.vsW*100/12+'%'})},[_vm._t("default")],2)
}
var vsRowvue_type_template_id_517f8bed_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=template&id=517f8bed&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsRow/vsRow.vue?vue&type=script&lang=js&

  /* harmony default export */ var vsRowvue_type_script_lang_js_ = ({
    name: 'VsRow',
    props: {
      vsType: {
        default: 'flex',
        type: String,
      },
      vsW: {
        type: [Number, String],
        default: 12,
      },
      vsJustify: {
        type: String,
        default: null,
      },
      vsAlign: {
        type: String,
        default: null,
      },
    }
  });

// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsRow_vsRowvue_type_script_lang_js_ = (vsRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=style&index=0&id=517f8bed&prod&lang=css&
var vsRowvue_type_style_index_0_id_517f8bed_prod_lang_css_ = __webpack_require__("0277");

// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue






/* normalize component */

var vsRow_component = normalizeComponent(
  vsRow_vsRowvue_type_script_lang_js_,
  vsRowvue_type_template_id_517f8bed_lang_html_render,
  vsRowvue_type_template_id_517f8bed_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsRow = (vsRow_component.exports);
// CONCATENATED MODULE: ./src/layout/vsRow/index.js


/* harmony default export */ var layout_vsRow = (Vue => {
  Vue.component(vsRow.name, vsRow)
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsCol/vsCol.vue?vue&type=template&id=61c2982a&lang=html&
var vsColvue_type_template_id_61c2982a_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vs-col",class:[
    'vs-xs-'+_vm.vsXs,
    'vs-sm-'+_vm.vsSm,
    'vs-lg-'+_vm.vsLg,
  ],style:({
    'order':_vm.vsOrder,
    'justify-content':_vm.vsJustify,
    'display':_vm.vsType,
    'align-items':_vm.vsAlign,
    'margin-left':_vm.vsOffset*100/12+'%',
    'width':_vm.vsW*100/12+'%'})},[_vm._t("default")],2)
}
var vsColvue_type_template_id_61c2982a_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=template&id=61c2982a&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsCol/vsCol.vue?vue&type=script&lang=js&

  /* harmony default export */ var vsColvue_type_script_lang_js_ = ({
    name: 'VsCol',
    props: {
      vsW: {
        type: [Number, String],
        default: 12,
      },
      vsXs: {
        type: [Number, String],
        default: ''
      },
      vsSm: {
        type: [Number, String],
        default: ''
      },
      vsLg: {
        type: [Number, String],
        default: ''
      },
      vsOffset: {
        type: [Number, String],
        default: 0
      },
      vsType: {
        type: String,
        default: null,
      },
      vsJustify: {
        type: String,
        default: null,
      },
      vsAlign: {
        type: String,
        default: null,
      },
      vsOrder: {
        default: null,
        type: [String, Number]
      }
    }
  });

// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCol_vsColvue_type_script_lang_js_ = (vsColvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=style&index=0&id=61c2982a&prod&lang=css&
var vsColvue_type_style_index_0_id_61c2982a_prod_lang_css_ = __webpack_require__("ac4b");

// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue






/* normalize component */

var vsCol_component = normalizeComponent(
  vsCol_vsColvue_type_script_lang_js_,
  vsColvue_type_template_id_61c2982a_lang_html_render,
  vsColvue_type_template_id_61c2982a_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCol = (vsCol_component.exports);
// CONCATENATED MODULE: ./src/layout/vsCol/index.js


/* harmony default export */ var layout_vsCol = (Vue => {
  Vue.component(vsCol.name, vsCol)
});

// CONCATENATED MODULE: ./src/components/index.js































//New Component import

//layout



// EXTERNAL MODULE: ./src/style/vuesax.styl
var vuesax = __webpack_require__("99c0");

// CONCATENATED MODULE: ./src/utils/theme.js

/* harmony default export */ var theme = ({
  name:'theme',
  vsfunction(json){
    for (var clave in json) {
      let colorx
      if(/^[rgb(]/g.test(json[clave])){
        colorx = json[clave].replace(/[rgb()]/g,'')
      } else if(/[#]/g.test(json[clave])){
        let rgbx = utils_color.hexToRgb(json[clave])
        colorx = `${rgbx.r},${rgbx.g},${rgbx.b}`
      } else {
        colorx = json[clave]
      }
      utils_color.setCssVariable('--vs-'+clave,colorx)
    }
  },
});

// CONCATENATED MODULE: ./src/utils/rtl.js
/**
 * @injectDirectionClass
 * will inject 'vuesax-app-is-ltr' (ltr case) or 'vuexsax-app-is-rtl' (rtl case) in the html tag
 */

const injectDirectionClass = dir => {
  if(document) {
    if (dir) {
      document.documentElement.classList.remove("vuesax-app-is-ltr");
      document.documentElement.classList.add("vuesax-app-is-rtl");
    } else {
      document.documentElement.classList.add("vuesax-app-is-ltr");
      document.documentElement.classList.remove("vuesax-app-is-rtl");
    }
  }
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsNotifications/index.vue?vue&type=template&id=96f60dd2&lang=html&
var vsNotificationsvue_type_template_id_96f60dd2_lang_html_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"noti"},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.active)?_c('div',{ref:"noti",staticClass:"vs-component vs-notifications",class:[`vs-noti-${_vm.position}`,`vs-noti-${_vm.color}`,{'activeNoti':_vm.active}],style:(_vm.stylex),on:{"click":_vm.clickNoti}},[_c('div',{staticClass:"content-noti"},[_c('div',{staticClass:"con-text-noti"},[_c('h3',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_c('p',{domProps:{"innerHTML":_vm._s(_vm.text)}}),_vm._t("default")],2),(_vm.icon)?_c('vs-icon',{staticClass:"vs-icon-noti",attrs:{"icon":_vm.icon,"icon-pack":_vm.iconPack}}):_vm._e()],1),_c('span',{staticClass:"filling",style:(_vm.fillingStyle)})]):_vm._e()])
}
var vsNotificationsvue_type_template_id_96f60dd2_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue?vue&type=template&id=96f60dd2&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsNotifications/index.vue?vue&type=script&lang=js&


/* harmony default export */ var vsNotificationsvue_type_script_lang_js_ = ({
  components: {
    vsIcon: vsIcon
  },
  data:()=>({
    fullWidth:false,
    icon:null,
    iconPack:'material-icons',
    color:'primary',
    colorText:'rgb(255, 255, 255)',
    active:true,
    text:null,
    title:null,
    position:'bottom-right',
    time:3000,
    cords:{
      top:null,
      left:null,
      right:null,
      bottom:null,
    },
    widthx:0,
    fixed:false,

  }),
  computed:{
    fillingStyle(){
      return {
        left: this.cords.left?'-100px':null,
        right: this.cords.right?'-100px':null,
        background: this.color,
        height:`${this.widthx*2}px`,
        width:`${this.widthx*2}px`,
      }
    },
    stylex(){
      return {
        ...this.cords,
        color: this.colorText,
        width: this.fullWidth?`calc(100% - 14px)`:``,
        maxWidth: this.fullWidth?'none':`350px`
      }
    }
  },
  created(){
    setTimeout( () => {
      this.moverNotis()
    }, 0);
    this.changeCords()
  },
  mounted(){
    setTimeout( () => {
      this.widthx = this.$refs.noti.clientWidth
    }, 0);

    if(!this.fixed){
      setTimeout( () => {
        this.closeNoti()
      }, this.time);
    }
  },
  methods:{
    clickNoti(){
      this.active = false
      this.click?this.click():null
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done){
      el.style.opacity = 1
      done()
    },
    leave(el, done) {
      el.style.opacity = 0
      let transformx = el.style.transform
      if(this.cords.left == '50%' || this.fullWidth){
        transformx += ` translateY(${this.cords.top?'-':''}100%)`
      } else {
        transformx += ` translateX(${this.cords.left?'-':''}100%)`
      }
      el.style.transform = transformx
      setTimeout( () => {
        done()
        this.moverNotis()
      }, 150);
    },
    closeNoti(){
      this.active = false
    },
    changeCords(){
      let positions = this.position.split('-')
      let search = (text) => {
        return positions.indexOf(text)!=-1
      }
      if(search('top')){
        this.cords.top = '0px'
      }
      if(search('bottom')){
        this.cords.bottom = '0px'
      }
      if(search('right')){
        this.cords.right = '0px'
      }
      if(search('left')){
        this.cords.left = '0px'
      }

      if(search('center')) {
        this.cords.left = '50%'
      }
    },
    moverNotis(){
      let notisx = document.querySelectorAll('.vs-noti-'+this.position);
      for (var i = 0; i < notisx.length; i++) {
        let hx = 10
        for (var i2 = 0; i2 < i; i2++) {
          hx += notisx[i2].clientHeight + 6
        }
        if(this.position.search('center')==-1){
          if(this.position.search('top')!=-1){
            notisx[i].style.transform = `translatey(${hx}px)`
          } else if (this.position.search('bottom')!=-1) {
            notisx[i].style.transform = `translatey(-${hx}px)`
          }
        }

        if (this.position.search('top')!=-1 && this.position.search('center')!=-1) {
          notisx[i].style.transform = `translate(-50%,${hx}px)`
          notisx[i].style.zIndex = 10000-i
        }
        if (this.position.search('bottom')!=-1 && this.position.search('center')!=-1) {
          notisx[i].style.transform = `translate(-50%,-${hx}px)`
          notisx[i].style.zIndex = 10000-i
        }
      }
    }
  }
});

// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var functions_vsNotificationsvue_type_script_lang_js_ = (vsNotificationsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue





/* normalize component */

var vsNotifications_component = normalizeComponent(
  functions_vsNotificationsvue_type_script_lang_js_,
  vsNotificationsvue_type_template_id_96f60dd2_lang_html_render,
  vsNotificationsvue_type_template_id_96f60dd2_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNotifications = (vsNotifications_component.exports);
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.js




const NotiConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsNotifications);


let vsNotifications_instance;

/* harmony default export */ var functions_vsNotifications = ({name:'notify',vsfunction(parameters){
  if(parameters.fullWidth){
    if(parameters.position) {
      parameters.position = parameters.position.replace('right','left')
    }
  }


  vsNotifications_instance = new NotiConstructor({
    data: parameters,
  });
  vsNotifications_instance.vm = vsNotifications_instance.$mount();
  parameters.click?vsNotifications_instance.vm.$on('click',parameters.click):null
  utils.insertBody(vsNotifications_instance.vm.$el);
}
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5cf8d8c7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsLoading/index.vue?vue&type=template&id=6dfeeb48&
var vsLoadingvue_type_template_id_6dfeeb48_render = function render(){var _vm=this,_c=_vm._self._c;return _c('transition',{attrs:{"name":"fade"}},[(_vm.active)?_c('div',{staticClass:"con-vs-loading",class:[`vs-loading-background-${_vm.background}`,`vs-loading-color-${_vm.color}`,{'textAfter':_vm.textAfter}],style:(_vm.style),on:{"click":_vm.effectClick}},[_c('transition',{attrs:{"name":"effect-click"}},[(_vm.activeEffectClick&&_vm.clickEffect)?_c('div',{staticClass:"effect-click",style:(_vm.styleEffectClick)}):_vm._e()]),(_vm.text)?_c('h4',{staticClass:"title-loading"},[_vm._v(_vm._s(_vm.text))]):_vm._e(),_c('div',{staticClass:"vs-loading",class:[_vm.type],style:({
        transform:`scale(${_vm.scale})`
      })},[(_vm.type!='material')?_c('div',{staticClass:"effect-1 effects",style:(_vm.styleEffect1)}):_vm._e(),(_vm.type!='material')?_c('div',{staticClass:"effect-2 effects",style:(_vm.styleEffect2)}):_vm._e(),(_vm.type!='material')?_c('div',{staticClass:"effect-3 effects",style:(_vm.styleEffect3)}):_vm._e(),_c('img',{attrs:{"src":_vm.src}}),(_vm.type=='material')?_c('svg',{staticClass:"spinner",attrs:{"width":"50px","height":"50px","viewBox":"0 0 66 66","xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{staticClass:"path",attrs:{"fill":"none","stroke-width":"5","stroke-linecap":"round","cx":"33","cy":"33","r":"30"}})]):_vm._e()])],1):_vm._e()])
}
var vsLoadingvue_type_template_id_6dfeeb48_staticRenderFns = []


// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue?vue&type=template&id=6dfeeb48&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsLoading/index.vue?vue&type=script&lang=js&

  
  /* harmony default export */ var vsLoadingvue_type_script_lang_js_ = ({
    data:()=>({
      active:false,
      type:'default',
      color:null,
      background:'rgba(255,255,255,.6)',
      src:'',
      leftx:0,
      topx:0,
      clickEffect:false,
      activeEffectClick:false,
      scale:1,
      textAfter:false,
      text:null,
    }),
    computed:{
      styleEffectClick(){
        return {
          left: `${this.leftx}px`,
          top: `${this.topx}px`
        }
      },
      styleEffect1(){
        let style = {
          borderLeft: `3px solid ${utils_color.getColor(this.color,1)}`
        }

        if(this.type == 'border'){
          style = {
            borderLeft: `1px solid ${utils_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'point'){
          style = {
            background: utils_color.getColor(this.color,.4)
          }
        }

        if(this.type == 'radius'){
          style = {
            border: `3px solid ${utils_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'corners'){
          style = {
            border: `3px solid ${utils_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'sound'){
          style = {
            background: utils_color.getColor(this.color,1)
          }
        }

        return style
      },
      styleEffect2(){
        let style = {
          borderLeft: `3px solid ${utils_color.getColor(this.color,1)}`
        }

        if(this.type == 'border'){
          style = {
            borderLeft: `1px solid ${utils_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'point'){
          style = {
            background: utils_color.getColor(this.color,.4)
          }
        }

        if(this.type == 'radius'){
          style = {
            border: `3px solid ${utils_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'corners'){
          style = {}
        }

        if(this.type == 'sound'){
          style = {
            background: utils_color.getColor(this.color,1)
          }
        }

        return style
      },
      styleEffect3(){
        let style = {
          borderLeft: `3px solid ${utils_color.getColor(this.color,1)}`
        }

        if(this.type == 'border'){
          style = {
            borderLeft: `1px solid ${utils_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'point'){
          style = {
            background: utils_color.getColor(this.color,.4)
          }
        }

        if(this.type == 'radius'){
          style = {
            border: `3px solid ${utils_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'corners'){
          style = {}
        }

        if(this.type == 'sound'){
          style = {
            background: utils_color.getColor(this.color,1)
          }
        }

        return style
      },
      style(){
        return {
          background:utils_color.getColor(this.background,1)
        }
      }
    },
    mounted(){
      this.active = true
    },
    methods:{
      effectClick(evt){
        this.leftx = evt.offsetX
        this.topx = evt.offsetY
        this.activeEffectClick = true
        setTimeout(()=>{
          this.activeEffectClick = false
        },50)
      },
      close(){
        this.active = false
      }
    }
  });

// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var functions_vsLoadingvue_type_script_lang_js_ = (vsLoadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue





/* normalize component */

var vsLoading_component = normalizeComponent(
  functions_vsLoadingvue_type_script_lang_js_,
  vsLoadingvue_type_template_id_6dfeeb48_render,
  vsLoadingvue_type_template_id_6dfeeb48_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsLoading = (vsLoading_component.exports);
// CONCATENATED MODULE: ./src/functions/vsLoading/index.js



const loadingConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsLoading);

/* harmony default export */ var functions_vsLoading = ({
  name:'loading',
  vsfunction(parameters){
    let instance = new loadingConstructor();
    let containerx = document.body
    if(parameters){
      instance.$data.type = parameters.type || 'default'
      instance.$data.background = parameters.background
      instance.$data.color = parameters.color
      instance.$data.scale = parameters.scale
      instance.$data.text = parameters.text
      instance.$data.clickEffect = parameters.clickEffect
      if(parameters.container) {
        containerx = parameters.container instanceof Element ? parameters.container : document.querySelector(parameters.container)
      }
    }
    instance.vm = instance.$mount();
    containerx.insertBefore(instance.vm.$el, containerx.firstChild)
  },
  close(elx){
    let loadings

    if (elx instanceof Element) {
      // Mimicking the behavior of doing `elx.querySelectorAll('> con-vs-loading')` but `>` is not well supported.
      // We are doing this because we can only add the respective classes to .con-vs-loading
      loadings = Array.from(elx.children).filter(el => el.classList.contains('con-vs-loading'))
    } else {
      loadings = document.querySelectorAll(elx || 'body > .con-vs-loading')
    }

    loadings
      .forEach((loading)=>{
        loading.classList.add('beforeRemove')
        setTimeout(()=>{
          loading.remove()
        },300)
      })
  }
});

// CONCATENATED MODULE: ./src/functions/vsDialog/index.js





const dialogConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsDialog);

let vsDialog_instance;

/* harmony default export */ var functions_vsDialog = ({ name:'dialog', vsfunction(props) {



  vsDialog_instance = new dialogConstructor();

  vsDialog_instance.$props.text = props.text
  vsDialog_instance.$props.title = props.title || 'Dialog'
  vsDialog_instance.$props.color = props.color
  vsDialog_instance.$props.type = props.type || 'alert'
  vsDialog_instance.$props.buttonAccept = props.buttonAccept || 'filled'
  vsDialog_instance.$props.buttonCancel = props.buttonCancel || 'flat'
  vsDialog_instance.$props.acceptText = props.acceptText || 'Accept'
  vsDialog_instance.$props.cancelText = props.cancelText || 'Cancel'
  vsDialog_instance.$props.closeIcon = props.closeIcon || 'close'
  vsDialog_instance.$props.iconPack = props.iconPack || 'material-icons'
  vsDialog_instance.$props.isValid = props.isValid || 'none'



  vsDialog_instance.$data.isPrompt = false

  vsDialog_instance.vm = vsDialog_instance.$mount();

  props.accept?vsDialog_instance.vm.$on('accept', props.accept):null
  props.cancel?vsDialog_instance.vm.$on('cancel', props.cancel):null
  utils.insertBody(vsDialog_instance.vm.$el, props.parent);

  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(() => {
    vsDialog_instance.$data.fActive = true
    vsDialog_instance.$data.parameters = props.parameters
  });
}

});

// CONCATENATED MODULE: ./src/functions/index.js
// Functions




//theme



const vsFunctions = {
  vsNotifications: functions_vsNotifications,
  vsLoading: functions_vsLoading,
  vsTheme: theme,
  vsDialog: functions_vsDialog
}

/* harmony default export */ var functions = (vm => {
  Object.values(vsFunctions).forEach((vsFunctions) => {
    if(vsFunctions.hasOwnProperty('subName')){
      vm.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction
    } else {
      vm.$vs[vsFunctions.name] = vsFunctions.vsfunction
    }
  })

  vm.$vs.loading.close = functions_vsLoading.close
});

// CONCATENATED MODULE: ./src/defineGlobalMixin.js


/**
 * Vuesax global mixin, all vueasx functions and properties injected
 * in the @beforeCreate hook.
 */

/* harmony default export */ var defineGlobalMixin = ((Vue, options) => {
  Vue.mixin({
    watch: {
      '$vs.rtl': {
        handler(val) {
          injectDirectionClass(val)
        }
      }
    },
    beforeCreate() {
      // create $vs property if not exist
      if(!this.$vs) {
        // define $vs reactive properties
        this.$vs = Vue.observable(options);
        // define $vs functions
        functions(this);
      }
    },
    mounted() {
      // inject the direction class for the initial options
      injectDirectionClass(this.$vs.rtl)
    }
  })
});

// CONCATENATED MODULE: ./src/utils/options.js
/**
 * All vuesax framework options listed here
 * all options listed here are reactive
 */
 /* harmony default export */ var utils_options = ({
   rtl: false
 });
// CONCATENATED MODULE: ./src/index.js






const install = (Vue, options={}) => {
  // set default options
  for(let prop in utils_options) {
    if(!options[prop]) {
      options[prop] = utils_options[prop]
    }
  }
  // Use Components
  Object.values(components_namespaceObject).forEach((vsComponent) => {
    Vue.use(vsComponent)
  })
  if(options){
    if(options.hasOwnProperty('theme')){
      if(options.theme.hasOwnProperty('colors')){
        if (typeof window !== 'undefined') {
          theme.vsfunction(options.theme.colors, options.server)
        }
      }
    }
  }
  // Define vuesax functions and properties ($vs)
  defineGlobalMixin(Vue, options);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var src = (install);
































//New Component import

//layout






// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });