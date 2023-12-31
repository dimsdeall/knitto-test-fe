import Link from "next/link";

export default function Home() {
  const link = [
    {
      name: "Next js",
      url: "https://nextjs.org",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Headlessui",
      url: "https://headlessui.com/",
    },
    {
      name: "Jsonplaceholder",
      url: "https://jsonplaceholder.typicode.com/",
    },
    {
      name: "Redux Toolkit",
      url: "https://redux-toolkit.js.org/rtk-query/overview",
    },
    {
      name: "Vercel",
      url: "https://vercel.com",
    },
  ];

  return (
    <div className="flex min-h-[400px] flex-1 flex-col justify-center items-center mb-10">
      <div className="text-4xl font-bold mb-2 text-center mt-20 sm:mt-0">
        Selamat datang penguji aplikasi
      </div>
      <div className="text-1xl text-center mb-10">
        Aplikasi ini menggunakan Next js dengan features <b>App Router</b>{" "}
        sebagai framework dan Jsonplaceholder sebagai rest API
      </div>
      <div className="py-3 hidden md:flex gap-x-2">
        {link.map((val, key) => {
          return (
            <div
              key={key}
              className={` pe-2 border-black ${
                key !== link.length - 1 && "border-e-2"
              }`}
            >
              <a
                href={val.url}
                target="_blank"
                className={`text-blue-500 hover:text-blue-800`}
              >
                {val.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="md:hidden">
        <ul className="flex justify-center flex-col items-center">
          {link.map((val, key) => {
            return (
              <li key={key}>
                <a
                  href={val.url}
                  target="_blank"
                  className={`text-blue-500 hover:text-blue-800`}
                >
                  {val.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-14">
        <Link
          href={"/todos"}
          className="bg-blue-500 rounded text-white p-2 hover:bg-opacity-30"
        >
          Lets Start Test
        </Link>
      </div>
    </div>
  );
}
