const getCroppedImageUrl = (url: string): string => {
  const target = "media/";
  const croppedUrl = url.replace(target, `${target}crop/600/400/`);
  return croppedUrl;
};

export default getCroppedImageUrl;
