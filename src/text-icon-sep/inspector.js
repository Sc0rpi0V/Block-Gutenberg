import { __ } from '@wordpress/i18n';

import { 
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import {
    PanelBody,
	PanelRow,
	ButtonGroup,
	Button
} from '@wordpress/components'

export default function Inspector(props) {

    return (
        <InspectorControls>
            <PanelBody title={__('Style du séparateur', 'Gutenberg-back')} initialOpen={ true }>
                <PanelRow>
                    <ButtonGroup>
                        { ['1', '2', '3', '4'].map( (nbr) => (
                            <Button
                                isLarge
                                variant={ props.attributes.style == nbr ? 'primary' : '' }
                                onClick={ () => props.setAttributes( { style: nbr } ) }
                            >
                                { nbr === '1' ?
                                    (
                                        __("Vagues", "Gutenberg-back")
                                    ) :  nbr === '2' ? (
                                        __("Chevrons", "Gutenberg-back")
                                    ) : nbr === '3' ? (
                                        __("Accents", "Gutenberg-back")
                                    ) : nbr === '4' ? (
                                        __("Points", "Gutenberg-back")	
                                    ) : ''
                                }
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    )
}