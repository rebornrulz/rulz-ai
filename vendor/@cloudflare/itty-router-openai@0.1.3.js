/* eslint-disable */
'use strict';
var A,
  e = require('../itty-router@3.0.12.js');
class t extends Error {
  key;
  constructor(A) {
    super(A), (this.message = A);
  }
}
class r extends t {
  constructor(A) {
    super(A);
  }
}
function s(A) {
  return `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="utf-8"/>\n    <meta name="viewport" content="width=device-width, initial-scale=1"/>\n    <meta name="description" content="SwaggerIU"/>\n    <title>SwaggerUI</title>\n    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css"/>\n    <link rel="shortcut icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlMb//2ux//9or///ZKz//wlv5f8JcOf/CnXv/why7/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2vi/wZo3/9ytf//b7P//2uw//+BvP//DHbp/w568P8Md+//CnXv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApv4/8HbOH/lMf//3W3//9ytf//brL//w946v8SfvH/EHzw/w558P8AAAAAAAAAAAAAAAAAAAAAAAAAABF56f8Ndef/C3Dj/whs4f98u///eLn//3W3//+Evv//FoPx/xSA8f8SfvD/EHvw/wAAAAAAAAAAAAAAAA1EeF0WgOz/EXrp/w515v8LceT/lsn//3+9//97u///eLj//xaB7f8YhfL/FoLx/xSA8f8JP/deAAAAAAAAAAAgjfH/HIjw/xeB7P8Te+n/AAAAAAAAAACGwf//gr///369//+Iwf//HIny/xqH8v8YhfL/FYLx/wAAAAAnlfPlJJLy/yGO8v8cifD/GILt/wAAAAAAAAAAmMz//4nD//+Fwf//gb///xyJ8P8ejPP/HIny/xmH8v8XhPLnK5r0/yiW8/8lk/P/IpDy/wAAAAAAAAAAAAAAAAAAAACPx///jMX//4jD//+MxP//IpD0/yCO8/8di/P/G4ny/y6e9f8sm/T/KZj0/yaV8/8AAAAAAAAAAAAAAAAAAAAAlsz//5LJ//+Px///lMn//yaV9P8kkvT/IZD0/x+O8/8yo/blMKD1/y2d9f8qmfT/KJbz/wAAAAAAAAAAqdb//53Q//+Zzv//lsv//yiY8/8qmvX/KJf1/yWV9P8jkvTQAAAAADSl9v8xofX/Lp71/yyb9P8AAAAAAAAAAKfW//+k1P//oNL//6rW//8wofb/Lp72/yuc9f8pmfX/AAAAAAAAAAAcVHtcNab2/zKj9v8voPX/LZz0/7vh//+u2///qtj//6fW//8wofT/NKX3/zKj9/8voPb/F8/6XgAAAAAAAAAAAAAAADmr9/82qPf/M6T2/zCg9f+44f//td///7Hd//++4v//Oqz4/ziq+P81p/f/M6X3/wAAAAAAAAAAAAAAAAAAAAAAAAAAOqz4/zep9//M6///v+X//7vj//+44f//OKn1/z6x+f88rvn/Oaz4/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6x+f8qmfP/yOv//8bq///C5///z+z//0O3+v9Ctfr/QLP5/z2x+f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0u///8jr///I6///yOv//zmq9f9Dt/r/Q7f6/0O3+v8AAAAAAAAAAAAAAAAAAAAA8A8AAOAHAADgBwAAwAMAAMADAACGAQAABgAAAA8AAAAPAAAABgAAAIYBAADAAwAAwAMAAOAHAADgBwAA8A8AAA==" />\n</head>\n<body>\n<div id="swagger-ui"></div>\n<script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin><\/script>\n<script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-standalone-preset.js" crossorigin><\/script>\n<script>\n    window.onload = () => {\n        window.ui = SwaggerUIBundle({\n            url: '${A}',\n            dom_id: '#swagger-ui',\n            deepLinking: true,\n            presets: [\n                SwaggerUIBundle.presets.apis\n            ]\n        });\n    };\n<\/script>\n</body>\n</html>`;
}
function a(A) {
  return `<!DOCTYPE html>\n    <html>\n    <head>\n    <title>ReDocUI</title>\n    \x3c!-- needed for adaptive design --\x3e\n    <meta charset="utf-8"/>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n\n    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700" rel="stylesheet">\n    <link rel="shortcut icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlMb//2ux//9or///ZKz//wlv5f8JcOf/CnXv/why7/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2vi/wZo3/9ytf//b7P//2uw//+BvP//DHbp/w568P8Md+//CnXv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApv4/8HbOH/lMf//3W3//9ytf//brL//w946v8SfvH/EHzw/w558P8AAAAAAAAAAAAAAAAAAAAAAAAAABF56f8Ndef/C3Dj/whs4f98u///eLn//3W3//+Evv//FoPx/xSA8f8SfvD/EHvw/wAAAAAAAAAAAAAAAA1EeF0WgOz/EXrp/w515v8LceT/lsn//3+9//97u///eLj//xaB7f8YhfL/FoLx/xSA8f8JP/deAAAAAAAAAAAgjfH/HIjw/xeB7P8Te+n/AAAAAAAAAACGwf//gr///369//+Iwf//HIny/xqH8v8YhfL/FYLx/wAAAAAnlfPlJJLy/yGO8v8cifD/GILt/wAAAAAAAAAAmMz//4nD//+Fwf//gb///xyJ8P8ejPP/HIny/xmH8v8XhPLnK5r0/yiW8/8lk/P/IpDy/wAAAAAAAAAAAAAAAAAAAACPx///jMX//4jD//+MxP//IpD0/yCO8/8di/P/G4ny/y6e9f8sm/T/KZj0/yaV8/8AAAAAAAAAAAAAAAAAAAAAlsz//5LJ//+Px///lMn//yaV9P8kkvT/IZD0/x+O8/8yo/blMKD1/y2d9f8qmfT/KJbz/wAAAAAAAAAAqdb//53Q//+Zzv//lsv//yiY8/8qmvX/KJf1/yWV9P8jkvTQAAAAADSl9v8xofX/Lp71/yyb9P8AAAAAAAAAAKfW//+k1P//oNL//6rW//8wofb/Lp72/yuc9f8pmfX/AAAAAAAAAAAcVHtcNab2/zKj9v8voPX/LZz0/7vh//+u2///qtj//6fW//8wofT/NKX3/zKj9/8voPb/F8/6XgAAAAAAAAAAAAAAADmr9/82qPf/M6T2/zCg9f+44f//td///7Hd//++4v//Oqz4/ziq+P81p/f/M6X3/wAAAAAAAAAAAAAAAAAAAAAAAAAAOqz4/zep9//M6///v+X//7vj//+44f//OKn1/z6x+f88rvn/Oaz4/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6x+f8qmfP/yOv//8bq///C5///z+z//0O3+v9Ctfr/QLP5/z2x+f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0u///8jr///I6///yOv//zmq9f9Dt/r/Q7f6/0O3+v8AAAAAAAAAAAAAAAAAAAAA8A8AAOAHAADgBwAAwAMAAMADAACGAQAABgAAAA8AAAAPAAAABgAAAIYBAADAAwAAwAMAAOAHAADgBwAA8A8AAA==" />\n\n    \x3c!--\n    ReDoc doesn't change outer page styles\n    --\x3e\n    <style>\n      body {\n        margin: 0;\n        padding: 0;\n      }\n    </style>\n    </head>\n    <body>\n    <redoc spec-url="${A}"></redoc>\n    <script src="https://unpkg.com/redoc@2.0.0-rc.58/bundles/redoc.standalone.js"> <\/script>\n    </body>\n    </html>`;
}
class n {
  static isParameter = !0;
  isParameter = !0;
  type = 'string';
  params;
  generated;
  constructor(A) {
    (this.params = A || {}),
      (this.generated = !0),
      void 0 === this.params.required && (this.params.required = !0);
  }
  getValue() {
    const A = {
      type: this.type,
      description: this.params.description,
      example: this.params.example,
      default: this.params.default
    };
    return this.params.deprecated && (A.deprecated = this.params.deprecated), A;
  }
  validate(A) {
    return A;
  }
}
class o extends n {
  isArr = !0;
  innerType;
  constructor(A, e) {
    super(e), (this.innerType = A);
  }
  validate(A) {
    return (
      (A = super.validate(A)),
      !1 !== this.params.required || (null !== A && '' !== A)
        ? (A = Array.isArray(A)
            ? A.map(A => this.innerType.validate(A))
            : [this.innerType.validate(A)])
        : null
    );
  }
  getValue() {
    return { type: 'array', items: this.innerType.getValue() };
  }
}
class i extends n {
  isObj = !0;
  fields;
  constructor(A, e) {
    super(e), (this.fields = A);
  }
  validate(A) {
    A = super.validate(A);
    for (const [e, t] of Object.entries(this.fields))
      try {
        if (void 0 === A[e] || null === A[e]) {
          if (t.params.required) throw new r('is required');
        } else A[e] = t.validate(A[e]);
      } catch (A) {
        throw ((A.key = (A.key || '') + `.${e}`), A);
      }
    return A;
  }
  getValue() {
    const A = { type: 'object', properties: {} },
      e = [];
    for (const [t, r] of Object.entries(this.fields))
      !0 === r.params?.required && e.push(t),
        r.getValue ? (A.properties[t] = r.getValue()) : (A.properties[t] = r);
    return e.length > 0 && (A.required = e), A;
  }
}
class p extends n {
  type = 'number';
  validate(A) {
    if (((A = super.validate(A)), (A = Number.parseFloat(A)), isNaN(A)))
      throw new r('is not a valid number');
    return A;
  }
}
class d extends n {
  type = 'string';
  constructor(A) {
    super(A);
  }
  validate(A) {
    if (
      ('string' != typeof (A = super.validate(A)) && (A = A.toString()),
      this.params.format)
    )
      if ('date-time' === this.params.format) {
        if (((A = new Date(A)), isNaN(A.getDay())))
          throw new r('is not a valid date time');
      } else if ('date' === this.params.format) {
        if (!A.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))
          throw new r('is not a valid date');
        if (((A = new Date(A)), isNaN(A.getDay())))
          throw new r('is not a valid date');
      }
    return A;
  }
  getValue() {
    return { ...super.getValue(), format: this.params.format };
  }
}
class u extends d {
  type = 'string';
  constructor(A) {
    super({ example: '2022-09-15T00:00:00Z', ...A, format: 'date-time' });
  }
}
class c extends d {
  type = 'string';
  constructor(A) {
    super(A);
  }
  validate(A) {
    if (!(A = super.validate(A)).match(this.params.pattern)) {
      if (this.params.patternError)
        throw new r(`is not a valid ${this.params.patternError}`);
      throw new r(`does not match the pattern ${this.params.format}`);
    }
    return A;
  }
  getValue() {
    return { ...super.getValue(), pattern: this.params.pattern };
  }
}
class l extends d {
  type = 'boolean';
  validValues = ['true', 'false'];
  validate(A) {
    if (
      ((A = (A = super.validate(A)).toLowerCase()),
      !this.validValues.includes(A))
    )
      throw new r('is not a valid boolean, allowed values are true or false');
    return (A = 'true' === A);
  }
}
class f {
  location;
  rawType;
  type;
  params;
  constructor(A, e, t) {
    (this.location = A),
      (this.rawType = e),
      void 0 === t.required && (t.required = !0),
      (this.params = t),
      (this.type = this.getType(e, t));
  }
  getType(A, e) {
    if (!0 === A.generated) return A;
    if (!0 === A.isParameter) return new A({ ...e });
    if (A === String) return new d({ ...e });
    if ('string' == typeof A) return new d({ example: A });
    if (A === Number) return new p({ ...e });
    if ('number' == typeof A) return new p({ example: A });
    if (A === Boolean) return new l({ ...e });
    if ('boolean' == typeof A) return new l({ example: A });
    if (A === Date) return new u();
    if (Array.isArray(A)) {
      if (0 === A.length) throw new Error('Arr must have a type');
      return new o(this.getType(A[0], e), { ...e });
    }
    if ('object' == typeof A) {
      const t = {};
      for (const [e, r] of Object.entries(A)) t[e] = this.getType(r, {});
      return new i(t, e);
    }
    throw new Error(`${A} not implemented`);
  }
  getValue() {
    const A = v(this.type.getValue());
    return {
      description: this.params.description,
      required: this.params.required,
      schema: A,
      name: this.params.name,
      in: this.location
    };
  }
  validate(A) {
    if (null == A) {
      if (void 0 === this.params.default || null === this.params.default) {
        if (this.params.required) throw new r('is required');
        return null;
      }
      A = this.params.default;
    }
    return (A = this.type.validate(A));
  }
}
class h extends f {
  paramsBody;
  constructor(A, e) {
    super(null, A, {}), (this.paramsBody = e);
  }
  getValue() {
    const A = v(this.type.getValue()),
      e = { description: this.paramsBody?.description, content: {} };
    return (
      (e.content[this.paramsBody?.contentType || 'application/json'] = {
        schema: A
      }),
      e
    );
  }
}
class m extends f {
  constructor(A, e) {
    super(null, A, e);
  }
  getValue() {
    const A = super.getValue(),
      e = this.params?.contentType
        ? 'this.params?.contentType'
        : 'application/json',
      t = {
        description: this.params.description || 'Successful Response',
        content: {}
      };
    return (t.content[e] = { schema: A.schema }), t;
  }
}
function y(A, e = {}) {
  return new f('query', A, e);
}
function g(A, e, t, r) {
  if ('query' === r) return e[t];
  if ('path' === r) return A.params[t];
  if ('header' === r) return A.headers.get(t);
  if ('cookie' === r) throw new Error('Cookie parameters not implemented yet');
}
function w(A) {
  const e = decodeURIComponent(A.url).split('?');
  if (1 === e.length) return {};
  const t = e[1],
    r = {};
  for (const A of t.split('&')) {
    const e = A.split('='),
      t = e[0],
      s = e[1];
    void 0 === r[t]
      ? (r[t] = s)
      : Array.isArray(r[t])
      ? r[t].push(s)
      : (r[t] = [r[t], s]);
  }
  return r;
}
function v(A) {
  for (const [e, t] of Object.entries(A))
    'object' != typeof t || Array.isArray(t) || (A[e] = v(t)),
      void 0 === t && delete A[e];
  return A;
}
function x(A) {
  const e = [],
    t = Array.isArray(A);
  for (const [r, s] of Object.entries(A || {})) {
    if (t && !s.params.name)
      throw new Error('Parameter must have a defined name when using as Array');
    const A = s.params.name ? s.params.name : r;
    e.push({ ...s.getValue(), name: A });
  }
  return e;
}
(exports.SchemaVersion = void 0),
  ((exports.SchemaVersion || (exports.SchemaVersion = {})).V1 = 'v1'),
  (exports.AuthType = void 0),
  ((A = exports.AuthType || (exports.AuthType = {})).NONE = 'none'),
  (A.OAUTH = 'oauth'),
  (A.SERVICE_HTTP = 'service_http'),
  (A.USER_HTTP = 'user_http'),
  (exports.APIType = void 0),
  ((exports.APIType || (exports.APIType = {})).OPENAPI = 'openapi');
(exports.ApiException = t),
  (exports.Arr = o),
  (exports.BaseParameter = n),
  (exports.Body = h),
  (exports.Bool = l),
  (exports.Cookie = function (A, e = {}) {
    return new f('cookie', A, e);
  }),
  (exports.DateOnly = class extends d {
    type = 'string';
    constructor(A) {
      super({ example: '2022-09-15', ...A, format: 'date' });
    }
  }),
  (exports.DateTime = u),
  (exports.Email = class extends c {
    type = 'string';
    constructor(A) {
      super({
        pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
        patternError: 'email',
        ...A,
        format: 'email'
      });
    }
  }),
  (exports.Enumeration = class extends d {
    isEnum = !0;
    values;
    keys;
    constructor(A) {
      super(A);
      let { values: e } = A;
      Array.isArray(e) && (e = Object.fromEntries(e.map(A => [A, A]))),
        (this.keys = Object.keys(e)),
        (this.values = e);
    }
    validate(A) {
      if (((A = super.validate(A)), !1 !== this.params.enumCaseSensitive))
        A = this.params.values[A];
      else {
        const e = this.keys.find(e => e.toLowerCase() === A.toLowerCase());
        A = this.params.values[e];
      }
      if (void 0 === A) {
        if (!0 === this.params.required)
          throw new r('is not one of available options');
        return null;
      }
      return A;
    }
    getValue() {
      return { ...super.getValue(), enum: this.keys };
    }
  }),
  (exports.Header = function (A, e = {}) {
    return new f('header', A, e);
  }),
  (exports.Hostname = class extends c {
    type = 'string';
    constructor(A) {
      super({
        pattern:
          '^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$',
        patternError: 'hostname',
        ...A,
        format: 'hostname'
      });
    }
  }),
  (exports.InputValidationException = class extends t {
    constructor(A) {
      super(A);
    }
  }),
  (exports.Int = class extends p {
    type = 'integer';
    validate(A) {
      if (((A = super.validate(A)), (A = Number.parseInt(A)), isNaN(A)))
        throw new r('is not a valid integer');
      return A;
    }
  }),
  (exports.Ipv4 = class extends c {
    type = 'string';
    constructor(A) {
      super({
        pattern:
          '^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$',
        patternError: 'ipv4',
        ...A,
        format: 'ipv4'
      });
    }
  }),
  (exports.Ipv6 = class extends c {
    type = 'string';
    constructor(A) {
      super({
        pattern:
          '^(?:(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$',
        patternError: 'ipv6',
        ...A,
        format: 'ipv6'
      });
    }
  }),
  (exports.Num = p),
  (exports.Obj = i),
  (exports.OpenAPIRoute = class {
    static isRoute = !0;
    static schema;
    static getSchema() {
      return this.schema;
    }
    get schema() {
      return this.__proto__.constructor.schema;
    }
    getSchema() {
      return this.__proto__.constructor.getSchema();
    }
    static getParsedSchema() {
      const A = this.getSchema();
      let e = null;
      A.requestBody && (e = new h(A.requestBody).getValue());
      const t = {};
      if (A.responses)
        for (const [e, r] of Object.entries(A.responses)) {
          const A = new m(r.schema, { description: r.description });
          t[e] = A.getValue();
        }
      return {
        ...A,
        parameters: A.parameters ? x(A.parameters) : [],
        responses: t,
        ...(e ? { requestBody: e } : {})
      };
    }
    jsonResp(A) {
      return new Response(JSON.stringify(A.data), {
        headers: { 'content-type': 'application/json;charset=UTF-8' },
        status: A.status || 200
      });
    }
    handleValidationError(A) {
      return this.jsonResp({
        data: { errors: A, success: !1, result: {} },
        status: 400
      });
    }
    async execute(...A) {
      const { data: e, errors: t } = await this.validateRequest(A[0]);
      if (Object.keys(t).length > 0) return this.handleValidationError(t);
      A.push(e);
      const r = await this.handle(...A);
      return r instanceof Response || 'object' != typeof r
        ? r
        : this.jsonResp({ data: r });
    }
    async validateRequest(A) {
      const e = this.getSchema().parameters || {},
        t = this.getSchema().requestBody,
        r = w(A),
        s = {},
        a = {};
      for (const [t, n] of Object.entries(e)) {
        const e = n,
          o = e.params.name ? e.params.name : t,
          i = g(A, r, o, e.location);
        try {
          s[o] = e.validate(i);
        } catch (A) {
          a[o] = A.message;
        }
      }
      if ('get' !== A.method.toLowerCase() && t) {
        let e,
          r = !1;
        try {
          (e = await A.json()), (r = !0);
        } catch (A) {
          a.body = A.message;
        }
        if (r)
          try {
            s.body = new h(t).validate(e);
          } catch (A) {
            a['body' + A.key] = A.message;
          }
      }
      return { data: s, errors: a };
    }
    handle(...A) {
      throw new Error('Method not implemented.');
    }
  }),
  (exports.OpenAPIRouter = function (A) {
    const t = {},
      r = e.Router({ base: A?.base, routes: A?.routes }),
      n = {
        openapi: '3.0.2',
        info: {
          title: A?.schema?.info?.title || 'OpenAPI',
          version: A?.schema?.info?.version || '1.0'
        },
        ...A?.schema
      },
      o = { ...n, paths: t },
      i = new Proxy(r, {
        get: (e, s, a) =>
          'original' === s
            ? r
            : 'schema' === s
            ? o
            : (r, ...n) => {
                if ('handle' !== s)
                  if (1 === n.length && void 0 !== n[0].schema?.paths) {
                    const A = n[0];
                    for (const [e, r] of Object.entries(A.schema.paths))
                      t[e] = r;
                  } else if ('all' !== s) {
                    const e = (A?.base || '') + r.replace(/:(\w+)/g, '{$1}');
                    let a, o;
                    for (const A of n)
                      if (
                        (A.name && (o = `${s.toString()}_${A.name}`),
                        A.getParsedSchema)
                      ) {
                        a = A.getParsedSchema();
                        break;
                      }
                    if (
                      (void 0 === t[e] && (t[e] = {}),
                      void 0 === o &&
                        (o = `${s.toString()}_${r.replaceAll('/', '_')}`),
                      void 0 === a)
                    ) {
                      const A = r.match(/:(\w+)/g);
                      a = {
                        operationId: o,
                        parameters: A
                          ? x(
                              A.map(A =>
                                y(String, { name: A.replace(':', '') })
                              )
                            )
                          : null
                      };
                    }
                    t[e][s.toString()] = { operationId: o, ...a };
                  }
                return Reflect.get(
                  e,
                  s,
                  a
                )(
                  r,
                  ...n.map(A =>
                    void 0 !== A.schema?.paths
                      ? A.handle
                      : A.isRoute
                      ? (...e) => new A().execute(...e)
                      : A
                  )
                );
              }
      });
    return (
      void 0 !== n &&
        (null !== A?.docs_url &&
          null !== A?.openapi_url &&
          r.get(
            A?.docs_url || '/docs',
            () =>
              new Response(s(A?.openapi_url || '/openapi.json'), {
                headers: { 'content-type': 'text/html; charset=UTF-8' },
                status: 200
              })
          ),
        null !== A?.redoc_url &&
          null !== A?.openapi_url &&
          r.get(
            A?.redoc_url || '/redocs',
            () =>
              new Response(a(A?.openapi_url || '/openapi.json'), {
                headers: { 'content-type': 'text/html; charset=UTF-8' },
                status: 200
              })
          ),
        null !== A?.openapi_url &&
          r.get(
            A?.openapi_url || '/openapi.json',
            () =>
              new Response(JSON.stringify(o), {
                headers: { 'content-type': 'application/json;charset=UTF-8' },
                status: 200
              })
          ),
        A?.aiPlugin &&
          null !== A?.openapi_url &&
          r.get('/.well-known/ai-plugin.json', e => {
            const t = {
              type: exports.APIType.OPENAPI,
              has_user_authentication: !1,
              url: A?.openapi_url || '/openapi.json',
              ...A?.aiPlugin?.api
            };
            return (
              t.url.startsWith('http') ||
                (t.url = `https://${e.headers.get('host')}${t.url}`),
              new Response(
                JSON.stringify({
                  schema_version: exports.SchemaVersion.V1,
                  auth: { type: exports.AuthType.NONE },
                  ...A?.aiPlugin,
                  api: t
                }),
                {
                  headers: { 'content-type': 'application/json;charset=UTF-8' },
                  status: 200
                }
              )
            );
          })),
      i
    );
  }),
  (exports.Parameter = f),
  (exports.Path = function (A, e = {}) {
    return new f('path', A, e);
  }),
  (exports.Query = y),
  (exports.Regex = c),
  (exports.Required = function (A) {
    return (A.params.required = !0), A;
  }),
  (exports.Resp = m),
  (exports.Str = d),
  (exports.Uuid = class extends c {
    type = 'string';
    constructor(A) {
      super({
        pattern:
          '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
        patternError: 'uuid',
        ...A,
        format: 'uuid'
      });
    }
  }),
  (exports.ValidationError = r),
  (exports.extractParameter = g),
  (exports.extractQueryParameters = w),
  (exports.getFormatedParameters = x),
  (exports.getReDocUI = a),
  (exports.getSwaggerUI = s),
  (exports.removeUndefinedFields = v);

