import bills from "../../../data/bills";
import Card from "../../elements/Card";
import SimpleBackdrop from "../../elements/Backdrop";
import React, { useEffect, useState } from "react";

const CardBill = () => {

  const [isLoading, setIsLoading] = useState(true); // State untuk Loader Animation
  const [billData, setBillData] = useState([]); // State untuk menyimpan data bills

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Tampilkan Loader
        // Simulasi fetch data
        const response = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                data: bills, // Gunakan data lokal sementara
              }),
            1000
          )
        );
        setBillData(response.data); // Simpan data ke state
      } catch (error) {
        console.error("Failed to fetch bills:", error);
        setBillData([]); // Jika gagal, set data kosong
      } finally {
        setIsLoading(false); // Sembunyikan Loader
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
        <Card title="Upcoming Bill">
          <div className="p-4 text-center text-gray-500">Loading...</div>
        </Card>
      </>
    );
  }

  if (!billData || billData.length === 0) {
    return (
      <Card title="Upcoming Bill">
        <div className="p-4 text-center text-gray-500">
          No upcoming bills available.
        </div>
      </Card>
    );
  }
  
  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
          <span className="text-xs">{bill.month}</span>
          <span className="text-2xl font-bold">{bill.date}</span>
        </div>
        <div className="">
          <img className="h-6" src={`/images/${bill.logo}`} />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs">Last Charge - {bill.lastCharge}</span>
        </div>
      </div>
      <div className="flex place-content-center flex-col">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${bill.amount}
        </span>
      </div>
    </div>
  ));

  return (
    <Card title="Upcoming Bill">
      <div className="h-full flex flex-col justify-around">{billCard}</div>
    </Card>
    // desc={
    //     <div className="h-full flex flex-col justify-around">
    //         {billCard}
    //     </div>
    // }
  );
};

export default CardBill;