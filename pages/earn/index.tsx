import type { NextPage } from 'next'
import Card from '../../components/UI/Card/Card'

const Earn: NextPage = () => {
  return (
    <Card className="">
       <div className="flex flex-row my-8 sm:block 2sm:block">
        <div className="basis-1/2 text-center px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg">
          <h1 className=''>Farming Description</h1>
          <h1 className=''>Farming Description Farming Description</h1>
        </div>
        <div className="basis-1/2 text-center px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg">
          <h1>TVL</h1>
          <h1>$981,312.51</h1>
        </div>
      </div>
      <div className="md:grid grid-cols-5 gap-4 my-8 px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg items-center sm:block">
        <div>
          <h1>My Positions</h1>
          <h1>Current Strategy</h1>
        </div>
        <div>
          <h1>Active</h1>
          <h1>Total Position</h1>
        </div>
        <div>
          <h1>Liguidated</h1>
          <h1>Debt Value</h1>
        </div>
        <div>
          <h1>Equity Value</h1>
        </div>
        <div>
          <h1>Health Bar</h1>
        </div>
      </div>
      <div className='my-8 px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg sm:block 1sm:block 2sm:hidden'>
        <table className="table-fixed text-left w-full">
          <thead>
            <tr>
              <th>All Strategies</th>
              <th>TVL</th>
              <th>Stablecoin Collateral Yield(@1x, at max lev)</th>
              <th>Token Collateral Yield(at max lev)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strategy 1</td>
              <td>$6132212</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Strategy 1</td>
              <td>$6132212</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Strategy 1</td>
              <td>$6132212</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Strategy 1</td>
              <td>$6132212</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
       </Card>
  )
}

export default Earn
