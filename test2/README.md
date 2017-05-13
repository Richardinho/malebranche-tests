# Test: Converting an Icomoon font icon into a clip path

How to use svg font icons from Icomoon as clip paths.

The following image shows two identically sized pink squares. The second square looks like a clock because it has had a clip path in the shape of a clock applied to it.

![example 1](https://richardinho.github.io/malebranche-tests/test2/images/example-1.png)
[live demo](https://richardinho.github.io/malebranche-tests/test2/)

This picture demonstrates one of the issues with working with the CSS `clip-path` property: The coordinates of the applied clip path are the same as those of the original SVG clip path, relative to the position of the html element itself. That is to say the zero x and y coordinates of the original clip path will be located at the left and top edges respectively of the html element to which the clip path is applied. The dimensions of the html element have no effect whatsoever on the clip path. This my be satisfactory some of the time, but often we will wish the clip path to stretch and scale to fit the containing element.


Fortunately this problem is solvable, as you can see in the next image.

![example 2](https://richardinho.github.io/malebranche-tests/test2/images/example-2.png)
[live demo](https://richardinho.github.io/malebranche-tests/test2/index2.html)

Here we have a similar set up. There are two identically sized green squares in this picture, with the second square having a clip path applied to it. This time, however, the clip path scales and stretches to fit the element.


What we have done is added the `clipPathUnits` attribute to the SVG clip path element with a value of `objectBoundingBox`. Then, we have use Malebranche to covert the absolute coordinates of the source SVG image into proportional units. 