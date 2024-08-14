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
	InnerBlocks
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {

	const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/list'];
	const TEMPLATE = [
		['core/heading', {level: 3, className: "framed-list__title", placeholder: __('Titre', 'Gutenberg-back')}],
		['core/paragraph', {className: "framed-list__content txt-l", placeholder: __('Description', 'Gutenberg-back')}],
		['core/list', {className: "framed-list__list", placeholder: __('Description', 'Gutenberg-back')}],
	];

	return (
		<div { ...useBlockProps() }>
			<div className="framed-list">
				<div className="framed-list__inner">
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
						templateLock="all"
					/>
				</div>
			</div>
		</div>
	);
}
