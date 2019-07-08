import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../contexts/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { id, name, email, phone, type } = contact;
  const { deleteContact } = contactContext;
  const onDelete = () => {
    deleteContact(id);
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'> {email}</i>
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'> {phone}</i>
          </li>
        )}
      </ul>
      <p>
        <button className='btn-dark btn-sm'>Edit</button>
        <button className='btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.prototype = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
