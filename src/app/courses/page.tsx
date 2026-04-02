import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teaching & Courses',
  description: 'Information on courses taught by Dr. RuiDong Qi（祁瑞东）, including syllabi and resources.', // Replace
};

// Mock Data - Replace with actual data
const coursesData = [
  {
    id: "cs501",
    title: "Room 0212, Excellence Building: Object-Oriented Analysis and Design",
    term: "Fall 2025",
    level: "Senior undergraduate student",
    description: "This course introduces the fundamental principles and applications of object-oriented methods in software development. Topics include object-oriented concepts, UML modeling, requirements analysis, system design, design patterns, and case studies. By the end of the course, students will be able to apply object-oriented modeling and design techniques to analyze, design, and implement medium-scale software systems.",
    syllabusUrl: "#", // Replace with actual URL or path to PDF
    coursePageUrl: "#", // Replace with actual URL to Canvas/Moodle/etc.
    resources: [
      { name: "Lecture Slides (Topic 1)", url: "#" },
      { name: "Core Reading List", url: "#" },
    ]
  },
  {
    id: "cs305",
    title: "Room 309, Graduate Student Building: Software System Analysis and Design",
    term: "Spring 2026",
    level: "Undergraduate",
    description: "Software System Analysis and Design is the essential course that takes you from writing code to building architectures. It goes beyond syntax and feature implementation, systematically teaching you how to transform vague business requirements into stable, scalable software designs. The course integrates traditional structured methods with mainstream object-oriented approaches (OOA/OOD), guiding you hands-on through UML modeling (use case diagrams, class diagrams, sequence diagrams, etc.), requirements analysis, system architecture design (MVC/microservices), database design, and UI design, while introducing agile development practices to handle changing requirements. Whether you are preparing for your graduation project, interviewing at top tech companies, or aspiring to become a system analyst or software architect, this course will equip you with holistic vision and engineering thinking — design defines your ceiling, architecture shapes your future. Choose this course, and take the first step toward becoming a true software engineer.",
    syllabusUrl: "#", // Replace
    coursePageUrl: "#", // Replace
    resources: [
      { name: "Full Course Notes (PDF)", url: "#" },
      { name: "Assignment Guidelines", url: "#" },
    ]
  },
  /*{
    id: "ds101",
    title: "DS 101: Data Science Fundamentals (Guest Lectures)",
    term: "Fall 2023",
    level: "Undergraduate Seminar",
    description: "Contributed guest lectures on 'Text as Data: NLP for Data Scientists' and 'Ethical Challenges in Algorithmic Decision Making' as part of this interdisciplinary data science seminar.",
    resources: [
      { name: "Guest Lecture Slides: NLP", url: "#" },
      { name: "Guest Lecture Slides: Ethics", url: "#" },
    ]
  },*/
];

export default function CoursesPage() {
  return (
    <div className="space-y-12">
      <SectionTitle>Teaching & Courses</SectionTitle>
      <div className="space-y-8">
        {coursesData.map(course => (
          <Card key={course.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1">
                <CardTitle className="text-xl md:text-2xl text-primary/90">{course.title}</CardTitle>
                <span className="text-sm text-muted-foreground font-medium bg-secondary px-2 py-1 rounded-md w-fit mt-1 sm:mt-0">{course.level}</span>
              </div>
              <CardDescription className="text-md font-medium text-accent pt-1">{course.term}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap gap-3 items-center mb-4">
                {course.syllabusUrl && course.syllabusUrl !== "#" && (
                  <Button variant="outline" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                    <a href={course.syllabusUrl} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" /> View Syllabus
                    </a>
                  </Button>
                )}
                {course.coursePageUrl && course.coursePageUrl !== "#" && (
                  <Button variant="outline" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                    <a href={course.coursePageUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Course Page
                    </a>
                  </Button>
                )}
              </div>
              {course.resources.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground/90 mb-2">Course Resources:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {course.resources.map(resource => (
                       <li key={resource.name} className="text-sm">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                           {resource.name} <Download className="inline-block h-3 w-3 ml-1" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
