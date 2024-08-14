const { __ } = wp.i18n;
const { createHigherOrderComponent } = wp.compose;
const {  BlockControls } = wp.blockEditor;

import classnames from 'classnames';
import HeadingLevelDropdown from './dropdown';

const setToolbarButtonAttribute = ( settings, name ) => {
    if ( name != 'core/heading' ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
            titleStyle: { type: 'number', default: 3}
        } ),
    } );
};

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'custom-attributes/set-toolbar-button-attribute',
    setToolbarButtonAttribute
);

const withToolbarButton = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        if ( props.name != 'core/heading' ) {
            return (
                <>
                    <BlockEdit { ...props }/>
                </>
            );
        }

        const { attributes, setAttributes } = props;
        const { titleStyle } = attributes;

        return (
            <Fragment>  
                <BlockControls group="block">
                    <HeadingLevelDropdown
                        selectedLevel={ titleStyle }
                        props={props}
                    />
                </BlockControls>
                <BlockEdit { ...props } className={ 'lvl-' + titleStyle } />
            </Fragment>
        );
    };
}, 'withToolbarButton' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'custom-attributes/with-toolbar-button',
    withToolbarButton
);

const withToolbarButtonProp = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
        if ( props.name != 'core/heading' ) {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const { titleStyle } = attributes;

        if (titleStyle) {
            return <BlockListBlock { ...props } className={ 'lvl-' + titleStyle } />
        } else {
            return <BlockListBlock { ...props } />
        }
    };
}, 'withToolbarButtonProp' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'custom-attributes/with-toolbar-button-prop',
    withToolbarButtonProp
);

const saveToolbarButtonAttribute = ( props, blockType, attributes ) => {
    if ( blockType.name == 'core/heading' ) {

        const { titleStyle } = attributes;

        if ( titleStyle ) {
            props.className= classnames(props.className, 'lvl-' + titleStyle);
        }
    }

    return props;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'custom-attributes/save-toolbar-button-attribute',
    saveToolbarButtonAttribute
);