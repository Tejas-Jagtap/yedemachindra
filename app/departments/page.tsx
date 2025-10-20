"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaSeedling,
  FaHeartbeat,
  FaUsers,
  FaBolt,
  FaLandmark,
  FaFileAlt,
  FaPaw,
  FaTint,
  FaHome,
  FaBookOpen,
  FaFileInvoiceDollar,
  FaChild,
} from "react-icons/fa";

export default function DepartmentsPage() {
  const { t, language } = useLanguage();

  const subPages = [
    {
      nameKey: "dept.education",
      name: language === "en" ? "Education Department" : "शिक्षण विभाग",
      description:
        language === "mr"
          ? "शाळा व विद्यार्थ्यांचे प्रशासन."
          : "Manages schools and students' affairs.",
      head: language === "en" ? "" : "",
      phone: language === "en" ? "+91-" : "+९१-",
      icon: FaBookOpen,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      nameKey: "dept.health",
      name: language === "en" ? "Health Department" : "आरोग्य विभाग",
      description:
        language === "mr"
          ? "ग्रामीण आरोग्य सेवा व रुग्णालय."
          : "Provides rural health services and clinics.",
      head: language === "en" ? "" : "",
      phone: language === "en" ? "+91-" : "+९१-",
      icon: FaHeartbeat,
      color: "from-red-400 to-red-600",
    },
    {
      nameKey: "dept.agriculture",
      name: language === "en" ? "Agriculture Department" : "कृषी विभाग",
      description:
        language === "mr"
          ? "शेतीसाठी मार्गदर्शन व सहाय्य."
          : "Provides guidance and support for farming.",
      head: language === "en" ? "" : "",
      phone: language === "en" ? "+91-" : "+९१-",
      icon: FaSeedling,
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("dept.title")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("common.allDepartmentsInfo")}
          </p>
        </div>

        {/* Sub-Pages Navigation */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("common.selectDepartment")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subPages.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Link href="/departments" key={index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                    <div
                      className={`bg-gradient-to-br ${dept.color} p-6 sm:p-8 text-white`}
                    >
                      <Icon className="text-4xl sm:text-5xl mb-3" />
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {dept.name}
                      </h3>
                    </div>
                    <div className="p-3 ml-5">
                      <p className="text-gray-700 text-sm sm:text-base">
                        {dept.description}
                      </p>

                      {/* view departments */}

                      {/* <div className="flex items-center text-government-orange font-semibold">
                        <span className="mr-2">
                          {t("common.viewDepartment")}
                        </span>
                        <FaArrowRight />
                      </div> */}
                    </div>
                    <div className="p-3 ml-5">
                      <p className="text-gray-700 text-lg sm:text-base">
                        {t("dept.departmentHeadtitle")} - {dept.head}
                      </p>
                      <p className="text-gray-700 text-lg sm:text-base">
                        {t("common.phone")} - {dept.phone}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Office Hours */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("common.officeHours")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-l-4 border-government-orange pl-4">
              <h3 className="font-bold text-lg mb-2">{t("common.weekdays")}</h3>
              <p className="text-gray-700">
                {t("common.mondayFriday")}
                <br />
                10:00 AM - 6:00 PM
              </p>
            </div>
            <div className="border-l-4 border-government-green pl-4">
              <h3 className="font-bold text-lg mb-2">{t("common.saturday")}</h3>
              <p className="text-gray-700">
                10:00 AM - 2:00 PM
                <br />({t("common.limitedServices")})
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg mb-2">{t("common.sunday")}</h3>
              <p className="text-gray-700">
                {t("common.closed")}
                <br />({t("common.emergencyServicesAvailable")})
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
