import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import sUpperChar1 from "./helpers/sUpperChar1";
import { QueryClient, QueryClientProvider } from "react-query";
import BoxTransition from "./components/v2/BoxTransition";
import { useTransition } from "./store/transition";
// import Cover from "./components/v2/Cover";
import SidebarV2 from "./components/v2/Sidebar";

const queryClient = new QueryClient();

function App() {
  // global state
  const { vToggle } = useTransition((state) => state);

  // router
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    vToggle();

    const sTitle = pathname.replace("/", "");

    if (sTitle) {
      document.title = `${sUpperChar1(sTitle)} | Angga Portfolio`;
    } else {
      document.title = "Home | Angga Portfolio";
    }
  }, [pathname, vToggle]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-black min-h-screen">
        {/* <Cover /> */}
        <BoxTransition />

        <div className="md:w-3/4 px-4 md:px-0 mx-auto py-8 flex gap-x-8">
          <SidebarV2 />

          {/* body */}
          <div className="md:pl-64 w-full text-white">
            <Outlet />
          </div>
        </div>

        <footer className="w-3/4 mx-auto bg-black">
          <hr />

          <p className="text-white text-center py-4">
            Made with Vite by Kamiswara Angga W.
          </p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
