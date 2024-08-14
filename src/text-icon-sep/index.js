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
import logo from '../icons';
import metadata from './block.json';

//import './extend-block/extend-block';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	example: {
		innerBlocks: [
			{
				name: 'core/group',
				attributes: {
					className: 'text-icon-sep__inner container--sm'
				},
				innerBlocks: [
					{
						name: 'core/group',
						attributes: {
							className: 'text-icon-sep__content'
						},
						innerBlocks: [
							{
								name: 'core/paragraph',
								attributes: {
									className: "text-icon-sep__text-content",
									content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae sem vel purus rutrum suscipit. Phasellus tincidunt orci quis magna posuere molestie. Nullam fermentum sapien tincidunt felis rhoncus lacinia."
								}
							},
							{
								name: 'core/button',
								attributes: {
									text: 'lorem'
								}
							},
						]
					}
				]
			},
			{
				name: 'Gutenberg/separator',
				attributes: {
					className: 'text-icon-sep__separator',
					style: 1
				}
			}
		]
	},
	icon: logo,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: Save
} );
