import React, { useEffect } from "react";

const DonateBankDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col gap-16 py-14 px-4 lg:px-16">
      <section className="flex flex-col gap-4 font-semibold">
        <h1 className="text-[1.5rem]">
          Kindly send your donations to the account details below:{" "}
        </h1>
        <h3 className="font-bold"> PROJECT & PROGRAMMES</h3>
        <div className="flex flex-col gap-4 lg:px-16">
          <div className="flex flex-col items-start lg:gap-6 lg:flex-row ">
            <p>Account Number : </p>
            <p className="bg-[#e5e5e5] p-1 px-4 rounded-md">7723913012 </p>
          </div>
          <div className="flex flex-col items-start lg:gap-6 lg:flex-row ">
            <p>Bank Name : </p>
            <p className="bg-[#e5e5e5] p-1 px-4 rounded-md">FCMB</p>
          </div>
          <div className="flex flex-col items-start lg:gap-6 lg:flex-row ">
            <p>Account Name : </p>
            <p className="bg-[#e5e5e5] p-1 px-4 rounded-md">
              JCI Aso - Projects Account
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center font-medium gap-2">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707196670874/720cc514-ae39-427e-8242-5f17c660a9c6.png"
          alt="donate"
        />
        <p className=" ">
          “As we work to create light for others, we naturally light our own
          way”
        </p>
        <h1 className="italic">~Mary Anne Radmacher~</h1>
      </section>
    </div>
  );
};

export default DonateBankDetails;
