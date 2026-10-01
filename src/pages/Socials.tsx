import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

type XIconProps = React.SVGProps<SVGSVGElement>;

const XIcon = ({ className }: XIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
  </svg>
);

const Socials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Socials</h1>
      </div>

      <div className="space-y-6">
        <motion.a
          href="https://instagram.com/yungshugo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 bg-black p-6 rounded-xl hover:bg-gray-900 transition-colors"
        >
          <Instagram className="w-6 h-6 text-green-500" />
          <div>
            <h2 className="font-bold">Instagram</h2>
          </div>
        </motion.a>

        <motion.a
          href="https://x.com/86shugo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 bg-black p-6 rounded-xl hover:bg-gray-900 transition-colors"
        >
          <XIcon className="w-6 h-6 text-green-500" />
          <div>
            <h2 className="font-bold">X</h2>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Socials;
