import React, { useContext } from "react";
import { Context } from "../context.js";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(Context);
  //console.log(context.invoices);
  //console.log(context.clearInvoiceData)
  const invoiceCardComponents = context.invoices.map((invoice) => {
    return (
      <Link to={`/view-invoice/${invoice.id}`}>
        <div key={invoice.id}>{invoice.clientName}</div>
      </Link>
    );
  });

  return (
    <section>
      {invoiceCardComponents}
      <Link to="/create-invoice">
        <button>Create New Invoice</button>
      </Link>
    </section>
  );
};

export default Home;
