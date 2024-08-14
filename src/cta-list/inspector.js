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
						<p>{__('Limité à 4 éléments CTA.', 'Gutenberg-back')}</p>
					</Tip>
					<Tip>
					<p>{__('Si aucun élément n\'est renseigné, le bloc ne s\'affichera pas.', 'Gutenberg-back')}</p>
					</Tip>
			</PanelBody>
            <PanelBody title={__('Options du bloc Liste de CTA', 'Gutenberg-back')} initialOpen={true}>
                <PanelRow>
                    <label>{__('Niveau du titre de la categorie du bloc', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['2', '3', '4', '5', '6'].map( (nbr) => (
                            <Button
                                isLarge
                                variant={ attributes.overtitleLevel == nbr ? 'primary' : '' }
                                onClick={ () => setAttributes( { overtitleLevel: nbr } ) }
                            >
                                {'h' + nbr}
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
                <PanelRow>
                    <label>{__('Niveau du titre principal du bloc:', 'Gutenberg-block')}</label>
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