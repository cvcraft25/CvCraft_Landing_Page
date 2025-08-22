"use client";

export function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap");
      
      html {
        scroll-behavior: smooth;
      }
      
      .backdrop-blur-xl {
        backdrop-filter: blur(20px);
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .group:hover .group-hover\\:scale-110 {
        transform: scale(1.1);
      }
      
      .group:hover .group-hover\\:translate-x-1 {
        transform: translateX(0.25rem);
      }
    `}</style>
  );
}
