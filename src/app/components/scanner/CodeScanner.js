import dynamic from "next/dynamic";

const CodeScanner = dynamic(() => import("./Scanner"), { ssr: false });

export default CodeScanner;
