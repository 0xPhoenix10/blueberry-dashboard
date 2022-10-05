import Style from "./closePosition.module.scss";
const ClosePosition = ({ handleClose, position }) => {
  return (
    <div className={`mt-5 ${Style.container}`}>
      <div className="p-3">
        <div className={`${Style.rowContent} ${Style.headingRow}`}>
          <span>Receive</span>
          <div className="flex">
            <div className="text-right">
              <div className={Style.smallText}>Collateral</div>
              <div className={Style.text1}>
                {" "}
                {position.underlyingAmount} USDC
              </div>
            </div>
            <div className="text-right">
              <div className={Style.smallText}>Profit</div>
              <div className={Style.text1}> 0 USDC</div>
            </div>
            <div className="text-right">
              <div className={Style.smallText}>Total</div>
              <div className={Style.text1}> 0 USDC</div>
            </div>
          </div>
        </div>
        <div className={Style.seprator}> </div>
        <div>
          <div className={Style.rowContent}>
            <span>Total Position Value</span>
            <span className="text-right">${position.collateralSize}</span>
          </div>
          <div className={Style.rowContent}>
            <span>Returning</span>
            <span className="text-right">900 USDC ($900)</span>
          </div>
        </div>
        <div className={Style.seprator}></div>
        <div className={`${Style.rowContent} ${Style.headingRow}`}>
          <span>ROI From Entry</span>
          <span className="text-right">$100 (+33%)</span>
        </div>
      </div>

      <button className={`mt-4 ${Style.button}`} onClick={handleClose}>
        Close Positon
      </button>
    </div>
  );
};
export default ClosePosition;
