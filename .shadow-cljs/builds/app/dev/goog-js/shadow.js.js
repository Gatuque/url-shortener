["^ ","~:resource-id",["~:shadow.build.classpath/resource","shadow/js.js"],"~:js","goog.provide(\"shadow.js\");\nshadow.js.files = {};\nshadow.js.nativeRequires = {};\nshadow.js.NODE_ENV = goog.define(\"shadow.js.NODE_ENV\", \"development\");\nshadow.js.requireStack = [];\nshadow.js.add_native_require = function(name, obj) {\n  shadow.js.nativeRequires[name] = obj;\n};\nshadow.js.exportCopy = function(module, other) {\n  let copy = {};\n  let exports = module[\"exports\"];\n  for (let key in other) {\n    if (key == \"default\" || key in exports || key in copy) {\n      continue;\n    }\n    copy[key] = {enumerable:true, get:function() {\n      return other[key];\n    }};\n  }\n  Object.defineProperties(exports, copy);\n};\nshadow.js.jsRequire = function(name, opts) {\n  var nativeObj = shadow.js.nativeRequires[name];\n  if (nativeObj !== undefined) {\n    return nativeObj;\n  }\n  try {\n    if (goog.DEBUG) {\n      if (name instanceof String && name.indexOf(\"/\") != -1) {\n        console.warn(\"Tried to dynamically require '\" + name + \"' from '\" + shadow.js.requireStack[shadow.js.requireStack.length - 1] + \"'. This is not supported and may cause issues.\");\n      }\n    }\n    shadow.js.requireStack.push(name);\n    var module = shadow.js.files[name];\n    var moduleFn = shadow$provide[name];\n    if (module === undefined) {\n      if (moduleFn === undefined) {\n        throw \"Module not provided: \" + name;\n      }\n      module = {};\n      module[\"exports\"] = {};\n      shadow.js.files[name] = module;\n    }\n    if (moduleFn) {\n      delete shadow$provide[name];\n      try {\n        moduleFn.call(module, goog.global, shadow.js.jsRequire, module, module[\"exports\"]);\n      } catch (e) {\n        console.warn(\"shadow-cljs - failed to load\", name);\n        throw e;\n      }\n      if (opts) {\n        var globals = opts[\"globals\"];\n        if (globals) {\n          for (var i = 0; i < globals.length; i++) {\n            window[globals[i]] = module[\"exports\"];\n          }\n        }\n      }\n    }\n  } finally {\n    shadow.js.requireStack.pop();\n  }\n  return module[\"exports\"];\n};\nshadow.js.jsRequire[\"cache\"] = {};\nshadow.js.jsRequire[\"resolve\"] = function(name) {\n  return name;\n};\nshadow.js.jsRequire[\"exportCopy\"] = shadow.js.exportCopy;\nshadow.js.jsRequire[\"esmDefault\"] = function(mod) {\n  return mod && mod[\"__esModule\"] ? mod : {\"default\":mod};\n};\nshadow.js.modules = {};\nshadow.js.require = function(name, opts) {\n  return shadow.js.jsRequire(name, opts);\n};\n","~:source","goog.provide(\"shadow.js\");\n\n/**\n * @dict\n */\nshadow.js.files = {};\n\n/**\n * @dict\n */\nshadow.js.nativeRequires = {};\n\n/**\n * @define {string}\n * all occurences should be removed by NodeEnvInline but for safety we keep it arround\n */\nshadow.js.NODE_ENV = goog.define(\"shadow.js.NODE_ENV\", \"development\");\n\nshadow.js.requireStack = [];\n\nshadow.js.add_native_require = function(name, obj) {\n  shadow.js.nativeRequires[name] = obj;\n};\n\nshadow.js.exportCopy = function(module, other) {\n  let copy = {};\n  let exports = module[\"exports\"];\n\n  for (let key in other) {\n    // don't copy default export, don't overwrite existing\n    if (key == 'default' || key in exports || key in copy) {\n      continue;\n    }\n\n    copy[key] = {\n      enumerable: true,\n      get: function() { return other[key]; }\n    };\n  }\n\n  Object.defineProperties(exports, copy);\n}\n\n/**\n * @return {ShadowJS}\n */\nshadow.js.jsRequire = function(name, opts) {\n  var nativeObj = shadow.js.nativeRequires[name];\n  if (nativeObj !== undefined) {\n    return nativeObj;\n  }\n\n  try {\n    if (goog.DEBUG) {\n      if (name instanceof String && name.indexOf(\"/\") != -1) {\n        console.warn(\n          \"Tried to dynamically require '\" +\n            name +\n            \"' from '\" +\n            shadow.js.requireStack[shadow.js.requireStack.length - 1] +\n            \"'. This is not supported and may cause issues.\"\n        );\n      }\n    }\n\n    shadow.js.requireStack.push(name);\n\n    var module = shadow.js.files[name];\n    var moduleFn = shadow$provide[name];\n\n    // module must be created before calling moduleFn due to circular deps\n    if (module === undefined) {\n      if (moduleFn === undefined) {\n        throw (\"Module not provided: \" + name);\n      }\n      module = {};\n      module[\"exports\"] = {};\n      shadow.js.files[name] = module;\n    }\n\n    if (moduleFn) {\n      delete shadow$provide[name];\n\n      try {\n        moduleFn.call(\n          module,\n          goog.global,\n          shadow.js.jsRequire,\n          module,\n          module[\"exports\"]\n        );\n      } catch (e) {\n        console.warn(\"shadow-cljs - failed to load\", name);\n        throw e;\n      }\n\n      if (opts) {\n        var globals = opts[\"globals\"];\n        if (globals) {\n          for (var i = 0; i < globals.length; i++) {\n            window[globals[i]] = module[\"exports\"];\n          }\n        }\n      }\n    }\n  } finally {\n    shadow.js.requireStack.pop();\n  }\n\n  return module[\"exports\"];\n};\n\n// work around issues where libraries try to manipulate require at runtime\n//   codemirror/addon/runmode/runmode.node.js\n// will attempt to replace all\n//   codemirror/lib/codemirror.js\n// requires with itself. in webpack this actually reconfigures require at runtime\n// but does not prevent webpack from including the original codemirror.js in the bundle\n// output. just nothing ever accesses assuming runmode.node.js is loaded first\n// in shadow-cljs this is handled via :package-overrides in the build config\n// which actually prevents including the unwanted file and properly redirects\n// making the runtime calls do nothing instead\nshadow.js.jsRequire[\"cache\"] = {};\nshadow.js.jsRequire[\"resolve\"] = function(name) { return name };\n\n// esm compatibility related things\n// this is called for export * from \"whatever\", so copying all exports from one module to another\nshadow.js.jsRequire[\"exportCopy\"] = shadow.js.exportCopy;\n// this is used for esm-cjs compatibility where cjs is supposed to be accessible as the default export in esm\nshadow.js.jsRequire[\"esmDefault\"] = function(mod) {\n  return (mod && mod[\"__esModule\"]) ? mod : {\"default\": mod};\n};\n\n/**\n * @dict\n */\nshadow.js.modules = {};\n\nshadow.js.require = function(name, opts) {\n  return shadow.js.jsRequire(name, opts);\n  /*\n  var mod = shadow.js.modules[name];\n\n  if (typeof(mod) == 'undefined') {\n    var exports = shadow.js.jsRequire(name, opts);\n\n    if (exports && exports[\"__esModule\"]) {\n        mod = exports;\n    } else {\n        mod = {\"default\":exports};\n    }\n\n    shadow.js.modules[name] = mod;\n  }\n\n  return mod;\n  */\n};\n","~:compiled-at",1695158248654,"~:source-map-json","{\n\"version\":3,\n\"file\":\"shadow.js.js\",\n\"lineCount\":78,\n\"mappings\":\"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\",\n\"sources\":[\"shadow/js.js\"],\n\"sourcesContent\":[\"goog.provide(\\\"shadow.js\\\");\\n\\n/**\\n * @dict\\n */\\nshadow.js.files = {};\\n\\n/**\\n * @dict\\n */\\nshadow.js.nativeRequires = {};\\n\\n/**\\n * @define {string}\\n * all occurences should be removed by NodeEnvInline but for safety we keep it arround\\n */\\nshadow.js.NODE_ENV = goog.define(\\\"shadow.js.NODE_ENV\\\", \\\"development\\\");\\n\\nshadow.js.requireStack = [];\\n\\nshadow.js.add_native_require = function(name, obj) {\\n  shadow.js.nativeRequires[name] = obj;\\n};\\n\\nshadow.js.exportCopy = function(module, other) {\\n  let copy = {};\\n  let exports = module[\\\"exports\\\"];\\n\\n  for (let key in other) {\\n    // don't copy default export, don't overwrite existing\\n    if (key == 'default' || key in exports || key in copy) {\\n      continue;\\n    }\\n\\n    copy[key] = {\\n      enumerable: true,\\n      get: function() { return other[key]; }\\n    };\\n  }\\n\\n  Object.defineProperties(exports, copy);\\n}\\n\\n/**\\n * @return {ShadowJS}\\n */\\nshadow.js.jsRequire = function(name, opts) {\\n  var nativeObj = shadow.js.nativeRequires[name];\\n  if (nativeObj !== undefined) {\\n    return nativeObj;\\n  }\\n\\n  try {\\n    if (goog.DEBUG) {\\n      if (name instanceof String && name.indexOf(\\\"/\\\") != -1) {\\n        console.warn(\\n          \\\"Tried to dynamically require '\\\" +\\n            name +\\n            \\\"' from '\\\" +\\n            shadow.js.requireStack[shadow.js.requireStack.length - 1] +\\n            \\\"'. This is not supported and may cause issues.\\\"\\n        );\\n      }\\n    }\\n\\n    shadow.js.requireStack.push(name);\\n\\n    var module = shadow.js.files[name];\\n    var moduleFn = shadow$provide[name];\\n\\n    // module must be created before calling moduleFn due to circular deps\\n    if (module === undefined) {\\n      if (moduleFn === undefined) {\\n        throw (\\\"Module not provided: \\\" + name);\\n      }\\n      module = {};\\n      module[\\\"exports\\\"] = {};\\n      shadow.js.files[name] = module;\\n    }\\n\\n    if (moduleFn) {\\n      delete shadow$provide[name];\\n\\n      try {\\n        moduleFn.call(\\n          module,\\n          goog.global,\\n          shadow.js.jsRequire,\\n          module,\\n          module[\\\"exports\\\"]\\n        );\\n      } catch (e) {\\n        console.warn(\\\"shadow-cljs - failed to load\\\", name);\\n        throw e;\\n      }\\n\\n      if (opts) {\\n        var globals = opts[\\\"globals\\\"];\\n        if (globals) {\\n          for (var i = 0; i < globals.length; i++) {\\n            window[globals[i]] = module[\\\"exports\\\"];\\n          }\\n        }\\n      }\\n    }\\n  } finally {\\n    shadow.js.requireStack.pop();\\n  }\\n\\n  return module[\\\"exports\\\"];\\n};\\n\\n// work around issues where libraries try to manipulate require at runtime\\n//   codemirror/addon/runmode/runmode.node.js\\n// will attempt to replace all\\n//   codemirror/lib/codemirror.js\\n// requires with itself. in webpack this actually reconfigures require at runtime\\n// but does not prevent webpack from including the original codemirror.js in the bundle\\n// output. just nothing ever accesses assuming runmode.node.js is loaded first\\n// in shadow-cljs this is handled via :package-overrides in the build config\\n// which actually prevents including the unwanted file and properly redirects\\n// making the runtime calls do nothing instead\\nshadow.js.jsRequire[\\\"cache\\\"] = {};\\nshadow.js.jsRequire[\\\"resolve\\\"] = function(name) { return name };\\n\\n// esm compatibility related things\\n// this is called for export * from \\\"whatever\\\", so copying all exports from one module to another\\nshadow.js.jsRequire[\\\"exportCopy\\\"] = shadow.js.exportCopy;\\n// this is used for esm-cjs compatibility where cjs is supposed to be accessible as the default export in esm\\nshadow.js.jsRequire[\\\"esmDefault\\\"] = function(mod) {\\n  return (mod && mod[\\\"__esModule\\\"]) ? mod : {\\\"default\\\": mod};\\n};\\n\\n/**\\n * @dict\\n */\\nshadow.js.modules = {};\\n\\nshadow.js.require = function(name, opts) {\\n  return shadow.js.jsRequire(name, opts);\\n  /*\\n  var mod = shadow.js.modules[name];\\n\\n  if (typeof(mod) == 'undefined') {\\n    var exports = shadow.js.jsRequire(name, opts);\\n\\n    if (exports && exports[\\\"__esModule\\\"]) {\\n        mod = exports;\\n    } else {\\n        mod = {\\\"default\\\":exports};\\n    }\\n\\n    shadow.js.modules[name] = mod;\\n  }\\n\\n  return mod;\\n  */\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"shadow\",\"js\",\"files\",\"nativeRequires\",\"NODE_ENV\",\"define\",\"requireStack\",\"add_native_require\",\"shadow.js.add_native_require\",\"name\",\"obj\",\"exportCopy\",\"shadow.js.exportCopy\",\"module\",\"other\",\"copy\",\"exports\",\"key\",\"enumerable\",\"get\",\"Object\",\"defineProperties\",\"jsRequire\",\"shadow.js.jsRequire\",\"opts\",\"nativeObj\",\"undefined\",\"DEBUG\",\"String\",\"indexOf\",\"console\",\"warn\",\"length\",\"push\",\"moduleFn\",\"shadow$provide\",\"call\",\"global\",\"e\",\"globals\",\"i\",\"window\",\"pop\",\"mod\",\"modules\",\"require\",\"shadow.js.require\"]\n}\n"]