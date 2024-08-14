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
	icon: logo,
	example: {
		heading_cat: 'Lorem ipusm',
		heading_title: 'dolor si amet',
		heading_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque augue auctor, ultrices neque vel, congue tortor',
		liste_cta: [
			{
				title: 'Lorem ipsum',
				link_url: '#',
				link_title: 'Lorem',
				link_title_mobile: 'Lorem'
			}
		]
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
