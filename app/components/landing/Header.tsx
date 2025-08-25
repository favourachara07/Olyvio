// "use client";

// import { useState, useEffect } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const Navigation = () => {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [previousDropdown, setPreviousDropdown] = useState<string | null>(null);
//     const [isTransitioning, setIsTransitioning] = useState(false);
//     const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [mobileOpenDropdown, setMobileOpenDropdown] = useState<number | null>(null);
//     const [comingSoonOpen, setComingSoonOpen] = useState(false);

//     // Fixed navItems structure to match what's being used in JSX
//     const navItems = [
//         {
//             title: "Home",
//             link: "/",
//             items: [] // Empty items array if no dropdown
//         },
//         {
//             title: "About Us",
//             link: "/about",
//             items: [
//                 { label: "Our Story", href: "/about/story" },
//                 { label: "Team", href: "/about/team" },
//                 { label: "Careers", href: "/about/careers" }
//             ]
//         },
//         {
//             title: "Services",
//             link: "/services",
//             items: [
//                 { label: "Web Development", href: "/services/web-development" },
//                 { label: "Mobile Apps", href: "/services/mobile-apps" },
//                 { label: "Consulting", href: "/services/consulting" }
//             ]
//         },
//         {
//             title: "Pricing",
//             link: "/pricing",
//             items: [
//                 { label: "Basic Plan", href: "/pricing#basic" },
//                 { label: "Pro Plan", href: "/pricing#pro" },
//                 { label: "Enterprise", href: "/pricing#enterprise" }
//             ]
//         },
//     ];

//     // Add scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const handleMouseEnter = (itemTitle: string, hasDropdown: boolean) => {
//         if (closeTimeout) {
//             clearTimeout(closeTimeout);
//             setCloseTimeout(null);
//         }

//         if (!hasDropdown) {
//             setActiveDropdown(null);
//             setPreviousDropdown(null);
//             setIsTransitioning(false);
//             return;
//         }

//         if (activeDropdown && activeDropdown !== itemTitle) {
//             setPreviousDropdown(activeDropdown);
//             setIsTransitioning(true);

//             setTimeout(() => {
//                 setActiveDropdown(itemTitle);
//                 setTimeout(() => {
//                     setIsTransitioning(false);
//                     setPreviousDropdown(null);
//                 }, 50);
//             }, 200);
//         } else {
//             setActiveDropdown(itemTitle);
//             setIsTransitioning(false);
//         }
//     };

//     const handleMouseLeave = () => {
//         const timeout = setTimeout(() => {
//             setActiveDropdown(null);
//             setPreviousDropdown(null);
//             setIsTransitioning(false);
//         }, 300);

//         setCloseTimeout(timeout);
//     };

//     const handleDropdownMouseEnter = () => {
//         if (closeTimeout) {
//             clearTimeout(closeTimeout);
//             setCloseTimeout(null);
//         }
//     };

//     const handleDropdownMouseLeave = () => {
//         const timeout = setTimeout(() => {
//             setActiveDropdown(null);
//             setPreviousDropdown(null);
//             setIsTransitioning(false);
//         }, 300);

//         setCloseTimeout(timeout);
//     };

//     const handleMobileDropdownToggle = (index: number) => {
//         setMobileOpenDropdown(mobileOpenDropdown === index ? null : index);
//     };

//     const closeMobileMenu = () => {
//         setMobileMenuOpen(false);
//     };

//     // Helper function to render dropdown content
//     const renderDropdownContent = (item: typeof navItems[0]) => {
//         if (!item.items || item.items.length === 0) return null;

//         return (
//             <div
//                 className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-100 py-2 z-50"
//                 onMouseEnter={handleDropdownMouseEnter}
//                 onMouseLeave={handleDropdownMouseLeave}
//             >
//                 {item.items.map((subItem, subIndex) => (
//                     <a
//                         key={subIndex}
//                         href={subItem.href}
//                         className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200"
//                     >
//                         {subItem.label}
//                     </a>
//                 ))}
//             </div>
//         );
//     };

//     const getNavbarStyles = () => {
//         const hasDropdown = activeDropdown !== null;

//         if (hasDropdown) {
//             return 'bg-white backdrop-blur-lg shadow-lg border-b border-slate-100';
//         } else if (scrolled) {
//             return 'bg-white backdrop-blur-lg shadow-lg border-b border-slate-100';
//         } else {
//             return 'bg-transparent';
//         }
//     };

//     const getTextStyles = () => {
//         const hasDropdown = activeDropdown !== null;

//         if (hasDropdown || scrolled) {
//             return 'text-slate-700 hover:text-slate-900';
//         } else {
//             return 'text-white/90 hover:text-white';
//         }
//     };

//     const getCTAStyles = () => {
//         const hasDropdown = activeDropdown !== null;

//         if (hasDropdown || scrolled) {
//             return 'bg-black text-white hover:bg-black/90 shadow-lg hover:shadow-xl';
//         } else {
//             return 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg';
//         }
//     };

//     const getLogo = () => {
//         const hasDropdown = activeDropdown !== null;

//         if (hasDropdown || scrolled) {
//             return "/logo.png";
//         } else {
//             return "/logo-white.png";
//         }
//     };

//     const getMobileButtonColor = () => {
//         const hasDropdown = activeDropdown !== null;

//         if (hasDropdown || scrolled) {
//             return 'text-slate-700 hover:bg-slate-100';
//         } else {
//             return 'text-white hover:bg-white/10';
//         }
//     };

//     // Helper function for underline color
//     const getUnderlineColor = () => {
//         const hasDropdown = activeDropdown !== null;

//         if (hasDropdown || scrolled) {
//             return 'bg-slate-700';
//         } else {
//             return 'bg-white';
//         }
//     };

//     return (
//         <div className="relative">
//             {/* Modal for Coming Soon */}

//             {/* Navigation */}
//             <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-0 ${getNavbarStyles()}`}>
//                 <div className="px-4 md:px-10 lg:px-26 xl:px-48 2xl:px-16 mx-auto max-w-screen-2xl">
//                     <div className="flex justify-between items-center h-16 lg:h-12 xl:h-18">
//                         {/* Logo */}
//                         <div className="flex items-center flex-shrink-0">
//                             <Link href="/" className="">
//                                 <div className="flex items-center gap-2 h-4 max-w-fit md:h-3 xl:h-4 2xl:h-6">
//                                     <Image
//                                         src={`${getLogo()}`}
//                                         alt="Heuvera Logo"
//                                         width={120}
//                                         height={120}
//                                         className="transition-all duration-500 ease-in-out h-full w-full object-fit"
//                                     />
//                                 </div>
//                             </Link>
//                         </div>

//                         {/* Desktop Navigation */}
//                         <div
//                             className="hidden lg:flex items-center space-x-[0.5px] xl:space-x-[1px] 2xl:space-x-2"
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             {navItems.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className="relative group h-16 xl:h-18 flex items-center"
//                                     onMouseEnter={() => handleMouseEnter(item.title, item.items.length > 0)}
//                                 >
//                                     <button
//                                         className={`flex items-center space-x-1 px-3 py-2 lg:text-[6px] xl:text-[8px] 2xl:text-sm font-medium rounded-lg transition-colors duration-0 relative whitespace-nowrap ${getTextStyles()}`}
//                                     >
//                                         <span>{item.title}</span>
//                                         {item.items.length > 0 && (
//                                             <ChevronDown
//                                                 className={`size-2 2xl:size-4 flex-shrink-0 transition-transform duration-200 ${activeDropdown === item.title ? "rotate-180" : "rotate-0"}`}
//                                             />
//                                         )}
//                                         <span className={`absolute inset-x-3 bottom-[-11] xl:bottom-[-14] 2xl:bottom-[-11] h-0.5 ${getUnderlineColor()} transition-transform duration-200 origin-left ${activeDropdown === item.title ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
//                                     </button>

//                                     {activeDropdown === item.title && renderDropdownContent(item)}
//                                 </div>
//                             ))}

//                             {/* Contact Link */}
//                             <Link
//                                 href="/contact-us"
//                                 className={`px-3 py-2 text-[6px] xl:text-[8px] 2xl:text-sm font-medium rounded-lg transition-colors duration-0 relative group whitespace-nowrap ${getTextStyles()} hover:bg-opacity-10`}
//                                 onMouseEnter={() => handleMouseEnter('CONTACT', false)}
//                             >
//                                 Contact
//                                 <span className={`absolute inset-x-3 bottom-0 h-0.5 ${getUnderlineColor()} transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100`}></span>
//                             </Link>
//                         </div>

//                         {/* CTA Button and Mobile Menu */}
//                         <div className="flex items-center gap-4 flex-shrink-0">
//                             <button className={`hidden font-poppins lg:flex items-center px-2 xl:px-3 2xl:px-6 py-1 xl:py-1.5 2xl:py-3 text-[6px] xl:text-[8px] 2xl:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${getCTAStyles()}`}>
//                                 Get in Touch
//                             </button>

//                             {/* Mobile menu button */}
//                             <div className="lg:hidden">
//                                 <button
//                                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                                     className={`p-2 rounded-lg transition-colors duration-200 ${getMobileButtonColor()}`}
//                                 >
//                                     {mobileMenuOpen ? (
//                                         <X className="w-6 h-6" />
//                                     ) : (
//                                         <Menu className="w-6 h-6" />
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation */}
//                 {mobileMenuOpen && (
//                     <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
//                         <div
//                             className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
//                             onClick={closeMobileMenu}
//                         />

//                         <div className="relative w-80 max-w-[90vw] h-full bg-white shadow-2xl flex flex-col animate-slide-in-right">
//                             <div className="flex items-center justify-between p-6 border-b border-slate-100">
//                                 <div className="flex items-center space-x-2">
//                                     <span className="text-xl font-light text-slate-900">Heuvera</span>
//                                 </div>
//                                 <button
//                                     className="p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
//                                     onClick={closeMobileMenu}
//                                     aria-label="Close menu"
//                                 >
//                                     <X className="w-5 h-5 text-slate-600" />
//                                 </button>
//                             </div>

//                             <div className="flex-1 px-6 py-4 overflow-y-auto">
//                                 <nav className="space-y-2">
//                                     {navItems.map((item, index) => (
//                                         <div key={index} className="border-b border-slate-50 pb-2 mb-2 last:border-b-0">
//                                             <button
//                                                 className="flex items-center justify-between w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors duration-200 font-medium"
//                                                 onClick={() => handleMobileDropdownToggle(index)}
//                                             >
//                                                 <span className="text-sm">{item.title}</span>
//                                                 {item.items.length > 0 && (
//                                                     <ChevronDown
//                                                         className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === index ? "rotate-180" : ""}`}
//                                                     />
//                                                 )}
//                                             </button>
//                                             {mobileOpenDropdown === index && item.items.length > 0 && (
//                                                 <div className="mt-2 ml-4 space-y-1 animate-fade-in">
//                                                     {item.items.map((subItem, subIndex) => {
//                                                         if (subItem.label === "Careers") {
//                                                             return (
//                                                                 <button
//                                                                     key={subIndex}
//                                                                     className="block px-4 py-2 text-sm text-slate-600 hover:text-[#41a7ad] hover:bg-slate-50 rounded-lg transition-colors duration-200 w-full text-left"
//                                                                     onClick={() => {
//                                                                         setComingSoonOpen(true);
//                                                                         closeMobileMenu();
//                                                                     }}
//                                                                     type="button"
//                                                                 >
//                                                                     {subItem.label}
//                                                                 </button>
//                                                             );
//                                                         }
//                                                         return (
//                                                             <a
//                                                                 key={subIndex}
//                                                                 href={subItem.href}
//                                                                 className="block px-4 py-2 text-sm text-slate-600 hover:text-[#41a7ad] hover:bg-slate-50 rounded-lg transition-colors duration-200"
//                                                                 onClick={closeMobileMenu}
//                                                             >
//                                                                 {subItem.label}
//                                                             </a>
//                                                         );
//                                                     })}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}

//                                     <div className="border-b border-slate-50 pb-2 mb-2">
//                                         <a
//                                             href="#contact"
//                                             className="flex items-center w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors duration-200 font-medium"
//                                             onClick={closeMobileMenu}
//                                         >
//                                             <span className="text-sm">Contact</span>
//                                         </a>
//                                     </div>
//                                 </nav>
//                             </div>

//                             <div className="p-6 border-t border-slate-100 bg-slate-50">
//                                 <button className="flex items-center justify-center w-full bg-black hover:bg-black/80 text-white px-6 py-4 rounded-xl text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
//                                     Get In Touch
//                                 </button>

//                                 <div className="mt-4 text-center">
//                                     <a
//                                         href="mailto:info@heuvera.com"
//                                         className="text-sm text-slate-600 hover:text-[#41a7ad] transition-colors duration-200"
//                                     >
//                                         info@heuvera.com
//                                     </a>
//                                     <p className="text-xs text-slate-500 mt-2"> 2024 Heuvera. All rights reserved.</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <style jsx>{`
//               @keyframes slide-in-right {
//                 from { 
//                   transform: translateX(100%); 
//                   opacity: 0; 
//                 }
//                 to { 
//                   transform: translateX(0); 
//                   opacity: 1; 
//                 }
//               }
//               @keyframes fade-in {
//                 from {  
//                   opacity: 0; 
//                   transform: translateY(-10px); 
//                 }
//                 to { 
//                   opacity: 1; 
//                   transform: translateY(0); 
//                 }
//               }
//               .animate-slide-in-right {
//                 animation: slide-in-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
//               }
//               .animate-fade-in {
//                 animation: fade-in 0.2s ease-out both;
//               }
//             `}</style>
//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// };

// export default Navigation;