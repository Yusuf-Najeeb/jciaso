import { useEffect, useState } from "react";

const Attendees = () => {
  const [data, setData] = useState([]);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://event-form-server-1.onrender.com/api/v1/register", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          if (res.ok) {
            const data = await res.json();
            setData(data.data);
          } else {
            const errorData = await res.json();
            setData(errorData.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);
  return (
    <main className="bg-[#001926] text-[#FCFCFC] w-full h-screen p-4">
      <h1 className="font-bold text-sm sm:text-3xl mb-4 text-center">
        QLV 2024 Attendees
      </h1>
      <table className="w-[95%] border border-collapse p-4 mx-4">
        <thead>
          <th className="text-left border p-2">S/N</th>
          <th className="text-left border p-2">Name</th>
          <th className="text-left border p-2">Email</th>
          <th className="text-left border p-2">Phone</th>
          <th className="text-left border p-2">JCI Member</th>
          <th className="text-left border p-2">Abuja Resident</th>
          <th className="text-left border p-2">Date Registered</th>
          <th className="text-left border p-2">How did you hear about us?</th>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr>
                <td className="p-2 border">{i + 1}</td>
                <td className="p-2 border">{item.fullName}</td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border">{item.phoneNumber}</td>
                <td className="p-2 border">
                  {item.isMember ? "Member" : "Non-member"}
                </td>
                <td className="p-2 border">{item.inAbuja ? "Yes" : "No"}</td>
                <td className="p-2 border text-center">
                  {item.createdAt ? formatDate(item.createdAt) : "-"}
                </td>
                <td className="p-2 border">{item.publicity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Attendees;
