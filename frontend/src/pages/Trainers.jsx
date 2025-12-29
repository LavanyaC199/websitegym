export default function Trainers() {
  const trainers = [
    {
      name: "Arjun Kumar",
      role: "Strength & Conditioning Coach",
      img: "https://images.unsplash.com/photo-1649768870222-17848797d6b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYWluZXIlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Rahul Mehta",
      role: "Weight Loss Specialist",
      img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    },
    {
      name: "Sneha Patel",
      role: "Personal Fitness Trainer",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    },
  ];

  return (
    <section className="section">
      <h2>OUR TRAINERS</h2>

      <div className="grid-3">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <img src={trainer.img} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
