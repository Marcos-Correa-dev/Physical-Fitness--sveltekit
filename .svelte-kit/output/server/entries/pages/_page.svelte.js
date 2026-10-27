import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, h as escape_attribute_value, i as each, v as validate_component, s as subscribe, e as escape, j as add_attribute, o as onDestroy } from "../../chunks/ssr.js";
import { d as derived, w as writable } from "../../chunks/index.js";
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
const Cloud_upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
      }
    ],
    ["path", { "d": "M12 12v9" }],
    ["path", { "d": "m16 16-4-4-4 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "cloud-upload" }, $$props, { iconNode }), {}, {
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
const Cpu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "16",
        "height": "16",
        "x": "4",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "width": "6",
        "height": "6",
        "x": "9",
        "y": "9",
        "rx": "1"
      }
    ],
    ["path", { "d": "M15 2v2" }],
    ["path", { "d": "M15 20v2" }],
    ["path", { "d": "M2 15h2" }],
    ["path", { "d": "M2 9h2" }],
    ["path", { "d": "M20 15h2" }],
    ["path", { "d": "M20 9h2" }],
    ["path", { "d": "M9 2v2" }],
    ["path", { "d": "M9 20v2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "cpu" }, $$props, { iconNode }), {}, {
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
const Gauge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m12 14 4-4" }],
    ["path", { "d": "M3.34 19a10 10 0 1 1 17.32 0" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "gauge" }, $$props, { iconNode }), {}, {
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
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "info" }, $$props, { iconNode }), {}, {
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
const Map_pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "map-pin" }, $$props, { iconNode }), {}, {
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
const Pie_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M21.21 15.89A10 10 0 1 1 8 2.83" }],
    ["path", { "d": "M22 12A10 10 0 0 0 12 2v10z" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "pie-chart" }, $$props, { iconNode }), {}, {
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
const Smartphone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "20",
        "x": "5",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M12 18h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "smartphone" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sparkles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      }
    ],
    ["path", { "d": "M20 3v4" }],
    ["path", { "d": "M22 5h-4" }],
    ["path", { "d": "M4 17v2" }],
    ["path", { "d": "M5 18H3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "sparkles" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Trending_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "22 7 13.5 15.5 8.5 10.5 2 17" }],
    ["polyline", { "points": "16 7 22 7 22 13" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "trending-up" }, $$props, { iconNode }), {}, {
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
const ptBR = {
  app: {
    title: "Physical Fitness",
    subtitle: "Monitoramento de Atividades & Auditoria Telemétrica com Validação Inteligente",
    badge: "Cyber 2.0",
    pageTitle: "Physical Fitness • Monitoramento & Telemetria Futurista",
    backendError: "Não foi possível carregar as métricas do servidor .NET. Verifique se o backend está em execução na porta 5005.",
    retry: "Tentar novamente"
  },
  header: {
    connectWatch: "Conectar Relógio",
    connectedWatch: "{name} (Conectado)",
    connectWatchTitle: "Conectar relógio e puxar histórico",
    refresh: "Atualizar",
    refreshTitle: "Atualizar dados",
    importGpx: "Importar (.GPX)",
    connected: "Conectado",
    language: "Idioma"
  },
  kpis: {
    validatedKm: "KM Validado • GPS",
    intact: "Íntegro",
    watchKm: "Relógio: {km} km",
    haversineActive: "Haversine Ativo",
    metabolicExpenditure: "Gasto Metabólico",
    avgWorkoutKcal: "Média: {kcal} kcal/treino",
    activeRate: "Taxa Ativa",
    bioFrequency: "Bio-Frequência",
    peakBpm: "Pico: {bpm} bpm",
    zone3Aerobic: "Zona 3 Aeróbica",
    neuralAudit: "Auditoria Neural",
    validCount: "{count} Válidos",
    suspectCount: "{count} Susp.",
    rejectedCount: "{count} Rej."
  },
  analytics: {
    globalTelemetry: "Telemetria Global & Eficiência Telemétrica",
    online: "ONLINE",
    sensorsAuditDesc: "Auditoria de sensores inerciais, satélites GPS e dispersão de dados",
    overallScore: "Score Geral: {score}%",
    trajectoryFidelity: "Fidelidade de Trajetória (GPS Haversine vs Pedometer Wearable)",
    elevationCorrection: "Aferição com correção de elevação & desvios satelitais",
    percentIntact: "{pct}% íntegro",
    timeInAction: "Tempo em Ação",
    totalDuration: "Duração Total",
    avgSpeed: "Velocidade Média",
    routeGeneral: "Geral no Percurso",
    cardiacPeak: "Pico Cardíaco",
    maxEffort: "Esforço Máximo",
    wearable: "Wearable",
    synchronized: "Sincronizado",
    fraudProtocol: "Protocolo de detecção de fraudes & telemetria veicular ativo",
    cryptoSecurity: "Segurança Criptográfica de Dados"
  },
  pieChart: {
    title: "Distribuição Telemétrica",
    subtitle: "Infográfico de proporção e auditoria",
    tabAudit: "Auditoria",
    tabModalities: "Modalidades",
    audited: "AUDITADAS",
    total: "TOTAL",
    activities: "Atividades",
    workouts: "Treinos",
    empty: "Nenhuma atividade registrada",
    footerInfo: "Fórmula de Validação GPS Haversine + Wearable",
    realTime: "Tempo Real"
  },
  routeMap: {
    route: "Percurso",
    satellite: "Satélite",
    satelliteTitle: "Google Maps Satélite Real",
    terrain: "Terreno",
    terrainTitle: "Google Maps Terreno com Relevo",
    streets: "Ruas",
    streetsTitle: "Mapa Urbano",
    noGpsTitle: "Sem Registro de GPS no Dispositivo",
    noGpsDesc: "O treino {title} foi realizado em ambiente fechado/estacionário. O relógio registrou biometria e esforço, mas não gravou coordenadas de GPS no arquivo do Mi Fitness.",
    bioTelemetryValid: "Telemetria Biológica 100% Válida",
    deviceLocation: "Localização do Dispositivo",
    realData: "DADOS REAIS",
    coordinates: "Coordenadas: {lat}, {lon}",
    trackPoints: "• {count} pontos de trajeto",
    popupLocation: "Localização Obtida do Dispositivo",
    popupActivity: "Atividade:",
    popupHeartRate: "Frequência Cardíaca:",
    popupSpeed: "Velocidade:",
    popupStart: "Ponto Inicial (Relógio)",
    popupEnd: "Ponto Final (Relógio)"
  },
  details: {
    workoutDetails: "Detalhamento do Treino",
    dayAndDate: "Dia e Data:",
    timeAndDuration: "Horário & Duração:",
    distanceIndoor: "Distância (Indoor)",
    validatedKm: "KM Validado",
    staticGym: "Estático em Academia",
    ofKm: "de {km} km",
    caloriesBurned: "Calorias Gastas",
    energyExpenditure: "Gasto Energético",
    metabolicFocus: "Foco Metabólico",
    avgPace: "Ritmo Médio",
    hypertrophy: "Hipertrofia",
    anaerobicDemand: "Demanda Anaeróbica",
    heartRate: "Frequência Cardíaca",
    peakHeartRate: "Pico: {bpm} bpm",
    analysisReportTitle: "Parecer da Análise Telemétrica",
    openAuditReport: "Abrir Laudo de Auditoria",
    selectToInspect: "Selecione uma atividade para inspecionar"
  },
  table: {
    title: "Histórico de Atividades Físicas",
    subtitle: "Atividades sincronizadas de relógios inteligentes e pulseiras com auditoria de integridade",
    totalCount: "Total: {count} atividades",
    colDateTime: "Dia / Data / Hora",
    colActivityDevice: "Atividade & Dispositivo",
    colWatchKm: "KM Relógio",
    colValidatedKm: "KM Validado",
    colPaceFocus: "Ritmo / Foco",
    colCalories: "Calorias",
    colHeartRate: "Batimentos",
    colStatus: "Status",
    colActions: "Ações",
    atTime: "às",
    hypertrophy: "Hipertrofia",
    indoor: "Indoor",
    max: "máx",
    showMapTooltip: "Exibir percurso / localização no mapa",
    showAuditTooltip: "Ver laudo detalhado da atividade",
    emptyTitle: "Nenhuma atividade importada ainda",
    emptyDesc: "Para visualizar seus treinos reais e validar a quilometragem, conecte seu Xiaomi Mi Band 10 via Bluetooth ou importe o arquivo .GPX do app Mi Fitness ou Samsung Health.",
    btnConnectBluetooth: "Conectar Bluetooth",
    btnImportGpx: "Importar Arquivo (.GPX)"
  },
  status: {
    valid: "KM VÁLIDO",
    suspect: "SUSPEITO",
    rejected: "REJEITADO",
    pending: "PENDENTE"
  },
  activityTypes: {
    strengthTraining: "Musculação",
    running: "Corrida",
    cycling: "Ciclismo",
    walking: "Caminhada",
    treadmill: "Esteira",
    other: "Outro"
  },
  auditModal: {
    title: "Laudo de Auditoria da Atividade",
    id: "ID: {id}",
    atTime: "às",
    watchKm: "KM Relógio",
    gpsKm: "KM Geodésico GPS",
    approvedKm: "KM Aprovado",
    discrepancy: "Discrepância",
    heartRate: "Frequência Cardíaca",
    avg: "Méd:",
    max: "Máx:",
    calories: "Calorias Gastas",
    paceAndSpeed: "Ritmo e Vel.",
    diagnosticTitle: "Diagnóstico e Parecer da Análise",
    criteriaTitle: "Detalhamento dos Critérios de Integridade e Biometria",
    rulePrefix: "Regra: {rule}",
    noViolations: "Nenhuma violação identificada. Todos os testes fisiológicos e geodésicos foram cumpridos integralmente.",
    revalidating: "Revalidando...",
    revalidateBtn: "Reavaliar Atividade",
    closeBtn: "Fechar"
  },
  bluetoothModal: {
    title: "Sincronização Xiaomi Mi Band 10 & Wearables",
    subtitle: "Solução para compatibilidade direta no desktop e celular",
    bannerNotice: "Por que o Mi Band 10 não conecta direto no PC? A Xiaomi utiliza criptografia proprietária (HyperOS) com chave AES vinculada exclusivamente ao app Mi Fitness no celular. Abaixo você tem a integração oficial com Health Connect / Google Fit para sincronizar tudo sem falhas!",
    tabGoogleFit: "Google Fit / Health Connect",
    tabQuickSync: "Sincronização Rápida",
    tabMobileWifi: "Abrir no Celular",
    tabGpxGuide: "Exportar Mi Fitness",
    tabWebBle: "Bluetooth BLE",
    gfitBadge: "RECOMENDADO • SEM FALHAS",
    gfitTitle: "Sincronização via Health Connect & Google Fit",
    gfitDesc: "O app Xiaomi Mi Fitness possui integração nativa e gratuita com o Google Health Connect e Google Fit. Todos os dados medidos pela sua Mi Band 10 (rotas GPS, batimentos cardíacos, calorias e passos) são sincronizados na nuvem gratuitamente e consumidos aqui pelo nosso back-end!",
    gfitStep1Title: "1. No celular, abra o Mi Fitness",
    gfitStep1Desc: "Toque em Perfil -> Aplicativos Conectados -> Ative Health Connect / Google Fit.",
    gfitStep2Title: "2. Conceda as Permissões",
    gfitStep2Desc: "Marque todas as opções: Atividades físicas, Frequência cardíaca, Distância e Localização.",
    gfitStep3Title: "3. Sincronize com o Dashboard",
    gfitStep3Desc: "Clique no botão abaixo para consultar a API e importar os treinos validados instantaneamente.",
    gfitBtnSyncNow: "Sincronizar Treinos via Google Fit / Health Connect",
    gfitBtnSyncing: "Consultando API e Validando Telemetria...",
    gfitTokenPlaceholder: "Token OAuth 2.0 (opcional - deixe em branco para telemetria direta)",
    gfitTokenOptional: "Modo Direto & Gratuito ativo: não precisa configurar chaves do Google Cloud para sincronizar.",
    gfitZeroConfigNotice: "Integração pronta para uso! Seus treinos sincronizados serão validados pelas regras de Haversine e batimento cardíaco.",
    gfitSuccessMsg: "{count} treino(s) sincronizado(s) com sucesso via Google Fit / Health Connect!",
    gfitErrorMsg: "Falha ao sincronizar via Google Fit / Health Connect.",
    gfitFreeApiNotice: "API Gratuita Google Fit & Health Connect integrada ao back-end .NET 8",
    presetsTitle: "⚡ Preenchimento Rápido por Modelo de Treino:",
    presetStrength: "🏋️ Musculação",
    presetStrengthSub: "50m • 385 kcal",
    presetRun: "🏃 Corrida 5K",
    presetRunSub: "30m • 5.2 km",
    presetCycling: "🚴 Ciclismo",
    presetCyclingSub: "45m • 15.5 km",
    presetWalk: "🚶 Caminhada",
    presetWalkSub: "40m • 3.2 km",
    screenFormTitle: "Dados exibidos na tela da sua Mi Band 10",
    lblActType: "Tipo de Atividade:",
    optStrength: "Musculação (Treino de Força / Hipertrofia)",
    optRun: "Corrida (Outdoor / Rua)",
    optTreadmill: "Esteira (Indoor)",
    optCycling: "Ciclismo",
    optWalk: "Caminhada",
    lblDuration: "Duração do Treino (minutos):",
    lblAvgHr: "Frequência Cardíaca Média (BPM):",
    lblCalories: "Calorias Queimadas (kcal):",
    lblDistance: "Quilometragem Percorrida (KM reportado pela pulseira):",
    distPlaceholder: "0.00 para treinos indoor / musculação",
    btnSyncing: "Sincronizando com Auditoria Telemétrica...",
    btnSyncNow: "Sincronizar Telemetria da Mi Band 10 Agora",
    syncSuccess: "Treino de {type} da Mi Band 10 registrado e validado com sucesso!",
    syncError: "Erro ao sincronizar dados da Mi Band 10.",
    mobileTitle: "Abra o Dashboard Direto no seu Smartphone",
    mobileDesc: "O servidor Vite do projeto já está rodando em modo aberto (0.0.0.0:5173). Você não precisa esperar o deploy do app mobile na Google Play ou App Store!",
    qrAlt: "QR Code para abrir no celular",
    orTypeBrowser: "Ou digite no navegador do seu celular (mesmo Wi-Fi):",
    copied: "Copiado!",
    copy: "Copiar",
    gpxGuideTitle: "Como exportar o treino real do app Mi Fitness",
    gpxGuideSubtitle: "Processo direto no app oficial da Xiaomi",
    gpxStep1: "No celular, abra o app Mi Fitness (onde a sua Mi Band 10 já está conectada).",
    gpxStep2: "Vá na aba Treinos ou Histórico e abra o treino que você realizou com a pulseira.",
    gpxStep3: "Toque no ícone de três pontinhos (...) ou no botão de compartilhar no topo direito da tela.",
    gpxStep4: "Selecione Exportar dados do treino e escolha o formato .GPX ou .TCX.",
    gpxStep5: "Envie o arquivo para o computador (via WhatsApp Web, Drive ou Telegram) e importe abaixo:",
    openGpxImporterBtn: "Abrir Importador de Arquivo (.GPX)",
    bleErrorSupport: "Seu navegador não possui suporte à Web Bluetooth API. No Brave, abra brave://flags e ative #enable-web-bluetooth, ou utilize o Microsoft Edge / Google Chrome onde funciona nativamente.",
    bleXiaomiNotice: 'Aparelhos Xiaomi não aceitam pareamento direto com PC sem o token móvel. Use a aba "Sincronização Rápida" para registrar os dados.',
    bleGattTitle: "Escaneamento Web Bluetooth GATT",
    bleGattDesc: "Compatível com cintas cardíacas (Polar H10, Garmin HRM) e sensores abertos BLE.",
    bleAll: "Todos BLE",
    bleHr: "Sensor Cardíaco",
    bleScanning: "Aguardando Seleção no Navegador...",
    bleStartScan: "Iniciar Busca de Dispositivos BLE",
    bleConnected: "Conectado via GATT",
    bleDisconnect: "Desconectar",
    registeredWorkoutsTitle: "Treinos Registrados ({count})",
    noWorkoutsYet: "Nenhum treino registrado ainda.",
    footerDirectSync: "Sincronização direta de telemetria ativa",
    footerHub: "Physical Fitness Hub",
    closeBtn: "Fechar"
  },
  importModal: {
    title: "Importar Treino Real da Mi Band 10",
    subtitle: "Compatível com Mi Fitness (Xiaomi) e Samsung Health",
    tabUpload: "Fazer Upload (.GPX / .TCX)",
    tabMiFitness: "Exportar do Mi Fitness",
    tabSamsung: "Samsung Health",
    sourceDeviceLabel: "Dispositivo de Origem do Arquivo:",
    fileInputLabel: "Arquivo de Treino Exportado:",
    dropzonePrompt: "Toque para selecionar o arquivo .GPX / .TCX",
    dropzoneSub: "No celular, escolha direto da pasta Downloads",
    readyValidation: "Pronto para validação",
    btnProcessing: "Processando Telemetria GPS...",
    btnValidateSave: "Validar e Salvar no Dashboard",
    fileRequiredError: "Por favor, selecione um arquivo .gpx ou .tcx do seu relógio.",
    successMessage: "Treino real do {device} importado e validado com sucesso!",
    mifitnessGuideTitle: "Como exportar o .GPX no Mi Fitness (Xiaomi)",
    mfStep1: "Abra o app Mi Fitness no smartphone.",
    mfStep2: "Vá na aba Treinos e abra a atividade desejada.",
    mfStep3: "No canto superior direito, toque no ícone de três pontinhos (...).",
    mfStep4: "Selecione Exportar dados do treino.",
    mfStep5: "Escolha o formato .GPX (o arquivo é salvo em Downloads).",
    mfStep6: "Volte aqui na aba Fazer Upload e selecione o arquivo.",
    samsungGuideTitle: "Como exportar no Samsung Health",
    samsungStep1: "Abra o app Samsung Health no celular.",
    samsungStep2: "Toque em Exercício e abra o treino realizado.",
    samsungStep3: "Toque nos três pontinhos (...) no topo direito.",
    samsungStep4: "Toque em Exportar como GPX.",
    samsungStep5: "Volte aqui na aba Fazer Upload e anexe o arquivo exportado.",
    footerParser: "Parser Haversine de GPS & Frequência Cardíaca",
    closeBtn: "Fechar"
  }
};
const en = {
  app: {
    title: "Physical Fitness",
    subtitle: "Activity Tracking & Telemetric Audit with Smart Validation",
    badge: "Cyber 2.0",
    pageTitle: "Physical Fitness • Futuristic Monitoring & Telemetry",
    backendError: "Could not load metrics from the .NET server. Please check if the backend is running on port 5005.",
    retry: "Try again"
  },
  header: {
    connectWatch: "Connect Watch",
    connectedWatch: "{name} (Connected)",
    connectWatchTitle: "Connect watch and pull history",
    refresh: "Refresh",
    refreshTitle: "Refresh data",
    importGpx: "Import (.GPX)",
    connected: "Connected",
    language: "Language"
  },
  kpis: {
    validatedKm: "Validated KM • GPS",
    intact: "Valid",
    watchKm: "Watch: {km} km",
    haversineActive: "Active Haversine",
    metabolicExpenditure: "Metabolic Expenditure",
    avgWorkoutKcal: "Avg: {kcal} kcal/workout",
    activeRate: "Active Rate",
    bioFrequency: "Bio-Frequency",
    peakBpm: "Peak: {bpm} bpm",
    zone3Aerobic: "Aerobic Zone 3",
    neuralAudit: "Neural Audit",
    validCount: "{count} Valid",
    suspectCount: "{count} Susp.",
    rejectedCount: "{count} Rej."
  },
  analytics: {
    globalTelemetry: "Global Telemetry & Telemetric Efficiency",
    online: "ONLINE",
    sensorsAuditDesc: "Audit of inertial sensors, GPS satellites and data dispersion",
    overallScore: "Overall Score: {score}%",
    trajectoryFidelity: "Trajectory Fidelity (GPS Haversine vs Wearable Pedometer)",
    elevationCorrection: "Measurement with elevation correction & satellite deviation",
    percentIntact: "{pct}% valid",
    timeInAction: "Active Time",
    totalDuration: "Total Duration",
    avgSpeed: "Average Speed",
    routeGeneral: "Route Average",
    cardiacPeak: "Peak Heart Rate",
    maxEffort: "Maximum Effort",
    wearable: "Wearable",
    synchronized: "Synchronized",
    fraudProtocol: "Fraud detection & vehicular telemetry protocol active",
    cryptoSecurity: "Cryptographic Data Security"
  },
  pieChart: {
    title: "Telemetric Distribution",
    subtitle: "Proportion and audit infographic",
    tabAudit: "Audit",
    tabModalities: "Modalities",
    audited: "AUDITED",
    total: "TOTAL",
    activities: "Activities",
    workouts: "Workouts",
    empty: "No activities recorded",
    footerInfo: "GPS Haversine + Wearable Validation Formula",
    realTime: "Real-Time"
  },
  routeMap: {
    route: "Route",
    satellite: "Satellite",
    satelliteTitle: "Google Maps Real Satellite",
    terrain: "Terrain",
    terrainTitle: "Google Maps Terrain with Relief",
    streets: "Streets",
    streetsTitle: "Urban Streets Map",
    noGpsTitle: "No GPS Record on Device",
    noGpsDesc: "The workout {title} was completed indoors/stationary. The watch recorded biometrics and effort, but did not store GPS coordinates in the Mi Fitness file.",
    bioTelemetryValid: "100% Valid Biological Telemetry",
    deviceLocation: "Device Location",
    realData: "REAL DATA",
    coordinates: "Coordinates: {lat}, {lon}",
    trackPoints: "• {count} track points",
    popupLocation: "Location Obtained from Device",
    popupActivity: "Activity:",
    popupHeartRate: "Heart Rate:",
    popupSpeed: "Speed:",
    popupStart: "Starting Point (Watch)",
    popupEnd: "Ending Point (Watch)"
  },
  details: {
    workoutDetails: "Workout Details",
    dayAndDate: "Day and Date:",
    timeAndDuration: "Time & Duration:",
    distanceIndoor: "Distance (Indoor)",
    validatedKm: "Validated KM",
    staticGym: "Static Gym Workout",
    ofKm: "of {km} km",
    caloriesBurned: "Calories Burned",
    energyExpenditure: "Energy Expenditure",
    metabolicFocus: "Metabolic Focus",
    avgPace: "Average Pace",
    hypertrophy: "Hypertrophy",
    anaerobicDemand: "Anaerobic Demand",
    heartRate: "Heart Rate",
    peakHeartRate: "Peak: {bpm} bpm",
    analysisReportTitle: "Telemetric Analysis Findings",
    openAuditReport: "Open Audit Report",
    selectToInspect: "Select an activity to inspect"
  },
  table: {
    title: "Physical Activity History",
    subtitle: "Activities synchronized from smartwatches and bands with integrity audit",
    totalCount: "Total: {count} activities",
    colDateTime: "Day / Date / Time",
    colActivityDevice: "Activity & Device",
    colWatchKm: "Watch KM",
    colValidatedKm: "Validated KM",
    colPaceFocus: "Pace / Focus",
    colCalories: "Calories",
    colHeartRate: "Heart Rate",
    colStatus: "Status",
    colActions: "Actions",
    atTime: "at",
    hypertrophy: "Hypertrophy",
    indoor: "Indoor",
    max: "max",
    showMapTooltip: "Show route / location on map",
    showAuditTooltip: "View detailed activity report",
    emptyTitle: "No activities imported yet",
    emptyDesc: "To view your real workouts and validate mileage, connect your Xiaomi Mi Band 10 via Bluetooth or import a .GPX file from Mi Fitness or Samsung Health.",
    btnConnectBluetooth: "Connect Bluetooth",
    btnImportGpx: "Import File (.GPX)"
  },
  status: {
    valid: "VALID KM",
    suspect: "SUSPECT",
    rejected: "REJECTED",
    pending: "PENDING"
  },
  activityTypes: {
    strengthTraining: "Strength Training",
    running: "Running",
    cycling: "Cycling",
    walking: "Walking",
    treadmill: "Treadmill",
    other: "Other"
  },
  auditModal: {
    title: "Activity Audit Report",
    id: "ID: {id}",
    atTime: "at",
    watchKm: "Watch KM",
    gpsKm: "Geodetic GPS KM",
    approvedKm: "Approved KM",
    discrepancy: "Discrepancy",
    heartRate: "Heart Rate",
    avg: "Avg:",
    max: "Max:",
    calories: "Calories Burned",
    paceAndSpeed: "Pace & Speed",
    diagnosticTitle: "Diagnosis and Analysis Findings",
    criteriaTitle: "Integrity and Biometrics Criteria Breakdown",
    rulePrefix: "Rule: {rule}",
    noViolations: "No violations detected. All physiological and geodetic criteria were fully met.",
    revalidating: "Revalidating...",
    revalidateBtn: "Revalidate Activity",
    closeBtn: "Close"
  },
  bluetoothModal: {
    title: "Xiaomi Mi Band 10 & Wearables Sync",
    subtitle: "Direct compatibility solution for desktop and mobile",
    bannerNotice: "Why doesn't Mi Band 10 connect directly to PC? Xiaomi uses proprietary HyperOS encryption with an AES key tied exclusively to the Mi Fitness phone app. Below is the official integration with Health Connect / Google Fit to sync seamlessly without failures!",
    tabGoogleFit: "Google Fit / Health Connect",
    tabQuickSync: "Quick Sync",
    tabMobileWifi: "Open on Phone",
    tabGpxGuide: "Export Mi Fitness",
    tabWebBle: "Bluetooth BLE",
    gfitBadge: "RECOMMENDED • NO FAILURES",
    gfitTitle: "Sync via Health Connect & Google Fit",
    gfitDesc: "Xiaomi Mi Fitness app features native and free integration with Google Health Connect and Google Fit. All data recorded by your Mi Band 10 (GPS tracks, heart rate, calories, and steps) syncs to the cloud for free and is consumed here by our backend!",
    gfitStep1Title: "1. On phone, open Mi Fitness",
    gfitStep1Desc: "Tap Profile -> Connected Apps -> Enable Health Connect / Google Fit.",
    gfitStep2Title: "2. Grant Permissions",
    gfitStep2Desc: "Check all options: Physical activities, Heart rate, Distance, and Location.",
    gfitStep3Title: "3. Sync with Dashboard",
    gfitStep3Desc: "Click the button below to query the API and import validated workouts instantly.",
    gfitBtnSyncNow: "Sync Workouts via Google Fit / Health Connect",
    gfitBtnSyncing: "Querying API & Validating Telemetry...",
    gfitTokenPlaceholder: "OAuth 2.0 Token (optional - leave blank for direct telemetry)",
    gfitTokenOptional: "Direct & Free Mode active: no need to configure Google Cloud API keys to sync.",
    gfitZeroConfigNotice: "Ready to use! Your synced workouts will be validated by Haversine and cardiac effort rules.",
    gfitSuccessMsg: "{count} workout(s) synced successfully via Google Fit / Health Connect!",
    gfitErrorMsg: "Failed to sync via Google Fit / Health Connect.",
    gfitFreeApiNotice: "Free Google Fit & Health Connect API integrated into .NET 8 backend",
    presetsTitle: "⚡ Quick Fill by Workout Preset:",
    presetStrength: "🏋️ Strength Training",
    presetStrengthSub: "50m • 385 kcal",
    presetRun: "🏃 5K Run",
    presetRunSub: "30m • 5.2 km",
    presetCycling: "🚴 Cycling",
    presetCyclingSub: "45m • 15.5 km",
    presetWalk: "🚶 Walking",
    presetWalkSub: "40m • 3.2 km",
    screenFormTitle: "Data displayed on your Mi Band 10 screen",
    lblActType: "Activity Type:",
    optStrength: "Strength Training (Hypertrophy / Resistance)",
    optRun: "Running (Outdoor / Road)",
    optTreadmill: "Treadmill (Indoor)",
    optCycling: "Cycling",
    optWalk: "Walking",
    lblDuration: "Workout Duration (minutes):",
    lblAvgHr: "Average Heart Rate (BPM):",
    lblCalories: "Calories Burned (kcal):",
    lblDistance: "Distance Traveled (KM reported by band):",
    distPlaceholder: "0.00 for indoor / strength workouts",
    btnSyncing: "Syncing with Telemetric Audit...",
    btnSyncNow: "Sync Mi Band 10 Telemetry Now",
    syncSuccess: "{type} workout from Mi Band 10 recorded and validated successfully!",
    syncError: "Error syncing Mi Band 10 data.",
    mobileTitle: "Open Dashboard Directly on your Smartphone",
    mobileDesc: "The project's Vite server is already running in open mode (0.0.0.0:5173). You don't need to wait for mobile app deployment to Google Play or App Store!",
    qrAlt: "QR Code to open on mobile",
    orTypeBrowser: "Or type in your phone's browser (same Wi-Fi):",
    copied: "Copied!",
    copy: "Copy",
    gpxGuideTitle: "How to export real workouts from Mi Fitness app",
    gpxGuideSubtitle: "Direct process in Xiaomi official app",
    gpxStep1: "On your phone, open the Mi Fitness app (where your Mi Band 10 is connected).",
    gpxStep2: "Go to Workouts or History tab and open the workout you performed.",
    gpxStep3: "Tap the three dots icon (...) or the share button at top right of the screen.",
    gpxStep4: "Select Export workout data and choose .GPX or .TCX format.",
    gpxStep5: "Send the file to your computer (via WhatsApp Web, Drive, or Telegram) and import below:",
    openGpxImporterBtn: "Open File Importer (.GPX)",
    bleErrorSupport: "Your browser does not support the Web Bluetooth API. In Brave, open brave://flags and enable #enable-web-bluetooth, or use Microsoft Edge / Google Chrome.",
    bleXiaomiNotice: 'Xiaomi devices do not allow direct PC pairing without mobile token. Use "Quick Sync" tab to record data.',
    bleGattTitle: "Web Bluetooth GATT Scanning",
    bleGattDesc: "Compatible with heart rate straps (Polar H10, Garmin HRM) and open BLE sensors.",
    bleAll: "All BLE",
    bleHr: "Heart Rate Sensor",
    bleScanning: "Waiting for Browser Selection...",
    bleStartScan: "Start Searching for BLE Devices",
    bleConnected: "Connected via GATT",
    bleDisconnect: "Disconnect",
    registeredWorkoutsTitle: "Recorded Workouts ({count})",
    noWorkoutsYet: "No workouts recorded yet.",
    footerDirectSync: "Direct telemetry sync active",
    footerHub: "Physical Fitness Hub",
    closeBtn: "Close"
  },
  importModal: {
    title: "Import Real Workout from Mi Band 10",
    subtitle: "Compatible with Mi Fitness (Xiaomi) and Samsung Health",
    tabUpload: "Upload (.GPX / .TCX)",
    tabMiFitness: "Export from Mi Fitness",
    tabSamsung: "Samsung Health",
    sourceDeviceLabel: "Source Device of the File:",
    fileInputLabel: "Exported Workout File:",
    dropzonePrompt: "Tap to select .GPX / .TCX file",
    dropzoneSub: "On mobile, choose directly from Downloads folder",
    readyValidation: "Ready for validation",
    btnProcessing: "Processing GPS Telemetry...",
    btnValidateSave: "Validate and Save to Dashboard",
    fileRequiredError: "Please select a .gpx or .tcx file from your watch.",
    successMessage: "Real workout from {device} imported and validated successfully!",
    mifitnessGuideTitle: "How to export .GPX in Mi Fitness (Xiaomi)",
    mfStep1: "Open the Mi Fitness app on your smartphone.",
    mfStep2: "Go to Workouts tab and open the desired activity.",
    mfStep3: "Tap the three dots icon (...) in the top right corner.",
    mfStep4: "Select Export workout data.",
    mfStep5: "Choose .GPX format (the file is saved to Downloads).",
    mfStep6: "Come back here to Upload tab and select the file.",
    samsungGuideTitle: "How to export in Samsung Health",
    samsungStep1: "Open Samsung Health app on your phone.",
    samsungStep2: "Tap Exercise and open the completed workout.",
    samsungStep3: "Tap the three dots (...) at top right.",
    samsungStep4: "Tap Export as GPX.",
    samsungStep5: "Come back here to Upload tab and attach the exported file.",
    footerParser: "GPS Haversine & Heart Rate Parser",
    closeBtn: "Close"
  }
};
const dictionaries = {
  "pt-BR": ptBR,
  "en": en
};
function getInitialLocale() {
  return "pt-BR";
}
const locale = writable(getInitialLocale());
const t = derived(locale, ($locale) => dictionaries[$locale] || dictionaries["pt-BR"]);
function interpolate(template, params) {
  if (!params || !template) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    return params[key] !== void 0 ? String(params[key]) : `{${key}}`;
  });
}
function formatDate(dateInput, currentLocale, options = { day: "2-digit", month: "long", year: "numeric" }) {
  try {
    const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
    if (isNaN(date.getTime())) return String(dateInput);
    return date.toLocaleDateString(currentLocale === "en" ? "en-US" : "pt-BR", options);
  } catch {
    return String(dateInput);
  }
}
function formatDayOfWeek(dateInput, currentLocale) {
  try {
    const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
    if (isNaN(date.getTime())) return "";
    return date.toLocaleDateString(currentLocale === "en" ? "en-US" : "pt-BR", { weekday: "long" });
  } catch {
    return "";
  }
}
function formatTime(dateInput, currentLocale, includeSeconds = true) {
  try {
    const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
    if (isNaN(date.getTime())) return String(dateInput);
    return date.toLocaleTimeString(currentLocale === "en" ? "en-US" : "pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: includeSeconds ? "2-digit" : void 0,
      hour12: currentLocale === "en"
    });
  } catch {
    return String(dateInput);
  }
}
function translateActivityType(type, currentLocale) {
  if (!type) return currentLocale === "en" ? "Other" : "Outro";
  const lower = type.toLowerCase();
  const dict = dictionaries[currentLocale].activityTypes;
  if (lower.includes("muscula") || lower.includes("strength") || lower.includes("hipertrofia") || lower.includes("força")) {
    return dict.strengthTraining;
  }
  if (lower.includes("corrida") || lower.includes("run")) {
    return dict.running;
  }
  if (lower.includes("ciclismo") || lower.includes("cycl") || lower.includes("bike")) {
    return dict.cycling;
  }
  if (lower.includes("caminhada") || lower.includes("walk")) {
    return dict.walking;
  }
  if (lower.includes("esteira") || lower.includes("treadmill")) {
    return dict.treadmill;
  }
  return type;
}
const DashboardHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale, $$unsubscribe_locale;
  let $t, $$unsubscribe_t;
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { onOpenImportModal } = $$props;
  let { onOpenBluetooth } = $$props;
  let { onRefresh } = $$props;
  let { isRefreshing = false } = $$props;
  let { bluetoothConnectedDevice = null } = $$props;
  let currentTimeStr = "";
  let currentDateStr = "";
  let currentDayOfWeek = "";
  function updateClock() {
    const now = /* @__PURE__ */ new Date();
    currentDateStr = formatDate(now, $locale);
    currentDayOfWeek = formatDayOfWeek(now, $locale);
    currentTimeStr = formatTime(now, $locale, true);
  }
  if ($$props.onOpenImportModal === void 0 && $$bindings.onOpenImportModal && onOpenImportModal !== void 0) $$bindings.onOpenImportModal(onOpenImportModal);
  if ($$props.onOpenBluetooth === void 0 && $$bindings.onOpenBluetooth && onOpenBluetooth !== void 0) $$bindings.onOpenBluetooth(onOpenBluetooth);
  if ($$props.onRefresh === void 0 && $$bindings.onRefresh && onRefresh !== void 0) $$bindings.onRefresh(onRefresh);
  if ($$props.isRefreshing === void 0 && $$bindings.isRefreshing && isRefreshing !== void 0) $$bindings.isRefreshing(isRefreshing);
  if ($$props.bluetoothConnectedDevice === void 0 && $$bindings.bluetoothConnectedDevice && bluetoothConnectedDevice !== void 0) $$bindings.bluetoothConnectedDevice(bluetoothConnectedDevice);
  {
    if ($locale) {
      updateClock();
    }
  }
  $$unsubscribe_locale();
  $$unsubscribe_t();
  return `<header class="border-b border-purple-500/20 bg-[#090317]/80 backdrop-blur-xl sticky top-0 z-30 px-4 sm:px-6 py-3.5 shadow-lg shadow-purple-950/20"><div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4"> <div class="flex items-center gap-3"><div class="relative group"><div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-nubank-600 via-purple-500 to-cyber-cyan p-0.5 shadow-lg shadow-nubank-600/30 group-hover:shadow-purple-500/50 transition-shadow"><div class="w-full h-full bg-[#0a0316] rounded-[10px] flex items-center justify-center text-purple-400">${validate_component(Activity, "Activity").$$render(
    $$result,
    {
      class: "w-6 h-6 text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
    },
    {},
    {}
  )}</div></div>  <span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyber-cyan shadow-[0_0_8px_#00f0ff]"></span></div> <div><div class="flex items-center gap-2"><h1 class="text-xl font-black tracking-tight text-white font-sans flex items-center gap-2"><span class="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">${escape($t.app.title)}</span> <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-nubank-600/20 border border-purple-500/40 text-purple-300 font-bold uppercase tracking-wider">${escape($t.app.badge)}</span></h1> ${bluetoothConnectedDevice ? `<span class="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]">${validate_component(Bluetooth, "Bluetooth").$$render(
    $$result,
    {
      class: "w-3 h-3 text-blue-400 animate-pulse"
    },
    {},
    {}
  )} ${escape(bluetoothConnectedDevice)}</span>` : ``}</div> <p class="text-xs text-purple-300/70 font-sans">${escape($t.app.subtitle)}</p></div></div>  <div class="flex items-center gap-3 bg-slate-950/80 border border-purple-500/20 px-3.5 py-2 rounded-xl text-xs font-mono shadow-inner"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyber-emerald shadow-[0_0_8px_#00ffa3] animate-pulse"></span> <span class="capitalize text-slate-300 font-semibold">${escape(currentDayOfWeek)}</span></div> <div class="w-px h-4 bg-purple-500/20"></div> <div class="text-purple-300/80 text-[11px]">${escape(currentDateStr)}</div> <div class="w-px h-4 bg-purple-500/20"></div> <div class="text-cyber-cyan font-bold text-sm tracking-wider font-mono text-glow-cyan">${escape(currentTimeStr)}</div></div>  <div class="flex items-center gap-2.5 flex-wrap"> <div class="flex items-center bg-slate-950/90 border border-purple-500/30 p-1 rounded-xl shadow-inner font-mono text-[11px]" role="group"${add_attribute("aria-label", $t.header.language, 0)}><button type="button" class="${"px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer " + escape(
    $locale === "pt-BR" ? "bg-gradient-to-r from-nubank-600 to-purple-600 text-white shadow-[0_0_10px_rgba(130,10,209,0.5)] border border-purple-400/40" : "text-slate-400 hover:text-purple-200",
    true
  )}" title="Português (Brasil)"><span data-svelte-h="svelte-10le5dm">🇧🇷</span> <span data-svelte-h="svelte-1ylu0v2">PT</span></button> <button type="button" class="${"px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer " + escape(
    $locale === "en" ? "bg-gradient-to-r from-nubank-600 to-purple-600 text-white shadow-[0_0_10px_rgba(130,10,209,0.5)] border border-purple-400/40" : "text-slate-400 hover:text-purple-200",
    true
  )}" title="English"><span data-svelte-h="svelte-fzu2v8">🇺🇸</span> <span data-svelte-h="svelte-acceqd">EN</span></button></div>  <button type="button" class="${"inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer " + escape(
    bluetoothConnectedDevice ? "bg-purple-950/60 border-purple-400/60 text-purple-200 shadow-[0_0_15px_rgba(130,10,209,0.4)]" : "bg-[#140828] hover:bg-purple-950 text-purple-200 border-purple-500/30 hover:border-purple-400 shadow-md",
    true
  )}"${add_attribute("title", $t.header.connectWatchTitle, 0)}>${validate_component(Bluetooth, "Bluetooth").$$render(
    $$result,
    {
      class: "w-4 h-4 " + (bluetoothConnectedDevice ? "text-cyber-cyan animate-pulse" : "text-purple-400")
    },
    {},
    {}
  )} <span>${escape(bluetoothConnectedDevice ? interpolate($t.header.connectedWatch, { name: bluetoothConnectedDevice }) : $t.header.connectWatch)}</span></button>  <button type="button" ${isRefreshing ? "disabled" : ""} class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-950/70 hover:bg-purple-950/50 border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-all disabled:opacity-50 cursor-pointer"${add_attribute("title", $t.header.refreshTitle, 0)}>${validate_component(Refresh_cw, "RefreshCw").$$render(
    $$result,
    {
      class: "w-3.5 h-3.5 " + (isRefreshing ? "animate-spin text-cyber-cyan" : "text-purple-400")
    },
    {},
    {}
  )} <span class="hidden sm:inline">${escape($t.header.refresh)}</span></button>  <button type="button" class="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-nubank-600 via-purple-600 to-fuchsia-600 hover:from-purple-600 hover:to-nubank-600 rounded-xl shadow-[0_0_20px_rgba(130,10,209,0.4)] hover:shadow-[0_0_25px_rgba(130,10,209,0.6)] transition-all cursor-pointer border border-purple-400/30">${validate_component(Cloud_upload, "UploadCloud").$$render($$result, { class: "w-4 h-4 text-purple-200" }, {}, {})} <span>${escape($t.header.importGpx)}</span></button></div></div></header>`;
});
const css$1 = {
  code: "@keyframes svelte-1a13are-spinSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.animate-spin-slow.svelte-1a13are{animation:svelte-1a13are-spinSlow 30s linear infinite}",
  map: `{"version":3,"file":"PieChart.svelte","sources":["PieChart.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { ShieldCheck, Activity, PieChart as PieIcon, Layers, Info } from \\"lucide-svelte\\";\\nimport { locale, t, translateActivityType } from \\"$lib/i18n\\";\\nexport let validCount = 0;\\nexport let suspectCount = 0;\\nexport let rejectedCount = 0;\\nexport let activities = [];\\nlet mode = \\"status\\";\\nlet hoveredIndex = null;\\n$: slices = computeSlices(mode, validCount, suspectCount, rejectedCount, activities, $locale, $t);\\nfunction computeSlices(currentMode, valid, suspect, rejected, acts, curLocale, trans) {\\n  if (currentMode === \\"status\\") {\\n    const list = [\\n      {\\n        id: \\"valid\\",\\n        label: trans?.status?.valid ?? \\"KM V\\\\xE1lido\\",\\n        value: valid,\\n        color: \\"#00ffa3\\",\\n        // Neon Emerald\\n        glowColor: \\"rgba(0, 255, 163, 0.4)\\",\\n        accentClass: \\"text-cyber-emerald border-emerald-500/30 bg-emerald-500/10\\"\\n      },\\n      {\\n        id: \\"suspect\\",\\n        label: trans?.status?.suspect ?? \\"Suspeito\\",\\n        value: suspect,\\n        color: \\"#ffb800\\",\\n        // Electric Amber\\n        glowColor: \\"rgba(255, 184, 0, 0.4)\\",\\n        accentClass: \\"text-amber-400 border-amber-500/30 bg-amber-500/10\\"\\n      },\\n      {\\n        id: \\"rejected\\",\\n        label: trans?.status?.rejected ?? \\"Rejeitado\\",\\n        value: rejected,\\n        color: \\"#ff007a\\",\\n        // Cyber Pink / Magenta\\n        glowColor: \\"rgba(255, 0, 122, 0.4)\\",\\n        accentClass: \\"text-cyber-pink border-pink-500/30 bg-pink-500/10\\"\\n      }\\n    ];\\n    return list.filter((s) => s.value > 0);\\n  } else {\\n    const counts = {};\\n    acts.forEach((a) => {\\n      const type = a.activityType || \\"Outro\\";\\n      counts[type] = (counts[type] || 0) + 1;\\n    });\\n    const palette = [\\n      { color: \\"#820ad1\\", glow: \\"rgba(130, 10, 209, 0.45)\\", cls: \\"text-purple-400 border-purple-500/30 bg-purple-500/10\\" },\\n      // Nubank Purple\\n      { color: \\"#00f0ff\\", glow: \\"rgba(0, 240, 255, 0.45)\\", cls: \\"text-cyan-400 border-cyan-500/30 bg-cyan-500/10\\" },\\n      // Cyber Cyan\\n      { color: \\"#c084fc\\", glow: \\"rgba(192, 132, 252, 0.45)\\", cls: \\"text-purple-300 border-purple-400/30 bg-purple-500/10\\" },\\n      // Nubank Lilac Light\\n      { color: \\"#00ffa3\\", glow: \\"rgba(0, 255, 163, 0.45)\\", cls: \\"text-emerald-400 border-emerald-500/30 bg-emerald-500/10\\" },\\n      // Neon Emerald\\n      { color: \\"#ffb800\\", glow: \\"rgba(255, 184, 0, 0.45)\\", cls: \\"text-amber-400 border-amber-500/30 bg-amber-500/10\\" },\\n      // Solar Gold\\n      { color: \\"#ff007a\\", glow: \\"rgba(255, 0, 122, 0.45)\\", cls: \\"text-pink-400 border-pink-500/30 bg-pink-500/10\\" }\\n      // Neon Pink\\n    ];\\n    const list = Object.entries(counts).map(([type, count], idx) => {\\n      const pal = palette[idx % palette.length];\\n      const translatedLabel = translateActivityType(type, curLocale);\\n      return {\\n        id: type.toLowerCase(),\\n        label: translatedLabel,\\n        value: count,\\n        color: pal.color,\\n        glowColor: pal.glow,\\n        accentClass: pal.cls\\n      };\\n    });\\n    return list;\\n  }\\n}\\n$: totalValue = slices.reduce((sum, s) => sum + s.value, 0);\\nfunction polarToCartesian(cx, cy, r, angleDeg) {\\n  const rad = (angleDeg - 90) * Math.PI / 180;\\n  return {\\n    x: cx + r * Math.cos(rad),\\n    y: cy + r * Math.sin(rad)\\n  };\\n}\\nfunction describeDonutSlice(cx, cy, innerR, outerR, startAngle, endAngle) {\\n  const angleDiff = Math.min(endAngle - startAngle, 359.99);\\n  const actualEnd = startAngle + angleDiff;\\n  const startOuter = polarToCartesian(cx, cy, outerR, startAngle);\\n  const endOuter = polarToCartesian(cx, cy, outerR, actualEnd);\\n  const startInner = polarToCartesian(cx, cy, innerR, actualEnd);\\n  const endInner = polarToCartesian(cx, cy, innerR, startAngle);\\n  const largeArcFlag = angleDiff <= 180 ? \\"0\\" : \\"1\\";\\n  return [\\n    \\"M\\",\\n    startOuter.x,\\n    startOuter.y,\\n    \\"A\\",\\n    outerR,\\n    outerR,\\n    0,\\n    largeArcFlag,\\n    1,\\n    endOuter.x,\\n    endOuter.y,\\n    \\"L\\",\\n    startInner.x,\\n    startInner.y,\\n    \\"A\\",\\n    innerR,\\n    innerR,\\n    0,\\n    largeArcFlag,\\n    0,\\n    endInner.x,\\n    endInner.y,\\n    \\"Z\\"\\n  ].join(\\" \\");\\n}\\n$: arcPaths = (() => {\\n  if (totalValue === 0) return [];\\n  let accumulatedAngle = 0;\\n  const cx = 100;\\n  const cy = 100;\\n  const innerR = 56;\\n  const outerR = 86;\\n  return slices.map((slice, index) => {\\n    const isHovered = hoveredIndex === index;\\n    const rOuter = isHovered ? outerR + 5 : outerR;\\n    const rInner = isHovered ? innerR - 2 : innerR;\\n    const sliceAngle = slice.value / totalValue * 360;\\n    const startAngle = accumulatedAngle;\\n    const endAngle = accumulatedAngle + sliceAngle;\\n    accumulatedAngle += sliceAngle;\\n    const padding = slices.length > 1 ? 1.5 : 0;\\n    const finalStart = startAngle + padding;\\n    const finalEnd = Math.max(finalStart + 0.1, endAngle - padding);\\n    return {\\n      pathData: describeDonutSlice(cx, cy, rInner, rOuter, finalStart, finalEnd),\\n      slice,\\n      percentage: Math.round(slice.value / totalValue * 100),\\n      startAngle,\\n      endAngle\\n    };\\n  });\\n})();\\n$: activeSlice = hoveredIndex !== null && arcPaths[hoveredIndex] ? arcPaths[hoveredIndex] : null;\\n<\/script>\\n\\n<div class=\\"cyber-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group\\">\\n\\t<!-- Holographic Lilac Ambient Lighting -->\\n\\t<div\\n\\t\\tclass=\\"absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-nubank-600/20 via-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none\\"\\n\\t></div>\\n\\t<div\\n\\t\\tclass=\\"absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr from-cyber-cyan/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none\\"\\n\\t></div>\\n\\n\\t<!-- Header with Mode Selector -->\\n\\t<div class=\\"relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-purple-500/15\\">\\n\\t\\t<div class=\\"flex items-center gap-2.5\\">\\n\\t\\t\\t<div class=\\"w-8 h-8 rounded-lg bg-nubank-600/20 border border-purple-500/30 flex items-center justify-center text-nubank-400 shadow-[0_0_12px_rgba(130,10,209,0.3)]\\">\\n\\t\\t\\t\\t<PieIcon class=\\"w-4 h-4 text-purple-300\\" />\\n\\t\\t\\t</div>\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<h4 class=\\"text-sm font-bold text-white tracking-wide font-sans flex items-center gap-1.5\\">\\n\\t\\t\\t\\t\\t<span>{$t.pieChart.title}</span>\\n\\t\\t\\t\\t\\t<span class=\\"inline-block w-1.5 h-1.5 rounded-full bg-nubank-400 animate-ping\\"></span>\\n\\t\\t\\t\\t</h4>\\n\\t\\t\\t\\t<p class=\\"text-[11px] text-purple-300/70 font-mono\\">{$t.pieChart.subtitle}</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\n\\t\\t<!-- Interactive View Toggle Button -->\\n\\t\\t<div class=\\"flex items-center bg-slate-950/70 p-1 rounded-xl border border-purple-500/20 text-[11px] font-mono\\">\\n\\t\\t\\t<button\\n\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\tclass=\\"px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium {mode === 'status' ? 'bg-gradient-to-r from-nubank-600 to-purple-600 text-white shadow-[0_0_12px_rgba(130,10,209,0.5)] font-bold' : 'text-slate-400 hover:text-slate-200'}\\"\\n\\t\\t\\t\\ton:click={() => { mode = 'status'; hoveredIndex = null; }}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{$t.pieChart.tabAudit}\\n\\t\\t\\t</button>\\n\\t\\t\\t<button\\n\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\tclass=\\"px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium {mode === 'type' ? 'bg-gradient-to-r from-nubank-600 to-purple-600 text-white shadow-[0_0_12px_rgba(130,10,209,0.5)] font-bold' : 'text-slate-400 hover:text-slate-200'}\\"\\n\\t\\t\\t\\ton:click={() => { mode = 'type'; hoveredIndex = null; }}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{$t.pieChart.tabModalities}\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<!-- Chart Graphic & Central Telemetry Readout -->\\n\\t<div class=\\"relative z-10 flex flex-col md:flex-row items-center justify-around gap-6 my-4\\">\\n\\t\\t<!-- SVG Donut Chart with Cyber HUD -->\\n\\t\\t<div class=\\"relative w-52 h-52 shrink-0 flex items-center justify-center\\">\\n\\t\\t\\t<!-- Outer Futuristic Orbit Ring -->\\n\\t\\t\\t<div class=\\"absolute inset-0 rounded-full border border-dashed border-purple-500/20 animate-spin-slow pointer-events-none\\" style=\\"animation-duration: 40s;\\"></div>\\n\\t\\t\\t\\n\\t\\t\\t<svg viewBox=\\"0 0 200 200\\" class=\\"w-full h-full transform -rotate-90\\">\\n\\t\\t\\t\\t<defs>\\n\\t\\t\\t\\t\\t<filter id=\\"glow-effect\\" x=\\"-20%\\" y=\\"-20%\\" width=\\"140%\\" height=\\"140%\\">\\n\\t\\t\\t\\t\\t\\t<feGaussianBlur stdDeviation=\\"3\\" result=\\"blur\\" />\\n\\t\\t\\t\\t\\t\\t<feComposite in=\\"SourceGraphic\\" in2=\\"blur\\" operator=\\"over\\" />\\n\\t\\t\\t\\t\\t</filter>\\n\\t\\t\\t\\t</defs>\\n\\n\\t\\t\\t\\t<!-- Empty State Circle -->\\n\\t\\t\\t\\t{#if totalValue === 0}\\n\\t\\t\\t\\t\\t<circle\\n\\t\\t\\t\\t\\t\\tcx=\\"100\\"\\n\\t\\t\\t\\t\\t\\tcy=\\"100\\"\\n\\t\\t\\t\\t\\t\\tr=\\"70\\"\\n\\t\\t\\t\\t\\t\\tfill=\\"transparent\\"\\n\\t\\t\\t\\t\\t\\tstroke=\\"#2e1065\\"\\n\\t\\t\\t\\t\\t\\tstroke-width=\\"26\\"\\n\\t\\t\\t\\t\\t\\topacity=\\"0.4\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t<!-- Interactive Slices -->\\n\\t\\t\\t\\t{#each arcPaths as arc, i}\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-mouse-events-have-key-events -->\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\trole=\\"img\\"\\n\\t\\t\\t\\t\\t\\taria-label=\\"{arc.slice.label}: {arc.slice.value}\\"\\n\\t\\t\\t\\t\\t\\td={arc.pathData}\\n\\t\\t\\t\\t\\t\\tfill={arc.slice.color}\\n\\t\\t\\t\\t\\t\\tstroke=\\"#0a0316\\"\\n\\t\\t\\t\\t\\t\\tstroke-width=\\"1.5\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"transition-all duration-300 cursor-pointer\\"\\n\\t\\t\\t\\t\\t\\tstyle=\\"filter: {hoveredIndex === i ? \`drop-shadow(0 0 10px \${arc.slice.glowColor})\` : 'none'}; opacity: {hoveredIndex === null || hoveredIndex === i ? '1' : '0.45'};\\"\\n\\t\\t\\t\\t\\t\\ton:mouseenter={() => (hoveredIndex = i)}\\n\\t\\t\\t\\t\\t\\ton:mouseleave={() => (hoveredIndex = null)}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{/each}\\n\\n\\t\\t\\t\\t<!-- Inner Subtle HUD Circle -->\\n\\t\\t\\t\\t<circle\\n\\t\\t\\t\\t\\tcx=\\"100\\"\\n\\t\\t\\t\\t\\tcy=\\"100\\"\\n\\t\\t\\t\\t\\tr=\\"52\\"\\n\\t\\t\\t\\t\\tfill=\\"#0a0316\\"\\n\\t\\t\\t\\t\\tstroke=\\"rgba(168, 85, 247, 0.2)\\"\\n\\t\\t\\t\\t\\tstroke-width=\\"1\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</svg>\\n\\n\\t\\t\\t<!-- Donut Hole Interactive Information HUD -->\\n\\t\\t\\t<div class=\\"absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none select-none p-4\\">\\n\\t\\t\\t\\t{#if activeSlice}\\n\\t\\t\\t\\t\\t<span class=\\"text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold truncate max-w-[90px]\\">\\n\\t\\t\\t\\t\\t\\t{activeSlice.slice.label}\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t<div class=\\"text-2xl font-black font-mono text-white text-glow-nubank leading-tight\\">\\n\\t\\t\\t\\t\\t\\t{activeSlice.slice.value}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<span class=\\"text-[11px] font-mono font-bold text-cyber-cyan\\">\\n\\t\\t\\t\\t\\t\\t{activeSlice.percentage}%\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<span class=\\"text-[9px] font-mono uppercase tracking-widest text-slate-400\\">\\n\\t\\t\\t\\t\\t\\t{mode === 'status' ? $t.pieChart.audited : $t.pieChart.total}\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t<div class=\\"text-2xl font-black font-mono text-white tracking-tight text-glow-nubank leading-tight\\">\\n\\t\\t\\t\\t\\t\\t{totalValue}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<span class=\\"text-[10px] font-mono text-purple-300 font-medium\\">\\n\\t\\t\\t\\t\\t\\t{mode === 'status' ? $t.pieChart.activities : $t.pieChart.workouts}\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\n\\t\\t<!-- Slices Legend List with Cyber Lilac & Neon Badges -->\\n\\t\\t<div class=\\"flex-1 w-full space-y-2\\">\\n\\t\\t\\t{#if slices.length === 0}\\n\\t\\t\\t\\t<div class=\\"p-3 text-center text-xs text-slate-400 font-mono\\">\\n\\t\\t\\t\\t\\t{$t.pieChart.empty}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<div class=\\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2\\">\\n\\t\\t\\t\\t\\t{#each slices as slice, i}\\n\\t\\t\\t\\t\\t\\t{@const pct = totalValue > 0 ? Math.round((slice.value / totalValue) * 100) : 0}\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-mouse-events-have-key-events -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\trole=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer {hoveredIndex === i ? 'border-purple-400 bg-purple-950/40 shadow-[0_0_15px_rgba(130,10,209,0.3)]' : 'border-purple-500/15 bg-slate-950/40 hover:bg-slate-950/70'}\\"\\n\\t\\t\\t\\t\\t\\t\\ton:mouseenter={() => (hoveredIndex = i)}\\n\\t\\t\\t\\t\\t\\t\\ton:mouseleave={() => (hoveredIndex = null)}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex items-center gap-2 min-w-0\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"w-3 h-3 rounded-full shrink-0 shadow-sm transition-transform duration-300 {hoveredIndex === i ? 'scale-125' : ''}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"background-color: {slice.color}; box-shadow: 0 0 8px {slice.glowColor};\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t></span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"text-xs font-medium text-slate-200 truncate\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{slice.label}\\n\\t\\t\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"flex items-center gap-2 font-mono shrink-0\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"text-xs font-bold text-white\\">{slice.value}</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"text-[10px] px-1.5 py-0.5 rounded-md font-semibold {slice.accentClass}\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{pct}%\\n\\t\\t\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<!-- Bottom Infographic Status Footer -->\\n\\t<div class=\\"relative z-10 pt-3 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-purple-300/80\\">\\n\\t\\t<div class=\\"flex items-center gap-1.5\\">\\n\\t\\t\\t<ShieldCheck class=\\"w-3.5 h-3.5 text-cyber-cyan\\" />\\n\\t\\t\\t<span>{$t.pieChart.footerInfo}</span>\\n\\t\\t</div>\\n\\t\\t<span class=\\"text-slate-400\\">{$t.pieChart.realTime}</span>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t@keyframes spinSlow {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: rotate(0deg);\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: rotate(360deg);\\n\\t\\t}\\n\\t}\\n\\t.animate-spin-slow {\\n\\t\\tanimation: spinSlow 30s linear infinite;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuUC,WAAW,uBAAS,CACnB,IAAK,CACJ,SAAS,CAAE,OAAO,IAAI,CACvB,CACA,EAAG,CACF,SAAS,CAAE,OAAO,MAAM,CACzB,CACD,CACA,iCAAmB,CAClB,SAAS,CAAE,uBAAQ,CAAC,GAAG,CAAC,MAAM,CAAC,QAChC"}`
};
function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  };
}
function describeDonutSlice(cx, cy, innerR, outerR, startAngle, endAngle) {
  const angleDiff = Math.min(endAngle - startAngle, 359.99);
  const actualEnd = startAngle + angleDiff;
  const startOuter = polarToCartesian(cx, cy, outerR, startAngle);
  const endOuter = polarToCartesian(cx, cy, outerR, actualEnd);
  const startInner = polarToCartesian(cx, cy, innerR, actualEnd);
  const endInner = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArcFlag = angleDiff <= 180 ? "0" : "1";
  return [
    "M",
    startOuter.x,
    startOuter.y,
    "A",
    outerR,
    outerR,
    0,
    largeArcFlag,
    1,
    endOuter.x,
    endOuter.y,
    "L",
    startInner.x,
    startInner.y,
    "A",
    innerR,
    innerR,
    0,
    largeArcFlag,
    0,
    endInner.x,
    endInner.y,
    "Z"
  ].join(" ");
}
const PieChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slices;
  let totalValue;
  let arcPaths;
  let activeSlice;
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  let { validCount = 0 } = $$props;
  let { suspectCount = 0 } = $$props;
  let { rejectedCount = 0 } = $$props;
  let { activities = [] } = $$props;
  let mode = "status";
  let hoveredIndex = null;
  function computeSlices(currentMode, valid, suspect, rejected, acts, curLocale, trans) {
    {
      const list = [
        {
          id: "valid",
          label: trans?.status?.valid ?? "KM Válido",
          value: valid,
          color: "#00ffa3",
          // Neon Emerald
          glowColor: "rgba(0, 255, 163, 0.4)",
          accentClass: "text-cyber-emerald border-emerald-500/30 bg-emerald-500/10"
        },
        {
          id: "suspect",
          label: trans?.status?.suspect ?? "Suspeito",
          value: suspect,
          color: "#ffb800",
          // Electric Amber
          glowColor: "rgba(255, 184, 0, 0.4)",
          accentClass: "text-amber-400 border-amber-500/30 bg-amber-500/10"
        },
        {
          id: "rejected",
          label: trans?.status?.rejected ?? "Rejeitado",
          value: rejected,
          color: "#ff007a",
          // Cyber Pink / Magenta
          glowColor: "rgba(255, 0, 122, 0.4)",
          accentClass: "text-cyber-pink border-pink-500/30 bg-pink-500/10"
        }
      ];
      return list.filter((s) => s.value > 0);
    }
  }
  if ($$props.validCount === void 0 && $$bindings.validCount && validCount !== void 0) $$bindings.validCount(validCount);
  if ($$props.suspectCount === void 0 && $$bindings.suspectCount && suspectCount !== void 0) $$bindings.suspectCount(suspectCount);
  if ($$props.rejectedCount === void 0 && $$bindings.rejectedCount && rejectedCount !== void 0) $$bindings.rejectedCount(rejectedCount);
  if ($$props.activities === void 0 && $$bindings.activities && activities !== void 0) $$bindings.activities(activities);
  $$result.css.add(css$1);
  slices = computeSlices(mode, validCount, suspectCount, rejectedCount, activities, $locale, $t);
  totalValue = slices.reduce((sum, s) => sum + s.value, 0);
  arcPaths = (() => {
    if (totalValue === 0) return [];
    let accumulatedAngle = 0;
    const cx = 100;
    const cy = 100;
    const innerR = 56;
    const outerR = 86;
    return slices.map((slice, index) => {
      const isHovered = hoveredIndex === index;
      const rOuter = isHovered ? outerR + 5 : outerR;
      const rInner = isHovered ? innerR - 2 : innerR;
      const sliceAngle = slice.value / totalValue * 360;
      const startAngle = accumulatedAngle;
      const endAngle = accumulatedAngle + sliceAngle;
      accumulatedAngle += sliceAngle;
      const padding = slices.length > 1 ? 1.5 : 0;
      const finalStart = startAngle + padding;
      const finalEnd = Math.max(finalStart + 0.1, endAngle - padding);
      return {
        pathData: describeDonutSlice(cx, cy, rInner, rOuter, finalStart, finalEnd),
        slice,
        percentage: Math.round(slice.value / totalValue * 100),
        startAngle,
        endAngle
      };
    });
  })();
  activeSlice = null;
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `<div class="cyber-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group"> <div class="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-nubank-600/20 via-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none"></div> <div class="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr from-cyber-cyan/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none"></div>  <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-purple-500/15"><div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-lg bg-nubank-600/20 border border-purple-500/30 flex items-center justify-center text-nubank-400 shadow-[0_0_12px_rgba(130,10,209,0.3)]">${validate_component(Pie_chart, "PieIcon").$$render($$result, { class: "w-4 h-4 text-purple-300" }, {}, {})}</div> <div><h4 class="text-sm font-bold text-white tracking-wide font-sans flex items-center gap-1.5"><span>${escape($t.pieChart.title)}</span> <span class="inline-block w-1.5 h-1.5 rounded-full bg-nubank-400 animate-ping"></span></h4> <p class="text-[11px] text-purple-300/70 font-mono">${escape($t.pieChart.subtitle)}</p></div></div>  <div class="flex items-center bg-slate-950/70 p-1 rounded-xl border border-purple-500/20 text-[11px] font-mono"><button type="button" class="${"px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium " + escape(
    "bg-gradient-to-r from-nubank-600 to-purple-600 text-white shadow-[0_0_12px_rgba(130,10,209,0.5)] font-bold",
    true
  )}">${escape($t.pieChart.tabAudit)}</button> <button type="button" class="${"px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium " + escape(
    "text-slate-400 hover:text-slate-200",
    true
  )}">${escape($t.pieChart.tabModalities)}</button></div></div>  <div class="relative z-10 flex flex-col md:flex-row items-center justify-around gap-6 my-4"> <div class="relative w-52 h-52 shrink-0 flex items-center justify-center"> <div class="absolute inset-0 rounded-full border border-dashed border-purple-500/20 animate-spin-slow pointer-events-none svelte-1a13are" style="animation-duration: 40s;"></div> <svg viewBox="0 0 200 200" class="w-full h-full transform -rotate-90"><defs><filter id="glow-effect" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite></filter></defs>${totalValue === 0 ? `<circle cx="100" cy="100" r="70" fill="transparent" stroke="#2e1065" stroke-width="26" opacity="0.4"></circle>` : ``}${each(arcPaths, (arc, i) => {
    return `  <path role="img" aria-label="${escape(arc.slice.label, true) + ": " + escape(arc.slice.value, true)}"${add_attribute("d", arc.pathData, 0)}${add_attribute("fill", arc.slice.color, 0)} stroke="#0a0316" stroke-width="1.5" class="transition-all duration-300 cursor-pointer" style="${"filter: " + escape(
      hoveredIndex === i ? `drop-shadow(0 0 10px ${arc.slice.glowColor})` : "none",
      true
    ) + "; opacity: " + escape(
      "1",
      true
    ) + ";"}"></path>`;
  })}<circle cx="100" cy="100" r="52" fill="#0a0316" stroke="rgba(168, 85, 247, 0.2)" stroke-width="1"></circle></svg>  <div class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none select-none p-4">${activeSlice ? `<span class="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold truncate max-w-[90px]">${escape(activeSlice.slice.label)}</span> <div class="text-2xl font-black font-mono text-white text-glow-nubank leading-tight">${escape(activeSlice.slice.value)}</div> <span class="text-[11px] font-mono font-bold text-cyber-cyan">${escape(activeSlice.percentage)}%</span>` : `<span class="text-[9px] font-mono uppercase tracking-widest text-slate-400">${escape(
    $t.pieChart.audited
  )}</span> <div class="text-2xl font-black font-mono text-white tracking-tight text-glow-nubank leading-tight">${escape(totalValue)}</div> <span class="text-[10px] font-mono text-purple-300 font-medium">${escape(
    $t.pieChart.activities
  )}</span>`}</div></div>  <div class="flex-1 w-full space-y-2">${slices.length === 0 ? `<div class="p-3 text-center text-xs text-slate-400 font-mono">${escape($t.pieChart.empty)}</div>` : `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">${each(slices, (slice, i) => {
    let pct = totalValue > 0 ? Math.round(slice.value / totalValue * 100) : 0;
    return `   <div role="button" tabindex="0" class="${"flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer " + escape(
      hoveredIndex === i ? "border-purple-400 bg-purple-950/40 shadow-[0_0_15px_rgba(130,10,209,0.3)]" : "border-purple-500/15 bg-slate-950/40 hover:bg-slate-950/70",
      true
    )}"><div class="flex items-center gap-2 min-w-0"><span class="${"w-3 h-3 rounded-full shrink-0 shadow-sm transition-transform duration-300 " + escape(hoveredIndex === i ? "scale-125" : "", true)}" style="${"background-color: " + escape(slice.color, true) + "; box-shadow: 0 0 8px " + escape(slice.glowColor, true) + ";"}"></span> <span class="text-xs font-medium text-slate-200 truncate">${escape(slice.label)} </span></div> <div class="flex items-center gap-2 font-mono shrink-0"><span class="text-xs font-bold text-white">${escape(slice.value)}</span> <span class="${"text-[10px] px-1.5 py-0.5 rounded-md font-semibold " + escape(slice.accentClass, true) + " svelte-1a13are"}">${escape(pct)}%
								</span></div> </div>`;
  })}</div>`}</div></div>  <div class="relative z-10 pt-3 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-purple-300/80"><div class="flex items-center gap-1.5">${validate_component(Shield_check, "ShieldCheck").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-cyan" }, {}, {})} <span>${escape($t.pieChart.footerInfo)}</span></div> <span class="text-slate-400">${escape($t.pieChart.realTime)}</span></div> </div>`;
});
const radius = 34;
const InfographicOverview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalValidatedKm;
  let totalReportedKm;
  let integrityPercentage;
  let totalCalories;
  let totalActivities;
  let avgCaloriesPerWorkout;
  let validCount;
  let suspectCount;
  let rejectedCount;
  let reliabilityPercentage;
  let totalDurationMinutes;
  let totalHoursFormatted;
  let maxHeartRateOverall;
  let avgSpeedOverall;
  let strokeDashoffset;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { metrics = null } = $$props;
  const circumference = 2 * Math.PI * radius;
  if ($$props.metrics === void 0 && $$bindings.metrics && metrics !== void 0) $$bindings.metrics(metrics);
  totalValidatedKm = metrics ? metrics.totalValidatedKm : 0;
  totalReportedKm = metrics ? metrics.totalReportedKm : 0;
  integrityPercentage = totalReportedKm > 0 ? Math.min(100, Math.round(totalValidatedKm / totalReportedKm * 100)) : 100;
  totalCalories = metrics ? metrics.totalCaloriesBurned : 0;
  totalActivities = metrics ? metrics.totalActivitiesCount : 0;
  avgCaloriesPerWorkout = totalActivities > 0 ? Math.round(totalCalories / totalActivities) : 0;
  metrics ? metrics.overallAvgHeartRate : 0;
  validCount = metrics ? metrics.validActivitiesCount : 0;
  suspectCount = metrics ? metrics.suspectActivitiesCount : 0;
  rejectedCount = metrics ? metrics.rejectedActivitiesCount : 0;
  reliabilityPercentage = totalActivities > 0 ? Math.round(validCount / totalActivities * 100) : 100;
  totalDurationMinutes = (metrics?.recentActivities ?? []).reduce(
    (acc, a) => {
      return acc + (a.durationSeconds ? Math.round(a.durationSeconds / 60) : 0);
    },
    0
  );
  totalHoursFormatted = (() => {
    const h = Math.floor(totalDurationMinutes / 60);
    const m = totalDurationMinutes % 60;
    return `${h}h ${m}m`;
  })();
  maxHeartRateOverall = (metrics?.recentActivities ?? []).reduce(
    (max, a) => {
      return a.maxHeartRateBpm > max ? a.maxHeartRateBpm : max;
    },
    0
  );
  avgSpeedOverall = (() => {
    const acts = (metrics?.recentActivities ?? []).filter((a) => a.averageSpeedKmh > 0);
    if (acts.length === 0) return "0.0";
    const sum = acts.reduce((acc, a) => acc + a.averageSpeedKmh, 0);
    return (sum / acts.length).toFixed(1);
  })();
  strokeDashoffset = circumference - integrityPercentage / 100 * circumference;
  $$unsubscribe_t();
  return `   <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> <div class="cyber-card rounded-2xl p-5 relative overflow-hidden group hover:border-purple-400/50"><div class="absolute -top-12 -right-12 w-32 h-32 bg-nubank-600/20 rounded-full blur-xl pointer-events-none"></div> <div class="relative z-10 flex items-start justify-between"><div><span class="text-[11px] font-mono font-bold tracking-wider uppercase text-purple-300/80 flex items-center gap-1.5">${validate_component(Route, "Route").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-cyan" }, {}, {})} <span>${escape($t.kpis.validatedKm)}</span></span> <div class="mt-2 text-3xl font-black font-mono text-white text-glow-nubank tracking-tight">${escape(metrics ? metrics.totalValidatedKm.toFixed(1) : "0.0")} <span class="text-lg font-bold text-purple-300" data-svelte-h="svelte-6t5zeh">km</span></div></div>  <div class="relative w-16 h-16 shrink-0 flex items-center justify-center"><svg class="w-full h-full transform -rotate-90" viewBox="0 0 80 80"><circle cx="40" cy="40"${add_attribute("r", radius, 0)} stroke="rgba(168, 85, 247, 0.15)" stroke-width="6" fill="transparent"></circle><circle cx="40" cy="40"${add_attribute("r", radius, 0)} stroke="url(#purpleCyanGrad)" stroke-width="6"${add_attribute("stroke-dasharray", circumference, 0)}${add_attribute("stroke-dashoffset", strokeDashoffset, 0)} stroke-linecap="round" fill="transparent" class="transition-all duration-1000 ease-out"></circle><defs><linearGradient id="purpleCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#820ad1"></stop><stop offset="50%" stop-color="#a855f7"></stop><stop offset="100%" stop-color="#00f0ff"></stop></linearGradient></defs></svg> <div class="absolute inset-0 flex flex-col items-center justify-center text-center"><span class="text-[11px] font-mono font-black text-white">${escape(integrityPercentage)}%</span> <span class="text-[7px] font-mono uppercase text-purple-300">${escape($t.kpis.intact)}</span></div></div></div>  <div class="relative z-10 mt-3 pt-3 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono"><span class="text-slate-400 text-[11px]">${escape(interpolate($t.kpis.watchKm, {
    km: metrics ? metrics.totalReportedKm.toFixed(1) : "0.0"
  }))}</span> <span class="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-bold">${escape($t.kpis.haversineActive)}</span></div></div>  <div class="cyber-card rounded-2xl p-5 relative overflow-hidden group hover:border-pink-500/40"><div class="absolute -top-12 -right-12 w-32 h-32 bg-cyber-pink/15 rounded-full blur-xl pointer-events-none"></div> <div class="relative z-10 flex items-start justify-between"><div><span class="text-[11px] font-mono font-bold tracking-wider uppercase text-purple-300/80 flex items-center gap-1.5">${validate_component(Flame, "Flame").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-pink" }, {}, {})} <span>${escape($t.kpis.metabolicExpenditure)}</span></span> <div class="mt-2 text-3xl font-black font-mono text-white text-glow-pink tracking-tight">${escape(metrics ? metrics.totalCaloriesBurned.toLocaleString() : "0")} <span class="text-lg font-bold text-pink-300" data-svelte-h="svelte-1kepv7g">kcal</span></div></div> <div class="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-cyber-pink shadow-[0_0_12px_rgba(255,0,122,0.3)]">${validate_component(Zap, "Zap").$$render($$result, { class: "w-5 h-5" }, {}, {})}</div></div>  <div class="relative z-10 mt-3 space-y-1.5"><div class="flex items-center gap-1">${each([1, 2, 3, 4, 5], (bar) => {
    return `<div class="${"h-1.5 flex-1 rounded-full transition-all duration-500 " + escape(
      bar <= 4 ? "bg-gradient-to-r from-nubank-600 to-cyber-pink shadow-[0_0_6px_#ff007a]" : "bg-slate-800",
      true
    )}"></div>`;
  })}</div> <div class="pt-1.5 flex items-center justify-between text-xs font-mono"><span class="text-slate-400 text-[11px]">${escape(interpolate($t.kpis.avgWorkoutKcal, { kcal: avgCaloriesPerWorkout }))}</span> <span class="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 font-bold">${escape($t.kpis.activeRate)}</span></div></div></div>  <div class="cyber-card rounded-2xl p-5 relative overflow-hidden group hover:border-cyan-400/50"><div class="absolute -top-12 -right-12 w-32 h-32 bg-cyber-cyan/15 rounded-full blur-xl pointer-events-none"></div> <div class="relative z-10 flex items-start justify-between"><div><span class="text-[11px] font-mono font-bold tracking-wider uppercase text-purple-300/80 flex items-center gap-1.5">${validate_component(Heart, "Heart").$$render($$result, { class: "w-3.5 h-3.5 text-rose-400" }, {}, {})} <span>${escape($t.kpis.bioFrequency)}</span></span> <div class="mt-2 text-3xl font-black font-mono text-white text-glow-cyan tracking-tight">${escape(metrics ? metrics.overallAvgHeartRate : 0)} <span class="text-lg font-bold text-cyber-cyan" data-svelte-h="svelte-y8akdb">bpm</span></div></div> <div class="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]">${validate_component(Activity, "Activity").$$render($$result, { class: "w-5 h-5 animate-pulse" }, {}, {})}</div></div>  <div class="relative z-10 mt-2"><svg viewBox="0 0 160 28" class="w-full h-7 overflow-visible"><path d="M0,14 L30,14 L38,4 L44,24 L52,8 L58,18 L64,14 L100,14 L108,4 L114,24 L122,8 L128,18 L134,14 L160,14" fill="none" stroke="url(#ecgGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-ecg"></path><defs><linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#820ad1"></stop><stop offset="50%" stop-color="#00f0ff"></stop><stop offset="100%" stop-color="#ff007a"></stop></linearGradient></defs></svg> <div class="pt-1 flex items-center justify-between text-xs font-mono"><span class="text-slate-400 text-[11px]">${escape(interpolate($t.kpis.peakBpm, {
    bpm: maxHeartRateOverall > 0 ? maxHeartRateOverall : 178
  }))}</span> <span class="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyber-cyan font-bold">${escape($t.kpis.zone3Aerobic)}</span></div></div></div>  <div class="cyber-card rounded-2xl p-5 relative overflow-hidden group hover:border-emerald-400/50"><div class="absolute -top-12 -right-12 w-32 h-32 bg-cyber-emerald/15 rounded-full blur-xl pointer-events-none"></div> <div class="relative z-10 flex items-start justify-between"><div><span class="text-[11px] font-mono font-bold tracking-wider uppercase text-purple-300/80 flex items-center gap-1.5">${validate_component(Shield_check, "ShieldCheck").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-emerald" }, {}, {})} <span>${escape($t.kpis.neuralAudit)}</span></span> <div class="mt-2 text-3xl font-black font-mono text-white text-glow-emerald tracking-tight">${escape(validCount)} <span class="text-lg font-bold text-slate-400">/ ${escape(totalActivities)}</span></div></div> <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-cyber-emerald shadow-[0_0_12px_rgba(0,255,163,0.3)]">${validate_component(Radio, "Radio").$$render($$result, { class: "w-5 h-5 animate-pulse" }, {}, {})}</div></div>  <div class="relative z-10 mt-3 pt-3 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono"><div class="flex items-center gap-1.5"><span class="inline-block w-2 h-2 rounded-full bg-cyber-emerald shadow-[0_0_6px_#00ffa3]"></span> <span class="text-[11px] text-cyber-emerald font-bold">${escape(interpolate($t.kpis.validCount, { count: validCount }))}</span></div> <div class="flex items-center gap-1.5"><span class="inline-block w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#ffb800]"></span> <span class="text-[11px] text-amber-300 font-bold">${escape(interpolate($t.kpis.suspectCount, { count: suspectCount }))}</span></div> <div class="flex items-center gap-1.5"><span class="inline-block w-2 h-2 rounded-full bg-cyber-pink shadow-[0_0_6px_#ff007a]"></span> <span class="text-[11px] text-cyber-pink font-bold">${escape(interpolate($t.kpis.rejectedCount, { count: rejectedCount }))}</span></div></div></div></section>    <section class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"> <div class="lg:col-span-5 flex flex-col">${validate_component(PieChart, "PieChart").$$render(
    $$result,
    {
      validCount,
      suspectCount,
      rejectedCount,
      activities: metrics?.recentActivities ?? []
    },
    {},
    {}
  )}</div>  <div class="lg:col-span-7 cyber-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group"> <div class="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-nubank-600/20 via-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>  <div class="relative z-10 flex items-center justify-between pb-3 border-b border-purple-500/15"><div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-lg bg-nubank-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(130,10,209,0.3)]">${validate_component(Cpu, "Cpu").$$render($$result, { class: "w-4 h-4 text-purple-300" }, {}, {})}</div> <div><h4 class="text-sm font-bold text-white tracking-wide font-sans flex items-center gap-2"><span>${escape($t.analytics.globalTelemetry)}</span> <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyber-cyan font-bold">${escape($t.analytics.online)}</span></h4> <p class="text-[11px] text-purple-300/70 font-mono">${escape($t.analytics.sensorsAuditDesc)}</p></div></div> <div class="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-purple-300 bg-slate-950/70 px-2.5 py-1 rounded-lg border border-purple-500/20">${validate_component(Trending_up, "TrendingUp").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-emerald" }, {}, {})} <span>${escape(interpolate($t.analytics.overallScore, { score: reliabilityPercentage }))}</span></div></div>  <div class="relative z-10 my-4 space-y-4"> <div class="p-3.5 rounded-xl bg-slate-950/60 border border-purple-500/15"><div class="flex items-center justify-between text-xs font-mono mb-2"><span class="text-slate-300 font-semibold flex items-center gap-1.5">${validate_component(Route, "Route").$$render($$result, { class: "w-3.5 h-3.5 text-purple-400" }, {}, {})} ${escape($t.analytics.trajectoryFidelity)}</span> <span class="text-cyber-cyan font-bold">${escape(totalValidatedKm.toFixed(1))} km <span class="text-slate-400">/ ${escape(totalReportedKm.toFixed(1))} km</span></span></div>  <div class="h-3 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-purple-500/20 flex gap-0.5"><div class="h-full rounded-full bg-gradient-to-r from-nubank-600 via-purple-500 to-cyber-cyan transition-all duration-1000 shadow-[0_0_10px_rgba(0,240,255,0.5)]" style="${"width: " + escape(integrityPercentage, true) + "%;"}"></div></div> <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-1.5"><span>${escape($t.analytics.elevationCorrection)}</span> <span class="text-purple-300 font-bold">${escape(interpolate($t.analytics.percentIntact, { pct: integrityPercentage }))}</span></div></div>  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5"> <div class="p-3 rounded-xl bg-slate-950/50 border border-purple-500/15"><div class="flex items-center gap-1 text-[10px] font-mono uppercase text-purple-300/80 mb-1">${validate_component(Clock, "Clock").$$render($$result, { class: "w-3 h-3 text-purple-400" }, {}, {})} ${escape($t.analytics.timeInAction)}</div> <div class="text-lg font-black font-mono text-white">${escape(totalHoursFormatted)}</div> <div class="text-[10px] text-slate-400 font-mono">${escape($t.analytics.totalDuration)}</div></div>  <div class="p-3 rounded-xl bg-slate-950/50 border border-purple-500/15"><div class="flex items-center gap-1 text-[10px] font-mono uppercase text-purple-300/80 mb-1">${validate_component(Gauge, "Gauge").$$render($$result, { class: "w-3 h-3 text-cyber-cyan" }, {}, {})} ${escape($t.analytics.avgSpeed)}</div> <div class="text-lg font-black font-mono text-cyber-cyan">${escape(avgSpeedOverall)} <span class="text-xs text-slate-400" data-svelte-h="svelte-1cnsgy5">km/h</span></div> <div class="text-[10px] text-slate-400 font-mono">${escape($t.analytics.routeGeneral)}</div></div>  <div class="p-3 rounded-xl bg-slate-950/50 border border-purple-500/15"><div class="flex items-center gap-1 text-[10px] font-mono uppercase text-purple-300/80 mb-1">${validate_component(Heart, "Heart").$$render($$result, { class: "w-3 h-3 text-rose-400" }, {}, {})} ${escape($t.analytics.cardiacPeak)}</div> <div class="text-lg font-black font-mono text-rose-400">${escape(maxHeartRateOverall > 0 ? maxHeartRateOverall : 178)} <span class="text-xs text-slate-400" data-svelte-h="svelte-1jeak6d">bpm</span></div> <div class="text-[10px] text-slate-400 font-mono">${escape($t.analytics.maxEffort)}</div></div>  <div class="p-3 rounded-xl bg-slate-950/50 border border-purple-500/15"><div class="flex items-center gap-1 text-[10px] font-mono uppercase text-purple-300/80 mb-1">${validate_component(Compass, "Compass").$$render($$result, { class: "w-3 h-3 text-cyber-emerald" }, {}, {})} ${escape($t.analytics.wearable)}</div> <div class="text-sm font-bold font-mono text-white truncate" title="Xiaomi Band 10 / Mi Fitness" data-svelte-h="svelte-10s1581">Band 10 &amp; GPX</div> <div class="text-[10px] text-cyber-emerald font-mono">${escape($t.analytics.synchronized)}</div></div></div></div>  <div class="relative z-10 pt-3 border-t border-purple-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-purple-300/80"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse"></span> <span>${escape($t.analytics.fraudProtocol)}</span></div> <span class="text-slate-400">${escape($t.analytics.cryptoSecurity)}</span></div></div></section>`;
});
const css = {
  code: ".leaflet-container{background-color:#0b1120 !important;font-family:inherit}.leaflet-popup-content-wrapper{background-color:#0f172a !important;color:#f8fafc !important;border:1px solid #334155 !important;border-radius:8px !important;font-size:11px !important;font-family:monospace}.leaflet-popup-tip{background-color:#0f172a !important}",
  map: '{"version":3,"file":"RouteMap.svelte","sources":["RouteMap.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount, onDestroy } from \\"svelte\\";\\nimport { browser } from \\"$app/environment\\";\\nimport { t, interpolate } from \\"$lib/i18n\\";\\nimport {\\n  Navigation,\\n  Layers,\\n  MapPin,\\n  Dumbbell,\\n  Mountain,\\n  Satellite,\\n  Map as MapIcon,\\n  AlertCircle,\\n  ShieldAlert\\n} from \\"lucide-svelte\\";\\nexport let routePoints = [];\\nexport let activityTitle = \\"Percurso\\";\\nexport let status = \\"Valid\\";\\nexport let activityType = \\"Corrida\\";\\nlet mapContainer;\\nlet mapInstance = null;\\nlet polylineLayer = null;\\nlet markersLayer = null;\\nlet currentBaseLayer = null;\\nlet activeLayerType = \\"satellite\\";\\nconst mapLayers = {\\n  satellite: \\"https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}\\",\\n  terrain: \\"https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}\\",\\n  streets: \\"https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}\\"\\n};\\n$: hasGpsData = routePoints && routePoints.length > 0;\\n$: if (browser && mapInstance && (routePoints || activeLayerType || activityTitle || $t)) {\\n  renderRoute();\\n}\\nasync function switchLayer(type) {\\n  if (!browser || !mapInstance) return;\\n  activeLayerType = type;\\n  const L = await import(\\"leaflet\\");\\n  if (currentBaseLayer) {\\n    mapInstance.removeLayer(currentBaseLayer);\\n  }\\n  currentBaseLayer = L.tileLayer(mapLayers[type], {\\n    maxZoom: 20,\\n    subdomains: [\\"mt0\\", \\"mt1\\", \\"mt2\\", \\"mt3\\"],\\n    attribution: \\"\\\\xA9 Google Maps\\"\\n  }).addTo(mapInstance);\\n}\\nasync function initMap() {\\n  if (!browser || !mapContainer) return;\\n  const L = await import(\\"leaflet\\");\\n  if (mapInstance) {\\n    mapInstance.remove();\\n  }\\n  const initialLat = routePoints.length > 0 ? routePoints[0].latitude : -14.235;\\n  const initialLon = routePoints.length > 0 ? routePoints[0].longitude : -51.9253;\\n  const initialZoom = routePoints.length > 0 ? 16 : 4;\\n  mapInstance = L.map(mapContainer, {\\n    attributionControl: false,\\n    zoomControl: true\\n  }).setView([initialLat, initialLon], initialZoom);\\n  currentBaseLayer = L.tileLayer(mapLayers[activeLayerType], {\\n    maxZoom: 20,\\n    subdomains: [\\"mt0\\", \\"mt1\\", \\"mt2\\", \\"mt3\\"]\\n  }).addTo(mapInstance);\\n  markersLayer = L.layerGroup().addTo(mapInstance);\\n  polylineLayer = L.layerGroup().addTo(mapInstance);\\n  renderRoute();\\n}\\nasync function renderRoute() {\\n  if (!browser || !mapInstance) return;\\n  const L = await import(\\"leaflet\\");\\n  markersLayer.clearLayers();\\n  polylineLayer.clearLayers();\\n  if (!routePoints || routePoints.length === 0) {\\n    return;\\n  }\\n  if (routePoints.length === 1) {\\n    const pt = routePoints[0];\\n    const strokeColor2 = status?.toLowerCase() === \\"valid\\" ? \\"#10b981\\" : status?.toLowerCase() === \\"suspect\\" ? \\"#f59e0b\\" : \\"#ef4444\\";\\n    const markerIcon = L.divIcon({\\n      className: \\"device-location-marker\\",\\n      html: `\\n\\t\\t\\t\\t\\t<div style=\\"position: relative; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;\\">\\n\\t\\t\\t\\t\\t\\t<span style=\\"position: absolute; width: 100%; height: 100%; border-radius: 50%; background: ${strokeColor2}40; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;\\"></span>\\n\\t\\t\\t\\t\\t\\t<div style=\\"width: 32px; height: 32px; border-radius: 50%; background: ${strokeColor2}; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 14px ${strokeColor2}; color: white; font-weight: bold; font-size: 14px;\\">\\n\\t\\t\\t\\t\\t\\t\\t\\\\u{1F4CD}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t`,\\n      iconSize: [40, 40],\\n      iconAnchor: [20, 20]\\n    });\\n    L.marker([pt.latitude, pt.longitude], { icon: markerIcon }).bindPopup(`\\n\\t\\t\\t\\t\\t<div style=\\"font-family: monospace; font-size: 12px; line-height: 1.5;\\">\\n\\t\\t\\t\\t\\t\\t<b style=\\"color: #38bdf8;\\">${$t.routeMap.popupLocation}</b><br>\\n\\t\\t\\t\\t\\t\\t<b>${$t.routeMap.popupActivity}</b> ${activityTitle}<br>\\n\\t\\t\\t\\t\\t\\t<b>Lat:</b> ${pt.latitude.toFixed(6)}<br>\\n\\t\\t\\t\\t\\t\\t<b>Lon:</b> ${pt.longitude.toFixed(6)}<br>\\n\\t\\t\\t\\t\\t\\t${pt.heartRateBpm ? `<b>${$t.routeMap.popupHeartRate}</b> ${pt.heartRateBpm} BPM<br>` : \\"\\"}\\n\\t\\t\\t\\t\\t\\t${pt.instantSpeedKmh > 0 ? `<b>${$t.routeMap.popupSpeed}</b> ${pt.instantSpeedKmh} km/h` : \\"\\"}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t`).addTo(markersLayer);\\n    mapInstance.flyTo([pt.latitude, pt.longitude], 17, { duration: 1 });\\n    return;\\n  }\\n  const latLngs = routePoints.map((p) => [p.latitude, p.longitude]);\\n  const strokeColor = status?.toLowerCase() === \\"valid\\" ? \\"#10b981\\" : status?.toLowerCase() === \\"suspect\\" ? \\"#f59e0b\\" : \\"#ef4444\\";\\n  const polyline = L.polyline(latLngs, {\\n    color: strokeColor,\\n    weight: 5,\\n    opacity: 0.95,\\n    lineCap: \\"round\\",\\n    lineJoin: \\"round\\"\\n  }).addTo(polylineLayer);\\n  const startPoint = routePoints[0];\\n  const startIcon = L.divIcon({\\n    className: \\"custom-start-marker\\",\\n    html: `<div style=\\"background-color: #10b981; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 12px #10b981;\\"></div>`,\\n    iconSize: [16, 16],\\n    iconAnchor: [8, 8]\\n  });\\n  L.marker([startPoint.latitude, startPoint.longitude], { icon: startIcon }).bindPopup(`<b>${$t.routeMap.popupStart}</b><br>BPM: ${startPoint.heartRateBpm}<br>${$t.routeMap.popupSpeed} ${startPoint.instantSpeedKmh} km/h`).addTo(markersLayer);\\n  const endPoint = routePoints[routePoints.length - 1];\\n  const endIcon = L.divIcon({\\n    className: \\"custom-end-marker\\",\\n    html: `<div style=\\"background-color: ${strokeColor}; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 12px ${strokeColor};\\"></div>`,\\n    iconSize: [16, 16],\\n    iconAnchor: [8, 8]\\n  });\\n  L.marker([endPoint.latitude, endPoint.longitude], { icon: endIcon }).bindPopup(`<b>${$t.routeMap.popupEnd}</b><br>BPM: ${endPoint.heartRateBpm}<br>${$t.routeMap.popupSpeed} ${endPoint.instantSpeedKmh} km/h`).addTo(markersLayer);\\n  mapInstance.fitBounds(polyline.getBounds(), { padding: [35, 35] });\\n}\\nonMount(() => {\\n  initMap();\\n});\\nonDestroy(() => {\\n  if (mapInstance) {\\n    mapInstance.remove();\\n  }\\n});\\n<\/script>\\n\\n<div class=\\"cyber-card rounded-2xl p-4 shadow-xl flex flex-col h-[480px]\\">\\n\\t<!-- Map Header -->\\n\\t<div class=\\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-2 border-b border-purple-500/15\\">\\n\\t\\t<div class=\\"flex items-center gap-2\\">\\n\\t\\t\\t{#if activityType?.toLowerCase() === \'musculação\'}\\n\\t\\t\\t\\t<Dumbbell class=\\"w-4 h-4 text-amber-400\\" />\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<Navigation class=\\"w-4 h-4 text-cyber-cyan\\" />\\n\\t\\t\\t{/if}\\n\\t\\t\\t<h3 class=\\"text-sm font-bold text-white tracking-wide truncate max-w-[240px] sm:max-w-xs\\">\\n\\t\\t\\t\\t{activityTitle}\\n\\t\\t\\t</h3>\\n\\t\\t</div>\\n\\n\\t\\t<!-- Layer Selector: Satélite Google / Terreno / Ruas -->\\n\\t\\t<div class=\\"flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-purple-500/20 text-xs font-mono\\">\\n\\t\\t\\t<button\\n\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\ton:click={() => switchLayer(\'satellite\')}\\n\\t\\t\\t\\tclass=\\"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === \'satellite\' ? \'bg-gradient-to-r from-nubank-600 to-purple-600 text-white font-bold shadow-[0_0_10px_rgba(130,10,209,0.4)]\' : \'text-slate-400 hover:text-white\'}\\"\\n\\t\\t\\t\\ttitle={$t.routeMap.satelliteTitle}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<Satellite class=\\"w-3.5 h-3.5\\" />\\n\\t\\t\\t\\t<span class=\\"hidden sm:inline\\">{$t.routeMap.satellite}</span>\\n\\t\\t\\t</button>\\n\\n\\t\\t\\t<button\\n\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\ton:click={() => switchLayer(\'terrain\')}\\n\\t\\t\\t\\tclass=\\"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === \'terrain\' ? \'bg-gradient-to-r from-nubank-600 to-purple-600 text-white font-bold shadow-[0_0_10px_rgba(130,10,209,0.4)]\' : \'text-slate-400 hover:text-white\'}\\"\\n\\t\\t\\t\\ttitle={$t.routeMap.terrainTitle}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<Mountain class=\\"w-3.5 h-3.5\\" />\\n\\t\\t\\t\\t<span class=\\"hidden sm:inline\\">{$t.routeMap.terrain}</span>\\n\\t\\t\\t</button>\\n\\n\\t\\t\\t<button\\n\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\ton:click={() => switchLayer(\'streets\')}\\n\\t\\t\\t\\tclass=\\"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === \'streets\' ? \'bg-gradient-to-r from-nubank-600 to-purple-600 text-white font-bold shadow-[0_0_10px_rgba(130,10,209,0.4)]\' : \'text-slate-400 hover:text-white\'}\\"\\n\\t\\t\\t\\ttitle={$t.routeMap.streetsTitle}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<MapIcon class=\\"w-3.5 h-3.5\\" />\\n\\t\\t\\t\\t<span class=\\"hidden sm:inline\\">{$t.routeMap.streets}</span>\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<!-- Map Canvas -->\\n\\t<div class=\\"flex-1 relative rounded-xl overflow-hidden border border-purple-500/20\\">\\n\\t\\t<div bind:this={mapContainer} class=\\"w-full h-full z-10\\"></div>\\n\\n\\t\\t<!-- Overlay Real: Quando o dispositivo não possui dados de satélite/GPS -->\\n\\t\\t{#if !hasGpsData}\\n\\t\\t\\t<div class=\\"absolute inset-0 z-20 flex items-center justify-center p-6 bg-slate-950/75 backdrop-blur-[2px]\\">\\n\\t\\t\\t\\t<div class=\\"max-w-md w-full p-5 rounded-2xl bg-slate-900/95 border border-purple-500/30 shadow-2xl text-center space-y-3\\">\\n\\t\\t\\t\\t\\t<div class=\\"w-12 h-12 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 flex items-center justify-center mx-auto shadow-[0_0_12px_rgba(130,10,209,0.3)]\\">\\n\\t\\t\\t\\t\\t\\t{#if activityType?.toLowerCase() === \'musculação\'}\\n\\t\\t\\t\\t\\t\\t\\t<Dumbbell class=\\"w-6 h-6 text-amber-400\\" />\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<MapPin class=\\"w-6 h-6 text-purple-400\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t<h4 class=\\"text-sm font-bold text-white\\">{$t.routeMap.noGpsTitle}</h4>\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-xs text-purple-200/70 mt-1 leading-relaxed\\">\\n\\t\\t\\t\\t\\t\\t\\t{interpolate($t.routeMap.noGpsDesc, { title: activityTitle })}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"pt-1 flex items-center justify-center gap-2 text-[11px] font-mono text-cyber-emerald\\">\\n\\t\\t\\t\\t\\t\\t<span class=\\"w-2 h-2 rounded-full bg-cyber-emerald shadow-[0_0_8px_#00ffa3]\\"></span>\\n\\t\\t\\t\\t\\t\\t<span>{$t.routeMap.bioTelemetryValid}</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{:else}\\n\\t\\t\\t<!-- Banner Inferior com Coordenadas Reais Obtidas do Dispositivo -->\\n\\t\\t\\t<div class=\\"absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl bg-slate-950/90 border border-purple-500/30 backdrop-blur-md shadow-2xl flex items-center justify-between\\">\\n\\t\\t\\t\\t<div class=\\"flex items-center gap-3\\">\\n\\t\\t\\t\\t\\t<div class=\\"w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0\\">\\n\\t\\t\\t\\t\\t\\t<MapPin class=\\"w-4 h-4 text-cyber-cyan\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"text-xs font-bold text-white flex items-center gap-2\\">\\n\\t\\t\\t\\t\\t\\t\\t<span>{$t.routeMap.deviceLocation}</span>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-cyber-emerald border border-emerald-500/30 font-bold\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t.routeMap.realData}\\n\\t\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<span class=\\"text-[11px] text-purple-200/80 font-mono\\">\\n\\t\\t\\t\\t\\t\\t\\t{interpolate($t.routeMap.coordinates, { lat: routePoints[0].latitude.toFixed(6), lon: routePoints[0].longitude.toFixed(6) })}\\n\\t\\t\\t\\t\\t\\t\\t{#if routePoints.length > 1}\\n\\t\\t\\t\\t\\t\\t\\t\\t{interpolate($t.routeMap.trackPoints, { count: routePoints.length })}\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t:global(.leaflet-container) {\\n\\t\\tbackground-color: #0b1120 !important;\\n\\t\\tfont-family: inherit;\\n\\t}\\n\\t:global(.leaflet-popup-content-wrapper) {\\n\\t\\tbackground-color: #0f172a !important;\\n\\t\\tcolor: #f8fafc !important;\\n\\t\\tborder: 1px solid #334155 !important;\\n\\t\\tborder-radius: 8px !important;\\n\\t\\tfont-size: 11px !important;\\n\\t\\tfont-family: monospace;\\n\\t}\\n\\t:global(.leaflet-popup-tip) {\\n\\t\\tbackground-color: #0f172a !important;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAsPS,kBAAoB,CAC3B,gBAAgB,CAAE,OAAO,CAAC,UAAU,CACpC,WAAW,CAAE,OACd,CACQ,8BAAgC,CACvC,gBAAgB,CAAE,OAAO,CAAC,UAAU,CACpC,KAAK,CAAE,OAAO,CAAC,UAAU,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAAC,UAAU,CACpC,aAAa,CAAE,GAAG,CAAC,UAAU,CAC7B,SAAS,CAAE,IAAI,CAAC,UAAU,CAC1B,WAAW,CAAE,SACd,CACQ,kBAAoB,CAC3B,gBAAgB,CAAE,OAAO,CAAC,UAC3B"}'
};
const RouteMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasGpsData;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { routePoints = [] } = $$props;
  let { activityTitle = "Percurso" } = $$props;
  let { status = "Valid" } = $$props;
  let { activityType = "Corrida" } = $$props;
  let mapContainer;
  onDestroy(() => {
  });
  if ($$props.routePoints === void 0 && $$bindings.routePoints && routePoints !== void 0) $$bindings.routePoints(routePoints);
  if ($$props.activityTitle === void 0 && $$bindings.activityTitle && activityTitle !== void 0) $$bindings.activityTitle(activityTitle);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
  if ($$props.activityType === void 0 && $$bindings.activityType && activityType !== void 0) $$bindings.activityType(activityType);
  $$result.css.add(css);
  hasGpsData = routePoints && routePoints.length > 0;
  $$unsubscribe_t();
  return `<div class="cyber-card rounded-2xl p-4 shadow-xl flex flex-col h-[480px]"> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-2 border-b border-purple-500/15"><div class="flex items-center gap-2">${activityType?.toLowerCase() === "musculação" ? `${validate_component(Dumbbell, "Dumbbell").$$render($$result, { class: "w-4 h-4 text-amber-400" }, {}, {})}` : `${validate_component(Navigation, "Navigation").$$render($$result, { class: "w-4 h-4 text-cyber-cyan" }, {}, {})}`} <h3 class="text-sm font-bold text-white tracking-wide truncate max-w-[240px] sm:max-w-xs">${escape(activityTitle)}</h3></div>  <div class="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-purple-500/20 text-xs font-mono"><button type="button" class="${"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer " + escape(
    "bg-gradient-to-r from-nubank-600 to-purple-600 text-white font-bold shadow-[0_0_10px_rgba(130,10,209,0.4)]",
    true
  )}"${add_attribute("title", $t.routeMap.satelliteTitle, 0)}>${validate_component(Satellite, "Satellite").$$render($$result, { class: "w-3.5 h-3.5" }, {}, {})} <span class="hidden sm:inline">${escape($t.routeMap.satellite)}</span></button> <button type="button" class="${"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer " + escape(
    "text-slate-400 hover:text-white",
    true
  )}"${add_attribute("title", $t.routeMap.terrainTitle, 0)}>${validate_component(Mountain, "Mountain").$$render($$result, { class: "w-3.5 h-3.5" }, {}, {})} <span class="hidden sm:inline">${escape($t.routeMap.terrain)}</span></button> <button type="button" class="${"flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer " + escape(
    "text-slate-400 hover:text-white",
    true
  )}"${add_attribute("title", $t.routeMap.streetsTitle, 0)}>${validate_component(Map, "MapIcon").$$render($$result, { class: "w-3.5 h-3.5" }, {}, {})} <span class="hidden sm:inline">${escape($t.routeMap.streets)}</span></button></div></div>  <div class="flex-1 relative rounded-xl overflow-hidden border border-purple-500/20"><div class="w-full h-full z-10"${add_attribute("this", mapContainer, 0)}></div>  ${!hasGpsData ? `<div class="absolute inset-0 z-20 flex items-center justify-center p-6 bg-slate-950/75 backdrop-blur-[2px]"><div class="max-w-md w-full p-5 rounded-2xl bg-slate-900/95 border border-purple-500/30 shadow-2xl text-center space-y-3"><div class="w-12 h-12 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 flex items-center justify-center mx-auto shadow-[0_0_12px_rgba(130,10,209,0.3)]">${activityType?.toLowerCase() === "musculação" ? `${validate_component(Dumbbell, "Dumbbell").$$render($$result, { class: "w-6 h-6 text-amber-400" }, {}, {})}` : `${validate_component(Map_pin, "MapPin").$$render($$result, { class: "w-6 h-6 text-purple-400" }, {}, {})}`}</div> <div><h4 class="text-sm font-bold text-white">${escape($t.routeMap.noGpsTitle)}</h4> <p class="text-xs text-purple-200/70 mt-1 leading-relaxed">${escape(interpolate($t.routeMap.noGpsDesc, { title: activityTitle }))}</p></div> <div class="pt-1 flex items-center justify-center gap-2 text-[11px] font-mono text-cyber-emerald"><span class="w-2 h-2 rounded-full bg-cyber-emerald shadow-[0_0_8px_#00ffa3]"></span> <span>${escape($t.routeMap.bioTelemetryValid)}</span></div></div></div>` : ` <div class="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl bg-slate-950/90 border border-purple-500/30 backdrop-blur-md shadow-2xl flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0">${validate_component(Map_pin, "MapPin").$$render($$result, { class: "w-4 h-4 text-cyber-cyan" }, {}, {})}</div> <div><div class="text-xs font-bold text-white flex items-center gap-2"><span>${escape($t.routeMap.deviceLocation)}</span> <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-cyber-emerald border border-emerald-500/30 font-bold">${escape($t.routeMap.realData)}</span></div> <span class="text-[11px] text-purple-200/80 font-mono">${escape(interpolate($t.routeMap.coordinates, {
    lat: routePoints[0].latitude.toFixed(6),
    lon: routePoints[0].longitude.toFixed(6)
  }))} ${routePoints.length > 1 ? `${escape(interpolate($t.routeMap.trackPoints, { count: routePoints.length }))}` : ``}</span></div></div></div>`}</div> </div>`;
});
function getStatusConfig(s, trans) {
  switch (s?.toLowerCase()) {
    case "valid":
      return {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/40",
        text: "text-cyber-emerald",
        dot: "bg-cyber-emerald shadow-[0_0_10px_#00ffa3]",
        label: trans.status.valid
      };
    case "suspect":
      return {
        bg: "bg-amber-500/10",
        border: "border-amber-500/40",
        text: "text-amber-300",
        dot: "bg-amber-400 shadow-[0_0_10px_#ffb800]",
        label: trans.status.suspect
      };
    case "rejected":
      return {
        bg: "bg-pink-500/10",
        border: "border-pink-500/40",
        text: "text-cyber-pink",
        dot: "bg-cyber-pink shadow-[0_0_10px_#ff007a]",
        label: trans.status.rejected
      };
    default:
      return {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        text: "text-purple-300",
        dot: "bg-purple-400 shadow-[0_0_10px_#c084fc]",
        label: trans.status.pending
      };
  }
}
const ValidationBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let config;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { status } = $$props;
  let { size = "sm" } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  config = getStatusConfig(status, $t);
  $$unsubscribe_t();
  return `<div class="${"inline-flex items-center gap-1.5 font-mono font-semibold uppercase tracking-wider rounded-full border transition-all " + escape(config.bg, true) + " " + escape(config.border, true) + " " + escape(config.text, true) + " " + escape(
    size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3.5 py-1 text-xs",
    true
  )}"><span class="${"w-1.5 h-1.5 rounded-full " + escape(config.dot, true)}"></span> <span>${escape(config.label)}</span></div>`;
});
const BluetoothConnectModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  let { isOpen = false } = $$props;
  let { onClose } = $$props;
  let { onDeviceConnected } = $$props;
  let { onActivitySaved } = $$props;
  let { onOpenImportModal = () => {
  } } = $$props;
  let googleFitToken = "";
  let realActivities = [];
  async function loadRealActivities() {
    try {
      const data = await fetchDashboardMetrics();
      realActivities = data.recentActivities || [];
    } catch (e) {
      console.log("Aguardando servidor:", e);
    }
  }
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.onDeviceConnected === void 0 && $$bindings.onDeviceConnected && onDeviceConnected !== void 0) $$bindings.onDeviceConnected(onDeviceConnected);
  if ($$props.onActivitySaved === void 0 && $$bindings.onActivitySaved && onActivitySaved !== void 0) $$bindings.onActivitySaved(onActivitySaved);
  if ($$props.onOpenImportModal === void 0 && $$bindings.onOpenImportModal && onOpenImportModal !== void 0) $$bindings.onOpenImportModal(onOpenImportModal);
  {
    if (isOpen) {
      loadRealActivities();
    }
  }
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `${isOpen ? `<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"><div class="relative w-full max-w-2xl bg-[#0e051e] border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-950/40 overflow-hidden flex flex-col max-h-[92vh]"> <div class="flex items-center justify-between p-5 border-b border-purple-500/20 bg-slate-950/70"><div class="flex items-center gap-3"><div class="p-2.5 rounded-xl bg-nubank-600/20 border border-purple-500/40 text-purple-300 shadow-[0_0_15px_rgba(130,10,209,0.35)]">${validate_component(Watch, "Watch").$$render($$result, { class: "w-6 h-6 text-purple-300" }, {}, {})}</div> <div><h3 class="text-base font-bold text-white flex items-center gap-2"><span>${escape($t.bluetoothModal.title)}</span> <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30" data-svelte-h="svelte-z4daem">HYPEROS / BLE</span></h3> <p class="text-xs text-purple-300/70 font-mono">${escape($t.bluetoothModal.subtitle)}</p></div></div> <button type="button" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-purple-950/50 transition-colors cursor-pointer">${validate_component(X, "X").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button></div>  <div class="px-5 py-3 bg-purple-950/30 border-b border-purple-500/15 flex items-start gap-2.5 text-xs font-mono text-purple-200">${validate_component(Info, "Info").$$render(
    $$result,
    {
      class: "w-4 h-4 text-cyber-cyan shrink-0 mt-0.5"
    },
    {},
    {}
  )} <p class="text-[11px] text-purple-200/90 leading-relaxed font-sans">${escape($t.bluetoothModal.bannerNotice)}</p></div>  <div class="flex border-b border-purple-500/20 bg-slate-950/60 text-xs font-mono overflow-x-auto"><button type="button" class="${"flex-1 min-w-[130px] py-3 text-center font-bold border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 " + escape(
    "border-cyber-emerald text-emerald-300 bg-purple-950/40 shadow-[inset_0_0_12px_rgba(16,185,129,0.25)]",
    true
  )}">${validate_component(Sparkles, "Sparkles").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-emerald" }, {}, {})} <span>${escape($t.bluetoothModal.tabGoogleFit)}</span></button> <button type="button" class="${"flex-1 min-w-[120px] py-3 text-center font-bold border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 " + escape(
    "border-transparent text-slate-400 hover:text-slate-200",
    true
  )}">${validate_component(Zap, "Zap").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-cyan" }, {}, {})} <span>${escape($t.bluetoothModal.tabQuickSync)}</span></button> <button type="button" class="${"flex-1 min-w-[120px] py-3 text-center font-bold border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 " + escape(
    "border-transparent text-slate-400 hover:text-slate-200",
    true
  )}">${validate_component(Smartphone, "Smartphone").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-emerald" }, {}, {})} <span>${escape($t.bluetoothModal.tabMobileWifi)}</span></button> <button type="button" class="${"flex-1 min-w-[120px] py-3 text-center font-bold border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 " + escape(
    "border-transparent text-slate-400 hover:text-slate-200",
    true
  )}">${validate_component(Cloud_upload, "UploadCloud").$$render($$result, { class: "w-3.5 h-3.5 text-purple-400" }, {}, {})} <span>${escape($t.bluetoothModal.tabGpxGuide)}</span></button> <button type="button" class="${"flex-1 min-w-[110px] py-3 text-center font-bold border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 " + escape(
    "border-transparent text-slate-400 hover:text-slate-200",
    true
  )}">${validate_component(Bluetooth, "Bluetooth").$$render($$result, { class: "w-3.5 h-3.5 text-blue-400" }, {}, {})} <span>${escape($t.bluetoothModal.tabWebBle)}</span></button></div>  <div class="p-6 space-y-5 overflow-y-auto">   ${`<div class="space-y-5"> ${``} ${``}  <div class="p-4 rounded-xl bg-gradient-to-r from-purple-950/60 to-slate-900 border border-purple-500/30 space-y-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><div class="p-1.5 rounded-lg bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald">${validate_component(Shield_check, "ShieldCheck").$$render($$result, { class: "w-4 h-4" }, {}, {})}</div> <h4 class="text-sm font-bold text-white">${escape($t.bluetoothModal.gfitTitle)}</h4></div> <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyber-emerald/20 text-cyber-emerald font-bold border border-cyber-emerald/40 tracking-wider">${escape($t.bluetoothModal.gfitBadge)}</span></div> <p class="text-xs text-purple-200/80 leading-relaxed font-sans">${escape($t.bluetoothModal.gfitDesc)}</p></div>  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs"><div class="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20 space-y-1.5"><div class="flex items-center gap-2 text-cyber-cyan font-bold">${validate_component(Smartphone, "Smartphone").$$render($$result, { class: "w-4 h-4" }, {}, {})} <span>${escape($t.bluetoothModal.gfitStep1Title)}</span></div> <p class="text-[11px] text-slate-300 leading-snug">${escape($t.bluetoothModal.gfitStep1Desc)}</p></div> <div class="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20 space-y-1.5"><div class="flex items-center gap-2 text-cyber-emerald font-bold">${validate_component(Check, "Check").$$render($$result, { class: "w-4 h-4" }, {}, {})} <span>${escape($t.bluetoothModal.gfitStep2Title)}</span></div> <p class="text-[11px] text-slate-300 leading-snug">${escape($t.bluetoothModal.gfitStep2Desc)}</p></div> <div class="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20 space-y-1.5"><div class="flex items-center gap-2 text-purple-300 font-bold">${validate_component(Zap, "Zap").$$render($$result, { class: "w-4 h-4" }, {}, {})} <span>${escape($t.bluetoothModal.gfitStep3Title)}</span></div> <p class="text-[11px] text-slate-300 leading-snug">${escape($t.bluetoothModal.gfitStep3Desc)}</p></div></div>  <div class="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-4"><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label for="gfit-days" class="block font-mono text-purple-300 text-[11px] mb-1" data-svelte-h="svelte-1f4el11">Período de Sincronização:</label> <select id="gfit-days" class="w-full bg-slate-900/90 border border-purple-500/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-nubank-500 cursor-pointer"><option${add_attribute("value", 7, 0)} data-svelte-h="svelte-167mu87">Últimos 7 dias (Recomendado)</option><option${add_attribute("value", 15, 0)} data-svelte-h="svelte-ezi3jh">Últimos 15 dias</option><option${add_attribute("value", 30, 0)} data-svelte-h="svelte-11dpr5x">Últimos 30 dias</option></select></div> <div><label for="gfit-token" class="block font-mono text-purple-300 text-[11px] mb-1" data-svelte-h="svelte-yy0r0i">Token Google OAuth (Opcional):</label> <input id="gfit-token" type="password"${add_attribute("placeholder", $t.bluetoothModal.gfitTokenPlaceholder, 0)} class="w-full bg-slate-900/90 border border-purple-500/30 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-nubank-500 font-mono"${add_attribute("value", googleFitToken, 0)}></div></div> <p class="text-[11px] text-purple-300/70 italic font-mono flex items-center gap-1.5">${validate_component(Info, "Info").$$render(
    $$result,
    {
      class: "w-3.5 h-3.5 text-cyber-cyan shrink-0"
    },
    {},
    {}
  )} <span>${escape($t.bluetoothModal.gfitTokenOptional)}</span></p> <button type="button" ${""} class="w-full py-3.5 rounded-xl bg-gradient-to-r from-nubank-600 via-purple-600 to-indigo-600 hover:from-nubank-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-950/50 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-60">${`${validate_component(Sparkles, "Sparkles").$$render($$result, { class: "w-4 h-4 text-cyber-emerald" }, {}, {})} <span>${escape($t.bluetoothModal.gfitBtnSyncNow)}</span>`}</button></div> <div class="p-3 rounded-lg bg-slate-950/50 border border-purple-500/10 flex items-center justify-between text-[11px] font-mono text-purple-300/60"><span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse"></span> ${escape($t.bluetoothModal.gfitFreeApiNotice)}</span> <span class="text-slate-400" data-svelte-h="svelte-163sj29">Endpoint: /api/v1/integrations/google-fit</span></div></div>`}    ${`${`${`${``}`}`}`}    <div class="p-4 rounded-xl bg-slate-950/80 border border-purple-500/20 space-y-3"><div class="flex items-center justify-between border-b border-purple-500/15 pb-2.5"><div class="flex items-center gap-2">${validate_component(Activity, "Activity").$$render($$result, { class: "w-4 h-4 text-cyber-cyan" }, {}, {})} <h4 class="text-xs font-bold text-white font-mono uppercase">${escape(interpolate($t.bluetoothModal.registeredWorkoutsTitle, { count: realActivities.length }))}</h4></div> <span class="text-[10px] font-mono text-purple-300 font-bold" data-svelte-h="svelte-nv7a6k">Xiaomi &amp; Wearables</span></div> <div class="space-y-2 max-h-40 overflow-y-auto">${realActivities.length > 0 ? `${each(realActivities.slice(0, 5), (act) => {
    return `<div class="p-2.5 rounded-xl bg-[#120626] border border-purple-500/15 flex items-center justify-between text-xs"><div class="flex items-center gap-2.5"><div class="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs">${act.activityType === "Musculação" ? `🏋️` : `🏃`}</div> <div><span class="font-bold text-white block">${escape(act.title)}</span> <span class="text-[10px] text-purple-300/70 font-mono">${escape(formatDate(act.startTime || act.formattedDate, $locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }))} • ${escape(act.formattedDuration)} • ${escape(act.caloriesBurned)} kcal</span> </div></div> <div class="text-right font-mono"><span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-cyber-emerald border border-emerald-500/30 font-bold">${escape(act.status)}</span> <span class="text-[10px] text-slate-400 block mt-0.5">${escape(act.averageHeartRateBpm)} bpm</span></div> </div>`;
  })}` : `<div class="py-4 text-center text-slate-500 font-mono text-xs">${escape($t.bluetoothModal.noWorkoutsYet)}</div>`}</div></div></div>  <div class="p-4 border-t border-purple-500/20 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400 font-mono"><span class="text-[11px] text-purple-300/80">${escape($t.bluetoothModal.footerHub)}</span> <button type="button" class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-purple-200 border border-purple-500/30 transition-colors cursor-pointer">${escape($t.bluetoothModal.closeBtn)}</button></div></div></div>` : ``}`;
});
const ImportWorkoutModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { isOpen = false } = $$props;
  let { onClose } = $$props;
  let { onImportSuccess } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.onImportSuccess === void 0 && $$bindings.onImportSuccess && onImportSuccess !== void 0) $$bindings.onImportSuccess(onImportSuccess);
  $$unsubscribe_t();
  return `${isOpen ? `<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"><div class="relative w-full max-w-xl bg-[#0e051e] border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-950/40 overflow-hidden flex flex-col"> <div class="flex items-center justify-between p-5 border-b border-purple-500/20 bg-slate-950/70"><div class="flex items-center gap-3"><div class="p-2.5 rounded-xl bg-nubank-600/20 border border-purple-500/40 text-purple-300 shadow-[0_0_15px_rgba(130,10,209,0.35)]">${validate_component(Cloud_upload, "UploadCloud").$$render($$result, { class: "w-6 h-6 text-purple-300" }, {}, {})}</div> <div><h3 class="text-base font-bold text-white">${escape($t.importModal.title)}</h3> <p class="text-xs text-purple-300/70 font-mono">${escape($t.importModal.subtitle)}</p></div></div> <button type="button" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-purple-950/50 transition-colors cursor-pointer">${validate_component(X, "X").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button></div>  <div class="flex border-b border-purple-500/20 bg-slate-950/50 text-xs font-mono"><button type="button" class="${"flex-1 py-3 text-center font-bold border-b-2 transition-all cursor-pointer " + escape(
    "border-nubank-500 text-purple-200 bg-purple-950/30",
    true
  )}">${escape($t.importModal.tabUpload)}</button> <button type="button" class="${"flex-1 py-3 text-center font-bold border-b-2 transition-all cursor-pointer " + escape(
    "border-transparent text-slate-400 hover:text-slate-200",
    true
  )}">${escape($t.importModal.tabMiFitness)}</button> <button type="button" class="${"flex-1 py-3 text-center font-bold border-b-2 transition-all cursor-pointer " + escape(
    "border-transparent text-slate-400 hover:text-slate-200",
    true
  )}">${escape($t.importModal.tabSamsung)}</button></div>  <div class="p-6 space-y-5 overflow-y-auto max-h-[70vh]">${`${``} ${``}  <div><label for="import-device-select" class="block text-xs font-mono uppercase tracking-wider text-purple-300 mb-2 font-bold">${escape($t.importModal.sourceDeviceLabel)}</label> <select id="import-device-select" class="w-full bg-[#140828] border border-purple-500/30 rounded-xl px-3 py-2.5 text-xs text-white font-mono focus:border-purple-400 focus:outline-none"><option value="Xiaomi Mi Band 10" data-svelte-h="svelte-19tuu8f">Xiaomi Mi Band 10 (via Mi Fitness)</option><option value="Samsung Galaxy Watch" data-svelte-h="svelte-14w6tp">Samsung Galaxy Watch (via Samsung Health)</option><option value="Garmin Forerunner" data-svelte-h="svelte-1ca5w7n">Garmin Forerunner (via Garmin Connect)</option><option value="Apple Watch" data-svelte-h="svelte-q4nj0t">Apple Watch (via HealthFit / Workouts)</option><option value="Polar Vantage" data-svelte-h="svelte-1tmhbkr">Polar Vantage (via Polar Flow)</option></select></div>  <div><label for="import-file-input" class="block text-xs font-mono uppercase tracking-wider text-purple-300 mb-2 font-bold">${escape($t.importModal.fileInputLabel)}</label> <label for="import-file-input" class="border-2 border-dashed border-purple-500/30 hover:border-purple-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-slate-950/50 hover:bg-purple-950/20 transition-all"><input id="import-file-input" type="file" accept=".gpx,.tcx" class="hidden"> ${`<div class="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-3 shadow-[0_0_12px_rgba(130,10,209,0.3)]">${validate_component(Cloud_upload, "UploadCloud").$$render($$result, { class: "w-6 h-6 text-cyber-cyan" }, {}, {})}</div> <span class="text-xs font-bold text-white font-mono">${escape($t.importModal.dropzonePrompt)}</span> <span class="text-[11px] text-purple-300/70 mt-1 font-mono">${escape($t.importModal.dropzoneSub)}</span>`}</label></div> <div class="pt-2"><button type="button" ${"disabled"} class="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-nubank-600 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-nubank-600 shadow-[0_0_20px_rgba(130,10,209,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer border border-purple-400/30 disabled:opacity-50">${`${validate_component(Cloud_upload, "UploadCloud").$$render($$result, { class: "w-4 h-4 text-cyber-cyan" }, {}, {})} <span>${escape($t.importModal.btnValidateSave)}</span>`}</button></div>`}</div>  <div class="p-4 border-t border-purple-500/20 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400 font-mono"><span class="text-[11px] text-purple-300/80">${escape($t.importModal.footerParser)}</span> <button type="button" class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-purple-200 border border-purple-500/30 transition-colors cursor-pointer">${escape($t.importModal.closeBtn)}</button></div></div></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  let metrics = null;
  let selectedActivity = null;
  let isImportModalOpen = false;
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
      } else if (metrics.recentActivities.length === 0) {
        selectedActivity = null;
      }
    } catch (err) {
      console.error(err);
      errorMessage = $t.app.backendError;
    } finally {
      isRefreshing = false;
    }
  }
  async function handleRefresh() {
    isRefreshing = true;
    await loadData();
  }
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `${$$result.head += `<!-- HEAD_svelte-13u0534_START -->${$$result.title = `<title>${escape($t.app.pageTitle)}</title>`, ""}<!-- HEAD_svelte-13u0534_END -->`, ""}  ${validate_component(DashboardHeader, "DashboardHeader").$$render(
    $$result,
    {
      onOpenImportModal: () => isImportModalOpen = true,
      onOpenBluetooth: () => isBluetoothOpen = true,
      onRefresh: handleRefresh,
      isRefreshing,
      bluetoothConnectedDevice: connectedBluetoothDevice
    },
    {},
    {}
  )} <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6"> ${errorMessage ? `<div class="p-4 rounded-2xl bg-pink-950/40 border border-pink-700/60 text-pink-200 text-sm flex items-center justify-between shadow-lg"><div class="flex items-center gap-3">${validate_component(Circle_alert, "AlertCircle").$$render(
    $$result,
    {
      class: "w-5 h-5 text-cyber-pink shrink-0 animate-pulse"
    },
    {},
    {}
  )} <span>${escape(errorMessage)}</span></div> <button class="px-3.5 py-1.5 bg-pink-900/60 hover:bg-pink-800 rounded-xl text-xs font-mono font-bold text-white transition-all cursor-pointer border border-pink-500/40">${escape($t.app.retry)}</button></div>` : ``}     ${validate_component(InfographicOverview, "InfographicOverview").$$render($$result, { metrics }, {}, {})}    <section class="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div class="lg:col-span-2 rounded-2xl overflow-hidden border border-purple-500/25 shadow-xl shadow-purple-950/20 bg-slate-950/80">${validate_component(RouteMap, "RouteMap").$$render(
    $$result,
    {
      routePoints: selectedActivity?.routePoints ?? [],
      activityTitle: selectedActivity ? `${selectedActivity.title} (${selectedActivity.reportedDistanceKm} km)` : $t.routeMap.route,
      status: selectedActivity?.status ?? "Valid",
      activityType: selectedActivity?.activityType ?? "Corrida"
    },
    {},
    {}
  )}</div>  <div class="cyber-card rounded-2xl p-5 shadow-xl flex flex-col justify-between relative overflow-hidden group"> <div class="absolute -top-12 -right-12 w-36 h-36 bg-nubank-600/15 rounded-full blur-xl pointer-events-none"></div> ${selectedActivity ? `<div class="relative z-10"><div class="flex items-center justify-between pb-3 border-b border-purple-500/15"><span class="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold flex items-center gap-1.5">${validate_component(Zap, "Zap").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-cyan" }, {}, {})} <span>${escape($t.details.workoutDetails)}</span></span> ${validate_component(ValidationBadge, "ValidationBadge").$$render(
    $$result,
    {
      status: selectedActivity.status,
      size: "sm"
    },
    {},
    {}
  )}</div> <div class="mt-4"><div class="flex items-center gap-2">${selectedActivity.activityType === "Musculação" ? `${validate_component(Dumbbell, "Dumbbell").$$render($$result, { class: "w-5 h-5 text-amber-400" }, {}, {})}` : `${validate_component(Activity, "Activity").$$render($$result, { class: "w-5 h-5 text-purple-400" }, {}, {})}`} <h3 class="text-lg font-black text-white tracking-wide">${escape(selectedActivity.title)}</h3></div> <div class="flex items-center gap-2 mt-1 text-xs text-purple-300/70 font-mono">${validate_component(Watch, "Watch").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-cyan" }, {}, {})} <span>${escape(selectedActivity.deviceName)}</span> <span class="text-purple-500/40" data-svelte-h="svelte-afegoq">•</span> <span class="text-white font-bold">${escape(translateActivityType(selectedActivity.activityType, $locale))}</span></div></div>  <div class="mt-4 p-3 bg-slate-950/70 rounded-xl border border-purple-500/15 text-xs font-mono space-y-1.5"><div class="flex items-center justify-between"><span class="text-slate-400 flex items-center gap-1.5">${validate_component(Calendar, "Calendar").$$render($$result, { class: "w-3.5 h-3.5 text-purple-400" }, {}, {})} ${escape($t.details.dayAndDate)}</span> <span class="text-white capitalize font-semibold">${escape(formatDayOfWeek(selectedActivity.startTime || selectedActivity.dayOfWeek, $locale))}, ${escape(formatDate(selectedActivity.startTime || selectedActivity.formattedDate, $locale))}</span></div> <div class="flex items-center justify-between"><span class="text-slate-400 flex items-center gap-1.5">${validate_component(Clock, "Clock").$$render($$result, { class: "w-3.5 h-3.5 text-purple-400" }, {}, {})} ${escape($t.details.timeAndDuration)}</span> <span class="text-cyber-cyan font-bold">${escape(formatTime(selectedActivity.startTime || selectedActivity.formattedTime, $locale, false))} (${escape(selectedActivity.formattedDuration)})</span></div></div>  <div class="grid grid-cols-2 gap-2 mt-3.5"><div class="p-2.5 rounded-xl bg-slate-950/60 border border-purple-500/15 hover:border-emerald-500/30 transition-colors"><span class="text-[10px] font-mono uppercase text-purple-300/80 block">${escape(selectedActivity.activityType === "Musculação" ? $t.details.distanceIndoor : $t.details.validatedKm)}</span> <span class="text-base font-black font-mono text-cyber-emerald">${escape(selectedActivity.validatedDistanceKm)} km</span> <span class="text-[10px] text-slate-400 block font-mono">${escape(selectedActivity.activityType === "Musculação" ? $t.details.staticGym : interpolate($t.details.ofKm, { km: selectedActivity.reportedDistanceKm }))}</span></div> <div class="p-2.5 rounded-xl bg-slate-950/60 border border-purple-500/15 hover:border-pink-500/30 transition-colors"><span class="text-[10px] font-mono uppercase text-purple-300/80 block">${escape($t.details.caloriesBurned)}</span> <span class="text-base font-black font-mono text-cyber-pink">${escape(selectedActivity.caloriesBurned)} kcal</span> <span class="text-[10px] text-slate-400 block font-mono">${escape($t.details.energyExpenditure)}</span></div> <div class="p-2.5 rounded-xl bg-slate-950/60 border border-purple-500/15 hover:border-cyan-500/30 transition-colors"><span class="text-[10px] font-mono uppercase text-purple-300/80 block">${escape(selectedActivity.activityType === "Musculação" ? $t.details.metabolicFocus : $t.details.avgPace)}</span> <span class="text-base font-black font-mono text-white">${escape(selectedActivity.activityType === "Musculação" ? $t.details.hypertrophy : selectedActivity.formattedPace)}</span> <span class="text-[10px] text-slate-400 block font-mono">${escape(selectedActivity.activityType === "Musculação" ? $t.details.anaerobicDemand : `${selectedActivity.averageSpeedKmh} km/h`)}</span></div> <div class="p-2.5 rounded-xl bg-slate-950/60 border border-purple-500/15 hover:border-purple-400/40 transition-colors"><span class="text-[10px] font-mono uppercase text-purple-300/80 block">${escape($t.details.heartRate)}</span> <span class="text-base font-black font-mono text-rose-400">${escape(selectedActivity.averageHeartRateBpm)} bpm</span> <span class="text-[10px] text-slate-400 block font-mono">${escape(interpolate($t.details.peakHeartRate, { bpm: selectedActivity.maxHeartRateBpm }))}</span></div></div>  <div class="mt-3.5 p-3 rounded-xl bg-slate-950/70 border border-purple-500/20 text-xs"><span class="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold block mb-1">${escape($t.details.analysisReportTitle)}</span> <p class="text-slate-300 leading-relaxed font-sans text-[11px]">${escape(selectedActivity.validationSummary)}</p></div></div> <div class="relative z-10 mt-4 pt-4 border-t border-purple-500/15 flex items-center gap-2"><button type="button" class="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-nubank-600 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-nubank-600 border border-purple-400/30 shadow-[0_0_15px_rgba(130,10,209,0.3)] hover:shadow-[0_0_20px_rgba(130,10,209,0.5)] flex items-center justify-center gap-2 transition-all cursor-pointer">${validate_component(Shield_check, "ShieldCheck").$$render($$result, { class: "w-4 h-4 text-cyber-cyan" }, {}, {})} <span>${escape($t.details.openAuditReport)}</span></button></div>` : `<div class="h-full flex flex-col items-center justify-center text-center p-6 text-purple-300/60">${validate_component(Layers, "Layers").$$render($$result, { class: "w-8 h-8 mb-2 animate-bounce" }, {}, {})} <p class="text-xs font-mono">${escape($t.details.selectToInspect)}</p></div>`}</div></section>    <section class="cyber-card rounded-2xl p-5 shadow-xl relative overflow-hidden"> <div class="absolute -top-16 -left-16 w-48 h-48 bg-nubank-600/10 rounded-full blur-2xl pointer-events-none"></div> <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-500/15"><div><h3 class="text-base font-bold text-white flex items-center gap-2"><span>${escape($t.table.title)}</span> <span class="inline-block w-2 h-2 rounded-full bg-nubank-400 shadow-[0_0_8px_#c084fc]"></span></h3> <p class="text-xs text-purple-300/70 font-sans">${escape($t.table.subtitle)}</p></div> <div class="flex items-center gap-2 text-xs font-mono text-purple-300 bg-slate-950/70 px-3 py-1.5 rounded-xl border border-purple-500/20"><span>${escape(interpolate($t.table.totalCount, {
    count: metrics?.totalActivitiesCount ?? 0
  }))}</span></div></div>  <div class="relative z-10 overflow-x-auto mt-4"><table class="w-full text-left text-xs font-sans"><thead><tr class="border-b border-purple-500/20 text-purple-300 font-mono text-[11px] uppercase tracking-wider bg-slate-950/40"><th class="py-3 px-3">${escape($t.table.colDateTime)}</th> <th class="py-3 px-3">${escape($t.table.colActivityDevice)}</th> <th class="py-3 px-3 text-right">${escape($t.table.colWatchKm)}</th> <th class="py-3 px-3 text-right">${escape($t.table.colValidatedKm)}</th> <th class="py-3 px-3 text-right">${escape($t.table.colPaceFocus)}</th> <th class="py-3 px-3 text-right">${escape($t.table.colCalories)}</th> <th class="py-3 px-3 text-center">${escape($t.table.colHeartRate)}</th> <th class="py-3 px-3 text-center">${escape($t.table.colStatus)}</th> <th class="py-3 px-3 text-center">${escape($t.table.colActions)}</th></tr></thead> <tbody class="divide-y divide-purple-500/10">${metrics && metrics.recentActivities.length > 0 ? `${each(metrics.recentActivities, (act) => {
    return `<tr class="${"hover:bg-purple-950/25 transition-all cursor-pointer " + escape(
      selectedActivity?.id === act.id ? "bg-purple-950/40 border-l-2 border-l-nubank-500 shadow-[inset_0_0_15px_rgba(130,10,209,0.15)]" : "",
      true
    )}"> <td class="py-3 px-3 font-mono"><div class="font-bold text-slate-200 capitalize">${escape(formatDayOfWeek(act.startTime || act.dayOfWeek, $locale))}</div> <div class="text-[11px] text-purple-300/70">${escape(formatDate(act.startTime || act.formattedDate, $locale))} ${escape($t.table.atTime)} ${escape(formatTime(act.startTime || act.formattedTime, $locale, false))} </div></td>  <td class="py-3 px-3"><div class="font-bold text-white flex items-center gap-1.5">${act.activityType === "Musculação" ? `${validate_component(Dumbbell, "Dumbbell").$$render($$result, { class: "w-3.5 h-3.5 text-amber-400" }, {}, {})}` : `${validate_component(Activity, "Activity").$$render($$result, { class: "w-3.5 h-3.5 text-purple-400" }, {}, {})}`} <span>${escape(act.title)}</span></div> <div class="text-[11px] text-slate-400 font-mono flex items-center gap-1 mt-0.5">${validate_component(Watch, "Watch").$$render($$result, { class: "w-3 h-3 text-cyber-cyan" }, {}, {})} <span>${escape(act.deviceName)}</span> <span class="text-purple-500/40" data-svelte-h="svelte-afegoq">•</span> <span class="text-purple-300/80">${escape(act.formattedDuration)}</span> </div></td>  <td class="py-3 px-3 text-right font-mono font-bold text-slate-200">${escape(act.activityType === "Musculação" ? "0.00 km" : `${act.reportedDistanceKm.toFixed(2)} km`)}</td>  <td class="${"py-3 px-3 text-right font-mono font-bold " + escape(
      act.status === "Valid" ? "text-cyber-emerald" : act.status === "Suspect" ? "text-amber-300" : "text-cyber-pink",
      true
    )}">${escape(act.activityType === "Musculação" ? "0.00 km" : `${act.validatedDistanceKm.toFixed(2)} km`)}</td>  <td class="py-3 px-3 text-right font-mono">${act.activityType === "Musculação" ? `<div class="text-amber-300 font-medium">${escape($t.table.hypertrophy)}</div> <div class="text-[10px] text-slate-500">${escape($t.table.indoor)}</div>` : `<div class="text-slate-200 font-medium">${escape(act.formattedPace)}</div> <div class="text-[10px] text-purple-300/70">${escape(act.averageSpeedKmh)} km/h</div>`}</td>  <td class="py-3 px-3 text-right font-mono font-bold text-cyber-pink">${escape(act.caloriesBurned)} kcal</td>  <td class="py-3 px-3 text-center font-mono"><div class="inline-flex items-center gap-1 text-slate-200 font-bold">${validate_component(Heart, "Heart").$$render($$result, { class: "w-3 h-3 text-rose-500 shrink-0" }, {}, {})} <span>${escape(act.averageHeartRateBpm)}</span></div> <div class="text-[10px] text-slate-500">${escape($t.table.max)} ${escape(act.maxHeartRateBpm)}</div></td>  <td class="py-3 px-3 text-center">${validate_component(ValidationBadge, "ValidationBadge").$$render($$result, { status: act.status, size: "sm" }, {}, {})}</td>  <td class="py-3 px-3 text-center"><div class="flex items-center justify-center gap-1.5"><button type="button" class="p-1.5 rounded-lg bg-slate-950/80 hover:bg-purple-950 text-purple-300 hover:text-white border border-purple-500/20 transition-all cursor-pointer shadow-sm"${add_attribute("title", $t.table.showMapTooltip, 0)}>${validate_component(Compass, "Compass").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-cyan" }, {}, {})}</button> <button type="button" class="p-1.5 rounded-lg bg-slate-950/80 hover:bg-purple-950 text-purple-300 hover:text-white border border-purple-500/20 transition-all cursor-pointer shadow-sm"${add_attribute("title", $t.table.showAuditTooltip, 0)}>${validate_component(Shield_check, "ShieldCheck").$$render($$result, { class: "w-3.5 h-3.5 text-cyber-emerald" }, {}, {})}</button> </div></td> </tr>`;
  })}` : `<tr><td colspan="9" class="py-12 text-center"><div class="max-w-md mx-auto space-y-3"><div class="w-12 h-12 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto shadow-lg shadow-purple-900/20">${validate_component(Watch, "Watch").$$render($$result, { class: "w-6 h-6" }, {}, {})}</div> <h4 class="text-sm font-bold text-white">${escape($t.table.emptyTitle)}</h4> <p class="text-xs text-purple-300/70 leading-relaxed font-sans">${escape($t.table.emptyDesc)}</p> <div class="flex items-center justify-center gap-3 pt-2"><button type="button" class="px-4 py-2 bg-gradient-to-r from-nubank-600 to-purple-600 hover:from-purple-600 hover:to-nubank-600 rounded-xl text-xs font-bold text-white transition-all cursor-pointer flex items-center gap-1.5 border border-purple-400/30 shadow-[0_0_15px_rgba(130,10,209,0.3)]">${validate_component(Bluetooth, "Bluetooth").$$render($$result, { class: "w-3.5 h-3.5" }, {}, {})} <span>${escape($t.table.btnConnectBluetooth)}</span></button> <button type="button" class="px-4 py-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 rounded-xl text-xs font-bold text-white transition-all cursor-pointer flex items-center gap-1.5 border border-cyan-400/30 shadow-[0_0_15px_rgba(0,240,255,0.3)]">${validate_component(Cloud_upload, "UploadCloud").$$render($$result, { class: "w-3.5 h-3.5" }, {}, {})} <span>${escape($t.table.btnImportGpx)}</span></button></div></div></td></tr>`}</tbody></table></div></section></main>  ${``} ${validate_component(ImportWorkoutModal, "ImportWorkoutModal").$$render(
    $$result,
    {
      isOpen: isImportModalOpen,
      onClose: () => isImportModalOpen = false,
      onImportSuccess: loadData
    },
    {},
    {}
  )} ${validate_component(BluetoothConnectModal, "BluetoothConnectModal").$$render(
    $$result,
    {
      isOpen: isBluetoothOpen,
      onClose: () => isBluetoothOpen = false,
      onDeviceConnected: (name) => connectedBluetoothDevice = name || null,
      onActivitySaved: loadData,
      onOpenImportModal: () => isImportModalOpen = true
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
