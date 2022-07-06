import { UploadFile } from 'models/strapi-types';

const useImage = () => {
  const loadImage = (file: UploadFile, requiredSize: string) => {
    return `url(${file.formats[requiredSize].url})`;
  };

  return { loadImage };
};

export { useImage };
