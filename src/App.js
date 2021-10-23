import { Route, Switch } from "react-router";
import Header from "./components/Header";
import ProductFeature from "./features/Product";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/products" component={ProductFeature} />
      </Switch>
    </div>
  );
}
