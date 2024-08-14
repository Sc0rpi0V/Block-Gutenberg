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
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ButtonGroup,
	Button
} from '@wordpress/components'

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
export default function Edit(props) {

	const { attributes, setAttributes } = props;

	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'Gutenberg/button-link'];
	const TEMPLATE = [
		['core/group', { className: "media-text__inner" },
			[
				['core/group', { className: "media-text__col-image" },
					[
						['core/image', {className: "media-text__img"}]
					]
				],
				['core/group', { className: "media-text__col-content" },
					[
						['core/heading', { placeholder: __('Titre', 'Gutenberg-back'), className: "media-text__title lvl-4" }],
						['core/heading', { placeholder: __('Sous-titre', 'Gutenberg-back'), className: "media-text__subtitle lvl-5" }],
						['core/paragraph', { placeholder: __('Texte de description', 'Gutenberg-back'), className: "media-text__text-content txt-reg" }],
						['Gutenberg/button-link', { className: "media-text__btn" }],
					]
				]
			]
		]
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Options du bloc image avec texte', 'Gutenberg-back')} initialOpen={true}>
					<PanelRow>
						<label>{__('Position de l\'image:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
						<ButtonGroup>
							{['left', 'right'].map((pos) => (
								<Button
									isLarge
									variant={attributes.imgPos == pos ? 'primary' : ''}
									onClick={() => setAttributes(
										{
											imgPos: pos,
										}
									)}
								>
									{pos === 'left' ?
										(
											<span className="dashicon dashicons dashicons-align-pull-left"></span>
										) : pos === 'right' ? (
											<span className="dashicon dashicons dashicons-align-pull-right"></span>
										) : ''
									}
								</Button>
							))}
						</ButtonGroup>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className={"media-text media-text--img-" + attributes.imgPos}>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
						templateLock="all"
					/>
				</div>
			</div>
		</>
	);
}
