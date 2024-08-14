/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText, 
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import Inspector from './inspector'
import Itemlist from './itemlist';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {

	const {attributes, setAttributes} = props;

	return (
		<div { ...useBlockProps() }>

			<Inspector 
				{...props}
			/>

			<div className="faq">
				<div className="faq__head">
					<RichText
						tagName={"h" + attributes.faqTitleLevel}
						className={"faq__head-title"}
						placeholder={__('Titre de la F.A.Q', 'Gutenberg-back')}
						value={attributes.faqTitle}
						onChange={(val) => setAttributes({ faqTitle: val })}
					/>
					<RichText
						tagName="div"
						className={"faq__head-content"}
						placeholder={__('Description de la F.A.Q', 'Gutenberg-back')}
						value={attributes.faqContent}
						onChange={(val) => setAttributes({ faqContent: val })}
					/>
				</div>

				<Itemlist 
					{...props}
				/>

			</div>
		</div>
	);
}
