import React from 'react'
import ServiceCard from './ServiceCard'

export default function Services() {
  const services = [
    {
      service: "Web Development",
      description: "Building responsive and modern websites.",
      image: "/assets/search.gif",
      text: "Creating websites that are user-friendly, mobile-responsive, and optimized for performance, tailored to your business needs. We ensure that each website is designed with a focus on usability and speed, providing a seamless browsing experience across all devices. Our websites are visually appealing and include optimized back-end systems for better scalability and security.",
      animation: "/assets/search.png"
    },
    {
      service: "SEO Optimization",
      description: "Improving website ranking on search engines.",
      image: "/assets/line-chart.gif",
      text: "Enhancing website visibility through on-page and off-page SEO techniques, ensuring higher search engine rankings. We conduct keyword research to target the right audience, optimize content, and build high-quality backlinks to improve domain authority.",
      animation: "/assets/line-chart.png"
    },
    {
      service: "Graphic Design",
      description: "Designing visually appealing graphics.",
      image: "/assets/computer.gif",
      text: "Providing creative design solutions for branding, advertisements, and websites. We combine creativity with functionality, ensuring that each design communicates your message effectively and enhances your business's visual presence.",
      animation: "/assets/computer.png"
    },
    {
      service: "Digital Marketing",
      description: "Crafting effective digital marketing strategies.",
      image: "/assets/tech-support.gif",
      text: "Developing tailored marketing campaigns across channels, including social media, email, and PPC. We analyze data to optimize campaigns, ensuring maximum ROI and achieving your business goals, whether it's increasing brand awareness or driving sales.",
      animation: "/assets/tech-support.png"
    }
  ]  
      
  return (
    <div className='flex flex-col items-center'>
      {services.map((service, index) => (
        index % 2 === 0 && <ServiceCard key={index} index={index} content={service} />
      ))}

      <div className='scale-95 -translate-x-2 text-white my-5 bg-violet-800 rounded-lg'>
        <h1 className='z-10 pt-5 text-2xl sm:text-3xl font-bold text-center'>We make sure to give your customers the best experience</h1>
        <img
        className='translate-x-5 translate-y-5 rounded-lg'
        src="/assets/website-development.webp" alt="website development" />
      </div>

      {services.map((service, index) => (
        index % 2 !== 0 && <ServiceCard key={index} index={index} content={service} />
      ))}
    </div>
  );
}
