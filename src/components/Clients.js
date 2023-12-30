import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.paddingY} mb-6 md:mb-0`}>
      <div className="flex gap-20 w-full flex-wrap justify-evenly items-stretch">
        {clients.map((client) => {
          return (
            <div className="w-[200px] flex items-center justify-center" key={client.id}>
              <img
                src={client.logo}
                alt="client"
                className="w-full h-fit"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
