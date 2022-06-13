import create from "zustand";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  cubes: getLocalStorage("try") || [
    { position: [0, 4, 0], type: "grass" },
    { position: [0, 3, 0], type: "log" },
  ],
  addCube: (x, y, z, type) =>
    set((state) => ({
      cubes: [...state.cubes, { position: [x, y, z], type }],
    })),
  removeCube: (x, y, z) =>
    set((state) => ({
      cubes: state.cubes.filter(
        ({ position }) =>
          position[0] !== x || position[1] !== y || position[2] !== z
      ),
    })),
  type: "log",
  setType: (type) => {
    set((state) => ({ type }));
  },
  saveWorld: () =>
    set((state) => {
      setLocalStorage("world", state.cubes);
    }),
}));
