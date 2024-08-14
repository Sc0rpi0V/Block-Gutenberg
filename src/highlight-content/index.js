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
			heading_affichage:"right",
			heading_cat:"Lorem ipsum",
			heading_desc: "Lorem ipsum dolor sit amet",
			heading_image_after: {},
			heading_image_side: {
				id: 1,
				url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg', id: 355,
				title: 'Frame 33202',
				filename: 'Frame-33202.png',
				url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
				link: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg'
			},
			heading_title:"Dolor si amet",
		}
	},
	icon: logo,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
