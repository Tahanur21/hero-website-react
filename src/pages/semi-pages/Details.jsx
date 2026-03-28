/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Cards from "./Cards";
import Detail from "./Detail";

const Details = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        const getApp = [...data].filter((items)=> items.id === parseInt(id));
        setDetails(getApp);
    },[data,id])
    return (
        <div>
            {
                details.map((items)=>(
                    <Detail
                    key={items.id}
                    items={items}
                    />
                ))
            }
        </div>
    );
};

export default Details;