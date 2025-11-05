"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("ข้อมูลที่ส่ง:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section>
      <h1>Contact</h1>
      {sent ? (
        <p className="success">ส่งข้อความเรียบร้อยแล้ว! ✅</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>ชื่อ:</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <label>อีเมล:</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <label>ข้อความ:</label>
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <button type="submit">ส่งข้อความ</button>
        </form>
      )}
    </section>
  );
}
