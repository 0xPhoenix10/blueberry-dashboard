import Style from './yourPosition.module.scss'
const YourPosition = ({ handleClosepositionPopup, position }: any) => {
  const handleClick = (value: string) => {
    handleClosepositionPopup(value)
  }
  console.log("curPos?", position)

  let borrowingAmount = position.collateralSize - position.underlyingAmount;
  let borrowingRate = Number((borrowingAmount / position.collateralSize) * 100).toFixed(2);
  let leverageFactor = position.collateralSize / position.underlyingAmount;

  return (
    <div className={`mt-5 ${Style.container}`}>
      <div className="p-3">
        <div className={`${Style.rowContent} ${Style.headingRow}`}>
          <span>Your Collateral ($ Value)</span>
          <span className="text-right">${position.underlyingAmount} USDC</span>
        </div>
        <div className={Style.seprator}> </div>
        <div>
          <div className={Style.rowContent}>
            <span>Total Position Value</span>
            <span className="text-right">${position.collateralSize} USDC</span>
          </div>
          <div className={Style.rowContent}>
            <span>Borrowing</span>
            <span className="text-right">{borrowingAmount} USDC (${borrowingAmount})</span>
          </div>
          <div className={Style.rowContent}>
            <span>Borrow Rate</span>
            <span className="text-right">{borrowingRate}%</span>
          </div>
          <div className={Style.rowContent}>
            <span>Net APY</span>
            <span className="text-right">110%</span>
          </div>
        </div>
        <div className={Style.seprator}></div>
        <div>
          <div className={Style.rowContent}>
            <span>Leverage Factor</span>
            <span className="text-right">{leverageFactor}x</span>
          </div>
          <div className={Style.rowContent}>
            <span>ROI From Entry</span>
            <span className="text-right">$100</span>
          </div>
          <div className={Style.rowContent}>
            <span>ICHI Liquidation Price</span>
            <span className="text-right">$1.50</span>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <button className={`mt-4 ${Style.button}`} onClick={() => handleClick('close-position')}>
          Close Positon
        </button>
        <button className={`mt-4 ${Style.button}`} onClick={() => handleClick('edit-position')}>
          Edit Collateral
        </button>
      </div>
    </div>
  )
}
export default YourPosition
