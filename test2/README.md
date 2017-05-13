# Test: Converting an Icomoon font icon into a clip path

How to use svg font icons from Icomoon as clip paths.

In the first example, an SVG fragment has been inlined into an HTML page. The SVG fragment contains a clip path element which contains a path element. This path element has been lifted as is from a clock svg downloaded from Icomoon. Also on the page is an html element. This element has a CSS rule set applied to it which includes a clip path declaration which references the aforementioned SVG clip path. The result is that the html element is clipped in the shape of a clock.

![example 1](https://richardinho.github.io/malebranche-tests/test2/images/example-1.png)

The first example demonstrates the simple use of the CSS `clip-path` property.
It displays to identically sized pink squares, one on top of the other.
The important difference between them is that the second square has a clip path applied to it. The resulting effect is that it is clipped in the shape of the clip path, in this case a clock.

The comparison of these two elements should illustrate one of the problems of clip paths. The coordinates of the clip path applied to the element are derived directly from those in the source svg clip path. The clip path takes as the location of its zero x and y coordinates the left and top edges of the HTML element that it is applied to. Other than that translation, the clip path uses the same coordinate system as the page in general. This means, as we can see here, that the clip path bears no relation whatsoever to the dimensions of the applied element.

This is a problem for us if we want the clip path to vary as we resize its applied element.
This is possible if we add the clipPathUnits attribute to the clipPath element and set its value to 'objectBoundingBox', but we also need to change the coordinates of the clip path from absolute to proportional ones. Malebranche will do this for us. Given the viewbox of the original clip path is: '0 0 32 32' we will set the width and height options to 32 and 32.
This means that if an x coordinate is 16, the resulting proportionate coord will be 16 / 32 = .5.
When we then apply the new clip path to our element it will scale and stretch to match its dimensions.
You can see this happening in example 2.

![](https://richardinho.github.io/malebranche-tests/test2/images/example-2.png)


[example 1](https://richardinho.github.io/malebranche-tests/test2/)

[example 2](https://richardinho.github.io/malebranche-tests/test2/index2.html)
