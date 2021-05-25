import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";

export default function Layout(props) {
  // const title=props.meta.title;
  // const description=props.meta.description;
  const { meta = {} } = props;
  const title = meta.title || "Couch-Cleaning";
  const description =
    meta.description ||
    `Company that professionally cleans furniture's upholstery, mattresses, rugs and carpets. Steam cleaning, extracting and removing stains.`;
  const keywords =
    meta.keywords ||
    "couch cleaning, sofa cleaning, steam cleaning, upholstery cleaning, carpet cleaning, rug cleaning, stain removing, disinfection, professional cleaning, steam extracting, cleaning";

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="Author" content="Dudley Jones, dudleyjones00@gmail.com" />
        <meta name="Copyright" content="Dudley Jones" />
        <meta name="Designer" content="Dudley Jones" />
        <meta name="Classification" content="Business" />
        <meta
          name="Address"
          content="2220 65th Str, 155, Brooklyn, NY, 11204"
        />
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="pageContent">{props.children}</div>

      <Footer />
    </div>
  );
};
