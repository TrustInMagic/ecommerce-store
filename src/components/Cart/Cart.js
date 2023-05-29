import styles from './Cart.module.css';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles['added-games']}>No games added</div>
      <div className={styles.footer}>
        <div className={styles.total}>Total: $0</div>
        <div className={styles.checkout}>Checkout</div>
      </div>
    </div>
  );
};

export default Cart;
