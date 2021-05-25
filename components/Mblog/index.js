import "./mblog.css";
import Link from 'next/link';

export default function Mblog() {

  return (

    <section className="mblog">
      <div className="container">
        <h2 className="mblog__heading">Our Blog</h2>
        <div className="mblog__images-row">
          <Link href={'/blog/firstarticle'}><a>
            <div className="mblog__container">
              <img
                src="/images/first.webp"
                alt="red wine is pouring into a glass in bright room"
              />
              <h3>How to remove red wine stains from the sofa?</h3>
              <p>
                Quite often after holidays there is not only a positive mood and
                good memories left, but also wine stains on the sofa's
                upholstery or on your clothes. In this article we will consider
                all possible ways to resolve red wine stains problem.
              </p>
            </div>
          </a></Link>
          <Link href={'/blog/secondarticle'}><a>
            <div className="mblog__container">
              <img
                src="/images/second.webp"
                alt="a tabby cat is sleeping on couch"
              />
              <h3>Cleaning cat urine from the couch</h3>
              <p>
                The acrid smell of cat urine lingers in the room for a long time
                and over time doesn't get out, but only gets stronger.
                Therefore, it is very important to remove it immediately. We'll
                tell you how to remove the smell by your own efforts and
                what to do if the urine stain has dried up long ago.
              </p>
            </div>
          </a></Link>
          <Link href={'/blog/thirdarticle'}><a>
            <div className="mblog__container">
              <img
                src="/images/third.webp"
                alt="blue couch infront of a window"
              />
              <h3>Sofa cleaning – determine the upholstery type!</h3>
              <p>
                There are many varieties of upholstery materials for sofas. They
                differ in composition and performance characteristics. Our
                article will help you determine which material your sofa is made
                of and whether it can be cleaned.
              </p>
            </div>
          </a></Link>
        </div>
      </div>
    </section>
  );
};
