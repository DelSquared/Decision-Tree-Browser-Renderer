# Decision-Tree-Browser-Renderer
Decision Tree Browser Renderer

To use, the browser console is required.

- Go to https://delsquared.github.io/Decision-Tree-Browser-Renderer/
- Press `ctrl + shift + J`
- To reset the tree simply type the command `t = new Tree("Head Title")`
- To add nodes type `t.add_subnode('Subnode Title')`. These subnodes are then stored in the list `t.subnodes`
- To add sub-subnodes type `t.subnodes[index].add_subnode('Sub-subnode Title')`
