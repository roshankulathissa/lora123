import { Switch, Route } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/apply" component={Apply} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
