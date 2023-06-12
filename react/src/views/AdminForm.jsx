
import { useEffect, useState } from "react";
import axiosAdmin from "../axious-admin.js";


export default function AdminForm() {

  const [loading, setLoading] = useState(false);
  const [_carInfo, setCarInfo] = useState([])

    useEffect(() => {
      setLoading(true);
      axiosAdmin
        .get(`/carinfo`)
        .then(({ data }) => {
          setLoading(false);
          console.log(data.carInfo)
          setCarInfo(data.carInfo);
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
          <th>License Plate</th>
          <th>Owner Name</th>
          <th>Purposes</th>
        </tr>
        </thead>
        <tbody>
        {_carInfo.map((item, index) => (
          <tr key={index}>
            <td>{item.license_plate}</td>
            <td>{item.owner_name}</td>
            <td>{item.purposes.join(', ')}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}
