interface IProps {
  name: 'instagram' | 'facebook' | 'visa' | 'mastercard' | 'amex' | 'underline';
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

function RenderIcon(props: IProps) {
  const { name, className } = props;

  switch (name) {
    case 'facebook':
      return (
        <img
          className={className}
          src="/icons/facebook.png"
          alt="facebook-logo"
        />
      );
    case 'instagram':
      return (
        <img
          className={className}
          src="/icons/instagram.png"
          alt="instagram-logo"
        />
      );
    case 'visa':
      return (
        <img className={className} src="/icons/visa.png" alt="visa-logo" />
      );
    case 'mastercard':
      return (
        <img
          className={className}
          src="/icons/mastercard.png"
          alt="mastercard-logo"
        />
      );
    case 'amex':
      return (
        <img className={className} src="/icons/amex.png" alt="amex-logo" />
      );
    case 'underline':
      return <img className={className} src="/icons/line.png" alt="line" />;
    default:
      return <div>no icon</div>;
  }
}

export default RenderIcon;
