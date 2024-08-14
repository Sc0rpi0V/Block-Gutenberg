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
import { mediaAndText as icon } from '@wordpress/icons';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon,
	example: {
		attributes: {
			bkgColor: '#33BBA7',
			bkgModifier: 'green',
			pictureId: 1,
			pictureSrc: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
			title: 'Lorem ipsum',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque augue auctor, ultrices neque vel, congue tortor',
			url: 'http://exemple.fr',
			text: 'Lorem ipsum',
			iconPos: 'after'
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
