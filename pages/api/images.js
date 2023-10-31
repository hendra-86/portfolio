// pages/api/images.js

import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async (req, res) => {
  const { resources } = await cloudinary.v2.api.resources({ type: 'upload', prefix: 'galery/' });
  const images = resources.map((resource) => ({
    public_id: resource.public_id,
  }));

  res.status(200).json(images);
};
