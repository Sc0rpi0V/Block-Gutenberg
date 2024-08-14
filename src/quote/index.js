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
import { quote } from './icons';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	example: {
		attributes: {
			author: "John Doe",
			job: "lorem ipsum",
			pictureAlt: "",
			pictureId: 885,
			pictureSrc: "https://s.w.org/images/core/5.3/MtBlanc1.jpg",
			quote: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae sem vel purus rutrum suscipit. Phasellus tincidunt orci quis magna posuere molestie. Nullam fermentum sapien tincidunt felis rhoncus lacinia.\"",
			textAlign: "left"
		}
	},
	icon: quote,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
