import { Switch, Route } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import { ROUTES } from "./lib/routes";

const [home, jobs, about, contact, apply, resources, login] = ROUTES;

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path={home.path} component={Home} />
          <Route path={jobs.path} component={Jobs} />
          <Route path={about.path} component={About} />
          <Route path={contact.path} component={Contact} />
          <Route path={apply.path} component={Apply} />
          <Route path={resources.path} component={Resources} />
          <Route path={login.path} component={Login} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
