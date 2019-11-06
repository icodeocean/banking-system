import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'tools';

import './style.scss';

const ProfileHeader = props => {
   const { firstName, lastName, streetAdds, postcode, city, email } = props.profile;
   let createdAt = props.profile.createdAt;

   createdAt = formatDate(createdAt, 'DD/MM/YYYY HH:mm');

   return (
      <header className="profile-header">
         <div className="profile-user-info">
            <h3>
               {firstName} {lastName}
            </h3>
            <p>
               {streetAdds}, {postcode} {city}
            </p>
            <p>
               <strong>Email: </strong> {email}
            </p>
            <p>
               <strong>Registered on</strong> {createdAt}
            </p>
         </div>

         <img src="https://placehold.it/200x200" alt={`${firstName} ${lastName} profile`} />
      </header>
   );
};

ProfileHeader.propTypes = {
   client: PropTypes.object
};

export default ProfileHeader;
