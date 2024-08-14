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
			btnTarget: false,
			btnText: "Lorem",
			btnType: "link",
			btnUrl: "#",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			footAlign: "center",
			headAlign: "center",
			iconPos: "none",
			jobItems:[
				{
					job: {id: 846, title: 'GUTENBERG Dev', type: 'job'}
				},
				{
					job: {id: 845, title: 'Technicien sûreté des réseaux', type: 'job'}
				},
				{
					job: {id: 844, title: 'Ingénieur des systèmes de transport', type: 'job'}
				}
			],
			overtitle: "Lorem",
			overtitleLevel: "2",
			title: "Ipsum dolor",
			titleLevel: "3"
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
