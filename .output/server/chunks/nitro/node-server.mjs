globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, getQuery as getQuery$1, readBody, handleCors, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import path from 'node:path';
import crypto from 'node:crypto';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import cache from 'memory-cache';
import { performance } from 'perf_hooks';
import { FilterXSS } from 'xss';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/ServiceWebApi/api/**": {
        "proxy": {
          "_proxyStripBase": "/ServiceWebApi/api"
        }
      },
      "/**": {
        "headers": {
          "Cross-Origin-Resource-Policy": "same-origin",
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "require-corp",
          "Content-Security-Policy": "base-uri 'self'; font-src 'self' https: data:; form-action 'self'; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests",
          "Origin-Agent-Cluster": "?1",
          "Referrer-Policy": "no-referrer",
          "Strict-Transport-Security": "max-age=15552000; includeSubDomains",
          "X-Content-Type-Options": "nosniff",
          "X-DNS-Prefetch-Control": "off",
          "X-Download-Options": "noopen",
          "X-Frame-Options": "SAMEORIGIN",
          "X-Permitted-Cross-Domain-Policies": "none",
          "X-XSS-Protection": "0",
          "Permissions-Policy": "camera=(), display-capture=(), fullscreen=(), geolocation=(), microphone=()"
        },
        "security": {
          "requestSizeLimiter": {
            "maxRequestSizeInBytes": 2000000,
            "maxUploadFileRequestInBytes": 8000000,
            "throwError": true
          },
          "rateLimiter": {
            "tokensPerInterval": 150,
            "interval": "hour",
            "fireImmediately": true,
            "throwError": true
          },
          "xssValidator": {
            "throwError": true
          },
          "corsHandler": {
            "origin": "http://localhost:3000",
            "methods": [
              "GET",
              "HEAD",
              "PUT",
              "PATCH",
              "POST",
              "DELETE"
            ],
            "preflight": {
              "statusCode": 204
            },
            "throwError": true
          },
          "allowedMethodsRestricter": {
            "0": "*"
          },
          "undefined": {}
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "undefined",
    "env": "",
    "persistedState": {
      "storage": "cookies",
      "debug": false,
      "cookieOptions": {}
    }
  },
  "apiSecret": "123",
  "private": {
    "basicAuth": false
  },
  "security": {
    "headers": {
      "crossOriginResourcePolicy": "same-origin",
      "crossOriginOpenerPolicy": "same-origin",
      "crossOriginEmbedderPolicy": "require-corp",
      "contentSecurityPolicy": {
        "base-uri": [
          "'self'"
        ],
        "font-src": [
          "'self'",
          "https:",
          "data:"
        ],
        "form-action": [
          "'self'"
        ],
        "frame-ancestors": [
          "'self'"
        ],
        "img-src": [
          "'self'",
          "data:"
        ],
        "object-src": [
          "'none'"
        ],
        "script-src-attr": [
          "'none'"
        ],
        "style-src": [
          "'self'",
          "https:",
          "'unsafe-inline'"
        ],
        "upgrade-insecure-requests": true
      },
      "originAgentCluster": "?1",
      "referrerPolicy": "no-referrer",
      "strictTransportSecurity": {
        "maxAge": 15552000,
        "includeSubdomains": true
      },
      "xContentTypeOptions": "nosniff",
      "xDNSPrefetchControl": "off",
      "xDownloadOptions": "noopen",
      "xFrameOptions": "SAMEORIGIN",
      "xPermittedCrossDomainPolicies": "none",
      "xXSSProtection": "0",
      "permissionsPolicy": {
        "camera": [
          "()"
        ],
        "display-capture": [
          "()"
        ],
        "fullscreen": [
          "()"
        ],
        "geolocation": [
          "()"
        ],
        "microphone": [
          "()"
        ]
      }
    },
    "requestSizeLimiter": {
      "maxRequestSizeInBytes": 2000000,
      "maxUploadFileRequestInBytes": 8000000,
      "throwError": true
    },
    "rateLimiter": {
      "tokensPerInterval": 150,
      "interval": "hour",
      "fireImmediately": true,
      "throwError": true
    },
    "xssValidator": {
      "throwError": true
    },
    "corsHandler": {
      "origin": "http://localhost:3000",
      "methods": [
        "GET",
        "HEAD",
        "PUT",
        "PATCH",
        "POST",
        "DELETE"
      ],
      "preflight": {
        "statusCode": 204
      },
      "throwError": true
    },
    "allowedMethodsRestricter": "*",
    "hidePoweredBy": true,
    "enabled": true,
    "csrf": false,
    "nonce": false
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const _LGmbz3ADA5 = (function(nitro) {
  nitro.hooks.hook("render:response", (response) => {
    if (response.headers["x-powered-by"]) {
      delete response.headers["x-powered-by"];
    } else if (response.headers["X-Powered-By"]) {
      delete response.headers["X-Powered-By"];
    }
  });
});

const _LXDB5znw6I = (function(nitro) {
  nitro.hooks.hook("render:html", (html, { event }) => {
    const moduleOptions = useRuntimeConfig().security;
    if (!isContentSecurityPolicyEnabled(event)) {
      return;
    }
    const scriptPattern = /<script[^>]*>(.*?)<\/script>/gs;
    const scriptHashes = [];
    const hashAlgorithm = "sha256";
    let match;
    while ((match = scriptPattern.exec(html.bodyAppend.join(""))) !== null) {
      if (match[1]) {
        scriptHashes.push(generateHash(match[1], hashAlgorithm));
      }
    }
    const securityHeaders = moduleOptions.headers;
    const contentSecurityPolicies = securityHeaders.contentSecurityPolicy.value || securityHeaders.contentSecurityPolicy;
    html.head.push(generateCspMetaTag(contentSecurityPolicies, scriptHashes));
  });
  function generateCspMetaTag(policies, scriptHashes) {
    const unsupportedPolicies = {
      "frame-ancestors": true,
      "report-uri": true,
      sandbox: true
    };
    const tagPolicies = defu(policies);
    if (scriptHashes.length > 0) {
      tagPolicies["script-src"] = (tagPolicies["script-src"] ?? []).concat(scriptHashes);
    }
    const contentArray = [];
    for (const [key, value] of Object.entries(tagPolicies)) {
      if (unsupportedPolicies[key]) {
        continue;
      }
      let policyValue;
      if (Array.isArray(value)) {
        policyValue = value.join(" ");
      } else if (typeof value === "boolean") {
        policyValue = "";
      } else {
        policyValue = value;
      }
      contentArray.push(`${key} ${policyValue}`);
    }
    const content = contentArray.join("; ");
    return `<meta http-equiv="Content-Security-Policy" content="${content}">`;
  }
  function generateHash(content, hashAlgorithm) {
    const hash = crypto.createHash(hashAlgorithm);
    hash.update(content);
    return `'${hashAlgorithm}-${hash.digest("base64")}'`;
  }
  function isContentSecurityPolicyEnabled(event, options) {
    const nitroPrerenderHeader = "x-nitro-prerender";
    if (!event.node.req.headers[nitroPrerenderHeader]) {
      return false;
    }
    if (!["", ".html"].includes(path.extname(event.node.req.headers[nitroPrerenderHeader]))) {
      return false;
    }
    return true;
  }
});

const plugins = [
  _LGmbz3ADA5,
_LXDB5znw6I
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-08-17T07:10:46.159Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"16-iUOtJ2RsHfdY9DoQxaq0wz1LZCU\"",
    "mtime": "2023-08-17T07:10:46.140Z",
    "size": 22,
    "path": "../public/robots.txt"
  },
  "/img/fake-img-index-carousel-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"27672-qsPNWAkS7t3VLirk4ANRzxAqAiI\"",
    "mtime": "2023-08-17T07:10:46.157Z",
    "size": 161394,
    "path": "../public/img/fake-img-index-carousel-1.jpg"
  },
  "/img/fake-promotion-desktop.jpg": {
    "type": "image/jpeg",
    "etag": "\"8ae91-2JoARVD50DIIAdchboQuKD33WSs\"",
    "mtime": "2023-08-17T07:10:46.150Z",
    "size": 568977,
    "path": "../public/img/fake-promotion-desktop.jpg"
  },
  "/img/fake-promotion-mobile.jpg": {
    "type": "image/jpeg",
    "etag": "\"3eb76-cNg/uiBmcdTDiENa8VULqeeziQw\"",
    "mtime": "2023-08-17T07:10:46.145Z",
    "size": 256886,
    "path": "../public/img/fake-promotion-mobile.jpg"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-08-17T07:10:46.135Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/_nuxt/account.b09937ed.js": {
    "type": "application/javascript",
    "etag": "\"133-/NvnHNu/nQRrdo/cw3phj6YT0W4\"",
    "mtime": "2023-08-17T07:10:46.134Z",
    "size": 307,
    "path": "../public/_nuxt/account.b09937ed.js"
  },
  "/_nuxt/default.a4cae47a.js": {
    "type": "application/javascript",
    "etag": "\"121-5PfFYCb5KK153ev9/UMZYA3M+HI\"",
    "mtime": "2023-08-17T07:10:46.132Z",
    "size": 289,
    "path": "../public/_nuxt/default.a4cae47a.js"
  },
  "/_nuxt/entry.f14e2a09.js": {
    "type": "application/javascript",
    "etag": "\"2af7e-Weu686M7cN7QYLJ+WCb8tFQYovY\"",
    "mtime": "2023-08-17T07:10:46.129Z",
    "size": 175998,
    "path": "../public/_nuxt/entry.f14e2a09.js"
  },
  "/_nuxt/find.76f0da90.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d1-ufaPegicdbqYEveMJiJAkQGXpfU\"",
    "mtime": "2023-08-17T07:10:46.126Z",
    "size": 465,
    "path": "../public/_nuxt/find.76f0da90.css"
  },
  "/_nuxt/find.add480db.js": {
    "type": "application/javascript",
    "etag": "\"661a-pa9Qeu75g085nNAeEA4ff8PRAmA\"",
    "mtime": "2023-08-17T07:10:46.124Z",
    "size": 26138,
    "path": "../public/_nuxt/find.add480db.js"
  },
  "/_nuxt/ico_cart_b.027985dc.svg": {
    "type": "image/svg+xml",
    "etag": "\"8d0-/O4gHkuZ0j+msiVCuBdf0k9APrQ\"",
    "mtime": "2023-08-17T07:10:46.123Z",
    "size": 2256,
    "path": "../public/_nuxt/ico_cart_b.027985dc.svg"
  },
  "/_nuxt/icon-arrow-left.3f8b0aad.svg": {
    "type": "image/svg+xml",
    "etag": "\"3da-viWbMqZ/Nr+1PMKs6fooFh2g48w\"",
    "mtime": "2023-08-17T07:10:46.122Z",
    "size": 986,
    "path": "../public/_nuxt/icon-arrow-left.3f8b0aad.svg"
  },
  "/_nuxt/icon-arrow-right-black.e688a1b4.svg": {
    "type": "image/svg+xml",
    "etag": "\"2a4-dTXjssR7zUrVNeJaUqbe4G8xjbI\"",
    "mtime": "2023-08-17T07:10:46.121Z",
    "size": 676,
    "path": "../public/_nuxt/icon-arrow-right-black.e688a1b4.svg"
  },
  "/_nuxt/icon-arrow-right.8674851c.svg": {
    "type": "image/svg+xml",
    "etag": "\"27f-F5uhsrzYaFqgz0Zw/853X11afb4\"",
    "mtime": "2023-08-17T07:10:46.117Z",
    "size": 639,
    "path": "../public/_nuxt/icon-arrow-right.8674851c.svg"
  },
  "/_nuxt/icon-collapse.90a66254.svg": {
    "type": "image/svg+xml",
    "etag": "\"2c5-8TYVWe2MGIpln9ev9mAs8HGBXyw\"",
    "mtime": "2023-08-17T07:10:46.117Z",
    "size": 709,
    "path": "../public/_nuxt/icon-collapse.90a66254.svg"
  },
  "/_nuxt/icon-keep-scroll-right.cca62e6f.svg": {
    "type": "image/svg+xml",
    "etag": "\"159-teV+8ExiE/EdnlgF2HHKxsNpcfc\"",
    "mtime": "2023-08-17T07:10:46.116Z",
    "size": 345,
    "path": "../public/_nuxt/icon-keep-scroll-right.cca62e6f.svg"
  },
  "/_nuxt/icon-kv-money.cfdfeb7e.svg": {
    "type": "image/svg+xml",
    "etag": "\"ee9-InOHgpRKd8dlLsFqlLnwg4tw9lM\"",
    "mtime": "2023-08-17T07:10:46.115Z",
    "size": 3817,
    "path": "../public/_nuxt/icon-kv-money.cfdfeb7e.svg"
  },
  "/_nuxt/icon-overseas-find-accounting-query.d033231e.svg": {
    "type": "image/svg+xml",
    "etag": "\"525-7I0LATnONp5GnznQwPjFlpPQ1cA\"",
    "mtime": "2023-08-17T07:10:46.114Z",
    "size": 1317,
    "path": "../public/_nuxt/icon-overseas-find-accounting-query.d033231e.svg"
  },
  "/_nuxt/icon-overseas-find-find-bonds.a7c8c861.svg": {
    "type": "image/svg+xml",
    "etag": "\"837-SoFk0AEaC5EP1dWql2XM2zvMNa8\"",
    "mtime": "2023-08-17T07:10:46.111Z",
    "size": 2103,
    "path": "../public/_nuxt/icon-overseas-find-find-bonds.a7c8c861.svg"
  },
  "/_nuxt/icon-overseas-find-market-info.952ff0a9.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f6-kWGyEMa86mro7Aq3DeXtx86iZHw\"",
    "mtime": "2023-08-17T07:10:46.110Z",
    "size": 1014,
    "path": "../public/_nuxt/icon-overseas-find-market-info.952ff0a9.svg"
  },
  "/_nuxt/icon-overseas-find-trade-order-query.b883269d.svg": {
    "type": "image/svg+xml",
    "etag": "\"59a-kUiZ1NA1lTjfYbqVcRfPQIxXLuE\"",
    "mtime": "2023-08-17T07:10:46.109Z",
    "size": 1434,
    "path": "../public/_nuxt/icon-overseas-find-trade-order-query.b883269d.svg"
  },
  "/_nuxt/icon-overseas-my-choice.d28ca3ba.svg": {
    "type": "image/svg+xml",
    "etag": "\"d18-3fH/4U2vPI1TzwRIN1/wGjyhPIE\"",
    "mtime": "2023-08-17T07:10:46.108Z",
    "size": 3352,
    "path": "../public/_nuxt/icon-overseas-my-choice.d28ca3ba.svg"
  },
  "/_nuxt/icon-overseas-open-account.3798c7ef.svg": {
    "type": "image/svg+xml",
    "etag": "\"abd-LAbhmFIOhhrfDcLs1+1TkoJxuLs\"",
    "mtime": "2023-08-17T07:10:46.102Z",
    "size": 2749,
    "path": "../public/_nuxt/icon-overseas-open-account.3798c7ef.svg"
  },
  "/_nuxt/icon-overseas-purchase.3769656a.svg": {
    "type": "image/svg+xml",
    "etag": "\"de4-rm3YijAOtNoFqMidMGKEfvxhNAI\"",
    "mtime": "2023-08-17T07:10:46.101Z",
    "size": 3556,
    "path": "../public/_nuxt/icon-overseas-purchase.3769656a.svg"
  },
  "/_nuxt/icon-overseas-view-all-bonds.560e2964.svg": {
    "type": "image/svg+xml",
    "etag": "\"c0a-+dx+Jc8vTRKp19dXL+X9YfVwqeQ\"",
    "mtime": "2023-08-17T07:10:46.100Z",
    "size": 3082,
    "path": "../public/_nuxt/icon-overseas-view-all-bonds.560e2964.svg"
  },
  "/_nuxt/icon-pricing-short.f2311dbc.svg": {
    "type": "image/svg+xml",
    "etag": "\"d3-gslFu/aHXgY40xFQrlMU8Co+1b8\"",
    "mtime": "2023-08-17T07:10:46.100Z",
    "size": 211,
    "path": "../public/_nuxt/icon-pricing-short.f2311dbc.svg"
  },
  "/_nuxt/index.0b65bec2.js": {
    "type": "application/javascript",
    "etag": "\"2def-nYhNNHruv0HKz9fjnaCZDJ9C5zg\"",
    "mtime": "2023-08-17T07:10:46.099Z",
    "size": 11759,
    "path": "../public/_nuxt/index.0b65bec2.js"
  },
  "/_nuxt/index.20490b64.js": {
    "type": "application/javascript",
    "etag": "\"5cea-lWu2ZT6ZDueniXi0sYpvhxda3As\"",
    "mtime": "2023-08-17T07:10:46.096Z",
    "size": 23786,
    "path": "../public/_nuxt/index.20490b64.js"
  },
  "/_nuxt/index.fb573e9e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"22f-97v44/7S8G5aEvpnwtVXxC5QiNU\"",
    "mtime": "2023-08-17T07:10:46.094Z",
    "size": 559,
    "path": "../public/_nuxt/index.fb573e9e.css"
  },
  "/_nuxt/info.2e5b942c.js": {
    "type": "application/javascript",
    "etag": "\"2e494-s1D78rhrwoU1GFv/pJKdRy8fc1I\"",
    "mtime": "2023-08-17T07:10:46.093Z",
    "size": 189588,
    "path": "../public/_nuxt/info.2e5b942c.js"
  },
  "/_nuxt/info.e1776549.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"493f-KYUbFnCUdcCWHxSqTmGJ1H7ESds\"",
    "mtime": "2023-08-17T07:10:46.089Z",
    "size": 18751,
    "path": "../public/_nuxt/info.e1776549.css"
  },
  "/_nuxt/kgi-logo.f692e7df.png": {
    "type": "image/png",
    "etag": "\"1c7b-wcXWIkaBgplXSMivQM+JnB595nI\"",
    "mtime": "2023-08-17T07:10:46.087Z",
    "size": 7291,
    "path": "../public/_nuxt/kgi-logo.f692e7df.png"
  },
  "/_nuxt/landing-bg.8f4b185c.jpg": {
    "type": "image/jpeg",
    "etag": "\"334ef-AZPmeI94yvvf+F+IZtxilBkxO8w\"",
    "mtime": "2023-08-17T07:10:46.086Z",
    "size": 210159,
    "path": "../public/_nuxt/landing-bg.8f4b185c.jpg"
  },
  "/_nuxt/landing-bg.e0ed6be1.js": {
    "type": "application/javascript",
    "etag": "\"6f-j4Lq1azBT+8kp9QUZUVI9JTXXbc\"",
    "mtime": "2023-08-17T07:10:46.074Z",
    "size": 111,
    "path": "../public/_nuxt/landing-bg.e0ed6be1.js"
  },
  "/_nuxt/loadingStore.a2673919.js": {
    "type": "application/javascript",
    "etag": "\"9c-e0Kk0fqLllgyiChFr3AYS7Z77CA\"",
    "mtime": "2023-08-17T07:10:46.071Z",
    "size": 156,
    "path": "../public/_nuxt/loadingStore.a2673919.js"
  },
  "/_nuxt/loginError.5933364c.js": {
    "type": "application/javascript",
    "etag": "\"1dd-GpdlHkZOGDyhL/c0Ux6hJkrZ4XE\"",
    "mtime": "2023-08-17T07:10:46.070Z",
    "size": 477,
    "path": "../public/_nuxt/loginError.5933364c.js"
  },
  "/_nuxt/margindeposit.55f55b26.js": {
    "type": "application/javascript",
    "etag": "\"136-mEgy4GN85clIOUkDzGCQWdjMx60\"",
    "mtime": "2023-08-17T07:10:46.068Z",
    "size": 310,
    "path": "../public/_nuxt/margindeposit.55f55b26.js"
  },
  "/_nuxt/marketinfo.2e145753.js": {
    "type": "application/javascript",
    "etag": "\"139-Hga6bB2xgs9Ue5vJw6dsz9eHefo\"",
    "mtime": "2023-08-17T07:10:46.063Z",
    "size": 313,
    "path": "../public/_nuxt/marketinfo.2e145753.js"
  },
  "/_nuxt/marketorder.51817e8a.js": {
    "type": "application/javascript",
    "etag": "\"147-pKs2fFTxVG2S3IBtpBA5GWvImFY\"",
    "mtime": "2023-08-17T07:10:46.062Z",
    "size": 327,
    "path": "../public/_nuxt/marketorder.51817e8a.js"
  },
  "/_nuxt/modal.vue.60306d41.js": {
    "type": "application/javascript",
    "etag": "\"532-9GI1ddpkOdlpLAYilt6jD7cpm34\"",
    "mtime": "2023-08-17T07:10:46.055Z",
    "size": 1330,
    "path": "../public/_nuxt/modal.vue.60306d41.js"
  },
  "/_nuxt/modalStore.03b7ca9d.js": {
    "type": "application/javascript",
    "etag": "\"138-j4Qwlyqf1ptdM1ot585qLxwtQgQ\"",
    "mtime": "2023-08-17T07:10:46.052Z",
    "size": 312,
    "path": "../public/_nuxt/modalStore.03b7ca9d.js"
  },
  "/_nuxt/one.a77bfda8.js": {
    "type": "application/javascript",
    "etag": "\"42a5-ecPccyPCEURj6qmDaKW6cahScqk\"",
    "mtime": "2023-08-17T07:10:46.048Z",
    "size": 17061,
    "path": "../public/_nuxt/one.a77bfda8.js"
  },
  "/_nuxt/one.b43a6e1b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"56e-wQOOt+RPN10bZb3a8RLYweW+M9Q\"",
    "mtime": "2023-08-17T07:10:46.046Z",
    "size": 1390,
    "path": "../public/_nuxt/one.b43a6e1b.css"
  },
  "/_nuxt/overseas.1e502085.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"241-cvGybE+7OL9dayIu5CbskEBZEkA\"",
    "mtime": "2023-08-17T07:10:46.045Z",
    "size": 577,
    "path": "../public/_nuxt/overseas.1e502085.css"
  },
  "/_nuxt/overseas.9bbd7d13.js": {
    "type": "application/javascript",
    "etag": "\"25f2-NGtgoLfatOFUv2CLqCY9A2+T9pU\"",
    "mtime": "2023-08-17T07:10:46.040Z",
    "size": 9714,
    "path": "../public/_nuxt/overseas.9bbd7d13.js"
  },
  "/_nuxt/trans.4d36ffa0.js": {
    "type": "application/javascript",
    "etag": "\"292-f369YaOqmsSQIbb15IigsD5u69o\"",
    "mtime": "2023-08-17T07:10:46.033Z",
    "size": 658,
    "path": "../public/_nuxt/trans.4d36ffa0.js"
  },
  "/_nuxt/useBaseFetch.bb79c7da.js": {
    "type": "application/javascript",
    "etag": "\"e0c-KHZgBOpbu20yMJhVjdkqlZoDb8w\"",
    "mtime": "2023-08-17T07:10:46.010Z",
    "size": 3596,
    "path": "../public/_nuxt/useBaseFetch.bb79c7da.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const FILE_UPLOAD_HEADER = "multipart/form-data";
const _Wa8uEF = defineEventHandler(async (event) => {
  const routeRules = getRouteRules(event);
  if (routeRules.security.requestSizeLimiter !== false) {
    if (["POST", "PUT", "DELETE"].includes(event.node.req.method)) {
      const contentLengthValue = getRequestHeader(event, "content-length");
      const contentTypeValue = getRequestHeader(event, "content-type");
      const isFileUpload = contentTypeValue?.includes(FILE_UPLOAD_HEADER);
      const requestLimit = isFileUpload ? routeRules.security.requestSizeLimiter.maxUploadFileRequestInBytes : routeRules.security.requestSizeLimiter.maxRequestSizeInBytes;
      if (parseInt(contentLengthValue) >= requestLimit) {
        const payloadTooLargeError = {
          statusCode: 413,
          statusMessage: "Payload Too Large"
        };
        if (routeRules.security.requestSizeLimiter.throwError === false) {
          return payloadTooLargeError;
        }
        throw createError(payloadTooLargeError);
      }
    }
  }
});

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp) {
    const clocktime = performance.now() * 1e-3;
    let seconds = Math.floor(clocktime);
    let nanoseconds = Math.floor((clocktime % 1) * 1e9);
    if (previousTimestamp != undefined) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds < 0) {
            seconds--;
            nanoseconds += 1e9;
        }
    }
    return [seconds, nanoseconds];
}
// The current timestamp in whole milliseconds
function getMilliseconds() {
    const [seconds, nanoseconds] = hrtime();
    return seconds * 1e3 + Math.floor(nanoseconds / 1e6);
}
// Wait for a specified number of milliseconds before fulfilling the returned promise.
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * A hierarchical token bucket for rate limiting. See
 * http://en.wikipedia.org/wiki/Token_bucket for more information.
 *
 * @param options
 * @param options.bucketSize Maximum number of tokens to hold in the bucket.
 *  Also known as the burst rate.
 * @param options.tokensPerInterval Number of tokens to drip into the bucket
 *  over the course of one interval.
 * @param options.interval The interval length in milliseconds, or as
 *  one of the following strings: 'second', 'minute', 'hour', day'.
 * @param options.parentBucket Optional. A token bucket that will act as
 *  the parent of this bucket.
 */
class TokenBucket {
    constructor({ bucketSize, tokensPerInterval, interval, parentBucket }) {
        this.bucketSize = bucketSize;
        this.tokensPerInterval = tokensPerInterval;
        if (typeof interval === "string") {
            switch (interval) {
                case "sec":
                case "second":
                    this.interval = 1000;
                    break;
                case "min":
                case "minute":
                    this.interval = 1000 * 60;
                    break;
                case "hr":
                case "hour":
                    this.interval = 1000 * 60 * 60;
                    break;
                case "day":
                    this.interval = 1000 * 60 * 60 * 24;
                    break;
                default:
                    throw new Error("Invalid interval " + interval);
            }
        }
        else {
            this.interval = interval;
        }
        this.parentBucket = parentBucket;
        this.content = 0;
        this.lastDrip = getMilliseconds();
    }
    /**
     * Remove the requested number of tokens. If the bucket (and any parent
     * buckets) contains enough tokens this will happen immediately. Otherwise,
     * the removal will happen when enough tokens become available.
     * @param count The number of tokens to remove.
     * @returns A promise for the remainingTokens count.
     */
    async removeTokens(count) {
        // Is this an infinite size bucket?
        if (this.bucketSize === 0) {
            return Number.POSITIVE_INFINITY;
        }
        // Make sure the bucket can hold the requested number of tokens
        if (count > this.bucketSize) {
            throw new Error(`Requested tokens ${count} exceeds bucket size ${this.bucketSize}`);
        }
        // Drip new tokens into this bucket
        this.drip();
        const comeBackLater = async () => {
            // How long do we need to wait to make up the difference in tokens?
            const waitMs = Math.ceil((count - this.content) * (this.interval / this.tokensPerInterval));
            await wait(waitMs);
            return this.removeTokens(count);
        };
        // If we don't have enough tokens in this bucket, come back later
        if (count > this.content)
            return comeBackLater();
        if (this.parentBucket != undefined) {
            // Remove the requested from the parent bucket first
            const remainingTokens = await this.parentBucket.removeTokens(count);
            // Check that we still have enough tokens in this bucket
            if (count > this.content)
                return comeBackLater();
            // Tokens were removed from the parent bucket, now remove them from
            // this bucket. Note that we look at the current bucket and parent
            // bucket's remaining tokens and return the smaller of the two values
            this.content -= count;
            return Math.min(remainingTokens, this.content);
        }
        else {
            // Remove the requested tokens from this bucket
            this.content -= count;
            return this.content;
        }
    }
    /**
     * Attempt to remove the requested number of tokens and return immediately.
     * If the bucket (and any parent buckets) contains enough tokens this will
     * return true, otherwise false is returned.
     * @param {Number} count The number of tokens to remove.
     * @param {Boolean} True if the tokens were successfully removed, otherwise
     *  false.
     */
    tryRemoveTokens(count) {
        // Is this an infinite size bucket?
        if (!this.bucketSize)
            return true;
        // Make sure the bucket can hold the requested number of tokens
        if (count > this.bucketSize)
            return false;
        // Drip new tokens into this bucket
        this.drip();
        // If we don't have enough tokens in this bucket, return false
        if (count > this.content)
            return false;
        // Try to remove the requested tokens from the parent bucket
        if (this.parentBucket && !this.parentBucket.tryRemoveTokens(count))
            return false;
        // Remove the requested tokens from this bucket and return
        this.content -= count;
        return true;
    }
    /**
     * Add any new tokens to the bucket since the last drip.
     * @returns {Boolean} True if new tokens were added, otherwise false.
     */
    drip() {
        if (this.tokensPerInterval === 0) {
            const prevContent = this.content;
            this.content = this.bucketSize;
            return this.content > prevContent;
        }
        const now = getMilliseconds();
        const deltaMS = Math.max(now - this.lastDrip, 0);
        this.lastDrip = now;
        const dripAmount = deltaMS * (this.tokensPerInterval / this.interval);
        const prevContent = this.content;
        this.content = Math.min(this.content + dripAmount, this.bucketSize);
        return Math.floor(this.content) > Math.floor(prevContent);
    }
}

/**
 * A generic rate limiter. Underneath the hood, this uses a token bucket plus
 * an additional check to limit how many tokens we can remove each interval.
 *
 * @param options
 * @param options.tokensPerInterval Maximum number of tokens that can be
 *  removed at any given moment and over the course of one interval.
 * @param options.interval The interval length in milliseconds, or as
 *  one of the following strings: 'second', 'minute', 'hour', day'.
 * @param options.fireImmediately Whether or not the promise will resolve
 *  immediately when rate limiting is in effect (default is false).
 */
class RateLimiter {
    constructor({ tokensPerInterval, interval, fireImmediately }) {
        this.tokenBucket = new TokenBucket({
            bucketSize: tokensPerInterval,
            tokensPerInterval,
            interval,
        });
        // Fill the token bucket to start
        this.tokenBucket.content = tokensPerInterval;
        this.curIntervalStart = getMilliseconds();
        this.tokensThisInterval = 0;
        this.fireImmediately = fireImmediately !== null && fireImmediately !== void 0 ? fireImmediately : false;
    }
    /**
     * Remove the requested number of tokens. If the rate limiter contains enough
     * tokens and we haven't spent too many tokens in this interval already, this
     * will happen immediately. Otherwise, the removal will happen when enough
     * tokens become available.
     * @param count The number of tokens to remove.
     * @returns A promise for the remainingTokens count.
     */
    async removeTokens(count) {
        // Make sure the request isn't for more than we can handle
        if (count > this.tokenBucket.bucketSize) {
            throw new Error(`Requested tokens ${count} exceeds maximum tokens per interval ${this.tokenBucket.bucketSize}`);
        }
        const now = getMilliseconds();
        // Advance the current interval and reset the current interval token count
        // if needed
        if (now < this.curIntervalStart || now - this.curIntervalStart >= this.tokenBucket.interval) {
            this.curIntervalStart = now;
            this.tokensThisInterval = 0;
        }
        // If we don't have enough tokens left in this interval, wait until the
        // next interval
        if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) {
            if (this.fireImmediately) {
                return -1;
            }
            else {
                const waitMs = Math.ceil(this.curIntervalStart + this.tokenBucket.interval - now);
                await wait(waitMs);
                const remainingTokens = await this.tokenBucket.removeTokens(count);
                this.tokensThisInterval += count;
                return remainingTokens;
            }
        }
        // Remove the requested number of tokens from the token bucket
        const remainingTokens = await this.tokenBucket.removeTokens(count);
        this.tokensThisInterval += count;
        return remainingTokens;
    }
    /**
     * Attempt to remove the requested number of tokens and return immediately.
     * If the bucket (and any parent buckets) contains enough tokens and we
     * haven't spent too many tokens in this interval already, this will return
     * true. Otherwise, false is returned.
     * @param {Number} count The number of tokens to remove.
     * @param {Boolean} True if the tokens were successfully removed, otherwise
     *  false.
     */
    tryRemoveTokens(count) {
        // Make sure the request isn't for more than we can handle
        if (count > this.tokenBucket.bucketSize)
            return false;
        const now = getMilliseconds();
        // Advance the current interval and reset the current interval token count
        // if needed
        if (now < this.curIntervalStart || now - this.curIntervalStart >= this.tokenBucket.interval) {
            this.curIntervalStart = now;
            this.tokensThisInterval = 0;
        }
        // If we don't have enough tokens left in this interval, return false
        if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval)
            return false;
        // Try to remove the requested number of tokens from the token bucket
        const removed = this.tokenBucket.tryRemoveTokens(count);
        if (removed) {
            this.tokensThisInterval += count;
        }
        return removed;
    }
    /**
     * Returns the number of tokens remaining in the TokenBucket.
     * @returns {Number} The number of tokens remaining.
     */
    getTokensRemaining() {
        this.tokenBucket.drip();
        return this.tokenBucket.content;
    }
}

const _F4kcKW = defineEventHandler(async (event) => {
  const ip = getRequestHeader(event, "x-forwarded-for");
  const routeRules = getRouteRules(event);
  if (routeRules.security.rateLimiter !== false) {
    if (!cache.get(ip)) {
      const cachedLimiter = new RateLimiter(routeRules.security.rateLimiter);
      cache.put(ip, cachedLimiter, 1e4);
    } else {
      const cachedLimiter = cache.get(ip);
      if (cachedLimiter.getTokensRemaining() > 1) {
        await cachedLimiter.removeTokens(1);
        cache.put(ip, cachedLimiter, 1e4);
      } else {
        const tooManyRequestsError = {
          statusCode: 429,
          statusMessage: "Too Many Requests"
        };
        if (routeRules.security.rateLimiter.throwError === false) {
          return tooManyRequestsError;
        }
        throw createError(tooManyRequestsError);
      }
    }
  }
});

const _kNbkkA = defineEventHandler(async (event) => {
  const routeRules = getRouteRules(event);
  const xssValidator = new FilterXSS(routeRules.security.xssValidator);
  if (event.node.req.socket.readyState !== "readOnly") {
    if (routeRules.security.xssValidator !== false) {
      if (["POST", "GET"].includes(event.node.req.method)) {
        const valueToFilter = event.node.req.method === "GET" ? getQuery$1(event) : await readBody(event);
        if (valueToFilter && Object.keys(valueToFilter).length) {
          if (valueToFilter.statusMessage && valueToFilter.statusMessage !== "Bad Request")
            return;
          const stringifiedValue = JSON.stringify(valueToFilter);
          const processedValue = xssValidator.process(
            JSON.stringify(valueToFilter)
          );
          if (processedValue !== stringifiedValue) {
            const badRequestError = {
              statusCode: 400,
              statusMessage: "Bad Request"
            };
            if (routeRules.security.requestSizeLimiter.throwError === false) {
              return badRequestError;
            }
            throw createError(badRequestError);
          }
        }
      }
    }
  }
});

const _0l09nF = defineEventHandler((event) => {
  const routeRules = getRouteRules(event);
  handleCors(event, routeRules.security.corsHandler);
});

const _lazy_xBREMV = () => import('../AuthVerify.mjs');
const _lazy_yKYGD6 = () => import('../QueryCustomer.mjs');
const _lazy_E2A4Fl = () => import('../TestLogin.mjs');
const _lazy_p51Phj = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/AuthVerify', handler: _lazy_xBREMV, lazy: true, middleware: false, method: undefined },
  { route: '/api/QueryCustomer', handler: _lazy_yKYGD6, lazy: true, middleware: false, method: undefined },
  { route: '/api/TestLogin', handler: _lazy_E2A4Fl, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_p51Phj, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _Wa8uEF, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _F4kcKW, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _kNbkkA, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _0l09nF, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_p51Phj, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
