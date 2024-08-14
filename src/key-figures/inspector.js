import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
    PanelRow,
	ButtonGroup,
	Button,
    Tip
} from '@wordpress/components';

export default function Inspector(props) {

    const { attributes, setAttributes } = props;

    const icons = [
        'none',
        'before',
        'after',
        'external'
    ];

    return(
        <InspectorControls>
            <PanelBody>
                <Tip>
                    <p>{__('Limité à 6 Chiffres clés', 'Gutenberg-back')}</p>
                </Tip>
                <PanelRow>
                    <label>{__('Niveau du titre princiapl du bloc', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['2', '3', '4', '5', '6'].map( (nbr) => (
                            <Button
                                isLarge
                                variant={ attributes.titleLevel == nbr ? 'primary' : '' }
                                onClick={ () => setAttributes( { titleLevel: nbr } ) }
                            >
                                {'h' + nbr}
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    )
}