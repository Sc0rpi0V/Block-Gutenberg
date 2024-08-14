import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit(props) {

	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/button', 'core/list'];
	const TEMPLATE = [

		['core/group', { className: "block-heading__wrapper join-us__col-heading" },
			[
				['core/heading', { "level": 2, placeholder: __('Surtitre ici', 'Gutenberg-back'), className: "block-heading__title-small join-us__title-small"}],
				['core/heading', { "level": 2, placeholder: __('Titre', 'Gutenberg-back'), className: "block-heading__title join-us__title" }],
				['core/heading', { "level": 3, placeholder: __('Chapeau', 'Gutenberg-back'), className: "block-heading__desc--bold join-us__desc--bold" }],
				['core/paragraph', { placeholder: __('Texte', 'Gutenberg-back'), className: "block-heading__desc join-us__desc" }],
				['core/button', { className: "block-heading__btn btn datalayer-btn" }],
			]
		],
		['core/group', { templateLock: true, className: "join-us__block join-us__block--1" },
			[
				['core/heading', { "level": 3, placeholder: __('Surtitre du bloc', 'Gutenberg-back'), className: "block__title" }],
				['core/button', { className: "block__btn btn datalayer-btn" }],
				['core/paragraph', { placeholder: __('Sous-titre', 'Gutenberg-back'), className: "block__title-small" }],
				['core/list', {className: "block__list-arrow list-arrow"}],
			]
		],
		['core/group', { templateLock: true, className: "join-us__block join-us__block--2" },
			[
				['core/heading', { "level": 3, placeholder: __('Surtitre du bloc', 'Gutenberg-back'), className: "block__title" }],
				['core/button', { className: "block__btn btn datalayer-btn" }],
				['core/paragraph', { placeholder: __('Sous-titre', 'Gutenberg-back'), className: "block__title-small" }],
				['core/list', {className: "block__list-arrow list-arrow"}],
			]
		]
	];

	return (
		<div {...blockProps} className="join-us">
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={TEMPLATE}
				templateLock="all"
			/>
		</div>
	);
}
