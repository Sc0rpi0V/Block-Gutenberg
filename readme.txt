=== GUTENBERG Plugin Blocks ===
Contributors:      
Tags:              block
Tested up to:      6.1
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

## Register new block : 

go into

```sh
wp-content/plugins/Gutenberg-blocks/src
```

run : 

you can see this url for more informations:
https://www.npmjs.com/package/@wordpress/create-block

```sh
$ npx @wordpress/create-block $blockName --namespace $namespace --category $cat --no-wp-scripts --no-plugin --variant dynamic
```

After your block was created, in his block.json file set the "category" to : Gutenberg-block

If needed, you can add save.js into your block, don't forget to call them into your index file

In GutenbergBlocks\Blocks\Registered, add: 

```sh
register_block_type(BUILD . '/your-block-name');
```

In GutenbergBlocks\Gutenberg\AvailableBlocks add your block name into allowed blocks

go to 

```sh
wp-content/plugins/Gutenberg-blocks
```

and run: 

```sh
npm start 
```
