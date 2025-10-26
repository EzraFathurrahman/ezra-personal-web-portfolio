import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  CodeXml,
  Dumbbell,
  ExternalLink,
  Gamepad2,
  Linkedin,
  Mail,
} from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { DockerIcon } from '@/components/icons/docker-icon';
import { GitIcon } from '@/components/icons/git-icon';
import { GithubIcon } from '@/components/icons/github-icon';
import { GitlabIcon } from '@/components/icons/gitlab-icon';
import { GolangIcon } from '@/components/icons/golang-icon';
import { JavaIcon } from '@/components/icons/java-icon';
import { JiraIcon } from '@/components/icons/jira-icon';
import { KafkaIcon } from '@/components/icons/kafka-icon';
import { RedisIcon } from '@/components/icons/redis-icon';
import { SlackIcon } from '@/components/icons/slack-icon';

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    role: 'Software Engineer (Backend)',
    company: 'PT. Phincon',
    period: '',
    description: `● Developed backend services and API bridges for Telkomsel By.U system migration using Golang, Postman, and Wiremock, ensuring smooth integration between legacy and modern systems. ● Engineered microservices using Golang, Kafka, and PostgreSQL for internal orchestration tools, improving system scalability and configuration flexibility. ● Built backend modules for TalentDB using PHP Laravel, MySQL, and Python, enabling AI-assisted resource tracking and improving internal Phincon team assignment workflows. ● Delivered Tibco-based support and documentation for clients such as BPS and Smartfren.`,
  },
  {
    role: 'Backend Developer Intern',
    company: 'PT. Phincon',
    period: '',
    description: `● Designed and developed RESTful APIs and Order Orchestration features using Java Spring Boot, integrated with PostgreSQL and Redis for caching optimization. ● Implemented automated testing suites using JUnit, Mockito, and MockMvc, resulting in a more reliable and maintainable codebase. ● Assisted in building middleware services using TIBCO BusinessWorks, contributing to scalable integrations for enterprise applications. ● Collaborated with senior engineers and product teams to support feature delivery in Agile sprints, sharpening both technical and cross-functional communication skills.`,
  },
  {
    role: 'Information Technology Intern',
    company: 'PT. Bank Rakyat Indonesia (Persero) Tbk.',
    period: '',
    description: `● Developed a web-based project dashboard using Laravel, AlpineJS, and MySQL to assist the compliance division in monitoring internal initiatives. ● Analyzed 18+ monthly datasets from company databases and produced actionable graphical reports using SQL and Excel for the finance division. ● Delivered UI design with Figma and Photoshop, collaborating with tech vendors and finance teams during the internal app development process.`,
  },
];

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const engineeringSkills: Skill[] = [
  { name: 'Golang', icon: <GolangIcon className="size-10" /> },
  { name: 'Java Spring Boot', icon: <JavaIcon className="size-10" /> },
  { name: 'Kafka', icon: <KafkaIcon className="size-10" /> },
  { name: 'Redis', icon: <RedisIcon className="size-10" /> },
];

const devTools: Skill[] = [
  { name: 'Git', icon: <GitIcon className="size-10" /> },
  { name: 'Docker', icon: <DockerIcon className="size-10" /> },
  { name: 'Slack', icon: <SlackIcon className="size-10" /> },
  { name: 'Jira', icon: <JiraIcon className="size-10" /> },
];

type Certification = {
  title: string;
  issuer: string;
  year: string;
  link: string;
};

const certifications: Certification[] = [
  {
    title: 'Java Fundamental',
    issuer: 'Dicoding Indonesia',
    year: '2021',
    link: 'https://bit.ly/JavaCertificateEzra',
  },
  {
    title: 'Software Developer Career Preparation',
    issuer: 'Dicoding Indonesia',
    year: '2022',
    link: 'https://bit.ly/DeveloperPreparation-Ezra',
  },
  {
    title: 'TOEFL ITP English Certification (Score: 593)',
    issuer: 'Central International Education (CIE) Indonesia',
    year: '2023',
    link: 'https://bit.ly/toeflscore-ezra',
  },
];

const interests = [
  { name: 'Sports', icon: <Dumbbell className="size-5" /> },
  { name: 'Reading', icon: <BookOpen className="size-5" /> },
  { name: 'Coding', icon: <CodeXml className="size-5" /> },
  { name: 'Gaming', icon: <Gamepad2 className="size-5" /> },
];

const projects = [
  {
    id: 'project-1',
    title: 'Orchestration Tool',
    description: 'A microservice-based orchestration tool for Telkomsel to manage system configurations.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    imageHint: 'abstract network',
    tags: ['Golang', 'Kafka', 'PostgreSQL'],
  },
  {
    id: 'project-2',
    title: 'TalentDB',
    description: 'An AI-assisted resource tracking platform for internal team assignments at Phincon.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    imageHint: 'team collaboration',
    tags: ['PHP', 'Laravel', 'Python', 'AI'],
  },
  {
    id: 'project-3',
    title: 'BRI Compliance Dashboard',
    description: 'A web dashboard for Bank Rakyat Indonesia to monitor internal project compliance.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    imageHint: 'data dashboard',
    tags: ['Laravel', 'AlpineJS', 'MySQL'],
  },
  {
    id: 'project-4',
    title: 'E-Commerce Backend',
    description: 'Order orchestration and RESTful APIs for an e-commerce platform using Spring Boot.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    imageHint: 'online shopping',
    tags: ['Java', 'Spring Boot', 'Redis'],
  },
];

export default function PortfolioPage() {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === 'profile-picture'
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-screen-xl p-4 sm:p-6 md:p-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Card className="overflow-hidden text-center shadow-lg">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 size-36">
                  {profileImage && (
                    <Image
                      src={profileImage.imageUrl}
                      alt={profileImage.description}
                      width={144}
                      height={144}
                      className="rounded-full object-cover"
                      data-ai-hint={profileImage.imageHint}
                    />
                  )}
                </div>
                <h1 className="font-headline text-3xl font-bold text-primary">
                  Ezra Fathurrahman
                </h1>
                <p className="mt-1 text-muted-foreground">Backend Engineer</p>
                <div className="mt-6 flex justify-center gap-4">
                  <Button asChild variant="outline" size="icon">
                    <Link
                      href="https://github.com/EzraFathurrahman"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link
                      href="https://gitlab.com/ezrafathurn"
                      target="_blank"
                      aria-label="GitLab"
                    >
                      <GitlabIcon className="size-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 lg:col-span-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  Backend engineer specializing in scalable system design and
                  high-performance services. Experienced with Golang, Java Spring
                  Boot, SQL/NoSQL databases, Kafka, and containerized
                  deployments. I enjoy turning complex requirements into clean,
                  resilient, and maintainable backend solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem
                      key={project.id}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card className="h-full overflow-hidden">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full object-cover"
                            data-ai-hint={project.imageHint}
                          />
                          <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="mb-4 text-sm text-muted-foreground">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-12" />
                <CarouselNext className="mr-12" />
              </Carousel>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {experiences.map((exp, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={
                      index === experiences.length - 1 ? 'border-b-0' : ''
                    }
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="font-semibold">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-inside list-disc space-y-2 pl-2 text-muted-foreground">
                        {exp.description
                          .split('●')
                          .filter((point) => point.trim() !== '')
                          .map((point, i) => (
                            <li key={i}>{point.trim()}</li>
                          ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  Engineering Mastery
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-6">
                {engineeringSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    {skill.icon}
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  Development Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-6">
                {devTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    {tool.icon}
                    <p className="text-sm font-medium">{tool.name}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Issued by {cert.issuer} &middot; {cert.year}
                      </p>
                    </div>
                    <Button asChild variant="ghost" size="icon">
                      <Link href={cert.link} target="_blank">
                        <ExternalLink className="size-4" />
                      </Link>
                    </Button>
                  </div>
                  {index < certifications.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                {interests.map((interest) => (
                  <Badge
                    key={interest.name}
                    variant="secondary"
                    className="flex items-center gap-2 py-1.5"
                  >
                    {interest.icon}
                    <span className="text-sm">{interest.name}</span>
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="size-5 text-muted-foreground" />
                  <a
                    href="mailto:ezra.fathurrahman@example.com"
                    className="text-sm hover:text-primary"
                  >
                    ezra.fathurrahman@example.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="size-5 text-muted-foreground" />
                  <a
                    href="#"
                    target="_blank"
                    className="text-sm hover:text-primary"
                  >
                    linkedin.com/in/ezrafathurrahman
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
