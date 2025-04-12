"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ServicesBg from "@/assets/services.png";
import tempTFTM from "@/assets/TFTM.png";
import tempINdex from "@/assets/INdex.png";
import tempHouse from "@/assets/House.png";
import arzCharts from "@/assets/charts_arz.png";
import { Search } from "lucide-react";

export default function Services() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      setStep((prevStep) => {
        currentStep = (prevStep + 1) % 3;
        return currentStep;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-white mt-10" id="services">
      <div className="w-full h-[1200px] relative ">
        <Image
          src={ServicesBg}
          alt="Services Background"
          fill
          className="object-cover rounded-[35px] p-1 lg:rounded-[100px] lg:p-10"
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white z-10 p-2 ">
            <h2 className="text-3xl lg:text-4xl sticky text-center mb-10">
              Services.
            </h2>
            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-2 m-2 max-w-xl">
              <div className="md:col-span-2 backdrop-blur-md rounded-3xl bg-gradient-to-r from-white/15 to-white/00 border border-white/10 p-2 md:p-4 overflow-hidden">
                <div className="flex flex-col mx-2">
                  <h3 className="text-2xl">Site web</h3>
                  <p className="text-md text-white/80">
                    Tous nos projets sont faits avec{" "}
                    <b className="text-white">soins</b>, ont des{" "}
                    <b className="text-white">
                      design professionnel et premium
                    </b>
                  </p>
                  <div className="flex flex-row justify-center relative h-[200px] top-12">
                    <Image
                      src={tempTFTM}
                      height={180}
                      alt="House"
                      className={`transition-all duration-1000 absolute ${
                        step === 0
                          ? "translate-x-0 z-0"
                          : step === 1
                          ? "-translate-x-20 -rotate-6 z-0"
                          : "-translate-x-24 -rotate-12 z-0"
                      }`}
                    />
                    <Image
                      src={tempINdex}
                      height={180}
                      alt="House"
                      className={`transition-all duration-1000 absolute ${
                        step === 1
                          ? "translate-x-20 rotate-6"
                          : step === 0
                          ? "translate-x-0 rotate-6 translate-y-full opacity-0 scale-75 blur-md"
                          : "translate-x-24 rotate-12 "
                      }`}
                    />
                    <Image
                      src={tempHouse}
                      height={180}
                      alt="House"
                      className={`transition-all duration-1000 absolute ${
                        step === 2
                          ? "translate-x-0"
                          : step === 1
                          ? "translate-x-0 rotate-6 translate-y-full opacity-0 scale-75 blur-md z-10"
                          : "translate-y-full opacity-0 blur-md"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-md rounded-3xl bg-gradient-to-r from-white/15 to-white/00 border border-white/10 p-2 md:p-4 overflow-hidden">
                <div className="flex flex-col mx-2">
                  <h3 className="text-2xl">SEO</h3>
                  <p className="text-md text-white/80 z-10">
                    <b className="text-white">Investissez pour votre succès</b>
                    —Nous ne faisons pas seulement des sites, nous réfléchissons
                    a votre succès.
                  </p>
                  <div className="flex items-center justify-center mt-5">
                    <div className="bg-[#7B72FF]/30 border-[#7B72FF] border-2 rounded-full h-32 w-32 z-0 absolute animate-ping">
                      <div className="bg-[#7B72FF] w-full h-full rounded-full blur-xl"></div>
                    </div>
                    <div className="bg-white flex items-center justify-center rounded-full h-32 w-32 z-10 ">
                      <div className="bg-radial from-white via-white to-[#7B72FF] border-[#7B72FF] border-2 flex items-center justify-center rounded-full h-28 w-28">
                        <Search className="h-14 w-14 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-md rounded-3xl bg-gradient-to-r from-white/15 to-white/00 border border-white/10 p-2 md:p-4 overflow-hidden">
                <div className="flex flex-col mx-2">
                  <h3 className="text-2xl">Branding</h3>
                  <p className="text-md text-white/80">
                    Nous créons le meilleur moyen de vous{" "}
                    <b className="text-white">démarquez visuellement.</b>
                  </p>
                  <div className="flex justify-center">
                    <Image
                      src={arzCharts}
                      alt="House"
                      height={200}
                      className="absolute -rotate-6 bottom-0"
                      style={{
                        scale: "1.4",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
