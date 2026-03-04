type LoginProps = {
  onLogin: () => void;
  onBack: () => void;
};

function Login({ onLogin, onBack }: LoginProps) {
  return (
    <section className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 animate-lilica-in">
      <h2 className="text-2xl font-bold text-[#fc90a2] text-center">Tela de login</h2>
      <p className="mt-2 text-center text-gray-700">Acesse com dados mock (sem backend).</p>

      <form className="mt-6 flex flex-col gap-3" onSubmit={(event) => {
        event.preventDefault();
        onLogin();
      }}>
        <label className="text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="voce@exemplo.com"
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7295d6]"
        />

        <label className="text-sm font-medium text-gray-700 mt-1" htmlFor="password">
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="********"
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#7295d6]"
        />

        <button
          type="submit"
          className="mt-2 rounded-xl bg-[#7295d6] px-4 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Entrar
        </button>

        <button
          type="button"
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Entrar com Google
        </button>

        <button
          type="button"
          className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-700"
        >
          Registrar
        </button>

        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border border-[#7295d6] px-4 py-3 font-semibold text-[#7295d6] transition hover:bg-[#7295d6]/10"
        >
          Voltar para onboarding
        </button>
      </form>
    </section>
  );
}

export default Login;
