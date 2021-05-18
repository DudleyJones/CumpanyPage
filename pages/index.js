import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages"
import How from "../components/How"
import Pricelist from "../components/Pricelist"
import Faq from "../components/Faq"
import Why from "../components/Why"
import Abo from "../components/Abo"
import Mblog from "../components/Mblog"
import Head from 'next/head';
import React,{Fragment} from 'react';

export default function MainPage(props) {
	const meta={
		title:'Couch-Cleaning',
		description:`Company that professionally cleans furniture's upholstery, mattresses, rugs and carpets. Steam cleaning, extracting and removing stains.`,
		keywords:'couch cleaning, sofa cleaning, steam cleaning, upholstery cleaning, carpet cleaning, rug cleaning, stain removing, disinfection, professional cleaning, steam extracting, cleaning',
	}
	return (
		<Layout meta={meta}>

			<Hero />
			<Advantages />
			<How />
			<Pricelist />
			<Faq />
			<Why />
			<Abo />
			<Mblog />

		</Layout>
	);
}