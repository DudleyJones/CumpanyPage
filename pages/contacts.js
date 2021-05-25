import "../css/contacts.css";
import Layout from "../components/Layout";
import Head from "next/head";
import React, { Fragment } from "react";
import Link from "next/link";

export default function Contacts(props) {
  const meta = {
    title: "Couch-Cleaning | Contacts",
    description: `Company that professionally cleans furniture's upholstery, mattresses, rugs and carpets. Steam cleaning, extracting and removing stains.`,
    keywords:
      "couch cleaning, sofa cleaning, steam cleaning, upholstery cleaning, carpet cleaning, rug cleaning, stain removing, disinfection, professional cleaning, steam extracting, cleaning",
  };
  return (
    <Layout meta={meta}>
      <section className="contacts">
        <div className="container">
          <div className="tracker">
            <p>
              <Link href={"/"}>
                <a>HOME</a>
              </Link>{" "}
              / CONTACTS
            </p>
          </div>
          <h1>Contact Us</h1>
          <div className="contacts-row">
            <div className="contacts__info-container">
              <h2>Phone:</h2>
              <p>1 (212) 767-9314</p>
              <h2>Address:</h2>
              <p>
                2220 65th Street Ste. 155
                <br />
                Brooklyn, NY, 11204
              </p>
              <h2>eMail:</h2>
              <p>couch-cleaning@gmail.com</p>
              <h2>Working Hours:</h2>
              <p>Every day 8am - 9pm</p>
            </div>
            <div className="contacts__form-container">
              <form action="#" method="POST" encType="multipart/form-data">
                <div className="contacts__form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="username"
                    tabIndex="1"
                    placeholder="Your first and last name"
                    defaultValue=""
                  />
                </div>
                <div className="contacts__form-group">
                  <p>
                    <input type="radio" name="gender" tabIndex="2" value="Mr" />
                    Mr.
                    <input type="radio" name="gender" tabIndex="2" value="Ms" />
                    Ms.
                    <input type="radio" name="gender" tabIndex="2" value="Mx" />
                    Other
                  </p>
                </div>
                <div className="contacts__form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    tabIndex="3"
                    placeholder="Your phone number"
                    defaultValue=""
                  />
                </div>
                <div className="contacts__form-group">
                  <label htmlFor="email">eMail:</label>
                  <input
                    type="email"
                    id="email"
                    name="useremail"
                    tabIndex="4"
                    placeholder="Your eMail"
                    defaultValue=""
                  />
                </div>
                <div className="contacts__form-group">
                  <label htmlFor="text">Text:</label>
                  <textarea
                    name="text"
                    id="text"
                    tabIndex="5"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <div className="contacts__form-group_alt">
                  <div>
                    <label htmlFor="foto">Attach Your Picture:</label>
                    <p>
                      <input
                        type="file"
                        name="userfoto"
                        id="foto"
                        tabIndex="6"
                      />
                    </p>
                  </div>
                  <button type="submit" tabIndex="7">
                    Send
                  </button>
                </div>
                <p>
                  By clicking on the "SEND" button,{" "}
                  <Link href={"/consent"}>
                    <a>I consent to the processing of my personal data</a>
                  </Link>
                  .
                </p>
              </form>
            </div>
            <div className="contacts__location">
              <h2>Couch-Cleaning Service Locations</h2>
              <div className="contacts__location-container">
                <div className="contacts__location-column">
                  <span className="contacts__location-heading">
                    <p>Brooklyn</p>
                  </span>
                  <span className="contacts__location-heading_alt">
                    <p>Central Brooklyn</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Beverley Squares</a>
                    </li>
                    <li>
                      <a href="#">Crown Heights</a>
                    </li>
                    <li>
                      <a href="#">Ditmas Park</a>
                    </li>
                    <li>
                      <a href="#">East Flatbush</a>
                    </li>
                    <li>
                      <a href="#">Farragut</a>
                    </li>
                    <li>
                      <a href="#">Fiske Terrace</a>
                    </li>
                    <li>
                      <a href="#">Flatbush</a>
                    </li>
                    <li>
                      <a href="#">Kensington</a>
                    </li>
                    <li>
                      <a href="#">Ocean Parkway</a>
                    </li>
                    <li>
                      <a href="#">Parkville</a>
                    </li>
                    <li>
                      <a href="#">Pigtown</a>
                    </li>
                    <li>
                      <a href="#">Prospect Lefferts Gardens</a>
                    </li>
                    <li>
                      <a href="#">Prospect Park South</a>
                    </li>
                    <li>
                      <a href="#">Prospect Park</a>
                    </li>
                    <li>
                      <a href="#">Remsen Village</a>
                    </li>
                    <li>
                      <a href="#">Weeksville</a>
                    </li>
                    <li>
                      <a href="#">Windsor Terrace</a>
                    </li>
                    <li>
                      <a href="#">Wingate</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Eastern Brooklyn</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Brownsville</a>
                    </li>
                    <li>
                      <a href="#">Canarsie</a>
                    </li>
                    <li>
                      <a href="#">City Line</a>
                    </li>
                    <li>
                      <a href="#">Cypress Hills</a>
                    </li>
                    <li>
                      <a href="#">East New York</a>
                    </li>
                    <li>
                      <a href="#">Highland Park</a>
                    </li>
                    <li>
                      <a href="#">New Lots</a>
                    </li>
                    <li>
                      <a href="#">Spring Creek</a>
                    </li>
                    <li>
                      <a href="#">Starrett City</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Northern Brooklyn</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Bedford–Stuyvesant</a>
                    </li>
                    <li>
                      <a href="#">Bedford</a>
                    </li>
                    <li>
                      <a href="#">Bushwick</a>
                    </li>
                    <li>
                      <a href="#">East Williamsburg</a>
                    </li>
                    <li>
                      <a href="#">Greenpoint</a>
                    </li>
                    <li>
                      <a href="#">Little Poland</a>
                    </li>
                    <li>
                      <a href="#">Ocean Hill</a>
                    </li>
                    <li>
                      <a href="#">Stuyvesant Heights</a>
                    </li>
                    <li>
                      <a href="#">Williamsburg</a>
                    </li>
                    <li>
                      <a href="#">Wyckoff Heights</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Northwestern Brooklyn</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Admiral's Row</a>
                    </li>
                    <li>
                      <a href="#">Atlantic Yards</a>
                    </li>
                    <li>
                      <a href="#">Boerum Hill</a>
                    </li>
                    <li>
                      <a href="#">Bridge Plaza</a>
                    </li>
                    <li>
                      <a href="#">Brooklyn Heights</a>
                    </li>
                    <li>
                      <a href="#">Brooklyn Navy Yard</a>
                    </li>
                    <li>
                      <a href="#">Cadman Plaza</a>
                    </li>
                    <li>
                      <a href="#">Carroll Gardens</a>
                    </li>
                    <li>
                      <a href="#">Clinton Hill</a>
                    </li>
                    <li>
                      <a href="#">Cobble Hill</a>
                    </li>
                    <li>
                      <a href="#">Downtown Brooklyn</a>
                    </li>
                    <li>
                      <a href="#">DUMBO</a>
                    </li>
                    <li>
                      <a href="#">Fort Greene</a>
                    </li>
                    <li>
                      <a href="#">Fulton Ferry</a>
                    </li>
                    <li>
                      <a href="#">Gowanus</a>
                    </li>
                    <li>
                      <a href="#">Greenwood Heights</a>
                    </li>
                    <li>
                      <a href="#">Pacific Park</a>
                    </li>
                    <li>
                      <a href="#">Park Slope</a>
                    </li>
                    <li>
                      <a href="#">Prospect Heights</a>
                    </li>
                    <li>
                      <a href="#">RAMBO</a>
                    </li>
                    <li>
                      <a href="#">Red Hook</a>
                    </li>
                    <li>
                      <a href="#">South Brooklyn</a>
                    </li>
                    <li>
                      <a href="#">South Park Slope</a>
                    </li>
                    <li>
                      <a href="#">Vinegar Hill</a>
                    </li>
                    <li>
                      <a href="#">Waterfront District</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Southern Brooklyn</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Barren Island</a>
                    </li>
                    <li>
                      <a href="#">Bergen Beach</a>
                    </li>
                    <li>
                      <a href="#">Brighton Beach</a>
                    </li>
                    <li>
                      <a href="#">Coney Island</a>
                    </li>
                    <li>
                      <a href="#">Flatlands</a>
                    </li>
                    <li>
                      <a href="#">Georgetown</a>
                    </li>
                    <li>
                      <a href="#">Gerritsen Beach</a>
                    </li>
                    <li>
                      <a href="#">Gravesend</a>
                    </li>
                    <li>
                      <a href="#">Homecrest</a>
                    </li>
                    <li>
                      <a href="#">Manhattan Beach</a>
                    </li>
                    <li>
                      <a href="#">Marine Park</a>
                    </li>
                    <li>
                      <a href="#">Midwood</a>
                    </li>
                    <li>
                      <a href="#">Mill Basin</a>
                    </li>
                    <li>
                      <a href="#">Plumb Beach</a>
                    </li>
                    <li>
                      <a href="#">Sea Gate</a>
                    </li>
                    <li>
                      <a href="#">
                        Sheepshead Bay <br />
                        and Madison
                      </a>
                    </li>
                    <li>
                      <a href="#">West Brighton</a>
                    </li>
                    <li>
                      <a href="#">White Sands</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Southwestern Brooklyn</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Bath Beach</a>
                    </li>
                    <li>
                      <a href="#">Bay Ridge</a>
                    </li>
                    <li>
                      <a href="#">Bensonhurst</a>
                    </li>
                    <li>
                      <a href="#">Borough Park</a>
                    </li>
                    <li>
                      <a href="#">Chinatown</a>
                    </li>
                    <li>
                      <a href="#">Dyker Heights</a>
                    </li>
                    <li>
                      <a href="#">Fort Hamilton</a>
                    </li>
                    <li>
                      <a href="#">Mapleton</a>
                    </li>
                    <li>
                      <a href="#">New Utrecht</a>
                    </li>
                    <li>
                      <a href="#">Sunset Industrial Park</a>
                    </li>
                    <li>
                      <a href="#">Sunset Park</a>
                    </li>
                  </ul>
                </div>
                <div className="contacts__location-column">
                  <span className="contacts__location-heading">
                    <p>Queens</p>
                  </span>
                  <span className="contacts__location-heading_alt">
                    <p>Northwestern Queens</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Astoria Heights</a>
                    </li>
                    <li>
                      <a href="#">Astoria</a>
                    </li>
                    <li>
                      <a href="#">Blissville</a>
                    </li>
                    <li>
                      <a href="#">Ditmars</a>
                    </li>
                    <li>
                      <a href="#">Dutch Kills</a>
                    </li>
                    <li>
                      <a href="#">Hunters Point</a>
                    </li>
                    <li>
                      <a href="#">Jackson Heights</a>
                    </li>
                    <li>
                      <a href="#">Little Egypt</a>
                    </li>
                    <li>
                      <a href="#">Long Island City</a>
                    </li>
                    <li>
                      <a href="#">Queens West</a>
                    </li>
                    <li>
                      <a href="#">Queensbridge</a>
                    </li>
                    <li>
                      <a href="#">Queensview</a>
                    </li>
                    <li>
                      <a href="#">Ravenswood</a>
                    </li>
                    <li>
                      <a href="#">Steinway</a>
                    </li>
                    <li>
                      <a href="#">Sunnyside Gardens</a>
                    </li>
                    <li>
                      <a href="#">Sunnyside</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Northeastern Queens</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Auburndale</a>
                    </li>
                    <li>
                      <a href="#">Bay Terrace</a>
                    </li>
                    <li>
                      <a href="#">Bayside Hills</a>
                    </li>
                    <li>
                      <a href="#">Bayside</a>
                    </li>
                    <li>
                      <a href="#">Beechhurst</a>
                    </li>
                    <li>
                      <a href="#">Bellerose</a>
                    </li>
                    <li>
                      <a href="#">Bowne Park</a>
                    </li>
                    <li>
                      <a href="#">Broadway-Flushing</a>
                    </li>
                    <li>
                      <a href="#">Chinatown</a>
                    </li>
                    <li>
                      <a href="#">Clearview</a>
                    </li>
                    <li>
                      <a href="#">College Point</a>
                    </li>
                    <li>
                      <a href="#">Douglas Bay</a>
                    </li>
                    <li>
                      <a href="#">Douglas Manor</a>
                    </li>
                    <li>
                      <a href="#">Douglaston Hill</a>
                    </li>
                    <li>
                      <a href="#">Douglaston Park</a>
                    </li>
                    <li>
                      <a href="#">Douglaston–Little Neck</a>
                    </li>
                    <li>
                      <a href="#">Douglaston</a>
                    </li>
                    <li>
                      <a href="#">Downtown Flushing</a>
                    </li>
                    <li>
                      <a href="#">Electchester</a>
                    </li>
                    <li>
                      <a href="#">Floral Park</a>
                    </li>
                    <li>
                      <a href="#">Flushing</a>
                    </li>
                    <li>
                      <a href="#">Fort Totten</a>
                    </li>
                    <li>
                      <a href="#">Fresh Meadows</a>
                    </li>
                    <li>
                      <a href="#">Glen Oaks</a>
                    </li>
                    <li>
                      <a href="#">Hillcrest</a>
                    </li>
                    <li>
                      <a href="#">Kew Gardens Hills</a>
                    </li>
                    <li>
                      <a href="#">Koreatown</a>
                    </li>
                    <li>
                      <a href="#">Linden Hill</a>
                    </li>
                    <li>
                      <a href="#">Little Neck Hills</a>
                    </li>
                    <li>
                      <a href="#">Little Neck</a>
                    </li>
                    <li>
                      <a href="#">Malba</a>
                    </li>
                    <li>
                      <a href="#">Murray Hill</a>
                    </li>
                    <li>
                      <a href="#">North Shore Towers</a>
                    </li>
                    <li>
                      <a href="#">Oakland Gardens</a>
                    </li>
                    <li>
                      <a href="#">Pines</a>
                    </li>
                    <li>
                      <a href="#">Pomonok</a>
                    </li>
                    <li>
                      <a href="#">Queensboro Hill</a>
                    </li>
                    <li>
                      <a href="#">Utopia</a>
                    </li>
                    <li>
                      <a href="#">Westmoreland</a>
                    </li>
                    <li>
                      <a href="#">Whitestone</a>
                    </li>
                    <li>
                      <a href="#">Willets Point</a>
                    </li>
                    <li>
                      <a href="#">Winchester Estates</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Central Queens</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Briarwood</a>
                    </li>
                    <li>
                      <a href="#">Corona</a>
                    </li>
                    <li>
                      <a href="#">East Elmhurst</a>
                    </li>
                    <li>
                      <a href="#">Elmhurst</a>
                    </li>
                    <li>
                      <a href="#">Forest Hills Gardens</a>
                    </li>
                    <li>
                      <a href="#">Forest Hills</a>
                    </li>
                    <li>
                      <a href="#">Fresh Pond</a>
                    </li>
                    <li>
                      <a href="#">Glendale</a>
                    </li>
                    <li>
                      <a href="#">Jackson Heights</a>
                    </li>
                    <li>
                      <a href="#">Kew Gardens</a>
                    </li>
                    <li>
                      <a href="#">LeFrak City</a>
                    </li>
                    <li>
                      <a href="#">Maspeth</a>
                    </li>
                    <li>
                      <a href="#">Middle Village</a>
                    </li>
                    <li>
                      <a href="#">North Corona</a>
                    </li>
                    <li>
                      <a href="#">Rego Park</a>
                    </li>
                    <li>
                      <a href="#">Ridgewood</a>
                    </li>
                    <li>
                      <a href="#">Woodside</a>
                    </li>
                    <li>
                      <a href="#">Wyckoff Heights</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Southeastern Queens</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Bellaire</a>
                    </li>
                    <li>
                      <a href="#">Brookville</a>
                    </li>
                    <li>
                      <a href="#">Cambria Heights</a>
                    </li>
                    <li>
                      <a href="#">Hollis Hills</a>
                    </li>
                    <li>
                      <a href="#">Hollis</a>
                    </li>
                    <li>
                      <a href="#">Holliswood</a>
                    </li>
                    <li>
                      <a href="#">Jamaica Estates</a>
                    </li>
                    <li>
                      <a href="#">Jamaica Hills</a>
                    </li>
                    <li>
                      <a href="#">Jamaica</a>
                    </li>
                    <li>
                      <a href="#">Laurelton</a>
                    </li>
                    <li>
                      <a href="#">Meadowmere</a>
                    </li>
                    <li>
                      <a href="#">Queens Village</a>
                    </li>
                    <li>
                      <a href="#">Rochdale Village</a>
                    </li>
                    <li>
                      <a href="#">Rosedale</a>
                    </li>
                    <li>
                      <a href="#">Saint Albans</a>
                    </li>
                    <li>
                      <a href="#">South Jamaica</a>
                    </li>
                    <li>
                      <a href="#">Springfield Gardens</a>
                    </li>
                    <li>
                      <a href="#">Warnerville</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Southwestern Queens</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Hamilton Beach</a>
                    </li>
                    <li>
                      <a href="#">Howard Beach</a>
                    </li>
                    <li>
                      <a href="#">Howard Park</a>
                    </li>
                    <li>
                      <a href="#">Lindenwood</a>
                    </li>
                    <li>
                      <a href="#">Old Howard Beach</a>
                    </li>
                    <li>
                      <a href="#">Ozone Park</a>
                    </li>
                    <li>
                      <a href="#">Ramblersville</a>
                    </li>
                    <li>
                      <a href="#">Richmond Hill</a>
                    </li>
                    <li>
                      <a href="#">Rockwood Park</a>
                    </li>
                    <li>
                      <a href="#">South Ozone Park</a>
                    </li>
                    <li>
                      <a href="#">The Hole</a>
                    </li>
                    <li>
                      <a href="#">Tudor Village</a>
                    </li>
                    <li>
                      <a href="#">Woodhaven</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>The Rockaways</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Arverne</a>
                    </li>
                    <li>
                      <a href="#">Bayswater</a>
                    </li>
                    <li>
                      <a href="#">Belle Harbor</a>
                    </li>
                    <li>
                      <a href="#">Breezy Point</a>
                    </li>
                    <li>
                      <a href="#">Broad Channel</a>
                    </li>
                    <li>
                      <a href="#">Edgemere</a>
                    </li>
                    <li>
                      <a href="#">Far Rockaway</a>
                    </li>
                    <li>
                      <a href="#">Hammels</a>
                    </li>
                    <li>
                      <a href="#">Neponsit</a>
                    </li>
                    <li>
                      <a href="#">Rockaway Beach</a>
                    </li>
                    <li>
                      <a href="#">Rockaway Park</a>
                    </li>
                    <li>
                      <a href="#">Roxbury</a>
                    </li>
                    <li>
                      <a href="#">Seaside</a>
                    </li>
                  </ul>
                </div>
                <div className="contacts__location-column">
                  <span className="contacts__location-heading">
                    <p>Bronx</p>
                  </span>
                  <span className="contacts__location-heading_alt">
                    <p>Northwest Bronx</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Bedford Park</a>
                    </li>
                    <li>
                      <a href="#">Belmont</a>
                    </li>
                    <li>
                      <a href="#">Central Riverdale</a>
                    </li>
                    <li>
                      <a href="#">Fieldston</a>
                    </li>
                    <li>
                      <a href="#">Fordham</a>
                    </li>
                    <li>
                      <a href="#">Hudson Hill</a>
                    </li>
                    <li>
                      <a href="#">Jerome Park</a>
                    </li>
                    <li>
                      <a href="#">Kingsbridge Heights</a>
                    </li>
                    <li>
                      <a href="#">Kingsbridge</a>
                    </li>
                    <li>
                      <a href="#">Marble Hill</a>
                    </li>
                    <li>
                      <a href="#">North Riverdale</a>
                    </li>
                    <li>
                      <a href="#">Norwood</a>
                    </li>
                    <li>
                      <a href="#">Riverdale</a>
                    </li>
                    <li>
                      <a href="#">Spuyten Duyvil</a>
                    </li>
                    <li>
                      <a href="#">University Heights</a>
                    </li>
                    <li>
                      <a href="#">Van Cortlandt Village</a>
                    </li>
                    <li>
                      <a href="#">Woodlawn Heights</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Southwest Bronx</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Bathgate</a>
                    </li>
                    <li>
                      <a href="#">Claremont</a>
                    </li>
                    <li>
                      <a href="#">Concourse</a>
                    </li>
                    <li>
                      <a href="#">Crotona Park East</a>
                    </li>
                    <li>
                      <a href="#">East Tremont</a>
                    </li>
                    <li>
                      <a href="#">Fairmount</a>
                    </li>
                    <li>
                      <a href="#">Foxhurst</a>
                    </li>
                    <li>
                      <a href="#">Highbridge</a>
                    </li>
                    <li>
                      <a href="#">Hunts Point</a>
                    </li>
                    <li>
                      <a href="#">Longwood</a>
                    </li>
                    <li>
                      <a href="#">Melrose</a>
                    </li>
                    <li>
                      <a href="#">Morris Heights</a>
                    </li>
                    <li>
                      <a href="#">Morrisania</a>
                    </li>
                    <li>
                      <a href="#">Mott Haven</a>
                    </li>
                    <li>
                      <a href="#">Mount Eden</a>
                    </li>
                    <li>
                      <a href="#">Mount Hope</a>
                    </li>
                    <li>
                      <a href="#">Port Morris</a>
                    </li>
                    <li>
                      <a href="#">The Hub</a>
                    </li>
                    <li>
                      <a href="#">Tremont</a>
                    </li>
                    <li>
                      <a href="#">West Farms</a>
                    </li>
                    <li>
                      <a href="#">Woodstock</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Northeast Bronx</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Allerton</a>
                    </li>
                    <li>
                      <a href="#">Baychester</a>
                    </li>
                    <li>
                      <a href="#">Bronxdale</a>
                    </li>
                    <li>
                      <a href="#">Bronxwood</a>
                    </li>
                    <li>
                      <a href="#">City Island</a>
                    </li>
                    <li>
                      <a href="#">Co-op City</a>
                    </li>
                    <li>
                      <a href="#">Eastchester</a>
                    </li>
                    <li>
                      <a href="#">Edenwald</a>
                    </li>
                    <li>
                      <a href="#">Laconia</a>
                    </li>
                    <li>
                      <a href="#">Olinville</a>
                    </li>
                    <li>
                      <a href="#">Pelham Gardens</a>
                    </li>
                    <li>
                      <a href="#">Pelham Parkway</a>
                    </li>
                    <li>
                      <a href="#">Wakefield</a>
                    </li>
                    <li>
                      <a href="#">Washingtonville</a>
                    </li>
                    <li>
                      <a href="#">Williamsbridge</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Southeast Bronx</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Bronx River</a>
                    </li>
                    <li>
                      <a href="#">Bruckner</a>
                    </li>
                    <li>
                      <a href="#">Castle Hill</a>
                    </li>
                    <li>
                      <a href="#">Clason Point</a>
                    </li>
                    <li>
                      <a href="#">Country Club</a>
                    </li>
                    <li>
                      <a href="#">Edgewater Park</a>
                    </li>
                    <li>
                      <a href="#">Harding Park</a>
                    </li>
                    <li>
                      <a href="#">Indian Village</a>
                    </li>
                    <li>
                      <a href="#">Morris Park</a>
                    </li>
                    <li>
                      <a href="#">Park Versailles</a>
                    </li>
                    <li>
                      <a href="#">Parkchester</a>
                    </li>
                    <li>
                      <a href="#">Pelham Bay</a>
                    </li>
                    <li>
                      <a href="#">Schuylerville</a>
                    </li>
                    <li>
                      <a href="#">Soundview</a>
                    </li>
                    <li>
                      <a href="#">Throggs Neck</a>
                    </li>
                    <li>
                      <a href="#">Unionport</a>
                    </li>
                    <li>
                      <a href="#">Van Nest</a>
                    </li>
                    <li>
                      <a href="#">Westchester Heights</a>
                    </li>
                    <li>
                      <a href="#">Westchester Square</a>
                    </li>
                  </ul>
                </div>
                <div className="contacts__location-column">
                  <span className="contacts__location-heading">
                    <p>Manhattan</p>
                  </span>
                  <span className="contacts__location-heading_alt">
                    <p>Uptown Manhattan</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Astor Row</a>
                    </li>
                    <li>
                      <a href="#">Carnegie Hill</a>
                    </li>
                    <li>
                      <a href="#">Central Harlem</a>
                    </li>
                    <li>
                      <a href="#">East Harlem</a>
                    </li>
                    <li>
                      <a href="#">Fort George</a>
                    </li>
                    <li>
                      <a href="#">Hamilton Heights</a>
                    </li>
                    <li>
                      <a href="#">Harlem</a>
                    </li>
                    <li>
                      <a href="#">Hudson Heights</a>
                    </li>
                    <li>
                      <a href="#">Inwood</a>
                    </li>
                    <li>
                      <a href="#">Le Petit Senegal</a>
                    </li>
                    <li>
                      <a href="#">Lenox Hill</a>
                    </li>
                    <li>
                      <a href="#">Lincoln Square</a>
                    </li>
                    <li>
                      <a href="#">Manhattan Valley</a>
                    </li>
                    <li>
                      <a href="#">Manhattanville</a>
                    </li>
                    <li>
                      <a href="#">Marble Hill</a>
                    </li>
                    <li>
                      <a href="#">Marcus Garvey Park</a>
                    </li>
                    <li>
                      <a href="#">Morningside Heights</a>
                    </li>
                    <li>
                      <a href="#">St. Nicholas Historic District</a>
                    </li>
                    <li>
                      <a href="#">Sugar Hill</a>
                    </li>
                    <li>
                      <a href="#">Upper East Side</a>
                    </li>
                    <li>
                      <a href="#">Upper Manhattan</a>
                    </li>
                    <li>
                      <a href="#">Upper West Side</a>
                    </li>
                    <li>
                      <a href="#">Washington Heights</a>
                    </li>
                    <li>
                      <a href="#">West Harlem</a>
                    </li>
                    <li>
                      <a href="#">Yorkville</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Midtown Manhattan</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Columbus Circle</a>
                    </li>
                    <li>
                      <a href="#">Diamond District</a>
                    </li>
                    <li>
                      <a href="#">Garment District</a>
                    </li>
                    <li>
                      <a href="#">Hell's Kitchen</a>
                    </li>
                    <li>
                      <a href="#">Herald Square</a>
                    </li>
                    <li>
                      <a href="#">Hudson Yards</a>
                    </li>
                    <li>
                      <a href="#">Koreatown</a>
                    </li>
                    <li>
                      <a href="#">Little Brazil</a>
                    </li>
                    <li>
                      <a href="#">Madison Square</a>
                    </li>
                    <li>
                      <a href="#">Midtown East</a>
                    </li>
                    <li>
                      <a href="#">Midtown West</a>
                    </li>
                    <li>
                      <a href="#">Midtown</a>
                    </li>
                    <li>
                      <a href="#">Murray Hill</a>
                    </li>
                    <li>
                      <a href="#">Rockefeller Center</a>
                    </li>
                    <li>
                      <a href="#">Sutton Place</a>
                    </li>
                    <li>
                      <a href="#">Tenderloin</a>
                    </li>
                    <li>
                      <a href="#">Theater District</a>
                    </li>
                    <li>
                      <a href="#">Times Square</a>
                    </li>
                    <li>
                      <a href="#">Tudor City</a>
                    </li>
                    <li>
                      <a href="#">Turtle Bay</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>
                      Between Midtown and <br />
                      Downtown of Manhattan
                    </p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Brookdale</a>
                    </li>
                    <li>
                      <a href="#">Chelsea</a>
                    </li>
                    <li>
                      <a href="#">Flatiron District</a>
                    </li>
                    <li>
                      <a href="#">Flower District</a>
                    </li>
                    <li>
                      <a href="#">Gramercy Park</a>
                    </li>
                    <li>
                      <a href="#">Hudson Yards</a>
                    </li>
                    <li>
                      <a href="#">Kips Bay</a>
                    </li>
                    <li>
                      <a href="#">Meatpacking District</a>
                    </li>
                    <li>
                      <a href="#">NoMad</a>
                    </li>
                    <li>
                      <a href="#">Peter Cooper Village</a>
                    </li>
                    <li>
                      <a href="#">Rose Hill</a>
                    </li>
                    <li>
                      <a href="#">Stuyvesant Square</a>
                    </li>
                    <li>
                      <a href="#">Stuyvesant Town</a>
                    </li>
                    <li>
                      <a href="#">Union Square</a>
                    </li>
                    <li>
                      <a href="#">Waterside Plaza</a>
                    </li>
                  </ul>
                  <span className="contacts__location-heading_alt">
                    <p>Downtown Manhattan</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Alphabet City</a>
                    </li>
                    <li>
                      <a href="#">Battery Park City</a>
                    </li>
                    <li>
                      <a href="#">Bowery</a>
                    </li>
                    <li>
                      <a href="#">Chinatown</a>
                    </li>
                    <li>
                      <a href="#">Civic Center</a>
                    </li>
                    <li>
                      <a href="#">Cooperative Village</a>
                    </li>
                    <li>
                      <a href="#">East Village</a>
                    </li>
                    <li>
                      <a href="#">Financial District</a>
                    </li>
                    <li>
                      <a href="#">Five Points</a>
                    </li>
                    <li>
                      <a href="#">Greenwich Village</a>
                    </li>
                    <li>
                      <a href="#">Little Australia</a>
                    </li>
                    <li>
                      <a href="#">Little Germany</a>
                    </li>
                    <li>
                      <a href="#">Little Italy</a>
                    </li>
                    <li>
                      <a href="#">Little Syria</a>
                    </li>
                    <li>
                      <a href="#">Loisaida</a>
                    </li>
                    <li>
                      <a href="#">Lower East Side</a>
                    </li>
                    <li>
                      <a href="#">NoHo</a>
                    </li>
                    <li>
                      <a href="#">Nolita</a>
                    </li>
                    <li>
                      <a href="#">Radio Row</a>
                    </li>
                    <li>
                      <a href="#">SoHo</a>
                    </li>
                    <li>
                      <a href="#">South Street Seaport</a>
                    </li>
                    <li>
                      <a href="#">Tribeca</a>
                    </li>
                    <li>
                      <a href="#">Two Bridges</a>
                    </li>
                    <li>
                      <a href="#">West Village</a>
                    </li>
                  </ul>
                </div>
                <div className="contacts__location-column">
                  <span className="contacts__location-heading">
                    <p>Staten Island</p>
                  </span>
                  <span className="contacts__location-heading_alt">
                    <p>Whole Staten Island</p>
                  </span>
                  <ul>
                    <li>
                      <a href="#">Annadale</a>
                    </li>
                    <li>
                      <a href="#">Arden Heights</a>
                    </li>
                    <li>
                      <a href="#">Arlington</a>
                    </li>
                    <li>
                      <a href="#">Arrochar</a>
                    </li>
                    <li>
                      <a href="#">Bay Terrace</a>
                    </li>
                    <li>
                      <a href="#">Bloomfield</a>
                    </li>
                    <li>
                      <a href="#">Brighton Heights</a>
                    </li>
                    <li>
                      <a href="#">Bulls Head</a>
                    </li>
                    <li>
                      <a href="#">Castleton Corners</a>
                    </li>
                    <li>
                      <a href="#">Charleston</a>
                    </li>
                    <li>
                      <a href="#">Chelsea</a>
                    </li>
                    <li>
                      <a href="#">Clifton</a>
                    </li>
                    <li>
                      <a href="#">Concord</a>
                    </li>
                    <li>
                      <a href="#">Dongan Hills</a>
                    </li>
                    <li>
                      <a href="#">Egbertville</a>
                    </li>
                    <li>
                      <a href="#">Elm Park</a>
                    </li>
                    <li>
                      <a href="#">Eltingville</a>
                    </li>
                    <li>
                      <a href="#">Emerson Hill</a>
                    </li>
                    <li>
                      <a href="#">Fort Wadsworth</a>
                    </li>
                    <li>
                      <a href="#">Graniteville</a>
                    </li>
                    <li>
                      <a href="#">Grant City</a>
                    </li>
                    <li>
                      <a href="#">Grasmere</a>
                    </li>
                    <li>
                      <a href="#">Great Kills</a>
                    </li>
                    <li>
                      <a href="#">Greenridge</a>
                    </li>
                    <li>
                      <a href="#">Grymes Hill</a>
                    </li>
                    <li>
                      <a href="#">Hamilton Park</a>
                    </li>
                    <li>
                      <a href="#">Heartland Village</a>
                    </li>
                    <li>
                      <a href="#">Huguenot</a>
                    </li>
                    <li>
                      <a href="#">Lighthouse Hill</a>
                    </li>
                    <li>
                      <a href="#">Livingston</a>
                    </li>
                    <li>
                      <a href="#">Manor Heights</a>
                    </li>
                    <li>
                      <a href="#">Mariners Harbor</a>
                    </li>
                    <li>
                      <a href="#">Meiers Corners</a>
                    </li>
                    <li>
                      <a href="#">Midland Beach</a>
                    </li>
                    <li>
                      <a href="#">New Brighton</a>
                    </li>
                    <li>
                      <a href="#">New Dorp</a>
                    </li>
                    <li>
                      <a href="#">New Springville</a>
                    </li>
                    <li>
                      <a href="#">Oakwood</a>
                    </li>
                    <li>
                      <a href="#">Old Place</a>
                    </li>
                    <li>
                      <a href="#">Old Town</a>
                    </li>
                    <li>
                      <a href="#">Pleasant Plains</a>
                    </li>
                    <li>
                      <a href="#">Port Ivory</a>
                    </li>
                    <li>
                      <a href="#">Port Richmond</a>
                    </li>
                    <li>
                      <a href="#">Prince's Bay</a>
                    </li>
                    <li>
                      <a href="#">Randall Manor</a>
                    </li>
                    <li>
                      <a href="#">Richmond Valley</a>
                    </li>
                    <li>
                      <a href="#">Richmondtown</a>
                    </li>
                    <li>
                      <a href="#">Rosebank</a>
                    </li>
                    <li>
                      <a href="#">Rossville</a>
                    </li>
                    <li>
                      <a href="#">Saint George</a>
                    </li>
                    <li>
                      <a href="#">Sandy Ground</a>
                    </li>
                    <li>
                      <a href="#">Shore Acres</a>
                    </li>
                    <li>
                      <a href="#">Silver Lake</a>
                    </li>
                    <li>
                      <a href="#">South Beach</a>
                    </li>
                    <li>
                      <a href="#">Stapleton Heights</a>
                    </li>
                    <li>
                      <a href="#">Stapleton</a>
                    </li>
                    <li>
                      <a href="#">Sunnyside</a>
                    </li>
                    <li>
                      <a href="#">Todt Hill</a>
                    </li>
                    <li>
                      <a href="#">Tompkinsville</a>
                    </li>
                    <li>
                      <a href="#">Tottenville Beach</a>
                    </li>
                    <li>
                      <a href="#">Tottenville</a>
                    </li>
                    <li>
                      <a href="#">Travis</a>
                    </li>
                    <li>
                      <a href="#">Ward Hill</a>
                    </li>
                    <li>
                      <a href="#">West New Brighton</a>
                    </li>
                    <li>
                      <a href="#">Westerleigh</a>
                    </li>
                    <li>
                      <a href="#">Willowbrook</a>
                    </li>
                    <li>
                      <a href="#">Woodrow</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
