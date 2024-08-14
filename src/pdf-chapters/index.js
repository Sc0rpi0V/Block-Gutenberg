/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	example: {
		attributes: {
			chapters: [
				{
					btnText: "lorem",
					chapterTitle: "ipsum",
					pdfId: 672,
					pdfName: "sample.pdf",
					pdfSize: "3 Ko",
					pdfUrl: "https://Gutenberg.local/wp-content/uploads/2023/03/sample.pdf",
					tag: "Lorem",
					title: "Dolor sit amet"
				}
			],
			mainPdfId: 672,
			mainPdfName: "sample.pdf",
			mainPdfSize: "3 Ko",
			mainPdfText: "",
			mainPdfUrl: "https://Gutenberg.local/wp-content/uploads/2023/03/sample.pdf",
			overtitle: "Lorem ipsum",
			secondPdfId: 681,
			secondPdfName: "dummy.pdf",
			secondPdfSize: "13 Ko",
			secondPdfText: "",
			secondPdfUrl: "https://Gutenberg.local/wp-content/uploads/2023/03/dummy.pdf",
			title: "dolor sit amet"
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
