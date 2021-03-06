import Link from "next/link";
import Layout from "../components/Layout";
import FeedbackItem from "../components/FeedbackItem";
import "../css/feedback.css";
import Head from "next/head";

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
              <Link href={"/"}>
                <a>HOME</a>
              </Link>{" "}
              / FEEDBACKS
            </p>
          </div>
          <h1>Our Feedbacks</h1>
          <div className="feedback__list">
            <FeedbackItem
              author="Camilla Heny"
              date="Jan. 07, 2021"
              feedback="I'm very satisfied with the service provided. My sofa is
                        like new now. The guy cleanned it from all the sides
                        that there is no hair or dust left. There were two oily
                        stains which were successfully removed. Thank you guys I
                        will order you again."
            />
            <FeedbackItem
              author="George McOneel"
              date="Jan. 09, 2021"
              feedback="Guys you are amaizing, thanks for a great job... My
              carpet and couch are fresh and shiny. The worker is also
              cleaned after himself and moved the couch back on its
              place. Thanx... I like it"
            />
            <FeedbackItem
              author="Maria Goldberg"
              date="Jan. 10, 2021"
              feedback="First of all I was surprised that a worker weared a gas
              mask, eyewear and gloves. I thought that he was about
              using some rough chemicals but he explainned to me that
              it is for my safety against covid virus :) That was
              funny but the job was done great and I have no
              complaints."
            />
            <FeedbackItem
              author="Josh Sanders"
              date="Jan. 12, 2021"
              feedback="I used to use another company before who cleaned my
              couch and left it wet, after it dried all stains and
              dust were still there. So, I decided to call
              Couch-Cleaning to see if they can do a better job. It
              took them quite longer but they definetly extracted all
              water from the couch and cleaned all stains out. They
              were not in rush and did their job smoothly and well.
              Now I know where to call."
            />
            <FeedbackItem
              author="Andy Flarigen"
              date="Jan. 13, 2021"
              feedback="Thanks for cleaning out my furniture! I had 2
              mattresses, loveseat, couch and armchair. Everything is
              clean like new and Dudley also gave me a good discount.
              The worker came on time but the job itself took some
              time but it worth it. Nice company, I'll refere it to my
              cousin."
            />
            <FeedbackItem
              author="Ron Santos"
              date="Jan. 18, 2021"
              feedback="Nice customer service. Came on time. Cleaned properly
              and well. I thought it's gonna be noisy but it wasn't.
              Thank you."
            />
            <FeedbackItem
              author="Hans-Peter Schultz"
              date="Jan. 21, 2021"
              feedback="We did a good deal. After Alex cleaned one side of my
              mattress he told me that it is going to stay a little
              wet. I was a kind of disapointed but we decided to flip
              the mattress and he came back the very next day to clean
              the other side for the same price. I think it is a good
              solution so I don't need to sleep on wet. I don't think
              that any other company would do the same. The
              Couch-Cleaning Co. cares about their clients."
            />
            <FeedbackItem
              author="Ashish Dev"
              date="Jan. 24, 2021"
              feedback="I'm using such cleaning for the first time. I was just
              not ready to throw my couch and mattresses out for
              buying new ones. I thought it would be cheaper to clean
              them. The company gave me a discount and I also added my
              rug and 2 chairs to clean. So I'm very satisfied with
              this friendly company. Good luck!"
            />
            <FeedbackItem
              author="Elena Wirz"
              date="Jan. 29, 2021"
              feedback="Thank ya guys!!! finaly my allergy is gone... It was my
              dusty carpet, now I know. nex time I'll order you to
              clean my mattresses cause I didn't know that you do
              them."
            />
            <FeedbackItem
              author="Abdul Khasan"
              date="Feb. 03, 2021"
              feedback="God bless you! Very good cleaning of my sofa corner. My
              wife is happy as well as me. It is good idea to clean a
              sofa once in a while."
            />
            <FeedbackItem
              author="Nic Stanley"
              date="Feb. 05, 2021"
              feedback="Hey, just wanna give a feedback. I called to this
              company and asked them if they clean a car interior.
              They agreed to do this for $300. I'm about to sell my
              car and wanted the interior look as best as possible and
              the guy did it. It took him 4 hours but it's a kinda
              private job that no one will accomplish on any car-wash.
              Ofcourse I live in a private house and he did it on my
              driveway. We used an extension cord to power up the
              guy's machine. Good job, now I can raise the price on my
              car in about a grand."
            />
            <FeedbackItem
              author="Svetlana Ermishina"
              date="Feb. 10, 2021"
              feedback="I moved from one place to another and movers packed my
              couches in blankets. It was raining outside and somehow
              my furniture got dirty and wet. Thanks god I found this
              company. Otherwise I didn't know of what to do. I was
              thinking about to throw my couches away, but now they
              are like new."
            />
            <FeedbackItem
              author="Mosh Levy"
              date="Feb. 12, 2021"
              feedback="I own my small restaurant and decided to refresh the
              chairs. The guys did a wonderful job. Pretty quick and
              cheap. I will order them again."
            />
            <FeedbackItem
              author="Jannett Lee"
              date="Feb. 13, 2021"
              feedback="The worker from this company was wery nice, polite and
              professional. He cleaned my two rugs and did it very
              well. I'm happy about the service and will definitely
              suggest couch-cleaning to my friends."
            />
            <FeedbackItem
              author="Samantha Heylog"
              date="Feb. 15, 2021"
              feedback="I used two different companies before Couch Cleaning,
              and this is 4 sure the better one. I can honestly
              recommend them if you wanna see your upholstery fresh
              and shiny. The worker did the job as long as it needed
              to remove even those tiny stains i had on my couch. He
              asked me to check everything carefully before he lived.
              I was satisfied and gave him a good tip. Hope he left
              happy as me."
            />
            <FeedbackItem
              author="Tamy Banks"
              date="Feb. 16, 2021"
              feedback="I have three kids who like to play around with paint,
              markers and stuff. A week ago I found my bright couch
              painted with red ink or something, I was trying
              different cleaning solutions to remove the stains but it
              got even worse. I called another company first but for
              some reason they kept rescheduling me on a later time
              and finally refused to come that day. So, I called
              Couch-Cleaning and they came at a time that was
              convenient for me. The worker removed that red spot away
              and cleaned the couch overally. Everything was just
              fine. Thank you for your work and being on time."
            />
            <FeedbackItem
              author="Tim Levinski"
              date="Feb. 17, 2021"
              feedback="Excellent company, they know how to do their job.
              Especially I was surprized when Alex, I believe it was
              the worker's name, found my gold chain in the couch that
              I lost a year ago and honestly gave it back to me. He
              cleaned the couch and the armchair. Both are clean and
              fresh. Thank you again for your business."
            />
            <FeedbackItem
              author="Alexander Chedia"
              date="Feb. 19, 2021"
              feedback="I work in a Moving company and once in a while our
              clients getting rid of needless furniture. This time it
              was a sofa bed that was looking and functioning nice I
              decided to bring it home. Of course I couldn't sleap on
              sombodies bed and needed to clean it. But instead of
              doing it myself I called couch cleaning company. They
              have professional tools which I'm not going to buy or
              rent for cleaning only my sofa bed. It was reasonable
              and affordable to me. Now I can sleep safely on my sofa
              since I know it's clean and disinfected. Respect to the
              couch cleaning company and thanx for a good job!"
            />
            <FeedbackItem
              author="Michael Kulimanoff"
              date="Feb. 21, 2021"
              feedback="Hello. I live in a huge family my mom, wife and three
              kids. We don't have enough money to replace all the
              mattresses at home and It was good idea to clean them. I
              called this company, guys came and cleaned all our beds
              very well. I saved a good amount of money and nervous
              cells :))) Thank you Couch-Cleaning!"
            />
            <FeedbackItem
              author="Andrei Lanes"
              date="Feb. 22, 2021"
              feedback="The Couch-Cleaning Company is very professional. They
              use different solutions for different cases. I watched a
              guy pre-vacuumed my carpet and couch, then he used a
              foamy spray to extract all filth and dust. After he
              finished, he found several stains and used different
              solutions and methods to remove them. For my carpet he
              used a special spray and an iron and the stain was gone.
              For my couch he used a kind of a stain remover and
              cleaned the stain without an iron but with a brush and
              an extractor. I was watching the whole process and was
              satisfied. Thanks for the company and a man who worked
              with my items."
            />
            <FeedbackItem
              author="Aaron Espinosa"
              date="Feb. 24, 2021"
              feedback="I ordered this company to clean my outside patio
              furniture. Since it was cold outside we decided to clean
              it indoor. The cleaning person took all the pillows that
              I stored in a plastic trunk, and cleaned them very well
              so they look like new now. The worker did a wonderful
              job and I appreciate it. Thank You."
            />
            <FeedbackItem
              author="Maria Gonzales"
              date="Feb. 26, 2021"
              feedback="Very nice company, very good cleaning. My baby's bed is
              fresh and clean, like a new one. Thank you for service
              and being on time!"
            />
            <FeedbackItem
              author="Alice Winter"
              date="Feb. 28, 2021"
              feedback="When I moved to my grandma's house, I found a nice
              antique loveseat on the attic. It looked dusty and
              smelled like an old laundry bag. I was afraid to clean
              it myself cause I have now idea how to do it and where
              to start. I decided to search for a professional company
              online and found the Couch-Cleaning. A man came to help
              very quickly and spent few hours to restore my
              grandmother's loveseat. Of course it doesn't look like
              new but became much more cleaner and doesn't stink
              anymore. Thank ya for help."
            />
            <FeedbackItem
              author="Curtis McKormack"
              date="Mar. 01, 2021"
              feedback="Absolutely great company. I recommend using it. Very
              punctual personnel and hard working crew. They cleaned 7
              items I had without complainings and price tricks. They
              left only after I had checked everything and was
              satisfied with their work. Thank you again and stay
              safe."
            />
            <FeedbackItem
              author="Bella Florinski"
              date="Mar. 03, 2021"
              feedback="Good job Couch-Cleaning, I'm satisfied with your work.
              Thank you for cleaning my dining set. I have no
              complaint regarding cleaning, the only issue is that the
              driver was looking for a parking for an hour."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};
