import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, BookOpen, Award, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";
import libraryImage from "@/assets/library-interior.jpg";
import scienceLabImage from "@/assets/science-lab.jpg";

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

const departments = [
  {
    name: "공과대학",
    description: "최첨단 기술과 혁신적 연구로 미래 산업을 선도합니다",
    majors: ["컴퓨터공학과", "전기전자공학과", "기계공학과", "화학공학과"],
    image: scienceLabImage,
    students: "1,200명"
  },
  {
    name: "인문대학",
    description: "깊이 있는 사고와 폭넓은 교양을 바탕으로 인재를 양성합니다",
    majors: ["국어국문학과", "영어영문학과", "철학과", "사학과"],
    image: libraryImage,
    students: "800명"
  },
  {
    name: "경영대학",
    description: "글로벌 비즈니스 리더를 양성하는 최고의 교육 프로그램을 제공합니다",
    majors: ["경영학과", "회계학과", "국제경영학과", "마케팅학과"],
    image: libraryImage,
    students: "900명"
  }
];

const Departments = () => {
  return (
    <section id="departments" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">학과 소개</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            다양한 분야의 전문 교육과 연구를 통해 미래 인재를 양성합니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={dept.image} 
                  alt={dept.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-foreground">{dept.name}</CardTitle>
                  <Badge variant="secondary">{dept.students}</Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {dept.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">주요 학과</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.majors.map((major, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {major}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const campusInfo = [
  {
    icon: MapPin,
    title: "캠퍼스 위치",
    description: "서울특별시 관악구에 위치한 넓고 아름다운 캠퍼스",
    details: "지하철 2호선 서울대입구역에서 버스로 10분"
  },
  {
    icon: Users,
    title: "재학생 수",
    description: "학부생과 대학원생을 포함한 총 재학생 수",
    details: "약 28,000명의 학생들이 재학 중"
  },
  {
    icon: BookOpen,
    title: "도서관",
    description: "국내 최대 규모의 대학 도서관 시설",
    details: "24시간 개방, 500만권 이상의 장서 보유"
  },
  {
    icon: Award,
    title: "연구 성과",
    description: "세계적 수준의 연구 성과와 논문 발표",
    details: "연간 5,000편 이상의 국제 논문 발표"
  }
];

const Campus = () => {
  return (
    <section id="campus" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">캠퍼스 안내</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            최고의 교육 환경과 연구 시설을 갖춘 아름다운 캠퍼스를 소개합니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-shadow duration-300 border-border">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-3">
                  {info.description}
                </CardDescription>
                <p className="text-sm font-medium text-accent">
                  {info.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">캠퍼스 투어 신청</h3>
          <p className="text-lg mb-6 text-white/90">
            직접 캠퍼스를 둘러보고 우리 대학의 멋진 시설들을 체험해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <p className="text-sm text-white/80">투어 시간</p>
              <p className="font-semibold">매일 오전 10시, 오후 2시</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-white/80">소요 시간</p>
              <p className="font-semibold">약 90분</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-white/80">신청 방법</p>
              <p className="font-semibold">홈페이지 또는 전화 접수</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Departments />
      <Campus />
      <Footer />
    </div>
  );
};

export default Index;