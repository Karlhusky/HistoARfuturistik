import { i as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { n as require_react } from "../@radix-ui/react-compose-refs+[...].mjs";
import { $ as MirroredRepeatWrapping, A as Interpolant, At as Texture, B as LinearMipmapNearestFilter, C as HalfFloatType, Ct as Skeleton, D as InstancedMesh, Dt as Spherical, E as InstancedBufferAttribute, Et as Sphere, F as LineBasicMaterial, Ft as VectorKeyframeTrack, G as Material, H as Loader, I as LineLoop, It as WebGLRenderTarget, J as Mesh, K as MathUtils, L as LineSegments, M as InterpolateLinear, N as Layers, Nt as Vector2, O as InterleavedBuffer, Ot as SpotLight, P as Line, Pt as Vector3, Q as MeshStandardMaterial, R as LinearFilter, S as Group, St as ShaderMaterial, T as ImageBitmapLoader, Tt as SkinnedMesh, U as LoaderUtils, V as LinearSRGBColorSpace$1, W as MOUSE, X as MeshDepthMaterial, Y as MeshBasicMaterial, Z as MeshPhysicalMaterial, _ as DataTextureLoader, _t as Raycaster, a as three_module_exports, at as OrthographicCamera, b as FileLoader, bt as SRGBColorSpace$1, c as Bone, ct as PlaneGeometry, d as BufferGeometry, dt as PointsMaterial, et as NearestFilter, f as ClampToEdgeWrapping, ft as PropertyBinding, g as CubeTextureLoader, gt as Ray, h as ColorManagement, ht as RGBAFormat, i as WebGLRenderer, it as Object3D, j as InterpolateDiscrete, jt as TextureLoader, k as InterleavedBufferAttribute, kt as TOUCH, l as Box3, lt as PointLight, m as Color, mt as QuaternionKeyframeTrack, n as HDRJPGLoader, nt as NearestMipmapNearestFilter, o as AnimationClip, ot as PerspectiveCamera, p as Clock, pt as Quaternion, q as Matrix4, r as WebGLCubeRenderTarget, rt as NumberKeyframeTrack, s as AnimationMixer, st as Plane, t as GainMapLoader, tt as NearestMipmapLinearFilter, u as BufferAttribute, ut as Points, v as DataUtils, vt as RedFormat, w as IcosahedronGeometry, x as FloatType, xt as Scene, y as DirectionalLight, yt as RepeatWrapping, z as LinearMipmapLinearFilter } from "../monogrid__gainmap-js+three.mjs";
import { t as _extends } from "../babel__runtime.mjs";
import { createRequire } from "module";
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useState = React.useState;
	var useEffect = React.useEffect;
	var useLayoutEffect = React.useLayoutEffect;
	var useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
//#endregion
//#region node_modules/use-sync-external-store/shim/index.js
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}));
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	var shim = require_shim();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useSyncExternalStore = shim.useSyncExternalStore;
	var useRef = React.useRef;
	var useEffect = React.useEffect;
	var useMemo = React.useMemo;
	var useDebugValue = React.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo(function() {
			function memoizedSelector(nextSnapshot) {
				if (!hasMemo) {
					hasMemo = !0;
					memoizedSnapshot = nextSnapshot;
					nextSnapshot = selector(nextSnapshot);
					if (void 0 !== isEqual && inst.hasValue) {
						var currentSelection = inst.value;
						if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
					}
					return memoizedSelection = nextSnapshot;
				}
				currentSelection = memoizedSelection;
				if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
				var nextSelection = selector(nextSnapshot);
				if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
				memoizedSnapshot = nextSnapshot;
				return memoizedSelection = nextSelection;
			}
			var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
			return [function() {
				return memoizedSelector(getSnapshot());
			}, null === maybeGetServerSnapshot ? void 0 : function() {
				return memoizedSelector(maybeGetServerSnapshot());
			}];
		}, [
			getSnapshot,
			getServerSnapshot,
			selector,
			isEqual
		]);
		var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
		useEffect(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue(value);
		return value;
	};
}));
//#endregion
//#region node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_with_selector_production();
}));
//#endregion
//#region node_modules/zustand/esm/vanilla.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_with_selector = /* @__PURE__ */ __toESM(require_with_selector(), 1);
var createStoreImpl = (createState) => {
	let state;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (partial, replace) => {
		const nextState = typeof partial === "function" ? partial(state) : partial;
		if (!Object.is(nextState, state)) {
			const previousState = state;
			state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
			listeners.forEach((listener) => listener(state, previousState));
		}
	};
	const getState = () => state;
	const getInitialState = () => initialState;
	const subscribe = (listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};
	const api = {
		setState,
		getState,
		getInitialState,
		subscribe
	};
	const initialState = state = createState(setState, getState, api);
	return api;
};
var createStore$1 = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);
//#endregion
//#region node_modules/zustand/esm/traditional.mjs
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
var identity = (arg) => arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
	const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
	import_react.useDebugValue(slice);
	return slice;
}
var createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
	const api = createStore$1(createState);
	const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn);
	Object.assign(useBoundStoreWithEqualityFn, api);
	return useBoundStoreWithEqualityFn;
};
var createWithEqualityFn = ((createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl);
//#endregion
//#region node_modules/suspend-react/index.js
var isPromise = (promise) => typeof promise === "object" && typeof promise.then === "function";
var globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b) => a === b) {
	if (arrA === arrB) return true;
	if (!arrA || !arrB) return false;
	const len = arrA.length;
	if (arrB.length !== len) return false;
	for (let i = 0; i < len; i++) if (!equal(arrA[i], arrB[i])) return false;
	return true;
}
function query(fn, keys = null, preload = false, config = {}) {
	if (keys === null) keys = [fn];
	for (const entry of globalCache) if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
		if (preload) return void 0;
		if (Object.prototype.hasOwnProperty.call(entry, "error")) throw entry.error;
		if (Object.prototype.hasOwnProperty.call(entry, "response")) {
			if (config.lifespan && config.lifespan > 0) {
				if (entry.timeout) clearTimeout(entry.timeout);
				entry.timeout = setTimeout(entry.remove, config.lifespan);
			}
			return entry.response;
		}
		if (!preload) throw entry.promise;
	}
	const entry = {
		keys,
		equal: config.equal,
		remove: () => {
			const index = globalCache.indexOf(entry);
			if (index !== -1) globalCache.splice(index, 1);
		},
		promise: (isPromise(fn) ? fn : fn(...keys)).then((response) => {
			entry.response = response;
			if (config.lifespan && config.lifespan > 0) entry.timeout = setTimeout(entry.remove, config.lifespan);
		}).catch((error) => entry.error = error)
	};
	globalCache.push(entry);
	if (!preload) throw entry.promise;
}
var suspend = (fn, keys, config) => query(fn, keys, false, config);
var preload = (fn, keys, config) => void query(fn, keys, true, config);
var clear = (keys) => {
	if (keys === void 0 || keys.length === 0) globalCache.splice(0, globalCache.length);
	else {
		const entry = globalCache.find((entry) => shallowEqualArrays(keys, entry.keys, entry.equal));
		if (entry) entry.remove();
	}
};
//#endregion
//#region node_modules/scheduler/cjs/scheduler.production.js
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	function push(heap, node) {
		var index = heap.length;
		heap.push(node);
		a: for (; 0 < index;) {
			var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
			if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
			else break a;
		}
	}
	function peek(heap) {
		return 0 === heap.length ? null : heap[0];
	}
	function pop(heap) {
		if (0 === heap.length) return null;
		var first = heap[0], last = heap.pop();
		if (last !== first) {
			heap[0] = last;
			a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;) {
				var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
				if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
				else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
				else break a;
			}
		}
		return first;
	}
	function compare(a, b) {
		var diff = a.sortIndex - b.sortIndex;
		return 0 !== diff ? diff : a.id - b.id;
	}
	exports.unstable_now = void 0;
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var localPerformance = performance;
		exports.unstable_now = function() {
			return localPerformance.now();
		};
	} else {
		var localDate = Date, initialTime = localDate.now();
		exports.unstable_now = function() {
			return localDate.now() - initialTime;
		};
	}
	var taskQueue = [];
	var timerQueue = [];
	var taskIdCounter = 1;
	var currentTask = null;
	var currentPriorityLevel = 3;
	var isPerformingWork = !1;
	var isHostCallbackScheduled = !1;
	var isHostTimeoutScheduled = !1;
	var needsPaint = !1;
	var localSetTimeout = "function" === typeof setTimeout ? setTimeout : null;
	var localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null;
	var localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
	function advanceTimers(currentTime) {
		for (var timer = peek(timerQueue); null !== timer;) {
			if (null === timer.callback) pop(timerQueue);
			else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
			else break;
			timer = peek(timerQueue);
		}
	}
	function handleTimeout(currentTime) {
		isHostTimeoutScheduled = !1;
		advanceTimers(currentTime);
		if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
		else {
			var firstTimer = peek(timerQueue);
			null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		}
	}
	var isMessageLoopRunning = !1;
	var taskTimeoutID = -1;
	var frameInterval = 5;
	var startTime = -1;
	function shouldYieldToHost() {
		return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
	}
	function performWorkUntilDeadline() {
		needsPaint = !1;
		if (isMessageLoopRunning) {
			var currentTime = exports.unstable_now();
			startTime = currentTime;
			var hasMoreWork = !0;
			try {
				a: {
					isHostCallbackScheduled = !1;
					isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
					isPerformingWork = !0;
					var previousPriorityLevel = currentPriorityLevel;
					try {
						b: {
							advanceTimers(currentTime);
							for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());) {
								var callback = currentTask.callback;
								if ("function" === typeof callback) {
									currentTask.callback = null;
									currentPriorityLevel = currentTask.priorityLevel;
									var continuationCallback = callback(currentTask.expirationTime <= currentTime);
									currentTime = exports.unstable_now();
									if ("function" === typeof continuationCallback) {
										currentTask.callback = continuationCallback;
										advanceTimers(currentTime);
										hasMoreWork = !0;
										break b;
									}
									currentTask === peek(taskQueue) && pop(taskQueue);
									advanceTimers(currentTime);
								} else pop(taskQueue);
								currentTask = peek(taskQueue);
							}
							if (null !== currentTask) hasMoreWork = !0;
							else {
								var firstTimer = peek(timerQueue);
								null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
								hasMoreWork = !1;
							}
						}
						break a;
					} finally {
						currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
					}
				}
			} finally {
				hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
			}
		}
	}
	var schedulePerformWorkUntilDeadline;
	if ("function" === typeof localSetImmediate) schedulePerformWorkUntilDeadline = function() {
		localSetImmediate(performWorkUntilDeadline);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var channel = new MessageChannel(), port = channel.port2;
		channel.port1.onmessage = performWorkUntilDeadline;
		schedulePerformWorkUntilDeadline = function() {
			port.postMessage(null);
		};
	} else schedulePerformWorkUntilDeadline = function() {
		localSetTimeout(performWorkUntilDeadline, 0);
	};
	function requestHostTimeout(callback, ms) {
		taskTimeoutID = localSetTimeout(function() {
			callback(exports.unstable_now());
		}, ms);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(task) {
		task.callback = null;
	};
	exports.unstable_forceFrameRate = function(fps) {
		0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return currentPriorityLevel;
	};
	exports.unstable_next = function(eventHandler) {
		switch (currentPriorityLevel) {
			case 1:
			case 2:
			case 3:
				var priorityLevel = 3;
				break;
			default: priorityLevel = currentPriorityLevel;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_requestPaint = function() {
		needsPaint = !0;
	};
	exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
		switch (priorityLevel) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: priorityLevel = 3;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
		var currentTime = exports.unstable_now();
		"object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
		switch (priorityLevel) {
			case 1:
				var timeout = -1;
				break;
			case 2:
				timeout = 250;
				break;
			case 5:
				timeout = 1073741823;
				break;
			case 4:
				timeout = 1e4;
				break;
			default: timeout = 5e3;
		}
		timeout = options + timeout;
		priorityLevel = {
			id: taskIdCounter++,
			callback,
			priorityLevel,
			startTime: options,
			expirationTime: timeout,
			sortIndex: -1
		};
		options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
		return priorityLevel;
	};
	exports.unstable_shouldYield = shouldYieldToHost;
	exports.unstable_wrapCallback = function(callback) {
		var parentPriorityLevel = currentPriorityLevel;
		return function() {
			var previousPriorityLevel = currentPriorityLevel;
			currentPriorityLevel = parentPriorityLevel;
			try {
				return callback.apply(this, arguments);
			} finally {
				currentPriorityLevel = previousPriorityLevel;
			}
		};
	};
}));
//#endregion
//#region node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production();
}));
//#endregion
//#region node_modules/its-fine/dist/index.js
var import_jsx_runtime = require_jsx_runtime();
var import_scheduler = /* @__PURE__ */ __toESM(require_scheduler());
/* @__PURE__ */ (() => {
	var e, t;
	return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? import_react.useLayoutEffect : import_react.useEffect;
function i$3(e, t, r) {
	if (!e) return;
	if (r(e) === !0) return e;
	let n = t ? e.return : e.child;
	for (; n;) {
		const u = i$3(n, t, r);
		if (u) return u;
		n = t ? null : n.sibling;
	}
}
function l(e) {
	try {
		return Object.defineProperties(e, {
			_currentRenderer: {
				get() {
					return null;
				},
				set() {}
			},
			_currentRenderer2: {
				get() {
					return null;
				},
				set() {}
			}
		});
	} catch (t) {
		return e;
	}
}
var a = /* @__PURE__ */ l(/* @__PURE__ */ import_react.createContext(null));
var m = class extends import_react.Component {
	render() {
		return /* @__PURE__ */ import_react.createElement(a.Provider, { value: this._reactInternals }, this.props.children);
	}
};
function c() {
	const e = import_react.useContext(a);
	if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
	const t = import_react.useId();
	return import_react.useMemo(() => {
		for (const n of [e, e == null ? void 0 : e.alternate]) {
			if (!n) continue;
			const u = i$3(n, !1, (d) => {
				let s = d.memoizedState;
				for (; s;) {
					if (s.memoizedState === t) return !0;
					s = s.next;
				}
			});
			if (u) return u;
		}
	}, [e, t]);
}
var p$1 = Symbol.for("react.context");
var b = (e) => e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p$1;
function h() {
	const e = c(), [t] = import_react.useState(() => /* @__PURE__ */ new Map());
	t.clear();
	let r = e;
	for (; r;) {
		const n = r.type;
		b(n) && n !== a && !t.has(n) && t.set(n, import_react.use(l(n))), r = r.return;
	}
	return t;
}
function x$1() {
	const e = h();
	return import_react.useMemo(() => Array.from(e.keys()).reduce((t, r) => (n) => /* @__PURE__ */ import_react.createElement(t, null, /* @__PURE__ */ import_react.createElement(r.Provider, {
		...n,
		value: e.get(r)
	})), (t) => /* @__PURE__ */ import_react.createElement(m, { ...t })), [e]);
}
//#endregion
//#region node_modules/@react-three/fiber/dist/events-156d8d12.esm.js
/**
* Returns the instance's initial (outmost) root.
*/
function findInitialRoot(instance) {
	let root = instance.root;
	while (root.getState().previousRoot) root = root.getState().previousRoot;
	return root;
}
var isOrthographicCamera = (def) => def && def.isOrthographicCamera;
var isRef$1 = (obj) => obj && obj.hasOwnProperty("current");
var isColorRepresentation = (value) => value != null && (typeof value === "string" || typeof value === "number" || value.isColor);
/**
* An SSR-friendly useLayoutEffect.
*
* React currently throws a warning when using useLayoutEffect on the server.
* To get around it, we can conditionally useEffect on the server (no-op) and
* useLayoutEffect elsewhere.
*
* @see https://github.com/facebook/react/issues/14927
*/
var useIsomorphicLayoutEffect = /* @__PURE__ */ ((_window$document, _window$navigator) => typeof window !== "undefined" && (((_window$document = window.document) == null ? void 0 : _window$document.createElement) || ((_window$navigator = window.navigator) == null ? void 0 : _window$navigator.product) === "ReactNative"))() ? import_react.useLayoutEffect : import_react.useEffect;
function useMutableCallback(fn) {
	const ref = import_react.useRef(fn);
	useIsomorphicLayoutEffect(() => void (ref.current = fn), [fn]);
	return ref;
}
/**
* Bridges renderer Context and StrictMode from a primary renderer.
*/
function useBridge() {
	const fiber = c();
	const ContextBridge = x$1();
	return import_react.useMemo(() => ({ children }) => {
		const Root = !!i$3(fiber, true, (node) => node.type === import_react.StrictMode) ? import_react.StrictMode : import_react.Fragment;
		return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Root, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ContextBridge, { children }) });
	}, [fiber, ContextBridge]);
}
function Block({ set }) {
	useIsomorphicLayoutEffect(() => {
		set(new Promise(() => null));
		return () => set(false);
	}, [set]);
	return null;
}
var ErrorBoundary = /* @__PURE__ */ ((_ErrorBoundary) => (_ErrorBoundary = class ErrorBoundary extends import_react.Component {
	constructor(...args) {
		super(...args);
		this.state = { error: false };
	}
	componentDidCatch(err) {
		this.props.set(err);
	}
	render() {
		return this.state.error ? null : this.props.children;
	}
}, _ErrorBoundary.getDerivedStateFromError = () => ({ error: true }), _ErrorBoundary))();
function calculateDpr(dpr) {
	var _window$devicePixelRa;
	const target = typeof window !== "undefined" ? (_window$devicePixelRa = window.devicePixelRatio) != null ? _window$devicePixelRa : 2 : 1;
	return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], target), dpr[1]) : dpr;
}
/**
* Returns instance root state
*/
function getRootState(obj) {
	var _r3f;
	return (_r3f = obj.__r3f) == null ? void 0 : _r3f.root.getState();
}
var is = {
	obj: (a) => a === Object(a) && !is.arr(a) && typeof a !== "function",
	fun: (a) => typeof a === "function",
	str: (a) => typeof a === "string",
	num: (a) => typeof a === "number",
	boo: (a) => typeof a === "boolean",
	und: (a) => a === void 0,
	nul: (a) => a === null,
	arr: (a) => Array.isArray(a),
	equ(a, b, { arrays = "shallow", objects = "reference", strict = true } = {}) {
		if (typeof a !== typeof b || !!a !== !!b) return false;
		if (is.str(a) || is.num(a) || is.boo(a)) return a === b;
		const isObj = is.obj(a);
		if (isObj && objects === "reference") return a === b;
		const isArr = is.arr(a);
		if (isArr && arrays === "reference") return a === b;
		if ((isArr || isObj) && a === b) return true;
		let i;
		for (i in a) if (!(i in b)) return false;
		if (isObj && arrays === "shallow" && objects === "shallow") {
			for (i in strict ? b : a) if (!is.equ(a[i], b[i], {
				strict,
				objects: "reference"
			})) return false;
		} else for (i in strict ? b : a) if (a[i] !== b[i]) return false;
		if (is.und(i)) {
			if (isArr && a.length === 0 && b.length === 0) return true;
			if (isObj && Object.keys(a).length === 0 && Object.keys(b).length === 0) return true;
			if (a !== b) return false;
		}
		return true;
	}
};
function buildGraph(object) {
	const data = {
		nodes: {},
		materials: {},
		meshes: {}
	};
	if (object) object.traverse((obj) => {
		if (obj.name) data.nodes[obj.name] = obj;
		if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
		if (obj.isMesh && !data.meshes[obj.name]) data.meshes[obj.name] = obj;
	});
	return data;
}
function dispose(obj) {
	if (obj.type !== "Scene") obj.dispose == null || obj.dispose();
	for (const p in obj) {
		const prop = obj[p];
		if ((prop == null ? void 0 : prop.type) !== "Scene") prop == null || prop.dispose == null || prop.dispose();
	}
}
var REACT_INTERNAL_PROPS = [
	"children",
	"key",
	"ref"
];
function getInstanceProps(pendingProps) {
	const props = {};
	for (const key in pendingProps) if (!REACT_INTERNAL_PROPS.includes(key)) props[key] = pendingProps[key];
	return props;
}
function prepare(target, root, type, props) {
	const object = target;
	let instance = object == null ? void 0 : object.__r3f;
	if (!instance) {
		instance = {
			root,
			type,
			parent: null,
			children: [],
			props: getInstanceProps(props),
			object,
			eventCount: 0,
			handlers: {},
			isHidden: false
		};
		if (object) object.__r3f = instance;
	}
	return instance;
}
function resolve(root, key) {
	if (!key.includes("-")) return {
		root,
		key,
		target: root[key]
	};
	if (key in root) return {
		root,
		key,
		target: root[key]
	};
	let target = root;
	const parts = key.split("-");
	for (const part of parts) {
		if (typeof target !== "object" || target === null) {
			if (target !== void 0) {
				const remaining = parts.slice(parts.indexOf(part)).join("-");
				return {
					root: target,
					key: remaining,
					target: void 0
				};
			}
			return {
				root,
				key,
				target: void 0
			};
		}
		key = part;
		root = target;
		target = target[key];
	}
	return {
		root,
		key,
		target
	};
}
var INDEX_REGEX = /-\d+$/;
function attach(parent, child) {
	if (is.str(child.props.attach)) {
		if (INDEX_REGEX.test(child.props.attach)) {
			const index = child.props.attach.replace(INDEX_REGEX, "");
			const { root, key } = resolve(parent.object, index);
			if (!Array.isArray(root[key])) root[key] = [];
		}
		const { root, key } = resolve(parent.object, child.props.attach);
		child.previousAttach = root[key];
		root[key] = child.object;
	} else if (is.fun(child.props.attach)) child.previousAttach = child.props.attach(parent.object, child.object);
}
function detach(parent, child) {
	if (is.str(child.props.attach)) {
		const { root, key } = resolve(parent.object, child.props.attach);
		const previous = child.previousAttach;
		if (previous === void 0) delete root[key];
		else root[key] = previous;
	} else child.previousAttach == null || child.previousAttach(parent.object, child.object);
	delete child.previousAttach;
}
var RESERVED_PROPS = [
	...REACT_INTERNAL_PROPS,
	"args",
	"dispose",
	"attach",
	"object",
	"onUpdate",
	"dispose"
];
var MEMOIZED_PROTOTYPES = /* @__PURE__ */ new Map();
function getMemoizedPrototype(root) {
	let ctor = MEMOIZED_PROTOTYPES.get(root.constructor);
	try {
		if (!ctor) {
			ctor = new root.constructor();
			MEMOIZED_PROTOTYPES.set(root.constructor, ctor);
		}
	} catch (e) {}
	return ctor;
}
function diffProps(instance, newProps) {
	const changedProps = {};
	for (const prop in newProps) {
		if (RESERVED_PROPS.includes(prop)) continue;
		if (is.equ(newProps[prop], instance.props[prop])) continue;
		changedProps[prop] = newProps[prop];
		for (const other in newProps) if (other.startsWith(`${prop}-`)) changedProps[other] = newProps[other];
	}
	for (const prop in instance.props) {
		if (RESERVED_PROPS.includes(prop) || newProps.hasOwnProperty(prop)) continue;
		const { root, key } = resolve(instance.object, prop);
		if (root.constructor && root.constructor.length === 0) {
			const ctor = getMemoizedPrototype(root);
			if (!is.und(ctor)) changedProps[prop] = ctor[key];
		} else changedProps[prop] = 0;
	}
	return changedProps;
}
var colorMaps = [
	"map",
	"emissiveMap",
	"sheenColorMap",
	"specularColorMap",
	"envMap"
];
var EVENT_REGEX = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function applyProps(object, props) {
	var _instance$object;
	const instance = object.__r3f;
	const rootState = instance && findInitialRoot(instance).getState();
	const prevHandlers = instance == null ? void 0 : instance.eventCount;
	for (const prop in props) {
		let value = props[prop];
		if (RESERVED_PROPS.includes(prop)) continue;
		if (instance && EVENT_REGEX.test(prop)) {
			if (typeof value === "function") instance.handlers[prop] = value;
			else delete instance.handlers[prop];
			instance.eventCount = Object.keys(instance.handlers).length;
			continue;
		}
		if (value === void 0) continue;
		let { root, key, target } = resolve(object, prop);
		if (target === void 0 && (typeof root !== "object" || root === null)) throw Error(`R3F: Cannot set "${prop}". Ensure it is an object before setting "${key}".`);
		if (target instanceof Layers && value instanceof Layers) target.mask = value.mask;
		else if (target instanceof Color && isColorRepresentation(value)) target.set(value);
		else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof target.copy === "function" && value != null && value.constructor && target.constructor === value.constructor) target.copy(value);
		else if (target !== null && typeof target === "object" && typeof target.set === "function" && Array.isArray(value)) if (typeof target.fromArray === "function") target.fromArray(value);
		else target.set(...value);
		else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof value === "number") if (typeof target.setScalar === "function") target.setScalar(value);
		else target.set(value);
		else if (root instanceof ShaderMaterial && key === "uniforms" && is.obj(value)) {
			if (!is.obj(root.uniforms)) root.uniforms = {};
			const uniforms = root.uniforms;
			const nextUniforms = value;
			for (const name in nextUniforms) {
				const uniform = nextUniforms[name];
				const targetUniform = uniforms[name];
				if (targetUniform) Object.assign(targetUniform, uniform);
				else uniforms[name] = { ...uniform };
			}
		} else {
			var _root$key;
			root[key] = value;
			if (rootState && !rootState.linear && colorMaps.includes(key) && (_root$key = root[key]) != null && _root$key.isTexture && root[key].format === 1023 && root[key].type === 1009) root[key].colorSpace = SRGBColorSpace$1;
		}
	}
	if (instance != null && instance.parent && rootState != null && rootState.internal && (_instance$object = instance.object) != null && _instance$object.isObject3D && prevHandlers !== instance.eventCount) {
		const object = instance.object;
		const index = rootState.internal.interaction.indexOf(object);
		if (index > -1) rootState.internal.interaction.splice(index, 1);
		if (instance.eventCount && object.raycast !== null) rootState.internal.interaction.push(object);
	}
	if (instance && instance.props.attach === void 0) {
		if (instance.object.isBufferGeometry) instance.props.attach = "geometry";
		else if (instance.object.isMaterial) instance.props.attach = "material";
	}
	if (instance) invalidateInstance(instance);
	return object;
}
function invalidateInstance(instance) {
	var _instance$root;
	if (!instance.parent) return;
	instance.props.onUpdate == null || instance.props.onUpdate(instance.object);
	const state = (_instance$root = instance.root) == null ? void 0 : _instance$root.getState == null ? void 0 : _instance$root.getState();
	if (state && state.internal.frames === 0) state.invalidate();
}
function updateCamera(camera, size) {
	if (camera.manual) return;
	if (isOrthographicCamera(camera)) {
		camera.left = size.width / -2;
		camera.right = size.width / 2;
		camera.top = size.height / 2;
		camera.bottom = size.height / -2;
	} else camera.aspect = size.width / size.height;
	camera.updateProjectionMatrix();
}
var isObject3D = (object) => object == null ? void 0 : object.isObject3D;
function makeId(event) {
	return (event.eventObject || event.object).uuid + "/" + event.index + event.instanceId;
}
/**
* Release pointer captures.
* This is called by releasePointerCapture in the API, and when an object is removed.
*/
function releaseInternalPointerCapture(capturedMap, obj, captures, pointerId) {
	const captureData = captures.get(obj);
	if (captureData) {
		captures.delete(obj);
		if (captures.size === 0) {
			capturedMap.delete(pointerId);
			captureData.target.releasePointerCapture(pointerId);
		}
	}
}
/** This function transfers all interactivity state from one object instance to another. Used when swapping instances due to reconstruction. */
function swapInteractivity(store, object, newObject) {
	const { internal } = store.getState();
	for (let i = 0; i < internal.interaction.length; i++) if (internal.interaction[i] === object) internal.interaction[i] = newObject;
	for (let i = 0; i < internal.initialHits.length; i++) if (internal.initialHits[i] === object) internal.initialHits[i] = newObject;
	internal.hovered.forEach((value, key) => {
		if (value.eventObject === object || value.object === object) {
			internal.hovered.delete(key);
			const next = {
				...value,
				eventObject: value.eventObject === object ? newObject : value.eventObject,
				object: value.object === object ? newObject : value.object
			};
			internal.hovered.set(makeId(next), next);
		}
	});
	internal.capturedMap.forEach((captures) => {
		const captureData = captures.get(object);
		if (captureData) {
			captures.delete(object);
			captures.set(newObject, captureData);
		}
	});
}
function removeInteractivity(store, object) {
	const { internal } = store.getState();
	internal.interaction = internal.interaction.filter((o) => o !== object);
	internal.initialHits = internal.initialHits.filter((o) => o !== object);
	internal.hovered.forEach((value, key) => {
		if (value.eventObject === object || value.object === object) internal.hovered.delete(key);
	});
	internal.capturedMap.forEach((captures, pointerId) => {
		releaseInternalPointerCapture(internal.capturedMap, object, captures, pointerId);
	});
}
function createEvents(store) {
	/** Calculates delta */
	function calculateDistance(event) {
		const { internal } = store.getState();
		const dx = event.offsetX - internal.initialClick[0];
		const dy = event.offsetY - internal.initialClick[1];
		return Math.round(Math.sqrt(dx * dx + dy * dy));
	}
	/** Returns true if an instance has a valid pointer-event registered, this excludes scroll, clicks etc */
	function filterPointerEvents(objects) {
		return objects.filter((obj) => [
			"Move",
			"Over",
			"Enter",
			"Out",
			"Leave"
		].some((name) => {
			var _r3f;
			return (_r3f = obj.__r3f) == null ? void 0 : _r3f.handlers["onPointer" + name];
		}));
	}
	function intersect(event, filter) {
		const state = store.getState();
		const duplicates = /* @__PURE__ */ new Set();
		const intersections = [];
		const eventsObjects = filter ? filter(state.internal.interaction) : state.internal.interaction;
		for (let i = 0; i < eventsObjects.length; i++) {
			const state = getRootState(eventsObjects[i]);
			if (state) state.raycaster.camera = void 0;
		}
		if (!state.previousRoot) state.events.compute == null || state.events.compute(event, state);
		function handleRaycast(obj) {
			const state = getRootState(obj);
			if (!state || !state.events.enabled || state.raycaster.camera === null) return [];
			if (state.raycaster.camera === void 0) {
				var _state$previousRoot;
				state.events.compute == null || state.events.compute(event, state, (_state$previousRoot = state.previousRoot) == null ? void 0 : _state$previousRoot.getState());
				if (state.raycaster.camera === void 0) state.raycaster.camera = null;
			}
			return state.raycaster.camera ? state.raycaster.intersectObject(obj, true) : [];
		}
		let hits = eventsObjects.flatMap(handleRaycast).sort((a, b) => {
			const aState = getRootState(a.object);
			const bState = getRootState(b.object);
			if (!aState || !bState) return a.distance - b.distance;
			return bState.events.priority - aState.events.priority || a.distance - b.distance;
		}).filter((item) => {
			const id = makeId(item);
			if (duplicates.has(id)) return false;
			duplicates.add(id);
			return true;
		});
		if (state.events.filter) hits = state.events.filter(hits, state);
		for (const hit of hits) {
			let eventObject = hit.object;
			while (eventObject) {
				var _r3f2;
				if ((_r3f2 = eventObject.__r3f) != null && _r3f2.eventCount) intersections.push({
					...hit,
					eventObject
				});
				eventObject = eventObject.parent;
			}
		}
		if ("pointerId" in event && state.internal.capturedMap.has(event.pointerId)) {
			for (let captureData of state.internal.capturedMap.get(event.pointerId).values()) if (!duplicates.has(makeId(captureData.intersection))) intersections.push(captureData.intersection);
		}
		return intersections;
	}
	/**  Handles intersections by forwarding them to handlers */
	function handleIntersects(intersections, event, delta, callback) {
		if (intersections.length) {
			const localState = { stopped: false };
			for (const hit of intersections) {
				let state = getRootState(hit.object);
				if (!state) hit.object.traverseAncestors((obj) => {
					const parentState = getRootState(obj);
					if (parentState) {
						state = parentState;
						return false;
					}
				});
				if (state) {
					const { raycaster, pointer, camera, internal } = state;
					const unprojectedPoint = new Vector3(pointer.x, pointer.y, 0).unproject(camera);
					const hasPointerCapture = (id) => {
						var _internal$capturedMap, _internal$capturedMap2;
						return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
					};
					const setPointerCapture = (id) => {
						const captureData = {
							intersection: hit,
							target: event.target
						};
						if (internal.capturedMap.has(id)) internal.capturedMap.get(id).set(hit.eventObject, captureData);
						else internal.capturedMap.set(id, /* @__PURE__ */ new Map([[hit.eventObject, captureData]]));
						event.target.setPointerCapture(id);
					};
					const releasePointerCapture = (id) => {
						const captures = internal.capturedMap.get(id);
						if (captures) releaseInternalPointerCapture(internal.capturedMap, hit.eventObject, captures, id);
					};
					let extractEventProps = {};
					for (let prop in event) {
						let property = event[prop];
						if (typeof property !== "function") extractEventProps[prop] = property;
					}
					let raycastEvent = {
						...hit,
						...extractEventProps,
						pointer,
						intersections,
						stopped: localState.stopped,
						delta,
						unprojectedPoint,
						ray: raycaster.ray,
						camera,
						stopPropagation() {
							const capturesForPointer = "pointerId" in event && internal.capturedMap.get(event.pointerId);
							if (!capturesForPointer || capturesForPointer.has(hit.eventObject)) {
								raycastEvent.stopped = localState.stopped = true;
								if (internal.hovered.size && Array.from(internal.hovered.values()).find((i) => i.eventObject === hit.eventObject)) cancelPointer([...intersections.slice(0, intersections.indexOf(hit)), hit]);
							}
						},
						target: {
							hasPointerCapture,
							setPointerCapture,
							releasePointerCapture
						},
						currentTarget: {
							hasPointerCapture,
							setPointerCapture,
							releasePointerCapture
						},
						nativeEvent: event
					};
					callback(raycastEvent);
					if (localState.stopped === true) break;
				}
			}
		}
		return intersections;
	}
	function cancelPointer(intersections) {
		const { internal } = store.getState();
		for (const hoveredObj of internal.hovered.values()) if (!intersections.length || !intersections.find((hit) => hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId)) {
			const instance = hoveredObj.eventObject.__r3f;
			internal.hovered.delete(makeId(hoveredObj));
			if (instance != null && instance.eventCount) {
				const handlers = instance.handlers;
				const data = {
					...hoveredObj,
					intersections
				};
				handlers.onPointerOut == null || handlers.onPointerOut(data);
				handlers.onPointerLeave == null || handlers.onPointerLeave(data);
			}
		}
	}
	function pointerMissed(event, objects) {
		for (let i = 0; i < objects.length; i++) {
			const instance = objects[i].__r3f;
			instance == null || instance.handlers.onPointerMissed == null || instance.handlers.onPointerMissed(event);
		}
	}
	function handlePointer(name) {
		switch (name) {
			case "onPointerLeave":
			case "onPointerCancel": return () => cancelPointer([]);
			case "onLostPointerCapture": return (event) => {
				const { internal } = store.getState();
				if ("pointerId" in event && internal.capturedMap.has(event.pointerId)) requestAnimationFrame(() => {
					if (internal.capturedMap.has(event.pointerId)) {
						internal.capturedMap.delete(event.pointerId);
						cancelPointer([]);
					}
				});
			};
		}
		return function handleEvent(event) {
			const { onPointerMissed, internal } = store.getState();
			internal.lastEvent.current = event;
			const isPointerMove = name === "onPointerMove";
			const isClickEvent = name === "onClick" || name === "onContextMenu" || name === "onDoubleClick";
			const hits = intersect(event, isPointerMove ? filterPointerEvents : void 0);
			const delta = isClickEvent ? calculateDistance(event) : 0;
			if (name === "onPointerDown") {
				internal.initialClick = [event.offsetX, event.offsetY];
				internal.initialHits = hits.map((hit) => hit.eventObject);
			}
			if (isClickEvent && !hits.length) {
				if (delta <= 2) {
					pointerMissed(event, internal.interaction);
					if (onPointerMissed) onPointerMissed(event);
				}
			}
			if (isPointerMove) cancelPointer(hits);
			function onIntersect(data) {
				const eventObject = data.eventObject;
				const instance = eventObject.__r3f;
				if (!(instance != null && instance.eventCount)) return;
				const handlers = instance.handlers;
				if (isPointerMove) {
					if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
						const id = makeId(data);
						const hoveredItem = internal.hovered.get(id);
						if (!hoveredItem) {
							internal.hovered.set(id, data);
							handlers.onPointerOver == null || handlers.onPointerOver(data);
							handlers.onPointerEnter == null || handlers.onPointerEnter(data);
						} else if (hoveredItem.stopped) data.stopPropagation();
					}
					handlers.onPointerMove == null || handlers.onPointerMove(data);
				} else {
					const handler = handlers[name];
					if (handler) {
						if (!isClickEvent || internal.initialHits.includes(eventObject)) {
							pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
							handler(data);
						}
					} else if (isClickEvent && internal.initialHits.includes(eventObject)) pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
				}
			}
			handleIntersects(hits, event, delta, onIntersect);
		};
	}
	return { handlePointer };
}
var isRenderer = (def) => !!(def != null && def.render);
var context = /* @__PURE__ */ import_react.createContext(null);
var createStore = (invalidate, advance) => {
	const rootStore = createWithEqualityFn((set, get) => {
		const position = new Vector3();
		const defaultTarget = new Vector3();
		const tempTarget = new Vector3();
		function getCurrentViewport(camera = get().camera, target = defaultTarget, size = get().size) {
			const { width, height, top, left } = size;
			const aspect = width / height;
			if (target.isVector3) tempTarget.copy(target);
			else tempTarget.set(...target);
			const distance = camera.getWorldPosition(position).distanceTo(tempTarget);
			if (isOrthographicCamera(camera)) return {
				width: width / camera.zoom,
				height: height / camera.zoom,
				top,
				left,
				factor: 1,
				distance,
				aspect
			};
			else {
				const fov = camera.fov * Math.PI / 180;
				const h = 2 * Math.tan(fov / 2) * distance;
				const w = h * (width / height);
				return {
					width: w,
					height: h,
					top,
					left,
					factor: width / w,
					distance,
					aspect
				};
			}
		}
		let performanceTimeout = void 0;
		const setPerformanceCurrent = (current) => set((state) => ({ performance: {
			...state.performance,
			current
		} }));
		const pointer = new Vector2();
		return {
			set,
			get,
			gl: null,
			camera: null,
			raycaster: null,
			events: {
				priority: 1,
				enabled: true,
				connected: false
			},
			scene: null,
			xr: null,
			invalidate: (frames = 1) => invalidate(get(), frames),
			advance: (timestamp, runGlobalEffects) => advance(timestamp, runGlobalEffects, get()),
			legacy: false,
			linear: false,
			flat: false,
			controls: null,
			clock: new Clock(),
			pointer,
			mouse: pointer,
			frameloop: "always",
			onPointerMissed: void 0,
			performance: {
				current: 1,
				min: .5,
				max: 1,
				debounce: 200,
				regress: () => {
					const state = get();
					if (performanceTimeout) clearTimeout(performanceTimeout);
					if (state.performance.current !== state.performance.min) setPerformanceCurrent(state.performance.min);
					performanceTimeout = setTimeout(() => setPerformanceCurrent(get().performance.max), state.performance.debounce);
				}
			},
			size: {
				width: 0,
				height: 0,
				top: 0,
				left: 0
			},
			viewport: {
				initialDpr: 0,
				dpr: 0,
				width: 0,
				height: 0,
				top: 0,
				left: 0,
				aspect: 0,
				distance: 0,
				factor: 0,
				getCurrentViewport
			},
			setEvents: (events) => set((state) => ({
				...state,
				events: {
					...state.events,
					...events
				}
			})),
			setSize: (width, height, top = 0, left = 0) => {
				const camera = get().camera;
				const size = {
					width,
					height,
					top,
					left
				};
				set((state) => ({
					size,
					viewport: {
						...state.viewport,
						...getCurrentViewport(camera, defaultTarget, size)
					}
				}));
			},
			setDpr: (dpr) => set((state) => {
				const resolved = calculateDpr(dpr);
				return { viewport: {
					...state.viewport,
					dpr: resolved,
					initialDpr: state.viewport.initialDpr || resolved
				} };
			}),
			setFrameloop: (frameloop = "always") => {
				const clock = get().clock;
				clock.stop();
				clock.elapsedTime = 0;
				if (frameloop !== "never") {
					clock.start();
					clock.elapsedTime = 0;
				}
				set(() => ({ frameloop }));
			},
			previousRoot: void 0,
			internal: {
				interaction: [],
				hovered: /* @__PURE__ */ new Map(),
				subscribers: [],
				initialClick: [0, 0],
				initialHits: [],
				capturedMap: /* @__PURE__ */ new Map(),
				lastEvent: /*#__PURE__*/ import_react.createRef(),
				active: false,
				frames: 0,
				priority: 0,
				subscribe: (ref, priority, store) => {
					const internal = get().internal;
					internal.priority = internal.priority + (priority > 0 ? 1 : 0);
					internal.subscribers.push({
						ref,
						priority,
						store
					});
					internal.subscribers = internal.subscribers.sort((a, b) => a.priority - b.priority);
					return () => {
						const internal = get().internal;
						if (internal != null && internal.subscribers) {
							internal.priority = internal.priority - (priority > 0 ? 1 : 0);
							internal.subscribers = internal.subscribers.filter((s) => s.ref !== ref);
						}
					};
				}
			}
		};
	});
	const state = rootStore.getState();
	let oldSize = state.size;
	let oldDpr = state.viewport.dpr;
	let oldCamera = state.camera;
	rootStore.subscribe(() => {
		const { camera, size, viewport, gl, set } = rootStore.getState();
		if (size.width !== oldSize.width || size.height !== oldSize.height || viewport.dpr !== oldDpr) {
			oldSize = size;
			oldDpr = viewport.dpr;
			updateCamera(camera, size);
			if (viewport.dpr > 0) gl.setPixelRatio(viewport.dpr);
			const updateStyle = typeof HTMLCanvasElement !== "undefined" && gl.domElement instanceof HTMLCanvasElement;
			gl.setSize(size.width, size.height, updateStyle);
		}
		if (camera !== oldCamera) {
			oldCamera = camera;
			set((state) => ({ viewport: {
				...state.viewport,
				...state.viewport.getCurrentViewport(camera)
			} }));
		}
	});
	rootStore.subscribe((state) => invalidate(state));
	return rootStore;
};
/**
* Returns the R3F Canvas' Zustand store. Useful for [transient updates](https://github.com/pmndrs/zustand#transient-updates-for-often-occurring-state-changes).
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usestore
*/
function useStore() {
	const store = import_react.useContext(context);
	if (!store) throw new Error("R3F: Hooks can only be used within the Canvas component!");
	return store;
}
/**
* Accesses R3F's internal state, containing renderer, canvas, scene, etc.
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usethree
*/
function useThree(selector = (state) => state, equalityFn) {
	return useStore()(selector, equalityFn);
}
/**
* Executes a callback before render in a shared frame loop.
* Can order effects with render priority or manually render with a positive priority.
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe
*/
function useFrame(callback, renderPriority = 0) {
	const store = useStore();
	const subscribe = store.getState().internal.subscribe;
	const ref = useMutableCallback(callback);
	useIsomorphicLayoutEffect(() => subscribe(ref, renderPriority, store), [
		renderPriority,
		subscribe,
		store
	]);
	return null;
}
var memoizedLoaders = /* @__PURE__ */ new WeakMap();
var isConstructor$1 = (value) => {
	var _value$prototype;
	return typeof value === "function" && (value == null ? void 0 : (_value$prototype = value.prototype) == null ? void 0 : _value$prototype.constructor) === value;
};
function loadingFn(extensions, onProgress) {
	return function(Proto, ...input) {
		let loader;
		if (isConstructor$1(Proto)) {
			loader = memoizedLoaders.get(Proto);
			if (!loader) {
				loader = new Proto();
				memoizedLoaders.set(Proto, loader);
			}
		} else loader = Proto;
		if (extensions) extensions(loader);
		return Promise.all(input.map((input) => new Promise((res, reject) => loader.load(input, (data) => {
			if (isObject3D(data == null ? void 0 : data.scene)) Object.assign(data, buildGraph(data.scene));
			res(data);
		}, onProgress, (error) => reject(/* @__PURE__ */ new Error(`Could not load ${input}: ${error == null ? void 0 : error.message}`))))));
	};
}
/**
* Synchronously loads and caches assets with a three loader.
*
* Note: this hook's caller must be wrapped with `React.Suspense`
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useloader
*/
function useLoader(loader, input, extensions, onProgress) {
	const keys = Array.isArray(input) ? input : [input];
	const results = suspend(loadingFn(extensions, onProgress), [loader, ...keys], { equal: is.equ });
	return Array.isArray(input) ? results : results[0];
}
/**
* Preloads an asset into cache as a side-effect.
*/
useLoader.preload = function(loader, input, extensions) {
	const keys = Array.isArray(input) ? input : [input];
	return preload(loadingFn(extensions), [loader, ...keys]);
};
/**
* Removes a loaded asset from cache.
*/
useLoader.clear = function(loader, input) {
	return clear([loader, ...Array.isArray(input) ? input : [input]]);
};
/**
* @license React
* react-reconciler-constants.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var t = 1;
var o = 8;
var r = 32;
var e = 2;
var i$1 = 268435456;
var packageData = {
	name: "@react-three/fiber",
	version: "9.7.0",
	description: "A React renderer for Threejs",
	keywords: [
		"react",
		"renderer",
		"fiber",
		"three",
		"threejs"
	],
	author: "Paul Henschel (https://github.com/drcmda)",
	license: "MIT",
	maintainers: [
		"Josh Ellis (https://github.com/joshuaellis)",
		"Cody Bennett (https://github.com/codyjasonbennett)",
		"Kris Baumgarter (https://github.com/krispya)"
	],
	bugs: { url: "https://github.com/pmndrs/react-three-fiber/issues" },
	homepage: "https://github.com/pmndrs/react-three-fiber#readme",
	repository: {
		type: "git",
		url: "git+https://github.com/pmndrs/react-three-fiber.git"
	},
	collective: {
		type: "opencollective",
		url: "https://opencollective.com/react-three-fiber"
	},
	main: "dist/react-three-fiber.cjs.js",
	module: "dist/react-three-fiber.esm.js",
	types: "dist/react-three-fiber.cjs.d.ts",
	"react-native": "native/dist/react-three-fiber-native.cjs.js",
	sideEffects: false,
	preconstruct: { entrypoints: ["index.tsx", "native.tsx"] },
	scripts: { prebuild: "cp ../../readme.md readme.md" },
	devDependencies: {
		"@types/react-reconciler": "^0.32.3",
		"react-reconciler": "^0.33.0"
	},
	dependencies: {
		"@babel/runtime": "^7.17.8",
		"@types/webxr": "*",
		"base64-js": "^1.5.1",
		buffer: "^6.0.3",
		"its-fine": "^2.0.0",
		"react-use-measure": "^2.1.7",
		scheduler: "^0.27.0",
		"suspend-react": "^0.1.3",
		"use-sync-external-store": "^1.4.0",
		zustand: "^5.0.3"
	},
	peerDependencies: {
		expo: ">=43.0",
		"expo-asset": ">=8.4",
		"expo-file-system": ">=11.0",
		"expo-gl": ">=11.0",
		react: ">=19 <19.3",
		"react-dom": ">=19 <19.3",
		"react-native": ">=0.78",
		three: ">=0.156"
	},
	peerDependenciesMeta: {
		"react-dom": { optional: true },
		"react-native": { optional: true },
		expo: { optional: true },
		"expo-asset": { optional: true },
		"expo-file-system": { optional: true },
		"expo-gl": { optional: true }
	}
};
function Xb(Tt) {
	return Tt && Tt.__esModule && Object.prototype.hasOwnProperty.call(Tt, "default") ? Tt.default : Tt;
}
var Rm = { exports: {} };
var Og = { exports: {} };
/**
* @license React
* react-reconciler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
Og.exports;
var _b$1;
function Kb() {
	return _b$1 || (_b$1 = 1, function(Tt) {
		Tt.exports = function(m) {
			function Yn(t, r, a, l) {
				return new uc(t, r, a, l);
			}
			function _d() {}
			function F(t) {
				var r = "https://react.dev/errors/" + t;
				if (1 < arguments.length) {
					r += "?args[]=" + encodeURIComponent(arguments[1]);
					for (var a = 2; a < arguments.length; a++) r += "&args[]=" + encodeURIComponent(arguments[a]);
				}
				return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
			}
			function Rd(t) {
				var r = t, a = t;
				if (t.alternate) for (; r.return;) r = r.return;
				else {
					t = r;
					do
						r = t, r.flags & 4098 && (a = r.return), t = r.return;
					while (t);
				}
				return r.tag === 3 ? a : null;
			}
			function du(t) {
				if (Rd(t) !== t) throw Error(F(188));
			}
			function fu(t) {
				var r = t.alternate;
				if (!r) {
					if (r = Rd(t), r === null) throw Error(F(188));
					return r !== t ? null : t;
				}
				for (var a = t, l = r;;) {
					var c = a.return;
					if (c === null) break;
					var d = c.alternate;
					if (d === null) {
						if (l = c.return, l !== null) {
							a = l;
							continue;
						}
						break;
					}
					if (c.child === d.child) {
						for (d = c.child; d;) {
							if (d === a) return du(c), t;
							if (d === l) return du(c), r;
							d = d.sibling;
						}
						throw Error(F(188));
					}
					if (a.return !== l.return) a = c, l = d;
					else {
						for (var h = !1, y = c.child; y;) {
							if (y === a) {
								h = !0, a = c, l = d;
								break;
							}
							if (y === l) {
								h = !0, l = c, a = d;
								break;
							}
							y = y.sibling;
						}
						if (!h) {
							for (y = d.child; y;) {
								if (y === a) {
									h = !0, a = d, l = c;
									break;
								}
								if (y === l) {
									h = !0, l = d, a = c;
									break;
								}
								y = y.sibling;
							}
							if (!h) throw Error(F(189));
						}
					}
					if (a.alternate !== l) throw Error(F(190));
				}
				if (a.tag !== 3) throw Error(F(188));
				return a.stateNode.current === a ? t : r;
			}
			function pu(t) {
				var r = t.tag;
				if (r === 5 || r === 26 || r === 27 || r === 6) return t;
				for (t = t.child; t !== null;) {
					if (r = pu(t), r !== null) return r;
					t = t.sibling;
				}
				return null;
			}
			function lt(t) {
				var r = t.tag;
				if (r === 5 || r === 26 || r === 27 || r === 6) return t;
				for (t = t.child; t !== null;) {
					if (t.tag !== 4 && (r = lt(t), r !== null)) return r;
					t = t.sibling;
				}
				return null;
			}
			function Fl(t) {
				return t === null || typeof t != "object" ? null : (t = Pf && t[Pf] || t["@@iterator"], typeof t == "function" ? t : null);
			}
			function hu(t) {
				if (t == null) return null;
				if (typeof t == "function") return t.$$typeof === xf ? null : t.displayName || t.name || null;
				if (typeof t == "string") return t;
				switch (t) {
					case $a: return "Fragment";
					case Cs: return "Profiler";
					case kf: return "StrictMode";
					case Va: return "Suspense";
					case Te: return "SuspenseList";
					case gc: return "Activity";
				}
				if (typeof t == "object") switch (t.$$typeof) {
					case sa: return "Portal";
					case Io: return t.displayName || "Context";
					case mc: return (t._context.displayName || "Context") + ".Consumer";
					case Zi:
						var r = t.render;
						return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
					case wf: return r = t.displayName || null, r !== null ? r : hu(t.type) || "Memo";
					case ua:
						r = t._payload, t = t._init;
						try {
							return hu(t(r));
						} catch {}
				}
				return null;
			}
			function Ir(t) {
				return { current: t };
			}
			function D(t) {
				0 > tl || (t.current = Hs[tl], Hs[tl] = null, tl--);
			}
			function Ce(t, r) {
				tl++, Hs[tl] = t.current, t.current = r;
			}
			function Em(t) {
				return t >>>= 0, t === 0 ? 32 : 31 - (Dh(t) / Wh | 0) | 0;
			}
			function Zo(t) {
				var r = t & 42;
				if (r !== 0) return r;
				switch (t & -t) {
					case 1: return 1;
					case 2: return 2;
					case 4: return 4;
					case 8: return 8;
					case 16: return 16;
					case 32: return 32;
					case 64: return 64;
					case 128: return 128;
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072: return t & 261888;
					case 262144:
					case 524288:
					case 1048576:
					case 2097152: return t & 3932160;
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432: return t & 62914560;
					case 67108864: return 67108864;
					case 134217728: return 134217728;
					case 268435456: return 268435456;
					case 536870912: return 536870912;
					case 1073741824: return 0;
					default: return t;
				}
			}
			function Lr(t, r, a) {
				var l = t.pendingLanes;
				if (l === 0) return 0;
				var c = 0, d = t.suspendedLanes, h = t.pingedLanes;
				t = t.warmLanes;
				var y = l & 134217727;
				return y !== 0 ? (l = y & ~d, l !== 0 ? c = Zo(l) : (h &= y, h !== 0 ? c = Zo(h) : a || (a = y & ~t, a !== 0 && (c = Zo(a))))) : (y = l & ~d, y !== 0 ? c = Zo(y) : h !== 0 ? c = Zo(h) : a || (a = l & ~t, a !== 0 && (c = Zo(a)))), c === 0 ? 0 : r !== 0 && r !== c && (r & d) === 0 && (d = c & -c, a = r & -r, d >= a || d === 32 && (a & 4194048) !== 0) ? r : c;
			}
			function Pi(t, r) {
				return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & r) === 0;
			}
			function Tp(t, r) {
				switch (t) {
					case 1:
					case 2:
					case 4:
					case 8:
					case 64: return r + 250;
					case 16:
					case 32:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152: return r + 5e3;
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432: return -1;
					case 67108864:
					case 134217728:
					case 268435456:
					case 536870912:
					case 1073741824: return -1;
					default: return -1;
				}
			}
			function Ed() {
				var t = rl;
				return rl <<= 1, !(rl & 62914560) && (rl = 4194304), t;
			}
			function mu(t) {
				for (var r = [], a = 0; 31 > a; a++) r.push(t);
				return r;
			}
			function xi(t, r) {
				t.pendingLanes |= r, r !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
			}
			function _p(t, r, a, l, c, d) {
				var h = t.pendingLanes;
				t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
				var y = t.entanglements, R = t.expirationTimes, L = t.hiddenUpdates;
				for (a = h & ~a; 0 < a;) {
					var j = 31 - vt(a), A = 1 << j;
					y[j] = 0, R[j] = -1;
					var W = L[j];
					if (W !== null) for (L[j] = null, j = 0; j < W.length; j++) {
						var V = W[j];
						V !== null && (V.lane &= -536870913);
					}
					a &= ~A;
				}
				l !== 0 && Yo(t, l, 0), d !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(h & ~r));
			}
			function Yo(t, r, a) {
				t.pendingLanes |= r, t.suspendedLanes &= ~r;
				var l = 31 - vt(r);
				t.entangledLanes |= r, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
			}
			function $e(t, r) {
				var a = t.entangledLanes |= r;
				for (t = t.entanglements; a;) {
					var l = 31 - vt(a), c = 1 << l;
					c & r | t[l] & r && (t[l] |= r), a &= ~c;
				}
			}
			function G(t, r) {
				var a = r & -r;
				return a = (a & 42) !== 0 ? 1 : st(a), (a & (t.suspendedLanes | r)) !== 0 ? 0 : a;
			}
			function st(t) {
				switch (t) {
					case 2:
						t = 1;
						break;
					case 8:
						t = 4;
						break;
					case 32:
						t = 16;
						break;
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
						t = 128;
						break;
					case 268435456:
						t = 134217728;
						break;
					default: t = 0;
				}
				return t;
			}
			function Ze(t) {
				return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
			}
			function pe(t) {
				if (typeof Lc == "function" && Uf(t), on && typeof on.setStrictMode == "function") try {
					on.setStrictMode(ei, t);
				} catch {}
			}
			function Im(t, r) {
				return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
			}
			function _t(t) {
				if (al === void 0) try {
					throw Error();
				} catch (a) {
					var r = a.stack.trim().match(/\n( *(at )?)/);
					al = r && r[1] || "", kt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
				}
				return `
` + al + t + kt;
			}
			function zi(t, r) {
				if (!t || Ds) return "";
				Ds = !0;
				var a = Error.prepareStackTrace;
				Error.prepareStackTrace = void 0;
				try {
					var l = { DetermineComponentFrameRoot: function() {
						try {
							if (r) {
								var A = function() {
									throw Error();
								};
								if (Object.defineProperty(A.prototype, "props", { set: function() {
									throw Error();
								} }), typeof Reflect == "object" && Reflect.construct) {
									try {
										Reflect.construct(A, []);
									} catch (V) {
										var W = V;
									}
									Reflect.construct(t, [], A);
								} else {
									try {
										A.call();
									} catch (V) {
										W = V;
									}
									t.call(A.prototype);
								}
							} else {
								try {
									throw Error();
								} catch (V) {
									W = V;
								}
								(A = t()) && typeof A.catch == "function" && A.catch(function() {});
							}
						} catch (V) {
							if (V && W && typeof V.stack == "string") return [V.stack, W.stack];
						}
						return [null, null];
					} };
					l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
					var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
					c && c.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
					var d = l.DetermineComponentFrameRoot(), h = d[0], y = d[1];
					if (h && y) {
						var R = h.split(`
`), L = y.split(`
`);
						for (c = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot");) l++;
						for (; c < L.length && !L[c].includes("DetermineComponentFrameRoot");) c++;
						if (l === R.length || c === L.length) for (l = R.length - 1, c = L.length - 1; 1 <= l && 0 <= c && R[l] !== L[c];) c--;
						for (; 1 <= l && 0 <= c; l--, c--) if (R[l] !== L[c]) {
							if (l !== 1 || c !== 1) do
								if (l--, c--, 0 > c || R[l] !== L[c]) {
									var j = `
` + R[l].replace(" at new ", " at ");
									return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), j;
								}
							while (1 <= l && 0 <= c);
							break;
						}
					}
				} finally {
					Ds = !1, Error.prepareStackTrace = a;
				}
				return (a = t ? t.displayName || t.name : "") ? _t(a) : "";
			}
			function Hl(t, r) {
				switch (t.tag) {
					case 26:
					case 27:
					case 5: return _t(t.type);
					case 16: return _t("Lazy");
					case 13: return t.child !== r && r !== null ? _t("Suspense Fallback") : _t("Suspense");
					case 19: return _t("SuspenseList");
					case 0:
					case 15: return zi(t.type, !1);
					case 11: return zi(t.type.render, !1);
					case 1: return zi(t.type, !0);
					case 31: return _t("Activity");
					default: return "";
				}
			}
			function Rp(t) {
				try {
					var r = "", a = null;
					do
						r += Hl(t, a), a = t, t = t.return;
					while (t);
					return r;
				} catch (l) {
					return `
Error generating stack: ` + l.message + `
` + l.stack;
				}
			}
			function ut(t, r) {
				if (typeof t == "object" && t !== null) {
					var a = Bh.get(t);
					return a !== void 0 ? a : (r = {
						value: t,
						source: r,
						stack: Rp(r)
					}, Bh.set(t, r), r);
				}
				return {
					value: t,
					source: r,
					stack: Rp(r)
				};
			}
			function or(t, r) {
				ni[il++] = x, ni[il++] = fn, fn = t, x = r;
			}
			function Ci(t, r, a) {
				Jt[Zt++] = ot, Jt[Zt++] = Zr, Jt[Zt++] = jo, jo = t;
				var l = ot;
				t = Zr;
				var c = 32 - vt(l) - 1;
				l &= ~(1 << c), a += 1;
				var d = 32 - vt(r) + c;
				if (30 < d) {
					var h = c - c % 5;
					d = (l & (1 << h) - 1).toString(32), l >>= h, c -= h, ot = 1 << 32 - vt(r) + c | a << c | l, Zr = d + t;
				} else ot = 1 << d | a << c | l, Zr = t;
			}
			function Id(t) {
				t.return !== null && (or(t, 1), Ci(t, 1, 0));
			}
			function gu(t) {
				for (; t === fn;) fn = ni[--il], ni[il] = null, x = ni[--il], ni[il] = null;
				for (; t === jo;) jo = Jt[--Zt], Jt[Zt] = null, Zr = Jt[--Zt], Jt[Zt] = null, ot = Jt[--Zt], Jt[Zt] = null;
			}
			function Ld(t, r) {
				Jt[Zt++] = ot, Jt[Zt++] = Zr, Jt[Zt++] = jo, ot = r.id, Zr = r.overflow, jo = t;
			}
			function Al(t, r) {
				Ce(pa, r), Ce(Ws, t), Ce(Dn, null), t = Hm(r), D(Dn), Ce(Dn, t);
			}
			function Xo() {
				D(Dn), D(Ws), D(pa);
			}
			function yu(t) {
				t.memoizedState !== null && Ce(Fc, t);
				var r = Dn.current, a = Xp(r, t.type);
				r !== a && (Ce(Ws, t), Ce(Dn, a));
			}
			function jl(t) {
				Ws.current === t && (D(Dn), D(Ws)), Fc.current === t && (D(Fc), qt ? da._currentValue = rt : da._currentValue2 = rt);
			}
			function ar(t) {
				throw ct(ut(Error(F(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), t)), Of;
			}
			function Ep(t, r) {
				if (!Hn) throw Error(F(175));
				Ki(t.stateNode, t.type, t.memoizedProps, r, t) || ar(t, !0);
			}
			function De(t) {
				for (bn = t.return; bn;) switch (bn.tag) {
					case 5:
					case 31:
					case 13:
						Yt = !1;
						return;
					case 27:
					case 3:
						Yt = !0;
						return;
					default: bn = bn.return;
				}
			}
			function Ti(t) {
				if (!Hn || t !== bn) return !1;
				if (!ue) return De(t), ue = !0, !1;
				var r = t.tag;
				if (dn ? r !== 3 && r !== 27 && (r !== 5 || Nh(t.type) && !Rs(t.type, t.memoizedProps)) && Ue && ar(t) : r !== 3 && (r !== 5 || Nh(t.type) && !Rs(t.type, t.memoizedProps)) && Ue && ar(t), De(t), r === 13) {
					if (!Hn) throw Error(F(316));
					if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(F(317));
					Ue = Th(t);
				} else if (r === 31) {
					if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(F(317));
					Ue = Ch(t);
				} else Ue = dn && r === 27 ? kh(t.type, Ue) : bn ? Nf(t.stateNode) : null;
				return !0;
			}
			function _a() {
				Hn && (Ue = bn = null, ue = !1);
			}
			function Dl() {
				var t = Do;
				return t !== null && (xt === null ? xt = t : xt.push.apply(xt, t), Do = null), t;
			}
			function ct(t) {
				Do === null ? Do = [t] : Do.push(t);
			}
			function fo(t, r, a) {
				qt ? (Ce(Yr, r._currentValue), r._currentValue = a) : (Ce(Yr, r._currentValue2), r._currentValue2 = a);
			}
			function En(t) {
				var r = Yr.current;
				qt ? t._currentValue = r : t._currentValue2 = r, D(Yr);
			}
			function Ot(t, r, a) {
				for (; t !== null;) {
					var l = t.alternate;
					if ((t.childLanes & r) !== r ? (t.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), t === a) break;
					t = t.return;
				}
			}
			function _i(t, r, a, l) {
				var c = t.child;
				for (c !== null && (c.return = t); c !== null;) {
					var d = c.dependencies;
					if (d !== null) {
						var h = c.child;
						d = d.firstContext;
						e: for (; d !== null;) {
							var y = d;
							d = c;
							for (var R = 0; R < r.length; R++) if (y.context === r[R]) {
								d.lanes |= a, y = d.alternate, y !== null && (y.lanes |= a), Ot(d.return, a, t), l || (h = null);
								break e;
							}
							d = y.next;
						}
					} else if (c.tag === 18) {
						if (h = c.return, h === null) throw Error(F(341));
						h.lanes |= a, d = h.alternate, d !== null && (d.lanes |= a), Ot(h, a, t), h = null;
					} else h = c.child;
					if (h !== null) h.return = c;
					else for (h = c; h !== null;) {
						if (h === t) {
							h = null;
							break;
						}
						if (c = h.sibling, c !== null) {
							c.return = h.return, h = c;
							break;
						}
						h = h.return;
					}
					c = h;
				}
			}
			function po(t, r, a, l) {
				t = null;
				for (var c = r, d = !1; c !== null;) {
					if (!d) {
						if ((c.flags & 524288) !== 0) d = !0;
						else if ((c.flags & 262144) !== 0) break;
					}
					if (c.tag === 10) {
						var h = c.alternate;
						if (h === null) throw Error(F(387));
						if (h = h.memoizedProps, h !== null) {
							var y = c.type;
							jn(c.pendingProps.value, h.value) || (t !== null ? t.push(y) : t = [y]);
						}
					} else if (c === Fc.current) {
						if (h = c.alternate, h === null) throw Error(F(387));
						h.memoizedState.memoizedState !== c.memoizedState.memoizedState && (t !== null ? t.push(da) : t = [da]);
					}
					c = c.return;
				}
				t !== null && _i(r, t, a, l), r.flags |= 262144;
			}
			function Ri(t) {
				for (t = t.firstContext; t !== null;) {
					var r = t.context;
					if (!jn(qt ? r._currentValue : r._currentValue2, t.memoizedValue)) return !0;
					t = t.next;
				}
				return !1;
			}
			function Un(t) {
				at = t, Be = null, t = t.dependencies, t !== null && (t.firstContext = null);
			}
			function In(t) {
				return Nd(at, t);
			}
			function Wl(t, r) {
				return at === null && Un(t), Nd(t, r);
			}
			function Nd(t, r) {
				var a = qt ? r._currentValue : r._currentValue2;
				if (r = {
					context: r,
					memoizedValue: a,
					next: null
				}, Be === null) {
					if (t === null) throw Error(F(308));
					Be = r, t.dependencies = {
						lanes: 0,
						firstContext: r
					}, t.flags |= 524288;
				} else Be = Be.next = r;
				return a;
			}
			function Fd() {
				return {
					controller: new Xr(),
					data: /* @__PURE__ */ new Map(),
					refCount: 0
				};
			}
			function Ra(t) {
				t.refCount--, t.refCount === 0 && qn(Gm, function() {
					t.controller.abort();
				});
			}
			function bu() {}
			function ir(t) {
				t !== wt && t.next === null && (wt === null ? an = wt = t : wt = wt.next = t), ll = !0, Mf || (Mf = !0, Lm());
			}
			function Ea(t, r) {
				if (!ti && ll) {
					ti = !0;
					do
						for (var a = !1, l = an; l !== null;) {
							if (!r) if (t !== 0) {
								var c = l.pendingLanes;
								if (c === 0) var d = 0;
								else {
									var h = l.suspendedLanes, y = l.pingedLanes;
									d = (1 << 31 - vt(42 | t) + 1) - 1, d &= c & ~(h & ~y), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
								}
								d !== 0 && (a = !0, Su(l, d));
							} else d = he, d = Lr(l, l === Ne ? d : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== Lo), !(d & 3) || Pi(l, d) || (a = !0, Su(l, d));
							l = l.next;
						}
					while (a);
					ti = !1;
				}
			}
			function Ip() {
				Lp();
			}
			function Lp() {
				ll = Mf = !1;
				var t = 0;
				Pr !== 0 && _f() && (t = Pr);
				for (var r = ze(), a = null, l = an; l !== null;) {
					var c = l.next, d = vu(l, r);
					d === 0 ? (l.next = null, a === null ? an = c : a.next = c, c === null && (wt = a)) : (a = l, (t !== 0 || d & 3) && (ll = !0)), l = c;
				}
				Re !== 0 && Re !== 5 || Ea(t, !1), Pr !== 0 && (Pr = 0);
			}
			function vu(t, r) {
				for (var a = t.suspendedLanes, l = t.pingedLanes, c = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d;) {
					var h = 31 - vt(d), y = 1 << h, R = c[h];
					R === -1 ? ((y & a) === 0 || (y & l) !== 0) && (c[h] = Tp(y, r)) : R <= r && (t.expiredLanes |= y), d &= ~y;
				}
				if (r = Ne, a = he, a = Lr(t, t === r ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== Lo), l = t.callbackNode, a === 0 || t === r && (_e === 2 || _e === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && le(l), t.callbackNode = null, t.callbackPriority = 0;
				if ((a & 3) === 0 || Pi(t, a)) {
					if (r = a & -a, r === t.callbackPriority) return r;
					switch (l !== null && le(l), Ze(a)) {
						case 2:
						case 8:
							a = Ho;
							break;
						case 32:
							a = Ao;
							break;
						case 268435456:
							a = ol;
							break;
						default: a = Ao;
					}
					return l = dt.bind(null, t), a = Ic(a, l), t.callbackPriority = r, t.callbackNode = a, r;
				}
				return l !== null && l !== null && le(l), t.callbackPriority = 2, t.callbackNode = null, 2;
			}
			function dt(t, r) {
				if (Re !== 0 && Re !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
				var a = t.callbackNode;
				if (rn() && t.callbackNode !== a) return null;
				var l = he;
				return l = Lr(t, t === Ne ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== Lo), l === 0 ? null : (uf(t, l, r), vu(t, ze()), t.callbackNode != null && t.callbackNode === a ? dt.bind(null, t) : null);
			}
			function Su(t, r) {
				if (rn()) return null;
				uf(t, r, !0);
			}
			function Lm() {
				ih ? Gr(function() {
					(ce & 6) !== 0 ? Ic(Uh, Ip) : Lp();
				}) : Ic(Uh, Ip);
			}
			function ku() {
				if (Pr === 0) {
					var t = sl;
					t === 0 && (t = As, As <<= 1, !(As & 261888) && (As = 256)), Pr = t;
				}
				return Pr;
			}
			function Np(t, r) {
				if (Us === null) {
					var a = Us = [];
					Qf = 0, sl = ku(), ul = {
						status: "pending",
						value: void 0,
						then: function(l) {
							a.push(l);
						}
					};
				}
				return Qf++, r.then(ft, ft), r;
			}
			function ft() {
				if (--Qf === 0 && Us !== null) {
					ul !== null && (ul.status = "fulfilled");
					var t = Us;
					Us = null, sl = 0, ul = null;
					for (var r = 0; r < t.length; r++) (0, t[r])();
				}
			}
			function ho(t, r) {
				var a = [], l = {
					status: "pending",
					value: null,
					reason: null,
					then: function(c) {
						a.push(c);
					}
				};
				return t.then(function() {
					l.status = "fulfilled", l.value = r;
					for (var c = 0; c < a.length; c++) (0, a[c])(r);
				}, function(c) {
					for (l.status = "rejected", l.reason = c, c = 0; c < a.length; c++) (0, a[c])(void 0);
				}), l;
			}
			function wu() {
				var t = ha.current;
				return t !== null ? t : Ne.pooledCache;
			}
			function Ei(t, r) {
				r === null ? Ce(ha, ha.current) : Ce(ha, r.pool);
			}
			function Pu() {
				var t = wu();
				return t === null ? null : {
					parent: qt ? qe._currentValue : qe._currentValue2,
					pool: t
				};
			}
			function Ul(t, r) {
				if (jn(t, r)) return !0;
				if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
				var a = Object.keys(t), l = Object.keys(r);
				if (a.length !== l.length) return !1;
				for (l = 0; l < a.length; l++) {
					var c = a[l];
					if (!Bf.call(r, c) || !jn(t[c], r[c])) return !1;
				}
				return !0;
			}
			function Hd(t) {
				return t = t.status, t === "fulfilled" || t === "rejected";
			}
			function mo(t, r, a) {
				switch (a = t[a], a === void 0 ? t.push(r) : a !== r && (r.then(bu, bu), r = a), r.status) {
					case "fulfilled": return r.value;
					case "rejected": throw t = r.reason, Ia(t), t;
					default:
						if (typeof r.status == "string") r.then(bu, bu);
						else {
							if (t = Ne, t !== null && 100 < t.shellSuspendCounter) throw Error(F(482));
							t = r, t.status = "pending", t.then(function(l) {
								if (r.status === "pending") {
									var c = r;
									c.status = "fulfilled", c.value = l;
								}
							}, function(l) {
								if (r.status === "pending") {
									var c = r;
									c.status = "rejected", c.reason = l;
								}
							});
						}
						switch (r.status) {
							case "fulfilled": return r.value;
							case "rejected": throw t = r.reason, Ia(t), t;
						}
						throw Xt = r, cl;
				}
			}
			function pt(t) {
				try {
					var r = t._init;
					return r(t._payload);
				} catch (a) {
					throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Xt = a, cl) : a;
				}
			}
			function Bl() {
				if (Xt === null) throw Error(F(459));
				var t = Xt;
				return Xt = null, t;
			}
			function Ia(t) {
				if (t === cl || t === jc) throw Error(F(483));
			}
			function Rt(t) {
				var r = Bs;
				return Bs += 1, Kt === null && (Kt = []), mo(Kt, t, r);
			}
			function La(t, r) {
				r = r.props.ref, t.ref = r !== void 0 ? r : null;
			}
			function Na(t, r) {
				throw r.$$typeof === hc ? Error(F(525)) : (t = Object.prototype.toString.call(r), Error(F(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t)));
			}
			function Ad(t) {
				function r(P, w) {
					if (t) {
						var C = P.deletions;
						C === null ? (P.deletions = [w], P.flags |= 16) : C.push(w);
					}
				}
				function a(P, w) {
					if (!t) return null;
					for (; w !== null;) r(P, w), w = w.sibling;
					return null;
				}
				function l(P) {
					for (var w = /* @__PURE__ */ new Map(); P !== null;) P.key !== null ? w.set(P.key, P) : w.set(P.index, P), P = P.sibling;
					return w;
				}
				function c(P, w) {
					return P = Qr(P, w), P.index = 0, P.sibling = null, P;
				}
				function d(P, w, C) {
					return P.index = C, t ? (C = P.alternate, C !== null ? (C = C.index, C < w ? (P.flags |= 67108866, w) : C) : (P.flags |= 67108866, w)) : (P.flags |= 1048576, w);
				}
				function h(P) {
					return t && P.alternate === null && (P.flags |= 67108866), P;
				}
				function y(P, w, C, H) {
					return w === null || w.tag !== 6 ? (w = Ps(C, P.mode, H), w.return = P, w) : (w = c(w, C), w.return = P, w);
				}
				function R(P, w, C, H) {
					var Q = C.type;
					return Q === $a ? j(P, w, C.props.children, H, C.key) : w !== null && (w.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ua && pt(Q) === w.type) ? (w = c(w, C.props), La(w, C), w.return = P, w) : (w = ws(C.type, C.key, C.props, null, P.mode, H), La(w, C), w.return = P, w);
				}
				function L(P, w, C, H) {
					return w === null || w.tag !== 4 || w.stateNode.containerInfo !== C.containerInfo || w.stateNode.implementation !== C.implementation ? (w = dc(C, P.mode, H), w.return = P, w) : (w = c(w, C.children || []), w.return = P, w);
				}
				function j(P, w, C, H, Q) {
					return w === null || w.tag !== 7 ? (w = Eo(C, P.mode, H, Q), w.return = P, w) : (w = c(w, C), w.return = P, w);
				}
				function A(P, w, C) {
					if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return w = Ps("" + w, P.mode, C), w.return = P, w;
					if (typeof w == "object" && w !== null) {
						switch (w.$$typeof) {
							case zs: return C = ws(w.type, w.key, w.props, null, P.mode, C), La(C, w), C.return = P, C;
							case sa: return w = dc(w, P.mode, C), w.return = P, w;
							case ua: return w = pt(w), A(P, w, C);
						}
						if (ca(w) || Fl(w)) return w = Eo(w, P.mode, C, null), w.return = P, w;
						if (typeof w.then == "function") return A(P, Rt(w), C);
						if (w.$$typeof === Io) return A(P, Wl(P, w), C);
						Na(P, w);
					}
					return null;
				}
				function W(P, w, C, H) {
					var Q = w !== null ? w.key : null;
					if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return Q !== null ? null : y(P, w, "" + C, H);
					if (typeof C == "object" && C !== null) {
						switch (C.$$typeof) {
							case zs: return C.key === Q ? R(P, w, C, H) : null;
							case sa: return C.key === Q ? L(P, w, C, H) : null;
							case ua: return C = pt(C), W(P, w, C, H);
						}
						if (ca(C) || Fl(C)) return Q !== null ? null : j(P, w, C, H, null);
						if (typeof C.then == "function") return W(P, w, Rt(C), H);
						if (C.$$typeof === Io) return W(P, w, Wl(P, C), H);
						Na(P, C);
					}
					return null;
				}
				function V(P, w, C, H, Q) {
					if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint") return P = P.get(C) || null, y(w, P, "" + H, Q);
					if (typeof H == "object" && H !== null) {
						switch (H.$$typeof) {
							case zs: return P = P.get(H.key === null ? C : H.key) || null, R(w, P, H, Q);
							case sa: return P = P.get(H.key === null ? C : H.key) || null, L(w, P, H, Q);
							case ua: return H = pt(H), V(P, w, C, H, Q);
						}
						if (ca(H) || Fl(H)) return P = P.get(C) || null, j(w, P, H, Q, null);
						if (typeof H.then == "function") return V(P, w, C, Rt(H), Q);
						if (H.$$typeof === Io) return V(P, w, C, Wl(w, H), Q);
						Na(w, H);
					}
					return null;
				}
				function Oe(P, w, C, H) {
					for (var Q = null, Ge = null, J = w, Pe = w = 0, me = null; J !== null && Pe < C.length; Pe++) {
						J.index > Pe ? (me = J, J = null) : me = J.sibling;
						var be = W(P, J, C[Pe], H);
						if (be === null) {
							J === null && (J = me);
							break;
						}
						t && J && be.alternate === null && r(P, J), w = d(be, w, Pe), Ge === null ? Q = be : Ge.sibling = be, Ge = be, J = me;
					}
					if (Pe === C.length) return a(P, J), ue && or(P, Pe), Q;
					if (J === null) {
						for (; Pe < C.length; Pe++) J = A(P, C[Pe], H), J !== null && (w = d(J, w, Pe), Ge === null ? Q = J : Ge.sibling = J, Ge = J);
						return ue && or(P, Pe), Q;
					}
					for (J = l(J); Pe < C.length; Pe++) me = V(J, P, Pe, C[Pe], H), me !== null && (t && me.alternate !== null && J.delete(me.key === null ? Pe : me.key), w = d(me, w, Pe), Ge === null ? Q = me : Ge.sibling = me, Ge = me);
					return t && J.forEach(function(Oo) {
						return r(P, Oo);
					}), ue && or(P, Pe), Q;
				}
				function vn(P, w, C, H) {
					if (C == null) throw Error(F(151));
					for (var Q = null, Ge = null, J = w, Pe = w = 0, me = null, be = C.next(); J !== null && !be.done; Pe++, be = C.next()) {
						J.index > Pe ? (me = J, J = null) : me = J.sibling;
						var Oo = W(P, J, be.value, H);
						if (Oo === null) {
							J === null && (J = me);
							break;
						}
						t && J && Oo.alternate === null && r(P, J), w = d(Oo, w, Pe), Ge === null ? Q = Oo : Ge.sibling = Oo, Ge = Oo, J = me;
					}
					if (be.done) return a(P, J), ue && or(P, Pe), Q;
					if (J === null) {
						for (; !be.done; Pe++, be = C.next()) be = A(P, be.value, H), be !== null && (w = d(be, w, Pe), Ge === null ? Q = be : Ge.sibling = be, Ge = be);
						return ue && or(P, Pe), Q;
					}
					for (J = l(J); !be.done; Pe++, be = C.next()) be = V(J, P, Pe, be.value, H), be !== null && (t && be.alternate !== null && J.delete(be.key === null ? Pe : be.key), w = d(be, w, Pe), Ge === null ? Q = be : Ge.sibling = be, Ge = be);
					return t && J.forEach(function(qs) {
						return r(P, qs);
					}), ue && or(P, Pe), Q;
				}
				function li(P, w, C, H) {
					if (typeof C == "object" && C !== null && C.type === $a && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
						switch (C.$$typeof) {
							case zs:
								e: {
									for (var Q = C.key; w !== null;) {
										if (w.key === Q) {
											if (Q = C.type, Q === $a) {
												if (w.tag === 7) {
													a(P, w.sibling), H = c(w, C.props.children), H.return = P, P = H;
													break e;
												}
											} else if (w.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ua && pt(Q) === w.type) {
												a(P, w.sibling), H = c(w, C.props), La(H, C), H.return = P, P = H;
												break e;
											}
											a(P, w);
											break;
										} else r(P, w);
										w = w.sibling;
									}
									C.type === $a ? (H = Eo(C.props.children, P.mode, H, C.key), H.return = P, P = H) : (H = ws(C.type, C.key, C.props, null, P.mode, H), La(H, C), H.return = P, P = H);
								}
								return h(P);
							case sa:
								e: {
									for (Q = C.key; w !== null;) {
										if (w.key === Q) if (w.tag === 4 && w.stateNode.containerInfo === C.containerInfo && w.stateNode.implementation === C.implementation) {
											a(P, w.sibling), H = c(w, C.children || []), H.return = P, P = H;
											break e;
										} else {
											a(P, w);
											break;
										}
										else r(P, w);
										w = w.sibling;
									}
									H = dc(C, P.mode, H), H.return = P, P = H;
								}
								return h(P);
							case ua: return C = pt(C), li(P, w, C, H);
						}
						if (ca(C)) return Oe(P, w, C, H);
						if (Fl(C)) {
							if (Q = Fl(C), typeof Q != "function") throw Error(F(150));
							return C = Q.call(C), vn(P, w, C, H);
						}
						if (typeof C.then == "function") return li(P, w, Rt(C), H);
						if (C.$$typeof === Io) return li(P, w, Wl(P, C), H);
						Na(P, C);
					}
					return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, w !== null && w.tag === 6 ? (a(P, w.sibling), H = c(w, C), H.return = P, P = H) : (a(P, w), H = Ps(C, P.mode, H), H.return = P, P = H), h(P)) : a(P, w);
				}
				return function(P, w, C, H) {
					try {
						Bs = 0;
						var Q = li(P, w, C, H);
						return Kt = null, Q;
					} catch (J) {
						if (J === cl || J === jc) throw J;
						var Ge = Yn(29, J, null, P.mode);
						return Ge.lanes = H, Ge.return = P, Ge;
					}
				};
			}
			function Bn() {
				for (var t = xr, r = $f = xr = 0; r < t;) {
					var a = er[r];
					er[r++] = null;
					var l = er[r];
					er[r++] = null;
					var c = er[r];
					er[r++] = null;
					var d = er[r];
					if (er[r++] = null, l !== null && c !== null) {
						var h = l.pending;
						h === null ? c.next = c : (c.next = h.next, h.next = c), l.pending = c;
					}
					d !== 0 && Ii(a, c, d);
				}
			}
			function go(t, r, a, l) {
				er[xr++] = t, er[xr++] = r, er[xr++] = a, er[xr++] = l, $f |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
			}
			function yo(t, r, a, l) {
				return go(t, r, a, l), Fa(t);
			}
			function Ko(t, r) {
				return go(t, null, null, r), Fa(t);
			}
			function Ii(t, r, a) {
				t.lanes |= a;
				var l = t.alternate;
				l !== null && (l.lanes |= a);
				for (var c = !1, d = t.return; d !== null;) d.childLanes |= a, l = d.alternate, l !== null && (l.childLanes |= a), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (c = !0)), t = d, d = d.return;
				return t.tag === 3 ? (d = t.stateNode, c && r !== null && (c = 31 - vt(a), t = d.hiddenUpdates, l = t[c], l === null ? t[c] = [r] : l.push(r), r.lane = a | 536870912), d) : null;
			}
			function Fa(t) {
				if (50 < gl) throw gl = 0, nd = null, Error(F(185));
				for (var r = t.return; r !== null;) t = r, r = t.return;
				return t.tag === 3 ? t.stateNode : null;
			}
			function Ol(t) {
				t.updateQueue = {
					baseState: t.memoizedState,
					firstBaseUpdate: null,
					lastBaseUpdate: null,
					shared: {
						pending: null,
						lanes: 0,
						hiddenCallbacks: null
					},
					callbacks: null
				};
			}
			function Ha(t, r) {
				t = t.updateQueue, r.updateQueue === t && (r.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					callbacks: null
				});
			}
			function Et(t) {
				return {
					lane: t,
					tag: 0,
					payload: null,
					callback: null,
					next: null
				};
			}
			function Nr(t, r, a) {
				var l = t.updateQueue;
				if (l === null) return null;
				if (l = l.shared, (ce & 2) !== 0) {
					var c = l.pending;
					return c === null ? r.next = r : (r.next = c.next, c.next = r), l.pending = r, r = Fa(t), Ii(t, null, a), r;
				}
				return go(t, l, r, a), Fa(t);
			}
			function Ml(t, r, a) {
				if (r = r.updateQueue, r !== null && (r = r.shared, (a & 4194048) !== 0)) {
					var l = r.lanes;
					l &= t.pendingLanes, a |= l, r.lanes = a, $e(t, a);
				}
			}
			function jd(t, r) {
				var a = t.updateQueue, l = t.alternate;
				if (l !== null && (l = l.updateQueue, a === l)) {
					var c = null, d = null;
					if (a = a.firstBaseUpdate, a !== null) {
						do {
							var h = {
								lane: a.lane,
								tag: a.tag,
								payload: a.payload,
								callback: null,
								next: null
							};
							d === null ? c = d = h : d = d.next = h, a = a.next;
						} while (a !== null);
						d === null ? c = d = r : d = d.next = r;
					} else c = d = r;
					a = {
						baseState: l.baseState,
						firstBaseUpdate: c,
						lastBaseUpdate: d,
						shared: l.shared,
						callbacks: l.callbacks
					}, t.updateQueue = a;
					return;
				}
				t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = r : t.next = r, a.lastBaseUpdate = r;
			}
			function Li() {
				if (Vf) {
					var t = ul;
					if (t !== null) throw t;
				}
			}
			function Aa(t, r, a, l) {
				Vf = !1;
				var c = t.updateQueue;
				ma = !1;
				var d = c.firstBaseUpdate, h = c.lastBaseUpdate, y = c.shared.pending;
				if (y !== null) {
					c.shared.pending = null;
					var R = y, L = R.next;
					R.next = null, h === null ? d = L : h.next = L, h = R;
					var j = t.alternate;
					j !== null && (j = j.updateQueue, y = j.lastBaseUpdate, y !== h && (y === null ? j.firstBaseUpdate = L : y.next = L, j.lastBaseUpdate = R));
				}
				if (d !== null) {
					var A = c.baseState;
					h = 0, j = L = R = null, y = d;
					do {
						var W = y.lane & -536870913, V = W !== y.lane;
						if (V ? (he & W) === W : (l & W) === W) {
							W !== 0 && W === sl && (Vf = !0), j !== null && (j = j.next = {
								lane: 0,
								tag: y.tag,
								payload: y.payload,
								callback: null,
								next: null
							});
							e: {
								var Oe = t, vn = y;
								W = r;
								var li = a;
								switch (vn.tag) {
									case 1:
										if (Oe = vn.payload, typeof Oe == "function") {
											A = Oe.call(li, A, W);
											break e;
										}
										A = Oe;
										break e;
									case 3: Oe.flags = Oe.flags & -65537 | 128;
									case 0:
										if (Oe = vn.payload, W = typeof Oe == "function" ? Oe.call(li, A, W) : Oe, W == null) break e;
										A = Lt({}, A, W);
										break e;
									case 2: ma = !0;
								}
							}
							W = y.callback, W !== null && (t.flags |= 64, V && (t.flags |= 8192), V = c.callbacks, V === null ? c.callbacks = [W] : V.push(W));
						} else V = {
							lane: W,
							tag: y.tag,
							payload: y.payload,
							callback: y.callback,
							next: null
						}, j === null ? (L = j = V, R = A) : j = j.next = V, h |= W;
						if (y = y.next, y === null) {
							if (y = c.shared.pending, y === null) break;
							V = y, y = V.next, V.next = null, c.lastBaseUpdate = V, c.shared.pending = null;
						}
					} while (!0);
					j === null && (R = A), c.baseState = R, c.firstBaseUpdate = L, c.lastBaseUpdate = j, d === null && (c.shared.lanes = 0), ba |= h, t.lanes = h, t.memoizedState = A;
				}
			}
			function Dd(t, r) {
				if (typeof t != "function") throw Error(F(191, t));
				t.call(r);
			}
			function Fp(t, r) {
				var a = t.callbacks;
				if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) Dd(a[t], r);
			}
			function B(t, r) {
				t = Uo, Ce(Wc, t), Ce(Kr, r), Uo = t | r.baseLanes;
			}
			function Ql() {
				Ce(Wc, Uo), Ce(Kr, Kr.current);
			}
			function bo() {
				Uo = Wc.current, D(Kr), D(Wc);
			}
			function vo(t) {
				var r = t.alternate;
				Ce(ln, ln.current & 1), Ce(Ft, t), zr === null && (r === null || Kr.current !== null || r.memoizedState !== null) && (zr = t);
			}
			function Ni(t) {
				Ce(ln, ln.current), Ce(Ft, t), zr === null && (zr = t);
			}
			function Fr(t) {
				t.tag === 22 ? (Ce(ln, ln.current), Ce(Ft, t), zr === null && (zr = t)) : So();
			}
			function So() {
				Ce(ln, ln.current), Ce(Ft, Ft.current);
			}
			function ht(t) {
				D(Ft), zr === t && (zr = null), D(ln);
			}
			function ko(t) {
				for (var r = t; r !== null;) {
					if (r.tag === 13) {
						var a = r.memoizedState;
						if (a !== null && (a = a.dehydrated, a === null || Ns(a) || Fs(a))) return r;
					} else if (r.tag === 19 && (r.memoizedProps.revealOrder === "forwards" || r.memoizedProps.revealOrder === "backwards" || r.memoizedProps.revealOrder === "unstable_legacy-backwards" || r.memoizedProps.revealOrder === "together")) {
						if ((r.flags & 128) !== 0) return r;
					} else if (r.child !== null) {
						r.child.return = r, r = r.child;
						continue;
					}
					if (r === t) break;
					for (; r.sibling === null;) {
						if (r.return === null || r.return === t) return null;
						r = r.return;
					}
					r.sibling.return = r.return, r = r.sibling;
				}
				return null;
			}
			function Ve() {
				throw Error(F(321));
			}
			function wo(t, r) {
				if (r === null) return !1;
				for (var a = 0; a < r.length && a < t.length; a++) if (!jn(t[a], r[a])) return !1;
				return !0;
			}
			function $l(t, r, a, l, c, d) {
				return Wo = d, ne = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, M.H = t === null || t.memoizedState === null ? Mh : qf, oi = !1, d = a(l, c), oi = !1, dl && (d = xu(r, a, l, c)), Fi(t), d;
			}
			function Fi(t) {
				M.H = Os;
				var r = Ie !== null && Ie.next !== null;
				if (Wo = 0, pn = Ie = ne = null, Uc = !1, fl = 0, pl = null, r) throw Error(F(300));
				t === null || hn || (t = t.dependencies, t !== null && Ri(t) && (hn = !0));
			}
			function xu(t, r, a, l) {
				ne = t;
				var c = 0;
				do {
					if (dl && (pl = null), fl = 0, dl = !1, 25 <= c) throw Error(F(301));
					if (c += 1, pn = Ie = null, t.updateQueue != null) {
						var d = t.updateQueue;
						d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
					}
					M.H = Qh, d = r(a, l);
				} while (dl);
				return d;
			}
			function zu() {
				var t = M.H, r = t.useState()[0];
				return r = typeof r.then == "function" ? sr(r) : r, t = t.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== t && (ne.flags |= 1024), r;
			}
			function Hr() {
				var t = Bc !== 0;
				return Bc = 0, t;
			}
			function lr(t, r, a) {
				r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~a;
			}
			function Vl(t) {
				if (Uc) {
					for (t = t.memoizedState; t !== null;) {
						var r = t.queue;
						r !== null && (r.pending = null), t = t.next;
					}
					Uc = !1;
				}
				Wo = 0, pn = Ie = ne = null, dl = !1, fl = Bc = 0, pl = null;
			}
			function Ln() {
				var t = {
					memoizedState: null,
					baseState: null,
					baseQueue: null,
					queue: null,
					next: null
				};
				return pn === null ? ne.memoizedState = pn = t : pn = pn.next = t, pn;
			}
			function He() {
				if (Ie === null) {
					var t = ne.alternate;
					t = t !== null ? t.memoizedState : null;
				} else t = Ie.next;
				var r = pn === null ? ne.memoizedState : pn.next;
				if (r !== null) pn = r, Ie = t;
				else {
					if (t === null) throw ne.alternate === null ? Error(F(467)) : Error(F(310));
					Ie = t, t = {
						memoizedState: Ie.memoizedState,
						baseState: Ie.baseState,
						baseQueue: Ie.baseQueue,
						queue: Ie.queue,
						next: null
					}, pn === null ? ne.memoizedState = pn = t : pn = pn.next = t;
				}
				return pn;
			}
			function ja() {
				return {
					lastEffect: null,
					events: null,
					stores: null,
					memoCache: null
				};
			}
			function sr(t) {
				var r = fl;
				return fl += 1, pl === null && (pl = []), t = mo(pl, t, r), r = ne, (pn === null ? r.memoizedState : pn.next) === null && (r = r.alternate, M.H = r === null || r.memoizedState === null ? Mh : qf), t;
			}
			function Ee(t) {
				if (t !== null && typeof t == "object") {
					if (typeof t.then == "function") return sr(t);
					if (t.$$typeof === Io) return In(t);
				}
				throw Error(F(438, String(t)));
			}
			function Hi(t) {
				var r = null, a = ne.updateQueue;
				if (a !== null && (r = a.memoCache), r == null) {
					var l = ne.alternate;
					l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (r = {
						data: l.data.map(function(c) {
							return c.slice();
						}),
						index: 0
					})));
				}
				if (r ??= {
					data: [],
					index: 0
				}, a === null && (a = ja(), ne.updateQueue = a), a.memoCache = r, a = r.data[r.index], a === void 0) for (a = r.data[r.index] = Array(t), l = 0; l < t; l++) a[l] = $r;
				return r.index++, a;
			}
			function Ar(t, r) {
				return typeof r == "function" ? r(t) : r;
			}
			function Ai(t) {
				return Po(He(), Ie, t);
			}
			function Po(t, r, a) {
				var l = t.queue;
				if (l === null) throw Error(F(311));
				l.lastRenderedReducer = a;
				var c = t.baseQueue, d = l.pending;
				if (d !== null) {
					if (c !== null) {
						var h = c.next;
						c.next = d.next, d.next = h;
					}
					r.baseQueue = c = d, l.pending = null;
				}
				if (d = t.baseState, c === null) t.memoizedState = d;
				else {
					r = c.next;
					var y = h = null, R = null, L = r, j = !1;
					do {
						var A = L.lane & -536870913;
						if (A !== L.lane ? (he & A) === A : (Wo & A) === A) {
							var W = L.revertLane;
							if (W === 0) R !== null && (R = R.next = {
								lane: 0,
								revertLane: 0,
								gesture: null,
								action: L.action,
								hasEagerState: L.hasEagerState,
								eagerState: L.eagerState,
								next: null
							}), A === sl && (j = !0);
							else if ((Wo & W) === W) {
								L = L.next, W === sl && (j = !0);
								continue;
							} else A = {
								lane: 0,
								revertLane: L.revertLane,
								gesture: null,
								action: L.action,
								hasEagerState: L.hasEagerState,
								eagerState: L.eagerState,
								next: null
							}, R === null ? (y = R = A, h = d) : R = R.next = A, ne.lanes |= W, ba |= W;
							A = L.action, oi && a(d, A), d = L.hasEagerState ? L.eagerState : a(d, A);
						} else W = {
							lane: A,
							revertLane: L.revertLane,
							gesture: L.gesture,
							action: L.action,
							hasEagerState: L.hasEagerState,
							eagerState: L.eagerState,
							next: null
						}, R === null ? (y = R = W, h = d) : R = R.next = W, ne.lanes |= A, ba |= A;
						L = L.next;
					} while (L !== null && L !== r);
					if (R === null ? h = d : R.next = y, !jn(d, t.memoizedState) && (hn = !0, j && (a = ul, a !== null))) throw a;
					t.memoizedState = d, t.baseState = h, t.baseQueue = R, l.lastRenderedState = d;
				}
				return c === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
			}
			function Da(t) {
				var r = He(), a = r.queue;
				if (a === null) throw Error(F(311));
				a.lastRenderedReducer = t;
				var l = a.dispatch, c = a.pending, d = r.memoizedState;
				if (c !== null) {
					a.pending = null;
					var h = c = c.next;
					do
						d = t(d, h.action), h = h.next;
					while (h !== c);
					jn(d, r.memoizedState) || (hn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), a.lastRenderedState = d;
				}
				return [d, l];
			}
			function ur(t, r, a) {
				var l = ne, c = He(), d = ue;
				if (d) {
					if (a === void 0) throw Error(F(407));
					a = a();
				} else a = r();
				var h = !jn((Ie || c).memoizedState, a);
				if (h && (c.memoizedState = a, hn = !0), c = c.queue, Tu(ql.bind(null, l, c, t), [t]), c.getSnapshot !== r || h || pn !== null && pn.memoizedState.tag & 1) {
					if (l.flags |= 2048, Kn(9, { destroy: void 0 }, jr.bind(null, l, c, a, r), null), Ne === null) throw Error(F(349));
					d || Wo & 127 || Hp(l, r, a);
				}
				return a;
			}
			function Hp(t, r, a) {
				t.flags |= 16384, t = {
					getSnapshot: r,
					value: a
				}, r = ne.updateQueue, r === null ? (r = ja(), ne.updateQueue = r, r.stores = [t]) : (a = r.stores, a === null ? r.stores = [t] : a.push(t));
			}
			function jr(t, r, a, l) {
				r.value = a, r.getSnapshot = l, ji(r) && Gl(t);
			}
			function ql(t, r, a) {
				return a(function() {
					ji(r) && Gl(t);
				});
			}
			function ji(t) {
				var r = t.getSnapshot;
				t = t.value;
				try {
					var a = r();
					return !jn(t, a);
				} catch {
					return !0;
				}
			}
			function Gl(t) {
				var r = Ko(t, 2);
				r !== null && nt(r, t, 2);
			}
			function Xn(t) {
				var r = Ln();
				if (typeof t == "function") {
					var a = t;
					if (t = a(), oi) {
						pe(!0);
						try {
							a();
						} finally {
							pe(!1);
						}
					}
				}
				return r.memoizedState = r.baseState = t, r.queue = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Ar,
					lastRenderedState: t
				}, r;
			}
			function mt(t, r, a, l) {
				return t.baseState = a, Po(t, Ie, typeof l == "function" ? l : Ar);
			}
			function Dr(t, r, a, l, c) {
				if (na(t)) throw Error(F(485));
				if (t = r.action, t !== null) {
					var d = {
						payload: c,
						action: t,
						next: null,
						isTransition: !0,
						status: "pending",
						value: null,
						reason: null,
						listeners: [],
						then: function(h) {
							d.listeners.push(h);
						}
					};
					M.T !== null ? a(!0) : d.isTransition = !1, l(d), a = r.pending, a === null ? (d.next = r.pending = d, cr(r, d)) : (d.next = a.next, r.pending = a.next = d);
				}
			}
			function cr(t, r) {
				var a = r.action, l = r.payload, c = t.state;
				if (r.isTransition) {
					var d = M.T, h = {};
					M.T = h;
					try {
						var y = a(c, l), R = M.S;
						R !== null && R(h, y), dr(t, r, y);
					} catch (L) {
						Jl(t, r, L);
					} finally {
						d !== null && h.types !== null && (d.types = h.types), M.T = d;
					}
				} else try {
					d = a(c, l), dr(t, r, d);
				} catch (L) {
					Jl(t, r, L);
				}
			}
			function dr(t, r, a) {
				a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
					fr(t, r, l);
				}, function(l) {
					return Jl(t, r, l);
				}) : fr(t, r, a);
			}
			function fr(t, r, a) {
				r.status = "fulfilled", r.value = a, Cu(r), t.state = a, r = t.pending, r !== null && (a = r.next, a === r ? t.pending = null : (a = a.next, r.next = a, cr(t, a)));
			}
			function Jl(t, r, a) {
				var l = t.pending;
				if (t.pending = null, l !== null) {
					l = l.next;
					do
						r.status = "rejected", r.reason = a, Cu(r), r = r.next;
					while (r !== l);
				}
				t.action = null;
			}
			function Cu(t) {
				t = t.listeners;
				for (var r = 0; r < t.length; r++) (0, t[r])();
			}
			function Wd(t, r) {
				return r;
			}
			function pr(t, r) {
				if (ue) {
					var a = Ne.formState;
					if (a !== null) {
						e: {
							var l = ne;
							if (ue) {
								if (Ue) {
									var c = vh(Ue, Yt);
									if (c) {
										Ue = Nf(c), l = Sh(c);
										break e;
									}
								}
								ar(l);
							}
							l = !1;
						}
						l && (r = a[0]);
					}
				}
				a = Ln(), a.memoizedState = a.baseState = r, l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Wd,
					lastRenderedState: r
				}, a.queue = l, a = Nu.bind(null, ne, l), l.dispatch = a, l = Xn(!1);
				var d = Wi.bind(null, ne, !1, l.queue);
				return l = Ln(), c = {
					state: r,
					dispatch: null,
					action: t,
					pending: null
				}, l.queue = c, a = Dr.bind(null, ne, c, d, a), c.dispatch = a, l.memoizedState = t, [
					r,
					a,
					!1
				];
			}
			function Ud(t) {
				return hr(He(), Ie, t);
			}
			function hr(t, r, a) {
				if (r = Po(t, r, Wd)[0], t = Ai(Ar)[0], typeof r == "object" && r !== null && typeof r.then == "function") try {
					var l = sr(r);
				} catch (h) {
					throw h === cl ? jc : h;
				}
				else l = r;
				r = He();
				var c = r.queue, d = c.dispatch;
				return a !== r.memoizedState && (ne.flags |= 2048, Kn(9, { destroy: void 0 }, Zl.bind(null, c, a), null)), [
					l,
					d,
					t
				];
			}
			function Zl(t, r) {
				t.action = r;
			}
			function Yl(t) {
				var r = He(), a = Ie;
				if (a !== null) return hr(r, a, t);
				He(), r = r.memoizedState, a = He();
				var l = a.queue.dispatch;
				return a.memoizedState = t, [
					r,
					l,
					!1
				];
			}
			function Kn(t, r, a, l) {
				return t = {
					tag: t,
					create: a,
					deps: l,
					inst: r,
					next: null
				}, r = ne.updateQueue, r === null && (r = ja(), ne.updateQueue = r), a = r.lastEffect, a === null ? r.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, r.lastEffect = t), t;
			}
			function Wa() {
				return He().memoizedState;
			}
			function Xl(t, r, a, l) {
				var c = Ln();
				ne.flags |= t, c.memoizedState = Kn(1 | r, { destroy: void 0 }, a, l === void 0 ? null : l);
			}
			function Di(t, r, a, l) {
				var c = He();
				l = l === void 0 ? null : l;
				var d = c.memoizedState.inst;
				Ie !== null && l !== null && wo(l, Ie.memoizedState.deps) ? c.memoizedState = Kn(r, d, a, l) : (ne.flags |= t, c.memoizedState = Kn(1 | r, d, a, l));
			}
			function Bd(t, r) {
				Xl(8390656, 8, t, r);
			}
			function Tu(t, r) {
				Di(2048, 8, t, r);
			}
			function Ap(t) {
				ne.flags |= 4;
				var r = ne.updateQueue;
				if (r === null) r = ja(), ne.updateQueue = r, r.events = [t];
				else {
					var a = r.events;
					a === null ? r.events = [t] : a.push(t);
				}
			}
			function _u(t) {
				var r = He().memoizedState;
				return Ap({
					ref: r,
					nextImpl: t
				}), function() {
					if ((ce & 2) !== 0) throw Error(F(440));
					return r.impl.apply(void 0, arguments);
				};
			}
			function Od(t, r) {
				return Di(4, 2, t, r);
			}
			function Ru(t, r) {
				return Di(4, 4, t, r);
			}
			function jp(t, r) {
				if (typeof r == "function") {
					t = t();
					var a = r(t);
					return function() {
						typeof a == "function" ? a() : r(null);
					};
				}
				if (r != null) return t = t(), r.current = t, function() {
					r.current = null;
				};
			}
			function Md(t, r, a) {
				a = a != null ? a.concat([t]) : null, Di(4, 4, jp.bind(null, r, t), a);
			}
			function Qd() {}
			function Eu(t, r) {
				var a = He();
				r = r === void 0 ? null : r;
				var l = a.memoizedState;
				return r !== null && wo(r, l[1]) ? l[0] : (a.memoizedState = [t, r], t);
			}
			function Kl(t, r) {
				var a = He();
				r = r === void 0 ? null : r;
				var l = a.memoizedState;
				if (r !== null && wo(r, l[1])) return l[0];
				if (l = t(), oi) {
					pe(!0);
					try {
						t();
					} finally {
						pe(!1);
					}
				}
				return a.memoizedState = [l, r], l;
			}
			function Iu(t, r, a) {
				return a === void 0 || (Wo & 1073741824) !== 0 && (he & 261930) === 0 ? t.memoizedState = r : (t.memoizedState = a, t = ys(), ne.lanes |= t, ba |= t, a);
			}
			function es(t, r, a, l) {
				return jn(a, r) ? a : Kr.current !== null ? (t = Iu(t, a, l), jn(t, r) || (hn = !0), t) : (Wo & 42) === 0 || (Wo & 1073741824) !== 0 && (he & 261930) === 0 ? (hn = !0, t.memoizedState = a) : (t = ys(), ne.lanes |= t, ba |= t, r);
			}
			function $d(t, r, a, l, c) {
				var d = qr();
				yn(d !== 0 && 8 > d ? d : 8);
				var h = M.T, y = {};
				M.T = y, Wi(t, !1, r, a);
				try {
					var R = c(), L = M.S;
					if (L !== null && L(y, R), R !== null && typeof R == "object" && typeof R.then == "function") ea(t, r, ho(R, l), bt(t));
					else ea(t, r, l, bt(t));
				} catch (A) {
					ea(t, r, {
						then: function() {},
						status: "rejected",
						reason: A
					}, bt());
				} finally {
					yn(d), h !== null && y.types !== null && (h.types = y.types), M.T = h;
				}
			}
			function Vd(t) {
				var r = t.memoizedState;
				if (r !== null) return r;
				r = {
					memoizedState: rt,
					baseState: rt,
					baseQueue: null,
					queue: {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: Ar,
						lastRenderedState: rt
					},
					next: null
				};
				var a = {};
				return r.next = {
					memoizedState: a,
					baseState: a,
					baseQueue: null,
					queue: {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: Ar,
						lastRenderedState: a
					},
					next: null
				}, t.memoizedState = r, t = t.alternate, t !== null && (t.memoizedState = r), r;
			}
			function Lu() {
				return In(da);
			}
			function xo() {
				return He().memoizedState;
			}
			function qd() {
				return He().memoizedState;
			}
			function Dp(t) {
				for (var r = t.return; r !== null;) {
					switch (r.tag) {
						case 24:
						case 3:
							var a = bt();
							t = Et(a);
							var l = Nr(r, t, a);
							l !== null && (nt(l, r, a), Ml(l, r, a)), r = { cache: Fd() }, t.payload = r;
							return;
					}
					r = r.return;
				}
			}
			function Nn(t, r, a) {
				var l = bt();
				a = {
					lane: l,
					revertLane: 0,
					gesture: null,
					action: a,
					hasEagerState: !1,
					eagerState: null,
					next: null
				}, na(t) ? Gd(r, a) : (a = yo(t, r, a, l), a !== null && (nt(a, t, l), ns(a, r, l)));
			}
			function Nu(t, r, a) {
				ea(t, r, a, bt());
			}
			function ea(t, r, a, l) {
				var c = {
					lane: l,
					revertLane: 0,
					gesture: null,
					action: a,
					hasEagerState: !1,
					eagerState: null,
					next: null
				};
				if (na(t)) Gd(r, c);
				else {
					var d = t.alternate;
					if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
						var h = r.lastRenderedState, y = d(h, a);
						if (c.hasEagerState = !0, c.eagerState = y, jn(y, h)) return go(t, r, c, 0), Ne === null && Bn(), !1;
					} catch {}
					if (a = yo(t, r, c, l), a !== null) return nt(a, t, l), ns(a, r, l), !0;
				}
				return !1;
			}
			function Wi(t, r, a, l) {
				if (l = {
					lane: 2,
					revertLane: ku(),
					gesture: null,
					action: l,
					hasEagerState: !1,
					eagerState: null,
					next: null
				}, na(t)) {
					if (r) throw Error(F(479));
				} else r = yo(t, a, l, 2), r !== null && nt(r, t, 2);
			}
			function na(t) {
				var r = t.alternate;
				return t === ne || r !== null && r === ne;
			}
			function Gd(t, r) {
				dl = Uc = !0;
				var a = t.pending;
				a === null ? r.next = r : (r.next = a.next, a.next = r), t.pending = r;
			}
			function ns(t, r, a) {
				if ((a & 4194048) !== 0) {
					var l = r.lanes;
					l &= t.pendingLanes, a |= l, r.lanes = a, $e(t, a);
				}
			}
			function Fu(t, r, a, l) {
				r = t.memoizedState, a = a(l, r), a = a == null ? r : Lt({}, r, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
			}
			function ts(t, r, a, l, c, d, h) {
				return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, d, h) : r.prototype && r.prototype.isPureReactComponent ? !Ul(a, l) || !Ul(c, d) : !0;
			}
			function Jd(t, r, a, l) {
				t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(a, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(a, l), r.state !== t && Oc.enqueueReplaceState(r, r.state, null);
			}
			function Wr(t, r) {
				var a = r;
				if ("ref" in r) {
					a = {};
					for (var l in r) l !== "ref" && (a[l] = r[l]);
				}
				if (t = t.defaultProps) {
					a === r && (a = Lt({}, a));
					for (var c in t) a[c] === void 0 && (a[c] = t[c]);
				}
				return a;
			}
			function rs(t, r) {
				try {
					var a = t.onUncaughtError;
					a(r.value, { componentStack: r.stack });
				} catch (l) {
					setTimeout(function() {
						throw l;
					});
				}
			}
			function Zd(t, r, a) {
				try {
					var l = t.onCaughtError;
					l(a.value, {
						componentStack: a.stack,
						errorBoundary: r.tag === 1 ? r.stateNode : null
					});
				} catch (c) {
					setTimeout(function() {
						throw c;
					});
				}
			}
			function Ui(t, r, a) {
				return a = Et(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
					rs(t, r);
				}, a;
			}
			function os(t) {
				return t = Et(t), t.tag = 3, t;
			}
			function Hu(t, r, a, l) {
				var c = a.type.getDerivedStateFromError;
				if (typeof c == "function") {
					var d = l.value;
					t.payload = function() {
						return c(d);
					}, t.callback = function() {
						Zd(r, a, l);
					};
				}
				var h = a.stateNode;
				h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
					Zd(r, a, l), typeof c != "function" && (va === null ? va = /* @__PURE__ */ new Set([this]) : va.add(this));
					var y = l.stack;
					this.componentDidCatch(l.value, { componentStack: y !== null ? y : "" });
				});
			}
			function On(t, r, a, l, c) {
				if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
					if (r = a.alternate, r !== null && po(r, a, c, !0), a = Ft.current, a !== null) {
						switch (a.tag) {
							case 31:
							case 13: return zr === null ? Gi() : a.alternate === null && Xe === 0 && (Xe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === Dc ? a.flags |= 16384 : (r = a.updateQueue, r === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : r.add(l), lc(t, l, c)), !1;
							case 22: return a.flags |= 65536, l === Dc ? a.flags |= 16384 : (r = a.updateQueue, r === null ? (r = {
								transitions: null,
								markerInstances: null,
								retryQueue: /* @__PURE__ */ new Set([l])
							}, a.updateQueue = r) : (a = r.retryQueue, a === null ? r.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), lc(t, l, c)), !1;
						}
						throw Error(F(435, a.tag));
					}
					return lc(t, l, c), Gi(), !1;
				}
				if (ue) return r = Ft.current, r !== null ? (!(r.flags & 65536) && (r.flags |= 256), r.flags |= 65536, r.lanes = c, l !== Of && (t = Error(F(422), { cause: l }), ct(ut(t, a)))) : (l !== Of && (r = Error(F(423), { cause: l }), ct(ut(r, a))), t = t.current.alternate, t.flags |= 65536, c &= -c, t.lanes |= c, l = ut(l, a), c = Ui(t.stateNode, l, c), jd(t, c), Xe !== 4 && (Xe = 2)), !1;
				var d = Error(F(520), { cause: l });
				if (d = ut(d, a), $s === null ? $s = [d] : $s.push(d), Xe !== 4 && (Xe = 2), r === null) return !0;
				l = ut(l, a), a = r;
				do {
					switch (a.tag) {
						case 3: return a.flags |= 65536, t = c & -c, a.lanes |= t, t = Ui(a.stateNode, l, t), jd(a, t), !1;
						case 1: if (r = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof r.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (va === null || !va.has(d)))) return a.flags |= 65536, c &= -c, a.lanes |= c, c = os(c), Hu(c, t, a, l), jd(a, c), !1;
					}
					a = a.return;
				} while (a !== null);
				return !1;
			}
			function wn(t, r, a, l) {
				r.child = t === null ? Oh(r, null, a, l) : ri(r, t.child, a, l);
			}
			function as(t, r, a, l, c) {
				a = a.render;
				var d = r.ref;
				if ("ref" in l) {
					var h = {};
					for (var y in l) y !== "ref" && (h[y] = l[y]);
				} else h = l;
				return Un(r), l = $l(t, r, a, h, d, c), y = Hr(), t !== null && !hn ? (lr(t, r, c), gt(t, r, c)) : (ue && y && Id(r), r.flags |= 1, wn(t, r, l, c), r.child);
			}
			function Au(t, r, a, l, c) {
				if (t === null) {
					var d = a.type;
					return typeof d == "function" && !ks(d) && d.defaultProps === void 0 && a.compare === null ? (r.tag = 15, r.type = d, ju(t, r, d, l, c)) : (t = ws(a.type, null, l, r, r.mode, c), t.ref = r.ref, t.return = r, r.child = t);
				}
				if (d = t.child, !Mi(t, c)) {
					var h = d.memoizedProps;
					if (a = a.compare, a = a !== null ? a : Ul, a(h, l) && t.ref === r.ref) return gt(t, r, c);
				}
				return r.flags |= 1, t = Qr(d, l), t.ref = r.ref, t.return = r, r.child = t;
			}
			function ju(t, r, a, l, c) {
				if (t !== null) {
					var d = t.memoizedProps;
					if (Ul(d, l) && t.ref === r.ref) if (hn = !1, r.pendingProps = l = d, Mi(t, c)) t.flags & 131072 && (hn = !0);
					else return r.lanes = t.lanes, gt(t, r, c);
				}
				return Yd(t, r, a, l, c);
			}
			function zo(t, r, a, l) {
				var c = l.children, d = t !== null ? t.memoizedState : null;
				if (t === null && r.stateNode === null && (r.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null
				}), l.mode === "hidden") {
					if ((r.flags & 128) !== 0) {
						if (d = d !== null ? d.baseLanes | a : a, t !== null) {
							for (l = r.child = t.child, c = 0; l !== null;) c = c | l.lanes | l.childLanes, l = l.sibling;
							l = c & ~d;
						} else l = 0, r.child = null;
						return Bi(t, r, d, a, l);
					}
					if ((a & 536870912) !== 0) r.memoizedState = {
						baseLanes: 0,
						cachePool: null
					}, t !== null && Ei(r, d !== null ? d.cachePool : null), d !== null ? B(r, d) : Ql(), Fr(r);
					else return l = r.lanes = 536870912, Bi(t, r, d !== null ? d.baseLanes | a : a, a, l);
				} else d !== null ? (Ei(r, d.cachePool), B(r, d), So(), r.memoizedState = null) : (t !== null && Ei(r, null), Ql(), So());
				return wn(t, r, c, a), r.child;
			}
			function Mt(t, r) {
				return t !== null && t.tag === 22 || r.stateNode !== null || (r.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null
				}), r.sibling;
			}
			function Bi(t, r, a, l, c) {
				var d = wu();
				return d = d === null ? null : {
					parent: qt ? qe._currentValue : qe._currentValue2,
					pool: d
				}, r.memoizedState = {
					baseLanes: a,
					cachePool: d
				}, t !== null && Ei(r, null), Ql(), Fr(r), t !== null && po(t, r, l, !0), r.childLanes = c, null;
			}
			function Ua(t, r) {
				return r = mr({
					mode: r.mode,
					children: r.children
				}, t.mode), r.ref = t.ref, t.child = r, r.return = t, r;
			}
			function Oi(t, r, a) {
				return ri(r, t.child, null, a), t = Ua(r, r.pendingProps), t.flags |= 2, ht(r), r.memoizedState = null, t;
			}
			function is(t, r, a) {
				var l = r.pendingProps, c = (r.flags & 128) !== 0;
				if (r.flags &= -129, t === null) {
					if (ue) {
						if (l.mode === "hidden") return t = Ua(r, l), r.lanes = 536870912, Mt(null, t);
						if (Ni(r), (t = Ue) ? (t = xh(t, Yt), t !== null && (r.memoizedState = {
							dehydrated: t,
							treeContext: jo !== null ? {
								id: ot,
								overflow: Zr
							} : null,
							retryLane: 536870912,
							hydrationErrors: null
						}, a = cc(t), a.return = r, r.child = a, bn = r, Ue = null)) : t = null, t === null) throw ar(r);
						return r.lanes = 536870912, null;
					}
					return Ua(r, l);
				}
				var d = t.memoizedState;
				if (d !== null) {
					var h = d.dehydrated;
					if (Ni(r), c) if (r.flags & 256) r.flags &= -257, r = Oi(t, r, a);
					else if (r.memoizedState !== null) r.child = t.child, r.flags |= 128, r = null;
					else throw Error(F(558));
					else if (hn || po(t, r, a, !1), c = (a & t.childLanes) !== 0, hn || c) {
						if (l = Ne, l !== null && (h = G(l, a), h !== 0 && h !== d.retryLane)) throw d.retryLane = h, Ko(t, h), nt(l, t, h), Mc;
						Gi(), r = Oi(t, r, a);
					} else t = d.treeContext, Hn && (Ue = Ff(h), bn = r, ue = !0, Do = null, Yt = !1, t !== null && Ld(r, t)), r = Ua(r, l), r.flags |= 4096;
					return r;
				}
				return t = Qr(t.child, {
					mode: l.mode,
					children: l.children
				}), t.ref = r.ref, r.child = t, t.return = r, t;
			}
			function ls(t, r) {
				var a = r.ref;
				if (a === null) t !== null && t.ref !== null && (r.flags |= 4194816);
				else {
					if (typeof a != "function" && typeof a != "object") throw Error(F(284));
					(t === null || t.ref !== a) && (r.flags |= 4194816);
				}
			}
			function Yd(t, r, a, l, c) {
				return Un(r), a = $l(t, r, a, l, void 0, c), l = Hr(), t !== null && !hn ? (lr(t, r, c), gt(t, r, c)) : (ue && l && Id(r), r.flags |= 1, wn(t, r, a, c), r.child);
			}
			function Xd(t, r, a, l, c, d) {
				return Un(r), r.updateQueue = null, a = xu(r, l, a, c), Fi(t), l = Hr(), t !== null && !hn ? (lr(t, r, d), gt(t, r, d)) : (ue && l && Id(r), r.flags |= 1, wn(t, r, a, d), r.child);
			}
			function Kd(t, r, a, l, c) {
				if (Un(r), r.stateNode === null) {
					var d = Ka, h = a.contextType;
					typeof h == "object" && h !== null && (d = In(h)), d = new a(l, d), r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Oc, r.stateNode = d, d._reactInternals = r, d = r.stateNode, d.props = l, d.state = r.memoizedState, d.refs = {}, Ol(r), h = a.contextType, d.context = typeof h == "object" && h !== null ? In(h) : Ka, d.state = r.memoizedState, h = a.getDerivedStateFromProps, typeof h == "function" && (Fu(r, a, h, l), d.state = r.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (h = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), h !== d.state && Oc.enqueueReplaceState(d, d.state, null), Aa(r, l, d, c), Li(), d.state = r.memoizedState), typeof d.componentDidMount == "function" && (r.flags |= 4194308), l = !0;
				} else if (t === null) {
					d = r.stateNode;
					var y = r.memoizedProps, R = Wr(a, y);
					d.props = R;
					var L = d.context, j = a.contextType;
					h = Ka, typeof j == "object" && j !== null && (h = In(j));
					var A = a.getDerivedStateFromProps;
					j = typeof A == "function" || typeof d.getSnapshotBeforeUpdate == "function", y = r.pendingProps !== y, j || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y || L !== h) && Jd(r, d, l, h), ma = !1;
					var W = r.memoizedState;
					d.state = W, Aa(r, l, d, c), Li(), L = r.memoizedState, y || W !== L || ma ? (typeof A == "function" && (Fu(r, a, A, l), L = r.memoizedState), (R = ma || ts(r, a, R, l, W, L, h)) ? (j || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = L), d.props = l, d.state = L, d.context = h, l = R) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
				} else {
					d = r.stateNode, Ha(t, r), h = r.memoizedProps, j = Wr(a, h), d.props = j, A = r.pendingProps, W = d.context, L = a.contextType, R = Ka, typeof L == "object" && L !== null && (R = In(L)), y = a.getDerivedStateFromProps, (L = typeof y == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (h !== A || W !== R) && Jd(r, d, l, R), ma = !1, W = r.memoizedState, d.state = W, Aa(r, l, d, c), Li();
					var V = r.memoizedState;
					h !== A || W !== V || ma || t !== null && t.dependencies !== null && Ri(t.dependencies) ? (typeof y == "function" && (Fu(r, a, y, l), V = r.memoizedState), (j = ma || ts(r, a, j, l, W, V, R) || t !== null && t.dependencies !== null && Ri(t.dependencies)) ? (L || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, V, R), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, V, R)), typeof d.componentDidUpdate == "function" && (r.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || h === t.memoizedProps && W === t.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && W === t.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = V), d.props = l, d.state = V, d.context = R, l = j) : (typeof d.componentDidUpdate != "function" || h === t.memoizedProps && W === t.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && W === t.memoizedState || (r.flags |= 1024), l = !1);
				}
				return d = l, ls(t, r), l = (r.flags & 128) !== 0, d || l ? (d = r.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : d.render(), r.flags |= 1, t !== null && l ? (r.child = ri(r, t.child, null, c), r.child = ri(r, null, a, c)) : wn(t, r, a, c), r.memoizedState = d.state, t = r.child) : t = gt(t, r, c), t;
			}
			function Du(t, r, a, l) {
				return _a(), r.flags |= 256, wn(t, r, a, l), r.child;
			}
			function ss(t) {
				return {
					baseLanes: t,
					cachePool: Pu()
				};
			}
			function Ur(t, r, a) {
				return t = t !== null ? t.childLanes & ~a : 0, r && (t |= At), t;
			}
			function Wu(t, r, a) {
				var l = r.pendingProps, c = !1, d = (r.flags & 128) !== 0, h;
				if ((h = d) || (h = t !== null && t.memoizedState === null ? !1 : (ln.current & 2) !== 0), h && (c = !0, r.flags &= -129), h = (r.flags & 32) !== 0, r.flags &= -33, t === null) {
					if (ue) {
						if (c ? vo(r) : So(), (t = Ue) ? (t = Om(t, Yt), t !== null && (r.memoizedState = {
							dehydrated: t,
							treeContext: jo !== null ? {
								id: ot,
								overflow: Zr
							} : null,
							retryLane: 536870912,
							hydrationErrors: null
						}, a = cc(t), a.return = r, r.child = a, bn = r, Ue = null)) : t = null, t === null) throw ar(r);
						return Fs(t) ? r.lanes = 32 : r.lanes = 536870912, null;
					}
					var y = l.children;
					return l = l.fallback, c ? (So(), c = r.mode, y = mr({
						mode: "hidden",
						children: y
					}, c), l = Eo(l, c, a, null), y.return = r, l.return = r, y.sibling = l, r.child = y, l = r.child, l.memoizedState = ss(a), l.childLanes = Ur(t, h, a), r.memoizedState = Qc, Mt(null, l)) : (vo(r), Uu(r, y));
				}
				var R = t.memoizedState;
				if (R !== null && (y = R.dehydrated, y !== null)) {
					if (d) r.flags & 256 ? (vo(r), r.flags &= -257, r = et(t, r, a)) : r.memoizedState !== null ? (So(), r.child = t.child, r.flags |= 128, r = null) : (So(), y = l.fallback, c = r.mode, l = mr({
						mode: "visible",
						children: l.children
					}, c), y = Eo(y, c, a, null), y.flags |= 2, l.return = r, y.return = r, l.sibling = y, r.child = l, ri(r, t.child, null, a), l = r.child, l.memoizedState = ss(a), l.childLanes = Ur(t, h, a), r.memoizedState = Qc, r = Mt(null, l));
					else if (vo(r), Fs(y)) h = Za(y).digest, l = Error(F(419)), l.stack = "", l.digest = h, ct({
						value: l,
						source: null,
						stack: null
					}), r = et(t, r, a);
					else if (hn || po(t, r, a, !1), h = (a & t.childLanes) !== 0, hn || h) {
						if (h = Ne, h !== null && (l = G(h, a), l !== 0 && l !== R.retryLane)) throw R.retryLane = l, Ko(t, l), nt(h, t, l), Mc;
						Ns(y) || Gi(), r = et(t, r, a);
					} else Ns(y) ? (r.flags |= 192, r.child = t.child, r = null) : (t = R.treeContext, Hn && (Ue = wh(y), bn = r, ue = !0, Do = null, Yt = !1, t !== null && Ld(r, t)), r = Uu(r, l.children), r.flags |= 4096);
					return r;
				}
				return c ? (So(), y = l.fallback, c = r.mode, R = t.child, d = R.sibling, l = Qr(R, {
					mode: "hidden",
					children: l.children
				}), l.subtreeFlags = R.subtreeFlags & 65011712, d !== null ? y = Qr(d, y) : (y = Eo(y, c, a, null), y.flags |= 2), y.return = r, l.return = r, l.sibling = y, r.child = l, Mt(null, l), l = r.child, y = t.child.memoizedState, y === null ? y = ss(a) : (c = y.cachePool, c !== null ? (R = qt ? qe._currentValue : qe._currentValue2, c = c.parent !== R ? {
					parent: R,
					pool: R
				} : c) : c = Pu(), y = {
					baseLanes: y.baseLanes | a,
					cachePool: c
				}), l.memoizedState = y, l.childLanes = Ur(t, h, a), r.memoizedState = Qc, Mt(t.child, l)) : (vo(r), a = t.child, t = a.sibling, a = Qr(a, {
					mode: "visible",
					children: l.children
				}), a.return = r, a.sibling = null, t !== null && (h = r.deletions, h === null ? (r.deletions = [t], r.flags |= 16) : h.push(t)), r.child = a, r.memoizedState = null, a);
			}
			function Uu(t, r) {
				return r = mr({
					mode: "visible",
					children: r
				}, t.mode), r.return = t, t.child = r;
			}
			function mr(t, r) {
				return t = Yn(22, t, null, r), t.lanes = 0, t;
			}
			function et(t, r, a) {
				return ri(r, t.child, null, a), t = Uu(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t;
			}
			function us(t, r, a) {
				t.lanes |= r;
				var l = t.alternate;
				l !== null && (l.lanes |= r), Ot(t.return, r, a);
			}
			function ee(t, r, a, l, c, d) {
				var h = t.memoizedState;
				h === null ? t.memoizedState = {
					isBackwards: r,
					rendering: null,
					renderingStartTime: 0,
					last: l,
					tail: a,
					tailMode: c,
					treeForkCount: d
				} : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = a, h.tailMode = c, h.treeForkCount = d);
			}
			function N(t, r, a) {
				var l = r.pendingProps, c = l.revealOrder, d = l.tail;
				l = l.children;
				var h = ln.current, y = (h & 2) !== 0;
				if (y ? (h = h & 1 | 2, r.flags |= 128) : h &= 1, Ce(ln, h), wn(t, r, l, a), l = ue ? x : 0, !y && t !== null && (t.flags & 128) !== 0) e: for (t = r.child; t !== null;) {
					if (t.tag === 13) t.memoizedState !== null && us(t, a, r);
					else if (t.tag === 19) us(t, a, r);
					else if (t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === r) break e;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === r) break e;
						t = t.return;
					}
					t.sibling.return = t.return, t = t.sibling;
				}
				switch (c) {
					case "forwards":
						for (a = r.child, c = null; a !== null;) t = a.alternate, t !== null && ko(t) === null && (c = a), a = a.sibling;
						a = c, a === null ? (c = r.child, r.child = null) : (c = a.sibling, a.sibling = null), ee(r, !1, c, a, d, l);
						break;
					case "backwards":
					case "unstable_legacy-backwards":
						for (a = null, c = r.child, r.child = null; c !== null;) {
							if (t = c.alternate, t !== null && ko(t) === null) {
								r.child = c;
								break;
							}
							t = c.sibling, c.sibling = a, a = c, c = t;
						}
						ee(r, !0, a, null, d, l);
						break;
					case "together":
						ee(r, !1, null, null, void 0, l);
						break;
					default: r.memoizedState = null;
				}
				return r.child;
			}
			function gt(t, r, a) {
				if (t !== null && (r.dependencies = t.dependencies), ba |= r.lanes, (a & r.childLanes) === 0) if (t !== null) {
					if (po(t, r, a, !1), (a & r.childLanes) === 0) return null;
				} else return null;
				if (t !== null && r.child !== t.child) throw Error(F(153));
				if (r.child !== null) {
					for (t = r.child, a = Qr(t, t.pendingProps), r.child = a, a.return = r; t.sibling !== null;) t = t.sibling, a = a.sibling = Qr(t, t.pendingProps), a.return = r;
					a.sibling = null;
				}
				return r.child;
			}
			function Mi(t, r) {
				return (t.lanes & r) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ri(t)));
			}
			function Ye(t, r, a) {
				switch (r.tag) {
					case 3:
						Al(r, r.stateNode.containerInfo), fo(r, qe, t.memoizedState.cache), _a();
						break;
					case 27:
					case 5:
						yu(r);
						break;
					case 4:
						Al(r, r.stateNode.containerInfo);
						break;
					case 10:
						fo(r, r.type, r.memoizedProps.value);
						break;
					case 31:
						if (r.memoizedState !== null) return r.flags |= 128, Ni(r), null;
						break;
					case 13:
						var l = r.memoizedState;
						if (l !== null) return l.dehydrated !== null ? (vo(r), r.flags |= 128, null) : (a & r.child.childLanes) !== 0 ? Wu(t, r, a) : (vo(r), t = gt(t, r, a), t !== null ? t.sibling : null);
						vo(r);
						break;
					case 19:
						var c = (t.flags & 128) !== 0;
						if (l = (a & r.childLanes) !== 0, l || (po(t, r, a, !1), l = (a & r.childLanes) !== 0), c) {
							if (l) return N(t, r, a);
							r.flags |= 128;
						}
						if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ce(ln, ln.current), l) break;
						return null;
					case 22: return r.lanes = 0, zo(t, r, a, r.pendingProps);
					case 24: fo(r, qe, t.memoizedState.cache);
				}
				return gt(t, r, a);
			}
			function Bu(t, r, a) {
				if (t !== null) if (t.memoizedProps !== r.pendingProps) hn = !0;
				else {
					if (!Mi(t, a) && (r.flags & 128) === 0) return hn = !1, Ye(t, r, a);
					hn = (t.flags & 131072) !== 0;
				}
				else hn = !1, ue && r.flags & 1048576 && Ci(r, x, r.index);
				switch (r.lanes = 0, r.tag) {
					case 16:
						e: {
							var l = r.pendingProps;
							if (t = pt(r.elementType), r.type = t, typeof t == "function") ks(t) ? (l = Wr(t, l), r.tag = 1, r = Kd(null, r, t, l, a)) : (r.tag = 0, r = Yd(null, r, t, l, a));
							else {
								if (t != null) {
									var c = t.$$typeof;
									if (c === Zi) {
										r.tag = 11, r = as(null, r, t, l, a);
										break e;
									} else if (c === wf) {
										r.tag = 14, r = Au(null, r, t, l, a);
										break e;
									}
								}
								throw r = hu(t) || t, Error(F(306, r, ""));
							}
						}
						return r;
					case 0: return Yd(t, r, r.type, r.pendingProps, a);
					case 1: return l = r.type, c = Wr(l, r.pendingProps), Kd(t, r, l, c, a);
					case 3:
						e: {
							if (Al(r, r.stateNode.containerInfo), t === null) throw Error(F(387));
							var d = r.pendingProps;
							c = r.memoizedState, l = c.element, Ha(t, r), Aa(r, d, null, a);
							var h = r.memoizedState;
							if (d = h.cache, fo(r, qe, d), d !== c.cache && _i(r, [qe], a, !0), Li(), d = h.element, Hn && c.isDehydrated) if (c = {
								element: d,
								isDehydrated: !1,
								cache: h.cache
							}, r.updateQueue.baseState = c, r.memoizedState = c, r.flags & 256) {
								r = Du(t, r, d, a);
								break e;
							} else if (d !== l) {
								l = ut(Error(F(424)), r), ct(l), r = Du(t, r, d, a);
								break e;
							} else for (Hn && (Ue = Pc(r.stateNode.containerInfo), bn = r, ue = !0, Do = null, Yt = !0), a = Oh(r, null, d, a), r.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
							else {
								if (_a(), d === l) {
									r = gt(t, r, a);
									break e;
								}
								wn(t, r, d, a);
							}
							r = r.child;
						}
						return r;
					case 26: if (Gt) return ls(t, r), t === null ? (a = nl(r.type, null, r.pendingProps, null)) ? r.memoizedState = a : ue || (r.stateNode = Ah(r.type, r.pendingProps, pa.current, r)) : r.memoizedState = nl(r.type, t.memoizedProps, r.pendingProps, t.memoizedState), null;
					case 27: if (dn) return yu(r), t === null && dn && ue && (l = r.stateNode = _c(r.type, r.pendingProps, pa.current, Dn.current, !1), bn = r, Yt = !0, Ue = Um(r.type, l, Ue)), wn(t, r, r.pendingProps.children, a), ls(t, r), t === null && (r.flags |= 4194304), r.child;
					case 5: return t === null && ue && ($m(r.type, r.pendingProps, Dn.current), (c = l = Ue) && (l = Bm(l, r.type, r.pendingProps, Yt), l !== null ? (r.stateNode = l, bn = r, Ue = wc(l), Yt = !1, c = !0) : c = !1), c || ar(r)), yu(r), c = r.type, d = r.pendingProps, h = t !== null ? t.memoizedProps : null, l = d.children, Rs(c, d) ? l = null : h !== null && Rs(c, h) && (r.flags |= 32), r.memoizedState !== null && (c = $l(t, r, zu, null, null, a), qt ? da._currentValue = c : da._currentValue2 = c), ls(t, r), wn(t, r, l, a), r.child;
					case 6: return t === null && ue && (jf(r.pendingProps, Dn.current), (t = a = Ue) && (a = Ph(a, r.pendingProps, Yt), a !== null ? (r.stateNode = a, bn = r, Ue = null, t = !0) : t = !1), t || ar(r)), null;
					case 13: return Wu(t, r, a);
					case 4: return Al(r, r.stateNode.containerInfo), l = r.pendingProps, t === null ? r.child = ri(r, null, l, a) : wn(t, r, l, a), r.child;
					case 11: return as(t, r, r.type, r.pendingProps, a);
					case 7: return wn(t, r, r.pendingProps, a), r.child;
					case 8: return wn(t, r, r.pendingProps.children, a), r.child;
					case 12: return wn(t, r, r.pendingProps.children, a), r.child;
					case 10: return l = r.pendingProps, fo(r, r.type, l.value), wn(t, r, l.children, a), r.child;
					case 9: return c = r.type._context, l = r.pendingProps.children, Un(r), c = In(c), l = l(c), r.flags |= 1, wn(t, r, l, a), r.child;
					case 14: return Au(t, r, r.type, r.pendingProps, a);
					case 15: return ju(t, r, r.type, r.pendingProps, a);
					case 19: return N(t, r, a);
					case 31: return is(t, r, a);
					case 22: return zo(t, r, a, r.pendingProps);
					case 24: return Un(r), l = In(qe), t === null ? (c = wu(), c === null && (c = Ne, d = Fd(), c.pooledCache = d, d.refCount++, d !== null && (c.pooledCacheLanes |= a), c = d), r.memoizedState = {
						parent: l,
						cache: c
					}, Ol(r), fo(r, qe, c)) : ((t.lanes & a) !== 0 && (Ha(t, r), Aa(r, null, null, a), Li()), c = t.memoizedState, d = r.memoizedState, c.parent !== l ? (c = {
						parent: l,
						cache: l
					}, r.memoizedState = c, r.lanes === 0 && (r.memoizedState = r.updateQueue.baseState = c), fo(r, qe, l)) : (l = d.cache, fo(r, qe, l), l !== c.cache && _i(r, [qe], a, !0))), wn(t, r, r.pendingProps.children, a), r.child;
					case 29: throw r.pendingProps;
				}
				throw Error(F(156, r.tag));
			}
			function It(t) {
				t.flags |= 4;
			}
			function cs(t) {
				Sr && (t.flags |= 8);
			}
			function Ou(t, r) {
				if (t !== null && t.child === r.child) return !1;
				if ((r.flags & 16) !== 0) return !0;
				for (t = r.child; t !== null;) {
					if ((t.flags & 8218) !== 0 || (t.subtreeFlags & 8218) !== 0) return !0;
					t = t.sibling;
				}
				return !1;
			}
			function ef(t, r, a, l) {
				if ($n) for (a = r.child; a !== null;) {
					if (a.tag === 5 || a.tag === 6) yc(t, a.stateNode);
					else if (!(a.tag === 4 || dn && a.tag === 27) && a.child !== null) {
						a.child.return = a, a = a.child;
						continue;
					}
					if (a === r) break;
					for (; a.sibling === null;) {
						if (a.return === null || a.return === r) return;
						a = a.return;
					}
					a.sibling.return = a.return, a = a.sibling;
				}
				else if (Sr) for (var c = r.child; c !== null;) {
					if (c.tag === 5) {
						var d = c.stateNode;
						a && l && (d = No(d, c.type, c.memoizedProps)), yc(t, d);
					} else if (c.tag === 6) d = c.stateNode, a && l && (d = Ls(d, c.memoizedProps)), yc(t, d);
					else if (c.tag !== 4) {
						if (c.tag === 22 && c.memoizedState !== null) d = c.child, d !== null && (d.return = c), ef(t, c, !0, !0);
						else if (c.child !== null) {
							c.child.return = c, c = c.child;
							continue;
						}
					}
					if (c === r) break;
					for (; c.sibling === null;) {
						if (c.return === null || c.return === r) return;
						c = c.return;
					}
					c.sibling.return = c.return, c = c.sibling;
				}
			}
			function Mu(t, r, a, l) {
				var c = !1;
				if (Sr) for (var d = r.child; d !== null;) {
					if (d.tag === 5) {
						var h = d.stateNode;
						a && l && (h = No(h, d.type, d.memoizedProps)), Lf(t, h);
					} else if (d.tag === 6) h = d.stateNode, a && l && (h = Ls(h, d.memoizedProps)), Lf(t, h);
					else if (d.tag !== 4) {
						if (d.tag === 22 && d.memoizedState !== null) c = d.child, c !== null && (c.return = d), Mu(t, d, !0, !0), c = !0;
						else if (d.child !== null) {
							d.child.return = d, d = d.child;
							continue;
						}
					}
					if (d === r) break;
					for (; d.sibling === null;) {
						if (d.return === null || d.return === r) return c;
						d = d.return;
					}
					d.sibling.return = d.return, d = d.sibling;
				}
				return c;
			}
			function Qu(t, r) {
				if (Sr && Ou(t, r)) {
					t = r.stateNode;
					var a = t.containerInfo, l = We();
					Mu(l, r, !1, !1), t.pendingChildren = l, It(r), yh(a, l);
				}
			}
			function ds(t, r, a, l) {
				if ($n) t.memoizedProps !== l && It(r);
				else if (Sr) {
					var c = t.stateNode, d = t.memoizedProps;
					if ((t = Ou(t, r)) || d !== l) {
						var h = Dn.current;
						d = gh(c, a, d, l, !t, null), d === c ? r.stateNode = c : (cs(r), Kp(d, a, l, h) && It(r), r.stateNode = d, t && ef(d, r, !1, !1));
					} else r.stateNode = c;
				}
			}
			function Fn(t, r, a, l, c) {
				if ((t.mode & 32) !== 0 && (a === null ? rh(r, l) : Dm(r, a, l))) {
					if (t.flags |= 16777216, (c & 335544128) === c || Yi(r, l)) if (An(t.stateNode, r, l)) t.flags |= 8192;
					else if (Vp()) t.flags |= 8192;
					else throw Xt = Dc, Ac;
				} else t.flags &= -16777217;
			}
			function xe(t, r) {
				if (Vm(r)) {
					if (t.flags |= 16777216, !Tc(r)) if (Vp()) t.flags |= 8192;
					else throw Xt = Dc, Ac;
				} else t.flags &= -16777217;
			}
			function Ba(t, r) {
				r !== null && (t.flags |= 4), t.flags & 16384 && (r = t.tag !== 22 ? Ed() : 536870912, t.lanes |= r, hl |= r);
			}
			function Co(t, r) {
				if (!ue) switch (t.tailMode) {
					case "hidden":
						r = t.tail;
						for (var a = null; r !== null;) r.alternate !== null && (a = r), r = r.sibling;
						a === null ? t.tail = null : a.sibling = null;
						break;
					case "collapsed":
						a = t.tail;
						for (var l = null; a !== null;) a.alternate !== null && (l = a), a = a.sibling;
						l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
				}
			}
			function we(t) {
				var r = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
				if (r) for (var c = t.child; c !== null;) a |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = t, c = c.sibling;
				else for (c = t.child; c !== null;) a |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = t, c = c.sibling;
				return t.subtreeFlags |= l, t.childLanes = a, r;
			}
			function Oa(t, r, a) {
				var l = r.pendingProps;
				switch (gu(r), r.tag) {
					case 16:
					case 15:
					case 0:
					case 11:
					case 7:
					case 8:
					case 12:
					case 9:
					case 14: return we(r), null;
					case 1: return we(r), null;
					case 3: return a = r.stateNode, l = null, t !== null && (l = t.memoizedState.cache), r.memoizedState.cache !== l && (r.flags |= 2048), En(qe), Xo(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Ti(r) ? It(r) : t === null || t.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Dl())), Qu(t, r), we(r), null;
					case 26: if (Gt) {
						var c = r.type, d = r.memoizedState;
						return t === null ? (It(r), d !== null ? (we(r), xe(r, d)) : (we(r), Fn(r, c, null, l, a))) : d ? d !== t.memoizedState ? (It(r), we(r), xe(r, d)) : (we(r), r.flags &= -16777217) : (d = t.memoizedProps, $n ? d !== l && It(r) : ds(t, r, c, l), we(r), Fn(r, c, d, l, a)), null;
					}
					case 27: if (dn) {
						if (jl(r), a = pa.current, c = r.type, t !== null && r.stateNode != null) $n ? t.memoizedProps !== l && It(r) : ds(t, r, c, l);
						else {
							if (!l) {
								if (r.stateNode === null) throw Error(F(166));
								return we(r), null;
							}
							t = Dn.current, Ti(r) ? Ep(r, t) : (t = _c(c, l, a, t, !0), r.stateNode = t, It(r));
						}
						return we(r), null;
					}
					case 5:
						if (jl(r), c = r.type, t !== null && r.stateNode != null) ds(t, r, c, l);
						else {
							if (!l) {
								if (r.stateNode === null) throw Error(F(166));
								return we(r), null;
							}
							if (d = Dn.current, Ti(r)) Ep(r, d), Eh(r.stateNode, c, l, d) && (r.flags |= 64);
							else {
								var h = Vr(c, l, pa.current, d, r);
								cs(r), ef(h, r, !1, !1), r.stateNode = h, Kp(h, c, l, d) && It(r);
							}
						}
						return we(r), Fn(r, r.type, t === null ? null : t.memoizedProps, r.pendingProps, a), null;
					case 6:
						if (t && r.stateNode != null) a = t.memoizedProps, $n ? a !== l && It(r) : Sr && (a !== l ? (t = pa.current, a = Dn.current, cs(r), r.stateNode = bc(l, t, a, r)) : r.stateNode = t.stateNode);
						else {
							if (typeof l != "string" && r.stateNode === null) throw Error(F(166));
							if (t = pa.current, a = Dn.current, Ti(r)) {
								if (!Hn) throw Error(F(176));
								if (t = r.stateNode, a = r.memoizedProps, l = null, c = bn, c !== null) switch (c.tag) {
									case 27:
									case 5: l = c.memoizedProps;
								}
								xc(t, a, r, l) || ar(r, !0);
							} else cs(r), r.stateNode = bc(l, t, a, r);
						}
						return we(r), null;
					case 31:
						if (a = r.memoizedState, t === null || t.memoizedState !== null) {
							if (l = Ti(r), a !== null) {
								if (t === null) {
									if (!l) throw Error(F(318));
									if (!Hn) throw Error(F(556));
									if (t = r.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(F(557));
									zh(t, r);
								} else _a(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
								we(r), t = !1;
							} else a = Dl(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
							if (!t) return r.flags & 256 ? (ht(r), r) : (ht(r), null);
							if ((r.flags & 128) !== 0) throw Error(F(558));
						}
						return we(r), null;
					case 13:
						if (l = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
							if (c = Ti(r), l !== null && l.dehydrated !== null) {
								if (t === null) {
									if (!c) throw Error(F(318));
									if (!Hn) throw Error(F(344));
									if (c = r.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(F(317));
									Hf(c, r);
								} else _a(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
								we(r), c = !1;
							} else c = Dl(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = c), c = !0;
							if (!c) return r.flags & 256 ? (ht(r), r) : (ht(r), null);
						}
						return ht(r), (r.flags & 128) !== 0 ? (r.lanes = a, r) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = r.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool), d = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool), d !== c && (l.flags |= 2048)), a !== t && a && (r.child.flags |= 8192), Ba(r, r.updateQueue), we(r), null);
					case 4: return Xo(), Qu(t, r), t === null && jm(r.stateNode.containerInfo), we(r), null;
					case 10: return En(r.type), we(r), null;
					case 19:
						if (D(ln), l = r.memoizedState, l === null) return we(r), null;
						if (c = (r.flags & 128) !== 0, d = l.rendering, d === null) if (c) Co(l, !1);
						else {
							if (Xe !== 0 || t !== null && (t.flags & 128) !== 0) for (t = r.child; t !== null;) {
								if (d = ko(t), d !== null) {
									for (r.flags |= 128, Co(l, !1), t = d.updateQueue, r.updateQueue = t, Ba(r, t), r.subtreeFlags = 0, t = a, a = r.child; a !== null;) yf(a, t), a = a.sibling;
									return Ce(ln, ln.current & 1 | 2), ue && or(r, l.treeForkCount), r.child;
								}
								t = t.sibling;
							}
							l.tail !== null && ze() > ml && (r.flags |= 128, c = !0, Co(l, !1), r.lanes = 4194304);
						}
						else {
							if (!c) if (t = ko(d), t !== null) {
								if (r.flags |= 128, c = !0, t = t.updateQueue, r.updateQueue = t, Ba(r, t), Co(l, !0), l.tail === null && l.tailMode === "hidden" && !d.alternate && !ue) return we(r), null;
							} else 2 * ze() - l.renderingStartTime > ml && a !== 536870912 && (r.flags |= 128, c = !0, Co(l, !1), r.lanes = 4194304);
							l.isBackwards ? (d.sibling = r.child, r.child = d) : (t = l.last, t !== null ? t.sibling = d : r.child = d, l.last = d);
						}
						return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ze(), t.sibling = null, a = ln.current, Ce(ln, c ? a & 1 | 2 : a & 1), ue && or(r, l.treeForkCount), t) : (we(r), null);
					case 22:
					case 23: return ht(r), bo(), l = r.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (r.flags |= 8192) : l && (r.flags |= 8192), l ? a & 536870912 && !(r.flags & 128) && (we(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : we(r), a = r.updateQueue, a !== null && Ba(r, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (l = r.memoizedState.cachePool.pool), l !== a && (r.flags |= 2048), t !== null && D(ha), null;
					case 24: return a = null, t !== null && (a = t.memoizedState.cache), r.memoizedState.cache !== a && (r.flags |= 2048), En(qe), we(r), null;
					case 25: return null;
					case 30: return null;
				}
				throw Error(F(156, r.tag));
			}
			function gr(t, r) {
				switch (gu(r), r.tag) {
					case 1: return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 3: return En(qe), Xo(), t = r.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128, r) : null;
					case 26:
					case 27:
					case 5: return jl(r), null;
					case 31:
						if (r.memoizedState !== null) {
							if (ht(r), r.alternate === null) throw Error(F(340));
							_a();
						}
						return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 13:
						if (ht(r), t = r.memoizedState, t !== null && t.dehydrated !== null) {
							if (r.alternate === null) throw Error(F(340));
							_a();
						}
						return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 19: return D(ln), null;
					case 4: return Xo(), null;
					case 10: return En(r.type), null;
					case 22:
					case 23: return ht(r), bo(), t !== null && D(ha), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 24: return En(qe), null;
					case 25: return null;
					default: return null;
				}
			}
			function $u(t, r) {
				switch (gu(r), r.tag) {
					case 3:
						En(qe), Xo();
						break;
					case 26:
					case 27:
					case 5:
						jl(r);
						break;
					case 4:
						Xo();
						break;
					case 31:
						r.memoizedState !== null && ht(r);
						break;
					case 13:
						ht(r);
						break;
					case 19:
						D(ln);
						break;
					case 10:
						En(r.type);
						break;
					case 22:
					case 23:
						ht(r), bo(), t !== null && D(ha);
						break;
					case 24: En(qe);
				}
			}
			function Br(t, r) {
				try {
					var a = r.updateQueue, l = a !== null ? a.lastEffect : null;
					if (l !== null) {
						var c = l.next;
						a = c;
						do {
							if ((a.tag & t) === t) {
								l = void 0;
								var d = a.create, h = a.inst;
								l = d(), h.destroy = l;
							}
							a = a.next;
						} while (a !== c);
					}
				} catch (y) {
					ve(r, r.return, y);
				}
			}
			function Or(t, r, a) {
				try {
					var l = r.updateQueue, c = l !== null ? l.lastEffect : null;
					if (c !== null) {
						var d = c.next;
						l = d;
						do {
							if ((l.tag & t) === t) {
								var h = l.inst, y = h.destroy;
								if (y !== void 0) {
									h.destroy = void 0, c = r;
									var R = a, L = y;
									try {
										L();
									} catch (j) {
										ve(c, R, j);
									}
								}
							}
							l = l.next;
						} while (l !== d);
					}
				} catch (j) {
					ve(r, r.return, j);
				}
			}
			function Qi(t) {
				var r = t.updateQueue;
				if (r !== null) {
					var a = t.stateNode;
					try {
						Fp(r, a);
					} catch (l) {
						ve(t, t.return, l);
					}
				}
			}
			function Vu(t, r, a) {
				a.props = Wr(t.type, t.memoizedProps), a.state = t.memoizedState;
				try {
					a.componentWillUnmount();
				} catch (l) {
					ve(t, r, l);
				}
			}
			function ta(t, r) {
				try {
					var a = t.ref;
					if (a !== null) {
						switch (t.tag) {
							case 26:
							case 27:
							case 5:
								var l = Ts(t.stateNode);
								break;
							case 30:
								l = t.stateNode;
								break;
							default: l = t.stateNode;
						}
						typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
					}
				} catch (c) {
					ve(t, r, c);
				}
			}
			function yr(t, r) {
				var a = t.ref, l = t.refCleanup;
				if (a !== null) if (typeof l == "function") try {
					l();
				} catch (c) {
					ve(t, r, c);
				} finally {
					t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
				}
				else if (typeof a == "function") try {
					a(null);
				} catch (c) {
					ve(t, r, c);
				}
				else a.current = null;
			}
			function nf(t) {
				var r = t.type, a = t.memoizedProps, l = t.stateNode;
				try {
					dh(l, r, a, t);
				} catch (c) {
					ve(t, t.return, c);
				}
			}
			function qu(t, r, a) {
				try {
					vc(t.stateNode, t.type, a, r, t);
				} catch (l) {
					ve(t, t.return, l);
				}
			}
			function tf(t) {
				return t.tag === 5 || t.tag === 3 || (Gt ? t.tag === 26 : !1) || (dn ? t.tag === 27 && Xa(t.type) : !1) || t.tag === 4;
			}
			function Gu(t) {
				e: for (;;) {
					for (; t.sibling === null;) {
						if (t.return === null || tf(t.return)) return null;
						t = t.return;
					}
					for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
						if (dn && t.tag === 27 && Xa(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
						t.child.return = t, t = t.child;
					}
					if (!(t.flags & 2)) return t.stateNode;
				}
			}
			function fs(t, r, a) {
				var l = t.tag;
				if (l === 5 || l === 6) t = t.stateNode, r ? ph(a, t, r) : ch(a, t);
				else if (l !== 4 && (dn && l === 27 && Xa(t.type) && (a = t.stateNode, r = null), t = t.child, t !== null)) for (fs(t, r, a), t = t.sibling; t !== null;) fs(t, r, a), t = t.sibling;
			}
			function $i(t, r, a) {
				var l = t.tag;
				if (l === 5 || l === 6) t = t.stateNode, r ? fh(a, t, r) : uh(a, t);
				else if (l !== 4 && (dn && l === 27 && Xa(t.type) && (a = t.stateNode), t = t.child, t !== null)) for ($i(t, r, a), t = t.sibling; t !== null;) $i(t, r, a), t = t.sibling;
			}
			function Ju(t, r, a) {
				t = t.containerInfo;
				try {
					bh(t, a);
				} catch (l) {
					ve(r, r.return, l);
				}
			}
			function rf(t) {
				var r = t.stateNode, a = t.memoizedProps;
				try {
					Rc(t.type, a, r, t);
				} catch (l) {
					ve(t, t.return, l);
				}
			}
			function Wp(t, r) {
				for (Am(t.containerInfo), Pn = r; Pn !== null;) if (t = Pn, r = t.child, (t.subtreeFlags & 1028) !== 0 && r !== null) r.return = t, Pn = r;
				else for (; Pn !== null;) {
					t = Pn;
					var a = t.alternate;
					switch (r = t.flags, t.tag) {
						case 0:
							if ((r & 4) !== 0 && (r = t.updateQueue, r = r !== null ? r.events : null, r !== null)) for (var l = 0; l < r.length; l++) {
								var c = r[l];
								c.ref.impl = c.nextImpl;
							}
							break;
						case 11:
						case 15: break;
						case 1:
							if ((r & 1024) !== 0 && a !== null) {
								r = void 0, l = t, c = a.memoizedProps, a = a.memoizedState;
								var d = l.stateNode;
								try {
									var h = Wr(l.type, c);
									r = d.getSnapshotBeforeUpdate(h, a), d.__reactInternalSnapshotBeforeUpdate = r;
								} catch (y) {
									ve(l, l.return, y);
								}
							}
							break;
						case 3:
							r & 1024 && $n && Nt(t.stateNode.containerInfo);
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17: break;
						default: if ((r & 1024) !== 0) throw Error(F(163));
					}
					if (r = t.sibling, r !== null) {
						r.return = t.return, Pn = r;
						break;
					}
					Pn = t.return;
				}
			}
			function of(t, r, a) {
				var l = a.flags;
				switch (a.tag) {
					case 0:
					case 11:
					case 15:
						$t(t, a), l & 4 && Br(5, a);
						break;
					case 1:
						if ($t(t, a), l & 4) if (t = a.stateNode, r === null) try {
							t.componentDidMount();
						} catch (h) {
							ve(a, a.return, h);
						}
						else {
							var c = Wr(a.type, r.memoizedProps);
							r = r.memoizedState;
							try {
								t.componentDidUpdate(c, r, t.__reactInternalSnapshotBeforeUpdate);
							} catch (h) {
								ve(a, a.return, h);
							}
						}
						l & 64 && Qi(a), l & 512 && ta(a, a.return);
						break;
					case 3:
						if ($t(t, a), l & 64 && (l = a.updateQueue, l !== null)) {
							if (t = null, a.child !== null) switch (a.child.tag) {
								case 27:
								case 5:
									t = Ts(a.child.stateNode);
									break;
								case 1: t = a.child.stateNode;
							}
							try {
								Fp(l, t);
							} catch (h) {
								ve(a, a.return, h);
							}
						}
						break;
					case 27: dn && r === null && l & 4 && rf(a);
					case 26:
					case 5:
						if ($t(t, a), r === null) {
							if (l & 4) nf(a);
							else if (l & 64) {
								t = a.type, r = a.memoizedProps, c = a.stateNode;
								try {
									_h(c, t, r, a);
								} catch (h) {
									ve(a, a.return, h);
								}
							}
						}
						l & 512 && ta(a, a.return);
						break;
					case 12:
						$t(t, a);
						break;
					case 31:
						$t(t, a), l & 4 && af(t, a);
						break;
					case 13:
						$t(t, a), l & 4 && Yu(t, a), l & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = sc.bind(null, a), Xi(l, a))));
						break;
					case 22:
						if (l = a.memoizedState !== null || eo, !l) {
							r = r !== null && r.memoizedState !== null || sn, c = eo;
							var d = sn;
							eo = l, (sn = r) && !d ? br(t, a, (a.subtreeFlags & 8772) !== 0) : $t(t, a), eo = c, sn = d;
						}
						break;
					case 30: break;
					default: $t(t, a);
				}
			}
			function Up(t) {
				var r = t.alternate;
				r !== null && (t.alternate = null, Up(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && th(r)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
			}
			function Qt(t, r, a) {
				for (a = a.child; a !== null;) Zu(t, r, a), a = a.sibling;
			}
			function Zu(t, r, a) {
				if (on && typeof on.onCommitFiberUnmount == "function") try {
					on.onCommitFiberUnmount(ei, a);
				} catch {}
				switch (a.tag) {
					case 26: if (Gt) {
						sn || yr(a, r), Qt(t, r, a), a.memoizedState ? Hh(a.memoizedState) : a.stateNode && Wf(a.stateNode);
						break;
					}
					case 27: if (dn) {
						sn || yr(a, r);
						var l = mn, c = Pt;
						Xa(a.type) && (mn = a.stateNode, Pt = !1), Qt(t, r, a), fa(a.stateNode), mn = l, Pt = c;
						break;
					}
					case 5: sn || yr(a, r);
					case 6:
						if ($n) {
							if (l = mn, c = Pt, mn = null, Qt(t, r, a), mn = l, Pt = c, mn !== null) if (Pt) try {
								If(mn, a.stateNode);
							} catch (d) {
								ve(a, r, d);
							}
							else try {
								Ef(mn, a.stateNode);
							} catch (d) {
								ve(a, r, d);
							}
						} else Qt(t, r, a);
						break;
					case 18:
						$n && mn !== null && (Pt ? Af(mn, a.stateNode) : Se(mn, a.stateNode));
						break;
					case 4:
						$n ? (l = mn, c = Pt, mn = a.stateNode.containerInfo, Pt = !0, Qt(t, r, a), mn = l, Pt = c) : (Sr && Ju(a.stateNode, a, We()), Qt(t, r, a));
						break;
					case 0:
					case 11:
					case 14:
					case 15:
						Or(2, a, r), sn || Or(4, a, r), Qt(t, r, a);
						break;
					case 1:
						sn || (yr(a, r), l = a.stateNode, typeof l.componentWillUnmount == "function" && Vu(a, r, l)), Qt(t, r, a);
						break;
					case 21:
						Qt(t, r, a);
						break;
					case 22:
						sn = (l = sn) || a.memoizedState !== null, Qt(t, r, a), sn = l;
						break;
					default: Qt(t, r, a);
				}
			}
			function af(t, r) {
				if (Hn && r.memoizedState === null && (t = r.alternate, t !== null && (t = t.memoizedState, t !== null))) {
					t = t.dehydrated;
					try {
						Rh(t);
					} catch (a) {
						ve(r, r.return, a);
					}
				}
			}
			function Yu(t, r) {
				if (Hn && r.memoizedState === null && (t = r.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
					el(t);
				} catch (a) {
					ve(r, r.return, a);
				}
			}
			function Bp(t) {
				switch (t.tag) {
					case 31:
					case 13:
					case 19:
						var r = t.stateNode;
						return r === null && (r = t.stateNode = new $c()), r;
					case 22: return t = t.stateNode, r = t._retryCache, r === null && (r = t._retryCache = new $c()), r;
					default: throw Error(F(435, t.tag));
				}
			}
			function ps(t, r) {
				var a = Bp(t);
				r.forEach(function(l) {
					if (!a.has(l)) {
						a.add(l);
						var c = Zp.bind(null, t, l);
						l.then(c, c);
					}
				});
			}
			function tn(t, r) {
				var a = r.deletions;
				if (a !== null) for (var l = 0; l < a.length; l++) {
					var c = a[l], d = t, h = r;
					if ($n) {
						var y = h;
						e: for (; y !== null;) {
							switch (y.tag) {
								case 27: if (dn) {
									if (Xa(y.type)) {
										mn = y.stateNode, Pt = !1;
										break e;
									}
									break;
								}
								case 5:
									mn = y.stateNode, Pt = !1;
									break e;
								case 3:
								case 4:
									mn = y.stateNode.containerInfo, Pt = !0;
									break e;
							}
							y = y.return;
						}
						if (mn === null) throw Error(F(160));
						Zu(d, h, c), mn = null, Pt = !1;
					} else Zu(d, h, c);
					d = c.alternate, d !== null && (d.return = null), c.return = null;
				}
				if (r.subtreeFlags & 13886) for (r = r.child; r !== null;) hs(r, t), r = r.sibling;
			}
			function hs(t, r) {
				var a = t.alternate, l = t.flags;
				switch (t.tag) {
					case 0:
					case 11:
					case 14:
					case 15:
						tn(r, t), Mn(t), l & 4 && (Or(3, t, t.return), Br(3, t), Or(5, t, t.return));
						break;
					case 1:
						tn(r, t), Mn(t), l & 512 && (sn || a === null || yr(a, a.return)), l & 64 && eo && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
						break;
					case 26: if (Gt) {
						var c = Cr;
						if (tn(r, t), Mn(t), l & 512 && (sn || a === null || yr(a, a.return)), l & 4) {
							l = a !== null ? a.memoizedState : null;
							var d = t.memoizedState;
							a === null ? d === null ? t.stateNode === null ? t.stateNode = Ya(c, t.type, t.memoizedProps, t) : Cc(c, t.type, t.stateNode) : t.stateNode = Fh(c, d, t.memoizedProps) : l !== d ? (l === null ? a.stateNode !== null && Wf(a.stateNode) : Hh(l), d === null ? Cc(c, t.type, t.stateNode) : Fh(c, d, t.memoizedProps)) : d === null && t.stateNode !== null && qu(t, t.memoizedProps, a.memoizedProps);
						}
						break;
					}
					case 27: if (dn) {
						tn(r, t), Mn(t), l & 512 && (sn || a === null || yr(a, a.return)), a !== null && l & 4 && qu(t, t.memoizedProps, a.memoizedProps);
						break;
					}
					case 5:
						if (tn(r, t), Mn(t), l & 512 && (sn || a === null || yr(a, a.return)), $n) {
							if (t.flags & 32) {
								c = t.stateNode;
								try {
									Sc(c);
								} catch (A) {
									ve(t, t.return, A);
								}
							}
							l & 4 && t.stateNode != null && (c = t.memoizedProps, qu(t, c, a !== null ? a.memoizedProps : c)), l & 1024 && (Ms = !0);
						} else Sr && t.alternate !== null && (t.alternate.stateNode = t.stateNode);
						break;
					case 6:
						if (tn(r, t), Mn(t), l & 4 && $n) {
							if (t.stateNode === null) throw Error(F(162));
							l = t.memoizedProps, a = a !== null ? a.memoizedProps : l, c = t.stateNode;
							try {
								Is(c, a, l);
							} catch (A) {
								ve(t, t.return, A);
							}
						}
						break;
					case 3:
						if (Gt ? (jh(), c = Cr, Cr = zc(r.containerInfo), tn(r, t), Cr = c) : tn(r, t), Mn(t), l & 4) {
							if ($n && Hn && a !== null && a.memoizedState.isDehydrated) try {
								Mm(r.containerInfo);
							} catch (A) {
								ve(t, t.return, A);
							}
							if (Sr) {
								l = r.containerInfo, a = r.pendingChildren;
								try {
									bh(l, a);
								} catch (A) {
									ve(t, t.return, A);
								}
							}
						}
						Ms && (Ms = !1, Op(t));
						break;
					case 4:
						Gt ? (a = Cr, Cr = zc(t.stateNode.containerInfo), tn(r, t), Mn(t), Cr = a) : (tn(r, t), Mn(t)), l & 4 && Sr && Ju(t.stateNode, t, t.stateNode.pendingChildren);
						break;
					case 12:
						tn(r, t), Mn(t);
						break;
					case 31:
						tn(r, t), Mn(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ps(t, l)));
						break;
					case 13:
						tn(r, t), Mn(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Vs = ze()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ps(t, l)));
						break;
					case 22:
						c = t.memoizedState !== null;
						var h = a !== null && a.memoizedState !== null, y = eo, R = sn;
						if (eo = y || c, sn = R || h, tn(r, t), sn = R, eo = y, Mn(t), l & 8192 && (r = t.stateNode, r._visibility = c ? r._visibility & -2 : r._visibility | 1, c && (a === null || h || eo || sn || Vt(t)), $n)) {
							e: if (a = null, $n) for (r = t;;) {
								if (r.tag === 5 || Gt && r.tag === 26) {
									if (a === null) {
										h = a = r;
										try {
											d = h.stateNode, c ? hh(d) : Wm(h.stateNode, h.memoizedProps);
										} catch (A) {
											ve(h, h.return, A);
										}
									}
								} else if (r.tag === 6) {
									if (a === null) {
										h = r;
										try {
											var L = h.stateNode;
											c ? kc(L) : mh(L, h.memoizedProps);
										} catch (A) {
											ve(h, h.return, A);
										}
									}
								} else if (r.tag === 18) {
									if (a === null) {
										h = r;
										try {
											var j = h.stateNode;
											c ? Qm(j) : Lh(h.stateNode);
										} catch (A) {
											ve(h, h.return, A);
										}
									}
								} else if ((r.tag !== 22 && r.tag !== 23 || r.memoizedState === null || r === t) && r.child !== null) {
									r.child.return = r, r = r.child;
									continue;
								}
								if (r === t) break e;
								for (; r.sibling === null;) {
									if (r.return === null || r.return === t) break e;
									a === r && (a = null), r = r.return;
								}
								a === r && (a = null), r.sibling.return = r.return, r = r.sibling;
							}
						}
						l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, ps(t, a))));
						break;
					case 19:
						tn(r, t), Mn(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ps(t, l)));
						break;
					case 30: break;
					case 21: break;
					default: tn(r, t), Mn(t);
				}
			}
			function Mn(t) {
				var r = t.flags;
				if (r & 2) {
					try {
						for (var a, l = t.return; l !== null;) {
							if (tf(l)) {
								a = l;
								break;
							}
							l = l.return;
						}
						if ($n) {
							if (a == null) throw Error(F(160));
							switch (a.tag) {
								case 27: if (dn) {
									var c = a.stateNode;
									$i(t, Gu(t), c);
									break;
								}
								case 5:
									var h = a.stateNode;
									a.flags & 32 && (Sc(h), a.flags &= -33);
									$i(t, Gu(t), h);
									break;
								case 3:
								case 4:
									var R = a.stateNode.containerInfo;
									fs(t, Gu(t), R);
									break;
								default: throw Error(F(161));
							}
						}
					} catch (j) {
						ve(t, t.return, j);
					}
					t.flags &= -3;
				}
				r & 4096 && (t.flags &= -4097);
			}
			function Op(t) {
				if (t.subtreeFlags & 1024) for (t = t.child; t !== null;) {
					var r = t;
					Op(r), r.tag === 5 && r.flags & 1024 && qa(r.stateNode), t = t.sibling;
				}
			}
			function $t(t, r) {
				if (r.subtreeFlags & 8772) for (r = r.child; r !== null;) of(t, r.alternate, r), r = r.sibling;
			}
			function Vt(t) {
				for (t = t.child; t !== null;) {
					var r = t;
					switch (r.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							Or(4, r, r.return), Vt(r);
							break;
						case 1:
							yr(r, r.return);
							var a = r.stateNode;
							typeof a.componentWillUnmount == "function" && Vu(r, r.return, a), Vt(r);
							break;
						case 27: dn && fa(r.stateNode);
						case 26:
						case 5:
							yr(r, r.return), Vt(r);
							break;
						case 22:
							r.memoizedState === null && Vt(r);
							break;
						case 30:
							Vt(r);
							break;
						default: Vt(r);
					}
					t = t.sibling;
				}
			}
			function br(t, r, a) {
				for (a = a && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null;) {
					var l = r.alternate, c = t, d = r, h = d.flags;
					switch (d.tag) {
						case 0:
						case 11:
						case 15:
							br(c, d, a), Br(4, d);
							break;
						case 1:
							if (br(c, d, a), l = d, c = l.stateNode, typeof c.componentDidMount == "function") try {
								c.componentDidMount();
							} catch (L) {
								ve(l, l.return, L);
							}
							if (l = d, c = l.updateQueue, c !== null) {
								var y = l.stateNode;
								try {
									var R = c.shared.hiddenCallbacks;
									if (R !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++) Dd(R[c], y);
								} catch (L) {
									ve(l, l.return, L);
								}
							}
							a && h & 64 && Qi(d), ta(d, d.return);
							break;
						case 27: dn && rf(d);
						case 26:
						case 5:
							br(c, d, a), a && l === null && h & 4 && nf(d), ta(d, d.return);
							break;
						case 12:
							br(c, d, a);
							break;
						case 31:
							br(c, d, a), a && h & 4 && af(c, d);
							break;
						case 13:
							br(c, d, a), a && h & 4 && Yu(c, d);
							break;
						case 22:
							d.memoizedState === null && br(c, d, a), ta(d, d.return);
							break;
						case 30: break;
						default: br(c, d, a);
					}
					r = r.sibling;
				}
			}
			function To(t, r) {
				var a = null;
				t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (t = r.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Ra(a));
			}
			function Qn(t, r) {
				t = null, r.alternate !== null && (t = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== t && (r.refCount++, t != null && Ra(t));
			}
			function yt(t, r, a, l) {
				if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) Mp(t, r, a, l), r = r.sibling;
			}
			function Mp(t, r, a, l) {
				var c = r.flags;
				switch (r.tag) {
					case 0:
					case 11:
					case 15:
						yt(t, r, a, l), c & 2048 && Br(9, r);
						break;
					case 1:
						yt(t, r, a, l);
						break;
					case 3:
						yt(t, r, a, l), c & 2048 && (t = null, r.alternate !== null && (t = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== t && (r.refCount++, t != null && Ra(t)));
						break;
					case 12:
						if (c & 2048) {
							yt(t, r, a, l), t = r.stateNode;
							try {
								var d = r.memoizedProps, h = d.id, y = d.onPostCommit;
								typeof y == "function" && y(h, r.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
							} catch (R) {
								ve(r, r.return, R);
							}
						} else yt(t, r, a, l);
						break;
					case 31:
						yt(t, r, a, l);
						break;
					case 13:
						yt(t, r, a, l);
						break;
					case 23: break;
					case 22:
						d = r.stateNode, h = r.alternate, r.memoizedState !== null ? d._visibility & 2 ? yt(t, r, a, l) : oa(t, r) : d._visibility & 2 ? yt(t, r, a, l) : (d._visibility |= 2, ra(t, r, a, l, (r.subtreeFlags & 10256) !== 0 || !1)), c & 2048 && To(h, r);
						break;
					case 24:
						yt(t, r, a, l), c & 2048 && Qn(r.alternate, r);
						break;
					default: yt(t, r, a, l);
				}
			}
			function ra(t, r, a, l, c) {
				for (c = c && ((r.subtreeFlags & 10256) !== 0 || !1), r = r.child; r !== null;) {
					var d = t, h = r, y = a, R = l, L = h.flags;
					switch (h.tag) {
						case 0:
						case 11:
						case 15:
							ra(d, h, y, R, c), Br(8, h);
							break;
						case 23: break;
						case 22:
							var j = h.stateNode;
							h.memoizedState !== null ? j._visibility & 2 ? ra(d, h, y, R, c) : oa(d, h) : (j._visibility |= 2, ra(d, h, y, R, c)), c && L & 2048 && To(h.alternate, h);
							break;
						case 24:
							ra(d, h, y, R, c), c && L & 2048 && Qn(h.alternate, h);
							break;
						default: ra(d, h, y, R, c);
					}
					r = r.sibling;
				}
			}
			function oa(t, r) {
				if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) {
					var a = t, l = r, c = l.flags;
					switch (l.tag) {
						case 22:
							oa(a, l), c & 2048 && To(l.alternate, l);
							break;
						case 24:
							oa(a, l), c & 2048 && Qn(l.alternate, l);
							break;
						default: oa(a, l);
					}
					r = r.sibling;
				}
			}
			function _o(t, r, a) {
				if (t.subtreeFlags & ga) for (t = t.child; t !== null;) lf(t, r, a), t = t.sibling;
			}
			function lf(t, r, a) {
				switch (t.tag) {
					case 26:
						if (_o(t, r, a), t.flags & ga) if (t.memoizedState !== null) Fo(a, Cr, t.memoizedState, t.memoizedProps);
						else {
							var l = t.stateNode, c = t.type;
							t = t.memoizedProps, ((r & 335544128) === r || Yi(c, t)) && Vn(a, l, c, t);
						}
						break;
					case 5:
						_o(t, r, a), t.flags & ga && (l = t.stateNode, c = t.type, t = t.memoizedProps, ((r & 335544128) === r || Yi(c, t)) && Vn(a, l, c, t));
						break;
					case 3:
					case 4:
						Gt ? (l = Cr, Cr = zc(t.stateNode.containerInfo), _o(t, r, a), Cr = l) : _o(t, r, a);
						break;
					case 22:
						t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = ga, ga = 16777216, _o(t, r, a), ga = l) : _o(t, r, a));
						break;
					default: _o(t, r, a);
				}
			}
			function Xu(t) {
				var r = t.alternate;
				if (r !== null && (t = r.child, t !== null)) {
					r.child = null;
					do
						r = t.sibling, t.sibling = null, t = r;
					while (t !== null);
				}
			}
			function aa(t) {
				var r = t.deletions;
				if ((t.flags & 16) !== 0) {
					if (r !== null) for (var a = 0; a < r.length; a++) {
						var l = r[a];
						Pn = l, ec(l, t);
					}
					Xu(t);
				}
				if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Ku(t), t = t.sibling;
			}
			function Ku(t) {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						aa(t), t.flags & 2048 && Or(9, t, t.return);
						break;
					case 3:
						aa(t);
						break;
					case 12:
						aa(t);
						break;
					case 22:
						var r = t.stateNode;
						t.memoizedState !== null && r._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (r._visibility &= -3, Ma(t)) : aa(t);
						break;
					default: aa(t);
				}
			}
			function Ma(t) {
				var r = t.deletions;
				if ((t.flags & 16) !== 0) {
					if (r !== null) for (var a = 0; a < r.length; a++) {
						var l = r[a];
						Pn = l, ec(l, t);
					}
					Xu(t);
				}
				for (t = t.child; t !== null;) {
					switch (r = t, r.tag) {
						case 0:
						case 11:
						case 15:
							Or(8, r, r.return), Ma(r);
							break;
						case 22:
							a = r.stateNode, a._visibility & 2 && (a._visibility &= -3, Ma(r));
							break;
						default: Ma(r);
					}
					t = t.sibling;
				}
			}
			function ec(t, r) {
				for (; Pn !== null;) {
					var a = Pn;
					switch (a.tag) {
						case 0:
						case 11:
						case 15:
							Or(8, a, r);
							break;
						case 23:
						case 22:
							if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
								var l = a.memoizedState.cachePool.pool;
								l != null && l.refCount++;
							}
							break;
						case 24: Ra(a.memoizedState.cache);
					}
					if (l = a.child, l !== null) l.return = a, Pn = l;
					else e: for (a = t; Pn !== null;) {
						l = Pn;
						var c = l.sibling, d = l.return;
						if (Up(l), l === a) {
							Pn = null;
							break e;
						}
						if (c !== null) {
							c.return = d, Pn = c;
							break e;
						}
						Pn = d;
					}
				}
			}
			function Vi(t) {
				var r = nh(t);
				if (r != null) {
					if (typeof r.memoizedProps["data-testname"] != "string") throw Error(F(364));
					return r;
				}
				if (t = Rf(t), t === null) throw Error(F(362));
				return t.stateNode.current;
			}
			function ms(t, r) {
				var a = t.tag;
				switch (r.$$typeof) {
					case Vc:
						if (t.type === r.value) return !0;
						break;
					case qc:
						e: {
							for (r = r.value, t = [t, 0], a = 0; a < t.length;) {
								var l = t[a++], c = l.tag, d = t[a++], h = r[d];
								if (c !== 5 && c !== 26 && c !== 27 || !Jr(l)) {
									for (; h != null && ms(l, h);) d++, h = r[d];
									if (d === r.length) {
										r = !0;
										break e;
									} else for (l = l.child; l !== null;) t.push(l, d), l = l.sibling;
								}
							}
							r = !1;
						}
						return r;
					case Gc:
						if ((a === 5 || a === 26 || a === 27) && sh(t.stateNode, r.value)) return !0;
						break;
					case Zc:
						if ((a === 5 || a === 6 || a === 26 || a === 27) && (t = lh(t), t !== null && 0 <= t.indexOf(r.value))) return !0;
						break;
					case Jc:
						if ((a === 5 || a === 26 || a === 27) && (t = t.memoizedProps["data-testname"], typeof t == "string" && t.toLowerCase() === r.value.toLowerCase())) return !0;
						break;
					default: throw Error(F(365));
				}
				return !1;
			}
			function nc(t) {
				switch (t.$$typeof) {
					case Vc: return "<" + (hu(t.value) || "Unknown") + ">";
					case qc: return ":has(" + (nc(t) || "") + ")";
					case Gc: return "[role=\"" + t.value + "\"]";
					case Zc: return "\"" + t.value + "\"";
					case Jc: return "[data-testname=\"" + t.value + "\"]";
					default: throw Error(F(365));
				}
			}
			function sf(t, r) {
				var a = [];
				t = [t, 0];
				for (var l = 0; l < t.length;) {
					var c = t[l++], d = c.tag, h = t[l++], y = r[h];
					if (d !== 5 && d !== 26 && d !== 27 || !Jr(c)) {
						for (; y != null && ms(c, y);) h++, y = r[h];
						if (h === r.length) a.push(c);
						else for (c = c.child; c !== null;) t.push(c, h), c = c.sibling;
					}
				}
				return a;
			}
			function gs(t, r) {
				if (!Ga) throw Error(F(363));
				t = Vi(t), t = sf(t, r), r = [], t = Array.from(t);
				for (var a = 0; a < t.length;) {
					var l = t[a++], c = l.tag;
					if (c === 5 || c === 26 || c === 27) Jr(l) || r.push(l.stateNode);
					else for (l = l.child; l !== null;) t.push(l), l = l.sibling;
				}
				return r;
			}
			function bt() {
				return (ce & 2) !== 0 && he !== 0 ? he & -he : M.T !== null ? ku() : kr();
			}
			function ys() {
				if (At === 0) if ((he & 536870912) === 0 || ue) {
					var t = js;
					js <<= 1, !(js & 3932160) && (js = 262144), At = t;
				} else At = 536870912;
				return t = Ft.current, t !== null && (t.flags |= 32), At;
			}
			function nt(t, r, a) {
				(t === Ne && (_e === 2 || _e === 9) || t.cancelPendingCommit !== null) && (la(t, 0), Ro(t, he, At, !1)), xi(t, a), (!(ce & 2) || t !== Ne) && (t === Ne && (!(ce & 2) && (ii |= a), Xe === 4 && Ro(t, he, At, !1)), ir(t));
			}
			function uf(t, r, a) {
				if ((ce & 6) !== 0) throw Error(F(327));
				var l = !a && (r & 127) === 0 && (r & t.expiredLanes) === 0 || Pi(t, r), c = l ? Gp(t, r) : Ji(t, r, !0), d = l;
				do {
					if (c === 0) {
						ai && !l && Ro(t, r, 0, !1);
						break;
					} else {
						if (a = t.current.alternate, d && !Qp(a)) {
							c = Ji(t, r, !1), d = !1;
							continue;
						}
						if (c === 2) {
							if (d = r, t.errorRecoveryDisabledLanes & d) var h = 0;
							else h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
							if (h !== 0) {
								r = h;
								e: {
									var y = t;
									c = $s;
									var R = Hn && y.current.memoizedState.isDehydrated;
									if (R && (la(y, h).flags |= 256), h = Ji(y, h, !1), h !== 2) {
										if (Gf && !R) {
											y.errorRecoveryDisabledLanes |= d, ii |= d, c = 4;
											break e;
										}
										d = xt, xt = c, d !== null && (xt === null ? xt = d : xt.push.apply(xt, d));
									}
									c = h;
								}
								if (d = !1, c !== 2) continue;
							}
						}
						if (c === 1) {
							la(t, 0), Ro(t, r, 0, !0);
							break;
						}
						e: {
							switch (l = t, d = c, d) {
								case 0:
								case 1: throw Error(F(345));
								case 4: if ((r & 4194048) !== r) break;
								case 6:
									Ro(l, r, At, !ya);
									break e;
								case 2:
									xt = null;
									break;
								case 3:
								case 5: break;
								default: throw Error(F(329));
							}
							if ((r & 62914560) === r && (c = Vs + 300 - ze(), 10 < c)) {
								if (Ro(l, r, At, !ya), Lr(l, 0, !0) !== 0) break e;
								no = r, l.timeoutHandle = eh(tc.bind(null, l, a, xt, Xc, Yc, r, At, ii, hl, ya, d, "Throttled", -0, 0), c);
								break e;
							}
							tc(l, a, xt, Xc, Yc, r, At, ii, hl, ya, d, null, -0, 0);
						}
					}
					break;
				} while (!0);
				ir(t);
			}
			function tc(t, r, a, l, c, d, h, y, R, L, j, A, W, V) {
				if (t.timeoutHandle = Lo, A = r.subtreeFlags, A & 8192 || (A & 16785408) === 16785408) {
					A = oh(), lf(r, d, A);
					var Oe = (d & 62914560) === d ? Vs - ze() : (d & 4194048) === d ? Zf - ze() : 0;
					if (Oe = ah(A, Oe), Oe !== null) {
						no = d, t.cancelPendingCommit = Oe(pf.bind(null, t, r, d, a, l, c, h, y, R, j, A, null, W, V)), Ro(t, d, h, !L);
						return;
					}
				}
				pf(t, r, d, a, l, c, h, y, R);
			}
			function Qp(t) {
				for (var r = t;;) {
					var a = r.tag;
					if ((a === 0 || a === 11 || a === 15) && r.flags & 16384 && (a = r.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) {
						var c = a[l], d = c.getSnapshot;
						c = c.value;
						try {
							if (!jn(d(), c)) return !1;
						} catch {
							return !1;
						}
					}
					if (a = r.child, r.subtreeFlags & 16384 && a !== null) a.return = r, r = a;
					else {
						if (r === t) break;
						for (; r.sibling === null;) {
							if (r.return === null || r.return === t) return !0;
							r = r.return;
						}
						r.sibling.return = r.return, r = r.sibling;
					}
				}
				return !0;
			}
			function Ro(t, r, a, l) {
				r &= ~Jf, r &= ~ii, t.suspendedLanes |= r, t.pingedLanes &= ~r, l && (t.warmLanes |= r), l = t.expirationTimes;
				for (var c = r; 0 < c;) {
					var d = 31 - vt(c), h = 1 << d;
					l[d] = -1, c &= ~h;
				}
				a !== 0 && Yo(t, a, r);
			}
			function ia() {
				return (ce & 6) === 0 ? (Ea(0, !1), !1) : !0;
			}
			function bs() {
				if (de !== null) {
					if (_e === 0) var t = de.return;
					else t = de, Be = at = null, Vl(t), Kt = null, Bs = 0, t = de;
					for (; t !== null;) $u(t.alternate, t), t = t.return;
					de = null;
				}
			}
			function la(t, r) {
				var a = t.timeoutHandle;
				a !== Lo && (t.timeoutHandle = Lo, Tf(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), no = 0, bs(), Ne = t, de = a = Qr(t.current, null), he = r, _e = 0, Ht = null, ya = !1, ai = Pi(t, r), Gf = !1, hl = At = Jf = ii = ba = Xe = 0, xt = $s = null, Yc = !1, r & 8 && (r |= r & 32);
				var l = t.entangledLanes;
				if (l !== 0) for (t = t.entanglements, l &= r; 0 < l;) {
					var c = 31 - vt(l), d = 1 << c;
					r |= t[c], l &= ~d;
				}
				return Uo = r, Bn(), a;
			}
			function $p(t, r) {
				ne = null, M.H = Os, r === cl || r === jc ? (r = Bl(), _e = 3) : r === Ac ? (r = Bl(), _e = 4) : _e = r === Mc ? 8 : r !== null && typeof r == "object" && typeof r.then == "function" ? 6 : 1, Ht = r, de === null && (Xe = 1, rs(t, ut(r, t.current)));
			}
			function Vp() {
				var t = Ft.current;
				return t === null ? !0 : (he & 4194048) === he ? zr === null : (he & 62914560) === he || (he & 536870912) !== 0 ? t === zr : !1;
			}
			function cf() {
				var t = M.H;
				return M.H = Os, t === null ? Os : t;
			}
			function qi() {
				var t = M.A;
				return M.A = Zm, t;
			}
			function Gi() {
				Xe = 4, ya || (he & 4194048) !== he && Ft.current !== null || (ai = !0), !(ba & 134217727) && !(ii & 134217727) || Ne === null || Ro(Ne, he, At, !1);
			}
			function Ji(t, r, a) {
				var l = ce;
				ce |= 2;
				var c = cf(), d = qi();
				(Ne !== t || he !== r) && (Xc = null, la(t, r)), r = !1;
				var h = Xe;
				e: do
					try {
						if (_e !== 0 && de !== null) {
							var y = de, R = Ht;
							switch (_e) {
								case 8:
									bs(), h = 6;
									break e;
								case 3:
								case 2:
								case 9:
								case 6:
									Ft.current === null && (r = !0);
									var L = _e;
									if (_e = 0, Ht = null, Qa(t, y, R, L), a && ai) {
										h = 0;
										break e;
									}
									break;
								default: L = _e, _e = 0, Ht = null, Qa(t, y, R, L);
							}
						}
						qp(), h = Xe;
						break;
					} catch (j) {
						$p(t, j);
					}
				while (!0);
				return r && t.shellSuspendCounter++, Be = at = null, ce = l, M.H = c, M.A = d, de === null && (Ne = null, he = 0, Bn()), h;
			}
			function qp() {
				for (; de !== null;) rc(de);
			}
			function Gp(t, r) {
				var a = ce;
				ce |= 2;
				var l = cf(), c = qi();
				Ne !== t || he !== r ? (Xc = null, ml = ze() + 500, la(t, r)) : ai = Pi(t, r);
				e: do
					try {
						if (_e !== 0 && de !== null) {
							r = de;
							var d = Ht;
							n: switch (_e) {
								case 1:
									_e = 0, Ht = null, Qa(t, r, d, 1);
									break;
								case 2:
								case 9:
									if (Hd(d)) {
										_e = 0, Ht = null, ff(r);
										break;
									}
									r = function() {
										_e !== 2 && _e !== 9 || Ne !== t || (_e = 7), ir(t);
									}, d.then(r, r);
									break e;
								case 3:
									_e = 7;
									break e;
								case 4:
									_e = 5;
									break e;
								case 7:
									Hd(d) ? (_e = 0, Ht = null, ff(r)) : (_e = 0, Ht = null, Qa(t, r, d, 7));
									break;
								case 5:
									var h = null;
									switch (de.tag) {
										case 26: h = de.memoizedState;
										case 5:
										case 27:
											var y = de, R = y.type, L = y.pendingProps;
											if (h ? Tc(h) : An(y.stateNode, R, L)) {
												_e = 0, Ht = null;
												var j = y.sibling;
												if (j !== null) de = j;
												else {
													var A = y.return;
													A !== null ? (de = A, Mr(A)) : de = null;
												}
												break n;
											}
									}
									_e = 0, Ht = null, Qa(t, r, d, 5);
									break;
								case 6:
									_e = 0, Ht = null, Qa(t, r, d, 6);
									break;
								case 8:
									bs(), Xe = 6;
									break e;
								default: throw Error(F(462));
							}
						}
						df();
						break;
					} catch (W) {
						$p(t, W);
					}
				while (!0);
				return Be = at = null, M.H = l, M.A = c, ce = a, de !== null ? 0 : (Ne = null, he = 0, Bn(), Xe);
			}
			function df() {
				for (; de !== null && !qm();) rc(de);
			}
			function rc(t) {
				var r = Bu(t.alternate, t, Uo);
				t.memoizedProps = t.pendingProps, r === null ? Mr(t) : de = r;
			}
			function ff(t) {
				var r = t, a = r.alternate;
				switch (r.tag) {
					case 15:
					case 0:
						r = Xd(a, r, r.pendingProps, r.type, void 0, he);
						break;
					case 11:
						r = Xd(a, r, r.pendingProps, r.type.render, r.ref, he);
						break;
					case 5: Vl(r);
					default: $u(a, r), r = de = yf(r, Uo), r = Bu(a, r, Uo);
				}
				t.memoizedProps = t.pendingProps, r === null ? Mr(t) : de = r;
			}
			function Qa(t, r, a, l) {
				Be = at = null, Vl(r), Kt = null, Bs = 0;
				var c = r.return;
				try {
					if (On(t, c, r, a, he)) {
						Xe = 1, rs(t, ut(a, t.current)), de = null;
						return;
					}
				} catch (d) {
					if (c !== null) throw de = c, d;
					Xe = 1, rs(t, ut(a, t.current)), de = null;
					return;
				}
				r.flags & 32768 ? (ue || l === 1 ? t = !0 : ai || (he & 536870912) !== 0 ? t = !1 : (ya = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ft.current, l !== null && l.tag === 13 && (l.flags |= 16384))), vs(r, t)) : Mr(r);
			}
			function Mr(t) {
				var r = t;
				do {
					if ((r.flags & 32768) !== 0) {
						vs(r, ya);
						return;
					}
					t = r.return;
					var a = Oa(r.alternate, r, Uo);
					if (a !== null) {
						de = a;
						return;
					}
					if (r = r.sibling, r !== null) {
						de = r;
						return;
					}
					de = r = t;
				} while (r !== null);
				Xe === 0 && (Xe = 5);
			}
			function vs(t, r) {
				do {
					var a = gr(t.alternate, t);
					if (a !== null) {
						a.flags &= 32767, de = a;
						return;
					}
					if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !r && (t = t.sibling, t !== null)) {
						de = t;
						return;
					}
					de = t = a;
				} while (t !== null);
				Xe = 6, de = null;
			}
			function pf(t, r, a, l, c, d, h, y, R) {
				t.cancelPendingCommit = null;
				do
					rn();
				while (Re !== 0);
				if ((ce & 6) !== 0) throw Error(F(327));
				if (r !== null) {
					if (r === t.current) throw Error(F(177));
					if (d = r.lanes | r.childLanes, d |= $f, _p(t, a, d, h, y, R), t === Ne && (de = Ne = null, he = 0), Sa = r, Bo = t, no = a, Kc = d, ed = c, $h = l, (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Nm(Ao, function() {
						return hf(), null;
					})) : (t.callbackNode = null, t.callbackPriority = 0), l = (r.flags & 13878) !== 0, (r.subtreeFlags & 13878) !== 0 || l) {
						l = M.T, M.T = null, c = qr(), yn(2), h = ce, ce |= 4;
						try {
							Wp(t, r, a);
						} finally {
							ce = h, yn(c), M.T = l;
						}
					}
					Re = 1, oc(), ac(), ic();
				}
			}
			function oc() {
				if (Re === 1) {
					Re = 0;
					var t = Bo, r = Sa, a = (r.flags & 13878) !== 0;
					if ((r.subtreeFlags & 13878) !== 0 || a) {
						a = M.T, M.T = null;
						var l = qr();
						yn(2);
						var c = ce;
						ce |= 4;
						try {
							hs(r, t), _s(t.containerInfo);
						} finally {
							ce = c, yn(l), M.T = a;
						}
					}
					t.current = r, Re = 2;
				}
			}
			function ac() {
				if (Re === 2) {
					Re = 0;
					var t = Bo, r = Sa, a = (r.flags & 8772) !== 0;
					if ((r.subtreeFlags & 8772) !== 0 || a) {
						a = M.T, M.T = null;
						var l = qr();
						yn(2);
						var c = ce;
						ce |= 4;
						try {
							of(t, r.alternate, r);
						} finally {
							ce = c, yn(l), M.T = a;
						}
					}
					Re = 3;
				}
			}
			function ic() {
				if (Re === 4 || Re === 3) {
					Re = 0, St();
					var t = Bo, r = Sa, a = no, l = $h;
					(r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0 ? Re = 5 : (Re = 0, Sa = Bo = null, Jp(t, t.pendingLanes));
					var c = t.pendingLanes;
					if (c === 0 && (va = null), Ze(a), r = r.stateNode, on && typeof on.onCommitFiberRoot == "function") try {
						on.onCommitFiberRoot(ei, r, void 0, (r.current.flags & 128) === 128);
					} catch {}
					if (l !== null) {
						r = M.T, c = qr(), yn(2), M.T = null;
						try {
							for (var d = t.onRecoverableError, h = 0; h < l.length; h++) {
								var y = l[h];
								d(y.value, { componentStack: y.stack });
							}
						} finally {
							M.T = r, yn(c);
						}
					}
					no & 3 && rn(), ir(t), c = t.pendingLanes, (a & 261930) !== 0 && (c & 42) !== 0 ? t === nd ? gl++ : (gl = 0, nd = t) : gl = 0, Hn && Ih(), Ea(0, !1);
				}
			}
			function Jp(t, r) {
				(t.pooledCacheLanes &= r) === 0 && (r = t.pooledCache, r != null && (t.pooledCache = null, Ra(r)));
			}
			function rn() {
				return oc(), ac(), ic(), hf();
			}
			function hf() {
				if (Re !== 5) return !1;
				var t = Bo, r = Kc;
				Kc = 0;
				var a = Ze(no), l = 32 > a ? 32 : a;
				a = M.T;
				var c = qr();
				try {
					yn(l), M.T = null, l = ed, ed = null;
					var d = Bo, h = no;
					if (Re = 0, Sa = Bo = null, no = 0, (ce & 6) !== 0) throw Error(F(331));
					var y = ce;
					if (ce |= 4, Ku(d.current), Mp(d, d.current, h, l), ce = y, Ea(0, !1), on && typeof on.onPostCommitFiberRoot == "function") try {
						on.onPostCommitFiberRoot(ei, d);
					} catch {}
					return !0;
				} finally {
					yn(c), M.T = a, Jp(t, r);
				}
			}
			function mf(t, r, a) {
				r = ut(a, r), r = Ui(t.stateNode, r, 2), t = Nr(t, r, 2), t !== null && (xi(t, 2), ir(t));
			}
			function ve(t, r, a) {
				if (t.tag === 3) mf(t, t, a);
				else for (; r !== null;) {
					if (r.tag === 3) {
						mf(r, t, a);
						break;
					} else if (r.tag === 1) {
						var l = r.stateNode;
						if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (va === null || !va.has(l))) {
							t = ut(a, t), a = os(2), l = Nr(r, a, 2), l !== null && (Hu(a, l, r, t), xi(l, 2), ir(l));
							break;
						}
					}
					r = r.return;
				}
			}
			function lc(t, r, a) {
				var l = t.pingCache;
				if (l === null) {
					l = t.pingCache = new Ym();
					var c = /* @__PURE__ */ new Set();
					l.set(r, c);
				} else c = l.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(r, c));
				c.has(a) || (Gf = !0, c.add(a), t = Ss.bind(null, t, r, a), r.then(t, t));
			}
			function Ss(t, r, a) {
				var l = t.pingCache;
				l !== null && l.delete(r), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Ne === t && (he & a) === a && (Xe === 4 || Xe === 3 && (he & 62914560) === he && 300 > ze() - Vs ? !(ce & 2) && la(t, 0) : Jf |= a, hl === he && (hl = 0)), ir(t);
			}
			function gf(t, r) {
				r === 0 && (r = Ed()), t = Ko(t, r), t !== null && (xi(t, r), ir(t));
			}
			function sc(t) {
				var r = t.memoizedState, a = 0;
				r !== null && (a = r.retryLane), gf(t, a);
			}
			function Zp(t, r) {
				var a = 0;
				switch (t.tag) {
					case 31:
					case 13:
						var l = t.stateNode, c = t.memoizedState;
						c !== null && (a = c.retryLane);
						break;
					case 19:
						l = t.stateNode;
						break;
					case 22:
						l = t.stateNode._retryCache;
						break;
					default: throw Error(F(314));
				}
				l !== null && l.delete(r), gf(t, a);
			}
			function Nm(t, r) {
				return Ic(t, r);
			}
			function uc(t, r, a, l) {
				this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
			}
			function ks(t) {
				return t = t.prototype, !(!t || !t.isReactComponent);
			}
			function Qr(t, r) {
				var a = t.alternate;
				return a === null ? (a = Yn(t.tag, r, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = r, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, r = t.dependencies, a.dependencies = r === null ? null : {
					lanes: r.lanes,
					firstContext: r.firstContext
				}, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
			}
			function yf(t, r) {
				t.flags &= 65011714;
				var a = t.alternate;
				return a === null ? (t.childLanes = 0, t.lanes = r, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, r = a.dependencies, t.dependencies = r === null ? null : {
					lanes: r.lanes,
					firstContext: r.firstContext
				}), t;
			}
			function ws(t, r, a, l, c, d) {
				var h = 0;
				if (l = t, typeof t == "function") ks(t) && (h = 1);
				else if (typeof t == "string") h = Gt && dn ? Df(t, a, Dn.current) ? 26 : Ec(t) ? 27 : 5 : Gt ? Df(t, a, Dn.current) ? 26 : 5 : dn && Ec(t) ? 27 : 5;
				else e: switch (t) {
					case gc: return t = Yn(31, a, r, c), t.elementType = gc, t.lanes = d, t;
					case $a: return Eo(a.children, c, d, r);
					case kf:
						h = 8, c |= 24;
						break;
					case Cs: return t = Yn(12, a, r, c | 2), t.elementType = Cs, t.lanes = d, t;
					case Va: return t = Yn(13, a, r, c), t.elementType = Va, t.lanes = d, t;
					case Te: return t = Yn(19, a, r, c), t.elementType = Te, t.lanes = d, t;
					default:
						if (typeof t == "object" && t !== null) switch (t.$$typeof) {
							case Io:
								h = 10;
								break e;
							case mc:
								h = 9;
								break e;
							case Zi:
								h = 11;
								break e;
							case wf:
								h = 14;
								break e;
							case ua:
								h = 16, l = null;
								break e;
						}
						h = 29, a = Error(F(130, t === null ? "null" : typeof t, "")), l = null;
				}
				return r = Yn(h, a, r, c), r.elementType = t, r.type = l, r.lanes = d, r;
			}
			function Eo(t, r, a, l) {
				return t = Yn(7, t, l, r), t.lanes = a, t;
			}
			function Ps(t, r, a) {
				return t = Yn(6, t, null, r), t.lanes = a, t;
			}
			function cc(t) {
				var r = Yn(18, null, null, 0);
				return r.stateNode = t, r;
			}
			function dc(t, r, a) {
				return r = Yn(4, t.children !== null ? t.children : [], t.key, r), r.lanes = a, r.stateNode = {
					containerInfo: t.containerInfo,
					pendingChildren: null,
					implementation: t.implementation
				}, r;
			}
			function bf(t, r, a, l, c, d, h, y, R) {
				this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Lo, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mu(0), this.hiddenUpdates = mu(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = d, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = R, this.incompleteTransitions = /* @__PURE__ */ new Map();
			}
			function xs(t, r, a, l, c, d, h, y, R, L, j, A) {
				return t = new bf(t, r, a, h, R, L, j, A, y), r = 1, d === !0 && (r |= 24), d = Yn(3, null, null, r), t.current = d, d.stateNode = t, r = Fd(), r.refCount++, t.pooledCache = r, r.refCount++, d.memoizedState = {
					element: l,
					isDehydrated: a,
					cache: r
				}, Ol(d), t;
			}
			function fc(t) {
				return t ? (t = Ka, t) : Ka;
			}
			function vf(t) {
				var r = t._reactInternals;
				if (r === void 0) throw typeof t.render == "function" ? Error(F(188)) : (t = Object.keys(t).join(","), Error(F(268, t)));
				return t = fu(r), t = t !== null ? pu(t) : null, t === null ? null : Ts(t.stateNode);
			}
			function pc(t, r, a, l, c, d) {
				c = fc(c), l.context === null ? l.context = c : l.pendingContext = c, l = Et(r), l.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (l.callback = d), a = Nr(t, l, r), a !== null && (nt(a, t, r), Ml(a, t, r));
			}
			function Sf(t, r) {
				if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
					var a = t.retryLane;
					t.retryLane = a !== 0 && a < r ? a : r;
				}
			}
			function vr(t, r) {
				Sf(t, r), (t = t.alternate) && Sf(t, r);
			}
			var ie = {}, Fm = import_react.default, tt = import_scheduler.default, Lt = Object.assign, hc = Symbol.for("react.element"), zs = Symbol.for("react.transitional.element"), sa = Symbol.for("react.portal"), $a = Symbol.for("react.fragment"), kf = Symbol.for("react.strict_mode"), Cs = Symbol.for("react.profiler"), mc = Symbol.for("react.consumer"), Io = Symbol.for("react.context"), Zi = Symbol.for("react.forward_ref"), Va = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), wf = Symbol.for("react.memo"), ua = Symbol.for("react.lazy");
			var gc = Symbol.for("react.activity");
			var $r = Symbol.for("react.memo_cache_sentinel");
			var Pf = Symbol.iterator, xf = Symbol.for("react.client.reference"), ca = Array.isArray, M = Fm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Yp = m.rendererVersion, zf = m.rendererPackageName, Cf = m.extraDevToolsConfig, Ts = m.getPublicInstance, Hm = m.getRootHostContext, Xp = m.getChildHostContext, Am = m.prepareForCommit, _s = m.resetAfterCommit, Vr = m.createInstance;
			m.cloneMutableInstance;
			var yc = m.appendInitialChild, Kp = m.finalizeInitialChildren, Rs = m.shouldSetTextContent, bc = m.createTextInstance;
			m.cloneMutableTextInstance;
			var eh = m.scheduleTimeout, Tf = m.cancelTimeout, Lo = m.noTimeout, qt = m.isPrimaryRenderer;
			m.warnsIfNotActing;
			var $n = m.supportsMutation, Sr = m.supportsPersistence, Hn = m.supportsHydration, nh = m.getInstanceFromNode;
			m.beforeActiveInstanceBlur;
			var jm = m.preparePortalMount;
			m.prepareScopeUpdate, m.getInstanceFromScope;
			var yn = m.setCurrentUpdatePriority, qr = m.getCurrentUpdatePriority, kr = m.resolveUpdatePriority;
			m.trackSchedulerEvent, m.resolveEventType, m.resolveEventTimeStamp;
			var _f = m.shouldAttemptEagerTransition, th = m.detachDeletedInstance;
			m.requestPostPaintCallback;
			var rh = m.maySuspendCommit, Dm = m.maySuspendCommitOnUpdate, Yi = m.maySuspendCommitInSyncRender, An = m.preloadInstance, oh = m.startSuspendingCommit, Vn = m.suspendInstance;
			m.suspendOnActiveViewTransition;
			var ah = m.waitForCommitToBeReady;
			m.getSuspendedCommitReason;
			var rt = m.NotPendingTransition, da = m.HostTransitionContext, qa = m.resetFormInstance;
			m.bindToConsole;
			var ih = m.supportsMicrotasks, Gr = m.scheduleMicrotask, Ga = m.supportsTestSelectors, Rf = m.findFiberRoot, wr = m.getBoundingRect, lh = m.getTextContent, Jr = m.isHiddenSubtree, sh = m.matchAccessibilityRole, Es = m.setFocusIfFocusable, Ja = m.setupIntersectionObserver, uh = m.appendChild, ch = m.appendChildToContainer, Is = m.commitTextUpdate, dh = m.commitMount, vc = m.commitUpdate, fh = m.insertBefore, ph = m.insertInContainerBefore, Ef = m.removeChild, If = m.removeChildFromContainer, Sc = m.resetTextContent, hh = m.hideInstance, kc = m.hideTextInstance, Wm = m.unhideInstance, mh = m.unhideTextInstance;
			m.cancelViewTransitionName, m.cancelRootViewTransitionName, m.restoreRootViewTransitionName, m.cloneRootViewTransitionContainer, m.removeRootViewTransitionClone, m.measureClonedInstance, m.hasInstanceChanged, m.hasInstanceAffectedParent, m.startViewTransition, m.startGestureTransition, m.stopViewTransition, m.getCurrentGestureOffset, m.createViewTransitionInstance;
			var Nt = m.clearContainer;
			m.createFragmentInstance, m.updateFragmentInstanceFiber, m.commitNewChildToFragmentInstance, m.deleteChildFromFragmentInstance;
			var gh = m.cloneInstance, We = m.createContainerChildSet, Lf = m.appendChildToContainerChildSet, yh = m.finalizeContainerChildren, bh = m.replaceContainerChildren, No = m.cloneHiddenInstance, Ls = m.cloneHiddenTextInstance, Ns = m.isSuspenseInstancePending, Fs = m.isSuspenseInstanceFallback, Za = m.getSuspenseInstanceFallbackErrorDetails, Xi = m.registerSuspenseInstanceRetry, vh = m.canHydrateFormStateMarker, Sh = m.isFormStateMarkerMatching, Nf = m.getNextHydratableSibling, kh = m.getNextHydratableSiblingAfterSingleton, wc = m.getFirstHydratableChild, Pc = m.getFirstHydratableChildWithinContainer, Ff = m.getFirstHydratableChildWithinActivityInstance, wh = m.getFirstHydratableChildWithinSuspenseInstance, Um = m.getFirstHydratableChildWithinSingleton, Bm = m.canHydrateInstance, Ph = m.canHydrateTextInstance, xh = m.canHydrateActivityInstance, Om = m.canHydrateSuspenseInstance, Ki = m.hydrateInstance, xc = m.hydrateTextInstance, zh = m.hydrateActivityInstance, Hf = m.hydrateSuspenseInstance, Ch = m.getNextHydratableInstanceAfterActivityInstance, Th = m.getNextHydratableInstanceAfterSuspenseInstance, _h = m.commitHydratedInstance, Mm = m.commitHydratedContainer, Rh = m.commitHydratedActivityInstance, el = m.commitHydratedSuspenseInstance, Eh = m.finalizeHydratedChildren, Ih = m.flushHydrationEvents;
			m.clearActivityBoundary;
			var Se = m.clearSuspenseBoundary;
			m.clearActivityBoundaryFromContainer;
			var Af = m.clearSuspenseBoundaryFromContainer, Qm = m.hideDehydratedBoundary, Lh = m.unhideDehydratedBoundary, Nh = m.shouldDeleteUnhydratedTailInstances;
			m.diffHydratedPropsForDevWarnings, m.diffHydratedTextForDevWarnings, m.describeHydratableInstanceForDevWarnings;
			var $m = m.validateHydratableInstance, jf = m.validateHydratableTextInstance, Gt = m.supportsResources, Df = m.isHostHoistableType, zc = m.getHoistableRoot, nl = m.getResource, Fh = m.acquireResource, Hh = m.releaseResource, Ya = m.hydrateHoistable, Cc = m.mountHoistable, Wf = m.unmountHoistable, Ah = m.createHoistableInstance, jh = m.prepareToCommitHoistables, Vm = m.mayResourceSuspendCommit, Tc = m.preloadResource, Fo = m.suspendResource, dn = m.supportsSingletons, _c = m.resolveSingletonInstance, Rc = m.acquireSingletonInstance, fa = m.releaseSingletonInstance, Ec = m.isHostSingletonType, Xa = m.isSingletonScope, Hs = [], tl = -1, Ka = {}, vt = Math.clz32 ? Math.clz32 : Em, Dh = Math.log, Wh = Math.LN2, As = 256, js = 262144, rl = 4194304, Ic = tt.unstable_scheduleCallback, le = tt.unstable_cancelCallback, qm = tt.unstable_shouldYield, St = tt.unstable_requestPaint, ze = tt.unstable_now, Uh = tt.unstable_ImmediatePriority, Ho = tt.unstable_UserBlockingPriority, Ao = tt.unstable_NormalPriority, ol = tt.unstable_IdlePriority, Lc = tt.log, Uf = tt.unstable_setDisableYieldValue, ei = null, on = null, jn = typeof Object.is == "function" ? Object.is : Im, Nc = typeof reportError == "function" ? reportError : function(t) {
				if (typeof window == "object" && typeof window.ErrorEvent == "function") {
					var r = new window.ErrorEvent("error", {
						bubbles: !0,
						cancelable: !0,
						message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
						error: t
					});
					if (!window.dispatchEvent(r)) return;
				} else if (typeof process == "object" && typeof process.emit == "function") {
					process.emit("uncaughtException", t);
					return;
				}
				console.error(t);
			}, Bf = Object.prototype.hasOwnProperty, al, kt, Ds = !1, Bh = /* @__PURE__ */ new WeakMap(), ni = [], il = 0, fn = null, x = 0, Jt = [], Zt = 0, jo = null, ot = 1, Zr = "", Dn = Ir(null), Ws = Ir(null), pa = Ir(null), Fc = Ir(null), bn = null, Ue = null, ue = !1, Do = null, Yt = !1, Of = Error(F(519)), Yr = Ir(null), at = null, Be = null, Xr = typeof AbortController < "u" ? AbortController : function() {
				var t = [], r = this.signal = {
					aborted: !1,
					addEventListener: function(a, l) {
						t.push(l);
					}
				};
				this.abort = function() {
					r.aborted = !0, t.forEach(function(a) {
						return a();
					});
				};
			}, qn = tt.unstable_scheduleCallback, Gm = tt.unstable_NormalPriority, qe = {
				$$typeof: Io,
				Consumer: null,
				Provider: null,
				_currentValue: null,
				_currentValue2: null,
				_threadCount: 0
			}, an = null, wt = null, Mf = !1, ll = !1, ti = !1, Pr = 0, Us = null, Qf = 0, sl = 0, ul = null, Hc = M.S;
			M.S = function(t, r) {
				Zf = ze(), typeof r == "object" && r !== null && typeof r.then == "function" && Np(t, r), Hc !== null && Hc(t, r);
			};
			var ha = Ir(null), cl = Error(F(460)), Ac = Error(F(474)), jc = Error(F(542)), Dc = { then: function() {} }, Xt = null, Kt = null, Bs = 0, ri = Ad(!0), Oh = Ad(!1), er = [], xr = 0, $f = 0, ma = !1, Vf = !1, Kr = Ir(null), Wc = Ir(0), Ft = Ir(null), zr = null, ln = Ir(0), Wo = 0, ne = null, Ie = null, pn = null, Uc = !1, dl = !1, oi = !1, Bc = 0, fl = 0, pl = null, Jm = 0, Os = {
				readContext: In,
				use: Ee,
				useCallback: Ve,
				useContext: Ve,
				useEffect: Ve,
				useImperativeHandle: Ve,
				useLayoutEffect: Ve,
				useInsertionEffect: Ve,
				useMemo: Ve,
				useReducer: Ve,
				useRef: Ve,
				useState: Ve,
				useDebugValue: Ve,
				useDeferredValue: Ve,
				useTransition: Ve,
				useSyncExternalStore: Ve,
				useId: Ve,
				useHostTransitionStatus: Ve,
				useFormState: Ve,
				useActionState: Ve,
				useOptimistic: Ve,
				useMemoCache: Ve,
				useCacheRefresh: Ve
			};
			Os.useEffectEvent = Ve;
			var Mh = {
				readContext: In,
				use: Ee,
				useCallback: function(t, r) {
					return Ln().memoizedState = [t, r === void 0 ? null : r], t;
				},
				useContext: In,
				useEffect: Bd,
				useImperativeHandle: function(t, r, a) {
					a = a != null ? a.concat([t]) : null, Xl(4194308, 4, jp.bind(null, r, t), a);
				},
				useLayoutEffect: function(t, r) {
					return Xl(4194308, 4, t, r);
				},
				useInsertionEffect: function(t, r) {
					Xl(4, 2, t, r);
				},
				useMemo: function(t, r) {
					var a = Ln();
					r = r === void 0 ? null : r;
					var l = t();
					if (oi) {
						pe(!0);
						try {
							t();
						} finally {
							pe(!1);
						}
					}
					return a.memoizedState = [l, r], l;
				},
				useReducer: function(t, r, a) {
					var l = Ln();
					if (a !== void 0) {
						var c = a(r);
						if (oi) {
							pe(!0);
							try {
								a(r);
							} finally {
								pe(!1);
							}
						}
					} else c = r;
					return l.memoizedState = l.baseState = c, t = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: c
					}, l.queue = t, t = t.dispatch = Nn.bind(null, ne, t), [l.memoizedState, t];
				},
				useRef: function(t) {
					var r = Ln();
					return t = { current: t }, r.memoizedState = t;
				},
				useState: function(t) {
					t = Xn(t);
					var r = t.queue, a = Nu.bind(null, ne, r);
					return r.dispatch = a, [t.memoizedState, a];
				},
				useDebugValue: Qd,
				useDeferredValue: function(t, r) {
					return Iu(Ln(), t, r);
				},
				useTransition: function() {
					var t = Xn(!1);
					return t = $d.bind(null, ne, t.queue, !0, !1), Ln().memoizedState = t, [!1, t];
				},
				useSyncExternalStore: function(t, r, a) {
					var l = ne, c = Ln();
					if (ue) {
						if (a === void 0) throw Error(F(407));
						a = a();
					} else {
						if (a = r(), Ne === null) throw Error(F(349));
						he & 127 || Hp(l, r, a);
					}
					c.memoizedState = a;
					var d = {
						value: a,
						getSnapshot: r
					};
					return c.queue = d, Bd(ql.bind(null, l, d, t), [t]), l.flags |= 2048, Kn(9, { destroy: void 0 }, jr.bind(null, l, d, a, r), null), a;
				},
				useId: function() {
					var t = Ln(), r = Ne.identifierPrefix;
					if (ue) {
						var a = Zr, l = ot;
						a = (l & ~(1 << 32 - vt(l) - 1)).toString(32) + a, r = "_" + r + "R_" + a, a = Bc++, 0 < a && (r += "H" + a.toString(32)), r += "_";
					} else a = Jm++, r = "_" + r + "r_" + a.toString(32) + "_";
					return t.memoizedState = r;
				},
				useHostTransitionStatus: Lu,
				useFormState: pr,
				useActionState: pr,
				useOptimistic: function(t) {
					var r = Ln();
					r.memoizedState = r.baseState = t;
					var a = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: null,
						lastRenderedState: null
					};
					return r.queue = a, r = Wi.bind(null, ne, !0, a), a.dispatch = r, [t, r];
				},
				useMemoCache: Hi,
				useCacheRefresh: function() {
					return Ln().memoizedState = Dp.bind(null, ne);
				},
				useEffectEvent: function(t) {
					var r = Ln(), a = { impl: t };
					return r.memoizedState = a, function() {
						if ((ce & 2) !== 0) throw Error(F(440));
						return a.impl.apply(void 0, arguments);
					};
				}
			}, qf = {
				readContext: In,
				use: Ee,
				useCallback: Eu,
				useContext: In,
				useEffect: Tu,
				useImperativeHandle: Md,
				useInsertionEffect: Od,
				useLayoutEffect: Ru,
				useMemo: Kl,
				useReducer: Ai,
				useRef: Wa,
				useState: function() {
					return Ai(Ar);
				},
				useDebugValue: Qd,
				useDeferredValue: function(t, r) {
					return es(He(), Ie.memoizedState, t, r);
				},
				useTransition: function() {
					var t = Ai(Ar)[0], r = He().memoizedState;
					return [typeof t == "boolean" ? t : sr(t), r];
				},
				useSyncExternalStore: ur,
				useId: xo,
				useHostTransitionStatus: Lu,
				useFormState: Ud,
				useActionState: Ud,
				useOptimistic: function(t, r) {
					return mt(He(), Ie, t, r);
				},
				useMemoCache: Hi,
				useCacheRefresh: qd
			};
			qf.useEffectEvent = _u;
			var Qh = {
				readContext: In,
				use: Ee,
				useCallback: Eu,
				useContext: In,
				useEffect: Tu,
				useImperativeHandle: Md,
				useInsertionEffect: Od,
				useLayoutEffect: Ru,
				useMemo: Kl,
				useReducer: Da,
				useRef: Wa,
				useState: function() {
					return Da(Ar);
				},
				useDebugValue: Qd,
				useDeferredValue: function(t, r) {
					var a = He();
					return Ie === null ? Iu(a, t, r) : es(a, Ie.memoizedState, t, r);
				},
				useTransition: function() {
					var t = Da(Ar)[0], r = He().memoizedState;
					return [typeof t == "boolean" ? t : sr(t), r];
				},
				useSyncExternalStore: ur,
				useId: xo,
				useHostTransitionStatus: Lu,
				useFormState: Yl,
				useActionState: Yl,
				useOptimistic: function(t, r) {
					var a = He();
					return Ie !== null ? mt(a, Ie, t, r) : (a.baseState = t, [t, a.queue.dispatch]);
				},
				useMemoCache: Hi,
				useCacheRefresh: qd
			};
			Qh.useEffectEvent = _u;
			var Oc = {
				enqueueSetState: function(t, r, a) {
					t = t._reactInternals;
					var l = bt(), c = Et(l);
					c.payload = r, a != null && (c.callback = a), r = Nr(t, c, l), r !== null && (nt(r, t, l), Ml(r, t, l));
				},
				enqueueReplaceState: function(t, r, a) {
					t = t._reactInternals;
					var l = bt(), c = Et(l);
					c.tag = 1, c.payload = r, a != null && (c.callback = a), r = Nr(t, c, l), r !== null && (nt(r, t, l), Ml(r, t, l));
				},
				enqueueForceUpdate: function(t, r) {
					t = t._reactInternals;
					var a = bt(), l = Et(a);
					l.tag = 2, r != null && (l.callback = r), r = Nr(t, l, a), r !== null && (nt(r, t, a), Ml(r, t, a));
				}
			}, Mc = Error(F(461)), hn = !1, Qc = {
				dehydrated: null,
				treeContext: null,
				retryLane: 0,
				hydrationErrors: null
			}, eo = !1, sn = !1, Ms = !1, $c = typeof WeakSet == "function" ? WeakSet : Set, Pn = null, mn = null, Pt = !1, Cr = null, ga = 8192, Zm = {
				getCacheForType: function(t) {
					var r = In(qe), a = r.data.get(t);
					return a === void 0 && (a = t(), r.data.set(t, a)), a;
				},
				cacheSignal: function() {
					return In(qe).controller.signal;
				}
			}, Vc = 0, qc = 1, Gc = 2, Jc = 3, Zc = 4;
			if (typeof Symbol == "function" && Symbol.for) {
				var Qs = Symbol.for;
				Vc = Qs("selector.component"), qc = Qs("selector.has_pseudo_class"), Gc = Qs("selector.role"), Jc = Qs("selector.test_id"), Zc = Qs("selector.text");
			}
			var Ym = typeof WeakMap == "function" ? WeakMap : Map, ce = 0, Ne = null, de = null, he = 0, _e = 0, Ht = null, ya = !1, ai = !1, Gf = !1, Uo = 0, Xe = 0, ba = 0, ii = 0, Jf = 0, At = 0, hl = 0, $s = null, xt = null, Yc = !1, Vs = 0, Zf = 0, ml = Infinity, Xc = null, va = null, Re = 0, Bo = null, Sa = null, no = 0, Kc = 0, ed = null, $h = null, gl = 0, nd = null;
			return ie.attemptContinuousHydration = function(t) {
				if (t.tag === 13 || t.tag === 31) {
					var r = Ko(t, 67108864);
					r !== null && nt(r, t, 67108864), vr(t, 67108864);
				}
			}, ie.attemptHydrationAtCurrentPriority = function(t) {
				if (t.tag === 13 || t.tag === 31) {
					var r = bt();
					r = st(r);
					var a = Ko(t, r);
					a !== null && nt(a, t, r), vr(t, r);
				}
			}, ie.attemptSynchronousHydration = function(t) {
				switch (t.tag) {
					case 3:
						if (t = t.stateNode, t.current.memoizedState.isDehydrated) {
							var r = Zo(t.pendingLanes);
							if (r !== 0) {
								for (t.pendingLanes |= 2, t.entangledLanes |= 2; r;) {
									var a = 1 << 31 - vt(r);
									t.entanglements[1] |= a, r &= ~a;
								}
								ir(t), !(ce & 6) && (ml = ze() + 500, Ea(0, !1));
							}
						}
						break;
					case 31:
					case 13: r = Ko(t, 2), r !== null && nt(r, t, 2), ia(), vr(t, 2);
				}
			}, ie.batchedUpdates = function(t, r) {
				return t(r);
			}, ie.createComponentSelector = function(t) {
				return {
					$$typeof: Vc,
					value: t
				};
			}, ie.createContainer = function(t, r, a, l, c, d, h, y, R, L) {
				return xs(t, r, !1, null, a, l, d, null, h, y, R, L);
			}, ie.createHasPseudoClassSelector = function(t) {
				return {
					$$typeof: qc,
					value: t
				};
			}, ie.createHydrationContainer = function(t, r, a, l, c, d, h, y, R, L, j, A, W, V) {
				var _r2;
				return t = xs(a, l, !0, t, c, d, y, V, R, L, j, A), t.context = fc(null), a = t.current, l = bt(), l = st(l), c = Et(l), c.callback = (_r2 = r) != null ? _r2 : null, Nr(a, c, l), r = l, t.current.lanes = r, xi(t, r), ir(t), t;
			}, ie.createPortal = function(t, r, a) {
				var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
				return {
					$$typeof: sa,
					key: l == null ? null : "" + l,
					children: t,
					containerInfo: r,
					implementation: a
				};
			}, ie.createRoleSelector = function(t) {
				return {
					$$typeof: Gc,
					value: t
				};
			}, ie.createTestNameSelector = function(t) {
				return {
					$$typeof: Jc,
					value: t
				};
			}, ie.createTextSelector = function(t) {
				return {
					$$typeof: Zc,
					value: t
				};
			}, ie.defaultOnCaughtError = function(t) {
				console.error(t);
			}, ie.defaultOnRecoverableError = function(t) {
				Nc(t);
			}, ie.defaultOnUncaughtError = function(t) {
				Nc(t);
			}, ie.deferredUpdates = function(t) {
				var r = M.T, a = qr();
				try {
					return yn(32), M.T = null, t();
				} finally {
					yn(a), M.T = r;
				}
			}, ie.discreteUpdates = function(t, r, a, l, c) {
				var d = M.T, h = qr();
				try {
					return yn(2), M.T = null, t(r, a, l, c);
				} finally {
					yn(h), M.T = d, ce === 0 && (ml = ze() + 500);
				}
			}, ie.findAllNodes = gs, ie.findBoundingRects = function(t, r) {
				if (!Ga) throw Error(F(363));
				r = gs(t, r), t = [];
				for (var a = 0; a < r.length; a++) t.push(wr(r[a]));
				for (r = t.length - 1; 0 < r; r--) {
					a = t[r];
					for (var l = a.x, c = l + a.width, d = a.y, h = d + a.height, y = r - 1; 0 <= y; y--) if (r !== y) {
						var R = t[y], L = R.x, j = L + R.width, A = R.y, W = A + R.height;
						if (l >= L && d >= A && c <= j && h <= W) {
							t.splice(r, 1);
							break;
						} else if (l !== L || a.width !== R.width || W < d || A > h) {
							if (!(d !== A || a.height !== R.height || j < l || L > c)) {
								L > l && (R.width += L - l, R.x = l), j < c && (R.width = c - L), t.splice(r, 1);
								break;
							}
						} else {
							A > d && (R.height += A - d, R.y = d), W < h && (R.height = h - A), t.splice(r, 1);
							break;
						}
					}
				}
				return t;
			}, ie.findHostInstance = vf, ie.findHostInstanceWithNoPortals = function(t) {
				return t = fu(t), t = t !== null ? lt(t) : null, t === null ? null : Ts(t.stateNode);
			}, ie.findHostInstanceWithWarning = function(t) {
				return vf(t);
			}, ie.flushPassiveEffects = rn, ie.flushSyncFromReconciler = function(t) {
				var r = ce;
				ce |= 1;
				var a = M.T, l = qr();
				try {
					if (yn(2), M.T = null, t) return t();
				} finally {
					yn(l), M.T = a, ce = r, !(ce & 6) && Ea(0, !1);
				}
			}, ie.flushSyncWork = ia, ie.focusWithin = function(t, r) {
				if (!Ga) throw Error(F(363));
				for (t = Vi(t), r = sf(t, r), r = Array.from(r), t = 0; t < r.length;) {
					var a = r[t++], l = a.tag;
					if (!Jr(a)) {
						if ((l === 5 || l === 26 || l === 27) && Es(a.stateNode)) return !0;
						for (a = a.child; a !== null;) r.push(a), a = a.sibling;
					}
				}
				return !1;
			}, ie.getFindAllNodesFailureDescription = function(t, r) {
				if (!Ga) throw Error(F(363));
				var a = 0, l = [];
				t = [Vi(t), 0];
				for (var c = 0; c < t.length;) {
					var d = t[c++], h = d.tag, y = t[c++], R = r[y];
					if ((h !== 5 && h !== 26 && h !== 27 || !Jr(d)) && (ms(d, R) && (l.push(nc(R)), y++, y > a && (a = y)), y < r.length)) for (d = d.child; d !== null;) t.push(d, y), d = d.sibling;
				}
				if (a < r.length) {
					for (t = []; a < r.length; a++) t.push(nc(r[a]));
					return `findAllNodes was able to match part of the selector:
  ` + (l.join(" > ") + `

No matching component was found for:
  `) + t.join(" > ");
				}
				return null;
			}, ie.getPublicRootInstance = function(t) {
				if (t = t.current, !t.child) return null;
				switch (t.child.tag) {
					case 27:
					case 5: return Ts(t.child.stateNode);
					default: return t.child.stateNode;
				}
			}, ie.injectIntoDevTools = function() {
				var t = {
					bundleType: 0,
					version: Yp,
					rendererPackageName: zf,
					currentDispatcherRef: M,
					reconcilerVersion: "19.2.0"
				};
				if (Cf !== null && (t.rendererConfig = Cf), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") t = !1;
				else {
					var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (r.isDisabled || !r.supportsFiber) t = !0;
					else {
						try {
							ei = r.inject(t), on = r;
						} catch {}
						t = !!r.checkDCE;
					}
				}
				return t;
			}, ie.isAlreadyRendering = function() {
				return (ce & 6) !== 0;
			}, ie.observeVisibleRects = function(t, r, a, l) {
				if (!Ga) throw Error(F(363));
				t = gs(t, r);
				var c = Ja(t, a, l).disconnect;
				return { disconnect: function() {
					c();
				} };
			}, ie.shouldError = function() {
				return null;
			}, ie.shouldSuspend = function() {
				return !1;
			}, ie.startHostTransition = function(t, r, a, l) {
				if (t.tag !== 5) throw Error(F(476));
				var c = Vd(t).queue;
				$d(t, c, r, rt, a === null ? _d : function() {
					var d = Vd(t);
					return d.next === null && (d = t.alternate.memoizedState), ea(t, d.next.queue, {}, bt()), a(l);
				});
			}, ie.updateContainer = function(t, r, a, l) {
				var c = r.current, d = bt();
				return pc(c, d, t, r, a, l), d;
			}, ie.updateContainerSync = function(t, r, a, l) {
				return pc(r.current, 2, t, r, a, l), 2;
			}, ie;
		}, Tt.exports.default = Tt.exports, Object.defineProperty(Tt.exports, "__esModule", { value: !0 });
	}(Og)), Og.exports;
}
/**
* @license React
* react-reconciler.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
({ exports: {} }).exports;
var Eb;
function n0() {
	return Eb || (Eb = 1, Rm.exports = Kb()), Rm.exports;
}
var r0 = Xb(n0());
function createReconciler(config) {
	const reconciler = r0(config);
	reconciler.injectIntoDevTools();
	return reconciler;
}
var NoEventPriority = 0;
var catalogue = {};
var PREFIX_REGEX = /^three(?=[A-Z])/;
var toPascalCase = (type) => `${type[0].toUpperCase()}${type.slice(1)}`;
var i$2 = 0;
var isConstructor = (object) => typeof object === "function";
function extend(objects) {
	if (isConstructor(objects)) {
		const Component = `${i$2++}`;
		catalogue[Component] = objects;
		return Component;
	} else Object.assign(catalogue, objects);
}
function validateInstance(type, props) {
	const name = toPascalCase(type);
	const target = catalogue[name];
	if (type !== "primitive" && !target) throw new Error(`R3F: ${name} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
	if (type === "primitive" && !props.object) throw new Error(`R3F: Primitives without 'object' are invalid!`);
	if (props.args !== void 0 && !Array.isArray(props.args)) throw new Error("R3F: The args prop must be an array!");
}
function createInstance(type, props, root) {
	var _props$object;
	type = toPascalCase(type) in catalogue ? type : type.replace(PREFIX_REGEX, "");
	validateInstance(type, props);
	if (type === "primitive" && (_props$object = props.object) != null && _props$object.__r3f) delete props.object.__r3f;
	return prepare(props.object, root, type, props);
}
function hideInstance(instance) {
	if (!instance.isHidden) {
		var _instance$parent;
		if (instance.props.attach && (_instance$parent = instance.parent) != null && _instance$parent.object) detach(instance.parent, instance);
		else if (isObject3D(instance.object)) instance.object.visible = false;
		instance.isHidden = true;
		invalidateInstance(instance);
	}
}
function unhideInstance(instance) {
	if (instance.isHidden) {
		var _instance$parent2;
		if (instance.props.attach && (_instance$parent2 = instance.parent) != null && _instance$parent2.object) attach(instance.parent, instance);
		else if (isObject3D(instance.object) && instance.props.visible !== false) instance.object.visible = true;
		instance.isHidden = false;
		invalidateInstance(instance);
	}
}
function handleContainerEffects(parent, child, beforeChild) {
	const state = child.root.getState();
	if (!parent.parent && parent.object !== state.scene) return;
	if (!child.object) {
		var _child$props$object, _child$props$args;
		const target = catalogue[toPascalCase(child.type)];
		child.object = (_child$props$object = child.props.object) != null ? _child$props$object : new target(...(_child$props$args = child.props.args) != null ? _child$props$args : []);
		child.object.__r3f = child;
	}
	applyProps(child.object, child.props);
	if (child.props.attach) attach(parent, child);
	else if (isObject3D(child.object) && isObject3D(parent.object)) {
		const childIndex = parent.object.children.indexOf(beforeChild == null ? void 0 : beforeChild.object);
		if (beforeChild && childIndex !== -1) {
			const existingIndex = parent.object.children.indexOf(child.object);
			if (existingIndex !== -1) {
				parent.object.children.splice(existingIndex, 1);
				const adjustedIndex = existingIndex < childIndex ? childIndex - 1 : childIndex;
				parent.object.children.splice(adjustedIndex, 0, child.object);
			} else {
				child.object.parent = parent.object;
				parent.object.children.splice(childIndex, 0, child.object);
				child.object.dispatchEvent({ type: "added" });
				parent.object.dispatchEvent({
					type: "childadded",
					child: child.object
				});
			}
		} else parent.object.add(child.object);
	}
	for (const childInstance of child.children) handleContainerEffects(child, childInstance);
	invalidateInstance(child);
}
function appendChild(parent, child) {
	if (!child) return;
	if (child.parent === parent) {
		const childIndex = parent.children.indexOf(child);
		if (childIndex !== -1) parent.children.splice(childIndex, 1);
	}
	child.parent = parent;
	parent.children.push(child);
	handleContainerEffects(parent, child);
}
function insertBefore(parent, child, beforeChild) {
	if (!child || !beforeChild) return;
	if (child.parent === parent) {
		const childIndex = parent.children.indexOf(child);
		if (childIndex !== -1) parent.children.splice(childIndex, 1);
	}
	child.parent = parent;
	const childIndex = parent.children.indexOf(beforeChild);
	if (childIndex !== -1) parent.children.splice(childIndex, 0, child);
	else parent.children.push(child);
	handleContainerEffects(parent, child, beforeChild);
}
function disposeOnIdle(object) {
	if (typeof object.dispose === "function") {
		const handleDispose = () => {
			try {
				object.dispose();
			} catch {}
		};
		if (typeof IS_REACT_ACT_ENVIRONMENT !== "undefined") handleDispose();
		else (0, import_scheduler.unstable_scheduleCallback)(import_scheduler.unstable_IdlePriority, handleDispose);
	}
}
function removeChild(parent, child, dispose) {
	if (!child) return;
	child.parent = null;
	const childIndex = parent.children.indexOf(child);
	if (childIndex !== -1) parent.children.splice(childIndex, 1);
	if (child.props.attach) detach(parent, child);
	else if (isObject3D(child.object) && isObject3D(parent.object)) {
		parent.object.remove(child.object);
		removeInteractivity(findInitialRoot(child), child.object);
	}
	const shouldDispose = child.props.dispose !== null && dispose !== false;
	for (let i = child.children.length - 1; i >= 0; i--) {
		const node = child.children[i];
		removeChild(child, node, shouldDispose);
	}
	child.children.length = 0;
	delete child.object.__r3f;
	if (shouldDispose && child.type !== "primitive" && child.object.type !== "Scene") disposeOnIdle(child.object);
	if (dispose === void 0) invalidateInstance(child);
}
function setFiberRef(fiber, publicInstance) {
	for (const _fiber of [fiber, fiber.alternate]) if (_fiber !== null) {
		if (typeof _fiber.ref === "function") {
			_fiber.refCleanup == null || _fiber.refCleanup();
			const cleanup = _fiber.ref(publicInstance);
			if (typeof cleanup === "function") _fiber.refCleanup = cleanup;
		} else if (_fiber.ref) _fiber.ref.current = publicInstance;
	}
}
var reconstructed = [];
function flushReconstructedInstances() {
	if (reconstructed.length === 0) return;
	try {
		swapReconstructedInstances();
	} finally {
		reconstructed.length = 0;
	}
}
function swapReconstructedInstances() {
	for (const [instance] of reconstructed) {
		const parent = instance.parent;
		if (parent) {
			if (instance.props.attach) detach(parent, instance);
			else if (isObject3D(instance.object) && isObject3D(parent.object)) parent.object.remove(instance.object);
			for (const child of instance.children) if (child.props.attach) detach(instance, child);
			else if (isObject3D(child.object) && isObject3D(instance.object)) instance.object.remove(child.object);
		}
		if (instance.isHidden) unhideInstance(instance);
		if (instance.object.__r3f) delete instance.object.__r3f;
		if (instance.type !== "primitive") disposeOnIdle(instance.object);
	}
	for (const [instance, props, fiber] of reconstructed) {
		instance.props = props;
		const parent = instance.parent;
		if (parent) {
			var _instance$props$objec, _instance$props$args;
			const target = catalogue[toPascalCase(instance.type)];
			const prevObject = instance.object;
			instance.object = (_instance$props$objec = instance.props.object) != null ? _instance$props$objec : new target(...(_instance$props$args = instance.props.args) != null ? _instance$props$args : []);
			instance.object.__r3f = instance;
			setFiberRef(fiber, instance.object);
			swapInteractivity(findInitialRoot(instance), prevObject, instance.object);
			applyProps(instance.object, instance.props);
			if (instance.props.attach) attach(parent, instance);
			else if (isObject3D(instance.object) && isObject3D(parent.object)) parent.object.add(instance.object);
			for (const child of instance.children) if (child.props.attach) attach(instance, child);
			else if (isObject3D(child.object) && isObject3D(instance.object)) instance.object.add(child.object);
			invalidateInstance(instance);
		}
	}
}
var handleTextInstance = () => {};
var NO_CONTEXT = {};
var currentUpdatePriority = NoEventPriority;
function getEventPriority(type) {
	switch (type) {
		case "beforetoggle":
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart": return e;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave": return o;
		case "message": switch ((0, import_scheduler.unstable_getCurrentPriorityLevel)()) {
			case import_scheduler.unstable_ImmediatePriority: return e;
			case import_scheduler.unstable_UserBlockingPriority: return o;
			case import_scheduler.unstable_NormalPriority:
			case import_scheduler.unstable_LowPriority: return r;
			case import_scheduler.unstable_IdlePriority: return i$1;
			default: return r;
		}
		default: return r;
	}
}
function scheduleMicrotask(callback) {
	if (typeof queueMicrotask === "function") queueMicrotask(callback);
	else if (typeof Promise !== "undefined") Promise.resolve().then(callback).catch((error) => {
		setTimeout(() => {
			throw error;
		});
	});
	else setTimeout(callback);
}
var reconciler = /* @__PURE__ */ createReconciler({
	isPrimaryRenderer: false,
	warnsIfNotActing: false,
	supportsMutation: true,
	supportsPersistence: false,
	supportsHydration: false,
	createInstance,
	removeChild,
	appendChild,
	appendInitialChild: appendChild,
	insertBefore,
	appendChildToContainer(container, child) {
		const scene = container.getState().scene.__r3f;
		if (!child || !scene) return;
		appendChild(scene, child);
	},
	removeChildFromContainer(container, child) {
		const scene = container.getState().scene.__r3f;
		if (!child || !scene) return;
		removeChild(scene, child);
	},
	insertInContainerBefore(container, child, beforeChild) {
		const scene = container.getState().scene.__r3f;
		if (!child || !beforeChild || !scene) return;
		insertBefore(scene, child, beforeChild);
	},
	getRootHostContext: () => NO_CONTEXT,
	getChildHostContext: () => NO_CONTEXT,
	commitUpdate(instance, type, oldProps, newProps, fiber) {
		var _newProps$args, _oldProps$args, _newProps$args2;
		validateInstance(type, newProps);
		let reconstruct = false;
		if (instance.type === "primitive" && oldProps.object !== newProps.object) reconstruct = true;
		else if (((_newProps$args = newProps.args) == null ? void 0 : _newProps$args.length) !== ((_oldProps$args = oldProps.args) == null ? void 0 : _oldProps$args.length)) reconstruct = true;
		else if ((_newProps$args2 = newProps.args) != null && _newProps$args2.some((value, index) => {
			var _oldProps$args2;
			return value !== ((_oldProps$args2 = oldProps.args) == null ? void 0 : _oldProps$args2[index]);
		})) reconstruct = true;
		if (reconstruct) reconstructed.push([
			instance,
			getInstanceProps(newProps),
			fiber
		]);
		else {
			const changedProps = diffProps(instance, newProps);
			const attach = instance.props.attach;
			instance.props = getInstanceProps(newProps);
			if (attach !== void 0) instance.props.attach = attach;
			else delete instance.props.attach;
			if (Object.keys(changedProps).length) applyProps(instance.object, changedProps);
		}
	},
	finalizeInitialChildren: () => false,
	commitMount() {},
	getPublicInstance: (instance) => instance == null ? void 0 : instance.object,
	prepareForCommit: () => null,
	preparePortalMount: (container) => prepare(container.getState().scene, container, "", {}),
	resetAfterCommit: flushReconstructedInstances,
	shouldSetTextContent: () => false,
	clearContainer: () => false,
	hideInstance,
	unhideInstance,
	createTextInstance: handleTextInstance,
	hideTextInstance: handleTextInstance,
	unhideTextInstance: handleTextInstance,
	supportsMicrotasks: true,
	scheduleMicrotask,
	scheduleTimeout: typeof setTimeout === "function" ? setTimeout : void 0,
	cancelTimeout: typeof clearTimeout === "function" ? clearTimeout : void 0,
	noTimeout: -1,
	getInstanceFromNode: () => null,
	beforeActiveInstanceBlur() {},
	afterActiveInstanceBlur() {},
	detachDeletedInstance() {},
	prepareScopeUpdate() {},
	getInstanceFromScope: () => null,
	shouldAttemptEagerTransition: () => false,
	trackSchedulerEvent: () => {},
	resolveEventType: () => null,
	resolveEventTimeStamp: () => -1.1,
	requestPostPaintCallback() {},
	maySuspendCommit: () => false,
	preloadInstance: () => true,
	suspendInstance() {},
	waitForCommitToBeReady: () => null,
	NotPendingTransition: null,
	HostTransitionContext: /* @__PURE__ */ import_react.createContext(null),
	setCurrentUpdatePriority(newPriority) {
		currentUpdatePriority = newPriority;
	},
	getCurrentUpdatePriority() {
		return currentUpdatePriority;
	},
	resolveUpdatePriority() {
		var _window$event;
		if (currentUpdatePriority !== NoEventPriority) return currentUpdatePriority;
		const eventType = typeof window !== "undefined" ? (_window$event = window.event) == null ? void 0 : _window$event.type : void 0;
		if (eventType === void 0) return r;
		return getEventPriority(eventType);
	},
	resetFormInstance() {},
	rendererPackageName: "@react-three/fiber",
	rendererVersion: packageData.version,
	applyViewTransitionName(_instance, _name, _className) {},
	restoreViewTransitionName(_instance, _props) {},
	cancelViewTransitionName(_instance, _name, _props) {},
	cancelRootViewTransitionName(_rootContainer) {},
	restoreRootViewTransitionName(_rootContainer) {},
	InstanceMeasurement: null,
	measureInstance: (_instance) => null,
	wasInstanceInViewport: (_measurement) => true,
	hasInstanceChanged: (_oldMeasurement, _newMeasurement) => false,
	hasInstanceAffectedParent: (_oldMeasurement, _newMeasurement) => false,
	suspendOnActiveViewTransition(_state, _container) {},
	startGestureTransition: () => null,
	startViewTransition: () => null,
	stopViewTransition(_transition) {},
	createViewTransitionInstance: (_name) => null,
	getCurrentGestureOffset(_provider) {
		throw new Error("startGestureTransition is not yet supported in react-three-fiber.");
	},
	cloneMutableInstance(instance, _keepChildren) {
		return instance;
	},
	cloneMutableTextInstance(textInstance) {
		return textInstance;
	},
	cloneRootViewTransitionContainer(_rootContainer) {
		throw new Error("Not implemented.");
	},
	removeRootViewTransitionClone(_rootContainer, _clone) {
		throw new Error("Not implemented.");
	},
	createFragmentInstance: (_fiber) => null,
	updateFragmentInstanceFiber(_fiber, _instance) {},
	commitNewChildToFragmentInstance(_child, _fragmentInstance) {},
	deleteChildFromFragmentInstance(_child, _fragmentInstance) {},
	measureClonedInstance: (_instance) => null,
	maySuspendCommitOnUpdate: (_type, _oldProps, _newProps) => false,
	maySuspendCommitInSyncRender: (_type, _props) => false,
	startSuspendingCommit: () => null,
	getSuspendedCommitReason: (_state, _rootContainer) => null
});
var _roots = /* @__PURE__ */ new Map();
var shallowLoose = {
	objects: "shallow",
	strict: false
};
function computeInitialSize(canvas, size) {
	if (!size && typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement && canvas.parentElement) {
		const { width, height, top, left } = canvas.parentElement.getBoundingClientRect();
		return {
			width,
			height,
			top,
			left
		};
	} else if (!size && typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) return {
		width: canvas.width,
		height: canvas.height,
		top: 0,
		left: 0
	};
	return {
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		...size
	};
}
function createRoot(canvas) {
	const prevRoot = _roots.get(canvas);
	const prevFiber = prevRoot == null ? void 0 : prevRoot.fiber;
	const prevStore = prevRoot == null ? void 0 : prevRoot.store;
	if (prevRoot) console.warn("R3F.createRoot should only be called once!");
	const logRecoverableError = typeof reportError === "function" ? reportError : console.error;
	const store = prevStore || createStore(invalidate, advance);
	const fiber = prevFiber || reconciler.createContainer(store, t, null, false, null, "", logRecoverableError, logRecoverableError, logRecoverableError, null);
	if (!prevRoot) _roots.set(canvas, {
		fiber,
		store
	});
	let onCreated;
	let lastCamera;
	let configured = false;
	let pending = null;
	return {
		async configure(props = {}) {
			let resolve;
			pending = new Promise((_resolve) => resolve = _resolve);
			let { gl: glConfig, size: propsSize, scene: sceneOptions, events, onCreated: onCreatedCallback, shadows = false, linear = false, flat = false, legacy = false, orthographic = false, frameloop = "always", dpr = [1, 2], performance, raycaster: raycastOptions, camera: cameraOptions, onPointerMissed } = props;
			let state = store.getState();
			let gl = state.gl;
			if (!state.gl) {
				const defaultProps = {
					canvas,
					powerPreference: "high-performance",
					antialias: true,
					alpha: true
				};
				const customRenderer = typeof glConfig === "function" ? await glConfig(defaultProps) : glConfig;
				if (isRenderer(customRenderer)) gl = customRenderer;
				else gl = new WebGLRenderer({
					...defaultProps,
					...glConfig
				});
				state.set({ gl });
			}
			let raycaster = state.raycaster;
			if (!raycaster) state.set({ raycaster: raycaster = new Raycaster() });
			const { params, ...options } = raycastOptions || {};
			if (!is.equ(options, raycaster, shallowLoose)) applyProps(raycaster, { ...options });
			if (!is.equ(params, raycaster.params, shallowLoose)) applyProps(raycaster, { params: {
				...raycaster.params,
				...params
			} });
			if (!state.camera || state.camera === lastCamera && !is.equ(lastCamera, cameraOptions, shallowLoose)) {
				lastCamera = cameraOptions;
				const isCamera = cameraOptions == null ? void 0 : cameraOptions.isCamera;
				const camera = isCamera ? cameraOptions : orthographic ? new OrthographicCamera(0, 0, 0, 0, .1, 1e3) : new PerspectiveCamera(75, 0, .1, 1e3);
				if (!isCamera) {
					camera.position.z = 5;
					if (cameraOptions) {
						applyProps(camera, cameraOptions);
						if (!camera.manual) {
							if ("aspect" in cameraOptions || "left" in cameraOptions || "right" in cameraOptions || "bottom" in cameraOptions || "top" in cameraOptions) {
								camera.manual = true;
								camera.updateProjectionMatrix();
							}
						}
					}
					if (!state.camera && !(cameraOptions != null && cameraOptions.rotation)) camera.lookAt(0, 0, 0);
				}
				state.set({ camera });
				raycaster.camera = camera;
			}
			if (!state.scene) {
				let scene;
				if (sceneOptions != null && sceneOptions.isScene) {
					scene = sceneOptions;
					prepare(scene, store, "", {});
				} else {
					scene = new Scene();
					prepare(scene, store, "", {});
					if (sceneOptions) applyProps(scene, sceneOptions);
				}
				state.set({ scene });
			}
			if (events && !state.events.handlers) state.set({ events: events(store) });
			const size = computeInitialSize(canvas, propsSize);
			if (!is.equ(size, state.size, shallowLoose)) state.setSize(size.width, size.height, size.top, size.left);
			if (dpr && state.viewport.dpr !== calculateDpr(dpr)) state.setDpr(dpr);
			if (state.frameloop !== frameloop) state.setFrameloop(frameloop);
			if (!state.onPointerMissed) state.set({ onPointerMissed });
			if (performance && !is.equ(performance, state.performance, shallowLoose)) state.set((state) => ({ performance: {
				...state.performance,
				...performance
			} }));
			if (!state.xr) {
				var _gl$xr;
				const handleXRFrame = (timestamp, frame) => {
					const state = store.getState();
					if (state.frameloop === "never") return;
					advance(timestamp, true, state, frame);
				};
				const handleSessionChange = () => {
					const state = store.getState();
					state.gl.xr.enabled = state.gl.xr.isPresenting;
					state.gl.xr.setAnimationLoop(state.gl.xr.isPresenting ? handleXRFrame : null);
					if (!state.gl.xr.isPresenting) invalidate(state);
				};
				const xr = {
					connect() {
						const gl = store.getState().gl;
						gl.xr.addEventListener("sessionstart", handleSessionChange);
						gl.xr.addEventListener("sessionend", handleSessionChange);
					},
					disconnect() {
						const gl = store.getState().gl;
						gl.xr.removeEventListener("sessionstart", handleSessionChange);
						gl.xr.removeEventListener("sessionend", handleSessionChange);
					}
				};
				if (typeof ((_gl$xr = gl.xr) == null ? void 0 : _gl$xr.addEventListener) === "function") xr.connect();
				state.set({ xr });
			}
			if (gl.shadowMap) {
				const oldEnabled = gl.shadowMap.enabled;
				const oldType = gl.shadowMap.type;
				gl.shadowMap.enabled = !!shadows;
				if (is.boo(shadows)) gl.shadowMap.type = 2;
				else if (is.str(shadows)) {
					var _types$shadows;
					const types = {
						basic: 0,
						percentage: 1,
						soft: 2,
						variance: 3
					};
					gl.shadowMap.type = (_types$shadows = types[shadows]) != null ? _types$shadows : 2;
				} else if (is.obj(shadows)) Object.assign(gl.shadowMap, shadows);
				if (oldEnabled !== gl.shadowMap.enabled || oldType !== gl.shadowMap.type) gl.shadowMap.needsUpdate = true;
			}
			ColorManagement.enabled = !legacy;
			if (!configured) {
				gl.outputColorSpace = linear ? LinearSRGBColorSpace$1 : SRGBColorSpace$1;
				gl.toneMapping = flat ? 0 : 4;
			}
			if (state.legacy !== legacy) state.set(() => ({ legacy }));
			if (state.linear !== linear) state.set(() => ({ linear }));
			if (state.flat !== flat) state.set(() => ({ flat }));
			if (glConfig && !is.fun(glConfig) && !isRenderer(glConfig) && !is.equ(glConfig, gl, shallowLoose)) applyProps(gl, glConfig);
			onCreated = onCreatedCallback;
			configured = true;
			resolve();
			return this;
		},
		render(children) {
			if (!configured && !pending) this.configure();
			pending.then(() => {
				reconciler.updateContainer(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(Provider, {
					store,
					children,
					onCreated,
					rootElement: canvas
				}), fiber, null, () => void 0);
			});
			return store;
		},
		unmount() {
			unmountComponentAtNode(canvas);
		}
	};
}
function Provider({ store, children, onCreated, rootElement }) {
	useIsomorphicLayoutEffect(() => {
		const state = store.getState();
		state.set((state) => ({ internal: {
			...state.internal,
			active: true
		} }));
		if (onCreated) onCreated(state);
		if (!store.getState().events.connected) state.events.connect == null || state.events.connect(rootElement);
	}, []);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(context.Provider, {
		value: store,
		children
	});
}
function unmountComponentAtNode(canvas, callback) {
	const root = _roots.get(canvas);
	const fiber = root == null ? void 0 : root.fiber;
	if (fiber) {
		const state = root == null ? void 0 : root.store.getState();
		if (state) state.internal.active = false;
		reconciler.updateContainer(null, fiber, null, () => {
			if (state) setTimeout(() => {
				try {
					var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
					state.events.disconnect == null || state.events.disconnect();
					(_state$gl = state.gl) == null || (_state$gl$renderLists = _state$gl.renderLists) == null || _state$gl$renderLists.dispose == null || _state$gl$renderLists.dispose();
					(_state$gl2 = state.gl) == null || _state$gl2.forceContextLoss == null || _state$gl2.forceContextLoss();
					if ((_state$gl3 = state.gl) != null && _state$gl3.xr) state.xr.disconnect();
					dispose(state.scene);
					_roots.delete(canvas);
					if (callback) callback(canvas);
				} catch (e) {}
			}, 500);
		});
	}
}
function createPortal(children, container, state) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Portal, {
		children,
		container,
		state
	});
}
function Portal({ state = {}, children, container }) {
	/** This has to be a component because it would not be able to call useThree/useStore otherwise since
	*  if this is our environment, then we are not in r3f's renderer but in react-dom, it would trigger
	*  the "R3F hooks can only be used within the Canvas component!" warning:
	*  <Canvas>
	*    {createPortal(...)} */
	const { events, size, ...rest } = state;
	const previousRoot = useStore();
	const [raycaster] = import_react.useState(() => new Raycaster());
	const [pointer] = import_react.useState(() => new Vector2());
	const inject = useMutableCallback((rootState, injectState) => {
		let viewport = void 0;
		if (injectState.camera && size) {
			const camera = injectState.camera;
			viewport = rootState.viewport.getCurrentViewport(camera, new Vector3(), size);
			if (camera !== rootState.camera) updateCamera(camera, size);
		}
		return {
			...rootState,
			...injectState,
			scene: container,
			raycaster,
			pointer,
			mouse: pointer,
			previousRoot,
			events: {
				...rootState.events,
				...injectState.events,
				...events
			},
			size: {
				...rootState.size,
				...size
			},
			viewport: {
				...rootState.viewport,
				...viewport
			},
			setEvents: (events) => injectState.set((state) => ({
				...state,
				events: {
					...state.events,
					...events
				}
			}))
		};
	});
	const usePortalStore = import_react.useMemo(() => {
		const store = createWithEqualityFn((set, get) => ({
			...rest,
			set,
			get
		}));
		const onMutate = (prev) => store.setState((state) => inject.current(prev, state));
		onMutate(previousRoot.getState());
		previousRoot.subscribe(onMutate);
		return store;
	}, [previousRoot, container]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: reconciler.createPortal(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(context.Provider, {
		value: usePortalStore,
		children
	}), usePortalStore, null) });
}
var globalEffects = /* @__PURE__ */ new Set();
var globalAfterEffects = /* @__PURE__ */ new Set();
var globalTailEffects = /* @__PURE__ */ new Set();
function run(effects, timestamp) {
	if (!effects.size) return;
	for (const { callback } of effects.values()) callback(timestamp);
}
function flushGlobalEffects(type, timestamp) {
	switch (type) {
		case "before": return run(globalEffects, timestamp);
		case "after": return run(globalAfterEffects, timestamp);
		case "tail": return run(globalTailEffects, timestamp);
	}
}
var subscribers;
var subscription;
function update(timestamp, state, frame) {
	let delta = state.clock.getDelta();
	if (state.frameloop === "never" && typeof timestamp === "number") {
		delta = timestamp - state.clock.elapsedTime;
		state.clock.oldTime = state.clock.elapsedTime;
		state.clock.elapsedTime = timestamp;
	}
	subscribers = state.internal.subscribers;
	for (let i = 0; i < subscribers.length; i++) {
		subscription = subscribers[i];
		subscription.ref.current(subscription.store.getState(), delta, frame);
	}
	if (!state.internal.priority && state.gl.render) state.gl.render(state.scene, state.camera);
	state.internal.frames = Math.max(0, state.internal.frames - 1);
	return state.frameloop === "always" ? 1 : state.internal.frames;
}
var running = false;
var useFrameInProgress = false;
var repeat;
var frame;
var state;
function loop(timestamp) {
	frame = requestAnimationFrame(loop);
	running = true;
	repeat = 0;
	flushGlobalEffects("before", timestamp);
	useFrameInProgress = true;
	for (const root of _roots.values()) {
		var _state$gl$xr;
		state = root.store.getState();
		if (state.internal.active && (state.frameloop === "always" || state.internal.frames > 0) && !((_state$gl$xr = state.gl.xr) != null && _state$gl$xr.isPresenting)) repeat += update(timestamp, state);
	}
	useFrameInProgress = false;
	flushGlobalEffects("after", timestamp);
	if (repeat === 0) {
		flushGlobalEffects("tail", timestamp);
		running = false;
		return cancelAnimationFrame(frame);
	}
}
/**
* Invalidates the view, requesting a frame to be rendered. Will globally invalidate unless passed a root's state.
* @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#invalidate
*/
function invalidate(state, frames = 1) {
	var _state$gl$xr2;
	if (!state) return _roots.forEach((root) => invalidate(root.store.getState(), frames));
	if ((_state$gl$xr2 = state.gl.xr) != null && _state$gl$xr2.isPresenting || !state.internal.active || state.frameloop === "never") return;
	if (frames > 1) state.internal.frames = Math.min(60, state.internal.frames + frames);
	else if (useFrameInProgress) state.internal.frames = 2;
	else state.internal.frames = 1;
	if (!running) {
		running = true;
		requestAnimationFrame(loop);
	}
}
/**
* Advances the frameloop and runs render effects, useful for when manually rendering via `frameloop="never"`.
* @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#advance
*/
function advance(timestamp, runGlobalEffects = true, state, frame) {
	if (runGlobalEffects) flushGlobalEffects("before", timestamp);
	if (!state) for (const root of _roots.values()) update(timestamp, root.store.getState());
	else update(timestamp, state, frame);
	if (runGlobalEffects) flushGlobalEffects("after", timestamp);
}
var DOM_EVENTS = {
	onClick: ["click", false],
	onContextMenu: ["contextmenu", false],
	onDoubleClick: ["dblclick", false],
	onWheel: ["wheel", true],
	onPointerDown: ["pointerdown", true],
	onPointerUp: ["pointerup", true],
	onPointerLeave: ["pointerleave", true],
	onPointerMove: ["pointermove", true],
	onPointerCancel: ["pointercancel", true],
	onLostPointerCapture: ["lostpointercapture", true]
};
/** Default R3F event manager for web */
function createPointerEvents(store) {
	const { handlePointer } = createEvents(store);
	return {
		priority: 1,
		enabled: true,
		compute(event, state, previous) {
			state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
			state.raycaster.setFromCamera(state.pointer, state.camera);
		},
		connected: void 0,
		handlers: Object.keys(DOM_EVENTS).reduce((acc, key) => ({
			...acc,
			[key]: handlePointer(key)
		}), {}),
		update: () => {
			var _internal$lastEvent;
			const { events, internal } = store.getState();
			if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
		},
		connect: (target) => {
			const { set, events } = store.getState();
			events.disconnect == null || events.disconnect();
			set((state) => ({ events: {
				...state.events,
				connected: target
			} }));
			if (events.handlers) for (const name in events.handlers) {
				const event = events.handlers[name];
				const [eventName, passive] = DOM_EVENTS[name];
				target.addEventListener(eventName, event, { passive });
			}
		},
		disconnect: () => {
			const { set, events } = store.getState();
			if (events.connected) {
				if (events.handlers) for (const name in events.handlers) {
					const event = events.handlers[name];
					const [eventName] = DOM_EVENTS[name];
					events.connected.removeEventListener(eventName, event);
				}
				set((state) => ({ events: {
					...state.events,
					connected: void 0
				} }));
			}
		}
	};
}
//#endregion
//#region node_modules/react-use-measure/dist/index.js
function g(n, t) {
	let o;
	return (...i) => {
		window.clearTimeout(o), o = window.setTimeout(() => n(...i), t);
	};
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
	debounce: 0,
	scroll: !1,
	offsetSize: !1
}) {
	const a = o || (typeof window == "undefined" ? class {} : window.ResizeObserver);
	if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
	const [c, h] = (0, import_react.useState)({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		bottom: 0,
		right: 0,
		x: 0,
		y: 0
	}), e = (0, import_react.useRef)({
		element: null,
		scrollContainers: null,
		resizeObserver: null,
		lastBounds: c,
		orientationHandler: null
	}), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, import_react.useRef)(!1);
	(0, import_react.useEffect)(() => (w.current = !0, () => void (w.current = !1)));
	const [z, m, s] = (0, import_react.useMemo)(() => {
		const r = () => {
			if (!e.current.element) return;
			const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
				left: y,
				top: C,
				width: H,
				height: O,
				bottom: S,
				right: x,
				x: B,
				y: R
			};
			e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
		};
		return [
			r,
			f ? g(r, f) : r,
			d ? g(r, d) : r
		];
	}, [
		h,
		i,
		d,
		f
	]);
	function v() {
		e.current.scrollContainers && (e.current.scrollContainers.forEach((r) => r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
	}
	function b() {
		e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r) => r.addEventListener("scroll", s, {
			capture: !0,
			passive: !0
		})), e.current.orientationHandler = () => {
			s();
		}, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
	}
	const L = (r) => {
		!r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
	};
	return X(s, !!t), W(m), (0, import_react.useEffect)(() => {
		v(), b();
	}, [
		t,
		s,
		m
	]), (0, import_react.useEffect)(() => v, []), [
		L,
		c,
		z
	];
}
function W(n) {
	(0, import_react.useEffect)(() => {
		const t = n;
		return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
	}, [n]);
}
function X(n, t) {
	(0, import_react.useEffect)(() => {
		if (t) {
			const o = n;
			return window.addEventListener("scroll", o, {
				capture: !0,
				passive: !0
			}), () => void window.removeEventListener("scroll", o, !0);
		}
	}, [n, t]);
}
function E(n) {
	const t = [];
	if (!n || n === document.body) return t;
	const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
	return [
		o,
		i,
		a
	].some((c) => c === "auto" || c === "scroll") && t.push(n), [...t, ...E(n.parentElement)];
}
var k = [
	"x",
	"y",
	"top",
	"bottom",
	"left",
	"right",
	"width",
	"height"
];
var D = (n, t) => k.every((o) => n[o] === t[o]);
//#endregion
//#region node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
function CanvasImpl({ ref, children, fallback, resize, style, gl, events = createPointerEvents, eventSource, eventPrefix, shadows, linear, flat, legacy, orthographic, frameloop, dpr, performance, raycaster, camera, scene, onPointerMissed, onCreated, ...props }) {
	import_react.useMemo(() => extend(three_module_exports), []);
	const Bridge = useBridge();
	const [containerRef, containerRect] = j({
		scroll: true,
		debounce: {
			scroll: 50,
			resize: 0
		},
		...resize
	});
	const canvasRef = import_react.useRef(null);
	const divRef = import_react.useRef(null);
	import_react.useImperativeHandle(ref, () => canvasRef.current);
	const handlePointerMissed = useMutableCallback(onPointerMissed);
	const [block, setBlock] = import_react.useState(false);
	const [error, setError] = import_react.useState(false);
	if (block) throw block;
	if (error) throw error;
	const root = import_react.useRef(null);
	useIsomorphicLayoutEffect(() => {
		const canvas = canvasRef.current;
		if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
			if (!root.current) root.current = createRoot(canvas);
			async function run() {
				await root.current.configure({
					gl,
					scene,
					events,
					shadows,
					linear,
					flat,
					legacy,
					orthographic,
					frameloop,
					dpr,
					performance,
					raycaster,
					camera,
					size: containerRect,
					onPointerMissed: (...args) => handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
					onCreated: (state) => {
						state.events.connect == null || state.events.connect(eventSource ? isRef$1(eventSource) ? eventSource.current : eventSource : divRef.current);
						if (eventPrefix) state.setEvents({ compute: (event, state) => {
							const x = event[eventPrefix + "X"];
							const y = event[eventPrefix + "Y"];
							state.pointer.set(x / state.size.width * 2 - 1, -(y / state.size.height) * 2 + 1);
							state.raycaster.setFromCamera(state.pointer, state.camera);
						} });
						onCreated?.(state);
					}
				});
				root.current.render(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(Bridge, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ErrorBoundary, {
					set: setError,
					children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
						fallback: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Block, { set: setBlock }),
						children: children != null ? children : null
					})
				}) }));
			}
			run();
		}
	});
	import_react.useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) return () => unmountComponentAtNode(canvas);
	}, []);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
		ref: divRef,
		style: {
			position: "relative",
			width: "100%",
			height: "100%",
			overflow: "hidden",
			pointerEvents: eventSource ? "none" : "auto",
			...style
		},
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
			ref: containerRef,
			style: {
				width: "100%",
				height: "100%"
			},
			children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				style: { display: "block" },
				children: fallback
			})
		})
	});
}
/**
* A DOM canvas which accepts threejs elements as children.
* @see https://docs.pmnd.rs/react-three-fiber/api/canvas
*/
function Canvas(props) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(m, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CanvasImpl, { ...props }) });
}
//#endregion
//#region node_modules/three-stdlib/_polyfill/constants.js
var version = /* @__PURE__ */ (() => parseInt("185".replace(/\D+/g, "")))();
//#endregion
//#region node_modules/three-stdlib/utils/BufferGeometryUtils.js
function toTrianglesDrawMode(geometry, drawMode) {
	if (drawMode === 0) {
		console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
		return geometry;
	}
	if (drawMode === 2 || drawMode === 1) {
		let index = geometry.getIndex();
		if (index === null) {
			const indices = [];
			const position = geometry.getAttribute("position");
			if (position !== void 0) {
				for (let i = 0; i < position.count; i++) indices.push(i);
				geometry.setIndex(indices);
				index = geometry.getIndex();
			} else {
				console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
				return geometry;
			}
		}
		const numberOfTriangles = index.count - 2;
		const newIndices = [];
		if (index) if (drawMode === 2) for (let i = 1; i <= numberOfTriangles; i++) {
			newIndices.push(index.getX(0));
			newIndices.push(index.getX(i));
			newIndices.push(index.getX(i + 1));
		}
		else for (let i = 0; i < numberOfTriangles; i++) if (i % 2 === 0) {
			newIndices.push(index.getX(i));
			newIndices.push(index.getX(i + 1));
			newIndices.push(index.getX(i + 2));
		} else {
			newIndices.push(index.getX(i + 2));
			newIndices.push(index.getX(i + 1));
			newIndices.push(index.getX(i));
		}
		if (newIndices.length / 3 !== numberOfTriangles) console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
		const newGeometry = geometry.clone();
		newGeometry.setIndex(newIndices);
		newGeometry.clearGroups();
		return newGeometry;
	} else {
		console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", drawMode);
		return geometry;
	}
}
//#endregion
//#region node_modules/three-stdlib/node_modules/fflate/esm/index.mjs
var require$1 = createRequire("/");
try {
	require$1("worker_threads").Worker;
} catch (e) {}
var u8 = Uint8Array;
var u16 = Uint16Array;
var u32 = Uint32Array;
var fleb = new u8([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]);
var fdeb = new u8([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]);
var clim = new u8([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var freb = function(eb, start) {
	var b = new u16(31);
	for (var i = 0; i < 31; ++i) b[i] = start += 1 << eb[i - 1];
	var r = new u32(b[30]);
	for (var i = 1; i < 30; ++i) for (var j = b[i]; j < b[i + 1]; ++j) r[j] = j - b[i] << 5 | i;
	return [b, r];
};
var _a = freb(fleb, 2);
var fl = _a[0];
var revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b[0];
_b[1];
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
	var x = (i & 43690) >>> 1 | (i & 21845) << 1;
	x = (x & 52428) >>> 2 | (x & 13107) << 2;
	x = (x & 61680) >>> 4 | (x & 3855) << 4;
	rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var hMap = (function(cd, mb, r) {
	var s = cd.length;
	var i = 0;
	var l = new u16(mb);
	for (; i < s; ++i) ++l[cd[i] - 1];
	var le = new u16(mb);
	for (i = 0; i < mb; ++i) le[i] = le[i - 1] + l[i - 1] << 1;
	var co;
	if (r) {
		co = new u16(1 << mb);
		var rvb = 15 - mb;
		for (i = 0; i < s; ++i) if (cd[i]) {
			var sv = i << 4 | cd[i];
			var r_1 = mb - cd[i];
			var v = le[cd[i] - 1]++ << r_1;
			for (var m = v | (1 << r_1) - 1; v <= m; ++v) co[rev[v] >>> rvb] = sv;
		}
	} else {
		co = new u16(s);
		for (i = 0; i < s; ++i) if (cd[i]) co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
	}
	return co;
});
var flt = new u8(288);
for (var i = 0; i < 144; ++i) flt[i] = 8;
for (var i = 144; i < 256; ++i) flt[i] = 9;
for (var i = 256; i < 280; ++i) flt[i] = 7;
for (var i = 280; i < 288; ++i) flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i) fdt[i] = 5;
var flrm = /*#__PURE__*/ hMap(flt, 9, 1);
var fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
var max = function(a) {
	var m = a[0];
	for (var i = 1; i < a.length; ++i) if (a[i] > m) m = a[i];
	return m;
};
var bits = function(d, p, m) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
	return (p / 8 | 0) + (p & 7 && 1);
};
var slc = function(v, s, e) {
	if (s == null || s < 0) s = 0;
	if (e == null || e > v.length) e = v.length;
	var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
	n.set(v.subarray(s, e));
	return n;
};
var inflt = function(dat, buf, st) {
	var sl = dat.length;
	if (!sl || st && !st.l && sl < 5) return buf || new u8(0);
	var noBuf = !buf || st;
	var noSt = !st || st.i;
	if (!st) st = {};
	if (!buf) buf = new u8(sl * 3);
	var cbuf = function(l) {
		var bl = buf.length;
		if (l > bl) {
			var nbuf = new u8(Math.max(bl * 2, l));
			nbuf.set(buf);
			buf = nbuf;
		}
	};
	var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
	var tbts = sl * 8;
	do {
		if (!lm) {
			st.f = final = bits(dat, pos, 1);
			var type = bits(dat, pos + 1, 3);
			pos += 3;
			if (!type) {
				var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
				if (t > sl) {
					if (noSt) throw "unexpected EOF";
					break;
				}
				if (noBuf) cbuf(bt + l);
				buf.set(dat.subarray(s, t), bt);
				st.b = bt += l, st.p = pos = t * 8;
				continue;
			} else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
			else if (type == 2) {
				var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
				var tl = hLit + bits(dat, pos + 5, 31) + 1;
				pos += 14;
				var ldt = new u8(tl);
				var clt = new u8(19);
				for (var i = 0; i < hcLen; ++i) clt[clim[i]] = bits(dat, pos + i * 3, 7);
				pos += hcLen * 3;
				var clb = max(clt), clbmsk = (1 << clb) - 1;
				var clm = hMap(clt, clb, 1);
				for (var i = 0; i < tl;) {
					var r = clm[bits(dat, pos, clbmsk)];
					pos += r & 15;
					var s = r >>> 4;
					if (s < 16) ldt[i++] = s;
					else {
						var c = 0, n = 0;
						if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
						else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
						else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
						while (n--) ldt[i++] = c;
					}
				}
				var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
				lbt = max(lt);
				dbt = max(dt);
				lm = hMap(lt, lbt, 1);
				dm = hMap(dt, dbt, 1);
			} else throw "invalid block type";
			if (pos > tbts) {
				if (noSt) throw "unexpected EOF";
				break;
			}
		}
		if (noBuf) cbuf(bt + 131072);
		var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
		var lpos = pos;
		for (;; lpos = pos) {
			var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
			pos += c & 15;
			if (pos > tbts) {
				if (noSt) throw "unexpected EOF";
				break;
			}
			if (!c) throw "invalid length/literal";
			if (sym < 256) buf[bt++] = sym;
			else if (sym == 256) {
				lpos = pos, lm = null;
				break;
			} else {
				var add = sym - 254;
				if (sym > 264) {
					var i = sym - 257, b = fleb[i];
					add = bits(dat, pos, (1 << b) - 1) + fl[i];
					pos += b;
				}
				var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
				if (!d) throw "invalid distance";
				pos += d & 15;
				var dt = fd[dsym];
				if (dsym > 3) {
					var b = fdeb[dsym];
					dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
				}
				if (pos > tbts) {
					if (noSt) throw "unexpected EOF";
					break;
				}
				if (noBuf) cbuf(bt + 131072);
				var end = bt + add;
				for (; bt < end; bt += 4) {
					buf[bt] = buf[bt - dt];
					buf[bt + 1] = buf[bt + 1 - dt];
					buf[bt + 2] = buf[bt + 2 - dt];
					buf[bt + 3] = buf[bt + 3 - dt];
				}
				bt = end;
			}
		}
		st.l = lm, st.p = lpos, st.b = bt;
		if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
	} while (!final);
	return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /*#__PURE__*/ new u8(0);
var zlv = function(d) {
	if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw "invalid zlib data";
	if (d[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
/**
* Expands Zlib data
* @param data The data to decompress
* @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
* @returns The decompressed version of the data
*/
function unzlibSync(data, out) {
	return inflt((zlv(data), data.subarray(2, -4)), out);
}
var td = typeof TextDecoder != "undefined" && /*#__PURE__*/ new TextDecoder();
try {
	td.decode(et, { stream: true });
} catch (e) {}
//#endregion
//#region node_modules/three-stdlib/objects/GroundProjectedEnv.js
var isCubeTexture = (def) => def && def.isCubeTexture;
var GroundProjectedEnv = class extends Mesh {
	constructor(texture, options) {
		var _a, _b;
		const isCubeMap = isCubeTexture(texture);
		const cubeSize = ((_b = isCubeMap ? (_a = texture.image[0]) == null ? void 0 : _a.width : texture.image.width) != null ? _b : 1024) / 4;
		const _lodMax = Math.floor(Math.log2(cubeSize));
		const _cubeSize = Math.pow(2, _lodMax);
		const width = 3 * Math.max(_cubeSize, 112);
		const height = 4 * _cubeSize;
		const defines = [
			isCubeMap ? "#define ENVMAP_TYPE_CUBE" : "",
			`#define CUBEUV_TEXEL_WIDTH ${1 / width}`,
			`#define CUBEUV_TEXEL_HEIGHT ${1 / height}`,
			`#define CUBEUV_MAX_MIP ${_lodMax}.0`
		];
		const vertexShader = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `;
		const fragmentShader = defines.join("\n") + `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `;
		const uniforms = {
			map: { value: texture },
			height: { value: (options == null ? void 0 : options.height) || 15 },
			radius: { value: (options == null ? void 0 : options.radius) || 100 }
		};
		const geometry = new IcosahedronGeometry(1, 16);
		const material = new ShaderMaterial({
			uniforms,
			fragmentShader,
			vertexShader,
			side: 2
		});
		super(geometry, material);
	}
	set radius(radius) {
		this.material.uniforms.radius.value = radius;
	}
	get radius() {
		return this.material.uniforms.radius.value;
	}
	set height(height) {
		this.material.uniforms.height.value = height;
	}
	get height() {
		return this.material.uniforms.height.value;
	}
};
//#endregion
//#region node_modules/three-stdlib/controls/EventDispatcher.js
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
	__defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var EventDispatcher = class {
	constructor() {
		__publicField$1(this, "_listeners");
	}
	/**
	* Adds a listener to an event type.
	* @param type The type of event to listen to.
	* @param listener The function that gets called when the event is fired.
	*/
	addEventListener(type, listener) {
		if (this._listeners === void 0) this._listeners = {};
		const listeners = this._listeners;
		if (listeners[type] === void 0) listeners[type] = [];
		if (listeners[type].indexOf(listener) === -1) listeners[type].push(listener);
	}
	/**
	* Checks if listener is added to an event type.
	* @param type The type of event to listen to.
	* @param listener The function that gets called when the event is fired.
	*/
	hasEventListener(type, listener) {
		if (this._listeners === void 0) return false;
		const listeners = this._listeners;
		return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
	}
	/**
	* Removes a listener from an event type.
	* @param type The type of the listener that gets removed.
	* @param listener The listener function that gets removed.
	*/
	removeEventListener(type, listener) {
		if (this._listeners === void 0) return;
		const listenerArray = this._listeners[type];
		if (listenerArray !== void 0) {
			const index = listenerArray.indexOf(listener);
			if (index !== -1) listenerArray.splice(index, 1);
		}
	}
	/**
	* Fire an event type.
	* @param event The event that gets fired.
	*/
	dispatchEvent(event) {
		if (this._listeners === void 0) return;
		const listenerArray = this._listeners[event.type];
		if (listenerArray !== void 0) {
			event.target = this;
			const array = listenerArray.slice(0);
			for (let i = 0, l = array.length; i < l; i++) array[i].call(this, event);
			event.target = null;
		}
	}
};
//#endregion
//#region node_modules/three-stdlib/controls/OrbitControls.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
	__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var _ray = /* @__PURE__ */ new Ray();
var _plane = /* @__PURE__ */ new Plane();
var TILT_LIMIT = Math.cos(70 * (Math.PI / 180));
var moduloWrapAround = (offset, capacity) => (offset % capacity + capacity) % capacity;
var OrbitControls$1 = class extends EventDispatcher {
	constructor(object, domElement) {
		super();
		__publicField(this, "object");
		__publicField(this, "domElement");
		__publicField(this, "enabled", true);
		__publicField(this, "target", new Vector3());
		__publicField(this, "minDistance", 0);
		__publicField(this, "maxDistance", Infinity);
		__publicField(this, "minZoom", 0);
		__publicField(this, "maxZoom", Infinity);
		__publicField(this, "minPolarAngle", 0);
		__publicField(this, "maxPolarAngle", Math.PI);
		__publicField(this, "minAzimuthAngle", -Infinity);
		__publicField(this, "maxAzimuthAngle", Infinity);
		__publicField(this, "enableDamping", false);
		__publicField(this, "dampingFactor", .05);
		__publicField(this, "enableZoom", true);
		__publicField(this, "zoomSpeed", 1);
		__publicField(this, "enableRotate", true);
		__publicField(this, "rotateSpeed", 1);
		__publicField(this, "enablePan", true);
		__publicField(this, "panSpeed", 1);
		__publicField(this, "screenSpacePanning", true);
		__publicField(this, "keyPanSpeed", 7);
		__publicField(this, "zoomToCursor", false);
		__publicField(this, "autoRotate", false);
		__publicField(this, "autoRotateSpeed", 2);
		__publicField(this, "reverseOrbit", false);
		__publicField(this, "reverseHorizontalOrbit", false);
		__publicField(this, "reverseVerticalOrbit", false);
		__publicField(this, "keys", {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		});
		__publicField(this, "mouseButtons", {
			LEFT: MOUSE.ROTATE,
			MIDDLE: MOUSE.DOLLY,
			RIGHT: MOUSE.PAN
		});
		__publicField(this, "touches", {
			ONE: TOUCH.ROTATE,
			TWO: TOUCH.DOLLY_PAN
		});
		__publicField(this, "target0");
		__publicField(this, "position0");
		__publicField(this, "zoom0");
		__publicField(this, "_domElementKeyEvents", null);
		__publicField(this, "getPolarAngle");
		__publicField(this, "getAzimuthalAngle");
		__publicField(this, "setPolarAngle");
		__publicField(this, "setAzimuthalAngle");
		__publicField(this, "getDistance");
		__publicField(this, "getZoomScale");
		__publicField(this, "listenToKeyEvents");
		__publicField(this, "stopListenToKeyEvents");
		__publicField(this, "saveState");
		__publicField(this, "reset");
		__publicField(this, "update");
		__publicField(this, "connect");
		__publicField(this, "dispose");
		__publicField(this, "dollyIn");
		__publicField(this, "dollyOut");
		__publicField(this, "getScale");
		__publicField(this, "setScale");
		this.object = object;
		this.domElement = domElement;
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;
		this.getPolarAngle = () => spherical.phi;
		this.getAzimuthalAngle = () => spherical.theta;
		this.setPolarAngle = (value) => {
			let phi = moduloWrapAround(value, 2 * Math.PI);
			let currentPhi = spherical.phi;
			if (currentPhi < 0) currentPhi += 2 * Math.PI;
			if (phi < 0) phi += 2 * Math.PI;
			let phiDist = Math.abs(phi - currentPhi);
			if (2 * Math.PI - phiDist < phiDist) if (phi < currentPhi) phi += 2 * Math.PI;
			else currentPhi += 2 * Math.PI;
			sphericalDelta.phi = phi - currentPhi;
			scope.update();
		};
		this.setAzimuthalAngle = (value) => {
			let theta = moduloWrapAround(value, 2 * Math.PI);
			let currentTheta = spherical.theta;
			if (currentTheta < 0) currentTheta += 2 * Math.PI;
			if (theta < 0) theta += 2 * Math.PI;
			let thetaDist = Math.abs(theta - currentTheta);
			if (2 * Math.PI - thetaDist < thetaDist) if (theta < currentTheta) theta += 2 * Math.PI;
			else currentTheta += 2 * Math.PI;
			sphericalDelta.theta = theta - currentTheta;
			scope.update();
		};
		this.getDistance = () => scope.object.position.distanceTo(scope.target);
		this.listenToKeyEvents = (domElement2) => {
			domElement2.addEventListener("keydown", onKeyDown);
			this._domElementKeyEvents = domElement2;
		};
		this.stopListenToKeyEvents = () => {
			this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
			this._domElementKeyEvents = null;
		};
		this.saveState = () => {
			scope.target0.copy(scope.target);
			scope.position0.copy(scope.object.position);
			scope.zoom0 = scope.object.zoom;
		};
		this.reset = () => {
			scope.target.copy(scope.target0);
			scope.object.position.copy(scope.position0);
			scope.object.zoom = scope.zoom0;
			scope.object.updateProjectionMatrix();
			scope.dispatchEvent(changeEvent);
			scope.update();
			state = STATE.NONE;
		};
		this.update = (() => {
			const offset = new Vector3();
			const up = new Vector3(0, 1, 0);
			const quat = new Quaternion().setFromUnitVectors(object.up, up);
			const quatInverse = quat.clone().invert();
			const lastPosition = new Vector3();
			const lastQuaternion = new Quaternion();
			const twoPI = 2 * Math.PI;
			return function update() {
				const position = scope.object.position;
				quat.setFromUnitVectors(object.up, up);
				quatInverse.copy(quat).invert();
				offset.copy(position).sub(scope.target);
				offset.applyQuaternion(quat);
				spherical.setFromVector3(offset);
				if (scope.autoRotate && state === STATE.NONE) rotateLeft(getAutoRotationAngle());
				if (scope.enableDamping) {
					spherical.theta += sphericalDelta.theta * scope.dampingFactor;
					spherical.phi += sphericalDelta.phi * scope.dampingFactor;
				} else {
					spherical.theta += sphericalDelta.theta;
					spherical.phi += sphericalDelta.phi;
				}
				let min = scope.minAzimuthAngle;
				let max = scope.maxAzimuthAngle;
				if (isFinite(min) && isFinite(max)) {
					if (min < -Math.PI) min += twoPI;
					else if (min > Math.PI) min -= twoPI;
					if (max < -Math.PI) max += twoPI;
					else if (max > Math.PI) max -= twoPI;
					if (min <= max) spherical.theta = Math.max(min, Math.min(max, spherical.theta));
					else spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
				}
				spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
				spherical.makeSafe();
				if (scope.enableDamping === true) scope.target.addScaledVector(panOffset, scope.dampingFactor);
				else scope.target.add(panOffset);
				if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) spherical.radius = clampDistance(spherical.radius);
				else spherical.radius = clampDistance(spherical.radius * scale);
				offset.setFromSpherical(spherical);
				offset.applyQuaternion(quatInverse);
				position.copy(scope.target).add(offset);
				if (!scope.object.matrixAutoUpdate) scope.object.updateMatrix();
				scope.object.lookAt(scope.target);
				if (scope.enableDamping === true) {
					sphericalDelta.theta *= 1 - scope.dampingFactor;
					sphericalDelta.phi *= 1 - scope.dampingFactor;
					panOffset.multiplyScalar(1 - scope.dampingFactor);
				} else {
					sphericalDelta.set(0, 0, 0);
					panOffset.set(0, 0, 0);
				}
				let zoomChanged = false;
				if (scope.zoomToCursor && performCursorZoom) {
					let newRadius = null;
					if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
						const prevRadius = offset.length();
						newRadius = clampDistance(prevRadius * scale);
						const radiusDelta = prevRadius - newRadius;
						scope.object.position.addScaledVector(dollyDirection, radiusDelta);
						scope.object.updateMatrixWorld();
					} else if (scope.object.isOrthographicCamera) {
						const mouseBefore = new Vector3(mouse.x, mouse.y, 0);
						mouseBefore.unproject(scope.object);
						scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
						scope.object.updateProjectionMatrix();
						zoomChanged = true;
						const mouseAfter = new Vector3(mouse.x, mouse.y, 0);
						mouseAfter.unproject(scope.object);
						scope.object.position.sub(mouseAfter).add(mouseBefore);
						scope.object.updateMatrixWorld();
						newRadius = offset.length();
					} else {
						console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
						scope.zoomToCursor = false;
					}
					if (newRadius !== null) if (scope.screenSpacePanning) scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
					else {
						_ray.origin.copy(scope.object.position);
						_ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
						if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) object.lookAt(scope.target);
						else {
							_plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
							_ray.intersectPlane(_plane, scope.target);
						}
					}
				} else if (scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
					zoomChanged = scale !== 1;
					if (zoomChanged) {
						scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
						scope.object.updateProjectionMatrix();
					}
				}
				scale = 1;
				performCursorZoom = false;
				if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
					scope.dispatchEvent(changeEvent);
					lastPosition.copy(scope.object.position);
					lastQuaternion.copy(scope.object.quaternion);
					zoomChanged = false;
					return true;
				}
				return false;
			};
		})();
		this.connect = (domElement2) => {
			scope.domElement = domElement2;
			scope.domElement.style.touchAction = "none";
			scope.domElement.addEventListener("contextmenu", onContextMenu);
			scope.domElement.addEventListener("pointerdown", onPointerDown);
			scope.domElement.addEventListener("pointercancel", onPointerUp);
			scope.domElement.addEventListener("wheel", onMouseWheel);
		};
		this.dispose = () => {
			var _a, _b, _c, _d, _e, _f;
			if (scope.domElement) scope.domElement.style.touchAction = "auto";
			(_a = scope.domElement) == null || _a.removeEventListener("contextmenu", onContextMenu);
			(_b = scope.domElement) == null || _b.removeEventListener("pointerdown", onPointerDown);
			(_c = scope.domElement) == null || _c.removeEventListener("pointercancel", onPointerUp);
			(_d = scope.domElement) == null || _d.removeEventListener("wheel", onMouseWheel);
			(_e = scope.domElement) == null || _e.ownerDocument.removeEventListener("pointermove", onPointerMove);
			(_f = scope.domElement) == null || _f.ownerDocument.removeEventListener("pointerup", onPointerUp);
			if (scope._domElementKeyEvents !== null) scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
		};
		const scope = this;
		const changeEvent = { type: "change" };
		const startEvent = { type: "start" };
		const endEvent = { type: "end" };
		const STATE = {
			NONE: -1,
			ROTATE: 0,
			DOLLY: 1,
			PAN: 2,
			TOUCH_ROTATE: 3,
			TOUCH_PAN: 4,
			TOUCH_DOLLY_PAN: 5,
			TOUCH_DOLLY_ROTATE: 6
		};
		let state = STATE.NONE;
		const EPS = 1e-6;
		const spherical = new Spherical();
		const sphericalDelta = new Spherical();
		let scale = 1;
		const panOffset = new Vector3();
		const rotateStart = new Vector2();
		const rotateEnd = new Vector2();
		const rotateDelta = new Vector2();
		const panStart = new Vector2();
		const panEnd = new Vector2();
		const panDelta = new Vector2();
		const dollyStart = new Vector2();
		const dollyEnd = new Vector2();
		const dollyDelta = new Vector2();
		const dollyDirection = new Vector3();
		const mouse = new Vector2();
		let performCursorZoom = false;
		const pointers = [];
		const pointerPositions = {};
		function getAutoRotationAngle() {
			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
		}
		function getZoomScale() {
			return Math.pow(.95, scope.zoomSpeed);
		}
		function rotateLeft(angle) {
			if (scope.reverseOrbit || scope.reverseHorizontalOrbit) sphericalDelta.theta += angle;
			else sphericalDelta.theta -= angle;
		}
		function rotateUp(angle) {
			if (scope.reverseOrbit || scope.reverseVerticalOrbit) sphericalDelta.phi += angle;
			else sphericalDelta.phi -= angle;
		}
		const panLeft = (() => {
			const v = new Vector3();
			return function panLeft2(distance, objectMatrix) {
				v.setFromMatrixColumn(objectMatrix, 0);
				v.multiplyScalar(-distance);
				panOffset.add(v);
			};
		})();
		const panUp = (() => {
			const v = new Vector3();
			return function panUp2(distance, objectMatrix) {
				if (scope.screenSpacePanning === true) v.setFromMatrixColumn(objectMatrix, 1);
				else {
					v.setFromMatrixColumn(objectMatrix, 0);
					v.crossVectors(scope.object.up, v);
				}
				v.multiplyScalar(distance);
				panOffset.add(v);
			};
		})();
		const pan = (() => {
			const offset = new Vector3();
			return function pan2(deltaX, deltaY) {
				const element = scope.domElement;
				if (element && scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
					const position = scope.object.position;
					offset.copy(position).sub(scope.target);
					let targetDistance = offset.length();
					targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
					panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
					panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
				} else if (element && scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
					panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
					panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
				} else {
					console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
					scope.enablePan = false;
				}
			};
		})();
		function setScale(newScale) {
			if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera || scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) scale = newScale;
			else {
				console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
				scope.enableZoom = false;
			}
		}
		function dollyOut(dollyScale) {
			setScale(scale / dollyScale);
		}
		function dollyIn(dollyScale) {
			setScale(scale * dollyScale);
		}
		function updateMouseParameters(event) {
			if (!scope.zoomToCursor || !scope.domElement) return;
			performCursorZoom = true;
			const rect = scope.domElement.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			const w = rect.width;
			const h = rect.height;
			mouse.x = x / w * 2 - 1;
			mouse.y = -(y / h) * 2 + 1;
			dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
		}
		function clampDistance(dist) {
			return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
		}
		function handleMouseDownRotate(event) {
			rotateStart.set(event.clientX, event.clientY);
		}
		function handleMouseDownDolly(event) {
			updateMouseParameters(event);
			dollyStart.set(event.clientX, event.clientY);
		}
		function handleMouseDownPan(event) {
			panStart.set(event.clientX, event.clientY);
		}
		function handleMouseMoveRotate(event) {
			rotateEnd.set(event.clientX, event.clientY);
			rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
			const element = scope.domElement;
			if (element) {
				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
			}
			rotateStart.copy(rotateEnd);
			scope.update();
		}
		function handleMouseMoveDolly(event) {
			dollyEnd.set(event.clientX, event.clientY);
			dollyDelta.subVectors(dollyEnd, dollyStart);
			if (dollyDelta.y > 0) dollyOut(getZoomScale());
			else if (dollyDelta.y < 0) dollyIn(getZoomScale());
			dollyStart.copy(dollyEnd);
			scope.update();
		}
		function handleMouseMovePan(event) {
			panEnd.set(event.clientX, event.clientY);
			panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
			pan(panDelta.x, panDelta.y);
			panStart.copy(panEnd);
			scope.update();
		}
		function handleMouseWheel(event) {
			updateMouseParameters(event);
			if (event.deltaY < 0) dollyIn(getZoomScale());
			else if (event.deltaY > 0) dollyOut(getZoomScale());
			scope.update();
		}
		function handleKeyDown(event) {
			let needsUpdate = false;
			switch (event.code) {
				case scope.keys.UP:
					pan(0, scope.keyPanSpeed);
					needsUpdate = true;
					break;
				case scope.keys.BOTTOM:
					pan(0, -scope.keyPanSpeed);
					needsUpdate = true;
					break;
				case scope.keys.LEFT:
					pan(scope.keyPanSpeed, 0);
					needsUpdate = true;
					break;
				case scope.keys.RIGHT:
					pan(-scope.keyPanSpeed, 0);
					needsUpdate = true;
			}
			if (needsUpdate) {
				event.preventDefault();
				scope.update();
			}
		}
		function handleTouchStartRotate() {
			if (pointers.length == 1) rotateStart.set(pointers[0].pageX, pointers[0].pageY);
			else {
				const x = .5 * (pointers[0].pageX + pointers[1].pageX);
				const y = .5 * (pointers[0].pageY + pointers[1].pageY);
				rotateStart.set(x, y);
			}
		}
		function handleTouchStartPan() {
			if (pointers.length == 1) panStart.set(pointers[0].pageX, pointers[0].pageY);
			else {
				const x = .5 * (pointers[0].pageX + pointers[1].pageX);
				const y = .5 * (pointers[0].pageY + pointers[1].pageY);
				panStart.set(x, y);
			}
		}
		function handleTouchStartDolly() {
			const dx = pointers[0].pageX - pointers[1].pageX;
			const dy = pointers[0].pageY - pointers[1].pageY;
			const distance = Math.sqrt(dx * dx + dy * dy);
			dollyStart.set(0, distance);
		}
		function handleTouchStartDollyPan() {
			if (scope.enableZoom) handleTouchStartDolly();
			if (scope.enablePan) handleTouchStartPan();
		}
		function handleTouchStartDollyRotate() {
			if (scope.enableZoom) handleTouchStartDolly();
			if (scope.enableRotate) handleTouchStartRotate();
		}
		function handleTouchMoveRotate(event) {
			if (pointers.length == 1) rotateEnd.set(event.pageX, event.pageY);
			else {
				const position = getSecondPointerPosition(event);
				const x = .5 * (event.pageX + position.x);
				const y = .5 * (event.pageY + position.y);
				rotateEnd.set(x, y);
			}
			rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
			const element = scope.domElement;
			if (element) {
				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
			}
			rotateStart.copy(rotateEnd);
		}
		function handleTouchMovePan(event) {
			if (pointers.length == 1) panEnd.set(event.pageX, event.pageY);
			else {
				const position = getSecondPointerPosition(event);
				const x = .5 * (event.pageX + position.x);
				const y = .5 * (event.pageY + position.y);
				panEnd.set(x, y);
			}
			panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
			pan(panDelta.x, panDelta.y);
			panStart.copy(panEnd);
		}
		function handleTouchMoveDolly(event) {
			const position = getSecondPointerPosition(event);
			const dx = event.pageX - position.x;
			const dy = event.pageY - position.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			dollyEnd.set(0, distance);
			dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
			dollyOut(dollyDelta.y);
			dollyStart.copy(dollyEnd);
		}
		function handleTouchMoveDollyPan(event) {
			if (scope.enableZoom) handleTouchMoveDolly(event);
			if (scope.enablePan) handleTouchMovePan(event);
		}
		function handleTouchMoveDollyRotate(event) {
			if (scope.enableZoom) handleTouchMoveDolly(event);
			if (scope.enableRotate) handleTouchMoveRotate(event);
		}
		function onPointerDown(event) {
			var _a, _b;
			if (scope.enabled === false) return;
			if (pointers.length === 0) {
				(_a = scope.domElement) == null || _a.ownerDocument.addEventListener("pointermove", onPointerMove);
				(_b = scope.domElement) == null || _b.ownerDocument.addEventListener("pointerup", onPointerUp);
			}
			addPointer(event);
			if (event.pointerType === "touch") onTouchStart(event);
			else onMouseDown(event);
		}
		function onPointerMove(event) {
			if (scope.enabled === false) return;
			if (event.pointerType === "touch") onTouchMove(event);
			else onMouseMove(event);
		}
		function onPointerUp(event) {
			var _a, _b, _c;
			removePointer(event);
			if (pointers.length === 0) {
				(_a = scope.domElement) == null || _a.releasePointerCapture(event.pointerId);
				(_b = scope.domElement) == null || _b.ownerDocument.removeEventListener("pointermove", onPointerMove);
				(_c = scope.domElement) == null || _c.ownerDocument.removeEventListener("pointerup", onPointerUp);
			}
			scope.dispatchEvent(endEvent);
			state = STATE.NONE;
		}
		function onMouseDown(event) {
			let mouseAction;
			switch (event.button) {
				case 0:
					mouseAction = scope.mouseButtons.LEFT;
					break;
				case 1:
					mouseAction = scope.mouseButtons.MIDDLE;
					break;
				case 2:
					mouseAction = scope.mouseButtons.RIGHT;
					break;
				default: mouseAction = -1;
			}
			switch (mouseAction) {
				case MOUSE.DOLLY:
					if (scope.enableZoom === false) return;
					handleMouseDownDolly(event);
					state = STATE.DOLLY;
					break;
				case MOUSE.ROTATE:
					if (event.ctrlKey || event.metaKey || event.shiftKey) {
						if (scope.enablePan === false) return;
						handleMouseDownPan(event);
						state = STATE.PAN;
					} else {
						if (scope.enableRotate === false) return;
						handleMouseDownRotate(event);
						state = STATE.ROTATE;
					}
					break;
				case MOUSE.PAN:
					if (event.ctrlKey || event.metaKey || event.shiftKey) {
						if (scope.enableRotate === false) return;
						handleMouseDownRotate(event);
						state = STATE.ROTATE;
					} else {
						if (scope.enablePan === false) return;
						handleMouseDownPan(event);
						state = STATE.PAN;
					}
					break;
				default: state = STATE.NONE;
			}
			if (state !== STATE.NONE) scope.dispatchEvent(startEvent);
		}
		function onMouseMove(event) {
			if (scope.enabled === false) return;
			switch (state) {
				case STATE.ROTATE:
					if (scope.enableRotate === false) return;
					handleMouseMoveRotate(event);
					break;
				case STATE.DOLLY:
					if (scope.enableZoom === false) return;
					handleMouseMoveDolly(event);
					break;
				case STATE.PAN:
					if (scope.enablePan === false) return;
					handleMouseMovePan(event);
			}
		}
		function onMouseWheel(event) {
			if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
			event.preventDefault();
			scope.dispatchEvent(startEvent);
			handleMouseWheel(event);
			scope.dispatchEvent(endEvent);
		}
		function onKeyDown(event) {
			if (scope.enabled === false || scope.enablePan === false) return;
			handleKeyDown(event);
		}
		function onTouchStart(event) {
			trackPointer(event);
			switch (pointers.length) {
				case 1:
					switch (scope.touches.ONE) {
						case TOUCH.ROTATE:
							if (scope.enableRotate === false) return;
							handleTouchStartRotate();
							state = STATE.TOUCH_ROTATE;
							break;
						case TOUCH.PAN:
							if (scope.enablePan === false) return;
							handleTouchStartPan();
							state = STATE.TOUCH_PAN;
							break;
						default: state = STATE.NONE;
					}
					break;
				case 2:
					switch (scope.touches.TWO) {
						case TOUCH.DOLLY_PAN:
							if (scope.enableZoom === false && scope.enablePan === false) return;
							handleTouchStartDollyPan();
							state = STATE.TOUCH_DOLLY_PAN;
							break;
						case TOUCH.DOLLY_ROTATE:
							if (scope.enableZoom === false && scope.enableRotate === false) return;
							handleTouchStartDollyRotate();
							state = STATE.TOUCH_DOLLY_ROTATE;
							break;
						default: state = STATE.NONE;
					}
					break;
				default: state = STATE.NONE;
			}
			if (state !== STATE.NONE) scope.dispatchEvent(startEvent);
		}
		function onTouchMove(event) {
			trackPointer(event);
			switch (state) {
				case STATE.TOUCH_ROTATE:
					if (scope.enableRotate === false) return;
					handleTouchMoveRotate(event);
					scope.update();
					break;
				case STATE.TOUCH_PAN:
					if (scope.enablePan === false) return;
					handleTouchMovePan(event);
					scope.update();
					break;
				case STATE.TOUCH_DOLLY_PAN:
					if (scope.enableZoom === false && scope.enablePan === false) return;
					handleTouchMoveDollyPan(event);
					scope.update();
					break;
				case STATE.TOUCH_DOLLY_ROTATE:
					if (scope.enableZoom === false && scope.enableRotate === false) return;
					handleTouchMoveDollyRotate(event);
					scope.update();
					break;
				default: state = STATE.NONE;
			}
		}
		function onContextMenu(event) {
			if (scope.enabled === false) return;
			event.preventDefault();
		}
		function addPointer(event) {
			pointers.push(event);
		}
		function removePointer(event) {
			delete pointerPositions[event.pointerId];
			for (let i = 0; i < pointers.length; i++) if (pointers[i].pointerId == event.pointerId) {
				pointers.splice(i, 1);
				return;
			}
		}
		function trackPointer(event) {
			let position = pointerPositions[event.pointerId];
			if (position === void 0) {
				position = new Vector2();
				pointerPositions[event.pointerId] = position;
			}
			position.set(event.pageX, event.pageY);
		}
		function getSecondPointerPosition(event) {
			const pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
			return pointerPositions[pointer.pointerId];
		}
		this.dollyIn = (dollyScale = getZoomScale()) => {
			dollyIn(dollyScale);
			scope.update();
		};
		this.dollyOut = (dollyScale = getZoomScale()) => {
			dollyOut(dollyScale);
			scope.update();
		};
		this.getScale = () => {
			return scale;
		};
		this.setScale = (newScale) => {
			setScale(newScale);
			scope.update();
		};
		this.getZoomScale = () => {
			return getZoomScale();
		};
		if (domElement !== void 0) this.connect(domElement);
		this.update();
	}
};
//#endregion
//#region node_modules/three-stdlib/_polyfill/LoaderUtils.js
function decodeText(array) {
	if (typeof TextDecoder !== "undefined") return new TextDecoder().decode(array);
	let s = "";
	for (let i = 0, il = array.length; i < il; i++) s += String.fromCharCode(array[i]);
	try {
		return decodeURIComponent(escape(s));
	} catch (e) {
		return s;
	}
}
//#endregion
//#region node_modules/three-stdlib/loaders/GLTFLoader.js
var SRGBColorSpace = "srgb";
var LinearSRGBColorSpace = "srgb-linear";
var sRGBEncoding = 3001;
var LinearEncoding = 3e3;
var GLTFLoader = class extends Loader {
	constructor(manager) {
		super(manager);
		this.dracoLoader = null;
		this.ktx2Loader = null;
		this.meshoptDecoder = null;
		this.pluginCallbacks = [];
		this.register(function(parser) {
			return new GLTFMaterialsClearcoatExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsDispersionExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFTextureBasisUExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFTextureWebPExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFTextureAVIFExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsSheenExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsTransmissionExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsVolumeExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsIorExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsEmissiveStrengthExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsSpecularExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsIridescenceExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsAnisotropyExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMaterialsBumpExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFLightsExtension(parser);
		});
		this.register(function(parser) {
			return new GLTFMeshoptCompression(parser);
		});
		this.register(function(parser) {
			return new GLTFMeshGpuInstancing(parser);
		});
	}
	load(url, onLoad, onProgress, onError) {
		const scope = this;
		let resourcePath;
		if (this.resourcePath !== "") resourcePath = this.resourcePath;
		else if (this.path !== "") {
			const relativeUrl = LoaderUtils.extractUrlBase(url);
			resourcePath = LoaderUtils.resolveURL(relativeUrl, this.path);
		} else resourcePath = LoaderUtils.extractUrlBase(url);
		this.manager.itemStart(url);
		const _onError = function(e) {
			if (onError) onError(e);
			else console.error(e);
			scope.manager.itemError(url);
			scope.manager.itemEnd(url);
		};
		const loader = new FileLoader(this.manager);
		loader.setPath(this.path);
		loader.setResponseType("arraybuffer");
		loader.setRequestHeader(this.requestHeader);
		loader.setWithCredentials(this.withCredentials);
		loader.load(url, function(data) {
			try {
				scope.parse(data, resourcePath, function(gltf) {
					onLoad(gltf);
					scope.manager.itemEnd(url);
				}, _onError);
			} catch (e) {
				_onError(e);
			}
		}, onProgress, _onError);
	}
	setDRACOLoader(dracoLoader) {
		this.dracoLoader = dracoLoader;
		return this;
	}
	setDDSLoader() {
		throw new Error("THREE.GLTFLoader: \"MSFT_texture_dds\" no longer supported. Please update to \"KHR_texture_basisu\".");
	}
	setKTX2Loader(ktx2Loader) {
		this.ktx2Loader = ktx2Loader;
		return this;
	}
	setMeshoptDecoder(meshoptDecoder) {
		this.meshoptDecoder = meshoptDecoder;
		return this;
	}
	register(callback) {
		if (this.pluginCallbacks.indexOf(callback) === -1) this.pluginCallbacks.push(callback);
		return this;
	}
	unregister(callback) {
		if (this.pluginCallbacks.indexOf(callback) !== -1) this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
		return this;
	}
	parse(data, path, onLoad, onError) {
		let json;
		const extensions = {};
		const plugins = {};
		if (typeof data === "string") json = JSON.parse(data);
		else if (data instanceof ArrayBuffer) if (decodeText(new Uint8Array(data.slice(0, 4))) === BINARY_EXTENSION_HEADER_MAGIC) {
			try {
				extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
			} catch (error) {
				if (onError) onError(error);
				return;
			}
			json = JSON.parse(extensions[EXTENSIONS.KHR_BINARY_GLTF].content);
		} else json = JSON.parse(decodeText(new Uint8Array(data)));
		else json = data;
		if (json.asset === void 0 || json.asset.version[0] < 2) {
			if (onError) onError(/* @__PURE__ */ new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
			return;
		}
		const parser = new GLTFParser(json, {
			path: path || this.resourcePath || "",
			crossOrigin: this.crossOrigin,
			requestHeader: this.requestHeader,
			manager: this.manager,
			ktx2Loader: this.ktx2Loader,
			meshoptDecoder: this.meshoptDecoder
		});
		parser.fileLoader.setRequestHeader(this.requestHeader);
		for (let i = 0; i < this.pluginCallbacks.length; i++) {
			const plugin = this.pluginCallbacks[i](parser);
			if (!plugin.name) console.error("THREE.GLTFLoader: Invalid plugin found: missing name");
			plugins[plugin.name] = plugin;
			extensions[plugin.name] = true;
		}
		if (json.extensionsUsed) for (let i = 0; i < json.extensionsUsed.length; ++i) {
			const extensionName = json.extensionsUsed[i];
			const extensionsRequired = json.extensionsRequired || [];
			switch (extensionName) {
				case EXTENSIONS.KHR_MATERIALS_UNLIT:
					extensions[extensionName] = new GLTFMaterialsUnlitExtension();
					break;
				case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
					extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
					break;
				case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
					extensions[extensionName] = new GLTFTextureTransformExtension();
					break;
				case EXTENSIONS.KHR_MESH_QUANTIZATION:
					extensions[extensionName] = new GLTFMeshQuantizationExtension();
					break;
				default: if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === void 0) console.warn("THREE.GLTFLoader: Unknown extension \"" + extensionName + "\".");
			}
		}
		parser.setExtensions(extensions);
		parser.setPlugins(plugins);
		parser.parse(onLoad, onError);
	}
	parseAsync(data, path) {
		const scope = this;
		return new Promise(function(resolve, reject) {
			scope.parse(data, path, resolve, reject);
		});
	}
};
function GLTFRegistry() {
	let objects = {};
	return {
		get: function(key) {
			return objects[key];
		},
		add: function(key, object) {
			objects[key] = object;
		},
		remove: function(key) {
			delete objects[key];
		},
		removeAll: function() {
			objects = {};
		}
	};
}
var EXTENSIONS = {
	KHR_BINARY_GLTF: "KHR_binary_glTF",
	KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
	KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
	KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
	KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
	KHR_MATERIALS_IOR: "KHR_materials_ior",
	KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
	KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
	KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
	KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
	KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
	KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
	KHR_MATERIALS_VOLUME: "KHR_materials_volume",
	KHR_TEXTURE_BASISU: "KHR_texture_basisu",
	KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
	KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
	KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
	EXT_MATERIALS_BUMP: "EXT_materials_bump",
	EXT_TEXTURE_WEBP: "EXT_texture_webp",
	EXT_TEXTURE_AVIF: "EXT_texture_avif",
	EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
	EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
var GLTFLightsExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
		this.cache = {
			refs: {},
			uses: {}
		};
	}
	_markDefs() {
		const parser = this.parser;
		const nodeDefs = this.parser.json.nodes || [];
		for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
			const nodeDef = nodeDefs[nodeIndex];
			if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== void 0) parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
		}
	}
	_loadLight(lightIndex) {
		const parser = this.parser;
		const cacheKey = "light:" + lightIndex;
		let dependency = parser.cache.get(cacheKey);
		if (dependency) return dependency;
		const json = parser.json;
		const lightDef = ((json.extensions && json.extensions[this.name] || {}).lights || [])[lightIndex];
		let lightNode;
		const color = new Color(16777215);
		if (lightDef.color !== void 0) color.setRGB(lightDef.color[0], lightDef.color[1], lightDef.color[2], LinearSRGBColorSpace);
		const range = lightDef.range !== void 0 ? lightDef.range : 0;
		switch (lightDef.type) {
			case "directional":
				lightNode = new DirectionalLight(color);
				lightNode.target.position.set(0, 0, -1);
				lightNode.add(lightNode.target);
				break;
			case "point":
				lightNode = new PointLight(color);
				lightNode.distance = range;
				break;
			case "spot":
				lightNode = new SpotLight(color);
				lightNode.distance = range;
				lightDef.spot = lightDef.spot || {};
				lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== void 0 ? lightDef.spot.innerConeAngle : 0;
				lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== void 0 ? lightDef.spot.outerConeAngle : Math.PI / 4;
				lightNode.angle = lightDef.spot.outerConeAngle;
				lightNode.penumbra = 1 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
				lightNode.target.position.set(0, 0, -1);
				lightNode.add(lightNode.target);
				break;
			default: throw new Error("THREE.GLTFLoader: Unexpected light type: " + lightDef.type);
		}
		lightNode.position.set(0, 0, 0);
		lightNode.decay = 2;
		assignExtrasToUserData(lightNode, lightDef);
		if (lightDef.intensity !== void 0) lightNode.intensity = lightDef.intensity;
		lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex);
		dependency = Promise.resolve(lightNode);
		parser.cache.add(cacheKey, dependency);
		return dependency;
	}
	getDependency(type, index) {
		if (type !== "light") return;
		return this._loadLight(index);
	}
	createNodeAttachment(nodeIndex) {
		const self2 = this;
		const parser = this.parser;
		const nodeDef = parser.json.nodes[nodeIndex];
		const lightIndex = (nodeDef.extensions && nodeDef.extensions[this.name] || {}).light;
		if (lightIndex === void 0) return null;
		return this._loadLight(lightIndex).then(function(light) {
			return parser._getNodeRef(self2.cache, lightIndex, light);
		});
	}
};
var GLTFMaterialsUnlitExtension = class {
	constructor() {
		this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
	}
	getMaterialType() {
		return MeshBasicMaterial;
	}
	extendParams(materialParams, materialDef, parser) {
		const pending = [];
		materialParams.color = new Color(1, 1, 1);
		materialParams.opacity = 1;
		const metallicRoughness = materialDef.pbrMetallicRoughness;
		if (metallicRoughness) {
			if (Array.isArray(metallicRoughness.baseColorFactor)) {
				const array = metallicRoughness.baseColorFactor;
				materialParams.color.setRGB(array[0], array[1], array[2], LinearSRGBColorSpace);
				materialParams.opacity = array[3];
			}
			if (metallicRoughness.baseColorTexture !== void 0) pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, SRGBColorSpace));
		}
		return Promise.all(pending);
	}
};
var GLTFMaterialsEmissiveStrengthExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
		if (emissiveStrength !== void 0) materialParams.emissiveIntensity = emissiveStrength;
		return Promise.resolve();
	}
};
var GLTFMaterialsClearcoatExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const parser = this.parser;
		const materialDef = parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const pending = [];
		const extension = materialDef.extensions[this.name];
		if (extension.clearcoatFactor !== void 0) materialParams.clearcoat = extension.clearcoatFactor;
		if (extension.clearcoatTexture !== void 0) pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture));
		if (extension.clearcoatRoughnessFactor !== void 0) materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
		if (extension.clearcoatRoughnessTexture !== void 0) pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture));
		if (extension.clearcoatNormalTexture !== void 0) {
			pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture));
			if (extension.clearcoatNormalTexture.scale !== void 0) {
				const scale = extension.clearcoatNormalTexture.scale;
				materialParams.clearcoatNormalScale = new Vector2(scale, scale);
			}
		}
		return Promise.all(pending);
	}
};
var GLTFMaterialsDispersionExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_DISPERSION;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const extension = materialDef.extensions[this.name];
		materialParams.dispersion = extension.dispersion !== void 0 ? extension.dispersion : 0;
		return Promise.resolve();
	}
};
var GLTFMaterialsIridescenceExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const parser = this.parser;
		const materialDef = parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const pending = [];
		const extension = materialDef.extensions[this.name];
		if (extension.iridescenceFactor !== void 0) materialParams.iridescence = extension.iridescenceFactor;
		if (extension.iridescenceTexture !== void 0) pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture));
		if (extension.iridescenceIor !== void 0) materialParams.iridescenceIOR = extension.iridescenceIor;
		if (materialParams.iridescenceThicknessRange === void 0) materialParams.iridescenceThicknessRange = [100, 400];
		if (extension.iridescenceThicknessMinimum !== void 0) materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
		if (extension.iridescenceThicknessMaximum !== void 0) materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
		if (extension.iridescenceThicknessTexture !== void 0) pending.push(parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture));
		return Promise.all(pending);
	}
};
var GLTFMaterialsSheenExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const parser = this.parser;
		const materialDef = parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const pending = [];
		materialParams.sheenColor = new Color(0, 0, 0);
		materialParams.sheenRoughness = 0;
		materialParams.sheen = 1;
		const extension = materialDef.extensions[this.name];
		if (extension.sheenColorFactor !== void 0) {
			const colorFactor = extension.sheenColorFactor;
			materialParams.sheenColor.setRGB(colorFactor[0], colorFactor[1], colorFactor[2], LinearSRGBColorSpace);
		}
		if (extension.sheenRoughnessFactor !== void 0) materialParams.sheenRoughness = extension.sheenRoughnessFactor;
		if (extension.sheenColorTexture !== void 0) pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, SRGBColorSpace));
		if (extension.sheenRoughnessTexture !== void 0) pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture));
		return Promise.all(pending);
	}
};
var GLTFMaterialsTransmissionExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const parser = this.parser;
		const materialDef = parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const pending = [];
		const extension = materialDef.extensions[this.name];
		if (extension.transmissionFactor !== void 0) materialParams.transmission = extension.transmissionFactor;
		if (extension.transmissionTexture !== void 0) pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture));
		return Promise.all(pending);
	}
};
var GLTFMaterialsVolumeExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const parser = this.parser;
		const materialDef = parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const pending = [];
		const extension = materialDef.extensions[this.name];
		materialParams.thickness = extension.thicknessFactor !== void 0 ? extension.thicknessFactor : 0;
		if (extension.thicknessTexture !== void 0) pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture));
		materialParams.attenuationDistance = extension.attenuationDistance || Infinity;
		const colorArray = extension.attenuationColor || [
			1,
			1,
			1
		];
		materialParams.attenuationColor = new Color().setRGB(colorArray[0], colorArray[1], colorArray[2], LinearSRGBColorSpace);
		return Promise.all(pending);
	}
};
var GLTFMaterialsIorExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_IOR;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const extension = materialDef.extensions[this.name];
		materialParams.ior = extension.ior !== void 0 ? extension.ior : 1.5;
		return Promise.resolve();
	}
};
var GLTFMaterialsSpecularExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const parser = this.parser;
		const materialDef = parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const pending = [];
		const extension = materialDef.extensions[this.name];
		materialParams.specularIntensity = extension.specularFactor !== void 0 ? extension.specularFactor : 1;
		if (extension.specularTexture !== void 0) pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
		const colorArray = extension.specularColorFactor || [
			1,
			1,
			1
		];
		materialParams.specularColor = new Color().setRGB(colorArray[0], colorArray[1], colorArray[2], LinearSRGBColorSpace);
		if (extension.specularColorTexture !== void 0) pending.push(parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, SRGBColorSpace));
		return Promise.all(pending);
	}
};
var GLTFMaterialsBumpExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.EXT_MATERIALS_BUMP;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const parser = this.parser;
		const materialDef = parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const pending = [];
		const extension = materialDef.extensions[this.name];
		materialParams.bumpScale = extension.bumpFactor !== void 0 ? extension.bumpFactor : 1;
		if (extension.bumpTexture !== void 0) pending.push(parser.assignTexture(materialParams, "bumpMap", extension.bumpTexture));
		return Promise.all(pending);
	}
};
var GLTFMaterialsAnisotropyExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;
	}
	getMaterialType(materialIndex) {
		const materialDef = this.parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
		return MeshPhysicalMaterial;
	}
	extendMaterialParams(materialIndex, materialParams) {
		const parser = this.parser;
		const materialDef = parser.json.materials[materialIndex];
		if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
		const pending = [];
		const extension = materialDef.extensions[this.name];
		if (extension.anisotropyStrength !== void 0) materialParams.anisotropy = extension.anisotropyStrength;
		if (extension.anisotropyRotation !== void 0) materialParams.anisotropyRotation = extension.anisotropyRotation;
		if (extension.anisotropyTexture !== void 0) pending.push(parser.assignTexture(materialParams, "anisotropyMap", extension.anisotropyTexture));
		return Promise.all(pending);
	}
};
var GLTFTextureBasisUExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
	}
	loadTexture(textureIndex) {
		const parser = this.parser;
		const json = parser.json;
		const textureDef = json.textures[textureIndex];
		if (!textureDef.extensions || !textureDef.extensions[this.name]) return null;
		const extension = textureDef.extensions[this.name];
		const loader = parser.options.ktx2Loader;
		if (!loader) if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
		else return null;
		return parser.loadTextureImage(textureIndex, extension.source, loader);
	}
};
var GLTFTextureWebPExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
		this.isSupported = null;
	}
	loadTexture(textureIndex) {
		const name = this.name;
		const parser = this.parser;
		const json = parser.json;
		const textureDef = json.textures[textureIndex];
		if (!textureDef.extensions || !textureDef.extensions[name]) return null;
		const extension = textureDef.extensions[name];
		const source = json.images[extension.source];
		let loader = parser.textureLoader;
		if (source.uri) {
			const handler = parser.options.manager.getHandler(source.uri);
			if (handler !== null) loader = handler;
		}
		return this.detectSupport().then(function(isSupported) {
			if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader);
			if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
			return parser.loadTexture(textureIndex);
		});
	}
	detectSupport() {
		if (!this.isSupported) this.isSupported = new Promise(function(resolve) {
			const image = new Image();
			image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
			image.onload = image.onerror = function() {
				resolve(image.height === 1);
			};
		});
		return this.isSupported;
	}
};
var GLTFTextureAVIFExtension = class {
	constructor(parser) {
		this.parser = parser;
		this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
		this.isSupported = null;
	}
	loadTexture(textureIndex) {
		const name = this.name;
		const parser = this.parser;
		const json = parser.json;
		const textureDef = json.textures[textureIndex];
		if (!textureDef.extensions || !textureDef.extensions[name]) return null;
		const extension = textureDef.extensions[name];
		const source = json.images[extension.source];
		let loader = parser.textureLoader;
		if (source.uri) {
			const handler = parser.options.manager.getHandler(source.uri);
			if (handler !== null) loader = handler;
		}
		return this.detectSupport().then(function(isSupported) {
			if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader);
			if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
			return parser.loadTexture(textureIndex);
		});
	}
	detectSupport() {
		if (!this.isSupported) this.isSupported = new Promise(function(resolve) {
			const image = new Image();
			image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=";
			image.onload = image.onerror = function() {
				resolve(image.height === 1);
			};
		});
		return this.isSupported;
	}
};
var GLTFMeshoptCompression = class {
	constructor(parser) {
		this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
		this.parser = parser;
	}
	loadBufferView(index) {
		const json = this.parser.json;
		const bufferView = json.bufferViews[index];
		if (bufferView.extensions && bufferView.extensions[this.name]) {
			const extensionDef = bufferView.extensions[this.name];
			const buffer = this.parser.getDependency("buffer", extensionDef.buffer);
			const decoder = this.parser.options.meshoptDecoder;
			if (!decoder || !decoder.supported) if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
			else return null;
			return buffer.then(function(res) {
				const byteOffset = extensionDef.byteOffset || 0;
				const byteLength = extensionDef.byteLength || 0;
				const count = extensionDef.count;
				const stride = extensionDef.byteStride;
				const source = new Uint8Array(res, byteOffset, byteLength);
				if (decoder.decodeGltfBufferAsync) return decoder.decodeGltfBufferAsync(count, stride, source, extensionDef.mode, extensionDef.filter).then(function(res2) {
					return res2.buffer;
				});
				else return decoder.ready.then(function() {
					const result = new ArrayBuffer(count * stride);
					decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
					return result;
				});
			});
		} else return null;
	}
};
var GLTFMeshGpuInstancing = class {
	constructor(parser) {
		this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
		this.parser = parser;
	}
	createNodeMesh(nodeIndex) {
		const json = this.parser.json;
		const nodeDef = json.nodes[nodeIndex];
		if (!nodeDef.extensions || !nodeDef.extensions[this.name] || nodeDef.mesh === void 0) return null;
		const meshDef = json.meshes[nodeDef.mesh];
		for (const primitive of meshDef.primitives) if (primitive.mode !== WEBGL_CONSTANTS.TRIANGLES && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN && primitive.mode !== void 0) return null;
		const attributesDef = nodeDef.extensions[this.name].attributes;
		const pending = [];
		const attributes = {};
		for (const key in attributesDef) pending.push(this.parser.getDependency("accessor", attributesDef[key]).then((accessor) => {
			attributes[key] = accessor;
			return attributes[key];
		}));
		if (pending.length < 1) return null;
		pending.push(this.parser.createNodeMesh(nodeIndex));
		return Promise.all(pending).then((results) => {
			const nodeObject = results.pop();
			const meshes = nodeObject.isGroup ? nodeObject.children : [nodeObject];
			const count = results[0].count;
			const instancedMeshes = [];
			for (const mesh of meshes) {
				const m = new Matrix4();
				const p = new Vector3();
				const q = new Quaternion();
				const s = new Vector3(1, 1, 1);
				const instancedMesh = new InstancedMesh(mesh.geometry, mesh.material, count);
				for (let i = 0; i < count; i++) {
					if (attributes.TRANSLATION) p.fromBufferAttribute(attributes.TRANSLATION, i);
					if (attributes.ROTATION) q.fromBufferAttribute(attributes.ROTATION, i);
					if (attributes.SCALE) s.fromBufferAttribute(attributes.SCALE, i);
					instancedMesh.setMatrixAt(i, m.compose(p, q, s));
				}
				for (const attributeName in attributes) if (attributeName === "_COLOR_0") {
					const attr = attributes[attributeName];
					instancedMesh.instanceColor = new InstancedBufferAttribute(attr.array, attr.itemSize, attr.normalized);
				} else if (attributeName !== "TRANSLATION" && attributeName !== "ROTATION" && attributeName !== "SCALE") mesh.geometry.setAttribute(attributeName, attributes[attributeName]);
				Object3D.prototype.copy.call(instancedMesh, mesh);
				this.parser.assignFinalMaterial(instancedMesh);
				instancedMeshes.push(instancedMesh);
			}
			if (nodeObject.isGroup) {
				nodeObject.clear();
				nodeObject.add(...instancedMeshes);
				return nodeObject;
			}
			return instancedMeshes[0];
		});
	}
};
var BINARY_EXTENSION_HEADER_MAGIC = "glTF";
var BINARY_EXTENSION_HEADER_LENGTH = 12;
var BINARY_EXTENSION_CHUNK_TYPES = {
	JSON: 1313821514,
	BIN: 5130562
};
var GLTFBinaryExtension = class {
	constructor(data) {
		this.name = EXTENSIONS.KHR_BINARY_GLTF;
		this.content = null;
		this.body = null;
		const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
		this.header = {
			magic: decodeText(new Uint8Array(data.slice(0, 4))),
			version: headerView.getUint32(4, true),
			length: headerView.getUint32(8, true)
		};
		if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
		else if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
		const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
		const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
		let chunkIndex = 0;
		while (chunkIndex < chunkContentsLength) {
			const chunkLength = chunkView.getUint32(chunkIndex, true);
			chunkIndex += 4;
			const chunkType = chunkView.getUint32(chunkIndex, true);
			chunkIndex += 4;
			if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
				const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
				this.content = decodeText(contentArray);
			} else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
				const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
				this.body = data.slice(byteOffset, byteOffset + chunkLength);
			}
			chunkIndex += chunkLength;
		}
		if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
	}
};
var GLTFDracoMeshCompressionExtension = class {
	constructor(json, dracoLoader) {
		if (!dracoLoader) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
		this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
		this.json = json;
		this.dracoLoader = dracoLoader;
		this.dracoLoader.preload();
	}
	decodePrimitive(primitive, parser) {
		const json = this.json;
		const dracoLoader = this.dracoLoader;
		const bufferViewIndex = primitive.extensions[this.name].bufferView;
		const gltfAttributeMap = primitive.extensions[this.name].attributes;
		const threeAttributeMap = {};
		const attributeNormalizedMap = {};
		const attributeTypeMap = {};
		for (const attributeName in gltfAttributeMap) {
			const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
			threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
		}
		for (const attributeName in primitive.attributes) {
			const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
			if (gltfAttributeMap[attributeName] !== void 0) {
				const accessorDef = json.accessors[primitive.attributes[attributeName]];
				attributeTypeMap[threeAttributeName] = WEBGL_COMPONENT_TYPES[accessorDef.componentType].name;
				attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
			}
		}
		return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
			return new Promise(function(resolve, reject) {
				dracoLoader.decodeDracoFile(bufferView, function(geometry) {
					for (const attributeName in geometry.attributes) {
						const attribute = geometry.attributes[attributeName];
						const normalized = attributeNormalizedMap[attributeName];
						if (normalized !== void 0) attribute.normalized = normalized;
					}
					resolve(geometry);
				}, threeAttributeMap, attributeTypeMap, LinearSRGBColorSpace, reject);
			});
		});
	}
};
var GLTFTextureTransformExtension = class {
	constructor() {
		this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
	}
	extendTexture(texture, transform) {
		if ((transform.texCoord === void 0 || transform.texCoord === texture.channel) && transform.offset === void 0 && transform.rotation === void 0 && transform.scale === void 0) return texture;
		texture = texture.clone();
		if (transform.texCoord !== void 0) texture.channel = transform.texCoord;
		if (transform.offset !== void 0) texture.offset.fromArray(transform.offset);
		if (transform.rotation !== void 0) texture.rotation = transform.rotation;
		if (transform.scale !== void 0) texture.repeat.fromArray(transform.scale);
		texture.needsUpdate = true;
		return texture;
	}
};
var GLTFMeshQuantizationExtension = class {
	constructor() {
		this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
	}
};
var GLTFCubicSplineInterpolant = class extends Interpolant {
	constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
		super(parameterPositions, sampleValues, sampleSize, resultBuffer);
	}
	copySampleValue_(index) {
		const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
		for (let i = 0; i !== valueSize; i++) result[i] = values[offset + i];
		return result;
	}
	interpolate_(i1, t0, t, t1) {
		const result = this.resultBuffer;
		const values = this.sampleValues;
		const stride = this.valueSize;
		const stride2 = stride * 2;
		const stride3 = stride * 3;
		const td = t1 - t0;
		const p = (t - t0) / td;
		const pp = p * p;
		const ppp = pp * p;
		const offset1 = i1 * stride3;
		const offset0 = offset1 - stride3;
		const s2 = -2 * ppp + 3 * pp;
		const s3 = ppp - pp;
		const s0 = 1 - s2;
		const s1 = s3 - pp + p;
		for (let i = 0; i !== stride; i++) {
			const p0 = values[offset0 + i + stride];
			const m0 = values[offset0 + i + stride2] * td;
			const p1 = values[offset1 + i + stride];
			const m1 = values[offset1 + i] * td;
			result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
		}
		return result;
	}
};
var _q = /* @__PURE__ */ new Quaternion();
var GLTFCubicSplineQuaternionInterpolant = class extends GLTFCubicSplineInterpolant {
	interpolate_(i1, t0, t, t1) {
		const result = super.interpolate_(i1, t0, t, t1);
		_q.fromArray(result).normalize().toArray(result);
		return result;
	}
};
var WEBGL_CONSTANTS = {
	FLOAT: 5126,
	FLOAT_MAT3: 35675,
	FLOAT_MAT4: 35676,
	FLOAT_VEC2: 35664,
	FLOAT_VEC3: 35665,
	FLOAT_VEC4: 35666,
	LINEAR: 9729,
	REPEAT: 10497,
	SAMPLER_2D: 35678,
	POINTS: 0,
	LINES: 1,
	LINE_LOOP: 2,
	LINE_STRIP: 3,
	TRIANGLES: 4,
	TRIANGLE_STRIP: 5,
	TRIANGLE_FAN: 6,
	UNSIGNED_BYTE: 5121,
	UNSIGNED_SHORT: 5123
};
var WEBGL_COMPONENT_TYPES = {
	5120: Int8Array,
	5121: Uint8Array,
	5122: Int16Array,
	5123: Uint16Array,
	5125: Uint32Array,
	5126: Float32Array
};
var WEBGL_FILTERS = {
	9728: NearestFilter,
	9729: LinearFilter,
	9984: NearestMipmapNearestFilter,
	9985: LinearMipmapNearestFilter,
	9986: NearestMipmapLinearFilter,
	9987: LinearMipmapLinearFilter
};
var WEBGL_WRAPPINGS = {
	33071: ClampToEdgeWrapping,
	33648: MirroredRepeatWrapping,
	10497: RepeatWrapping
};
var WEBGL_TYPE_SIZES = {
	SCALAR: 1,
	VEC2: 2,
	VEC3: 3,
	VEC4: 4,
	MAT2: 4,
	MAT3: 9,
	MAT4: 16
};
var ATTRIBUTES = {
	POSITION: "position",
	NORMAL: "normal",
	TANGENT: "tangent",
	...version >= 152 ? {
		TEXCOORD_0: "uv",
		TEXCOORD_1: "uv1",
		TEXCOORD_2: "uv2",
		TEXCOORD_3: "uv3"
	} : {
		TEXCOORD_0: "uv",
		TEXCOORD_1: "uv2"
	},
	COLOR_0: "color",
	WEIGHTS_0: "skinWeight",
	JOINTS_0: "skinIndex"
};
var PATH_PROPERTIES = {
	scale: "scale",
	translation: "position",
	rotation: "quaternion",
	weights: "morphTargetInfluences"
};
var INTERPOLATION = {
	CUBICSPLINE: void 0,
	LINEAR: InterpolateLinear,
	STEP: InterpolateDiscrete
};
var ALPHA_MODES = {
	OPAQUE: "OPAQUE",
	MASK: "MASK",
	BLEND: "BLEND"
};
function createDefaultMaterial(cache) {
	if (cache["DefaultMaterial"] === void 0) cache["DefaultMaterial"] = new MeshStandardMaterial({
		color: 16777215,
		emissive: 0,
		metalness: 1,
		roughness: 1,
		transparent: false,
		depthTest: true,
		side: 0
	});
	return cache["DefaultMaterial"];
}
function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
	for (const name in objectDef.extensions) if (knownExtensions[name] === void 0) {
		object.userData.gltfExtensions = object.userData.gltfExtensions || {};
		object.userData.gltfExtensions[name] = objectDef.extensions[name];
	}
}
function assignExtrasToUserData(object, gltfDef) {
	if (gltfDef.extras !== void 0) if (typeof gltfDef.extras === "object") Object.assign(object.userData, gltfDef.extras);
	else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras);
}
function addMorphTargets(geometry, targets, parser) {
	let hasMorphPosition = false;
	let hasMorphNormal = false;
	let hasMorphColor = false;
	for (let i = 0, il = targets.length; i < il; i++) {
		const target = targets[i];
		if (target.POSITION !== void 0) hasMorphPosition = true;
		if (target.NORMAL !== void 0) hasMorphNormal = true;
		if (target.COLOR_0 !== void 0) hasMorphColor = true;
		if (hasMorphPosition && hasMorphNormal && hasMorphColor) break;
	}
	if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor) return Promise.resolve(geometry);
	const pendingPositionAccessors = [];
	const pendingNormalAccessors = [];
	const pendingColorAccessors = [];
	for (let i = 0, il = targets.length; i < il; i++) {
		const target = targets[i];
		if (hasMorphPosition) {
			const pendingAccessor = target.POSITION !== void 0 ? parser.getDependency("accessor", target.POSITION) : geometry.attributes.position;
			pendingPositionAccessors.push(pendingAccessor);
		}
		if (hasMorphNormal) {
			const pendingAccessor = target.NORMAL !== void 0 ? parser.getDependency("accessor", target.NORMAL) : geometry.attributes.normal;
			pendingNormalAccessors.push(pendingAccessor);
		}
		if (hasMorphColor) {
			const pendingAccessor = target.COLOR_0 !== void 0 ? parser.getDependency("accessor", target.COLOR_0) : geometry.attributes.color;
			pendingColorAccessors.push(pendingAccessor);
		}
	}
	return Promise.all([
		Promise.all(pendingPositionAccessors),
		Promise.all(pendingNormalAccessors),
		Promise.all(pendingColorAccessors)
	]).then(function(accessors) {
		const morphPositions = accessors[0];
		const morphNormals = accessors[1];
		const morphColors = accessors[2];
		if (hasMorphPosition) geometry.morphAttributes.position = morphPositions;
		if (hasMorphNormal) geometry.morphAttributes.normal = morphNormals;
		if (hasMorphColor) geometry.morphAttributes.color = morphColors;
		geometry.morphTargetsRelative = true;
		return geometry;
	});
}
function updateMorphTargets(mesh, meshDef) {
	mesh.updateMorphTargets();
	if (meshDef.weights !== void 0) for (let i = 0, il = meshDef.weights.length; i < il; i++) mesh.morphTargetInfluences[i] = meshDef.weights[i];
	if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
		const targetNames = meshDef.extras.targetNames;
		if (mesh.morphTargetInfluences.length === targetNames.length) {
			mesh.morphTargetDictionary = {};
			for (let i = 0, il = targetNames.length; i < il; i++) mesh.morphTargetDictionary[targetNames[i]] = i;
		} else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
	}
}
function createPrimitiveKey(primitiveDef) {
	let geometryKey;
	const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
	if (dracoExtension) geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
	else geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
	if (primitiveDef.targets !== void 0) for (let i = 0, il = primitiveDef.targets.length; i < il; i++) geometryKey += ":" + createAttributesKey(primitiveDef.targets[i]);
	return geometryKey;
}
function createAttributesKey(attributes) {
	let attributesKey = "";
	const keys = Object.keys(attributes).sort();
	for (let i = 0, il = keys.length; i < il; i++) attributesKey += keys[i] + ":" + attributes[keys[i]] + ";";
	return attributesKey;
}
function getNormalizedComponentScale(constructor) {
	switch (constructor) {
		case Int8Array: return 1 / 127;
		case Uint8Array: return 1 / 255;
		case Int16Array: return 1 / 32767;
		case Uint16Array: return 1 / 65535;
		default: throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
	}
}
function getImageURIMimeType(uri) {
	if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0) return "image/jpeg";
	if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0) return "image/webp";
	return "image/png";
}
var _identityMatrix = /* @__PURE__ */ new Matrix4();
var GLTFParser = class {
	constructor(json = {}, options = {}) {
		this.json = json;
		this.extensions = {};
		this.plugins = {};
		this.options = options;
		this.cache = new GLTFRegistry();
		this.associations = /* @__PURE__ */ new Map();
		this.primitiveCache = {};
		this.nodeCache = {};
		this.meshCache = {
			refs: {},
			uses: {}
		};
		this.cameraCache = {
			refs: {},
			uses: {}
		};
		this.lightCache = {
			refs: {},
			uses: {}
		};
		this.sourceCache = {};
		this.textureCache = {};
		this.nodeNamesUsed = {};
		let isSafari = false;
		let isFirefox = false;
		let firefoxVersion = -1;
		if (typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined") {
			isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true;
			isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
			firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
		}
		if (typeof createImageBitmap === "undefined" || isSafari || isFirefox && firefoxVersion < 98) this.textureLoader = new TextureLoader(this.options.manager);
		else this.textureLoader = new ImageBitmapLoader(this.options.manager);
		this.textureLoader.setCrossOrigin(this.options.crossOrigin);
		this.textureLoader.setRequestHeader(this.options.requestHeader);
		this.fileLoader = new FileLoader(this.options.manager);
		this.fileLoader.setResponseType("arraybuffer");
		if (this.options.crossOrigin === "use-credentials") this.fileLoader.setWithCredentials(true);
	}
	setExtensions(extensions) {
		this.extensions = extensions;
	}
	setPlugins(plugins) {
		this.plugins = plugins;
	}
	parse(onLoad, onError) {
		const parser = this;
		const json = this.json;
		const extensions = this.extensions;
		this.cache.removeAll();
		this.nodeCache = {};
		this._invokeAll(function(ext) {
			return ext._markDefs && ext._markDefs();
		});
		Promise.all(this._invokeAll(function(ext) {
			return ext.beforeRoot && ext.beforeRoot();
		})).then(function() {
			return Promise.all([
				parser.getDependencies("scene"),
				parser.getDependencies("animation"),
				parser.getDependencies("camera")
			]);
		}).then(function(dependencies) {
			const result = {
				scene: dependencies[0][json.scene || 0],
				scenes: dependencies[0],
				animations: dependencies[1],
				cameras: dependencies[2],
				asset: json.asset,
				parser,
				userData: {}
			};
			addUnknownExtensionsToUserData(extensions, result, json);
			assignExtrasToUserData(result, json);
			return Promise.all(parser._invokeAll(function(ext) {
				return ext.afterRoot && ext.afterRoot(result);
			})).then(function() {
				for (const scene of result.scenes) scene.updateMatrixWorld();
				onLoad(result);
			});
		}).catch(onError);
	}
	/**
	* Marks the special nodes/meshes in json for efficient parse.
	*/
	_markDefs() {
		const nodeDefs = this.json.nodes || [];
		const skinDefs = this.json.skins || [];
		const meshDefs = this.json.meshes || [];
		for (let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {
			const joints = skinDefs[skinIndex].joints;
			for (let i = 0, il = joints.length; i < il; i++) nodeDefs[joints[i]].isBone = true;
		}
		for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
			const nodeDef = nodeDefs[nodeIndex];
			if (nodeDef.mesh !== void 0) {
				this._addNodeRef(this.meshCache, nodeDef.mesh);
				if (nodeDef.skin !== void 0) meshDefs[nodeDef.mesh].isSkinnedMesh = true;
			}
			if (nodeDef.camera !== void 0) this._addNodeRef(this.cameraCache, nodeDef.camera);
		}
	}
	/**
	* Counts references to shared node / Object3D resources. These resources
	* can be reused, or "instantiated", at multiple nodes in the scene
	* hierarchy. Mesh, Camera, and Light instances are instantiated and must
	* be marked. Non-scenegraph resources (like Materials, Geometries, and
	* Textures) can be reused directly and are not marked here.
	*
	* Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	*/
	_addNodeRef(cache, index) {
		if (index === void 0) return;
		if (cache.refs[index] === void 0) cache.refs[index] = cache.uses[index] = 0;
		cache.refs[index]++;
	}
	/** Returns a reference to a shared resource, cloning it if necessary. */
	_getNodeRef(cache, index, object) {
		if (cache.refs[index] <= 1) return object;
		const ref = object.clone();
		const updateMappings = (original, clone) => {
			const mappings = this.associations.get(original);
			if (mappings != null) this.associations.set(clone, mappings);
			for (const [i, child] of original.children.entries()) updateMappings(child, clone.children[i]);
		};
		updateMappings(object, ref);
		ref.name += "_instance_" + cache.uses[index]++;
		return ref;
	}
	_invokeOne(func) {
		const extensions = Object.values(this.plugins);
		extensions.push(this);
		for (let i = 0; i < extensions.length; i++) {
			const result = func(extensions[i]);
			if (result) return result;
		}
		return null;
	}
	_invokeAll(func) {
		const extensions = Object.values(this.plugins);
		extensions.unshift(this);
		const pending = [];
		for (let i = 0; i < extensions.length; i++) {
			const result = func(extensions[i]);
			if (result) pending.push(result);
		}
		return pending;
	}
	/**
	* Requests the specified dependency asynchronously, with caching.
	* @param {string} type
	* @param {number} index
	* @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
	*/
	getDependency(type, index) {
		const cacheKey = type + ":" + index;
		let dependency = this.cache.get(cacheKey);
		if (!dependency) {
			switch (type) {
				case "scene":
					dependency = this.loadScene(index);
					break;
				case "node":
					dependency = this._invokeOne(function(ext) {
						return ext.loadNode && ext.loadNode(index);
					});
					break;
				case "mesh":
					dependency = this._invokeOne(function(ext) {
						return ext.loadMesh && ext.loadMesh(index);
					});
					break;
				case "accessor":
					dependency = this.loadAccessor(index);
					break;
				case "bufferView":
					dependency = this._invokeOne(function(ext) {
						return ext.loadBufferView && ext.loadBufferView(index);
					});
					break;
				case "buffer":
					dependency = this.loadBuffer(index);
					break;
				case "material":
					dependency = this._invokeOne(function(ext) {
						return ext.loadMaterial && ext.loadMaterial(index);
					});
					break;
				case "texture":
					dependency = this._invokeOne(function(ext) {
						return ext.loadTexture && ext.loadTexture(index);
					});
					break;
				case "skin":
					dependency = this.loadSkin(index);
					break;
				case "animation":
					dependency = this._invokeOne(function(ext) {
						return ext.loadAnimation && ext.loadAnimation(index);
					});
					break;
				case "camera":
					dependency = this.loadCamera(index);
					break;
				default:
					dependency = this._invokeOne(function(ext) {
						return ext != this && ext.getDependency && ext.getDependency(type, index);
					});
					if (!dependency) throw new Error("Unknown type: " + type);
			}
			this.cache.add(cacheKey, dependency);
		}
		return dependency;
	}
	/**
	* Requests all dependencies of the specified type asynchronously, with caching.
	* @param {string} type
	* @return {Promise<Array<Object>>}
	*/
	getDependencies(type) {
		let dependencies = this.cache.get(type);
		if (!dependencies) {
			const parser = this;
			const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
			dependencies = Promise.all(defs.map(function(def, index) {
				return parser.getDependency(type, index);
			}));
			this.cache.add(type, dependencies);
		}
		return dependencies;
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	* @param {number} bufferIndex
	* @return {Promise<ArrayBuffer>}
	*/
	loadBuffer(bufferIndex) {
		const bufferDef = this.json.buffers[bufferIndex];
		const loader = this.fileLoader;
		if (bufferDef.type && bufferDef.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported.");
		if (bufferDef.uri === void 0 && bufferIndex === 0) return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
		const options = this.options;
		return new Promise(function(resolve, reject) {
			loader.load(LoaderUtils.resolveURL(bufferDef.uri, options.path), resolve, void 0, function() {
				reject(/* @__PURE__ */ new Error("THREE.GLTFLoader: Failed to load buffer \"" + bufferDef.uri + "\"."));
			});
		});
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	* @param {number} bufferViewIndex
	* @return {Promise<ArrayBuffer>}
	*/
	loadBufferView(bufferViewIndex) {
		const bufferViewDef = this.json.bufferViews[bufferViewIndex];
		return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
			const byteLength = bufferViewDef.byteLength || 0;
			const byteOffset = bufferViewDef.byteOffset || 0;
			return buffer.slice(byteOffset, byteOffset + byteLength);
		});
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	* @param {number} accessorIndex
	* @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
	*/
	loadAccessor(accessorIndex) {
		const parser = this;
		const json = this.json;
		const accessorDef = this.json.accessors[accessorIndex];
		if (accessorDef.bufferView === void 0 && accessorDef.sparse === void 0) {
			const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
			const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
			const normalized = accessorDef.normalized === true;
			const array = new TypedArray(accessorDef.count * itemSize);
			return Promise.resolve(new BufferAttribute(array, itemSize, normalized));
		}
		const pendingBufferViews = [];
		if (accessorDef.bufferView !== void 0) pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView));
		else pendingBufferViews.push(null);
		if (accessorDef.sparse !== void 0) {
			pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView));
			pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView));
		}
		return Promise.all(pendingBufferViews).then(function(bufferViews) {
			const bufferView = bufferViews[0];
			const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
			const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
			const elementBytes = TypedArray.BYTES_PER_ELEMENT;
			const itemBytes = elementBytes * itemSize;
			const byteOffset = accessorDef.byteOffset || 0;
			const byteStride = accessorDef.bufferView !== void 0 ? json.bufferViews[accessorDef.bufferView].byteStride : void 0;
			const normalized = accessorDef.normalized === true;
			let array, bufferAttribute;
			if (byteStride && byteStride !== itemBytes) {
				const ibSlice = Math.floor(byteOffset / byteStride);
				const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
				let ib = parser.cache.get(ibCacheKey);
				if (!ib) {
					array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
					ib = new InterleavedBuffer(array, byteStride / elementBytes);
					parser.cache.add(ibCacheKey, ib);
				}
				bufferAttribute = new InterleavedBufferAttribute(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
			} else {
				if (bufferView === null) array = new TypedArray(accessorDef.count * itemSize);
				else array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
				bufferAttribute = new BufferAttribute(array, itemSize, normalized);
			}
			if (accessorDef.sparse !== void 0) {
				const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
				const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
				const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
				const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
				const sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
				const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
				if (bufferView !== null) bufferAttribute = new BufferAttribute(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
				for (let i = 0, il = sparseIndices.length; i < il; i++) {
					const index = sparseIndices[i];
					bufferAttribute.setX(index, sparseValues[i * itemSize]);
					if (itemSize >= 2) bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
					if (itemSize >= 3) bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
					if (itemSize >= 4) bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
					if (itemSize >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
				}
			}
			return bufferAttribute;
		});
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	* @param {number} textureIndex
	* @return {Promise<THREE.Texture|null>}
	*/
	loadTexture(textureIndex) {
		const json = this.json;
		const options = this.options;
		const sourceIndex = json.textures[textureIndex].source;
		const sourceDef = json.images[sourceIndex];
		let loader = this.textureLoader;
		if (sourceDef.uri) {
			const handler = options.manager.getHandler(sourceDef.uri);
			if (handler !== null) loader = handler;
		}
		return this.loadTextureImage(textureIndex, sourceIndex, loader);
	}
	loadTextureImage(textureIndex, sourceIndex, loader) {
		const parser = this;
		const json = this.json;
		const textureDef = json.textures[textureIndex];
		const sourceDef = json.images[sourceIndex];
		const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
		if (this.textureCache[cacheKey]) return this.textureCache[cacheKey];
		const promise = this.loadImageSource(sourceIndex, loader).then(function(texture) {
			texture.flipY = false;
			texture.name = textureDef.name || sourceDef.name || "";
			if (texture.name === "" && typeof sourceDef.uri === "string" && sourceDef.uri.startsWith("data:image/") === false) texture.name = sourceDef.uri;
			const sampler = (json.samplers || {})[textureDef.sampler] || {};
			texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || 1006;
			texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || 1008;
			texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || 1e3;
			texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || 1e3;
			parser.associations.set(texture, { textures: textureIndex });
			return texture;
		}).catch(function() {
			return null;
		});
		this.textureCache[cacheKey] = promise;
		return promise;
	}
	loadImageSource(sourceIndex, loader) {
		const parser = this;
		const json = this.json;
		const options = this.options;
		if (this.sourceCache[sourceIndex] !== void 0) return this.sourceCache[sourceIndex].then((texture) => texture.clone());
		const sourceDef = json.images[sourceIndex];
		const URL = self.URL || self.webkitURL;
		let sourceURI = sourceDef.uri || "";
		let isObjectURL = false;
		if (sourceDef.bufferView !== void 0) sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
			isObjectURL = true;
			const blob = new Blob([bufferView], { type: sourceDef.mimeType });
			sourceURI = URL.createObjectURL(blob);
			return sourceURI;
		});
		else if (sourceDef.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView");
		const promise = Promise.resolve(sourceURI).then(function(sourceURI2) {
			return new Promise(function(resolve, reject) {
				let onLoad = resolve;
				if (loader.isImageBitmapLoader === true) onLoad = function(imageBitmap) {
					const texture = new Texture(imageBitmap);
					texture.needsUpdate = true;
					resolve(texture);
				};
				loader.load(LoaderUtils.resolveURL(sourceURI2, options.path), onLoad, void 0, reject);
			});
		}).then(function(texture) {
			if (isObjectURL === true) URL.revokeObjectURL(sourceURI);
			assignExtrasToUserData(texture, sourceDef);
			texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
			return texture;
		}).catch(function(error) {
			console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
			throw error;
		});
		this.sourceCache[sourceIndex] = promise;
		return promise;
	}
	/**
	* Asynchronously assigns a texture to the given material parameters.
	* @param {Object} materialParams
	* @param {string} mapName
	* @param {Object} mapDef
	* @return {Promise<Texture>}
	*/
	assignTexture(materialParams, mapName, mapDef, colorSpace) {
		const parser = this;
		return this.getDependency("texture", mapDef.index).then(function(texture) {
			if (!texture) return null;
			if (mapDef.texCoord !== void 0 && mapDef.texCoord > 0) {
				texture = texture.clone();
				texture.channel = mapDef.texCoord;
			}
			if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
				const transform = mapDef.extensions !== void 0 ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
				if (transform) {
					const gltfReference = parser.associations.get(texture);
					texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
					parser.associations.set(texture, gltfReference);
				}
			}
			if (colorSpace !== void 0) {
				if (typeof colorSpace === "number") colorSpace = colorSpace === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
				if ("colorSpace" in texture) texture.colorSpace = colorSpace;
				else texture.encoding = colorSpace === SRGBColorSpace ? sRGBEncoding : LinearEncoding;
			}
			materialParams[mapName] = texture;
			return texture;
		});
	}
	/**
	* Assigns final material to a Mesh, Line, or Points instance. The instance
	* already has a material (generated from the glTF material options alone)
	* but reuse of the same glTF material may require multiple threejs materials
	* to accommodate different primitive types, defines, etc. New materials will
	* be created if necessary, and reused from a cache.
	* @param  {Object3D} mesh Mesh, Line, or Points instance.
	*/
	assignFinalMaterial(mesh) {
		const geometry = mesh.geometry;
		let material = mesh.material;
		const useDerivativeTangents = geometry.attributes.tangent === void 0;
		const useVertexColors = geometry.attributes.color !== void 0;
		const useFlatShading = geometry.attributes.normal === void 0;
		if (mesh.isPoints) {
			const cacheKey = "PointsMaterial:" + material.uuid;
			let pointsMaterial = this.cache.get(cacheKey);
			if (!pointsMaterial) {
				pointsMaterial = new PointsMaterial();
				Material.prototype.copy.call(pointsMaterial, material);
				pointsMaterial.color.copy(material.color);
				pointsMaterial.map = material.map;
				pointsMaterial.sizeAttenuation = false;
				this.cache.add(cacheKey, pointsMaterial);
			}
			material = pointsMaterial;
		} else if (mesh.isLine) {
			const cacheKey = "LineBasicMaterial:" + material.uuid;
			let lineMaterial = this.cache.get(cacheKey);
			if (!lineMaterial) {
				lineMaterial = new LineBasicMaterial();
				Material.prototype.copy.call(lineMaterial, material);
				lineMaterial.color.copy(material.color);
				lineMaterial.map = material.map;
				this.cache.add(cacheKey, lineMaterial);
			}
			material = lineMaterial;
		}
		if (useDerivativeTangents || useVertexColors || useFlatShading) {
			let cacheKey = "ClonedMaterial:" + material.uuid + ":";
			if (useDerivativeTangents) cacheKey += "derivative-tangents:";
			if (useVertexColors) cacheKey += "vertex-colors:";
			if (useFlatShading) cacheKey += "flat-shading:";
			let cachedMaterial = this.cache.get(cacheKey);
			if (!cachedMaterial) {
				cachedMaterial = material.clone();
				if (useVertexColors) cachedMaterial.vertexColors = true;
				if (useFlatShading) cachedMaterial.flatShading = true;
				if (useDerivativeTangents) {
					if (cachedMaterial.normalScale) cachedMaterial.normalScale.y *= -1;
					if (cachedMaterial.clearcoatNormalScale) cachedMaterial.clearcoatNormalScale.y *= -1;
				}
				this.cache.add(cacheKey, cachedMaterial);
				this.associations.set(cachedMaterial, this.associations.get(material));
			}
			material = cachedMaterial;
		}
		mesh.material = material;
	}
	getMaterialType() {
		return MeshStandardMaterial;
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	* @param {number} materialIndex
	* @return {Promise<Material>}
	*/
	loadMaterial(materialIndex) {
		const parser = this;
		const json = this.json;
		const extensions = this.extensions;
		const materialDef = json.materials[materialIndex];
		let materialType;
		const materialParams = {};
		const materialExtensions = materialDef.extensions || {};
		const pending = [];
		if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
			const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
			materialType = kmuExtension.getMaterialType();
			pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
		} else {
			const metallicRoughness = materialDef.pbrMetallicRoughness || {};
			materialParams.color = new Color(1, 1, 1);
			materialParams.opacity = 1;
			if (Array.isArray(metallicRoughness.baseColorFactor)) {
				const array = metallicRoughness.baseColorFactor;
				materialParams.color.setRGB(array[0], array[1], array[2], LinearSRGBColorSpace);
				materialParams.opacity = array[3];
			}
			if (metallicRoughness.baseColorTexture !== void 0) pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, SRGBColorSpace));
			materialParams.metalness = metallicRoughness.metallicFactor !== void 0 ? metallicRoughness.metallicFactor : 1;
			materialParams.roughness = metallicRoughness.roughnessFactor !== void 0 ? metallicRoughness.roughnessFactor : 1;
			if (metallicRoughness.metallicRoughnessTexture !== void 0) {
				pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture));
				pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture));
			}
			materialType = this._invokeOne(function(ext) {
				return ext.getMaterialType && ext.getMaterialType(materialIndex);
			});
			pending.push(Promise.all(this._invokeAll(function(ext) {
				return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
			})));
		}
		if (materialDef.doubleSided === true) materialParams.side = 2;
		const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
		if (alphaMode === ALPHA_MODES.BLEND) {
			materialParams.transparent = true;
			materialParams.depthWrite = false;
		} else {
			materialParams.transparent = false;
			if (alphaMode === ALPHA_MODES.MASK) materialParams.alphaTest = materialDef.alphaCutoff !== void 0 ? materialDef.alphaCutoff : .5;
		}
		if (materialDef.normalTexture !== void 0 && materialType !== MeshBasicMaterial) {
			pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture));
			materialParams.normalScale = new Vector2(1, 1);
			if (materialDef.normalTexture.scale !== void 0) {
				const scale = materialDef.normalTexture.scale;
				materialParams.normalScale.set(scale, scale);
			}
		}
		if (materialDef.occlusionTexture !== void 0 && materialType !== MeshBasicMaterial) {
			pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture));
			if (materialDef.occlusionTexture.strength !== void 0) materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
		}
		if (materialDef.emissiveFactor !== void 0 && materialType !== MeshBasicMaterial) {
			const emissiveFactor = materialDef.emissiveFactor;
			materialParams.emissive = new Color().setRGB(emissiveFactor[0], emissiveFactor[1], emissiveFactor[2], LinearSRGBColorSpace);
		}
		if (materialDef.emissiveTexture !== void 0 && materialType !== MeshBasicMaterial) pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, SRGBColorSpace));
		return Promise.all(pending).then(function() {
			const material = new materialType(materialParams);
			if (materialDef.name) material.name = materialDef.name;
			assignExtrasToUserData(material, materialDef);
			parser.associations.set(material, { materials: materialIndex });
			if (materialDef.extensions) addUnknownExtensionsToUserData(extensions, material, materialDef);
			return material;
		});
	}
	/** When Object3D instances are targeted by animation, they need unique names. */
	createUniqueName(originalName) {
		const sanitizedName = PropertyBinding.sanitizeNodeName(originalName || "");
		if (sanitizedName in this.nodeNamesUsed) return sanitizedName + "_" + ++this.nodeNamesUsed[sanitizedName];
		else {
			this.nodeNamesUsed[sanitizedName] = 0;
			return sanitizedName;
		}
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	*
	* Creates BufferGeometries from primitives.
	*
	* @param {Array<GLTF.Primitive>} primitives
	* @return {Promise<Array<BufferGeometry>>}
	*/
	loadGeometries(primitives) {
		const parser = this;
		const extensions = this.extensions;
		const cache = this.primitiveCache;
		function createDracoPrimitive(primitive) {
			return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
				return addPrimitiveAttributes(geometry, primitive, parser);
			});
		}
		const pending = [];
		for (let i = 0, il = primitives.length; i < il; i++) {
			const primitive = primitives[i];
			const cacheKey = createPrimitiveKey(primitive);
			const cached = cache[cacheKey];
			if (cached) pending.push(cached.promise);
			else {
				let geometryPromise;
				if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) geometryPromise = createDracoPrimitive(primitive);
				else geometryPromise = addPrimitiveAttributes(new BufferGeometry(), primitive, parser);
				cache[cacheKey] = {
					primitive,
					promise: geometryPromise
				};
				pending.push(geometryPromise);
			}
		}
		return Promise.all(pending);
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	* @param {number} meshIndex
	* @return {Promise<Group|Mesh|SkinnedMesh>}
	*/
	loadMesh(meshIndex) {
		const parser = this;
		const json = this.json;
		const extensions = this.extensions;
		const meshDef = json.meshes[meshIndex];
		const primitives = meshDef.primitives;
		const pending = [];
		for (let i = 0, il = primitives.length; i < il; i++) {
			const material = primitives[i].material === void 0 ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
			pending.push(material);
		}
		pending.push(parser.loadGeometries(primitives));
		return Promise.all(pending).then(function(results) {
			const materials = results.slice(0, results.length - 1);
			const geometries = results[results.length - 1];
			const meshes = [];
			for (let i = 0, il = geometries.length; i < il; i++) {
				const geometry = geometries[i];
				const primitive = primitives[i];
				let mesh;
				const material = materials[i];
				if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === void 0) {
					mesh = meshDef.isSkinnedMesh === true ? new SkinnedMesh(geometry, material) : new Mesh(geometry, material);
					if (mesh.isSkinnedMesh === true) mesh.normalizeSkinWeights();
					if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) mesh.geometry = toTrianglesDrawMode(mesh.geometry, 1);
					else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) mesh.geometry = toTrianglesDrawMode(mesh.geometry, 2);
				} else if (primitive.mode === WEBGL_CONSTANTS.LINES) mesh = new LineSegments(geometry, material);
				else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) mesh = new Line(geometry, material);
				else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) mesh = new LineLoop(geometry, material);
				else if (primitive.mode === WEBGL_CONSTANTS.POINTS) mesh = new Points(geometry, material);
				else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode);
				if (Object.keys(mesh.geometry.morphAttributes).length > 0) updateMorphTargets(mesh, meshDef);
				mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex);
				assignExtrasToUserData(mesh, meshDef);
				if (primitive.extensions) addUnknownExtensionsToUserData(extensions, mesh, primitive);
				parser.assignFinalMaterial(mesh);
				meshes.push(mesh);
			}
			for (let i = 0, il = meshes.length; i < il; i++) parser.associations.set(meshes[i], {
				meshes: meshIndex,
				primitives: i
			});
			if (meshes.length === 1) {
				if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, meshes[0], meshDef);
				return meshes[0];
			}
			const group = new Group();
			if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, group, meshDef);
			parser.associations.set(group, { meshes: meshIndex });
			for (let i = 0, il = meshes.length; i < il; i++) group.add(meshes[i]);
			return group;
		});
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	* @param {number} cameraIndex
	* @return {Promise<THREE.Camera>}
	*/
	loadCamera(cameraIndex) {
		let camera;
		const cameraDef = this.json.cameras[cameraIndex];
		const params = cameraDef[cameraDef.type];
		if (!params) {
			console.warn("THREE.GLTFLoader: Missing camera parameters.");
			return;
		}
		if (cameraDef.type === "perspective") camera = new PerspectiveCamera(MathUtils.radToDeg(params.yfov), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6);
		else if (cameraDef.type === "orthographic") camera = new OrthographicCamera(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar);
		if (cameraDef.name) camera.name = this.createUniqueName(cameraDef.name);
		assignExtrasToUserData(camera, cameraDef);
		return Promise.resolve(camera);
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	* @param {number} skinIndex
	* @return {Promise<Skeleton>}
	*/
	loadSkin(skinIndex) {
		const skinDef = this.json.skins[skinIndex];
		const pending = [];
		for (let i = 0, il = skinDef.joints.length; i < il; i++) pending.push(this._loadNodeShallow(skinDef.joints[i]));
		if (skinDef.inverseBindMatrices !== void 0) pending.push(this.getDependency("accessor", skinDef.inverseBindMatrices));
		else pending.push(null);
		return Promise.all(pending).then(function(results) {
			const inverseBindMatrices = results.pop();
			const jointNodes = results;
			const bones = [];
			const boneInverses = [];
			for (let i = 0, il = jointNodes.length; i < il; i++) {
				const jointNode = jointNodes[i];
				if (jointNode) {
					bones.push(jointNode);
					const mat = new Matrix4();
					if (inverseBindMatrices !== null) mat.fromArray(inverseBindMatrices.array, i * 16);
					boneInverses.push(mat);
				} else console.warn("THREE.GLTFLoader: Joint \"%s\" could not be found.", skinDef.joints[i]);
			}
			return new Skeleton(bones, boneInverses);
		});
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	* @param {number} animationIndex
	* @return {Promise<AnimationClip>}
	*/
	loadAnimation(animationIndex) {
		const json = this.json;
		const parser = this;
		const animationDef = json.animations[animationIndex];
		const animationName = animationDef.name ? animationDef.name : "animation_" + animationIndex;
		const pendingNodes = [];
		const pendingInputAccessors = [];
		const pendingOutputAccessors = [];
		const pendingSamplers = [];
		const pendingTargets = [];
		for (let i = 0, il = animationDef.channels.length; i < il; i++) {
			const channel = animationDef.channels[i];
			const sampler = animationDef.samplers[channel.sampler];
			const target = channel.target;
			const name = target.node;
			const input = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.input] : sampler.input;
			const output = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.output] : sampler.output;
			if (target.node === void 0) continue;
			pendingNodes.push(this.getDependency("node", name));
			pendingInputAccessors.push(this.getDependency("accessor", input));
			pendingOutputAccessors.push(this.getDependency("accessor", output));
			pendingSamplers.push(sampler);
			pendingTargets.push(target);
		}
		return Promise.all([
			Promise.all(pendingNodes),
			Promise.all(pendingInputAccessors),
			Promise.all(pendingOutputAccessors),
			Promise.all(pendingSamplers),
			Promise.all(pendingTargets)
		]).then(function(dependencies) {
			const nodes = dependencies[0];
			const inputAccessors = dependencies[1];
			const outputAccessors = dependencies[2];
			const samplers = dependencies[3];
			const targets = dependencies[4];
			const tracks = [];
			for (let i = 0, il = nodes.length; i < il; i++) {
				const node = nodes[i];
				const inputAccessor = inputAccessors[i];
				const outputAccessor = outputAccessors[i];
				const sampler = samplers[i];
				const target = targets[i];
				if (node === void 0) continue;
				if (node.updateMatrix) node.updateMatrix();
				const createdTracks = parser._createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target);
				if (createdTracks) for (let k = 0; k < createdTracks.length; k++) tracks.push(createdTracks[k]);
			}
			return new AnimationClip(animationName, void 0, tracks);
		});
	}
	createNodeMesh(nodeIndex) {
		const json = this.json;
		const parser = this;
		const nodeDef = json.nodes[nodeIndex];
		if (nodeDef.mesh === void 0) return null;
		return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
			const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
			if (nodeDef.weights !== void 0) node.traverse(function(o) {
				if (!o.isMesh) return;
				for (let i = 0, il = nodeDef.weights.length; i < il; i++) o.morphTargetInfluences[i] = nodeDef.weights[i];
			});
			return node;
		});
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	* @param {number} nodeIndex
	* @return {Promise<Object3D>}
	*/
	loadNode(nodeIndex) {
		const json = this.json;
		const parser = this;
		const nodeDef = json.nodes[nodeIndex];
		const nodePending = parser._loadNodeShallow(nodeIndex);
		const childPending = [];
		const childrenDef = nodeDef.children || [];
		for (let i = 0, il = childrenDef.length; i < il; i++) childPending.push(parser.getDependency("node", childrenDef[i]));
		const skeletonPending = nodeDef.skin === void 0 ? Promise.resolve(null) : parser.getDependency("skin", nodeDef.skin);
		return Promise.all([
			nodePending,
			Promise.all(childPending),
			skeletonPending
		]).then(function(results) {
			const node = results[0];
			const children = results[1];
			const skeleton = results[2];
			if (skeleton !== null) node.traverse(function(mesh) {
				if (!mesh.isSkinnedMesh) return;
				mesh.bind(skeleton, _identityMatrix);
			});
			for (let i = 0, il = children.length; i < il; i++) node.add(children[i]);
			return node;
		});
	}
	_loadNodeShallow(nodeIndex) {
		const json = this.json;
		const extensions = this.extensions;
		const parser = this;
		if (this.nodeCache[nodeIndex] !== void 0) return this.nodeCache[nodeIndex];
		const nodeDef = json.nodes[nodeIndex];
		const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
		const pending = [];
		const meshPromise = parser._invokeOne(function(ext) {
			return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
		});
		if (meshPromise) pending.push(meshPromise);
		if (nodeDef.camera !== void 0) pending.push(parser.getDependency("camera", nodeDef.camera).then(function(camera) {
			return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
		}));
		parser._invokeAll(function(ext) {
			return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
		}).forEach(function(promise) {
			pending.push(promise);
		});
		this.nodeCache[nodeIndex] = Promise.all(pending).then(function(objects) {
			let node;
			if (nodeDef.isBone === true) node = new Bone();
			else if (objects.length > 1) node = new Group();
			else if (objects.length === 1) node = objects[0];
			else node = new Object3D();
			if (node !== objects[0]) for (let i = 0, il = objects.length; i < il; i++) node.add(objects[i]);
			if (nodeDef.name) {
				node.userData.name = nodeDef.name;
				node.name = nodeName;
			}
			assignExtrasToUserData(node, nodeDef);
			if (nodeDef.extensions) addUnknownExtensionsToUserData(extensions, node, nodeDef);
			if (nodeDef.matrix !== void 0) {
				const matrix = new Matrix4();
				matrix.fromArray(nodeDef.matrix);
				node.applyMatrix4(matrix);
			} else {
				if (nodeDef.translation !== void 0) node.position.fromArray(nodeDef.translation);
				if (nodeDef.rotation !== void 0) node.quaternion.fromArray(nodeDef.rotation);
				if (nodeDef.scale !== void 0) node.scale.fromArray(nodeDef.scale);
			}
			if (!parser.associations.has(node)) parser.associations.set(node, {});
			parser.associations.get(node).nodes = nodeIndex;
			return node;
		});
		return this.nodeCache[nodeIndex];
	}
	/**
	* Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	* @param {number} sceneIndex
	* @return {Promise<Group>}
	*/
	loadScene(sceneIndex) {
		const extensions = this.extensions;
		const sceneDef = this.json.scenes[sceneIndex];
		const parser = this;
		const scene = new Group();
		if (sceneDef.name) scene.name = parser.createUniqueName(sceneDef.name);
		assignExtrasToUserData(scene, sceneDef);
		if (sceneDef.extensions) addUnknownExtensionsToUserData(extensions, scene, sceneDef);
		const nodeIds = sceneDef.nodes || [];
		const pending = [];
		for (let i = 0, il = nodeIds.length; i < il; i++) pending.push(parser.getDependency("node", nodeIds[i]));
		return Promise.all(pending).then(function(nodes) {
			for (let i = 0, il = nodes.length; i < il; i++) scene.add(nodes[i]);
			const reduceAssociations = (node) => {
				const reducedAssociations = /* @__PURE__ */ new Map();
				for (const [key, value] of parser.associations) if (key instanceof Material || key instanceof Texture) reducedAssociations.set(key, value);
				node.traverse((node2) => {
					const mappings = parser.associations.get(node2);
					if (mappings != null) reducedAssociations.set(node2, mappings);
				});
				return reducedAssociations;
			};
			parser.associations = reduceAssociations(scene);
			return scene;
		});
	}
	_createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target) {
		const tracks = [];
		const targetName = node.name ? node.name : node.uuid;
		const targetNames = [];
		if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) node.traverse(function(object) {
			if (object.morphTargetInfluences) targetNames.push(object.name ? object.name : object.uuid);
		});
		else targetNames.push(targetName);
		let TypedKeyframeTrack;
		switch (PATH_PROPERTIES[target.path]) {
			case PATH_PROPERTIES.weights:
				TypedKeyframeTrack = NumberKeyframeTrack;
				break;
			case PATH_PROPERTIES.rotation:
				TypedKeyframeTrack = QuaternionKeyframeTrack;
				break;
			case PATH_PROPERTIES.position:
			case PATH_PROPERTIES.scale:
				TypedKeyframeTrack = VectorKeyframeTrack;
				break;
			default: switch (outputAccessor.itemSize) {
				case 1:
					TypedKeyframeTrack = NumberKeyframeTrack;
					break;
				default: TypedKeyframeTrack = VectorKeyframeTrack;
			}
		}
		const interpolation = sampler.interpolation !== void 0 ? INTERPOLATION[sampler.interpolation] : InterpolateLinear;
		const outputArray = this._getArrayFromAccessor(outputAccessor);
		for (let j = 0, jl = targetNames.length; j < jl; j++) {
			const track = new TypedKeyframeTrack(targetNames[j] + "." + PATH_PROPERTIES[target.path], inputAccessor.array, outputArray, interpolation);
			if (sampler.interpolation === "CUBICSPLINE") this._createCubicSplineTrackInterpolant(track);
			tracks.push(track);
		}
		return tracks;
	}
	_getArrayFromAccessor(accessor) {
		let outputArray = accessor.array;
		if (accessor.normalized) {
			const scale = getNormalizedComponentScale(outputArray.constructor);
			const scaled = new Float32Array(outputArray.length);
			for (let j = 0, jl = outputArray.length; j < jl; j++) scaled[j] = outputArray[j] * scale;
			outputArray = scaled;
		}
		return outputArray;
	}
	_createCubicSplineTrackInterpolant(track) {
		track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
			return new (this instanceof QuaternionKeyframeTrack ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant)(this.times, this.values, this.getValueSize() / 3, result);
		};
		track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
	}
};
function computeBounds(geometry, primitiveDef, parser) {
	const attributes = primitiveDef.attributes;
	const box = new Box3();
	if (attributes.POSITION !== void 0) {
		const accessor = parser.json.accessors[attributes.POSITION];
		const min = accessor.min;
		const max = accessor.max;
		if (min !== void 0 && max !== void 0) {
			box.set(new Vector3(min[0], min[1], min[2]), new Vector3(max[0], max[1], max[2]));
			if (accessor.normalized) {
				const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
				box.min.multiplyScalar(boxScale);
				box.max.multiplyScalar(boxScale);
			}
		} else {
			console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			return;
		}
	} else return;
	const targets = primitiveDef.targets;
	if (targets !== void 0) {
		const maxDisplacement = new Vector3();
		const vector = new Vector3();
		for (let i = 0, il = targets.length; i < il; i++) {
			const target = targets[i];
			if (target.POSITION !== void 0) {
				const accessor = parser.json.accessors[target.POSITION];
				const min = accessor.min;
				const max = accessor.max;
				if (min !== void 0 && max !== void 0) {
					vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
					vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
					vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2])));
					if (accessor.normalized) {
						const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
						vector.multiplyScalar(boxScale);
					}
					maxDisplacement.max(vector);
				} else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			}
		}
		box.expandByVector(maxDisplacement);
	}
	geometry.boundingBox = box;
	const sphere = new Sphere();
	box.getCenter(sphere.center);
	sphere.radius = box.min.distanceTo(box.max) / 2;
	geometry.boundingSphere = sphere;
}
function addPrimitiveAttributes(geometry, primitiveDef, parser) {
	const attributes = primitiveDef.attributes;
	const pending = [];
	function assignAttributeAccessor(accessorIndex, attributeName) {
		return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
			geometry.setAttribute(attributeName, accessor);
		});
	}
	for (const gltfAttributeName in attributes) {
		const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
		if (threeAttributeName in geometry.attributes) continue;
		pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
	}
	if (primitiveDef.indices !== void 0 && !geometry.index) {
		const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor2) {
			geometry.setIndex(accessor2);
		});
		pending.push(accessor);
	}
	assignExtrasToUserData(geometry, primitiveDef);
	computeBounds(geometry, primitiveDef, parser);
	return Promise.all(pending).then(function() {
		return primitiveDef.targets !== void 0 ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
	});
}
//#endregion
//#region node_modules/three-stdlib/shaders/HorizontalBlurShader.js
var HorizontalBlurShader = {
	uniforms: {
		tDiffuse: { value: null },
		h: { value: 1 / 512 }
	},
	vertexShader: `
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,
	fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `
};
//#endregion
//#region node_modules/three-stdlib/shaders/VerticalBlurShader.js
var VerticalBlurShader = {
	uniforms: {
		tDiffuse: { value: null },
		v: { value: 1 / 512 }
	},
	vertexShader: `
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,
	fragmentShader: `

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `
};
//#endregion
//#region node_modules/three-stdlib/loaders/RGBELoader.js
var RGBELoader = class extends DataTextureLoader {
	constructor(manager) {
		super(manager);
		this.type = HalfFloatType;
	}
	parse(buffer) {
		const rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function(rgbe_error_code, msg) {
			switch (rgbe_error_code) {
				case rgbe_read_error: throw new Error("THREE.RGBELoader: Read Error: " + (msg || ""));
				case rgbe_write_error: throw new Error("THREE.RGBELoader: Write Error: " + (msg || ""));
				case rgbe_format_error: throw new Error("THREE.RGBELoader: Bad File Format: " + (msg || ""));
				default:
				case rgbe_memory_error: throw new Error("THREE.RGBELoader: Memory Error: " + (msg || ""));
			}
		}, RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = "\n", fgets = function(buffer2, lineLimit, consume) {
			const chunkSize = 128;
			lineLimit = !lineLimit ? 1024 : lineLimit;
			let p = buffer2.pos, i = -1, len = 0, s = "", chunk = String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
			while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer2.byteLength) {
				s += chunk;
				len += chunk.length;
				p += chunkSize;
				chunk += String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
			}
			if (-1 < i) {
				if (false !== consume) buffer2.pos += len + i + 1;
				return s + chunk.slice(0, i);
			}
			return false;
		}, RGBE_ReadHeader = function(buffer2) {
			const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, header = {
				valid: 0,
				string: "",
				comments: "",
				programtype: "RGBE",
				format: "",
				gamma: 1,
				exposure: 1,
				width: 0,
				height: 0
			};
			let line, match;
			if (buffer2.pos >= buffer2.byteLength || !(line = fgets(buffer2))) rgbe_error(rgbe_read_error, "no header found");
			if (!(match = line.match(magic_token_re))) rgbe_error(rgbe_format_error, "bad initial token");
			header.valid |= RGBE_VALID_PROGRAMTYPE;
			header.programtype = match[1];
			header.string += line + "\n";
			while (true) {
				line = fgets(buffer2);
				if (false === line) break;
				header.string += line + "\n";
				if ("#" === line.charAt(0)) {
					header.comments += line + "\n";
					continue;
				}
				if (match = line.match(gamma_re)) header.gamma = parseFloat(match[1]);
				if (match = line.match(exposure_re)) header.exposure = parseFloat(match[1]);
				if (match = line.match(format_re)) {
					header.valid |= RGBE_VALID_FORMAT;
					header.format = match[1];
				}
				if (match = line.match(dimensions_re)) {
					header.valid |= RGBE_VALID_DIMENSIONS;
					header.height = parseInt(match[1], 10);
					header.width = parseInt(match[2], 10);
				}
				if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS) break;
			}
			if (!(header.valid & RGBE_VALID_FORMAT)) rgbe_error(rgbe_format_error, "missing format specifier");
			if (!(header.valid & RGBE_VALID_DIMENSIONS)) rgbe_error(rgbe_format_error, "missing image size specifier");
			return header;
		}, RGBE_ReadPixels_RLE = function(buffer2, w2, h2) {
			const scanline_width = w2;
			if (scanline_width < 8 || scanline_width > 32767 || 2 !== buffer2[0] || 2 !== buffer2[1] || buffer2[2] & 128) return new Uint8Array(buffer2);
			if (scanline_width !== (buffer2[2] << 8 | buffer2[3])) rgbe_error(rgbe_format_error, "wrong scanline width");
			const data_rgba = new Uint8Array(4 * w2 * h2);
			if (!data_rgba.length) rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
			let offset = 0, pos = 0;
			const ptr_end = 4 * scanline_width;
			const rgbeStart = /* @__PURE__ */ new Uint8Array(4);
			const scanline_buffer = new Uint8Array(ptr_end);
			let num_scanlines = h2;
			while (num_scanlines > 0 && pos < buffer2.byteLength) {
				if (pos + 4 > buffer2.byteLength) rgbe_error(rgbe_read_error);
				rgbeStart[0] = buffer2[pos++];
				rgbeStart[1] = buffer2[pos++];
				rgbeStart[2] = buffer2[pos++];
				rgbeStart[3] = buffer2[pos++];
				if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) rgbe_error(rgbe_format_error, "bad rgbe scanline format");
				let ptr = 0, count;
				while (ptr < ptr_end && pos < buffer2.byteLength) {
					count = buffer2[pos++];
					const isEncodedRun = count > 128;
					if (isEncodedRun) count -= 128;
					if (0 === count || ptr + count > ptr_end) rgbe_error(rgbe_format_error, "bad scanline data");
					if (isEncodedRun) {
						const byteValue = buffer2[pos++];
						for (let i = 0; i < count; i++) scanline_buffer[ptr++] = byteValue;
					} else {
						scanline_buffer.set(buffer2.subarray(pos, pos + count), ptr);
						ptr += count;
						pos += count;
					}
				}
				const l = scanline_width;
				for (let i = 0; i < l; i++) {
					let off = 0;
					data_rgba[offset] = scanline_buffer[i + off];
					off += scanline_width;
					data_rgba[offset + 1] = scanline_buffer[i + off];
					off += scanline_width;
					data_rgba[offset + 2] = scanline_buffer[i + off];
					off += scanline_width;
					data_rgba[offset + 3] = scanline_buffer[i + off];
					offset += 4;
				}
				num_scanlines--;
			}
			return data_rgba;
		};
		const RGBEByteToRGBFloat = function(sourceArray, sourceOffset, destArray, destOffset) {
			const e = sourceArray[sourceOffset + 3];
			const scale = Math.pow(2, e - 128) / 255;
			destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
			destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
			destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
			destArray[destOffset + 3] = 1;
		};
		const RGBEByteToRGBHalf = function(sourceArray, sourceOffset, destArray, destOffset) {
			const e = sourceArray[sourceOffset + 3];
			const scale = Math.pow(2, e - 128) / 255;
			destArray[destOffset + 0] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
			destArray[destOffset + 1] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
			destArray[destOffset + 2] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
			destArray[destOffset + 3] = DataUtils.toHalfFloat(1);
		};
		const byteArray = new Uint8Array(buffer);
		byteArray.pos = 0;
		const rgbe_header_info = RGBE_ReadHeader(byteArray);
		const w = rgbe_header_info.width, h = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);
		let data, type;
		let numElements;
		switch (this.type) {
			case FloatType:
				numElements = image_rgba_data.length / 4;
				const floatArray = new Float32Array(numElements * 4);
				for (let j = 0; j < numElements; j++) RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 4);
				data = floatArray;
				type = FloatType;
				break;
			case HalfFloatType:
				numElements = image_rgba_data.length / 4;
				const halfArray = new Uint16Array(numElements * 4);
				for (let j = 0; j < numElements; j++) RGBEByteToRGBHalf(image_rgba_data, j * 4, halfArray, j * 4);
				data = halfArray;
				type = HalfFloatType;
				break;
			default: throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
		}
		return {
			width: w,
			height: h,
			data,
			header: rgbe_header_info.string,
			gamma: rgbe_header_info.gamma,
			exposure: rgbe_header_info.exposure,
			type
		};
	}
	setDataType(value) {
		this.type = value;
		return this;
	}
	load(url, onLoad, onProgress, onError) {
		function onLoadCallback(texture, texData) {
			switch (texture.type) {
				case FloatType:
				case HalfFloatType:
					if ("colorSpace" in texture) texture.colorSpace = "srgb-linear";
					else texture.encoding = 3e3;
					texture.minFilter = LinearFilter;
					texture.magFilter = LinearFilter;
					texture.generateMipmaps = false;
					texture.flipY = true;
			}
			if (onLoad) onLoad(texture, texData);
		}
		return super.load(url, onLoadCallback, onProgress, onError);
	}
};
//#endregion
//#region node_modules/three-stdlib/loaders/EXRLoader.js
var hasColorSpace = version >= 152;
var EXRLoader = class extends DataTextureLoader {
	constructor(manager) {
		super(manager);
		this.type = HalfFloatType;
	}
	parse(buffer) {
		const USHORT_RANGE = 65536;
		const BITMAP_SIZE = 8192;
		const HUF_DECBITS = 14;
		const HUF_ENCSIZE = 65537;
		const HUF_DECSIZE = 16384;
		const HUF_DECMASK = 16383;
		const A_OFFSET = 32768;
		const MOD_MASK = 65535;
		const SHORT_ZEROCODE_RUN = 59;
		const LONG_ZEROCODE_RUN = 63;
		const SHORTEST_LONG_RUN = 6;
		const ULONG_SIZE = 8;
		const FLOAT32_SIZE = 4;
		const INT32_SIZE = 4;
		const INT16_SIZE = 2;
		const INT8_SIZE = 1;
		const STATIC_HUFFMAN = 0;
		const DEFLATE = 1;
		const UNKNOWN = 0;
		const LOSSY_DCT = 1;
		const RLE = 2;
		const logBase = Math.pow(2.7182818, 2.2);
		function reverseLutFromBitmap(bitmap, lut) {
			var k = 0;
			for (var i = 0; i < USHORT_RANGE; ++i) if (i == 0 || bitmap[i >> 3] & 1 << (i & 7)) lut[k++] = i;
			var n = k - 1;
			while (k < USHORT_RANGE) lut[k++] = 0;
			return n;
		}
		function hufClearDecTable(hdec) {
			for (var i = 0; i < HUF_DECSIZE; i++) {
				hdec[i] = {};
				hdec[i].len = 0;
				hdec[i].lit = 0;
				hdec[i].p = null;
			}
		}
		const getBitsReturn = {
			l: 0,
			c: 0,
			lc: 0
		};
		function getBits(nBits, c, lc, uInt8Array2, inOffset) {
			while (lc < nBits) {
				c = c << 8 | parseUint8Array(uInt8Array2, inOffset);
				lc += 8;
			}
			lc -= nBits;
			getBitsReturn.l = c >> lc & (1 << nBits) - 1;
			getBitsReturn.c = c;
			getBitsReturn.lc = lc;
		}
		const hufTableBuffer = new Array(59);
		function hufCanonicalCodeTable(hcode) {
			for (var i = 0; i <= 58; ++i) hufTableBuffer[i] = 0;
			for (var i = 0; i < HUF_ENCSIZE; ++i) hufTableBuffer[hcode[i]] += 1;
			var c = 0;
			for (var i = 58; i > 0; --i) {
				var nc = c + hufTableBuffer[i] >> 1;
				hufTableBuffer[i] = c;
				c = nc;
			}
			for (var i = 0; i < HUF_ENCSIZE; ++i) {
				var l = hcode[i];
				if (l > 0) hcode[i] = l | hufTableBuffer[l]++ << 6;
			}
		}
		function hufUnpackEncTable(uInt8Array2, inDataView, inOffset, ni, im, iM, hcode) {
			var p = inOffset;
			var c = 0;
			var lc = 0;
			for (; im <= iM; im++) {
				if (p.value - inOffset.value > ni) return false;
				getBits(6, c, lc, uInt8Array2, p);
				var l = getBitsReturn.l;
				c = getBitsReturn.c;
				lc = getBitsReturn.lc;
				hcode[im] = l;
				if (l == LONG_ZEROCODE_RUN) {
					if (p.value - inOffset.value > ni) throw "Something wrong with hufUnpackEncTable";
					getBits(8, c, lc, uInt8Array2, p);
					var zerun = getBitsReturn.l + SHORTEST_LONG_RUN;
					c = getBitsReturn.c;
					lc = getBitsReturn.lc;
					if (im + zerun > iM + 1) throw "Something wrong with hufUnpackEncTable";
					while (zerun--) hcode[im++] = 0;
					im--;
				} else if (l >= SHORT_ZEROCODE_RUN) {
					var zerun = l - SHORT_ZEROCODE_RUN + 2;
					if (im + zerun > iM + 1) throw "Something wrong with hufUnpackEncTable";
					while (zerun--) hcode[im++] = 0;
					im--;
				}
			}
			hufCanonicalCodeTable(hcode);
		}
		function hufLength(code) {
			return code & 63;
		}
		function hufCode(code) {
			return code >> 6;
		}
		function hufBuildDecTable(hcode, im, iM, hdecod) {
			for (; im <= iM; im++) {
				var c = hufCode(hcode[im]);
				var l = hufLength(hcode[im]);
				if (c >> l) throw "Invalid table entry";
				if (l > HUF_DECBITS) {
					var pl = hdecod[c >> l - HUF_DECBITS];
					if (pl.len) throw "Invalid table entry";
					pl.lit++;
					if (pl.p) {
						var p = pl.p;
						pl.p = new Array(pl.lit);
						for (var i = 0; i < pl.lit - 1; ++i) pl.p[i] = p[i];
					} else pl.p = new Array(1);
					pl.p[pl.lit - 1] = im;
				} else if (l) {
					var plOffset = 0;
					for (var i = 1 << HUF_DECBITS - l; i > 0; i--) {
						var pl = hdecod[(c << HUF_DECBITS - l) + plOffset];
						if (pl.len || pl.p) throw "Invalid table entry";
						pl.len = l;
						pl.lit = im;
						plOffset++;
					}
				}
			}
			return true;
		}
		const getCharReturn = {
			c: 0,
			lc: 0
		};
		function getChar(c, lc, uInt8Array2, inOffset) {
			c = c << 8 | parseUint8Array(uInt8Array2, inOffset);
			lc += 8;
			getCharReturn.c = c;
			getCharReturn.lc = lc;
		}
		const getCodeReturn = {
			c: 0,
			lc: 0
		};
		function getCode(po, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outBufferOffset, outBufferEndOffset) {
			if (po == rlc) {
				if (lc < 8) {
					getChar(c, lc, uInt8Array2, inOffset);
					c = getCharReturn.c;
					lc = getCharReturn.lc;
				}
				lc -= 8;
				var cs = c >> lc;
				var cs = new Uint8Array([cs])[0];
				if (outBufferOffset.value + cs > outBufferEndOffset) return false;
				var s = outBuffer[outBufferOffset.value - 1];
				while (cs-- > 0) outBuffer[outBufferOffset.value++] = s;
			} else if (outBufferOffset.value < outBufferEndOffset) outBuffer[outBufferOffset.value++] = po;
			else return false;
			getCodeReturn.c = c;
			getCodeReturn.lc = lc;
		}
		function UInt16(value) {
			return value & 65535;
		}
		function Int16(value) {
			var ref = UInt16(value);
			return ref > 32767 ? ref - 65536 : ref;
		}
		const wdec14Return = {
			a: 0,
			b: 0
		};
		function wdec14(l, h) {
			var ls = Int16(l);
			var hi = Int16(h);
			var ai = ls + (hi & 1) + (hi >> 1);
			var as = ai;
			var bs = ai - hi;
			wdec14Return.a = as;
			wdec14Return.b = bs;
		}
		function wdec16(l, h) {
			var m = UInt16(l);
			var d = UInt16(h);
			var bb = m - (d >> 1) & MOD_MASK;
			var aa = d + bb - A_OFFSET & MOD_MASK;
			wdec14Return.a = aa;
			wdec14Return.b = bb;
		}
		function wav2Decode(buffer2, j, nx, ox, ny, oy, mx) {
			var w14 = mx < 16384;
			var n = nx > ny ? ny : nx;
			var p = 1;
			var p2;
			while (p <= n) p <<= 1;
			p >>= 1;
			p2 = p;
			p >>= 1;
			while (p >= 1) {
				var py = 0;
				var ey = py + oy * (ny - p2);
				var oy1 = oy * p;
				var oy2 = oy * p2;
				var ox1 = ox * p;
				var ox2 = ox * p2;
				var i00, i01, i10, i11;
				for (; py <= ey; py += oy2) {
					var px = py;
					var ex = py + ox * (nx - p2);
					for (; px <= ex; px += ox2) {
						var p01 = px + ox1;
						var p10 = px + oy1;
						var p11 = p10 + ox1;
						if (w14) {
							wdec14(buffer2[px + j], buffer2[p10 + j]);
							i00 = wdec14Return.a;
							i10 = wdec14Return.b;
							wdec14(buffer2[p01 + j], buffer2[p11 + j]);
							i01 = wdec14Return.a;
							i11 = wdec14Return.b;
							wdec14(i00, i01);
							buffer2[px + j] = wdec14Return.a;
							buffer2[p01 + j] = wdec14Return.b;
							wdec14(i10, i11);
							buffer2[p10 + j] = wdec14Return.a;
							buffer2[p11 + j] = wdec14Return.b;
						} else {
							wdec16(buffer2[px + j], buffer2[p10 + j]);
							i00 = wdec14Return.a;
							i10 = wdec14Return.b;
							wdec16(buffer2[p01 + j], buffer2[p11 + j]);
							i01 = wdec14Return.a;
							i11 = wdec14Return.b;
							wdec16(i00, i01);
							buffer2[px + j] = wdec14Return.a;
							buffer2[p01 + j] = wdec14Return.b;
							wdec16(i10, i11);
							buffer2[p10 + j] = wdec14Return.a;
							buffer2[p11 + j] = wdec14Return.b;
						}
					}
					if (nx & p) {
						var p10 = px + oy1;
						if (w14) wdec14(buffer2[px + j], buffer2[p10 + j]);
						else wdec16(buffer2[px + j], buffer2[p10 + j]);
						i00 = wdec14Return.a;
						buffer2[p10 + j] = wdec14Return.b;
						buffer2[px + j] = i00;
					}
				}
				if (ny & p) {
					var px = py;
					var ex = py + ox * (nx - p2);
					for (; px <= ex; px += ox2) {
						var p01 = px + ox1;
						if (w14) wdec14(buffer2[px + j], buffer2[p01 + j]);
						else wdec16(buffer2[px + j], buffer2[p01 + j]);
						i00 = wdec14Return.a;
						buffer2[p01 + j] = wdec14Return.b;
						buffer2[px + j] = i00;
					}
				}
				p2 = p;
				p >>= 1;
			}
			return py;
		}
		function hufDecode(encodingTable, decodingTable, uInt8Array2, inDataView, inOffset, ni, rlc, no, outBuffer, outOffset) {
			var c = 0;
			var lc = 0;
			var outBufferEndOffset = no;
			var inOffsetEnd = Math.trunc(inOffset.value + (ni + 7) / 8);
			while (inOffset.value < inOffsetEnd) {
				getChar(c, lc, uInt8Array2, inOffset);
				c = getCharReturn.c;
				lc = getCharReturn.lc;
				while (lc >= HUF_DECBITS) {
					var pl = decodingTable[c >> lc - HUF_DECBITS & HUF_DECMASK];
					if (pl.len) {
						lc -= pl.len;
						getCode(pl.lit, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
						c = getCodeReturn.c;
						lc = getCodeReturn.lc;
					} else {
						if (!pl.p) throw "hufDecode issues";
						var j;
						for (j = 0; j < pl.lit; j++) {
							var l = hufLength(encodingTable[pl.p[j]]);
							while (lc < l && inOffset.value < inOffsetEnd) {
								getChar(c, lc, uInt8Array2, inOffset);
								c = getCharReturn.c;
								lc = getCharReturn.lc;
							}
							if (lc >= l) {
								if (hufCode(encodingTable[pl.p[j]]) == (c >> lc - l & (1 << l) - 1)) {
									lc -= l;
									getCode(pl.p[j], rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
									c = getCodeReturn.c;
									lc = getCodeReturn.lc;
									break;
								}
							}
						}
						if (j == pl.lit) throw "hufDecode issues";
					}
				}
			}
			var i = 8 - ni & 7;
			c >>= i;
			lc -= i;
			while (lc > 0) {
				var pl = decodingTable[c << HUF_DECBITS - lc & HUF_DECMASK];
				if (pl.len) {
					lc -= pl.len;
					getCode(pl.lit, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
					c = getCodeReturn.c;
					lc = getCodeReturn.lc;
				} else throw "hufDecode issues";
			}
			return true;
		}
		function hufUncompress(uInt8Array2, inDataView, inOffset, nCompressed, outBuffer, nRaw) {
			var outOffset = { value: 0 };
			var initialInOffset = inOffset.value;
			var im = parseUint32(inDataView, inOffset);
			var iM = parseUint32(inDataView, inOffset);
			inOffset.value += 4;
			var nBits = parseUint32(inDataView, inOffset);
			inOffset.value += 4;
			if (im < 0 || im >= HUF_ENCSIZE || iM < 0 || iM >= HUF_ENCSIZE) throw "Something wrong with HUF_ENCSIZE";
			var freq = new Array(HUF_ENCSIZE);
			var hdec = new Array(HUF_DECSIZE);
			hufClearDecTable(hdec);
			hufUnpackEncTable(uInt8Array2, inDataView, inOffset, nCompressed - (inOffset.value - initialInOffset), im, iM, freq);
			if (nBits > 8 * (nCompressed - (inOffset.value - initialInOffset))) throw "Something wrong with hufUncompress";
			hufBuildDecTable(freq, im, iM, hdec);
			hufDecode(freq, hdec, uInt8Array2, inDataView, inOffset, nBits, iM, nRaw, outBuffer, outOffset);
		}
		function applyLut(lut, data, nData) {
			for (var i = 0; i < nData; ++i) data[i] = lut[data[i]];
		}
		function predictor(source) {
			for (var t = 1; t < source.length; t++) {
				var d = source[t - 1] + source[t] - 128;
				source[t] = d;
			}
		}
		function interleaveScalar(source, out) {
			var t1 = 0;
			var t2 = Math.floor((source.length + 1) / 2);
			var s = 0;
			var stop = source.length - 1;
			while (true) {
				if (s > stop) break;
				out[s++] = source[t1++];
				if (s > stop) break;
				out[s++] = source[t2++];
			}
		}
		function decodeRunLength(source) {
			var size = source.byteLength;
			var out = new Array();
			var p = 0;
			var reader = new DataView(source);
			while (size > 0) {
				var l = reader.getInt8(p++);
				if (l < 0) {
					var count = -l;
					size -= count + 1;
					for (var i = 0; i < count; i++) out.push(reader.getUint8(p++));
				} else {
					var count = l;
					size -= 2;
					var value = reader.getUint8(p++);
					for (var i = 0; i < count + 1; i++) out.push(value);
				}
			}
			return out;
		}
		function lossyDctDecode(cscSet, rowPtrs, channelData, acBuffer, dcBuffer, outBuffer) {
			var dataView = new DataView(outBuffer.buffer);
			var width = channelData[cscSet.idx[0]].width;
			var height = channelData[cscSet.idx[0]].height;
			var numComp = 3;
			var numFullBlocksX = Math.floor(width / 8);
			var numBlocksX = Math.ceil(width / 8);
			var numBlocksY = Math.ceil(height / 8);
			var leftoverX = width - (numBlocksX - 1) * 8;
			var leftoverY = height - (numBlocksY - 1) * 8;
			var currAcComp = { value: 0 };
			var currDcComp = new Array(numComp);
			var dctData = new Array(numComp);
			var halfZigBlock = new Array(numComp);
			var rowBlock = new Array(numComp);
			var rowOffsets = new Array(numComp);
			for (let comp2 = 0; comp2 < numComp; ++comp2) {
				rowOffsets[comp2] = rowPtrs[cscSet.idx[comp2]];
				currDcComp[comp2] = comp2 < 1 ? 0 : currDcComp[comp2 - 1] + numBlocksX * numBlocksY;
				dctData[comp2] = /* @__PURE__ */ new Float32Array(64);
				halfZigBlock[comp2] = /* @__PURE__ */ new Uint16Array(64);
				rowBlock[comp2] = new Uint16Array(numBlocksX * 64);
			}
			for (let blocky = 0; blocky < numBlocksY; ++blocky) {
				var maxY = 8;
				if (blocky == numBlocksY - 1) maxY = leftoverY;
				var maxX = 8;
				for (let blockx = 0; blockx < numBlocksX; ++blockx) {
					if (blockx == numBlocksX - 1) maxX = leftoverX;
					for (let comp2 = 0; comp2 < numComp; ++comp2) {
						halfZigBlock[comp2].fill(0);
						halfZigBlock[comp2][0] = dcBuffer[currDcComp[comp2]++];
						unRleAC(currAcComp, acBuffer, halfZigBlock[comp2]);
						unZigZag(halfZigBlock[comp2], dctData[comp2]);
						dctInverse(dctData[comp2]);
					}
					csc709Inverse(dctData);
					for (let comp2 = 0; comp2 < numComp; ++comp2) convertToHalf(dctData[comp2], rowBlock[comp2], blockx * 64);
				}
				let offset2 = 0;
				for (let comp2 = 0; comp2 < numComp; ++comp2) {
					const type2 = channelData[cscSet.idx[comp2]].type;
					for (let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2) {
						offset2 = rowOffsets[comp2][y2];
						for (let blockx = 0; blockx < numFullBlocksX; ++blockx) {
							const src = blockx * 64 + (y2 & 7) * 8;
							dataView.setUint16(offset2 + 0 * type2, rowBlock[comp2][src + 0], true);
							dataView.setUint16(offset2 + 2 * type2, rowBlock[comp2][src + 1], true);
							dataView.setUint16(offset2 + 4 * type2, rowBlock[comp2][src + 2], true);
							dataView.setUint16(offset2 + 6 * type2, rowBlock[comp2][src + 3], true);
							dataView.setUint16(offset2 + 8 * type2, rowBlock[comp2][src + 4], true);
							dataView.setUint16(offset2 + 10 * type2, rowBlock[comp2][src + 5], true);
							dataView.setUint16(offset2 + 12 * type2, rowBlock[comp2][src + 6], true);
							dataView.setUint16(offset2 + 14 * type2, rowBlock[comp2][src + 7], true);
							offset2 += 16 * type2;
						}
					}
					if (numFullBlocksX != numBlocksX) for (let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2) {
						const offset3 = rowOffsets[comp2][y2] + 8 * numFullBlocksX * INT16_SIZE * type2;
						const src = numFullBlocksX * 64 + (y2 & 7) * 8;
						for (let x2 = 0; x2 < maxX; ++x2) dataView.setUint16(offset3 + x2 * INT16_SIZE * type2, rowBlock[comp2][src + x2], true);
					}
				}
			}
			var halfRow = new Uint16Array(width);
			var dataView = new DataView(outBuffer.buffer);
			for (var comp = 0; comp < numComp; ++comp) {
				channelData[cscSet.idx[comp]].decoded = true;
				var type = channelData[cscSet.idx[comp]].type;
				if (channelData[comp].type != 2) continue;
				for (var y = 0; y < height; ++y) {
					const offset2 = rowOffsets[comp][y];
					for (var x = 0; x < width; ++x) halfRow[x] = dataView.getUint16(offset2 + x * INT16_SIZE * type, true);
					for (var x = 0; x < width; ++x) dataView.setFloat32(offset2 + x * INT16_SIZE * type, decodeFloat16(halfRow[x]), true);
				}
			}
		}
		function unRleAC(currAcComp, acBuffer, halfZigBlock) {
			var acValue;
			var dctComp = 1;
			while (dctComp < 64) {
				acValue = acBuffer[currAcComp.value];
				if (acValue == 65280) dctComp = 64;
				else if (acValue >> 8 == 255) dctComp += acValue & 255;
				else {
					halfZigBlock[dctComp] = acValue;
					dctComp++;
				}
				currAcComp.value++;
			}
		}
		function unZigZag(src, dst) {
			dst[0] = decodeFloat16(src[0]);
			dst[1] = decodeFloat16(src[1]);
			dst[2] = decodeFloat16(src[5]);
			dst[3] = decodeFloat16(src[6]);
			dst[4] = decodeFloat16(src[14]);
			dst[5] = decodeFloat16(src[15]);
			dst[6] = decodeFloat16(src[27]);
			dst[7] = decodeFloat16(src[28]);
			dst[8] = decodeFloat16(src[2]);
			dst[9] = decodeFloat16(src[4]);
			dst[10] = decodeFloat16(src[7]);
			dst[11] = decodeFloat16(src[13]);
			dst[12] = decodeFloat16(src[16]);
			dst[13] = decodeFloat16(src[26]);
			dst[14] = decodeFloat16(src[29]);
			dst[15] = decodeFloat16(src[42]);
			dst[16] = decodeFloat16(src[3]);
			dst[17] = decodeFloat16(src[8]);
			dst[18] = decodeFloat16(src[12]);
			dst[19] = decodeFloat16(src[17]);
			dst[20] = decodeFloat16(src[25]);
			dst[21] = decodeFloat16(src[30]);
			dst[22] = decodeFloat16(src[41]);
			dst[23] = decodeFloat16(src[43]);
			dst[24] = decodeFloat16(src[9]);
			dst[25] = decodeFloat16(src[11]);
			dst[26] = decodeFloat16(src[18]);
			dst[27] = decodeFloat16(src[24]);
			dst[28] = decodeFloat16(src[31]);
			dst[29] = decodeFloat16(src[40]);
			dst[30] = decodeFloat16(src[44]);
			dst[31] = decodeFloat16(src[53]);
			dst[32] = decodeFloat16(src[10]);
			dst[33] = decodeFloat16(src[19]);
			dst[34] = decodeFloat16(src[23]);
			dst[35] = decodeFloat16(src[32]);
			dst[36] = decodeFloat16(src[39]);
			dst[37] = decodeFloat16(src[45]);
			dst[38] = decodeFloat16(src[52]);
			dst[39] = decodeFloat16(src[54]);
			dst[40] = decodeFloat16(src[20]);
			dst[41] = decodeFloat16(src[22]);
			dst[42] = decodeFloat16(src[33]);
			dst[43] = decodeFloat16(src[38]);
			dst[44] = decodeFloat16(src[46]);
			dst[45] = decodeFloat16(src[51]);
			dst[46] = decodeFloat16(src[55]);
			dst[47] = decodeFloat16(src[60]);
			dst[48] = decodeFloat16(src[21]);
			dst[49] = decodeFloat16(src[34]);
			dst[50] = decodeFloat16(src[37]);
			dst[51] = decodeFloat16(src[47]);
			dst[52] = decodeFloat16(src[50]);
			dst[53] = decodeFloat16(src[56]);
			dst[54] = decodeFloat16(src[59]);
			dst[55] = decodeFloat16(src[61]);
			dst[56] = decodeFloat16(src[35]);
			dst[57] = decodeFloat16(src[36]);
			dst[58] = decodeFloat16(src[48]);
			dst[59] = decodeFloat16(src[49]);
			dst[60] = decodeFloat16(src[57]);
			dst[61] = decodeFloat16(src[58]);
			dst[62] = decodeFloat16(src[62]);
			dst[63] = decodeFloat16(src[63]);
		}
		function dctInverse(data) {
			const a = .5 * Math.cos(3.14159 / 4);
			const b = .5 * Math.cos(3.14159 / 16);
			const c = .5 * Math.cos(3.14159 / 8);
			const d = .5 * Math.cos(3 * 3.14159 / 16);
			const e = .5 * Math.cos(15.70795 / 16);
			const f = .5 * Math.cos(3 * 3.14159 / 8);
			const g = .5 * Math.cos(21.99113 / 16);
			var alpha = new Array(4);
			var beta = new Array(4);
			var theta = new Array(4);
			var gamma = new Array(4);
			for (var row = 0; row < 8; ++row) {
				var rowPtr = row * 8;
				alpha[0] = c * data[rowPtr + 2];
				alpha[1] = f * data[rowPtr + 2];
				alpha[2] = c * data[rowPtr + 6];
				alpha[3] = f * data[rowPtr + 6];
				beta[0] = b * data[rowPtr + 1] + d * data[rowPtr + 3] + e * data[rowPtr + 5] + g * data[rowPtr + 7];
				beta[1] = d * data[rowPtr + 1] - g * data[rowPtr + 3] - b * data[rowPtr + 5] - e * data[rowPtr + 7];
				beta[2] = e * data[rowPtr + 1] - b * data[rowPtr + 3] + g * data[rowPtr + 5] + d * data[rowPtr + 7];
				beta[3] = g * data[rowPtr + 1] - e * data[rowPtr + 3] + d * data[rowPtr + 5] - b * data[rowPtr + 7];
				theta[0] = a * (data[rowPtr + 0] + data[rowPtr + 4]);
				theta[3] = a * (data[rowPtr + 0] - data[rowPtr + 4]);
				theta[1] = alpha[0] + alpha[3];
				theta[2] = alpha[1] - alpha[2];
				gamma[0] = theta[0] + theta[1];
				gamma[1] = theta[3] + theta[2];
				gamma[2] = theta[3] - theta[2];
				gamma[3] = theta[0] - theta[1];
				data[rowPtr + 0] = gamma[0] + beta[0];
				data[rowPtr + 1] = gamma[1] + beta[1];
				data[rowPtr + 2] = gamma[2] + beta[2];
				data[rowPtr + 3] = gamma[3] + beta[3];
				data[rowPtr + 4] = gamma[3] - beta[3];
				data[rowPtr + 5] = gamma[2] - beta[2];
				data[rowPtr + 6] = gamma[1] - beta[1];
				data[rowPtr + 7] = gamma[0] - beta[0];
			}
			for (var column = 0; column < 8; ++column) {
				alpha[0] = c * data[16 + column];
				alpha[1] = f * data[16 + column];
				alpha[2] = c * data[48 + column];
				alpha[3] = f * data[48 + column];
				beta[0] = b * data[8 + column] + d * data[24 + column] + e * data[40 + column] + g * data[56 + column];
				beta[1] = d * data[8 + column] - g * data[24 + column] - b * data[40 + column] - e * data[56 + column];
				beta[2] = e * data[8 + column] - b * data[24 + column] + g * data[40 + column] + d * data[56 + column];
				beta[3] = g * data[8 + column] - e * data[24 + column] + d * data[40 + column] - b * data[56 + column];
				theta[0] = a * (data[column] + data[32 + column]);
				theta[3] = a * (data[column] - data[32 + column]);
				theta[1] = alpha[0] + alpha[3];
				theta[2] = alpha[1] - alpha[2];
				gamma[0] = theta[0] + theta[1];
				gamma[1] = theta[3] + theta[2];
				gamma[2] = theta[3] - theta[2];
				gamma[3] = theta[0] - theta[1];
				data[0 + column] = gamma[0] + beta[0];
				data[8 + column] = gamma[1] + beta[1];
				data[16 + column] = gamma[2] + beta[2];
				data[24 + column] = gamma[3] + beta[3];
				data[32 + column] = gamma[3] - beta[3];
				data[40 + column] = gamma[2] - beta[2];
				data[48 + column] = gamma[1] - beta[1];
				data[56 + column] = gamma[0] - beta[0];
			}
		}
		function csc709Inverse(data) {
			for (var i = 0; i < 64; ++i) {
				var y = data[0][i];
				var cb = data[1][i];
				var cr = data[2][i];
				data[0][i] = y + 1.5747 * cr;
				data[1][i] = y - .1873 * cb - .4682 * cr;
				data[2][i] = y + 1.8556 * cb;
			}
		}
		function convertToHalf(src, dst, idx) {
			for (var i = 0; i < 64; ++i) dst[idx + i] = DataUtils.toHalfFloat(toLinear(src[i]));
		}
		function toLinear(float) {
			if (float <= 1) return Math.sign(float) * Math.pow(Math.abs(float), 2.2);
			else return Math.sign(float) * Math.pow(logBase, Math.abs(float) - 1);
		}
		function uncompressRAW(info) {
			return new DataView(info.array.buffer, info.offset.value, info.size);
		}
		function uncompressRLE(info) {
			var compressed = info.viewer.buffer.slice(info.offset.value, info.offset.value + info.size);
			var rawBuffer = new Uint8Array(decodeRunLength(compressed));
			var tmpBuffer = new Uint8Array(rawBuffer.length);
			predictor(rawBuffer);
			interleaveScalar(rawBuffer, tmpBuffer);
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressZIP(info) {
			var rawBuffer = unzlibSync(info.array.slice(info.offset.value, info.offset.value + info.size));
			var tmpBuffer = new Uint8Array(rawBuffer.length);
			predictor(rawBuffer);
			interleaveScalar(rawBuffer, tmpBuffer);
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressPIZ(info) {
			var inDataView = info.viewer;
			var inOffset = { value: info.offset.value };
			var outBuffer = new Uint16Array(info.width * info.scanlineBlockSize * (info.channels * info.type));
			var bitmap = new Uint8Array(BITMAP_SIZE);
			var outBufferEnd = 0;
			var pizChannelData = new Array(info.channels);
			for (var i = 0; i < info.channels; i++) {
				pizChannelData[i] = {};
				pizChannelData[i]["start"] = outBufferEnd;
				pizChannelData[i]["end"] = pizChannelData[i]["start"];
				pizChannelData[i]["nx"] = info.width;
				pizChannelData[i]["ny"] = info.lines;
				pizChannelData[i]["size"] = info.type;
				outBufferEnd += pizChannelData[i].nx * pizChannelData[i].ny * pizChannelData[i].size;
			}
			var minNonZero = parseUint16(inDataView, inOffset);
			var maxNonZero = parseUint16(inDataView, inOffset);
			if (maxNonZero >= BITMAP_SIZE) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
			if (minNonZero <= maxNonZero) for (var i = 0; i < maxNonZero - minNonZero + 1; i++) bitmap[i + minNonZero] = parseUint8(inDataView, inOffset);
			var lut = new Uint16Array(USHORT_RANGE);
			var maxValue = reverseLutFromBitmap(bitmap, lut);
			var length = parseUint32(inDataView, inOffset);
			hufUncompress(info.array, inDataView, inOffset, length, outBuffer, outBufferEnd);
			for (var i = 0; i < info.channels; ++i) {
				var cd = pizChannelData[i];
				for (var j = 0; j < pizChannelData[i].size; ++j) wav2Decode(outBuffer, cd.start + j, cd.nx, cd.size, cd.ny, cd.nx * cd.size, maxValue);
			}
			applyLut(lut, outBuffer, outBufferEnd);
			var tmpOffset2 = 0;
			var tmpBuffer = new Uint8Array(outBuffer.buffer.byteLength);
			for (var y = 0; y < info.lines; y++) for (var c = 0; c < info.channels; c++) {
				var cd = pizChannelData[c];
				var n = cd.nx * cd.size;
				var cp = new Uint8Array(outBuffer.buffer, cd.end * INT16_SIZE, n * INT16_SIZE);
				tmpBuffer.set(cp, tmpOffset2);
				tmpOffset2 += n * INT16_SIZE;
				cd.end += n;
			}
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressPXR(info) {
			var rawBuffer = unzlibSync(info.array.slice(info.offset.value, info.offset.value + info.size));
			const sz = info.lines * info.channels * info.width;
			const tmpBuffer = info.type == 1 ? new Uint16Array(sz) : new Uint32Array(sz);
			let tmpBufferEnd = 0;
			let writePtr = 0;
			const ptr = new Array(4);
			for (let y = 0; y < info.lines; y++) for (let c = 0; c < info.channels; c++) {
				let pixel = 0;
				switch (info.type) {
					case 1:
						ptr[0] = tmpBufferEnd;
						ptr[1] = ptr[0] + info.width;
						tmpBufferEnd = ptr[1] + info.width;
						for (let j = 0; j < info.width; ++j) {
							const diff = rawBuffer[ptr[0]++] << 8 | rawBuffer[ptr[1]++];
							pixel += diff;
							tmpBuffer[writePtr] = pixel;
							writePtr++;
						}
						break;
					case 2:
						ptr[0] = tmpBufferEnd;
						ptr[1] = ptr[0] + info.width;
						ptr[2] = ptr[1] + info.width;
						tmpBufferEnd = ptr[2] + info.width;
						for (let j = 0; j < info.width; ++j) {
							const diff = rawBuffer[ptr[0]++] << 24 | rawBuffer[ptr[1]++] << 16 | rawBuffer[ptr[2]++] << 8;
							pixel += diff;
							tmpBuffer[writePtr] = pixel;
							writePtr++;
						}
				}
			}
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressDWA(info) {
			var inDataView = info.viewer;
			var inOffset = { value: info.offset.value };
			var outBuffer = new Uint8Array(info.width * info.lines * (info.channels * info.type * INT16_SIZE));
			var dwaHeader = {
				version: parseInt64(inDataView, inOffset),
				unknownUncompressedSize: parseInt64(inDataView, inOffset),
				unknownCompressedSize: parseInt64(inDataView, inOffset),
				acCompressedSize: parseInt64(inDataView, inOffset),
				dcCompressedSize: parseInt64(inDataView, inOffset),
				rleCompressedSize: parseInt64(inDataView, inOffset),
				rleUncompressedSize: parseInt64(inDataView, inOffset),
				rleRawSize: parseInt64(inDataView, inOffset),
				totalAcUncompressedCount: parseInt64(inDataView, inOffset),
				totalDcUncompressedCount: parseInt64(inDataView, inOffset),
				acCompression: parseInt64(inDataView, inOffset)
			};
			if (dwaHeader.version < 2) throw "EXRLoader.parse: " + EXRHeader.compression + " version " + dwaHeader.version + " is unsupported";
			var channelRules = new Array();
			var ruleSize = parseUint16(inDataView, inOffset) - INT16_SIZE;
			while (ruleSize > 0) {
				var name = parseNullTerminatedString(inDataView.buffer, inOffset);
				var value = parseUint8(inDataView, inOffset);
				var compression = value >> 2 & 3;
				var csc = (value >> 4) - 1;
				var index = new Int8Array([csc])[0];
				var type = parseUint8(inDataView, inOffset);
				channelRules.push({
					name,
					index,
					type,
					compression
				});
				ruleSize -= name.length + 3;
			}
			var channels = EXRHeader.channels;
			var channelData = new Array(info.channels);
			for (var i = 0; i < info.channels; ++i) {
				var cd = channelData[i] = {};
				var channel = channels[i];
				cd.name = channel.name;
				cd.compression = UNKNOWN;
				cd.decoded = false;
				cd.type = channel.pixelType;
				cd.pLinear = channel.pLinear;
				cd.width = info.width;
				cd.height = info.lines;
			}
			var cscSet = { idx: new Array(3) };
			for (var offset2 = 0; offset2 < info.channels; ++offset2) {
				var cd = channelData[offset2];
				for (var i = 0; i < channelRules.length; ++i) {
					var rule = channelRules[i];
					if (cd.name == rule.name) {
						cd.compression = rule.compression;
						if (rule.index >= 0) cscSet.idx[rule.index] = offset2;
						cd.offset = offset2;
					}
				}
			}
			if (dwaHeader.acCompressedSize > 0) switch (dwaHeader.acCompression) {
				case STATIC_HUFFMAN:
					var acBuffer = new Uint16Array(dwaHeader.totalAcUncompressedCount);
					hufUncompress(info.array, inDataView, inOffset, dwaHeader.acCompressedSize, acBuffer, dwaHeader.totalAcUncompressedCount);
					break;
				case DEFLATE:
					var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.totalAcUncompressedCount);
					var data = unzlibSync(compressed);
					var acBuffer = new Uint16Array(data.buffer);
					inOffset.value += dwaHeader.totalAcUncompressedCount;
			}
			if (dwaHeader.dcCompressedSize > 0) {
				var zlibInfo = {
					array: info.array,
					offset: inOffset,
					size: dwaHeader.dcCompressedSize
				};
				var dcBuffer = new Uint16Array(uncompressZIP(zlibInfo).buffer);
				inOffset.value += dwaHeader.dcCompressedSize;
			}
			if (dwaHeader.rleRawSize > 0) {
				var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.rleCompressedSize);
				var data = unzlibSync(compressed);
				var rleBuffer = decodeRunLength(data.buffer);
				inOffset.value += dwaHeader.rleCompressedSize;
			}
			var outBufferEnd = 0;
			var rowOffsets = new Array(channelData.length);
			for (var i = 0; i < rowOffsets.length; ++i) rowOffsets[i] = new Array();
			for (var y = 0; y < info.lines; ++y) for (var chan = 0; chan < channelData.length; ++chan) {
				rowOffsets[chan].push(outBufferEnd);
				outBufferEnd += channelData[chan].width * info.type * INT16_SIZE;
			}
			lossyDctDecode(cscSet, rowOffsets, channelData, acBuffer, dcBuffer, outBuffer);
			for (var i = 0; i < channelData.length; ++i) {
				var cd = channelData[i];
				if (cd.decoded) continue;
				switch (cd.compression) {
					case RLE:
						var row = 0;
						var rleOffset = 0;
						for (var y = 0; y < info.lines; ++y) {
							var rowOffsetBytes = rowOffsets[i][row];
							for (var x = 0; x < cd.width; ++x) {
								for (var byte = 0; byte < INT16_SIZE * cd.type; ++byte) outBuffer[rowOffsetBytes++] = rleBuffer[rleOffset + byte * cd.width * cd.height];
								rleOffset++;
							}
							row++;
						}
						break;
					case LOSSY_DCT:
					default: throw "EXRLoader.parse: unsupported channel compression";
				}
			}
			return new DataView(outBuffer.buffer);
		}
		function parseNullTerminatedString(buffer2, offset2) {
			var uintBuffer = new Uint8Array(buffer2);
			var endOffset = 0;
			while (uintBuffer[offset2.value + endOffset] != 0) endOffset += 1;
			var stringValue = new TextDecoder().decode(uintBuffer.slice(offset2.value, offset2.value + endOffset));
			offset2.value = offset2.value + endOffset + 1;
			return stringValue;
		}
		function parseFixedLengthString(buffer2, offset2, size) {
			var stringValue = new TextDecoder().decode(new Uint8Array(buffer2).slice(offset2.value, offset2.value + size));
			offset2.value = offset2.value + size;
			return stringValue;
		}
		function parseRational(dataView, offset2) {
			return [parseInt32(dataView, offset2), parseUint32(dataView, offset2)];
		}
		function parseTimecode(dataView, offset2) {
			return [parseUint32(dataView, offset2), parseUint32(dataView, offset2)];
		}
		function parseInt32(dataView, offset2) {
			var Int32 = dataView.getInt32(offset2.value, true);
			offset2.value = offset2.value + INT32_SIZE;
			return Int32;
		}
		function parseUint32(dataView, offset2) {
			var Uint32 = dataView.getUint32(offset2.value, true);
			offset2.value = offset2.value + INT32_SIZE;
			return Uint32;
		}
		function parseUint8Array(uInt8Array2, offset2) {
			var Uint8 = uInt8Array2[offset2.value];
			offset2.value = offset2.value + INT8_SIZE;
			return Uint8;
		}
		function parseUint8(dataView, offset2) {
			var Uint8 = dataView.getUint8(offset2.value);
			offset2.value = offset2.value + INT8_SIZE;
			return Uint8;
		}
		const parseInt64 = function(dataView, offset2) {
			let int;
			if ("getBigInt64" in DataView.prototype) int = Number(dataView.getBigInt64(offset2.value, true));
			else int = dataView.getUint32(offset2.value + 4, true) + Number(dataView.getUint32(offset2.value, true) << 32);
			offset2.value += ULONG_SIZE;
			return int;
		};
		function parseFloat32(dataView, offset2) {
			var float = dataView.getFloat32(offset2.value, true);
			offset2.value += FLOAT32_SIZE;
			return float;
		}
		function decodeFloat32(dataView, offset2) {
			return DataUtils.toHalfFloat(parseFloat32(dataView, offset2));
		}
		function decodeFloat16(binary) {
			var exponent = (binary & 31744) >> 10, fraction = binary & 1023;
			return (binary >> 15 ? -1 : 1) * (exponent ? exponent === 31 ? fraction ? NaN : Infinity : Math.pow(2, exponent - 15) * (1 + fraction / 1024) : 6103515625e-14 * (fraction / 1024));
		}
		function parseUint16(dataView, offset2) {
			var Uint16 = dataView.getUint16(offset2.value, true);
			offset2.value += INT16_SIZE;
			return Uint16;
		}
		function parseFloat16(buffer2, offset2) {
			return decodeFloat16(parseUint16(buffer2, offset2));
		}
		function parseChlist(dataView, buffer2, offset2, size) {
			var startOffset = offset2.value;
			var channels = [];
			while (offset2.value < startOffset + size - 1) {
				var name = parseNullTerminatedString(buffer2, offset2);
				var pixelType = parseInt32(dataView, offset2);
				var pLinear = parseUint8(dataView, offset2);
				offset2.value += 3;
				var xSampling = parseInt32(dataView, offset2);
				var ySampling = parseInt32(dataView, offset2);
				channels.push({
					name,
					pixelType,
					pLinear,
					xSampling,
					ySampling
				});
			}
			offset2.value += 1;
			return channels;
		}
		function parseChromaticities(dataView, offset2) {
			return {
				redX: parseFloat32(dataView, offset2),
				redY: parseFloat32(dataView, offset2),
				greenX: parseFloat32(dataView, offset2),
				greenY: parseFloat32(dataView, offset2),
				blueX: parseFloat32(dataView, offset2),
				blueY: parseFloat32(dataView, offset2),
				whiteX: parseFloat32(dataView, offset2),
				whiteY: parseFloat32(dataView, offset2)
			};
		}
		function parseCompression(dataView, offset2) {
			return [
				"NO_COMPRESSION",
				"RLE_COMPRESSION",
				"ZIPS_COMPRESSION",
				"ZIP_COMPRESSION",
				"PIZ_COMPRESSION",
				"PXR24_COMPRESSION",
				"B44_COMPRESSION",
				"B44A_COMPRESSION",
				"DWAA_COMPRESSION",
				"DWAB_COMPRESSION"
			][parseUint8(dataView, offset2)];
		}
		function parseBox2i(dataView, offset2) {
			return {
				xMin: parseUint32(dataView, offset2),
				yMin: parseUint32(dataView, offset2),
				xMax: parseUint32(dataView, offset2),
				yMax: parseUint32(dataView, offset2)
			};
		}
		function parseLineOrder(dataView, offset2) {
			return ["INCREASING_Y"][parseUint8(dataView, offset2)];
		}
		function parseV2f(dataView, offset2) {
			return [parseFloat32(dataView, offset2), parseFloat32(dataView, offset2)];
		}
		function parseV3f(dataView, offset2) {
			return [
				parseFloat32(dataView, offset2),
				parseFloat32(dataView, offset2),
				parseFloat32(dataView, offset2)
			];
		}
		function parseValue(dataView, buffer2, offset2, type, size) {
			if (type === "string" || type === "stringvector" || type === "iccProfile") return parseFixedLengthString(buffer2, offset2, size);
			else if (type === "chlist") return parseChlist(dataView, buffer2, offset2, size);
			else if (type === "chromaticities") return parseChromaticities(dataView, offset2);
			else if (type === "compression") return parseCompression(dataView, offset2);
			else if (type === "box2i") return parseBox2i(dataView, offset2);
			else if (type === "lineOrder") return parseLineOrder(dataView, offset2);
			else if (type === "float") return parseFloat32(dataView, offset2);
			else if (type === "v2f") return parseV2f(dataView, offset2);
			else if (type === "v3f") return parseV3f(dataView, offset2);
			else if (type === "int") return parseInt32(dataView, offset2);
			else if (type === "rational") return parseRational(dataView, offset2);
			else if (type === "timecode") return parseTimecode(dataView, offset2);
			else if (type === "preview") {
				offset2.value += size;
				return "skipped";
			} else {
				offset2.value += size;
				return;
			}
		}
		function parseHeader(dataView, buffer2, offset2) {
			const EXRHeader2 = {};
			if (dataView.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
			EXRHeader2.version = dataView.getUint8(4);
			const spec = dataView.getUint8(5);
			EXRHeader2.spec = {
				singleTile: !!(spec & 2),
				longName: !!(spec & 4),
				deepFormat: !!(spec & 8),
				multiPart: !!(spec & 16)
			};
			offset2.value = 8;
			var keepReading = true;
			while (keepReading) {
				var attributeName = parseNullTerminatedString(buffer2, offset2);
				if (attributeName == 0) keepReading = false;
				else {
					var attributeType = parseNullTerminatedString(buffer2, offset2);
					var attributeValue = parseValue(dataView, buffer2, offset2, attributeType, parseUint32(dataView, offset2));
					if (attributeValue === void 0) console.warn(`EXRLoader.parse: skipped unknown header attribute type '${attributeType}'.`);
					else EXRHeader2[attributeName] = attributeValue;
				}
			}
			if ((spec & -5) != 0) {
				console.error("EXRHeader:", EXRHeader2);
				throw "THREE.EXRLoader: provided file is currently unsupported.";
			}
			return EXRHeader2;
		}
		function setupDecoder(EXRHeader2, dataView, uInt8Array2, offset2, outputType) {
			const EXRDecoder2 = {
				size: 0,
				viewer: dataView,
				array: uInt8Array2,
				offset: offset2,
				width: EXRHeader2.dataWindow.xMax - EXRHeader2.dataWindow.xMin + 1,
				height: EXRHeader2.dataWindow.yMax - EXRHeader2.dataWindow.yMin + 1,
				channels: EXRHeader2.channels.length,
				bytesPerLine: null,
				lines: null,
				inputSize: null,
				type: EXRHeader2.channels[0].pixelType,
				uncompress: null,
				getter: null,
				format: null,
				[hasColorSpace ? "colorSpace" : "encoding"]: null
			};
			switch (EXRHeader2.compression) {
				case "NO_COMPRESSION":
					EXRDecoder2.lines = 1;
					EXRDecoder2.uncompress = uncompressRAW;
					break;
				case "RLE_COMPRESSION":
					EXRDecoder2.lines = 1;
					EXRDecoder2.uncompress = uncompressRLE;
					break;
				case "ZIPS_COMPRESSION":
					EXRDecoder2.lines = 1;
					EXRDecoder2.uncompress = uncompressZIP;
					break;
				case "ZIP_COMPRESSION":
					EXRDecoder2.lines = 16;
					EXRDecoder2.uncompress = uncompressZIP;
					break;
				case "PIZ_COMPRESSION":
					EXRDecoder2.lines = 32;
					EXRDecoder2.uncompress = uncompressPIZ;
					break;
				case "PXR24_COMPRESSION":
					EXRDecoder2.lines = 16;
					EXRDecoder2.uncompress = uncompressPXR;
					break;
				case "DWAA_COMPRESSION":
					EXRDecoder2.lines = 32;
					EXRDecoder2.uncompress = uncompressDWA;
					break;
				case "DWAB_COMPRESSION":
					EXRDecoder2.lines = 256;
					EXRDecoder2.uncompress = uncompressDWA;
					break;
				default: throw "EXRLoader.parse: " + EXRHeader2.compression + " is unsupported";
			}
			EXRDecoder2.scanlineBlockSize = EXRDecoder2.lines;
			if (EXRDecoder2.type == 1) switch (outputType) {
				case FloatType:
					EXRDecoder2.getter = parseFloat16;
					EXRDecoder2.inputSize = INT16_SIZE;
					break;
				case HalfFloatType:
					EXRDecoder2.getter = parseUint16;
					EXRDecoder2.inputSize = INT16_SIZE;
			}
			else if (EXRDecoder2.type == 2) switch (outputType) {
				case FloatType:
					EXRDecoder2.getter = parseFloat32;
					EXRDecoder2.inputSize = FLOAT32_SIZE;
					break;
				case HalfFloatType:
					EXRDecoder2.getter = decodeFloat32;
					EXRDecoder2.inputSize = FLOAT32_SIZE;
			}
			else throw "EXRLoader.parse: unsupported pixelType " + EXRDecoder2.type + " for " + EXRHeader2.compression + ".";
			EXRDecoder2.blockCount = (EXRHeader2.dataWindow.yMax + 1) / EXRDecoder2.scanlineBlockSize;
			for (var i = 0; i < EXRDecoder2.blockCount; i++) parseInt64(dataView, offset2);
			EXRDecoder2.outputChannels = EXRDecoder2.channels == 3 ? 4 : EXRDecoder2.channels;
			const size = EXRDecoder2.width * EXRDecoder2.height * EXRDecoder2.outputChannels;
			switch (outputType) {
				case FloatType:
					EXRDecoder2.byteArray = new Float32Array(size);
					if (EXRDecoder2.channels < EXRDecoder2.outputChannels) EXRDecoder2.byteArray.fill(1, 0, size);
					break;
				case HalfFloatType:
					EXRDecoder2.byteArray = new Uint16Array(size);
					if (EXRDecoder2.channels < EXRDecoder2.outputChannels) EXRDecoder2.byteArray.fill(15360, 0, size);
					break;
				default: console.error("THREE.EXRLoader: unsupported type: ", outputType);
			}
			EXRDecoder2.bytesPerLine = EXRDecoder2.width * EXRDecoder2.inputSize * EXRDecoder2.channels;
			if (EXRDecoder2.outputChannels == 4) EXRDecoder2.format = RGBAFormat;
			else EXRDecoder2.format = RedFormat;
			if (hasColorSpace) EXRDecoder2.colorSpace = "srgb-linear";
			else EXRDecoder2.encoding = 3e3;
			return EXRDecoder2;
		}
		const bufferDataView = new DataView(buffer);
		const uInt8Array = new Uint8Array(buffer);
		const offset = { value: 0 };
		const EXRHeader = parseHeader(bufferDataView, buffer, offset);
		const EXRDecoder = setupDecoder(EXRHeader, bufferDataView, uInt8Array, offset, this.type);
		const tmpOffset = { value: 0 };
		const channelOffsets = {
			R: 0,
			G: 1,
			B: 2,
			A: 3,
			Y: 0
		};
		for (let scanlineBlockIdx = 0; scanlineBlockIdx < EXRDecoder.height / EXRDecoder.scanlineBlockSize; scanlineBlockIdx++) {
			const line = parseUint32(bufferDataView, offset);
			EXRDecoder.size = parseUint32(bufferDataView, offset);
			EXRDecoder.lines = line + EXRDecoder.scanlineBlockSize > EXRDecoder.height ? EXRDecoder.height - line : EXRDecoder.scanlineBlockSize;
			const viewer = EXRDecoder.size < EXRDecoder.lines * EXRDecoder.bytesPerLine ? EXRDecoder.uncompress(EXRDecoder) : uncompressRAW(EXRDecoder);
			offset.value += EXRDecoder.size;
			for (let line_y = 0; line_y < EXRDecoder.scanlineBlockSize; line_y++) {
				const true_y = line_y + scanlineBlockIdx * EXRDecoder.scanlineBlockSize;
				if (true_y >= EXRDecoder.height) break;
				for (let channelID = 0; channelID < EXRDecoder.channels; channelID++) {
					const cOff = channelOffsets[EXRHeader.channels[channelID].name];
					for (let x = 0; x < EXRDecoder.width; x++) {
						tmpOffset.value = (line_y * (EXRDecoder.channels * EXRDecoder.width) + channelID * EXRDecoder.width + x) * EXRDecoder.inputSize;
						const outIndex = (EXRDecoder.height - 1 - true_y) * (EXRDecoder.width * EXRDecoder.outputChannels) + x * EXRDecoder.outputChannels + cOff;
						EXRDecoder.byteArray[outIndex] = EXRDecoder.getter(viewer, tmpOffset);
					}
				}
			}
		}
		return {
			header: EXRHeader,
			width: EXRDecoder.width,
			height: EXRDecoder.height,
			data: EXRDecoder.byteArray,
			format: EXRDecoder.format,
			[hasColorSpace ? "colorSpace" : "encoding"]: EXRDecoder[hasColorSpace ? "colorSpace" : "encoding"],
			type: this.type
		};
	}
	setDataType(value) {
		this.type = value;
		return this;
	}
	load(url, onLoad, onProgress, onError) {
		function onLoadCallback(texture, texData) {
			if (hasColorSpace) texture.colorSpace = texData.colorSpace;
			else texture.encoding = texData.encoding;
			texture.minFilter = LinearFilter;
			texture.magFilter = LinearFilter;
			texture.generateMipmaps = false;
			texture.flipY = false;
			if (onLoad) onLoad(texture, texData);
		}
		return super.load(url, onLoadCallback, onProgress, onError);
	}
};
//#endregion
//#region node_modules/three-stdlib/loaders/DRACOLoader.js
var _taskCache = /* @__PURE__ */ new WeakMap();
var DRACOLoader = class extends Loader {
	constructor(manager) {
		super(manager);
		this.decoderPath = "";
		this.decoderConfig = {};
		this.decoderBinary = null;
		this.decoderPending = null;
		this.workerLimit = 4;
		this.workerPool = [];
		this.workerNextTaskID = 1;
		this.workerSourceURL = "";
		this.defaultAttributeIDs = {
			position: "POSITION",
			normal: "NORMAL",
			color: "COLOR",
			uv: "TEX_COORD"
		};
		this.defaultAttributeTypes = {
			position: "Float32Array",
			normal: "Float32Array",
			color: "Float32Array",
			uv: "Float32Array"
		};
	}
	setDecoderPath(path) {
		this.decoderPath = path;
		return this;
	}
	setDecoderConfig(config) {
		this.decoderConfig = config;
		return this;
	}
	setWorkerLimit(workerLimit) {
		this.workerLimit = workerLimit;
		return this;
	}
	load(url, onLoad, onProgress, onError) {
		const loader = new FileLoader(this.manager);
		loader.setPath(this.path);
		loader.setResponseType("arraybuffer");
		loader.setRequestHeader(this.requestHeader);
		loader.setWithCredentials(this.withCredentials);
		loader.load(url, (buffer) => {
			const taskConfig = {
				attributeIDs: this.defaultAttributeIDs,
				attributeTypes: this.defaultAttributeTypes,
				useUniqueIDs: false
			};
			this.decodeGeometry(buffer, taskConfig).then(onLoad).catch(onError);
		}, onProgress, onError);
	}
	/** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
	decodeDracoFile(buffer, callback, attributeIDs, attributeTypes) {
		const taskConfig = {
			attributeIDs: attributeIDs || this.defaultAttributeIDs,
			attributeTypes: attributeTypes || this.defaultAttributeTypes,
			useUniqueIDs: !!attributeIDs
		};
		this.decodeGeometry(buffer, taskConfig).then(callback);
	}
	decodeGeometry(buffer, taskConfig) {
		for (const attribute in taskConfig.attributeTypes) {
			const type = taskConfig.attributeTypes[attribute];
			if (type.BYTES_PER_ELEMENT !== void 0) taskConfig.attributeTypes[attribute] = type.name;
		}
		const taskKey = JSON.stringify(taskConfig);
		if (_taskCache.has(buffer)) {
			const cachedTask = _taskCache.get(buffer);
			if (cachedTask.key === taskKey) return cachedTask.promise;
			else if (buffer.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
		}
		let worker;
		const taskID = this.workerNextTaskID++;
		const taskCost = buffer.byteLength;
		const geometryPending = this._getWorker(taskID, taskCost).then((_worker) => {
			worker = _worker;
			return new Promise((resolve, reject) => {
				worker._callbacks[taskID] = {
					resolve,
					reject
				};
				worker.postMessage({
					type: "decode",
					id: taskID,
					taskConfig,
					buffer
				}, [buffer]);
			});
		}).then((message) => this._createGeometry(message.geometry));
		geometryPending.catch(() => true).then(() => {
			if (worker && taskID) this._releaseTask(worker, taskID);
		});
		_taskCache.set(buffer, {
			key: taskKey,
			promise: geometryPending
		});
		return geometryPending;
	}
	_createGeometry(geometryData) {
		const geometry = new BufferGeometry();
		if (geometryData.index) geometry.setIndex(new BufferAttribute(geometryData.index.array, 1));
		for (let i = 0; i < geometryData.attributes.length; i++) {
			const attribute = geometryData.attributes[i];
			const name = attribute.name;
			const array = attribute.array;
			const itemSize = attribute.itemSize;
			geometry.setAttribute(name, new BufferAttribute(array, itemSize));
		}
		return geometry;
	}
	_loadLibrary(url, responseType) {
		const loader = new FileLoader(this.manager);
		loader.setPath(this.decoderPath);
		loader.setResponseType(responseType);
		loader.setWithCredentials(this.withCredentials);
		return new Promise((resolve, reject) => {
			loader.load(url, resolve, void 0, reject);
		});
	}
	preload() {
		this._initDecoder();
		return this;
	}
	_initDecoder() {
		if (this.decoderPending) return this.decoderPending;
		const useJS = typeof WebAssembly !== "object" || this.decoderConfig.type === "js";
		const librariesPending = [];
		if (useJS) librariesPending.push(this._loadLibrary("draco_decoder.js", "text"));
		else {
			librariesPending.push(this._loadLibrary("draco_wasm_wrapper.js", "text"));
			librariesPending.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"));
		}
		this.decoderPending = Promise.all(librariesPending).then((libraries) => {
			const jsContent = libraries[0];
			if (!useJS) this.decoderConfig.wasmBinary = libraries[1];
			const fn = DRACOWorker.toString();
			const body = [
				"/* draco decoder */",
				jsContent,
				"",
				"/* worker */",
				fn.substring(fn.indexOf("{") + 1, fn.lastIndexOf("}"))
			].join("\n");
			this.workerSourceURL = URL.createObjectURL(new Blob([body]));
		});
		return this.decoderPending;
	}
	_getWorker(taskID, taskCost) {
		return this._initDecoder().then(() => {
			if (this.workerPool.length < this.workerLimit) {
				const worker2 = new Worker(this.workerSourceURL);
				worker2._callbacks = {};
				worker2._taskCosts = {};
				worker2._taskLoad = 0;
				worker2.postMessage({
					type: "init",
					decoderConfig: this.decoderConfig
				});
				worker2.onmessage = function(e) {
					const message = e.data;
					switch (message.type) {
						case "decode":
							worker2._callbacks[message.id].resolve(message);
							break;
						case "error":
							worker2._callbacks[message.id].reject(message);
							break;
						default: console.error("THREE.DRACOLoader: Unexpected message, \"" + message.type + "\"");
					}
				};
				this.workerPool.push(worker2);
			} else this.workerPool.sort(function(a, b) {
				return a._taskLoad > b._taskLoad ? -1 : 1;
			});
			const worker = this.workerPool[this.workerPool.length - 1];
			worker._taskCosts[taskID] = taskCost;
			worker._taskLoad += taskCost;
			return worker;
		});
	}
	_releaseTask(worker, taskID) {
		worker._taskLoad -= worker._taskCosts[taskID];
		delete worker._callbacks[taskID];
		delete worker._taskCosts[taskID];
	}
	debug() {
		console.log("Task load: ", this.workerPool.map((worker) => worker._taskLoad));
	}
	dispose() {
		for (let i = 0; i < this.workerPool.length; ++i) this.workerPool[i].terminate();
		this.workerPool.length = 0;
		return this;
	}
};
function DRACOWorker() {
	let decoderConfig;
	let decoderPending;
	onmessage = function(e) {
		const message = e.data;
		switch (message.type) {
			case "init":
				decoderConfig = message.decoderConfig;
				decoderPending = new Promise(function(resolve) {
					decoderConfig.onModuleLoaded = function(draco) {
						resolve({ draco });
					};
					DracoDecoderModule(decoderConfig);
				});
				break;
			case "decode":
				const buffer = message.buffer;
				const taskConfig = message.taskConfig;
				decoderPending.then((module) => {
					const draco = module.draco;
					const decoder = new draco.Decoder();
					const decoderBuffer = new draco.DecoderBuffer();
					decoderBuffer.Init(new Int8Array(buffer), buffer.byteLength);
					try {
						const geometry = decodeGeometry(draco, decoder, decoderBuffer, taskConfig);
						const buffers = geometry.attributes.map((attr) => attr.array.buffer);
						if (geometry.index) buffers.push(geometry.index.array.buffer);
						self.postMessage({
							type: "decode",
							id: message.id,
							geometry
						}, buffers);
					} catch (error) {
						console.error(error);
						self.postMessage({
							type: "error",
							id: message.id,
							error: error.message
						});
					} finally {
						draco.destroy(decoderBuffer);
						draco.destroy(decoder);
					}
				});
		}
	};
	function decodeGeometry(draco, decoder, decoderBuffer, taskConfig) {
		const attributeIDs = taskConfig.attributeIDs;
		const attributeTypes = taskConfig.attributeTypes;
		let dracoGeometry;
		let decodingStatus;
		const geometryType = decoder.GetEncodedGeometryType(decoderBuffer);
		if (geometryType === draco.TRIANGULAR_MESH) {
			dracoGeometry = new draco.Mesh();
			decodingStatus = decoder.DecodeBufferToMesh(decoderBuffer, dracoGeometry);
		} else if (geometryType === draco.POINT_CLOUD) {
			dracoGeometry = new draco.PointCloud();
			decodingStatus = decoder.DecodeBufferToPointCloud(decoderBuffer, dracoGeometry);
		} else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
		if (!decodingStatus.ok() || dracoGeometry.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + decodingStatus.error_msg());
		const geometry = {
			index: null,
			attributes: []
		};
		for (const attributeName in attributeIDs) {
			const attributeType = self[attributeTypes[attributeName]];
			let attribute;
			let attributeID;
			if (taskConfig.useUniqueIDs) {
				attributeID = attributeIDs[attributeName];
				attribute = decoder.GetAttributeByUniqueId(dracoGeometry, attributeID);
			} else {
				attributeID = decoder.GetAttributeId(dracoGeometry, draco[attributeIDs[attributeName]]);
				if (attributeID === -1) continue;
				attribute = decoder.GetAttribute(dracoGeometry, attributeID);
			}
			geometry.attributes.push(decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute));
		}
		if (geometryType === draco.TRIANGULAR_MESH) geometry.index = decodeIndex(draco, decoder, dracoGeometry);
		draco.destroy(dracoGeometry);
		return geometry;
	}
	function decodeIndex(draco, decoder, dracoGeometry) {
		const numIndices = dracoGeometry.num_faces() * 3;
		const byteLength = numIndices * 4;
		const ptr = draco._malloc(byteLength);
		decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
		const index = new Uint32Array(draco.HEAPF32.buffer, ptr, numIndices).slice();
		draco._free(ptr);
		return {
			array: index,
			itemSize: 1
		};
	}
	function decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute) {
		const numComponents = attribute.num_components();
		const numValues = dracoGeometry.num_points() * numComponents;
		const byteLength = numValues * attributeType.BYTES_PER_ELEMENT;
		const dataType = getDracoDataType(draco, attributeType);
		const ptr = draco._malloc(byteLength);
		decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute, dataType, byteLength, ptr);
		const array = new attributeType(draco.HEAPF32.buffer, ptr, numValues).slice();
		draco._free(ptr);
		return {
			name: attributeName,
			array,
			itemSize: numComponents
		};
	}
	function getDracoDataType(draco, attributeType) {
		switch (attributeType) {
			case Float32Array: return draco.DT_FLOAT32;
			case Int8Array: return draco.DT_INT8;
			case Int16Array: return draco.DT_INT16;
			case Int32Array: return draco.DT_INT32;
			case Uint8Array: return draco.DT_UINT8;
			case Uint16Array: return draco.DT_UINT16;
			case Uint32Array: return draco.DT_UINT32;
		}
	}
}
//#endregion
//#region node_modules/three-stdlib/libs/MeshoptDecoder.js
var generated;
var MeshoptDecoder = () => {
	if (generated) return generated;
	const wasm_base = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB";
	const wasm_simd = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB";
	const detector = new Uint8Array([
		0,
		97,
		115,
		109,
		1,
		0,
		0,
		0,
		1,
		4,
		1,
		96,
		0,
		0,
		3,
		3,
		2,
		0,
		0,
		5,
		3,
		1,
		0,
		1,
		12,
		1,
		0,
		10,
		22,
		2,
		12,
		0,
		65,
		0,
		65,
		0,
		65,
		0,
		252,
		10,
		0,
		0,
		11,
		7,
		0,
		65,
		0,
		253,
		15,
		26,
		11
	]);
	const wasmpack = new Uint8Array([
		32,
		0,
		65,
		253,
		3,
		1,
		2,
		34,
		4,
		106,
		6,
		5,
		11,
		8,
		7,
		20,
		13,
		33,
		12,
		16,
		128,
		9,
		116,
		64,
		19,
		113,
		127,
		15,
		10,
		21,
		22,
		14,
		255,
		66,
		24,
		54,
		136,
		107,
		18,
		23,
		192,
		26,
		114,
		118,
		132,
		17,
		77,
		101,
		130,
		144,
		27,
		87,
		131,
		44,
		45,
		74,
		156,
		154,
		70,
		167
	]);
	if (typeof WebAssembly !== "object") return { supported: false };
	let wasm = wasm_base;
	if (WebAssembly.validate(detector)) wasm = wasm_simd;
	let instance;
	const promise = WebAssembly.instantiate(unpack(wasm), {}).then((result) => {
		instance = result.instance;
		instance.exports.__wasm_call_ctors();
	});
	function unpack(data) {
		const result = new Uint8Array(data.length);
		for (let i = 0; i < data.length; ++i) {
			const ch = data.charCodeAt(i);
			result[i] = ch > 96 ? ch - 71 : ch > 64 ? ch - 65 : ch > 47 ? ch + 4 : ch > 46 ? 63 : 62;
		}
		let write = 0;
		for (let i = 0; i < data.length; ++i) result[write++] = result[i] < 60 ? wasmpack[result[i]] : (result[i] - 60) * 64 + result[++i];
		return result.buffer.slice(0, write);
	}
	function decode(fun, target, count, size, source, filter) {
		const sbrk = instance.exports.sbrk;
		const count4 = count + 3 & -4;
		const tp = sbrk(count4 * size);
		const sp = sbrk(source.length);
		const heap = new Uint8Array(instance.exports.memory.buffer);
		heap.set(source, sp);
		const res = fun(tp, count, size, sp, source.length);
		if (res === 0 && filter) filter(tp, count4, size);
		target.set(heap.subarray(tp, tp + count * size));
		sbrk(tp - sbrk(0));
		if (res !== 0) throw new Error(`Malformed buffer data: ${res}`);
	}
	const filters = {
		0: "",
		1: "meshopt_decodeFilterOct",
		2: "meshopt_decodeFilterQuat",
		3: "meshopt_decodeFilterExp",
		NONE: "",
		OCTAHEDRAL: "meshopt_decodeFilterOct",
		QUATERNION: "meshopt_decodeFilterQuat",
		EXPONENTIAL: "meshopt_decodeFilterExp"
	};
	const decoders = {
		0: "meshopt_decodeVertexBuffer",
		1: "meshopt_decodeIndexBuffer",
		2: "meshopt_decodeIndexSequence",
		ATTRIBUTES: "meshopt_decodeVertexBuffer",
		TRIANGLES: "meshopt_decodeIndexBuffer",
		INDICES: "meshopt_decodeIndexSequence"
	};
	generated = {
		ready: promise,
		supported: true,
		decodeVertexBuffer(target, count, size, source, filter) {
			decode(instance.exports.meshopt_decodeVertexBuffer, target, count, size, source, instance.exports[filters[filter]]);
		},
		decodeIndexBuffer(target, count, size, source) {
			decode(instance.exports.meshopt_decodeIndexBuffer, target, count, size, source);
		},
		decodeIndexSequence(target, count, size, source) {
			decode(instance.exports.meshopt_decodeIndexSequence, target, count, size, source);
		},
		decodeGltfBuffer(target, count, size, source, mode, filter) {
			decode(instance.exports[decoders[mode]], target, count, size, source, instance.exports[filters[filter]]);
		}
	};
	return generated;
};
//#endregion
//#region node_modules/@react-three/drei/core/Gltf.js
var dracoLoader = null;
var decoderPath = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
function extensions(useDraco = true, useMeshopt = true, extendLoader) {
	return (loader) => {
		if (extendLoader) extendLoader(loader);
		if (useDraco) {
			if (!dracoLoader) dracoLoader = new DRACOLoader();
			dracoLoader.setDecoderPath(typeof useDraco === "string" ? useDraco : decoderPath);
			loader.setDRACOLoader(dracoLoader);
		}
		if (useMeshopt) loader.setMeshoptDecoder(typeof MeshoptDecoder === "function" ? MeshoptDecoder() : MeshoptDecoder);
	};
}
var useGLTF = (path, useDraco, useMeshopt, extendLoader) => useLoader(GLTFLoader, path, extensions(useDraco, useMeshopt, extendLoader));
useGLTF.preload = (path, useDraco, useMeshopt, extendLoader) => useLoader.preload(GLTFLoader, path, extensions(useDraco, useMeshopt, extendLoader));
useGLTF.clear = (path) => useLoader.clear(GLTFLoader, path);
useGLTF.setDecoderPath = (path) => {
	decoderPath = path;
};
//#endregion
//#region node_modules/@react-three/drei/core/OrbitControls.js
var OrbitControls = /* @__PURE__ */ import_react.forwardRef(({ makeDefault, camera, regress, domElement, enableDamping = true, keyEvents = false, onChange, onStart, onEnd, ...restProps }, ref) => {
	const invalidate = useThree((state) => state.invalidate);
	const defaultCamera = useThree((state) => state.camera);
	const gl = useThree((state) => state.gl);
	const events = useThree((state) => state.events);
	const setEvents = useThree((state) => state.setEvents);
	const set = useThree((state) => state.set);
	const get = useThree((state) => state.get);
	const performance = useThree((state) => state.performance);
	const explCamera = camera || defaultCamera;
	const explDomElement = domElement || events.connected || gl.domElement;
	const controls = import_react.useMemo(() => new OrbitControls$1(explCamera), [explCamera]);
	useFrame(() => {
		if (controls.enabled) controls.update();
	}, -1);
	import_react.useEffect(() => {
		if (keyEvents) controls.connect(keyEvents === true ? explDomElement : keyEvents);
		controls.connect(explDomElement);
		return () => void controls.dispose();
	}, [
		keyEvents,
		explDomElement,
		regress,
		controls,
		invalidate
	]);
	import_react.useEffect(() => {
		const callback = (e) => {
			invalidate();
			if (regress) performance.regress();
			if (onChange) onChange(e);
		};
		const onStartCb = (e) => {
			if (onStart) onStart(e);
		};
		const onEndCb = (e) => {
			if (onEnd) onEnd(e);
		};
		controls.addEventListener("change", callback);
		controls.addEventListener("start", onStartCb);
		controls.addEventListener("end", onEndCb);
		return () => {
			controls.removeEventListener("start", onStartCb);
			controls.removeEventListener("end", onEndCb);
			controls.removeEventListener("change", callback);
		};
	}, [
		onChange,
		onStart,
		onEnd,
		controls,
		invalidate,
		setEvents
	]);
	import_react.useEffect(() => {
		if (makeDefault) {
			const old = get().controls;
			set({ controls });
			return () => set({ controls: old });
		}
	}, [makeDefault, controls]);
	return /*#__PURE__*/ import_react.createElement("primitive", _extends({
		ref,
		object: controls,
		enableDamping
	}, restProps));
});
//#endregion
//#region node_modules/@react-three/drei/core/useAnimations.js
function useAnimations(clips, root) {
	const ref = import_react.useRef(null);
	const [actualRef] = import_react.useState(() => root ? root instanceof Object3D ? { current: root } : root : ref);
	const [mixer] = import_react.useState(() => new AnimationMixer(void 0));
	import_react.useLayoutEffect(() => {
		if (root) actualRef.current = root instanceof Object3D ? root : root.current;
		mixer._root = actualRef.current;
	});
	const lazyActions = import_react.useRef({});
	const api = import_react.useMemo(() => {
		const actions = {};
		clips.forEach((clip) => Object.defineProperty(actions, clip.name, {
			enumerable: true,
			get() {
				if (actualRef.current) return lazyActions.current[clip.name] || (lazyActions.current[clip.name] = mixer.clipAction(clip, actualRef.current));
			},
			configurable: true
		}));
		return {
			ref: actualRef,
			clips,
			actions,
			names: clips.map((c) => c.name),
			mixer
		};
	}, [clips]);
	useFrame((state, delta) => mixer.update(delta));
	import_react.useEffect(() => {
		const currentRoot = actualRef.current;
		return () => {
			lazyActions.current = {};
			mixer.stopAllAction();
			Object.values(api.actions).forEach((action) => {
				if (currentRoot) mixer.uncacheAction(action, currentRoot);
			});
		};
	}, [clips]);
	return api;
}
//#endregion
//#region node_modules/@react-three/drei/helpers/environment-assets.js
var presetsObj = {
	apartment: "lebombo_1k.hdr",
	city: "potsdamer_platz_1k.hdr",
	dawn: "kiara_1_dawn_1k.hdr",
	forest: "forest_slope_1k.hdr",
	lobby: "st_fagans_interior_1k.hdr",
	night: "dikhololo_night_1k.hdr",
	park: "rooitou_park_1k.hdr",
	studio: "studio_small_03_1k.hdr",
	sunset: "venice_sunset_1k.hdr",
	warehouse: "empty_warehouse_01_1k.hdr"
};
//#endregion
//#region node_modules/@react-three/drei/core/useEnvironment.js
var CUBEMAP_ROOT = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/";
var isArray = (arr) => Array.isArray(arr);
var defaultFiles = [
	"/px.png",
	"/nx.png",
	"/py.png",
	"/ny.png",
	"/pz.png",
	"/nz.png"
];
function useEnvironment({ files = defaultFiles, path = "", preset = void 0, colorSpace = void 0, extensions } = {}) {
	if (preset) {
		validatePreset(preset);
		files = presetsObj[preset];
		path = CUBEMAP_ROOT;
	}
	const multiFile = isArray(files);
	const { extension, isCubemap } = getExtension(files);
	const loader = getLoader(extension);
	if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
	const gl = useThree((state) => state.gl);
	(0, import_react.useLayoutEffect)(() => {
		if (extension !== "webp" && extension !== "jpg" && extension !== "jpeg") return;
		function clearGainmapTexture() {
			useLoader.clear(loader, multiFile ? [files] : files);
		}
		gl.domElement.addEventListener("webglcontextlost", clearGainmapTexture, { once: true });
	}, [files, gl.domElement]);
	const loaderResult = useLoader(loader, multiFile ? [files] : files, (loader) => {
		if (extension === "webp" || extension === "jpg" || extension === "jpeg") loader.setRenderer(gl);
		loader.setPath == null || loader.setPath(path);
		if (extensions) extensions(loader);
	});
	let texture = multiFile ? loaderResult[0] : loaderResult;
	if (extension === "jpg" || extension === "jpeg" || extension === "webp") {
		var _renderTarget;
		texture = (_renderTarget = texture.renderTarget) == null ? void 0 : _renderTarget.texture;
	}
	texture.mapping = isCubemap ? 301 : 303;
	texture.colorSpace = colorSpace !== null && colorSpace !== void 0 ? colorSpace : isCubemap ? "srgb" : "srgb-linear";
	return texture;
}
var preloadDefaultOptions = {
	files: defaultFiles,
	path: "",
	preset: void 0,
	extensions: void 0
};
useEnvironment.preload = (preloadOptions) => {
	const options = {
		...preloadDefaultOptions,
		...preloadOptions
	};
	let { files, path = "" } = options;
	const { preset, extensions } = options;
	if (preset) {
		validatePreset(preset);
		files = presetsObj[preset];
		path = CUBEMAP_ROOT;
	}
	const { extension } = getExtension(files);
	if (extension === "webp" || extension === "jpg" || extension === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
	const loader = getLoader(extension);
	if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
	useLoader.preload(loader, isArray(files) ? [files] : files, (loader) => {
		loader.setPath == null || loader.setPath(path);
		if (extensions) extensions(loader);
	});
};
var clearDefaultOptins = {
	files: defaultFiles,
	preset: void 0
};
useEnvironment.clear = (clearOptions) => {
	const options = {
		...clearDefaultOptins,
		...clearOptions
	};
	let { files } = options;
	const { preset } = options;
	if (preset) {
		validatePreset(preset);
		files = presetsObj[preset];
	}
	const { extension } = getExtension(files);
	const loader = getLoader(extension);
	if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
	useLoader.clear(loader, isArray(files) ? [files] : files);
};
function validatePreset(preset) {
	if (!(preset in presetsObj)) throw new Error("Preset must be one of: " + Object.keys(presetsObj).join(", "));
}
function getExtension(files) {
	var _firstEntry$split$pop;
	const isCubemap = isArray(files) && files.length === 6;
	const isGainmap = isArray(files) && files.length === 3 && files.some((file) => file.endsWith("json"));
	const firstEntry = isArray(files) ? files[0] : files;
	return {
		extension: isCubemap ? "cube" : isGainmap ? "webp" : firstEntry.startsWith("data:application/exr") ? "exr" : firstEntry.startsWith("data:application/hdr") ? "hdr" : firstEntry.startsWith("data:image/jpeg") ? "jpg" : (_firstEntry$split$pop = firstEntry.split(".").pop()) == null || (_firstEntry$split$pop = _firstEntry$split$pop.split("?")) == null || (_firstEntry$split$pop = _firstEntry$split$pop.shift()) == null ? void 0 : _firstEntry$split$pop.toLowerCase(),
		isCubemap,
		isGainmap
	};
}
function getLoader(extension) {
	return extension === "cube" ? CubeTextureLoader : extension === "hdr" ? RGBELoader : extension === "exr" ? EXRLoader : extension === "jpg" || extension === "jpeg" ? HDRJPGLoader : extension === "webp" ? GainMapLoader : null;
}
//#endregion
//#region node_modules/@react-three/drei/core/Environment.js
var isRef = (obj) => obj.current && obj.current.isScene;
var resolveScene = (scene) => isRef(scene) ? scene.current : scene;
function setEnvProps(background, scene, defaultScene, texture, sceneProps = {}) {
	var _target$backgroundRot, _target$backgroundRot2, _target$environmentRo, _target$environmentRo2;
	sceneProps = {
		backgroundBlurriness: 0,
		backgroundIntensity: 1,
		backgroundRotation: [
			0,
			0,
			0
		],
		environmentIntensity: 1,
		environmentRotation: [
			0,
			0,
			0
		],
		...sceneProps
	};
	const target = resolveScene(scene || defaultScene);
	const oldbg = target.background;
	const oldenv = target.environment;
	const oldSceneProps = {
		backgroundBlurriness: target.backgroundBlurriness,
		backgroundIntensity: target.backgroundIntensity,
		backgroundRotation: (_target$backgroundRot = (_target$backgroundRot2 = target.backgroundRotation) == null || _target$backgroundRot2.clone == null ? void 0 : _target$backgroundRot2.clone()) !== null && _target$backgroundRot !== void 0 ? _target$backgroundRot : [
			0,
			0,
			0
		],
		environmentIntensity: target.environmentIntensity,
		environmentRotation: (_target$environmentRo = (_target$environmentRo2 = target.environmentRotation) == null || _target$environmentRo2.clone == null ? void 0 : _target$environmentRo2.clone()) !== null && _target$environmentRo !== void 0 ? _target$environmentRo : [
			0,
			0,
			0
		]
	};
	if (background !== "only") target.environment = texture;
	if (background) target.background = texture;
	applyProps(target, sceneProps);
	return () => {
		if (background !== "only") target.environment = oldenv;
		if (background) target.background = oldbg;
		applyProps(target, oldSceneProps);
	};
}
function EnvironmentMap({ scene, background = false, map, ...config }) {
	const defaultScene = useThree((state) => state.scene);
	import_react.useLayoutEffect(() => {
		if (map) return setEnvProps(background, scene, defaultScene, map, config);
	});
	return null;
}
function EnvironmentCube({ background = false, scene, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, ...rest }) {
	const texture = useEnvironment(rest);
	const defaultScene = useThree((state) => state.scene);
	import_react.useLayoutEffect(() => {
		return setEnvProps(background, scene, defaultScene, texture, {
			backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
			backgroundIntensity,
			backgroundRotation,
			environmentIntensity,
			environmentRotation
		});
	});
	import_react.useEffect(() => {
		return () => {
			texture.dispose();
		};
	}, [texture]);
	return null;
}
function EnvironmentPortal({ children, near = .1, far = 1e3, resolution = 256, frames = 1, map, background = false, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, scene, files, path, preset = void 0, extensions }) {
	const gl = useThree((state) => state.gl);
	const defaultScene = useThree((state) => state.scene);
	const camera = import_react.useRef(null);
	const [virtualScene] = import_react.useState(() => new Scene());
	const fbo = import_react.useMemo(() => {
		const fbo = new WebGLCubeRenderTarget(resolution);
		fbo.texture.type = HalfFloatType;
		return fbo;
	}, [resolution]);
	import_react.useEffect(() => {
		return () => {
			fbo.dispose();
		};
	}, [fbo]);
	import_react.useLayoutEffect(() => {
		if (frames === 1) {
			const autoClear = gl.autoClear;
			gl.autoClear = true;
			camera.current.update(gl, virtualScene);
			gl.autoClear = autoClear;
		}
		return setEnvProps(background, scene, defaultScene, fbo.texture, {
			backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
			backgroundIntensity,
			backgroundRotation,
			environmentIntensity,
			environmentRotation
		});
	}, [
		children,
		virtualScene,
		fbo.texture,
		scene,
		defaultScene,
		background,
		frames,
		gl
	]);
	let count = 1;
	useFrame(() => {
		if (frames === Infinity || count < frames) {
			const autoClear = gl.autoClear;
			gl.autoClear = true;
			camera.current.update(gl, virtualScene);
			gl.autoClear = autoClear;
			count++;
		}
	});
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, createPortal(/*#__PURE__*/ import_react.createElement(import_react.Fragment, null, children, /*#__PURE__*/ import_react.createElement("cubeCamera", {
		ref: camera,
		args: [
			near,
			far,
			fbo
		]
	}), files || preset ? /*#__PURE__*/ import_react.createElement(EnvironmentCube, {
		background: true,
		files,
		preset,
		path,
		extensions
	}) : map ? /*#__PURE__*/ import_react.createElement(EnvironmentMap, {
		background: true,
		map,
		extensions
	}) : null), virtualScene));
}
function EnvironmentGround(props) {
	var _props$ground, _props$ground2, _scale, _props$ground3;
	const textureDefault = useEnvironment(props);
	const texture = props.map || textureDefault;
	import_react.useMemo(() => extend({ GroundProjectedEnvImpl: GroundProjectedEnv }), []);
	import_react.useEffect(() => {
		return () => {
			textureDefault.dispose();
		};
	}, [textureDefault]);
	const args = import_react.useMemo(() => [texture], [texture]);
	const height = (_props$ground = props.ground) == null ? void 0 : _props$ground.height;
	const radius = (_props$ground2 = props.ground) == null ? void 0 : _props$ground2.radius;
	const scale = (_scale = (_props$ground3 = props.ground) == null ? void 0 : _props$ground3.scale) !== null && _scale !== void 0 ? _scale : 1e3;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement(EnvironmentMap, _extends({}, props, { map: texture })), /*#__PURE__*/ import_react.createElement("groundProjectedEnvImpl", {
		args,
		scale,
		height,
		radius
	}));
}
function Environment(props) {
	return props.ground ? /*#__PURE__*/ import_react.createElement(EnvironmentGround, props) : props.map ? /*#__PURE__*/ import_react.createElement(EnvironmentMap, props) : props.children ? /*#__PURE__*/ import_react.createElement(EnvironmentPortal, props) : /*#__PURE__*/ import_react.createElement(EnvironmentCube, props);
}
//#endregion
//#region node_modules/@react-three/drei/core/ContactShadows.js
var ContactShadows = /* @__PURE__ */ import_react.forwardRef(({ scale = 10, frames = Infinity, opacity = 1, width = 1, height = 1, blur = 1, near = 0, far = 10, resolution = 512, smooth = true, color = "#000000", depthWrite = false, renderOrder, ...props }, fref) => {
	const ref = import_react.useRef(null);
	const scene = useThree((state) => state.scene);
	const gl = useThree((state) => state.gl);
	const shadowCamera = import_react.useRef(null);
	width = width * (Array.isArray(scale) ? scale[0] : scale || 1);
	height = height * (Array.isArray(scale) ? scale[1] : scale || 1);
	const [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur] = import_react.useMemo(() => {
		const renderTarget = new WebGLRenderTarget(resolution, resolution);
		const renderTargetBlur = new WebGLRenderTarget(resolution, resolution);
		renderTargetBlur.texture.generateMipmaps = renderTarget.texture.generateMipmaps = false;
		const planeGeometry = new PlaneGeometry(width, height).rotateX(Math.PI / 2);
		const blurPlane = new Mesh(planeGeometry);
		const depthMaterial = new MeshDepthMaterial();
		depthMaterial.depthTest = depthMaterial.depthWrite = false;
		depthMaterial.onBeforeCompile = (shader) => {
			shader.uniforms = {
				...shader.uniforms,
				ucolor: { value: new Color(color) }
			};
			shader.fragmentShader = shader.fragmentShader.replace(`void main() {`, `uniform vec3 ucolor;
           void main() {
          `);
			shader.fragmentShader = shader.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );", "vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );");
		};
		const horizontalBlurMaterial = new ShaderMaterial(HorizontalBlurShader);
		const verticalBlurMaterial = new ShaderMaterial(VerticalBlurShader);
		verticalBlurMaterial.depthTest = horizontalBlurMaterial.depthTest = false;
		return [
			renderTarget,
			planeGeometry,
			depthMaterial,
			blurPlane,
			horizontalBlurMaterial,
			verticalBlurMaterial,
			renderTargetBlur
		];
	}, [
		resolution,
		width,
		height,
		scale,
		color
	]);
	const blurShadows = (blur) => {
		blurPlane.visible = true;
		blurPlane.material = horizontalBlurMaterial;
		horizontalBlurMaterial.uniforms.tDiffuse.value = renderTarget.texture;
		horizontalBlurMaterial.uniforms.h.value = blur * 1 / 256;
		gl.setRenderTarget(renderTargetBlur);
		gl.render(blurPlane, shadowCamera.current);
		blurPlane.material = verticalBlurMaterial;
		verticalBlurMaterial.uniforms.tDiffuse.value = renderTargetBlur.texture;
		verticalBlurMaterial.uniforms.v.value = blur * 1 / 256;
		gl.setRenderTarget(renderTarget);
		gl.render(blurPlane, shadowCamera.current);
		blurPlane.visible = false;
	};
	let count = 0;
	let initialBackground;
	let initialOverrideMaterial;
	useFrame(() => {
		if (shadowCamera.current && (frames === Infinity || count < frames)) {
			count++;
			initialBackground = scene.background;
			initialOverrideMaterial = scene.overrideMaterial;
			ref.current.visible = false;
			scene.background = null;
			scene.overrideMaterial = depthMaterial;
			gl.setRenderTarget(renderTarget);
			gl.render(scene, shadowCamera.current);
			blurShadows(blur);
			if (smooth) blurShadows(blur * .4);
			gl.setRenderTarget(null);
			ref.current.visible = true;
			scene.overrideMaterial = initialOverrideMaterial;
			scene.background = initialBackground;
		}
	});
	import_react.useImperativeHandle(fref, () => ref.current, []);
	return /*#__PURE__*/ import_react.createElement("group", _extends({ "rotation-x": Math.PI / 2 }, props, { ref }), /*#__PURE__*/ import_react.createElement("mesh", {
		renderOrder,
		geometry: planeGeometry,
		scale: [
			1,
			-1,
			1
		],
		rotation: [
			-Math.PI / 2,
			0,
			0
		]
	}, /*#__PURE__*/ import_react.createElement("meshBasicMaterial", {
		transparent: true,
		map: renderTarget.texture,
		opacity,
		depthWrite
	})), /*#__PURE__*/ import_react.createElement("orthographicCamera", {
		ref: shadowCamera,
		args: [
			-width / 2,
			width / 2,
			height / 2,
			-height / 2,
			near,
			far
		]
	}));
});
//#endregion
export { useGLTF as a, require_with_selector as c, OrbitControls as i, require_jsx_runtime as l, Environment as n, Canvas as o, useAnimations as r, useFrame as s, ContactShadows as t };
