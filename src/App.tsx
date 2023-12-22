import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import sUpperChar1 from "./helpers/sUpperChar1";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <div>
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
