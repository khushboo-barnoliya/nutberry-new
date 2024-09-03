

import Link from "next/link";
import Image from "next/image";
// import ImageComposition from "@/components/ImageComposition/ImageComposition";
// import Card from "@/components/Card/Card";
// import { ranges } from "@/contants/data";
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

    <div className="relative h-screen bg-blue-500">
      {/* Background Image */}
      <Image
        src="/path-to-your-image.jpg" 
        alt="Hero Background" 
        className="absolute inset-0 object-cover w-full h-full" 
      />

      {/* Wavy SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
          viewBox="0 0 1440 320" 
          className="relative block w-full h-64"
        >
          <path 
            fill="#fff" 
            d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,144C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
        </svg>
      </div>

      {/* Content in Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-xl">We bring the best products to you.</p>
        <button className="px-8 py-3 mt-6 text-lg font-semibold text-blue-500 bg-white rounded-full">
          Shop Now
        </button>
      </div>
    </div>

      {/* <Logo src="/images/nutberry.svg" /> */}


      

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
            Why should you choose us?
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
            {/* <ImageComposition /> */}
          </div>
        </div>
      </section>

      <section className="usageGallery bg-amber-100 -mt-48">
        <div className="usageGallery__heading text-center">
          <h2 className="heading-secondary md:text-6xl text-4xl mt-[3rem] uppercase inline-block text-transparent tracking-wide mb-[8rem] mx-auto">
            Ranges for your needs
          </h2>
        </div>

        <div className="container max-w-screen-2xl mx-auto pb-[10%] pt-[20rem] flex flex-wrap gap-20 justify-evenly backgroundGallery">
          {ranges.map((range) => {
            const { id, title, imgsrc, url } = range;
            return (
              <div
                className="max-w-sm bg-white rounded-[40px] shadow-2xl relative hover:scale-110 transition-all"
                key={id}
              >
                <Link href={url}>
                  <Image
                    className="h-[200px] rounded-t-[40px]"
                    src={imgsrc}
                    alt=""
                    width={400}
                    height={250}
                  />

                  <div className="p-6 mx-auto">
                    <h4 className="mb-5 text-4xl font-bold tracking-wide text-black text-center font-sans">
                      {title}
                    </h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-yellow-100" id="grading">
        <div className="text-center">
          <h2 className="heading-secondary md:text-6xl text-4xl my-[10rem] uppercase inline-block text-transparent tracking-wide mx-auto">
            Cashew Grades
          </h2>
        </div>
        <div className="flex flex-wrap">
          <div className="container mx-auto grid lg:grid-cols-3 gap-20 sm:grid-cols-2  grid-cols-1">
            {gradeNamesWholes.map((grade, index) => (
              <div key={index} className="">
                {/* <Card Title={grade.Title} /> */}
              </div>
            ))}
          </div>

          <div className="container my-20 mx-auto grid lg:grid-cols-3 gap-20 sm:grid-cols-2 grid-cols-1 ">
            {gradeNamesPieces.map((grade, index) => (
              <div key={index} className="">
                {/* <Card Title={grade.Title} /> */}
              </div>
            ))}
          </div>
          <div className="text-center py-20 mx-auto">
            <div className="discover-tours mb-60">
              <a
                href="/Grading-Chart-cashew.pdf"
                className="btn btn--brown"
                download="Grading chart"
              >
                Get the PDF of Grading
              </a>
            </div>

            <hr />
          </div>
        </div>
      </section>
    </main>
  );
}

