import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../context";

const ViewInvoice = () => {
  const { invoiceId } = useParams();
  const context = useContext(Context);

  // Sucht nach der Rechnung, die angezeigt werden soll
  const thisInvoice = context.invoices.find(
    (invoice) => invoice.id === invoiceId
  );
  return (
    <div>
      <h3>{thisInvoice.clientName}</h3>
      <p>{thisInvoice.id}</p>
      <Link to="/">
        <button onClick={() => context.clearInvoiceData(thisInvoice.id)}>
          Delete Invoice
        </button>
      </Link>
      <Link to={`/edit-invoice/${thisInvoice.id}`}>
        <button>Edit Invoice</button>
      </Link>
    </div>
  );
};

export default ViewInvoice;
