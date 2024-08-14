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
	RichText,
	URLInput,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';

import {
	Placeholder,
	Button,
	ToggleControl,
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

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {

	const {setAttributes, attributes} = props

	const onSelectPdf = pdf => {
		props.setAttributes( {
			pdfId: pdf.id,
			pdfUrl: pdf.url,
			pdfSize: pdf.filesizeHumanReadable,
			pdfName: pdf.filename
		});
	};

	const onRemovePdf = () => {
		props.setAttributes({
			pdfId: null,
			pdfUrl: null,
			pdfSize: null,
			pdfName: null
		});
	};

	const onSelectImage = picture => {
		props.setAttributes({
			pictureId: picture.id,
			pictureSrc: picture.url,
			pictureAlt: picture.alt,
		});
	};

	const onRemoveImage = () => {
		setAttributes({
			pictureId: null,
			pictureSrc: null,
			pictureAlt: null,
		});
	};

	return (
		<>
		<Inspector 
				{...props}
		/>

		<div { ...useBlockProps() }>
			<div className="highlight-pdf">
				<div className="highlight-pdf__inner">
					<div className="highlight-pdf__image">
						{!attributes.pictureId ? (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectImage}
									allowedTypes={['image']}
									value={attributes.pictureId}
									render={({ open }) => (
										<Placeholder
											icon="images-alt"
											label={__('Image', 'Gutenberg-back')}
											instructions={__('Séléctionner une image', 'Gutenberg-back')}
										>
											<Button
												variant="secondary"
												isLarge
												onClick={open}
												icon="upload"
											>
												{__('Ajouter', 'Gutenberg-back')}
											</Button>
										</Placeholder>
									)}
								/>
							</MediaUploadCheck>
						) : (
							<div className="highlight-pdf__image-render">
								<figure>
									<img
										src={attributes.pictureSrc}
										alt={attributes.pictureAlt}
									/>
								</figure>
								<Button
									className=""
									onClick={onRemoveImage}
									icon="dismiss"
								>
									{__('Supprimer l\'image', 'Gutenberg-block')}
								</Button>
							</div>
						)}
					</div>
					<div className="highlight-pdf__content">
						<div className="highlight-pdf__content-flags">
							<div className="highlight-pdf__content-flag highlight-pdf__content-flag--cat">
								<RichText
									tagName="span"
									allowedFormats={[]}
									placeholder={__('Categorie', 'Gutenberg-back')}
									value={attributes.category}
									onChange={cat => props.setAttributes({ category: cat })}
								/>
							</div>
							<div className="highlight-pdf__content-flag highlight-pdf__content-flag--tag">
								<RichText
									tagName="span"
									allowedFormats={[]}
									placeholder={__('#Tag', 'Gutenberg-back')}
									value={attributes.tag}
									onChange={tag => props.setAttributes({ tag })}
								/>
							</div>
						</div>
						<RichText
							tagName={"h" + attributes.overtitleLevel}
							className={"highlight-pdf__content-overtitle"}
							placeholder={__('Surtitre', 'Gutenberg-back')}
							value={attributes.overtitle}
							allowedFormats={[]}
							onChange={(val) => setAttributes({ overtitle: val })}
						/>
						<RichText
							tagName={"h" + attributes.titleLevel}
							className={"highlight-pdf__content-title"}
							placeholder={__('Titre', 'Gutenberg-back')}
							value={attributes.title}
							onChange={(val) => setAttributes({ title: val })}
						/>

						<div className="highlight-pdf__content-pdf">
							{ ! attributes.pdfId ? (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectPdf}
										allowedTypes={ [ 'application/pdf' ] }
										value={ attributes.pdfId }
										render={ ( { open } ) => (
											<Placeholder
												icon="pdf"
												label={ __( 'PDF à mettre en avant', 'Gutenberg-back' ) }
												instructions={ __( 'Séléctionner le PDF à mettre en avant', 'Gutenberg-back' ) }
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
								<div className="highlight-pdf__content-pdf-render">
									<div>
										<div className="highlight-pdf__content-pdf-link">
											<a href={attributes.pdfUrl} className="" target="_blank">
												{attributes.pdfText ? attributes.pdfText : sprintf(__('Ouvrir le PDF - %s', 'Gutenberg-back'), attributes.pdfSize)}
											</a>
											<Button
												onClick={onRemovePdf}
												icon="dismiss"
												title={__( 'Supprimer le PDF', 'Gutenberg-block' )}
											>
											</Button>
										</div>
									</div>

									{attributes.pdfUrl ? (
										<RichText
											tagName="div"
											className="highlight-pdf__content-pdf-btn-text"
											allowedFormats={[]}
											placeholder={sprintf(__('Ouvrir le PDF - %s', 'Gutenberg-back'), attributes.pdfSize)}
											value={attributes.pdfText}
											onChange={(pdfText) => setAttributes({ pdfText})}
										/> 
									) : ''}
								</div>
							) }

							<div className="admin-btn-link highlight-pdf__content-link">
								<div className="admin-btn-link__input">
									<URLInput
										value={ attributes.btnUrl }
										className="urlSlector"
										onChange={ (url, post) => setAttributes({btnUrl: url})}
									/>
								</div>
								<div className="admin-btn-link__content">
									<span className="admin-btn-link__icon">
										<span className="dashicon dashicons dashicons-arrow-right-alt"></span>
									</span>
									<span>
									<RichText
											tagName="span"
											className="highlight-pdf__content-link-text"
											allowedFormats={[]}
											placeholder={ __( 'Intitulé du bouton', 'Gutenberg-back' ) }
											value={ attributes.btnText }
											onChange={ btnText => setAttributes( { btnText } ) }
										/>
									</span>
								</div>
							</div>
							<div>
								<ToggleControl
										label={__('Ouvrir le lien dans un nouvel onglet', 'Gutenberg-block')}
										checked={ attributes.btnTarget }
										onChange={ () => setAttributes({btnTarget: ! attributes.btnTarget})
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
