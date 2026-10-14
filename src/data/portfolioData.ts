/**
 * skye | Minimal Devfolio
 * Portfolio Data Constants & Content Architecture
 */

export interface TechTag {
  name: string;
  icon: string;
  tooltip: string;
  category: 'stack' | 'build' | 'vibe';
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  icon?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  handle?: string;
  ariaLabel: string;
  title: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'skye',
    tagline: 'building android mods & clean web tools',
    headingMain: 'crafting clean code,',
    headingSub: 'android mods & bots.',
    bio: '19yo developer from earth. lead @pawjects. crafting android mods, lightweight web apps, and telegram bots with zero bloat.',
    bioLead: 'hey, i’m skye — a 19yo developer building android mods, clean web tools, and automation bots. mostly tinkering with android apps, writing handy telegram bots, and engineering lightweight web tools with pure amoled black and smooth ui. keeping things simple, fast, and chill.',
    quote: '“code hard. live slow.” 🌿',
    avatar: 'assets/avatar.png'
  },
  ecosystem: {
    badge: 'OPEN-SOURCE ECOSYSTEM',
    name: 'PAWJECTS ORGANISATION',
    role: 'lead developer',
    description: 'our central open-source home dedicated to crafting android mods, privacy-first media players, and developer utilities. building software with zero bloat and clean design.',
    hubUrl: 'https://pawjects.github.io/',
    orgUrl: 'https://github.com/pawjects'
  },
  stackTags: [
    { name: 'Python', icon: 'fab fa-python', tooltip: 'Python (Scripts, Automation & Backend)', category: 'stack' },
    { name: 'Kotlin', icon: 'fab fa-android', tooltip: 'Kotlin (Android Apps & Mods)', category: 'stack' },
    { name: 'Java', icon: 'fab fa-java', tooltip: 'Java (Android SDK & Reverse Eng)', category: 'stack' },
    { name: 'JavaScript', icon: 'fab fa-js', tooltip: 'JavaScript (ES6+ Web Applications)', category: 'stack' },
    { name: 'Node.js', icon: 'fab fa-node-js', tooltip: 'Node.js (Server Runtime & CLI)', category: 'stack' },
    { name: 'Express', icon: 'fab fa-bolt', tooltip: 'Express.js (Microservices & APIs)', category: 'stack' },
    { name: 'HTML5', icon: 'fab fa-html5', tooltip: 'HTML5 (Semantic Web Architecture)', category: 'stack' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', tooltip: 'CSS3 (Modern AMOLED & Layouts)', category: 'stack' },
    { name: 'Git', icon: 'fab fa-git-alt', tooltip: 'Git (Version Control & Collaboration)', category: 'stack' },
    { name: 'Linux', icon: 'fab fa-linux', tooltip: 'Linux (Kernel, Bash & Systems)', category: 'stack' },
    { name: 'Smali', icon: 'fas fa-wrench', tooltip: 'Smali (APK Bytecode Disassembly)', category: 'stack' },
    { name: 'Telegram API', icon: 'fab fa-telegram', tooltip: 'Telegram Bot API (Automation & Bots)', category: 'stack' }
  ] as TechTag[],
  buildTags: [
    { name: 'Android Mods', icon: 'fab fa-android', tooltip: 'Custom UI, iOS emojis & Material You', category: 'build' },
    { name: 'Telegram Bots', icon: 'fab fa-telegram-plane', tooltip: 'Automation bots, channel utils & distribution', category: 'build' },
    { name: 'Web Apps', icon: 'fas fa-globe', tooltip: 'Lightweight AMOLED web tools & clients', category: 'build' },
    { name: 'AMOLED UI', icon: 'fas fa-moon', tooltip: 'True-black minimal interfaces & micro-interactions', category: 'build' },
    { name: 'Reverse Eng', icon: 'fas fa-wrench', tooltip: 'Smali bytecode disassembly & APK patching', category: 'build' },
    { name: 'Automation', icon: 'fas fa-terminal', tooltip: 'Python & Bash workflow automation', category: 'build' }
  ] as TechTag[],
  vibeTags: [
    { name: 'AMOLED Setups', icon: 'fas fa-palette', tooltip: 'Deep black aesthetics & minimalist setups', category: 'vibe' },
    { name: 'Slow Living', icon: 'fas fa-wind', tooltip: 'Quiet riverside walks & calm headspace', category: 'vibe' },
    { name: 'Photography', icon: 'fas fa-camera', tooltip: 'Moody frames, architecture & muted tones', category: 'vibe' },
    { name: 'Cats & Tea', icon: 'fas fa-paw', tooltip: 'Patient coding, cats & warm green tea', category: 'vibe' },
    { name: 'Lo-Fi Beats', icon: 'fas fa-headphones', tooltip: 'Mellow background grooves for focus', category: 'vibe' },
    { name: 'Open Source', icon: 'fas fa-code-branch', tooltip: 'Building public tools & community repos', category: 'vibe' }
  ] as TechTag[],
  projects: [
    {
      id: 'pawgram',
      title: 'PawGram',
      badge: 'Android Mod',
      description: 'instagram mod featuring ios emojis, clean typography & material you elements.',
      tags: ['Android Mod', 'Smali'],
      repoUrl: 'https://github.com/pawjects/PawGram'
    },
    {
      id: 'pawtube',
      title: 'PawTube',
      badge: 'Media Player',
      description: 'lightweight, distraction-free video player built for clean, smooth streaming.',
      tags: ['Video', 'Streaming'],
      repoUrl: 'https://github.com/pawjects/PawTube'
    },
    {
      id: 'pawtify',
      title: 'Pawtify',
      badge: 'Web Music',
      description: 'pipedapi-powered web music player with spotify-inspired dark ui.',
      tags: ['Audio', 'PipedAPI'],
      repoUrl: 'https://github.com/pawjects/Pawtify',
      liveUrl: 'https://pawtify-meow.vercel.app',
      liveLabel: 'live',
      icon: 'fas fa-play'
    },
    {
      id: 'pawide',
      title: 'PawIDE',
      badge: 'Dev Sandbox',
      description: 'quick in-browser frontend html/css/js playground & code compiler.',
      tags: ['JavaScript', 'Compiler'],
      repoUrl: 'https://pawjects.github.io/PawIDE/',
      liveUrl: 'https://pawjects.github.io/PawIDE/',
      liveLabel: 'ide',
      icon: 'fas fa-code'
    }
  ] as ProjectItem[],
  socials: [
    {
      id: 'twitter',
      name: 'X (Twitter)',
      url: 'https://x.com/skykoderhere',
      icon: 'fab fa-x-twitter',
      ariaLabel: 'X (Twitter)',
      title: 'X (Twitter)'
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/skykoderhere',
      icon: 'fab fa-github',
      ariaLabel: 'GitHub',
      title: 'GitHub'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/skykoderhere',
      icon: 'fab fa-linkedin-in',
      ariaLabel: 'LinkedIn',
      title: 'LinkedIn'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/skykoderhere',
      icon: 'fab fa-instagram',
      ariaLabel: 'Instagram',
      title: 'Instagram'
    },
    {
      id: 'buymeacoffee',
      name: 'Buy Me a Coffee',
      url: 'https://buymeacoffee.com/skykoderhere',
      icon: 'fas fa-mug-hot',
      ariaLabel: 'Buy Me a Coffee',
      title: 'Buy Me a Coffee (@skykoderhere)'
    },
    {
      id: 'linktree',
      name: 'Linktree',
      url: 'https://linktr.ee/skykoderhere',
      icon: 'fas fa-link',
      ariaLabel: 'Linktree',
      title: 'Linktree (@skykoderhere)'
    }
  ] as SocialLink[]
};
