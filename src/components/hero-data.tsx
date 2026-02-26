import { 
  ReactIcon, 
  MongoDBIcon, 
  GraphQLIcon, 
  NodeJSIcon, 
  DockerIcon, 
  MongooseIcon,
  HomeIcon,
  ProjectsIcon,
  ContactIcon,
  UserIcon,
  SkillsIcon,
  GitHubIcon
} from "./icons";

export const navItems = [
  { title: "Home", icon: <HomeIcon />, href: "#" },
  { title: "About", icon: <UserIcon />, href: "#about" },
  { title: "Projects", icon: <ProjectsIcon />, href: "#projects" },
  { title: "Skills", icon: <SkillsIcon />, href: "#skills" },
  { title: "GitHub", icon: <GitHubIcon />, href: "#github" },
  { title: "Contact", icon: <ContactIcon />, href: "#contact" },
];

export const heroTechIcons = [
  <ReactIcon key="react" />,
  <MongoDBIcon key="mongodb" />,
  <GraphQLIcon key="graphql" />,
  <NodeJSIcon key="nodejs" />,
  <DockerIcon key="docker" />,
  <MongooseIcon key="mongoose" />
];
