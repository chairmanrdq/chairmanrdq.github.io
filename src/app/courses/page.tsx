import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { courses } from '@/lib/courses-data';
import { isValidHttpUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Teaching & Courses',
  description: `Courses taught by ${siteConfig.piFullName}, including syllabi and learning resources.`,
};

export default function CoursesPage() {
  return (
    <div className="content-page-calm space-y-12">
      <section className="space-y-8 page-section-reveal" style={{ animationDelay: '0ms' }}>
        <SectionTitle>Teaching & Courses</SectionTitle>
        <div className="space-y-8">
          {courses.map((course) => {
            const validResources = course.resources.filter((r) => isValidHttpUrl(r.url));
            return (
              <Card
                key={course.id}
                className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1">
                    <CardTitle className="text-primary/90">{course.courseName}</CardTitle>
                    <span className="mt-1 w-fit rounded-md border border-border/70 bg-muted px-2 py-1 text-sm font-medium text-foreground/85 sm:mt-0">
                      {course.level}
                    </span>
                  </div>
                  <CardDescription className="text-md font-medium text-accent pt-1">
                    {course.term} · {course.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="type-body mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-3 items-center mb-4">
                    {isValidHttpUrl(course.syllabusUrl) && (
                      <Button
                        variant="outline"
                        asChild
                        className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
                      >
                        <a href={course.syllabusUrl} target="_blank" rel="noopener noreferrer">
                          <BookOpen className="mr-2 h-4 w-4" /> View Syllabus
                        </a>
                      </Button>
                    )}
                    {isValidHttpUrl(course.coursePageUrl) && (
                      <Button
                        variant="outline"
                        asChild
                        className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
                      >
                        <a href={course.coursePageUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Course Page
                        </a>
                      </Button>
                    )}
                  </div>
                  {validResources.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground/90 mb-2">Course Resources</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {validResources.map((resource) => (
                          <li key={resource.name} className="text-sm">
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:underline"
                            >
                              {resource.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
