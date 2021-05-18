import Layout from "../components/Layout";
import Head from "next/head";
import React, { Fragment } from "react";
import Link from "next/link";
import "../css/feedback.css";

export default function Feedback(props) {
  const meta = {
    title: "Couch-Cleaning | Feedbacks",
    description: `Company that professionally cleans furniture's upholstery, mattresses, rugs and carpets. Steam cleaning, extracting and removing stains.`,
    keywords:
      "couch cleaning, sofa cleaning, steam cleaning, upholstery cleaning, carpet cleaning, rug cleaning, stain removing, disinfection, professional cleaning, steam extracting, cleaning",
  };
  return (
    <Layout meta={meta}>
      <section className="feedback">
        <div className="container">
		<div className="tracker">
            <p>
              <Link href={'/'}><a>HOME</a></Link> / FEEDBACKS
            </p>
          </div>
            <h1>Our Feedbacks</h1>
          <div className="feedback__list">
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Camilla Heny</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jan. 07, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        I'm very satisfied with the service provided. My sofa is
                        like new now. The guy cleanned it from all the sides
                        that there is no hair or dust left. There were two oily
                        stains which were successfully removed. Thank you guys I
                        will order you again.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>George McOneel</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jan. 09, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Guys you are amaizing, thanks for a great job... My
                        carpet and couch are fresh and shiny. The worker is also
                        cleaned after himself and moved the couch back on its
                        place. Thanx... I like it
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Maria Goldberg</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jan. 10, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        First of all I was surprised that a worker weared a gas
                        mask, eyewear and gloves. I thought that he was about
                        using some rough chemicals but he explainned to me that
                        it is for my safety against covid virus :) That was
                        funny but the job was done great and I have no
                        complaints.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Josh Sanders</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jan. 12, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        I used to use another company before who cleaned my
                        couch and left it wet, after it dried all stains and
                        dust were still there. So, I decided to call
                        Couch-Cleaning to see if they can do a better job. It
                        took them quite longer but they definetly extracted all
                        water from the couch and cleaned all stains out. They
                        were not in rush and did their job smoothly and well.
                        Now I know where to call.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Andy Flarigen</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jan. 13, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Thanks for cleaning out my furniture! I had 2
                        mattresses, loveseat, couch and armchair. Everything is
                        clean like new and Dudley also gave me a good discount.
                        The worker came on time but the job itself took some
                        time but it worth it. Nice company, I'll refere it to my
                        cousin.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Ron Santos</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jan. 18, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Nice customer service. Came on time. Cleaned properly
                        and well. I thought it's gonna be noisy but it wasn't.
                        Thank you.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Hans-Peter Schultz</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jan. 21, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        We did a good deal. After Alex cleaned one side of my
                        mattress he told me that it is going to stay a little
                        wet. I was a kind of disapointed but we decided to flip
                        the mattress and he came back the very next day to clean
                        the other side for the same price. I think it is a good
                        solution so I don't need to sleep on wet. I don't think
                        that any other company would do the same. The
                        Couch-Cleaning Co. cares about their clients.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Ashish Dev</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jan. 24, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        I'm using such cleaning for the first time. I was just
                        not ready to throw my couch and mattresses out for
                        buying new ones. I thought it would be cheaper to clean
                        them. The company gave me a discount and I also added my
                        rug and 2 chairs to clean. So I'm very satisfied with
                        this friendly company. Good luck!
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Elena Wirz</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jan. 29, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Thank ya guys!!! finaly my allergy is gone... It was my
                        dusty carpet, now I know. nex time I'll order you to
                        clean my mattresses cause I didn't know that you do
                        them.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Abdul Khasan</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Feb. 03, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        God bless you! Very good cleaning of my sofa corner. My
                        wife is happy as well as me. It is good idea to clean a
                        sofa once in a while.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="feedback__window">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Nic Stanley</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Feb. 05, 2021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Hey, just wanna give a feedback. I called to this
                        company and asked them if they clean a car interior.
                        They agreed to do this for $300. I'm about to sell my
                        car and wanted the interior look as best as possible and
                        the guy did it. It took him 4 hours but it's a kinda
                        private job that no one will accomplish on any car-wash.
                        Ofcourse I live in a private house and he did it on my
                        driveway. We used an extension cord to power up the
                        guy's machine. Good job, now I can raise the price on my
                        car in about a grand.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
