import style from "./Dashboard.module.css";

import { useEffect, useState } from "react";
import * as offerService from "../../services/offerService";
import { Offer } from "./Offer";

const Dashboard = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService.getAll()
      .then((res) => setOffers(res))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section id="dashboard">
      {offers.length > 0 ? (
      <>
        <h2>Job Offers</h2>
        {offers.map((o) => <Offer key={o._id} offer={o} />)}
      </>) : (
        <h2>No offers yet.</h2>
      )}
    </section>
  );
};

export default Dashboard