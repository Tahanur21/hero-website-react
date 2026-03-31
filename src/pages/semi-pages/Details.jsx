/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Cards from "./Cards";
import Detail from "./Detail";
import { addValue, getValue } from "../../Utilities/addToInstall";
import { toast, ToastContainer } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [details, setDetails] = useState([]);
  // disabling button
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    const getApp = [...data].filter((items) => items.id === parseInt(id));
    setDetails(getApp);
    const storedApp = getValue();
    const isAppExist = storedApp.find((item) => item.id === parseInt(id));
    if (isAppExist) {
      setActive(true);
    }
  }, [data, id]);
  // gettingValu
  const handleAddValue = (item) => {
    if (item.length === 0) {
      return 0;
    } else {
      addValue(item);
      setActive(true);
      toast.success("App installed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <div>
        {details.map((items) => (
          <Detail
            key={items.id}
            items={items}
            handleAddValue={handleAddValue}
            isActive={isActive}
          />
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default Details;
