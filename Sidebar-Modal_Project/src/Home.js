import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  const { isModalOpen, openModal } = useGlobalContext();
  return (
    <main>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
