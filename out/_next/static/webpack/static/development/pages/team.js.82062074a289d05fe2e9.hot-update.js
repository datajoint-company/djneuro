webpackHotUpdate("static/development/pages/team.js",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
var _jsxFileName = "/Users/maho15/Projects/djneuro/pages/team.js";



var teamHead = {
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  backgroundImage: 'url("./static/images/artwork/networkLines.svg")',
  backgroundAttachment: 'fixed',
  backgroundSize: '180px',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center',
  padding: '200px 300px 300px',
  color: '#E1EBF7',
  position: 'relative',
  textAlign: 'center'
};
var backdrop = {
  background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85))',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  padding: '150px 200px 300px 200px',
  lineHeight: '1.8',
  fontSize: '110%'
};
var background = {
  // backgroundImage: 'url("./static/images/artwork/networkLines.svg"), url("/static/images/artwork/LGN_injection.jpg")',
  backgroundImage: 'url("/static/images/artwork/LGN_injection.jpg")',
  // backgroundSize: '180px, cover',
  backgroundSize: 'cover',
  // backgroundRepeat: 'repeat, no-repeat',
  backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center left',
  backgroundPosition: 'left',
  height: '100%',
  position: 'relative',
  paddingBottom: '10%'
};
var teamDescription = {
  textAlign: 'left' // maxWidth: '1000px',

};
var row = {
  width: '100%',
  maxWidth: '1000px',
  display: 'inline-block'
};
var tabcard = {
  position: 'relative',
  // width: '400px',
  width: '350px',
  height: '100px',
  // borderRadius: '0 50px 50px 0',
  borderRadius: '50px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // margin: '10px 0',
  margin: '30px 50px 0',
  float: 'left',
  zIndex: '100'
};
var tabcard2 = {
  position: 'relative',
  // width: '400px',
  width: '350px',
  height: '100px',
  // borderRadius: '50px 0 0 50px',
  borderRadius: '50px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // margin: '10px 0',
  margin: '30px 50px 0 50px',
  float: 'right',
  zIndex: '100'
};
var columnAimg = {
  float: 'right'
};
var columnBimg = {
  float: 'left'
};
var linesCenter = {
  height: '480px',
  borderRadius: '0',
  border: 'none',
  marginTop: '60px',
  transform: 'scale(2.2, 1.35) translate(-23%,0)',
  position: 'absolute'
};
var linesSide = {
  borderRadius: '0',
  border: 'none',
  marginTop: '60px',
  transform: 'scale(3.3, 1.68) translate(-127%,19%)',
  zIndex: '10',
  position: 'absolute'
};
var linesSide2 = {
  borderRadius: '0',
  border: 'none',
  marginTop: '60px',
  transform: 'scale(3.3, 1.68) translate(96%,19%) rotate(180deg)',
  zIndex: '10',
  position: 'absolute'
};
var role = {
  fontSize: '75%',
  fontWeight: '200',
  paddingTop: '2px'
};
var memberText = {
  transform: 'translateX(-10%)'
};
var memberText2 = {
  transform: 'translateX(10%)'
};

var Team = function Team() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: teamHead,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: backdrop,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Our Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: teamDescription,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Our team comprises systems neuroscientists, data scientists, and software engineers with expertise in data acquisition and analysis systems neuroscience, data acquisition and analysis, databases, machine learning, and cloud computing."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: background,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-3754591618" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Dimitri Yatsenko, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "President")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/dimitriyatsenko.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-3754591618" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Edgar Y. Walker, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Vice President, Engineering")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/edgarwalker.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-3754591618" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Andreas Tolias, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Scientific and Business Advisor")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/andreastolias.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-3754591618" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Jake Reimer, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Application Specialist")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/jakereimer.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-3754591618" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Chris Turner"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Product Engineer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/christurner.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-3754591618" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Camila Lopez"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Project Manager")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/camilalopez.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-3754591618" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Shan Shen, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Data Scientist")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/shanshen.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-3754591618" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Thinh Nguyen, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Data Scientist")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/thinhnguyen.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-3754591618" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Raphael Guzman"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Software Engineer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/raphaelguzman.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-3754591618" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Maho Sasaki"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Front-end Web Developer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/mahosasaki.jpg",
    className: "jsx-3754591618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3754591618",
    __self: this
  }, "img.jsx-3754591618{width:96px;border-radius:50px;border:2px solid cyan;-webkit-transform:translateY(-85%);-ms-transform:translateY(-85%);transform:translateY(-85%);}p.jsx-3754591618{padding-top:8px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy90ZWFtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtPb0IsQUFHNEIsQUFNSyxXQUxHLEtBTVAsWUFHaEIsRUFSMEIsc0JBQ0ssNkZBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy90ZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcyc7XG5cblxuY29uc3QgdGVhbUhlYWQgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjkpJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCIuL3N0YXRpYy9pbWFnZXMvYXJ0d29yay9uZXR3b3JrTGluZXMuc3ZnXCIpJyxcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogJ2ZpeGVkJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzE4MHB4JyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAncmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcyMDBweCAzMDBweCAzMDBweCcsXG4gICAgY29sb3I6ICcjRTFFQkY3JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG59XG5cbmNvbnN0IGJhY2tkcm9wID0ge1xuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuODUpKScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMCcsXG4gICAgbGVmdDogJzAnLFxuICAgIHJpZ2h0OiAnMCcsXG4gICAgcGFkZGluZzogJzE1MHB4IDIwMHB4IDMwMHB4IDIwMHB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMS44JyxcbiAgICBmb250U2l6ZTogJzExMCUnLFxufVxuY29uc3QgYmFja2dyb3VuZCA9IHtcbiAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCIuL3N0YXRpYy9pbWFnZXMvYXJ0d29yay9uZXR3b3JrTGluZXMuc3ZnXCIpLCB1cmwoXCIvc3RhdGljL2ltYWdlcy9hcnR3b3JrL0xHTl9pbmplY3Rpb24uanBnXCIpJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCIvc3RhdGljL2ltYWdlcy9hcnR3b3JrL0xHTl9pbmplY3Rpb24uanBnXCIpJyxcbiAgICAvLyBiYWNrZ3JvdW5kU2l6ZTogJzE4MHB4LCBjb3ZlcicsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgLy8gYmFja2dyb3VuZFJlcGVhdDogJ3JlcGVhdCwgbm8tcmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAvLyBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgbGVmdCcsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnbGVmdCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ0JvdHRvbTogJzEwJSdcbn07XG5cbmNvbnN0IHRlYW1EZXNjcmlwdGlvbiA9IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAvLyBtYXhXaWR0aDogJzEwMDBweCcsXG5cbn1cblxuY29uc3Qgcm93ID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAwcHgnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG59XG5cbmNvbnN0IHRhYmNhcmQgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgLy8gd2lkdGg6ICc0MDBweCcsXG4gICAgd2lkdGg6ICczNTBweCcsXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgIC8vIGJvcmRlclJhZGl1czogJzAgNTBweCA1MHB4IDAnLFxuICAgIGJvcmRlclJhZGl1czogJzUwcHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgLy8gbWFyZ2luOiAnMTBweCAwJyxcbiAgICBtYXJnaW46ICczMHB4IDUwcHggMCcsXG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICB6SW5kZXg6ICcxMDAnXG59XG5cbmNvbnN0IHRhYmNhcmQyID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIHdpZHRoOiAnNDAwcHgnLFxuICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAvLyBib3JkZXJSYWRpdXM6ICc1MHB4IDAgMCA1MHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgIC8vIG1hcmdpbjogJzEwcHggMCcsXG4gICAgbWFyZ2luOiAnMzBweCA1MHB4IDAgNTBweCcsXG4gICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgekluZGV4OiAnMTAwJ1xufVxuXG5jb25zdCBjb2x1bW5BaW1nID0ge1xuICAgIGZsb2F0OiAncmlnaHQnXG59XG5cbmNvbnN0IGNvbHVtbkJpbWcgPSB7XG4gICAgZmxvYXQ6ICdsZWZ0J1xufVxuXG5jb25zdCBsaW5lc0NlbnRlciA9IHtcbiAgICBoZWlnaHQ6ICc0ODBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luVG9wOiAnNjBweCcsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMi4yLCAxLjM1KSB0cmFuc2xhdGUoLTIzJSwwKScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbn1cblxuY29uc3QgbGluZXNTaWRlID0ge1xuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpblRvcDogJzYwcHgnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDMuMywgMS42OCkgdHJhbnNsYXRlKC0xMjclLDE5JSknLFxuICAgIHpJbmRleDogJzEwJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xufVxuXG5jb25zdCBsaW5lc1NpZGUyID0ge1xuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpblRvcDogJzYwcHgnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDMuMywgMS42OCkgdHJhbnNsYXRlKDk2JSwxOSUpIHJvdGF0ZSgxODBkZWcpJyxcbiAgICB6SW5kZXg6ICcxMCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbn1cblxuY29uc3Qgcm9sZSA9IHtcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgZm9udFdlaWdodDogJzIwMCcsXG4gICAgcGFkZGluZ1RvcDogJzJweCcsXG59XG5cbmNvbnN0IG1lbWJlclRleHQgPSB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAlKSdcbn1cblxuY29uc3QgbWVtYmVyVGV4dDIgPSB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMCUpJ1xufVxuXG5cblxuY29uc3QgVGVhbSA9ICgpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBzdHlsZT17dGVhbUhlYWR9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFja2Ryb3B9PlxuICAgICAgICAgICAgICAgIDxoND5PdXIgVGVhbTwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3RlYW1EZXNjcmlwdGlvbn0+T3VyIHRlYW0gY29tcHJpc2VzIHN5c3RlbXMgbmV1cm9zY2llbnRpc3RzLCBkYXRhIHNjaWVudGlzdHMsIGFuZCBzb2Z0d2FyZSBlbmdpbmVlcnMgd2l0aCBleHBlcnRpc2UgaW4gZGF0YSBhY3F1aXNpdGlvbiBhbmQgYW5hbHlzaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeXN0ZW1zIG5ldXJvc2NpZW5jZSwgZGF0YSBhY3F1aXNpdGlvbiBhbmQgYW5hbHlzaXMsIGRhdGFiYXNlcywgbWFjaGluZSBsZWFybmluZywgYW5kIGNsb3VkIGNvbXB1dGluZy48L3A+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtiYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgIHsvKiA8aW1nIHN0eWxlPXtsaW5lc0NlbnRlcn0gc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL2FydHdvcmsvbmV0d29ya0xpbmVzLnN2Z1wiIC8+ICovfVxuICAgICAgICAgICAgey8qIDxpbWcgc3R5bGU9e2xpbmVzU2lkZX0gc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL2FydHdvcmsvbmV0d29ya0xpbmVzV2lkZS5zdmdcIiAvPiAqL31cbiAgICAgICAgICAgIHsvKiA8aW1nIHN0eWxlPXtsaW5lc1NpZGUyfSBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvYXJ0d29yay9uZXR3b3JrTGluZXNXaWRlLnN2Z1wiIC8+ICovfVxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cm93fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJjYXJkfSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5MZWZ0XCIgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttZW1iZXJUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRpbWl0cmkgWWF0c2Vua28sIFBoRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtyb2xlfT5QcmVzaWRlbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb2x1bW5BaW1nfSBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvdGVhbS9kaW1pdHJpeWF0c2Vua28uanBnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJjYXJkMn0gY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluUmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dDJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWRnYXIgWS4gV2Fsa2VyLCBQaEQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17cm9sZX0+VmljZSBQcmVzaWRlbnQsIEVuZ2luZWVyaW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17Y29sdW1uQmltZ30gc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3RlYW0vZWRnYXJ3YWxrZXIuanBnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cm93fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJjYXJkfSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5SaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttZW1iZXJUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFuZHJlYXMgVG9saWFzLCBQaEQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17cm9sZX0+U2NpZW50aWZpYyBhbmQgQnVzaW5lc3MgQWR2aXNvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2NvbHVtbkFpbWd9IHNyYz1cIi4vc3RhdGljL2ltYWdlcy90ZWFtL2FuZHJlYXN0b2xpYXMuanBnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJjYXJkMn0gY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluTGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttZW1iZXJUZXh0Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5KYWtlIFJlaW1lciwgUGhEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3JvbGV9PkFwcGxpY2F0aW9uIFNwZWNpYWxpc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb2x1bW5CaW1nfSBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvdGVhbS9qYWtlcmVpbWVyLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd30+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFiY2FyZH0gY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluTGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttZW1iZXJUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNocmlzIFR1cm5lcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtyb2xlfT5Qcm9kdWN0IEVuZ2luZWVyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17Y29sdW1uQWltZ30gc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3RlYW0vY2hyaXN0dXJuZXIuanBnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJjYXJkMn0gY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluUmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dDJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FtaWxhIExvcGV6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3JvbGV9PlByb2plY3QgTWFuYWdlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2NvbHVtbkJpbWd9IHNyYz1cIi4vc3RhdGljL2ltYWdlcy90ZWFtL2NhbWlsYWxvcGV6LmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd30+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFiY2FyZH0gY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluUmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TaGFuIFNoZW4sIFBoRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtyb2xlfT5EYXRhIFNjaWVudGlzdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2NvbHVtbkFpbWd9IHNyYz1cIi4vc3RhdGljL2ltYWdlcy90ZWFtL3NoYW5zaGVuLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFiY2FyZDJ9IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJbkxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dDJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhpbmggTmd1eWVuLCBQaEQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17cm9sZX0+RGF0YSBTY2llbnRpc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb2x1bW5CaW1nfSBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvdGVhbS90aGluaG5ndXllbi5qcGdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3d9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RhYmNhcmR9IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJbkxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBoYWVsIEd1em1hbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtyb2xlfT5Tb2Z0d2FyZSBFbmdpbmVlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2NvbHVtbkFpbWd9IHNyYz1cIi4vc3RhdGljL2ltYWdlcy90ZWFtL3JhcGhhZWxndXptYW4uanBnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJjYXJkMn0gY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluUmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dDJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFobyBTYXNha2k8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17cm9sZX0+RnJvbnQtZW5kIFdlYiBEZXZlbG9wZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb2x1bW5CaW1nfSBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvdGVhbS9tYWhvc2FzYWtpLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBjeWFuO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUlLCAxMzAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiXX0= */\n/*@ sourceURL=/Users/maho15/Projects/djneuro/pages/team.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ })

})
//# sourceMappingURL=team.js.82062074a289d05fe2e9.hot-update.js.map