import "../../css/blog.css";
import Layout from "../../components/Layout";
import Head from "next/head";
import React, { Fragment } from "react";
import Link from "next/link";

export default function BlogPage(props) {
  const meta = {
    title: "Couch-Cleaning",
    description: `Company that professionally cleans furniture's upholstery, mattresses, rugs and carpets. Steam cleaning, extracting and removing stains.`,
    keywords:
      "couch cleaning, sofa cleaning, steam cleaning, upholstery cleaning, carpet cleaning, rug cleaning, stain removing, disinfection, professional cleaning, steam extracting, cleaning",
  };
  return (
    <Layout meta={meta}>
      <section className="blog">
        <div className="container">
          <div className="tracker">
            <p>
              <Link href={'/'}><a>HOME</a></Link> / BLOG
            </p>
          </div>
          <h1>Our Blog</h1>
          <div className="bimages-row">
            <Link href={'/blog/firstarticle'}><a>
              <div className="blog__container">
                <img
                  src="/images/first.webp"
                  alt="red wine is pouring into a glass in bright room"
                />
                <h2>How to remove red wine stains from the sofa?</h2>
                <p>
                  Quite often after holidays there is not only a positive mood
                  and good memories left, but also wine stains on the sofa's
                  upholstery or on your clothes. In this article we will
                  consider all possible ways to resolve red wine stains problem.
                </p>
              </div>
            </a></Link>
            <Link href={'/blog/secondarticle'}><a>
              <div className="blog__container">
                <img
                  src="/images/second.webp"
                  alt="a tabby cat is sleeping on couch"
                />
                <h2>Cleaning cat urine from the couch</h2>
                <p>
                  The acrid smell of cat urine lingers in the room for a long
                  time and over time does not get out, but only gets stronger.
                  Therefore, it is very important to remove it immediately. We
                  will tell you how to remove the smell by your own efforts and
                  what to do if the urine stain has dried up long ago.
                </p>
              </div>
            </a></Link>
            <Link href={'/blog/thirdarticle'}><a>
              <div className="blog__container">
                <img
                  src="/images/third.webp"
                  alt="blue couch infront of a window"
                />
                <h2>Sofa cleaning – determine the upholstery type!</h2>
                <p>
                  There are many varieties of upholstery materials for sofas.
                  They differ in composition and performance characteristics.
                  Our article will help you determine which material your sofa
                  is made of and whether it can be cleaned.
                </p>
              </div>
            </a></Link>
            <Link href={'/blog/fourtharticle'}><a>
              <div className="blog__container">
                <img
                  src="/images/fourth.webp"
                  alt="A bottle of Vanish over a lady cleaning a couch"
                />
                <h2>How to clean a sofa with Vanish</h2>
                <p>
                  Unfortunately, many housewives think Vanish is a universal
                  remedy for all sofa stains. But sometimes attempts to clean it
                  on their own end up in a bad way. So, let's find out how to
                  properly clean a sofa with Vanish so as not to ruin its
                  upholstery.
                </p>
              </div>
            </a></Link>
            <Link href={'/blog/fiftharticle'}><a>
              <div className="blog__container">
                <img
                  src="/images/fifth.webp"
                  alt="A black armchair covered with mold"
                />
                <h2>
                  How to get rid of mold and damp smell from an old couch?
                </h2>
                <p>
                  Very often people do not notice the presence of mold in the
                  apartment and on the furniture. Sometimes mold or fungus look
                  obvious but in most cases they are not visible because of too
                  small size of their spores. In this article we will take a
                  look at the different types of mold and how to deal with it.
                </p>
              </div>
            </a></Link>
            <Link href={'/blog/sixtharticle'}><a>
              <div className="blog__container">
                <img
                  src="/images/sixth.webp"
                  alt="A blood stai on a white carpet"
                />
                <h2>How to remove blood stains from the sofa?</h2>
                <p>
                  Blood penetrates deep into the upholstery very quickly and
                  dries almost instantly on contact with the air. That is why it
                  is difficult and not always possible to remove it from the
                  sofa. Read in our article how to properly clean a sofa from
                  blood stains and not to damage it.
                </p>
              </div>
            </a></Link>
            <Link href={'/blog/seventharticle'}><a>
              <div className="blog__container">
                <img
                  src="/images/seventh.webp"
                  alt="Two white candles spilling wax on a blue couch"
                />
                <h2>How to remove wax or paraffin from the carpet?</h2>
                <p>
                  Whatever the occasion may be, candles carry some risk – heated
                  wax that gets on the floor or upholstery can ruin a favorite
                  thing. It's especially difficult to remove wax from an uneven
                  surface, such as a long-pile carpet. We are happy to tell you
                  how to remove it safely.
                </p>
              </div>
            </a></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
