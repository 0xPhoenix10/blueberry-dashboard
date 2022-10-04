interface DepositModalProps {
  tokenName: string,
  handleButtonClick: (value: string) => void,
}

import Button from "../../../components/UI/Button/Button";
import Style from "./depositModal.module.scss";
import { useState } from "react";
import CustomButton from "../../../components/UI/customButton/customButton";

import { ethers } from 'ethers';

import spell_abi from '../../../contracts/abi/IchiSpellVault_abi.json';
import bank_abi from '../../../contracts/abi/BlueBerryBank_abi.json';
import sToken_abi from '../../../contracts/abi/SupplyToken_abi.json';

import { ICHI_VAULT_SPELL_ADDR, USDC_ADDR, ICHI_ADDR, BANK_ADDR } from '../../../contracts/constants';

const DepositModal = ({ tokenName, handleButtonClick }: DepositModalProps) => {
  // const [type, setValue]=useState(0)
  // const handleType = () => {
  //     setValue('success')
  // }
  let { ethereum } = window;

  const [collateral, setCollateral] = useState('ICHI');
  const handleCollateralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollateral((event.target as HTMLInputElement).value);
  };

  const handleSuccessPosition = async () => {
    if (ethereum) {
      let provider = new ethers.providers.Web3Provider(ethereum);
      let signer = provider.getSigner();

      let bank_contract = new ethers.Contract(BANK_ADDR, bank_abi, signer);

      let spell_iface = new ethers.utils.Interface(spell_abi);

      let token_contract = new ethers.Contract(USDC_ADDR, sToken_abi, signer);
      const tx = await token_contract.approve(BANK_ADDR, ethers.utils.parseUnits('100', 18));
      await tx.wait();

      let tx1 = await bank_contract.execute(
        7,
        ICHI_VAULT_SPELL_ADDR,
        spell_iface.encodeFunctionData("deposit", [
          USDC_ADDR,
          ethers.utils.parseUnits('100', 18),
          ethers.utils.parseUnits('300', 18)
        ])
      );

      await tx1.wait();
    }

    handleButtonClick?.("success-position");
  };

  return (
    <div className="mt-5">
      <div className={`mt-5 ${Style.chooseContainer}`}>
        <div className={Style["chooseContainer-content"]}>
          <label>Input Amount</label>
          <input type="text" disabled={collateral == "ICHI" ? false : true} className={collateral == "ICHI" ? "" : Style.inputDisabled} />
          <span className={Style.tokenLabel}>{tokenName}</span>
        </div>

      </div>

      <div className={Style.bottomContainer}>
        <ul className={Style.list}>
          <li>
            <span>Net APY</span>{" "}
            <span className={Style.bold}>90%</span>
          </li>
        </ul>

        <div className={Style.bottomContainerRight}>
          <h6>Expected Weekly Earnings</h6>
          <h3>$19.03</h3>
        </div>
      </div>
      <CustomButton
        title={"Deposit"}
        buttonStyle={`mt-4 ${Style.button}`}
        handleButtonClick={handleSuccessPosition}
      />
    </div>
  );
};
export default DepositModal;