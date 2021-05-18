import Layout from "../components/Layout";
import '../css/error.css';
import Link from 'next/link';

export default function Custom404() {

	return (
		<>
			<div className="error">
				<h1 className="error__heading">Error 404</h1>
				<p className="error__text">This page does not exist! You will be redirected on Home Page in 5 Seconds. <br />If not redirected automatically click <Link href={'/'}><a>here.</a></Link></p>
			</div>
		</>
	)
}