
export default interface FindFilterParam {

    /**
     * 關鍵字
     */
    keyword: string | null;

    /**
     * 投資人限制
     */
    investorRestriction: string | null;

    /**
     * 最低交易面額
     */
    minTradeAmount: string | null;

    /**
     * 剩餘年期
     */
    remainingTenure: string | null;

    /**
     * 類型
     */
    type: string | null;

    /**
     * 配息類型
     */
    dividendType: string | null;

    /**
     * 計價幣別
     */
    valuationCurrency: string | null;

    /**
     * 票面利率
     */
    couponRate: string | null;

    /**
     * 到期殖利率
     */
    maturityYield: string | null;

    /**
     * 贖回收益率
     */
    redemptionYield: string | null;

    /**
     * 參考申購價
     */
    referenceSubscriptionPrice: string | null;
}