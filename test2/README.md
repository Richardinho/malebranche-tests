# Test: Converting an Icomoon font icon into a clip path

How to use svg font icons from Icomoon as clip paths.

In the first example, an SVG fragment has been inlined into an HTML page. The SVG fragment contains a clip path element which contains a path element. This path element has been lifted as is from a clock svg downloaded from Icomoon. Also on the page is an html element. This element has a CSS rule set applied to it which includes a clip path declaration which references the aforementioned SVG clip path. The result is that the html element is clipped in the shape of a clock.
