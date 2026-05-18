import { Switch, Route, useLocation } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Resources from "./pages/Resources";
import Admin from "./pages/Admin";

export default function App() {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdmin && <Header />}
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/apply" component={Apply} />
          <Route path="/resources" component={Resources} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}
