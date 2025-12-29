import Navbar from "../components/Navbar";
import "../styles/main.css";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <section className="section fade">
        <h2 style={{ marginBottom: "30px" }}>GYM GALLERY</h2>

        <div className="grid-3">
          {[
            "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
            "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
            "https://plus.unsplash.com/premium_photo-1661670892906-b1cffa07584d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1661962342128-505f8032ea45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1674059549221-e2943b475f62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1581009137042-c552e485697a"
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Gym"
              className="gallery-img"
            />
          ))}
        </div>
      </section>
    </>
  );
}
