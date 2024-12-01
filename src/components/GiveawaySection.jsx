import React from "react";

const GiveawaySection = () => {
  return (
    <section className="giveaway-section text-center py-12 bg-vibrantPurple">
      <h2 className="text-vibrantYellow text-4xl font-heading">
        Exciting Giveaways Await!
      </h2>
      <p className="details text-vibrantWhite text-lg mt-4">
        Win a Phone and Many More!
      </p>
      <button className="cta-button bg-vibrantPink text-vibrantWhite px-6 py-3 rounded shadow-md hover:bg-vibrantYellow mt-6">
        Enter Giveaway
      </button>
    </section>
  );
};

export default GiveawaySection;
