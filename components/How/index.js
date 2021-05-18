import "./how.css";

export default function How() {
  return (
    <section className="how">
      <div className="container">
        <div className="how__body">
          <picture className="how__image">
            <img
              src="/images/mytee.webp"
              alt="blue professional steam extractor"
            />
          </picture>
          <div className="how__text">
            <h2 className="how__headding white">
              How do we clean <nobr>upholstery ?</nobr>
            </h2>
            <p>
              We use the best equipment to treat your furniture. First we define
              a type of fabric we're going to clean, to match proper solutions
              and methods of cleaning. We test our method on a small invisible
              area first before apply it to a whole object. To make 100% sure
              that everything is compatible.
            </p>
            <p>
              We pre-vacuum an object first with a powerful vacuum cleaner. We
              do it to extract as much dry particles as possible before wet
              cleaning. If necessary, we use a sticky roll to remove pet hair.
            </p>
            <p>
              Next step is to spray cleaning solution over an object and rub it
              with a special brush for better and deeper coverage. Apply stain
              remover solution over heavily stained spots.
            </p>
            <p>
              Finally, we extract the solution and hot-steam fabric cleaning it
              from deep inside, making sure that after extraction it becomes
              dry. This procedure not only removes dirt and stains but also
              killing bad bacterias and micro insects, leaving your furniture
              fresh and safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
