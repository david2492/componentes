const QuoteBox = ({index, color}) => {
  return (
      <div className="Container">
        <i className="fa-solid fa-quote-left" style={{ color: color }}></i>
        <a style={{ color: color }}>{index}</a>
      </div>
  );
};

export default QuoteBox;