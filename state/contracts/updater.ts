import { ethers, BigNumber, utils } from 'ethers';
import { useDispatch } from 'react-redux';
import { useBlockNumber } from '../application/hooks';

export default function Updater(): null {
	const dispatch = useDispatch();
	const blocknumber = useBlockNumber();

	return null;
}