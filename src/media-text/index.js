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
import { mediaAndText as icon } from '@wordpress/icons';

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
	example: {
		innerBlocks: [
			{
				name: 'core/group',
				attributes: {
					className: "media-text__inner"
				},
				innerBlocks: [
					{
						name: 'core/group',
						attributes: {
							className: "media-text__col-image"
						},
						innerBlocks: [
							{
								name: 'core/image',
								'attributes': {
									className: 'media-text__img',
									sizeSlug: 'large',
									url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',			
									caption: 'Lorem ipsum'
								}
							}
						]
					},
					{
						name: 'core/group',
						attributes: {
							className: "media-text__col-content"
						},
						innerBlocks: [
							{
								name: 'core/heading',
								attributes: {
									className: 'media-text__title lvl-4',
									content: "Lorem ipsum"
								}
							},
							{
								name: 'core/heading',
								attributes: {
									className: 'media-text__subtitle lvl-5',
									content: "Dolor sit amet"
								}
							},
							{
								name: 'core/paragraph',
								attributes: {
									className: 'media-text__text-content txt-reg',
									content: "Consectetur adipiscing elit. Etiam vitae sem vel purus rutrum suscipit."
								}
							},
							{
								name: 'Gutenberg/button-link',
								attributes: {
									className: "media-text__btn",
									type: 'btn',
									url: 'http://exemple.fr',
									text: 'lorem ipsum',
									target: true,
									iconPos: 'after',
									btnStyle: 'full',
									styleBkg: 'dark'
								}
							}
						]
					}
				]
			}
		]
	},
	icon,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: Save
} );
