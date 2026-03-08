import { useState } from "react";

const Navbar = ({ scrollToSection, refs, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLink = (section) => {
    const isActive = activeSection === section;
    
    // ✅ Debug: Log active section
    console.log("Active Section:", activeSection, "Current:", section, "Is Active:", isActive);
    
    return `relative text-lg font-semibold transition-all duration-300 cursor-pointer
      ${isActive ? "text-purple-800" : "text-gray-50 hover:text-purple-800"}
      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px]
      after:bg-purple-800 after:transition-all after:duration-300
      ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;
  };

  const navItems = [
    { name: "Home", ref: refs.homeRef, id: "home" },
    { name: "About", ref: refs.aboutRef, id: "about" },
    { name: "Projects", ref: refs.projectsRef, id: "projects" },
    { name: "Contact", ref: refs.contactRef, id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full h-16  backdrop-blur-md border-b border-gray-800/30 flex justify-between items-center px-8 md:px-16 z-[100]">
      {/* Logo Section */}
      <div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" 
        onClick={() => scrollToSection(refs.homeRef)}
      >
        <span className="text-[#22c55e] text-2xl font-mono font-bold">@</span>
        <span className="text-white text-xl font-bold tracking-tight">
          Amitranjan <span >Malik</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={navLink(item.id)}
            onClick={() => scrollToSection(item.ref)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#030712] border-b border-gray-800 flex flex-col items-center py-4 gap-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`text-sm font-medium ${
                activeSection === item.id ? "text-[#22c55e]" : "text-gray-400"
              }`}
              onClick={() => {
                scrollToSection(item.ref);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;