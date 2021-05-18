import Layout from "../../components/Layout";
import Head from "next/head";
import React, { Fragment } from "react";
import Link from "next/link";
import "../../css/article.css";

export default function SixthArticle(props) {
  const meta = {
    title: "Removing a blood stain",
    description: `Company that professionally cleans furniture's upholstery, mattresses, rugs and carpets. Steam cleaning, extracting and removing stains.`,
    keywords:
      "couch cleaning, sofa cleaning, steam cleaning, upholstery cleaning, carpet cleaning, rug cleaning, stain removing, disinfection, professional cleaning, steam extracting, cleaning",
  };
  return (
    <Layout meta={meta}>
      <section className="article">
        <div className="container">
          <div className="tracker">
            <p>
              <Link href={"/"}>
                <a>HOME</a>
              </Link>{" "}
              /{" "}
              <Link href={"/blog"}>
                <a>BLOG</a>
              </Link>{" "}
              / REMOVING A BLOOD STAIN
            </p>
          </div>
          <div className="article__wrapper">
            <h1>
              How to remove blood stains from the sofa?
            </h1>
            <p>
              Blood stains on sofa upholstery are some of the most difficult to
              remove. If the blood is dried, it is unfortunately impossible to
              remove it. Even a professional dry cleaner does not guarantee the
              removal of such stains, as any attempt to remove the blood stain
              can wipe out the upholstery fabric dye or tear it. Therefore, you
              should get rid of even a small drop of blood on the upholstery
              right away. How to remove blood stains from the couch correctly –
              you will learn from our article.
            </p>
            <img src="/images/F1.jpg" alt="A blood stain on white carpet" />
            <h2>Removing blood stains from the couch</h2>
            <p>
              You can clean the blood from the couch with products from the
              medicine cabinet and kitchen or with household cleaners. We
              recommend that you choose the cleaning method based on the type of
              fabric upholstery you have on the sofa. First, we would like to
              introduce some general recommendations which should be followed
              when cleaning any upholstery.
            </p>
            <ol>
              <li>
                A fresh blood stain can only be cleaned with cool water. Heat
                will instantly clot and dry the blood, and you will probably not
                be able to remove it.
              </li>
              <li>
                Using any cleaner, apply it to a cloth, sponge, cotton pad, but
                do not pour it on the upholstery itself. Any liquid will push
                the stain deeper. In addition, not all upholstery fabrics can
                withstand the abundant wetting without consequences in the form
                of deformations.
              </li>
              <li>
                Do not use several cleaners at once. In the pursuit of
                cleanliness, avoid randomly pouring and spraying everything at
                hand on the stain – after such cleaning nothing can save the
                upholstery.
              </li>
              <li>
                Start cleaning the bloodstain from the edges, moving toward the
                center – that way it won't spread to an even larger size.
              </li>
              <li>
                When cleaning, do not put pressure on the stain or rub it hard.
              </li>
              <li>
                Before cleaning the sofa, test the product you are going to
                apply on an inconspicuous area of the upholstery. For example,
                on the back wall or between the armrest and the seat.
              </li>
            </ol>
            <img src="/images/f2.jpg" alt="A white couch in a white room" />
            <h2>Cleaning a blood stain with glycerin</h2>
            <p>
              In the piggy-bank of some housewives, there is another method for
              removing stubborn blood stains – glycerin. It is recommended to
              heat it to 40C in a water bath and apply it to the stained area
              with a cotton pad.
            </p>
            <ul>
              <li>Use warm glycerin to treat the stain.</li>
              <li>Wait for 10-15 minutes.</li>
              <li>Rub it with a cotton pad.</li>
              <li>Drop a little more glycerin on it.</li>
              <li>Repeat the procedure several times.</li>
            </ul>
            <p>
              The stain gradually dissolves, shrinking in size. After washing,
              the item is restored to its original cleanliness. This method is
              ineffective for removing old blood stains and requires time to
              clean the surface of the fabric. But it is suitable for all types
              of fabric and safe to use.
            </p>
            <img src="/images/f3.jpg" alt="Bottles of glycerin" />
            <h2>Starch (corn or potato)</h2>
            <p>
              If you need to remove dirt from silk, wool, viscose or microfiber,
              it is best to use starch. It gently removes stubborn blood without
              damaging the structure and color of the fabric.
            </p>
            <ul>
              <li>Dissolve the starch with water in the ratio of 1:3.</li>
              <li>Apply to the soiled surface.</li>
              <li>Wait until it is completely dry.</li>
              <li>Peel off the starch with a dry napkin.</li>
              <li>Wash in the normal way.</li>
            </ul>
            <p>
              As a result, traces of blood are getting lighter, but it may take
              several such procedures to remove them completely.
            </p>
            <img src="/images/f4.jpg" alt="A bowl of potato starch" />
            <h2>Removing blood with saliva</h2>
            <p>
              We found one unusual way to remove fresh blood that at first
              seemed dubious to our experts – with the help of saliva. It
              contains enzymes that dissolve protein molecules, making the stain
              disappear in front of our eyes. We decided to check – the result
              surpassed all expectations. Saliva is an effective method of
              removing fresh blood from clothes, which really works. You can use
              it immediately after contamination and under almost any
              circumstances. The only drawback is to use it on soiled areas of
              small size.
            </p>
            <img src="/images/f5.jpg" alt="Blood marks on a white fabric" />
            <h2>Jacquard and silk upholstery</h2>
            <p>
              Let's start our review with the most finicky upholstery fabrics
              that need to be taken care of as delicately as possible – silk and
              jacquard. These fabrics are easy to tear, and there is a high risk
              of discoloration in the place of cleaning. In addition, even the
              tiniest drop of blood, getting on such upholstery, can spread to a
              large stain. Therefore, the first thing to do is to prevent
              spillage. As soon as blood gets on silk or jacquard upholstery,
              you should immediately start applying dry, clean cloths to the
              stain to collect the liquid in them. The cloth should be placed on
              the blood, slightly pressing it, then removed and replaced with a
              new one – and so on until the upholstery no longer oozes blood.
              Only then you can proceed directly to the removal of the stain.
            </p>
            <ul>
              <li>
                You can bleach the blood with a light alcohol solution prepared
                in a 1:1 ratio of alcohol and pure water.
              </li>
              <li>
                Do not apply the solution to the upholstery under any
                circumstances! Soak a cotton pad, rag or handkerchief in it and
                apply to the stain for 5-10 minutes.
              </li>
              <li>
                Lightly rub the dirty spot without pressing down hard, and then
                cover it with a dry, clean paper towel.
              </li>
              <li>
                To remove moisture residue – spread salt over the stain for
                20-30 minutes.
              </li>
              <li>Vacuum up any salt residue.</li>
            </ul>
            <p>
              This recipe can be called gentle – it is quite gentle to clean
              silk and jacquard fabrics, but will not save in a situation where
              the stain is even slightly dried up. A stronger remedy is vinegar.
              The principle of its use is the same as that of the alcohol
              solution: moisten a cotton pad, put it on the stain for no more
              than 5 minutes, remove the moisture with salt and the salt itself
              with a vacuum cleaner.
            </p>
            <img
              src="/images/f6.jpg"
              alt="Beautiful red jacquard couch in a bright room"
            />
            <h2>Sofa with cotton, linen, or tapestry upholstery</h2>
            <p>
              Linen, cotton and tapestry have a slightly porous texture, so a
              drop of blood falling on the upholstery immediately penetrates and
              dries in the deeper layers of the fabric. Complicating matters is
              that cotton and linen fabrics are easily destroyed by aggressive
              cleaning agents and repeated mopping. They either tear, or a
              whitish stain from loss of color appears. For these reasons,
              cleaning a stain from a cotton or linen sofa is almost impossible,
              it can only be brightened and made less noticeable. To clean such
              a sofa with minimal risk, use the following recipe.
            </p>
            <ul>
              <li>
                Prepare a light soap solution. It is better to use laundry soap,
                or any other soap, but only white – without dyes, fragrances and
                so on. It is better not to use liquid soap. We also strongly
                recommend not replacing the soap with dishwashing detergents or
                shampoos!
              </li>
              <li>
                Lather up the soap solution thoroughly. Use a clean sponge or
                cloth to get just the foam. No water! And with short jerky
                movements, as if making a soak, apply the foam to the stain.
              </li>
              <li>
                Leave the foam for no more than 15 minutes, then gently remove
                it with a clean, dry cloth or paper towel.
              </li>
              <li>
                Rub the stain lightly with a dry clean sponge without pressing.
              </li>
              <li>
                Sprinkle the treated area with salt for 20-30 minutes to absorb
                the moisture and vacuum the couch.
              </li>
            </ul>
            <img src="/images/f7.jpg" alt="A gray linen sofa bed" />
            <p>
              In most cases, such a simple treatment will practically discolor
              the blood stain if it has just appeared. If the stain has been
              there for some time, however, soapy water may not be enough. In
              that case, it's worth doing the cleaning in another way, using an
              alcohol solution or lemon juice.
            </p>
            <ul>
              <li>
                Prepare an alcohol or lemon solution in a 1:1 ratio with pure
                water.
              </li>
              <li>
                Soak a cotton pad in the solution and apply it to the stain for
                5-10 minutes.
              </li>
              <li>
                Remove the pad and alternately apply clean paper tissues until
                they stop getting wet.
              </li>
              <li>
                Remove excess moisture from the upholstery by spreading salt.
              </li>
              <li>Sweep the salt off the couch, or better vacuum it up.</li>
            </ul>
            <h2>Fleece upholstery (velvet, velour, suede)</h2>
            <p>
              We strongly advise not to clean them yourself pile fabrics such as
              velvet, velour and suede. In addition to the fact that such a
              material is easy to discolor, there is also a high probability of
              wiping the pile itself and get spills – and then the view of
              upholstery will be spoiled irrevocably, with no way to fix it.
            </p>
            <img
              src="/images/f8.jpg"
              alt="A blue velvet couch in a white room"
            />
            <h2>Sofa with flock and chenille upholstery</h2>
            <p>
              Flock and chenille are modern wear-resistant materials of high
              durability. Both fabrics have a small pile. But since they are of
              synthetic origin, it is quite easy to take care of a sofa made of
              flock and chenille: such upholstery is resistant to moisture. It
              does not get wiped out or discolored. To clean such a product
              yourself can be a soapy solution, vinegar, lemon, a mixture of
              vinegar and lemon, alcohol. But there is another more powerful
              recipe, not applicable to other types of upholstery, but safe and
              effective for flock and chenille – cleaning with Ammonia alcohol.
            </p>
            <ul>
              <li>
                Of course, use ammonia only with gloves – it causes burns on the
                skin! Armed with gloves, soak a cotton pad in ammonia and
                intensely rub it on the bloodstain.
              </li>
              <li>
                To remove the unpleasant pungent smell of ammonia, rub the area
                you cleaned with a cotton pad soaked in clean water. Or spray
                the couch with perfume or air freshener, but from as far away as
                possible, and open a window to air it out.
              </li>
            </ul>
            <img src="/images/f9.jpg" alt="A gray flock couch" />
            <h2>Cleaning natural leather upholstery</h2>
            <p>
              Natural and artificial leather is, at first glance, easy to clean.
              A drop of blood falling on them can be wiped off with a damp cloth
              soaked in plain clean water. But if the blood has had even a
              little time to dry, it is likely to have penetrated into the pores
              of the leather, which makes it somewhat difficult to remove.
              Therefore, it is better to wipe the leather sofa from the blood
              with a cotton disc, abundantly moistened in lemon juice or
              hydrogen peroxide. Rub the stain, and then rinse off the
              peroxide/lemon juice residue with a clean, damp cloth.
            </p>
            <img src="/images/f10.jpg" alt="A dark red leather couch" />
            <h2>
              About household cleaners and special stain removers against blood
              stains
            </h2>
            <p>
              The home cleaning product market has thousands of offerings from
              different manufacturers that focus on removing stains of different
              origins. These include all-purpose cleaners and even special stain
              removers for removing blood stains. Perhaps among all these
              products there are effective treatments that will help to return
              cleanliness to your sofa. But we do not recommend experimenting
              with them. Often the stains from the household cleaner are worse
              to remove than the stain itself, which was the reason for using
              it. And in some cases, it is not possible to get rid of them at
              all. Therefore, we will not recommend such agents for cleaning the
              sofa from blood stains. But if you still decide to take the risk
              and trust some manufacturer, use our tips to keep your furniture
              from irreversible damage.
            </p>
            <ul>
              <li>
                Don't believe in the existence of all-purpose cleaners. This is
                a priority rule. Above, we've already addressed the fact that
                each type of upholstery requires a different approach to
                cleaning. It is impossible to imagine one bottle of a cleaner
                that would work for delicate silk and unpretentious flock.
              </li>
              <li>
                To remove a blood stain, you need a product aimed at removing
                dirt specifically of protein origin, which will break down the
                complex protein compound.
              </li>
              <li>
                Be sure to test the cleaner on an inconspicuous area of the
                sofa. Notice if it corrodes the structure or dye of the
                material.
              </li>
              <li>
                And one more rule. Read the product description on the package
                and the enclosed instructions for use!
              </li>
            </ul>
            <img
              src="/images/f11.jpg"
              alt="A gloved hand with a Clorox dispenser"
            />
            <h2>Cleaning blood stains with specialized products</h2>

            <p>
              There are various stain removers on the market, including blood
              stains removal products. For example "Dr. Beckmann". The active
              formula based on enzymes of the German stain remover quickly
              breaks down and removes proteinaceous stains from the fabric. It
              is necessary to pour a few drops of the product on the stain or
              soak the thing in cold water with a stain remover. This product is
              effective, easy to use and does not harm the fibers of the fabric.
              It is suitable for white and colored fabrics, carpets and
              furniture upholstery. This product as well as its analogues are
              rather expensive and difficult to obtain. Usually these stain
              removers are ordered on the Internet or bought in large
              supermarkets.
            </p>
            <img src="/images/f12.jpg" alt="A bottle of Dr. Beckmann solution" />
            <h2>An efficient way to clean your couch without consequences</h2>
            <p>
              Let's summarize all of the above. In the beginning, we have
              analyzed a few simple recipes that, even if not completely remove
              blood stains, at least discolor them and at the same time, are
              guaranteed not to spoil the upholstery. The use of household
              cleaners is possible at the discretion of the housewife, but it is
              necessary to follow the instructions for their use. If you doubt
              in the upholstery type of your furniture and do not want to
              experiment and risk its appearance, it is better not to make any
              attempt to self-clean!
            </p>
            <img
              src="/images/f13.jpg"
              alt="A specialist steam cleaning a gray armchair"
            />
            <p>
              There is a guaranteed way to get your sofa back to cleanliness
              without the risk of ruining it – trust the experts and order
              professional sofa <span className="span-bold">steam cleaning</span> at
              home. The cleaning worker has specialized equipment and experience
              in working with all types of upholstery fabric. He will pick up
              the appropriate cleaning composition and gently carry out cleaning
              of the sofa. And if the upholstery can not be cleaned or there is
              a chance of its damage, will warn you about it.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
