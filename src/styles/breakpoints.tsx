// Definición de tipos
type BreakpointSizes = {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
};

type DeviceMediaQueries = {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
};

const sizes:BreakpointSizes = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};
export const Device:DeviceMediaQueries = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};