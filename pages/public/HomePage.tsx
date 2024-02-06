import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

// const categories = [
//   {
//     name: "Автоспорт",
//     subcategory: [
//       {
//         name: "Белье",
//       },
//       {
//         name: "Весы",
//       },
//       {
//         name: "Защита шеи HANS",
//       },
//     ],
//   },
//   {
//     name: "Картинг",
//     subcategory: [
//       {
//         name: "Белье",
//       },
//       {
//         name: "Весы",
//       },
//       {
//         name: "Защита шеи HANS",
//       },
//     ],
//   },
// ];

const categories2 = [
  "Автоспорт",
  "Картинг",
  "Подвеска",
  "Сиденья",
  "Шины и диски",
  "Масла",
  "Симрейсинг",
  "Porsche",
];

// const popularctgr = [
//   {
//     name: "Автоспорт",
//     image:
//       "https://a-tune.com.ua/image/cache/catalog/categories/autosport-500x500.png",
//     style: "clip-path: polygon(0 0, 100% 0%, 79% 100%, 0% 100%);",
//   },
//   {
//     name: "Подвеска",
//     image:
//       "https://a-tune.com.ua/image/cache/catalog/categories/suspension-500x500.jpg",
//     style: "clip-path: polygon(27% 0, 100% 0%, 73% 100%, 0% 100%);",
//   },
//   {
//     name: "Симрейсинг",
//     image:
//       "https://a-tune.com.ua/image/cache/catalog/categories/simracing-500x500.png",
//   },
//   {
//     name: "Porsche",
//     image:
//       "https://a-tune.com.ua/image/cache/catalog/categories/porsche-500x500.png",
//   },
// ];

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <section className="shadow-2xl">
        <div className="container max-w-1200">
          <ul className="flex justify-between items-center py-3">
            {categories2.map((el) => (
              <li className="flex items-center cursor-pointer categroies-name">
                {el}
                <ChevronDown
                  size={18}
                  className="mt-1 transition-all duration-300"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <img className="w-full " src="/images/bgimg.jpg" alt="bg-img" />
      </section>
      <section className=" bg-[#F4F4F4]">
        <div className="container max-w-1200 py-20">
          <h1 className="mb-10 text-center font-bold text-4xl font-sans">
            {t("home.popular_sct")}
          </h1>
          <div className="flex justify-between items-center ">
            <div className="first-col cursor-pointer">
              <h3 className="p-7 mb-5 font-semibold text-2xl">Автоспорт</h3>
              <img
                className="w-full"
                src="https://a-tune.com.ua/image/cache/catalog/categories/autosport-500x500.png"
                alt=""
              />
            </div>
            <div className="second-col cursor-pointer">
              <h3 className="p-7 mb-5 font-semibold text-2xl">Подвеска</h3>
              <img
                className=""
                src="https://a-tune.com.ua/image/cache/catalog/categories/suspension-500x500.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
