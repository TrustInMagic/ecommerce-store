import styles from './Cart.module.css';

const Cart = ({ isCartVisible, closeCart, content, removeFromCart }) => {
  const totalPrice = content.reduce(
    (total, game) => total + Number(game.price),
    0
  );

  return (
    <div
      className={`${styles.cart} ${
        isCartVisible ? styles.visible : styles.invisible
      }`}
    >
      <div className={styles.header}>
        <div className={styles['added-games']}>No games added</div>
        <div className={styles.x} onClick={closeCart}>
          ✖
        </div>
      </div>
      <div className={styles.content}>
        {content.map((game) => (
          <div className={styles.game} key={game.name}>
            <div className={styles.name}>{game.name}</div>
            <div className={styles.price}>${game.price}</div>
            <div className={styles.x} onClick={() => removeFromCart(game)}>
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
