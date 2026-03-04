import { useState } from "react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Onboarding from "./components/Onboarding";
import Products from "./components/Products";
import { categoriesMock } from "./data/mocks";
import type { ProductCategory } from "./types/product";

type Screen = "onboarding" | "login" | "home";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding");
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(categoriesMock[0].id);
  const isLoggedIn = currentScreen === "home";

  const goToLogin = () => setCurrentScreen("login");
  const goToHome = () => setCurrentScreen("home");
  const restartFlow = () => setCurrentScreen("onboarding");

  if (currentScreen === "onboarding") {
    return <Onboarding onGoToLogin={goToLogin} onGoToHome={goToHome} />;
  }

  if (currentScreen === "login") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fcd1d1] p-6">
        <Login onLogin={goToHome} onBack={restartFlow} />
      </main>
    );
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLoginClick={goToLogin} />
      <main className="min-h-screen overflow-x-clip bg-[#fcd1d1] pt-16 sm:pt-18">
        <div className="page-container py-6 md:py-8">
          <Banner />
        </div>
        <Featured />
        <Categories
          categories={categoriesMock}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <Products activeCategory={activeCategory} />
        <Footer />
      </main>
    </>
  );
}

export default App;
