// Final production readiness updates
"use client";

const WHATSAPP_NUMBER = "971502474482"; // Ensure WhatsApp number consistency

import { useEffect, useRef, useState } from "react";
import Head from "next/head"; // For SEO metadata

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

export default function Page() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedProduct, setSelectedProduct] = useState(null);
	const featuredRef = useRef(null);

  	useEffect(() => {
    		const interval = setInterval(() => {
        			setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
              		}, 5000);
                  		return () => clearInterval(interval);
                      	}, []);

	const filteredProducts =
		selectedCategory === "All"
			? PRODUCTS
			: PRODUCTS.filter((product) => product.category === selectedCategory);

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
		featuredRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const closeModal = () => setSelectedProduct(null);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	const whatsappMessage = selectedProduct
		? `Enquiry for MikroTik ${selectedProduct.name} (${selectedProduct.category})`
		: "Hello, I’d like to enquire about MikroTik products";

	return (
		<>
			{/* SEO Metadata */}
			<Head>
				<title>NEXLYN Distribution - Trusted MikroTik B2B Distributor</title>
				<meta
					name="description"
					content="NEXLYN Distribution is a trusted B2B distributor of MikroTik products, serving UAE, GCC, and export markets with reliable solutions."
				/>
			</Head>

			<main className="min-h-screen bg-white text-neutral-900">
				{/* Hero Section */}
				<header className="relative w-full h-[400px] bg-white">
					{HERO_SLIDES.map((slide, index) => (
						<div
							key={index}
							className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
								index === currentSlide ? "opacity-100" : "opacity-0"
							}`}
						>
							<h1 className="text-4xl font-bold text-neutral-800 mb-4">
								{slide.title}
							</h1>
							<p className="text-lg text-neutral-600 mb-6">
								{slide.subtitle}
							</p>
							<a
								href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
									"Hello, I’d like to enquire about MikroTik products"
								)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-red-600 text-white text-sm font-medium py-3 px-6 rounded-full hover:bg-red-700 transition"
							>
								WhatsApp Enquiry
							</a>
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

				{/* Categories Section */}
				<section className="mx-auto max-w-6xl px-4 py-14">
					<h2 className="text-2xl font-semibold mb-6">Categories</h2>
					<div className="flex flex-wrap gap-4">
						{CATEGORIES.map((category) => (
							<button
								key={category}
								onClick={() => handleCategoryClick(category)}
								className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
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

				{/* Featured MikroTik Products Section */}
				<section
					ref={featuredRef}
					className="mx-auto max-w-6xl px-4 py-14"
				>
					<h2 className="text-2xl font-semibold mb-2">
						Featured MikroTik Products
					</h2>
					<p className="text-neutral-600 mb-6">
						Popular models requested by resellers & integrators
					</p>
					<div
						className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 transform ${
							filteredProducts.length > 0
								? "opacity-100 translate-y-0"
								: "opacity-0 -translate-y-4"
						}`}
					>
						{filteredProducts.length > 0 ? (
							filteredProducts.map((product) => (
								<div
									key={product.name}
									onClick={() => setSelectedProduct(product)}
									className="rounded-lg border p-6 text-center hover:shadow-md hover:border-neutral-700 transition cursor-pointer transform hover:scale-105"
								>
									<h3 className="text-lg font-bold text-neutral-800 mb-2">
										{product.name}
									</h3>
									<span className="inline-block bg-neutral-100 text-neutral-600 text-xs font-medium px-2 py-1 rounded mb-4">
										{product.category}
									</span>
									<ul className="text-sm text-neutral-600 mb-6">
										{product.specs.map((spec, index) => (
											<li key={index}>• {spec}</li>
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
							))
						) : (
							<p className="text-center text-neutral-500">
								No products available in this category.
							</p>
						)}
					</div>
				</section>

				{/* Product Detail Modal */}
				{selectedProduct && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
						role="dialog"
						aria-modal="true"
						aria-labelledby="product-name"
						onClick={(e) => e.target === e.currentTarget && closeModal()}
					>
						<div
							className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative mx-4 sm:mx-0"
							onClick={(e) => e.stopPropagation()}
						>
							<h3
								id="product-name"
								className="text-2xl font-bold text-neutral-800 mb-4 text-center"
							>
								{selectedProduct.name}
							</h3>
							<span className="inline-block bg-neutral-100 text-neutral-600 text-xs font-medium px-3 py-1 rounded mb-6 text-center">
								{selectedProduct.category}
							</span>
							<ul className="text-sm text-neutral-700 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 list-disc list-inside">
								{selectedProduct.specs.map((spec, index) => (
									<li key={index}>{spec}</li>
								))}
							</ul>
							<div className="flex justify-end gap-4">
								<button
									onClick={closeModal}
									className="text-sm text-neutral-600 hover:text-neutral-800"
								>
									Close
								</button>
								<a
									href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
										`Enquiry for MikroTik ${selectedProduct.name} (${selectedProduct.category})`
									)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block bg-red-600 text-white text-sm font-medium py-3 px-6 rounded-full hover:bg-red-700 transition"
								>
									Enquire on WhatsApp
								</a>
							</div>
						</div>
					</div>
				)}

				{/* Floating WhatsApp Button */}
				<a
					href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
						whatsappMessage
					)}`}
					target="_blank"
					rel="noopener noreferrer"
					className="fixed bottom-5 right-5 bg-red-600 text-white text-sm font-medium py-3 px-4 rounded-full shadow-lg hover:bg-red-700 transition"
					aria-label="Enquire on WhatsApp"
				>
					WhatsApp
				</a>

				{/* Footer */}
				<footer className="border-t mt-14">
					<div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-neutral-600">
						<div className="font-medium text-neutral-800 mb-2">
							NEXLYN DISTRIBUTION LLC
						</div>
						<div className="mb-2">UAE · GCC · Export</div>
						<div className="mb-4">Contact: +971 502474482</div>
						<p className="text-xs text-neutral-500 mb-4">
							MikroTik® is a registered trademark of MikroTik. NEXLYN Distribution LLC is an independent distributor.
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
		</>
	);
}