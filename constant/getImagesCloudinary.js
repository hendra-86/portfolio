import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async (req, res) => {
  try {
    const { resources } = await cloudinary.v2.api.resources({
      type: 'upload',
      prefix: 'galery/', // Ganti dengan nama folder Anda
    });

    const images = resources.map((resource) => ({
      public_id: resource.public_id,
      url: resource.secure_url, // Menyimpan URL gambar
      alt: resource.original_filename, // Menyimpan nama file sebagai alt text
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
};
