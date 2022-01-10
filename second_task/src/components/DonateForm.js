import Star from "../img/Star.svg";
import Fox from "../img/metamask.svg";
import Alert from "../img/alert-triangle.svg";
import Zefu from "../img/ZEFU.svg";
import Loader from "../img/Loader.gif";
import Success from "../img/success.svg";
import Tick from "../img/Tick.svg";
import Dino from "../img/dino.svg";
import Hi from "../img/hi.svg";
import ExternalLink from "../img/external-link.svg";
import { useState } from "react";

function DonateForm() {
  const [isConnected, setConnected] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [zefuBalance, setZefuBalance] = useState(0);
  const [zefuDonateCount, setZefuDonateCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [isDonated, setDonated] = useState(false);

  const ConnectionButton = () => {
    if (!isConnected && !isError && !isLoading) {
      return (
        <button
          onClick={() => {
            setTimeout(() => {
              setLoading(false);
              setError(true);
            }, 2000);
            setLoading(true);
          }}
          className="rounded-[8px] transition hover:ring shadow-lg border-[#EBEBEB] px-[25px]  border h-[46px] w-[239px] flex items-center justify-between"
        >
          <img alt="fox" src={Fox}></img>
          <h5 className="text-[16px] text-[#1D1D1D] font-['Inter'] font-bold">
            Connect Metamask
          </h5>
        </button>
      );
    } else if (!isConnected && isError && !isLoading) {
      return (
        <button
          onClick={() => {
            setTimeout(() => {
              setLoading(false);
              setError(false);
              setConnected(true);
              setZefuBalance(51456.43);
            }, 2000);
            setLoading(true);
          }}
          className="rounded-[8px] transition hover:ring shadow-lg border-[#FF991D] px-[25px]  border h-[46px] w-[239px] flex items-center justify-between"
        >
          <img src={Fox} alt="fox"></img>
          <h5 className="text-[16px] text-[#1D1D1D] font-['Inter'] font-bold">
            Connect Metamask
          </h5>
        </button>
      );
    } else if (!isConnected && isLoading) {
      return (
        <button className="rounded-[8px] transition hover:ring shadow-lg border-[#EBEBEB] px-[25px]  border h-[46px] w-[239px] flex items-center justify-between">
          <img src={Fox} alt="fox"></img>
          <h5 className="text-[16px] text-[#999999] font-['Inter'] font-bold">
            Connecting
          </h5>
          <img src={Loader} alt="fox"></img>
        </button>
      );
    } else {
      return (
        <button className="rounded-[8px] transition hover:ring shadow-lg border-[#EBEBEB] px-[25px]  border h-[46px] w-[239px] flex items-center justify-between">
          <img src={Fox} alt="fox"></img>
          <h5 className="text-[16px] text-[#1D1D1D] font-['Inter'] font-bold">
            0x124e...ed95
          </h5>
          <img src={Success} alt="fox"></img>
        </button>
      );
    }
  };

  if (!isDonated) {
    return (
      <div className="shadow-xl bg-white rounded-lg border min-h-[640px] w-[526px] border-[#E5E7EB]">
        <div className="flex justify-end pt-[16px] pr-[16px]">
          <button className="rounded-full border-[#A0A0A0] border h-[22px] w-[22px] flex justify-center items-start">
            <span className="leading-[16px] text-[#A0A0A0] text-[20px]">×</span>
          </button>
        </div>
        <div className="flex justify-center mt-[2px]">
          <img alt="star" src={Star}></img>
        </div>
        <div className="flex justify-center mt-[30px]">
          <h1 className="text-[26px] text-[#1D1D1D]  font-bold font-['Inter']">
            Donate the author
          </h1>
        </div>
        <div className="flex justify-center mt-[16px]">
          <span className="text-[14px] text-[#1D1D1D] font-['Inter']">
            An easy way to support and say thank you.
          </span>
        </div>
        <div className="flex justify-center mt-[16px]">
          <ConnectionButton />
        </div>
        <div
          className="flex justify-center items-center mt-[10px]"
          style={{ display: isError ? "flex" : "none" }}
        >
          <img src={Alert} alt="alert" className="self-start pr-[10px]"></img>
          <span className="text-[12px] leading-[18px] text-[#1D1D1D] font-['Inter'] font-medium text-center">
            Non-Ethereum browser detected. You should consider <br />
            trying MetaMask!
          </span>
        </div>
        <div className="flex justify-end mx-[60px] items-center mt-[60px]">
          <span
            className="font-['Inter']
          text-[12px]
          text-[#999999]"
          >
            Balance {zefuBalance} ZEFU
          </span>
        </div>
        <div className="flex justify-center mx-[60px] items-center mt-[10px]">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <span className="z-10 h-full leading-snug  text-center text-blueGray-300 absolute text-base items-center justify-center pl-3 py-3">
              <img alt="ZEFU logo" src={Zefu}></img>
            </span>
            <span className="z-10 h-full border-l leading-[20px] font-normal text-center text-[12px] text-[#999999] focus:text-[#171717] min-w-[120px] absolute bg-transparent rounded text-base items-center justify-center text-right right-[0px] pl-[10px] pr-3 py-3">
              $
              {zefuDonateCount > 0 ? (zefuDonateCount / 14).toFixed(2) : "0,00"}
            </span>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onBlur={(e) => {
                let pattern = /^\d*\.{0,1}\d{0,2}$/;
                let result = pattern.test(inputValue);
                if (result) {
                  let numValue = Number.parseFloat(inputValue);
                  if (Number.isNaN(numValue)) {
                    numValue = "";
                    setInputValue(numValue);
                    setZefuDonateCount(0);
                    return;
                  }
                  if (numValue > zefuBalance) numValue = zefuBalance;
                  if (numValue < 0) numValue = 0;
                  setInputValue(numValue.toString());
                  setZefuDonateCount(numValue);
                } else {
                  setZefuDonateCount(0);
                  setInputValue("0");
                }
              }}
              placeholder="0,00"
              className="px-3 py-3 text-[#999999] relative bg-white rounded focus:text-[#171717] text-[14px] border border-[#EBEBEB] outline-none focus:outline-none focus:ring w-full pl-10"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[20px]">
          <textarea
            placeholder="Say something nice..."
            value={commentValue}
            onChange={(e) => {
              setCommentValue(e.target.value);
            }}
            className="w-full
          h-[86px]
          mx-[60px]
          font-normal
          text-[#999999]
          bg-[#F5F5F5]
          border border-solid border-[#EBEBEB]
          font-['Inter']
          text-[14px]
          rounded
          transition
          px-[16px]
          py-[10px]
          focus:text-[#1D1D1D] resize-none focus:bg-white focus:border-blue-600 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex justify-around mx-[60px] items-center mb-[60px] mt-[30px]">
          <button
            className="bg-white text-[#1D1D1D] font-medium text-[16px] leading-[22px] rounded-[8px]  
        hover:outline-none hover:ring transition duration-150 ease-in-out w-[188px] h-[46px] border border-[#D4D4D4]"
          >
            <span>Cancel</span>
          </button>
          {isConnected && zefuDonateCount > 0 && commentValue.trim("") ? (
            <button
              onClick={() => {
                setDonated(true);
              }}
              className="bg-[#0065FF] text-white hover:ring font-medium text-[16px] leading-[22px] rounded-[8px] w-[188px] h-[46px]"
            >
              <span>Donate</span>
            </button>
          ) : (
            <button
              disabled
              className="bg-[#F5F5F5] text-[#999999] font-medium text-[16px] leading-[22px] rounded-[8px] w-[188px] h-[46px]"
            >
              <span>Donate</span>
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="shadow-xl bg-white rounded-lg border min-h-[640px] w-[526px] border-[#E5E7EB]">
        <div className="flex justify-end pt-[16px] pr-[16px]">
          <button className="rounded-full border-[#A0A0A0] border h-[22px] w-[22px] flex justify-center items-start">
            <span className="leading-[16px] text-[#A0A0A0] text-[20px]">×</span>
          </button>
        </div>
        <div className="flex justify-center mt-[2px]">
          <img alt="Success" src={Tick}></img>
        </div>
        <div className="flex justify-center mt-[30px]">
          <h1 className="text-[26px] text-center text-[#1D1D1D]  font-bold font-['Inter']">
            Your donation has been <br />
            successfully sent to the author
          </h1>
        </div>
        <div className="flex justify-center mt-[30px]">
          <div
            id="scroll-div"
            className="shadow-lg bg-white rounded-[18px] border mx-[60px] h-[280px] min-w-[400px] border-[#EBEBEB] overflow-y-scroll"
          >
            <div className="flex justify-start items-center mt-[20px]">
              <div className="flex shadow-lg justify-center mr-[17px] items-center ml-[20px] rounded-full h-[80px] w-[80px] bg-[#F1F2F6] border-2 solid border-white">
                <img alt="dino" src={Dino}></img>
              </div>
              <div>
                <div className="flex">
                  <span className="mr-[7px] text-[16px] text-[#1D1D1D] font-medium font-['Inter']">
                    Hi
                  </span>
                  <img alt="hi" src={Hi}></img>
                </div>
                <div className="flex mt-[10px]">
                  <span className="mr-[7px] text-[16px] text-[#1D1D1D] font-medium font-['Inter']">
                    i'm
                  </span>
                  <button className="w-[105px] h-[28px] flex justify-center items-center rounded-[8px] outline-none focus:outline-none bg-blue-700/10 hover:ring">
                    <span className="text-[14px] text-[#0065FF] font-medium mr-[5px] font-['Inter']">
                      @honeyy
                    </span>
                    <img alt="link" src={ExternalLink}></img>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[15px] mb-[10px] mx-[20px] relative">
              <div className="w-[20px] h-[20px] bg-[#F5F5F5] origin-center absolute left-[30px] top-[-2px] border solid border-[#EBEBEB] rotate-45"></div>
              <div className="bg-[#F5F5F5] border solid border-[#EBEBEB] z-10 rounded-[8px] px-[16px] py-[16px] w-full">
                <div>
                  <span className="text-['Inter'] text-[#999999] text-[14px]">
                    Donate
                  </span>
                </div>
                <div className="flex mt-[5px]">
                  <img className="mr-[5px]" src={Zefu}></img>
                  <span className="mr-[7px] text-['Inter'] text-[#1D1D1D] text-[16px]">
                    {zefuDonateCount.toFixed(2)}
                  </span>
                  <span className="text-['Inter'] text-[#999999] text-[16px]">
                    (${(zefuDonateCount / 14).toFixed(2)})
                  </span>
                </div>
                <div className="mt-[20px]">
                  <span className="text-['Inter'] text-[#999999] text-[14px]">
                    Message
                  </span>
                </div>
                <div>
                  <p className="break-words text-left text-['Inter'] text-[#1D1D1D] text-[16px]">
                    {commentValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around mx-[60px] items-center mb-[60px] mt-[30px]">
          <button
            className="bg-white text-[#1D1D1D] font-medium text-[16px] leading-[22px] rounded-[8px]  
        hover:outline-none hover:ring transition duration-150 ease-in-out w-[188px] h-[46px] border border-[#D4D4D4]"
          >
            <span>Send more</span>
          </button>
          <button className="bg-[#0065FF] text-white hover:ring font-medium text-[16px] leading-[22px] rounded-[8px] w-[188px] h-[46px]">
            <span>Okay</span>
          </button>
        </div>
      </div>
    );
  }
}

export default DonateForm;
