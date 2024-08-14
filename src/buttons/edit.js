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
import {iconVertical, iconHorizontal} from './icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {

	const {attributes, setAttributes} = props;

	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ['Gutenberg/button-link'];
	const TEMPLATE = [
		['core/group', { className: "buttons__inner" },
			[
				['Gutenberg/button-link', {}],
				['Gutenberg/button-link', {}],
			]
		]
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Positionnement des boutons au sein du bloc', 'Gutenberg-back')} initialOpen={ true }>
					<PanelRow>
						<label>{__('Alignement des boutons:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
						<ButtonGroup>
							{['vertical', 'horizontal'].map((dir) => (
								<Button
									isLarge
									variant={attributes.direction == dir ? 'primary' : ''}
									onClick={() => setAttributes(
										{
											direction: dir,
										}
									)}
								>
									{dir === 'vertical' ?
										(
											<span className="">{iconVertical}</span>
										) : dir === 'horizontal' ? (
											<span className="">{iconHorizontal}</span>
										) : ''
									}
								</Button>
							))}
						</ButtonGroup>
					</PanelRow>
					<PanelRow>
						<label>{__('Justification des boutons:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
						<ButtonGroup>
							{['left', 'center', 'right'].map((jus) => (
								<Button
									isLarge
									variant={attributes.justify == jus ? 'primary' : ''}
									onClick={() => setAttributes(
										{
											justify: jus,
										}
									)}
								>
									{jus === 'left' ?
										(
											<span className="dashicon dashicons dashicons-align-left"></span>
										) : jus === 'center' ? (
											<span className="dashicon dashicons dashicons-align-center"></span>
										) : jus === 'right' ? (
											<span className="dashicon dashicons dashicons-align-right"></span>
										) : ''
									}
								</Button>
							))}
						</ButtonGroup>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<div className={
					"buttons buttons--" + attributes.direction +
					" buttons--" + attributes.justify
				}>
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
