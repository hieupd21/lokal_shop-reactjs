import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartFeature from "./features/Cart";
import ProductFeature from "./features/Product";
import LandingPage from "./features/Product/pages/landing";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
      </Switch>
      <Footer />
    </div>
  );
}
