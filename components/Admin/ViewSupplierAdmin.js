import React, { useEffect } from "react";
import { useState } from "react";
import SupplierAdmin from "./SupplierAdmin";
import axios from "axios";
import baseUrl from "../../api's/base_url";

function ViewSupplierAdmin() {
    
    const [supplier, setSupplier] = useState({});

    const getOrdersFromApi = () => {
        axios.get(baseUrl + "/supplier").then(
            (response) => {
                setSupplier(response.data);
                console.log(response.data);
            },
            (error) => {
                console.log("error");
                setSupplier({});
            }
        );
    };

    useEffect(() => {
        document.title = "Supplier";
        getOrdersFromApi();
    }, []);

    return (
        <div>
            <h1>Supplier List Admin</h1>

            {supplier.length > 0
                ? supplier.map((s) => <SupplierAdmin key={s.supplierId} supplier={s} />)
                : "No suppliers available"}
        </div>
    );
}

export default ViewSupplierAdmin;
