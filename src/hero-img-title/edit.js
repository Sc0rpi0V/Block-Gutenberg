/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __, sprintf } from '@wordpress/i18n';
import * as wpDate from "@wordpress/date";

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
	InspectorControls,
	URLInput,
	InnerBlocks
} from '@wordpress/block-editor';

import {
	Placeholder,
	Button,
	PanelBody,
	PanelRow,
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

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {

	const { attributes, setAttributes } = props;

	const post = wp.data.select("core/editor").getCurrentPost();
	const postDate = wpDate.format("d F Y", post.date);
	const dateTimestamp = wpDate.format("U", post.date);
	const modifiedTimestamp = wpDate.format("U", post.modified);

	var dateLabel = __('Publié:', 'Gutenberg-back');

	if (dateTimestamp < modifiedTimestamp) {
		dateLabel = __('Mise à jour', 'Gutenberg-back')
	}

	props.setAttributes({ dateLabel: dateLabel });
	props.setAttributes({ postDate: postDate });

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

	const TEMPLATE = [['yoast-seo/breadcrumbs']];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Options du bloc', 'Gutenberg-back')} initialOpen={true}>
					<PanelRow>
						<ToggleControl
							label={__('Afficher le fil d\'ariane', 'Gutenberg-block')}
							checked={attributes.showBreadcrumb}
							onChange={() => props.setAttributes({ showBreadcrumb: !attributes.showBreadcrumb })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Afficher la date et l\'auteur', 'Gutenberg-block')}
							checked={attributes.showDateAndAuthor}
							onChange={() => props.setAttributes({ showDateAndAuthor: !attributes.showDateAndAuthor })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Afficher un texte de description', 'Gutenberg-block')}
							checked={attributes.showText}
							onChange={() => setAttributes({
								showText: !attributes.showText
							})
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Afficher une référence sous le titre', 'Gutenberg-block')}
							checked={attributes.showRef}
							onChange={() => setAttributes({
								showRef: !attributes.showRef
							})
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Afficher les boutons (maximum 2)', 'Gutenberg-block')}
							checked={attributes.showBtns}
							onChange={() => setAttributes({ showBtns: !attributes.showBtns })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>

				{attributes.showBreadcrumb ? 
					<div className="hero-breadcrumb">
						<InnerBlocks
							template={TEMPLATE}
							templateLock="all"
						/>
					</div>
				: ''}
				<div className="hero-img-title">
					<div className="hero-img-title__img">
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
					<div className="hero-img-title__content">
						{attributes.showDateAndAuthor && (
							<div className="hero-img-title__content-info">
								<span className="hero-img-title__content-info-date">{sprintf(__('%s le %s'), dateLabel, postDate)}</span>
								<span className="hero-img-title__content-info-author">
									<span className="hero-img-title__content-info-author-text">{__('Ecrit par:')}</span>
									<span className="hero-img-title__content-info-author-name">
										<TextControl
											placeholder={__('Nom et prénom de l\'auteur/autrice', 'Gutenberg-back')}
											value={attributes.author}
											onChange={author => props.setAttributes({ author: author })}
										/>
									</span>
								</span>
							</div>
						)}

						<RichText
							tagName="h1"
							className={"hero-img-title__content-title"}
							placeholder={__('Titre', 'Gutenberg-back')}
							value={attributes.title}
							onChange={(val) => setAttributes({ title: val })}
						/>

						{attributes.showText && (
							<div class="hero-img-title__content-text">
								<RichText
									tagName="div"
									className={"hero-img-title__content-text-input"}
									placeholder={__('Texte de description', 'Gutenberg-back')}
									value={attributes.textContent}
									onChange={(val) => setAttributes({ textContent: val })}
								/>
							</div>
						)}
						{attributes.showRef && (
							<div class="hero-img-title__content-ref">
								<RichText
									tagName="div"
									className={"hero-img-title__content-ref-input"}
									placeholder={__('Texte de la référence', 'Gutenberg-back')}
									value={attributes.refContent}
									onChange={(val) => setAttributes({ refContent: val })}
								/>
							</div>
						)}
						{attributes.showBtns && (
							<div class="hero-img-title__content-btns">
								<div className="hero-img-title__content-btn hero-img-title__content-btn--1 btn btn--1">
									<div className="hero-img-title__content-btn-inner">
										<URLInput
											value={attributes.btnUrl1}
											onChange={(url, post) => setAttributes(
												{ btnUrl1: url }
											)}
										/>
										<div className="">
											<TextControl
												placeholder={__('Intitulé du bouton', 'Gutenberg-back')}
												value={attributes.btnText1}
												onChange={btnText => setAttributes({ btnText1: btnText })}
											/>
										</div>
										<div className="">
											<ToggleControl
												label={__('Ouvrir le lien dans nouvel onglet ?', 'Gutenberg-block')}
												checked={attributes.btnTarget1}
												onChange={() => setAttributes({ btnTarget1: !attributes.btnTarget1 })}
											/>
										</div>
									</div>
								</div>
								<div className="hero-img-title__content-btn hero-img-title__content-btn--2 btn btn--2">
									<div className="hero-img-title__content-btn-inner">
										<URLInput
											value={attributes.btnUrl2}
											onChange={(url, post) => setAttributes(
												{ btnUrl2: url }
											)}
										/>
										<div className="">
											<TextControl
												placeholder={__('Intitulé du bouton', 'Gutenberg-back')}
												value={attributes.btnText2}
												onChange={btnText => setAttributes({ btnText2: btnText })}
											/>
										</div>
										<div className="">
											<ToggleControl
												label={__('Ouvrir le lien dans nouvel onglet ?', 'Gutenberg-block')}
												checked={attributes.btnTarget2}
												onChange={() => setAttributes({ btnTarget2: !attributes.btnTarget2 })}
											/>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
