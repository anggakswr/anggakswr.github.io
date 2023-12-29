import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import sUpperChar1 from "./helpers/sUpperChar1";
import { QueryClient, QueryClientProvider } from "react-query";
import BoxTransition from "./components/v2/BoxTransition";
import { useTransition } from "./store/transition";

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
      <div>
        <BoxTransition />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
