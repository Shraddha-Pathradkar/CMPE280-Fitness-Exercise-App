import React from "react";
import ReactDOM from "react-dom";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";


function Plans() {
    return (
        <div style={{ marginTop: "200px" }}>

            <PricingTable highlightColor="#FF8A8A" >
                <PricingSlot buttonText="CONFIRM" title="FREE" priceText="$0/month">
                    <PricingDetail> Watch Free Content </PricingDetail>
                    <PricingDetail> Hundreds of exercises</PricingDetail>
                    <PricingDetail> Hundres of exercise gifs</PricingDetail>
                </PricingSlot>
                <PricingSlot buttonText="CONFIRM" title="Prime" priceText="$4/month">
                    <PricingDetail> Everything in FREE + </PricingDetail>
                    <PricingDetail> Hundreds of exercises </PricingDetail>
                    <PricingDetail> Hundres of exercise gifs</PricingDetail>
                    <PricingDetail>
                        {" "}
                        Get suitable diet plans
                    </PricingDetail>
                    <PricingDetail> </PricingDetail>
                </PricingSlot>
                <PricingSlot buttonText="CONFIRM" title="VIP" priceText="$6/month">
                    <PricingDetail> Hundreds of exercises + </PricingDetail>
                    <PricingDetail>  Premium Hundres of exercise gifs </PricingDetail>
                    <PricingDetail>
                        {" "}
                        Get a personal trainer + diet plans
                    </PricingDetail>
                </PricingSlot>
            </PricingTable>
        </div>

    );
}

export default Plans
