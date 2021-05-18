import "./hero.css";

export default function Hero(){
    return(
		<section className="hero">
		<div className="container nopadding">
		  <header className="hero__header">
			<h1 className="hero__heading">Furniture Cleaning</h1>
			<p className="hero__tagline">
			  Remove dirt, stains and smell<br />
			  with guaranteed satisfaction!
			</p>
			<button className="btn" href="#">Request Service</button>
		  </header>
		  <picture className="hero__image">
			<img
			  src="/images/herocouch.webp"
			  alt="black couch on white rug and green bamboo in vase"
			/>
		  </picture>
		</div>
	  </section>
	)
}