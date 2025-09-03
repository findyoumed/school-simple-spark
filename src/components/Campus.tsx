import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, BookOpen, Award } from "lucide-react";

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

export default Campus;