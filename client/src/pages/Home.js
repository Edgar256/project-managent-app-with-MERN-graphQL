import AddClientsModal from "../components/AddClientsModal";
import AddProjectsModal from "../components/AddProjectsModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <div className="d-flex my-5">
        <span className="px-2">
          <AddClientsModal />
        </span>
        <span className="px-2">
          <AddProjectsModal />
        </span>
      </div>
      <Projects />
      <Clients />
    </div>
  );
}
