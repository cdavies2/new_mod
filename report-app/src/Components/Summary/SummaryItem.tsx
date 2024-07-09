import './summaryItem.css'
const SummaryItem=({
    itemName,
    itemValue,

}: {
    itemName: string,
    itemValue: number,
}) => {
    return (
        <article>
          <h3>{itemName}</h3>
          <span id="summary">
            {itemValue}
          </span>
        </article>
        
    );
};

export default SummaryItem;