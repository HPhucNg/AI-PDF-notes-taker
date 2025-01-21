import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";


const pdfUrl = "https://tidy-llama-434.convex.cloud/api/storage/bf03f346-227a-42e5-84f8-8e8596255194"
export async function GET(req){

    //1. load the PDF File
    const response = await fetch(pdfUrl);
    const data = await response.blob();
    const loader = new WebPDFLoader(data);
    const docs = await loader.load();

    let pdfTextContent='';
    docs.forEach(doc=>{
        pdfTextContent = pdfTextContent+doc.pageContent;
    })

    //2.Text Split into smaller chunks
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 10,
        chunkOverlap: 1,
      });
    const output = await splitter.createDocuments([pdfTextContent]);

    let splitterList = [];
    output.forEach(doc=>{
        splitterList.push(doc.pageContent);
    })
      


    return NextResponse.json({result:splitterList})
}