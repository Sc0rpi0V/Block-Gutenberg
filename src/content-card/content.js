import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import ButonLink from './button';


export default function Content(props) {
  const { attributes, setAttributes } = props;

  return (
      <>
        <RichText
          tagName="div"
          className="content-card__text-tag"
          placeholder={__('Tag de la carte', 'Gutenberg-back')}
          allowedFormats={[]}
          value={attributes.cardTag}
          onChange={(val) => setAttributes({ cardTag: val })}
        />
        <RichText
          tagName={"h3"}
          className={"content-card__text-title"}
          allowedFormats={[]}
          placeholder={__('Titre de la carte', 'Gutenberg-back')}
          value={attributes.cardTitle}
          onChange={(val) => setAttributes({ cardTitle: val })}
        />
        <RichText
          tagName="div"
          className={"content-card__text-descr"}
          placeholder={__('Description de la carte', 'Gutenberg-back')}
          allowedFormats={[]}
          value={attributes.cardDesc}
          onChange={(val) => setAttributes({ cardDesc: val })}
        />

        <div className="">
          <ButonLink 
            {...props}
          />
        </div>
      </>
  )
}
