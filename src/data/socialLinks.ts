import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { personal } from "@/data/personal";

export const SOCIAL_LINK_LIST = [
  { href: personal.social.github, icon: FaGithub, label: "GitHub" },
  { href: personal.social.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  { href: personal.social.twitter, icon: FaTwitter, label: "Twitter" },
  { href: personal.social.email, icon: Mail, label: "Email" },
];
