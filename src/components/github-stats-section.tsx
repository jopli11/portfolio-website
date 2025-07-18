"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

// GitHub stats interfaces
interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface GitHubUser {
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

// Icons
const StarIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ForkIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const RepoIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm2 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const UsersIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

// Language color mapping (common GitHub language colors)
const languageColors: { [key: string]: string } = {
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  React: "#61dafb",
  Vue: "#4FC08D",
  PHP: "#4F5D95",
  Go: "#00ADD8",
  Rust: "#dea584",
  Swift: "#ffac45",
  Kotlin: "#F18E33",
  Dart: "#0175C2",
  Shell: "#89e051",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#239120",
  Ruby: "#701516",
  Scala: "#c22d40"
};

// Sample data - in a real app, you'd fetch this from GitHub API
const mockGitHubUser: GitHubUser = {
  login: "jopli11",
  name: "Joel Parfitt",
  public_repos: 31,
  followers: 1,
  following: 2,
  created_at: "2019-02-15T00:00:00Z"
};

const mockTopRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "eventfull_app",
    description: "Flutter event management application",
    html_url: "https://github.com/jopli11/eventfull_app",
    language: "Dart",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-07-15T00:00:00Z"
  },
  {
    id: 2,
    name: "runeraffle",
    description: "Provably fair gaming raffle platform with cryptographic transparency",
    html_url: "https://github.com/jopli11/runeraffle",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-07-10T00:00:00Z"
  },
  {
    id: 3,
    name: "setli",
    description: "Local service discovery platform with Google Places API integration",
    html_url: "https://github.com/jopli11/setli",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-06-15T00:00:00Z"
  },
  {
    id: 4,
    name: "volunteerly",
    description: "Volunteer management and coordination platform",
    html_url: "https://github.com/jopli11/volunteerly",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-05-20T00:00:00Z"
  }
];

const mockLanguageStats = [
  { name: "TypeScript", percentage: 28, color: languageColors.TypeScript },
  { name: "JavaScript", percentage: 22, color: languageColors.JavaScript },
  { name: "Dart", percentage: 18, color: languageColors.Dart },
  { name: "HTML", percentage: 12, color: languageColors.HTML },
  { name: "CSS", percentage: 8, color: languageColors.CSS },
  { name: "PHP", percentage: 7, color: languageColors.PHP },
  { name: "Python", percentage: 5, color: languageColors.Python }
];

export function GitHubStatsSection() {
  const [user] = useState<GitHubUser>(mockGitHubUser);
  const [repos] = useState<GitHubRepo[]>(mockTopRepos);
  const [languages] = useState(mockLanguageStats);
  const [loading] = useState(false);

  // Calculate years since joining GitHub
  const yearsOnGitHub = new Date().getFullYear() - new Date(user.created_at).getFullYear();

  return (
    <section className="relative py-20 px-4 bg-background/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextGenerateEffect 
            words="GitHub Activity" 
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my coding journey, contributions, and open source projects 
            on GitHub over the years.
          </p>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { 
              icon: <RepoIcon />, 
              label: "Public Repositories", 
              value: user.public_repos.toString(),
              color: "from-blue-500 to-blue-600"
            },
            { 
              icon: <UsersIcon />, 
              label: "Contributions (2025)", 
              value: "765",
              color: "from-green-500 to-green-600"
            },
            { 
              icon: <CalendarIcon />, 
              label: "Total Commits", 
              value: "71",
              color: "from-purple-500 to-purple-600"
            },
            { 
              icon: <StarIcon />, 
              label: "Years on GitHub", 
              value: yearsOnGitHub.toString(),
              color: "from-orange-500 to-orange-600"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              📈 Contribution Graph
            </h3>
            
                         {/* GitHub Stats Image - Using GitHub's generated stats */}
             <div className="bg-background/50 rounded-lg p-4 border border-border/30">
               <picture>
                 <source 
                   media="(prefers-color-scheme: dark)" 
                   srcSet={`https://github-readme-stats.vercel.app/api?username=jopli11&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&text_color=888888&icon_color=6366f1&title_color=6366f1`}
                 />
                 <img
                   src={`https://github-readme-stats.vercel.app/api?username=jopli11&show_icons=true&theme=light&hide_border=true&bg_color=00000000&text_color=333333&icon_color=6366f1&title_color=6366f1`}
                   alt="GitHub Stats"
                   className="w-full h-auto rounded-lg"
                   loading="lazy"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                   }}
                 />
               </picture>
             </div>

             {/* Contribution Heatmap */}
             <div className="mt-6">
               <picture>
                 <source 
                   media="(prefers-color-scheme: dark)" 
                   srcSet={`https://github-readme-activity-graph.vercel.app/graph?username=jopli11&theme=react-dark&hide_border=true&bg_color=00000000&color=6366f1&line=6366f1&point=ffffff`}
                 />
                 <img
                   src={`https://github-readme-activity-graph.vercel.app/graph?username=jopli11&theme=minimal&hide_border=true&bg_color=00000000&color=6366f1&line=6366f1&point=333333`}
                   alt="GitHub Activity Graph"
                   className="w-full h-auto rounded-lg"
                   loading="lazy"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                   }}
                 />
                                </picture>
               </div>

               {/* GitHub Streak Stats */}
               <div className="mt-6">
                 <picture>
                   <source 
                     media="(prefers-color-scheme: dark)" 
                     srcSet={`https://github-readme-streak-stats.herokuapp.com/?user=jopli11&theme=dark&hide_border=true&background=00000000&ring=6366f1&fire=6366f1&currStreakLabel=888888&sideLabels=888888&dates=888888&currStreakNum=ffffff&sideNums=ffffff`}
                   />
                   <img
                     src={`https://github-readme-streak-stats.herokuapp.com/?user=jopli11&theme=light&hide_border=true&background=00000000&ring=6366f1&fire=6366f1&currStreakLabel=1a1a1a&sideLabels=1a1a1a&dates=1a1a1a&currStreakNum=000000&sideNums=000000`}
                     alt="GitHub Streak Stats"
                     className="w-full h-auto rounded-lg"
                     loading="lazy"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                     }}
                   />
                 </picture>
               </div>
             </motion.div>

          {/* Top Languages & Repositories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Top Languages */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                🚀 Top Languages
              </h3>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="text-foreground font-medium">{lang.name}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-border/30 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

                             {/* GitHub Top Languages Card */}
               <div className="mt-6">
                 <picture>
                   <source 
                     media="(prefers-color-scheme: dark)" 
                     srcSet={`https://github-readme-stats.vercel.app/api/top-langs/?username=jopli11&layout=compact&theme=dark&hide_border=true&bg_color=00000000&text_color=888888&title_color=6366f1`}
                   />
                   <img
                     src={`https://github-readme-stats.vercel.app/api/top-langs/?username=jopli11&layout=compact&theme=light&hide_border=true&bg_color=00000000&text_color=333333&title_color=6366f1`}
                     alt="Top Languages"
                     className="w-full h-auto rounded-lg"
                     loading="lazy"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                     }}
                   />
                 </picture>
               </div>
            </div>

            {/* Featured Repositories */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                ⭐ Featured Repositories
              </h3>
              
              <div className="space-y-4">
                {repos.slice(0, 3).map((repo, index) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="block p-4 bg-background/50 rounded-lg border border-border/30 hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground hover:text-primary transition-colors">
                        {repo.name}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <StarIcon />
                          {repo.stargazers_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <ForkIcon />
                          {repo.forks_count}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: languageColors[repo.language] || "#888" }}
                      />
                      <span className="text-sm text-muted-foreground">{repo.language}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 text-center">
                <motion.a
                  href="https://github.com/jopli11"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                >
                  View All Repositories →
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Want to Collaborate?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always open to contributing to interesting projects and collaborating 
              with fellow developers. Check out my repositories and let&apos;s build something amazing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/jopli11"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Follow on GitHub
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 