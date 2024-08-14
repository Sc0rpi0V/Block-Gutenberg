import { buttons as icon } from '@wordpress/icons';

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
import Save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon,
	example: {
		innerBlocks: [
			{
				name: 'core/group',
				attributes: { className: "buttons__inner"},
				innerBlocks: [
					{
						name: 'Gutenberg/button-link',
						attributes: {
							type: 'btn',
							url: 'http://exemple.fr',
							text: 'Lorem',
							target: false,
							iconPos: 'after',
							btnStyle: 'full',
							styleBkg: 'dark'
						}
					},
					{
						name: 'Gutenberg/button-link',
						attributes: {
							type: 'btn',
							url: 'http://exemple.fr',
							text: 'Ipsum',
							target: false,
							iconPos: 'after',
							btnStyle: 'full',
							styleBkg: 'dark'
						}
					},
				]
			}
		],
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: Save
} );
