import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-[#af8260] text-[12px]">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
            className="inline-block rounded-full bg-[#0D68A0] p-3 text-white shadow transition hover:bg-[#094469] sm:p-6 lg:p-8"
              href="#"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center lg:justify-start">
                <a className="block" href="/">
                  <Image src="/nutberry-logo.svg" alt="logo" height={100} width={150} />
                </a>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
              A rich cashew company that provides the best quality cashews. Established at Ajmer, Rajasthan, India.
              </p>
            </div>

            <ul
              className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
            >
              <li>
                <a className="text-white transition font-semibold hover:text-[#0D68A0]" href="/about"> About </a>
              </li>

              <li>
                <a className="text-white transition font-semibold hover:text-[#0D68A0]" href="/products"> Our Products </a>
              </li>

              <li>
                <a className="text-white transition font-semibold hover:text-[#0D68A0]" href="/procedure"> Our Procedure </a>
              </li>

              <li>
                <a className="text-white transition font-semibold hover:text-[#0D68A0]" href="/contact "> Contact Us </a>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-white lg:text-right">
            Copyright &copy; {new Date().getFullYear()}{" "} <Link href="/" className="hover:underline">
              Nutberry™
            </Link>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer