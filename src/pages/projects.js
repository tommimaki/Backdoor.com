import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";
import ProjectFilter from "../components/ProjectFilter";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    location: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}sales`
        );
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects", error.message);
      }
    }

    fetchData();
  }, []);

  const getUniqueLocations = (projects) => {
    const locations = projects.map((project) => project.location);
    return [...new Set(locations)];
  };
  const uniqueLocations = getUniqueLocations(projects);

  useEffect(() => {
    const filtered = projects.filter((project, index) => {
      if (
        filters.location &&
        !project.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }
      return true;
    });

    setFilteredProjects(filtered);
  }, [filters, projects]);

  return (
    <Layout>
      <div className="relative px-8  py-32">
        <h1 className="font-heading text-5xl mb-10 text-center">
          All Our Projects
        </h1>
        <ProjectFilter
          onFilterChange={(name, value) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              [name]: value,
            }))
          }
          locations={uniqueLocations}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 z-10">
          {filteredProjects?.map((project) => (
            <Link
              key={project._id}
              href={`/project/${project._id}`}
              className="block rounded-lg p-4 shadow-sm bg-white hover:shadow-accent  shadow-indigo-200"
            >
              <img
                alt={project.title}
                src={project.images[0]}
                className="h-56 w-full rounded-md object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
