import { __ } from '@wordpress/i18n';

import {
	Button,
} from '@wordpress/components';

import PostSelector from '../post-selector'

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.subsidiaryItems) ? [...attributes.subsidiaryItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.subsidiaryItems) ? [...attributes.subsidiaryItems] : []

		tab.push({
			subsidiary: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.subsidiaryItems) ? [...attributes.subsidiaryItems] : []

		tab.splice(index, 1);

		return tab
	}

  const rendersubsidiaryItems = attributes.subsidiaryItems.map((postItem, index) => {
		return (
			<>
        {(attributes.subsidiaryItems.length > 0) ? (
          <div data-id={index} className="related-subsidiarys__item">
            <div class="post-selector">
              <PostSelector
                onPostSelect={post => {
                  setAttributes({
                    subsidiaryItems: updateElement(postItem, { subsidiary: post }, index),
                  })
                }}
                posts={attributes.subsidiaryItems[index].subsidiary ? attributes.subsidiaryItems[index].subsidiary : {}}
                onChange={newValue => {setAttributes({
                    subsidiaryItems: updateElement(postItem, { subsidiary: newValue }, index),
                  })
                }}
                postType={['subsidiary']}
                limit='1'
             />

            </div>
            <div className="post-card">
              <Button
                isDestructive
                className="removePostItem"
                variant="secondary"
                icon="no-alt"
                onClick={() => { setAttributes({ subsidiaryItems: deleteElement(index) }) }}
              >
                {__('Supprimer la filiale', 'Gutenberg-back')}
              </Button>
            </div>
          </div>
          ) : ''}
      </>
        )
    })

    return (
      <>
        <div className="related-subsidiarys__items">
          {rendersubsidiaryItems}
        </div>
        <div className="related-subsidiarys__items-add">
          <Button
            className="is-aligned-center"
            icon="plus"
            variant="primary"
            onClick={() => { setAttributes({
                  subsidiaryItems: addElement(),
                })
              }
            }
          >
            {__('Ajouter une filiale', 'Gutenberg-back')}
          </Button>
        </div>
      </>
    )
}