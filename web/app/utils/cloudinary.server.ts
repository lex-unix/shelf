import { writeAsyncIterableToWritable } from '@remix-run/node';
import  cloudinary from 'cloudinary'

cloudinary.v2.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:  process.env.CLOUDINARY_API_SECRET
});

export async function uploadImage(data: AsyncIterable<Uint8Array>) {
  const uploadPromise: Promise<cloudinary.UploadApiResponse | undefined> = new Promise(async (resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream({
      folder: 'shelf'
    },
      (error, result) => {
        if (error) {
          reject(error)
          return
        }
        resolve(result)
      }
    )
    await writeAsyncIterableToWritable(data, uploadStream)
  })

  return uploadPromise
}
