

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DlDTqMoD.js","_app/immutable/chunks/OfubEKAR.js","_app/immutable/chunks/BXwSS6Vs.js"];
export const stylesheets = ["_app/immutable/assets/0.EIili4Qk.css"];
export const fonts = [];
