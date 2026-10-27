export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.zfcCXgEc.js",app:"_app/immutable/entry/app.5tg3vR0x.js",imports:["_app/immutable/entry/start.zfcCXgEc.js","_app/immutable/chunks/L7GmKpIh.js","_app/immutable/chunks/DV482I75.js","_app/immutable/chunks/1rTVkCDo.js","_app/immutable/entry/app.5tg3vR0x.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DV482I75.js","_app/immutable/chunks/Czq-V_pi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
