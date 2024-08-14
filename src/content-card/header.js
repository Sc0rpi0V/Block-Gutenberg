import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

export default function Header(props) {

	const {attributes, setAttributes} = props;

	return (
    <div className="content-card__header">
        <RichText
          tagName="div"
          className={"content-card__header-overtitle"}
          placeholder={__('Sur-titre', 'Gutenberg-back')}
          allowedFormats={[]}
          value={attributes.tag}
          onChange={(val) => setAttributes({ tag: val })}
        />
        <RichText
          tagName={"h" + attributes.titleLevel}
          className={"content-card__header-title"}
          allowedFormats={['core/text-color']}
          placeholder={__('Titre du bloc', 'Gutenberg-back')}
          value={attributes.title}
          onChange={(val) => setAttributes({ title: val })}
        />
    </div>
	);
}