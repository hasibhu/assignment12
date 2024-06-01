import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useState } from 'react';

const ImageHosting = () => {
    const [imageUrl, setImageUrl] = useState(null);

    const openUploadWidget = () => {
        window.cloudinary.createUploadWidget(
            {
                cloudName: 'dmnasuo5p',
                uploadPreset: 'your_upload_preset', // Replace 'your_upload_preset' with your actual upload preset name
                sources: ['local', 'url', 'camera', 'facebook', 'instagram'], // You can customize the sources based on your requirements
                folder: 'your_folder_name', // Optional: specify the folder to upload the images
                cropping: true,
                croppingAspectRatio: 1, // Set to 1 for square aspect ratio
                croppingCoordinatesMode: 'custom',
                croppingShowDimensions: true
            },
            (error, result) => {
                if (!error && result && result.event === 'success') {
                    setImageUrl(result.info.secure_url);
                }
            }
        ).open();
    };

    const cld = new Cloudinary({ cloud: { cloudName: 'dmnasuo5p' } });

    const img = imageUrl
        ? cld.image(imageUrl)
        : cld.image('cld-sample-5').format('auto').quality('auto').resize(auto().gravity(autoGravity()).width(500).height(500));

    return (
        <div>
            <button onClick={openUploadWidget}>Upload Image</button>
            <br />
            <AdvancedImage cldImg={img} />
        </div>
    );
};

export default ImageHosting;
