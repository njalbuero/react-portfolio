import { useContext, useEffect } from "react";
import { FaRegCircle } from "react-icons/fa";
import { MenuContext } from "../context/MenuContext";

const menu = ["home", "projects", "contact"];

const Menu = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const handleClick = (elementId) => {
    setIsOpen(false);

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hide scrollbar when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to reset overflow style when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div className="flex flex-col fixed top-0 right-0 z-10 black-bg h-screen w-full custom-padding text-white">
          <nav>
            <ul className="space-y-4">
              {menu.map((item) => (
                <li
                  key={item}
                  className="capitalize text-4xl md:text-6xl font-medium cursor-pointer"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-between mt-auto">
            <ul className="flex flex-col gap-2 text-sm md:text-lg">
              <li>
                <a href="mailto:njalbuero@gmail.com">
                  <span>njalbuero@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+639156435065">
                  <span>+639156435065</span>
                </a>
              </li>
            </ul>
            <button className="menu-button" onClick={() => setIsOpen(false)}>
              <FaRegCircle />
              <span>CLOSE</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
