export type ProjectStatus = "live" | "paused" | "study";

export type Project = {
  slug: string;
  title: string;
  role: string;
  problem: string;
  context: string;
  solution: string;
  result?: string;
  stack: string[];
  github?: string;
  live?: string;
  image: string;
  imageAlt: string;
  status: ProjectStatus;
  /** Aparece no carrossel principal (ordem do array define a ordem dos slides). */
  highlight?: boolean;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type PracticeItem = {
  label: string;
  title: string;
  body: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  id: string;
  label: string;
};
