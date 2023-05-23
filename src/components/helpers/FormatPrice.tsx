const FormatPrice = (price: any) => {
  return (
    <div>
      {Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(price.price)}
    </div>
  );
};

export default FormatPrice;
