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

if (window.screen.width < 720) {
  console.log('screensize smaller! ');
  console.log(window.screen.width);
  teamHead['padding'] = '100px 20px';
} else {
  console.log('still gonna print the window');
  console.log(window);
}

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
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: teamHead,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: backdrop,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Our Team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: teamDescription,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Our team comprises systems neuroscientists, data scientists, and software engineers with expertise in data acquisition and analysis systems neuroscience, data acquisition and analysis, databases, machine learning, and cloud computing."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: background,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-2816360609" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Dimitri Yatsenko, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "President")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/dimitriyatsenko.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-2816360609" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Edgar Y. Walker, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Vice President, Engineering")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/edgarwalker.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-2816360609" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Andreas Tolias, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Scientific and Business Advisor")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/andreastolias.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-2816360609" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Jake Reimer, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Application Specialist")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/jakereimer.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-2816360609" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Chris Turner"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Product Engineer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/christurner.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-2816360609" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Camila Lopez"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Project Manager")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/camilalopez.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-2816360609" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Shan Shen, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Data Scientist")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/shanshen.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-2816360609" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Thinh Nguyen, PhD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Data Scientist")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/thinhnguyen.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: row,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard,
    className: "jsx-2816360609" + " " + "animated fadeInLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Raphael Guzman"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Software Engineer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnAimg,
    src: "./static/images/team/raphaelguzman.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: tabcard2,
    className: "jsx-2816360609" + " " + "animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: memberText2,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Maho Sasaki"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: role,
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Front-end Web Developer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: columnBimg,
    src: "./static/images/team/mahosasaki.jpg",
    className: "jsx-2816360609",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2816360609",
    __self: this
  }, "img.jsx-2816360609{width:96px;border-radius:50px;border:2px solid cyan;-webkit-transform:translateY(-85%);-ms-transform:translateY(-85%);transform:translateY(-85%);}p.jsx-2816360609{padding-top:8px;color:white;}@media (max-width:720px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy90ZWFtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRPb0IsQUFHNEIsQUFNSyxXQUxHLEtBTVAsWUFHaEIsRUFSMEIsc0JBQ0ssNkZBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy90ZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcyc7XG5cblxuY29uc3QgdGVhbUhlYWQgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjkpJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCIuL3N0YXRpYy9pbWFnZXMvYXJ0d29yay9uZXR3b3JrTGluZXMuc3ZnXCIpJyxcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogJ2ZpeGVkJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzE4MHB4JyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAncmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcyMDBweCAzMDBweCAzMDBweCcsXG4gICAgY29sb3I6ICcjRTFFQkY3JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIFxufVxuXG5pZiAod2luZG93LnNjcmVlbi53aWR0aCA8IDcyMCkge1xuICAgIGNvbnNvbGUubG9nKCdzY3JlZW5zaXplIHNtYWxsZXIhICcpO1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JlZW4ud2lkdGgpO1xuICAgIHRlYW1IZWFkWydwYWRkaW5nJ10gPSAnMTAwcHggMjBweCdcbn0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3N0aWxsIGdvbm5hIHByaW50IHRoZSB3aW5kb3cnKTtcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xufVxuXG5jb25zdCBiYWNrZHJvcCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjg1KSknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICByaWdodDogJzAnLFxuICAgIHBhZGRpbmc6ICcxNTBweCAyMDBweCAzMDBweCAyMDBweCcsXG4gICAgbGluZUhlaWdodDogJzEuOCcsXG4gICAgZm9udFNpemU6ICcxMTAlJyxcbn1cbmNvbnN0IGJhY2tncm91bmQgPSB7XG4gICAgLy8gYmFja2dyb3VuZEltYWdlOiAndXJsKFwiLi9zdGF0aWMvaW1hZ2VzL2FydHdvcmsvbmV0d29ya0xpbmVzLnN2Z1wiKSwgdXJsKFwiL3N0YXRpYy9pbWFnZXMvYXJ0d29yay9MR05faW5qZWN0aW9uLmpwZ1wiKScsXG4gICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiL3N0YXRpYy9pbWFnZXMvYXJ0d29yay9MR05faW5qZWN0aW9uLmpwZ1wiKScsXG4gICAgLy8gYmFja2dyb3VuZFNpemU6ICcxODBweCwgY292ZXInLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIC8vIGJhY2tncm91bmRSZXBlYXQ6ICdyZXBlYXQsIG5vLXJlcGVhdCcsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgLy8gYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGxlZnQnLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2xlZnQnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmdCb3R0b206ICcxMCUnXG59O1xuXG5jb25zdCB0ZWFtRGVzY3JpcHRpb24gPSB7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgLy8gbWF4V2lkdGg6ICcxMDAwcHgnLFxuXG59XG5cbmNvbnN0IHJvdyA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwMHB4JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xufVxuXG5jb25zdCB0YWJjYXJkID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIHdpZHRoOiAnNDAwcHgnLFxuICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAvLyBib3JkZXJSYWRpdXM6ICcwIDUwcHggNTBweCAwJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgIC8vIG1hcmdpbjogJzEwcHggMCcsXG4gICAgbWFyZ2luOiAnMzBweCA1MHB4IDAnLFxuICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgekluZGV4OiAnMTAwJ1xufVxuXG5jb25zdCB0YWJjYXJkMiA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyB3aWR0aDogJzQwMHB4JyxcbiAgICB3aWR0aDogJzM1MHB4JyxcbiAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgLy8gYm9yZGVyUmFkaXVzOiAnNTBweCAwIDAgNTBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAvLyBtYXJnaW46ICcxMHB4IDAnLFxuICAgIG1hcmdpbjogJzMwcHggNTBweCAwIDUwcHgnLFxuICAgIGZsb2F0OiAncmlnaHQnLFxuICAgIHpJbmRleDogJzEwMCdcbn1cblxuY29uc3QgY29sdW1uQWltZyA9IHtcbiAgICBmbG9hdDogJ3JpZ2h0J1xufVxuXG5jb25zdCBjb2x1bW5CaW1nID0ge1xuICAgIGZsb2F0OiAnbGVmdCdcbn1cblxuY29uc3QgbGluZXNDZW50ZXIgPSB7XG4gICAgaGVpZ2h0OiAnNDgwcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpblRvcDogJzYwcHgnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDIuMiwgMS4zNSkgdHJhbnNsYXRlKC0yMyUsMCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG59XG5cbmNvbnN0IGxpbmVzU2lkZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICcwJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW5Ub3A6ICc2MHB4JyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgzLjMsIDEuNjgpIHRyYW5zbGF0ZSgtMTI3JSwxOSUpJyxcbiAgICB6SW5kZXg6ICcxMCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbn1cblxuY29uc3QgbGluZXNTaWRlMiA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICcwJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW5Ub3A6ICc2MHB4JyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgzLjMsIDEuNjgpIHRyYW5zbGF0ZSg5NiUsMTklKSByb3RhdGUoMTgwZGVnKScsXG4gICAgekluZGV4OiAnMTAnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG59XG5cbmNvbnN0IHJvbGUgPSB7XG4gICAgZm9udFNpemU6ICc3NSUnLFxuICAgIGZvbnRXZWlnaHQ6ICcyMDAnLFxuICAgIHBhZGRpbmdUb3A6ICcycHgnLFxufVxuXG5jb25zdCBtZW1iZXJUZXh0ID0ge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwJSknXG59XG5cbmNvbnN0IG1lbWJlclRleHQyID0ge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAlKSdcbn1cblxuXG5cbmNvbnN0IFRlYW0gPSAoKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgc3R5bGU9e3RlYW1IZWFkfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JhY2tkcm9wfT5cbiAgICAgICAgICAgICAgICA8aDQ+T3VyIFRlYW08L2g0PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt0ZWFtRGVzY3JpcHRpb259Pk91ciB0ZWFtIGNvbXByaXNlcyBzeXN0ZW1zIG5ldXJvc2NpZW50aXN0cywgZGF0YSBzY2llbnRpc3RzLCBhbmQgc29mdHdhcmUgZW5naW5lZXJzIHdpdGggZXhwZXJ0aXNlIGluIGRhdGEgYWNxdWlzaXRpb24gYW5kIGFuYWx5c2lzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3lzdGVtcyBuZXVyb3NjaWVuY2UsIGRhdGEgYWNxdWlzaXRpb24gYW5kIGFuYWx5c2lzLCBkYXRhYmFzZXMsIG1hY2hpbmUgbGVhcm5pbmcsIGFuZCBjbG91ZCBjb21wdXRpbmcuPC9wPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17YmFja2dyb3VuZH0+XG4gICAgICAgICAgICB7LyogPGltZyBzdHlsZT17bGluZXNDZW50ZXJ9IHNyYz1cIi4vc3RhdGljL2ltYWdlcy9hcnR3b3JrL25ldHdvcmtMaW5lcy5zdmdcIiAvPiAqL31cbiAgICAgICAgICAgIHsvKiA8aW1nIHN0eWxlPXtsaW5lc1NpZGV9IHNyYz1cIi4vc3RhdGljL2ltYWdlcy9hcnR3b3JrL25ldHdvcmtMaW5lc1dpZGUuc3ZnXCIgLz4gKi99XG4gICAgICAgICAgICB7LyogPGltZyBzdHlsZT17bGluZXNTaWRlMn0gc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL2FydHdvcmsvbmV0d29ya0xpbmVzV2lkZS5zdmdcIiAvPiAqL31cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd30+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFiY2FyZH0gY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluTGVmdFwiID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EaW1pdHJpIFlhdHNlbmtvLCBQaEQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17cm9sZX0+UHJlc2lkZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17Y29sdW1uQWltZ30gc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3RlYW0vZGltaXRyaXlhdHNlbmtvLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFiY2FyZDJ9IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21lbWJlclRleHQyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVkZ2FyIFkuIFdhbGtlciwgUGhEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3JvbGV9PlZpY2UgUHJlc2lkZW50LCBFbmdpbmVlcmluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2NvbHVtbkJpbWd9IHNyYz1cIi4vc3RhdGljL2ltYWdlcy90ZWFtL2VkZ2Fyd2Fsa2VyLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd30+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFiY2FyZH0gY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluUmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BbmRyZWFzIFRvbGlhcywgUGhEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3JvbGV9PlNjaWVudGlmaWMgYW5kIEJ1c2luZXNzIEFkdmlzb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb2x1bW5BaW1nfSBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvdGVhbS9hbmRyZWFzdG9saWFzLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFiY2FyZDJ9IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJbkxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dDJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SmFrZSBSZWltZXIsIFBoRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtyb2xlfT5BcHBsaWNhdGlvbiBTcGVjaWFsaXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17Y29sdW1uQmltZ30gc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3RlYW0vamFrZXJlaW1lci5qcGdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3d9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RhYmNhcmR9IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJbkxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVtYmVyVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DaHJpcyBUdXJuZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17cm9sZX0+UHJvZHVjdCBFbmdpbmVlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2NvbHVtbkFpbWd9IHNyYz1cIi4vc3RhdGljL2ltYWdlcy90ZWFtL2NocmlzdHVybmVyLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFiY2FyZDJ9IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21lbWJlclRleHQyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhbWlsYSBMb3BlejwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtyb2xlfT5Qcm9qZWN0IE1hbmFnZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb2x1bW5CaW1nfSBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvdGVhbS9jYW1pbGFsb3Blei5qcGdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3d9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RhYmNhcmR9IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21lbWJlclRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2hhbiBTaGVuLCBQaEQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17cm9sZX0+RGF0YSBTY2llbnRpc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb2x1bW5BaW1nfSBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvdGVhbS9zaGFuc2hlbi5qcGdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RhYmNhcmQyfSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5MZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21lbWJlclRleHQyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaW5oIE5ndXllbiwgUGhEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3JvbGV9PkRhdGEgU2NpZW50aXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17Y29sdW1uQmltZ30gc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3RlYW0vdGhpbmhuZ3V5ZW4uanBnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cm93fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJjYXJkfSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5MZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21lbWJlclRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmFwaGFlbCBHdXptYW48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17cm9sZX0+U29mdHdhcmUgRW5naW5lZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb2x1bW5BaW1nfSBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvdGVhbS9yYXBoYWVsZ3V6bWFuLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFiY2FyZDJ9IGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21lbWJlclRleHQyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1haG8gU2FzYWtpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3JvbGV9PkZyb250LWVuZCBXZWIgRGV2ZWxvcGVyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17Y29sdW1uQmltZ30gc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3RlYW0vbWFob3Nhc2FraS5qcGdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgY3lhbjtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTg1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1JSwgMTMwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICAgICBkaXYge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiXX0= */\n/*@ sourceURL=/Users/maho15/Projects/djneuro/pages/team.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ })

})
//# sourceMappingURL=team.js.c00f042ec5571354f6fb.hot-update.js.map