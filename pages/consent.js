import Layout from "../components/Layout";
import Head from "next/head";
import React, { Fragment } from "react";
import Link from "next/link";

export default function Consent(props) {
  const meta = {
    title: "Couch-Cleaning | Consent",
    description: `Company that professionally cleans furniture's upholstery, mattresses, rugs and carpets. Steam cleaning, extracting and removing stains.`,
    keywords:
      "couch cleaning, sofa cleaning, steam cleaning, upholstery cleaning, carpet cleaning, rug cleaning, stain removing, disinfection, professional cleaning, steam extracting, cleaning",
  };
  return (
    <Layout meta={meta}>
      <section className="consent">
        <div className="container">
          <div className="tracker">
            <p>
              <Link href={"/"}>
                <a>HOME</a>
              </Link>{" "}
              /{" "}
              <Link href={"/contacts"}>
                <a>CONTACTS</a>
              </Link>{" "}
              / CONSENT
            </p>
          </div>
          <div className="consent__wrapper">
            <h1>Consent to Personal Data Processing</h1>

            <ol>
              <li>
                By clicking “Next Step” button, I hereby agree and express my
                voluntary, unequivocal and informed consent that my personal
                data which I have provided to Couch-Cleaning Company,
                incorporated and registered in the USA with company number
                1290876776, whose registered office is at 2220 65th Str., Ste.
                155, Brooklyn, NY, 11204, USA, shall be processed by OOOO-Lounge
                for the purposes of carrying out know your customer (KYC)
                procedures.
              </li>
              <li>
                My name and other means of identification for the purposes of
                obtaining this consent shall be established in the course of the
                processing of my personal data carried out in accordance with
                this consent.
              </li>
              <li>
                I hereby acknowledge and agree that Couch-Cleaning Company shall
                process my personal data on behalf of and by means and for the
                purposes as determined by the organization, with which I wish to
                establish a business relationship after completion of KYC
                procedures, i.e. the data controller, unless Couch Cleaning
                Company is the only data controller. In any case, I hereby
                acknowledge and agree that I know the details and address of the
                data controller.
              </li>
              <li>
                I hereby acknowledge and agree that processing shall be done for
                the purpose of identification and client diligence compliance in
                accordance with the laws governing the intended business
                relationship.
              </li>
              <li>
                I hereby acknowledge and agree that Couch-Cleaning Company shall
                process my personal data by means of automated reading,
                verification of the authenticity and other automated processing
                of photos and scanned copies of documents and with further check
                against the data in multiple databases, including inter alia
                International politically exposed persons (PEPs) and Sanctions,
                Country Specific Sanctions Lists, Criminal Lists and Financial
                Lists.
              </li>
              <li>
                I hereby acknowledge and agree that Couch-Cleaning Company shall
                process my personal data only on the servers physically located
                within the USA.
              </li>
              <li>
                I hereby acknowledge and agree that the personal data may be
                disclosed to entities associated with Couch-Cleaning Company to
                achieve the purpose of processing under this Consent. The
                contractors to which Couch-Cleaning Company disclose personal
                data do implement appropriate technical and organisational
                measures to ensure safety of the personal data.
              </li>
              <li>
                The consent for the processing expressed hereby covers the
                following operations: collection, recording, organisation,
                structuring, storage, adaptation or alteration, retrieval,
                consultation, use, disclosure by transmission, dissemination or
                otherwise making available, alignment or combination,
                restriction, erasure or destruction.
              </li>
              <li>
                The consent for the processing expressed hereby includes the
                following personal data: name and surname, phone number,
                registered address, banking details, facial image, email
                address.
              </li>
              <li>
                I hereby represent that I have been informed of the fact that my
                biometric personal data, i.e. my facial image, will be processed
                and I hereby give my voluntary, unequivocal and informed consent
                hereto.
              </li>
              <li>
                I hereby represent that I have been informed about my right to:
                <ul>
                  <li>Withdraw my consent to personal data processing;</li>
                  <li>Access and adjust my personal data;</li>
                  <li>
                    Make a justified demand in writing for the blocking of the
                    processing of my data due to particular situation;
                  </li>
                  <li>Object to the processing of my personal data;</li>
                  <li>
                    Object to the transfer of my personal data, including the
                    right to object to engaging any of Couch-Cleaning Company's
                    contractors to processing my personal data;
                  </li>
                  <li>
                    Object to being subject to a decision based solely on
                    automated processing/profiling;
                  </li>
                  <li>
                    Make a justified demand in writing to erase my personal data
                    subject to applicable laws;
                  </li>
                  <li>
                    All of which rights may exercised by contacting
                    Couch-Cleaning Company with a respective notice at
                    couch-cleaning@gmail.com.
                  </li>
                </ul>
              </li>
              <li>
                I hereby represent that I have carefully read all the above
                provisions and do voluntarily and unequivocally agree with them.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </Layout>
  );
};
