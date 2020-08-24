let address_map = require('./abi/address-map.json');
let mMarket_abi = require('./abi/moneyMarket-abi.json');
let erc_20_abi = require('./abi/erc-20-abi.json');

export const init_contract = (instance_web3, nettype, token, is_moneyMarket = false) => {
    return new Promise((resolve, reject) => {
        let contract = new instance_web3.eth.Contract(is_moneyMarket ? mMarket_abi : erc_20_abi, address_map[nettype][token]);
        resolve(contract);
    })
}

export const calc_Market_Size = (that, markets, cash, price, price_USDx) => {
    let marketSize_to_dollar = that.bn(markets.totalBorrows).add(that.bn(cash)).mul(that.bn(price)).div(that.bn(price_USDx));
    return marketSize_to_dollar.toString();
}

export const merge_data = (tar_arr, assign_arr) => {
    //this.state.CollateralAssets, data_arr_collateral
    const mergeArr = tar_arr.map((item, index) => {
        return Object.assign(item, assign_arr[index]);
    })
    return mergeArr;
}

export const format_bn = (numStr, decimals, decimalPlace = decimals) => {
    numStr = numStr.toLocaleString().replace(/,/g, '');
    // decimals = decimals.toString();

    // var str = (10 ** decimals).toLocaleString().replace(/,/g, '').slice(1);
    var str = Number(`1e+${decimals}`).toLocaleString().replace(/,/g, '').slice(1);

    var res = (numStr.length > decimals ?
        numStr.slice(0, numStr.length - decimals) + '.' + numStr.slice(numStr.length - decimals) :
        '0.' + str.slice(0, str.length - numStr.length) + numStr).replace(/(0+)$/g, "");

    res = res.slice(-1) === '.' ? res + '00' : res;

    if (decimalPlace === 0)
        return res.slice(0, res.indexOf('.'));

    var length = res.indexOf('.') + 1 + decimalPlace;
    return res.slice(0, length >= res.length ? res.length : length);
    // return res.slice(-1) == '.' ? res + '00' : res;
}

export const get_max_to_borrow = (that, account_values, collateralRatio, price, originationFee, cash) => {
    let max_borrow = that.bn(account_values[1]).mul(that.bn(10 ** 18)).div(that.bn(collateralRatio));
    let max_borrow_safe = max_borrow.mul(that.bn('8')).div(that.bn('10'));

    if (max_borrow.lte(that.bn(account_values[2]))) {
        return '0';
    }

    let t_liquidity = max_borrow.sub(that.bn(account_values[2]));
    let liquidity_bn = that.bn(t_liquidity).mul(that.bn('10').pow(that.bn('18')))
        .div(that.bn(price).mul(that.bn('10').pow(that.bn('18')).add(that.bn(originationFee))));

    let to_borrow_bn = liquidity_bn.lt(that.bn(cash)) ? liquidity_bn : that.bn(cash);

    return to_borrow_bn.toString();

    // if (max_borrow_safe.lte(that.bn(account_values[2]))) {
    //     return '0';
    // }
    // let t_liquidity_safe = max_borrow_safe.sub(that.bn(account_values[2]));
    // let liquidity_bn_safe = that.bn(t_liquidity_safe).mul(that.bn('10').pow(that.bn('18'))).div(that.bn(price).mul(that.bn('10').pow(that.bn('18')).add(that.bn(originationFee))));
    // let to_borrow_bn_safe = liquidity_bn_safe.lt(that.bn(cash)) ? liquidity_bn_safe : that.bn(cash);
}
