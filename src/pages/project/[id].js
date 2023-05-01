// pages/project/[id].js
import { useRouter } from "next/router";
import axios from "axios";
import ProjectPage from "../../components/ProjectPage";
import Layout from "../../components/Layout";

const Project = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ProjectPage project={project} />;
};

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}sales`);
  const projects = res.data;
  const paths = projects.map((project) => ({
    params: { id: project._id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}sales/${params.id}`
  );
  const project = res.data;

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
}

export default Project;
