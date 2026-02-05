import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetailContent } from "./ProjectDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Lei Zhou`,
    description: project.tagline || project.description,
    openGraph: {
      title: `${project.title} | Lei Zhou`,
      description: project.tagline || project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
