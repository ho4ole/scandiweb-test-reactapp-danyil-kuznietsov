
const CurrencyLogo = (props) => {
    return <div>
        <span>{props.currentCurrency}</span>
        <img src={props.image}/>
    </div>
}


export default CurrencyLogo