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
import {faq} from './icons';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon: faq,
	example: {
		faqContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque augue auctor, ultrices neque vel, congue tortor',
		faqItems: [
			{
				question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
				questionLevel: '5',
				response: 'Etiam vitae sem vel purus rutrum suscipit. Phasellus tincidunt orci quis magna posuere molestie. Nullam fermentum sapien tincidunt felis rhoncus lacinia.',
				link_title: 'Lorem ipsum',
				link: '#'
			}
		],
		faqTitle: 'Lpsum dolor si amet',
		faqTitleLevel: '3',
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
