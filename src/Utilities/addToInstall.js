import { toast,  } from "react-toastify";

// getValue
const getValue = () => {
  const allData = localStorage.getItem("data");
  if (allData) {
    const data = JSON.parse(allData);
    return data;
  } else {
    return [];
  }
};

// addValue
const addValue = (items) => {
  const data = getValue();
  const isExist = data.find((item) => item.id === items.id);
  if (isExist) {
    toast.error("App already installed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  data.push(items);
  localStorage.setItem("data", JSON.stringify(data));
  return;
};

// removing
const removeValue = (items) => {
  const data = getValue();
  if (!items) {
    localStorage.removeItem("data");
  }
  const removItem = data.filter((item) => item.id !== items.id);
  localStorage.setItem("data", JSON.stringify(removItem));
      return;
    };
export { getValue, addValue, removeValue };
