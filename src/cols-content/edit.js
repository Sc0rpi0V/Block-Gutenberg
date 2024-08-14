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
	InnerBlocks,
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

	const ALLOWED_BLOCKS = ['core/heading', 'core/list'];
	const TEMPLATE = [
		['core/heading', {className: 'block-heading__title cols-content__heading'}],
		['core/columns', {}, 
			[
				['core/column', { width: '50%', className: "cols-content__col cols-content__col--1", allowedBlocks: ALLOWED_BLOCKS }],
				['core/column', {  width: '50%', className: "cols-content__col cols-content__col--2", allowedBlocks: ALLOWED_BLOCKS }]
			]
		]
	];

	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={['']}
				template={TEMPLATE}
			/>
		</div>
	);
}
