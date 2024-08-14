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
	MediaUpload,
	MediaUploadCheck,
	URLInput
} from '@wordpress/block-editor';

import {
	Placeholder,
	Button,
	TextControl,
	SandBox,
	TextareaControl 
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

	const { setAttributes, attributes } = props;

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
		<div {...useBlockProps()}>

			<div className="video-iframe">
				<div class="video-iframe__header block-heading__wrapper center">
					<RichText
						tagName={"h" + attributes.overtitleLevel}
						className={"video-iframe__overtitle"}
						placeholder={__('Surtitre', 'Gutenberg-back')}
						allowedFormats={[]}
						value={attributes.overtitle}
						onChange={(overtitle) => setAttributes({overtitle})}
					/>
					<RichText
						tagName={"h" + attributes.titleLevel}
						className={"video-iframe__title"}
						placeholder={__('Titre', 'Gutenberg-back')}
						allowedFormats={['core/text-color']}
						value={attributes.title}
						onChange={(title) => setAttributes({title})}
					/>
					<RichText
						tagName="div"
						className={"video-iframe__content"}
						placeholder={__('Description', 'Gutenberg-back')}
						value={attributes.description}
						onChange={(description) => setAttributes({description})}
					/>
				</div>
			</div>
			<div className="video-iframe__inner">
				<div className="video-iframe__iframe-conf">
					{ attributes.iframe ?
						<div className="video-iframe__iframe-preview">
							<SandBox
								html={ attributes.iframe }
								type="embed"
							/>
							<Button
								className="video-iframe__iframe-remove"
								onClick={() => props.setAttributes({iframe: ''})}
								variant='primary'
								icon="dismiss"
							>
								{__('Supprimer l\'iframe', 'Gutenberg-block')}
							</Button>
						</div>
						: '' 
					}
					<div className="video-iframe__iframe-area">
						<TextareaControl
							label={__('Insérer le code iframe', 'Gutenberg-back')}
							value={attributes.iframe}
							onChange={(iframe) => props.setAttributes({iframe})}
							placeholder={__('exemple : <iframe src="https://www.youtube.com/embed/....."></iframe>', 'Gutenberg-back')}
						/>
					</div>
					<TextControl
						className="video-iframe__iframe-legend"
						label={__('Légende:', 'Gutenberg-back')}
						value={attributes.legend}
						onChange={(legend) => props.setAttributes({legend})}
					/>
				</div>
				<div className="video-iframe__image-placeholder">
					{!attributes.pictureId ? (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectImage}
								allowedTypes={['image']}
								value={attributes.pictureId}
								render={({ open }) => (
									<Placeholder
										icon="images-alt"
										label={__('Image de remplacement de l\'iframe', 'Gutenberg-back')}
										instructions={__('Séléctionner une image, qui sera affichée avant et pendant le chargement de l\'iframe.', 'Gutenberg-back')}
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
						<figure className="">
							<img
								src={attributes.pictureSrc}
								alt={attributes.pictureAlt}
							/>

							{props.isSelected && (

								<Button
									className=""
									onClick={onRemoveImage}
									icon="dismiss"
								>
									{__('Supprimer l\'image', 'Gutenberg-block')}
								</Button>
							)}
						</figure>
					)}
				</div>
			</div>
			<div className="video-iframe__buttons">
				<div className="video-iframe__button-transcription">
					<div className="link admin-btn-link">
						<div className="admin-btn-link__input">
							<span className="video-iframe__button-label">
								{__('Lien de retranscription:', 'Gutenberg-back')}
							</span>
							<URLInput
								value={ attributes.transcriptionUrl }
								className="urlSlector"
								onChange={ (url, post) => setAttributes({transcriptionUrl: url})}
							/>
							<div className="admin-btn-link__content">
								<span>
									<TextControl
										placeholder={ __( 'Intitulé du bouton', 'Gutenberg-back' ) }
										value={ attributes.transcriptionText }
										onChange={ btnText => setAttributes( { transcriptionText: btnText } ) }
									/>
								</span>
								<span className="admin-btn-link__icon">
									<span className="dashicon dashicons dashicons-arrow-right-alt"></span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="video-iframe__button-more">
					<div className="btn admin-btn-link">
						<div className="admin-btn-link__input">
							<URLInput
								value={ attributes.btnUrl }
								className="urlSlector"
								onChange={ (url, post) => setAttributes({btnUrl: url})}
							/>
						</div>
						<div className="admin-btn-link__content">
							<span>
								<TextControl
									placeholder={ __( 'Intitulé du bouton', 'Gutenberg-back' ) }
									value={ attributes.btnText }
									onChange={ btnText => setAttributes( { btnText} ) }
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
