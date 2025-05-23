import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Add special highlight for migration achievement */}
      {experience.companyName === "Intelligentsia SA" && (
        <div className="mt-4 bg-black-200 rounded-lg p-4">
          <h4 className="text-[16px] font-semibold text-[#915eff] mb-2">
            🎯 Key Achievement: System Migration Project
          </h4>
          <p className="text-white-100 text-[13px] leading-[20px]">
            Led the complete automation of a legacy mailing system migration, involving:
          </p>
          <ul className="mt-2 ml-4 list-disc text-[13px] text-secondary space-y-1">
            <li>Analysis and mapping of existing system architecture</li>
            <li>Development of automated migration scripts using Python and Node.js</li>
            <li>Implementation of data validation and error handling mechanisms</li>
            <li>Performance optimization resulting in 80% reduction in processing time</li>
            <li>Successful deployment across enterprise infrastructure serving 1,000+ users</li>
          </ul>
          <div className="mt-3 bg-green-900/20 rounded p-2">
            <p className="text-green-400 text-[12px] font-medium">
              📊 Impact: Reduced manual processing from hours to minutes, improved system reliability by 95%, 
              and established foundation for future scalability improvements.
            </p>
          </div>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");