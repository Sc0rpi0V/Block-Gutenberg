/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __, sprintf } from '@wordpress/i18n';

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
	Button,
	TextControl,
	Placeholder,
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

	const onSelectMainPdf = pdf => {
		props.setAttributes( {
			mainPdfId: pdf.id,
			mainPdfUrl: pdf.url,
			mainPdfSize: pdf.filesizeHumanReadable,
			mainPdfName: pdf.filename
		});
	};

	const onRemoveMainPdf = () => {
		props.setAttributes({
			mainPdfId: null,
			mainPdfUrl: null,
			mainPdfSize: null,
			mainPdfName: null
		});
	};

	const onSelectSecondPdf = pdf => {
		props.setAttributes( {
			secondPdfId: pdf.id,
			secondPdfUrl: pdf.url,
			secondPdfSize: pdf.filesizeHumanReadable,
			secondPdfName: pdf.filename
		});
	};

	const onRemoveSecondPdf = () => {
		props.setAttributes({
			secondPdfId: null,
			secondPdfUrl: null,
			secondPdfSize: null,
			secondPdfName: null
		});
	};

	const updateElement = (elt, object, index) => {
		const tab = (attributes.chapters) ? [...attributes.chapters] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.chapters) ? [...attributes.chapters] : []

		tab.push({
			tag: '',
			chapterTitle: '',
			title: '',
			pdfUrl: '',
			pdfId: 0,
			pdfName: '',
			pdfSize: '',
			btnText: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.chapters) ? [...attributes.chapters] : []

		tab.splice(index, 1);

		return tab
	}

	const renderChapter = attributes.chapters.map((chapter, index) => {
		return (
			<>
			{(attributes.chapters.length > 0) ? (
				<div data-id={index} className="pdf-chapters__item" >
					<div>
						<TextControl
							tagName="div"
							className={"pdf-chapters__item-tag"}
							placeholder={__('Tag du chapitre PDF', 'Gutenberg-back')}
							value={chapter.tag}
							onChange={(tag) => setAttributes({ chapters: updateElement(chapter, { tag }, index) })}
						/>
					</div>
					<div>
						<TextControl
							tagName="div"
							className={"pdf-chapters__item-chapterTitle"}
							placeholder={__('Titre du chapitre PDF', 'Gutenberg-back')}
							value={chapter.chapterTitle}
							onChange={(chapterTitle) => setAttributes({ chapters: updateElement(chapter, { chapterTitle }, index) })}
						/>
					</div>
					<RichText
						tagName="div"
						className="pdf-chapters__item-title"
						placeholder={__('Titre de la tuile', 'Gutenberg-back')}
						value={chapter.title}
						onChange={(title) => setAttributes({ chapters: updateElement(chapter, { title }, index) })}
					/>

					<div className="pdf-chapters__item-fileUrl">
						{ ! chapter.pdfUrl ? (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(pdf) => 
										setAttributes({
											chapters: updateElement(chapter, { pdfUrl: pdf.url, pdfId: pdf.id, pdfName: pdf.filename, pdfSize: pdf.filesizeHumanReadable }, index)
										}
									)}
									allowedTypes={ ['application/pdf'] }
									value={ chapter.pdfId }
									render={ ( { open } ) => (
										<Placeholder
											icon="pdf"
											label={ __( 'Chapitre', 'Gutenberg-back' ) }
											instructions={ __( 'Séléctionner un chapitre', 'Gutenberg-back' ) }
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
							<div class="chapter-pdfInner">
								<span className="dashicon dashicons dashicons-pdf"></span>
								<a href={chapter.pdfUrl} className="pdfRenderLink" target="_blank">
									{chapter.pdfName ? chapter.pdfName :  __('Voir le PDF', 'Gutenberg-back')}
								</a>
								<Button
									className=""
									onClick={() => setAttributes({
										chapters: updateElement(chapter, { pdfUrl: null, pdfId: null, pdfName: null }, index)
									}
									)}
									title={__("Supprimer le PDF", "Gutenberg-block")}
									icon="dismiss"
								>
								</Button>
							</div>
						) }
					</div>

					{ chapter.pdfUrl ? (
						<div>
							<div>
								<div className="pdf-chapters__btn-text">
									<RichText
										tagName="div"
										className="pdf-chapters__btn-input"
										placeholder={__('Télécharger ce chapitre', 'Gutenberg-back')}
										value={chapter.btnText}
										onChange={(title) => setAttributes({ chapters: updateElement(chapter, { btnText: title }, index) })}
									/> 
								</div>
							</div>
						</div>
					) : ''}

					<Button
						isDestructive
						className="pdf-chapters__item-remove"
						variant="secondary"
						icon="no-alt"
						onClick={() => { setAttributes({ chapters: deleteElement(index) }) }}
					>
						{__('Supprimer un chapitre', 'Gutenberg-back')}
					</Button>
				</div>
			) : ''}
			</>
		)
	});

	return (
		<>
			<Inspector 
				{...props}
			/>

			<div { ...useBlockProps() }>
				<div className="pdf-chapters">
					<div className="pdf-chapters__inner">
						<RichText
							tagName={"h" + attributes.overtitleLevel}
							className="pdf-chapters__overtitle h5"
							placeholder={__('Surtitre', 'Gutenberg-back')}
							allowedFormats={[]}
							value={attributes.overtitle}
							onChange={(val) => props.setAttributes({overtitle: val})}
						/>
						<RichText
							tagName={"h" + attributes.titleLevel}
							className="pdf-chapters__title h1"
							placeholder={__('Titre', 'Gutenberg-back')}
							allowedFormats={['core/text-color']}
							value={attributes.title}
							onChange={(val) => props.setAttributes({title: val})}
						/>

						<div className="pdf-chapters__items">
							{renderChapter}
						</div>

						<div className="pdf-chapters__add">
							<Button
								className="is-aligned-center"
								icon="plus"
								variant="secondary"
								onClick={() => { setAttributes({ chapters: addElement() }) }}
							>
								{__('Ajouter un chapitre', 'Gutenberg-back')}
							</Button>
						</div>

						<div className="pdf-chapters__buttons">
							<div className="pdf-chapters__button-item pdf-chapters__mainPdf">
								{ ! attributes.mainPdfId ? (
									<MediaUploadCheck>
										<MediaUpload
											onSelect={onSelectMainPdf}
											allowedTypes={ [ 'application/pdf' ] }
											value={ attributes.mainPdfId }
											render={ ( { open } ) => (
												<Placeholder
													icon="pdf"
													label={ __( 'PDF du bouton 1', 'Gutenberg-back' ) }
													instructions={ __( 'Séléctionner le PDF principal du bouton 1', 'Gutenberg-back' ) }
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
									<div className="pdf-chapters__button-item-inner">
										<div>
											<div className="pdf-chapters__button-item-aligner">
												<span className="dashicon dashicons dashicons-pdf"></span>
												<a href={attributes.mainPdfUrl} className="pdf-chapters__button-item-link" target="_blank">
													{attributes.mainPdfName ? attributes.mainPdfName :  __('Voir le PDF', 'Gutenberg-back')}
												</a>
												<Button
													onClick={onRemoveMainPdf}
													icon="dismiss"
													title={__( 'Supprimer le PDF du bouton 1', 'Gutenberg-block' )}
												>
												</Button>
											</div>
										</div>

										{attributes.mainPdfUrl ? (
											<RichText
												tagName="div"
												className="pdf-chapters__button-item-input pdf-chapters__button-item-input--1"
												placeholder={sprintf(__('Télécharger le PDF - %s', 'Gutenberg-back'), attributes.mainPdfSize)}
												value={attributes.mainPdfText}
												onChange={(title) => setAttributes({ mainPdfText: title})}
											/> 
										) : ''}

									</div>
								) }
							</div>
							<div className="pdf-chapters__button-item pdf-chapters__secondPdf">
								{ ! attributes.secondPdfId ? (
									<MediaUploadCheck>
										<MediaUpload
											onSelect={onSelectSecondPdf}
											allowedTypes={ [ 'application/pdf' ] }
											value={ attributes.secondPdfId }
											render={ ( { open } ) => (
												<Placeholder
													icon="pdf"
													label={ __( 'PDF du bouton 2', 'Gutenberg-back' ) }
													instructions={ __( 'Séléctionner le PDF principal du bouton 2', 'Gutenberg-back' ) }
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
									<div className="pdf-chapters__button-item-inner">
										<div>
											<div className="pdf-chapters__button-item-aligner">
												<span className="dashicon dashicons dashicons-pdf"></span>
												<a href={attributes.secondPdfUrl} className="pdf-chapters__button-item-link" target="_blank">
													{attributes.secondPdfName ? attributes.secondPdfName :  __('Voir le PDF', 'Gutenberg-back')}
												</a>
												<Button
													onClick={onRemoveSecondPdf}
													icon="dismiss"
													title={__( 'Supprimer le PDF du bouton 2', 'Gutenberg-block' )}
												>
												</Button>
											</div>
										</div>

										{attributes.secondPdfUrl ? (
											<RichText
												tagName="div"
												className="pdf-chapters__button-item-input pdf-chapters__button-item-input--2"
												placeholder={sprintf(__('Télécharger le PDF - %s', 'Gutenberg-back'), attributes.secondPdfSize)}
												value={attributes.secondPdfText}
												onChange={(title) => setAttributes({ secondPdfText: title})}
											/> 
										) : ''}
									</div>
								) }
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}