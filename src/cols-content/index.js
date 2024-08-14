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
import metadata from './block.json'
import { cols } from './icons';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon: cols,
	example: {
		innerBlocks: [
			{
				name: 'core/heading',
				attributes: {
					content: 'Lorem ipsum dolor si amet'
				}
			},
			{
				name: 'core/columns',
				innerBlocks: [
					{
						name: 'core/column',
						attributes: {
							width: '50%',
							className: 'pragraph-col pragraph-col--1'
						}, 
						innerBlocks: [
							{
								name: 'core/heading',
								attributes: {
									content: 'Lorem ipsum'
								}
							},
							{
								name: 'core/list',
								attributes: {
									bulletType: 'arrow'
								},
								innerBlocks: [
									{
										name: 'core/list-item', 
										attributes: {
											content: 'dolor si amet'
										}
									}
								]
							}
						]
					}
				]
			}
		]
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: Save
} );
