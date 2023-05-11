// pages/apartment/[id].js
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import ApartmentDetails from "../../components/Apartments/ApartmentDetails";
const Apartment = ({ apartment }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <ApartmentDetails apartment={apartment} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}apartments`);
  const data = res.data;

  const apartments = data.map((item) => item.apartment);

  const paths = apartments.map((apartment) => ({
    params: { id: apartment._id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}apartment/${params.id}`
  );
  const apartment = res.data;

  return {
    props: {
      apartment,
    },
    revalidate: 60 * 60 * 24 * 1, // Revalidate once every 1 days
  };
}

export default Apartment;
