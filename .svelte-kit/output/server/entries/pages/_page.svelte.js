import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, j as each, v as validate_component, e as escape, o as onDestroy, k as add_attribute } from "../../chunks/ssr.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const API_BASE_URL = "http://localhost:5005/api/v1";
async function fetchDashboardMetrics() {
  const res = await fetch(`${API_BASE_URL}/dashboard`);
  if (!res.ok) {
    throw new Error(`Erro ao buscar dados do dashboard: ${res.statusText}`);
  }
  return await res.json();
}
async function simulateWorkoutSync(request) {
  const res = await fetch(`${API_BASE_URL}/devices/simulate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  });
  if (!res.ok) {
    throw new Error(`Erro ao sincronizar relógio eletrônico: ${res.statusText}`);
  }
  return await res.json();
}
/**
 * @license lucide-svelte v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name = void 0 } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0) $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0) $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$props.class))
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Activity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "activity" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Battery_charging = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"
      }
    ],
    [
      "path",
      {
        "d": "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"
      }
    ],
    ["path", { "d": "m11 7-3 5h4l-3 5" }],
    [
      "line",
      {
        "x1": "22",
        "x2": "22",
        "y1": "11",
        "y2": "13"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "battery-charging" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Bluetooth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m7 7 10 10-5 5V2l5 5L7 17" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bluetooth" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "calendar" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Circle_alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "8",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12.01",
        "y1": "16",
        "y2": "16"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "circle-alert" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["polyline", { "points": "12 6 12 12 16 14" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "clock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Compass = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "10" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "compass" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Dumbbell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M14.4 14.4 9.6 9.6" }],
    [
      "path",
      {
        "d": "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"
      }
    ],
    ["path", { "d": "m21.5 21.5-1.4-1.4" }],
    ["path", { "d": "M3.9 3.9 2.5 2.5" }],
    [
      "path",
      {
        "d": "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "dumbbell" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Flame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "flame" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Heart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "heart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Layers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
      }
    ],
    [
      "path",
      {
        "d": "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
      }
    ],
    [
      "path",
      {
        "d": "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "layers" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
      }
    ],
    ["path", { "d": "M15 5.764v15" }],
    ["path", { "d": "M9 3.236v15" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "map" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mountain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m8 3 4 8 5-5 5 15H2L8 3z" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mountain" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["polygon", { "points": "3 11 22 2 13 21 11 13 3 11" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "navigation" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }],
    ["path", { "d": "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }],
    ["path", { "d": "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }],
    ["path", { "d": "M19.1 4.9C23 8.8 23 15.1 19.1 19" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "radio" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Refresh_cw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
      }
    ],
    ["path", { "d": "M21 3v5h-5" }],
    [
      "path",
      {
        "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
      }
    ],
    ["path", { "d": "M8 16H3v5" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "refresh-cw" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Route = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "6", "cy": "19", "r": "3" }],
    [
      "path",
      {
        "d": "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
      }
    ],
    ["circle", { "cx": "18", "cy": "5", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "route" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Satellite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M13 7 9 3 5 7l4 4" }],
    ["path", { "d": "m17 11 4 4-4 4-4-4" }],
    ["path", { "d": "m8 12 4 4 6-6-4-4Z" }],
    ["path", { "d": "m16 8 3-3" }],
    ["path", { "d": "M9 21a6 6 0 0 0-6-6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "satellite" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Shield_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shield-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Watch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "6" }],
    ["polyline", { "points": "12 10 12 12 13 13" }],
    [
      "path",
      {
        "d": "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
      }
    ],
    [
      "path",
      {
        "d": "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "watch" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Zap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "zap" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const DashboardHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onOpenSimulator } = $$props;
  let { onOpenBluetooth } = $$props;
  let { onRefresh } = $$props;
  let { isRefreshing = false } = $$props;
  let { bluetoothConnectedDevice = null } = $$props;
  let currentTimeStr = "";
  let currentDateStr = "";
  let currentDayOfWeek = "";
  if ($$props.onOpenSimulator === void 0 && $$bindings.onOpenSimulator && onOpenSimulator !== void 0) $$bindings.onOpenSimulator(onOpenSimulator);
  if ($$props.onOpenBluetooth === void 0 && $$bindings.onOpenBluetooth && onOpenBluetooth !== void 0) $$bindings.onOpenBluetooth(onOpenBluetooth);
  if ($$props.onRefresh === void 0 && $$bindings.onRefresh && onRefresh !== void 0) $$bindings.onRefresh(onRefresh);
  if ($$props.isRefreshing === void 0 && $$bindings.isRefreshing && isRefreshing !== void 0) $$bindings.isRefreshing(isRefreshing);
  if ($$props.bluetoothConnectedDevice === void 0 && $$bindings.bluetoothConnectedDevice && bluetoothConnectedDevice !== void 0) $$bindings.bluetoothConnectedDevice(bluetoothConnectedDevice);
  return `<header class="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-30 px-6 py-4"><div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4"> <div class="flex items-center gap-3"><div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20"><div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400">${validate_component(Activity, "Activity").$$render($$result, { class: "w-6 h-6 text-emerald-400" }, {}, {})}</div></div> <div><div class="flex items-center gap-2"><h1 class="text-xl font-bold tracking-tight text-white font-sans" data-svelte-h="svelte-1vkxrek">Physical Fitness</h1> ${bluetoothConnectedDevice ? `<span class="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400">${validate_component(Bluetooth, "Bluetooth").$$render($$result, { class: "w-3 h-3 text-blue-400" }, {}, {})} ${escape(bluetoothConnectedDevice)}</span>` : ``}</div> <p class="text-xs text-slate-400" data-svelte-h="svelte-1l1etfl">Monitoramento de Atividades Físicas &amp; Auditoria de Desempenho</p></div></div>  <div class="flex items-center gap-4 bg-slate-950/70 border border-slate-800 px-4 py-2 rounded-xl text-xs font-mono"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> <span class="capitalize text-slate-300 font-semibold">${escape(currentDayOfWeek)}</span></div> <div class="w-px h-4 bg-slate-800"></div> <div class="text-slate-400">${escape(currentDateStr)}</div> <div class="w-px h-4 bg-slate-800"></div> <div class="text-cyan-400 font-bold text-sm tracking-wider">${escape(currentTimeStr)}</div></div>  <div class="flex items-center gap-2.5"> <button type="button" class="${"inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer " + escape(
    bluetoothConnectedDevice ? "bg-blue-950/60 border-blue-500/60 text-blue-300 shadow-lg shadow-blue-500/20" : "bg-slate-800/90 border-slate-700 text-slate-200 hover:bg-slate-700",
    true
  )}" title="Conectar relógio ou pulseira via Bluetooth">${validate_component(Bluetooth, "Bluetooth").$$render(
    $$result,
    {
      class: "w-4 h-4 " + (bluetoothConnectedDevice ? "text-blue-400 animate-pulse" : "text-slate-400")
    },
    {},
    {}
  )} <span>${escape(bluetoothConnectedDevice ? "Bluetooth Ativo" : "Conectar Bluetooth")}</span></button>  <button type="button" ${isRefreshing ? "disabled" : ""} class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors disabled:opacity-50 cursor-pointer" title="Atualizar dados">${validate_component(Refresh_cw, "RefreshCw").$$render(
    $$result,
    {
      class: "w-3.5 h-3.5 " + (isRefreshing ? "animate-spin text-cyan-400" : "")
    },
    {},
    {}
  )} <span class="hidden sm:inline" data-svelte-h="svelte-1r1q8kd">Atualizar</span></button>  <button type="button" class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 rounded-lg shadow-lg shadow-cyan-600/20 transition-all cursor-pointer">${validate_component(Watch, "Watch").$$render($$result, { class: "w-4 h-4 text-white" }, {}, {})} <span data-svelte-h="svelte-ws8afv">Sincronizar Relógio</span> ${validate_component(Zap, "Zap").$$render($$result, { class: "w-3 h-3 text-cyan-200" }, {}, {})}</button></div></div></header>`;
});
const MetricCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { value } = $$props;
  let { subtitle = "" } = $$props;
  let { change = "" } = $$props;
  let { trend = "neutral" } = $$props;
  let { accent = "cyan" } = $$props;
  const accentStyles = {
    cyan: {
      border: "hover:border-cyan-500/40",
      glow: "from-cyan-500/10 via-transparent to-transparent",
      badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    emerald: {
      border: "hover:border-emerald-500/40",
      glow: "from-emerald-500/10 via-transparent to-transparent",
      badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    amber: {
      border: "hover:border-amber-500/40",
      glow: "from-amber-500/10 via-transparent to-transparent",
      badge: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    rose: {
      border: "hover:border-rose-500/40",
      glow: "from-rose-500/10 via-transparent to-transparent",
      badge: "text-rose-400 bg-rose-500/10 border-rose-500/20"
    },
    indigo: {
      border: "hover:border-indigo-500/40",
      glow: "from-indigo-500/10 via-transparent to-transparent",
      badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    }
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0) $$bindings.change(change);
  if ($$props.trend === void 0 && $$bindings.trend && trend !== void 0) $$bindings.trend(trend);
  if ($$props.accent === void 0 && $$bindings.accent && accent !== void 0) $$bindings.accent(accent);
  return `<div class="${"relative overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-800/90 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 " + escape(accentStyles[accent].border, true)}"> <div class="${"absolute inset-0 bg-gradient-to-br " + escape(accentStyles[accent].glow, true) + " pointer-events-none opacity-40"}"></div> <div class="relative z-10 flex flex-col justify-between h-full"><div class="flex items-center justify-between mb-3"><span class="text-xs font-medium uppercase tracking-wider text-slate-400 font-mono">${escape(title)}</span> ${slots.icon ? slots.icon({}) : ``}</div> <div><div class="text-3xl font-extrabold tracking-tight text-white font-mono">${escape(value)}</div> <div class="mt-2 flex items-center justify-between gap-2 text-xs">${subtitle ? `<span class="text-slate-400 truncate">${escape(subtitle)}</span>` : ``} ${change ? `<span class="${"font-mono font-medium px-2 py-0.5 rounded border " + escape(accentStyles[accent].badge, true)}">${escape(change)}</span>` : ``}</div></div></div></div>`;
});
const css = {
  code: ".leaflet-container{background-color:#0b1120 !important;font-family:inherit}.leaflet-popup-content-wrapper{background-color:#0f172a !important;color:#f8fafc !important;border:1px solid #334155 !important;border-radius:8px !important;font-size:11px !important;font-family:monospace}.leaflet-popup-tip{background-color:#0f172a !important}",
  map: `{"version":3,"file":"RouteMap.svelte","sources":["RouteMap.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount, onDestroy } from \\"svelte\\";\\nimport { browser } from \\"$app/environment\\";\\nimport { Navigation, Compass, Layers, MapPin, Dumbbell, Mountain, Satellite, Map as MapIcon } from \\"lucide-svelte\\";\\nexport let routePoints = [];\\nexport let activityTitle = \\"Percurso\\";\\nexport let status = \\"Valid\\";\\nexport let activityType = \\"Corrida\\";\\nlet mapContainer;\\nlet mapInstance = null;\\nlet polylineLayer = null;\\nlet markersLayer = null;\\nlet currentBaseLayer = null;\\nlet activeLayerType = \\"satellite\\";\\nconst mapLayers = {\\n  // Google Maps Satélite Real com Estradas/Rótulos Híbrido\\n  satellite: \\"https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}\\",\\n  // Google Maps Terreno Físico com Sombreamento de Relevo e Curvas de Nível\\n  terrain: \\"https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}\\",\\n  // Google Maps Ruas / Urbano\\n  streets: \\"https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}\\"\\n};\\n$: if (browser && mapInstance && (routePoints || activeLayerType)) {\\n  renderRoute();\\n}\\nasync function switchLayer(type) {\\n  if (!browser || !mapInstance) return;\\n  activeLayerType = type;\\n  const L = await import(\\"leaflet\\");\\n  if (currentBaseLayer) {\\n    mapInstance.removeLayer(currentBaseLayer);\\n  }\\n  currentBaseLayer = L.tileLayer(mapLayers[type], {\\n    maxZoom: 20,\\n    subdomains: [\\"mt0\\", \\"mt1\\", \\"mt2\\", \\"mt3\\"],\\n    attribution: \\"\\\\xA9 Google Maps\\"\\n  }).addTo(mapInstance);\\n}\\nasync function initMap() {\\n  if (!browser || !mapContainer) return;\\n  const L = await import(\\"leaflet\\");\\n  if (mapInstance) {\\n    mapInstance.remove();\\n  }\\n  const defaultLat = routePoints.length > 0 ? routePoints[0].latitude : -23.5874;\\n  const defaultLon = routePoints.length > 0 ? routePoints[0].longitude : -46.6576;\\n  mapInstance = L.map(mapContainer, {\\n    attributionControl: false,\\n    zoomControl: true\\n  }).setView([defaultLat, defaultLon], 15);\\n  currentBaseLayer = L.tileLayer(mapLayers[activeLayerType], {\\n    maxZoom: 20,\\n    subdomains: [\\"mt0\\", \\"mt1\\", \\"mt2\\", \\"mt3\\"]\\n  }).addTo(mapInstance);\\n  markersLayer = L.layerGroup().addTo(mapInstance);\\n  polylineLayer = L.layerGroup().addTo(mapInstance);\\n  renderRoute();\\n}\\nasync function renderRoute() {\\n  if (!browser || !mapInstance) return;\\n  const L = await import(\\"leaflet\\");\\n  markersLayer.clearLayers();\\n  polylineLayer.clearLayers();\\n  if (activityType?.toLowerCase() === \\"muscula\\\\xE7\\\\xE3o\\" || routePoints.length <= 1) {\\n    const lat = routePoints.length > 0 ? routePoints[0].latitude : -23.5615;\\n    const lon = routePoints.length > 0 ? routePoints[0].longitude : -46.6559;\\n    const gymIcon = L.divIcon({\\n      className: \\"gym-marker\\",\\n      html: \`<div style=\\"background-color: #f59e0b; width: 36px; height: 36px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 16px rgba(245, 158, 11, 0.7); color: black; font-weight: bold; font-size: 16px;\\">\\\\u{1F3CB}\\\\uFE0F</div>\`,\\n      iconSize: [36, 36],\\n      iconAnchor: [18, 18]\\n    });\\n    L.marker([lat, lon], { icon: gymIcon }).bindPopup(\`<b>Academia / Centro de Treinamento</b><br>Atividade: Muscula\\\\xE7\\\\xE3o<br>Deslocamento: 0.0 km (Indoor)\`).addTo(markersLayer);\\n    mapInstance.setView([lat, lon], 17);\\n    return;\\n  }\\n  if (routePoints.length < 2) return;\\n  const latLngs = routePoints.map((p) => [p.latitude, p.longitude]);\\n  const strokeColor = status?.toLowerCase() === \\"valid\\" ? \\"#10b981\\" : status?.toLowerCase() === \\"suspect\\" ? \\"#f59e0b\\" : \\"#ef4444\\";\\n  const polyline = L.polyline(latLngs, {\\n    color: strokeColor,\\n    weight: 5,\\n    opacity: 0.95,\\n    lineCap: \\"round\\",\\n    lineJoin: \\"round\\"\\n  }).addTo(polylineLayer);\\n  const startPoint = routePoints[0];\\n  const startIcon = L.divIcon({\\n    className: \\"custom-start-marker\\",\\n    html: \`<div style=\\"background-color: #10b981; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 12px #10b981;\\"></div>\`,\\n    iconSize: [16, 16],\\n    iconAnchor: [8, 8]\\n  });\\n  L.marker([startPoint.latitude, startPoint.longitude], { icon: startIcon }).bindPopup(\`<b>Ponto Inicial</b><br>BPM: \${startPoint.heartRateBpm}<br>Velocidade: \${startPoint.instantSpeedKmh} km/h\`).addTo(markersLayer);\\n  const endPoint = routePoints[routePoints.length - 1];\\n  const endIcon = L.divIcon({\\n    className: \\"custom-end-marker\\",\\n    html: \`<div style=\\"background-color: \${strokeColor}; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 12px \${strokeColor};\\"></div>\`,\\n    iconSize: [16, 16],\\n    iconAnchor: [8, 8]\\n  });\\n  L.marker([endPoint.latitude, endPoint.longitude], { icon: endIcon }).bindPopup(\`<b>Ponto Final</b><br>BPM: \${endPoint.heartRateBpm}<br>Velocidade: \${endPoint.instantSpeedKmh} km/h\`).addTo(markersLayer);\\n  mapInstance.fitBounds(polyline.getBounds(), { padding: [35, 35] });\\n}\\nonMount(() => {\\n  initMap();\\n});\\nonDestroy(() => {\\n  if (mapInstance) {\\n    mapInstance.remove();\\n  }\\n});\\n<\/script>\\n\\n<div class=\\"rounded-2xl bg-slate-900/80 border border-slate-800 p-4 shadow-xl flex flex-col h-[480px]\\">\\n\\t<!-- Map Header with Google Map Layer Switcher -->\\n\\t<div class=\\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-2 border-b border-slate-800/80\\">\\n\\t\\t<div class=\\"flex items-center gap-2\\">\\n\\t\\t\\t{#if activityType?.toLowerCase() === 'musculação'}\\n\\t\\t\\t\\t<Dumbbell class=\\"w-4 h-4 text-amber-400\\" />\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<Navigation class=\\"w-4 h-4 text-cyan-400\\" />\\n\\t\\t\\t{/if}\\n\\t\\t\\t<h3 class=\\"text-sm font-semibold text-white truncate max-w-[240px] sm:max-w-xs\\">\\n\\t\\t\\t\\t{activityTitle}\\n\\t\\t\\t</h3>\\n\\t\\t</div>\\n\\n\\t\\t<!-- Layer Selector: Satélite Real Google / Terreno / Ruas -->\\n\\t\\t<div class=\\"flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-mono\\">\\n\\t\\t\\t<button\\n\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\ton:click={() => switchLayer('satellite')}\\n\\t\\t\\t\\tclass=\\"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === 'satellite' ? 'bg-cyan-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'}\\"\\n\\t\\t\\t\\ttitle=\\"Google Maps Satélite com Estradas\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<Satellite class=\\"w-3.5 h-3.5\\" />\\n\\t\\t\\t\\t<span class=\\"hidden sm:inline\\">Google Satélite</span>\\n\\t\\t\\t</button>\\n\\n\\t\\t\\t<button\\n\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\ton:click={() => switchLayer('terrain')}\\n\\t\\t\\t\\tclass=\\"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === 'terrain' ? 'bg-cyan-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'}\\"\\n\\t\\t\\t\\ttitle=\\"Google Maps Terreno com Relevo e Curvas\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<Mountain class=\\"w-3.5 h-3.5\\" />\\n\\t\\t\\t\\t<span class=\\"hidden sm:inline\\">Google Terreno</span>\\n\\t\\t\\t</button>\\n\\n\\t\\t\\t<button\\n\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\ton:click={() => switchLayer('streets')}\\n\\t\\t\\t\\tclass=\\"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === 'streets' ? 'bg-cyan-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'}\\"\\n\\t\\t\\t\\ttitle=\\"Mapa Urbano\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<MapIcon class=\\"w-3.5 h-3.5\\" />\\n\\t\\t\\t\\t<span class=\\"hidden sm:inline\\">Ruas</span>\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<!-- Map Canvas -->\\n\\t<div class=\\"flex-1 relative rounded-xl overflow-hidden border border-slate-800/60\\">\\n\\t\\t<div bind:this={mapContainer} class=\\"w-full h-full z-10\\"></div>\\n\\n\\t\\t<!-- Musculação Overlay Banner -->\\n\\t\\t{#if activityType?.toLowerCase() === 'musculação'}\\n\\t\\t\\t<div class=\\"absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl bg-slate-950/90 border border-amber-500/40 backdrop-blur-md shadow-2xl flex items-center justify-between\\">\\n\\t\\t\\t\\t<div class=\\"flex items-center gap-3\\">\\n\\t\\t\\t\\t\\t<div class=\\"w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center\\">\\n\\t\\t\\t\\t\\t\\t<Dumbbell class=\\"w-5 h-5\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"text-xs font-bold text-white flex items-center gap-2\\">\\n\\t\\t\\t\\t\\t\\t\\t<span>Sessão Indoor de Musculação</span>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30\\">0.0 KM VÁLIDO</span>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<span class=\\"text-[11px] text-slate-400 font-mono\\">\\n\\t\\t\\t\\t\\t\\t\\tLocalização em Academia • Monitoramento de séries com biometria contínua\\n\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"hidden sm:flex items-center gap-3 text-right font-mono text-xs\\">\\n\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t<span class=\\"text-[10px] text-slate-400 block uppercase\\">Demanda</span>\\n\\t\\t\\t\\t\\t\\t<span class=\\"text-amber-400 font-bold\\">Hipertrofia</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t:global(.leaflet-container) {\\n\\t\\tbackground-color: #0b1120 !important;\\n\\t\\tfont-family: inherit;\\n\\t}\\n\\t:global(.leaflet-popup-content-wrapper) {\\n\\t\\tbackground-color: #0f172a !important;\\n\\t\\tcolor: #f8fafc !important;\\n\\t\\tborder: 1px solid #334155 !important;\\n\\t\\tborder-radius: 8px !important;\\n\\t\\tfont-size: 11px !important;\\n\\t\\tfont-family: monospace;\\n\\t}\\n\\t:global(.leaflet-popup-tip) {\\n\\t\\tbackground-color: #0f172a !important;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmMS,kBAAoB,CAC3B,gBAAgB,CAAE,OAAO,CAAC,UAAU,CACpC,WAAW,CAAE,OACd,CACQ,8BAAgC,CACvC,gBAAgB,CAAE,OAAO,CAAC,UAAU,CACpC,KAAK,CAAE,OAAO,CAAC,UAAU,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAAC,UAAU,CACpC,aAAa,CAAE,GAAG,CAAC,UAAU,CAC7B,SAAS,CAAE,IAAI,CAAC,UAAU,CAC1B,WAAW,CAAE,SACd,CACQ,kBAAoB,CAC3B,gBAAgB,CAAE,OAAO,CAAC,UAC3B"}`
};
const RouteMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { routePoints = [] } = $$props;
  let { activityTitle = "Percurso" } = $$props;
  let { status = "Valid" } = $$props;
  let { activityType = "Corrida" } = $$props;
  onDestroy(() => {
  });
  if ($$props.routePoints === void 0 && $$bindings.routePoints && routePoints !== void 0) $$bindings.routePoints(routePoints);
  if ($$props.activityTitle === void 0 && $$bindings.activityTitle && activityTitle !== void 0) $$bindings.activityTitle(activityTitle);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
  if ($$props.activityType === void 0 && $$bindings.activityType && activityType !== void 0) $$bindings.activityType(activityType);
  $$result.css.add(css);
  return `<div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 shadow-xl flex flex-col h-[480px]"> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-2 border-b border-slate-800/80"><div class="flex items-center gap-2">${activityType?.toLowerCase() === "musculação" ? `${validate_component(Dumbbell, "Dumbbell").$$render($$result, { class: "w-4 h-4 text-amber-400" }, {}, {})}` : `${validate_component(Navigation, "Navigation").$$render($$result, { class: "w-4 h-4 text-cyan-400" }, {}, {})}`} <h3 class="text-sm font-semibold text-white truncate max-w-[240px] sm:max-w-xs">${escape(activityTitle)}</h3></div>  <div class="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-mono"><button type="button" class="${"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer " + escape(
    "bg-cyan-600 text-white font-bold shadow",
    true
  )}" title="Google Maps Satélite com Estradas">${validate_component(Satellite, "Satellite").$$render($$result, { class: "w-3.5 h-3.5" }, {}, {})} <span class="hidden sm:inline" data-svelte-h="svelte-100jr7e">Google Satélite</span></button> <button type="button" class="${"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer " + escape(
    "text-slate-400 hover:text-white",
    true
  )}" title="Google Maps Terreno com Relevo e Curvas">${validate_component(Mountain, "Mountain").$$render($$result, { class: "w-3.5 h-3.5" }, {}, {})} <span class="hidden sm:inline" data-svelte-h="svelte-uf4xh2">Google Terreno</span></button> <button type="button" class="${"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer " + escape(
    "text-slate-400 hover:text-white",
    true
  )}" title="Mapa Urbano">${validate_component(Map, "MapIcon").$$render($$result, { class: "w-3.5 h-3.5" }, {}, {})} <span class="hidden sm:inline" data-svelte-h="svelte-16gsqgj">Ruas</span></button></div></div>  <div class="flex-1 relative rounded-xl overflow-hidden border border-slate-800/60"><div class="w-full h-full z-10"${add_attribute()}></div>  ${activityType?.toLowerCase() === "musculação" ? `<div class="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl bg-slate-950/90 border border-amber-500/40 backdrop-blur-md shadow-2xl flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">${validate_component(Dumbbell, "Dumbbell").$$render($$result, { class: "w-5 h-5" }, {}, {})}</div> <div data-svelte-h="svelte-iijzrq"><div class="text-xs font-bold text-white flex items-center gap-2"><span>Sessão Indoor de Musculação</span> <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">0.0 KM VÁLIDO</span></div> <span class="text-[11px] text-slate-400 font-mono">Localização em Academia • Monitoramento de séries com biometria contínua</span></div></div> <div class="hidden sm:flex items-center gap-3 text-right font-mono text-xs" data-svelte-h="svelte-njubeb"><div><span class="text-[10px] text-slate-400 block uppercase">Demanda</span> <span class="text-amber-400 font-bold">Hipertrofia</span></div></div></div>` : ``}</div> </div>`;
});
function getStatusConfig(s) {
  switch (s?.toLowerCase()) {
    case "valid":
      return {
        bg: "bg-emerald-500/15",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        dot: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
        label: "KM VÁLIDO"
      };
    case "suspect":
      return {
        bg: "bg-amber-500/15",
        border: "border-amber-500/30",
        text: "text-amber-400",
        dot: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
        label: "SUSPEITO"
      };
    case "rejected":
      return {
        bg: "bg-rose-500/15",
        border: "border-rose-500/30",
        text: "text-rose-400",
        dot: "bg-rose-400 shadow-[0_0_8px_#f87171]",
        label: "REJEITADO"
      };
    default:
      return {
        bg: "bg-slate-500/15",
        border: "border-slate-500/30",
        text: "text-slate-400",
        dot: "bg-slate-400",
        label: "PENDENTE"
      };
  }
}
const ValidationBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let config;
  let { status } = $$props;
  let { size = "sm" } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  config = getStatusConfig(status);
  return `<div class="${"inline-flex items-center gap-1.5 font-mono font-semibold uppercase tracking-wider rounded-full border transition-all " + escape(config.bg, true) + " " + escape(config.border, true) + " " + escape(config.text, true) + " " + escape(
    size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3.5 py-1 text-sm",
    true
  )}"><span class="${"w-2 h-2 rounded-full " + escape(config.dot, true)}"></span> <span>${escape(config.label)}</span></div>`;
});
const SmartwatchSimulatorModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  let { onClose } = $$props;
  let { onSimulate } = $$props;
  let selectedModel = "Xiaomi Mi Band 10";
  let selectedScenario = "miband_strength_training";
  const devices = [
    {
      name: "Xiaomi Mi Band 10",
      brand: "Xiaomi",
      desc: "Pulseira esportiva inteligente com sensor PPG de 12 eixos e Bluetooth 5.3 BLE"
    },
    {
      name: "Garmin Forerunner 965",
      brand: "Garmin",
      desc: "Relógio esportivo com GPS multi-band e sensor Elevate v5"
    },
    {
      name: "Apple Watch Ultra 2",
      brand: "Apple",
      desc: "GPS de dupla frequência L1/L5 com sensor óptico cardíaco"
    },
    {
      name: "Polar Vantage V3",
      brand: "Polar",
      desc: "Biossensores Elixir e ECG com satélite avançado"
    },
    {
      name: "Samsung Galaxy Watch 6",
      brand: "Samsung",
      desc: "Sensor BioActive 3-em-1 e acelerômetro"
    }
  ];
  const scenarios = [
    {
      id: "miband_strength_training",
      title: "Atividade de Musculação (Treino de Hipertrofia)",
      badge: "SUGERIDO PELO RELÓGIO",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      desc: "Treino de força indoor na academia (48 min, 0 km, 425 kcal, picos de 169 bpm nas séries). Validação biométrica aprovada."
    },
    {
      id: "valid_5k_run",
      title: "Corrida Matinal 5.0 km (Parque Ibirapuera)",
      badge: "VÁLIDO ESPERADO",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      desc: "Trajeto de corrida contínuo com pace 5:35 min/km e frequência cardíaca fisiológica de 145-168 bpm."
    },
    {
      id: "valid_cycling",
      title: "Treino de Ciclismo 21.8 km (Ciclovia)",
      badge: "VÁLIDO ESPERADO",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      desc: "Velocidade média de 26 km/h compatível com bicicleta, satélite estável e esforço aeróbico."
    },
    {
      id: "fraud_vehicle_run",
      title: "Tentativa de Fraude: Carro Disfarçado de Corrida",
      badge: "REJEIÇÃO ESPERADA",
      badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
      desc: "14.5 km em 15 min (55 a 70 km/h) com batimentos de repouso (62 bpm). O motor deve barrar e rejeitar."
    },
    {
      id: "gps_glitch",
      title: "Glitch de GPS: Teletransporte e Salto Abrupto",
      badge: "SUSPEITO / REJEITADO",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      desc: "Salto instantâneo de 4 km entre pontos de GPS (180 km/h instantâneo), gerando divergência Haversine."
    },
    {
      id: "abnormal_resting_hr",
      title: "Anomalia Biométrica: Relógio Fora do Pulso",
      badge: "REJEIÇÃO BIOMÉTRICA",
      badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
      desc: "Corrida a 12 km/h com apenas 42 bpm registrados. O validador identifica ausência de contato cutâneo."
    }
  ];
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.onSimulate === void 0 && $$bindings.onSimulate && onSimulate !== void 0) $$bindings.onSimulate(onSimulate);
  return `${isOpen ? `<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in"><div class="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"> <div class="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60"><div class="flex items-center gap-3"><div class="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-600 to-emerald-500 text-white shadow-lg shadow-cyan-600/30">${validate_component(Watch, "Watch").$$render($$result, { class: "w-6 h-6" }, {}, {})}</div> <div data-svelte-h="svelte-66vjfa"><h3 class="text-base font-bold text-white">Sincronizador de Relógio &amp; Pulseira</h3> <p class="text-xs text-slate-400 font-mono">Transmissão Direta de Telemetria (Mi Band 10, Garmin, Apple Watch)</p></div></div> <button type="button" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors">${validate_component(X, "X").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button></div>  <form class="p-6 space-y-5 overflow-y-auto max-h-[75vh]"> <div><label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2" data-svelte-h="svelte-1njzw92">1. Selecione o Dispositivo Eletrônico:</label> <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${each(devices, (dev) => {
    return `<button type="button" class="${"p-3 text-left rounded-xl border transition-all " + escape(
      selectedModel === dev.name ? "bg-cyan-950/50 border-cyan-500 ring-1 ring-cyan-500" : "bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50",
      true
    )}"><div class="flex items-center justify-between font-semibold text-xs text-white"><span>${escape(dev.name)}</span> ${selectedModel === dev.name ? `${validate_component(Check, "Check").$$render($$result, { class: "w-4 h-4 text-cyan-400" }, {}, {})}` : ``}</div> <span class="text-[11px] text-slate-400 mt-0.5 block leading-tight">${escape(dev.desc)}</span> </button>`;
  })}</div></div>  <div><label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2" data-svelte-h="svelte-3ts68a">2. Escolha o Cenário de Treino para Validação:</label> <div class="space-y-2">${each(scenarios, (sc) => {
    return `<button type="button" class="${"w-full p-3 text-left rounded-xl border transition-all " + escape(
      selectedScenario === sc.id ? "bg-cyan-950/40 border-cyan-500 ring-1 ring-cyan-500" : "bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50",
      true
    )}"><div class="flex items-center justify-between gap-2 mb-1"><span class="font-bold text-xs text-white">${escape(sc.title)}</span> <span class="${"text-[10px] font-mono px-2 py-0.5 rounded border " + escape(sc.badgeColor, true)}">${escape(sc.badge)} </span></div> <p class="text-xs text-slate-400 leading-relaxed">${escape(sc.desc)}</p> </button>`;
  })}</div></div>  <div class="pt-2"><button type="submit" ${""} class="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-emerald-600 to-cyan-600 hover:from-cyan-500 hover:to-emerald-500 shadow-xl shadow-cyan-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer">${`${`${validate_component(Zap, "Zap").$$render($$result, { class: "w-4 h-4 text-cyan-300" }, {}, {})} <span data-svelte-h="svelte-1jxzc5i">Transmitir Atividade e Validar</span>`}`}</button></div></form></div></div>` : ``}`;
});
const BluetoothConnectModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  let { onClose } = $$props;
  let { onDeviceConnected } = $$props;
  let { onProcessWorkout } = $$props;
  const nearbyDevices = [
    {
      id: "miband10",
      name: "Xiaomi Mi Band 10",
      type: "Pulseira Inteligente (BLE 5.3)",
      battery: 89,
      rssi: -54,
      suggestedWorkout: "Musculação (Treino de Hipertrofia)",
      workoutScenario: "miband_strength_training"
    },
    {
      id: "garmin965",
      name: "Garmin Forerunner 965",
      type: "Relógio Esportivo GPS (BLE)",
      battery: 74,
      rssi: -62,
      suggestedWorkout: "Corrida Matinal 5.0 km",
      workoutScenario: "valid_5k_run"
    },
    {
      id: "applewatch",
      name: "Apple Watch Ultra 2",
      type: "Smartwatch Cellular + BLE",
      battery: 92,
      rssi: -59,
      suggestedWorkout: "Ciclismo Marginal 21.8 km",
      workoutScenario: "valid_cycling"
    },
    {
      id: "polarv3",
      name: "Polar Vantage V3",
      type: "Monitor Cardíaco Multiesporte",
      battery: 65,
      rssi: -71,
      suggestedWorkout: "Treino de Ciclismo",
      workoutScenario: "valid_cycling"
    }
  ];
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.onDeviceConnected === void 0 && $$bindings.onDeviceConnected && onDeviceConnected !== void 0) $$bindings.onDeviceConnected(onDeviceConnected);
  if ($$props.onProcessWorkout === void 0 && $$bindings.onProcessWorkout && onProcessWorkout !== void 0) $$bindings.onProcessWorkout(onProcessWorkout);
  return `${isOpen ? `<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in"><div class="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"> <div class="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60"><div class="flex items-center gap-3"><div class="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shadow-lg shadow-blue-500/20">${validate_component(Bluetooth, "Bluetooth").$$render($$result, { class: "w-6 h-6 animate-pulse" }, {}, {})}</div> <div data-svelte-h="svelte-rtx4mm"><h3 class="text-base font-bold text-white">Conexão Bluetooth Low Energy</h3> <p class="text-xs text-slate-400 font-mono">Pareamento de Relógios e Pulseiras Inteligentes</p></div></div> <button type="button" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">${validate_component(X, "X").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button></div>  <div class="p-6 space-y-5 overflow-y-auto max-h-[75vh]">${` <div class="text-center py-2"><button type="button" ${""} class="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50">${validate_component(Bluetooth, "Bluetooth").$$render(
    $$result,
    {
      class: "w-4 h-4 "
    },
    {},
    {}
  )} <span>${escape("Escanear Dispositivos Bluetooth")}</span></button> <p class="text-[11px] text-slate-500 mt-2 font-mono" data-svelte-h="svelte-dh7wrs">Compatível com Xiaomi Mi Band 10, Garmin, Apple Watch, Polar e sensores cardíacos BLE.</p></div>  <div><label class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2" data-svelte-h="svelte-1vmqgjp">Dispositivos Encontrados (Clique para Parear):</label> <div class="space-y-2">${each(nearbyDevices, (dev) => {
    return `<button type="button" class="w-full p-3.5 text-left rounded-xl border border-slate-800/80 bg-slate-950/40 hover:bg-blue-950/20 hover:border-blue-500/50 transition-all flex items-center justify-between group cursor-pointer"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-950/40 transition-colors">${validate_component(Bluetooth, "Bluetooth").$$render($$result, { class: "w-4 h-4" }, {}, {})}</div> <div><div class="text-xs font-bold text-white flex items-center gap-2"><span>${escape(dev.name)}</span> ${dev.id === "miband10" ? `<span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono" data-svelte-h="svelte-p3rhxf">Destaque
													</span>` : ``}</div> <span class="text-[11px] text-slate-400 font-mono block mt-0.5">${escape(dev.type)}</span> </div></div> <div class="text-right text-[11px] font-mono text-slate-400"><div class="flex items-center justify-end gap-1 text-emerald-400">${validate_component(Battery_charging, "BatteryCharging").$$render($$result, { class: "w-3.5 h-3.5" }, {}, {})} <span>${escape(dev.battery)}%</span></div> <span class="text-slate-500">${escape(dev.rssi)} dBm</span></div> </button>`;
  })}</div></div>`}</div>  <div class="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 font-mono"><div class="flex items-center gap-1.5">${validate_component(Radio, "Radio").$$render(
    $$result,
    {
      class: "w-3.5 h-3.5 text-blue-400 animate-pulse"
    },
    {},
    {}
  )} <span data-svelte-h="svelte-1tcnuuo">GATT Profile: HR Service (0x180D)</span></div> <button type="button" class="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer" data-svelte-h="svelte-c2buc0">Fechar</button></div></div></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let metrics = null;
  let selectedActivity = null;
  let isSimulatorOpen = false;
  let isBluetoothOpen = false;
  let connectedBluetoothDevice = null;
  let isRefreshing = false;
  let errorMessage = "";
  async function loadData() {
    try {
      errorMessage = "";
      metrics = await fetchDashboardMetrics();
      if (metrics.recentActivities.length > 0 && !selectedActivity) {
        selectedActivity = metrics.recentActivities[0];
      } else if (selectedActivity && metrics.recentActivities.length > 0) {
        const updated = metrics.recentActivities.find((a) => a.id === selectedActivity?.id);
        if (updated) selectedActivity = updated;
      }
    } catch (err) {
      console.error(err);
      errorMessage = "Não foi possível carregar as métricas do servidor .NET. Verifique se o backend está em execução na porta 5005.";
    } finally {
      isRefreshing = false;
    }
  }
  async function handleRefresh() {
    isRefreshing = true;
    await loadData();
  }
  async function handleSimulate(req) {
    const newActivity = await simulateWorkoutSync(req);
    selectedActivity = newActivity;
    await loadData();
  }
  return `${$$result.head += `<!-- HEAD_svelte-wnca39_START -->${$$result.title = `<title>Physical Fitness • Monitoramento e Auditoria de Atividades</title>`, ""}<!-- HEAD_svelte-wnca39_END -->`, ""}  ${validate_component(DashboardHeader, "DashboardHeader").$$render(
    $$result,
    {
      onOpenSimulator: () => isSimulatorOpen = true,
      onOpenBluetooth: () => isBluetoothOpen = true,
      onRefresh: handleRefresh,
      isRefreshing,
      bluetoothConnectedDevice: connectedBluetoothDevice
    },
    {},
    {}
  )} <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6"> ${errorMessage ? `<div class="p-4 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-sm flex items-center justify-between"><div class="flex items-center gap-3">${validate_component(Circle_alert, "AlertCircle").$$render($$result, { class: "w-5 h-5 text-rose-400 shrink-0" }, {}, {})} <span>${escape(errorMessage)}</span></div> <button class="px-3 py-1 bg-rose-900/60 hover:bg-rose-800 rounded-lg text-xs font-mono font-medium" data-svelte-h="svelte-27q7ft">Tentar novamente</button></div>` : ``}  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> ${validate_component(MetricCard, "MetricCard").$$render(
    $$result,
    {
      title: "KM Validado / Rodados",
      value: (metrics ? metrics.totalValidatedKm.toFixed(1) : "0.0") + " km",
      subtitle: "Total reportado: " + (metrics ? metrics.totalReportedKm.toFixed(1) : "0.0") + " km",
      change: (metrics && metrics.totalReportedKm > 0 ? (metrics.totalValidatedKm / metrics.totalReportedKm * 100).toFixed(0) : "100") + "% íntegro",
      accent: "emerald"
    },
    {},
    {
      icon: () => {
        return `${validate_component(Route, "Route").$$render(
          $$result,
          {
            slot: "icon",
            class: "w-5 h-5 text-emerald-400"
          },
          {},
          {}
        )}`;
      }
    }
  )}  ${validate_component(MetricCard, "MetricCard").$$render(
    $$result,
    {
      title: "Calorias Queimadas",
      value: (metrics ? metrics.totalCaloriesBurned.toLocaleString("pt-BR") : "0") + " kcal",
      subtitle: "Média por treino: " + (metrics && metrics.totalActivitiesCount > 0 ? Math.round(metrics.totalCaloriesBurned / metrics.totalActivitiesCount) : 0) + " kcal",
      change: "Gasto Ativo",
      accent: "amber"
    },
    {},
    {
      icon: () => {
        return `${validate_component(Flame, "Flame").$$render(
          $$result,
          {
            slot: "icon",
            class: "w-5 h-5 text-amber-400"
          },
          {},
          {}
        )}`;
      }
    }
  )}  ${validate_component(MetricCard, "MetricCard").$$render(
    $$result,
    {
      title: "Batimentos Cardíacos",
      value: (metrics ? metrics.overallAvgHeartRate : 0) + " bpm",
      subtitle: "Monitoramento Wearable",
      change: "Zona Aeróbica",
      accent: "rose"
    },
    {},
    {
      icon: () => {
        return `${validate_component(Heart, "Heart").$$render(
          $$result,
          {
            slot: "icon",
            class: "w-5 h-5 text-rose-400"
          },
          {},
          {}
        )}`;
      }
    }
  )}  ${validate_component(MetricCard, "MetricCard").$$render(
    $$result,
    {
      title: "Auditoria de Atividades",
      value: (metrics ? metrics.validActivitiesCount : 0) + "/" + (metrics ? metrics.totalActivitiesCount : 0),
      subtitle: (metrics ? metrics.suspectActivitiesCount : 0) + " suspeitas • " + (metrics ? metrics.rejectedActivitiesCount : 0) + " rejeitadas",
      change: "Análise Ativa",
      accent: "cyan"
    },
    {},
    {
      icon: () => {
        return `${validate_component(Shield_check, "ShieldCheck").$$render(
          $$result,
          {
            slot: "icon",
            class: "w-5 h-5 text-cyan-400"
          },
          {},
          {}
        )}`;
      }
    }
  )}</section>  <section class="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div class="lg:col-span-2">${validate_component(RouteMap, "RouteMap").$$render(
    $$result,
    {
      routePoints: selectedActivity?.routePoints ?? [],
      activityTitle: selectedActivity ? `${selectedActivity.title} (${selectedActivity.reportedDistanceKm} km)` : "Percurso",
      status: selectedActivity?.status ?? "Valid",
      activityType: selectedActivity?.activityType ?? "Corrida"
    },
    {},
    {}
  )}</div>  <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl flex flex-col justify-between">${selectedActivity ? `<div><div class="flex items-center justify-between pb-3 border-b border-slate-800/80"><span class="text-xs font-mono uppercase text-slate-400" data-svelte-h="svelte-10i407b">Detalhamento do Treino</span> ${validate_component(ValidationBadge, "ValidationBadge").$$render(
    $$result,
    {
      status: selectedActivity.status,
      size: "sm"
    },
    {},
    {}
  )}</div> <div class="mt-4"><div class="flex items-center gap-2">${selectedActivity.activityType === "Musculação" ? `${validate_component(Dumbbell, "Dumbbell").$$render($$result, { class: "w-5 h-5 text-amber-400" }, {}, {})}` : ``} <h3 class="text-lg font-bold text-white">${escape(selectedActivity.title)}</h3></div> <div class="flex items-center gap-2 mt-1 text-xs text-slate-400 font-mono">${validate_component(Watch, "Watch").$$render($$result, { class: "w-3.5 h-3.5 text-cyan-400" }, {}, {})} <span>${escape(selectedActivity.deviceName)}</span> <span class="text-slate-600" data-svelte-h="svelte-3s2onj">•</span> <span class="text-slate-300 font-bold">${escape(selectedActivity.activityType)}</span></div></div>  <div class="mt-4 p-3 bg-slate-950/50 rounded-xl border border-slate-800/80 text-xs font-mono space-y-1.5"><div class="flex items-center justify-between"><span class="text-slate-400 flex items-center gap-1.5">${validate_component(Calendar, "Calendar").$$render($$result, { class: "w-3.5 h-3.5 text-slate-500" }, {}, {})} Dia e Data:</span> <span class="text-white capitalize">${escape(selectedActivity.dayOfWeek)}, ${escape(selectedActivity.formattedDate)}</span></div> <div class="flex items-center justify-between"><span class="text-slate-400 flex items-center gap-1.5">${validate_component(Clock, "Clock").$$render($$result, { class: "w-3.5 h-3.5 text-slate-500" }, {}, {})} Horário &amp; Duração:</span> <span class="text-cyan-400">${escape(selectedActivity.formattedTime)} (${escape(selectedActivity.formattedDuration)})</span></div></div>  <div class="grid grid-cols-2 gap-2 mt-4"><div class="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800"><span class="text-[10px] font-mono uppercase text-slate-400 block">${escape(selectedActivity.activityType === "Musculação" ? "Distância (Indoor)" : "KM Validado")}</span> <span class="text-base font-bold font-mono text-emerald-400">${escape(selectedActivity.validatedDistanceKm)} km</span> <span class="text-[10px] text-slate-500 block">${escape(selectedActivity.activityType === "Musculação" ? "Estático em Academia" : `de ${selectedActivity.reportedDistanceKm} km`)}</span></div> <div class="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800"><span class="text-[10px] font-mono uppercase text-slate-400 block" data-svelte-h="svelte-18tbd7l">Calorias Gastas</span> <span class="text-base font-bold font-mono text-amber-400">${escape(selectedActivity.caloriesBurned)} kcal</span></div> <div class="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800"><span class="text-[10px] font-mono uppercase text-slate-400 block">${escape(selectedActivity.activityType === "Musculação" ? "Foco Metabólico" : "Ritmo Médio")}</span> <span class="text-base font-bold font-mono text-white">${escape(selectedActivity.activityType === "Musculação" ? "Hipertrofia" : selectedActivity.formattedPace)}</span> <span class="text-[10px] text-slate-500 block">${escape(selectedActivity.activityType === "Musculação" ? "Demanda Anaeróbica" : `${selectedActivity.averageSpeedKmh} km/h`)}</span></div> <div class="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800"><span class="text-[10px] font-mono uppercase text-slate-400 block" data-svelte-h="svelte-1cmjmyy">Frequência Cardíaca</span> <span class="text-base font-bold font-mono text-rose-400">${escape(selectedActivity.averageHeartRateBpm)} bpm</span> <span class="text-[10px] text-slate-500 block">Pico: ${escape(selectedActivity.maxHeartRateBpm)} bpm</span></div></div>  <div class="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs"><span class="text-[10px] font-mono uppercase text-slate-400 block mb-1" data-svelte-h="svelte-vgsg05">Parecer da Análise</span> <p class="text-slate-300 leading-relaxed font-sans">${escape(selectedActivity.validationSummary)}</p></div></div> <div class="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2"><button type="button" class="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 transition-colors cursor-pointer">${validate_component(Shield_check, "ShieldCheck").$$render($$result, { class: "w-4 h-4 text-cyan-400" }, {}, {})} <span data-svelte-h="svelte-kiah44">Abrir Laudo de Auditoria</span></button></div>` : `<div class="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">${validate_component(Layers, "Layers").$$render($$result, { class: "w-8 h-8 mb-2" }, {}, {})} <p class="text-xs" data-svelte-h="svelte-17rr6xk">Selecione uma atividade para inspecionar</p></div>`}</div></section>  <section class="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80"><div data-svelte-h="svelte-ii7wq9"><h3 class="text-base font-bold text-white">Histórico de Atividades Físicas</h3> <p class="text-xs text-slate-400">Atividades sincronizadas de relógios inteligentes e pulseiras com auditoria de integridade</p></div> <div class="flex items-center gap-2 text-xs font-mono text-slate-400"><span>Total: <b class="text-white">${escape(metrics?.totalActivitiesCount ?? 0)}</b> atividades</span></div></div>  <div class="overflow-x-auto mt-4"><table class="w-full text-left text-xs font-sans"><thead data-svelte-h="svelte-aa2h8f"><tr class="border-b border-slate-800/90 text-slate-400 font-mono text-[11px] uppercase tracking-wider"><th class="py-3 px-3">Dia / Data / Hora</th> <th class="py-3 px-3">Atividade &amp; Dispositivo</th> <th class="py-3 px-3 text-right">KM Relógio</th> <th class="py-3 px-3 text-right">KM Validado</th> <th class="py-3 px-3 text-right">Ritmo / Foco</th> <th class="py-3 px-3 text-right">Calorias</th> <th class="py-3 px-3 text-center">Batimentos</th> <th class="py-3 px-3 text-center">Status</th> <th class="py-3 px-3 text-center">Ações</th></tr></thead> <tbody class="divide-y divide-slate-800/50">${metrics && metrics.recentActivities.length > 0 ? `${each(metrics.recentActivities, (act) => {
    return `<tr class="${"hover:bg-slate-800/30 transition-colors cursor-pointer " + escape(
      selectedActivity?.id === act.id ? "bg-cyan-950/20 border-l-2 border-l-cyan-500" : "",
      true
    )}"> <td class="py-3 px-3 font-mono"><div class="font-semibold text-slate-200 capitalize">${escape(act.dayOfWeek)}</div> <div class="text-[11px] text-slate-400">${escape(act.formattedDate)} às ${escape(act.formattedTime)}</div></td>  <td class="py-3 px-3"><div class="font-bold text-white flex items-center gap-1.5">${act.activityType === "Musculação" ? `${validate_component(Dumbbell, "Dumbbell").$$render($$result, { class: "w-3.5 h-3.5 text-amber-400" }, {}, {})}` : ``} <span>${escape(act.title)}</span></div> <div class="text-[11px] text-slate-400 font-mono flex items-center gap-1 mt-0.5">${validate_component(Watch, "Watch").$$render($$result, { class: "w-3 h-3 text-cyan-400" }, {}, {})} <span>${escape(act.deviceName)}</span> <span class="text-slate-600" data-svelte-h="svelte-3s2onj">•</span> <span class="text-slate-500">${escape(act.formattedDuration)}</span> </div></td>  <td class="py-3 px-3 text-right font-mono font-bold text-slate-200">${escape(act.activityType === "Musculação" ? "0.00 km" : `${act.reportedDistanceKm.toFixed(2)} km`)}</td>  <td class="${"py-3 px-3 text-right font-mono font-bold " + escape(
      act.status === "Valid" ? "text-emerald-400" : act.status === "Suspect" ? "text-amber-400" : "text-rose-400",
      true
    )}">${escape(act.activityType === "Musculação" ? "0.00 km" : `${act.validatedDistanceKm.toFixed(2)} km`)}</td>  <td class="py-3 px-3 text-right font-mono">${act.activityType === "Musculação" ? `<div class="text-amber-300 font-medium" data-svelte-h="svelte-o3qyia">Hipertrofia</div> <div class="text-[10px] text-slate-500" data-svelte-h="svelte-95ezli">Indoor</div>` : `<div class="text-slate-200 font-medium">${escape(act.formattedPace)}</div> <div class="text-[10px] text-slate-500">${escape(act.averageSpeedKmh)} km/h</div>`}</td>  <td class="py-3 px-3 text-right font-mono font-bold text-amber-400">${escape(act.caloriesBurned)} kcal</td>  <td class="py-3 px-3 text-center font-mono"><div class="inline-flex items-center gap-1 text-slate-200 font-bold">${validate_component(Heart, "Heart").$$render($$result, { class: "w-3 h-3 text-rose-500 shrink-0" }, {}, {})} <span>${escape(act.averageHeartRateBpm)}</span></div> <div class="text-[10px] text-slate-500">máx ${escape(act.maxHeartRateBpm)}</div></td>  <td class="py-3 px-3 text-center">${validate_component(ValidationBadge, "ValidationBadge").$$render($$result, { status: act.status, size: "sm" }, {}, {})}</td>  <td class="py-3 px-3 text-center"><div class="flex items-center justify-center gap-1.5"><button type="button" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer" title="Exibir percurso / localização no mapa">${validate_component(Compass, "Compass").$$render($$result, { class: "w-3.5 h-3.5 text-cyan-400" }, {}, {})}</button> <button type="button" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer" title="Ver laudo detalhado da atividade">${validate_component(Shield_check, "ShieldCheck").$$render($$result, { class: "w-3.5 h-3.5 text-emerald-400" }, {}, {})}</button> </div></td> </tr>`;
  })}` : `<tr data-svelte-h="svelte-oomm84"><td colspan="9" class="py-8 text-center text-slate-500 font-mono">Nenhuma atividade registrada ainda. Conecte seu relógio via Bluetooth ou use o botão de Sincronizar.</td></tr>`}</tbody></table></div></section></main>  ${``} ${validate_component(SmartwatchSimulatorModal, "SmartwatchSimulatorModal").$$render(
    $$result,
    {
      isOpen: isSimulatorOpen,
      onClose: () => isSimulatorOpen = false,
      onSimulate: handleSimulate
    },
    {},
    {}
  )} ${validate_component(BluetoothConnectModal, "BluetoothConnectModal").$$render(
    $$result,
    {
      isOpen: isBluetoothOpen,
      onClose: () => isBluetoothOpen = false,
      onDeviceConnected: (name) => connectedBluetoothDevice = name || null,
      onProcessWorkout: handleSimulate
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
