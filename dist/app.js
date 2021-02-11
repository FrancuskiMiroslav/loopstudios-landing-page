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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/fetchData.js":
/*!*****************************!*\
  !*** ./src/js/fetchData.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	const gridBoxes = document.getElementById('grid-boxes');
	const URL = './js/creations.json';

	const getCreationsData = async () => {
		const response = await fetch(URL);
		const data = await response.json();
		const boxes = data.boxes;

		gridBoxes.innerHTML = boxes
			.map((box) => {
				const { id, title, image, imageMob } = box;

				window.onresize = function () {
					let windowWidth = window.innerWidth;

					if (windowWidth > 600) {
						return image;
					}

					if (windowWidth < 600) {
						return imageMob;
					}
				};

				return `
					<div class="grid__box">
						<img 
							class="grid__box-img"
							src="${window.innerWidth < 600 ? imageMob : image}"
							alt="${title}"
						/>
						<h4 class="grid__box-title">${title}</h4>
					</div>
					`;
			})
			.join('');
	};

	getCreationsData();
});


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('load', (e) => {
		const preload = document.querySelector('.preload');

		preload.classList.add('preload-finished');
	});

	const btnScrollToTop = document.getElementById('btnScrollToTop');

	if (btnScrollToTop) {
		btnScrollToTop.addEventListener('click', (e) => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		});
	}
});


/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	const heroNav = document.getElementById('hero-nav');
	const stickyHeader = document.getElementById('sticky-header');
	const menuBtn = document.getElementById('menu-btn');
	const navList = document.getElementById('nav-list');

	window.addEventListener('scroll', (e) => {
		if (document.documentElement.scrollTop > 0) {
			stickyHeader.classList.add('sticky');
			/* btnScrollToTop.style.opacity = 1; */
		} else {
			stickyHeader.classList.remove('sticky');
			/* 	btnScrollToTop.style.opacity = 0; */
		}
	});

	menuBtn.addEventListener('click', (e) => {
		menuBtn.classList.toggle('clicked');
		heroNav.classList.toggle('overlay');
		navList.classList.toggle('show');
	});
});


/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./src/js/fetchData.js ./src/js/main.js ./src/js/nav.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\franc\Desktop\loopstudios-landing-page-main\src\js\fetchData.js */"./src/js/fetchData.js");
__webpack_require__(/*! C:\Users\franc\Desktop\loopstudios-landing-page-main\src\js\main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! C:\Users\franc\Desktop\loopstudios-landing-page-main\src\js\nav.js */"./src/js/nav.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsNkJBQTZCOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkNBQTJDO0FBQ3pELGNBQWMsTUFBTTtBQUNwQjtBQUNBLG9DQUFvQyxNQUFNO0FBQzFDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3hDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsR0FBRztBQUNIO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgZ3JpZEJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWQtYm94ZXMnKTtcclxuXHRjb25zdCBVUkwgPSAnLi9qcy9jcmVhdGlvbnMuanNvbic7XHJcblxyXG5cdGNvbnN0IGdldENyZWF0aW9uc0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0Y29uc3QgYm94ZXMgPSBkYXRhLmJveGVzO1xyXG5cclxuXHRcdGdyaWRCb3hlcy5pbm5lckhUTUwgPSBib3hlc1xyXG5cdFx0XHQubWFwKChib3gpID0+IHtcclxuXHRcdFx0XHRjb25zdCB7IGlkLCB0aXRsZSwgaW1hZ2UsIGltYWdlTW9iIH0gPSBib3g7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdFx0XHRcdGlmICh3aW5kb3dXaWR0aCA+IDYwMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaW1hZ2U7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHdpbmRvd1dpZHRoIDwgNjAwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBpbWFnZU1vYjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gYFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdyaWRfX2JveFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiZ3JpZF9fYm94LWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiJHt3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCA/IGltYWdlTW9iIDogaW1hZ2V9XCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCIke3RpdGxlfVwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzcz1cImdyaWRfX2JveC10aXRsZVwiPiR7dGl0bGV9PC9oND5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0YDtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmpvaW4oJycpO1xyXG5cdH07XHJcblxyXG5cdGdldENyZWF0aW9uc0RhdGEoKTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcblx0XHRjb25zdCBwcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWQnKTtcblxuXHRcdHByZWxvYWQuY2xhc3NMaXN0LmFkZCgncHJlbG9hZC1maW5pc2hlZCcpO1xuXHR9KTtcblxuXHRjb25zdCBidG5TY3JvbGxUb1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TY3JvbGxUb1RvcCcpO1xuXG5cdGlmIChidG5TY3JvbGxUb1RvcCkge1xuXHRcdGJ0blNjcm9sbFRvVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbyh7XG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBoZXJvTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlcm8tbmF2Jyk7XHJcblx0Y29uc3Qgc3RpY2t5SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0aWNreS1oZWFkZXInKTtcclxuXHRjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XHJcblx0Y29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbGlzdCcpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMCkge1xyXG5cdFx0XHRzdGlja3lIZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XHJcblx0XHRcdC8qIGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAxOyAqL1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RpY2t5SGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xyXG5cdFx0XHQvKiBcdGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAwOyAqL1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnY2xpY2tlZCcpO1xyXG5cdFx0aGVyb05hdi5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XHJcblx0XHRuYXZMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuXHR9KTtcclxufSk7XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyWmxkR05vUkdGMFlTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YW5NdmJXRnBiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZibUYyTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1VVRkJRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUczdPMUZCUjBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxEQkRRVUV3UXl4blEwRkJaME03VVVGRE1VVTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDNSRUZCZDBRc2EwSkJRV3RDTzFGQlF6RkZPMUZCUTBFc2FVUkJRV2xFTEdOQlFXTTdVVUZETDBRN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEhsRFFVRjVReXhwUTBGQmFVTTdVVUZETVVVc1owaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8xRkJRM0pKTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzTWtKQlFUSkNMREJDUVVFd1FpeEZRVUZGTzFGQlEzWkVMR2xEUVVGcFF5eGxRVUZsTzFGQlEyaEVPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTEhORVFVRnpSQ3dyUkVGQkswUTdPMUZCUlhKSU8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN096czdPenM3T3pzN096dEJRMnhHUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzTmtKQlFUWkNPenRCUVVWNFF6dEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFXTXNNa05CUVRKRE8wRkJRM3BFTEdOQlFXTXNUVUZCVFR0QlFVTndRanRCUVVOQkxHOURRVUZ2UXl4TlFVRk5PMEZCUXpGRE8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlEzaERSRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RlFVRkZPenRCUVVWR096dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNpeEhRVUZITzBGQlEwZzdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOc1FrUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4MVEwRkJkVU03UVVGRGRrTXNSMEZCUnp0QlFVTklPMEZCUTBFc2QwTkJRWGRETzBGQlEzaERPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSaXhEUVVGRElpd2labWxzWlNJNklqaGpOV1kwT0dJeU1HTTVZekV6TnpOa1lUWXlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEQXBPMXh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmpiMjV6ZENCbmNtbGtRbTk0WlhNZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblozSnBaQzFpYjNobGN5Y3BPMXh5WEc1Y2RHTnZibk4wSUZWU1RDQTlJQ2N1TDJwekwyTnlaV0YwYVc5dWN5NXFjMjl1Snp0Y2NseHVYSEpjYmx4MFkyOXVjM1FnWjJWMFEzSmxZWFJwYjI1elJHRjBZU0E5SUdGemVXNWpJQ2dwSUQwK0lIdGNjbHh1WEhSY2RHTnZibk4wSUhKbGMzQnZibk5sSUQwZ1lYZGhhWFFnWm1WMFkyZ29WVkpNS1R0Y2NseHVYSFJjZEdOdmJuTjBJR1JoZEdFZ1BTQmhkMkZwZENCeVpYTndiMjV6WlM1cWMyOXVLQ2s3WEhKY2JseDBYSFJqYjI1emRDQmliM2hsY3lBOUlHUmhkR0V1WW05NFpYTTdYSEpjYmx4eVhHNWNkRngwWjNKcFpFSnZlR1Z6TG1sdWJtVnlTRlJOVENBOUlHSnZlR1Z6WEhKY2JseDBYSFJjZEM1dFlYQW9LR0p2ZUNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJSHNnYVdRc0lIUnBkR3hsTENCcGJXRm5aU3dnYVcxaFoyVk5iMklnZlNBOUlHSnZlRHRjY2x4dVhISmNibHgwWEhSY2RGeDBkMmx1Wkc5M0xtOXVjbVZ6YVhwbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUhkcGJtUnZkMWRwWkhSb0lEMGdkMmx1Wkc5M0xtbHVibVZ5VjJsa2RHZzdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0hkcGJtUnZkMWRwWkhSb0lENGdOakF3S1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhKbGRIVnliaUJwYldGblpUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9kMmx1Wkc5M1YybGtkR2dnUENBMk1EQXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlHbHRZV2RsVFc5aU8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMDdYSEpjYmx4eVhHNWNkRngwWEhSY2RISmxkSFZ5YmlCZ1hISmNibHgwWEhSY2RGeDBYSFE4WkdsMklHTnNZWE56UFZ3aVozSnBaRjlmWW05NFhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2REeHBiV2NnWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWTJ4aGMzTTlYQ0puY21sa1gxOWliM2d0YVcxblhDSmNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUnpjbU05WENJa2UzZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb0lEd2dOakF3SUQ4Z2FXMWhaMlZOYjJJZ09pQnBiV0ZuWlgxY0lseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RHRnNkRDFjSWlSN2RHbDBiR1Y5WENKY2NseHVYSFJjZEZ4MFhIUmNkRngwTHo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwUEdnMElHTnNZWE56UFZ3aVozSnBaRjlmWW05NExYUnBkR3hsWENJK0pIdDBhWFJzWlgwOEwyZzBQbHh5WEc1Y2RGeDBYSFJjZEZ4MFBDOWthWFkrWEhKY2JseDBYSFJjZEZ4MFhIUmdPMXh5WEc1Y2RGeDBYSFI5S1Z4eVhHNWNkRngwWEhRdWFtOXBiaWduSnlrN1hISmNibHgwZlR0Y2NseHVYSEpjYmx4MFoyVjBRM0psWVhScGIyNXpSR0YwWVNncE8xeHlYRzU5S1R0Y2NseHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNibHgwZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMnh2WVdRbkxDQW9aU2tnUFQ0Z2UxeHVYSFJjZEdOdmJuTjBJSEJ5Wld4dllXUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjSEpsYkc5aFpDY3BPMXh1WEc1Y2RGeDBjSEpsYkc5aFpDNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkd2NtVnNiMkZrTFdacGJtbHphR1ZrSnlrN1hHNWNkSDBwTzF4dVhHNWNkR052Ym5OMElHSjBibE5qY205c2JGUnZWRzl3SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJKMGJsTmpjbTlzYkZSdlZHOXdKeWs3WEc1Y2JseDBhV1lnS0dKMGJsTmpjbTlzYkZSdlZHOXdLU0I3WEc1Y2RGeDBZblJ1VTJOeWIyeHNWRzlVYjNBdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4dVhIUmNkRngwZDJsdVpHOTNMbk5qY205c2JGUnZLSHRjYmx4MFhIUmNkRngwZEc5d09pQXdMRnh1WEhSY2RGeDBYSFJzWldaME9pQXdMRnh1WEhSY2RGeDBYSFJpWldoaGRtbHZjam9nSjNOdGIyOTBhQ2NzWEc1Y2RGeDBYSFI5S1R0Y2JseDBYSFI5S1R0Y2JseDBmVnh1ZlNrN1hHNGlMQ0prYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RFVDAxRGIyNTBaVzUwVEc5aFpHVmtKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZEdOdmJuTjBJR2hsY205T1lYWWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25hR1Z5YnkxdVlYWW5LVHRjY2x4dVhIUmpiMjV6ZENCemRHbGphM2xJWldGa1pYSWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25jM1JwWTJ0NUxXaGxZV1JsY2ljcE8xeHlYRzVjZEdOdmJuTjBJRzFsYm5WQ2RHNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25iV1Z1ZFMxaWRHNG5LVHRjY2x4dVhIUmpiMjV6ZENCdVlYWk1hWE4wSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjI1aGRpMXNhWE4wSnlrN1hISmNibHh5WEc1Y2RIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkelkzSnZiR3duTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwYVdZZ0tHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1elkzSnZiR3hVYjNBZ1BpQXdLU0I3WEhKY2JseDBYSFJjZEhOMGFXTnJlVWhsWVdSbGNpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkemRHbGphM2tuS1R0Y2NseHVYSFJjZEZ4MEx5b2dZblJ1VTJOeWIyeHNWRzlVYjNBdWMzUjViR1V1YjNCaFkybDBlU0E5SURFN0lDb3ZYSEpjYmx4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUnpkR2xqYTNsSVpXRmtaWEl1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYzNScFkydDVKeWs3WEhKY2JseDBYSFJjZEM4cUlGeDBZblJ1VTJOeWIyeHNWRzlVYjNBdWMzUjViR1V1YjNCaFkybDBlU0E5SURBN0lDb3ZYSEpjYmx4MFhIUjlYSEpjYmx4MGZTazdYSEpjYmx4eVhHNWNkRzFsYm5WQ2RHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEZ4MGJXVnVkVUowYmk1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkamJHbGphMlZrSnlrN1hISmNibHgwWEhSb1pYSnZUbUYyTG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjI5MlpYSnNZWGtuS1R0Y2NseHVYSFJjZEc1aGRreHBjM1F1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYzJodmR5Y3BPMXh5WEc1Y2RIMHBPMXh5WEc1OUtUdGNjbHh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSJ9
