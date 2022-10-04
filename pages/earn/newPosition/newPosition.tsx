import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Style from "./newPosition.module.scss";
import LeverageSlider from "./LeverageSlider";
import { useState } from "react";
import CustomButton from "../../../components/UI/customButton/customButton";

import { ethers } from 'ethers';

import spell_abi from '../../../contracts/abi/IchiSpellVault_abi.json';
import bank_abi from '../../../contracts/abi/BlueBerryBank_abi.json';
import sToken_abi from '../../../contracts/abi/SupplyToken_abi.json';
import bToken_abi from '../../../contracts/abi/BaseToken_abi.json';
// import erc20_abi from '../../../contracts/abi/ERC20.json';

import { ICHI_VAULT_SPELL_ADDR, USDC_ADDR, ICHI_ADDR, BANK_ADDR } from '../../../contracts/constants';

const NewPosition = ({ handleButtonClick }: NewPositionProps) => {
  // const [type, setValue]=useState(0)
  // const handleType = () => {
  //     setValue('success')
  // }
  let { ethereum } = window;

  const [collateral, setCollateral] = useState('ICHI');
  const [usdcAmount, setUSDCAmount] = useState(0);
  const [ichiAmount, setICHIAmount] = useState(0);
  const [usdcLeverage, setUSDCLeverage] = useState(1.2);
  const [ichiLeverage, setICHILeverage] = useState(1.4);

  let nextPositionId = 0;
  let positions = [];

  const handleCollateralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollateral((event.target as HTMLInputElement).value);
  };

  const handleSuccessPosition = async () => {
    if (ethereum) {
      var amount = collateral == 'ICHI' ? ichiAmount : usdcAmount;
      var amount1 = amount * (collateral == 'ICHI' ? ichiLeverage : usdcLeverage);

      let provider = new ethers.providers.Web3Provider(ethereum);
      let signer = provider.getSigner();
      let signer_address = await signer.getAddress();

      let bank_contract = new ethers.Contract(BANK_ADDR, bank_abi, signer);

      let _nextPositionId = await bank_contract.nextPositionId();
      nextPositionId = _nextPositionId.toString();

      for (let i = 0; i < nextPositionId; i++) {
        bank_contract.positions(i.toString()).then((result) => {
          if (result[0] === signer_address) {
            var res = [...result, i];
            positions.push(res);
          }
        }).catch('error', console.error);
      }

      // let spell_iface = new ethers.utils.Interface(spell_abi);

      // let token_contract = collateral == 'ICHI' ? new ethers.Contract(ICHI_ADDR, bToken_abi, signer) : new ethers.Contract(USDC_ADDR, sToken_abi, signer);
      // const tx = await token_contract.approve(BANK_ADDR, ethers.utils.parseUnits(amount.toString(), 18));
      // await tx.wait();

      // let tx1 = await bank_contract.execute(
      //   0,
      //   ICHI_VAULT_SPELL_ADDR,
      //   spell_iface.encodeFunctionData("deposit", [
      //     collateral == 'ICHI' ? ICHI_ADDR : USDC_ADDR,
      //     ethers.utils.parseUnits(amount.toString(), 18),
      //     ethers.utils.parseUnits(amount1.toString(), 18)
      //   ])
      // );

      // await tx1.wait();
    }

    handleButtonClick?.("success-position");
  };

  return (
    <div className="mt-5">
      <div className={Style.topContainer}>
        <h5 className={`text-white ${Style.title}`}>ICHI-USDC LP </h5>
        <div className={Style.rightContainer}>
          <div className={`${Style.rightSubContainer} mx-5`}>
            <span className={`${Style.text1}`}>Pool Ratio</span>
            <span className={`text-white  ${Style.text2}`}>
              70% ICHI / 30% USDC
            </span>
          </div>
          <div className={Style.rightSubContainer}>
            <span className={`${Style.text1}`}>Pool APY</span>
            <span className={`text-white  ${Style.text2} ${Style.flexEnd}`}>
              35%
            </span>
          </div>
        </div>
      </div>
      <div className={`mt-5 ${Style.chooseContainer}`}>
        <div className={Style["chooseContainer-content"]}>
          <p className={Style.label}>Choose Collateral</p>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={collateral}
              onChange={handleCollateralChange}
            >
              <div>
                <FormControlLabel
                  value="ICHI"
                  color="secondary"
                  control={<Radio sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#05A06B',
                      'svg:first-of-type': {
                        color: '#fff'
                      }
                    },
                  }} />}
                  label={<p style={{ color: collateral == "ICHI" ? "#fff" : "#8D97A0", width: '42px' }}>ICHI</p>}
                />
                <input type="number" className={collateral == "ICHI" ? "" : Style.inputDisabled} onClick={() => setCollateral("ICHI")} onChange={(e) => setICHIAmount(parseInt(e.target.value))} />
              </div>

              <div className={Style.formControl}>
                <FormControlLabel
                  value="USDC"
                  color="secondary"
                  control={<Radio sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#05A06B',
                      'svg:first-of-type': {
                        color: '#fff'
                      }
                    },
                  }} />}
                  label={<p style={{ color: collateral == "USDC" ? "#fff" : "#8D97A0", width: '42px' }}>USDC</p>}
                />
                <input type="number" className={collateral == "USDC" ? "" : Style.inputDisabled} onClick={() => setCollateral("USDC")} onChange={(e) => setUSDCAmount(parseInt(e.target.value))} />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div className={` ${Style.chooseSubContainer}`}></div>

        <div className={Style["chooseContainer-content"]}>
          <p className={`${Style.label} ${Style.chooseSubContainerLabel}`}>
            Choose Leverage
          </p>
          {
            collateral == "USDC" ? (
              <LeverageSlider
                marks={[
                  {
                    value: 0,
                    label: '0x',
                  },
                  {
                    value: 1,
                    label: '1x',
                  },
                  {
                    value: 3,
                    label: '3x',
                  },
                ]}
                max={3}
                realMax={3}
                value={usdcLeverage}
                setValue={setUSDCLeverage}
              />
            ) : (
              <LeverageSlider
                marks={[
                  {
                    value: 0,
                    label: '0x',
                  },
                  {
                    value: 1,
                    label: '1x',
                  },
                  {
                    value: 1.5,
                    label: '1.5x',
                  },
                  {
                    value: 3,
                    label: '3x',
                  },
                ]}
                max={3}
                realMax={1.5}
                value={ichiLeverage}
                setValue={setICHILeverage}
              />
            )
          }
        </div>
      </div>

      <div className={Style.bottomContainer}>
        <ul className={Style.list}>
          <li>
            <span>Total Position Value</span>{" "}
            <p className={Style.bold}>$900 ($630 ICHI / $270 USDC)</p>
          </li>
          <li>
            <span>Borrowing</span>{" "}
            <span className={Style.bold}>900 USDC ($900)</span>
          </li>
          <li>
            <span>Borrow Rate</span> <span className={Style.bold}>5%</span>
          </li>
          <li>
            <span>Net APY</span> <span className={Style.bold}>90%</span>
          </li>
        </ul>

        <div className={Style.bottomContainerRight}>
          <h6>Expected Weekly Earnings</h6>
          <h3>$19.03</h3>
        </div>
      </div>
      <CustomButton
        title={"Open Positon"}
        buttonStyle={`mt-4 ${Style.button}`}
        handleButtonClick={handleSuccessPosition}
      />
    </div>
  );
};
export default NewPosition;

interface NewPositionProps {
  handleButtonClick: (value: string) => void;
}
