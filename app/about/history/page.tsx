"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaHistory,
  FaLandmark,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function HistoryPage() {
  const { t, language } = useLanguage();

  const timeline = [
    {
      year: language === "en" ? 1975 : "१९७२",
      titleKey: "history.villageFoundation",
      descKey: "history.foundationDesc",
      color: "bg-blue-500",
    },
  ];

  const historicalPlaces = [
    {
      nameKey: "history.ancientTemple",
      descKey: "history.templeDesc",
      icon: FaLandmark,
    },
    {
      nameKey: "history.memorial",
      descKey: "history.memorialDesc",
      icon: FaMapMarkerAlt,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about.history")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("history.subtitle")}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaHistory className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("history.ourHeritage")}
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {language === "en" ? (
              <>
                1. Yedemachhindra village is spiritually enriched, having been
                blessed by the sacred presence of Jagatguru Shri Machhindranath
                Maharaj.
                <br />
                2. The village is the birthplace of Krantisinha Nana Ramchandra
                Patil, a freedom fighter and former MP, who was a leader in the
                Satara Parallel Government.
                <br />
                3. People of all castes and religions live in harmony; the
                village has never witnessed communal violence.
                <br />
                4. The village has a rich agricultural tradition — 80% of the
                land is water-abundant.
                <br />
                5. Since the drought of 1972, there has been no major natural
                disaster.
                <br />
                6. Traditional festivals are celebrated joyfully and
                collectively.
                <br />
                7. The village has produced state-level athletes, especially in
                wrestling and kabaddi.
                <br />
                8. A major farmers' movement in Maharashtra originated in
                Yedemachhindra.
                <br />
                9. The village has facilities like a cooperative society, bank,
                school, and primary health center.
                <br />
                10. The number of retired and active teachers in the village is
                significant.
                <br />
                11. The village has both Hindu temples and a mosque, showing
                religious harmony.
                <br />
                12. Every year, Warkaris from the village participate in the
                Ashadhi Wari to Pandharpur as part of the Krantisinha Nana Patil
                Dindi — mostly involving youth.
                <br />
                13. Annadaan (community food donation) is organized on various
                birth and death anniversaries.
              </>
            ) : (
              <>
                १- जगतगुरू श्री मच्छिंद्रनाथ महाराज याच्या पदपर्शीने पावन झालेली
                भुमी म्हणुन आध्यात्मिक वारसा येडेमच्छिंद्र गावाला लाभला.
                <br />
                २- सातारा प्रतिसरकार प्रेणेते माजी खासदार क्रांतिसिंह नाना
                रामचंद्र पाटील यांचे गाव येडेमच्छिंद्र.
                <br />
                ३- गावामध्ये सर्व जातीधर्माचे लोक राहतात. गावात कधीही जातीय दंगल
                झालेली ‌नाही.
                <br />
                ४- गावाला शेतीची परंपरा आहे; ८०% क्षेत्र हे पाणस्थळ आहे.
                <br />
                ५- गावाला १९७२ चा दुष्काळानंतर कधीही नैसर्गिक आपत्ती आलेली नाही.
                <br />
                ६- गावामध्ये परंपरागत उत्सव खेळीमेळीने पार पडतात.
                <br />
                ७- गावाला क्रिडा क्षेत्रात राजस्तरीय खेळाडू मिळाले आहेत;
                प्रामुख्याने कुस्ती आणि कबड्डी या खेळामध्ये विशेष यश मिळवले आहे.
                <br />
                ८- महाराष्ट्रात कार्यरत असलेल्या शेतकरी संघटनेची मुहूर्तमेढ
                येडेमच्छिंद्र गावात रोवली गेली.
                <br />
                ९- गावामध्ये विकास सोसायटी, बँक, शाळा, आरोग्यकेंद्र यांसारखी
                सरकारी कार्यालये आहेत.
                <br />
                १०- गावामध्ये सेवानिवृत्त आणि कार्यरत शिक्षकांची संख्या
                उल्लेखनीय आहे.
                <br />
                ११- गावात हिंदू देवतांची मंदिरे तसेच मशीद आहे.
                <br />
                १२- दरवर्षी पंढरपूर आषाढी वारीसाठी क्रांतिसिंह नाना पाटील पायी
                दिंडी सोहळ्याचे आयोजन होते; यात तरुण वारकऱ्यांचा सहभाग जास्त
                असतो.
                <br />
                १३- वेगवेगळ्या जयंती व पुण्यतिथीच्या औचित्याने अन्नदानाचे आयोजन
                केले जाते.
              </>
            )}
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("history.historicalTimeline")}
          </h2>
          <div className="space-y-6">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`${event.color} text-white p-6 md:w-48 flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <FaCalendarAlt className="text-3xl sm:text-4xl mx-auto mb-2" />
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {event.year}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-government-blue mb-3">
                      {t(event.titleKey)}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {t(event.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Places */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("history.historicalPlaces")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {historicalPlaces.map((place, index) => {
              const Icon = place.icon;
              return (
                <div
                  key={index}
                  className="border-l-4 border-government-orange pl-4"
                >
                  <Icon className="text-3xl text-government-orange mb-3" />
                  <h3 className="text-lg sm:text-xl font-bold text-government-blue mb-2">
                    {t(place.nameKey)}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {t(place.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Legacy Section */}
        {/* <section className="bg-[#B3CFE5] text-[#0A1931] rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t("history.ourLegacy")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("history.culturalHeritage")}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                {t("history.culturalText")}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("history.nationContribution")}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                {t("history.contributionText")}
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
