import React, { useEffect } from "react";
import { useState } from "react";
import DrugAdmin from "./DrugAdmin";
import axios from "axios";
import baseUrl from "../../api's/base_url";

// , {
//                 headers: {
//                     "Access-Control-Allow-Origin": "*",
//                     "Access-Control-Allow-Headers": "Content-Type",
//                     "Access-Control-Allow-Methods": "*",
//                 },
//             }

function ViewDrugsAdmin() {
    const [drugs, setDrugs] = useState({});

    const getOrdersFromApi = () => {
        axios.get(baseUrl + "/drug").then(
            (response) => {
                setDrugs(response.data);
                console.log(response.data);
            },
            (error) => {
                console.log("error");
                setDrugs({});
            }
        );
    };

    useEffect(() => {
        document.title = "Drugs";
        getOrdersFromApi();
    }, []);

    return (
        <div>
            <h1>Drugs List Admin</h1>

            {/* <Drug
                drug={{
                    id: "drug6",
                    name: "name6",
                    expire: "18-12-2026",
                    quantity: 500,
                    price: 12,
                }}
            /> */}

            {/* <Drug drug={drugs.at(1)} /> */}

            {drugs.length > 0
                ? drugs.map((d) => <DrugAdmin key={d.drugId} drug={d} />)
                : "no drugs available"}
        </div>
    );
}
export default ViewDrugsAdmin;
