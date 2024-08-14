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
	Button,
	ColorPalette,
	Tip
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

	const {attributes, setAttributes} = props;

	const colors = [
		{
			name: __('Jaune', 'Gutenberg-back'),
			color: "#F5D750"
		},
		{
			name: __('Blanc', 'Gutenberg-back'),
			color: "#FFF"
		}
	];

	const boxShadow = [
		{
			name: __('Bleu', 'Gutenberg-back'),
			color: "#080068"
		},
		{
			name: __('Jaune', 'Gutenberg-back'),
			color: "#F5D750"
		},
		{
			name: __('Vert', 'Gutenberg-back'),
			color: "#00AA91"
		}
	];

	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ['core/group', 'Gutenberg/button-link'];
	const TEMPLATE = [
		['core/group', { className: "framed__inner" },
			[
				['core/paragraph', {placeholder: __('Titre', 'Gutenberg-back'), className: "framed__title lvl-2"}],
				['core/paragraph', {placeholder: __('Texte de description', 'Gutenberg-back'), className: "framed__text "}],
				['Gutenberg/buttons', {className: "framed__buttons"}],
			]
		]
	];
	
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Options du bloc encaré de couleur', 'Gutenberg-back')} initialOpen={ true }>
					<PanelRow>
						<label>{__('Alignement du contenu:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
						<ButtonGroup>
							{ ['left', 'center'].map( (pos) => (
								<Button
									isLarge
									variant={ attributes.align == pos ? 'primary' : '' }
									onClick={ () => setAttributes(
										 { 
											align: pos,
										} 
									)}
								>
									{ pos === 'left' ?
										(
											<span className="dashicon dashicons dashicons-align-pull-left"></span>
										) :  pos === 'center' ? (
											<span className="dashicon dashicons dashicons-align-center"></span>
										) : ''
									}
								</Button>
							) ) }
						</ButtonGroup>
					</PanelRow>
					<PanelRow>
						<label>{__('Couleur de fond:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
						<ColorPalette
							colors={ colors }
							clearable={false}
							disableCustomColors={true}
							value={attributes.background}
							onChange={ ( color ) => setAttributes({
								background: color,
								bkgModifier: color === "#F5D750" ? 'yellow' : 'white'
							})}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody>
					<Tip>
						<p>{__('Si aucune couleur n\'est séléctionnée, la couleur de fond par défaut sera le blanc.', 'Gutenberg-back')}</p>
					</Tip>
				</PanelBody>
				<PanelBody>
					<PanelRow>
						<label>{__('Couleur de fond de l\'ombre portée:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
						<ColorPalette
							colors={ boxShadow }
							clearable={false}
							disableCustomColors={true}
							value={attributes.boxShadow}
							onChange={ ( color ) => setAttributes({
								boxShadow: color,
								boxShadowModifier: color === "#080068" ? 'blue' :
												   color === '#F5D750' ? 'yellow' :
												   color === '#00AA91' ? 'green' :
												   ''
							})}
						/> 
					</PanelRow>
				</PanelBody>
				<PanelBody>
					<Tip>
						<p>{__('Si aucune couleur n\'est séléctionnée, la couleur de l\'ombre portée par défaut sera le bleu.', 'Gutenberg-back')}</p>
					</Tip>
				</PanelBody>
    		</InspectorControls>

			<div { ...useBlockProps() }>
				<div class={"framed framed--" + attributes.bkgModifier + " framed--" + attributes.align + " framed--boxShadow-" + attributes.boxShadowModifier }>
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
