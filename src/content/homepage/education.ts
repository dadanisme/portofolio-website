export interface Education {
  institution: string;
  degree: string;
  gpa?: string;
  location: string;
  period: string;
}

export const education: Education[] = [
  {
    institution: "Universitas Pendidikan Indonesia",
    degree: "Electrical Engineering",
    gpa: "3.57/4.00",
    location: "Bandung, Indonesia",
    period: "2019 - 2024",
  },
];
