export const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6", 
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  // Updated typography for light theme with better contrast
  heroHeadText:
    "font-black text-neutral-900 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 font-['Space_Grotesk']",
  heroSubText:
    "text-neutral-600 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-neutral-900 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-['Space_Grotesk']",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-neutral-500 uppercase tracking-wider font-medium",

  // Additional styles for modern components
  cardTitle:
    "text-neutral-900 font-bold text-[24px] mb-2",
  cardText:
    "text-neutral-600 text-[14px] leading-[24px]",
  
  // Button styles
  primaryButton:
    "bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105",
  secondaryButton:
    "bg-white border-2 border-accent-primary text-accent-primary font-semibold py-3 px-6 rounded-lg hover:bg-accent-primary hover:text-white transition-all duration-300",

  // Glass morphism styles
  glassCard:
    "bg-white/25 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl",
  
  // Modern card styles
  modernCard:
    "bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-200/50",
};