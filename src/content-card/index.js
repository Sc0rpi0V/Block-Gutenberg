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
			title: "Lorem ipsum",
			tag: "Lorem ipsum",
			pictureAlt: "",
			pictureId: 1,
			imageUrl: "https://s.w.org/images/core/5.3/MtBlanc1.jpg",
			cardTitle : "Lorem ipsum",
			cardTag : "Lorem",
			cardDesc : 'Loremp ipsum'
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
