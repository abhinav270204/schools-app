"use client";

import { useEffect, useState } from "react";

export default function ShowSchoolsPage() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/api/schools")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setSchools(data.data);
      });
  }, []);

  return (
    <div className="container">
      <h2>🏫 Schools</h2>

      {schools.length === 0 ? (
        <p>No schools found. Add one first!</p>
      ) : (
        <div className="grid">
          {schools.map((s) => (
            <div className="card" key={s.id}>
              <img src={s.image} alt={s.name} />
              <h3>{s.name}</h3>
              <p>{s.address}</p>
              <p className="city">{s.city}</p>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
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
        p {
          margin: 2px 0;
          color: #555;
        }
        .city {
          font-weight: bold;
          color: #0070f3;
        }
        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}