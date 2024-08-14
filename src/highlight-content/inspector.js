import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ButtonGroup,
	Button
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
            <PanelBody title={__('Options du bloc Mise en avant', 'Gutenberg-back')} initialOpen={true}>
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
                <PanelRow>
					<label>{__('Position de l\'image:', 'Gutenberg-block')}</label>
				</PanelRow>
				<PanelRow>
					<ButtonGroup>
						{ ['left', 'right'].map( (pos) => (
							<Button
								isLarge
								variant={ attributes.heading_affichage == pos ? 'primary' : '' }
								onClick={ () => setAttributes(
										{ 
											heading_affichage: pos,
									} 
								)}
							>
								{ pos === 'left' ?
									(
										<span className="dashicon dashicons dashicons-align-pull-left"></span>
									) :  pos === 'right' ? (
										<span className="dashicon dashicons dashicons-align-pull-right"></span>
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