export default function SchoolCard({ name, address, city, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{address}</p>
      <p className="city">{city}</p>
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 15px;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        h3 {
          margin: 10px 0 5px;
          font-size: 1.2rem;
          color: #333;
        }
        .city {
          font-weight: bold;
          color: #0070f3;
        }
      `}</style>
    </div>
  );
}