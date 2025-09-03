import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import libraryImage from "@/assets/library-interior.jpg";
import scienceLabImage from "@/assets/science-lab.jpg";

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

export default Departments;