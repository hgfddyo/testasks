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
          <h5 className="text-[16px] text-[#1D1D1D] font-['Inter'] font-medium leading-[22px]">
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
          <h5 className="text-[16px] text-[#1D1D1D] font-['Inter'] font-medium leading-[22px]">
            Connect Metamask
          </h5>
        </button>
      );
    } else if (!isConnected && isLoading) {
      return (
        <button className="rounded-[8px] transition hover:ring shadow-lg border-[#EBEBEB] px-[25px]  border h-[46px] w-[239px] flex items-center justify-between">
          <img src={Fox} alt="fox"></img>
          <h5 className="text-[16px] text-[#999999] font-['Inter'] font-medium leading-[22px]">
            Connecting
          </h5>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="animate-spin"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.375 9C3.375 9.31106 3.123 9.5625 2.8125 9.5625H0.5625C0.252 9.5625 0 9.31106 0 9C0 8.68894 0.252 8.4375 0.5625 8.4375H2.8125C3.123 8.4375 3.375 8.68894 3.375 9ZM9 14.625C8.6895 14.625 8.4375 14.8764 8.4375 15.1875V17.4375C8.4375 17.7486 8.6895 18 9 18C9.3105 18 9.5625 17.7486 9.5625 17.4375V15.1875C9.5625 14.8764 9.3105 14.625 9 14.625ZM12.5809 14.0766C12.4251 13.8071 12.0814 13.7143 11.8125 13.8713C11.5431 14.0259 11.4508 14.3708 11.6066 14.6391L12.7316 16.5881C12.8908 16.8615 13.2367 16.947 13.5 16.7934C13.7694 16.6388 13.8617 16.2939 13.7059 16.0256L12.5809 14.0766ZM16.5881 12.7316L14.6391 11.6066C14.3696 11.4514 14.0259 11.5436 13.8713 11.8125C13.716 12.0819 13.8083 12.4256 14.0766 12.5809L16.0256 13.7059C16.2894 13.8589 16.6365 13.7723 16.7934 13.5C16.9492 13.2306 16.8576 12.8869 16.5881 12.7316ZM17.4375 8.4375H15.1875C14.877 8.4375 14.625 8.68894 14.625 9C14.625 9.31106 14.877 9.5625 15.1875 9.5625H17.4375C17.748 9.5625 18 9.31106 18 9C18 8.68894 17.748 8.4375 17.4375 8.4375ZM14.6391 6.39338L16.5881 5.26838C16.8576 5.11313 16.9492 4.76888 16.7934 4.5C16.6382 4.23056 16.2934 4.13775 16.0256 4.29412L14.0766 5.41912C13.8083 5.57437 13.716 5.91806 13.8713 6.1875C14.0287 6.46031 14.3764 6.54638 14.6391 6.39338ZM13.5 1.206C13.2306 1.05075 12.8869 1.14244 12.7316 1.41187L11.6066 3.36037C11.4514 3.62981 11.5436 3.9735 11.8125 4.12875C12.078 4.28288 12.4251 4.19456 12.5809 3.92287L13.7059 1.97437C13.8617 1.70494 13.7694 1.36125 13.5 1.206ZM9 0C8.6895 0 8.4375 0.251438 8.4375 0.5625V2.8125C8.4375 3.12356 8.6895 3.375 9 3.375C9.3105 3.375 9.5625 3.12356 9.5625 2.8125V0.5625C9.5625 0.251438 9.3105 0 9 0ZM5.26838 1.41187C5.11313 1.14187 4.76888 1.05019 4.5 1.206C4.23056 1.36125 4.13887 1.7055 4.29412 1.97437L5.41912 3.92287C5.57719 4.19569 5.92312 4.28231 6.1875 4.12875C6.45694 3.9735 6.54863 3.62925 6.39338 3.36037L5.26838 1.41187ZM3.92287 5.41912L1.97437 4.29412C1.70494 4.13831 1.36125 4.23112 1.206 4.5C1.05075 4.76944 1.143 5.11313 1.41187 5.26838L3.36037 6.39338C3.62531 6.54694 3.97125 6.45975 4.12875 6.1875C4.284 5.91806 4.19175 5.57437 3.92287 5.41912Z"
              fill="#999999"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button className="rounded-[8px] transition hover:ring shadow-lg border-[#EBEBEB] px-[25px]  border h-[46px] w-[239px] flex items-center justify-between">
          <img src={Fox} alt="fox"></img>
          <h5 className="text-[16px] text-[#1D1D1D] font-['Inter'] font-medium leading-[22px]">
            0x124e...ed95
          </h5>
          <img src={Success} alt="fox"></img>
        </button>
      );
    }
  };

  if (!isDonated) {
    return (
      <div className="shadow-xl bg-white rounded-lg border h-[640px] w-[526px] border-[#E5E7EB]">
        <div className="flex justify-end pt-[16px] pr-[16px]">
          <button className="rounded-full border-[#A0A0A0] border h-[22px] w-[22px] flex justify-center items-start">
            <span className="leading-[18px] text-[#A0A0A0] text-[20px] font-['Inter']">
              ×
            </span>
          </button>
        </div>
        <div className="flex justify-center mt-[4px]">
          <img alt="star" width="62px" src={Star}></img>
        </div>
        <div className="flex justify-center mt-[30px] mx-[60px]">
          <h1 className="text-[26px] text-[#1D1D1D] leading-[30px] font-bold font-['Inter']">
            Donate the author
          </h1>
        </div>
        <div className="flex justify-center mt-[16px] mx-[76px]">
          <span className="text-[14px] leading-[20px] font-normal text-[#1D1D1D] font-['Inter']">
            An easy way to support and say thank you.
          </span>
        </div>
        <div className="flex justify-center mt-[20px]">
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
        <div
          className={
            isError
              ? "flex justify-end mx-[60px] items-center mt-[14px]"
              : "flex justify-end mx-[60px] items-center mt-[60px]"
          }
        >
          <span
            className="font-['Inter']
          text-[12px]
          font-medium
          leading-[18px]
          text-[#999999]"
          >
            Balance {zefuBalance} ZEFU
          </span>
        </div>
        <div className="flex justify-center mx-[60px] h-[46px] items-center mt-[10px]">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <span className="z-10 h-full leading-snug  text-center text-blueGray-300 absolute text-base items-center justify-center pl-3 py-3">
              <img alt="ZEFU logo" src={Zefu}></img>
            </span>
            <span className="z-10  h-full font-['Inter'] border-l leading-[20px] font-normal text-center text-[14px] text-[#999999] focus:text-[#171717] min-w-[120px] absolute bg-transparent rounded text-base items-center justify-center text-right right-[0px] pl-[10px] pr-3 py-3">
              $
              {zefuDonateCount > 0 ? (zefuDonateCount / 14).toFixed(2) : "0,00"}
            </span>
            <input
              type="number"
              disabled={!isConnected}
              value={inputValue}
              onChange={(e) => {
                let value = e.target.value;
                if (value.includes("-")) {
                  setZefuDonateCount(0);
                  setInputValue("");
                  return;
                }
                let dotIndex = value.indexOf(".");
                let commaIndex = value.indexOf(",");
                if (dotIndex > -1 && value.length - dotIndex > 2) {
                  value = value.slice(0, dotIndex + 3);
                }
                if (commaIndex > -1 && value.length - commaIndex > 2) {
                  value = value.slice(0, commaIndex + 3);
                }
                let num = Number.parseFloat(value);
                if (Number.isNaN(num)) {
                  setInputValue("");
                  setZefuDonateCount(0);
                  return;
                }
                if (num > zefuBalance) {
                  num = zefuBalance;
                  value = zefuBalance.toString();
                }
                setZefuDonateCount(num);
                setInputValue(value);
              }}
              onBlur={(e) => {
                let num = Number.parseFloat(inputValue);
                if (Number.isNaN(num)) {
                  setInputValue("");
                  setZefuDonateCount(0);
                  return;
                }
                setZefuDonateCount(num);
                setInputValue(num > 0 ? num.toFixed(2) : "");
              }}
              placeholder="0,00"
              className="px-3 py-3 text-[#999999] font-['Inter'] placeholder:font-['Inter'] placeholder:font-[14px] relative bg-white rounded focus:text-[#171717] text-[14px] border border-[#EBEBEB] outline-none focus:outline-none focus:ring w-[406px] h-[46px] pl-10"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[20px]">
          <textarea
            placeholder="Say something nice..."
            value={commentValue}
            disabled={!isConnected}
            onChange={(e) => {
              setCommentValue(e.target.value);
            }}
            className="w-[406px]
          h-[86px]
          mx-[60px]
          font-normal
          text-[#999999]
          bg-[#F5F5F5]
          border border-solid border-[#EBEBEB]
          font-['Inter']
          placeholder:font-['Inter']
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
            className="bg-white text-[#1D1D1D] font-medium text-[16px] mr-[30px] leading-[22px] rounded-[8px]  
        hover:outline-none hover:ring transition duration-150 ease-in-out w-[188px] h-[46px] border border-[#D4D4D4]"
          >
            <span className="font-['Inter'] font-[16px] font-medium">
              Cancel
            </span>
          </button>
          {isConnected && zefuDonateCount > 0 && commentValue.trim("") ? (
            <button
              onClick={() => {
                setDonated(true);
              }}
              className="bg-[#0065FF] text-white hover:ring font-medium text-[16px] leading-[22px] rounded-[8px] w-[188px] h-[46px]"
            >
              <span className="font-['Inter'] font-[16px] font-medium text-[#FFFFFF]">
                Donate
              </span>
            </button>
          ) : (
            <button
              disabled
              className="bg-[#F5F5F5] text-[#999999] font-medium text-[16px] leading-[22px] rounded-[8px] w-[188px] h-[46px]"
            >
              <span className="font-['Inter']">Donate</span>
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="shadow-xl bg-white rounded-lg border h-[640px] w-[526px] border-[#E5E7EB]">
        <div className="flex justify-end pt-[16px] pr-[16px]">
          <button className="rounded-full border-[#A0A0A0] border h-[22px] w-[22px] flex justify-center items-start">
            <span className="leading-[18px] text-[#A0A0A0] text-[20px] font-['Inter']">
              ×
            </span>
          </button>
        </div>
        <div className="flex justify-center mt-[2px]">
          <img alt="Success" src={Tick}></img>
        </div>
        <div className="flex justify-center mt-[30px]">
          <h1 className="text-[26px] leading-[30px] text-center text-[#1D1D1D] font-bold font-['Inter']">
            Your donation has been <br />
            successfully sent to the author
          </h1>
        </div>
        <div className="flex justify-center mt-[30px]">
          <div
            id="scroll-div"
            className="shadow-lg bg-white rounded-[18px] border mx-[60px] h-[282px] w-[406px] border-[#EBEBEB] overflow-y-auto"
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
                  <span className="text-['Inter'] text-[#999999] font-medium text-[12px]">
                    Donate
                  </span>
                </div>
                <div className="flex mt-[5px]">
                  <img className="mr-[5px]" src={Zefu}></img>
                  <span className="mr-[7px] text-['Inter'] text-[#1D1D1D] font-medium text-[14px]">
                    {zefuDonateCount.toFixed(2)}
                  </span>
                  <span className="text-['Inter'] text-[#999999] font-normal text-[14px]">
                    (${(zefuDonateCount / 14).toFixed(2)})
                  </span>
                </div>
                <div className="mt-[16px]">
                  <span className="text-['Inter'] font-medium text-[#999999] text-[12px]">
                    Message
                  </span>
                </div>
                <div className="flex mt-[5px]">
                  <p className="break-words text-left text-['Inter'] text-[#1D1D1D] font-normal text-[14px]">
                    {commentValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around mx-[60px] items-center mb-[60px] mt-[30px]">
          <button
            className="bg-white text-[#1D1D1D] font-['Inter'] font-medium text-[16px] leading-[22px] rounded-[8px]  
        hover:outline-none hover:ring transition duration-150 ease-in-out w-[188px] h-[46px] border border-[#D4D4D4]"
          >
            <span>Send more</span>
          </button>
          <button
            onClick={() => {
              setConnected(false);
              setDonated(false);
              setInputValue("");
              setCommentValue("");
              setZefuBalance(0);
              setZefuDonateCount(0);
            }}
            className="bg-[#0065FF] font-['Inter'] text-white hover:ring font-medium text-[16px] leading-[22px] rounded-[8px] w-[188px] h-[46px]"
          >
            <span>Okay</span>
          </button>
        </div>
      </div>
    );
  }
}

export default DonateForm;
