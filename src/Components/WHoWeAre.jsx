import React from 'react'
import Card from './Card';
import { FaBell, FaChartLine, FaFile, FaFire, FaHome, FaMap } from 'react-icons/fa';

const WHoWeAre = () => {
     const cardData = [
       {
         heading: "Real-Time Monitoring",
         icon: <FaChartLine />,
         paragraph:
           "Monitor generators in real-time. Track key metrics like runtime, fuel usage, and battery status instantly.",
       },
       {
         heading: "Proactive Alerts ",
         icon: <FaBell />,
         paragraph:
           "Receive instant alerts for critical issues and upcoming maintenance. Take prompt action with our proactive alert system to prevent problems before they arise.",
       },
       {
         heading: "User-Friendly Dashboard ",
         icon: <FaHome />,
         paragraph:
           "Explore our user-friendly dashboard for a complete generator fleet overview. Easily access performance graphs, maintenance schedules, and interactive controls.",
       },
       {
         heading: "Geographical Visualization",
         icon: <FaMap />,
         paragraph:
           "Map integration visualizes generator locations, letting you monitor status and environmental conditions effortlessly across various locations.",
       },
       {
         heading: "Efficient Fuel Management ",
         icon: <FaFire />,
         paragraph:
           "Effortlessly monitor fuel levels and consumption rates. Utilize predictive analysis to plan refueling schedules for uninterrupted generator operation.",
       },
       {
         heading: "Customizable Reports",
         icon: <FaFile />,
         paragraph:
           "Generate custom reports, analyze historical data, and track trends for informed decisions. Easily export data for further analysis and reporting.",
       },
     ];
  return (
    <div className='py-20'>
      <div className="container mx-auto pt-9 md:flex-row items-center justify-center">
        <h2 className="font-inter px-6 text-start text-4xl font-bold pb-4">
          Why Choose Us
        </h2>
        <p className="font-inter text-[16px] text-start px-6 pb-10 lg:pb-20 text-gray-500">
          Elevate your generator management with Generator Maintenance App.
          Optimize performance and extend lifespan through proactive
          maintenance. Enjoy remote control for flexibility and user-friendly
          design for seamless navigation. Rest assured with secure data
          handling, prioritizing integrity and confidentiality. Join us on the
          journey to enhance reliability, efficiency, and peace of mind in
          managing your generator fleet. Choose Generator Maintenance App for a
          powerful, streamlined experience.
        </p>
        <div className="grid grid-cols-1 lg:p-0 p-6 md:grid-cols-2 items-center justify-center gap-6 lg:gap-10 w-full md:w-auto">
          {cardData.map((card, index) => (
            <Card
              key={index}
              heading={card.heading}
              icon={card.icon}
              paragraph={card.paragraph}
              layout={card.layout}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WHoWeAre
