import React from "react";

export default function Card({ title, subtitle, image, content }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <h3 className="card-subtitle">{subtitle}</h3>
        <p className="card-description">{content}</p>
      </div>
    </div>
  );
}
