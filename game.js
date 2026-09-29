const friends = {
  louz: {
    name: "لوز",
    body: "#a9d9bd",
    shade: "#79b89b",
    cheeks: "#f2aaa1",
    silhouette: '<path d="M91 254C70 248 59 265 65 283c4 12 16 18 31 14l13-18-18-25Zm178 0c21-6 32 11 26 29-4 12-16 18-31 14l-13-18 18-25Z" fill="BODY"/><path d="M104 321c-9 15-10 34 0 45 8 8 27 5 34-4l1-29-35-12Zm141 0c9 15 10 34 0 45-8 8-27 5-34-4l-1-29 35-12Z" fill="SHADE"/><path d="M103 137c-4-42 25-75 77-75s81 33 77 75l-8 53c-4 28-23 41-69 41s-65-13-69-41l-8-53Z" fill="BODY"/><ellipse cx="180" cy="276" rx="85" ry="82" fill="BODY"/><path d="M124 92c-8-21 0-37 14-33 12 4 14 23 8 37m72-4c-6-18-3-32 8-33 16-2 20 18 11 38" fill="SHADE" stroke="SHADE" stroke-width="4" stroke-linecap="round"/><ellipse cx="180" cy="296" rx="48" ry="47" fill="#D5EBDD"/><path d="M143 369c-13 2-19 9-17 16 2 6 27 8 45 1m46-17c13 2 19 9 17 16-2 6-27 8-45 1" fill="none" stroke="#679E82" stroke-width="8" stroke-linecap="round"/><circle cx="153" cy="149" r="5.3" fill="#423D50"/><circle cx="207" cy="149" r="5.3" fill="#423D50"/><circle cx="140" cy="168" r="8" fill="CHEEK" opacity=".8"/><circle cx="220" cy="168" r="8" fill="CHEEK" opacity=".8"/><path d="M171 166q9 11 18 0" fill="none" stroke="#675264" stroke-width="3" stroke-linecap="round"/>',
    accessory: { flower: '<g transform="translate(121 87)"><circle cy="-6" r="5" fill="#fff"/><circle cx="6" r="5" fill="#fff"/><circle cy="6" r="5" fill="#fff"/><circle cx="-6" r="5" fill="#fff"/><circle r="3.5" fill="#f2be63"/></g>', star: '<path d="m228 83 4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1 4-9Z" fill="#ffd271"/>', glasses: '<g fill="none" stroke="#665b73" stroke-width="3"><circle cx="153" cy="149" r="12"/><circle cx="207" cy="149" r="12"/><path d="M165 149h30"/></g>', none: "" },
  },
  marmar: {
    name: "مرمر",
    body: "#c9b4e9",
    shade: "#9d82ca",
    cheeks: "#f2a9ad",
    silhouette: '<path d="M93 255c-20-11-38 2-37 21 1 16 17 25 39 17l13-18-15-20Zm174 0c20-11 38 2 37 21-1 16-17 25-39 17l-13-18 15-20Z" fill="SHADE"/><path d="M103 321c-8 16-9 33 1 43 9 8 27 5 34-4v-28l-35-11Zm154 0c8 16 9 33-1 43-9 8-27 5-34-4v-28l35-11Z" fill="SHADE"/><path d="M105 151c-15-39-15-108 2-116 18-9 39 48 44 86h57c5-38 26-95 44-86 17 8 17 77 2 116l-4 39c-4 27-24 42-72 42s-68-15-72-42l-1-39Z" fill="BODY"/><ellipse cx="180" cy="276" rx="86" ry="82" fill="BODY"/><path d="M129 296q51-25 102 0l-7 24q-44 18-88 0l-7-24Z" fill="#E5D9F3"/><path d="M103 369c-12 2-18 9-16 16 2 6 27 8 45 1m96-17c12 2 18 9 16 16-2 6-27 8-45 1" fill="none" stroke="#8C73B8" stroke-width="8" stroke-linecap="round"/><circle cx="153" cy="151" r="5.3" fill="#423D50"/><circle cx="207" cy="151" r="5.3" fill="#423D50"/><circle cx="140" cy="170" r="8" fill="CHEEK" opacity=".8"/><circle cx="220" cy="170" r="8" fill="CHEEK" opacity=".8"/><path d="M171 167q9 12 18 0" fill="none" stroke="#675264" stroke-width="3" stroke-linecap="round"/>',
    accessory: { flower: '<g transform="translate(121 124)"><circle cy="-6" r="5" fill="#fff"/><circle cx="6" r="5" fill="#fff"/><circle cy="6" r="5" fill="#fff"/><circle cx="-6" r="5" fill="#fff"/><circle r="3.5" fill="#f2be63"/></g>', star: '<path d="m234 130 4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1 4-9Z" fill="#ffd271"/>', glasses: '<g fill="none" stroke="#665b73" stroke-width="3"><circle cx="153" cy="151" r="12"/><circle cx="207" cy="151" r="12"/><path d="M165 151h30"/></g>', none: "" },
  },
  shamoos: {
    name: "شموس",
    body: "#f3b08e",
    shade: "#df896c",
    cheeks: "#f17d77",
    silhouette: '<path d="M101 261c-24-15-41-1-37 19 3 14 19 22 42 13l9-16-14-16Zm158 0c24-15 41-1 37 19-3 14-19 22-42 13l-9-16 14-16Z" fill="SHADE"/><path d="M112 321c-11 15-12 32-2 43 9 9 29 7 37-3v-29l-35-11Zm136 0c11 15 12 32 2 43-9 9-29 7-37-3v-29l35-11Z" fill="SHADE"/><path d="M97 143c0-51 32-82 83-82s83 31 83 82v47c0 32-29 47-83 47s-83-15-83-47v-47Z" fill="BODY"/><ellipse cx="180" cy="277" rx="86" ry="83" fill="BODY"/><path d="m170 169 10 9 10-9-10 17-10-17Z" fill="#e6a04b"/><ellipse cx="180" cy="298" rx="48" ry="46" fill="#F8D8B9"/><path d="M112 368c-13 2-19 9-17 16 2 6 27 8 45 1m80-17c13 2 19 9 17 16-2 6-27 8-45 1" fill="none" stroke="#cc7f64" stroke-width="8" stroke-linecap="round"/><circle cx="153" cy="150" r="5.3" fill="#423D50"/><circle cx="207" cy="150" r="5.3" fill="#423D50"/><circle cx="140" cy="169" r="8" fill="CHEEK" opacity=".8"/><circle cx="220" cy="169" r="8" fill="CHEEK" opacity=".8"/><path d="M171 165q9 12 18 0" fill="none" stroke="#675264" stroke-width="3" stroke-linecap="round"/>',
    accessory: { flower: '<g transform="translate(117 99)"><circle cy="-6" r="5" fill="#fff"/><circle cx="6" r="5" fill="#fff"/><circle cy="6" r="5" fill="#fff"/><circle cx="-6" r="5" fill="#fff"/><circle r="3.5" fill="#f2be63"/></g>', star: '<path d="m231 100 4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1 4-9Z" fill="#ffd271"/>', glasses: '<g fill="none" stroke="#665b73" stroke-width="3"><circle cx="153" cy="150" r="12"/><circle cx="207" cy="150" r="12"/><path d="M165 150h30"/></g>', none: "" },
  },
};

const outfits = {
  scarf: '<path d="M130 216q50 24 100 0l-7 19q-43 23-86 0l-7-19Z" fill="#f3cf7b"/><path d="m213 229 15 3-5 32-19-4 9-31Z" fill="#e9b958"/>',
  overalls: '<path d="M135 253q45 15 90 0l10 64q-55 28-110 0l10-64Z" fill="#87aee5"/><path d="m140 258 9-31 18 3-4 40m52-12-9-31-18 3 4 40" fill="none" stroke="#7094ce" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="154" cy="285" r="3" fill="#f8e6a8"/><circle cx="206" cy="285" r="3" fill="#f8e6a8"/>',
  cape: '<path d="M126 214q54 22 108 0l20 95q-72 37-148 0l20-95Z" fill="#9e91e2" opacity=".87"/><path d="m179 240 3 8 9 1-7 6 2 9-7-5-8 5 2-9-7-6 9-1 4-8Z" fill="#ffe291"/>',
  none: "",
};

const sceneNames = { garden: "حديقة الغيمة", sky: "جزيرة الغيم", studio: "ورشة الألوان" };
const numerals = new Intl.NumberFormat("ar-EG");
const settingsKey = "fusha.preferences.v1";
const defaultSettings = {
  character: "louz",
  accessory: "flower",
  outfit: "scarf",
  scene: "garden",
  sound: true,
  volume: 65,
  reducedMotion: false,
  highContrast: false,
  smiles: 0,
  mood: 18,
};
const validCharacters = new Set(Object.keys(friends));
const validAccessories = new Set(["flower", "star", "glasses", "none"]);
const validOutfits = new Set(Object.keys(outfits));
const validScenes = new Set(Object.keys(sceneNames));

function loadSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem(settingsKey) || "{}");
    return {
      character: validCharacters.has(stored.character) ? stored.character : defaultSettings.character,
      accessory: validAccessories.has(stored.accessory) ? stored.accessory : defaultSettings.accessory,
      outfit: validOutfits.has(stored.outfit) ? stored.outfit : defaultSettings.outfit,
      scene: validScenes.has(stored.scene) ? stored.scene : defaultSettings.scene,
      sound: typeof stored.sound === "boolean" ? stored.sound : defaultSettings.sound,
      volume: Number.isFinite(stored.volume) ? Math.max(0, Math.min(100, Math.round(stored.volume))) : defaultSettings.volume,
      reducedMotion: typeof stored.reducedMotion === "boolean" ? stored.reducedMotion : defaultSettings.reducedMotion,
      highContrast: typeof stored.highContrast === "boolean" ? stored.highContrast : defaultSettings.highContrast,
      smiles: Number.isSafeInteger(stored.smiles) ? Math.max(0, stored.smiles) : defaultSettings.smiles,
      mood: Number.isFinite(stored.mood) ? Math.max(0, Math.min(100, stored.mood)) : defaultSettings.mood,
    };
  } catch (error) {
    console.warn("تعذّرت قراءة التفضيلات المحفوظة؛ سيستمر التطبيق بالإعدادات الافتراضية.", error);
    return { ...defaultSettings };
  }
}

const savedSettings = loadSettings();

let currentFriend = savedSettings.character;
let currentAccessory = savedSettings.accessory;
let currentOutfit = savedSettings.outfit;
let soundEnabled = savedSettings.sound;
let soundVolume = savedSettings.volume / 100;
let reducedMotionEnabled = savedSettings.reducedMotion;
let highContrastEnabled = savedSettings.highContrast;
let smileCount = savedSettings.smiles;
let mood = savedSettings.mood;
let audioContext;
let blinkTimeout;
let gestureTimeout;
let fallTimeout;
let recoveryTimeout;
let pressureFrame;
let pointerStart;
let spinTimeout;
let dizzyTimeout;
let lastSpinAt = 0;
let recentSpins = 0;
let foleyNoiseBuffer;
let audioBus;
let voiceState;
let cheekReaction;
let lastCheekTap;
let webglScene;
let installPrompt;
let breathingTimer;
let breathingStartedAt = 0;
let breathingAnnouncedSecond = -1;

function persistSettings() {
  try {
    localStorage.setItem(settingsKey, JSON.stringify({
      character: currentFriend,
      accessory: currentAccessory,
      outfit: currentOutfit,
      scene: document.querySelector("#sceneCard").dataset.scene,
      sound: soundEnabled,
      volume: Math.round(soundVolume * 100),
      reducedMotion: reducedMotionEnabled,
      highContrast: highContrastEnabled,
      smiles: smileCount,
      mood,
    }));
  } catch (error) {
    console.warn("تعذّر حفظ التفضيلات على هذا الجهاز.", error);
  }
}

function prefersReducedMotion() {
  return reducedMotionEnabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getAudioBus() {
  audioContext ??= new window.AudioContext();
  if (!audioBus) {
    audioBus = audioContext.createGain();
    audioBus.gain.value = soundEnabled ? soundVolume : 0;
    audioBus.connect(audioContext.destination);
  }
  return audioBus;
}

function getNaturalShift(stage) {
  const sceneWidth = document.querySelector("#sceneArt").clientWidth;
  const maxShift = Math.min(16, sceneWidth * 0.035);
  stage.style.setProperty("--walk-shift", `${Math.round(Math.random() * maxShift * 2 - maxShift)}px`);
}

const characterArt = document.querySelector("#characterArt");
const voiceProfiles = {
  louz: { synth: 1.42 },
  marmar: { synth: 1.28 },
  shamoos: { synth: 1.5 },
};
const bodyAnchors = [
  { x: 180, y: 157, rx: 70, ry: 84, part: "head", zone: "head", target: "head" },
  { x: 125, y: 91, rx: 28, ry: 48, part: "ear-left", zone: "head", target: "ear-left" },
  { x: 235, y: 91, rx: 28, ry: 48, part: "ear-right", zone: "head", target: "ear-right" },
  { x: 106, y: 251, rx: 30, ry: 36, part: "shoulder-left", zone: "hand", target: "arm-left" },
  { x: 254, y: 251, rx: 30, ry: 36, part: "shoulder-right", zone: "hand", target: "arm-right" },
  { x: 80, y: 284, rx: 27, ry: 27, part: "elbow-left", zone: "hand", target: "elbow-left" },
  { x: 280, y: 284, rx: 27, ry: 27, part: "elbow-right", zone: "hand", target: "elbow-right" },
  { x: 67, y: 306, rx: 23, ry: 22, part: "hand-left", zone: "hand", target: "arm-left" },
  { x: 293, y: 306, rx: 23, ry: 22, part: "hand-right", zone: "hand", target: "arm-right" },
  { x: 180, y: 275, rx: 91, ry: 78, part: "torso", zone: "body", target: "torso" },
  { x: 180, y: 335, rx: 57, ry: 31, part: "hip", zone: "body", target: "torso" },
  { x: 143, y: 351, rx: 25, ry: 21, part: "knee-left", zone: "feet", target: "knee-left" },
  { x: 217, y: 351, rx: 25, ry: 21, part: "knee-right", zone: "feet", target: "knee-right" },
  { x: 137, y: 379, rx: 29, ry: 24, part: "foot-left", zone: "feet", target: "foot-left" },
  { x: 223, y: 379, rx: 29, ry: 24, part: "foot-right", zone: "feet", target: "foot-right" },
];

function createThreeDWorld() {
  const scene = document.querySelector("#sceneArt");
  const canvas = document.createElement("canvas");
  canvas.className = "scene3d-canvas";
  canvas.setAttribute("aria-hidden", "true");
  const gl = canvas.getContext("webgl", { alpha: true, antialias: true, preserveDrawingBuffer: true, powerPreference: "high-performance" })
    || canvas.getContext("experimental-webgl", { alpha: true, antialias: true, preserveDrawingBuffer: true });
  if (!gl) return null;

  const vertexSource = `
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    uniform mat4 uMvp;
    uniform mat4 uModel;
    uniform mat3 uNormalMatrix;
    varying vec3 vWorld;
    varying vec3 vNormal;
    void main() {
      vec4 world = uModel * vec4(aPosition, 1.0);
      vWorld = world.xyz;
      vNormal = normalize(uNormalMatrix * aNormal);
      gl_Position = uMvp * vec4(aPosition, 1.0);
    }
  `;
  const fragmentSource = `
    precision mediump float;
    uniform vec3 uColor;
    uniform vec3 uLight;
    uniform vec3 uCamera;
    uniform float uMaterial;
    uniform float uOpacity;
    varying vec3 vWorld;
    varying vec3 vNormal;
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(uLight - vWorld);
      vec3 viewDir = normalize(uCamera - vWorld);
      float diffuse = max(dot(normal, lightDir), 0.0);
      float specular = pow(max(dot(normal, normalize(lightDir + viewDir)), 0.0), 28.0);
      float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.5);
      float ambient = 0.48 + 0.08 * clamp(vWorld.y, 0.0, 2.0);
      vec3 color = uColor * (ambient + diffuse * 0.62);
      color += vec3(1.0) * specular * uMaterial * 0.28;
      color += uColor * rim * 0.12;
      gl_FragColor = vec4(color, uOpacity);
    }
  `;
  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const message = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`تعذّر تجهيز رسوم WebGL: ${message}`);
    }
    return shader;
  };
  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(`تعذّر ربط مشهد WebGL: ${gl.getProgramInfoLog(program)}`);
  }

  const attributes = {
    position: gl.getAttribLocation(program, "aPosition"),
    normal: gl.getAttribLocation(program, "aNormal"),
  };
  const uniforms = {
    mvp: gl.getUniformLocation(program, "uMvp"),
    model: gl.getUniformLocation(program, "uModel"),
    normal: gl.getUniformLocation(program, "uNormalMatrix"),
    color: gl.getUniformLocation(program, "uColor"),
    light: gl.getUniformLocation(program, "uLight"),
    camera: gl.getUniformLocation(program, "uCamera"),
    material: gl.getUniformLocation(program, "uMaterial"),
    opacity: gl.getUniformLocation(program, "uOpacity"),
  };

  const makeMesh = (vertices, normals, indices) => {
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    return { vertexBuffer, normalBuffer, indexBuffer, count: indices.length };
  };

  const sphereData = (longitude = 20, latitude = 14) => {
    const vertices = [], normals = [], indices = [];
    for (let row = 0; row <= latitude; row += 1) {
      const theta = row * Math.PI / latitude;
      for (let column = 0; column <= longitude; column += 1) {
        const phi = column * 2 * Math.PI / longitude;
        const x = -Math.cos(phi) * Math.sin(theta);
        const y = Math.cos(theta);
        const z = Math.sin(phi) * Math.sin(theta);
        vertices.push(x, y, z);
        normals.push(x, y, z);
        if (row < latitude && column < longitude) {
          const first = row * (longitude + 1) + column;
          const second = first + longitude + 1;
          indices.push(first, second, first + 1, second, second + 1, first + 1);
        }
      }
    }
    return { vertices, normals, indices };
  };
  const sphere = makeMesh(...Object.values(sphereData()));
  const plane = makeMesh(
    [-30, 0, -30, 30, 0, -30, 30, 0, 30, -30, 0, 30],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 2, 1, 0, 3, 2],
  );
  const cylinder = makeMesh(
    [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 2, 0, 2, 3],
  );
  const boxFaces = [
    { normal: [0, 0, 1], vertices: [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]] },
    { normal: [0, 0, -1], vertices: [[1, -1, -1], [-1, -1, -1], [-1, 1, -1], [1, 1, -1]] },
    { normal: [1, 0, 0], vertices: [[1, -1, 1], [1, -1, -1], [1, 1, -1], [1, 1, 1]] },
    { normal: [-1, 0, 0], vertices: [[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]] },
    { normal: [0, 1, 0], vertices: [[-1, 1, -1], [-1, 1, 1], [1, 1, 1], [1, 1, -1]] },
    { normal: [0, -1, 0], vertices: [[-1, -1, 1], [-1, -1, -1], [1, -1, -1], [1, -1, 1]] },
  ];
  const boxVertices = [], boxNormals = [], boxIndices = [];
  for (const [faceIndex, face] of boxFaces.entries()) {
    for (const vertex of face.vertices) {
      boxVertices.push(...vertex);
      boxNormals.push(...face.normal);
    }
    const start = faceIndex * 4;
    boxIndices.push(start, start + 1, start + 2, start, start + 2, start + 3);
  }
  const boxMesh = makeMesh(boxVertices, boxNormals, boxIndices);
  const ringVertices = [], ringNormals = [], ringIndices = [];
  const ringSegments = 48;
  for (let segment = 0; segment <= ringSegments; segment += 1) {
    const angle = segment / ringSegments * Math.PI * 2;
    const x = Math.cos(angle), z = Math.sin(angle);
    ringVertices.push(x * .74, 0, z * .74, x, 0, z);
    ringNormals.push(0, 1, 0, 0, 1, 0);
    if (segment < ringSegments) {
      const inner = segment * 2, outer = inner + 1;
      ringIndices.push(inner, inner + 2, outer + 2, inner, outer + 2, outer);
    }
  }
  const impactRing = makeMesh(ringVertices, ringNormals, ringIndices);

  const identity = () => new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  const multiply = (a, b) => {
    const result = new Float32Array(16);
    for (let column = 0; column < 4; column += 1) {
      for (let row = 0; row < 4; row += 1) {
        result[column * 4 + row] =
          a[row] * b[column * 4] + a[4 + row] * b[column * 4 + 1]
          + a[8 + row] * b[column * 4 + 2] + a[12 + row] * b[column * 4 + 3];
      }
    }
    return result;
  };
  const invert = (a) => {
    const out = new Float32Array(16);
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    const b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
    let determinant = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!determinant) return identity();
    determinant = 1 / determinant;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * determinant;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * determinant;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * determinant;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * determinant;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * determinant;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * determinant;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * determinant;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * determinant;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * determinant;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * determinant;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * determinant;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * determinant;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * determinant;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * determinant;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * determinant;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * determinant;
    return out;
  };
  const transformPoint = (matrix, point) => {
    const x = point[0], y = point[1], z = point[2];
    const w = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
    return [
      (matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12]) / w,
      (matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13]) / w,
      (matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]) / w,
    ];
  };
  const normalizeVector = (v) => { const length = Math.hypot(...v) || 1; return v.map((value) => value / length); };
  const translation = (x, y, z) => {
    const result = identity();
    result[12] = x; result[13] = y; result[14] = z;
    return result;
  };
  const scaling = (x, y, z) => {
    const result = identity();
    result[0] = x; result[5] = y; result[10] = z;
    return result;
  };
  const rotationX = (angle) => {
    const result = identity(), c = Math.cos(angle), s = Math.sin(angle);
    result[5] = c; result[6] = s; result[9] = -s; result[10] = c;
    return result;
  };
  const rotationY = (angle) => {
    const result = identity(), c = Math.cos(angle), s = Math.sin(angle);
    result[0] = c; result[2] = -s; result[8] = s; result[10] = c;
    return result;
  };
  const rotationZ = (angle) => {
    const result = identity(), c = Math.cos(angle), s = Math.sin(angle);
    result[0] = c; result[1] = s; result[4] = -s; result[5] = c;
    return result;
  };
  const perspective = (fieldOfView, aspect, near, far) => {
    const f = 1 / Math.tan(fieldOfView / 2);
    const result = new Float32Array(16);
    result[0] = f / aspect; result[5] = f;
    result[10] = (far + near) / (near - far); result[11] = -1;
    result[14] = 2 * far * near / (near - far);
    return result;
  };
  const lookAt = (eye, target, up) => {
    const normalize = (v) => { const n = Math.hypot(...v) || 1; return v.map((x) => x / n); };
    const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const subtract = (a, b) => a.map((x, i) => x - b[i]);
    const z = normalize(subtract(eye, target));
    const x = normalize(cross(up, z));
    const y = cross(z, x);
    return new Float32Array([
      x[0], y[0], z[0], 0, x[1], y[1], z[1], 0,
      x[2], y[2], z[2], 0, -x.reduce((s, v, i) => s + v * eye[i], 0),
      -y.reduce((s, v, i) => s + v * eye[i], 0), -z.reduce((s, v, i) => s + v * eye[i], 0), 1,
    ]);
  };
  const colorVector = (hex) => {
    const value = Number.parseInt(hex.replace("#", ""), 16);
    return [(value >> 16 & 255) / 255, (value >> 8 & 255) / 255, (value & 255) / 255];
  };
  const draw = (mesh, model, hex, material = 0.55, opacity = 1) => {
    const mvp = multiply(viewProjection, model);
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vertexBuffer);
    gl.enableVertexAttribArray(attributes.position);
    gl.vertexAttribPointer(attributes.position, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
    gl.enableVertexAttribArray(attributes.normal);
    gl.vertexAttribPointer(attributes.normal, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
    gl.uniformMatrix4fv(uniforms.model, false, model);
    gl.uniformMatrix4fv(uniforms.mvp, false, mvp);
    const inverse = invert(model);
    gl.uniformMatrix3fv(uniforms.normal, false, new Float32Array([
      inverse[0], inverse[4], inverse[8],
      inverse[1], inverse[5], inverse[9],
      inverse[2], inverse[6], inverse[10],
    ]));
    gl.uniform3fv(uniforms.color, colorVector(hex));
    gl.uniform1f(uniforms.material, material);
    gl.uniform1f(uniforms.opacity, opacity);
    gl.depthMask(opacity >= 1);
    gl.drawElements(gl.TRIANGLES, mesh.count, gl.UNSIGNED_SHORT, 0);
    gl.depthMask(true);
  };
  const ellipsoid = (parent, position, size, color, material, opacity = 1) => {
    let model = multiply(parent, translation(...position));
    model = multiply(model, scaling(...size));
    draw(sphere, model, color, material, opacity);
  };
  const drawBox = (parent, position, size, color, material = .55) => {
    let model = multiply(parent, translation(...position));
    model = multiply(model, scaling(...size));
    draw(boxMesh, model, color, material);
  };
  const link = (parent, from, to, radius, color) => {
    const direction = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];
    const length = Math.hypot(...direction) || 1;
    const unit = direction.map((v) => v / length);
    const dot = Math.max(-1, Math.min(1, unit[1]));
    const axis = [unit[2], 0, -unit[0]];
    const axisLength = Math.hypot(...axis);
    let rotate = identity();
    if (axisLength > 0.0001) {
      const angle = Math.acos(dot);
      const [x, y, z] = axis.map((v) => v / axisLength);
      const c = Math.cos(angle), s = Math.sin(angle), t = 1 - c;
      rotate = new Float32Array([
        t*x*x+c, t*x*y+s*z, t*x*z-s*y, 0,
        t*x*y-s*z, t*y*y+c, t*y*z+s*x, 0,
        t*x*z+s*y, t*y*z-s*x, t*z*z+c, 0, 0, 0, 0, 1,
      ]);
    }
    let model = multiply(parent, translation((from[0] + to[0]) / 2, (from[1] + to[1]) / 2, (from[2] + to[2]) / 2));
    model = multiply(model, rotate);
    model = multiply(model, scaling(radius, length / 2 + radius * .42, radius));
    draw(sphere, model, color, .5);
  };

  const friendColors = {
    louz: { body: "#a9d9bd", shade: "#79b89b", belly: "#d5ebdd", cheek: "#f2aaa1" },
    marmar: { body: "#c9b4e9", shade: "#9d82ca", belly: "#e5d9f3", cheek: "#f2a9ad" },
    shamoos: { body: "#f3b08e", shade: "#df896c", belly: "#f8d8b9", cheek: "#f17d77" },
  };
  const motion = {
    current: "idle", changedAt: performance.now(), x: 0, y: .035, z: 0,
    pitch: 0, roll: 0, yaw: 0, vy: 0, vx: 0, vz: 0, fallStyle: "",
    restingPitch: 0, restingRoll: 0, pitchVelocity: 0, rollVelocity: 0,
    bounceCount: 0, impactSquash: 0, impactPulse: 0, impactX: 0, impactZ: 0,
    cameraYaw: 0, pointerX: 0, pointerY: 0, lastFrame: performance.now(),
    characterRoot: identity(), inverseViewProjection: identity(),
    recovery: null, recoveryPhase: "",
  };
  const visualParticles = [];
  let viewProjection = identity();
  let width = 1, height = 1;
  const resize = () => {
    const bounds = scene.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.round(bounds.width * ratio));
    height = Math.max(1, Math.round(bounds.height * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width; canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  };
  const ensureCanvas = () => { if (!canvas.isConnected) scene.prepend(canvas); };
  const supportHeight = (pitch, roll, yaw) => {
    let orientation = multiply(multiply(rotationY(yaw), rotationZ(roll)), rotationX(pitch));
    let lowest = Number.POSITIVE_INFINITY;
    const shapes = [
      { center: [0, 1.72, 0], size: [.82, .88, .58] },
      { center: [0, 2.63, .015], size: [.63, .61, .55] },
      { center: [-.52, 2.93, 0], size: [.19, .44, .17] },
      { center: [.52, 2.93, 0], size: [.19, .44, .17] },
    ];
    const motionState = characterStage.dataset.motion;
    const fallPhase = motionState === "falling"
      ? Math.max(0, Math.min(1, (performance.now() - motion.changedAt) / 1_050))
      : 1;
    for (const side of [-1, 1]) {
      if (motionState === "falling" || motionState === "fallen") {
        const reach = motionState === "fallen" ? 1 : Math.min(1, fallPhase * 1.18);
        const flail = motionState === "fallen" && !prefersReducedMotion() ? Math.sin(performance.now() / 190 + side) : 0;
        shapes.push(
          { center: [side * (1.08 + reach * .16 + flail * .08), motionState === "fallen" ? .28 + Math.abs(flail) * .1 : 1.02 - reach * .56, motionState === "fallen" ? .55 : .28 + reach * .44], size: [.21, .15, .18] },
          { center: [side * .4, motionState === "fallen" ? .32 : .48 + Math.max(0, Math.sin((fallPhase + (side < 0 ? 0 : .38)) * Math.PI)) * .42, .1], size: [.25, .24, .24] },
          { center: [side * .43, motionState === "fallen" ? .13 : .15 + Math.max(0, Math.sin((fallPhase + (side < 0 ? 0 : .38)) * Math.PI)) * .42, .18], size: [.3, .15, .35] },
        );
      } else {
        shapes.push(
          { center: [side * .85, 1.82, 0], size: [.36, .2, .2] },
          { center: [side * 1.04, 1.38, .03], size: [.3, .18, .19] },
          { center: [side * 1.06, 1.15, .07], size: [.21, .15, .18] },
          { center: [side * .38, .71, .03], size: [.25, .37, .24] },
          { center: [side * .43, .15, .18], size: [.3, .15, .35] },
        );
      }
    }
    const recoveryPhase = characterStage.dataset.recoveryPhase;
    if (characterStage.dataset.motion === "recovering" && ["brace", "roll-to-knee"].includes(recoveryPhase)) {
      shapes.push(
        { center: [-.67, .11, .68], size: [.21, .15, .18] },
        { center: [.67, .11, .68], size: [.21, .15, .18] },
      );
    }
    for (const shape of shapes) {
      const center = transformPoint(orientation, [shape.center[0], shape.center[1] - 1.45, shape.center[2]]);
      const verticalRadius = Math.hypot(
        orientation[1] * shape.size[0],
        orientation[5] * shape.size[1],
        orientation[9] * shape.size[2],
      );
      lowest = Math.min(lowest, center[1] - verticalRadius);
    }
    return -1.45 - lowest;
  };
  const animate = (now) => {
    ensureCanvas();
    resize();
    const reducedVisualMotion = prefersReducedMotion();
    const ambientTime = reducedVisualMotion ? 0 : now;
    const dt = Math.min((now - motion.lastFrame) / 1000, .04);
    motion.lastFrame = now;
    const state = characterStage.dataset.motion || "idle";
    if (state !== motion.current) {
      const old = motion.current;
      motion.current = state;
      motion.changedAt = now;
      if (state === "falling") {
        motion.fallStyle = characterStage.dataset.fallStyle || "forward";
        const impulseX = Number(characterStage.dataset.fallImpulseX || 0);
        const impulseY = Number(characterStage.dataset.fallImpulseY || 0);
        const tripped = Math.hypot(impulseX, impulseY) > .12;
        motion.vy = .42;
        motion.vx = tripped ? impulseX * 1.05 : motion.fallStyle.includes("left") ? -.55 : motion.fallStyle.includes("right") ? .55 : -.12;
        motion.vz = tripped ? impulseY * .8 : motion.fallStyle === "forward" ? .38 : motion.fallStyle === "backward" ? -.32 : 0;
        motion.restingPitch = motion.fallStyle === "forward" ? 1.14 : motion.fallStyle === "backward" ? -1.08 : motion.fallStyle.startsWith("three-quarter") ? .62 : .08;
        motion.restingRoll = motion.fallStyle.includes("left") ? -.82 : motion.fallStyle.includes("right") ? .82 : 0;
        motion.pitchVelocity = (motion.restingPitch - motion.pitch) * 1.8;
        motion.rollVelocity = (motion.restingRoll - motion.roll) * 1.8;
        motion.bounceCount = 0;
      }
      if (state === "recovering") {
        motion.changedAt = now;
        motion.recovery = { pitch: motion.pitch, roll: motion.roll, x: motion.x, z: motion.z };
        motion.recoveryPhase = "";
      }
      if (state === "idle" && old !== "idle") {
        motion.pitch = 0; motion.roll = 0; motion.yaw = 0;
        motion.x = 0; motion.y = .035; motion.z = 0;
        motion.vx = 0; motion.vy = 0; motion.vz = 0;
        motion.restingPitch = 0; motion.restingRoll = 0;
        motion.pitchVelocity = 0; motion.rollVelocity = 0;
        motion.bounceCount = 0; motion.impactSquash = 0;
        motion.recovery = null;
      }
    }

    if (state === "falling") {
      motion.vy -= 8.8 * dt;
      motion.x += motion.vx * dt;
      motion.y += motion.vy * dt;
      motion.z += motion.vz * dt;
      motion.vx *= Math.pow(.992, dt * 60);
      motion.vz *= Math.pow(.992, dt * 60);
      const fallingFor = (now - motion.changedAt) / 1000;
      const fallProgress = Math.min(1, fallingFor / 1.05);
      const fallEase = fallProgress * fallProgress * (3 - 2 * fallProgress);
      const targetPitch = motion.restingPitch * fallEase;
      const targetRoll = motion.restingRoll * fallEase;
      motion.pitchVelocity += ((targetPitch - motion.pitch) * 15 - motion.pitchVelocity * 5.4) * dt;
      motion.rollVelocity += ((targetRoll - motion.roll) * 15 - motion.rollVelocity * 5.4) * dt;
      motion.pitch += motion.pitchVelocity * dt;
      motion.roll += motion.rollVelocity * dt;
      const support = supportHeight(motion.pitch, motion.roll, motion.yaw);
      if (motion.y <= support && motion.vy < 0) {
        const impactSpeed = -motion.vy;
        motion.y = support;
        motion.impactSquash = Math.min(.22, impactSpeed * .036);
        motion.impactPulse = Math.max(motion.impactPulse, Math.min(1, .28 + impactSpeed * .105));
        motion.impactX = motion.x;
        motion.impactZ = motion.z;
        playImpactSound(impactSpeed);
        if (impactSpeed > .92 && motion.bounceCount < 1) {
          motion.bounceCount += 1;
          motion.vy = impactSpeed * .14;
          motion.pitchVelocity *= -.18;
          motion.rollVelocity *= -.18;
        } else if (fallingFor > .18) {
          motion.vy = 0;
          motion.vx *= .25;
          motion.vz *= .25;
          finishLanding(characterStage);
        }
      }
    }
    if (state === "fallen") {
      const settle = supportHeight(motion.pitch, motion.roll, motion.yaw);
      motion.y += (settle - motion.y) * Math.min(1, dt * 8);
      motion.pitch += (motion.restingPitch - motion.pitch) * Math.min(1, dt * 1.8);
      motion.roll += (motion.restingRoll - motion.roll) * Math.min(1, dt * 1.8);
      motion.pitchVelocity *= Math.pow(.75, dt * 60);
      motion.rollVelocity *= Math.pow(.75, dt * 60);
      motion.impactSquash *= Math.exp(-dt * 6);
    }
    if (state === "recovering") {
      const progress = Math.min(1, (now - motion.changedAt) / 2700);
      const phase = characterStage.dataset.recoveryPhase || "brace";
      if (phase !== motion.recoveryPhase) {
        motion.recoveryPhase = phase;
        motion.recoveryPhaseAt = now;
      }
      const recovery = motion.recovery || { pitch: motion.pitch, roll: motion.roll, x: motion.x, z: motion.z };
      const targets = {
        brace: { pitch: recovery.pitch * .72 + .36, roll: recovery.roll * .72, x: recovery.x * .8, z: recovery.z * .8 },
        "roll-to-knee": { pitch: recovery.pitch * .45 + .3, roll: recovery.roll * .42, x: recovery.x * .6, z: recovery.z * .55 },
        kneel: { pitch: .27, roll: recovery.roll * .22, x: recovery.x * .35, z: recovery.z * .35 },
        push: { pitch: .12, roll: recovery.roll * .1, x: recovery.x * .15, z: recovery.z * .15 },
        stand: { pitch: .015, roll: 0, x: 0, z: 0 },
        dust: { pitch: 0, roll: 0, x: 0, z: 0 },
      };
      const target = targets[phase] || targets.kneel;
      const blend = 1 - Math.exp(-dt * (phase === "stand" || phase === "dust" ? 3.1 : 5));
      motion.pitch += (target.pitch - motion.pitch) * blend;
      motion.roll += (target.roll - motion.roll) * blend;
      motion.x += (target.x - motion.x) * blend;
      motion.z += (target.z - motion.z) * blend;
      const support = supportHeight(motion.pitch, motion.roll, motion.yaw);
      motion.y += (support + .018 - motion.y) * Math.min(1, dt * 7);
      motion.impactSquash *= Math.exp(-dt * 7);
    }
    if (state === "spinning") {
      const progress = Math.min(1, (now - Number(characterStage.dataset.spinStart || now)) / 760);
      const sign = characterStage.dataset.spinDirection === "left" ? -1 : 1;
      motion.yaw = sign * (reducedVisualMotion ? Math.PI * 2 : Math.PI * 6) * progress;
      motion.y = .035 + Math.sin(progress * Math.PI) * (reducedVisualMotion ? .04 : .18);
      motion.roll = Math.sin(progress * Math.PI * 5) * (reducedVisualMotion ? .025 : .12);
      motion.cameraYaw = sign * Math.sin(progress * Math.PI * 2) * (reducedVisualMotion ? .06 : .44);
    } else {
      motion.cameraYaw += (0 - motion.cameraYaw) * Math.min(1, dt * (state === "dizzy" ? .35 : 1.4));
    }
    if (state === "dizzy") {
      const elapsed = now / 1000;
      const wobbleScale = reducedVisualMotion ? .12 : 1;
      motion.roll = Math.sin(elapsed * 2.6) * .13 * wobbleScale;
      motion.pitch = Math.cos(elapsed * 1.7) * .075 * wobbleScale;
      motion.x = Math.sin(elapsed * 1.9) * .08 * wobbleScale;
    }
    motion.impactSquash *= Math.exp(-dt * 6);
    motion.impactPulse *= Math.exp(-dt * 2.15);
    if (state === "idle" || state === "spinning" || state === "dizzy") {
      const floorHeight = supportHeight(motion.pitch, motion.roll, motion.yaw);
      if (state !== "spinning") motion.y += (floorHeight + .018 - motion.y) * Math.min(1, dt * 6);
    }

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(program);
    const aspect = width / height;
    const cameraDistance = 7.8;
    const cameraShake = reducedVisualMotion ? 0 : motion.impactPulse * .025;
    const cameraTarget = [
      Math.sin(now * .065) * cameraShake,
      1.55 + Math.sin(now * .083) * cameraShake * .48,
      0,
    ];
    const camera = [
      Math.sin(motion.cameraYaw) * cameraDistance + Math.cos(now * .071) * cameraShake,
      3.0 + Math.sin(now * .059) * cameraShake,
      Math.cos(motion.cameraYaw) * cameraDistance,
    ];
    viewProjection = multiply(
      perspective(34 * Math.PI / 180, aspect, .1, 80),
      lookAt(camera, cameraTarget, [0, 1, 0]),
    );
    motion.inverseViewProjection = invert(viewProjection);
    gl.uniform3f(uniforms.light, -3.5, 7, 5.5);
    gl.uniform3fv(uniforms.camera, camera);

    const sceneName = document.querySelector("#sceneCard").dataset.scene;
    const floorColor = sceneName === "sky" ? "#b7b2d9" : sceneName === "studio" ? "#d8b193" : "#a6c49f";
    draw(plane, identity(), floorColor, .22);
    ellipsoid(identity(), [0, .008, 0], [5.6, .018, 3.2], sceneName === "sky" ? "#d7d4ee" : sceneName === "studio" ? "#f0cfad" : "#c8dcba", .18);

    if (sceneName === "garden") {
      const gardenTrees = [
        { x: -2.65, z: -2.15, sway: Math.sin(ambientTime / 1700) * .025 },
        { x: 2.55, z: -2.35, sway: Math.sin(ambientTime / 1900 + 1) * .03 },
      ];
      for (const tree of gardenTrees) {
        const { x, z, sway } = tree;
        link(identity(), [x, .04, z], [x + sway, 1.72, z], .19, "#9c795c");
        link(identity(), [x + sway, 1.2, z], [x - .42 + sway, 1.72, z + .06], .105, "#a98465");
        link(identity(), [x + sway, 1.35, z], [x + .42 + sway, 1.88, z + .08], .105, "#a98465");
        ellipsoid(identity(), [x + sway, 2.12, z], [.68, .74, .55], "#76ae83", .34);
        ellipsoid(identity(), [x - .42 + sway, 1.91, z + .02], [.48, .48, .43], "#91c493", .3);
        ellipsoid(identity(), [x + .39 + sway, 2.03, z + .08], [.46, .5, .42], "#6ca67b", .3);
        ellipsoid(identity(), [x - .16 + sway, 2.45, z + .04], [.42, .46, .39], "#a8d39a", .35);
      }
      ellipsoid(identity(), [-2.15, .13, -.35], [.45, .22, .37], "#829e83");
      ellipsoid(identity(), [2.2, .11, -.65], [.33, .17, .29], "#a7b69b");
      for (const [x, z, scaleValue] of [[-2.8, -.25, .72], [2.85, -.45, .58]]) {
        const stem = multiply(translation(x, .39 * scaleValue, z), scaling(.1 * scaleValue, .39 * scaleValue, .1 * scaleValue));
        draw(sphere, stem, "#f5e8d2");
        ellipsoid(identity(), [x, .67 * scaleValue, z], [.34 * scaleValue, .21 * scaleValue, .31 * scaleValue], "#eaa489");
        ellipsoid(identity(), [x - .08, .79 * scaleValue, z + .14], [.065, .035, .045], "#fff0d4");
        ellipsoid(identity(), [x + .1, .78 * scaleValue, z + .16], [.05, .03, .04], "#fff0d4");
      }
      for (const x of [-3.05, -2.83, 2.78, 3.05]) {
        const sway = Math.sin(ambientTime / 520 + x) * .035;
        link(identity(), [x, .04, -.2], [x + (x < 0 ? -.13 : .13) + sway, .38, -.25], .035, "#568e6a");
        link(identity(), [x, .04, -.2], [x + (x < 0 ? .11 : -.11) + sway, .3, -.22], .03, "#79b17b");
      }
      for (const [x, z] of [[-1.85, -.8], [1.85, -1.05]]) {
        ellipsoid(identity(), [x, .18, z], [.35, .22, .3], "#78a87a");
        for (let petal = 0; petal < 5; petal += 1) {
          const angle = petal * Math.PI * .4;
          ellipsoid(identity(), [x + Math.cos(angle) * .1, .47 + Math.sin(angle) * .1, z + .08], [.065, .065, .055], petal % 2 ? "#fff0c8" : "#f5d78a");
        }
        ellipsoid(identity(), [x, .47, z + .13], [.045, .045, .035], "#dd9a69");
      }
    } else if (sceneName === "sky") {
      ellipsoid(identity(), [-2.5, 1.55, -2.15], [.53, .25, .43], "#edeafa", .45);
      ellipsoid(identity(), [-2.83, 1.64, -2.18], [.34, .32, .35], "#faf8ff", .5);
      ellipsoid(identity(), [-2.27, 1.7, -2.12], [.38, .35, .37], "#f8f6ff", .5);
      ellipsoid(identity(), [2.35, 2.05, -2.55], [.6, .26, .42], "#ebe8fc", .45);
      ellipsoid(identity(), [2.02, 2.14, -2.52], [.35, .35, .34], "#fff", .52);
      ellipsoid(identity(), [2.66, 2.19, -2.48], [.4, .37, .36], "#f6f4ff", .52);
      ellipsoid(identity(), [2.45, .95, -1.65], [.58, .17, .44], "#8d87bd", .32);
      ellipsoid(identity(), [2.45, 1.09, -1.65], [.62, .12, .48], "#d8d0f1", .45);
      ellipsoid(identity(), [2.86, 3.02, -1.85], [.31, .31, .3], "#f4d392", .9);
      for (let star = 0; star < 7; star += 1) {
        const x = -2.15 + star * .67;
        const y = 3.15 + Math.sin(star * 1.7) * .24;
        const twinkle = .8 + Math.sin(ambientTime / 380 + star * 1.3) * .2;
        ellipsoid(identity(), [x, y, -2.45], [.035 * twinkle, .035 * twinkle, .035], "#fff4bc", .95);
      }
    } else {
      const easelSway = Math.sin(ambientTime / 1250) * .018;
      const easelX = 2.2 + easelSway;
      const canvasZ = -1.45;
      link(identity(), [easelX, .08, canvasZ + .14], [easelX, 2.5, canvasZ], .085, "#b57d59");
      link(identity(), [easelX, .08, canvasZ + .14], [easelX - .58, 2.23, canvasZ], .075, "#c38b63");
      link(identity(), [easelX, .08, canvasZ + .14], [easelX + .58, 2.23, canvasZ], .075, "#c38b63");
      link(identity(), [easelX - .48, 1.04, canvasZ + .1], [easelX + .48, 1.04, canvasZ + .1], .055, "#936849");
      drawBox(identity(), [easelX, 1.81, canvasZ], [.48, .61, .065], "#f9edd7", .22);
      ellipsoid(identity(), [easelX - .11, 1.95, canvasZ + .068], [.2, .28, .025], "#89b7a5", .42);
      ellipsoid(identity(), [easelX + .16, 1.76, canvasZ + .072], [.2, .19, .025], "#f0a27f", .48);
      ellipsoid(identity(), [easelX + .01, 2.02, canvasZ + .08], [.105, .115, .025], "#f2ce79", .5);
      ellipsoid(identity(), [easelX - .13, 1.61, canvasZ + .083], [.12, .07, .025], "#9f91d8", .48);
      drawBox(identity(), [-2.22, .91, -1.26], [.67, .085, .32], "#aa795e", .35);
      drawBox(identity(), [-2.22, 1.1, -1.35], [.62, .1, .29], "#c59772", .38);
      for (const [index, color] of ["#e7a07f", "#8dbba2", "#d9b76f", "#9d8bc8"].entries()) {
        const x = -2.55 + index * .22;
        ellipsoid(identity(), [x, 1.25 + (index % 2) * .035, -1.31], [.09, .11, .09], color, .4);
        drawBox(identity(), [x, 1.37 + (index % 2) * .035, -1.31], [.042, .025, .042], "#f4ead8", .26);
      }
      ellipsoid(identity(), [-2.7, 2.61, -2.1], [.33, .33, .3], "#f4d392", .9);
      drawBox(identity(), [-2.4, 1.65, -2], [.8, .07, .08], "#987657", .38);
    }
    if (motion.impactPulse > .012) {
      const radius = reducedVisualMotion ? .78 : .34 + (1 - motion.impactPulse) * 1.25;
      const ripple = multiply(translation(motion.impactX, .045, motion.impactZ), scaling(radius, 1, radius));
      const rippleColor = sceneName === "sky" ? "#f5edff" : sceneName === "studio" ? "#f4be82" : "#e6f2d0";
      draw(impactRing, ripple, rippleColor, .35, motion.impactPulse * (reducedVisualMotion ? .16 : .55));
    }

    const friend = friendColors[currentFriend];
    const breathingDeeply = characterArt.classList.contains("is-breathe");
    const breath = reducedVisualMotion ? 0 : Math.sin(now / 620) * (breathingDeeply ? .052 : .018);
    const figure = characterArt.querySelector(".character-svg");
    const contact = figure?.dataset.contact || "";
    const shadowScale = 1 + Math.max(0, motion.y) * .16 + Math.abs(motion.roll) * .08;
    const shadowOpacity = Math.max(.06, .23 - Math.max(0, motion.y) * .075);
    const shadowX = motion.x + Math.sin(motion.roll) * .4;
    const shadowZ = motion.z + Math.sin(motion.pitch) * .48;
    ellipsoid(identity(), [shadowX, .024, shadowZ], [.94 * shadowScale, .012, .46 * shadowScale], "#425047", .02, shadowOpacity * .52);
    ellipsoid(identity(), [shadowX, .03, shadowZ], [.64 * shadowScale, .014, .3 * shadowScale], "#36443a", .04, shadowOpacity);
    let root = multiply(translation(motion.x, motion.y + 1.45, motion.z), rotationY(motion.yaw));
    root = multiply(root, rotationZ(motion.roll));
    root = multiply(root, rotationX(motion.pitch));
    root = multiply(root, translation(0, -1.45, 0));
    motion.characterRoot = root;
    const contactPressure = Number(figure?.dataset.pressure || 0);
    const contactActive = characterArt.classList.contains("is-held");
    const torsoTouched = contactActive && (contact === "torso" || contact === "hip");
    const recoveryPhase = characterStage.dataset.recoveryPhase || "";
    const recoveryProgress = state === "recovering" ? Math.min(1, (now - motion.changedAt) / 2700) : 0;
    const recoveryBend = state === "recovering"
      ? recoveryPhase === "brace" || recoveryPhase === "roll-to-knee" ? .32
        : recoveryPhase === "kneel" ? .2 : recoveryPhase === "push" ? .08 : 0
      : 0;
    const touchBend = torsoTouched ? Math.sin(now / 58) * contactPressure * .065 : 0;
    const forwardBend = (state === "falling" ? Math.max(-.32, Math.min(.32, motion.pitch * .18))
      : state === "fallen" ? motion.restingPitch * .08
        : recoveryBend) + touchBend;
    const sideBend = Math.max(-.22, Math.min(.22, motion.roll * .13));
    let bodyRoot = multiply(root, translation(0, 1.47, 0));
    bodyRoot = multiply(bodyRoot, rotationZ(sideBend));
    bodyRoot = multiply(bodyRoot, rotationX(forwardBend));
    bodyRoot = multiply(bodyRoot, translation(0, -1.47, 0));
    let bellyPress = torsoTouched ? contactPressure * (contact === "torso" ? .9 : .48) : 0;
    if (state === "spinning") bellyPress += .16;
    const laugh = !reducedVisualMotion && figure?.dataset.animating === "true" && figure.dataset.zone === "body" ? Math.sin(now / 55) * .065 : 0;
    const recoveryCrouch = state === "recovering" ? Math.sin(recoveryProgress * Math.PI) * .08 : 0;
    const impactFlex = motion.impactSquash;
    const torsoScale = [
      1 + breath * .35 + laugh + impactFlex * .55,
      1 + breath - bellyPress * .09 - recoveryCrouch + laugh * .35 - impactFlex * 1.15,
      1 + breath * .45 + bellyPress * .08 + impactFlex * .45,
    ];
    if (currentOutfit === "cape") ellipsoid(bodyRoot, [0, 1.56, -.49], [.65, .75, .17], "#9387d2", .48, .92);
    ellipsoid(bodyRoot, [0, 1.68, 0], [.82 * torsoScale[0], .88 * torsoScale[1], .58 * torsoScale[2]], friend.shade, .62);
    ellipsoid(bodyRoot, [0, 1.74 + breath * .3, .075], [.75 * torsoScale[0], .84 * torsoScale[1], .53 * torsoScale[2]], friend.body, .86);
    ellipsoid(bodyRoot, [0, 1.57 + breath * .3, .515 + impactFlex * .045], [.45 + laugh + impactFlex * .06, .49 - bellyPress * .035 + Math.abs(laugh) - impactFlex * .08, .13 + bellyPress * .07 + impactFlex * .045], friend.belly, .95);
    ellipsoid(bodyRoot, [0, 1.58, .635 + impactFlex * .06], [.27, .028, .018], friend.shade, .75);
    if (currentOutfit === "scarf") {
      ellipsoid(bodyRoot, [0, 2.35, .18], [.49, .115, .48], "#f3cf7b", .72);
      ellipsoid(bodyRoot, [.34, 2.22, .4], [.12, .31, .09], "#e9b958", .55);
    } else if (currentOutfit === "overalls") {
      ellipsoid(bodyRoot, [0, 1.35, .43], [.59, .47, .2], "#87aee5", .64);
      for (const side of [-1, 1]) ellipsoid(bodyRoot, [side * .31, 1.91, .38], [.105, .4, .105], "#7094ce", .48);
      ellipsoid(bodyRoot, [0, 1.52, .63], [.24, .18, .045], "#7094ce", .36);
    }

    const fallPhase = state === "falling" ? Math.max(0, Math.min(1, (now - motion.changedAt) / 1_050)) : 0;
    const fallReach = fallPhase * fallPhase * (3 - 2 * fallPhase);
    const fallFlail = state === "falling" ? Math.sin(fallPhase * Math.PI) : state === "fallen" && !reducedVisualMotion ? Math.sin(now / 190) : 0;
    const armSwing = state === "idle" ? (reducedVisualMotion ? 0 : Math.sin(now / 540) * (breathingDeeply ? .16 : .09)) : state === "spinning" ? Math.sin(now / 34) * .45 * (reducedVisualMotion ? .2 : 1) : state === "dizzy" ? Math.sin(now / 110) * .35 * (reducedVisualMotion ? .16 : 1) : state === "falling" ? .75 : state === "fallen" ? (reducedVisualMotion ? 0 : Math.sin(now / 220) * .18) : state === "recovering" ? .18 + Math.sin(now / 150) * .08 : .28;
    const legSwing = state === "idle" ? (reducedVisualMotion ? 0 : Math.sin(now / 540) * .04) : state === "spinning" ? Math.cos(now / 37) * .32 * (reducedVisualMotion ? .2 : 1) : state === "dizzy" ? Math.sin(now / 130) * .2 * (reducedVisualMotion ? .16 : 1) : state === "falling" ? .62 : state === "fallen" ? (reducedVisualMotion ? 0 : Math.sin(now / 190) * .25) : state === "recovering" ? .1 : .2;
    const recoveryKneeling = state === "recovering" && ["brace", "roll-to-knee", "kneel"].includes(recoveryPhase);
    const recoveryLead = characterStage.dataset.recoveryStyle === "brace" ? 1 : -1;
    for (const side of [-1, 1]) {
      const shoulder = [side * .68, 2.05, 0];
      let elbow = [side * (1.02 + armSwing * .17), 1.62 + armSwing * .18, .02];
      let hand = [side * (1.06 + armSwing * .22), 1.15 + Math.abs(armSwing) * .13, .07];
      if (recoveryKneeling) {
        const reaching = recoveryPhase === "brace" || recoveryPhase === "roll-to-knee";
        const supportArm = side === recoveryLead;
        elbow = supportArm
          ? [side * .55, reaching ? .7 : 1.05, reaching ? .42 : .22]
          : [side * .42, reaching ? 1.32 : 1.58, .27];
        hand = supportArm
          ? [side * .67, reaching ? .11 : .34, reaching ? .68 : .45]
          : [side * .37, reaching ? .66 : 1.08, .56];
      } else if (state === "recovering" && recoveryPhase === "push") {
        elbow = [side * .62, side === recoveryLead ? 1.12 : 1.52, .3];
        hand = [side * .74, side === recoveryLead ? .73 : 1.1, .42];
      } else if (state === "falling") {
        const sidePhase = fallPhase + (side < 0 ? 0 : .13);
        const reach = Math.min(1, sidePhase * 1.18);
        const recoil = Math.sin(sidePhase * Math.PI * 2.2 + side) * .11 * (1 - fallPhase);
        elbow = [
          side * (1.02 + reach * .12 + recoil),
          1.58 - reach * .46 + recoil,
          .16 + reach * .37,
        ];
        hand = [
          side * (1.08 + reach * .16 + recoil),
          1.02 - reach * .56 + recoil * 1.5,
          .28 + reach * .44,
        ];
      } else if (state === "fallen") {
        elbow = [side * (.88 + fallFlail * .12), .82 + fallFlail * .2, .34 + fallFlail * .12];
        hand = [side * (1.02 + fallFlail * .18), .28 + Math.abs(fallFlail) * .2, .55];
      }
      const contactedArm = contactActive && figure?.dataset.contact?.includes(side < 0 ? "left" : "right");
      if (contactedArm) {
        elbow[1] += Math.sin(now / 52) * contactPressure * .12;
        hand[1] += Math.cos(now / 47) * contactPressure * .18;
      }
      link(bodyRoot, shoulder, elbow, .19, friend.body);
      ellipsoid(bodyRoot, elbow, [.21, .2, .2], friend.shade);
      link(bodyRoot, elbow, hand, .16, friend.body);
      ellipsoid(bodyRoot, hand, [.21, .15, .18], friend.body);
      const hip = [side * .37, .92, 0];
      let knee = [side * (.4 + legSwing * .12), .48 + (state === "recovering" ? .22 : 0), .06];
      let foot = [side * (.43 + legSwing * .18), .15 + (state === "spinning" ? Math.abs(legSwing) * .14 : 0), .18];
      if (recoveryKneeling) {
        knee = [side * .4, side === recoveryLead ? .22 : .48, side === recoveryLead ? .2 : .1];
        foot = [side * .43, .14, side === recoveryLead ? -.28 : .42];
      } else if (state === "recovering" && recoveryPhase === "push") {
        knee = [side * .4, side === recoveryLead ? .52 : .74, side === recoveryLead ? .1 : .18];
        foot = [side * .43, .14, side === recoveryLead ? .3 : -.22];
      } else if (state === "falling") {
        const step = Math.max(0, Math.sin((fallPhase + (side < 0 ? 0 : .38)) * Math.PI));
        knee = [side * (.4 + step * .12), .48 + step * .42, .06 + step * .18];
        foot = [side * (.43 + step * .2), .15 + step * .42, .18 + step * .22];
      } else if (state === "fallen") {
        const kick = reducedVisualMotion ? 0 : Math.max(0, Math.sin(now / 210 + side * 1.4));
        knee = [side * (.4 + kick * .1), .32 + kick * .28, .16 + kick * .12];
        foot = [side * (.43 + kick * .16), .13 + kick * .12, .18 + kick * .18];
      }
      if (contactActive && figure?.dataset.contact === (side < 0 ? "knee-left" : "knee-right")) knee[1] -= contactPressure * .13;
      if (contactActive && figure?.dataset.contact === (side < 0 ? "foot-left" : "foot-right")) foot[1] += Math.sin(now / 48) * contactPressure * .14;
      link(root, hip, knee, .24, friend.shade);
      ellipsoid(root, knee, [.22, .21, .22], friend.body);
      link(root, knee, foot, .18, friend.shade);
      ellipsoid(root, foot, [.3, .15, .35], friend.body);
    }

    const headBob = reducedVisualMotion ? 0 : state === "dizzy" ? Math.sin(now / 95) * .11 : state === "spinning" ? Math.sin(now / 32) * .08 : Math.sin(now / 430) * (breathingDeeply ? .045 : .022);
    const headLagX = Math.max(-.19, Math.min(.19, motion.pitchVelocity * .032));
    const headLagZ = Math.max(-.15, Math.min(.15, motion.rollVelocity * .03));
    const cheekElapsed = cheekReaction ? (now - cheekReaction.startedAt) / 1000 : Infinity;
    const cheekRecoil = cheekReaction && cheekElapsed < .85
      ? Math.max(0, Math.sin(Math.min(1, cheekElapsed / .42) * Math.PI) * Math.exp(-cheekElapsed * 1.4) * cheekReaction.intensity * (reducedVisualMotion ? .3 : 1))
      : 0;
    if (cheekReaction && cheekElapsed >= .85) cheekReaction = null;
    const headRotation = multiply(
      rotationZ((state === "dizzy" ? Math.sin(now / 170) * .2 : state === "spinning" ? Math.sin(now / 29) * .18 : 0)
        + motion.roll * .18 + headLagZ
        + (cheekReaction ? -cheekReaction.side * cheekRecoil * .3 : 0)),
      rotationX(motion.pitch * .42 + headLagX + cheekRecoil * .12),
    );
    const cheekSide = cheekReaction?.side || 0;
    const headRoot = multiply(multiply(bodyRoot, translation(-cheekSide * cheekRecoil * .16, 2.63 + headBob, .015)), headRotation);
    const headPress = contactActive && ["head", "ear-left", "ear-right", "cheek-left", "cheek-right"].includes(contact) ? contactPressure : 0;
    ellipsoid(headRoot, [0, 0, 0], [.63 - headPress * .025, .61 - headPress * .045, .55 - headPress * .035], friend.shade, .64);
    ellipsoid(headRoot, [0, -.035, .045], [.59 - headPress * .025, .57 - headPress * .045, .54 - headPress * .035], friend.body, .9);
    const blink = figure?.classList.contains("is-blinking")
      || state === "falling" && now - motion.changedAt > 280 && now - motion.changedAt < 430;
    const expression = figure?.dataset.expression || "smile";
    const eyesWide = expression === "surprise" || expression === "nervous";
    const voiceElapsed = voiceState ? (performance.now() - voiceState.startedAt) / 1000 : Infinity;
    const voiceActive = soundEnabled && voiceState && voiceElapsed < voiceState.duration;
    const voicePulse = voiceActive ? Math.max(0, Math.sin(voiceElapsed * 2 * Math.PI * 5.2)) : 0;
    for (const side of [-1, 1]) {
      const earWobble = state === "spinning" ? Math.sin(now / 40 + side) * .34
        : state === "dizzy" ? Math.sin(now / 145 + side) * .24
          : motion.roll * .35 + motion.rollVelocity * .035 + motion.pitchVelocity * side * .02
            + (cheekReaction?.side === side ? cheekRecoil * .17 : 0)
            + (contactActive && contact === (side < 0 ? "ear-left" : "ear-right") ? Math.sin(now / 38) * contactPressure * .22 : 0);
      const ear = multiply(headRoot, translation(side * .52, .39, 0));
      const earRot = multiply(ear, rotationZ(side * (-.28 + earWobble)));
      ellipsoid(earRot, [0, .3, 0], [.19, .44, .17], friend.shade);
      ellipsoid(earRot, [0, .31, .135], [.105, .3, .055], friend.cheek, .75);
      const cheekHit = (contactActive && contact === (side < 0 ? "cheek-left" : "cheek-right") ? contactPressure : 0)
        + (cheekReaction?.side === side ? cheekRecoil : 0);
      const eyeRoot = multiply(headRoot, translation(side * (.22 - cheekHit * .035), .075 - cheekHit * .035, .57));
      const eyeClosed = blink || expression === "wink" && side === 1;
      ellipsoid(eyeRoot, [0, 0, 0], [.145 + cheekHit * .025, eyeClosed ? .025 : Math.max(.04, (eyesWide ? .21 : .19) - cheekHit * .075), .075], eyeClosed ? friend.shade : "#fffdf7", .9);
      const pupil = state === "dizzy" ? Math.sin(now / 62 + side) * .045 : motion.cameraYaw * .04;
      if (!eyeClosed) {
        ellipsoid(eyeRoot, [pupil, -.012, .064], [.075, .105, .043], "#473d52", .95);
        ellipsoid(eyeRoot, [pupil - .023, .04, .101], [.024, .03, .014], "#ffffff", 1);
      }
      const cheekPulse = headPress ? .035 * headPress : Math.abs(motion.roll) * .035;
      ellipsoid(headRoot, [side * (.38 - cheekHit * .045), -.16, .55], [.13 + cheekPulse + cheekHit * .04, .078 + cheekPulse + cheekHit * .025, .05], friend.cheek, .35);
      if (cheekHit > .015) {
        ellipsoid(headRoot, [side * (.38 - cheekHit * .045), -.16, .558], [.15 + cheekHit * .055, .093 + cheekHit * .035, .04], "#ed8988", .25, Math.min(.52, .2 + cheekHit * .34));
      }
      const browLift = (expression === "surprise" ? .07 : expression === "nervous" ? -.025 : 0) - cheekHit * .075;
      const brow = multiply(headRoot, translation(side * .22, .31 + browLift + (state === "dizzy" ? Math.sin(now / 120) * .04 : 0), .6));
      const browTilt = expression === "nervous" ? side * -.14 : state === "fallen" ? side * .07 : 0;
      ellipsoid(multiply(brow, rotationZ(browTilt)), [0, 0, 0], [.16, .035, .026], "#594957", .45);
    }
    ellipsoid(headRoot, [0, -.07, .6], [.075, .05, .045], friend.shade, .75);
    const mouthOpen = voicePulse > .22 || expression === "laugh" || expression === "surprise" || state === "dizzy" || state === "spinning"
      || state === "falling" && now - motion.changedAt > 240 && now - motion.changedAt < 820;
    ellipsoid(headRoot, [0, -.26, .59], [mouthOpen ? .12 + voicePulse * .035 : .12, mouthOpen ? .055 + voicePulse * .06 : .04, .035], "#714b60", .52);
    if (currentAccessory === "flower") {
      const flower = multiply(headRoot, translation(-.46, .4, .32));
      for (let petal = 0; petal < 5; petal += 1) {
        const angle = petal * Math.PI * .4;
        ellipsoid(flower, [Math.cos(angle) * .09, Math.sin(angle) * .09, 0], [.065, .065, .045], "#fff7dc", .74);
      }
      ellipsoid(flower, [0, 0, .035], [.045, .045, .035], "#f1c064", .75);
    } else if (currentAccessory === "star") {
      const star = multiply(headRoot, translation(.43, .42, .32));
      for (let point = 0; point < 5; point += 1) {
        const angle = point * Math.PI * .4 - Math.PI / 2;
        ellipsoid(star, [Math.cos(angle) * .09, Math.sin(angle) * .09, 0], [.055, .055, .045], "#ffd271", .82);
      }
      ellipsoid(star, [0, 0, .025], [.064, .064, .05], "#ffe292", .82);
    } else if (currentAccessory === "glasses") {
      for (const side of [-1, 1]) {
        ellipsoid(headRoot, [side * .22, .075, .64], [.17, .035, .025], "#665b73", .4);
        ellipsoid(headRoot, [side * .22, .19, .64], [.14, .025, .025], "#665b73", .4);
        ellipsoid(headRoot, [side * .22, -.04, .64], [.14, .025, .025], "#665b73", .4);
        ellipsoid(headRoot, [side * .34, .075, .64], [.025, .11, .025], "#665b73", .4);
        ellipsoid(headRoot, [side * .1, .075, .64], [.025, .11, .025], "#665b73", .4);
        ellipsoid(headRoot, [side * .22, .075, .63], [.125, .125, .018], "#8fb9cc", .36, .38);
      }
      ellipsoid(headRoot, [0, .075, .65], [.07, .025, .025], "#665b73", .4);
    }
    if (state === "dizzy") {
      const stars = [[-.48, .68], [0, .81], [.49, .64]];
      for (const [x, y] of stars) {
        const star = multiply(headRoot, translation(x, y + Math.sin(ambientTime / 115 + x * 7) * (reducedVisualMotion ? 0 : .055), .02));
        ellipsoid(star, [0, 0, 0], [.075, .075, .075], "#ffd575", 1);
      }
    }

    for (let index = visualParticles.length - 1; index >= 0; index -= 1) {
      const particle = visualParticles[index];
      particle.age += dt;
      particle.vy -= (particle.kind === "dust" ? .55 : 3.8) * dt;
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.z += particle.vz * dt;
      particle.vx *= Math.pow(.985, dt * 60);
      particle.vz *= Math.pow(.985, dt * 60);
      if (particle.kind === "dust" && particle.y < .04) {
        particle.y = .04;
        particle.vy = Math.max(0, particle.vy) * .2;
        particle.vx *= .88;
        particle.vz *= .88;
      }
      if (particle.age >= particle.life) {
        visualParticles.splice(index, 1);
        continue;
      }
      const progress = particle.age / particle.life;
      const opacity = (1 - progress) * (particle.kind === "dust" ? .24 : .68);
      const size = particle.size * (particle.kind === "dust" ? 1 + progress * 1.8 : 1 - progress * .42);
      ellipsoid(identity(), [particle.x, particle.y, particle.z], [size, size, size], particle.color, .22, opacity);
    }

    requestAnimationFrame(animate);
  };
  const pick = (event) => {
    const bounds = scene.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
    const y = 1 - (event.clientY - bounds.top) / bounds.height * 2;
    const near = transformPoint(motion.inverseViewProjection, [x, y, -1]);
    const far = transformPoint(motion.inverseViewProjection, [x, y, 1]);
    const inverseRoot = invert(motion.characterRoot);
    const origin = transformPoint(inverseRoot, near);
    const direction = normalizeVector(transformPoint(inverseRoot, far).map((value, i) => value - origin[i]));
    const targets = [
      { center: [-.38, 2.47, .55], size: [.17, .12, .09], part: "cheek-left", zone: "head", target: "cheek-left" },
      { center: [.38, 2.47, .55], size: [.17, .12, .09], part: "cheek-right", zone: "head", target: "cheek-right" },
      { center: [0, 2.63, 0], size: [.64, .62, .56], part: "head", zone: "head", target: "head" },
      { center: [-.52, 2.95, 0], size: [.21, .37, .19], part: "ear-left", zone: "head", target: "ear-left" },
      { center: [.52, 2.95, 0], size: [.21, .37, .19], part: "ear-right", zone: "head", target: "ear-right" },
      { center: [-.83, 1.9, 0], size: [.29, .37, .25], part: "shoulder-left", zone: "hand", target: "arm-left" },
      { center: [.83, 1.9, 0], size: [.29, .37, .25], part: "shoulder-right", zone: "hand", target: "arm-right" },
      { center: [-1.02, 1.62, .02], size: [.22, .22, .22], part: "elbow-left", zone: "hand", target: "elbow-left" },
      { center: [1.02, 1.62, .02], size: [.22, .22, .22], part: "elbow-right", zone: "hand", target: "elbow-right" },
      { center: [-1.06, 1.15, .07], size: [.22, .17, .2], part: "hand-left", zone: "hand", target: "hand-left" },
      { center: [1.06, 1.15, .07], size: [.22, .17, .2], part: "hand-right", zone: "hand", target: "hand-right" },
      { center: [0, 1.72, 0], size: [.8, .89, .57], part: "torso", zone: "body", target: "torso" },
      { center: [0, .92, 0], size: [.53, .35, .4], part: "hip", zone: "body", target: "hip" },
      { center: [-.4, .48, .06], size: [.24, .22, .23], part: "knee-left", zone: "feet", target: "knee-left" },
      { center: [.4, .48, .06], size: [.24, .22, .23], part: "knee-right", zone: "feet", target: "knee-right" },
      { center: [-.43, .15, .18], size: [.31, .17, .36], part: "foot-left", zone: "feet", target: "foot-left" },
      { center: [.43, .15, .18], size: [.31, .17, .36], part: "foot-right", zone: "feet", target: "foot-right" },
    ];
    let nearest = null;
    for (const target of targets) {
      const offset = origin.map((value, i) => (value - target.center[i]) / target.size[i]);
      const scaledDirection = direction.map((value, i) => value / target.size[i]);
      const a = scaledDirection.reduce((sum, value) => sum + value * value, 0);
      const b = 2 * offset.reduce((sum, value, i) => sum + value * scaledDirection[i], 0);
      const c = offset.reduce((sum, value) => sum + value * value, 0) - 1;
      const discriminant = b * b - 4 * a * c;
      if (discriminant < 0) continue;
      const distance = (-b - Math.sqrt(discriminant)) / (2 * a);
      if (distance < 0 || (nearest && nearest.distance < distance)) continue;
      const localPoint = origin.map((value, i) => value + direction[i] * distance);
      nearest = {
        ...target,
        distance,
        worldPosition: transformPoint(motion.characterRoot, localPoint),
        point: {
          x: Math.max(0, Math.min(360, 180 + localPoint[0] * 100)),
          y: Math.max(0, Math.min(420, 394 - localPoint[1] * 90)),
        },
      };
    }
    if (nearest) return { anatomy: nearest, point: nearest.point };
    const point = getSvgPoint(event);
    return { anatomy: getAnatomy(point), point };
  };
  const emitParticles = (zone, point, intensity = .55, kind = "spark", worldPosition) => {
    if (visualParticles.length > 70) visualParticles.splice(0, visualParticles.length - 70);
    const local = point ? [(point.x - 180) / 100, (394 - point.y) / 90, .46] : [motion.x, .32, motion.z];
    const fallbackHeight = kind === "dust" ? .08 : zone === "feet" ? motion.y + .16 : motion.y + .5;
    const origin = worldPosition || (point ? transformPoint(motion.characterRoot, local) : [motion.x, fallbackHeight, motion.z]);
    const colors = zone === "feet"
      ? ["#d8d2bf", "#c3c9be", "#e4d7bd"]
      : ["#e6c984", "#b7d6c7", "#c8bddf", "#ddb9aa"];
    const count = prefersReducedMotion() ? (kind === "dust" ? 4 : 0) : kind === "dust" ? 18 : Math.round(4 + Math.min(1, intensity) * 5);
    for (let index = 0; index < count; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = kind === "dust" ? .35 + Math.random() * 1.05 : .42 + Math.random() * .95;
      visualParticles.push({
        x: origin[0] + (Math.random() - .5) * .22,
        y: kind === "dust" ? Math.max(.045, origin[1] + Math.random() * .08) : origin[1] + Math.random() * .13,
        z: origin[2] + (Math.random() - .5) * .2,
        vx: Math.cos(angle) * speed,
        vy: kind === "dust" ? .45 + Math.random() * .85 : .3 + Math.random() * 1.25,
        vz: Math.sin(angle) * speed * .7,
        age: 0,
        life: kind === "dust" ? .65 + Math.random() * .7 : .35 + Math.random() * .5,
        size: kind === "dust" ? .035 + Math.random() * .035 : .025 + Math.random() * .025,
        color: colors[Math.floor(Math.random() * colors.length)],
        kind,
      });
    }
  };
  scene.prepend(canvas);
  scene.classList.add("webgl-active");
  characterStage.classList.add("webgl-active");
  window.addEventListener("resize", resize);
  requestAnimationFrame(animate);
  return {
    canvas,
    gl,
    pick,
    emitParticles,
    clearEffects: () => {
      visualParticles.length = 0;
      motion.impactPulse = 0;
      motion.impactX = 0;
      motion.impactZ = 0;
    },
  };
}

function renderCharacter() {
  window.clearTimeout(gestureTimeout);
  characterArt.classList.remove("is-held");
  const friend = friends[currentFriend];
  characterStage.setAttribute("aria-label", `${friend.name}، المس أي جزء من الشخصية أو اسحب بلطف`);
  characterArt.style.setProperty("--friend-body", friend.body);
  characterArt.style.setProperty("--friend-shade", friend.shade);
  characterArt.style.setProperty("--friend-body", friend.body);
  characterArt.style.setProperty("--friend-shade", friend.shade);
  const earPaths = {
    louz: '<g class="ear ear-left"><path d="M126 126C93 89 104 38 125 43c22 5 22 55 28 74" fill="SHADE" stroke="SHADE" stroke-width="5" stroke-linecap="round"/></g><g class="ear ear-right"><path d="M234 126c33-37 22-88 1-83-22 5-22 55-28 74" fill="SHADE" stroke="SHADE" stroke-width="5" stroke-linecap="round"/></g>',
    marmar: '<g class="ear ear-left"><path d="M127 139c-22-42-34-89-21-98 17-13 36 40 52 80" fill="BODY" stroke="SHADE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g><g class="ear ear-right"><path d="M233 139c22-42 34-89 21-98-17-13-36 40-52 80" fill="BODY" stroke="SHADE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>',
    shamoos: '<g class="ear ear-left"><path d="M130 130c-15-43-3-87 10-86 14 1 13 45 10 81" fill="BODY" stroke="SHADE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M138 69c5 10 7 24 6 41" fill="none" stroke="#f7d3a4" stroke-width="4" stroke-linecap="round"/></g><g class="ear ear-right"><path d="M230 130c15-43 3-87-10-86-14 1-13 45-10 81" fill="BODY" stroke="SHADE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M222 69c-5 10-7 24-6 41" fill="none" stroke="#f7d3a4" stroke-width="4" stroke-linecap="round"/></g>',
  };
  const ears = earPaths[currentFriend]
    .replaceAll("BODY", friend.body)
    .replaceAll("SHADE", friend.shade);
  const outfit = outfits[currentOutfit];
  const accessory = friend.accessory[currentAccessory];
  characterArt.innerHTML = `<svg class="character-svg" viewBox="0 0 360 420" role="img" aria-labelledby="friendTitle" xmlns="http://www.w3.org/2000/svg"><title id="friendTitle">${friend.name}، صديق خيالي لطيف</title>
    <defs>
      <radialGradient id="bodyHighlight" cx="34%" cy="20%" r="84%"><stop stop-color="#fff" stop-opacity=".53"/><stop offset=".35" stop-color="#fff" stop-opacity=".16"/><stop offset=".72" stop-color="#6a6473" stop-opacity=".02"/><stop offset="1" stop-color="#403853" stop-opacity=".24"/></radialGradient>
      <radialGradient id="bellyHighlight" cx="38%" cy="24%" r="78%"><stop stop-color="#fff" stop-opacity=".82"/><stop offset=".42" stop-color="#fff" stop-opacity=".45"/><stop offset=".82" stop-color="#fff" stop-opacity=".13"/><stop offset="1" stop-color="#546a61" stop-opacity=".18"/></radialGradient>
    </defs>
    <g class="arm-group arm-left"><g class="upper-arm"><path d="M112 233c-17 9-29 27-39 47l17 11c14-19 25-30 38-38Z" fill="${friend.body}"/><path d="M103 249q-17 10-25 24" fill="none" stroke="url(#bodyHighlight)" stroke-width="5" stroke-linecap="round"/></g><g class="elbow-joint elbow-left"><ellipse cx="80" cy="284" rx="10" ry="11" fill="${friend.shade}" opacity=".36"/><g class="forearm-group"><path d="M80 284c-11 13-14 23-10 29l16 2c9-6 14-16 15-25Z" fill="${friend.body}"/><path d="M78 287q11 3 16 12" fill="none" stroke="${friend.shade}" stroke-width="3" stroke-linecap="round" opacity=".6"/><ellipse cx="70" cy="305" rx="15" ry="11" transform="rotate(-35 70 305)" fill="${friend.body}"/><ellipse cx="66" cy="308" rx="3" ry="2" fill="${friend.shade}" opacity=".65"/></g></g></g>
    <g class="arm-group arm-right"><g class="upper-arm"><path d="M248 233c17 9 29 27 39 47l-17 11c-14-19-25-30-38-38Z" fill="${friend.body}"/><path d="M257 249q17 10 25 24" fill="none" stroke="url(#bodyHighlight)" stroke-width="5" stroke-linecap="round"/></g><g class="elbow-joint elbow-right"><ellipse cx="280" cy="284" rx="10" ry="11" fill="${friend.shade}" opacity=".36"/><g class="forearm-group"><path d="M280 284c11 13 14 23 10 29l-16 2c-9-6-14-16-15-25Z" fill="${friend.body}"/><path d="M282 287q-11 3-16 12" fill="none" stroke="${friend.shade}" stroke-width="3" stroke-linecap="round" opacity=".6"/><ellipse cx="290" cy="305" rx="15" ry="11" transform="rotate(35 290 305)" fill="${friend.body}"/><ellipse cx="294" cy="308" rx="3" ry="2" fill="${friend.shade}" opacity=".65"/></g></g></g>
    <g class="leg-group leg-left"><g class="thigh-group"><path d="M142 306q-11 22-11 46l21 12q16-24 16-47Z" fill="${friend.shade}"/><path d="M143 317q-6 15-6 26" fill="none" stroke="url(#bodyHighlight)" stroke-width="5" stroke-linecap="round"/></g><g class="knee-joint knee-left"><ellipse cx="143" cy="351" rx="14" ry="12" fill="${friend.body}"/><g class="shin-group shin-left"><path d="M132 354q-8 19-6 36l27 5q8-17 7-34Z" fill="${friend.shade}"/><ellipse class="foot foot-left" cx="137" cy="385" rx="25" ry="12" fill="${friend.body}"/><path d="M120 387q14 6 31 0" fill="none" stroke="#fff" stroke-opacity=".46" stroke-width="3" stroke-linecap="round"/></g></g></g>
    <g class="leg-group leg-right"><g class="thigh-group"><path d="M218 306q11 22 11 46l-21 12q-16-24-16-47Z" fill="${friend.shade}"/><path d="M217 317q6 15 6 26" fill="none" stroke="url(#bodyHighlight)" stroke-width="5" stroke-linecap="round"/></g><g class="knee-joint knee-right"><ellipse cx="217" cy="351" rx="14" ry="12" fill="${friend.body}"/><g class="shin-group shin-right"><path d="M228 354q8 19 6 36l-27 5q-8-17-7-34Z" fill="${friend.shade}"/><ellipse class="foot foot-right" cx="223" cy="385" rx="25" ry="12" fill="${friend.body}"/><path d="M209 387q14 6 31 0" fill="none" stroke="#fff" stroke-opacity=".46" stroke-width="3" stroke-linecap="round"/></g></g></g>
    <g class="torso-group"><ellipse cx="180" cy="284" rx="88" ry="78" fill="${friend.shade}"/><ellipse cx="180" cy="273" rx="86" ry="75" fill="${friend.body}"/><ellipse cx="180" cy="273" rx="86" ry="75" fill="url(#bodyHighlight)"/><ellipse cx="180" cy="273" rx="83" ry="72" fill="none" stroke="#fff" stroke-opacity=".17" stroke-width="2"/><path class="tummy-patch" d="M136 285q0-44 44-46t44 46q0 44-44 46t-44-46Z" fill="url(#bellyHighlight)"/><path class="tummy-line" d="M168 290q12 8 24 0" fill="none" stroke="${friend.shade}" stroke-opacity=".46" stroke-width="2" stroke-linecap="round"/>${outfit}
    </g>
    <g class="head-group"><g class="ear-group">${ears}</g><path d="M103 145c-2-49 28-78 77-78s79 29 77 78l-5 41c-3 30-30 48-72 48s-69-18-72-48l-5-41Z" fill="${friend.shade}"/><path d="M107 139c0-46 26-69 73-69s73 23 73 69l-5 44c-3 27-28 43-68 43s-65-16-68-43l-5-44Z" fill="${friend.body}"/><path d="M111 124c14-30 43-44 70-44s56 14 70 44" fill="none" stroke="url(#bodyHighlight)" stroke-width="8" stroke-linecap="round"/>
      <g class="brows" fill="none" stroke="#655261" stroke-width="3.5" stroke-linecap="round"><path class="brow-left" d="M135 132q13-8 27 0"/><path class="brow-right" d="M198 132q14-8 27 0"/></g>
      <g class="eyes eyes-open"><g class="eye eye-left"><ellipse cx="153" cy="155" rx="13" ry="16" fill="#fffdfb"/><ellipse class="pupil" cx="155" cy="157" rx="7" ry="10" fill="#483e52"/><circle cx="157" cy="152" r="2.5" fill="#fff"/></g><g class="eye eye-right"><ellipse cx="207" cy="155" rx="13" ry="16" fill="#fffdfb"/><ellipse class="pupil" cx="205" cy="157" rx="7" ry="10" fill="#483e52"/><circle cx="207" cy="152" r="2.5" fill="#fff"/></g></g>
      <g class="eyes eyes-closed" fill="none" stroke="#56485a" stroke-width="3.3" stroke-linecap="round"><path d="M140 158q13 9 26 0"/><path d="M194 158q13 9 26 0"/></g>
      <g class="wink-eye" fill="none" stroke="#56485a" stroke-width="3.3" stroke-linecap="round"><path d="M140 158q13 9 26 0"/></g>
      <ellipse class="cheek cheek-left" cx="137" cy="177" rx="11" ry="6" fill="${friend.cheeks}" opacity=".55"/><ellipse class="cheek cheek-right" cx="223" cy="177" rx="11" ry="6" fill="${friend.cheeks}" opacity=".55"/>
      <ellipse cx="180" cy="174" rx="4" ry="2.8" fill="${friend.shade}" opacity=".76"/>
      <g class="mouth mouth-smile" fill="none" stroke="#694c5e" stroke-width="3" stroke-linecap="round"><path d="M167 184q13 13 26 0"/></g>
      <g class="mouth mouth-laugh"><path d="M164 181q16-8 32 0-2 21-16 21t-16-21Z" fill="#774659"/><path d="M169 186q11 6 22 0" fill="none" stroke="#fff7eb" stroke-width="3" stroke-linecap="round"/><ellipse cx="180" cy="196" rx="6" ry="3" fill="#ed8e9e"/></g>
      <g class="mouth mouth-surprise"><ellipse cx="180" cy="188" rx="7" ry="10" fill="#774659"/><ellipse cx="180" cy="191" rx="3.5" ry="4" fill="#ed8e9e"/></g>
      <g class="mouth mouth-grin" fill="none" stroke="#694c5e" stroke-width="3" stroke-linecap="round"><path d="M163 182q17 19 34 0"/><path d="M170 189h20" stroke="#fff" stroke-width="2"/></g>
      <g class="mouth mouth-nervous" fill="none" stroke="#694c5e" stroke-width="3.3" stroke-linecap="round"><path d="M170 188q5-7 10 0t10 0"/></g>
      <path class="face-sweat" d="M232 147c0 6-5 11-10 11-4 0-7-3-7-7 0-6 7-14 9-17 3 4 8 9 8 13Z" fill="#8dcae0"/>
      <g class="dizzy-stars" fill="#f3c36f"><path d="m143 94 4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1 4-9Z"/><path d="m191 77 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1 3-7Z"/><path d="m221 100 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1 3-7Z"/></g>
      ${accessory}
    </g>
  </svg>`;
  characterArt.setAttribute("aria-label", `${friend.name}، صديقك الخيالي`);
  characterStage.setAttribute("aria-label", `${friend.name}: المس أي جزء من الشخصية أو اسحب بلطف`);
  scheduleBlink();
}

function scheduleBlink() {
  window.clearTimeout(blinkTimeout);
  blinkTimeout = window.setTimeout(() => {
    const figure = characterArt.querySelector(".character-svg");
    if (!figure || figure.dataset.animating === "true") {
      scheduleBlink();
      return;
    }
    figure.classList.add("is-blinking");
    window.setTimeout(() => figure.classList.remove("is-blinking"), 145);
    scheduleBlink();
  }, 2200 + Math.random() * 2400);
}

function animateReaction(zone, gesture, isComfort = false, point, intensity = 0.55, contactPart, worldPosition) {
  const figure = characterArt.querySelector(".character-svg");
  if (figure) {
    window.clearTimeout(gestureTimeout);
    figure.dataset.zone = gesture === "fall" ? "fall" : zone;
    figure.dataset.expression = gesture === "calm" ? "smile"
      : gesture === "dizzy" ? "dizzy"
      : gesture === "nervous" ? "nervous"
      : gesture === "fall" ? "nervous"
      : gesture === "cheek" ? "surprise"
      : zone === "head" && gesture === "quick" ? "wink"
      : zone === "body" ? "laugh"
        : zone === "feet" && gesture === "quick" ? "surprise"
          : gesture === "quick" ? "grin" : "smile";
    figure.dataset.gesture = gesture;
    figure.dataset.animating = "true";
    figure.classList.remove("is-blinking");
    characterArt.classList.remove("is-held");
    void figure.getBoundingClientRect();
    if (gesture !== "fall") {
      gestureTimeout = window.setTimeout(() => {
        if (!figure.isConnected) return;
        figure.dataset.animating = "false";
        figure.dataset.expression = "smile";
        delete figure.dataset.gesture;
        delete figure.dataset.contact;
        figure.style.removeProperty("--reaction-energy");
        characterArt.removeAttribute("data-pressed-zone");
      }, 950);
    }
  }
  if (!isComfort) {
    if (gesture !== "fall") makeParticles(zone, point, intensity, worldPosition);
    smileCount += 1;
    mood = mood >= 94 ? 24 : Math.min(100, mood + 17);
    updateSmileCounter();
  }
}

function playTone(frequency, duration, type, volume, endFrequency = frequency, delay = 0) {
  if (!soundEnabled) return;
  try {
    const output = getAudioBus();
    if (audioContext.state === "suspended") void audioContext.resume();
    const start = audioContext.currentTime + delay;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(Math.max(frequency, 1), start);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(endFrequency, 1), start + duration * 0.8);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + Math.min(0.025, duration * 0.12));
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(output);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  } catch (error) {
    console.error("تعذّر تشغيل المؤثر الصوتي.", error);
  }
}

function playFoleyNoise(duration, cutoff, volume, delay = 0) {
  if (!soundEnabled) return;
  try {
    const output = getAudioBus();
    if (audioContext.state === "suspended") void audioContext.resume();
    if (!foleyNoiseBuffer) {
      const buffer = audioContext.createBuffer(1, audioContext.sampleRate, audioContext.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let index = 0; index < samples.length; index += 1) samples[index] = Math.random() * 2 - 1;
      foleyNoiseBuffer = buffer;
    }
    const start = audioContext.currentTime + delay;
    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    source.buffer = foleyNoiseBuffer;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(cutoff, start);
    filter.frequency.exponentialRampToValueAtTime(Math.max(150, cutoff * 0.22), start + duration);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(output);
    source.start(start, Math.random() * 0.18, duration + 0.02);
    source.stop(start + duration + 0.03);
  } catch (error) {
    console.error("تعذّر تشغيل مؤثر الحركة.", error);
  }
}

function playFallSound() {
  playVocalization("surprised", .8);
  playFoleyNoise(.24, 1650, .022);
}

function playImpactSound(speed) {
  const scene = document.querySelector("#sceneCard").dataset.scene;
  const energy = Math.max(.3, Math.min(1, speed / 7));
  const base = scene === "studio" ? 118 : scene === "sky" ? 172 : 138;
  playFoleyNoise(.14 + energy * .12, scene === "studio" ? 680 : 520, .018 + energy * .026);
  playTone(base, .17, "triangle", .028 + energy * .05, base * (.35 + energy * .12));
  playTone(base * 2.6, .085, "sine", .009 + energy * .012, base * 1.2, .015);
}

function playRecoverySound() {
  playVocalization("nervous", .3);
  playFoleyNoise(.34, 1550, .016);
}

function playTensionSound() {
  playVocalization("nervous");
}

function playVocalization(mood, intensity = 0.58) {
  if (!soundEnabled) return;
  const patterns = {
    nervous: [{ pitch: 175, delay: 0, length: .18, end: 245 }, { pitch: 150, delay: .2, length: .2, end: 225 }],
    surprised: [{ pitch: 335, delay: 0, length: .12, end: 520 }, { pitch: 265, delay: .13, length: .23, end: 130 }],
    laugh: [{ pitch: 260, delay: 0, length: .13, end: 350 }, { pitch: 300, delay: .15, length: .13, end: 395 }, { pitch: 275, delay: .31, length: .15, end: 365 }],
    relieved: [{ pitch: 205, delay: 0, length: .17, end: 260 }, { pitch: 290, delay: .18, length: .21, end: 420 }],
    effort: [{ pitch: 145, delay: 0, length: .16, end: 175 }, { pitch: 165, delay: .16, length: .18, end: 215 }],
  };
  const formants = {
    nervous: [420, 1050, 2400],
    surprised: [760, 1320, 2850],
    laugh: [880, 1760, 2680],
    relieved: [520, 1180, 2520],
    effort: [360, 930, 2100],
  };
  const profile = voiceProfiles[currentFriend];
  voiceState = {
    startedAt: performance.now(),
    duration: Math.max(...patterns[mood].map(({ delay, length }) => delay + length)) + .05,
  };
  try {
    const output = getAudioBus();
    if (audioContext.state === "suspended") void audioContext.resume();
    for (const [index, syllable] of patterns[mood].entries()) {
      const start = audioContext.currentTime + syllable.delay;
      const duration = syllable.length * (0.8 + Math.min(1, intensity) * .34) * (.92 + Math.random() * .16);
      const fundamental = audioContext.createOscillator();
      const harmonic = audioContext.createOscillator();
      const vibrato = audioContext.createOscillator();
      const vibratoDepth = audioContext.createGain();
      const master = audioContext.createGain();
      const voicePitch = profile.synth * (0.84 + index * .045) * (.96 + Math.random() * .08);
      const peak = .027 * Math.max(.35, Math.min(1, intensity));
      fundamental.type = "sawtooth";
      harmonic.type = "triangle";
      vibrato.type = "sine";
      fundamental.frequency.setValueAtTime(Math.max(80, syllable.pitch * voicePitch), start);
      fundamental.frequency.exponentialRampToValueAtTime(Math.max(80, syllable.end * voicePitch), start + duration);
      harmonic.frequency.setValueAtTime(Math.max(80, syllable.pitch * voicePitch * 2.01), start);
      harmonic.frequency.exponentialRampToValueAtTime(Math.max(80, syllable.end * voicePitch * 2.01), start + duration);
      vibrato.frequency.setValueAtTime(mood === "nervous" ? 7.1 : 5.2, start);
      vibratoDepth.gain.setValueAtTime(mood === "nervous" ? 8 : 4.5, start);
      vibrato.connect(vibratoDepth);
      vibratoDepth.connect(fundamental.frequency);
      vibratoDepth.connect(harmonic.frequency);
      const vowel = formants[mood];
      for (let formantIndex = 0; formantIndex < vowel.length; formantIndex += 1) {
        const filter = audioContext.createBiquadFilter();
        const gain = audioContext.createGain();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(vowel[formantIndex] * (index % 2 ? 1.08 : .96), start);
        filter.Q.setValueAtTime(formantIndex === 0 ? 1.8 : 3.2, start);
        gain.gain.setValueAtTime([.95, .52, .25][formantIndex], start);
        fundamental.connect(filter);
        harmonic.connect(filter);
        filter.connect(gain);
        gain.connect(master);
      }
      master.gain.setValueAtTime(.0001, start);
      master.gain.exponentialRampToValueAtTime(peak, start + Math.min(.032, duration * .24));
      master.gain.setValueAtTime(peak * .7, start + duration * .55);
      master.gain.exponentialRampToValueAtTime(.0001, start + duration);
      master.connect(output);
      fundamental.start(start);
      harmonic.start(start);
      vibrato.start(start);
      fundamental.stop(start + duration + .02);
      harmonic.stop(start + duration + .02);
      vibrato.stop(start + duration + .02);
    }
  } catch (error) {
    console.error("تعذّر تشغيل صوت الشخصية.", error);
    const syllable = patterns[mood][0];
    playTone(syllable.pitch, syllable.length, "triangle", .012, syllable.end);
  }
  if (mood === "nervous") playFoleyNoise(.18, 2300, .006);
}

function makeDust() {
  if (webglScene) webglScene.emitParticles("body", undefined, .65, "dust");
  else playFoleyNoise(.12, 1800, .008);
}

function startRecovery(early = false) {
  const stage = document.querySelector("#characterStage");
  if (!["fallen"].includes(stage.dataset.motion)) return false;
  window.clearTimeout(fallTimeout);
  stage.dataset.motion = "recovering";
  const recoveryStyles = ["kneel", "brace", "roll"];
  const previousRecovery = stage.dataset.recoveryStyle;
  const recoveryOptions = recoveryStyles.filter((style) => style !== previousRecovery);
  stage.dataset.recoveryStyle = recoveryOptions[Math.floor(Math.random() * recoveryOptions.length)];
  stage.dataset.recoveryPhase = "brace";
  const cleanup = Math.random() < 0.62;
  stage.dataset.cleanup = cleanup ? "dust" : "dance";
  const figure = characterArt.querySelector(".character-svg");
  if (figure) {
    figure.dataset.animating = "true";
    figure.dataset.gesture = "recovering";
    figure.dataset.expression = "nervous";
  }
  playRecoverySound();
  const reducedMotion = prefersReducedMotion();
  const cadence = reducedMotion ? 80 : 590;
  window.setTimeout(() => {
    if (stage.dataset.motion !== "recovering") return;
    stage.dataset.recoveryPhase = stage.dataset.recoveryStyle === "roll" ? "roll-to-knee" : "kneel";
    playFoleyNoise(.16, 1150, .012);
    playTone(190, .12, "triangle", .014, 250);
  }, cadence);
  window.setTimeout(() => {
    if (stage.dataset.motion !== "recovering") return;
    stage.dataset.recoveryPhase = "push";
    playVocalization("effort", .42);
    playFoleyNoise(.2, 900, .016);
    playTone(228, .14, "sine", .014, 300);
  }, cadence * 2);
  window.setTimeout(() => {
    if (stage.dataset.motion !== "recovering") return;
    stage.dataset.recoveryPhase = "stand";
    playVocalization("relieved", .44);
    playFoleyNoise(.14, 750, .012);
  }, cadence * 3);
  if (cleanup) {
    window.setTimeout(() => {
      if (stage.dataset.motion === "recovering") {
        stage.dataset.recoveryPhase = "dust";
        makeDust();
        playFoleyNoise(.32, 2100, .023);
      }
    }, reducedMotion ? 100 : 2150);
  } else {
    window.setTimeout(() => {
      if (stage.dataset.motion === "recovering") {
        makeParticles("feet", undefined, .32);
        playVocalization("relieved");
      }
    }, reducedMotion ? 150 : 2150);
  }
  recoveryTimeout = window.setTimeout(() => {
    stage.dataset.motion = "idle";
    if (figure?.isConnected) {
      figure.dataset.animating = "false";
      figure.dataset.expression = "smile";
      delete figure.dataset.gesture;
    }
    getNaturalShift(stage);
    delete stage.dataset.fallStyle;
    delete stage.dataset.fallImpulseX;
    delete stage.dataset.fallImpulseY;
    delete stage.dataset.recoveryStyle;
    delete stage.dataset.recoveryPhase;
    delete stage.dataset.cleanup;
    if (early && !cleanup) {
      window.setTimeout(() => {
        if (stage.dataset.motion === "idle") {
          stage.dataset.postRecovery = "shimmy";
          window.setTimeout(() => delete stage.dataset.postRecovery, 780);
        }
      }, 160);
    }
  }, reducedMotion ? 350 : 2700);
  return true;
}

function finishLanding(stage) {
  if (stage.dataset.motion !== "falling") return;
  if (pointerStart) clearHeldState(true);
  stage.dataset.motion = "fallen";
  makeDust();
  if (!webglScene) playImpactSound(3.2);
  playFallSound();
  const reducedMotion = prefersReducedMotion();
  fallTimeout = window.setTimeout(() => startRecovery(false), reducedMotion ? 500 : 1900);
}

function getFallDirection(dx, dy, previousStyle) {
  const length = Math.hypot(dx, dy);
  let direction;
  if (length > 38 && Math.abs(dy) > Math.abs(dx) * 1.35) {
    direction = dy > 0 ? "forward" : "backward";
  } else if (length > 38 && Math.abs(dx) > Math.abs(dy) * 1.35) {
    direction = dx < 0 ? "side-left" : "side-right";
  } else if (length > 38) {
    direction = `three-quarter-${dx < 0 ? "left" : "right"}`;
  } else {
    const directions = ["forward", "backward", "side-left", "side-right", "three-quarter-left", "three-quarter-right"];
    const alternatives = directions.filter((direction) => direction !== previousStyle);
    direction = alternatives[Math.floor(Math.random() * alternatives.length)];
  }
  if (direction === previousStyle) {
    const alternatives = ["forward", "backward", "side-left", "side-right", "three-quarter-left", "three-quarter-right"]
      .filter((candidate) => candidate !== previousStyle);
    direction = alternatives[Math.floor(Math.random() * alternatives.length)];
  }
  return direction;
}

function startFall(zone, dx = 0, dy = 0) {
  const stage = document.querySelector("#characterStage");
  if (stage.dataset.motion === "falling" || stage.dataset.motion === "fallen" || stage.dataset.motion === "recovering") return;
  if (pointerStart) pointerStart.fallTriggered = true;
  if (webglScene) webglScene.emitParticles(zone, pointerStart?.point, .44, "spark", pointerStart?.contact?.worldPosition);
  characterArt.classList.remove("is-held");
  characterStage.classList.remove("is-held");
  const previousStyle = stage.dataset.fallStyle;
  stage.dataset.fallStyle = getFallDirection(dx, dy, previousStyle);
  stage.dataset.fallImpulseX = String(Math.max(-1, Math.min(1, dx / 190)));
  stage.dataset.fallImpulseY = String(Math.max(-1, Math.min(1, dy / 190)));
  stage.dataset.motion = "falling";
  const styles = {
    forward: { tilt: -10, depth: 28, dx: -4, dy: 39 },
    backward: { tilt: 9, depth: -29, dx: 4, dy: 29 },
    "side-left": { tilt: -43, depth: 8, dx: -20, dy: 26 },
    "side-right": { tilt: 43, depth: -8, dx: 20, dy: 26 },
    "three-quarter-left": { tilt: -31, depth: 23, dx: -16, dy: 33 },
    "three-quarter-right": { tilt: 31, depth: -23, dx: 16, dy: 33 },
  };
  const fall = styles[stage.dataset.fallStyle];
  stage.style.setProperty("--fall-tilt", `${fall.tilt + Math.round(Math.random() * 12 - 6)}deg`);
  stage.style.setProperty("--fall-depth", `${fall.depth + Math.round(Math.random() * 10 - 5)}deg`);
  stage.style.setProperty("--fall-x", `${fall.dx + Math.round(Math.random() * 18 - 9)}px`);
  stage.style.setProperty("--fall-y", `${fall.dy + Math.round(Math.random() * 10 - 5)}px`);
  getNaturalShift(stage);
  animateReaction(zone, "fall");
  playVocalization("nervous", .4);
  const stageElement = document.querySelector("#characterStage");
  stageElement.dataset.motion = "falling";
  if (!webglScene) {
    const reducedMotion = prefersReducedMotion();
    window.setTimeout(() => finishLanding(stageElement), reducedMotion ? 250 : 1150);
  }
}

function updateSmileCounter() {
  document.querySelector("#smileCount").textContent = numerals.format(smileCount);
  const moodTrack = document.querySelector("#moodTrack");
  document.querySelector("#moodFill").style.width = `${mood}%`;
  moodTrack.setAttribute("aria-valuenow", String(mood));
  document.querySelector("#moodLabel").textContent =
    mood >= 90 ? "قربنا نطير من الفرح!" : mood >= 55 ? "الابتسامة تكبر!" : "بداية جميلة";
  persistSettings();
}

function makeParticles(zone, point, intensity = 0.55, worldPosition) {
  if (webglScene) webglScene.emitParticles(zone, point, intensity, "spark", worldPosition);
}

function getSvgPoint(event) {
  const svg = characterArt.querySelector(".character-svg");
  const matrix = svg?.getScreenCTM();
  if (!svg || !matrix) return { x: 180, y: 275 };
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const local = point.matrixTransform(matrix.inverse());
  return { x: local.x, y: local.y };
}

function getContact(event) {
  if (webglScene) return webglScene.pick(event);
  const point = getSvgPoint(event);
  return { point, anatomy: getAnatomy(point) };
}

function getAnatomy(point) {
  return bodyAnchors.reduce((nearest, anchor) => {
    const distance = Math.hypot((point.x - anchor.x) / anchor.rx, (point.y - anchor.y) / anchor.ry);
    return distance < nearest.distance ? { ...anchor, distance } : nearest;
  }, { distance: Number.POSITIVE_INFINITY });
}

function getPressIntensity(press, now = performance.now()) {
  const duration = Math.max(0, now - press.startedAt);
  const timeStrength = Math.min(1, Math.max(0, duration - 60) / 850);
  const fallbackPressure = press.pointerType === "mouse" ? 0.48 : 0.42;
  const pressure = (press.currentPressure || fallbackPressure) * 0.75 + (press.maxPressure || fallbackPressure) * 0.25;
  const movementStrength = Math.min(1, press.maxSpeed / 1.5);
  return Math.min(1, 0.2 + timeStrength * 0.62 + pressure * 0.14 + movementStrength * 0.1);
}

function updateContact(event) {
  if (!pointerStart || pointerStart.recovering || characterStage.dataset.motion === "falling") return;
  const { point, anatomy } = getContact(event);
  pointerStart.point = point;
  pointerStart.contact = anatomy;
  if (event.pressure > 0) {
    pointerStart.currentPressure = event.pressure;
    pointerStart.maxPressure = Math.max(pointerStart.maxPressure, event.pressure);
  }
  const intensity = getPressIntensity(pointerStart);
  characterArt.dataset.pressedZone = anatomy.zone;
  characterArt.classList.add("is-held");
  characterStage.classList.add("is-held");
  characterArt.style.setProperty("--press-depth", String(intensity));
  characterArt.style.setProperty("--press-shift", `${intensity * 5}px`);
  characterArt.style.setProperty("--press-tilt", `${intensity * 14}deg`);
  characterArt.style.setProperty("--press-tilt-negative", `${intensity * -14}deg`);
  characterArt.style.setProperty("--press-squash", String(1 - intensity * 0.08));
  const figure = characterArt.querySelector(".character-svg");
  if (figure) {
    figure.dataset.contact = anatomy.target;
    figure.dataset.pressure = intensity.toFixed(2);
    if (intensity > 0.53 && figure.dataset.expression === "smile") {
      figure.dataset.expression = "nervous";
      figure.dataset.gesture = "nervous";
    }
  }
}

function clearHeldState(preservePose = false) {
  if (pressureFrame) window.cancelAnimationFrame(pressureFrame);
  pressureFrame = undefined;
  pointerStart = null;
  characterArt.classList.remove("is-held");
  characterStage.classList.remove("is-held");
  characterArt.removeAttribute("data-pressed-zone");
  characterArt.style.removeProperty("--press-depth");
  characterArt.style.removeProperty("--press-shift");
  characterArt.style.removeProperty("--press-tilt");
  characterArt.style.removeProperty("--press-tilt-negative");
  characterArt.style.removeProperty("--press-squash");
  const figure = characterArt.querySelector(".character-svg");
  if (figure && !preservePose) {
    figure.dataset.animating = "false";
    figure.dataset.expression = "smile";
    delete figure.dataset.gesture;
    delete figure.dataset.contact;
    delete figure.dataset.pressure;
  }
}

function finishPress(event) {
  if (!pointerStart) return;
  if (pointerStart.recovering) {
    clearHeldState(true);
    return;
  }
  if (event) {
    const elapsed = Math.max(performance.now() - pointerStart.lastTime, 1);
    const movement = Math.hypot(event.clientX - pointerStart.lastX, event.clientY - pointerStart.lastY);
    pointerStart.distance += movement;
    pointerStart.maxSpeed = Math.max(pointerStart.maxSpeed, movement / elapsed);
    pointerStart.lastX = event.clientX;
    pointerStart.lastY = event.clientY;
    updateContact(event);
  }
  const press = pointerStart;
  const duration = performance.now() - press.startedAt;
  const intensity = getPressIntensity(press);
  if (press.fallTriggered || ["falling", "fallen", "recovering"].includes(characterStage.dataset.motion)) {
    clearHeldState(true);
    return;
  }
  clearHeldState(true);
  const swipeX = press.lastX - press.startX;
  const swipeY = press.lastY - press.startY;
  const cheekTouch = press.contact.part === "cheek-left" || press.contact.part === "cheek-right";
  if (cheekTouch && (Math.abs(swipeX) > 16 || duration < 280)) {
    reactToZone("head", intensity > .52 || press.maxSpeed > .45 ? "quick" : "gentle", {
      part: press.contact.part,
      intensity,
      point: press.point,
      worldPosition: press.contact.worldPosition,
      speed: press.maxSpeed,
      side: press.contact.part === "cheek-left" ? -1 : 1,
    });
    return;
  }
  if (duration < 620 && Math.abs(swipeX) > 48 && Math.abs(swipeX) > Math.abs(swipeY) * 1.25) {
    startSpin(swipeX < 0 ? "left" : "right", press.contact.zone);
    return;
  }
  if (duration >= 1050 && intensity > 0.83) {
    startFall(press.contact.zone, swipeX, swipeY);
    return;
  }
  const gesture = intensity > 0.52 || press.maxSpeed > 0.65 || press.distance > 34 ? "quick" : "gentle";
  reactToZone(press.contact.zone, gesture, {
    part: press.contact.part,
    intensity,
    point: press.point,
    worldPosition: press.contact.worldPosition,
  });
}

characterStage.addEventListener("pointerdown", (event) => {
  if (["falling", "recovering"].includes(characterStage.dataset.motion)) return;
  if (characterStage.dataset.motion === "fallen") {
    pointerStart = { recovering: startRecovery(true) };
    event.preventDefault();
    characterStage.setPointerCapture(event.pointerId);
    return;
  }
  const now = performance.now();
  pointerStart = {
    startX: event.clientX,
    startY: event.clientY,
    lastX: event.clientX,
    lastY: event.clientY,
    lastTime: now,
    startedAt: now,
    maxSpeed: 0,
    currentPressure: event.pressure || 0,
    maxPressure: event.pressure || 0,
    distance: 0,
    pointerType: event.pointerType,
    point: null,
    contact: null,
  };
  const contact = getContact(event);
  pointerStart.point = contact.point;
  pointerStart.contact = contact.anatomy;
  window.clearTimeout(gestureTimeout);
  const figure = characterArt.querySelector(".character-svg");
  if (figure) {
    figure.dataset.animating = "false";
    figure.dataset.expression = "smile";
    delete figure.dataset.gesture;
    figure.classList.remove("is-blinking");
  }
  updateContact(event);
  characterStage.setPointerCapture(event.pointerId);
  event.preventDefault();
  const watchPressure = () => {
    if (!pointerStart || pointerStart.recovering || characterStage.dataset.motion === "falling") return;
    updateContact({
      clientX: pointerStart.lastX,
      clientY: pointerStart.lastY,
      pressure: pointerStart.currentPressure,
      pointerType: pointerStart.pointerType,
    });
    const duration = performance.now() - pointerStart.startedAt;
    if (duration > 520 && !pointerStart.tensionPlayed) {
      pointerStart.tensionPlayed = true;
      playTensionSound();
    }
    if (duration > 1050 && getPressIntensity(pointerStart) > 0.83) {
      startFall(pointerStart.contact.zone, pointerStart.lastX - pointerStart.startX, pointerStart.lastY - pointerStart.startY);
      return;
    }
    pressureFrame = window.requestAnimationFrame(watchPressure);
  };
  pressureFrame = window.requestAnimationFrame(watchPressure);
});

characterStage.addEventListener("pointermove", (event) => {
  if (!pointerStart || pointerStart.recovering) return;
  const now = performance.now();
  const elapsed = Math.max(now - pointerStart.lastTime, 1);
  const movement = Math.hypot(event.clientX - pointerStart.lastX, event.clientY - pointerStart.lastY);
  pointerStart.maxSpeed = Math.max(pointerStart.maxSpeed, movement / elapsed);
  pointerStart.distance += movement;
  pointerStart.lastX = event.clientX;
  pointerStart.lastY = event.clientY;
  pointerStart.lastTime = now;
  updateContact(event);
});
characterStage.addEventListener("pointerup", finishPress);
characterStage.addEventListener("pointercancel", () => clearHeldState());
characterStage.addEventListener("lostpointercapture", () => {
  if (pointerStart) clearHeldState();
});
characterStage.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  if (characterStage.dataset.motion === "fallen") {
    startRecovery(true);
    return;
  }
  if (["falling", "recovering"].includes(characterStage.dataset.motion)) return;
  reactToZone("body", "gentle", { part: "torso", intensity: 0.35, point: { x: 180, y: 275 } });
});

function startSpin(direction, zone) {
  if (["falling", "fallen", "recovering"].includes(characterStage.dataset.motion)) return;
  const now = performance.now();
  recentSpins = now - lastSpinAt < 2400 ? recentSpins + 1 : 1;
  lastSpinAt = now;
  window.clearTimeout(spinTimeout);
  window.clearTimeout(dizzyTimeout);
  characterStage.dataset.motion = "idle";
  void characterStage.offsetWidth;
  characterStage.dataset.motion = "spinning";
  characterStage.dataset.spinDirection = direction;
  characterStage.dataset.spinCount = String(recentSpins);
  characterStage.dataset.spinStart = String(now);
  characterStage.style.setProperty("--spin-turn", direction === "left" ? "-1080deg" : "1080deg");
  characterStage.style.setProperty("--spin-lift", `${Math.min(20, 7 + recentSpins * 4)}px`);
  const figure = characterArt.querySelector(".character-svg");
  if (figure) {
    figure.dataset.expression = recentSpins >= 3 ? "dizzy" : "surprise";
    figure.dataset.animating = "true";
    figure.dataset.gesture = "spin";
  }
  animateReaction(zone, recentSpins >= 3 ? "dizzy" : "quick");
  window.clearTimeout(gestureTimeout);
  playSpinSound(direction, Math.min(1.2, 0.65 + recentSpins * 0.15));
  const dizzy = recentSpins >= 3 && !prefersReducedMotion();
  if (dizzy) {
    playVocalization("nervous", Math.min(1, recentSpins * .24));
  } else {
    playVocalization("surprised");
  }
  spinTimeout = window.setTimeout(() => {
    if (characterStage.dataset.motion !== "spinning") return;
    if (recentSpins >= 3 && !prefersReducedMotion()) {
      characterStage.dataset.motion = "dizzy";
      if (figure?.isConnected) {
        figure.dataset.expression = "dizzy";
        figure.dataset.animating = "true";
      }
      playDizzyWobble();
      dizzyTimeout = window.setTimeout(() => settleDizzy(false), 2200);
    } else {
      characterStage.dataset.motion = "idle";
      delete characterStage.dataset.spinDirection;
      delete characterStage.dataset.spinCount;
      delete characterStage.dataset.spinStart;
      if (figure?.isConnected) {
        figure.dataset.expression = "smile";
        figure.dataset.animating = "false";
        delete figure.dataset.gesture;
      }
      characterStage.style.removeProperty("--spin-turn");
      characterStage.style.removeProperty("--spin-lift");
    }
  }, 760);
}

function settleDizzy(comfort) {
  window.clearTimeout(dizzyTimeout);
  characterStage.dataset.motion = "idle";
  delete characterStage.dataset.spinDirection;
  delete characterStage.dataset.spinCount;
  delete characterStage.dataset.spinStart;
  recentSpins = 0;
  lastSpinAt = 0;
  characterStage.style.removeProperty("--spin-turn");
  characterStage.style.removeProperty("--spin-lift");
  const figure = characterArt.querySelector(".character-svg");
  if (figure) {
    figure.dataset.expression = "smile";
    figure.dataset.animating = "false";
    delete figure.dataset.gesture;
  }
  if (comfort) {
    animateReaction("body", "calm", true);
    playVocalization("relieved");
  }
}

function playSpinSound(direction, intensity) {
  const base = direction === "left" ? 420 : 610;
  for (let turn = 0; turn < 3; turn += 1) {
    playTone(base + turn * 115, .12, "sine", .025 * intensity, base + 340, turn * .095);
  }
  playFoleyNoise(.22, 1500, .012 * intensity);
}

function playDizzyWobble() {
  playTone(530, .35, "sine", .022, 390);
  playTone(490, .4, "triangle", .018, 620, .18);
  playFoleyNoise(.27, 1000, .009, .09);
}

function playCheekFoley(intensity, alternating) {
  const strength = Math.max(.25, Math.min(1, intensity));
  playTone(alternating ? 760 : 640, .09, "sine", .012 * strength, alternating ? 920 : 760);
  playTone(alternating ? 510 : 430, .16, "triangle", .014 * strength, 350, .025);
  playFoleyNoise(.1, 1750, .007 * strength, .015);
}

function reactToZone(zone, gesture, contact = {}) {
  const intensity = contact.intensity ?? 0.45;
  const isCheek = contact.part === "cheek-left" || contact.part === "cheek-right";
  let alternatingCheeks = false;
  if (isCheek) {
    const side = contact.side ?? (contact.part === "cheek-left" ? -1 : 1);
    const now = performance.now();
    alternatingCheeks = Boolean(lastCheekTap && lastCheekTap.side !== side && now - lastCheekTap.at < 580);
    lastCheekTap = { side, at: now };
    cheekReaction = {
      side,
      startedAt: now,
      intensity: Math.max(.34, Math.min(1, intensity * (alternatingCheeks ? 1.18 : 1))),
    };
  }
  animateReaction(zone, isCheek ? "cheek" : gesture, false, contact.point, intensity, contact.part, contact.worldPosition);
  const figure = characterArt.querySelector(".character-svg");
  if (figure && contact.part) {
    figure.dataset.contact = contact.part;
    figure.style.setProperty("--reaction-energy", String(intensity));
  }
  if (isCheek) {
    playCheekFoley(intensity, alternatingCheeks);
    playVocalization(alternatingCheeks ? "surprised" : gesture === "quick" ? "surprised" : "nervous", intensity * .68);
  } else if (zone === "body") {
    playVocalization("laugh", intensity);
  } else if (zone === "head") {
    playVocalization(gesture === "quick" ? "surprised" : "relieved", intensity);
  } else if (zone === "hand") {
    playVocalization(gesture === "gentle" ? "relieved" : "surprised", intensity);
    playFoleyNoise(.14, 2100, .009);
  } else if (zone === "feet") {
    const scene = document.querySelector("#sceneCard").dataset.scene;
    playFoleyNoise(.12, scene === "studio" ? 1200 : 700, .014);
    playTone(scene === "sky" ? 720 : 260, .13, "triangle", .025, scene === "sky" ? 940 : 185);
    playVocalization(gesture === "quick" ? "surprised" : "relieved", intensity * .72);
  }
}

document.querySelectorAll(".friend-choice").forEach((button) => {
  button.addEventListener("click", () => {
    currentFriend = button.dataset.character;
    document.querySelectorAll(".friend-choice").forEach((choice) => {
      const selected = choice === button;
      choice.classList.toggle("is-selected", selected);
      choice.setAttribute("aria-pressed", String(selected));
    });
    renderCharacter();
    persistSettings();
  });
});

document.querySelector("#outfitSelect").addEventListener("change", (event) => {
  currentOutfit = event.target.value;
  renderCharacter();
  persistSettings();
});

document.querySelectorAll(".accessory-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentAccessory = button.dataset.accessory;
    document.querySelectorAll(".accessory-button").forEach((choice) => {
      const selected = choice === button;
      choice.classList.toggle("is-selected", selected);
      choice.setAttribute("aria-pressed", String(selected));
    });
    renderCharacter();
    persistSettings();
  });
});

document.querySelectorAll(".location-button").forEach((button) => {
  button.addEventListener("click", () => {
    const scene = button.dataset.sceneChoice;
    document.querySelector("#sceneCard").dataset.scene = scene;
    document.querySelector("#sceneTitle").textContent = sceneNames[scene];
    document.querySelectorAll(".location-button").forEach((choice) => {
      const selected = choice === button;
      choice.classList.toggle("is-selected", selected);
      choice.setAttribute("aria-pressed", String(selected));
    });
    persistSettings();
  });
});

const surprisePresets = [
  { name: "حديقة مرحة", character: "louz", outfit: "scarf", accessory: "flower", scene: "garden" },
  { name: "جزيرة الأحلام", character: "marmar", outfit: "cape", accessory: "star", scene: "sky" },
  { name: "مرسم الألوان", character: "shamoos", outfit: "overalls", accessory: "glasses", scene: "studio" },
];

document.querySelector("#surpriseButton").addEventListener("click", () => {
  const currentScene = document.querySelector("#sceneCard").dataset.scene;
  const currentPreset = surprisePresets.find((preset) =>
    preset.character === currentFriend
    && preset.outfit === currentOutfit
    && preset.accessory === currentAccessory
    && preset.scene === currentScene,
  );
  const choices = surprisePresets.filter((preset) => preset !== currentPreset);
  const preset = choices[Math.floor(Math.random() * choices.length)];

  document.querySelector(`.friend-choice[data-character="${preset.character}"]`).click();
  const outfitSelect = document.querySelector("#outfitSelect");
  outfitSelect.value = preset.outfit;
  outfitSelect.dispatchEvent(new Event("change", { bubbles: true }));
  document.querySelector(`.accessory-button[data-accessory="${preset.accessory}"]`).click();
  document.querySelector(`.location-button[data-scene-choice="${preset.scene}"]`).click();
  document.querySelector("#surpriseStatus").textContent = `تم اختيار أجواء ${preset.name}.`;

  if (!["falling", "fallen", "recovering"].includes(characterStage.dataset.motion)) {
    animateReaction("head", "quick", false, { x: 180, y: 165 }, 0.45);
    playVocalization("surprised", 0.45);
  }
});

document.querySelector("#soundToggle").addEventListener("click", (event) => {
  soundEnabled = !soundEnabled;
  if (audioBus) audioBus.gain.value = soundEnabled ? soundVolume : 0;
  if (!soundEnabled) voiceState = null;
  event.currentTarget.setAttribute("aria-pressed", String(soundEnabled));
  event.currentTarget.setAttribute("aria-label", soundEnabled ? "إيقاف الأصوات" : "تشغيل الأصوات");
  document.querySelector("#soundText").textContent = soundEnabled ? "مفعّلة" : "متوقفة";
  persistSettings();
});

const reducedMotionToggle = document.querySelector("#reducedMotionToggle");
const highContrastToggle = document.querySelector("#highContrastToggle");
const volumeControl = document.querySelector("#volumeControl");
const volumeValue = document.querySelector("#volumeValue");

reducedMotionToggle.addEventListener("change", () => {
  reducedMotionEnabled = reducedMotionToggle.checked;
  document.documentElement.dataset.reduceMotion = String(reducedMotionEnabled);
  persistSettings();
});

highContrastToggle.addEventListener("change", () => {
  highContrastEnabled = highContrastToggle.checked;
  document.documentElement.dataset.contrast = highContrastEnabled ? "high" : "standard";
  persistSettings();
});

volumeControl.addEventListener("input", () => {
  soundVolume = Number(volumeControl.value) / 100;
  volumeValue.value = `${numerals.format(Number(volumeControl.value))}٪`;
  if (audioBus) audioBus.gain.value = soundEnabled ? soundVolume : 0;
  persistSettings();
});

document.querySelector("#breathButton").addEventListener("click", () => {
  if (characterStage.dataset.motion === "dizzy") settleDizzy(true);
  mood = Math.min(100, mood + 22);
  updateSmileCounter();
  characterArt.classList.remove("is-breathe");
  void characterArt.offsetWidth;
  characterArt.classList.add("is-breathe");
  characterStage.classList.add("is-breathe");
  animateReaction("body", "calm", true);
  playVocalization("relieved", .42);
  playFoleyNoise(.32, 1950, .008);
  window.setTimeout(() => {
    characterArt.classList.remove("is-breathe");
    characterStage.classList.remove("is-breathe");
  }, 4200);
});

function stopGuidedBreathing(completed = false) {
  window.clearInterval(breathingTimer);
  breathingTimer = undefined;
  const card = document.querySelector("#breathingCard");
  card.removeAttribute("data-phase");
  document.querySelector("#breathingButton").setAttribute("aria-pressed", "false");
  document.querySelector("#breathingButton").textContent = completed ? "ابدأ مجددًا" : "ابدأ";
  document.querySelector("#breathingPhase").textContent = completed ? "أحسنت، خذ وقتك" : "أربعون ثانية من الهدوء";
  document.querySelector("#breathingCount").textContent = "";
  breathingAnnouncedSecond = -1;
  if (completed) {
    mood = Math.min(100, mood + 12);
    updateSmileCounter();
  }
}

function updateGuidedBreathing() {
  const elapsed = performance.now() - breathingStartedAt;
  const remaining = Math.max(0, 40_000 - elapsed);
  const displayedSecond = Math.ceil(remaining / 1000);
  if (displayedSecond !== breathingAnnouncedSecond) {
    document.querySelector("#breathingCount").textContent = `${numerals.format(displayedSecond)} ث`;
    breathingAnnouncedSecond = displayedSecond;
  }
  if (!remaining) {
    stopGuidedBreathing(true);
    return;
  }
  const cycleProgress = elapsed % 10_000;
  const phase = cycleProgress < 4_000 ? "inhale" : "exhale";
  const card = document.querySelector("#breathingCard");
  if (card.dataset.phase !== phase) {
    card.dataset.phase = phase;
    document.querySelector("#breathingPhase").textContent = phase === "inhale" ? "شهيق هادئ" : "زفير مريح";
  }
}

document.querySelector("#breathingButton").addEventListener("click", () => {
  if (breathingTimer) {
    stopGuidedBreathing();
    return;
  }
  breathingStartedAt = performance.now();
  breathingAnnouncedSecond = -1;
  document.querySelector("#breathingButton").setAttribute("aria-pressed", "true");
  document.querySelector("#breathingButton").textContent = "إنهاء";
  updateGuidedBreathing();
  breathingTimer = window.setInterval(updateGuidedBreathing, 200);
});

const connectionStatus = document.querySelector("#connectionStatus");
const updateConnectionStatus = () => {
  const offline = !navigator.onLine;
  document.documentElement.dataset.offline = String(offline);
  connectionStatus.textContent = offline
    ? "أنت غير متصل — تظل فُسحة جاهزة للعب"
    : "متصل بالإنترنت — تُحفظ اختياراتك على هذا الجهاز";
};
window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
updateConnectionStatus();

const installButton = document.querySelector("#installButton");
const installDialog = document.querySelector("#installDialog");
const appAlreadyInstalled = window.matchMedia("(display-mode: standalone)").matches
  || window.navigator.standalone === true;
installButton.hidden = appAlreadyInstalled;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});
window.addEventListener("appinstalled", () => {
  installPrompt = null;
  installButton.hidden = true;
});
installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    installDialog.showModal();
    return;
  }
  try {
    await installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    installButton.hidden = true;
  } catch (error) {
    console.error("تعذّر فتح نافذة تثبيت فُسحة.", error);
    installPrompt = null;
    installDialog.showModal();
  }
});

if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  navigator.serviceWorker.register("./service-worker.js").catch((error) => {
    console.error("تعذّر تفعيل وضع العمل دون اتصال.", error);
  });
}

document.querySelector("#resetButton").addEventListener("click", () => {
  stopGuidedBreathing();
  document.querySelector("#surpriseStatus").textContent = "";
  clearHeldState();
  window.clearTimeout(fallTimeout);
  window.clearTimeout(recoveryTimeout);
  window.clearTimeout(gestureTimeout);
  characterStage.dataset.motion = "idle";
  delete characterStage.dataset.fallStyle;
  delete characterStage.dataset.fallImpulseX;
  delete characterStage.dataset.fallImpulseY;
  delete characterStage.dataset.recoveryStyle;
  delete characterStage.dataset.cleanup;
  delete characterStage.dataset.postRecovery;
  delete characterStage.dataset.spinDirection;
  delete characterStage.dataset.spinCount;
  delete characterStage.dataset.spinStart;
  cheekReaction = null;
  lastCheekTap = null;
  webglScene?.clearEffects();
  characterStage.style.removeProperty("--walk-shift");
  characterStage.style.removeProperty("--spin-turn");
  characterStage.style.removeProperty("--spin-lift");
  characterArt.classList.remove("is-breathe");
  characterStage.classList.remove("is-breathe");
  currentFriend = "louz";
  currentAccessory = "flower";
  currentOutfit = "scarf";
  soundEnabled = true;
  soundVolume = defaultSettings.volume / 100;
  reducedMotionEnabled = false;
  highContrastEnabled = false;
  smileCount = 0;
  mood = 18;
  reducedMotionToggle.checked = false;
  highContrastToggle.checked = false;
  volumeControl.value = String(defaultSettings.volume);
  volumeValue.value = `${numerals.format(defaultSettings.volume)}٪`;
  document.documentElement.dataset.reduceMotion = "false";
  document.documentElement.dataset.contrast = "standard";
  if (audioBus) audioBus.gain.value = soundVolume;
  document.querySelector("#outfitSelect").value = currentOutfit;
  document.querySelectorAll(".friend-choice, .accessory-button, .location-button").forEach((button) => {
    const selected =
      button.dataset.character === currentFriend ||
      button.dataset.accessory === currentAccessory ||
      button.dataset.sceneChoice === "garden";
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelector("#sceneCard").dataset.scene = "garden";
  document.querySelector("#sceneTitle").textContent = sceneNames.garden;
  window.clearTimeout(spinTimeout);
  window.clearTimeout(dizzyTimeout);
  recentSpins = 0;
  lastSpinAt = 0;
  document.querySelector("#soundToggle").setAttribute("aria-pressed", String(soundEnabled));
  document.querySelector("#soundToggle").setAttribute("aria-label", soundEnabled ? "إيقاف الأصوات" : "تشغيل الأصوات");
  document.querySelector("#soundText").textContent = soundEnabled ? "مفعّلة" : "متوقفة";
  updateSmileCounter();
  renderCharacter();
});

document.querySelector("#sceneCard").dataset.scene = savedSettings.scene;
document.querySelector("#sceneTitle").textContent = sceneNames[savedSettings.scene];
document.querySelector("#outfitSelect").value = currentOutfit;
reducedMotionToggle.checked = reducedMotionEnabled;
highContrastToggle.checked = highContrastEnabled;
volumeControl.value = String(Math.round(soundVolume * 100));
volumeValue.value = `${numerals.format(Math.round(soundVolume * 100))}٪`;
document.documentElement.dataset.reduceMotion = String(reducedMotionEnabled);
document.documentElement.dataset.contrast = highContrastEnabled ? "high" : "standard";
document.querySelector("#soundToggle").setAttribute("aria-pressed", String(soundEnabled));
document.querySelector("#soundToggle").setAttribute("aria-label", soundEnabled ? "إيقاف الأصوات" : "تشغيل الأصوات");
document.querySelector("#soundText").textContent = soundEnabled ? "مفعّلة" : "متوقفة";
document.querySelectorAll(".friend-choice, .accessory-button, .location-button").forEach((button) => {
  const selected = button.dataset.character === currentFriend
    || button.dataset.accessory === currentAccessory
    || button.dataset.sceneChoice === savedSettings.scene;
  button.classList.toggle("is-selected", selected);
  button.setAttribute("aria-pressed", String(selected));
});
updateSmileCounter();
renderCharacter();
try {
  webglScene = createThreeDWorld();
} catch (error) {
  document.querySelector("#sceneArt").dataset.webglError = String(error);
  console.error("تعذّر إنشاء المشهد ثلاثي الأبعاد؛ ستبقى الرسوم الاحتياطية متاحة.", error);
}
