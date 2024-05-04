import React from "react";
import "./jobCategory.css";
import Jobs from "../jobs/Jobs";
import icon1 from "../../assets/images/category/Product Promotion.svg";
import icon2 from "../../assets/images/category/it support.png";
import icon3 from "../../assets/images/category/SalesEmployee.png";
import icon4 from "../../assets/images/category/food-cook.png";
import icon5 from "../../assets/images/category/administrative-assistan.png";
// hard jobs icon
import icon6 from "../../assets/images/category/waiter.png";
import icon7 from "../../assets/images/category/warehouse-worker.png";
// technicalJobs
import icon8 from "../../assets/images/category/cashierl.png";
// householdJobs
import icon9 from "../../assets/images/category/food-cooking-food.png";
const JobCategory = () => {
  const softJobs = [
    {
      title: "Product Promotion",
      icon: icon1,
      link: "/",
    },
    {
      title: "Product IT Support",
      icon: icon2,
      link: "/",
    },
    {
      title: "Sales Employee",
      icon: icon3,
      link: "/",
    },
    {
      title: "Kitchen porter",
      icon: icon4,
      link: "/",
    },
    {
      title: "Administrative assistant",
      icon: icon5,
      link: "/",
    },
  ];
  const HardJobs = [
    {
      title: "Waiter / waitress",
      icon: icon6,
      link: "/",
    },
    {
      title: "All-round warehouse employee",
      icon: icon7,
      link: "/",
    },
    {
      title: "All-round store employee",
      icon: icon7,
      link: "/",
    },
    {
      title: "Sampling",
      icon: icon7,
      link: "/",
    },
    {
      title: "Sampling",
      icon: icon7,
      link: "/",
    },
  ];
  const technicalJobs = [
    {
      title: "Cashier",
      icon: icon8,
      link: "/",
    },
    {
      title: "Order picker",
      icon: icon8,
      link: "/",
    },
    {
      title: "IT Support",
      icon: icon8,
      link: "/",
    },
    {
      title: "Cashier",
      icon: icon8,
      link: "/",
    },
    {
      title: "Sales Employee",
      icon: icon8,
      link: "/",
    },
  ];
  const householdJobs = [
    {
      title: "Cook",
      icon: icon9,
      link: "/",
    },
    {
      title: "Kitchen porter",
      icon: icon9,
      link: "/",
    },
    {
      title: "Kitchen Aid",
      icon: icon9,
      link: "/",
    },
    {
      title: "Cleaning work",
      icon: icon9,
      link: "/",
    },
    {
      title: "Housekeeping",
      icon: icon9,
      link: "/",
    },
  ];
  return (
    <div className="jobCategory">
      <div className="jobCategory__heading">
        <h1 className="py-3">Browse top job categories</h1>
      </div>
      <div className="jobCategory__icons">
        {softJobs.map((data, index) => (
          <Jobs key={index} title={data.title} img={data.icon} />
        ))}
      </div>
      <div className="jobCategory__icons">
        {HardJobs.map((data, index) => (
          <Jobs key={index} title={data.title} img={data.icon} />
        ))}
      </div>
      <div className="jobCategory__icons">
        {technicalJobs.map((data, index) => (
          <Jobs key={index} title={data.title} img={data.icon} />
        ))}
      </div>
      <div className="jobCategory__icons">
        {householdJobs.map((data, index) => (
          <Jobs key={index} title={data.title} img={data.icon} />
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
