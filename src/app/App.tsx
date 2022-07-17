import { RoutesNavigation } from "../providers";
import { checkAuth } from "../store/AuthStore";

function App() {
  checkAuth();
  return <RoutesNavigation />;
}

export default App;
