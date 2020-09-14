const formatValue = (value: number): string => {
  const formatConfig = {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
  };
  const balanceValue = Intl.NumberFormat('pt-BR', formatConfig).format(value);
  return balanceValue;
};

export default formatValue;
