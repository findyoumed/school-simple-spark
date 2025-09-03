import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          미래를 이끄는 교육
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          창의적 사고와 혁신적 연구로 세계를 선도하는 대학교입니다
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
            입학 상담
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
            캠퍼스 투어
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;