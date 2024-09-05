import Image from "next/image"



function Header() {
  return (
    <>
      <header className="bg-transparent absolute top-0 start-0 z-50 w-full py-8">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block" href="/">
                <Image src="/nutberry-logo.svg" alt="logo" height={100} width={120} />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-10 m-0">
                  <li>
                    <a className="text-white transition-all text-[14px] duration-200 font-medium hover:text-[#f18b30]" href="/"> Home </a>
                  </li>

                  <li>
                    <a className="text-white transition-all text-[14px] duration-200 font-medium hover:text-[#f18b30]" href="/about"> About </a>
                  </li>

                  <li>
                    <a className="text-white transition-all text-[14px] duration-200 font-medium hover:text-[#f18b30]" href="/procedure"> Our Procedure </a>
                  </li>

                  <li>
                    <a className="text-white transition-all text-[14px] duration-200 font-medium hover:text-[#f18b30]" href="/contact"> Contact Us </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-[#0D68A0] hover:bg-[#094469] px-5 py-2.5 text-[14px] font-medium text-white shadow"
                  href="#"
                >
                  Sign In
                </a>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header