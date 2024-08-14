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
				attributes: {
					className: 'block-heading__wrapper world-presence__heading'
				},
				innerBlocks: [
					{
						name: 'core/heading',
						attributes: {
							level: 3,
							className: "block-heading__title-small", 
							content: 'Lorem ipsum'
						}
					},
					{
						name: 'core/heading',
						attributes: {
							level: 2,
							className: "block-heading__title world-presence__title", 
							content: 'Lorem ipsum dolor sit amet'
						}
					},
					{
						name: 'core/button',
						attributes: {
							text: 'lorem',
							className: "block-heading__btn btn primary"
						}
					},
					{
						name: 'core/button',
						attributes: {
							text: 'lorem',
							className: "block-heading__btn btn secondary"
						}
					},
				]
			},
			{
				name: 'core/group',
				attributes: {
					className: "world-presence__content"
				},
				innerBlocks: [
					{
						name: 'core/image',
						attributes: {
							className: "world-presence__map",
							sizeSlug: 'large',
							url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
						}
					},
					{
						name: 'core/image',
						attributes: {
							className: "world-presence__img",
							sizeSlug: 'large',
							url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
						}
					},
					{
						name: 'core/group',
						attributes: {
							className: 'world-presence__item world-presence__item--1 key-item'
						},
						innerBlocks: [
							{
								name: 'core/paragraph',
								attributes: {
									className: "key-item__number",
									content: "1"
								}
							},
							{
								name: 'core/paragraph',
								attributes: {
									className: "key-item__label",
									content: "Lorem ipsum"
								}
							},
						]
					},
					{
						name: 'core/group',
						attributes: {
							className: 'world-presence__item world-presence__item--2 key-item'
						},
						innerBlocks: [
							{
								name: 'core/paragraph',
								attributes: {
									className: "key-item__number",
									content: "2"
								}
							},
							{
								name: 'core/paragraph',
								attributes: {
									className: "key-item__label",
									content: "Lorem ipsum"
								}
							},
						]
					},
					{
						name: 'core/group',
						attributes: {
							className: 'world-presence__item world-presence__item--3 key-item'
						},
						innerBlocks: [
							{
								name: 'core/paragraph',
								attributes: {
									className: "key-item__number",
									content: "3"
								}
							},
							{
								name: 'core/paragraph',
								attributes: {
									className: "key-item__label",
									content: "Lorem ipsum"
								}
							},
						]
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
	save: Save
} );
