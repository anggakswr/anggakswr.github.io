import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import sUpperChar1 from "./helpers/sUpperChar1";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";

function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const sTitle = pathname.replace("/", "");

    if (sTitle) {
      document.title = `${sUpperChar1(sTitle)} | Angga Portfolio`;
    } else {
      document.title = "Home | Angga Portfolio";
    }
  }, [pathname]);

  return (
    <main className="px-4 py-4 md:py-8 md:w-3/4 mx-auto">
      <MobileHeader />

      <div className="min-h-screen flex gap-x-8 mt-20 md:mt-0 mb-4">
        {/* sidebar */}
        <Sidebar />

        {/* body */}
        <section className="md:ml-64 flex-1">
          <Outlet />
        </section>
      </div>

      <hr />

      <footer className="text-center text-gray-600 text-sm py-2">
        Made with Vite by Kamiswara Angga W.
      </footer>
    </main>
  );
}

export default App;
