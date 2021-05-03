import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../context";

const EditInvoice = () => {
  const { invoiceId } = useParams();
  const context = useContext(Context);

  // Sucht nach der Rechnung, die angezeigt werden soll
  const thisInvoice = context.invoices.find(
    (invoice) => invoice.id === invoiceId
  );

  const [invoice, setInvoice] = useState(thisInvoice);

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
          <button onClick={() => context.editInvoice(invoice)}>Submit</button>
        </Link>
      </form>
      <Link to="/">
        <button onClick={() => context.clearInvoiceData(invoice.id)}>
          Delete Invoice
        </button>
      </Link>
    </div>
  );
};

export default EditInvoice;
