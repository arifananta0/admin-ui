import Card from "../components/elements/Card";
import MainLayout from "../components/layouts/MainLayout";
import CardBill from "../components/fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/fragments/Dashboard/CardTransaction";
import CardBalance from "../components/fragments/Dashboard/CardBalance";
import CardStatistic from "../components/fragments/Dashboard/CardStatistic";
import CardGoal from "../components/fragments/Dashboard/CardGoal";
import axios from "axios";
import { useContext } from "react";
import { NotifContext } from "../context/notifContext";
import { AuthContext } from "../context/authContext";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {

  const [bills, setBills] = useState([]); // State untuk menyimpan data bills
  const [loading, setLoading] = useState(true); // State loading
  const [error, setError] = useState(null); // State untuk error handling

  const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        setLoading(true); // Set loading menjadi true
        const refreshToken = localStorage.getItem("refreshToken"); // Ambil token dari localStorage

        if (!refreshToken) {
          setError("No token found. Please log in again.");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "https://jwt-auth-eight-neon.vercel.app/bills",
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`, // Sertakan token di header
            },
          }
        );

        console.log("Current Token:", refreshToken); // Debug log untuk token
        console.log("Fetched bills:", response.data.data || []); // Debug log untuk bills
        setBills(response.data.data || []); // Simpan data bills ke state
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          if (error.response.status === 401) {
            setOpen(true);
            setMsg({
              severity: "error",
              desc: "Session has expired. Please log in again.",
            });
            setIsLoggedIn(false);
            setName("");
            localStorage.removeItem("refreshToken");
          } else {
            setError(error.response.data?.message || "Failed to fetch bills.");
          }
        } else {
          console.error("Network error:", error);
          setError("Network error or server is unreachable.");
        }
      }
    };

    fetchBills();
  }, []);
  
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="grid grid-cols-3 gap-4 h-full">
      <CardBalance />
        <CardGoal  />
        {/* upcoming bill */}
        <CardBill />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="grid grid-cols-3 gap-4 h-full">
        {/* recent transactions */}
        <CardTransaction />

        <CardStatistic />

        {/* expenses break down */}
        <CardExpenseBreakdown />
      </div>
  {/* bottom content end*/}
  </MainLayout>
  );
};

export default DashboardPage;