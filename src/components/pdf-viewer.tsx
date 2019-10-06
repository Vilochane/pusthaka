import React, { useEffect, useRef } from "react"; 
import TextLayerBuilder from 'viewer';
import { getDocument, TextContent } from 'pdfjs-dist';

interface Props {
  src: string
}

function PDFViewer(props: Props) {

  const canvasRef = useRef(null);

  const renderPage = async (canvas: any, canvasContext: any) => {
     
    const doc: any = await getDocument(props.src);
    const page = await doc.getPage(1);
    const scale = canvas.width / page.getViewport(1).width;

    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;


    await page.render({
      canvasContext,
      viewport,
    });

       page.getTextContent().then(function(textContent: TextContent){
           console.log( textContent );
           //@ts-ignore
            var textLayer = new TextLayerBuilder({
                textLayerDiv : document.getElementById('text-layer'),
                pageIndex : 1, //TODO fix
                viewport : viewport
            });

            textLayer.setTextContent(textContent);
            textLayer.render();
        });
  }

  useEffect(() => {

    const canvas = canvasRef.current;
    // @ts-ignore
    const canvasContext = canvas.getContext('2d');
    
    renderPage(canvas, canvasContext);
 

  });

  return <div id="pdf-main-container">
    <div id="pdf-loader">Loading document ...</div>
    <div id="pdf-contents">
      <div id="pdf-meta">
        <div id="pdf-buttons">
          <button id="pdf-prev">Previous</button>
          <button id="pdf-next">Next</button>
        </div>
        <div id="page-count-container">Page <div id="pdf-current-page"></div> of <div id="pdf-total-pages"></div></div>
      </div>
      <canvas width="400" ref={canvasRef} />
      <div id="text-layer" className="textLayer"></div>
      <div id="page-loader">Loading page ...</div>
    </div>
  </div>
}

export default PDFViewer;
