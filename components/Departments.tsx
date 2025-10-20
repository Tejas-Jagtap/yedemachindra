"use client";

import React from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaSeedling,
  FaHeartbeat,
  FaFileAlt,
  FaBolt,
  FaFemale,
  FaUsers,
  FaUserTie,
  FaTint,
  FaPaw,
  FaBookOpen,
  FaFileInvoiceDollar,
  FaChild,
} from "react-icons/fa";

import { useLanguage } from "@/contexts/LanguageContext";

const Departments = () => {
  const { t, language } = useLanguage();

  const departments = [
    {
      id: 1,
      nameKey: language === "en" ? "Education Department" : "शिक्षण विभाग",
      icon: FaBookOpen,
      color: "from-blue-400 to-blue-600",
      descriptionKey:
        language === "mr"
          ? "शाळा  संचलन आणि व्यवस्थापन."
          : "Manages Z.P. School operations and administration.",
      link: "/departments/education",
    },
    {
      id: 3,
      nameKey: language === "en" ? "Health Department" : "आरोग्य विभाग",
      icon: FaHeartbeat,
      color: "from-red-400 to-red-600",
      descriptionKey:
        language === "mr"
          ? "गावातील आरोग्य सुविधांचा देखभाल व व्यवस्थापन."
          : "Oversees health facilities and services in the village.",
      link: "/departments/health",
    },
    {
      id: 5,
      nameKey: language === "en" ? "Agriculture Department" : "कृषी विभाग",
      icon: FaSeedling,
      color: "from-green-400 to-green-600",
      descriptionKey:
        language === "mr"
          ? "गावातील कृषी विकास व शेतकऱ्यांना मदत करण्याचे कार्य."
          : "Responsible for agricultural development and farmer support.",
      link: "/departments/agriculture",
    },
  ];

  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4">
          <h2 className="text-2xl font-bold">{t("dept.title")}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <Link href="/departments" key={dept.id}>
                  <div className="group cursor-pointer">
                    <div
                      className={`bg-gradient-to-br ${dept.color} text-white p-6 rounded-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
                    >
                      <Icon className="text-6xl mb-3" />
                      <h3 className="font-bold text-3xl mb-1">
                        {dept.nameKey}
                      </h3>
                      <p className="text-lg opacity-90">
                        {dept.descriptionKey}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
