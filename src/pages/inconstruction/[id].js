import { useRouter } from "next/router";
import axios from "axios";
import InConstructionSingle from "../../components/Projects/inConstructionSingle";

const InConstruction = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <InConstructionSingle project={project} />;
};

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}sites`);
  const sites = res.data;
  const paths = sites.map((site) => ({
    params: { id: site._id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}sites/${params.id}`
  );
  const project = res.data;

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
}

export default InConstruction;
