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
	RichText
} from '@wordpress/block-editor';

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

	const {setAttributes, attributes} = props;

	return (
		<div { ...useBlockProps() }>
			<div className="crosslinking">
				<div className="crosslinking__items">
					<div className="crosslinking__item crosslinking__item--prev">
						<div class="crosslinking__item-arrow dashicon dashicons dashicons-arrow-left-alt"></div>
						<div className="crosslinking__item-content">
							<RichText
								tagName="p"
								className="crosslinking__item-content-overtitle"
								placeholder={__('Surtitre', 'Gutenberg-back')}
								allowedFormats={[]}
								value={attributes.prevOvertitle}
								onChange={(prevOvertitle) => setAttributes({prevOvertitle})}
							/>
							<RichText
								tagName="p"
								className="crosslinking__item-content-title"
								placeholder={__('Titre', 'Gutenberg-back')}
								allowedFormats={[]}
								value={attributes.prevTitle}
								onChange={(prevTitle) => setAttributes({prevTitle})}
							/>
							<div className="crosslinking__item-content-link">
								<span class="dashicon dashicons dashicons-arrow-right-alt"></span>
								<RichText
									tagName="span"
									className="crosslinking__item-content-link-text"
									placeholder={__('Découvrez la suite', 'Gutenberg-back')}
									allowedFormats={[]}
									value={attributes.prevLinkText}
									onChange={(prevLinkText) => setAttributes({prevLinkText})}
								/>
							</div>
							<div class="crosslinking__item-content-url-selector">
								<URLInput
									value={ attributes.prevUrl }
									className="urlSlector"
									onChange={ (prevUrl, post) => setAttributes({prevUrl})}
								/>
							</div>
						</div>
					</div>

					<div className="crosslinking__item crosslinking__item--next">
						<div className="crosslinking__item-content">
							<RichText
								tagName="p"
								className="crosslinking__item-content-overtitle"
								placeholder={__('Surtitre', 'Gutenberg-back')}
								allowedFormats={[]}
								value={attributes.nextOvertitle}
								onChange={(nextOvertitle) => setAttributes({nextOvertitle})}
							/>
							<RichText
								tagName="p"
								className="crosslinking__item-content-title"
								placeholder={__('Titre', 'Gutenberg-back')}
								allowedFormats={[]}
								value={attributes.nextTitle}
								onChange={(nextTitle) => setAttributes({nextTitle})}
							/>
							<div className="crosslinking__item-content-link">
								<span class="dashicon dashicons dashicons-arrow-right-alt"></span>
								<RichText
									tagName="span"
									className="crosslinking__item-content-link-text"
									placeholder={__('Découvrez la suite', 'Gutenberg-back')}
									allowedFormats={[]}
									value={attributes.nextLinkText}
									onChange={(nextLinkText) => setAttributes({nextLinkText})}
								/>
							</div>
							<div class="crosslinking__item-content-url-selector">
								<URLInput
									value={ attributes.nextUrl }
									className="urlSlector"
									onChange={ (nextUrl, post) => setAttributes({nextUrl})}
								/>
							</div>
						</div>
						<div class="crosslinking__item-arrow dashicon dashicons dashicons-arrow-right-alt"></div>
					</div>

				</div>
			</div>
			<div className="separators separators--2"></div>
		</div>
	);
}
