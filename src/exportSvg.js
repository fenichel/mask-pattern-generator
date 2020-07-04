

        // patternToSvg(function(datauri) {
        //     var a = document.createElement('a');
        //     a.download = 'screenshot.png';
        //     a.target = '_self';
        //     a.href = datauri;
        //     document.body.appendChild(a);
        //     a.click();
        //     a.parentNode.removeChild(a);
        //   });

/**
 * Convert an SVG datauri into a PNG datauri.
 * @param {string} data SVG datauri.
 * @param {number} width Image width.
 * @param {number} height Image height.
 * @param {!Function} callback Callback.
 */
function svgToPng_(data, width, height, callback) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var img = new Image();

  var pixelDensity = 5;
  canvas.width = width * pixelDensity;
  canvas.height = height * pixelDensity;
  img.onload = function () {
    context.drawImage(
      img, 0, 0)//, 0, 0, width, height, -50, -50, canvas.width, canvas.height);
    try {
      var dataUri = canvas.toDataURL('image/png');
      callback(dataUri);
    } catch (err) {
      console.warn('Error converting the workspace svg to a png');
      callback('');
    }
  };
  img.src = data;
}

/**
* Create an SVG of the blocks on the workspace.
* @param {!Function} callback Callback.
*/
export function patternToSvg(callback) {
  const width = 250;
  const height = 250;

  const svg = cloneSvg();
  var svgAsXML = (new XMLSerializer()).serializeToString(svg);
  console.log(svgAsXML);
  svgAsXML = svgAsXML.replace(/&nbsp/g, '&#160');
  var data = 'data:image/svg+xml,' + encodeURIComponent(svgAsXML);


  svgToPng_(data, width, height, callback);
}

export function cloneSvg() {

  var pattern = document.getElementById('maskPattern');
  var clone = pattern.cloneNode(true);
  var svg = clone;

  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute("style", 'background-color: transparent');

  var css = [].slice.call(document.head.querySelectorAll('style'))
    .filter(function (el) {
      return /\.patternSvg/.test(el.innerText);
    })
    .map(function (el) {
      return el.innerText;
    })
    .join('\n');
  var style = document.createElement('style');
  style.innerHTML = css;
  svg.insertBefore(style, svg.firstChild);

  return svg;
}
