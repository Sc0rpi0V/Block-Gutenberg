/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {

	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/button', 'core/image'];
	const TEMPLATE = [
		['core/group', { className: "block-heading__wrapper world-presence__heading" },
			[
				['core/heading', { "level": 3, placeholder: __('Surtitre ici', 'Gutenberg-back'), className: "block-heading__title-small" }],
				['core/heading', { "level": 2, placeholder: __('Titre ici', 'Gutenberg-back'), className: "block-heading__title world-presence__title" }],
				['core/button', { className: "block-heading__btn btn primary datalayer-btn" }],
				['core/button', { className: "block-heading__btn btn secondary datalayer-btn" }]

			],
		],
		['core/group', { className: "world-presence__content" },
			[
				['core/image', { className: "world-presence__map" }],
				['core/image', { className: "world-presence__img" }],
				['core/group', { className: "world-presence__item world-presence__item--1 key-item" },
					[
						['core/paragraph', { placeholder: __('Chiffre clé', 'Gutenberg-back'), className: "key-item__number" }],
						['core/paragraph', { placeholder: __('Description', 'Gutenberg-back'), className: "key-item__label" }],
					]
				],
				['core/group', { className: "world-presence__item world-presence__item--2 key-item" },
					[
						['core/paragraph', { placeholder: __('Chiffre clé', 'Gutenberg-back'), className: "key-item__number" }],
						['core/paragraph', { placeholder: __('Description', 'Gutenberg-back'), className: "key-item__label" }],
					]
				],
				['core/group', { className: "world-presence__item world-presence__item--3 key-item" },
					[
						['core/paragraph', { placeholder: __('Chiffre clé', 'Gutenberg-back'), className: "key-item__number" }],
						['core/paragraph', { placeholder: __('Description', 'Gutenberg-back'), className: "key-item__label" }],
					]
				]
			]
		]
	];

	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={TEMPLATE}
				templateLock="all"
			/>
		</div>
	);
}