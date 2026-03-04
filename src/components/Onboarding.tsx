type OnboardingProps = {
  onGoToLogin: () => void;
  onGoToHome: () => void;
};

function Onboarding({ onGoToHome }: OnboardingProps) {
  return (
    <main className="min-h-screen bg-[#fcd1d1] flex items-center justify-center p-6">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg animate-lilica-in">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#fc90a2] text-2xl font-bold text-white grid place-items-center animate-lilica-pulse">
          L
        </div>
        <h1 className="text-3xl font-bold text-[#fc90a2]">Lilica Empadas</h1>
        <p className="mt-3 text-gray-700">
          Sabor artesanal com carinho. Comece seu pedido em segundos.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={onGoToHome}
            className="w-full rounded-xl border border-[#7295d6] px-4 py-3 font-semibold text-[#7295d6] transition hover:bg-[#7295d6]/10"
          >
            Home
          </button>
        </div>
      </section>
    </main>
  );
}

export default Onboarding;
