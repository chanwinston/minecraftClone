import create from "zustand";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  cubes: getLocalStorage("world") || [
    { position: [0, 2, 0], texture: "log" },
    { position: [0, 2, 0], texture: "grass" },
  ],
  addCube: (x, y, z, texture) =>
    set((state) => ({
      cubes: [...state.cubes, { position: [x, y, z], texture }],
    })),
  removeCube: (x, y, z) =>
    set((state) =>
      state.cubes.filter((cube) => cube.x !== x || cube.y !== y || cube.z !== z)
    ),
  texture: "log",
  setTexture: (texture) => {
    set((state) => ({ texture }));
  },
  saveWorld: () =>
    set((state) => {
      setLocalStorage("world", state.cubes);
    }),
}));
