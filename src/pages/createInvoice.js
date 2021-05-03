import React, { useContext, useState } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";

const initialInvoiceTemplate = {
  id: "",
  clientName: ""
};

const CreateInvoice = () => {
  const context = useContext(Context);

  const [invoice, setInvoice] = useState(initialInvoiceTemplate);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInvoice((prevInvoice) => {
      return {
        ...prevInvoice,
        [name]: value
      };
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="clientName"
          placeholder="clientName"
          value={invoice.clientName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="id"
          placeholder="id"
          value={invoice.id}
          onChange={handleChange}
        />
        <Link to="/">
          <button onClick={() => context.addNewInvoice(invoice)}>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateInvoice;
