import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";

export default function PrivacyPolicy(props) {
  const meta = {
    title: "Privacy Policy",
    description: `Company that professionally cleans furniture's upholstery, mattresses, rugs and carpets. Steam cleaning, extracting and removing stains.`,
    keywords:
      "couch cleaning, sofa cleaning, steam cleaning, upholstery cleaning, carpet cleaning, rug cleaning, stain removing, disinfection, professional cleaning, steam extracting, cleaning",
  };
  return (
    <Layout meta={meta}>
      <section className="privacy">
        <div className="container">
          <div className="tracker">
            <p>
              <Link href={"/"}>
                <a>HOME</a>
              </Link>{" "}
              / PRIVACY POLICY
            </p>
          </div>
          <div className="privacy__wrapper">
            <h1>Privacy Policy</h1>
            <h2>Cleaning</h2>
            <p>
              At couch-cleaning.com, accessible from&nbsp;
              <Link href={"/"}>
                <a>https://couch-cleaning.com/</a>
              </Link>
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by couch-cleaning.com and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us through email at
              <span className="span-bold"> couch-cleaning@gmail.com</span>
            </p>
            <h2>Log Files</h2>
            <p>
              couch-cleaning.com follows a standard procedure of using log
              files. These files log visitors when they visit websites. All
              hosting companies do this and a part of hosting services’
              analytics. The information collected by log files include internet
              protocol (IP) addresses, browser type, Internet Service Provider
              (ISP), date and time stamp, referring/exit pages, and possibly the
              number of clicks. These are not linked to any information that is
              personally identifiable. The purpose of the information is for
              analyzing trends, administering the site, tracking users’ movement
              on the website, and gathering demographic information.
            </p>
            <h2>Cookies and Web Beacons</h2>
            <p>
              Like any other website, couch-cleaning.com uses ‘cookies’. These
              cookies are used to store information including visitors’
              preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the
              users’ experience by customizing our web page content based on
              visitors’ browser type and/or other information.
            </p>
            <h2>Google DoubleClick DART Cookie</h2>
            <p>
              Google is one of a third-party vendor on our site. It also uses
              cookies, known as DART cookies, to serve ads to our site visitors
              based upon their visit to
              <a href="www.website.com"> www.website.com</a> and other sites on
              the internet. However, visitors may choose to decline the use of
              DART cookies by visiting the Google ad and content network Privacy
              Policy at the following URL –&nbsp;
              <Link href={"https://policies.google.com/technologies/ads"}>
                <a>https://policies.google.com/technologies/ads</a>
              </Link>
            </p>
            <h2>Our Advertising Partners</h2>
            <p>
              Some of advertisers on our site may use cookies and web beacons.
              Our advertising partners are listed below. Each of our advertising
              partners has their own Privacy Policy for their policies on user
              data. For easier access, we hyperlinked to their Privacy Policies
              below.
            </p>
            <ul>
              <li>
                Google&nbsp;
                <Link href={"https://policies.google.com/technologies/ads"}>
                  <a>https://policies.google.com/technologies/ads</a>
                </Link>
              </li>
            </ul>
            <h2>Privacy Policies</h2>
            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of couch-cleaning.com. Our Privacy Policy
              was created with the help of the&nbsp;
              <Link href={"https://www.privacypolicygenerator.info/"}>
                <a>Privacy Policy Generator</a>
              </Link>
              .
            </p>
            <p>
              <Link href={"https://www.privacypolicygenerator.info/"}>
                <a>https://www.privacypolicygenerator.info/</a>
              </Link>
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on
              couch-cleaning.com, which are sent directly to users’ browser.
              They automatically receive your IP address when this occurs. These
              technologies are used to measure the effectiveness of their
              advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit.
            </p>
            <p>
              Note that couch-cleaning.com has no access to or control over
              these cookies that are used by third-party advertisers.
            </p>
            <h2>Third Party Privacy Policies</h2>
            <p>
              couch-cleaning.com’s Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options. You may find
              a complete list of these Privacy Policies and their links here:
              Privacy Policy Links.
            </p>
            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers’
              respective websites. What Are Cookies?
            </p>
            <h2>Children’s Information</h2>
            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p>
              couch-cleaning.com does not knowingly collect any Personal
              Identifiable Information from children under the age of 13. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately and
              we will do our best efforts to promptly remove such information
              from our records.
            </p>
            <h2>Online Privacy Policy Only</h2>
            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in couch-cleaning.com. This policy
              is not applicable to any information collected offline or via
              channels other than this website.
            </p>
            <h2>Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
