import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../types';

interface PersonLinkPropsType {
  person: Person,
}

export const PersonLink:React.FC<PersonLinkPropsType> = ({ person }) => (
  <Link
    to={`/people/${person.slug}`}
    className={classNames(
      { 'has-text-danger': person.sex === 'f' },
    )}
  >
    {person.name}
  </Link>
);
