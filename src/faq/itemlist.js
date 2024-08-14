import { __ } from '@wordpress/i18n';

import {
	RichText, 
    URLInput
} from '@wordpress/block-editor';

import {
    ButtonGroup,
	Button,
    TextControl,
    Tip
} from '@wordpress/components';

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.faqItems) ? [...attributes.faqItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.faqItems) ? [...attributes.faqItems] : []

		tab.push({
			question: '',
			questionLevel: '5',
            response: '',
            link_title: '',
            link: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.faqItems) ? [...attributes.faqItems] : []

		tab.splice(index, 1);

		return tab
	}

    const renderFaqItems = attributes.faqItems.map((faqItem, index) => {
		return (
			<>
                {(attributes.faqItems.length > 0) ? (
                    <div data-id={index} className="faq__item">
                        <div className="faq__item-question-options">
                            <RichText
                                tagName={"h" + faqItem.questionLevel}
                                className={"faq__item-question"}
                                placeholder={__('Intitulé de la question', 'Gutenberg-back')}
                                value={faqItem.question}
                                onChange={(question) => setAttributes({
                                        faqItems: updateElement(faqItem, { question }, index)
                                    }
                                )}
                            />
                            { faqItem.question ? 
                                <div className="faq__item-question-level">
                                    <div className="faq__item-question-level-label">
                                        {__('Niveau du tag (Hx) de la question:', 'Gutenberg-back')}
                                    </div>
                                    <ButtonGroup
                                        className="faq__item-question-level-seelctor"
                                    >
                                        { ['2', '3', '4', '5', '6'].map( (nbr) => (
                                            <Button
                                                isLarge
                                                variant={ faqItem.questionLevel == nbr ? 'primary' : '' }
                                                onClick={() => setAttributes({
                                                        faqItems: updateElement(faqItem, { questionLevel: nbr }, index)
                                                    }
                                                )}
                                            >
                                                {'h' + nbr}
                                            </Button>
                                        ) ) }
                                    </ButtonGroup>
                                </div>
                            : '' }
                        </div>
                        <RichText
                            tagName="div"
                            className={"faq__item-response"}
                            placeholder={__('Réponse à la question', 'Gutenberg-back')}
                            value={faqItem.response}
                            onChange={(response) => setAttributes({
                                    faqItems: updateElement(faqItem, { response }, index)
                                }
                            )}
                        />

                        <div className="faq__item-link">
                            <TextControl
								placeholder={ __( 'Intitulé du lien', 'Gutenberg-back' ) }
								value={ faqItem.link_title }
								onChange={(btnText) => setAttributes({
                                        faqItems: updateElement(faqItem, { link_title: btnText }, index)
                                    }
                                )}
							/>
                            <span className="dashicon dashicons dashicons-arrow-right-alt"></span>
                        </div>

                        <div className="faq__item-url">
                               <URLInput 
                                    value={ faqItem.link }
                                    className="faq__item-url-selector"
                                    onChange={(link) => setAttributes({
                                            faqItems: updateElement(faqItem, { link }, index)
                                        }
                                    )}
                               /> 
                               <div className="faq__item-url-tip">
                                    <Tip>
                                        {__('Le lien paramatré ci dessus sera cliquable sur l\'intégralité de la carte.', 'Gutenberg-back')}
                                    </Tip>
                               </div>
                        </div>

                        <div className="faq__item-btn">
                            <Button
                                isDestructive
                                className="removeFaqItem"
                                variant="secondary"
                                icon="no-alt"
                                onClick={() => { setAttributes({ faqItems: deleteElement(index) }) }}
                            >
                                {__('Supprimer la question/reponse', 'Gutenberg-back')}
                            </Button>
                        </div>
                    </div>
                ) : ''}
            </>
        )
    })

    return (
        <>
            <div className="faq__items">
                {renderFaqItems}
            </div>
            <div className="faq__items-add">
                <Button
                    className="is-aligned-center"
                    icon="plus"
                    variant="primary"
                    onClick={() => { setAttributes({
                                faqItems: addElement(),
                            })
                        }
                    }
                >
                    {__('Ajouter une question/reponse', 'Gutenberg-back')}
                </Button>
            </div>
        </>
    )
}