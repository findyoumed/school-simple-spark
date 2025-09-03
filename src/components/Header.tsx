import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">대</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">서울대학교</h1>
            <p className="text-sm text-muted-foreground">Seoul National University</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            홈
          </a>
          <a href="#departments" className="text-foreground hover:text-primary transition-colors">
            학과소개
          </a>
          <a href="#campus" className="text-foreground hover:text-primary transition-colors">
            캠퍼스
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            연락처
          </a>
        </nav>
        
        <Button variant="outline" className="hidden md:block">
          입학안내
        </Button>
      </div>
    </header>
  );
};

export default Header;