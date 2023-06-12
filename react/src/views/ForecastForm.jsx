
import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";


export default function CarForm() {

  const [loading, setLoading] = useState(false);
  const [_carInfo, setCarInfo] = useState([])

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/forecast`)
      .then(({ data }) => {
        setLoading(false);
        console.log(data)
        setCarInfo(data.forecastData);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);



  return (
    <>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Certificate ID</th>
          <th>Month End</th>
          <th>License Plate</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {_carInfo.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.certificate_id}</td>
            <td>{item.month_end}</td>
            <td>{item.license_plate}</td>
            <td>{item.type}</td>
          </tr>
        ))}
        </tbody>
      </table>

    </>
  )
}

