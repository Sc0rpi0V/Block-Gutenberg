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
		const tab = (attributes.cloudItems) ? [...attributes.cloudItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.cloudItems) ? [...attributes.cloudItems] : []

		tab.push({
			text: '',
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.cloudItems) ? [...attributes.cloudItems] : []

		tab.splice(index, 1);

		return tab
	}

    const renderCloudItems = attributes.cloudItems.map((cloudItem, index) => {
		return (
			<>
                {(attributes.cloudItems.length > 0) ? (
                    <div data-id={index} className="texts-cloud__item">
                        <RichText
                            tagName="div"
                            className={"texts-cloud__item-text"}
                            placeholder={__('Texte', 'Gutenberg-back')}
                            value={cloudItem.text}
                            onChange={(text) => setAttributes({
                                    cloudItems: updateElement(cloudItem, { text }, index)
                                }
                            )}
                        />
                        <Button
                            isDestructive
                            className="removeCloudItem"
                            variant="secondary"
                            icon="no-alt"
                            onClick={() => { setAttributes({ cloudItems: deleteElement(index) }) }}
                        >
                        </Button>
                    </div>
                ) : ''}
            </>
        )
    })

    return (
        <>
            <div className="texts-cloud__items">
                {renderCloudItems}
            </div>
            <div className="texts-cloud__items-add">
                <Button
                    className="is-aligned-center"
                    icon="plus"
                    variant="primary"
                    onClick={() => { setAttributes({
                                cloudItems: addElement(),
                            })
                        }
                    }
                >
                    {__('Ajouter un texte', 'Gutenberg-back')}
                </Button>
            </div>
        </>
    )
}