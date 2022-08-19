
import Button from '../../../components/UI/Button/Button';
import Style from './newPosition.module.scss';

const NewPosition = ()=>{
    return (
        <div className="mt-5">
            <div className={Style.topContainer}>
                <h5 className={`text-white ${Style.title}`}>ICHI-USDC LP </h5>
                <div className={Style.rightContainer}>
                    <div className={`${Style.rightSubContainer} mx-5`}>
                        <span className={`${Style.text1}`}>Pool Ratio</span>
                        <span className={`text-white  ${Style.text2}`}>70% ICHI / 30% USDC</span>
                    </div>
                    <div className={Style.rightSubContainer}>
                        <span className={`${Style.text1}`}>Pool APY</span>
                        <span className={`text-white  ${Style.text2} ${Style.flexEnd}`}>35%</span>
                    </div>
                </div>

            </div>
            <div className={`mt-5 ${Style.chooseContainer}`}>
                <div  className={` ${Style.chooseSubContainer}`}>

                </div>

            </div>
          <button className={`mt-4 ${Style.button}`}>Open Positon</button>
        </div>
    )

}
export default NewPosition;