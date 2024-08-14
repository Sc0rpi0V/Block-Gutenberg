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
} from '@wordpress/block-editor';

import {
	Placeholder,
	Button
} from '@wordpress/components'

import Inspector from './inspector'

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

			<div className={"quote" + " quote--align-" + attributes.textAlign }>
				<div className={`quote__inner ${attributes.pictureId ? "quote__inner-img-selected" : ""}`}>
					<div className="quote__img">
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
							<figure className="quote__img-selected">
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
					</div>
					<div className="quote__content">
						<RichText
							tagName="div"
							className={"quote__content-text"}
							placeholder={__('Citation', 'Gutenberg-back')}
							value={attributes.quote}
							onChange={(val) => setAttributes({ quote: val })}
						/>
						<RichText
							tagName="div"
							className={"quote__content-author"}
							placeholder={__('Auteur de la citation', 'Gutenberg-back')}
							value={attributes.author}
							onChange={(val) => setAttributes({ author: val })}
						/>
						<RichText
							tagName="div"
							className={"quote__content-author-infos"}
							placeholder={__('Information sur l\'auteur', 'Gutenberg-back')}
							value={attributes.job}
							onChange={(val) => setAttributes({ job: val })}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
