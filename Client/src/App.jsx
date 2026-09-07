import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Loader from "./components/Loader/Loader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  return loading ? <Loader /> : <Home />;
}

export default App;