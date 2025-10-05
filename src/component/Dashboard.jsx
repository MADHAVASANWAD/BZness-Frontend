import React, { useState, useRef } from "react";
import Afterbar from "./Afterbar";
import "../css/Dashborad.css"; 

function Dashboard(props) {
  const [method, setMethod] = useState(true); 
  const [isOpen, setIsOpen] = useState(false); 
  const online = useRef(null);
  const [selected, setselect] = useState("");

  const handledialogopen = () => {
    if (online.current) {
      online.current.showModal(); 
      setIsOpen(true);
      setMethod(false);
    } else {
      console.error("Dialog ref is not available");
    }
  };

  const handledialogclose = () => {
    if (online.current) {
      online.current.close(); 
      setIsOpen(false);
      setMethod(true);
    }
  };

  const handleselect = (e) =>{
        setselect(e.target.value);
  }

  return (
    <>
      <Afterbar />
      <div className="dashboard">
        <div className="allitems">
          <div className="searchbar">
            <input type="text" placeholder="Search here" />
            <select value={selected} onChange={handleselect}>
              <option value="">Category</option>
              <option value="abc">abc</option>
              <option value="xyz">xyz</option>
            </select>
          </div>

          <div className="itesms">
            {Array(30)
              .fill()
              .map((_, index) => (
                <span key={index} className="box">
                  item {index + 1}
                </span>
              ))}
          </div>
        </div>

        <div className="orderplacer">
          <div className="customer">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="enter name" />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="enter phone" />
          </div>
          <div className="cart">cart items</div>
          <div className="total">
            <span>Total: </span>
            <span>1999</span>
          </div>
          <div className="bottomdetails">
            <div className="div1">
              <button onClick={() => setMethod(true)}>Cash</button>
              <button onClick={handledialogopen}>Card</button>
            </div>

            <div className="div1">
              {method ? (
                <>
                  <input type="number" placeholder="enter cash amount" />
                  <button>Place Order</button>
                </>
              ) : null}
              <dialog ref={online}  className={isOpen ?"dialogbox" :"closebox"}>
                <span >Online Pay</span>
                <button>Place Order</button>
                <button onClick={handledialogclose}>Close</button>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;