import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  useAddress,
  useWalletProvider,
  useBalance,
} from "../../contexts/OnboardContext";
import { factoryAddress, factoryAbi } from "../../services/onboard/contract";
import styles from "./mint.module.css";
import mint_img from "../../assets/mint-img.png";
import mint_titulo from "../../assets/mint-titulo.png";
import WalletButton from "../WalletButton/WalletButton";

const Mint = () => {
  const address = useAddress();
  const balance = useBalance();
  const provider = useWalletProvider();
  const web3 = new Web3(provider);

  const [userBalance, setUserBalance] = useState(0);
  const [mintStatus, SetMintStatus] = useState("waiting");

  useEffect(() => {
    if (address) {
      if (balance) {
        const valueEth = web3.utils.fromWei(`${balance}`, "ether");
        const totalFixed = parseFloat(valueEth).toFixed(4);
        setUserBalance(totalFixed);
      }
    } else {
      setUserBalance(0);
    }
  }, [web3.utils, balance, address]);

  const handleMint = async () => {
    console.log("MINT!");
    try {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);

      const saleStarted = await myContract.methods
        .saleStarted()
        .call()
        .catch(function (error) {
          return false;
        });

      const publicSaleStarted = await myContract.methods
        .merkleEnabled()
        .call()
        .catch(function (error) {
          return false;
        });

      const price = await myContract.methods
        .price()
        .call()
        .catch(function (error) {
          return false;
        });

      console.log("Sale Started", saleStarted);
      console.log("Sale Started", publicSaleStarted);
      console.log("Price", price);

      const count = 1;

      const mintParams = {
        proof: ["0x0000000000000000000000000000000000000000"],
        leaf: "0x0000000000000000000000000000000000000000",
        count,
      };

      const total = parseInt(count) * parseFloat(price);
      // const totalFixed = parseFloat(total.toFixed(4));
      // const valueEth = web3.utils.toWei(`${totalFixed}`, 'ether');

      await myContract.methods
        .mint(mintParams.proof, mintParams.leaf, parseInt(mintParams.count))
        .send({ from: address, value: total })
        .once("transactionHash", function (hash) {
          // setUserConfirmation(`success`);
          // setHash(hash);
          SetMintStatus("userConfirmed");
          console.log("Transaction Hash", hash);
        })
        .once("receipt", function (receipt) {
          // setBlChainConfirmation(`success`);
          // setTimeout(() => {
          //   setSuccess(true);
          // }, 1000);}
          SetMintStatus("blockchainConfirmed");
          console.log("Transaction Confirmed", receipt);
        })
        .on("error", function (error, receipt) {
          // handleError(error);
          SetMintStatus("Error");
          console.log("Error", error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {address && (
        <div className={styles["contenedor"]} id="mint">
          <div className={styles["contenedor-img"]}>
            <img src={mint_titulo} alt="" />
            <img src={mint_img} alt="" />
          </div>

          <div className={styles["mint-contenedor"]}>
            <h1>How much do want Doggies</h1>
            <h2>
              Price per Dog <span>{}</span>
            </h2>
            <h3>
              Amount <span>0</span>
            </h3>
            <h4>Your Balance is {userBalance} eth</h4>

            <button
              disabled={!address ? true : false}
              onClick={handleMint}
              className={styles["btn"]}
            >
              Mint now
            </button>
          </div>
        </div>
      )}
      {!address && (
        <div className={styles["contenedor"]} id="mint">
          <div className={styles["mint-contenedor"]}>
            <h1 className={styles["connect-wallet"]}>connect wallet</h1>
            <WalletButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Mint;
