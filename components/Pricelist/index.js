import "./pricelist.css";

export default function Pricelist() {
  return (
    <section className="pricelist block--skewed-right">
      <div className="container">
        <h2 className="pricelist__heading">
          How Much does it <nobr>cost ?</nobr>
        </h2>
        <div className="flexible-container">
          <table className="pricelist__table">
            <tbody>
              <tr>
                <td>Love Seat</td>
                <td>$180</td>
                <td>Rug (Medium)</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>Couch</td>
                <td>$250</td>
                <td>Rug (Large)</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Sectional</td>
                <td>$400</td>
                <td>Mattress (Full)</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Armchair</td>
                <td>$60</td>
                <td>Mattress (Queen)</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>Chair</td>
                <td>$30</td>
                <td>Mattress (King)</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Rug (Small)</td>
                <td>$150</td>
                <td>Other</td>
                <td>$ASK</td>
              </tr>
            </tbody>
          </table>
          <table className="pricelist__table two">
            <tbody>
              <tr>
                <td>Love Seat</td>
                <td>$180</td>
              </tr>
              <tr>
                <td>Rug (Medium)</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>Couch</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Rug (Large)</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Sectional</td>
                <td>$400</td>
              </tr>
              <tr>
                <td>Mattress (Full)</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Armchair</td>
                <td>$60</td>
              </tr>
              <tr>
                <td>Mattress (Queen)</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>Chair</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Mattress (King)</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Rug (Small)</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>Other</td>
                <td>$ASK</td>
              </tr>
            </tbody>
          </table>
          <div className="pricelist__discount-wrapper">
            <div className="pricelist__discount">
              <img
                src="/images/discount.webp"
                alt="ten percent discount card of couch-cleaning company"
              />
            </div>
            <div className="pricelist__text">
              <p>
                You are welcome to use
                <span> 10% discount </span> when requesting our service second
                and following times!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
