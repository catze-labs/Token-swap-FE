declare global {
  interface Window {
    ethereum: import("ethers").providers.ExternalProvider;
    web3: import("web3");
  }
}

export const ethereum = window.ethereum;
