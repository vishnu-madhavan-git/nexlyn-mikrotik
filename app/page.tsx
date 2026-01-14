"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

// Define types for product
interface Product {
	name: string;
	category: string;
	specs: string[];
}

const WHATSAPP_NUMBER = "971502474482";

const HERO_SLIDES = [
	{
		title: "Enterprise Networking Solutions",
		subtitle: "Official MikroTik distributor for B2B markets",
	},
	{
		title: "UAE, GCC & Export Logistics Strength",
		subtitle: "Fast, reliable delivery for integrators & resellers",
	},
	{
		title: "B2B Pricing + Reseller-Focused Positioning",
		subtitle: "Tailored solutions for your networking needs",
	},
];

const PRODUCTS = [
	{
		name: "hAP ax³",
		category: "Wireless",
		specs: ["Wi-Fi 6", "2.5G", "PoE"],
	},
	{
		name: "CRS418-8P-8G-2S+RM",
		category: "Switching",
		specs: ["PoE", "10G uplinks", "Rackmount"],
	},
	{
		name: "Chateau 5G ax",
		category: "LTE/5G",
		specs: ["5G", "Wi-Fi 6", "Gigabit Ethernet"],
	},
];

const CATEGORIES = ["All", "Wireless", "Switching", "Routing", "LTE/5G"];

// Memoized ProductCard component to prevent unnecessary re-renders
const ProductCard = memo(({ product }: { product: Product }) => (
	<div className="rounded-lg border p-6 text-center hover:shadow-md hover:border-neutral-700 transition transform hover:scale-105">
		<div className="w-full h-40 bg-gradient-to-b from-gray-100 to-gray-200 rounded-md mb-4"></div>
		<h3 className="text-lg font-bold text-neutral-800 mb-2">
			{product.name}
		</h3>
		<span className="inline-block bg-neutral-100 text-neutral-600 text-xs font-medium px-2 py-1 rounded mb-4">
			{product.category}
		</span>
		<ul className="text-sm text-neutral-600 mb-6">
			{product.specs.map((spec) => (
				<li key={spec}>• {spec}</li>
			))}
		</ul>
		<a
			href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
				`Enquiry for MikroTik ${product.name} (${product.category})`
			)}`}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-block bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-red-700 transition"
		>
			Enquire on WhatsApp
		</a>
	</div>
));
ProductCard.displayName = 'ProductCard';

export default function Page() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const featuredRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const filteredProducts = useMemo(
		() =>
			selectedCategory === "All"
				? PRODUCTS
				: PRODUCTS.filter((product) => product.category === selectedCategory),
		[selectedCategory]
	);

	const handleCategoryClick = useCallback((category: string) => {
		setSelectedCategory(category);
		featuredRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<main className="min-h-screen bg-white text-neutral-900">
				{/* Hero Section */}
				<header
					className="relative w-full h-[500px] bg-gradient-to-b from-gray-100 to-white flex items-center justify-center"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-90"></div>
					{HERO_SLIDES.map((slide, index) => (
						<div
							key={index}
							className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
								index === currentSlide ? "opacity-100" : "opacity-0"
							}`}
						>
							<h1 className="text-5xl font-extrabold text-neutral-800 mb-4">
								{slide.title}
							</h1>
							<p className="text-xl text-neutral-600 mb-6">
								{slide.subtitle}
							</p>
							<div className="flex gap-4">
								<a
									href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
										"Hello, I’d like to enquire about MikroTik products"
									)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block bg-red-600 text-white text-lg font-medium py-3 px-6 rounded-full hover:bg-red-700 transition"
								>
									WhatsApp Enquiry
								</a>
								<a
									href="#categories"
									className="inline-block border border-red-600 text-red-600 text-lg font-medium py-3 px-6 rounded-full hover:bg-red-50 transition"
								>
									View Products
								</a>
							</div>
						</div>
					))}

					{/* Pagination Dots */}
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
						{HERO_SLIDES.map((_, index) => (
							<div
								key={index}
								className={`w-3 h-3 rounded-full transition-colors duration-300 ${
									index === currentSlide ? "bg-red-600" : "bg-gray-300"
								}`}
							></div>
						))}
					</div>
				</header>

				{/* Trust / Positioning Strip */}
				<section className="bg-gray-50 py-8">
					<div className="mx-auto max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
						<div className="p-4">
							<div className="text-2xl font-bold text-red-600 mb-2">✓</div>
							<p className="text-sm text-neutral-700">
								Official MikroTik Distributor
							</p>
						</div>
						<div className="p-4">
							<div className="text-2xl font-bold text-red-600 mb-2">✓</div>
							<p className="text-sm text-neutral-700">
								Serving UAE, GCC & Export Markets
							</p>
						</div>
						<div className="p-4">
							<div className="text-2xl font-bold text-red-600 mb-2">✓</div>
							<p className="text-sm text-neutral-700">
								B2B Pricing for Resellers
							</p>
						</div>
						<div className="p-4">
							<div className="text-2xl font-bold text-red-600 mb-2">✓</div>
							<p className="text-sm text-neutral-700">Fast Logistics</p>
						</div>
					</div>
				</section>

				{/* Categories Section */}
				<section id="categories" className="mx-auto max-w-6xl px-4 py-14">
					<h2 className="text-3xl font-semibold mb-6">Categories</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
						{CATEGORIES.map((category) => (
							<button
								key={category}
								onClick={() => handleCategoryClick(category)}
								className={`p-4 rounded-lg border text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md ${
									selectedCategory === category
										? "bg-red-600 text-white border-red-600"
										: "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
								}`}
								aria-pressed={selectedCategory === category}
							>
								{category}
							</button>
						))}
					</div>
				</section>

				{/* Featured Products Section */}
				<section ref={featuredRef} className="mx-auto max-w-6xl px-4 py-14">
					<h2 className="text-3xl font-semibold mb-6">
						Featured MikroTik Products
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{filteredProducts.map((product) => (
							<ProductCard key={product.name} product={product} />
						))}
					</div>
				</section>

				{/* Footer */}
				<footer className="border-t mt-14">
					<div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-neutral-600">
						<div className="font-medium text-neutral-800 mb-2">
							NEXLYN DISTRIBUTION LLC
						</div>
						<div className="mb-2">UAE · GCC · Export</div>
						<div className="mb-4">Contact: +971 502474482</div>
						<p className="text-xs text-neutral-500 mb-4">
							MikroTik® is a registered trademark of MikroTik. NEXLYN Distribution LLC
							is an independent distributor.
						</p>
						<p className="text-xs text-neutral-400">
							Site direction & UX by
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-500 hover:text-neutral-700 ml-1"
							>
								Vishnu Madhav
							</a>
						</p>
					</div>
				</footer>
			</main>
	);
}