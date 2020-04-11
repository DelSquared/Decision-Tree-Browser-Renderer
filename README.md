# Decision-Tree-Browser-Renderer
A very simple and basic decision-tree in-browser renderer powered by p5.js

To use, the browser console is required.

- Go to https://delsquared.github.io/Decision-Tree-Browser-Renderer/
- Press `ctrl + shift + J`
- To reset the tree simply type the command `t = new Tree("Head Title")`
- To add nodes type `t.add_subnode('Subnode Title')`. These subnodes are then stored in the list `t.subnodes`
- To add sub-subnodes type `t.subnodes[index].add_subnode('Sub-subnode Title')`
