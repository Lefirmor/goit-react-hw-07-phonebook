import { List, Item } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderIco } from 'components/Loader/Loader';
import { contactsFetch } from 'redux/operations';
import {
  selectFilters,
  selectIContacts,
  selectIsLoading,
} from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(selectFilters);
  const contacts = useSelector(selectIContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsFetch());
  }, [dispatch]);

  const filteredContacts =
    contacts &&
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <>
      {isLoading && <LoaderIco />}
      <List>
        {filteredContacts &&
          filteredContacts.map(({ id, name, phone }) => (
            <Item key={id}>
              <ContactItem
                contactName={name}
                contactNumber={phone}
                itemId={id}
              />
            </Item>
          ))}
      </List>
    </>
  );
};

export default ContactList;
