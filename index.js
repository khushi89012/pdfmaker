const PdfDocument = require("pdfkit");
const fs = require("fs");
const doc = new PdfDocument();


let filename = 'example.pdf';
let heading ="This example pdf for you with fontsize"
let nextPage  = "This is heading for another page"
let imageLink = 'example.PNG'



doc.pipe(fs.createWriteStream(filename));





doc.fontSize(27).text(heading, 100, 100);

doc.image(imageLink, {
  fit: [300, 300],
  align: "center",
  valign: "center",
});

doc.addPage().fontSize(18).text(nextPage, 100, 100);

doc
  .scale(0.6)
  .translate(470, -380)
  .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
  .fill("red", "even-odd")
  .restore();

// Add some text with annotations
doc
  .addPage()
  .fillColor("blue")
  .text("This is where you can add your link to text", 100, 100)

  .link(100, 100, 160, 27, "https://www.hackerrank.com/dashboard");

doc.end();
