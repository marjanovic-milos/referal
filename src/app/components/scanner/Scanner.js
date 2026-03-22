"use client";
import { Scanner } from "@yudiel/react-qr-scanner";

const CodeScanner = () => {
  const handleScan = (result) => {
    alert(result[0].rawValue);
  };
  return (
    <div>
      <Scanner
        onScan={(result) => handleScan(result)}
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
