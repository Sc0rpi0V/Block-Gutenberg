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
	InspectorControls,
	URLInput
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ToggleControl,
	TextControl,
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

	const { attributes, setAttributes } = props

	var type = attributes.type;
	var icons = [];

	if(type === 'btn') {
		icons = [
			'none',
			'before',
			'after',
			'external'
		];
	} else {
		icons = [
			'none',
			'after',
			'external'
		];
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Options du bouton/lien', 'Gutenberg-back')} initialOpen={ true }>
					<PanelRow>
						<label>{__('Type:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
						<ButtonGroup>
							{ ['btn', 'link'].map( (linkType) => (
								<Button
									isLarge
									variant={ attributes.type == linkType ? 'primary' : '' }
									onClick={ () => setAttributes(
										 { 
											type: linkType,
											iconPos: (linkType === 'link') && (attributes.iconPos === 'before')
													? 'none' 
													: attributes.iconPos,
											btnStyle: (linkType === 'link') ? '' : 'full'
										} 
									)}
								>
									{ linkType === 'btn' ?
										(
											__("Bouton", "Gutenberg-back")
										) :  linkType === 'link' ? (
											__("Lien", "Gutenberg-back")
										) : ''
									}
								</Button>
							) ) }
						</ButtonGroup>
					</PanelRow>
					<PanelRow>
						<label>{__('Cible du lien:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
						<ToggleControl
								label={__('Afficher le lien dans un nouvel onglet', 'Gutenberg-block')}
								checked={ attributes.target }
								onChange={ () => setAttributes( {
									 target: ! attributes.target,
									 iconPos: (!attributes.target) && (attributes.iconPos === 'before') ? 'none' : attributes.iconPos
									} )
								}
						/>
					</PanelRow>

					<PanelRow>
						<label>{__('Icône du lien:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
						<ButtonGroup className="iconSelector">
							{ icons.map( (posIcon) => (
								<>
									<Button
										className="has-icon"
										disabled={(attributes.target) && (posIcon === 'before') ? true : false}
										isLarge
										variant={ attributes.iconPos == posIcon ? 'primary' : '' }
										onClick={ () => setAttributes( { iconPos: posIcon } ) }
									>
										{ posIcon === 'none' ?
											(
												<span className="dashicon dashicons dashicons-no-alt"></span>
											) : posIcon === 'external' ? (
												<span className="dashicon dashicons dashicons-arrow-right-alt external-link"></span>
											) : posIcon === 'before' ? (
												<>
													<span className="dashicon dashicons dashicons-arrow-right-alt"></span>
													{__('____', 'Gutenberg-back')}
												</>
											) : posIcon === 'after' ? (
												<>
													{__('____', 'Gutenberg-back')}
													<span className="dashicon dashicons dashicons-arrow-right-alt"></span>
												</>
											) : ''
										}

									</Button>
								</>
							) ) }
						</ButtonGroup>
					</PanelRow>
					{ type === 'btn' ?
						(
							<>
								<PanelRow>
									<label>{__('Style du bouton:', 'Gutenberg-block')}</label>
								</PanelRow>
								<PanelRow>
									<ButtonGroup>
									{ ['full', 'outline'].map( (btnStyle) => (
									<Button
										isLarge
										variant={ attributes.btnStyle == btnStyle ? 'primary' : '' }
										onClick={ () => setAttributes( { btnStyle: btnStyle } ) }
									>
										{ btnStyle === 'full' ?
											(
												__("Style plein", "Gutenberg-back")
											) :  btnStyle === 'outline' ? (
												__("Style bordure", "Gutenberg-back")
											) : ''
										}
									</Button>
								) ) }
									</ButtonGroup>
								</PanelRow>
							</>
						) : ''
					}
					<PanelRow>
						<label>{__('Affichage du bouton/lien sur:', 'Gutenberg-block')}</label>
					</PanelRow>
					<PanelRow>
					<ButtonGroup>
							{ ['light', 'dark'].map( (bkg) => (
								<Button
									isLarge
									variant={ attributes.styleBkg == bkg ? 'primary' : '' }
									onClick={ () => setAttributes({styleBkg: bkg})}
								>
									{ bkg === 'dark' ?
										(
											__("Fond sombre", "Gutenberg-back")
										) :  bkg === 'light' ? (
											__("Fond clair", "Gutenberg-back")
										) : ''
									}
								</Button>
							) ) }
						</ButtonGroup>
					</PanelRow>
				</PanelBody>
    		</InspectorControls>

			<div { ...useBlockProps() }>
				<div className={attributes.type + ' admin-btn-link'}>
					<div className="admin-btn-link__input">
						<URLInput
							value={ attributes.url }
							className="urlSlector"
							onChange={ (url, post) => setAttributes({url: url})}
						/>
					</div>
					<div className="admin-btn-link__content">
						{ (attributes.iconPos === 'before') ?
							(
								<span className="admin-btn-link__icon">
									<span className="dashicon dashicons dashicons-arrow-right-alt"></span>
								</span>
							) : ""
						}
						<span>
							<TextControl
								placeholder={ __( 'Intitulé du bouton', 'Gutenberg-back' ) }
								value={ attributes.text }
								onChange={ btnText => setAttributes( { text: btnText } ) }
							/>
						</span>
						{ attributes.iconPos === 'external' ?
							(
								<span className="admin-btn-link__icon">
									<span className="dashicon dashicons dashicons-arrow-right-alt external-link"></span>
								</span>
							) : attributes.iconPos === 'after' ? (
								<span className="admin-btn-link__icon">
									<span className="dashicon dashicons dashicons-arrow-right-alt"></span>
								</span>
							) : ""
						}
					</div>
				</div>
			</div>
		</>
	);
}
