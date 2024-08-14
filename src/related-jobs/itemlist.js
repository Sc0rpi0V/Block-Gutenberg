import { __ } from '@wordpress/i18n';

import {
	Button,
} from '@wordpress/components';

import PostSelector from '../post-selector'

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.jobItems) ? [...attributes.jobItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.jobItems) ? [...attributes.jobItems] : []

		tab.push({
			job: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.jobItems) ? [...attributes.jobItems] : []

		tab.splice(index, 1);

		return tab
	}
    const renderJobItems = attributes.jobItems.map((jobItem, index) => {
		return (
			<>
                {(attributes.jobItems.length > 0) ? (
                    <div data-id={index} className="related-jobs__item">
                        <div class="post-selector">
                            <PostSelector
                                onPostSelect={post => {
                                    setAttributes({
                                            jobItems: updateElement(jobItem, { job: post }, index),
                                        }
                                    )
                                }}
                                posts={attributes.jobItems[index].job ? attributes.jobItems[index].job : {}}
                                onChange={newValue => {setAttributes({
                                        jobItems: updateElement(jobItem, { job: newValue }, index),
                                    })
                                }}
                                postType={['job']}
                                limit='1'
                                saveLowPostData={true}
                            />

                        </div>
                        <div className="job-card">
                            <Button
                                isDestructive
                                className="removePostItem"
                                variant="secondary"
                                icon="no-alt"
                                onClick={() => { setAttributes({ jobItems: deleteElement(index) }) }}
                            >
                                {__('Supprimer le métier', 'Gutenberg-back')}
                            </Button>
                        </div>
                    </div>
                ) : ''}
            </>
        )
    })

    return (
        <>
            <div className="related-job__items">
                {renderJobItems}
            </div>
            <div className="related-job__items-add">
                <Button
                    className="is-aligned-center"
                    icon="plus"
                    variant="primary"
                    onClick={() => { setAttributes({
                                jobItems: addElement(),
                            })
                        }
                    }
                >
                    {__('Ajouter un métier', 'Gutenberg-back')}
                </Button>
            </div>
        </>
    )
}