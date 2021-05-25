import "./advantages.css";
import sprite from '../../public/images/sprite.svg';

export default function Advantages(){
    return(
		<section className="advantages block--skewed-left">
			<div className="container">
				<p className="advantages__text">
				The Couch-Cleaning Company offers you professional services for
				cleaning of sofas, rugs, <br className="br" />
				mattresses and other upholstered furniture right at your residence or
				in your office. <br className="br" />
				We work throughout New York City five boroughs areas.
				</p>
				<h2 className="advantages__heading">
				Upholstery cleaning by Couch-Cleaning
				</h2>

				<div className="icons-row">
					<div id="one" className="advantages__container">
						<span className="icon-container">
						<svg id="hand" className="icon">
							<use href={sprite + "#convenient"} />
						</svg>
						</span>
						<h3>Convenient</h3>
						<p className="advantages__text">
						We make cleaning right at the place. We are working seven days a
						week and can schedule a better time.
						</p>
					</div>

					<div id="two" className="advantages__container">
						<span className="icon-container">
						<svg id="leaf" className="icon">
							<use href={sprite + "#safe"} />
						</svg>
						</span>
						<h3>Safe</h3>
						<p className="advantages__text">
						We are using human and pet friendly solutions, completely
						extracting them from fabric.
						</p>
					</div>

					<div id="three" className="advantages__container">
						<span className="icon-container">
						<svg id="diamond" className="icon">
							<use href={sprite + "#efficient"} />
						</svg>
						</span>
						<h3>Efficient</h3>
						<p className="advantages__text">
						Our methods of cleaning 99% effectively removes any stains from
						rugs, mattresses and upholstery.
						</p>
					</div>

					<div id="four" className="advantages__container">
						<span className="icon-container">
						<svg id="shield" className="icon">
							<use href={sprite + "#guarantee"} />
						</svg>
						</span>
						<h3>Guarantee</h3>
						<p className="advantages__text">
						We care about quality, not about time. We Won't leave until get
						the best possible result!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};