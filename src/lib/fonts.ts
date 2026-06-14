import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export { GeistSans, GeistMono };

export const fontVariables = [
  instrumentSerif.variable,
  GeistSans.variable,
  GeistMono.variable,
].join(" ");
