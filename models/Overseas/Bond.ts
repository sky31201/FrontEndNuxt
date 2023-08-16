export default interface Bond {

    /**
     * ID
     */
    id: string

    /**
     * 名稱
     */
    symbolName: string

    /**
     * 代號
     */
    symbol: string

    /**
     * 到期日
     */
    dueDate: string

    /**
     * 票面利率
     */
    couponRate: string

    /**
     * 配息類型
     */
    dividendType: string

    /**
     * 評估貨幣
     */
    valuationCurrency: string

    /**
     * 債券類型
     */
    bondType: string

    /**
     * 參考購買價格
     */
    referencePurchasePrice: string

    /**
     * 報價日期
     */
    quoteDate: string

    /**
     * 發行機構
     */
    issuingInstitution: string

    /**
     * 參考到期收益率
     */
    referenceYieldToMaturity: string

    /**
     * 參考贖回收益率
     */
    referenceYieldToCall: string

    /**
     * 是否需要 PI
     */
    needPI: string

    /**
     * 產品風險等級
     */
    productRiskLevel: string

    /**
     * 剩餘期限
     */
    remainingTenure: string

    /**
     * 下次配息日
     */
    nextAllotmentDate: string

    /**
     * 註冊國家
     */
    registeredCountry: string

    /**
     * 發行公司產業別
     */
    issuingCompanyIndustry: string

    /**
     * 是否可贖回
     */
    isCallable: string

    /**
     * 下次贖回日期
     */
    nextCallDate: string


}