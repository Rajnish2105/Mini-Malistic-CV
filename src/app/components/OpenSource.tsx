import { Link } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label="Active project indicator"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
}

/**
 * Card component displaying project information
 */
function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-3"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Project description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["opensource"];
}

/**
 * Section component displaying all side projects
 */
export function OpenSource({ projects }: ProjectsProps) {
  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <a
        href={
          "https://marked-hoof-ad4.notion.site/Rajnish-Chahar-Github-Contributions-162144b45a8580949181d6be78f75982?pvs=4"
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-label={` Notion docs  (opens in new tab)`}
        className="flex  cursor-pointer items-center space-x-3 text-xl font-bold"
        id="Open Source Contribution Project"
      >
        <p>Open Source Contributions</p>
        <span>
          {" "}
          <Link className="hover:underline" size={20}></Link>{" "}
        </span>
      </a>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
        role="feed"
        aria-labelledby="Open Source Project"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="h-full" // Added h-full here
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link.href : undefined}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
