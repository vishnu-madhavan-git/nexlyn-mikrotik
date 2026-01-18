"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { 
Router, 
Wifi, 
Network, 
Server, 
Radio, 
Globe, 
Truck, 
Box, 
MessageCircle, 
ChevronRight, 
Check, 
Shield, 
Award, 
Cpu,
X,
Phone,
Mail,
MapPin,
Users,
TrendingUp,
Headphones,
Package
} from "lucide-react";

interface Product {
name: string;
category: string;
icon: React.ComponentType<{ className?: string }>;
series: string;
specs: string[];
description: string;
useCase: string;
}

const WHATSAPP_NUMBER = "971502474482";

const HERO_SLIDES = [
{
title: "Official MikroTik® Master Distributor",
subtitle: "Authorized distribution for UAE, GCC & Global Markets",
badge: "Master Distributor"
},
{
title: "Enterprise-Grade Network Infrastructure",
subtitle: "From edge routing to 100G core switching",
badge: "B2B Excellence"
},
{
title: "B2B Distribution Excellence",
subtitle: "Volume pricing, technical training & expert support",
badge: "Certified Partner"
},
];

const PRODUCTS: Product[] = [
{
name: "CCR2004-1G-12S+2XS",
category: "Routers",
icon: Router,
series: "Cloud Core Router",
specs: [
"4-core ARM CPU @ 1.7GHz",
"12x 10G SFP+ ports",
"2x 25G SFP28 ports",
"1GB RAM",
"Dual redundant PSU",
"1U rackmount"
],
description: "ISP backbone router for demanding networks",
useCase: "ISP core routing, data center interconnect, high-throughput edge routing"
},
{
name: "hAP ax³",
category: "Routers",
icon: Router,
series: "Home Access Point",
specs: [
"Wi-Fi 6 (802.11ax)",
"2.4GHz + 5GHz dual-band",
"PoE-in support",
"2.5G Ethernet port",
"4x Gigabit ports",
"USB 3.0 port"
],
description: "Wi-Fi 6 SOHO router with modern connectivity",
useCase: "Small office, home office, retail outlets, guest Wi-Fi"
},
{
name: "RB5009UG+S+IN",
category: "Routers",
icon: Router,
series: "RouterBOARD",
specs: [
"8x Gigabit Ethernet",
"1x 2.5G Ethernet",
"1x 10G SFP+ cage",
"PoE-in & PoE-out",
"Desktop enclosure",
"Quad-core CPU @ 1.4GHz"
],
description: "Universal SMB router with fiber uplink",
useCase: "Enterprise branch, managed network edge, SMB gateway"
},
{
name: "CRS518-16XS-2XQ-RM",
category: "Switches",
icon: Network,
series: "Cloud Router Switch",
specs: [
"16x 25G SFP28 ports",
"2x 100G QSFP28 ports",
"L3 hardware switching",
"1U rackmount",
"Marvell Prestera 98DX8525",
"Hot-swap PSU option"
],
description: "100G enterprise switch for demanding environments",
useCase: "Data center ToR, high-bandwidth aggregation, 100G backbones"
},
{
name: "CRS326-24G-2S+RM",
category: "Switches",
icon: Network,
series: "Cloud Router Switch",
specs: [
"24x Gigabit Ethernet",
"2x 10G SFP+ ports",
"L2/L3 switching",
"1U rackmount",
"RouterOS + SwOS dual boot",
"Non-blocking throughput"
],
description: "24-port managed switch with 10G uplinks",
useCase: "Office networks, IP camera systems, access layer switching"
},
{
name: "CSS610-8G-2S+IN",
category: "Switches",
icon: Network,
series: "Cloud Smart Switch",
specs: [
"8x Gigabit Ethernet",
"2x 10G SFP+ ports",
"SwOS (web managed)",
"Desktop enclosure",
"PoE-in support",
"Fanless design"
],
description: "Compact SMB switch with simple management",
useCase: "Small networks, desktop aggregation, PoE cameras"
},
{
name: "Audience",
category: "Wireless",
icon: Wifi,
series: "Wi-Fi 6 Access Point",
specs: [
"Wi-Fi 6 (802.11ax)",
"Tri-radio design",
"2.4GHz + 5GHz + 5GHz",
"PoE powered",
"Ceiling mount",
"MU-MIMO & OFDMA"
],
description: "Tri-radio professional AP for high-density",
useCase: "Hotels, conference centers, offices, high-capacity venues"
},
{
name: "wAP ax",
category: "Wireless",
icon: Wifi,
series: "Wireless Access Point",
specs: [
"Wi-Fi 6 (802.11ax)",
"Outdoor rated (IP65)",
"2x2 MIMO",
"Gigabit Ethernet",
"PoE-in",
"Compact weatherproof"
],
description: "Outdoor Wi-Fi 6 AP for harsh environments",
useCase: "Outdoor coverage, industrial sites, temporary deployments"
},
{
name: "LHG 5 ac",
category: "Wireless",
icon: Radio,
series: "Light Head Grid",
specs: [
"5GHz 802.11ac",
"Integrated 24.5dBi antenna",
"Long-range PtP links",
"PoE powered",
"Weatherproof housing",
"Dual-chain design"
],
description: "PtP link with integrated high-gain antenna",
useCase: "Point-to-point links, WISP backhaul, remote site connectivity"
},
{
name: "Chateau 5G ax",
category: "5G/LTE",
icon: Globe,
series: "5G Router",
specs: [
"5G NR modem",
"Wi-Fi 6 (802.11ax)",
"4x Gigabit Ethernet",
"Dual SIM slots",
"External antenna ports",
"Desktop enclosure"
],
description: "5G home/office router with Wi-Fi 6",
useCase: "5G primary/failover WAN, remote offices, temporary sites"
},
{
name: "LtAP LTE kit",
category: "5G/LTE",
icon: Globe,
series: "LTE Access Point",
specs: [
"LTE Cat-6 modem",
"Wi-Fi dual-band",
"GPS support",
"Weatherproof",
"Vehicle mounting",
"PoE + DC input"
],
description: "Rugged vehicle LTE AP with GPS",
useCase: "Mobile vehicles, buses, boats, outdoor events"
},
{
name: "S+RJ10",
category: "Accessories",
icon: Box,
series: "SFP+ Module",
specs: [
"10GBASE-T transceiver",
"RJ45 connector",
"Cat6a cable support",
"Up to 30m reach",
"Low power consumption",
"Hot-swappable"
],
description: "10G copper SFP+ module",
useCase: "Short 10G copper links, server connectivity, switch uplinks"
},
{
name: "ACUFL",
category: "Accessories",
icon: Radio,
series: "U.FL Antenna",
specs: [
"Dual external antennas",
"U.FL pigtails",
"2.4GHz + 5GHz",
"Magnetic mount base",
"3m cables",
"Omnidirectional pattern"
],
description: "External antenna set for better signal",
useCase: "Improving LTE/5G signal, remote antenna placement, difficult RF environments"
},
];

const CATEGORIES = ["All", "Routers", "Switches", "Wireless", "5G/LTE", "Accessories"];

const generateProductInquiry = (product: Product): string => {
const topSpecs = product.specs.slice(0, 3).map(spec => `• ${spec}`).join('\n');

return `Hello NEXLYN Distribution,

I'm interested in the *${product.name}* (${product.series}) for business deployment.

*Product Details:*
${topSpecs}

*Use Case:* ${product.useCase}

*Please provide:*
• Reseller/volume pricing tiers
• Current stock availability
• Lead time for export orders
• Technical documentation
• Warranty & RMA process

*Company/Business:* [Your company name]
*Estimated quantity:* [Quantity needed]
*Delivery location:* [Country/Region]

Thank you!`;
};

const generateCategoryInquiry = (category: string): string => {
const categoryProducts = PRODUCTS
.filter(p => p.category === category)
.map(p => `• ${p.name} (${p.series})`)
.join('\n');

return `Hello NEXLYN Distribution,

I'm interested in your *${category}* product category for business deployment.

*Products of interest:*
${categoryProducts}

*Please provide:*
• Product comparison & specifications
• Volume pricing structure
• Stock availability across range
• Recommended solutions for my use case

*Company/Business:* [Your company name]
*Use Case:* [Describe your needs]
*Estimated quantity:* [Quantity needed]
*Delivery location:* [Country/Region]

Thank you!`;
};

const generateResellerInquiry = (): string => {
return `Hello NEXLYN Distribution,

I'm interested in becoming an *authorized MikroTik reseller* in your territory.

*Business Information:*
• Company name: [Your company]
• Current business: [Your current focus]
• Territory: [City/Region]
• Existing certifications: [Any relevant certs]
• Estimated monthly volume: [Units or value]

*I would like information about:*
• Reseller program requirements
• Volume pricing tiers
• Technical training opportunities
• Marketing support available
• RMA & warranty procedures

Thank you!`;
};

const generateGeneralInquiry = (): string => {
return `Hello NEXLYN Distribution,

I'm interested in learning more about your MikroTik distribution services.

*Please provide information about:*
• Product catalog & availability
• B2B pricing structure
• Export capabilities
• Technical support services
• Reseller program

*Company/Business:* [Your company name]
*Territory:* [Country/Region]

Thank you!`;
};

const ProductCard = memo(({ product, onClick }: { product: Product; onClick: () => void }) => {
const Icon = product.icon;

return (
<div 
className="rounded-lg border border-neutral-200 p-6 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer bg-white"
onClick={onClick}
>
<div className="w-full h-40 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-md mb-4 flex items-center justify-center">
<Icon className="w-20 h-20 text-neutral-400" />
</div>
<h3 className="text-lg font-bold text-neutral-800 mb-1">
{product.name}
</h3>
<p className="text-xs text-neutral-500 mb-3">{product.series}</p>
<span className="inline-block bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
{product.category}
</span>
<p className="text-sm text-neutral-600 mb-4 line-clamp-2">
{product.description}
</p>
<ul className="text-xs text-neutral-600 mb-6 space-y-1">
{product.specs.slice(0, 3).map((spec) => (
<li key={spec} className="flex items-start">
<Check className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
<span>{spec}</span>
</li>
))}
</ul>
<button
className="w-full inline-flex items-center justify-center bg-red-600 text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-red-700 transition group"
>
View Details
<ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
</button>
</div>
);
});
ProductCard.displayName = 'ProductCard';

const ProductModal = memo(({ product, onClose }: { product: Product; onClose: () => void }) => {
const Icon = product.icon;
const whatsappMessage = generateProductInquiry(product);

useEffect(() => {
document.body.style.overflow = 'hidden';
return () => {
document.body.style.overflow = 'unset';
};
}, []);

return (
<div 
className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
onClick={onClose}
>
<div 
className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
onClick={(e) => e.stopPropagation()}
>
<div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-start justify-between z-10">
<div className="flex-1">
<h2 className="text-2xl font-bold text-neutral-900 mb-1">{product.name}</h2>
<p className="text-sm text-neutral-600">{product.series}</p>
</div>
<button
onClick={onClose}
className="ml-4 p-2 hover:bg-neutral-100 rounded-lg transition"
aria-label="Close modal"
>
<X className="w-5 h-5 text-neutral-600" />
</button>
</div>

<div className="p-6">
<div className="w-full h-48 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg mb-6 flex items-center justify-center">
<Icon className="w-32 h-32 text-neutral-300" />
</div>

<span className="inline-block bg-red-50 text-red-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
{product.category}
</span>

<p className="text-lg text-neutral-700 mb-6">{product.description}</p>

<div className="mb-6">
<h3 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center">
<Cpu className="w-5 h-5 mr-2 text-red-600" />
Technical Specifications
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
{product.specs.map((spec, index) => (
<div key={index} className="flex items-start">
<Check className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
<span className="text-sm text-neutral-700">{spec}</span>
</div>
))}
</div>
</div>

<div className="mb-6">
<h3 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center">
<Server className="w-5 h-5 mr-2 text-red-600" />
Typical Use Cases
</h3>
<p className="text-sm text-neutral-700 bg-neutral-50 p-4 rounded-lg">
{product.useCase}
</p>
</div>

<a
href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
target="_blank"
rel="noopener noreferrer"
className="w-full inline-flex items-center justify-center bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition group"
>
<MessageCircle className="w-5 h-5 mr-2" />
Inquire via WhatsApp
</a>
</div>
</div>
</div>
);
});
ProductModal.displayName = 'ProductModal';

export default function Page() {
const [currentSlide, setCurrentSlide] = useState(0);
const [selectedCategory, setSelectedCategory] = useState("All");
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const featuredRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
const interval = setInterval(() => {
setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
}, 6000);
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

const handleProductClick = useCallback((product: Product) => {
setSelectedProduct(product);
}, []);

const handleCloseModal = useCallback(() => {
setSelectedProduct(null);
}, []);

const resellerMessage = useMemo(() => generateResellerInquiry(), []);
const generalMessage = useMemo(() => generateGeneralInquiry(), []);

return (
<main className="min-h-screen bg-white text-neutral-900">
{selectedProduct && (
<ProductModal product={selectedProduct} onClose={handleCloseModal} />
)}

<header className="relative w-full h-[600px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-red-900 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.3),transparent_50%)]"></div>

{HERO_SLIDES.map((slide, index) => (
<div
key={index}
className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 px-4 ${
index === currentSlide ? "opacity-100" : "opacity-0"
}`}
>
<div className="inline-block bg-red-600/20 backdrop-blur-sm text-red-200 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-red-500/30">
{slide.badge}
</div>
<h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 text-center max-w-4xl leading-tight">
{slide.title}
</h1>
<p className="text-xl md:text-2xl text-neutral-200 mb-8 text-center max-w-2xl">
{slide.subtitle}
</p>
<div className="flex gap-4 flex-wrap justify-center">
<a
href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`}
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
>
<MessageCircle className="w-5 h-5 mr-2" />
WhatsApp Enquiry
</a>
<a
href="#categories"
className="inline-flex items-center border-2 border-white/30 backdrop-blur-sm text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition"
>
View Products
<ChevronRight className="w-5 h-5 ml-1" />
</a>
</div>
</div>
))}

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
{HERO_SLIDES.map((_, index) => (
<button
key={index}
onClick={() => setCurrentSlide(index)}
className={`w-3 h-3 rounded-full transition-all duration-300 ${
index === currentSlide ? "bg-red-500 w-8" : "bg-white/40 hover:bg-white/60"
}`}
aria-label={`Go to slide ${index + 1}`}
></button>
))}
</div>
</header>

<section className="bg-neutral-50 py-12 border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
<div className="p-4 bg-white rounded-lg shadow-sm">
<Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
<p className="text-sm font-semibold text-neutral-800">Official Distributor</p>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm">
<Globe className="w-8 h-8 text-red-600 mx-auto mb-2" />
<p className="text-sm font-semibold text-neutral-800">UAE, GCC & Export</p>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm">
<TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-2" />
<p className="text-sm font-semibold text-neutral-800">B2B Pricing</p>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm">
<Truck className="w-8 h-8 text-red-600 mx-auto mb-2" />
<p className="text-sm font-semibold text-neutral-800">Fast Logistics</p>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm">
<Headphones className="w-8 h-8 text-red-600 mx-auto mb-2" />
<p className="text-sm font-semibold text-neutral-800">Expert Support</p>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm">
<Package className="w-8 h-8 text-red-600 mx-auto mb-2" />
<p className="text-sm font-semibold text-neutral-800">Genuine Stock</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="mx-auto max-w-7xl px-4">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold text-neutral-900 mb-4">Why Partner with NEXLYN</h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
Join hundreds of successful resellers and system integrators across the region
</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center p-6">
<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
<Award className="w-8 h-8 text-red-600" />
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Authorized Master Distributor</h3>
<p className="text-sm text-neutral-600">
Direct partnership with MikroTik ensures authenticity, warranty support, and priority access to new products.
</p>
</div>
<div className="text-center p-6">
<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
<Users className="w-8 h-8 text-red-600" />
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Technical Training & Certification</h3>
<p className="text-sm text-neutral-600">
Access to MikroTik training programs, certifications, and ongoing technical webinars for your team.
</p>
</div>
<div className="text-center p-6">
<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
<TrendingUp className="w-8 h-8 text-red-600" />
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Volume Pricing & Incentives</h3>
<p className="text-sm text-neutral-600">
Competitive tiered pricing structure, reseller discounts, and quarterly incentive programs.
</p>
</div>
<div className="text-center p-6">
<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
<Headphones className="w-8 h-8 text-red-600" />
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Dedicated Support Channel</h3>
<p className="text-sm text-neutral-600">
Direct WhatsApp support, pre-sales consultation, and post-sales technical assistance from our team.
</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-br from-red-50 to-neutral-50">
<div className="mx-auto max-w-4xl px-4 text-center">
<h2 className="text-4xl font-bold text-neutral-900 mb-4">Become a Reseller Partner</h2>
<p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
Join our growing network of authorized MikroTik resellers. Get access to exclusive pricing, technical support, and marketing resources.
</p>
<div className="bg-white rounded-xl shadow-lg p-8 mb-6">
<div className="grid md:grid-cols-3 gap-6 mb-8">
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">1</div>
<h3 className="font-semibold text-neutral-900 mb-2">Apply</h3>
<p className="text-sm text-neutral-600">Contact us via WhatsApp with your business details</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">2</div>
<h3 className="font-semibold text-neutral-900 mb-2">Evaluate</h3>
<p className="text-sm text-neutral-600">We review your application and discuss partnership tiers</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">3</div>
<h3 className="font-semibold text-neutral-900 mb-2">Activate</h3>
<p className="text-sm text-neutral-600">Get onboarded with pricing, training, and first order</p>
</div>
</div>
<a
href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(resellerMessage)}`}
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center bg-green-600 text-white text-lg font-semibold py-4 px-8 rounded-lg hover:bg-green-700 transition shadow-md hover:shadow-lg"
>
<MessageCircle className="w-5 h-5 mr-2" />
Apply for Reseller Program
</a>
</div>
</div>
</section>

<section id="categories" className="mx-auto max-w-7xl px-4 py-16">
<h2 className="text-4xl font-bold text-neutral-900 mb-8 text-center">Product Categories</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
{CATEGORIES.map((category) => (
<button
key={category}
onClick={() => handleCategoryClick(category)}
className={`p-6 rounded-xl border-2 text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md ${
selectedCategory === category
? "bg-red-600 text-white border-red-600 shadow-lg scale-105"
: "border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
}`}
aria-pressed={selectedCategory === category}
>
{category}
</button>
))}
</div>
</section>

<section ref={featuredRef} className="mx-auto max-w-7xl px-4 py-16 bg-neutral-50">
<h2 className="text-4xl font-bold text-neutral-900 mb-8 text-center">
Featured MikroTik Products
</h2>
<p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
Explore our curated selection of enterprise-grade networking equipment
</p>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
{filteredProducts.map((product) => (
<ProductCard key={product.name} product={product} onClick={() => handleProductClick(product)} />
))}
</div>
</section>

<footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div>
<h3 className="text-white text-lg font-bold mb-4">NEXLYN Distribution</h3>
<p className="text-sm text-neutral-400 mb-4">
Official MikroTik Master Distributor serving UAE, GCC, and international markets with genuine products and expert support.
</p>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Products</h4>
<ul className="space-y-2 text-sm">
<li><a href="#categories" className="hover:text-red-400 transition">Routers</a></li>
<li><a href="#categories" className="hover:text-red-400 transition">Switches</a></li>
<li><a href="#categories" className="hover:text-red-400 transition">Wireless</a></li>
<li><a href="#categories" className="hover:text-red-400 transition">5G/LTE</a></li>
<li><a href="#categories" className="hover:text-red-400 transition">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">About Us</a></li>
<li><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(resellerMessage)}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">Reseller Program</a></li>
<li><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">Support</a></li>
<li><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start">
<Phone className="w-4 h-4 mr-2 mt-0.5 text-red-400" />
<span>+971 502474482</span>
</li>
<li className="flex items-start">
<MapPin className="w-4 h-4 mr-2 mt-0.5 text-red-400" />
<span>UAE · GCC · Export</span>
</li>
<li>
<a 
href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`}
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center text-green-400 hover:text-green-300 transition"
>
<MessageCircle className="w-4 h-4 mr-2" />
WhatsApp Us
</a>
</li>
</ul>
</div>
</div>

<div className="border-t border-neutral-800 pt-8 text-center">
<p className="text-sm text-neutral-500 mb-3">
MikroTik® is a registered trademark of Mikrotik SIA. NEXLYN Distribution LLC is an independent authorized distributor.
</p>
<p className="text-xs text-neutral-600">
© {new Date().getFullYear()} NEXLYN Distribution LLC. All rights reserved. | 
<span className="ml-1">
Site direction & UX by Vishnu Madhav
</span>
</p>
</div>
</div>
</footer>

<a
href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`}
target="_blank"
rel="noopener noreferrer"
className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-110 z-40"
aria-label="Contact via WhatsApp"
>
<MessageCircle className="w-6 h-6" />
</a>
</main>
);
}
