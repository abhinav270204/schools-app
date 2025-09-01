"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

// ✅ Zod validation schema
const schema = z.object({
  name: z.string().min(2, "School name is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  contact: z
    .string()
    .regex(/^[0-9]{10}$/, "Contact must be a 10-digit number"),
  email_id: z.string().email("Invalid email address"),
  image: z.any().refine((file) => file?.length === 1, "Image is required"),
});

export default function AddSchoolPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // ✅ Handle form submit
  const onSubmit = async (data) => {
    setLoading(true);

    // Prepare form data for upload
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "image") {
        formData.append("image", data.image[0]); // single file
      } else {
        formData.append(key, data[key]);
      }
    });

    const res = await fetch("/api/schools", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    setLoading(false);

    if (json.success) {
      alert("✅ School added successfully!");
      reset();
    } else {
      alert("❌ Error: " + json.error);
    }
  };

  return (
    <div className="container">
      <h2>Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Name
          <input type="text" {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </label>

        <label>
          Address
          <input type="text" {...register("address")} />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </label>

        <label>
          City
          <input type="text" {...register("city")} />
          {errors.city && <p className="error">{errors.city.message}</p>}
        </label>

        <label>
          State
          <input type="text" {...register("state")} />
          {errors.state && <p className="error">{errors.state.message}</p>}
        </label>

        <label>
          Contact
          <input type="text" {...register("contact")} />
          {errors.contact && <p className="error">{errors.contact.message}</p>}
        </label>

        <label>
          Email
          <input type="email" {...register("email_id")} />
          {errors.email_id && (
            <p className="error">{errors.email_id.message}</p>
          )}
        </label>

        <label>
          Image
          <input type="file" accept="image/*" {...register("image")} />
          {errors.image && <p className="error">{errors.image.message}</p>}
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Add School"}
        </button>
      </form>

      <style jsx>{`
        .container {
          max-width: 500px;
          margin: auto;
          padding: 20px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        input {
          padding: 8px;
          font-size: 1rem;
        }
        button {
          background: blue;
          color: white;
          padding: 10px;
          border: none;
          cursor: pointer;
        }
        button:disabled {
          background: gray;
        }
        .error {
          color: red;
          font-size: 0.9rem;
        }
        @media (max-width: 600px) {
          .container {
            padding: 10px;
          }
          input,
          button {
            font-size: 0.9rem;
            padding: 8px;
          }
        }
      `}</style>
    </div>
  );
}