import React from "react";

const CryptoInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-gray-700 via-gray-800 to-gray-900 text-white px-6 lg:px-24 py-16">
      <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12">
        Cryptographic Algorithms
      </h1>
      <div className="space-y-12">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Advanced Encryption Standard (AES)</h2>
            <p className="text-gray-300">
              AES is one of the most secure encryption methods, used globally to protect sensitive data in applications like banking, healthcare, and military communications.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/400x250"
              alt="AES Encryption"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">RSA (Public Key Cryptography)</h2>
            <p className="text-gray-300">
              RSA is a widely-used asymmetric encryption algorithm essential for secure data exchange, digital signatures, and establishing trust in modern systems.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/400x250"
              alt="RSA Encryption"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Elliptic Curve Cryptography (ECC)</h2>
            <p className="text-gray-300">
              ECC provides strong security with smaller key sizes, making it ideal for mobile devices, IoT, and blockchain systems.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/400x250"
              alt="ECC Encryption"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoInfo;