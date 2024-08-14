import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import { Button, Placeholder} from '@wordpress/components';


export default function Image(props) {
  const { attributes, setAttributes } = props;
  const { imageUrl, imageId } = attributes;

  const onSelectImage = (newImage) => {
    setAttributes({
      imageUrl: newImage.url,
      imageId: newImage.id,
      imageAlt: newImage.alt, 
    });
  };

  const onRemoveImage = () => {
    setAttributes({ 
      imageUrl: null,
      imageId: null,
			imageAlt: null,
    });
  };

  return (
    <div className="content-card__image">
      {imageId ? (
        <div>
          <img src={imageUrl} alt="Mon image" className="yellow-shadow" />
          <div className='delete-image'>
            <Button className="red-text" onClick={onRemoveImage} variant='secondary'>
              {__("Supprimer l'image", "Gutenberg-back")}
            </Button>
          </div>
        </div>
      ) : (
        <MediaUploadCheck>
          <Placeholder
            icon="format-image"
            label={__("Ajouter une image", "Gutenberg-back")}
            instructions={__("Cliquez sur le bouton ci-dessous pour ajouter une image.", "Gutenberg-back")}
          >
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes={['image']}
            value={imageId}
            render={({ open }) => (
              <Button onClick={open} variant='primary'>
                {__("Ajouter une image", "Gutenberg-back")}
              </Button>
            )}
          />
          </Placeholder>
        </MediaUploadCheck>
      )}
    </div>
  )
}
