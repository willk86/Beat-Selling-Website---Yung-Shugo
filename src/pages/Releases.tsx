import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

type Platform = {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
};

const SpotifyIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.5 17.32a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.6 11.66 1.34.35.21.47.68.25 1.03zm1.47-2.86a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.96-1.4a.94.94 0 1 1-.54-1.79c4.36-1.32 9.79-.68 13.5 1.57.44.27.58.87.3 1.31zm.13-3.13c-3.85-2.29-10.29-2.5-14-1.38a1.12 1.12 0 1 1-.65-2.15c4.25-1.28 11.22-1.05 15.74 1.6a1.12 1.12 0 1 1-1.14 1.93z" />
  </svg>
);

const AppleMusicIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z" />
  </svg>
);

const PLATFORMS: Platform[] = [
  {
    id: "spotify",
    name: "Spotify",
    href: "https://open.spotify.com/intl-fr/artist/26TTjQmYfQG42mXw16LEMr",
    icon: SpotifyIcon,
  },
  {
    id: "apple-music",
    name: "Apple Music",
    href: "https://music.apple.com/us/artist/yung-shugo/1785091350",
    icon: AppleMusicIcon,
  },
];

const Releases = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
          Releases
        </h1>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {PLATFORMS.map((platform, index) => {
          const Icon = platform.icon;

          return (
            <motion.a
              key={platform.id}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col gap-4 bg-black p-6 rounded-xl shadow-lg border border-green-900/30 hover:bg-gray-900 hover:border-green-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <Icon className="w-10 h-10 text-green-500" />
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-green-500 transition-colors" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-white">
                  Listen on {platform.name}
                </h2>
              </div>
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center space-y-4 border border-green-900/30 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-white">New music coming soon</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Follow along for release announcements.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Releases;
