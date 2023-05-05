import { headers } from "next/dist/client/components/headers";

/* eslint-disable react/no-unescaped-entities */
export default function WhyUs() {
  const categories = [
    {
      title: "Individualized Service",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor "
          className="h-28 w-28 sm:h-38 sm:w-38"
        >
          <path
            fillRule="evenodd"
            d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description:
        "Our experienced team is at your side throughout your entire journey. In addition, you'll have access to a digital service channel.",
    },
    {
      title: " Sustainable Choice",
      icon: (
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="h-28 w-28 sm:h-38 sm:w-38"
        >
          <path d="M161.35 242a16 16 0 0122.62-.68c73.63 69.36 147.51 111.56 234.45 133.07 11.73-32 12.77-67.22 2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.84-26.38-81.66-33.25-121.15-39.89-49.82-8.38-96.88-16.3-141.79-63.85-5-5.26-11.81-7.37-18.32-5.66-7.44 2-12.43 7.88-14.82 17.6-5.6 22.75-2 86.51 13.75 153.82 25.29 108.14 65.65 162.86 95.06 189.73 38 34.69 87.62 53.9 136.93 53.9a186 186 0 0027.77-2.04c41.71-6.32 76.43-27.27 96-57.75-89.49-23.28-165.94-67.55-242-139.16a16 16 0 01-.65-22.65zM467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a157.71 157.71 0 01-12.13 25.68c-.73 1.25-1.5 2.49-2.29 3.71a584.21 584.21 0 0058.56 12 16 16 0 104.87-31.62z" />
        </svg>
      ),
      description:
        "We're committed to reducing greenhouse gas emissions by 50% for each home built by 2030.",
    },
    {
      title: "Home Changer Security",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          className="h-28 w-28 sm:h-38 sm:w-38"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M15 11v.01M5.173 8.378a3 3 0 114.656-1.377" />
          <path d="M16 4v3.803A6.019 6.019 0 0118.658 11h1.341a1 1 0 011 1v2a1 1 0 01-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 01-3 0v-.583a6.04 6.04 0 01-1 .083h-4a6.04 6.04 0 01-1-.083v.583a1.5 1.5 0 01-3 0v-2L5 17.473A6 6 0 018.999 7h2.5l4.5-3H16z" />
        </svg>
      ),
      description:
        "With Backdoor protection, the sale of your old home doesn't need to hinder the realization of your housing dreams.",
    },
    {
      title: "Happy Neighborhoods",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-28 w-28 sm:h-38 sm:w-38"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 003 16v5a1 1 0 001 1h16a1 1 0 001-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 00.707-1.707L9 9.586V4h10v16z" />
          <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z" />
        </svg>
      ),
      description:
        "Our goal is not only to construct new homes but also to create communities.",
    },
  ];
  return (
    <div className="bg-bgDark pb-20">
      <h1 className=" text-center p-10 font-heading text-5xl ">
        Why Choose Us?
      </h1>
      <div className="flex flex-wrap gap-2 p-10 bg-bgDark justify-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative h-72 w-full  sm:w-1/2 lg:w-1/5"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
            <div className="relative flex h-full transform  items-center justify-center border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0  sm:p-6 lg:p-8">
                <div className="flex justify-center items-center">
                  {category.icon}
                </div>
                <h2 className="mt-4 text-xl text-center  font-heading font-medium sm:text-2xl">
                  {category.title}
                </h2>
              </div>
              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl text-center font-medium sm:text-2xl">
                  {category.title}
                </h3>
                <p className="mt-4   text-center font-text sm:text-base">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// use this here:
