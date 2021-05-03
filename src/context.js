import React, { useEffect, useState } from "react";
import dataArray from "../public/data.json";
const Context = React.createContext();

const ContextProvider = (props) => {
  const [invoices, setInvoiceData] = useState([]);

  useEffect(() => {
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    let retrievedData = localStorage.getItem("dataArray");
    setInvoiceData(JSON.parse(retrievedData));
  }, []);

  const clearInvoiceData = (id) => {
    const filtered = invoices.filter((invoice) => invoice.id !== id);
    localStorage.setItem("dataArray", JSON.stringify(filtered));
    let retrievedData = localStorage.getItem("dataArray");
    setInvoiceData(JSON.parse(retrievedData));
  };

  const editInvoice = (updatedInvoice) => {
    const index = invoices.findIndex(
      (invoice) => invoice.id === updatedInvoice.id
    );
    invoices[index] = updatedInvoice;
  };

  const addNewInvoice = (newInvoice) => {
    setInvoiceData((prevInvoices) => [...prevInvoices, newInvoice]);
  };

  return (
    <Context.Provider
      value={{
        invoices,
        setInvoiceData,
        clearInvoiceData,
        addNewInvoice,
        editInvoice
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
