

import Link from "next/link";
import Image from "next/image";
// import ImageComposition from "@/components/ImageComposition/ImageComposition";
// import Card from "@/components/Card/Card";
import { ranges } from "@/contants/data";
import ImageComposition from "@/components/ImageComposition/ImageComposition";
import Card from "@/components/Card/Card";
// import Logo from "@/components/Logo/Logo";

export default function Home() {
  const gradeNamesWholes = [
    {
      Title: "White Wholes",
    },
    {
      Title: "Scroched Wholes",
    },
    {
      Title: "Desert Wholes",
    },
  ];

  const gradeNamesPieces = [
    {
      Title: "White Pieces",
    },
    {
      Title: "Scroched Pieces",
    },
    {
      Title: "Desert Pieces",
    },
  ];

  return (
    <main className="main">
      <section className="header h-screen md:opacity-100">
        <div className="header__text-box text-center">
          <h1 className="text-slate-200 md:font-normal font-semibold -mt-16">
            <span className="heading-primary--main block md:text-[10rem] text-[4rem] font-normal tracking-widest uppercase mb-7">
              Cashews
            </span>
            <span className="heading-primary--sub block md:text-5xl md:font-normal font-semibold text-3xl tracking-wide uppercase">
              The ingredient for refinement
            </span>
          </h1>
        </div>
      </section>



      <section className="pt-[25rem] pb-[15rem] -mt-[20vh] bg-amber-100">
        <div className="text-center">
          <h2 className="heading-secondary md:text-6xl text-4xl -mt-[3rem] uppercase inline-block text-transparent tracking-wide mb-[8rem]">
            Our Products
          </h2>
        </div>

        <div className="grid-section xl:max-w-[114rem] mx-auto flex flex-wrap-reverse justify-between p-10 text-slate-800">
          <div className="area-1 md:w-[45%] flex flex-wrap">
            <h3 className="heading-tertiary hover:-translate-y-1 inline-block px-1 mb-2 font-bold text-[2rem] uppercase hover:shadow-xl">
              {`Because market prefers our quality`}
            </h3>
            <p className="paragraph md:text-2xl md:tracking-wide">
              We pride ourselves on delivering the finest quality cashews that
              have earned the trust of renowned confectionaries. Our commitment
              to excellence begins with sourcing only the highest grade cashews
              from trusted suppliers. Each cashew undergoes rigorous quality
              checks to ensure it meets our stringent standards for freshness,
              flavor, and texture.
            </p>

            <h3 className="heading-tertiary hover:-translate-y-1 inline-block px-1 mb-2 font-bold text-[2rem] uppercase hover:shadow-xl">
              Because you are going to have the best taste.
            </h3>
            <p className="paragraph md:text-2xl md:tracking-wide">
              Cashews are for exceptional taste, crunchiness, and versatility in
              crafting delightful treats. Whether its adding a rich nutty flavor
              to chocolates, creating decadent cashew brittle, or garnishing
              gourmet desserts, Nutberry elevate your creations to new heights.
            </p>
          </div>
          <div className="area-2 md:w-[45%] w-[75%] mx-auto md:mt-40 mb-10">
            <ImageComposition />
          </div>
        </div>
      </section>


      


    </main>
  );
}

