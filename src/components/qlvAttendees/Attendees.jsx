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
    <>
      <h1 className="font-bold text-sm sm:text-3xl my-4 text-center">
        QLV 2024 Attendees
      </h1>
      <table className="w-full border border-collapse space-y-4 px-3">
        <thead>
          <th className="text-left">S/N</th>
          <th className="text-left">Name</th>
          <th className="text-left">Email</th>
          <th className="text-left">Phone</th>
          <th className="text-left">JCI Member</th>
          <th className="text-left">Abuja Resident</th>
          <th className="text-left">Date Registered</th>
          <th className="text-left">How did you hear about us?</th>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr className="border p-3">
                <tr>{i + 1}</tr>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.isMember ? "Member" : "Non-member"}</td>
                <td>{item.inAbuja ? "Yes" : "No"}</td>
                <td>{item.createdAt ? formatDate(item.createdAt) : "-"}</td>
                <td>{item.publicity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Attendees;
