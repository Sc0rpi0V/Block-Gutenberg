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
import {post} from './icons';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon: post,
	example: {
		attributes: {
			btnTarget: false,
			btnText: "Lorem",
			btnType: "link",
			btnUrl: "#",
			footAlign: "center",
			headAlign: "center",
			iconPos: "none",
			overtitle: "Lorem",
			overtitleLevel: "2",
			postItems: [
				{
					post: {id: 110, title: 'Vous êtes un partenaire business à l\'international', type: 'post'}
				},
				{
					post: {id: 108, title: 'Vous êtes une autorité organisatrice de mobilité', type: 'post'}
				},
				{
					post: {id: 105, title: 'Vous êtes un acteur industriel', type: 'post'}
				}
			],
			title: "Ipsum",
			titleLevel: "3"
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
