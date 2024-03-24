import "./App.css";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";


function Apppdf() {
    return (
    <div className="app_div">
        <PDFDownloadLink document = {<PDFFile />} fileName = "Form">
        {({loading}) => loading ? ( 
        <button>Loading File...</button> ) : ( <button>Download</button>
        ) 
    }
      </PDFDownloadLink>
    </div>
    );
    };
    export default Apppdf;