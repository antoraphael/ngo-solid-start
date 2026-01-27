// src/App.tsx
import { Route, type RouteSectionProps } from "@solidjs/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import ProjectDetail from "./routes/ProjectDetail";
import Gallery from "./routes/Gallery";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import Events from "./routes/Event";
import EventDetail from "./routes/EventDetails";
import Press from "./routes/Press";
import Team from "./components/Team";
import Donate from "./routes/Donate";
import BlogDetail from "./routes/BlogDetails";

function Layout(props: RouteSectionProps) {
  return (
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Route path="/" component={Layout}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="projects" component={Projects} />
        <Route path="projects/:id" component={ProjectDetail} />
        <Route path="gallery" component={Gallery} />
        <Route path="contact" component={Contact} />
        <Route path="events" component={Events} />
        <Route path="events/:id" component={EventDetail} />
        <Route path="press" component={Press} />
        <Route path="/blogs/:slug" component={BlogDetail} />
        <Route path="team" component={Team} />
        <Route path="donate" component={Donate} />
        <Route path="*" component={NotFound} />
      </Route>
    </>
  );
}
