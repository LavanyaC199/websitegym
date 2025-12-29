import { useState } from "react";

export default function UpiPayment({ amount, plan }) {
  const [show, setShow] = useState(false);
  const [txnId, setTxnId] = useState("");

  const submitPayment = () => {
    if (!txnId) {
      alert("Please enter transaction ID");
      return;
    }

    alert(
      `Payment submitted!\nPlan: ${plan}\nAmount: ₹${amount}\nTxn ID: ${txnId}`
    );

    setShow(false);
    setTxnId("");
  };

  return (
    <>
      <button className="btn" onClick={() => setShow(true)}>
        Pay ₹{amount}
      </button>

      {show && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3>{plan} Membership</h3>
            <p>Amount: ₹{amount}</p>

            {/* QR IMAGE */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=yourupi@upi&pn=RhinosGym&am="
              alt="UPI QR"
              style={{ margin: "20px 0" }}
            />

            <p>UPI ID: <strong>yourupi@upi</strong></p>

            <input
              placeholder="Enter Transaction ID"
              value={txnId}
              onChange={(e) => setTxnId(e.target.value)}
            />

            <button className="btn" onClick={submitPayment}>
              Submit Payment
            </button>

            <p
              style={{ marginTop: 10, cursor: "pointer", color: "#aaa" }}
              onClick={() => setShow(false)}
            >
              Cancel
            </p>
          </div>
        </div>
      )}
    </>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#111",
  padding: 30,
  borderRadius: 10,
  width: 320,
  textAlign: "center",
};
