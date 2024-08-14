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

	const { attributes, setAttributes } = props

	return (
		<>
			<Inspector 
				{...props}
			/>

			<div { ...useBlockProps() }>
				<div className="cards-list">
					<div className={"cards-list__header cards-list__header--" + attributes.headAlign}>
						<RichText
							tagName={"h" + attributes.overtitleLevel}
							className={"cards-list__header-overtitle"}
							placeholder={__('Surtitre', 'Gutenberg-back')}
							allowedFormats={['']}
							value={attributes.overtitle}
							onChange={(overtitle) => setAttributes({ overtitle })}
						/>
						<RichText
							tagName={"h" + attributes.titleLevel}
							className={"cards-list__header-title"}
							placeholder={__('Titre', 'Gutenberg-back')}
							allowedFormats={['core/text-color']}
							value={attributes.title}
							onChange={(title) => setAttributes({ title })}
						/>
						<RichText
							tagName="div"
							className={"cards-list__header-content"}
							placeholder={__('Description', 'Gutenberg-back')}
							value={attributes.description}
							onChange={(description) => setAttributes({ description })}
						/>
					</div>

					<Itemlist
						{...props}
					/>

					<div className={"cards-list__footer cards-list__footer--" + attributes.footAlign}>
						<div className="btn cards-list__footer-btn admin-btn-link">
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
