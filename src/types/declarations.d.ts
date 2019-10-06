declare module "@atlaskit/avatar";
declare module "@atlaskit/css-reset";
declare module "@atlaskit/drawer";
declare module "@atlaskit/logo";
declare module "@atlaskit/navigation";
declare module "@atlaskit/navigation-next";
declare module "@atlaskit/reduced-ui-pack";
declare module "@atlaskit/global-navigation";
declare module "@atlaskit/page";
declare module "pdfjs-dist/build/pdf";

declare module "viewer" {


  interface TextLayer {
    textLayerDiv: HTMLDivElement,
    pageIndex: number,
    viewport: any

  }

  function TextLayerBuilder(_ref: TextLayer): any;

  export = TextLayerBuilder;
  
}