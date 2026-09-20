export type TabType = 'Home' | 'About' | 'Projects' | 'Blog' | 'Contact';

export interface Track {
  title: string;
  artist: string;
  src: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  color: string;
  status: string;
  github: string;
  image?: string;
}

export interface WorkItemData {
  color: string;
  title: string;
  desc: string;
}

export interface RecentProjectData {
  title: string;
  sub: string;
  color: string;
  tags: string[];
}
