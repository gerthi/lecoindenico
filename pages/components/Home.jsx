import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Text from "../components/Text";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import home from "../../content/home.js";
import DOMPurify from "isomorphic-dompurify";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Text style='container mt-8 max-w-prose px-14 sm:px-0'>{home.intro}</Text>
      <Card title='Les Tartines' img='laRosbeef.png'>
        <Text>{DOMPurify.sanitize(home.tartines)}</Text>
      </Card>
      <div className='flex flex-col items-center w-full pb-20 mx-auto bg-center bg-no-repeat bg-cover bg-food-pattern'>
        <Card title='Le Chef' invert circle img='chef_nico.png'>
          <Text>{home.chef}</Text>
        </Card>
        <Menu />
        <Card title='Localisation' white img='delemont.png'>
          <Text>{home.localisation}</Text>
        </Card>
      </div>
      <Footer></Footer>
    </Layout>
  );
}
