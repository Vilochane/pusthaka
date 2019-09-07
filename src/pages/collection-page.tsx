import React from "react";
import RouterProps from "../types/router-props";
import PDFViewer from "../components/pdf-viewer";

// eslint-disable-next-line no-unused-vars
function CollectionPage(props: RouterProps): JSX.Element {
  return <PDFViewer src="file:/home/vilochane/Projects/pusthaka/books/test3.pdf"/>;
}

export default CollectionPage;
