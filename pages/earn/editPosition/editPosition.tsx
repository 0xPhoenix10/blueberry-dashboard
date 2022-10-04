import Style from './editPosition.module.scss'
import { useState } from "react"
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material"

import { ethers } from 'ethers';

import spell_abi from '../../../contracts/abi/IchiSpellVault_abi.json';
import bank_abi from '../../../contracts/abi/BlueBerryBank_abi.json';
import sToken_abi from '../../../contracts/abi/SupplyToken_abi.json';

import { ICHI_VAULT_SPELL_ADDR, USDC_ADDR, WERC20_ADDR, BANK_ADDR } from '../../../contracts/constants';

// const EditPosition = ({ handleClose }) => {
const EditPosition = () => {
  const [collateral, setCollateral] = useState('Add');
  const handleCollateralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollateral((event.target as HTMLInputElement).value);
  };
  const [newAmount, setNewAmount] = useState("0");

  let { ethereum } = window;

  const handleClose = async () => {
    if (ethereum) {
      let provider = new ethers.providers.Web3Provider(ethereum);
      let signer = provider.getSigner();

      let bank_contract = new ethers.Contract(BANK_ADDR, bank_abi, signer);

      let spell_iface = new ethers.utils.Interface(spell_abi);

      // add collateral
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

      // // remove collateral
      // let token_contract = new ethers.Contract(USDC_ADDR, sToken_abi, signer);
      // const tx = await token_contract.approve(BANK_ADDR, ethers.utils.parseUnits('100', 18));
      // await tx.wait();

      // let tx1 = await bank_contract.execute(
      //   7,
      //   ICHI_VAULT_SPELL_ADDR,
      //   spell_iface.encodeFunctionData("withdraw", [
      //     USDC_ADDR,
      //     ethers.utils.parseUnits('100', 18),
      //     ethers.utils.parseUnits('0', 18),
      //     ethers.utils.parseUnits('0', 18),
      //     ethers.utils.parseUnits('0', 18)
      //   ])
      // );

      // await tx1.wait();
    }
  };

  return (
    <div className={`mt-5 ${Style.container}`}>
      <div className="">
        <div className={`${Style.rowContent} ${Style.headingRow}`}>
          <div className={Style.chooseContainer}>
            <label>Add/Remove Collateral</label>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={collateral}
                onChange={handleCollateralChange}
              >
                <FormControlLabel
                  value="Remove"
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
                  label={<span style={{ color: collateral == "Remove" ? "#fff" : "#8D97A0" }}>Remove</span>}
                />
                <input
                  type="number"
                  className={collateral == "Remove" ? "" : Style.inputDisabled}
                  onChange={(e: any) => { setNewAmount(e.target.value) }}
                  onClick={(e: any) => { setNewAmount(e.target?.value); setCollateral("Remove") }}
                />

                <FormControlLabel
                  value="Add"
                  color="secondary"
                  control={<Radio sx={{
                    color: '#fff',
                    marginLeft: '10px',
                    '&.Mui-checked': {
                      color: '#05A06B',
                      'svg:first-of-type': {
                        color: '#fff'
                      }
                    },
                  }} />}
                  label={<span style={{ color: collateral == "Add" ? "#fff" : "#8D97A0" }}>Add</span>}
                />
                <input
                  type="number"
                  className={collateral == "Add" ? "" : Style.inputDisabled}
                  onChange={(e: any) => { setNewAmount(e.target.value) }}
                  onClick={(e: any) => { setNewAmount(e.target?.value); setCollateral("Add") }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className={Style.seprator}> </div>
        <div>
          <div className={Style.rowContent}>
            <span>Total Position Value</span>
            <span className="text-right">$1,000</span>
          </div>
          <div className={Style.rowContent}>
            <span>New Collateral Value</span>
            <span className="text-right">{`$${newAmount}`}</span>
          </div>
        </div>
        <div className={Style.seprator}></div>
        <div>
          <div className={Style.rowContent}>
            <span>New Leverage Factor</span>
            <span className="text-right">2.5x</span>
          </div>
        </div>
      </div>
      <button className={`mt-4 ${Style.button}`} onClick={handleClose} >
        Confirm
      </button>
    </div>
  )
}
export default EditPosition
