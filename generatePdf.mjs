import fs from 'fs';
import { PDFDocument, rgb } from 'pdf-lib';

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  page.drawText('Vinay Pratap Singh - Resume', {
    x: 50,
    y: 350,
    size: 24,
    color: rgb(0, 0, 0),
  });
  page.drawText('Please replace this file (public/resume.pdf) with your actual CV.', {
    x: 50,
    y: 300,
    size: 14,
    color: rgb(0.5, 0.5, 0.5),
  });
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('./public/resume.pdf', pdfBytes);
  console.log('Dummy PDF created successfully.');
}

createPdf();
