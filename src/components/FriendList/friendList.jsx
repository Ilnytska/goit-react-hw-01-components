import PropTypes from 'prop-types';
import styles from './friendList.module.css';
import { FriendListItem } from 'components/FriendListItem/friendListItem';
export function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={styles.item}>
           <FriendListItem avatar={avatar} name={name}  isOnline={isOnline}
          />
          </li>
        );
      })}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
