"use client";
import React from "react";
import QRCode from "react-qr-code";

const QRCodeLayout = ({ user }) => {
  return (
    <div>
      <QRCode
        value={user?.uid || "test"}
        size={256}
        fgColor="#1a1a2e" // dot color
        bgColor="transparent" // background
        level="M" // error correction: L | M | Q | H
        style={{ borderRadius: 8, padding: 16 }}
      />
    </div>
  );
};

export default QRCodeLayout;
