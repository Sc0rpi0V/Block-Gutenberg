import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import imageShape from './imageShape';


export default function Description(props) {

  const { attributes, setAttributes } = props;

  return (
    <div className="introduction">
      <div className="image-card__img-shape">
        {imageShape}
      </div>
      <div className="description">
        <div className="first-description">
          <RichText
						tagName="div"
						className={"first-content"}
            allowedFormats={[]}
						placeholder={__('Premier champ description', 'Gutenberg-back')}
						value={attributes.firstContent}
						onChange={(val) => setAttributes({ firstContent: val })}
					/>
        </div>
        <div className="second-description">
          <RichText
						tagName="div"
            allowedFormats={[]}
						className={"second-content"}
						placeholder={__('Deuxième champ description', 'Gutenberg-back')}
						value={attributes.secondContent}
						onChange={(val) => setAttributes({ secondContent: val })}
					/>
        </div>
      </div>
    </div>
  )
}
