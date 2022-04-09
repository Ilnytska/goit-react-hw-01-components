import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

export function FriendListItem ({ avatar, name, isOnline }) {
    return (
        <>
            <span className={`${isOnline ? styles.online : styles.offline}`}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </>
    );
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};