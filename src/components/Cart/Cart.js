import styles from './Cart.module.css';

const Cart = ({ cartVisible, closeCart, content, removeGame }) => {
  const totalPrice = content.reduce(
  // making sure to add numbers and not strings and slice each of them 
  // to remove the '$' sign before the price
    (total, game) => total + Number(game.price.slice(1, game.price.length)),
    0
  );

  return (
    <div
      className={`${styles.cart} ${
        cartVisible ? styles.visible : styles.invisible
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
            <div className={styles.price}>{game.price}</div>
            <div className={styles.x} onClick={() => removeGame(game)}>
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
