import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-6
            right-6
            bg-blue-600
            text-white
            p-4
            rounded-full
            shadow-lg
            hover:bg-blue-700
            transition
            z-50
          "
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;