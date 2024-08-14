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
	URLInput,
	RichText,
} from '@wordpress/block-editor';

import {
	TextControl
} from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import Inspector from './inspector'
import Itemlist from './itemlist'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {

	const {setAttributes, attributes} = props;

	return (
		<>
			<Inspector 
				{...props}
			/>

			<div { ...useBlockProps() }>
				<div className="related-publications">
					<div className={"related-publications__header related-publications__header--" + attributes.headAlign}>
						<RichText
							tagName={"h" + attributes.overtitleLevel}
							className={"related-publications__header-overtitle"}
							allowedFormats={[]}
							placeholder={__('Surtitre', 'Gutenberg-back')}
							value={attributes.overtitle}
							onChange={(overtitle) => setAttributes({overtitle})}
						/>
						<RichText
							tagName={"h" + attributes.titleLevel}
							className={"related-publications__header-title"}
							allowedFormats={['core/text-color']}
							placeholder={__('Titre', 'Gutenberg-back')}
							value={attributes.title}
							onChange={(title) => setAttributes({title})}
						/>
						<RichText
							tagName="p"
							className={"related-publications__header-content"}
							placeholder={__('Description', 'Gutenberg-back')}
							value={attributes.description}
							onChange={(val) => props.setAttributes({description: val})}
						/>
					</div>

					<Itemlist
						{...props}
					/>

					<div className={"related-publications__footer related-publications__footer--" + attributes.footAlign}>
						<div className="related-publications__footer-btn admin-btn-link">
							<div class="admin-btn-link__input">
								<URLInput
									value={ attributes.btnUrl }
									className="urlSlector"
									onChange={ (url, post) => setAttributes({btnUrl: url})}
								/>
							</div>
							<div className="admin-btn-link__content">
								{ (attributes.iconPos === 'before') ?
									(
										<span class="admin-btn-link__icon">
											<span className="dashicon dashicons dashicons-arrow-right-alt"></span>
										</span>
									) : ""
								}
								<span>
									<TextControl
										placeholder={ __( 'Intitulé du bouton', 'Gutenberg-back' ) }
										value={ attributes.btnText }
										onChange={ btnText => setAttributes( { btnText: btnText } ) }
									/>
								</span>
								{ attributes.iconPos === 'external' ?
									(
										<span class="admin-btn-link__icon">
											<span className="dashicon dashicons dashicons-arrow-right-alt external-link"></span>
										</span>
									) : attributes.iconPos === 'after' ? (
										<span class="admin-btn-link__icon">
											<span className="dashicon dashicons dashicons-arrow-right-alt"></span>
										</span>
									) : ""
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
