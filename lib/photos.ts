// Free photos from Unsplash (Unsplash License), loaded from their CDN.
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

export const photos = {
  hero: unsplash("1758272133719-959319bc2364"),
  common: unsplash("1752491027824-e9006cd14046"),
  rooms: {
    dorm: unsplash("1709805619372-40de3f158e83"),
    double: unsplash("1629079447930-9ff0af14385e"),
    family: unsplash("1790774883982-7136ce871bc5"),
  } as Record<string, string>,
  experiences: {
    beach: unsplash("1723142282970-1fd415eec1ad"),
    hoian: unsplash("1563354860-799d15199ac3"),
    marble: unsplash("1707807562742-bf69e7feaf4e"),
    motorbike: unsplash("1521060722990-50641f4bf465"),
  } as Record<string, string>,
};
