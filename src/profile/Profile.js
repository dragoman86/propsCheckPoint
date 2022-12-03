import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Profile(props) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{props.fullName}</Card.Title>
        <Card.Text>{props.bio}</Card.Text>
        <Card.Text>{props.profession}</Card.Text>
        {props.children}
        <Button onClick={()=>props.eventHandler(props.fullName)} variant="success">PROFILE</Button>
      </Card.Body>
    </Card>
  );
}

Profile.defaultProps = {
    fullName: "haven t a Name",
    bio: "bio 0"
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
  };

export default Profile;
