import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

export default function Header(props) {

	const {attributes, setAttributes} = props;

	return (
    <div className="header">
      <div className={"related-subsidiarys__header related-subsidiarys__header--" + attributes.headAlign}>
        <RichText
          tagName={"h" + attributes.overtitleLevel}
          className={"related-subsidiarys__header-overtitle"}
          allowedFormats={[]}
          placeholder={__('Surtitre', 'Gutenberg-back')}
          value={attributes.overtitle}
          onChange={(overtitle) => setAttributes({overtitle})}
        />
        <RichText
          tagName={"h" + attributes.titleLevel}
          className={"related-subsidiarys__header-title"}
          allowedFormats={['core/text-color']}
          placeholder={__('Titre', 'Gutenberg-back')}
          value={attributes.title}
          onChange={(title) => setAttributes({title})}
        />
        <RichText
          tagName="div"
          className={"related-subsidiarys__header-content"}
          placeholder={__('Description', 'Gutenberg-back')}
          value={attributes.description}
          onChange={(description) => setAttributes({description})}
        />
      </div>
    </div>
	);
}