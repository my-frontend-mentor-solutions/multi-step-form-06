import React, { useState } from 'react'
import Content01 from './Content01'
import Content02 from './Content02'
import Content03 from './Content03'
import Content04 from './Content04'
import Content05 from './Content05'
import { Routes, Route } from 'react-router-dom'

export default function ContentContainer() {

    const [selectedPlan, setSelectedPlan] = useState("");
    const [isYearlyBilling, setIsYearlyBilling] = useState(false);

    const [selectedAddon, setSelectedAddon] = useState([]);

    return (
        <div className='lg:flex-[7] lg:m-0 lg:my-5 lg:px-7 lg:p-0 lg:static lg:bg-transparent bg-white absolute top-[80px] w-auto h-auto m-4 rounded-lg py-5'>

            <Routes>
                <Route path={'/'} index element={<Content01 />} />

                <Route path={'/plans'} element={
                    <Content02
                        selectedPlan={selectedPlan}
                        setSelectedPlan={setSelectedPlan}
                        isYearlyBilling={isYearlyBilling}
                        setIsYearlyBilling={setIsYearlyBilling}
                    />
                } />

                <Route path={'/addons'} element={
                    <Content03
                        selectedAddon={selectedAddon}
                        setSelectedAddon={setSelectedAddon}
                        isYearlyBilling={isYearlyBilling}
                    />
                } />

                <Route path={'/summary'} element={
                    <Content04
                        selectedPlan={selectedPlan}
                        isYearlyBilling={isYearlyBilling}
                        selectedAddon={selectedAddon}
                    />
                } />
                <Route path={'/thankyou'} element={<Content05 />} />
            </Routes>

        </div>
    )
}