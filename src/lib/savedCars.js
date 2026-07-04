export const getSavedCars = () => {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("savedEVs") || "[]");
};

export const isCarSaved = (slug) => {
  return getSavedCars().includes(slug);
};

export const toggleSavedCar = (slug) => {
  const saved = getSavedCars();

  if (saved.includes(slug)) {
    const updated = saved.filter((item) => item !== slug);
    localStorage.setItem("savedEVs", JSON.stringify(updated));
    return false;
  }

  const updated = [...saved, slug];

  localStorage.setItem("savedEVs", JSON.stringify(updated));

  return true;
};