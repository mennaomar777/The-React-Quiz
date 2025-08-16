import reactLogo from "../../assets/logo512.png";

function Header() {
  return (
    <header className="app-header flex items-center justify-center w-full max-w-4xl mx-auto mb-6 sm:mb-8 gap-10">
      <img
        src={reactLogo}
        alt="React logo"
        className="w-16 h-16 sm:w-20 sm:h-20 animate-pulse"
      />
      <h1 className="font-codystar text-4xl sm:text-5xl text-white font-semibold tracking-wide">
        The React Quiz
      </h1>
    </header>
  );
}

export default Header;
