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

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	example: {
		attributes: {
			btnTarget: false,
			btnText: "Lorem",
			btnType: "link",
			btnUrl: "#",
			footAlign: "center",
			headAlign: "center",
			iconPos: "none",
			overtitle: "lorem ipsum",
			overtitleLevel: "2",
			refItemsStyle: "vertical",
			title: "Dolor sit amet",
			titleLevel: "3",
			refItems: [
				{
					use_case: {id: 1072, title: 'Une ligne de métro aux meilleurs standards internationaux pour la capitale égyptienne.', type: 'use_case'},
				},
				{
					use_case: {id: 873, title: 'Intégration du réseau de bus et du nouveau tram T10 sur le territoire de Paris Salay.', type: 'use_case'},
				},
				{
					use_case: {id: 1071, title: 'Jusqu\'a 2 heures de transport gagnées par jour pou…abitants de la 5e ville la plus peuplée du monde.', type: 'use_case'}
				}
			]
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
