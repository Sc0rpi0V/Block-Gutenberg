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
import { posts } from './icons';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	example: {
		attributes: {
			btnTarget: false,
			btnText: "test",
			btnUrl: "#",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			footAlign: "center",
			headAlign: "center",
			iconPos: "none",
			overtitle: "lorem",
			overtitleLevel: "2",
			publicationItems: [
				{
					publication: {id: 1339, title: 'Lorem ipsum dolor eget pulvinar nec amet sem urna nulla lectus congue.', type: 'magazine'}
				},
				{
					publication: {id: 1326, title: 'Document 1', type: 'document'}
				}
			],
			title: "ipsum",
			titleLevel: "3"
		}
	},
	icon: posts,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
