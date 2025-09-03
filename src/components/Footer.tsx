import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">대</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">서울대학교</h3>
                <p className="text-sm text-primary-foreground/80">Seoul National University</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              미래를 이끄는 교육과 연구로 사회 발전에 기여하는 세계적 수준의 대학교입니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">학사 정보</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">입학 안내</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">학과 소개</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">교육과정</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">장학금 안내</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">연락처</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>서울특별시 관악구 관악로 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>02-880-5114</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@snu.ac.kr</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">소셜 미디어</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 서울대학교. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;