import { Link, useParams } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import Spinner from "../components/Spinner";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm"
import { GET_PROJECT } from "../queries/projectQueries";

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  if (loading) return <Spinner />;
  if (error) return <p>Error . Something went wrong :(</p>;

  return (
    <>
      {!loading && !error && (
        <div className="card p-5">
          <div className="d-flex">
            <span className="w-75">
              <h1>{data.project.name}</h1>
              <p>{data.project.description}</p>
              <p>
                Status: <strong>{data.project.status}</strong>
              </p>
            </span>
            <span className="w-25 d-block">
              <Link to="/" className="btn btn-light w-100 my-2">
                Back
              </Link>
              <DeleteProjectButton projectId={data.project.id} />
            </span>
          </div>
          <div className="px-3 mt-3">
            <i>
              <h4 className="my-3">Client Information</h4>
            </i>
          </div>
          <div className="card p-3 bg-light">
            <h6 className="my-0">
              <FaUser className="mx-2" />
              {data.project.client.name}
            </h6>
            <p className="my-0">
              <FaEnvelope className="mx-2" /> {data.project.client.email}
            </p>
            <p className="my-0">
              <FaPhone className="mx-2" /> {data.project.client.phone}
            </p>
          </div>
          <EditProjectForm project={data.project} />
        </div>
      )}
    </>
  );
}
