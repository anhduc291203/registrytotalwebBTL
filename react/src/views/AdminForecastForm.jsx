
import { useEffect, useState } from "react";
import axiosAdmin from "../axious-admin.js";


export default function CarForm() {

  const [loading, setLoading] = useState(false);
  const [_carInfo, setCarInfo] = useState([])

  useEffect(() => {
    setLoading(true);
    axiosAdmin
      .get(`/manageforecast`)
      .then(({ data }) => {
        setLoading(false);
        console.log(data)
        setCarInfo(data.forecastCarData);
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
          <th>Center Name</th>
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
            <td>{item.center_name}</td>
            <td>{item.license_plate}</td>
            <td>{item.type}</td>
          </tr>
        ))}
        </tbody>
      </table>

    </>
  )
}

