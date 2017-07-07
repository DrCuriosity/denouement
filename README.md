# Denouement

A non-linear investigation narrative framework.

Early days yes, but I'm hoping this will grow into something that I can do Twine-like interactive network fiction stuff with.


## Structure

The main content element is a `pane`. Panes expect to be inside a `main` element.

At the beginning, these will all be hidden except the one with the `start` ID.

For simple back-and-forth navigation, use the `data-action` element. This takes
a comma-separated list of actions. The `next` and `prev` directions will render
as arrows.


```html
<div id="main">
  <div id="start" class="pane" data-action="next">
    <p>Some text content.</p>
    <p>A second paragraph.</p>
  </div>
  <div class="pane" data-action="prev,next">
    <p>Some more content...</p>
  </div>
  <div class="pane" data-action="prev">
    <p>...progressively revealed.</p>
  </div>
</div>
```
