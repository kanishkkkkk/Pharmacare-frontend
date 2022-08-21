import React, { useEffect } from "react";
import { useState } from "react";
import Supplier from "./Supplier";
import axios from "axios";
import baseUrl from "../../api's/base_url";

function ViewSupplier() {
    const [supplier, setSupplier] = useState({});

    const getSupplierFromApi = () => {
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
        getSupplierFromApi();
    }, []);

    return (
        <div>
            <h1 className="my-2" color="secondary">
                Supplier List
            </h1>
            {supplier.length > 0
                ? supplier.map((s) => (
                      <Supplier key={s.supplierId} supplier={s} />
                  ))
                : "no supplier available"}
        </div>
    );
}
export default ViewSupplier;
