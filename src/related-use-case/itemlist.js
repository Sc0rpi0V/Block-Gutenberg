import { __ } from '@wordpress/i18n';

import {
	Button,
} from '@wordpress/components';

import PostSelector from '../post-selector'

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.refItems) ? [...attributes.refItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.refItems) ? [...attributes.refItems] : []

		tab.push({
			use_case: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.refItems) ? [...attributes.refItems] : []

		tab.splice(index, 1);

		return tab
	}

    const renderRefItems = attributes.refItems.map((refItem, index) => {
		return (
			<>
                {(attributes.refItems.length > 0) ? (
                    <div data-id={index} className="related-use-case__item">
                        <div class="post-selector">
                            <PostSelector
                                onPostSelect={ref => {
                                    setAttributes({
                                            refItems: updateElement(refItem, { use_case: ref }, index),
                                        }
                                    )
                                }}
                                posts={attributes.refItems[index].use_case ? attributes.refItems[index].use_case : {}}
                                onChange={newValue => {setAttributes({
                                        refItems: updateElement(refItem, { use_case: newValue }, index),
                                    })
                                }}
                                postType={['use_case']}
                                limit='1'
                                saveLowPostData={true}
                            />

                        </div>
                        <div className="post-card">
                            <Button
                                isDestructive
                                className="removePostItem"
                                variant="secondary"
                                icon="no-alt"
                                onClick={() => { setAttributes({ refItems: deleteElement(index) }) }}
                            >
                                {__('Supprimer la référence', 'Gutenberg-back')}
                            </Button>
                        </div>
                    </div>
                ) : ''}
            </>
        )
    })

    return (
        <>
            <div className={"related-use-case__items related-use-case__items--" + attributes.refItemsStyle}>
                {renderRefItems}
            </div>
            <div className="related-use-case__items-add">
                <Button
                    className="is-aligned-center"
                    icon="plus"
                    variant="primary"
                    onClick={() => { setAttributes({
                                refItems: addElement(),
                            })
                        }
                    }
                >
                    {__('Ajouter une référence', 'Gutenberg-back')}
                </Button>
            </div>
        </>
    )
}