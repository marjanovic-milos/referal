"use client";
import { Scanner } from "@yudiel/react-qr-scanner";

const CodeScanner = () => {
  return (
    <div>
      <Scanner
        onScan={(result) => console.log(result[0].rawValue)}
        onError={(error) => console.error(error)}
        styles={{
          container: { width: 300, borderRadius: 12 },
          video: { borderRadius: 12 },
        }}
        constraints={{ deviceId: undefined }}
      />
    </div>
  );
};

export default CodeScanner;
