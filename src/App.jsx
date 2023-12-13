import React from 'react';
import './App.css';

export function App() {
	return (
		<div className={'container'}>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className={'header'}>
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	return (
		<main className={'menu'}>
			<h2>Our menu</h2>
			<Pizza
				name="Pizza Spinaci"
				ingredients="Tomato, mozarella, spinach, and ricotta cheese"
				photoName="pizzas/spinaci.jpg"
				price={10}
			/>
			<Pizza
				name="Pizza Funghi"
				ingredients="Tomato, mozarella, mushrooms, and onion"
				photoName="pizzas/funghi.jpg"
				price={12}
			/>
		</main>
	);
}

function Pizza(props) {
	return (
		<div className="pizza">
			<img src={props.photoName} alt={props.name} />
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>{props.price}</span>
			</div>
		</div>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	return (
		<footer className={'footer'}>
			{new Date().toLocaleTimeString()}. We are current open!
		</footer>
	);
}