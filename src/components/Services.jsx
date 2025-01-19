import React from 'react'
import ServiceCard from './ServiceCard'
import { div } from 'three/tsl';

export default function Services() {
    const services = [
        {
          service: "Web Development",
          description: "Building responsive and modern websites.",
          image: "web-development.jpg"
        },
        {
          service: "Mobile App Development",
          description: "Creating user-friendly mobile applications.",
          image: "mobile-app-development.jpg"
        },
        {
          service: "SEO Optimization",
          description: "Improving website ranking on search engines.",
          image: "seo-optimization.jpg"
        },
        {
          service: "Digital Marketing",
          description: "Crafting effective digital marketing strategies.",
          image: "digital-marketing.jpg"
        },
        {
          service: "Graphic Design",
          description: "Designing visually appealing graphics.",
          image: "graphic-design.jpg"
        }
      ];
      
  return (
    <div>
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <h2>{service.service}</h2>
          <p>{service.description}</p>
          <img src={service.image} alt={service.service} />
        </div>
      ))}
    </div>
  )
}
