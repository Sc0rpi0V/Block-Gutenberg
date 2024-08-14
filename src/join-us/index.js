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
				attibutes: {
					className: 'block-heading__wrapper join-us__col-heading'
				},
				innerBlocks: [
					{
						name: 'core/heading',
						attributes: {
							level: 2,
							className: "block-heading__title-small join-us__title-small",
							content: "Lorem ipsum"
						}
					},
					{
						name: 'core/heading',
						attributes: {
							level: 3,
							className: "block-heading__title join-us__title",
							content: "Lorem ipsum dolor"
						}
					},
					{
						name: 'core/paragraph',
						attributes: {
							className: "block-heading__desc--bold join-us__desc--bold",
							content: "Lorem ipsum dolor sit amet"
						}
					},
					{
						name: 'core/paragraph',
						attributes: {
							className: "block-heading__desc join-us__desc",
							content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						}
					},
					{
						name: 'core/button',
						attributes: {
							text: 'lorem'
						}
					}
				]
			},
			{
				name: 'core/group',
				attributes: {
					className: "join-us__block join-us__block--1"
				},
				innerBlocks: [
					{
						name: 'core/heading',
						attributes: {
							level: 3,
							className: "block__title",
							content: "Lorem ipsum dolor"
						}
					},
					{
						name: 'core/button',
						attributes: {
							text: 'lorem'
						}
					},
					{
						name: 'core/paragraph',
						attributes: {
							className: "block__title-small",
							content: "Lorem ipsum dolor sit amet"
						}
					},
					{
						name: 'core/list'
					}
				]
			},
			{
				name: 'core/group',
				attributes: {
					className: "join-us__block join-us__block--2"
				},
				innerBlocks: [
					{
						name: 'core/heading',
						attributes: {
							level: 3,
							className: "block__title",
							content: "Lorem ipsum dolor"
						}
					},
					{
						name: 'core/button',
						attributes: {
							text: 'lorem'
						}
					},
					{
						name: 'core/paragraph',
						attributes: {
							className: "block__title-small",
							content: "Lorem ipsum dolor sit amet"
						}
					},
					{
						name: 'core/list'
					}
				]
			}
		]
	},
	icon: logo,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: Save,
} );
