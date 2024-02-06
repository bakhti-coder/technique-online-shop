import Hamburger from "hamburger-react";
import i18next from "i18next";
import { Phone } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const language = [
  {
    code: "uz",
    name: "O'zbekcha",
    country_code: "uz",
  },
  {
    code: "ru",
    name: "Русский",
    country_code: "ru",
  },
];

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const ResponsiveNav = () => {
    return (
      <div
        className={`lg:hidden ${isOpen ? "right-0 bg-opacity-70  backdrop-blur-sm pt-20 z-40" : "-right-full"} fixed top-0 h-full w-full bg-black menu-mobile `}
      >
        <div className="flex justify-between items-center border-b">
          <p className="text-sm font-serif px-4 py-2">A-TUNE RACING SHOP</p>
          <div className="mr-5">
            {language.map((el) => (
              <span
                key={el.name}
                onClick={() => i18next.changeLanguage(el.code)}
                className={`ml-3 text-xl cursor-pointer  flag-icon flag-icon-${el.country_code}`}
              ></span>
            ))}
          </div>
        </div>
        <div>
          <ul>
            {React.Children.toArray(
              [
                {
                  title: t("header.about_me"),
                  link: "/about",
                },
                {
                  title: t("header.contact"),
                  link: "/contact",
                },
                {
                  title: t("header.delivery"),
                  link: "/delivery",
                },
                {
                  title: t("header.our_salon"),
                  link: "/oursalon",
                },
                {
                  title: t("header.login"),
                  link: "/login",
                },
                {
                  title: t("header.register"),
                  link: "/register",
                },
              ].map((el, i) => (
                <>
                  <li
                    key={i}
                    onClick={toggleMenu}
                    className="text-black font-bold text-md mt-5 ml-3 hover:text-white transition-colors duration-300"
                  >
                    <Link to={el.link}>{el.title}</Link>
                  </li>
                  <hr className="mt-5" />
                </>
              )),
            )}
          </ul>
          <div className="flex justify-between items-center mt-5 ml-3">
            <div className="flex items-center gap-2">
              <Phone
                className="hover:fill-white cursor-pointer"
                strokeWidth={1.25}
                size={24}
              />
              <Link to={"tel:+998940137300"}>
                <p className="text-black text-md hover:text-white transition-colors duration-300 leading-6 font-bold">
                  +998 94-013-73-00
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header>
      <div className="bg-[#F8F8F8] hidden lg:inline">
        <div className="container max-w-1200 flex justify-between items-center py-3">
          <div className="flex items-center">
            <p className="text-[#4F4F4F] text-[14px]">Українською</p>
            <ul className="flex gap-8 ml-28">
              {React.Children.toArray(
                [
                  {
                    title: t("header.about_me"),
                    link: "/about",
                  },
                  {
                    title: t("header.contact"),
                    link: "/contact",
                  },
                  {
                    title: t("header.delivery"),
                    link: "/delivery",
                  },
                  {
                    title: t("header.our_salon"),
                    link: "/oursalon",
                  },
                ].map((el, i) => (
                  <li
                    key={i}
                    className="text-lightGray text-[14px] hover:text-[#702283]"
                  >
                    <Link to={el.link}>{el.title}</Link>
                  </li>
                )),
              )}
            </ul>
          </div>
          <div className="flex items-center">
            <div className="mr-5">
              {language.map((el) => (
                <span
                  key={el.name}
                  onClick={() => i18next.changeLanguage(el.code)}
                  className={`ml-3 text-xl cursor-pointer  flag-icon flag-icon-${el.country_code}`}
                ></span>
              ))}
            </div>
            <div className="flex justify-between">
              <p>
                <Link
                  to={"/login"}
                  className="text-lightGray text-[14px] hover:text-[#702283]"
                >
                  {t("header.login")}
                </Link>
              </p>
              <span className="mx-2 text-lightGray text-[14px]">|</span>
              <p>
                <Link
                  className="text-lightGray text-[14px] hover:text-[#702283]"
                  to={"/register"}
                >
                  {t("header.register")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="container max-w-1200 py-4">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="z-50">
            <img src="/images/logo.svg" alt="noImg" />
          </Link>
          <div className="relative w-1/2 hidden lg:inline">
            <input
              type="search"
              className="bg-[#EEE] rounded p-3 w-full"
              placeholder="Qidirish..."
            />
            <img
              src="/images/searchimg.svg"
              alt="seacrh"
              className="absolute cursor-pointer top-3 right-2"
            />
          </div>
          <div className="flex items-center">
            <div className="mr-4 hidden lg:inline">
              <p className="text-[#333] text-[20px] leading-6 font-bold">
                <Link to="tel:+998940137300">+998 94-013-73-00</Link>
              </p>
              <p className="text-[#4F4F4F] text-xs underline leading-4 cursor-pointer">
                {t("header.tell_me")}
              </p>
            </div>
            <div className="flex items-center">
              <div className="relative scale-75 lg:hidden inline cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                  0
                </span>
              </div>
              <div className="lg:hidden inline ml-3 z-50">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
              <button className="bg-purple text-white font-bold rounded-[5px] leading-5 py-[15px] px-[20px] hidden lg:inline">
                {t("header.card")}
                <span className="text-purple font-bold text-[14px] bg-white rounded p-1 ml-3">
                  99+
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ResponsiveNav />
    </header>
  );
};

export default Header;
