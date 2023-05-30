import styles from './Cart.module.css';

const Cart = ({ isCartVisible, closeCart, content, removeFromCart }) => {
  const totalPrice = content.reduce(
    (total, game) => total + Number(game.price),
    0
  );

  return (
    <div
      data-testid='cart-test'
      className={`${styles.cart} ${
        isCartVisible ? styles.visible : styles.invisible
      }`}
    >
      <div className={styles.header}>
        <div className={styles['added-games']}>
          {content.length === 0
            ? 'No games yet'
            : content.length === 1
            ? `${content.length} game`
            : `${content.length} games`}
        </div>
        <div
          className={styles.x}
          onClick={closeCart}
          data-testid='close-cart-test'
        >
          ✖
        </div>
      </div>
      <div className={styles.content}>
        {content.map((game, idx) => (
          <div className={styles.game} key={game.name} data-testid='cart-item'>
            <div className={styles.name} data-testid={`item-name-${idx}`}>
              {game.name}
            </div>
            <div className={styles.price} data-testid={`item-price-${idx}`}>
              ${game.price}
            </div>
            <div
              className={styles.x}
              data-testid={`remove-item-${idx}`}
              onClick={() => removeFromCart(game)}
            >
              ✕
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.total}>Total: ${totalPrice}</div>
        <div className={styles.checkout}>Checkout ➔</div>
      </div>
    </div>
  );
};

export default Cart;
