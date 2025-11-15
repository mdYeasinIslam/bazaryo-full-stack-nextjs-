export const storage = {
  setData: (key: string, data: any) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(data));
  },
  getData: (key: string) => {
    if (typeof window === "undefined") return;
    localStorage.getItem(key);
  },
  removeItem: (key: string) => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  },
};
