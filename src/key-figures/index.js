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
import logo from '../icons';
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
			description: "consectetur adipiscing elit. Etiam vitae sem vel purus rutrum suscipit.",
			headAlign: "center",
			iconPos: "none",
			keyItems: [
				{
					content: "Lorem",
					title: "1"
				},
				{
					content: "Ipsum",
					title: "2"
				},
				{
					content: "Dolor",
					title: "3"
				},
			],
			overtitle: "Lorem",
			title: "Ipsum dolor"
		}
	},
	icon: logo,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
