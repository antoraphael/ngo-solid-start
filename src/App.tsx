import { Routes, Route } from "solid-app-router";
// import Home from "./routes/Home";
import Home from "@/routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import ProjectDetail from "./routes/ProjectDetail";
import Gallery from "./routes/Gallery";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-1">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/projects/:id" component={ProjectDetail} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
