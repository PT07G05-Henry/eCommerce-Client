import React, {useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./payment.css";
import { useDispatch } from "react-redux";
import { reset } from "../../store/cart";

export default function Payment() {
    const dispatch = useDispatch();
  const search = useLocation().search;
  const navigate = useNavigate();
  const orderId = new URLSearchParams(search).get("orderId");
  const status = new URLSearchParams(search).get("status");
  const total_price = new URLSearchParams(search).get("total_price");
  const userId = new URLSearchParams(search).get("userId");

  useEffect(() => {
    dispatch(reset())
    localStorage.setItem(`User${userId}`, JSON.stringify([]))
  }, [])
  

  return (
    <div className="container ">
      <table className="container__table">
        <tr>
          <th colSpan={2}>
            <h1>Payment</h1>
          </th>
        </tr>
        <tr>
          <td>Order ID :</td>
          <td>{orderId}</td>
        </tr>
        <tr>
          <td>Status :</td>
          <td>{status}</td>
        </tr>
        <tr>
          <td>Total Price :</td>
          <td>{total_price}</td>
        </tr>
      </table>
      <div className="divCenter">
        <input
            className="btn"
            type="button"
            value="Go Back"
            onClick={() => navigate("/")}
        ></input>
      </div>
    </div>
  );
}