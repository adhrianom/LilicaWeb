
type HeaderProps = {
  isLoggedIn: boolean;
  onLoginClick?: () => void;
};

function Header({ isLoggedIn, onLoginClick }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-20 w-full bg-[#fc90a2]/95 shadow-sm backdrop-blur-sm">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-18">
        <h1 className="truncate text-xl font-bold text-white sm:text-2xl md:text-3xl" >
          Lilica Empadas
        </h1>

        {isLoggedIn ? (
          <button
            type="button"
            aria-label="Perfil"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#fc90a2] transition hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-11 sm:w-11"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.314 0-6 2.239-6 5a1 1 0 0 0 2 0c0-1.654 1.791-3 4-3s4 1.346 4 3a1 1 0 0 0 2 0c0-2.761-2.686-5-6-5Z" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={onLoginClick}
            className="rounded-pill shrink-0 bg-[#bfdbfe] px-4 py-2 text-sm font-semibold text-gray-900 transition hover:scale-105 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5 sm:text-base"
          >
            Entrar
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
