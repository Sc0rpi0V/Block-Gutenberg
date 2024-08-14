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
	MediaUpload, 
	MediaUploadCheck,
	RichText, 
	URLInput
} from '@wordpress/block-editor';

import {
	Placeholder,
	Button,
	Tip,
	TextControl,
} from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import Inspector from './inspector'

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

	const onSelectImage = picture => {
		props.setAttributes( {
			pictureId: picture.id,
			pictureSrc: picture.url,
			pictureAlt: picture.alt,
		});
	};

	const onRemoveImage = () => {
		props.setAttributes({
			pictureId: null,
			pictureSrc: null,
			pictureAlt: null,
		});
	};

	return (
		<div { ...useBlockProps() }>

			<Inspector 
				{...props}
			/>

			<div className={"cta-img-content cta-img-content--" + attributes.bkgModifier}>
				<div className="cta-img-content__img">
					{ ! attributes.pictureId ? (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectImage }
								allowedTypes={ [ 'image' ] }
								value={ attributes.pictureId }
								render={ ( { open } ) => (
									<Placeholder
										icon="images-alt"
										label={ __( 'Image', 'Gutenberg-back' ) }
										instructions={ __( 'Séléctionner une image', 'Gutenberg-back' ) }
									>
										<Button
											variant="secondary"
											isLarge
											onClick={ open }
											icon="upload"
										>
											{ __( 'Ajouter', 'Gutenberg-back' ) }
										</Button>
									</Placeholder>
								) }
							/>
						</MediaUploadCheck>
					) : (
						<figure className="cta-img-content__img-render">
							<img
								src={ attributes.pictureSrc }
								alt={ attributes.pictureAlt }
							/>

							{ props.isSelected && (
								<Button
									className=""
									onClick={ onRemoveImage }
									icon="dismiss"
								>
									{ __( 'Supprimer l\'image', 'Gutenberg-block' ) }
								</Button>
							) }
						</figure>
					) }
					<Tip>
						{__('Format d\'image recommandé: 333px par 292px')}
					</Tip>
				</div>
				<div className="cta-img-content__content">
					<RichText
						tagName="div"
						className={"cta-img-content__content-title"}
						placeholder={__('Titre', 'Gutenberg-back')}
						value={attributes.title}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<RichText
						tagName="div"
						className={"cta-img-content__content-text"}
						placeholder={__('Description courte', 'Gutenberg-back')}
						value={attributes.content}
						onChange={(val) => setAttributes({ content: val })}
					/>
					<div className="btn admin-btn-link">
						<div class="admin-btn-link__input">
							<URLInput
								value={ attributes.url }
								className="urlSlector"
								onChange={ (url, post) => setAttributes({url: url})}
							/>
						</div>
						<div className="admin-btn-link__content">
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
			</div>
		</div>
	);
}
