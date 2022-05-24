import styles from './styles.module.css'

const Cat = ({ id, onClick }) => {
  return (
    <img
      className={styles.cat}
      alt={`Cat with id ${id}`}
      onClick={() => onClick(id)}
      src={`https://cataas.com/cat/${id}`}
    />
  );
}

export default Cat;

// https://cataas.com/cat/
