import UpiPayment from "./UpiPayment";

export default function Pricing() {
  return (
    <section className="section">
      <h2>MEMBERSHIP PLANS</h2>

      <div className="grid-3">
        <div className="price-card">
          <h3>Basic</h3>
          <h1>₹999</h1>
          <UpiPayment amount={999} plan="Basic" />
        </div>

        <div className="price-card highlight">
          <h3>Pro</h3>
          <h1>₹1999</h1>
          <UpiPayment amount={1999} plan="Pro" />
        </div>

        <div className="price-card">
          <h3>Elite</h3>
          <h1>₹3999</h1>
          <UpiPayment amount={3999} plan="Elite" />
        </div>
      </div>
    </section>
  );
}
